/* =========================================================================
   STATE — Persistenter Store für Personalisierung
   Speichert Nutzerprofil, Lernfortschritt, Prüfungsergebnisse, Planspiele,
   Streak und Einstellungen im localStorage. Einfaches Pub/Sub-Modell.
   ========================================================================= */

const PREFIX = 'fwa:v1';             // Speicher-Präfix je Konto: fwa:v1:<id>
const REGISTRY_KEY = 'fwa:accounts'; // Liste aller Konten + aktives Konto

const DEFAULT_STATE = {
  profile: null, // { name, role, level, unit, goal, createdAt }
  settings: { theme: 'auto' },
  progress: {},        // { [moduleId]: { lessons: { [lessonId]: true }, startedAt } }
  examResults: {},     // { [moduleId]: [ { score, passed, date, correct, total, answers } ] }
  planspielResults: {},// { [planspielId]: [ { rating, meters, path, date } ] }
  bookmarks: [],       // [moduleId]
  activity: [],        // [ { type, ref, date } ] (Verlauf)
  flashcards: {},      // { [cardId]: { box, due, reviewed } } Leitner
  mistakes: {},        // { [questionId]: { wrong, right, last: 'wrong'|'right', ts } } Fehler-Center
  knotsLearned: [],    // [knotId] im Knoten-Trainer als „geübt" markiert
  videosWatched: [],   // [videoId] in Lernvideos als „gesehen" markiert
  reportsRead: [],     // [beispielId] in Lesebeispiele als „gelesen" markiert
  dailyQuiz: { day: null, correct: false }, // Frage des Tages – zuletzt beantworteter Tag
  streak: { count: 0, lastDay: null },
  xp: 0,
};

/* --------------------- Speicher-Helfer --------------------- */
function readJSON(key) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch { return null; }
}
function writeJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function deepMerge(base, over) {
  for (const k in over) {
    if (over[k] && typeof over[k] === 'object' && !Array.isArray(over[k]) && typeof base[k] === 'object') {
      base[k] = deepMerge(base[k] ?? {}, over[k]);
    } else {
      base[k] = over[k];
    }
  }
  return base;
}

/* --------------------- Konten-Registry (Mehrbenutzer) ---------------------
   Jeder Nutzer hat einen eigenen State-Blob unter fwa:v1:<id>. Die Registry
   (fwa:accounts) führt alle Konten samt Kurzinfo und dem aktiven Konto.
   -------------------------------------------------------------------------- */
function uid() {
  return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function accountKey(id) { return `${PREFIX}:${id}`; }

/** Kurzinfo je Konto (für Umschalter/Registry) aus dem State ableiten. */
function summaryFields(st) {
  const p = st.profile;
  return { name: p?.name || null, role: p?.role || null, level: p?.level || 1, xp: st.xp || 0 };
}

function loadAccount(id) {
  const parsed = readJSON(accountKey(id));
  return parsed ? deepMerge(structuredClone(DEFAULT_STATE), parsed) : structuredClone(DEFAULT_STATE);
}

/**
 * Registry laden. Beim allerersten Start – oder wenn noch ein altes
 * Einzelprofil unter `fwa:v1` liegt – wird automatisch ein erstes Konto
 * angelegt und der bisherige Fortschritt verlustfrei migriert.
 */
function initRegistry() {
  const reg = readJSON(REGISTRY_KEY);
  if (reg && Array.isArray(reg.accounts) && reg.accounts.length) {
    if (!reg.accounts.some(a => a.id === reg.active)) reg.active = reg.accounts[0].id;
    return reg;
  }
  const id = uid();
  const legacy = readJSON(PREFIX); // altes Einzelprofil ohne Konto-Suffix
  let st = structuredClone(DEFAULT_STATE);
  if (legacy) {
    st = deepMerge(st, legacy);
    writeJSON(accountKey(id), st);
    try { localStorage.removeItem(PREFIX); } catch {}
  }
  const fresh = { active: id, accounts: [{ id, ...summaryFields(st) }] };
  writeJSON(REGISTRY_KEY, fresh);
  return fresh;
}

let registry = initRegistry();
let activeId = registry.active;
let state = loadAccount(activeId);
const subscribers = new Set();

function persist() {
  writeJSON(accountKey(activeId), state);
  const acc = registry.accounts.find(a => a.id === activeId);
  if (acc) { Object.assign(acc, summaryFields(state)); writeJSON(REGISTRY_KEY, registry); }
}

/* --------------------- Konten-API --------------------- */

/** Alle Konten mit Kurzinfo; das aktive ist mit `active: true` markiert. */
export function listAccounts() {
  return registry.accounts.map(a => ({ ...a, active: a.id === activeId }));
}

export function activeAccountId() { return activeId; }

/** Zu einem bestehenden Konto wechseln. Aktueller Stand wird zuvor gesichert. */
export function switchAccount(id) {
  if (id === activeId || !registry.accounts.some(a => a.id === id)) return;
  persist();
  activeId = id;
  registry.active = id;
  writeJSON(REGISTRY_KEY, registry);
  state = loadAccount(id);
  emit();
}

/** Neues, leeres Konto anlegen und aktivieren (führt anschließend ins Onboarding). */
export function createAccount() {
  persist();
  const id = uid();
  state = structuredClone(DEFAULT_STATE);
  activeId = id;
  registry.accounts.push({ id, ...summaryFields(state) });
  registry.active = id;
  writeJSON(accountKey(id), state);
  writeJSON(REGISTRY_KEY, registry);
  emit();
  return id;
}

/**
 * Konto löschen. War es das aktive Konto, wird zu einem anderen gewechselt –
 * gibt es kein weiteres, wird ein frisches Konto angelegt.
 */
export function deleteAccount(id) {
  const idx = registry.accounts.findIndex(a => a.id === id);
  if (idx < 0) return;
  registry.accounts.splice(idx, 1);
  try { localStorage.removeItem(accountKey(id)); } catch {}
  if (id === activeId) {
    if (registry.accounts.length) {
      activeId = registry.accounts[0].id;
      state = loadAccount(activeId);
    } else {
      activeId = uid();
      state = structuredClone(DEFAULT_STATE);
      registry.accounts.push({ id: activeId, ...summaryFields(state) });
      writeJSON(accountKey(activeId), state);
    }
    registry.active = activeId;
  }
  writeJSON(REGISTRY_KEY, registry);
  emit();
}

export function getState() { return state; }

export function subscribe(fn) { subscribers.add(fn); return () => subscribers.delete(fn); }

function emit() { subscribers.forEach(fn => fn(state)); }

/** Änderung anwenden + persistieren + benachrichtigen */
export function update(mutator) {
  mutator(state);
  persist();
  emit();
}

/* --------------------- Domänen-Aktionen --------------------- */

export function todayStr() { return new Date().toISOString().slice(0, 10); }

export function touchStreak() {
  update(s => {
    const today = todayStr();
    if (s.streak.lastDay === today) return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.streak.count = (s.streak.lastDay === yesterday) ? s.streak.count + 1 : 1;
    s.streak.lastDay = today;
  });
}

export function addXp(n) { update(s => { s.xp = (s.xp || 0) + n; }); }

export function logActivity(type, ref, meta = {}) {
  update(s => {
    s.activity.unshift({ type, ref, meta, date: new Date().toISOString() });
    s.activity = s.activity.slice(0, 40);
  });
}

export function setProfile(profile) {
  update(s => { s.profile = { ...profile, createdAt: s.profile?.createdAt || new Date().toISOString() }; });
}

export function completeLesson(moduleId, lessonId) {
  update(s => {
    if (!s.progress[moduleId]) s.progress[moduleId] = { lessons: {}, startedAt: new Date().toISOString() };
    const already = s.progress[moduleId].lessons[lessonId];
    s.progress[moduleId].lessons[lessonId] = true;
    if (!already) s.xp = (s.xp || 0) + 15;
  });
  touchStreak();
}

export function saveExamResult(moduleId, result) {
  update(s => {
    if (!s.examResults[moduleId]) s.examResults[moduleId] = [];
    s.examResults[moduleId].unshift({ ...result, date: new Date().toISOString() });
    s.examResults[moduleId] = s.examResults[moduleId].slice(0, 10);
    s.xp = (s.xp || 0) + (result.passed ? 50 : 10);
  });
  touchStreak();
}

export function savePlanspielResult(planspielId, result) {
  update(s => {
    if (!s.planspielResults[planspielId]) s.planspielResults[planspielId] = [];
    s.planspielResults[planspielId].unshift({ ...result, date: new Date().toISOString() });
    s.planspielResults[planspielId] = s.planspielResults[planspielId].slice(0, 10);
    s.xp = (s.xp || 0) + 40;
  });
  touchStreak();
}

/* ---- Karteikarten (Leitner / Spaced Repetition) ---- */
const LEITNER = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };

export function reviewCard(cardId, correct) {
  update(s => {
    const cur = s.flashcards[cardId] || { box: 1, due: todayStr(), reviewed: null };
    const nextBox = correct ? Math.min(5, cur.box + 1) : 1;
    const dueDate = new Date(Date.now() + LEITNER[nextBox] * 864e5).toISOString().slice(0, 10);
    s.flashcards[cardId] = { box: nextBox, due: dueDate, reviewed: new Date().toISOString() };
    s.xp = (s.xp || 0) + (correct ? 4 : 1);
  });
  touchStreak();
}

/** Fällige Karten aus einer Kartenliste (heute oder überfällig, plus neue) */
export function dueCards(allCards, moduleId = null) {
  const today = todayStr();
  const pool = moduleId ? allCards.filter(c => c.moduleId === moduleId) : allCards;
  const due = [], fresh = [];
  pool.forEach(c => {
    const st = state.flashcards[c.id];
    if (!st) fresh.push(c);
    else if (st.due <= today) due.push(c);
  });
  return { due, fresh, all: pool };
}

export function flashcardStats(allCards) {
  const today = todayStr();
  let learned = 0, mastered = 0, dueToday = 0, seen = 0;
  allCards.forEach(c => {
    const st = state.flashcards[c.id];
    if (st) { seen++; if (st.box >= 2) learned++; if (st.box >= 5) mastered++; if (st.due <= today) dueToday++; }
    else dueToday++;
  });
  return { total: allCards.length, seen, learned, mastered, dueToday };
}

/* ---- Fehler-/Wiederholungs-Center ---- */

/**
 * Ergebnis einer Prüfungsfrage festhalten. Eine Frage gilt als „offen"
 * (wiederholungsbedürftig), solange sie zuletzt falsch beantwortet wurde.
 * Eine richtige Antwort schließt die Frage (last='right').
 */
export function recordQuestionResult(questionId, correct) {
  if (!questionId) return;
  update(s => {
    if (!s.mistakes) s.mistakes = {};
    const cur = s.mistakes[questionId] || { wrong: 0, right: 0, last: null, ts: null };
    if (correct) cur.right += 1; else cur.wrong += 1;
    cur.last = correct ? 'right' : 'wrong';
    cur.ts = new Date().toISOString();
    // Nie falsch beantwortete, aber richtig gelöste Fragen müssen nicht dauerhaft mitgeführt werden.
    if (correct && cur.wrong === 0) { delete s.mistakes[questionId]; return; }
    s.mistakes[questionId] = cur;
  });
}

/** IDs aller offenen (zuletzt falsch beantworteten) Fragen – neueste zuerst. */
export function openMistakeIds() {
  const m = state.mistakes || {};
  return Object.keys(m)
    .filter(id => m[id]?.last === 'wrong')
    .sort((a, b) => String(m[b].ts).localeCompare(String(m[a].ts)));
}

/** Kennzahlen fürs Fehler-Center. */
export function mistakeStats() {
  const m = state.mistakes || {};
  const ids = Object.keys(m);
  const open = ids.filter(id => m[id]?.last === 'wrong');
  const recovered = ids.filter(id => m[id]?.last === 'right').length;
  return { open: open.length, recovered, seen: ids.length };
}

/* ---- Frage des Tages ---- */
export function dailyAnsweredToday() { return (state.dailyQuiz?.day) === todayStr(); }

export function answerDaily(correct) {
  update(s => {
    s.dailyQuiz = { day: todayStr(), correct };
    s.xp = (s.xp || 0) + (correct ? 8 : 3);
  });
  touchStreak();
}

/* ---- Knoten-Trainer ---- */
export function isKnotLearned(id) { return (state.knotsLearned || []).includes(id); }

export function toggleKnotLearned(id) {
  update(s => {
    if (!s.knotsLearned) s.knotsLearned = [];
    const i = s.knotsLearned.indexOf(id);
    if (i >= 0) s.knotsLearned.splice(i, 1);
    else { s.knotsLearned.push(id); s.xp = (s.xp || 0) + 10; }
  });
  touchStreak();
}

/* ---- Lernvideos ---- */
export function isVideoWatched(id) { return (state.videosWatched || []).includes(id); }

export function toggleVideoWatched(id) {
  update(s => {
    if (!s.videosWatched) s.videosWatched = [];
    const i = s.videosWatched.indexOf(id);
    if (i >= 0) s.videosWatched.splice(i, 1);
    else { s.videosWatched.push(id); s.xp = (s.xp || 0) + 15; }
  });
  touchStreak();
}

/* ---- Lesebeispiele (Aus der Praxis lernen) ---- */
export function isReportRead(id) { return (state.reportsRead || []).includes(id); }

export function toggleReportRead(id) {
  update(s => {
    if (!s.reportsRead) s.reportsRead = [];
    const i = s.reportsRead.indexOf(id);
    if (i >= 0) s.reportsRead.splice(i, 1);
    else { s.reportsRead.push(id); s.xp = (s.xp || 0) + 10; }
  });
  touchStreak();
}

export function toggleBookmark(moduleId) {
  update(s => {
    const i = s.bookmarks.indexOf(moduleId);
    if (i >= 0) s.bookmarks.splice(i, 1); else s.bookmarks.push(moduleId);
  });
}

export function setTheme(theme) { update(s => { s.settings.theme = theme; }); }

export function resetAll() {
  state = structuredClone(DEFAULT_STATE);
  persist(); emit();
}

/* --------------------- Abgeleitete Werte --------------------- */

export function moduleProgress(moduleId, totalLessons) {
  const p = state.progress[moduleId];
  const done = p ? Object.values(p.lessons).filter(Boolean).length : 0;
  return { done, total: totalLessons, pct: totalLessons ? Math.round(done / totalLessons * 100) : 0 };
}

export function bestExam(moduleId) {
  const list = state.examResults[moduleId] || [];
  if (!list.length) return null;
  return list.reduce((a, b) => (b.score > a.score ? b : a));
}

export function isModulePassed(moduleId) {
  const b = bestExam(moduleId);
  return !!(b && b.passed);
}

export function level() {
  // 100 XP je Level, gedeckelt bei angenehmer Kurve
  const xp = state.xp || 0;
  return Math.floor(xp / 100) + 1;
}
