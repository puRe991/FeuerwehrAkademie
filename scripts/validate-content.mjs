#!/usr/bin/env node
/* =========================================================================
   INHALTS-VALIDIERUNG — automatisierte Qualitätsprüfung der Lerninhalte.

   Prüft die Datenmodule (Curriculum, Fragenbank, Prüfungssets, Glossar,
   Karteikarten, Planspiele, Einsatzkompass, Quellen) auf strukturelle
   Fehler und kaputte Querverweise – z. B. Fragen ohne (gültige) Lösung,
   doppelte IDs oder Verweise auf nicht existierende Module.

   Aufruf:  node scripts/validate-content.mjs
   Exit:    0 = keine Fehler · 1 = mindestens ein Fehler
            (Warnungen führen nicht zum Fehlschlag.)

   Nutzt reine Datenmodule (keine Browser-Globals nötig). Node ≥ 22
   erkennt die ES-Module automatisch.
   ========================================================================= */

const BASE = new URL('../assets/js/data/', import.meta.url);
const imp = (f) => import(new URL(f, BASE));

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const isInt = (v) => Number.isInteger(v);

const [
  { MODULES, MODULE_BY_ID, CATEGORIES, LEVELS, LESSON_COUNT },
  { EXAMS, QUESTION_BY_ID, TOTAL_QUESTIONS },
  { EXAM_SETS, EXAM_SET_BY_ID, buildSetQuestions, setSize },
  { MODULE_SOURCES },
  { GLOSSARY, GLOSSARY_CATS },
  { FLASHCARDS },
  { PLANSPIELE },
  { EINSATZKOMPASS, KOMPASS_CATS },
] = await Promise.all([
  imp('curriculum.js'), imp('exams.js'), imp('pruefungssets.js'),
  imp('module-sources.js'), imp('glossary.js'), imp('flashcards.js'),
  imp('planspiele.js'), imp('einsatzkompass.js'),
]);

const VALID_TYPES = new Set(['single', 'multiple', 'truefalse']);

/* --------------------------- 1) Fragenbank --------------------------- */
const seenQids = new Map(); // id -> poolId
const seenQtext = new Map(); // normalisierter Fragetext -> "poolId/id"
const normQ = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9äöüß]+/g, ' ').trim();
let questionCount = 0;

for (const [poolId, exam] of Object.entries(EXAMS)) {
  if (!exam || !Array.isArray(exam.questions)) { err(`EXAMS[${poolId}]: keine questions-Liste`); continue; }
  if (!isInt(exam.passScore) || exam.passScore < 1 || exam.passScore > 100)
    err(`EXAMS[${poolId}]: passScore ungültig (${exam.passScore})`);

  exam.questions.forEach((q, i) => {
    questionCount++;
    const where = `EXAMS[${poolId}] Frage #${i + 1}${q?.id ? ` (${q.id})` : ''}`;

    if (!isStr(q?.id)) { err(`${where}: fehlende/leere id`); return; }
    if (seenQids.has(q.id)) err(`Doppelte Frage-ID "${q.id}" (in ${seenQids.get(q.id)} und ${poolId})`);
    else seenQids.set(q.id, poolId);

    if (!isStr(q.q)) err(`${where}: leerer Fragetext`);
    else {
      // Inhaltliche Duplikate (gleicher Fragetext, andere ID) aufspüren – die
      // Prüfungs-Engine filtert solche Fragen zur Laufzeit heraus, damit keine
      // Frage doppelt gestellt wird; hier machen wir sie zur Bereinigung sichtbar.
      const key = normQ(q.q);
      if (seenQtext.has(key)) warn(`Doppelter Fragetext: "${q.id}" gleicht "${seenQtext.get(key)}" – „${q.q}"`);
      else seenQtext.set(key, `${poolId}/${q.id}`);
    }
    if (!isStr(q.exp)) err(`${where}: fehlende Erklärung (exp)`);
    if (!VALID_TYPES.has(q.type)) err(`${where}: unbekannter type "${q.type}"`);
    if (!isInt(q.difficulty) || q.difficulty < 1 || q.difficulty > 3)
      err(`${where}: difficulty außerhalb 1–3 (${q.difficulty})`);
    if (!isStr(q.topic)) warn(`${where}: kein topic gesetzt`);

    if (!Array.isArray(q.options) || q.options.length < 2) { err(`${where}: braucht ≥ 2 Optionen`); return; }
    if (q.options.some(o => !isStr(o))) err(`${where}: leere Antwortoption`);

    if (!Array.isArray(q.correct) || q.correct.length < 1) { err(`${where}: keine richtige Antwort (correct leer)`); return; }
    const bad = q.correct.filter(c => !isInt(c) || c < 0 || c >= q.options.length);
    if (bad.length) err(`${where}: correct-Index außerhalb der Optionen (${bad.join(', ')})`);
    if (new Set(q.correct).size !== q.correct.length) err(`${where}: doppelter Index in correct`);

    if (q.type === 'truefalse' && q.options.length !== 2) err(`${where}: truefalse braucht genau 2 Optionen`);
    if ((q.type === 'single' || q.type === 'truefalse') && q.correct.length !== 1)
      err(`${where}: ${q.type} braucht genau eine richtige Antwort (hat ${q.correct.length})`);
    if (q.type === 'multiple' && q.correct.length < 2)
      warn(`${where}: multiple mit nur einer richtigen Antwort`);
    if (q.correct.length === q.options.length)
      warn(`${where}: alle Optionen als richtig markiert`);
  });
}

// Index-Konsistenz
if (Object.keys(QUESTION_BY_ID).length !== seenQids.size)
  err(`QUESTION_BY_ID (${Object.keys(QUESTION_BY_ID).length}) ≠ eindeutige Frage-IDs (${seenQids.size}) – vermutlich ID-Kollision`);
if (TOTAL_QUESTIONS !== questionCount)
  warn(`TOTAL_QUESTIONS (${TOTAL_QUESTIONS}) ≠ gezählte Fragen (${questionCount})`);
for (const id of seenQids.keys())
  if (!QUESTION_BY_ID[id]) err(`Frage-ID "${id}" fehlt im QUESTION_BY_ID-Index`);

/* --------------------------- 2) Prüfungssets --------------------------- */
const seenSetIds = new Set();
for (const set of EXAM_SETS) {
  const where = `Prüfungsset "${set?.id}"`;
  if (!isStr(set?.id)) { err('Prüfungsset ohne id'); continue; }
  if (seenSetIds.has(set.id)) err(`Doppelte Set-ID "${set.id}"`); else seenSetIds.add(set.id);
  if (EXAM_SET_BY_ID[set.id] !== set) err(`${where}: nicht korrekt im EXAM_SET_BY_ID-Index`);
  if (!isStr(set.title)) err(`${where}: kein Titel`);
  if (!isInt(set.passScore) || set.passScore < 1 || set.passScore > 100) err(`${where}: passScore ungültig`);
  if (!Array.isArray(set.sources) || !set.sources.length) { err(`${where}: keine sources`); continue; }

  let declared = 0;
  for (const s of set.sources) {
    const pool = EXAMS[s.moduleId];
    if (!pool) { err(`${where}: Quelle verweist auf unbekannten Pool "${s.moduleId}"`); continue; }
    const need = s.count || 1;
    declared += need;
    if (pool.questions.length < need)
      err(`${where}: Pool "${s.moduleId}" hat ${pool.questions.length} Fragen, ${need} gefordert`);
  }
  const size = setSize(set);
  if (size !== declared) warn(`${where}: setSize (${size}) ≠ Summe der counts (${declared})`);

  try {
    const built = buildSetQuestions(set);
    if (!Array.isArray(built) || built.length !== size)
      err(`${where}: buildSetQuestions liefert ${built?.length} statt ${size} Fragen`);
    if (built.some(q => !isStr(q?.id))) err(`${where}: buildSetQuestions liefert Frage ohne id`);
  } catch (e) {
    err(`${where}: buildSetQuestions wirft Fehler – ${e.message}`);
  }
}

/* --------------------------- 3) Curriculum --------------------------- */
const seenModIds = new Set(), seenCodes = new Set();
let lessonTotal = 0;
for (const m of MODULES) {
  const where = `Modul "${m?.id}"`;
  if (!isStr(m?.id)) { err('Modul ohne id'); continue; }
  if (seenModIds.has(m.id)) err(`Doppelte Modul-ID "${m.id}"`); else seenModIds.add(m.id);
  if (MODULE_BY_ID[m.id] !== m) err(`${where}: nicht korrekt im MODULE_BY_ID-Index`);
  if (!isStr(m.code)) err(`${where}: kein code`);
  else if (seenCodes.has(m.code)) err(`Doppelter Modul-Code "${m.code}"`); else seenCodes.add(m.code);
  if (!isStr(m.title)) err(`${where}: kein Titel`);
  if (!isStr(m.summary)) warn(`${where}: keine summary`);
  if (!CATEGORIES[m.category]) err(`${where}: unbekannte Kategorie "${m.category}"`);
  if (!LEVELS[m.level]) err(`${where}: unbekanntes Level "${m.level}"`);
  if (!Array.isArray(m.objectives) || !m.objectives.length) warn(`${where}: keine Lernziele`);
  if (!Array.isArray(m.tags) || !m.tags.length) warn(`${where}: keine Tags`);

  if (!Array.isArray(m.lessons) || !m.lessons.length) { err(`${where}: keine Lektionen`); continue; }
  const seenLes = new Set();
  for (const l of m.lessons) {
    lessonTotal++;
    if (!isStr(l?.id)) { err(`${where}: Lektion ohne id`); continue; }
    if (seenLes.has(l.id)) err(`${where}: doppelte Lektion-ID "${l.id}"`); else seenLes.add(l.id);
    if (!isStr(l.title)) err(`${where} / Lektion "${l.id}": kein Titel`);
    if (!Array.isArray(l.blocks) || !l.blocks.length) err(`${where} / Lektion "${l.id}": keine Inhaltsblöcke`);
  }
}
if (isInt(LESSON_COUNT) && LESSON_COUNT !== lessonTotal)
  warn(`LESSON_COUNT (${LESSON_COUNT}) ≠ gezählte Lektionen (${lessonTotal})`);

/* --------------------------- 4) Quellen & Stand --------------------------- */
for (const m of MODULES)
  if (!MODULE_SOURCES[m.id]) err(`Modul "${m.id}" hat keine Quellenangaben (MODULE_SOURCES)`);
for (const [id, src] of Object.entries(MODULE_SOURCES)) {
  const where = `MODULE_SOURCES["${id}"]`;
  if (!MODULE_BY_ID[id]) err(`${where}: verweist auf unbekanntes Modul`);
  if (!isStr(src.stand)) err(`${where}: kein Stand`);
  if (!Array.isArray(src.refs) || !src.refs.length) { err(`${where}: keine refs`); continue; }
  src.refs.forEach((r, i) => {
    if (!isStr(r?.ref)) err(`${where} ref #${i + 1}: fehlendes Kürzel`);
    if (!isStr(r?.title)) err(`${where} ref #${i + 1}: fehlender Titel`);
  });
}

/* --------------------------- 5) Glossar --------------------------- */
const seenTerms = new Set();
for (const g of GLOSSARY) {
  const where = `Glossar "${g?.term}"`;
  if (!isStr(g?.term)) { err('Glossareintrag ohne term'); continue; }
  const key = g.term.toLowerCase();
  if (seenTerms.has(key)) warn(`${where}: doppelter Begriff`); else seenTerms.add(key);
  if (!isStr(g.def)) err(`${where}: keine Definition`);
  if (g.cat && GLOSSARY_CATS && !GLOSSARY_CATS[g.cat]) warn(`${where}: unbekannte Kategorie "${g.cat}"`);
  if (g.ref && !MODULE_BY_ID[g.ref]) err(`${where}: ref verweist auf unbekanntes Modul "${g.ref}"`);
}

/* --------------------------- 6) Karteikarten --------------------------- */
const seenCardIds = new Set();
for (const c of FLASHCARDS) {
  const where = `Karteikarte "${c?.id}"`;
  if (!isStr(c?.id)) { err('Karteikarte ohne id'); continue; }
  if (seenCardIds.has(c.id)) err(`Doppelte Karteikarten-ID "${c.id}"`); else seenCardIds.add(c.id);
  if (!isStr(c.front)) err(`${where}: keine Vorderseite`);
  if (!isStr(c.back)) err(`${where}: keine Rückseite`);
  if (c.moduleId && !MODULE_BY_ID[c.moduleId]) err(`${where}: moduleId "${c.moduleId}" existiert nicht`);
}

/* --------------------------- 7) Planspiele --------------------------- */
const seenPsIds = new Set();
for (const p of PLANSPIELE) {
  const where = `Planspiel "${p?.id}"`;
  if (!isStr(p?.id)) { err('Planspiel ohne id'); continue; }
  if (seenPsIds.has(p.id)) err(`Doppelte Planspiel-ID "${p.id}"`); else seenPsIds.add(p.id);
  if (!isStr(p.title)) err(`${where}: kein Titel`);
}

/* --------------------------- 8) Einsatzkompass --------------------------- */
const seenEkIds = new Set();
for (const k of EINSATZKOMPASS) {
  const where = `Einsatzkompass "${k?.id}"`;
  if (!isStr(k?.id)) { err('Einsatzkompass-Karte ohne id'); continue; }
  if (seenEkIds.has(k.id)) err(`Doppelte Einsatzkompass-ID "${k.id}"`); else seenEkIds.add(k.id);
  if (!isStr(k.title)) err(`${where}: kein Titel`);
  if (k.cat && KOMPASS_CATS && !KOMPASS_CATS[k.cat]) warn(`${where}: unbekannte Kategorie "${k.cat}"`);
}

/* --------------------------- Bericht --------------------------- */
const line = '─'.repeat(60);
console.log(line);
console.log('  Inhalts-Validierung – Feuerwehr Online Akademie');
console.log(line);
console.log(`  Module:          ${MODULES.length}`);
console.log(`  Lektionen:       ${lessonTotal}`);
console.log(`  Fragen:          ${questionCount} (eindeutige IDs: ${seenQids.size})`);
console.log(`  Prüfungssets:    ${EXAM_SETS.length}`);
console.log(`  Glossar:         ${GLOSSARY.length}`);
console.log(`  Karteikarten:    ${FLASHCARDS.length}`);
console.log(`  Planspiele:      ${PLANSPIELE.length}`);
console.log(`  Einsatzkompass:  ${EINSATZKOMPASS.length}`);
console.log(line);

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} Warnung(en):`);
  warnings.forEach(w => console.log('   • ' + w));
}

if (errors.length) {
  console.log(`\n❌ ${errors.length} Fehler:`);
  errors.forEach(e => console.log('   • ' + e));
  console.log(`\nInhalts-Validierung fehlgeschlagen.\n`);
  process.exit(1);
}

console.log(`\n✅ Keine Fehler – alle Inhalte konsistent.${warnings.length ? ` (${warnings.length} Warnung[en])` : ''}\n`);
