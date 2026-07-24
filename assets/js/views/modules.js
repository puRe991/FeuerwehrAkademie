/* =========================================================================
   VIEW: Modulübersicht (A–Z) + Moduldetail
   ========================================================================= */
import { MODULES, MODULE_BY_ID, CATEGORIES, LEVELS } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { MODULE_SOURCES, SOURCE_DISCLAIMER } from '../data/module-sources.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam } from '../state.js';
import { esc, fmtDuration } from '../utils.js';

/* Banner-Grafik je Modul (dekoratives SVG-Muster) */
function banner(color, iconName, code) {
  return `<div class="mcard__banner" style="background:linear-gradient(135deg, ${color}, ${shade(color,-25)})">
    <svg class="bg" viewBox="0 0 300 92" preserveAspectRatio="none" aria-hidden="true">
      <defs><pattern id="p${code}" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
        <circle cx="4" cy="4" r="1.4" fill="#ffffff22"/></pattern></defs>
      <rect width="300" height="92" fill="url(#p${code})"/>
    </svg>
    <span class="mcard__code">${code}</span>
    ${icon(iconName, 'mcard__ico')}
  </div>`;
}
function shade(hex, p) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + p, g = ((n >> 8) & 255) + p, b = (n & 255) + p;
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function moduleCard(m) {
  const cat = CATEGORIES[m.category];
  const p = moduleProgress(m.id, m.lessons.length);
  const passed = isModulePassed(m.id);
  const s = getState();
  const bookmarked = s.bookmarks.includes(m.id);
  return `<article class="card card--interactive mcard" data-cat="${m.category}" data-level="${m.level}" data-title="${esc(m.title.toLowerCase())}">
    ${banner(cat.color, m.icon, m.code)}
    <div class="mcard__body">
      <div class="between">
        <span class="mcard__cat">${esc(cat.label)}</span>
        <button class="iconbtn" style="width:28px;height:28px" data-bookmark="${m.id}" title="Merken" aria-label="Merken">
          ${icon('star').replace('<svg ', `<svg style="width:16px;height:16px" fill="${bookmarked ? 'currentColor' : 'none'}" `)}
        </button>
      </div>
      <h3>${esc(m.title)}</h3>
      <p class="mcard__desc">${esc(m.summary)}</p>
      <div class="mcard__meta">
        <span>${icon('book').replace('<svg ','<svg style="width:14px;height:14px" ')} ${m.lessons.length} Lektionen</span>
        <span>${icon('clock').replace('<svg ','<svg style="width:14px;height:14px" ')} ${fmtDuration(m.duration)}</span>
        <span>${icon('star').replace('<svg ','<svg style="width:14px;height:14px" ')} ${esc(LEVELS[m.level])}</span>
      </div>
      <div class="progress ${passed ? 'progress--green' : ''}"><i style="width:${p.pct}%"></i></div>
      <div class="between">
        <span class="subtle" style="font-size:.8rem">${p.done}/${p.total} erledigt</span>
        ${passed ? `<span class="badge badge--green">${icon('check').replace('<svg ','<svg style="width:13px;height:13px" ')} Bestanden</span>`
                 : p.pct === 100 && EXAMS[m.id] ? `<span class="badge badge--amber">Prüfung offen</span>`
                 : p.done > 0 ? `<span class="badge badge--blue">Aktiv</span>` : ''}
      </div>
      <a class="btn btn--outline btn--block mcard__foot" href="#/modul/${m.id}">${p.done ? 'Fortsetzen' : 'Öffnen'} ${icon('arrowr').replace('<svg ','<svg style="width:16px;height:16px" ')}</a>
    </div>
  </article>`;
}

export function renderModules() {
  const cats = Object.entries(CATEGORIES);
  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Ausbildungsmodule A–Z</h1>
      <p class="muted">Die komplette Feuerwehrausbildung – strukturiert, fachlich fundiert und personalisiert nach deinem Fortschritt.</p>
    </div>

    <div class="flex gap-sm wrap" style="margin-bottom:8px" id="catFilter" role="group" aria-label="Kategorie-Filter">
      <button class="chip" data-filter="all" aria-pressed="true">Alle</button>
      ${cats.map(([id, c]) => `<button class="chip" data-filter="${id}" aria-pressed="false"><span style="width:9px;height:9px;border-radius:50%;background:${c.color}"></span>${esc(c.label)}</button>`).join('')}
    </div>

    <div class="module-grid" id="moduleGrid" style="margin-top:16px">
      ${MODULES.map(moduleCard).join('')}
    </div>
  </div>`;
}

export function renderModuleDetail(id) {
  const m = MODULE_BY_ID[id];
  if (!m) return notFound();
  const cat = CATEGORIES[m.category];
  const p = moduleProgress(m.id, m.lessons.length);
  const s = getState();
  const exam = EXAMS[m.id];
  const best = bestExam(m.id);

  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/module">Module</a><span class="sep">/</span><span>Modul ${m.code}</span></div>

    <section class="card" style="overflow:hidden;margin-bottom:26px">
      <div style="padding:clamp(22px,4vw,34px);background:linear-gradient(135deg, ${cat.color}, ${shade(cat.color,-30)});color:#fff;position:relative">
        <div class="between wrap" style="align-items:flex-start;gap:20px">
          <div style="flex:1;min-width:260px">
            <div style="opacity:.85;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:.78rem">Modul ${m.code} · ${esc(cat.label)}</div>
            <h1 style="color:#fff;margin:.15em 0 .3em">${esc(m.title)}</h1>
            <p style="color:#ffffffdd;max-width:60ch;margin:0">${esc(m.summary)}</p>
            <div class="flex gap-md wrap" style="margin-top:16px;font-size:.85rem;font-weight:600">
              <span>${icon('book').replace('<svg ','<svg style="width:16px;height:16px;vertical-align:-3px" ')} ${m.lessons.length} Lektionen</span>
              <span>${icon('clock').replace('<svg ','<svg style="width:16px;height:16px;vertical-align:-3px" ')} ${fmtDuration(m.duration)}</span>
              <span>${icon('star').replace('<svg ','<svg style="width:16px;height:16px;vertical-align:-3px" ')} ${esc(LEVELS[m.level])}</span>
            </div>
          </div>
          <div style="width:84px;height:84px;border-radius:22px;background:#ffffff22;display:grid;place-items:center;flex:none">
            ${icon(m.icon).replace('<svg ', '<svg style="width:44px;height:44px" ')}
          </div>
        </div>
      </div>
      <div style="padding:18px clamp(22px,4vw,34px)" class="between wrap">
        <div style="flex:1;min-width:200px">
          <div class="progress ${isModulePassed(m.id) ? 'progress--green' : ''}"><i style="width:${p.pct}%"></i></div>
          <span class="subtle" style="font-size:.85rem">${p.done} von ${p.total} Lektionen abgeschlossen (${p.pct}%)</span>
        </div>
        <div class="flex gap-sm wrap">
          ${exam ? `<a class="btn btn--outline" href="#/pruefung/${m.id}">${icon('exam')} Prüfung ablegen</a>` : ''}
          <a class="btn btn--primary" href="#/lektion/${m.id}/${firstUnfinished(m)}">${icon('play')} ${p.done ? 'Weiterlernen' : 'Jetzt starten'}</a>
        </div>
      </div>
    </section>

    <div class="grid" style="grid-template-columns:1.7fr 1fr;align-items:start" id="modDetailCols">
      <section>
        <h2 style="margin-bottom:14px">Lektionen</h2>
        <div class="stack">
          ${m.lessons.map((l, i) => lessonRow(m, l, i)).join('')}
        </div>
      </section>
      <aside class="stack">
        <div class="card card--pad">
          <h3 style="margin-bottom:12px">${icon('target').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Lernziele</h3>
          <ul class="prose keyfacts" style="margin:0">${m.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
        </div>
        ${exam ? `<div class="card card--pad">
          <h3 style="margin-bottom:8px">${icon('award').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Prüfung</h3>
          <p class="muted" style="font-size:.9rem">${exam.questions.length} Fragen · Bestehensgrenze ${exam.passScore}%</p>
          ${best ? `<div class="callout ${best.passed ? 'callout--ok' : 'callout--warn'}" style="margin:.5em 0"><b>Bestes Ergebnis: ${best.score}%</b> ${best.passed ? '– bestanden ✔' : '– noch nicht bestanden'}</div>` : ''}
          <a class="btn btn--outline btn--block" href="#/pruefung/${m.id}">Prüfung starten</a>
        </div>` : ''}
        ${sourcesCard(m)}
        <div class="card card--pad">
          <div class="flex gap-sm wrap">${m.tags.map(t => `<span class="badge">#${esc(t)}</span>`).join('')}</div>
        </div>
      </aside>
    </div>
  </div>`;
}

/* Quellen- & Stand-Angaben je Modul (Fachbezug + Verbindlichkeitshinweis). */
function sourcesCard(m) {
  const src = MODULE_SOURCES[m.id];
  if (!src) return '';
  return `<div class="card card--pad">
    <h3 style="margin-bottom:4px">${icon('book').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Quellen &amp; Stand</h3>
    <p class="subtle" style="font-size:.82rem;margin:0 0 10px">Inhaltlicher Stand: ${esc(src.stand)} · orientiert an folgenden Bezugsdokumenten:</p>
    <ul style="list-style:none;padding:0;margin:0;display:grid;gap:8px">
      ${src.refs.map(r => `<li style="font-size:.88rem;line-height:1.35">
        <b>${esc(r.ref)}</b><br><span class="muted">${esc(r.title)}</span>
      </li>`).join('')}
    </ul>
    ${src.note ? `<p class="subtle" style="font-size:.82rem;margin:10px 0 0"><i>${esc(src.note)}</i></p>` : ''}
    <div class="callout callout--warn" style="margin:12px 0 0;font-size:.82rem">
      ${icon('bolt').replace('<svg ','<svg style="width:15px;height:15px;vertical-align:-2px" ')} ${esc(SOURCE_DISCLAIMER)}
    </div>
  </div>`;
}

function lessonRow(m, l, i) {
  const s = getState();
  const done = !!(s.progress[m.id]?.lessons?.[l.id]);
  return `<a class="card card--pad card--interactive flex gap-md" style="align-items:center;text-decoration:none;color:inherit" href="#/lektion/${m.id}/${l.id}">
    <div style="width:42px;height:42px;border-radius:12px;flex:none;display:grid;place-items:center;font-weight:800;${done ? 'background:var(--ok);color:#fff' : 'background:var(--surface-2);color:var(--text-muted)'}">
      ${done ? icon('check').replace('<svg ','<svg style="width:22px;height:22px" ') : (i + 1)}
    </div>
    <div style="flex:1;min-width:0">
      <b>${esc(l.title)}</b>
      <div class="subtle" style="font-size:.85rem">${icon('clock').replace('<svg ','<svg style="width:13px;height:13px;vertical-align:-2px" ')} ${fmtDuration(l.duration)} · ${l.blocks.length} Abschnitte</div>
    </div>
    ${icon('arrowr').replace('<svg ','<svg style="width:20px;height:20px;color:var(--text-subtle)" ')}
  </a>`;
}

function firstUnfinished(m) {
  const s = getState();
  const lessons = s.progress[m.id]?.lessons || {};
  const next = m.lessons.find(l => !lessons[l.id]);
  return (next || m.lessons[0]).id;
}

export function notFound() {
  return `<div class="view"><div class="empty">${icon('search')}<h2>Nicht gefunden</h2><p>Dieser Inhalt existiert nicht.</p><a class="btn btn--primary" href="#/">Zum Dashboard</a></div></div>`;
}
