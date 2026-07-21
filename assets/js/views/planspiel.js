/* =========================================================================
   VIEW: Planspiel-Engine — verzweigte Führungssimulation
   Live-Meter (Menschenrettung, Sicherheit, Taktik), Entscheidungen,
   sofortiges Feedback und Abschlussauswertung mit Führungsbericht.
   ========================================================================= */
import { PLANSPIELE, PLANSPIEL_BY_ID } from '../data/planspiele.js';
import { icon } from '../data/icons.js';
import { savePlanspielResult, logActivity, getState } from '../state.js';
import { esc, fmtDuration, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';
import { sceneSVG } from './scene-art.js';

let play = null; // { id, nodeId, meters, path:[{nodeId,decisionIdx,kind}], finished }

const METERS = {
  rettung:    { label: 'Menschenrettung', color: '#2e9e5b', icon: 'heart' },
  sicherheit: { label: 'Eigensicherung',  color: '#1e5fa8', icon: 'shield' },
  taktik:     { label: 'Taktik & Führung', color: '#e67e22', icon: 'compass' },
};

export function renderPlanspielList() {
  const s = getState();
  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Planspiele für Führungskräfte</h1>
      <p class="muted">Trainiere Führungsentscheidungen in realistischen Einsatzszenarien – nach dem Führungsvorgang der FwDV 100. Jede Entscheidung zählt.</p>
    </div>
    <div class="module-grid">
      ${PLANSPIELE.map(p => {
        const played = (s.planspielResults[p.id] || [])[0];
        return `<article class="card card--interactive mcard">
          <div class="mcard__banner" style="background:linear-gradient(135deg, ${p.color}, ${shade(p.color,-28)});height:120px;padding:0">
            ${sceneSVG(p.nodes[p.start]?.art || p.id, { mini: true })}
            <span class="mcard__code" style="opacity:.7">${icon('game').replace('<svg ','<svg style="width:26px;height:26px" ')}</span>
          </div>
          <div class="mcard__body">
            <div class="between"><span class="mcard__cat">${esc(p.role)}</span><span class="badge badge--amber">${esc(p.difficulty)}</span></div>
            <h3>${esc(p.title)}</h3>
            <p class="mcard__desc">${esc(p.briefing.slice(0, 130))}…</p>
            <div class="mcard__meta">
              <span>${icon('clock').replace('<svg ','<svg style="width:14px;height:14px" ')} ~${fmtDuration(p.duration)}</span>
              <span>${icon('users').replace('<svg ','<svg style="width:14px;height:14px" ')} ${esc(p.role)}</span>
            </div>
            ${played ? `<div class="callout callout--ok" style="margin:0;padding:8px 12px"><b>Zuletzt: ${played.rating}/100</b> · ${gradeLabel(played.rating)}</div>` : ''}
            <a class="btn btn--primary btn--block mcard__foot" href="#/planspiel/${p.id}">${icon('play')} ${played ? 'Erneut spielen' : 'Szenario starten'}</a>
          </div>
        </article>`;
      }).join('')}
    </div>
  </div>`;
}

export function renderPlanspiel(id) {
  const p = PLANSPIEL_BY_ID[id];
  if (!p) return notFound();

  if (!play || play.id !== id) return briefing(p);
  if (play.finished) return debrief(p);
  return scene(p);
}

function briefing(p) {
  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/planspiele">Planspiele</a><span class="sep">/</span><span>Briefing</span></div>
    <div class="planspiel-stage">
      <div class="card" style="overflow:hidden">
        <div style="position:relative">${sceneSVG(p.nodes[p.start]?.art || p.id, {})}
          <div style="position:absolute;left:0;right:0;bottom:0;padding:24px;background:linear-gradient(transparent, rgba(10,13,18,.92))">
            <span class="badge badge--amber">${esc(p.difficulty)} · ${esc(p.role)}</span>
            <h1 style="color:#fff;margin:.3em 0 0">${esc(p.title)}</h1>
          </div>
        </div>
        <div class="card--pad stack">
          <div class="callout callout--danger" style="margin:0">
            <div class="callout__t">${icon('flag').replace('<svg ','<svg style="width:18px;height:18px" ')} Einsatzauftrag</div>
            <p>${esc(p.briefing)}</p>
          </div>
          <div>
            <b>So funktioniert's:</b>
            <ul class="prose keyfacts" style="margin-top:10px">
              <li>Du triffst Führungsentscheidungen an mehreren Entscheidungspunkten.</li>
              <li>Drei Bewertungsdimensionen laufen live mit: Menschenrettung, Eigensicherung, Taktik.</li>
              <li>Nach jeder Entscheidung erhältst du fachliches Feedback – lerne aus dem Verlauf.</li>
              <li>Am Ende bekommst du eine Gesamtbewertung und einen Führungsbericht.</li>
            </ul>
          </div>
          <button class="btn btn--primary btn--lg" id="startPlay" data-id="${p.id}">${icon('play')} Einsatz beginnen</button>
        </div>
      </div>
    </div>
  </div>`;
}

function scene(p) {
  const node = p.nodes[play.nodeId];
  const lastFeedback = play._feedback;

  return `
  <div class="view fade-up">
    <div class="planspiel-stage">
      <div class="ps-meters">
        ${Object.entries(METERS).map(([k, meta]) => {
          const v = clamp(play.meters[k]);
          return `<div class="ps-meter">
            <span>${meta.label}<b>${v}</b></span>
            <div class="progress" style="margin-top:4px"><i style="width:${v}%;background:${meta.color}"></i></div>
          </div>`;
        }).join('')}
      </div>

      <div class="ps-scene">
        ${sceneSVG(node.art || p.nodes[p.start]?.art || p.id, {})}
        ${node.time ? `<div class="ps-clock">${icon('clock').replace('<svg ','<svg style="width:15px;height:15px" ')} ${esc(node.time)}</div>` : ''}
      </div>

      ${lastFeedback ? `<div class="ps-feedback ${lastFeedback.kind === 'good' ? 'good' : lastFeedback.kind === 'bad' ? 'bad' : 'mid'} pop">
        <b>${lastFeedback.kind === 'good' ? '✔ Gute Entscheidung' : lastFeedback.kind === 'bad' ? '✕ Kritisch' : '~ Vertretbar'}</b>
        <p style="margin:.4em 0 0">${esc(lastFeedback.text)}</p>
      </div>` : ''}

      <div class="card card--pad" style="margin-top:16px">
        <div class="badge badge--red badge--dot" style="margin-bottom:10px">Deine Entscheidung</div>
        <p class="ps-situation">${esc(node.situation)}</p>
        <div class="ps-decisions">
          ${node.decisions.map((d, i) => `<button class="ps-decision" data-dec="${i}">
            <span class="ps-decision__k">${String.fromCharCode(65 + i)}</span>
            <span>${esc(d.text)}</span>
          </button>`).join('')}
        </div>
      </div>
      <p class="subtle center" style="font-size:.82rem;margin-top:14px">Entscheidungspunkt ${play.path.length + 1}</p>
    </div>
  </div>`;
}

function debrief(p) {
  const rating = overallRating();
  const label = gradeLabel(rating);
  const passed = rating >= 60;

  return `
  <div class="view fade-up">
    <div class="planspiel-stage">
      <div class="card card--pad result-hero">
        <div class="ring result-ring" style="--p:${rating};${passed ? '' : '--fw-red:var(--warn)'}">
          <div style="text-align:center"><b>${rating}</b><small>von 100</small></div>
        </div>
        <h1>Einsatz beendet – ${esc(label)}</h1>
        <p class="muted">${passed ? 'Du hast den Einsatz insgesamt professionell geführt.' : 'Es gab kritische Entscheidungen – analysiere den Bericht und führe den Einsatz erneut.'}</p>

        <div class="ps-meters" style="max-width:560px;margin:24px auto 0">
          ${Object.entries(METERS).map(([k, meta]) => {
            const v = clamp(play.meters[k]);
            return `<div class="ps-meter"><span>${meta.label}<b>${v}%</b></span><div class="progress" style="margin-top:4px"><i style="width:${v}%;background:${meta.color}"></i></div></div>`;
          }).join('')}
        </div>

        <div class="flex gap-sm" style="justify-content:center;margin-top:24px">
          <button class="btn btn--primary" id="replayPlay" data-id="${p.id}">${icon('refresh')} Einsatz wiederholen</button>
          <a class="btn btn--outline" href="#/planspiele">Weitere Planspiele</a>
        </div>
      </div>

      <div class="card card--pad" style="margin-top:20px">
        <h3 style="margin-bottom:14px">${icon('book').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Führungsbericht – deine Entscheidungen</h3>
        <div class="path">
          ${play.path.map((step, i) => {
            const node = p.nodes[step.nodeId];
            const dec = node.decisions[step.decisionIdx];
            const cls = step.kind === 'good' ? 'done' : step.kind === 'bad' ? '' : 'current';
            return `<div class="path__node ${cls}">
              <b>Entscheidung ${i + 1}${node.time ? ' · ' + esc(node.time) : ''}</b>
              <p class="muted" style="margin:.2em 0 .3em">„${esc(dec.text)}"</p>
              <div class="callout ${step.kind === 'good' ? 'callout--ok' : step.kind === 'bad' ? 'callout--danger' : 'callout--warn'}" style="margin:0">${esc(dec.feedback)}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

/* --------------- Bewertung --------------- */
function clamp(v) { return Math.max(0, Math.min(100, Math.round(v))); }
function overallRating() {
  const m = play.meters;
  // gewichteter Mittelwert – Menschenrettung & Sicherheit höher gewichtet
  const r = (clamp(m.rettung) * 0.4 + clamp(m.sicherheit) * 0.35 + clamp(m.taktik) * 0.25);
  return clamp(r);
}
function gradeLabel(r) {
  if (r >= 85) return 'Vorbildliche Führung';
  if (r >= 70) return 'Souverän geführt';
  if (r >= 60) return 'Solide';
  if (r >= 45) return 'Ausbaufähig';
  return 'Kritischer Verlauf';
}
function shade(hex, p) {
  const n = parseInt(hex.slice(1), 16);
  let r = Math.max(0, Math.min(255, (n >> 16) + p));
  let g = Math.max(0, Math.min(255, ((n >> 8) & 255) + p));
  let b = Math.max(0, Math.min(255, (n & 255) + p));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* --------------- Steuerung --------------- */
export function startPlay(id) {
  play = { id, nodeId: PLANSPIEL_BY_ID[id].start, meters: { rettung: 50, sicherheit: 50, taktik: 50 }, path: [], finished: false, _feedback: null };
}

export function bindPlanspiel(root, rerender) {
  const start = root.querySelector('#startPlay');
  if (start) start.addEventListener('click', () => { startPlay(start.dataset.id); rerender(); });

  const replay = root.querySelector('#replayPlay');
  if (replay) replay.addEventListener('click', () => { startPlay(replay.dataset.id); rerender(); });

  if (!play || play.finished) return;
  const p = PLANSPIEL_BY_ID[play.id];
  const node = p.nodes[play.nodeId];

  root.querySelectorAll('.ps-decision').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.dec;
      const dec = node.decisions[idx];
      // Effekte anwenden
      for (const [k, v] of Object.entries(dec.effects || {})) {
        play.meters[k] = clamp((play.meters[k] ?? 50) + v * 8);
      }
      play.path.push({ nodeId: play.nodeId, decisionIdx: idx, kind: dec.kind });
      play._feedback = { kind: dec.kind, text: dec.feedback };
      const nextNode = p.nodes[dec.next];
      if (!nextNode || nextNode.terminal) {
        play.finished = true;
        const rating = overallRating();
        savePlanspielResult(p.id, { rating, meters: { ...play.meters }, steps: play.path.length });
        logActivity('planspiel', p.id, { title: p.title + ' · ' + rating + '/100' });
        if (rating >= 70) { confetti(); toast(`Einsatz geführt: ${rating}/100! +40 XP`, 'star'); }
        else toast(`Einsatz beendet: ${rating}/100. +40 XP`, 'bolt');
      } else {
        play.nodeId = dec.next;
      }
      rerender();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

export function resetPlanspielSession() { play = null; }
