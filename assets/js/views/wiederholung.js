/* =========================================================================
   VIEW: Fehler-/Wiederholungs-Center — „Meine Schwachstellen"
   Sammelt alle in Prüfungen falsch beantworteten Fragen und lässt sie
   gezielt wiederholen. Eine richtig gelöste Frage wird als erledigt
   geschlossen; falsche Antworten bleiben zur Wiederholung offen.
   Didaktisch der wirksamste Einzelhebel: gelernt wird genau am Fehler.
   ========================================================================= */
import { QUESTION_BY_ID } from '../data/exams.js';
import { MODULE_BY_ID } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import {
  openMistakeIds, mistakeStats, recordQuestionResult, addXp, touchStreak, logActivity,
} from '../state.js';
import { esc, shuffle, toast, confetti } from '../utils.js';

let session = null;

/* Herkunfts-Label einer Frage (Modul-Code · Titel, mit Fallback). */
function originOf(q) {
  const m = MODULE_BY_ID[q?.moduleId];
  if (m) return { code: m.code, title: m.title, href: `#/modul/${m.id}` };
  return { code: '?', title: 'Jugendfeuerwehr / Sonstige', href: null };
}

/* Offene Fragen als vollständige Frage-Objekte (nur auffindbare IDs). */
function openQuestions() {
  return openMistakeIds().map(id => QUESTION_BY_ID[id]).filter(Boolean);
}

export function renderWiederholung() {
  if (session && session.reviewing) return reviewResult();
  if (session && !session.finished) return reviewQuestion();
  return reviewIntro();
}

/* --------------------------- Übersicht --------------------------- */
function reviewIntro() {
  const stats = mistakeStats();
  const open = openQuestions();

  if (!open.length) {
    return `
    <div class="view fade-up">
      <div class="crumbs"><a href="#/pruefungen">Prüfen &amp; Üben</a><span class="sep">/</span><span>Wiederholung</span></div>
      <div class="exam-shell">
        <div class="card card--pad center stack">
          <div style="width:72px;height:72px;border-radius:20px;background:var(--ok-bg);color:var(--ok);display:grid;place-items:center;margin:0 auto">
            ${icon('check').replace('<svg ', '<svg style="width:38px;height:38px" ')}
          </div>
          <h1>Keine offenen Fehler 🎉</h1>
          <p class="muted" style="max-width:460px;margin:0 auto">
            ${stats.recovered
              ? `Stark – du hast bereits <b>${stats.recovered}</b> zuvor falsche ${stats.recovered === 1 ? 'Frage' : 'Fragen'} ausgebessert.`
              : 'Sobald du in einer Prüfung eine Frage falsch beantwortest, sammelt sie sich hier zur gezielten Wiederholung.'}
          </p>
          <a class="btn btn--primary" href="#/pruefungen">${icon('exam')} Zu den Prüfungen</a>
        </div>
      </div>
    </div>`;
  }

  // Nach Herkunftsmodul gruppieren
  const groups = {};
  open.forEach(q => {
    const o = originOf(q);
    (groups[o.code] ??= { origin: o, items: [] }).items.push(q);
  });
  const groupList = Object.values(groups).sort((a, b) => b.items.length - a.items.length);

  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/pruefungen">Prüfen &amp; Üben</a><span class="sep">/</span><span>Wiederholung</span></div>
    <div class="exam-shell">
      <div class="card card--pad center stack">
        <div style="width:72px;height:72px;border-radius:20px;background:var(--warn-bg,#f5a62322);color:var(--warn,#c98a00);display:grid;place-items:center;margin:0 auto">
          ${icon('refresh').replace('<svg ', '<svg style="width:38px;height:38px" ')}
        </div>
        <h1>Meine Schwachstellen</h1>
        <p class="muted" style="max-width:480px;margin:0 auto">
          Genau die Fragen, die du in Prüfungen falsch hattest – gezielt wiederholen, bis sie sitzen.
          Eine richtig beantwortete Frage verschwindet aus der Liste.
        </p>
        <div class="tiles" style="grid-template-columns:repeat(3,1fr);max-width:520px;margin:8px auto 0">
          <div class="card card--pad center"><b style="font-size:1.6rem">${stats.open}</b><span class="subtle">offen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${stats.recovered}</b><span class="subtle">ausgebessert</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${groupList.length}</b><span class="subtle">Module</span></div>
        </div>
        <div class="flex gap-sm wrap" style="justify-content:center;margin-top:6px">
          <button class="btn btn--primary btn--lg" data-review="all">${icon('play')} Alle ${open.length} wiederholen</button>
          ${open.length > 10 ? `<button class="btn btn--outline btn--lg" data-review="10">Kurz-Session (10)</button>` : ''}
        </div>
      </div>

      <div class="card card--pad" style="margin-top:20px">
        <h3 style="margin-bottom:14px">${icon('chart').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Offene Fragen nach Modul</h3>
        <div class="stack">
          ${groupList.map(g => `
            <div class="between wrap" style="gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
              <span class="flex gap-sm" style="align-items:center;min-width:0">
                <span class="badge badge--red">${esc(g.origin.code)}</span>
                ${g.origin.href
                  ? `<a href="${g.origin.href}" style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(g.origin.title)}</a>`
                  : `<span class="muted">${esc(g.origin.title)}</span>`}
              </span>
              <button class="btn btn--outline btn--sm" data-review-mod="${esc(g.origin.code)}">
                ${g.items.length} ${g.items.length === 1 ? 'Frage' : 'Fragen'} ${icon('arrowr')}
              </button>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

/* --------------------------- Session --------------------------- */
export function startReview(filter) {
  let pool = openQuestions();
  if (typeof filter === 'string' && filter !== 'all' && !/^\d+$/.test(filter)) {
    pool = pool.filter(q => originOf(q).code === filter);
  }
  pool = shuffle(pool);
  if (/^\d+$/.test(String(filter))) pool = pool.slice(0, Number(filter));
  if (!pool.length) { session = null; return; }

  const questions = pool.map(q => {
    const order = shuffle(q.options.map((_, i) => i));
    return { ...q, options: order.map(i => q.options[i]), correct: q.correct.map(c => order.indexOf(c)).sort() };
  });
  session = { questions, current: 0, answers: [], recovered: 0, finished: false, reviewing: false };
}

function reviewQuestion() {
  const q = session.questions[session.current];
  const total = session.questions.length;
  const answered = session.answers[session.current];
  const isMulti = q.type === 'multiple';
  const pct = Math.round(session.current / total * 100);
  const o = originOf(q);

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="exam-bar">
        <a class="iconbtn" href="#/wiederholung" title="Beenden">${icon('x')}</a>
        <div class="progress"><i style="width:${pct}%"></i></div>
        <span class="q-num" style="white-space:nowrap">${session.current + 1} / ${total}</span>
      </div>

      <div class="card q-card">
        <div class="between">
          <span class="q-num">Wiederholung${isMulti ? ' · Mehrfachauswahl' : q.type === 'truefalse' ? ' · Wahr/Falsch' : ''}</span>
          <span class="badge badge--red">${esc(o.code)} · ${esc(q.topic || '')}</span>
        </div>
        <h2 class="q-text">${esc(q.q)}</h2>

        <div class="options" id="options">
          ${q.options.map((opt, i) => {
            let cls = 'opt';
            if (answered) {
              const chosen = answered.selected.includes(i);
              const correct = q.correct.includes(i);
              if (correct) cls += ' correct';
              else if (chosen) cls += ' wrong';
            }
            return `<button class="${cls}" data-opt="${i}" ${answered ? 'disabled' : ''}>
              <span class="opt__key">${answered && q.correct.includes(i) ? '✓' : answered && answered.selected.includes(i) ? '✕' : String.fromCharCode(65 + i)}</span>
              <span>${esc(opt)}</span>
            </button>`;
          }).join('')}
        </div>

        ${answered ? `<div class="explain ${answered.correct ? 'ok' : 'no'}">
          <b>${answered.correct ? '✔ Sitzt! Frage erledigt.' : '✕ Noch nicht – bleibt zur Wiederholung.'}</b> ${esc(q.exp)}
        </div>` : isMulti ? `<p class="subtle" style="margin-top:14px;font-size:.85rem">Mehrere Antworten möglich – wähle aus und bestätige.</p>` : ''}

        <div class="between wrap" style="margin-top:22px;gap:12px">
          <span></span>
          ${!answered
            ? (isMulti ? `<button class="btn btn--primary" id="confirmMulti">Antwort bestätigen ${icon('arrowr')}</button>` : `<span class="subtle" style="font-size:.85rem">Antwort auswählen…</span>`)
            : (session.current < total - 1
                ? `<button class="btn btn--primary" id="nextQ">Weiter ${icon('arrowr')}</button>`
                : `<button class="btn btn--primary" id="finishReview">Abschließen ${icon('check')}</button>`)}
        </div>
      </div>
    </div>
  </div>`;
}

function reviewResult() {
  const total = session.questions.length;
  const recovered = session.recovered;
  const stillOpen = mistakeStats().open;

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="card card--pad result-hero">
        <div style="width:80px;height:80px;border-radius:24px;background:var(--ok-bg);color:var(--ok);display:grid;place-items:center;margin:0 auto">
          ${icon('award').replace('<svg ', '<svg style="width:42px;height:42px" ')}
        </div>
        <h1 style="margin-top:10px">Wiederholung fertig</h1>
        <p class="muted">Du hast <b>${recovered}</b> von ${total} ${total === 1 ? 'Frage' : 'Fragen'} ausgebessert.
          ${stillOpen ? `Noch <b>${stillOpen}</b> offen – dranbleiben lohnt sich.` : 'Alle Schwachstellen erledigt! 🏆'}</p>
        <div class="flex gap-sm" style="justify-content:center;margin-top:20px">
          ${stillOpen ? `<button class="btn btn--primary" id="againReview">${icon('refresh')} Weiter wiederholen</button>` : ''}
          <a class="btn ${stillOpen ? 'btn--outline' : 'btn--primary'}" href="#/wiederholung">Übersicht</a>
        </div>
      </div>
    </div>
  </div>`;
}

/* --------------------------- Bindings --------------------------- */
export function bindWiederholung(root, rerender) {
  root.querySelectorAll('[data-review]').forEach(btn =>
    btn.addEventListener('click', () => { startReview(btn.dataset.review); rerender(); }));
  root.querySelectorAll('[data-review-mod]').forEach(btn =>
    btn.addEventListener('click', () => { startReview(btn.dataset.reviewMod); rerender(); }));

  if (!session) return;
  const q = session.questions[session.current];
  const answered = session.answers[session.current];

  if (q && !answered) {
    root.querySelectorAll('#options .opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.opt;
        if (q.type === 'multiple') btn.classList.toggle('selected');
        else { recordReviewAnswer([i]); rerender(); }
      });
    });
    const confirmM = root.querySelector('#confirmMulti');
    if (confirmM) confirmM.addEventListener('click', () => {
      const sel = [...root.querySelectorAll('#options .opt.selected')].map(b => +b.dataset.opt);
      if (!sel.length) { toast('Bitte mindestens eine Antwort wählen', 'bolt'); return; }
      recordReviewAnswer(sel); rerender();
    });
  }

  const nextQ = root.querySelector('#nextQ');
  if (nextQ) nextQ.addEventListener('click', () => { session.current++; rerender(); });

  const finish = root.querySelector('#finishReview');
  if (finish) finish.addEventListener('click', () => {
    session.reviewing = true; session.finished = true;
    logActivity('review', 'wiederholung', { title: `Wiederholung · ${session.recovered}/${session.questions.length} ausgebessert` });
    if (session.recovered) confetti();
    toast(`${session.recovered} ${session.recovered === 1 ? 'Frage' : 'Fragen'} ausgebessert`, session.recovered ? 'star' : 'bolt');
    rerender();
  });

  const again = root.querySelector('#againReview');
  if (again) again.addEventListener('click', () => { startReview('all'); rerender(); });
}

function recordReviewAnswer(selected) {
  const q = session.questions[session.current];
  const correct = selected.length === q.correct.length && selected.every(i => q.correct.includes(i));
  session.answers[session.current] = { selected: selected.sort(), correct };
  recordQuestionResult(q.id, correct);
  if (correct) { session.recovered += 1; addXp(3); touchStreak(); }
}

export function resetReviewSession() { session = null; }
