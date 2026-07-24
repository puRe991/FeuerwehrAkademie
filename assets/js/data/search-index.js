/* =========================================================================
   VOLLTEXTSUCHE — durchsucht ALLE Inhalte der Akademie:
   Module, Lektionstexte, Prüfungsfragen, Glossar, Planspiele,
   Einsatzkompass, Abschlussprüfungen und die FwDV-/Quellenangaben.

   Der Index wird beim ersten Aufruf einmalig aufgebaut (lazy) und
   gecacht. Gesucht wird über mehrere Begriffe (UND-Verknüpfung) mit
   einfacher Relevanz-Gewichtung: Treffer im Titel zählen mehr als im
   Fließtext. Ergebnisse enthalten einen hervorgehobenen Textausschnitt.
   ========================================================================= */
import { MODULES, MODULE_BY_ID, CATEGORIES } from './curriculum.js';
import { EXAMS } from './exams.js';
import { GLOSSARY } from './glossary.js';
import { PLANSPIELE } from './planspiele.js';
import { EINSATZKOMPASS } from './einsatzkompass.js';
import { EXAM_SETS } from './pruefungssets.js';
import { MODULE_SOURCES } from './module-sources.js';

/* HTML entfernen + Whitespace normalisieren. */
function plain(s = '') {
  return String(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

/* Rekursiv alle Textinhalte aus beliebig verschachtelten Struktur-Objekten
   sammeln (Lektionsblöcke, Planspiel-Bäume, Kompass-Abschnitte …).
   Technische/kurze Felder werden übersprungen, um Rauschen zu vermeiden. */
const SKIP_KEYS = new Set(['t', 'icon', 'color', 'key', 'kind', 'href', 'id', 'cat', 'difficulty', 'duration', 'level']);
function collect(value, out) {
  if (value == null) return;
  if (typeof value === 'string') { const p = plain(value); if (p) out.push(p); return; }
  if (Array.isArray(value)) { value.forEach(v => collect(v, out)); return; }
  if (typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) if (!SKIP_KEYS.has(k)) collect(v, out);
  }
}
function collectText(value) { const out = []; collect(value, out); return out.join(' '); }

/* Ein Suchdokument: sichtbare Felder + durchsuchbarer Fließtext (bodyRaw)
   und das vorab kleingeschriebene Suchfeld (hay). */
function doc(type, title, sub, href, icon, bodyRaw) {
  const body = plain(bodyRaw);
  return { type, title, sub, href, icon, bodyRaw: body, hay: (title + ' ' + body).toLowerCase() };
}

let INDEX = null;

function buildIndex() {
  const docs = [];

  // 1) Module (inkl. Zusammenfassung, Tags, Code, FwDV-/Quellenangaben)
  MODULES.forEach(m => {
    const src = MODULE_SOURCES[m.id];
    const refText = src ? src.refs.map(r => `${r.ref} ${r.title}`).join(' ') + ' ' + (src.note || '') : '';
    const body = [m.summary, (m.tags || []).join(' '), 'Modul ' + m.code, m.objectives?.join(' '), refText].join(' ');
    docs.push(doc('Modul', m.title, CATEGORIES[m.category]?.label || '', `#/modul/${m.id}`, m.icon, body));

    // 2) Lektionen mit vollständigem Inhaltstext
    m.lessons.forEach(l => {
      docs.push(doc('Lektion', l.title, m.title, `#/lektion/${m.id}/${l.id}`, 'book', collectText(l.blocks)));
    });
  });

  // 3) Prüfungsfragen (Fragetext, Optionen, Erklärung)
  for (const [poolId, exam] of Object.entries(EXAMS)) {
    const mod = MODULE_BY_ID[poolId];
    const href = mod ? `#/pruefung/${poolId}` : '#/pruefungen';
    const sub = (mod ? mod.title : 'Jugendfeuerwehr') + ' · Prüfung';
    exam.questions.forEach(q => {
      const body = [(q.options || []).join(' · '), q.exp, q.topic].join(' ');
      docs.push(doc('Prüfungsfrage', q.q, sub, href, 'exam', body));
    });
  }

  // 4) Glossar (Begriff + Definition)
  GLOSSARY.forEach(g => {
    docs.push(doc('Glossar', g.term, 'Fachbegriff', `#/glossar/${encodeURIComponent(g.term)}`, 'search', g.def));
  });

  // 5) Planspiele (Titel, Rolle, Briefing, Situationen)
  PLANSPIELE.forEach(p => {
    docs.push(doc('Planspiel', p.title, p.role || 'Führungskräfte', `#/planspiel/${p.id}`, 'game', collectText({ ...p, title: '', role: '' })));
  });

  // 6) Einsatzkompass (Taschenkarten – Checklisten, Merker, Warnungen)
  EINSATZKOMPASS.forEach(k => {
    docs.push(doc('Einsatzkompass', k.title, k.subtitle || 'Taschenkarte', `#/einsatzkompass/${k.id}`, 'compass', collectText({ ...k, title: '', subtitle: '' })));
  });

  // 7) Abschlussprüfungen (Sets)
  EXAM_SETS.forEach(s => {
    docs.push(doc('Abschlussprüfung', s.title, 'Modulübergreifend', `#/pruefung/${s.id}`, 'award', s.desc || ''));
  });

  INDEX = docs;
  return docs;
}

/* Sicheres Hervorheben der Suchbegriffe in einem Textausschnitt. */
function esc(s = '') {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function snippet(bodyRaw, terms) {
  if (!bodyRaw) return '';
  const low = bodyRaw.toLowerCase();
  let at = -1;
  for (const t of terms) { const i = low.indexOf(t); if (i >= 0 && (at < 0 || i < at)) at = i; }
  const start = at < 0 ? 0 : Math.max(0, at - 40);
  let piece = bodyRaw.slice(start, start + 160);
  if (start > 0) piece = '… ' + piece;
  if (start + 160 < bodyRaw.length) piece += ' …';
  let html = esc(piece);
  // längere Begriffe zuerst hervorheben (verschachtelte Ersetzungen vermeiden)
  [...terms].sort((a, b) => b.length - a.length).forEach(t => {
    if (!t) return;
    const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    html = html.replace(re, '<mark>$1</mark>');
  });
  return html;
}

/* Relevanz-Gewichtung je Ergebnistyp (Tie-Breaker). */
const TYPE_WEIGHT = {
  Modul: 2, Lektion: 1.6, Glossar: 1.5, Einsatzkompass: 1.2,
  Abschlussprüfung: 1, Planspiel: 1, Prüfungsfrage: 0.4,
};

/**
 * Volltextsuche. Liefert nach Relevanz sortierte Treffer.
 * @param {string} query  Suchbegriff(e), durch Leerzeichen getrennt (UND).
 * @param {number} limit  Maximale Trefferzahl.
 */
export function searchContent(query, limit = 40) {
  const terms = String(query || '').toLowerCase().split(/\s+/).filter(t => t.length >= 2);
  if (!terms.length) return { results: [], counts: {}, total: 0 };
  const docs = INDEX || buildIndex();
  const phrase = terms.join(' ');

  const scored = [];
  for (const d of docs) {
    if (!terms.every(t => d.hay.includes(t))) continue; // alle Begriffe müssen vorkommen
    const title = d.title.toLowerCase();
    let score = TYPE_WEIGHT[d.type] || 0;
    for (const t of terms) score += title.includes(t) ? 3 : 1;
    if (title.includes(phrase)) score += 5;
    if (title === phrase) score += 10;
    else if (title.startsWith(phrase)) score += 3;
    scored.push({ d, score });
  }
  scored.sort((a, b) => b.score - a.score || (TYPE_WEIGHT[b.d.type] || 0) - (TYPE_WEIGHT[a.d.type] || 0));

  const counts = {};
  scored.forEach(s => { counts[s.d.type] = (counts[s.d.type] || 0) + 1; });

  const results = scored.slice(0, limit).map(({ d }) => ({
    type: d.type, title: d.title, sub: d.sub, href: d.href, icon: d.icon,
    snippet: snippet(d.bodyRaw, terms),
  }));
  return { results, counts, total: scored.length };
}
