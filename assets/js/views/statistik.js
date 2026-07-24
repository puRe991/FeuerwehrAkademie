/* =========================================================================
   VIEW: Statistik — persönliche Lern-Auswertung aus den getrackten Daten.
   Prüfungs-Score-Verlauf (Linie), Beherrschung je Kategorie (Balken),
   Aktivitäts-Heatmap (Kalender) und Stärken/Schwächen.
   Diagramme als reines Inline-SVG (offline-fähig, theme-aware). Achsen/Text
   nutzen currentColor, Datenfarben sind in Hell & Dunkel tragfähig.
   ========================================================================= */
import { MODULES, MODULE_BY_ID, CATEGORIES, LESSON_COUNT } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam } from '../state.js';
import { esc, fmtDate } from '../utils.js';

const BLUE = '#1e5fa8';
/* Sequenzieller Rot-Verlauf für die Heatmap (hell → dunkel). */
const HEAT = ['#f6c6c9', '#e88b90', '#d8474e', '#b81c23', '#8c1319'];

/* --------------------------- Datensammlung --------------------------- */
function allExamResults() {
  const s = getState();
  const out = [];
  for (const [id, list] of Object.entries(s.examResults || {})) {
    const title = MODULE_BY_ID[id]?.title || 'Abschlussprüfung';
    list.forEach(r => out.push({ ...r, id, title, ts: new Date(r.date).getTime() }));
  }
  return out.sort((a, b) => a.ts - b.ts);
}

function activityByDay() {
  const s = getState();
  const map = new Map();
  const add = (iso) => { if (!iso) return; const d = iso.slice(0, 10); map.set(d, (map.get(d) || 0) + 1); };
  (s.activity || []).forEach(a => add(a.date));
  Object.values(s.examResults || {}).forEach(list => list.forEach(r => add(r.date)));
  Object.values(s.planspielResults || {}).forEach(list => list.forEach(r => add(r.date)));
  return map;
}

/* --------------------------- SVG-Diagramme --------------------------- */
function lineChart(points) {
  const W = 620, H = 230, padL = 32, padR = 14, padT = 16, padB = 30;
  const n = points.length;
  const x = i => padL + (n <= 1 ? (W - padL - padR) / 2 : (i / (n - 1)) * (W - padL - padR));
  const y = v => padT + (1 - v / 100) * (H - padT - padB);
  const grid = [0, 50, 100].map(v => `
    <line x1="${padL}" y1="${y(v)}" x2="${W - padR}" y2="${y(v)}" stroke="currentColor" stroke-width="1" opacity=".14"/>
    <text x="${padL - 6}" y="${y(v) + 3}" font-size="10" fill="currentColor" opacity=".55" text-anchor="end">${v}</text>`).join('');
  const passLine = `<line x1="${padL}" y1="${y(70)}" x2="${W - padR}" y2="${y(70)}" stroke="${'#2e9e5b'}" stroke-width="1.5" stroke-dasharray="4 4" opacity=".7"/>
    <text x="${W - padR}" y="${y(70) - 4}" font-size="9.5" fill="#2e9e5b" text-anchor="end">70 % Bestehen</text>`;
  const path = points.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.score).toFixed(1)}`).join(' ');
  const area = `M${x(0).toFixed(1)},${y(0)} ` + points.map((p, i) => `L${x(i).toFixed(1)},${y(p.score).toFixed(1)}`).join(' ') + ` L${x(n - 1).toFixed(1)},${y(0)} Z`;
  const dots = points.map((p, i) => `<g><circle cx="${x(i).toFixed(1)}" cy="${y(p.score).toFixed(1)}" r="4.5" fill="${p.passed ? BLUE : '#c0392b'}" stroke="var(--surface)" stroke-width="2"/><title>${esc(p.title)} · ${p.score}% · ${esc(fmtDate(p.date))}</title></g>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;color:var(--text)" role="img" aria-label="Verlauf der Prüfungsergebnisse über die Zeit">
    <defs><linearGradient id="lg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${BLUE}" stop-opacity=".22"/><stop offset="1" stop-color="${BLUE}" stop-opacity="0"/></linearGradient></defs>
    ${grid}${passLine}
    <path d="${area}" fill="url(#lg)"/>
    <path d="${path}" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}
  </svg>`;
}

function categoryBars(rows) {
  const W = 620, rowH = 34, padL = 150, padR = 46, padT = 6;
  const H = padT * 2 + rows.length * rowH;
  const bw = W - padL - padR;
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;color:var(--text)" role="img" aria-label="Durchschnittliche Prüfungsleistung je Kategorie">
    ${rows.map((r, i) => {
      const cy = padT + i * rowH + rowH / 2;
      const w = Math.max(2, bw * r.value / 100);
      const col = r.attempted ? CATEGORIES[r.key].color : 'currentColor';
      return `<g>
        <text x="${padL - 10}" y="${cy + 4}" font-size="11.5" fill="currentColor" text-anchor="end">${esc(r.label)}</text>
        <rect x="${padL}" y="${cy - 9}" width="${bw}" height="18" rx="9" fill="currentColor" opacity=".08"/>
        <rect x="${padL}" y="${cy - 9}" width="${w.toFixed(1)}" height="18" rx="9" fill="${col}" opacity="${r.attempted ? '1' : '.25'}"/>
        <text x="${padL + bw + 8}" y="${cy + 4}" font-size="11" font-weight="700" fill="currentColor" opacity="${r.attempted ? '1' : '.4'}">${r.attempted ? r.value + '%' : '—'}</text>
        <title>${esc(r.label)}: ${r.attempted ? r.value + '% (Ø bestes Ergebnis)' : 'noch nicht geprüft'}</title>
      </g>`;
    }).join('')}
  </svg>`;
}

function heatmap(map) {
  const weeks = 13, days = weeks * 7;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  // Start am Montag vor (weeks-1) Wochen, sodass die letzte Spalte diese Woche ist
  const start = new Date(today);
  const dow = (today.getDay() + 6) % 7; // Mo=0
  start.setDate(today.getDate() - dow - (weeks - 1) * 7);
  const cell = 15, gap = 4, padTop = 16, padLeft = 26;
  const W = padLeft + weeks * (cell + gap), H = padTop + 7 * (cell + gap);
  const max = Math.max(1, ...map.values());
  const lvl = c => c <= 0 ? -1 : Math.min(HEAT.length - 1, Math.floor((c - 1) / max * (HEAT.length - 1) + 0.001));
  const dayLabels = ['Mo', '', 'Mi', '', 'Fr', '', 'So'];
  let cells = '';
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const dt = new Date(start); dt.setDate(start.getDate() + w * 7 + d);
      if (dt > today) continue;
      const key = dt.toISOString().slice(0, 10);
      const c = map.get(key) || 0;
      const l = lvl(c);
      const fill = l < 0 ? 'currentColor' : HEAT[l];
      const op = l < 0 ? '.08' : '1';
      cells += `<g><rect x="${padLeft + w * (cell + gap)}" y="${padTop + d * (cell + gap)}" width="${cell}" height="${cell}" rx="3.5" fill="${fill}" opacity="${op}"/><title>${esc(dt.toLocaleDateString('de-DE'))}: ${c} Aktivität${c === 1 ? '' : 'en'}</title></g>`;
    }
  }
  const labels = dayLabels.map((t, d) => t ? `<text x="${padLeft - 6}" y="${padTop + d * (cell + gap) + 11}" font-size="9" fill="currentColor" opacity=".5" text-anchor="end">${t}</text>` : '').join('');
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;max-width:${W}px;color:var(--text)" role="img" aria-label="Aktivität der letzten ${weeks} Wochen">${labels}${cells}</svg>`;
}

/* --------------------------- Ansicht --------------------------- */
export function renderStatistik() {
  const s = getState();
  const exams = allExamResults();

  // Kategorie-Beherrschung: Ø bestes Ergebnis der Module je Kategorie
  const catRows = Object.entries(CATEGORIES).map(([key, c]) => {
    const mods = MODULES.filter(m => m.category === key);
    const scores = mods.map(m => bestExam(m.id)).filter(Boolean).map(b => b.score);
    const value = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    return { key, label: c.label, value, attempted: scores.length > 0 };
  }).sort((a, b) => b.value - a.value);

  // Stärken/Schwächen aus besten Ergebnissen
  const scored = MODULES.map(m => ({ m, best: bestExam(m.id) })).filter(x => x.best);
  const strong = [...scored].sort((a, b) => b.best.score - a.best.score).slice(0, 3);
  const weak = [...scored].sort((a, b) => a.best.score - b.best.score).slice(0, 3);

  let lessonsDone = 0;
  MODULES.forEach(m => { lessonsDone += moduleProgress(m.id, m.lessons.length).done; });
  const passed = MODULES.filter(m => isModulePassed(m.id)).length;
  const avgScore = exams.length ? Math.round(exams.reduce((n, r) => n + r.score, 0) / exams.length) : 0;

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Statistik</h1>
      <p class="muted">Dein Lernfortschritt auf einen Blick – aus deinen Prüfungen, Lektionen und Aktivitäten.</p>
    </div>

    <div class="tiles" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))">
      ${statTile(lessonsDone + '/' + LESSON_COUNT, 'Lektionen', 'book')}
      ${statTile(passed, 'Module bestanden', 'shield')}
      ${statTile(avgScore + '%', 'Ø Prüfungsergebnis', 'exam')}
      ${statTile(s.stats?.correct || 0, 'Fragen richtig', 'check')}
      ${statTile(s.streak?.count || 0, 'Tage-Streak', 'bolt')}
    </div>

    <div class="grid" style="grid-template-columns:1.4fr 1fr;align-items:start;margin-top:22px" id="statCols">
      <section class="card card--pad">
        <h3 style="margin-bottom:6px">${icon('chart').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Prüfungs-Verlauf</h3>
        ${exams.length >= 2
          ? `<p class="subtle" style="font-size:.82rem;margin:0 0 6px">${exams.length} Prüfungen · Punkt = ein Versuch, Farbe zeigt bestanden/nicht.</p>${lineChart(exams)}`
          : `<p class="muted" style="font-size:.9rem">Noch zu wenige Prüfungen für einen Verlauf. Lege mindestens zwei Prüfungen ab – dann siehst du hier deine Entwicklung.</p>`}
      </section>

      <section class="card card--pad">
        <h3 style="margin-bottom:6px">${icon('clock').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Aktivität</h3>
        <p class="subtle" style="font-size:.82rem;margin:0 0 10px">Letzte 13 Wochen</p>
        ${heatmap(activityByDay())}
      </section>
    </div>

    <section class="card card--pad" style="margin-top:20px">
      <h3 style="margin-bottom:10px">${icon('target').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Beherrschung je Kategorie</h3>
      <p class="subtle" style="font-size:.82rem;margin:0 0 8px">Durchschnitt deiner besten Prüfungsergebnisse je Ausbildungsbereich.</p>
      ${categoryBars(catRows)}
    </section>

    ${scored.length ? `<div class="grid" style="grid-template-columns:1fr 1fr;align-items:start;margin-top:20px" id="statSW">
      <section class="card card--pad">
        <h3 style="margin-bottom:10px">${icon('star').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Deine Stärken</h3>
        ${strong.map(x => swRow(x, 'ok')).join('')}
      </section>
      <section class="card card--pad">
        <h3 style="margin-bottom:10px">${icon('bolt').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Luft nach oben</h3>
        ${weak.map(x => swRow(x, 'warn')).join('')}
        <a class="btn btn--outline btn--sm btn--block" href="#/wiederholung" style="margin-top:8px">${icon('refresh')} Schwachstellen wiederholen</a>
      </section>
    </div>` : ''}
  </div>`;
}

function statTile(val, label, ic) {
  return `<div class="card card--pad center">
    <div class="tile__icon i-red" style="margin:0 auto 6px">${icon(ic)}</div>
    <b style="font-size:1.5rem;display:block;line-height:1.1">${val}</b>
    <span class="subtle" style="display:block;font-size:.82rem">${esc(label)}</span>
  </div>`;
}

function swRow(x, kind) {
  const cat = CATEGORIES[x.m.category];
  return `<a href="#/pruefung/${x.m.id}" class="between" style="padding:8px 0;border-bottom:1px solid var(--border);text-decoration:none;color:inherit">
    <span class="flex gap-sm" style="align-items:center;min-width:0">
      <span class="badge" style="background:${cat.color}22;color:${cat.color};border:none">${x.m.code}</span>
      <span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(x.m.title)}</span>
    </span>
    <span class="badge ${kind === 'ok' ? 'badge--green' : 'badge--amber'}">${x.best.score}%</span>
  </a>`;
}
