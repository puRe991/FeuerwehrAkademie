/* =========================================================================
   FRAGE DES TAGES — täglicher Kurz-Anreiz fürs Dashboard.
   Deterministisch aus dem Tagesdatum gewählt: alle sehen dieselbe Frage,
   pro Tag genau ein Versuch. Füttert Streak, XP und das Fehler-Center.
   ========================================================================= */
import { QUESTION_BY_ID } from '../data/exams.js';
import { figureHTML } from '../data/exam-figures.js';
import { MODULE_BY_ID } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { getState, todayStr, answerDaily, dailyAnsweredToday, recordQuestionResult } from '../state.js';
import { esc, confetti, toast } from '../utils.js';

/* Stabiler Hash (FNV-1a) → deterministische Tagesauswahl. */
function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export function dailyQuestion() {
  const ids = Object.keys(QUESTION_BY_ID).sort();
  const q = QUESTION_BY_ID[ids[hashStr(todayStr()) % ids.length]];
  return q;
}

/* Auswahl während des Beantwortens (nur im DOM, nicht persistent). */
let picks = [];

export function renderDailyCard() {
  const q = dailyQuestion();
  const answered = dailyAnsweredToday();
  const s = getState();
  const mod = MODULE_BY_ID[q.moduleId];
  const isMulti = q.type === 'multiple';

  const head = `<div class="between" style="align-items:center">
      <div class="badge badge--red badge--dot">Frage des Tages</div>
      <span class="subtle" style="font-size:.8rem">${new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
    </div>`;

  if (answered) {
    const ok = s.dailyQuiz.correct;
    return `<section class="card card--pad stack" style="--gap:12px">
      ${head}
      <div class="flex gap-sm" style="align-items:center">
        <span style="width:38px;height:38px;border-radius:11px;flex:none;display:grid;place-items:center;background:${ok ? 'var(--ok-bg);color:var(--ok)' : 'var(--warn-bg);color:var(--warn)'}">
          ${icon(ok ? 'check' : 'bolt').replace('<svg ', '<svg style="width:20px;height:20px" ')}
        </span>
        <div><b>${ok ? 'Richtig beantwortet – stark!' : 'Heute nicht ganz getroffen.'}</b>
          <div class="subtle" style="font-size:.85rem">Schon erledigt. Morgen wartet eine neue Frage. 🔥 Streak: ${s.streak.count}</div></div>
      </div>
      <div class="callout callout--tip" style="margin:0">
        <b>${esc(q.q)}</b>
        <p style="margin:.4em 0 0">Richtige Antwort: <b>${q.correct.map(c => esc(q.options[c])).join(', ')}</b>. ${esc(q.exp)}</p>
      </div>
      ${mod ? `<a class="btn btn--ghost btn--sm" href="#/modul/${mod.id}" style="align-self:flex-start">${icon('book')} Thema vertiefen: ${esc(mod.title)}</a>` : ''}
    </section>`;
  }

  return `<section class="card card--pad stack" style="--gap:12px" id="dailyCard">
    ${head}
    <div>
      <span class="q-num">${isMulti ? 'Mehrfachauswahl' : q.type === 'truefalse' ? 'Wahr/Falsch' : 'Eine Antwort'}${mod ? ' · Modul ' + mod.code : ''}</span>
      <h3 style="margin:.2em 0 0">${esc(q.q)}</h3>
    </div>
    ${figureHTML(q)}
    <div class="options" id="dailyOptions" role="group" aria-label="Antwortoptionen zur Frage des Tages">
      ${q.options.map((opt, i) => `<button class="opt daily-opt" data-opt="${i}" aria-pressed="false">
        <span class="opt__key">${String.fromCharCode(65 + i)}</span><span>${esc(opt)}</span>
      </button>`).join('')}
    </div>
    <div class="between" style="align-items:center">
      <span class="subtle" style="font-size:.82rem">${isMulti ? 'Mehrere möglich – auswählen und bestätigen.' : 'Antwort wählen.'}</span>
      ${isMulti ? `<button class="btn btn--primary btn--sm" id="dailyConfirm">Bestätigen ${icon('arrowr')}</button>` : ''}
    </div>
  </section>`;
}

export function bindDaily(root, rerender) {
  const q = dailyQuestion();
  if (dailyAnsweredToday()) return;
  const optsWrap = root.querySelector('#dailyOptions');
  if (!optsWrap) return;
  picks = [];

  const submit = (sel) => {
    if (!sel.length) { toast('Bitte eine Antwort wählen', 'bolt'); return; }
    const correct = sel.length === q.correct.length && sel.every(i => q.correct.includes(i));
    recordQuestionResult(q.id, correct);
    answerDaily(correct);
    if (correct) { confetti(); toast('Richtig! +8 XP', 'star'); }
    else toast('Weiter so – morgen neue Chance! +3 XP', 'bolt');
    rerender();
  };

  optsWrap.querySelectorAll('.daily-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.opt;
      if (q.type === 'multiple') {
        const on = btn.classList.toggle('selected');
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        picks = on ? [...picks, i] : picks.filter(x => x !== i);
      } else {
        submit([i]);
      }
    });
  });
  root.querySelector('#dailyConfirm')?.addEventListener('click', () => submit([...picks].sort((a, b) => a - b)));
}
