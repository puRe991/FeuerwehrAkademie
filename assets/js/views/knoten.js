/* =========================================================================
   VIEW: Knoten-Trainer (Modul U) — Schritt-für-Schritt-Anleitungen mit
   schematischen Figuren für die wichtigsten Feuerwehrknoten. Übersicht +
   interaktiver Stepper mit „geübt"-Markierung und Fortschritt.
   ========================================================================= */
import { KNOTEN, KNOTEN_BY_ID } from '../data/knoten.js';
import { icon } from '../data/icons.js';
import { isKnotLearned, toggleKnotLearned, getState } from '../state.js';
import { esc, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

let trainer = null; // { id, step }

function stars(n) { return '★'.repeat(n) + '☆'.repeat(3 - n); }

/* ------------------------------ Übersicht ------------------------------ */
export function renderKnotenList() {
  const learned = (getState().knotsLearned || []).filter(id => KNOTEN_BY_ID[id]).length;
  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/modul/u-knoten">Modul U</a><span class="sep">/</span><span>Knoten-Trainer</span></div>
    <div class="view__head">
      <h1>Knoten-Trainer</h1>
      <p class="muted">Die wichtigsten Feuerwehrknoten Schritt für Schritt – mit farbcodierten Schaubildern (rot = loses Ende, blau = festes Teil). Übe jeden Knoten anschließend mit einer echten Leine.</p>
      <div class="progress" style="max-width:340px;margin-top:8px"><i style="width:${Math.round(learned / KNOTEN.length * 100)}%"></i></div>
      <span class="subtle" style="font-size:.85rem">${learned}/${KNOTEN.length} Knoten als geübt markiert</span>
    </div>

    <div class="module-grid">
      ${KNOTEN.map(k => {
        const done = isKnotLearned(k.id);
        return `<a class="card card--pad card--interactive stack" style="--gap:12px;text-decoration:none;color:inherit" href="#/knoten/${k.id}">
          <div class="between">
            <span class="badge badge--red">${esc(k.name)}</span>
            ${done ? `<span class="badge badge--green">${icon('check').replace('<svg ','<svg style="width:13px;height:13px" ')} geübt</span>` : `<span class="badge">${k.steps.length} Schritte</span>`}
          </div>
          <div style="background:#eef1f5;border-radius:12px;padding:6px">${k.steps[k.steps.length - 1].svg}</div>
          <div>
            <b>${esc(k.alt)}</b>
            <div class="subtle" style="font-size:.82rem;margin-top:2px">Schwierigkeit ${stars(k.difficulty)}</div>
          </div>
          <p class="mcard__desc" style="margin:0">${esc(k.use.slice(0, 96))}…</p>
          <span class="btn btn--outline btn--block">${icon('play')} Üben</span>
        </a>`;
      }).join('')}
    </div>
  </div>`;
}

/* ------------------------------ Stepper ------------------------------ */
export function renderKnotenTrainer(id) {
  const k = KNOTEN_BY_ID[id];
  if (!k) return notFound();
  if (!trainer || trainer.id !== id) trainer = { id, step: 0 };
  const i = Math.min(trainer.step, k.steps.length - 1);
  const step = k.steps[i];
  const last = i === k.steps.length - 1;
  const done = isKnotLearned(id);

  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/knoten">Knoten-Trainer</a><span class="sep">/</span><span>${esc(k.name)}</span></div>
    <div class="exam-shell">
      <div class="card card--pad">
        <div class="between wrap" style="gap:10px;align-items:flex-start">
          <div>
            <h1 style="margin:0">${esc(k.name)}</h1>
            <div class="subtle" style="font-size:.85rem">${esc(k.alt)} · Schwierigkeit ${stars(k.difficulty)}</div>
          </div>
          ${done ? `<span class="badge badge--green">${icon('check').replace('<svg ','<svg style="width:13px;height:13px" ')} geübt</span>` : ''}
        </div>
        <p class="muted" style="margin:.6em 0 0">${esc(k.use)}</p>
        <div class="callout" style="margin:12px 0 0;background:var(--surface-2);border:none;font-size:.9rem">
          ${icon('bolt').replace('<svg ','<svg style="width:15px;height:15px;vertical-align:-2px" ')} <b>Merksatz:</b> ${esc(k.mnemonic)}
        </div>
      </div>

      <div class="card card--pad" style="margin-top:16px">
        <div class="between" style="margin-bottom:10px">
          <span class="q-num">Schritt ${i + 1} / ${k.steps.length}</span>
          <div class="flex gap-sm" id="knotDots">
            ${k.steps.map((_, s) => `<button class="knot-dot ${s === i ? 'active' : ''} ${s < i ? 'done' : ''}" data-step="${s}" aria-label="Schritt ${s + 1}"></button>`).join('')}
          </div>
        </div>

        <div style="margin:6px auto 4px">${step.svg}</div>

        <div class="callout callout--tip" style="margin:14px 0 0">
          <b>${i + 1}.</b> ${esc(step.text)}
          ${step.tip ? `<p style="margin:.5em 0 0;font-size:.9rem">${icon('bolt').replace('<svg ','<svg style="width:14px;height:14px;vertical-align:-2px" ')} <b>Tipp:</b> ${esc(step.tip)}</p>` : ''}
        </div>

        <div class="between wrap" style="margin-top:20px;gap:12px">
          <button class="btn btn--outline" id="knotPrev" ${i === 0 ? 'disabled' : ''}>${icon('arrowl')} Zurück</button>
          ${!last
            ? `<button class="btn btn--primary" id="knotNext">Weiter ${icon('arrowr')}</button>`
            : `<button class="btn ${done ? 'btn--outline' : 'btn--primary'}" id="knotDone">${icon('check')} ${done ? 'Als ungeübt markieren' : 'Als geübt markieren'}</button>`}
        </div>
      </div>

      <div class="flex gap-sm wrap" style="margin-top:16px;justify-content:center">
        <a class="btn btn--ghost btn--sm" href="#/lektion/u-knoten/u1">${icon('book')} Zur Lektion</a>
        <a class="btn btn--ghost btn--sm" href="#/knoten">Alle Knoten</a>
      </div>
    </div>
  </div>`;
}

export function bindKnoten(root, rerender) {
  root.querySelector('#knotPrev')?.addEventListener('click', () => { if (trainer.step > 0) { trainer.step--; rerender(); } });
  root.querySelector('#knotNext')?.addEventListener('click', () => {
    const k = KNOTEN_BY_ID[trainer.id];
    if (trainer.step < k.steps.length - 1) { trainer.step++; rerender(); }
  });
  root.querySelectorAll('[data-step]').forEach(btn =>
    btn.addEventListener('click', () => { trainer.step = +btn.dataset.step; rerender(); }));
  root.querySelector('#knotDone')?.addEventListener('click', () => {
    const wasDone = isKnotLearned(trainer.id);
    toggleKnotLearned(trainer.id);
    if (!wasDone) { confetti(); toast('Knoten als geübt markiert · +10 XP', 'star'); }
    rerender();
  });
}

export function resetKnotenSession() { trainer = null; }
