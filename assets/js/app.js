/* =========================================================================
   APP — Bootstrap, Router (Hash-basiert), App-Shell
   Kein Build-Schritt: reine ES-Module, lauffähig als statische Seite.
   ========================================================================= */
import { MODULES, LESSON_COUNT } from './data/curriculum.js';
import { EXAMS, TOTAL_QUESTIONS } from './data/exams.js';
import { PLANSPIELE } from './data/planspiele.js';
import { icon } from './data/icons.js';
import { getState, subscribe, setTheme, level } from './state.js';
import { esc, initials, qs } from './utils.js';

import { renderDashboard } from './views/dashboard.js';
import { renderModules, renderModuleDetail } from './views/modules.js';
import { renderLesson, bindLesson } from './views/lesson.js';
import { renderExam, bindExam, resetExamSession } from './views/exam.js';
import { renderPlanspielList, renderPlanspiel, bindPlanspiel, resetPlanspielSession } from './views/planspiel.js';
import { renderOnboarding, bindOnboarding, renderProfile, bindProfile, logoMark } from './views/profile.js';
import { renderLernpfad, renderPruefungen, renderSearch } from './views/misc.js';
import { renderGlossary, bindGlossary, renderFlashHome, renderDeck, bindFlashcards } from './views/tools.js';
import { renderInstructor, bindInstructor } from './views/instructor.js';
import { renderEinsatzkompass, bindEinsatzkompass, renderEinsatzkarte, bindEinsatzkarte } from './views/einsatzkompass.js';
import { EINSATZKOMPASS } from './data/einsatzkompass.js';

const app = qs('#app');

/* ------------- Theme ------------- */
function applyTheme() {
  const pref = getState().settings.theme;
  const dark = pref === 'dark' || (pref === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

/* ------------- Navigation ------------- */
const NAV = [
  { section: 'Lernen' },
  { href: '#/', label: 'Dashboard', icon: 'dashboard' },
  { href: '#/module', label: 'Module A–Z', icon: 'book', count: MODULES.length },
  { href: '#/lernpfad', label: 'Lernpfad', icon: 'path' },
  { href: '#/karteikarten', label: 'Karteikarten', icon: 'refresh' },
  { href: '#/glossar', label: 'Glossar', icon: 'search' },
  { section: 'Prüfen & Üben' },
  { href: '#/pruefungen', label: 'Prüfungen', icon: 'exam', count: Object.keys(EXAMS).length },
  { href: '#/planspiele', label: 'Planspiele', icon: 'game', count: PLANSPIELE.length },
  { section: 'Im Einsatz' },
  { href: '#/einsatzkompass', label: 'Einsatzkompass', icon: 'compass', count: EINSATZKOMPASS.length },
  { section: 'Konto' },
  { href: '#/profil', label: 'Mein Profil', icon: 'award' },
  { href: '#/ausbilder', label: 'Ausbilder & Export', icon: 'chart' },
];

function renderShell(activeHref) {
  const s = getState();
  const p = s.profile;
  return `
  <div class="app" id="appShell">
    <div class="scrim" id="scrim"></div>
    <aside class="sidebar" id="sidebar">
      <a class="brand" href="#/" style="text-decoration:none;color:inherit">
        <span class="brand__mark">${logoMark()}</span>
        <span class="brand__txt"><b>Feuerwehr Akademie</b><span>Online · A bis Z</span></span>
      </a>
      <nav class="nav" aria-label="Hauptnavigation">
        ${NAV.map(item => item.section
          ? `<div class="nav__section">${esc(item.section)}</div>`
          : `<a class="nav__link ${isActive(activeHref, item.href) ? 'active' : ''}" href="${item.href}">
               ${icon(item.icon)}<span>${esc(item.label)}</span>${item.count != null ? `<span class="count">${item.count}</span>` : ''}
             </a>`).join('')}
      </nav>
      <div class="sidebar__foot">
        <a class="userchip" href="#/profil" style="text-decoration:none;color:inherit">
          <span class="avatar">${p ? initials(p.name) : '?'}</span>
          <span class="meta"><b>${p ? esc(p.name) : 'Gast'}</b><span>Level ${level()} · ${s.xp || 0} XP</span></span>
        </a>
      </div>
    </aside>

    <div class="main">
      <header class="topbar">
        <button class="iconbtn nav-toggle" id="navToggle" aria-label="Menü">${icon('menu')}</button>
        <form class="searchbar" id="searchForm" role="search">
          ${icon('search')}
          <input type="search" id="searchInput" placeholder="Module, Lektionen, Planspiele suchen…" aria-label="Suche" autocomplete="off">
        </form>
        <div class="topbar__spacer"></div>
        ${s.streak.count > 0 ? `<span class="streak" title="Lern-Streak">🔥 ${s.streak.count}</span>` : ''}
        <button class="iconbtn" id="themeToggle" aria-label="Design wechseln" title="Hell/Dunkel">${icon(document.documentElement.getAttribute('data-theme') === 'dark' ? 'sun' : 'moon')}</button>
      </header>
      <main id="view" tabindex="-1"></main>
    </div>
  </div>`;
}

function isActive(current, href) {
  if (href === '#/') return current === '#/' || current === '' || current === '#';
  return current.startsWith(href);
}

/* ------------- Router ------------- */
function parseHash() {
  const h = location.hash || '#/';
  const parts = h.replace(/^#\//, '').split('/').filter(Boolean);
  return { h, parts };
}

function routeView(parts) {
  const [root, a, b] = parts;
  switch (root) {
    case undefined: return { html: renderDashboard() };
    case 'module': return { html: renderModules(), bind: bindModules };
    case 'modul': return { html: renderModuleDetail(a), bind: bindModuleDetail };
    case 'lektion': return { html: renderLesson(a, b), bind: bindLesson };
    case 'pruefungen': return { html: renderPruefungen() };
    case 'pruefung': return { html: renderExam(a), bind: bindExam };
    case 'planspiele': return { html: renderPlanspielList() };
    case 'planspiel': return { html: renderPlanspiel(a), bind: bindPlanspiel };
    case 'lernpfad': return { html: renderLernpfad() };
    case 'glossar': return { html: renderGlossary(decodeURIComponent(a || '')), bind: bindGlossary };
    case 'karteikarten': return a === 'lernen'
      ? { html: renderDeck(), bind: bindFlashcards }
      : { html: renderFlashHome(), bind: bindFlashcards };
    case 'einsatzkompass':
      if (a === 'suche') return { html: renderEinsatzkompass(decodeURIComponent(b || '')), bind: bindEinsatzkompass };
      if (a) return { html: renderEinsatzkarte(a), bind: bindEinsatzkarte };
      return { html: renderEinsatzkompass(), bind: bindEinsatzkompass };
    case 'ausbilder': return { html: renderInstructor(), bind: bindInstructor };
    case 'profil': return { html: renderProfile(), bind: bindProfile };
    case 'suche': return { html: renderSearch(decodeURIComponent(a || '')) };
    case 'onboarding': return { html: renderOnboarding(), bind: bindOnboarding, bare: true };
    default: return { html: renderDashboard() };
  }
}

let lastRoot = null;

function render() {
  applyTheme();
  const s = getState();
  const { h, parts } = parseHash();

  // Erststart → Onboarding erzwingen
  if (!s.profile && parts[0] !== 'onboarding') {
    location.hash = '#/onboarding';
    return;
  }

  const route = routeView(parts);

  // Session-Reset bei Verlassen von Prüfung/Planspiel
  if (parts[0] !== 'pruefung') resetExamSession();
  if (parts[0] !== 'planspiel') resetPlanspielSession();

  if (route.bare) {
    app.innerHTML = `<div class="main" style="grid-column:1/-1">${route.html}</div>`;
    route.bind?.(app, render);
    return;
  }

  // Shell nur neu bauen, wenn nötig (Navigationswechsel), sonst nur View
  const shellExists = qs('#appShell');
  if (!shellExists) {
    app.innerHTML = renderShell(h);
    wireShell();
  } else {
    // aktiven Nav-Link aktualisieren
    document.querySelectorAll('.nav__link').forEach(el => {
      el.classList.toggle('active', isActive(h, el.getAttribute('href')));
    });
  }

  const view = qs('#view');
  view.innerHTML = route.html;
  route.bind?.(view, render);

  // Nav auf Mobil schließen
  qs('#appShell')?.classList.remove('nav-open');
  view.focus({ preventScroll: true });
  if (lastRoot !== parts.join('/')) window.scrollTo({ top: 0 });
  lastRoot = parts.join('/');
}

/* ------------- Shell-Interaktion ------------- */
function wireShell() {
  qs('#navToggle')?.addEventListener('click', () => qs('#appShell').classList.toggle('nav-open'));
  qs('#scrim')?.addEventListener('click', () => qs('#appShell').classList.remove('nav-open'));

  qs('#themeToggle')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    setTheme(cur === 'dark' ? 'light' : 'dark');
    applyTheme();
    const btn = qs('#themeToggle');
    if (btn) btn.innerHTML = icon(document.documentElement.getAttribute('data-theme') === 'dark' ? 'sun' : 'moon');
  });

  const form = qs('#searchForm');
  const input = qs('#searchInput');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (q) location.hash = `#/suche/${encodeURIComponent(q)}`;
  });
  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); form.dispatchEvent(new Event('submit')); }
  });
}

/* ------------- View-spezifische Bindings ------------- */
function bindModules(root) {
  // Kategorie-Filter
  const chips = root.querySelectorAll('#catFilter .chip');
  const grid = root.querySelector('#moduleGrid');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', 'false'));
    c.setAttribute('aria-pressed', 'true');
    const f = c.dataset.filter;
    grid.querySelectorAll('.mcard').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
    });
  }));
  bindBookmarks(root);
}

function bindModuleDetail(root) { bindBookmarks(root); }

function bindBookmarks(root) {
  root.querySelectorAll('[data-bookmark]').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.preventDefault(); e.stopPropagation();
      const { toggleBookmark } = await import('./state.js');
      toggleBookmark(btn.dataset.bookmark);
      render();
    });
  });
}

/* ------------- Start ------------- */
window.addEventListener('hashchange', render);
subscribe(() => {
  // Bei Store-Änderung nur Sidebar-Footer/Streak aktualisieren (leichtgewichtig)
  const foot = qs('.userchip .meta');
  if (foot) {
    const s = getState();
    foot.innerHTML = `<b>${s.profile ? esc(s.profile.name) : 'Gast'}</b><span>Level ${level()} · ${s.xp || 0} XP</span>`;
  }
});

applyTheme();
render();

/* ------------- PWA Service Worker ------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}

/* Konsolen-Gruß */
console.log('%c🚒 Feuerwehr Online Akademie', 'font-size:16px;font-weight:bold;color:#d81f26',
  `\n${MODULES.length} Module · ${LESSON_COUNT} Lektionen · ${TOTAL_QUESTIONS} Prüfungsfragen · ${PLANSPIELE.length} Planspiele`);
