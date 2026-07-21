/* =========================================================================
   STATE — Persistenter Store für Personalisierung
   Speichert Nutzerprofil, Lernfortschritt, Prüfungsergebnisse, Planspiele,
   Streak und Einstellungen im localStorage. Einfaches Pub/Sub-Modell.
   ========================================================================= */

const KEY = 'fwa:v1';

const DEFAULT_STATE = {
  profile: null, // { name, role, level, unit, goal, createdAt }
  settings: { theme: 'auto' },
  progress: {},        // { [moduleId]: { lessons: { [lessonId]: true }, startedAt } }
  examResults: {},     // { [moduleId]: [ { score, passed, date, correct, total, answers } ] }
  planspielResults: {},// { [planspielId]: [ { rating, meters, path, date } ] }
  bookmarks: [],       // [moduleId]
  activity: [],        // [ { type, ref, date } ] (Verlauf)
  streak: { count: 0, lastDay: null },
  xp: 0,
};

let state = load();
const subscribers = new Set();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return deepMerge(structuredClone(DEFAULT_STATE), parsed);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
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

function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
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
