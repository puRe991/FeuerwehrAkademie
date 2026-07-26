/* =========================================================================
   VIEW: Prüfungs-Engine — Modulprüfungen (mit Schwierigkeitsstufen) und
   modulübergreifende Abschlussprüfungen (Sets). Auswertung, Erklärungen,
   Wiederholung, Leistungsnachweis.
   ========================================================================= */
import { MODULE_BY_ID } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { EXAM_SET_BY_ID, buildSetQuestions, setSize } from '../data/pruefungssets.js';
import { icon } from '../data/icons.js';
import { saveExamResult, logActivity, bestExam, recordQuestionResult } from '../state.js';
import { esc, shuffle, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

let session = null;

/* Prüfungskontext (Modul oder Set) auflösen */
function resolveExam(id) {
  const set = EXAM_SET_BY_ID[id];
  if (set) return {
    kind: 'set', id, title: set.title, back: '#/pruefungen',
    passScore: set.passScore, timeLimit: set.timeLimit, set,
    questionCount: setSize(set),
  };
  const m = MODULE_BY_ID[id], e = EXAMS[id];
  if (m && e) return {
    kind: 'module', id, title: m.title, back: `#/modul/${id}`,
    passScore: e.passScore, timeLimit: e.timeLimit, module: m, exam: e,
    questionCount: e.questions.length,
  };
  return null;
}

export function renderExam(id) {
  const ctx = resolveExam(id);
  if (!ctx) return notFound();
  if (session && session.id === id && session.reviewing) return examResult();
  if (!session || session.id !== id || session.finished) return examIntro(ctx);
  return examQuestion();
}

const LEVELS = {
  grund:    { label: 'Grundlagen', hint: 'kurzer Basis-Check', filter: q => q.difficulty <= 2, limit: 8 },
  aufbau:   { label: 'Aufbau', hint: 'ohne schwere Fragen', filter: q => q.difficulty <= 2 },
  pruefung: { label: 'Prüfung', hint: 'alle Fragen, inkl. schwer', filter: () => true },
};

function examIntro(ctx) {
  const best = bestExam(ctx.id);
  const backLabel = ctx.kind === 'set' ? 'Prüfungen' : ctx.module.title;
  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="${ctx.back}">${esc(backLabel)}</a><span class="sep">/</span><span>Prüfung</span></div>
    <div class="exam-shell">
      <div class="card card--pad center stack">
        <div style="width:72px;height:72px;border-radius:20px;background:${ctx.kind === 'set' ? '#f5a62322;color:#c98a00' : 'var(--info-bg);color:var(--info)'};display:grid;place-items:center;margin:0 auto">
          ${icon(ctx.kind === 'set' ? 'award' : 'exam').replace('<svg ', '<svg style="width:38px;height:38px" ')}
        </div>
        <h1>${ctx.kind === 'set' ? esc(ctx.title) : 'Prüfung: ' + esc(ctx.title)}</h1>
        <p class="muted">${ctx.kind === 'set'
          ? esc(ctx.set.desc)
          : 'Teste dein Wissen. Du erhältst nach jeder Frage eine Erklärung – so lernst du auch aus Fehlern.'}</p>
        <div class="tiles stat-trio" style="grid-template-columns:repeat(3,1fr);max-width:520px;margin:8px auto 0">
          <div class="card card--pad center"><b style="font-size:1.6rem">${ctx.questionCount}</b><span class="subtle">Fragen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${ctx.passScore}%</b><span class="subtle">zum Bestehen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${Math.round(ctx.timeLimit / 60)}</b><span class="subtle">Min. Richtwert</span></div>
        </div>
        ${best ? `<div class="callout ${best.passed ? 'callout--ok' : 'callout--warn'}" style="text-align:left;max-width:520px;margin:8px auto 0"><b>Bisher bestes Ergebnis: ${best.score}%</b> ${best.passed ? '– bestanden ✔' : ''}</div>` : ''}

        ${ctx.kind === 'module' ? `
          <div class="subtle" style="font-size:.85rem;margin-top:6px">Wähle deine Stufe:</div>
          <div class="flex gap-sm wrap" style="justify-content:center">
            ${Object.entries(LEVELS).map(([key, l], i) => `<button class="btn ${i === 2 ? 'btn--primary' : 'btn--outline'} btn--lg" data-start="${ctx.id}" data-level="${key}">
              ${l.label}<span class="subtle" style="font-weight:500;font-size:.75rem;margin-left:6px">${l.hint}</span>
            </button>`).join('')}
          </div>
          <p class="subtle" style="font-size:.82rem">Fragen & Antworten werden für echtes Prüfungsgefühl gemischt.</p>
        ` : `
          <div class="card card--pad" style="max-width:520px;margin:6px auto 0;text-align:left;background:var(--surface-2)">
            <b style="font-size:.9rem">Zusammensetzung</b>
            <div class="flex gap-sm wrap" style="margin-top:8px">
              ${ctx.set.sources.map(s => { const m = MODULE_BY_ID[s.moduleId]; return m ? `<span class="badge">${m.code} · ${esc(m.title)} ×${s.count || 1}</span>` : ''; }).join('')}
            </div>
          </div>
          <button class="btn btn--primary btn--lg" data-start="${ctx.id}" data-level="pruefung">${icon('play')} Abschlussprüfung starten</button>
          <p class="subtle" style="font-size:.82rem">Jeder Start stellt eine neue, gemischte Auswahl zusammen.</p>
        `}
        <div class="callout" style="max-width:520px;margin:6px auto 0;text-align:left;background:var(--warn-bg,#f5a62322);border:none">
          <div class="between wrap" style="gap:10px;align-items:center">
            <span style="font-size:.9rem">${icon('clock').replace('<svg ', '<svg style="width:16px;height:16px;vertical-align:-3px" ')} <b>Ernstmodus:</b> mit Zeitlimit, ohne Auflösung, mit Prüfungszeugnis.</span>
            <a class="btn btn--outline btn--sm" href="#/simulator/${ctx.id}">Prüfungssimulator ${icon('arrowr').replace('<svg ', '<svg style="width:14px;height:14px" ')}</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

export function startExam(id, level = 'pruefung') {
  const ctx = resolveExam(id);
  if (!ctx) return;
  let pool;
  if (ctx.kind === 'set') {
    pool = buildSetQuestions(ctx.set);
  } else {
    const lvl = LEVELS[level] || LEVELS.pruefung;
    pool = ctx.exam.questions.filter(lvl.filter);
    if (pool.length < 4) pool = ctx.exam.questions.slice();
    pool = shuffle(pool);
    if (lvl.limit) pool = pool.slice(0, Math.min(pool.length, lvl.limit));
  }
  const questions = shuffle(pool).map(q => {
    const order = shuffle(q.options.map((_, i) => i));
    return { ...q, options: order.map(i => q.options[i]), correct: q.correct.map(c => order.indexOf(c)).sort() };
  });
  session = {
    id, kind: ctx.kind, title: ctx.title, back: ctx.back, passScore: ctx.passScore,
    level, questions, current: 0, answers: [], finished: false, reviewing: false, startTime: Date.now(),
  };
}

function examQuestion() {
  const q = session.questions[session.current];
  const total = session.questions.length;
  const answered = session.answers[session.current];
  const isMulti = q.type === 'multiple';
  const pct = Math.round((session.current) / total * 100);

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="exam-bar">
        <a class="iconbtn" href="${session.back}" title="Abbrechen">${icon('x')}</a>
        <div class="progress" role="progressbar" aria-label="Prüfungsfortschritt" aria-valuenow="${session.current}" aria-valuemin="0" aria-valuemax="${total}"><i style="width:${pct}%"></i></div>
        <span class="q-num" style="white-space:nowrap">${session.current + 1} / ${total}</span>
      </div>

      <div class="card q-card">
        <div class="between">
          <span class="q-num">Frage ${session.current + 1}${isMulti ? ' · Mehrfachauswahl' : q.type === 'truefalse' ? ' · Wahr/Falsch' : ''}</span>
          <span class="badge">${'★'.repeat(q.difficulty)}${'☆'.repeat(3 - q.difficulty)} ${esc(q.topic)}</span>
        </div>
        <h2 class="q-text">${esc(q.q)}</h2>

        <div class="options" id="options" role="group" aria-label="Antwortoptionen">
          ${q.options.map((opt, i) => {
            let cls = 'opt';
            if (answered) {
              const chosen = answered.selected.includes(i);
              const correct = q.correct.includes(i);
              if (correct) cls += ' correct';
              else if (chosen) cls += ' wrong';
            }
            return `<button class="${cls}" data-opt="${i}" ${answered ? 'disabled' : ''} aria-pressed="${answered && answered.selected.includes(i) ? 'true' : 'false'}">
              <span class="opt__key">${answered && q.correct.includes(i) ? '✓' : answered && answered.selected.includes(i) ? '✕' : String.fromCharCode(65 + i)}</span>
              <span>${esc(opt)}</span>
            </button>`;
          }).join('')}
        </div>

        ${answered ? `<div class="explain ${answered.correct ? 'ok' : 'no'}">
          <b>${answered.correct ? '✔ Richtig!' : '✕ Nicht ganz.'}</b> ${esc(q.exp)}
        </div>` : isMulti ? `<p class="subtle" style="margin-top:14px;font-size:.85rem">Mehrere Antworten möglich – wähle aus und bestätige.</p>` : ''}

        <div class="between wrap" style="margin-top:22px;gap:12px">
          <span></span>
          ${!answered
            ? (isMulti ? `<button class="btn btn--primary" id="confirmMulti">Antwort bestätigen ${icon('arrowr')}</button>` : `<span class="subtle" style="font-size:.85rem">Antwort auswählen…</span>`)
            : (session.current < total - 1
                ? `<button class="btn btn--primary" id="nextQ">Weiter ${icon('arrowr')}</button>`
                : `<button class="btn btn--primary" id="finishExam">Auswerten ${icon('award')}</button>`)}
        </div>
      </div>
    </div>
  </div>`;
}

function grade() {
  const correct = session.answers.filter(a => a?.correct).length;
  const total = session.questions.length;
  const score = Math.round(correct / total * 100);
  return { correct, total, score, passed: score >= session.passScore };
}

function examResult() {
  const r = grade();
  const wrongList = session.questions
    .map((q, i) => ({ q, a: session.answers[i], i }))
    .filter(x => !x.a?.correct);

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="card card--pad result-hero">
        <div class="ring result-ring" style="--p:${r.score};${r.passed ? '' : '--fw-red:var(--warn)'}">
          <div style="text-align:center"><b>${r.score}%</b><small>${r.correct}/${r.total} richtig</small></div>
        </div>
        <h1 style="margin-top:6px">${r.passed ? 'Bestanden! 🎉' : 'Knapp daneben'}</h1>
        <p class="muted">${r.passed
          ? `Du hast die Bestehensgrenze von ${session.passScore}% erreicht. Stark!`
          : `Du brauchst ${session.passScore}% zum Bestehen. Schau dir die Erklärungen an und versuch es erneut – du schaffst das.`}</p>

        ${r.passed ? `<div class="card card--pad" style="max-width:460px;margin:20px auto 0;border:2px dashed var(--ok);background:var(--ok-bg);text-align:left">
          <div class="flex gap-md" style="align-items:center">
            ${icon('award').replace('<svg ', '<svg style="width:40px;height:40px;color:var(--ok);flex:none" ')}
            <div><b>Leistungsnachweis</b><div class="subtle" style="font-size:.85rem">${esc(session.title)} · ${r.score}% · ${new Date().toLocaleDateString('de-DE')}</div></div>
          </div>
        </div>` : ''}

        <div class="flex gap-sm" style="justify-content:center;margin-top:22px">
          <button class="btn btn--primary" id="retryExam">${icon('refresh')} Erneut versuchen</button>
          <a class="btn btn--outline" href="${session.back}">Zurück</a>
        </div>
      </div>

      ${wrongList.length ? `<div class="card card--pad" style="margin-top:20px">
        <h3 style="margin-bottom:14px">${icon('eye').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Das solltest du dir nochmal ansehen</h3>
        <div class="stack">
          ${wrongList.map(x => `<div class="callout callout--warn" style="margin:0">
            <b>${esc(x.q.q)}</b>
            <p style="margin:.4em 0 0">Richtig wäre: <b>${x.q.correct.map(c => esc(x.q.options[c])).join(', ')}</b>. ${esc(x.q.exp)}</p>
          </div>`).join('')}
        </div>
      </div>` : `<div class="card card--pad center" style="margin-top:20px"><p class="muted" style="margin:0">Perfekt – alle Fragen richtig beantwortet! 🏆</p></div>`}
    </div>
  </div>`;
}

/** Interaktion verdrahten */
export function bindExam(root, rerender) {
  root.querySelectorAll('[data-start]').forEach(btn => {
    btn.addEventListener('click', () => { startExam(btn.dataset.start, btn.dataset.level); rerender(); });
  });

  if (!session) return;
  const q = session.questions[session.current];
  const answered = session.answers[session.current];

  if (!answered && q) {
    root.querySelectorAll('#options .opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.opt;
        if (q.type === 'multiple') { const on = btn.classList.toggle('selected'); btn.setAttribute('aria-pressed', on ? 'true' : 'false'); }
        else { recordAnswer([i]); rerender(); }
      });
    });
    const confirmM = root.querySelector('#confirmMulti');
    if (confirmM) confirmM.addEventListener('click', () => {
      const sel = [...root.querySelectorAll('#options .opt.selected')].map(b => +b.dataset.opt);
      if (!sel.length) { toast('Bitte mindestens eine Antwort wählen', 'bolt'); return; }
      recordAnswer(sel); rerender();
    });
  }

  const nextQ = root.querySelector('#nextQ');
  if (nextQ) nextQ.addEventListener('click', () => { session.current++; rerender(); });

  const finish = root.querySelector('#finishExam');
  if (finish) finish.addEventListener('click', () => {
    const r = grade();
    session.reviewing = true; session.finished = true;
    saveExamResult(session.id, { score: r.score, passed: r.passed, correct: r.correct, total: r.total, kind: session.kind });
    logActivity('exam', session.id, { moduleId: session.id, title: session.title + ' · ' + r.score + '%' });
    if (r.passed) { confetti(); toast(`Bestanden mit ${r.score}%! +50 XP`, 'star'); }
    else toast(`${r.score}% – weiter üben! +10 XP`, 'bolt');
    rerender();
  });

  const retry = root.querySelector('#retryExam');
  if (retry) retry.addEventListener('click', () => { startExam(session.id, session.level); rerender(); });
}

function recordAnswer(selected) {
  const q = session.questions[session.current];
  const correct = selected.length === q.correct.length && selected.every(i => q.correct.includes(i));
  session.answers[session.current] = { selected: selected.sort(), correct };
  // Für das Fehler-/Wiederholungs-Center merken (nur echte Katalogfragen mit ID).
  recordQuestionResult(q.id, correct);
}

export function resetExamSession() { session = null; }
