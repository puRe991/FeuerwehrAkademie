/* =========================================================================
   VIEWS: Glossar (Nachschlagewerk) & Karteikarten (Spaced Repetition)
   ========================================================================= */
import { GLOSSARY, GLOSSARY_CATS } from '../data/glossary.js';
import { FLASHCARDS } from '../data/flashcards.js';
import { MODULE_BY_ID, MODULES, CATEGORIES } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { getState, reviewCard, dueCards, flashcardStats } from '../state.js';
import { esc, shuffle, toast, confetti } from '../utils.js';

/* ============================ GLOSSAR ============================ */
export function renderGlossary(query = '') {
  const q = (query || '').toLowerCase();
  const filtered = GLOSSARY.filter(g => !q || g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q));
  // Gruppierung nach Anfangsbuchstabe
  const groups = {};
  filtered.forEach(g => { const k = g.term[0].toUpperCase(); (groups[k] ||= []).push(g); });
  const letters = Object.keys(groups).sort((a, b) => a.localeCompare(b, 'de'));

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Glossar & Nachschlagewerk</h1>
      <p class="muted">${GLOSSARY.length} Fachbegriffe und Abkürzungen der Feuerwehr – kompakt erklärt und mit den Modulen verlinkt.</p>
    </div>

    <div class="card card--pad" style="margin-bottom:18px">
      <div class="searchbar" style="max-width:none;position:relative">
        ${icon('search')}
        <input class="input" id="glossarySearch" value="${esc(query)}" placeholder="Begriff suchen (z. B. Flashover, GAMS, Kavitation)…" style="padding-left:40px" autocomplete="off">
      </div>
      ${letters.length ? `<div class="flex gap-sm wrap" style="margin-top:12px">
        ${letters.map(l => `<a class="chip" href="#glo-${l}" style="min-width:34px;justify-content:center">${l}</a>`).join('')}
      </div>` : ''}
    </div>

    ${filtered.length ? letters.map(l => `<section id="glo-${l}" style="scroll-margin-top:90px;margin-bottom:22px">
      <h2 style="color:var(--fw-red);border-bottom:2px solid var(--border);padding-bottom:6px">${l}</h2>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr));margin-top:14px">
        ${groups[l].map(g => {
          const c = GLOSSARY_CATS[g.cat] || { label: g.cat, color: '#888' };
          const mod = MODULE_BY_ID[g.ref];
          return `<div class="card card--pad">
            <div class="between wrap" style="margin-bottom:6px">
              <b style="font-size:1.02rem;min-width:0;overflow-wrap:break-word">${esc(g.term)}</b>
              <span class="badge" style="background:${c.color}22;color:${c.color};border:none;flex:none">${esc(c.label)}</span>
            </div>
            <p class="muted" style="font-size:.92rem;margin:0 0 10px">${esc(g.def)}</p>
            ${mod ? `<a class="subtle" style="font-size:.82rem;font-weight:600" href="#/modul/${mod.id}">→ Modul ${mod.code}: ${esc(mod.title)}</a>` : ''}
          </div>`;
        }).join('')}
      </div>
    </section>`).join('')
    : `<div class="empty">${icon('search')}<p>Kein Begriff gefunden für „${esc(query)}".</p></div>`}
  </div>`;
}

export function bindGlossary(root) {
  const input = root.querySelector('#glossarySearch');
  if (input) {
    let t;
    input.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => { location.hash = input.value.trim() ? `#/glossar/${encodeURIComponent(input.value.trim())}` : '#/glossar'; }, 300);
    });
    // Fokus ans Ende
    input.focus(); const v = input.value; input.value = ''; input.value = v;
  }
}

/* ============================ KARTEIKARTEN ============================ */
let deck = null; // { cards, index, cardId, flipped, session:{right,wrong} }

export function renderFlashHome() {
  const st = flashcardStats(FLASHCARDS);
  const pct = st.total ? Math.round(st.learned / st.total * 100) : 0;

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Karteikarten</h1>
      <p class="muted">Nachhaltig lernen mit dem <b>Leitner-System</b> (Spaced Repetition): Karten, die du kannst, kommen seltener – schwierige öfter. ${FLASHCARDS.length} Karten aus allen Modulen.</p>
    </div>

    <div class="grid col-2" style="grid-template-columns:1.5fr 1fr;align-items:start" id="flashCols">
      <section class="stack">
        <div class="card card--pad">
          <div class="between wrap" style="gap:16px">
            <div>
              <div class="badge badge--red badge--dot" style="margin-bottom:8px">Heute fällig</div>
              <h2 style="margin:0"><span style="font-size:2.4rem">${st.dueToday}</span> <span class="muted" style="font-size:1rem">Karten</span></h2>
              <p class="subtle" style="font-size:.88rem;margin:.3em 0 0">${st.seen} von ${st.total} Karten schon gesehen · ${st.mastered} gemeistert</p>
            </div>
            <button class="btn btn--primary btn--lg" id="startDeckAll">${icon('play')} Lernsession starten</button>
          </div>
          <div class="progress progress--green" style="margin-top:16px"><i style="width:${pct}%"></i></div>
          <span class="subtle" style="font-size:.82rem">${pct}% der Karten im Langzeitgedächtnis (Box 2+)</span>
        </div>

        <div class="card card--pad">
          <h3 style="margin-bottom:12px">Nach Modul üben</h3>
          <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">
            ${MODULES.map(m => {
              const cnt = FLASHCARDS.filter(c => c.moduleId === m.id).length;
              if (!cnt) return '';
              const cat = CATEGORIES[m.category];
              return `<button class="card card--pad card--interactive" data-deck-mod="${m.id}" style="text-align:left;border:none;cursor:pointer">
                <div class="flex gap-sm" style="align-items:center">
                  <span style="width:34px;height:34px;border-radius:9px;background:${cat.color}22;color:${cat.color};display:grid;place-items:center;flex:none">${icon(m.icon).replace('<svg ','<svg style="width:18px;height:18px" ')}</span>
                  <span style="min-width:0"><b style="display:block;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(m.title)}</b><span class="subtle" style="font-size:.8rem">${cnt} Karten</span></span>
                </div>
              </button>`;
            }).join('')}
          </div>
        </div>
      </section>

      <aside class="card card--pad">
        <h3 style="margin-bottom:12px">${icon('chart').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Dein Kartenstatus</h3>
        ${leitnerBar(st)}
        <div class="callout" style="margin:14px 0 0"><div class="callout__t">${icon('star').replace('<svg ','<svg style="width:16px;height:16px" ')} So funktioniert's</div>
          <p style="font-size:.88rem">Bewerte nach dem Umdrehen ehrlich, ob du die Karte wusstest. „Gewusst" schiebt die Karte in die nächste Box (längeres Intervall), „Nochmal" zurück in Box 1.</p>
        </div>
      </aside>
    </div>
  </div>`;
}

function leitnerBar(st) {
  const boxes = [1, 2, 3, 4, 5];
  const counts = boxes.map(b => FLASHCARDS.filter(c => (getState().flashcards[c.id]?.box || 0) === b).length);
  const labels = ['Box 1 (neu/schwer)', 'Box 2', 'Box 3', 'Box 4', 'Box 5 (gemeistert)'];
  const colors = ['#d81f26', '#e67e22', '#f5a623', '#5aa0d6', '#2e9e5b'];
  return `<div class="stack" style="--gap:8px">${boxes.map((b, i) => `
    <div><div class="between" style="margin-bottom:3px"><span style="font-size:.82rem;font-weight:600">${labels[i]}</span><b style="font-size:.85rem">${counts[i]}</b></div>
    <div class="progress"><i style="width:${st.total ? counts[i] / st.total * 100 : 0}%;background:${colors[i]}"></i></div></div>`).join('')}</div>`;
}

export function startDeck(moduleId) {
  const { due, fresh } = dueCards(FLASHCARDS, moduleId);
  // fällige zuerst, dann bis zu 10 neue
  let cards = [...shuffle(due), ...shuffle(fresh).slice(0, Math.max(0, 15 - due.length))];
  if (!cards.length) cards = shuffle(moduleId ? FLASHCARDS.filter(c => c.moduleId === moduleId) : FLASHCARDS).slice(0, 15);
  deck = { cards, index: 0, flipped: false, session: { right: 0, wrong: 0 } };
}

export function renderDeck() {
  if (!deck) { location.hash = '#/karteikarten'; return ''; }
  if (deck.index >= deck.cards.length) return deckDone();
  const card = deck.cards[deck.index];
  const total = deck.cards.length;

  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="exam-bar">
        <a class="iconbtn" href="#/karteikarten" title="Beenden">${icon('x')}</a>
        <div class="progress"><i style="width:${deck.index / total * 100}%"></i></div>
        <span class="q-num" style="white-space:nowrap">${deck.index + 1} / ${total}</span>
      </div>

      <div class="card q-card center" id="flashCard" style="cursor:pointer;min-height:280px;display:flex;flex-direction:column;justify-content:center;user-select:none">
        <span class="badge" style="margin:0 auto 16px">${deck.flipped ? 'Antwort' : 'Frage'}${card.moduleCode ? ' · Modul ' + card.moduleCode : ''}</span>
        <div style="font-size:1.3rem;font-weight:${deck.flipped ? '500' : '700'};line-height:1.5;max-width:560px;margin:0 auto">
          ${deck.flipped ? esc(card.back) : card.front}
        </div>
        <p class="subtle" style="margin-top:22px;font-size:.85rem">${deck.flipped ? '' : '👆 Karte antippen zum Umdrehen'}</p>
      </div>

      ${deck.flipped ? `<div class="flex gap-sm" style="margin-top:16px">
        <button class="btn btn--outline btn--block btn--lg" id="cardWrong" style="--btn-fg:var(--danger);--btn-bd:var(--danger)">${icon('refresh')} Nochmal</button>
        <button class="btn btn--primary btn--block btn--lg" id="cardRight" style="--btn-bg:var(--ok);--btn-bd:var(--ok)">${icon('check')} Gewusst</button>
      </div>` : `<button class="btn btn--primary btn--block btn--lg" id="flipCard" style="margin-top:16px">${icon('eye')} Antwort zeigen</button>`}
    </div>
  </div>`;
}

function deckDone() {
  const { right, wrong } = deck.session;
  const total = right + wrong;
  const pct = total ? Math.round(right / total * 100) : 0;
  return `
  <div class="view fade-up">
    <div class="exam-shell">
      <div class="card card--pad result-hero">
        <div class="ring result-ring" style="--p:${pct}"><div style="text-align:center"><b>${pct}%</b><small>${right}/${total}</small></div></div>
        <h1>Session abgeschlossen! 🎉</h1>
        <p class="muted">${right} Karten gewusst, ${wrong} zum Wiederholen. Deine Fortschritte sind gespeichert – fällige Karten kommen zur richtigen Zeit zurück.</p>
        <div class="flex gap-sm" style="justify-content:center;margin-top:20px">
          <button class="btn btn--primary" id="deckAgain">${icon('refresh')} Weiter lernen</button>
          <a class="btn btn--outline" href="#/karteikarten">Übersicht</a>
        </div>
      </div>
    </div>
  </div>`;
}

export function bindFlashcards(root, rerender) {
  root.querySelector('#startDeckAll')?.addEventListener('click', () => { startDeck(null); location.hash = '#/karteikarten/lernen'; });
  root.querySelectorAll('[data-deck-mod]').forEach(b => b.addEventListener('click', () => { startDeck(b.dataset.deckMod); location.hash = '#/karteikarten/lernen'; }));

  if (!deck) return;
  const flip = () => { deck.flipped = true; rerender(); };
  root.querySelector('#flashCard')?.addEventListener('click', () => { if (!deck.flipped) flip(); });
  root.querySelector('#flipCard')?.addEventListener('click', flip);

  root.querySelector('#cardRight')?.addEventListener('click', () => advance(true, rerender));
  root.querySelector('#cardWrong')?.addEventListener('click', () => advance(false, rerender));
  root.querySelector('#deckAgain')?.addEventListener('click', () => { startDeck(null); rerender(); });
}

function advance(correct, rerender) {
  const card = deck.cards[deck.index];
  reviewCard(card.id, correct);
  deck.session[correct ? 'right' : 'wrong']++;
  deck.index++;
  deck.flipped = false;
  if (deck.index >= deck.cards.length) { confetti(); toast('Karteikarten-Session fertig!', 'star'); }
  rerender();
}

export function resetDeck() { /* Session bleibt erhalten, bis Home neu startet */ }
