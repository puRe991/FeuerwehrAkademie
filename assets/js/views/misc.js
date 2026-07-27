/* =========================================================================
   VIEWS: Lernpfad, Prüfungsübersicht, Suche
   ========================================================================= */
import { MODULES, CATEGORIES, LEVELS } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { EXAM_SETS, setSize } from '../data/pruefungssets.js';
import { PLANSPIELE } from '../data/planspiele.js';
import { GLOSSARY } from '../data/glossary.js';
import { EINSATZKOMPASS } from '../data/einsatzkompass.js';
import { searchContent } from '../data/search-index.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam, mistakeStats } from '../state.js';
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
  const ms = mistakeStats();
  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Prüfungen</h1>
      <p class="muted">Zwei Modi: Die <b>Modulprüfungen</b> sind der <b>Übungsmodus</b> zum Lernen (drei Stufen: Grundlagen · Aufbau · Komplett, mit Erklärung nach jeder Frage). Die <b>Abschlussprüfungen</b> sind der <b>Prüfungsmodus</b> – Fragenzahl, Zeit und Bestehensgrenze sind an echte Lehrgangsprüfungen angelehnt (Truppmann/MTA, Atemschutz, Maschinist, Gruppen-/Zugführer). Bedenke: Eine echte Prüfung ist stets <b>schriftlich + praktisch</b>.</p>
    </div>

    ${ms.open ? `<a href="#/wiederholung" class="card card--pad card--interactive between wrap" style="text-decoration:none;color:inherit;gap:14px;margin-bottom:26px;border-left:4px solid var(--fw-red)">
      <span class="flex gap-md" style="align-items:center;min-width:0">
        <span style="width:44px;height:44px;border-radius:12px;background:var(--warn-bg,#f5a62322);color:var(--warn,#c98a00);display:grid;place-items:center;flex:none">${icon('refresh').replace('<svg ', '<svg style="width:24px;height:24px" ')}</span>
        <span style="min-width:0"><b>Meine Schwachstellen wiederholen</b><span class="subtle" style="display:block">${ms.open} falsch beantwortete ${ms.open === 1 ? 'Frage' : 'Fragen'} gezielt üben.</span></span>
      </span>
      <span class="btn btn--primary" style="pointer-events:none;flex:none">${ms.open} üben ${icon('arrowr')}</span>
    </a>` : ''}

    <h2 style="margin-bottom:6px">${icon('award').replace('<svg ','<svg style="width:22px;height:22px;vertical-align:-4px" ')} Abschlussprüfungen <span class="badge" style="background:#f5a62322;color:#c98a00;border:none;font-weight:600;vertical-align:middle">Prüfungsmodus</span></h2>
    <p class="muted" style="margin-bottom:14px;max-width:74ch">An echten Lehrgangsprüfungen kalibriert (Fragenzahl, Zeit, Bestehensgrenze). Beim Start jeder Prüfung erklärt ein <b>Realitätscheck</b>, welcher echten Prüfung sie entspricht.</p>
    <div class="module-grid" style="margin-bottom:34px">
      ${proSets.map(examSetCard).join('')}
    </div>

    ${youthSets.length ? `
    <h2 style="margin-bottom:6px">🧒 Jugendfeuerwehr – Abzeichen</h2>
    <p class="muted" style="margin-bottom:14px;max-width:70ch">Altersgerechte Übungsprüfungen zur Vorbereitung auf die <b>Jugendflamme</b> (Stufe 1–3) und die <b>Leistungsspange</b>. Sie ersetzen keine Abnahme vor Ort – die genauen Anforderungen legt eure Kreis-/Landesjugendfeuerwehr fest.</p>
    <div class="module-grid" style="margin-bottom:34px">
      ${youthSets.map(examSetCard).join('')}
    </div>` : ''}

    <h2 style="margin-bottom:6px">${icon('book').replace('<svg ','<svg style="width:22px;height:22px;vertical-align:-4px" ')} Modulprüfungen <span class="badge" style="background:var(--info-bg);color:var(--info);border:none;font-weight:600;vertical-align:middle">Übungsmodus</span></h2>
    <p class="muted" style="margin-bottom:14px;max-width:74ch">Zum Lernen und Vertiefen je Thema – mit Erklärung nach jeder Frage. Bestehensgrenze und Richtzeit sind wie in echten schriftlichen Prüfungen gehalten (50 %, Führung 60 %; rund 75 s pro Frage).</p>
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

/* ---------- Volltextsuche über alle Inhalte ---------- */
export function renderSearch(query) {
  const q = (query || '').trim();
  const { results, counts, total } = searchContent(q, 40);
  const countChips = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([type, n]) => `<span class="badge">${esc(type)} ${n}</span>`).join(' ');

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Suche</h1>
      <p class="muted">${q
        ? total ? `${total} Treffer für „${esc(q)}" in Modulen, Lektionen, Prüfungsfragen, Glossar, Planspielen, Einsatzkompass &amp; Vorschriften.`
                : `Keine Treffer für „${esc(q)}".`
        : 'Durchsucht den gesamten Inhalt: Module, Lektionstexte, Prüfungsfragen, Glossar, Planspiele, Einsatzkompass und FwDV-/Quellenangaben.'}</p>
      ${q && total ? `<div class="flex gap-sm wrap" style="margin-top:6px">${countChips}</div>` : ''}
    </div>
    ${!q ? `<div class="empty">${icon('search')}<p>Gib oben einen Suchbegriff ein – z. B. „Rückzugssignal", „FwDV 500" oder „Backdraft".</p></div>`
      : results.length ? `<div class="stack">${results.map(r => `<a class="card card--pad card--interactive flex gap-md" style="align-items:flex-start;text-decoration:none;color:inherit" href="${r.href}">
          <div style="width:42px;height:42px;border-radius:12px;background:var(--surface-2);display:grid;place-items:center;flex:none;color:var(--fw-red)">${icon(r.icon).replace('<svg ','<svg style="width:22px;height:22px" ')}</div>
          <div style="flex:1;min-width:0">
            <div class="flex gap-sm" style="align-items:center;flex-wrap:wrap"><b>${esc(r.title)}</b><span class="badge">${esc(r.type)}</span></div>
            <div class="subtle" style="font-size:.82rem;margin-top:1px">${esc(r.sub)}</div>
            ${r.snippet ? `<div class="muted" style="font-size:.85rem;margin-top:5px;line-height:1.4">${r.snippet}</div>` : ''}
          </div>
          ${icon('arrowr').replace('<svg ','<svg style="width:20px;height:20px;color:var(--text-subtle);flex:none;margin-top:10px" ')}
        </a>`).join('')}</div>`
      : `<div class="empty">${icon('search')}<p>Keine Ergebnisse für „${esc(q)}". Versuch es mit einem anderen Begriff.</p></div>`}
  </div>`;
}
