/* =========================================================================
   VIEW: Prüfungs-Engine — Quiz mit Einzel-/Mehrfachauswahl, Auswertung,
   Erklärungen, Wiederholung und Zertifikat.
   Zustand wird lokal im Modul gehalten (nicht global persistent bis Abschluss).
   ========================================================================= */
import { MODULE_BY_ID } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { icon } from '../data/icons.js';
import { saveExamResult, logActivity, bestExam } from '../state.js';
import { esc, shuffle, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

let session = null; // { moduleId, questions, current, answers, mode }

export function renderExam(moduleId) {
  const m = MODULE_BY_ID[moduleId];
  const exam = EXAMS[moduleId];
  if (!m || !exam) return notFound();

  // Auswertung anzeigen, sobald die Prüfung beendet wurde
  if (session && session.moduleId === moduleId && session.reviewing) return examResult(m, exam);
  // Startbildschirm, wenn keine Session läuft oder anderes Modul
  if (!session || session.moduleId !== moduleId || session.finished) {
    return examIntro(m, exam);
  }
  return examQuestion(m, exam);
}

function examIntro(m, exam) {
  const best = bestExam(m.id);
  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/modul/${m.id}">${esc(m.title)}</a><span class="sep">/</span><span>Prüfung</span></div>
    <div class="exam-shell">
      <div class="card card--pad center stack">
        <div style="width:72px;height:72px;border-radius:20px;background:var(--info-bg);color:var(--info);display:grid;place-items:center;margin:0 auto">
          ${icon('exam').replace('<svg ','<svg style="width:38px;height:38px" ')}
        </div>
        <h1>Prüfung: ${esc(m.title)}</h1>
        <p class="muted">Teste dein Wissen. Du erhältst nach jeder Frage eine Erklärung – so lernst du auch aus Fehlern.</p>
        <div class="tiles" style="grid-template-columns:repeat(3,1fr);max-width:520px;margin:8px auto 0">
          <div class="card card--pad center"><b style="font-size:1.6rem">${exam.questions.length}</b><span class="subtle">Fragen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${exam.passScore}%</b><span class="subtle">zum Bestehen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${Math.round(exam.timeLimit/60)}</b><span class="subtle">Min. Richtwert</span></div>
        </div>
        ${best ? `<div class="callout ${best.passed ? 'callout--ok' : 'callout--warn'}" style="text-align:left;max-width:520px;margin:8px auto 0"><b>Bisher bestes Ergebnis: ${best.score}%</b> ${best.passed ? '– bestanden ✔' : ''}</div>` : ''}
        <div class="flex gap-sm" style="justify-content:center;margin-top:8px">
          <button class="btn btn--primary btn--lg" id="startExam" data-mod="${m.id}">${icon('play')} Prüfung starten</button>
          <button class="btn btn--outline btn--lg" id="startExamShuffle" data-mod="${m.id}">${icon('refresh')} Zufallsmodus</button>
        </div>
        <p class="subtle" style="font-size:.82rem">Zufallsmodus mischt Fragen & Antworten für echtes Prüfungsgefühl.</p>
      </div>
    </div>
  </div>`;
}

export function startExam(moduleId, shuffled) {
  const exam = EXAMS[moduleId];
  let questions = exam.questions.map(q => ({ ...q }));
  if (shuffled) {
    questions = shuffle(questions).map(q => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        ...q,
        options: order.map(i => q.options[i]),
        correct: q.correct.map(c => order.indexOf(c)).sort(),
      };
    });
  }
  session = { moduleId, questions, current: 0, answers: [], finished: false, reviewing: false, startTime: Date.now() };
}

function examQuestion(m, exam) {
  const q = session.questions[session.current];
  const total = session.questions.length;
  const answered = session.answers[session.current];
  const isMulti = q.type === 'multiple';
  const pct = Math.round((session.current) / total * 100);

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="exam-bar">
        <a class="iconbtn" href="#/modul/${m.id}" title="Abbrechen">${icon('x')}</a>
        <div class="progress"><i style="width:${pct}%"></i></div>
        <span class="q-num" style="white-space:nowrap">${session.current + 1} / ${total}</span>
      </div>

      <div class="card q-card">
        <div class="between">
          <span class="q-num">Frage ${session.current + 1}${isMulti ? ' · Mehrfachauswahl' : q.type === 'truefalse' ? ' · Wahr/Falsch' : ''}</span>
          <span class="badge">${'★'.repeat(q.difficulty)}${'☆'.repeat(3 - q.difficulty)} ${esc(q.topic)}</span>
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
  const correct = session.answers.filter(a => a.correct).length;
  const total = session.questions.length;
  const score = Math.round(correct / total * 100);
  const exam = EXAMS[session.moduleId];
  return { correct, total, score, passed: score >= exam.passScore };
}

function examResult(m, exam) {
  const r = grade();
  const wrongList = session.questions
    .map((q, i) => ({ q, a: session.answers[i], i }))
    .filter(x => !x.a?.correct);

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="card card--pad result-hero">
        <div class="ring result-ring ${r.passed ? '' : ''}" style="--p:${r.score};${r.passed ? '' : '--fw-red:var(--warn)'}">
          <div style="text-align:center"><b>${r.score}%</b><small>${r.correct}/${r.total} richtig</small></div>
        </div>
        <h1 style="margin-top:6px">${r.passed ? 'Bestanden! 🎉' : 'Knapp daneben'}</h1>
        <p class="muted">${r.passed
          ? `Du hast die Bestehensgrenze von ${exam.passScore}% erreicht. Stark!`
          : `Du brauchst ${exam.passScore}% zum Bestehen. Schau dir die Erklärungen an und versuch es erneut – du schaffst das.`}</p>

        ${r.passed ? `<div class="card card--pad" style="max-width:460px;margin:20px auto 0;border:2px dashed var(--ok);background:var(--ok-bg);text-align:left">
          <div class="flex gap-md" style="align-items:center">
            ${icon('award').replace('<svg ','<svg style="width:40px;height:40px;color:var(--ok);flex:none" ')}
            <div><b>Leistungsnachweis</b><div class="subtle" style="font-size:.85rem">${esc(m.title)} · ${r.score}% · ${new Date().toLocaleDateString('de-DE')}</div></div>
          </div>
        </div>` : ''}

        <div class="flex gap-sm" style="justify-content:center;margin-top:22px">
          <button class="btn btn--primary" id="retryExam" data-mod="${m.id}">${icon('refresh')} Erneut versuchen</button>
          <a class="btn btn--outline" href="#/modul/${m.id}">Zurück zum Modul</a>
        </div>
      </div>

      ${wrongList.length ? `<div class="card card--pad" style="margin-top:20px">
        <h3 style="margin-bottom:14px">${icon('eye').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Das solltest du dir nochmal ansehen</h3>
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
  const start = root.querySelector('#startExam');
  const startS = root.querySelector('#startExamShuffle');
  if (start) start.addEventListener('click', () => { startExam(start.dataset.mod, false); rerender(); });
  if (startS) startS.addEventListener('click', () => { startExam(startS.dataset.mod, true); rerender(); });

  if (!session) return;
  const q = session.questions[session.current];
  const answered = session.answers[session.current];

  // Antwortauswahl
  if (!answered) {
    root.querySelectorAll('#options .opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.opt;
        if (q.type === 'multiple') {
          btn.classList.toggle('selected');
        } else {
          recordAnswer([i]);
          rerender();
        }
      });
    });
    const confirmM = root.querySelector('#confirmMulti');
    if (confirmM) confirmM.addEventListener('click', () => {
      const sel = [...root.querySelectorAll('#options .opt.selected')].map(b => +b.dataset.opt);
      if (!sel.length) { toast('Bitte mindestens eine Antwort wählen', 'bolt'); return; }
      recordAnswer(sel);
      rerender();
    });
  }

  const nextQ = root.querySelector('#nextQ');
  if (nextQ) nextQ.addEventListener('click', () => { session.current++; rerender(); });

  const finish = root.querySelector('#finishExam');
  if (finish) finish.addEventListener('click', () => {
    const r = grade();
    session.reviewing = true; session.finished = true;
    saveExamResult(session.moduleId, { score: r.score, passed: r.passed, correct: r.correct, total: r.total });
    logActivity('exam', session.moduleId, { moduleId: session.moduleId, title: MODULE_BY_ID[session.moduleId].title + ' · ' + r.score + '%' });
    if (r.passed) { confetti(); toast(`Bestanden mit ${r.score}%! +50 XP`, 'star'); }
    else toast(`${r.score}% – weiter üben! +10 XP`, 'bolt');
    rerender();
  });

  const retry = root.querySelector('#retryExam');
  if (retry) retry.addEventListener('click', () => { startExam(retry.dataset.mod, true); rerender(); });
}

function recordAnswer(selected) {
  const q = session.questions[session.current];
  const correct = selected.length === q.correct.length && selected.every(i => q.correct.includes(i));
  session.answers[session.current] = { selected: selected.sort(), correct };
}

export function resetExamSession() { session = null; }
