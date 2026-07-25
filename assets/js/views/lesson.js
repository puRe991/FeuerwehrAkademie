/* =========================================================================
   VIEW: Lektions-Reader — rendert Content-Blöcke, TOC, Fortschritt
   ========================================================================= */
import { MODULE_BY_ID, CATEGORIES } from '../data/curriculum.js';
import { diagram } from '../data/diagrams.js';
import { icon } from '../data/icons.js';
import { getState, completeLesson, logActivity, getNote, setNote, deleteNote } from '../state.js';
import { esc, fmtDuration, fmtDateTime, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

const CALLOUT_ICON = { info: 'eye', warn: 'bolt', danger: 'hazmat', ok: 'check', tip: 'star' };
const CALLOUT_LABEL = { info: 'Wissen', warn: 'Achtung', danger: 'Gefahr', ok: 'Merke', tip: 'Praxistipp' };

function block(b) {
  switch (b.t) {
    case 'h2': return `<h2 id="${b.id}">${esc(b.text)}</h2>`;
    case 'h3': return `<h3>${esc(b.text)}</h3>`;
    case 'p':  return `<p>${b.html}</p>`;
    case 'list': return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'ol':   return `<ol>${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'keyfacts': return `<ul class="keyfacts">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'callout':
      return `<div class="callout callout--${b.kind === 'info' ? '' : b.kind}" style="${b.kind === 'info' ? '' : ''}">
        <div class="callout__t">${icon(CALLOUT_ICON[b.kind] || 'eye').replace('<svg ','<svg style="width:18px;height:18px" ')} ${esc(b.title || CALLOUT_LABEL[b.kind] || '')}</div>
        <p>${b.text}</p></div>`;
    case 'def':
      return `<dl class="def"><dt>${esc(b.term)}</dt><dd style="margin:0">${b.text}</dd></dl>`;
    case 'steps':
      return `<ol class="steps">${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'mnemonic':
      return `<div class="mnemonic">${b.letters.map(x => `<b title="${esc(x.w)}">${esc(x.l)}</b>`).join('')}</div><p class="muted" style="font-size:.95rem">${b.text}</p>`;
    case 'table':
      return `<div class="table-wrap"><table class="data"><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    case 'fig':
      return `<figure class="lesson-fig">${diagram(b.key)}${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`;
    default: return '';
  }
}

export function renderLesson(moduleId, lessonId) {
  const m = MODULE_BY_ID[moduleId];
  if (!m) return notFound();
  const idx = m.lessons.findIndex(l => l.id === lessonId);
  const l = m.lessons[idx];
  if (!l) return notFound();
  const cat = CATEGORIES[m.category];
  const s = getState();
  const done = !!(s.progress[moduleId]?.lessons?.[lessonId]);
  const prev = m.lessons[idx - 1];
  const next = m.lessons[idx + 1];
  const headings = l.blocks.filter(b => b.t === 'h2');
  const note = getNote(moduleId, lessonId);

  logActivity('module', m.id, { moduleId: m.id, title: m.title });

  return `
  <div class="view fade-up">
    <div class="crumbs">
      <a href="#/module">Module</a><span class="sep">/</span>
      <a href="#/modul/${m.id}">${esc(m.title)}</a><span class="sep">/</span>
      <span>Lektion ${idx + 1}</span>
    </div>

    <div class="reader">
      <article class="reader__main">
        <div class="between wrap" style="margin-bottom:6px">
          <span class="badge" style="background:${cat.color}22;color:${cat.color};border:none">Modul ${m.code} · Lektion ${idx + 1}/${m.lessons.length}</span>
          <span class="subtle" style="font-size:.85rem">${icon('clock').replace('<svg ','<svg style="width:14px;height:14px;vertical-align:-2px" ')} ${fmtDuration(l.duration)}</span>
        </div>
        <h1 style="margin-bottom:.6em">${esc(l.title)}</h1>

        <div class="prose">
          ${l.blocks.map(block).join('\n')}
        </div>

        <div class="card card--pad" style="margin-top:34px;background:var(--surface-2)">
          <div class="between wrap" style="gap:14px">
            <div>
              <b>${done ? 'Lektion abgeschlossen ✔' : 'Lektion abschließen'}</b>
              <p class="subtle" style="font-size:.88rem;margin:.2em 0 0">${done ? 'Du kannst jederzeit wiederholen.' : 'Markiere als erledigt, um deinen Fortschritt zu speichern.'}</p>
            </div>
            <button class="btn ${done ? 'btn--outline' : 'btn--primary'}" id="completeLesson" data-mod="${m.id}" data-les="${l.id}" ${done ? 'disabled' : ''}>
              ${icon('check')} ${done ? 'Erledigt' : 'Als erledigt markieren'}
            </button>
          </div>
        </div>

        <nav class="between wrap" style="margin-top:24px;gap:12px">
          ${prev ? `<a class="btn btn--ghost" href="#/lektion/${m.id}/${prev.id}">${icon('arrowl')} Vorherige</a>` : '<span></span>'}
          ${next ? `<a class="btn btn--primary" href="#/lektion/${m.id}/${next.id}">Nächste Lektion ${icon('arrowr')}</a>`
                 : `<a class="btn btn--primary" href="#/pruefung/${m.id}">Zur Prüfung ${icon('arrowr')}</a>`}
        </nav>
      </article>

      <aside class="reader__aside">
        <div class="card card--pad">
          <div class="nav__section" style="padding:0 0 10px">In dieser Lektion</div>
          <nav class="toc" id="lessonToc">
            ${headings.map(h => `<a href="#${h.id}" data-toc="${h.id}">${esc(h.text)}</a>`).join('')}
          </nav>
        </div>
        <div class="card card--pad" style="margin-top:16px">
          <div class="nav__section" style="padding:0 0 10px">Alle Lektionen</div>
          <nav class="toc">
            ${m.lessons.map((x, i) => {
              const d = !!(s.progress[m.id]?.lessons?.[x.id]);
              return `<a href="#/lektion/${m.id}/${x.id}" style="${x.id === lessonId ? 'border-color:var(--fw-red);color:var(--fw-red)' : ''}">${d ? '✓ ' : (i + 1) + '. '}${esc(x.title)}</a>`;
            }).join('')}
          </nav>
        </div>

        <div class="card card--pad note-card" style="margin-top:16px">
          <div class="between" style="padding:0 0 10px">
            <span class="nav__section" style="padding:0">${icon('note').replace('<svg ','<svg style="width:16px;height:16px;vertical-align:-3px" ')} Meine Notiz</span>
            <a href="#/notizen" class="subtle" style="font-size:.78rem;text-decoration:none">Alle ansehen</a>
          </div>
          <textarea class="input note-input" id="lessonNote" rows="5"
            placeholder="Eigene Merksätze, Fragen oder Praxiserfahrungen zu dieser Lektion …"
            aria-label="Persönliche Notiz zu dieser Lektion">${esc(note?.text || '')}</textarea>
          <div class="between wrap" style="margin-top:10px;gap:8px">
            <span class="subtle" id="noteStatus" style="font-size:.78rem" aria-live="polite">${note ? 'Gespeichert · ' + fmtDateTime(note.ts) : 'Nur auf diesem Gerät gespeichert'}</span>
            <span class="flex gap-sm">
              <button class="btn btn--danger btn--sm" id="deleteNote" data-mod="${m.id}" data-les="${l.id}" ${note ? '' : 'hidden'}>Löschen</button>
              <button class="btn btn--primary btn--sm" id="saveNote" data-mod="${m.id}" data-les="${l.id}">Speichern</button>
            </span>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
}

/** Nach dem Rendern aufrufen: Interaktion verdrahten */
export function bindLesson(root, rerender) {
  const btn = root.querySelector('#completeLesson');
  if (btn && !btn.disabled) {
    btn.addEventListener('click', () => {
      const mod = btn.dataset.mod, les = btn.dataset.les;
      const wasComplete = allLessonsDone(mod);
      completeLesson(mod, les);
      logActivity('lesson', les, { moduleId: mod, title: lessonTitle(mod, les) });
      toast('Lektion abgeschlossen · +15 XP', 'star');
      if (!wasComplete && allLessonsDone(mod)) { confetti(); toast('Modul komplett durchgearbeitet! 🎉', 'star'); }
      rerender();
    });
  }
  // Notiz speichern / löschen
  const noteBox = root.querySelector('#lessonNote');
  const saveBtn = root.querySelector('#saveNote');
  const delBtn = root.querySelector('#deleteNote');
  const status = root.querySelector('#noteStatus');
  saveBtn?.addEventListener('click', () => {
    const saved = setNote(saveBtn.dataset.mod, saveBtn.dataset.les, noteBox.value);
    if (saved) {
      status.textContent = 'Gespeichert · ' + fmtDateTime(new Date().toISOString());
      delBtn?.removeAttribute('hidden');
      toast('Notiz gespeichert', 'ok');
    } else {
      status.textContent = 'Nur auf diesem Gerät gespeichert';
      delBtn?.setAttribute('hidden', '');
      toast('Notiz entfernt', 'ok');
    }
  });
  delBtn?.addEventListener('click', () => {
    deleteNote(delBtn.dataset.mod, delBtn.dataset.les);
    noteBox.value = '';
    status.textContent = 'Nur auf diesem Gerät gespeichert';
    delBtn.setAttribute('hidden', '');
    toast('Notiz gelöscht', 'ok');
  });
  // Strg/Cmd+Enter speichert
  noteBox?.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); saveBtn.click(); }
  });

  // TOC Scrollspy
  const tocLinks = [...root.querySelectorAll('#lessonToc a[data-toc]')];
  if (tocLinks.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tocLinks.forEach(a => a.classList.toggle('active', a.dataset.toc === e.target.id));
        }
      });
    }, { rootMargin: '-80px 0px -70% 0px' });
    root.querySelectorAll('.prose h2[id]').forEach(h => obs.observe(h));
  }
}

function allLessonsDone(moduleId) {
  const m = MODULE_BY_ID[moduleId];
  const s = getState();
  return m.lessons.every(l => s.progress[moduleId]?.lessons?.[l.id]);
}
function lessonTitle(mod, les) {
  return MODULE_BY_ID[mod]?.lessons.find(l => l.id === les)?.title || '';
}
