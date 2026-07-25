/* =========================================================================
   VIEW: Notizen — persönliche Notizen über alle Lektionen hinweg
   Sammelt die je Lektion erfassten Notizen an einem Ort: durchsuchbar,
   nach Modul gruppiert, mit Sprung zur Lektion, Löschen und Druckfunktion.
   ========================================================================= */
import { MODULE_BY_ID, CATEGORIES } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { getState, allNotes, deleteNote } from '../state.js';
import { esc, fmtDateTime, toast } from '../utils.js';

/** Notiz mit Modul-/Lektionskontext anreichern (robust gegen entfernte Inhalte). */
function decorate(n) {
  const m = MODULE_BY_ID[n.moduleId];
  const lesson = m?.lessons.find(l => l.id === n.lessonId);
  const cat = m ? CATEGORIES[m.category] : null;
  return {
    ...n,
    moduleTitle: m ? m.title : 'Unbekanntes Modul',
    moduleCode: m ? m.code : '?',
    lessonTitle: lesson ? lesson.title : '(Lektion nicht mehr vorhanden)',
    color: cat ? cat.color : 'var(--text-muted)',
    href: `#/lektion/${n.moduleId}/${n.lessonId}`,
  };
}

export function renderNotizen(filter = '') {
  const s = getState();
  if (!s.profile) { location.hash = '#/onboarding'; return ''; }
  const q = filter.trim().toLowerCase();
  const all = allNotes().map(decorate);
  const notes = q
    ? all.filter(n => (n.text + ' ' + n.lessonTitle + ' ' + n.moduleTitle).toLowerCase().includes(q))
    : all;

  const head = `
    <div class="view__head between wrap" style="gap:12px;align-items:flex-end">
      <div>
        <h1>${icon('note').replace('<svg ','<svg style="width:26px;height:26px;vertical-align:-5px" ')} Meine Notizen</h1>
        <p class="muted">Alle Notizen, die du in den Lektionen festgehalten hast – an einem Ort. Nur lokal auf diesem Gerät gespeichert.</p>
      </div>
      ${all.length ? `<button class="btn btn--outline" id="printNotes">${icon('download')} Notizen drucken</button>` : ''}
    </div>`;

  if (!all.length) {
    return `<div class="view fade-up">${head}
      <div class="empty">${icon('note')}
        <p>Noch keine Notizen. Öffne eine Lektion und halte im Feld <b>„Meine Notiz"</b> deine Merksätze, Fragen oder Praxiserfahrungen fest.</p>
        <a class="btn btn--primary" href="#/module" style="margin-top:14px">${icon('book')} Zu den Modulen</a>
      </div></div>`;
  }

  return `
  <div class="view fade-up">
    ${head}
    <form id="noteFilterForm" role="search" style="max-width:520px;margin-bottom:18px">
      <input type="search" class="input" id="noteFilter" placeholder="Notizen durchsuchen …" aria-label="Notizen durchsuchen" autocomplete="off" value="${esc(filter)}">
    </form>
    <p class="subtle" style="font-size:.85rem;margin-bottom:14px">${notes.length} von ${all.length} ${all.length === 1 ? 'Notiz' : 'Notizen'}</p>
    ${notes.length ? `<div class="stack" style="gap:14px">${notes.map(noteCard).join('')}</div>`
      : `<div class="empty">${icon('search')}<p>Keine Notiz passt zu „${esc(filter)}".</p></div>`}
  </div>`;
}

function noteCard(n) {
  return `
  <article class="card card--pad note-item" style="border-left:4px solid ${n.color}">
    <div class="between wrap" style="gap:10px;align-items:flex-start">
      <div style="min-width:0">
        <div class="mcard__cat" style="color:${n.color}">Modul ${esc(n.moduleCode)} · ${esc(n.moduleTitle)}</div>
        <a href="${n.href}" style="text-decoration:none;color:inherit"><h3 style="margin:.15em 0">${esc(n.lessonTitle)}</h3></a>
      </div>
      <span class="subtle" style="font-size:.78rem;white-space:nowrap">${fmtDateTime(n.ts)}</span>
    </div>
    <p class="note-text" style="white-space:pre-wrap;margin:.5em 0 0">${esc(n.text)}</p>
    <div class="flex gap-sm wrap" style="margin-top:14px">
      <a class="btn btn--outline btn--sm" href="${n.href}">${icon('book')} Zur Lektion</a>
      <button class="btn btn--danger btn--sm" data-del-mod="${esc(n.moduleId)}" data-del-les="${esc(n.lessonId)}">${icon('trash')} Löschen</button>
    </div>
  </article>`;
}

export function bindNotizen(root, rerender) {
  const form = root.querySelector('#noteFilterForm');
  const input = root.querySelector('#noteFilter');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    location.hash = q ? `#/notizen/${encodeURIComponent(q)}` : '#/notizen';
  });
  // Live-Filterung ohne Neuladen der ganzen Ansicht
  let t;
  input?.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => form.dispatchEvent(new Event('submit')), 250);
  });

  root.querySelectorAll('[data-del-mod]').forEach(btn => {
    btn.addEventListener('click', () => {
      deleteNote(btn.dataset.delMod, btn.dataset.delLes);
      toast('Notiz gelöscht', 'ok');
      rerender();
    });
  });

  root.querySelector('#printNotes')?.addEventListener('click', () => printNotes());
}

function printNotes() {
  const notes = allNotes().map(decorate);
  const p = getState().profile || {};
  const w = window.open('', '_blank');
  if (!w) { toast('Bitte Pop-ups erlauben', 'bolt'); return; }
  const body = notes.map(n => `
    <section class="n">
      <div class="meta">Modul ${esc(n.moduleCode)} · ${esc(n.moduleTitle)}</div>
      <h2>${esc(n.lessonTitle)}</h2>
      <div class="date">${fmtDateTime(n.ts)}</div>
      <p>${esc(n.text)}</p>
    </section>`).join('');
  w.document.write(`<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Meine Notizen – ${esc(p.name || '')}</title>
    <style>
      body{font-family:system-ui,Arial,sans-serif;color:#111;margin:40px;line-height:1.5}
      h1{color:#d81f26;margin-bottom:2px}
      .sub{color:#555;margin:0 0 20px}
      .n{border-top:1px solid #ddd;padding:14px 0;break-inside:avoid}
      .n h2{font-size:16px;margin:2px 0}
      .meta{color:#d81f26;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}
      .date{color:#888;font-size:12px;margin-bottom:6px}
      .n p{white-space:pre-wrap;margin:0}
      footer{margin-top:24px;font-size:12px;color:#888;border-top:1px solid #ddd;padding-top:10px}
      @media print{button{display:none}}
    </style></head><body>
    <h1>Meine Notizen</h1>
    <p class="sub">Feuerwehr Online Akademie${p.name ? ' · ' + esc(p.name) : ''} · ${notes.length} ${notes.length === 1 ? 'Notiz' : 'Notizen'}</p>
    ${body}
    <footer>Erstellt am ${new Date().toLocaleString('de-DE')} · Persönliche Lernnotizen aus der Feuerwehr Online Akademie.</footer>
    <p style="margin-top:20px"><button onclick="window.print()" style="padding:10px 20px;background:#d81f26;color:#fff;border:none;border-radius:8px;font-size:15px;cursor:pointer">Drucken / als PDF speichern</button></p>
  </body></html>`);
  w.document.close();
}
