/* =========================================================================
   KARTEIKARTEN — automatisch aus dem Curriculum generiert
   Quellen: Definitionen (def), Merkhilfen (mnemonic) und das Glossar.
   Ergänzt um kuratierte Kern-Karten. Karten-IDs sind stabil (deterministisch),
   damit der Lernfortschritt (Leitner-Box) erhalten bleibt.
   ========================================================================= */
import { MODULES } from './curriculum.js';
import { GLOSSARY } from './glossary.js';

/* HTML grob zu Text (für Kartenrückseiten aus Curriculum-Blöcken) */
function stripHtml(html = '') {
  return String(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function slug(s) {
  return s.toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

function buildCards() {
  const cards = [];
  const seen = new Set();
  // Kollisionen (z. B. gleicher Merkhilfen-Buchstabe in zwei Lektionen mit
  // unterschiedlicher Bedeutung) NICHT verwerfen, sondern eindeutig machen –
  // die Erst-ID bleibt stabil (Leitner-Fortschritt), Folge-IDs erhalten Suffix.
  const push = (c) => {
    let id = c.id, n = 2;
    while (seen.has(id)) id = `${c.id}-${n++}`;
    seen.add(id);
    cards.push({ ...c, id });
  };

  // 1) Aus Curriculum: Definitionen & Merkhilfen
  MODULES.forEach(m => {
    m.lessons.forEach(l => {
      l.blocks.forEach(b => {
        if (b.t === 'def') {
          push({
            id: `def-${m.id}-${slug(b.term)}`,
            moduleId: m.id, moduleCode: m.code, cat: m.category,
            front: `Definiere: <b>${stripHtml(b.term)}</b>`,
            back: stripHtml(b.text),
          });
        }
        if (b.t === 'mnemonic') {
          const letters = b.letters.map(x => `${x.l} = ${x.w}`).join(' · ');
          push({
            id: `mne-${m.id}-${slug(b.letters.map(x => x.l).join(''))}`,
            moduleId: m.id, moduleCode: m.code, cat: m.category,
            front: `Wofür steht die Merkhilfe <b>${b.letters.map(x => x.l).join('-')}</b>? <span class="subtle">(${m.title} · ${stripHtml(l.title)})</span>`,
            back: letters,
          });
        }
      });
    });
  });

  // 2) Aus dem Glossar (Begriff → Definition)
  GLOSSARY.forEach(g => {
    push({
      id: `glo-${slug(g.term)}`,
      moduleId: g.ref, moduleCode: '', cat: g.cat,
      front: `Was bedeutet: <b>${g.term}</b>?`,
      back: g.def,
    });
  });

  return cards;
}

export const FLASHCARDS = buildCards();
export const FLASHCARD_BY_ID = Object.fromEntries(FLASHCARDS.map(c => [c.id, c]));

/* Leitner-System: Box → Intervall in Tagen bis zur nächsten Wiederholung */
export const LEITNER_INTERVALS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };
export const MAX_BOX = 5;
