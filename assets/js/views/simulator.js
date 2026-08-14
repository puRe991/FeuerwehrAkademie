/* =========================================================================
   VIEW: Prüfungssimulator (Ernstmodus) — echte Prüfungssituation.
   Countdown mit Zeitlimit, keine Sofort-Auflösung, freie Navigation und
   Markierungen, am Ende Bestanden/Durchgefallen mit Prüfungszeugnis.
   Nutzt dieselben Fragenpools wie die Übungsprüfungen (Modul oder Set).
   ========================================================================= */
import { MODULE_BY_ID } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { EXAM_SET_BY_ID, buildSetQuestions, setSize } from '../data/pruefungssets.js';
import { figureHTML } from '../data/exam-figures.js';
import { icon } from '../data/icons.js';
import { saveExamResult, logActivity, recordQuestionResult, bestExam, completeLesson } from '../state.js';
import { esc, shuffle, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

let session = null;
let timerHandle = null;
let rerenderRef = null;

/* Prüfungskontext auflösen (Modul oder Set) */
function resolveSim(id) {
  const set = EXAM_SET_BY_ID[id];
  if (set) return { kind: 'set', id, title: set.title, back: '#/pruefungen',
    passScore: set.passScore, timeLimit: set.timeLimit, set, questionCount: setSize(set) };
  const m = MODULE_BY_ID[id], e = EXAMS[id];
  if (m && e) return { kind: 'module', id, title: m.title, back: `#/modul/${id}`,
    passScore: e.passScore, timeLimit: e.timeLimit, module: m, exam: e, questionCount: e.questions.length };
  return null;
}

function fmtClock(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function renderSimulator(id) {
  const ctx = resolveSim(id);
  if (!ctx) return notFound();
  if (session && session.id === id && session.reviewing) return simResult();
  if (!session || session.id !== id || session.finished) return simIntro(ctx);
  return simQuestion();
}

function simIntro(ctx) {
  const best = bestExam(ctx.id);
  const backLabel = ctx.kind === 'set' ? 'Prüfungen' : ctx.module.title;
  const mins = Math.round(ctx.timeLimit / 60);
  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="${ctx.back}">${esc(backLabel)}</a><span class="sep">/</span><span>Simulator</span></div>
    <div class="exam-shell">
      <div class="card card--pad center stack">
        <div style="width:72px;height:72px;border-radius:20px;background:var(--warn-bg,#f5a62322);color:var(--warn,#c98a00);display:grid;place-items:center;margin:0 auto">
          ${icon('clock').replace('<svg ', '<svg style="width:38px;height:38px" ')}
        </div>
        <div class="badge badge--red badge--dot">Ernstmodus</div>
        <h1>Prüfungssimulator: ${esc(ctx.title)}</h1>
        <p class="muted" style="max-width:520px;margin:0 auto">Wie in der echten Prüfung: fester Zeitrahmen, <b>keine Auflösung während der Prüfung</b>, freie Navigation zwischen den Fragen. Erst nach Abgabe siehst du Ergebnis und Erklärungen.</p>
        <div class="tiles" style="grid-template-columns:repeat(3,1fr);max-width:520px;margin:8px auto 0">
          <div class="card card--pad center"><b style="font-size:1.6rem">${ctx.questionCount}</b><span class="subtle">Fragen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${ctx.passScore}%</b><span class="subtle">zum Bestehen</span></div>
          <div class="card card--pad center"><b style="font-size:1.6rem">${mins}:00</b><span class="subtle">Zeitlimit</span></div>
        </div>
        ${best ? `<div class="callout ${best.passed ? 'callout--ok' : 'callout--warn'}" style="text-align:left;max-width:520px;margin:8px auto 0"><b>Bisher bestes Ergebnis: ${best.score}%</b> ${best.passed ? '– bestanden ✔' : ''}</div>` : ''}
        <div class="callout callout--warn" style="text-align:left;max-width:520px;margin:2px auto 0;font-size:.88rem">
          ${icon('bolt').replace('<svg ', '<svg style="width:15px;height:15px;vertical-align:-2px" ')} Läuft die Zeit ab, wird automatisch abgegeben. Verlässt du den Simulator, wird der Lauf verworfen.
        </div>
        <button class="btn btn--primary btn--lg" data-sim-start="${ctx.id}">${icon('play')} Simulation starten</button>
        <a class="btn btn--ghost" href="#/pruefung/${ctx.id}">Lieber im Übungsmodus (mit Erklärungen)</a>
      </div>
    </div>
  </div>`;
}

export function startSim(id) {
  const ctx = resolveSim(id);
  if (!ctx) return;
  let pool = ctx.kind === 'set' ? buildSetQuestions(ctx.set) : ctx.exam.questions.slice();
  pool = shuffle(pool).map(q => {
    const order = shuffle(q.options.map((_, i) => i));
    return { ...q, options: order.map(i => q.options[i]), correct: q.correct.map(c => order.indexOf(c)).sort() };
  });
  session = {
    id, kind: ctx.kind, title: ctx.title, back: ctx.back, passScore: ctx.passScore,
    timeLimit: ctx.timeLimit, questions: pool, current: 0,
    answers: pool.map(() => null), flags: pool.map(() => false),
    startTime: Date.now(), endTime: Date.now() + ctx.timeLimit * 1000,
    finished: false, reviewing: false,
  };
}

function simQuestion() {
  const q = session.questions[session.current];
  const total = session.questions.length;
  const sel = session.answers[session.current] || [];
  const isMulti = q.type === 'multiple';
  const answeredCount = session.answers.filter(a => a && a.length).length;
  const remaining = session.endTime - Date.now();

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="exam-bar">
        <button class="iconbtn" id="simQuit" title="Prüfung abbrechen">${icon('x')}</button>
        <div class="progress" role="progressbar" aria-label="Prüfungsfortschritt" aria-valuenow="${session.current}" aria-valuemin="0" aria-valuemax="${total}"><i style="width:${Math.round(session.current / total * 100)}%"></i></div>
        <span class="sim-clock ${remaining < 60000 ? 'sim-clock--warn' : ''}" id="simClock" role="timer" aria-label="Verbleibende Zeit" title="Verbleibende Zeit">${icon('clock').replace('<svg ', '<svg style="width:15px;height:15px;vertical-align:-2px" ')} ${fmtClock(remaining)}</span>
      </div>

      <div class="card q-card">
        <div class="between">
          <span class="q-num">Frage ${session.current + 1} / ${total}${isMulti ? ' · Mehrfachauswahl' : q.type === 'truefalse' ? ' · Wahr/Falsch' : ''}</span>
          <button class="btn btn--sm ${session.flags[session.current] ? 'btn--primary' : 'btn--outline'}" id="simFlag">${icon('star').replace('<svg ', `<svg style="width:14px;height:14px;vertical-align:-2px" fill="${session.flags[session.current] ? 'currentColor' : 'none'}" `)} Markieren</button>
        </div>
        <h2 class="q-text">${esc(q.q)}</h2>
        ${figureHTML(q)}

        <div class="options" id="options" role="group" aria-label="Antwortoptionen">
          ${q.options.map((opt, i) => `<button class="opt ${sel.includes(i) ? 'selected' : ''}" data-opt="${i}" aria-pressed="${sel.includes(i) ? 'true' : 'false'}">
            <span class="opt__key">${sel.includes(i) ? '✓' : String.fromCharCode(65 + i)}</span>
            <span>${esc(opt)}</span>
          </button>`).join('')}
        </div>
        ${isMulti ? `<p class="subtle" style="margin-top:12px;font-size:.85rem">Mehrere Antworten möglich – Auswahl bleibt gespeichert.</p>` : ''}

        <div class="between wrap" style="margin-top:22px;gap:12px">
          <button class="btn btn--outline" id="simPrev" ${session.current === 0 ? 'disabled' : ''}>${icon('arrowl') || ''} Zurück</button>
          ${session.current < total - 1
            ? `<button class="btn btn--primary" id="simNext">Weiter ${icon('arrowr')}</button>`
            : `<button class="btn btn--primary" id="simSubmit">${icon('award')} Prüfung abgeben</button>`}
        </div>
      </div>

      <div class="card card--pad">
        <div class="between" style="margin-bottom:10px">
          <b style="font-size:.9rem">Übersicht</b>
          <span class="subtle" style="font-size:.82rem">${answeredCount}/${total} beantwortet</span>
        </div>
        <div class="sim-grid">
          ${session.questions.map((_, i) => {
            const done = session.answers[i] && session.answers[i].length;
            const cls = ['sim-cell'];
            if (i === session.current) cls.push('sim-cell--current');
            if (done) cls.push('sim-cell--done');
            if (session.flags[i]) cls.push('sim-cell--flag');
            return `<button class="${cls.join(' ')}" data-jump="${i}" title="Frage ${i + 1}${session.flags[i] ? ' · markiert' : ''}">${i + 1}</button>`;
          }).join('')}
        </div>
        <button class="btn btn--primary btn--block" id="simSubmit2" style="margin-top:14px">${icon('award')} Jetzt abgeben & auswerten</button>
      </div>
    </div>
  </div>`;
}

function grade() {
  let correct = 0;
  session.questions.forEach((q, i) => {
    const sel = session.answers[i] || [];
    if (sel.length === q.correct.length && sel.every(x => q.correct.includes(x))) correct++;
  });
  const total = session.questions.length;
  const score = Math.round(correct / total * 100);
  return { correct, total, score, passed: score >= session.passScore };
}

function finishSim(auto = false) {
  if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  const r = grade();
  session.reviewing = true; session.finished = true;
  session.result = r;
  session.timeUsed = Math.min(session.timeLimit, Math.round((Date.now() - session.startTime) / 1000));
  session.questions.forEach((q, i) => {
    const sel = session.answers[i] || [];
    const ok = sel.length === q.correct.length && sel.every(x => q.correct.includes(x));
    recordQuestionResult(q.id, ok);
  });
  saveExamResult(session.id, { score: r.score, passed: r.passed, correct: r.correct, total: r.total, kind: session.kind, mode: 'simulator' });
  logActivity('exam', session.id, { moduleId: session.id, title: session.title + ' · Simulation · ' + r.score + '%' });
  if (r.passed && session.kind === 'module') {
    // Bestandene Modulprüfung schließt automatisch das gesamte Lernfeld ab.
    const m = MODULE_BY_ID[session.id];
    if (m) m.lessons.forEach(l => completeLesson(session.id, l.id));
  }
  if (r.passed) { confetti(); toast(`Bestanden mit ${r.score}%! +50 XP`, 'star'); }
  else toast(`${auto ? 'Zeit abgelaufen – ' : ''}${r.score}% – weiter üben! +10 XP`, 'bolt');
}

function simResult() {
  const r = session.result || grade();
  const used = session.timeUsed || 0;
  const wrong = session.questions
    .map((q, i) => ({ q, sel: session.answers[i] || [], i }))
    .filter(x => !(x.sel.length === x.q.correct.length && x.sel.every(s => x.q.correct.includes(s))));

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="card card--pad result-hero">
        <div class="ring result-ring" style="--p:${r.score};${r.passed ? '' : '--fw-red:var(--warn)'}">
          <div style="text-align:center"><b>${r.score}%</b><small>${r.correct}/${r.total} richtig</small></div>
        </div>
        <h1 style="margin-top:6px">${r.passed ? 'Bestanden! 🎉' : 'Durchgefallen'}</h1>
        <p class="muted">${r.passed
          ? `Du hast die Bestehensgrenze von ${session.passScore}% erreicht – benötigte Zeit: ${fmtClock(used * 1000)} min.`
          : `Für das Bestehen brauchst du ${session.passScore}%. Analysiere unten deine Fehler und tritt erneut an.`}</p>

        ${r.passed ? `<div class="card card--pad" style="max-width:480px;margin:20px auto 0;border:2px dashed var(--ok);background:var(--ok-bg);text-align:left">
          <div class="flex gap-md" style="align-items:center">
            ${icon('award').replace('<svg ', '<svg style="width:40px;height:40px;color:var(--ok);flex:none" ')}
            <div style="flex:1">
              <b>Prüfungszeugnis</b>
              <div class="subtle" style="font-size:.85rem">${esc(session.title)} · ${r.score}% · ${new Date().toLocaleDateString('de-DE')}</div>
            </div>
            <button class="btn btn--outline btn--sm" id="simPrint">${icon('download')} Zeugnis</button>
          </div>
        </div>` : ''}

        <div class="flex gap-sm" style="justify-content:center;margin-top:22px">
          <button class="btn btn--primary" id="simRetry">${icon('refresh')} Neue Simulation</button>
          <a class="btn btn--outline" href="${session.back}">Zurück</a>
          ${wrong.length ? `<a class="btn btn--ghost" href="#/wiederholung">Fehler wiederholen</a>` : ''}
        </div>
      </div>

      ${wrong.length ? `<div class="card card--pad" style="margin-top:20px">
        <h3 style="margin-bottom:14px">${icon('eye').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Auswertung deiner Fehler (${wrong.length})</h3>
        <div class="stack">
          ${wrong.map(x => `<div class="callout callout--warn" style="margin:0">
            <b>${esc(x.q.q)}</b>
            ${figureHTML(x.q)}
            <p style="margin:.4em 0 0">Deine Antwort: <b>${x.sel.length ? x.sel.map(s => esc(x.q.options[s])).join(', ') : '—'}</b><br>
            Richtig: <b>${x.q.correct.map(c => esc(x.q.options[c])).join(', ')}</b>. ${esc(x.q.exp)}</p>
          </div>`).join('')}
        </div>
      </div>` : `<div class="card card--pad center" style="margin-top:20px"><p class="muted" style="margin:0">Perfekt – alle Fragen richtig! 🏆</p></div>`}
    </div>
  </div>`;
}

export function bindSimulator(root, rerender) {
  rerenderRef = rerender;

  root.querySelectorAll('[data-sim-start]').forEach(btn =>
    btn.addEventListener('click', () => { startSim(btn.dataset.simStart); rerender(); }));

  if (!session) return;

  // Timer nur im laufenden Prüfungsmodus
  if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  if (!session.finished && !session.reviewing) {
    timerHandle = setInterval(() => {
      const remaining = session.endTime - Date.now();
      const el = document.getElementById('simClock');
      if (el) {
        el.innerHTML = `${icon('clock').replace('<svg ', '<svg style="width:15px;height:15px;vertical-align:-2px" ')} ${fmtClock(remaining)}`;
        el.classList.toggle('sim-clock--warn', remaining < 60000);
      }
      if (remaining <= 0) { finishSim(true); rerenderRef(); }
    }, 1000);
  }

  // Antwort-Auswahl
  root.querySelectorAll('#options .opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.opt;
      const q = session.questions[session.current];
      let sel = session.answers[session.current] || [];
      if (q.type === 'multiple') {
        sel = sel.includes(i) ? sel.filter(x => x !== i) : [...sel, i];
      } else {
        sel = sel.includes(i) ? [] : [i]; // erneuter Klick hebt Auswahl auf
      }
      session.answers[session.current] = sel.sort((a, b) => a - b);
      rerender();
    });
  });

  root.querySelector('#simFlag')?.addEventListener('click', () => {
    session.flags[session.current] = !session.flags[session.current]; rerender();
  });
  root.querySelector('#simPrev')?.addEventListener('click', () => { if (session.current > 0) { session.current--; rerender(); } });
  root.querySelector('#simNext')?.addEventListener('click', () => { if (session.current < session.questions.length - 1) { session.current++; rerender(); } });
  root.querySelectorAll('[data-jump]').forEach(btn =>
    btn.addEventListener('click', () => { session.current = +btn.dataset.jump; rerender(); }));

  const submit = () => {
    const open = session.answers.filter(a => !a || !a.length).length;
    if (open && !confirm(`${open} Frage(n) noch unbeantwortet. Trotzdem abgeben?`)) return;
    finishSim(false); rerender();
  };
  root.querySelector('#simSubmit')?.addEventListener('click', submit);
  root.querySelector('#simSubmit2')?.addEventListener('click', submit);

  root.querySelector('#simQuit')?.addEventListener('click', () => {
    if (confirm('Prüfung abbrechen? Der Lauf wird verworfen.')) { resetSimulatorSession(); location.hash = session ? session.back : '#/pruefungen'; }
  });

  root.querySelector('#simRetry')?.addEventListener('click', () => { startSim(session.id); rerender(); });
  root.querySelector('#simPrint')?.addEventListener('click', printCertificate);
}

function printCertificate() {
  const r = session.result || grade();
  const w = window.open('', '_blank');
  if (!w) { toast('Bitte Pop-ups erlauben', 'bolt'); return; }
  const date = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
  w.document.write(`<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Prüfungszeugnis – ${esc(session.title)}</title>
    <style>
      body{font-family:system-ui,Arial,sans-serif;color:#111;margin:0;padding:48px;line-height:1.5}
      .cert{max-width:720px;margin:0 auto;border:3px solid #d81f26;border-radius:16px;padding:40px 48px;text-align:center}
      .kicker{letter-spacing:.22em;text-transform:uppercase;font-size:12px;color:#d81f26;font-weight:800}
      h1{font-size:30px;margin:6px 0 2px}
      .sub{color:#555;margin:0 0 24px}
      .score{font-size:64px;font-weight:800;color:#2e9e5b;margin:10px 0 0}
      .meta{display:flex;justify-content:center;gap:28px;margin:22px 0;flex-wrap:wrap;font-size:15px}
      .meta b{display:block;font-size:20px}
      .foot{margin-top:28px;border-top:1px solid #ddd;padding-top:14px;font-size:12px;color:#888}
      button{margin-top:24px;padding:10px 20px;border:0;border-radius:8px;background:#d81f26;color:#fff;font-weight:700;cursor:pointer}
      @media print{button{display:none}}
    </style></head><body>
    <div class="cert">
      <div class="kicker">Feuerwehr Online Akademie · Prüfungssimulator</div>
      <h1>Prüfungszeugnis</h1>
      <p class="sub">${esc(session.title)}</p>
      <div class="score">${r.score}%</div>
      <div style="color:#2e9e5b;font-weight:700">BESTANDEN</div>
      <div class="meta">
        <div><span>Richtige Antworten</span><b>${r.correct} / ${r.total}</b></div>
        <div><span>Bestehensgrenze</span><b>${session.passScore}%</b></div>
        <div><span>Benötigte Zeit</span><b>${fmtClock((session.timeUsed || 0) * 1000)} min</b></div>
      </div>
      <p style="color:#444">Ausgestellt am ${date}</p>
      <div class="foot">Übungszeugnis ohne rechtsverbindlichen Charakter. Ersetzt keine offizielle Prüfung oder Ausbildung. Maßgeblich sind die geltenden FwDV und die Vorschriften des Bundeslandes bzw. der Feuerwehr.</div>
      <button onclick="window.print()">Drucken / Als PDF speichern</button>
    </div>
  </body></html>`);
  w.document.close();
}

export function resetSimulatorSession() {
  if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  session = null;
}
