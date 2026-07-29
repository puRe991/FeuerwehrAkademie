/* =========================================================================
   VIEW: Lernvideos — kuratierte YouTube-Videos, nach Kategorien gefiltert.

   Übersicht  → Chip-Filter je Kategorie + Karten-Grid mit Vorschaubild.
   Detail     → „Click-to-Load"-Player: erst Vorschaubild, der eigentliche
                YouTube-Player (youtube-nocookie.com) wird erst nach Klick
                geladen. So wird vor der Einwilligung nichts an YouTube
                übertragen (DSGVO-freundlich).
   ========================================================================= */
import { LERNVIDEOS, LERNVIDEO_BY_ID, VIDEO_CATEGORIES, videosByCategory } from '../data/lernvideos.js';
import { icon } from '../data/icons.js';
import { isVideoWatched, toggleVideoWatched, getState } from '../state.js';
import { esc, fmtDuration, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

const YT_THUMB = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const YT_EMBED = id => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

/* Vorschaubild bzw. neutrales Themen-Panel, wenn (noch) keine ID hinterlegt. */
function thumb(v, cat) {
  const inner = v.youtubeId
    ? `<img class="video-thumb__img" src="${YT_THUMB(v.youtubeId)}" alt="" loading="lazy" decoding="async">`
    : '';
  return `<div class="video-thumb" style="--c:${cat.color}">
    ${inner}
    <span class="video-thumb__badge">${icon(cat.icon)}</span>
    <span class="video-thumb__play">${icon('play')}</span>
    ${v.minutes ? `<span class="video-thumb__dur">${icon('clock')}${fmtDuration(v.minutes)}</span>` : ''}
  </div>`;
}

/* ------------------------------ Übersicht ------------------------------ */
export function renderLernvideoList(filter = 'all') {
  const byCat = videosByCategory();
  const cats = Object.entries(VIDEO_CATEGORIES).filter(([id]) => byCat[id]?.length);
  const watched = LERNVIDEOS.filter(v => isVideoWatched(v.id)).length;
  const list = filter === 'all' ? LERNVIDEOS : LERNVIDEOS.filter(v => v.category === filter);

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Lernvideos</h1>
      <p class="muted">Kuratierte Lernvideos nach Themen sortiert – von den Grundtätigkeiten bis zur Einsatzführung. Ergänzend zu den Modulen und Prüfungen.</p>
      <div class="progress" style="max-width:340px;margin-top:8px"><i style="width:${Math.round(watched / LERNVIDEOS.length * 100)}%"></i></div>
      <span class="subtle" style="font-size:.85rem">${watched}/${LERNVIDEOS.length} Videos als angesehen markiert</span>
    </div>

    <div class="flex gap-sm wrap" style="margin-bottom:14px" id="videoFilter" role="group" aria-label="Kategorie-Filter">
      <button class="chip" data-filter="all" aria-pressed="${filter === 'all'}">Alle</button>
      ${cats.map(([id, c]) =>
        `<button class="chip" data-filter="${id}" aria-pressed="${filter === id}"><span style="width:9px;height:9px;border-radius:50%;background:${c.color}"></span>${esc(c.label)} <span class="subtle">${byCat[id].length}</span></button>`
      ).join('')}
    </div>

    <div class="module-grid" id="videoGrid">
      ${list.map(v => {
        const cat = VIDEO_CATEGORIES[v.category];
        const done = isVideoWatched(v.id);
        return `<a class="card card--interactive stack" style="--gap:0;text-decoration:none;color:inherit;overflow:hidden" href="#/lernvideo/${v.id}">
          ${thumb(v, cat)}
          <div class="card--pad stack" style="--gap:8px">
            <div class="between" style="align-items:center">
              <span class="mcard__cat" style="color:${cat.color}">${esc(cat.label)}</span>
              ${done ? `<span class="badge badge--green">${icon('check').replace('<svg ', '<svg style="width:13px;height:13px" ')} gesehen</span>` : ''}
            </div>
            <b style="line-height:1.3">${esc(v.title)}</b>
            <p class="mcard__desc" style="margin:0">${esc(v.desc)}</p>
          </div>
        </a>`;
      }).join('')}
    </div>

    ${list.length === 0 ? `<p class="muted" style="margin-top:20px">In dieser Kategorie sind noch keine Videos hinterlegt.</p>` : ''}
  </div>`;
}

/* ------------------------------ Detail / Player ------------------------------ */
export function renderLernvideoDetail(id) {
  const v = LERNVIDEO_BY_ID[id];
  if (!v) return notFound();
  const cat = VIDEO_CATEGORIES[v.category];
  const done = isVideoWatched(id);

  // Verwandte Videos derselben Kategorie (max. 3).
  const related = LERNVIDEOS.filter(x => x.category === v.category && x.id !== id).slice(0, 3);

  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/lernvideos">Lernvideos</a><span class="sep">/</span><a href="#/lernvideos/${v.category}">${esc(cat.label)}</a><span class="sep">/</span><span>${esc(v.title)}</span></div>

    <div class="exam-shell">
      <div class="card" style="overflow:hidden">
        <div class="video-player" id="videoPlayer" data-id="${esc(v.id)}" data-yt="${esc(v.youtubeId)}" data-title="${esc(v.title)}">
          ${v.youtubeId
            ? `<button class="video-player__facade" id="videoLoad" type="button" style="--c:${cat.color}" aria-label="Video abspielen: ${esc(v.title)}">
                 <img class="video-thumb__img" src="${YT_THUMB(v.youtubeId)}" alt="" loading="lazy" decoding="async">
                 <span class="video-player__play">${icon('play')}</span>
                 <span class="video-player__hint">${icon('lock')} Erst bei Klick wird YouTube geladen</span>
               </button>`
            : `<div class="video-player__facade video-player__facade--empty" style="--c:${cat.color}">
                 <span class="video-thumb__badge">${icon(cat.icon)}</span>
                 <span class="video-player__hint">Für dieses Video ist noch keine YouTube-ID hinterlegt.</span>
               </div>`}
        </div>
      </div>

      <div class="card card--pad" style="margin-top:16px">
        <div class="between wrap" style="gap:10px;align-items:flex-start">
          <div>
            <span class="mcard__cat" style="color:${cat.color}">${esc(cat.label)}</span>
            <h1 style="margin:.15em 0 0">${esc(v.title)}</h1>
            ${v.minutes ? `<div class="subtle" style="font-size:.85rem;margin-top:4px">${icon('clock').replace('<svg ', '<svg style="width:14px;height:14px;vertical-align:-2px" ')} ${fmtDuration(v.minutes)}</div>` : ''}
          </div>
          <button class="btn ${done ? 'btn--outline' : 'btn--primary'} btn--sm" id="videoDone">${icon('check')} ${done ? 'Als ungesehen markieren' : 'Als gesehen markieren'}</button>
        </div>
        <p class="muted" style="margin:.7em 0 0">${esc(v.desc)}</p>
        <p class="subtle" style="font-size:.8rem;margin:.9em 0 0">${icon('lock').replace('<svg ', '<svg style="width:13px;height:13px;vertical-align:-2px" ')} Datenschutz: Das Video wird erst nach deinem Klick über youtube-nocookie.com geladen.</p>
      </div>

      ${related.length ? `
      <div style="margin-top:20px">
        <h2 style="font-size:1.05rem;margin:0 0 10px">Mehr aus „${esc(cat.label)}"</h2>
        <div class="module-grid">
          ${related.map(r => `<a class="card card--interactive stack" style="--gap:0;text-decoration:none;color:inherit;overflow:hidden" href="#/lernvideo/${r.id}">
            ${thumb(r, cat)}
            <div class="card--pad"><b style="line-height:1.3">${esc(r.title)}</b></div>
          </a>`).join('')}
        </div>
      </div>` : ''}

      <div class="flex gap-sm wrap" style="margin-top:16px;justify-content:center">
        <a class="btn btn--ghost btn--sm" href="#/lernvideos">${icon('arrowl')} Alle Lernvideos</a>
      </div>
    </div>
  </div>`;
}

/* ------------------------------ Bindings ------------------------------ */
export function bindLernvideos(root, rerender) {
  // Kategorie-Filter (Übersicht): ohne Neuaufbau der ganzen Seite umschalten.
  const filter = root.querySelector('#videoFilter');
  if (filter) {
    filter.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
      const f = chip.dataset.filter;
      location.hash = f === 'all' ? '#/lernvideos' : `#/lernvideos/${f}`;
    }));
  }

  // Fehlende Vorschaubilder (z. B. private/entfernte Videos) sauber ausblenden.
  root.querySelectorAll('.video-thumb__img').forEach(img => {
    img.addEventListener('error', () => img.remove());
  });

  // Click-to-Load: Facade durch den nocookie-Player ersetzen.
  const load = root.querySelector('#videoLoad');
  load?.addEventListener('click', () => {
    const wrap = root.querySelector('#videoPlayer');
    const id = wrap?.dataset.yt;
    const title = wrap?.dataset.title || 'Lernvideo';
    if (!wrap || !id) return;
    const frame = document.createElement('iframe');
    frame.className = 'video-player__frame';
    frame.src = YT_EMBED(id);
    frame.title = title;
    frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;
    frame.loading = 'lazy';
    wrap.replaceChildren(frame);
  });

  // „Als gesehen markieren"
  root.querySelector('#videoDone')?.addEventListener('click', () => {
    const id = root.querySelector('#videoPlayer')?.dataset.id;
    if (!id) return;
    const wasDone = isVideoWatched(id);
    toggleVideoWatched(id);
    if (!wasDone) { confetti(); toast('Video als gesehen markiert · +15 XP', 'star'); }
    rerender();
  });
}
