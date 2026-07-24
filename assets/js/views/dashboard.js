/* =========================================================================
   VIEW: Dashboard — personalisierte Startseite
   Adaptive Lernempfehlung, Fortschritt, Statistiken, Verlauf.
   ========================================================================= */
import { MODULES, MODULE_BY_ID, CATEGORIES, LEVELS, LESSON_COUNT } from '../data/curriculum.js';
import { EXAMS, TOTAL_QUESTIONS } from '../data/exams.js';
import { PLANSPIELE } from '../data/planspiele.js';
import { EINSATZKOMPASS } from '../data/einsatzkompass.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam, level, todayStr, mistakeStats } from '../state.js';
import { esc, fmtDateTime, fmtDuration } from '../utils.js';

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return 'Gute Nacht';
  if (h < 11) return 'Guten Morgen';
  if (h < 18) return 'Guten Tag';
  return 'Guten Abend';
}

/** Adaptive Empfehlung: nächstes sinnvolles Modul für die Person */
export function recommendModule() {
  const s = getState();
  const userLevel = s.profile?.level || 1;

  // 1) angefangene, aber unfertige Module
  const inProgress = MODULES.filter(m => {
    const p = moduleProgress(m.id, m.lessons.length);
    return p.done > 0 && p.done < p.total;
  });
  if (inProgress.length) return { module: inProgress[0], reason: 'Weitermachen, wo du aufgehört hast' };

  // 2) bestandene Lektionen, aber Prüfung noch offen
  const learnedNotTested = MODULES.filter(m => {
    const p = moduleProgress(m.id, m.lessons.length);
    return p.pct === 100 && !isModulePassed(m.id) && EXAMS[m.id];
  });
  if (learnedNotTested.length) return { module: learnedNotTested[0], reason: 'Lektionen fertig – jetzt die Prüfung' };

  // 3) neues Modul passend zum Level (aufsteigend)
  const untouched = MODULES
    .filter(m => moduleProgress(m.id, m.lessons.length).done === 0)
    .sort((a, b) => Math.abs(a.level - userLevel) - Math.abs(b.level - userLevel) || a.level - b.level);
  if (untouched.length) return { module: untouched[0], reason: 'Empfohlen für dein Ausbildungsziel' };

  // 4) alles begonnen → Wiederholung des schwächsten Prüfungsmoduls
  const weakest = MODULES
    .map(m => ({ m, best: bestExam(m.id) }))
    .filter(x => x.best)
    .sort((a, b) => a.best.score - b.best.score)[0];
  return { module: weakest ? weakest.m : MODULES[0], reason: 'Wissen auffrischen' };
}

function overallStats() {
  const s = getState();
  let lessonsDone = 0;
  MODULES.forEach(m => { lessonsDone += moduleProgress(m.id, m.lessons.length).done; });
  const passed = MODULES.filter(m => isModulePassed(m.id)).length;
  const examsTaken = Object.values(s.examResults).reduce((n, a) => n + a.length, 0);
  const planspiele = Object.values(s.planspielResults).reduce((n, a) => n + a.length, 0);
  const overallPct = Math.round(lessonsDone / LESSON_COUNT * 100);
  return { lessonsDone, passed, examsTaken, planspiele, overallPct };
}

export function renderDashboard() {
  const s = getState();
  const st = overallStats();
  const rec = recommendModule();
  const recP = moduleProgress(rec.module.id, rec.module.lessons.length);
  const cat = CATEGORIES[rec.module.category];
  const lvl = level();
  const xpInLevel = (s.xp || 0) % 100;
  const ms = mistakeStats();

  return `
  <div class="view fade-up">
    <section class="hero stack">
      <div class="between wrap">
        <div>
          <div style="font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;color:var(--fw-amber);font-weight:800">${greeting()}${s.profile?.name ? ', ' + esc(s.profile.name.split(' ')[0]) : ''}</div>
          <h1>Bereit für die nächste Einheit?</h1>
          <p>${s.profile?.role ? esc(s.profile.role) + ' · ' : ''}${LEVELS[s.profile?.level || 1]} · Level ${lvl}</p>
        </div>
        <div class="ring" style="--p:${xpInLevel}"><div style="text-align:center"><b>${lvl}</b><small>${xpInLevel}/100 XP</small></div></div>
      </div>
      <div class="hero__stats">
        <div class="hero__stat"><b>${st.overallPct}%</b><span>Gesamtfortschritt</span></div>
        <div class="hero__stat"><b>${st.lessonsDone}/${LESSON_COUNT}</b><span>Lektionen</span></div>
        <div class="hero__stat"><b>${st.passed}</b><span>Prüfungen bestanden</span></div>
        <div class="hero__stat"><b>${s.streak.count}🔥</b><span>Tage-Streak</span></div>
      </div>
    </section>

    <div class="grid" style="grid-template-columns:1.6fr 1fr;margin-top:22px;align-items:start" id="dashCols">
      <!-- Empfehlung -->
      <section class="stack">
        <div class="card card--pad">
          <div class="badge badge--red badge--dot" style="margin-bottom:10px">Deine nächste Empfehlung</div>
          <div class="between wrap" style="align-items:flex-start;gap:20px">
            <div style="flex:1;min-width:240px">
              <div class="mcard__cat">${esc(cat.label)} · ${esc(LEVELS[rec.module.level])}</div>
              <h2 style="margin:.2em 0">${esc(rec.module.title)}</h2>
              <p class="muted">${esc(rec.reason)}. ${esc(rec.module.summary)}</p>
              <div class="progress" style="max-width:320px"><i style="width:${recP.pct}%"></i></div>
              <p class="subtle" style="font-size:.85rem;margin:.5em 0 0">${recP.done}/${recP.total} Lektionen · ${fmtDuration(rec.module.duration)}</p>
            </div>
            <div style="width:64px;height:64px;border-radius:16px;display:grid;place-items:center;background:${cat.color}22;color:${cat.color};flex:none">
              ${icon(rec.module.icon).replace('<svg ', '<svg style="width:32px;height:32px" ')}
            </div>
          </div>
          <div class="flex gap-sm wrap" style="margin-top:18px">
            <a class="btn btn--primary" href="#/modul/${rec.module.id}">${icon('play')} ${recP.done ? 'Weiterlernen' : 'Modul starten'}</a>
            ${EXAMS[rec.module.id] ? `<a class="btn btn--outline" href="#/pruefung/${rec.module.id}">${icon('exam')} Prüfung</a>` : ''}
          </div>
        </div>

        ${ms.open ? `<a href="#/wiederholung" class="card card--pad card--interactive between wrap" style="text-decoration:none;color:inherit;gap:14px;border-left:4px solid var(--fw-red)">
          <span class="flex gap-md" style="align-items:center;min-width:0">
            <span style="width:44px;height:44px;border-radius:12px;background:var(--warn-bg,#f5a62322);color:var(--warn,#c98a00);display:grid;place-items:center;flex:none">${icon('refresh').replace('<svg ', '<svg style="width:24px;height:24px" ')}</span>
            <span style="min-width:0"><b>Meine Schwachstellen wiederholen</b><span class="subtle" style="display:block">${ms.open} ${ms.open === 1 ? 'Frage wartet' : 'Fragen warten'} – aus Fehlern lernst du am meisten.</span></span>
          </span>
          <span class="btn btn--primary" style="pointer-events:none;flex:none">${ms.open} üben ${icon('arrowr')}</span>
        </a>` : ''}

        <!-- Schnellzugriff Kacheln -->
        <div class="tiles">
          <a href="#/module" class="card card--pad card--interactive tile" style="text-decoration:none;color:inherit">
            <div class="tile__icon i-red">${icon('book')}</div>
            <div><b>${MODULES.length}</b><span>Module A–Z</span></div>
          </a>
          <a href="#/pruefungen" class="card card--pad card--interactive tile" style="text-decoration:none;color:inherit">
            <div class="tile__icon i-blue">${icon('exam')}</div>
            <div><b>${TOTAL_QUESTIONS}</b><span>Prüfungsfragen</span></div>
          </a>
          <a href="#/planspiele" class="card card--pad card--interactive tile" style="text-decoration:none;color:inherit">
            <div class="tile__icon i-amber">${icon('game')}</div>
            <div><b>${PLANSPIELE.length}</b><span>Planspiele</span></div>
          </a>
          <a href="#/einsatzkompass" class="card card--pad card--interactive tile" style="text-decoration:none;color:inherit">
            <div class="tile__icon i-purple">${icon('compass')}</div>
            <div><b>${EINSATZKOMPASS.length}</b><span>Einsatzkompass</span></div>
          </a>
          <a href="#/lernpfad" class="card card--pad card--interactive tile" style="text-decoration:none;color:inherit">
            <div class="tile__icon i-green">${icon('path')}</div>
            <div><b>${st.overallPct}%</b><span>Lernpfad</span></div>
          </a>
        </div>
      </section>

      <!-- Seitenspalte -->
      <aside class="stack">
        <div class="card card--pad">
          <h3 style="margin-bottom:14px">${icon('chart').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Dein Überblick</h3>
          ${statRow('Prüfungen absolviert', st.examsTaken)}
          ${statRow('Planspiele gespielt', st.planspiele)}
          ${statRow('Gesamt-XP', s.xp || 0)}
          ${statRow('Tage-Streak', s.streak.count + ' 🔥')}
        </div>
        <div class="card card--pad">
          <h3 style="margin-bottom:12px">${icon('clock').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Letzte Aktivitäten</h3>
          ${renderActivity(s)}
        </div>
      </aside>
    </div>
  </div>`;
}

function statRow(label, val) {
  return `<div class="between" style="padding:7px 0;border-bottom:1px solid var(--border)"><span class="muted">${label}</span><b>${val}</b></div>`;
}

function renderActivity(s) {
  if (!s.activity.length) return `<p class="subtle" style="font-size:.9rem">Noch keine Aktivität. Starte dein erstes Modul!</p>`;
  const labels = { lesson: 'Lektion abgeschlossen', exam: 'Prüfung', planspiel: 'Planspiel', module: 'Modul geöffnet', review: 'Wiederholung' };
  return `<ul style="list-style:none;padding:0;margin:0;display:grid;gap:10px">${
    s.activity.slice(0, 6).map(a => {
      const m = MODULE_BY_ID[a.meta?.moduleId] || MODULE_BY_ID[a.ref];
      const title = a.meta?.title || m?.title || a.ref;
      const ic = a.type === 'exam' ? 'exam' : a.type === 'planspiel' ? 'game' : a.type === 'review' ? 'refresh' : 'check';
      return `<li class="flex gap-sm" style="align-items:center;font-size:.88rem">
        <span style="width:30px;height:30px;border-radius:8px;background:var(--surface-2);display:grid;place-items:center;flex:none;color:var(--fw-red)">${icon(ic).replace('<svg ','<svg style="width:16px;height:16px" ')}</span>
        <span style="flex:1;min-width:0"><b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(title)}</b><span class="subtle">${labels[a.type] || a.type} · ${fmtDateTime(a.date)}</span></span>
      </li>`;
    }).join('')
  }</ul>`;
}
