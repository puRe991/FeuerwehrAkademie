/* =========================================================================
   VIEWS: Lernpfad, Prüfungsübersicht, Suche
   ========================================================================= */
import { MODULES, CATEGORIES, LEVELS } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { PLANSPIELE } from '../data/planspiele.js';
import { GLOSSARY } from '../data/glossary.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam } from '../state.js';
import { esc, fmtDuration } from '../utils.js';
import { recommendModule } from './dashboard.js';

/* ---------- Adaptiver Lernpfad ---------- */
export function renderLernpfad() {
  const s = getState();
  const userLevel = s.profile?.level || 1;
  // Module nach Level sortiert = empfohlene Reihenfolge
  const ordered = [...MODULES].sort((a, b) => a.level - b.level || a.code.localeCompare(b.code));
  const rec = recommendModule();

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Dein Lernpfad</h1>
      <p class="muted">Ein empfohlener Weg von den Grundlagen bis zur Führung – angepasst an dein Ausbildungsniveau (${esc(LEVELS[userLevel])}).</p>
    </div>

    <div class="grid" style="grid-template-columns:2fr 1fr;align-items:start" id="pathCols">
      <section class="card card--pad">
        <div class="path">
          ${ordered.map(m => {
            const p = moduleProgress(m.id, m.lessons.length);
            const passed = isModulePassed(m.id);
            const isCurrent = m.id === rec.module.id;
            const cls = passed || p.pct === 100 ? 'done' : isCurrent ? 'current' : '';
            const cat = CATEGORIES[m.category];
            return `<div class="path__node ${cls}">
              <div class="between wrap" style="gap:10px">
                <div style="min-width:0">
                  <div class="flex gap-sm" style="align-items:center">
                    <span class="badge" style="background:${cat.color}22;color:${cat.color};border:none">Modul ${m.code}</span>
                    <span class="subtle" style="font-size:.8rem">${esc(LEVELS[m.level])}</span>
                    ${isCurrent ? '<span class="badge badge--red badge--dot">Als Nächstes</span>' : ''}
                  </div>
                  <b style="display:block;margin:.3em 0 .1em">${esc(m.title)}</b>
                  <span class="subtle" style="font-size:.85rem">${p.done}/${p.total} Lektionen${passed ? ' · Prüfung bestanden ✔' : ''}</span>
                </div>
                <a class="btn btn--sm ${isCurrent ? 'btn--primary' : 'btn--outline'}" href="#/modul/${m.id}">${p.done ? 'Weiter' : 'Start'}</a>
              </div>
            </div>`;
          }).join('')}
          <div class="path__node">
            <b>🎓 Führungslaufbahn</b>
            <p class="subtle" style="font-size:.85rem;margin:.2em 0 0">Nach den Fachmodulen: vertiefe Führung mit den Planspielen.</p>
            <a class="btn btn--sm btn--outline" href="#/planspiele" style="margin-top:8px">Zu den Planspielen</a>
          </div>
        </div>
      </section>

      <aside class="stack">
        <div class="card card--pad">
          <h3 style="margin-bottom:10px">${icon('target').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Dein Ziel</h3>
          <p class="muted" style="font-size:.92rem">Arbeite die Module in dieser Reihenfolge durch. Jedes abgeschlossene Modul mit bestandener Prüfung bringt dich näher an das Top-Niveau.</p>
        </div>
        <div class="card card--pad">
          <h3 style="margin-bottom:10px">Nach Kategorie</h3>
          <div class="stack" style="--gap:8px">
            ${Object.entries(CATEGORIES).map(([id, c]) => {
              const mods = MODULES.filter(m => m.category === id);
              if (!mods.length) return '';
              const done = mods.filter(m => moduleProgress(m.id, m.lessons.length).pct === 100).length;
              return `<div class="between"><span class="flex gap-sm" style="align-items:center;font-size:.9rem"><span style="width:10px;height:10px;border-radius:50%;background:${c.color}"></span>${esc(c.label)}</span><b>${done}/${mods.length}</b></div>`;
            }).join('')}
          </div>
        </div>
      </aside>
    </div>
  </div>`;
}

/* ---------- Prüfungsübersicht ---------- */
export function renderPruefungen() {
  const modsWithExam = MODULES.filter(m => EXAMS[m.id]);
  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Prüfungen</h1>
      <p class="muted">Weise dein Wissen nach. Jede bestandene Prüfung schaltet einen Leistungsnachweis frei.</p>
    </div>
    <div class="module-grid">
      ${modsWithExam.map(m => {
        const exam = EXAMS[m.id];
        const best = bestExam(m.id);
        const passed = isModulePassed(m.id);
        const cat = CATEGORIES[m.category];
        return `<article class="card card--pad card--interactive stack" style="--gap:12px">
          <div class="between">
            <span class="badge" style="background:${cat.color}22;color:${cat.color};border:none">Modul ${m.code}</span>
            ${passed ? `<span class="badge badge--green">${best.score}% ✔</span>` : best ? `<span class="badge badge--amber">${best.score}%</span>` : `<span class="badge">Neu</span>`}
          </div>
          <h3 style="margin:0">${esc(m.title)}</h3>
          <div class="mcard__meta">
            <span>${icon('exam').replace('<svg ','<svg style="width:14px;height:14px" ')} ${exam.questions.length} Fragen</span>
            <span>${icon('target').replace('<svg ','<svg style="width:14px;height:14px" ')} ${exam.passScore}% Grenze</span>
          </div>
          <a class="btn ${passed ? 'btn--outline' : 'btn--primary'} btn--block" href="#/pruefung/${m.id}">${icon('play')} ${best ? 'Erneut prüfen' : 'Prüfung starten'}</a>
        </article>`;
      }).join('')}
    </div>
  </div>`;
}

/* ---------- Suche ---------- */
export function searchAll(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results = [];
  MODULES.forEach(m => {
    if (m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q) || m.tags.some(t => t.toLowerCase().includes(q)) || m.code.toLowerCase() === q) {
      results.push({ type: 'Modul', title: m.title, sub: CATEGORIES[m.category].label, href: `#/modul/${m.id}`, icon: m.icon });
    }
    m.lessons.forEach(l => {
      if (l.title.toLowerCase().includes(q)) results.push({ type: 'Lektion', title: l.title, sub: m.title, href: `#/lektion/${m.id}/${l.id}`, icon: 'book' });
    });
  });
  PLANSPIELE.forEach(p => {
    if (p.title.toLowerCase().includes(q) || p.role.toLowerCase().includes(q)) {
      results.push({ type: 'Planspiel', title: p.title, sub: p.role, href: `#/planspiel/${p.id}`, icon: 'game' });
    }
  });
  GLOSSARY.forEach(g => {
    if (g.term.toLowerCase().includes(q)) {
      results.push({ type: 'Glossar', title: g.term, sub: g.def.slice(0, 60) + '…', href: `#/glossar/${encodeURIComponent(g.term)}`, icon: 'search' });
    }
  });
  return results.slice(0, 14);
}

export function renderSearch(query) {
  const results = searchAll(query || '');
  return `
  <div class="view fade-up">
    <div class="view__head"><h1>Suche</h1><p class="muted">${query ? `Ergebnisse für „${esc(query)}"` : 'Suche nach Modulen, Lektionen und Planspielen.'}</p></div>
    ${!query ? `<div class="empty">${icon('search')}<p>Gib oben einen Suchbegriff ein.</p></div>`
      : results.length ? `<div class="stack">${results.map(r => `<a class="card card--pad card--interactive flex gap-md" style="align-items:center;text-decoration:none;color:inherit" href="${r.href}">
          <div style="width:42px;height:42px;border-radius:12px;background:var(--surface-2);display:grid;place-items:center;flex:none;color:var(--fw-red)">${icon(r.icon).replace('<svg ','<svg style="width:22px;height:22px" ')}</div>
          <div style="flex:1;min-width:0"><b>${esc(r.title)}</b><div class="subtle" style="font-size:.85rem">${esc(r.type)} · ${esc(r.sub)}</div></div>
          ${icon('arrowr').replace('<svg ','<svg style="width:20px;height:20px;color:var(--text-subtle)" ')}
        </a>`).join('')}</div>`
      : `<div class="empty">${icon('search')}<p>Keine Ergebnisse für „${esc(query)}".</p></div>`}
  </div>`;
}
