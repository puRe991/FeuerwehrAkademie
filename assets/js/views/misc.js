/* =========================================================================
   VIEWS: Lernpfad, Prüfungsübersicht, Suche
   ========================================================================= */
import { MODULES, CATEGORIES, LEVELS } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { EXAM_SETS, setSize } from '../data/pruefungssets.js';
import { PLANSPIELE } from '../data/planspiele.js';
import { GLOSSARY } from '../data/glossary.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam } from '../state.js';
import { esc, fmtDuration } from '../utils.js';
import { recommendModule } from './dashboard.js';

function shadeHex(hex, p) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + p));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + p));
  const b = Math.max(0, Math.min(255, (n & 255) + p));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

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
function examSetCard(set) {
  const best = bestExam(set.id);
  const passed = !!(best && best.passed);
  const tag = set.youth ? esc(set.badge || 'Jugendfeuerwehr') : esc(LEVELS[set.level] || '');
  return `<article class="card card--interactive mcard">
    <div class="mcard__banner" style="background:linear-gradient(135deg, ${set.color}, ${shadeHex(set.color,-28)});height:78px">
      ${icon(set.icon, 'mcard__ico')}
      <span class="mcard__code" style="opacity:.5">${set.youth ? '🧒' : (LEVELS[set.level]?.[0] || '')}</span>
    </div>
    <div class="mcard__body">
      <div class="between">
        <span class="mcard__cat">${tag}</span>
        ${passed ? `<span class="badge badge--green">${best.score}% ✔</span>` : best ? `<span class="badge badge--amber">${best.score}%</span>` : `<span class="badge">Neu</span>`}
      </div>
      <h3>${esc(set.title)}</h3>
      <p class="mcard__desc">${esc(set.desc)}</p>
      <div class="mcard__meta">
        <span>${icon('exam').replace('<svg ','<svg style="width:14px;height:14px" ')} ${setSize(set)} Fragen</span>
        <span>${icon('target').replace('<svg ','<svg style="width:14px;height:14px" ')} ${set.passScore}% Grenze</span>
      </div>
      <a class="btn ${passed ? 'btn--outline' : 'btn--primary'} btn--block mcard__foot" href="#/pruefung/${set.id}">${icon('play')} ${best ? 'Erneut prüfen' : 'Starten'}</a>
    </div>
  </article>`;
}

export function renderPruefungen() {
  const modsWithExam = MODULES.filter(m => EXAMS[m.id]);
  const proSets = EXAM_SETS.filter(s => !s.youth);
  const youthSets = EXAM_SETS.filter(s => s.youth);
  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Prüfungen</h1>
      <p class="muted">Weise dein Wissen nach. Modulprüfungen gibt es in drei Stufen (Grundlagen · Aufbau · Komplett); modulübergreifende Abschlussprüfungen bündeln ganze Ausbildungsabschnitte.</p>
    </div>

    <h2 style="margin-bottom:14px">${icon('award').replace('<svg ','<svg style="width:22px;height:22px;vertical-align:-4px" ')} Abschlussprüfungen</h2>
    <div class="module-grid" style="margin-bottom:34px">
      ${proSets.map(examSetCard).join('')}
    </div>

    ${youthSets.length ? `
    <h2 style="margin-bottom:6px">🧒 Jugendfeuerwehr – Abzeichen</h2>
    <p class="muted" style="margin-bottom:14px;max-width:70ch">Altersgerechte Übungsprüfungen zur Vorbereitung auf die <b>Jugendflamme</b> (Stufe 1–3) und die <b>Leistungsspange</b>. Sie ersetzen keine Abnahme vor Ort – die genauen Anforderungen legt eure Kreis-/Landesjugendfeuerwehr fest.</p>
    <div class="module-grid" style="margin-bottom:34px">
      ${youthSets.map(examSetCard).join('')}
    </div>` : ''}

    <h2 style="margin-bottom:14px">${icon('book').replace('<svg ','<svg style="width:22px;height:22px;vertical-align:-4px" ')} Modulprüfungen</h2>
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
