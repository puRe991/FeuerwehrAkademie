/* =========================================================================
   VIEW: Erfolge / Abzeichen — sichtbare Erfolgssammlung.
   Wertet die Abzeichen gegen den aktuellen Fortschritt aus; einmal
   verdiente Abzeichen bleiben dauerhaft erhalten (persistiert im State).
   ========================================================================= */
import { MODULES, LESSON_COUNT } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { KNOTEN } from '../data/knoten.js';
import { FLASHCARDS } from '../data/flashcards.js';
import { BADGES, BADGE_GROUPS, badgeGoal } from '../data/badges.js';
import { icon } from '../data/icons.js';
import {
  getState, moduleProgress, isModulePassed, mistakeStats, flashcardStats,
  dailyAnsweredToday, grantBadges, markBadgesSeeded,
} from '../state.js';
import { esc } from '../utils.js';

/* Kennzahlen-Kontext für die Abzeichen-Prüfung. */
export function badgeContext() {
  const s = getState();
  let lessonsDone = 0;
  MODULES.forEach(m => { lessonsDone += moduleProgress(m.id, m.lessons.length).done; });
  const examResultsAll = Object.values(s.examResults || {}).flat();
  return {
    lessonsDone, lessonsTotal: LESSON_COUNT,
    modulesPassed: MODULES.filter(m => isModulePassed(m.id)).length,
    modulesWithExam: MODULES.filter(m => EXAMS[m.id]).length,
    questionsAnswered: s.stats?.answered || 0,
    questionsCorrect: s.stats?.correct || 0,
    correctRecovered: mistakeStats().recovered,
    knotsLearned: (s.knotsLearned || []).length,
    knotsTotal: KNOTEN.length,
    flashcardsMastered: flashcardStats(FLASHCARDS).mastered,
    simulatorPassed: examResultsAll.some(r => r.mode === 'simulator' && r.passed) ? 1 : 0,
    perfectExam: examResultsAll.some(r => r.score === 100) ? 1 : 0,
    streak: s.streak?.count || 0,
    planspiele: Object.values(s.planspielResults || {}).reduce((n, a) => n + a.length, 0),
    dailyAnswered: dailyAnsweredToday() ? 1 : 0,
  };
}

/** Aktuell erfüllte + neu hinzugekommene Abzeichen ermitteln. */
export function evaluateBadges() {
  const ctx = badgeContext();
  const earned = new Set(Object.keys(getState().badges || {}));
  const nowEarned = BADGES.filter(b => b.metric(ctx) >= badgeGoal(b, ctx)).map(b => b.id);
  const fresh = nowEarned.filter(id => !earned.has(id));
  return { ctx, nowEarned, fresh };
}

/**
 * Abzeichen mit dem Fortschritt abgleichen und persistieren.
 * Liefert die frisch verdienten IDs (für Toast/Konfetti). Bei der ersten
 * Auswertung (Bestandsnutzer) werden alle erfüllten Abzeichen still vergeben.
 */
export function syncBadges() {
  const seeded = getState().badgesSeeded;
  const { nowEarned, fresh } = evaluateBadges();
  if (!seeded) { grantBadges(nowEarned); markBadgesSeeded(); return []; }
  if (fresh.length) grantBadges(fresh);
  return fresh;
}

export function renderAchievements() {
  const ctx = badgeContext();
  const earned = getState().badges || {};
  const earnedCount = BADGES.filter(b => earned[b.id]).length;
  const pct = Math.round(earnedCount / BADGES.length * 100);

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Erfolge</h1>
      <p class="muted">Deine Abzeichen-Sammlung. Verdiene sie durch Lernen, Prüfen und Üben – einmal freigeschaltet, bleiben sie dir erhalten.</p>
      <div class="progress" style="max-width:340px;margin-top:8px" role="progressbar" aria-label="Freigeschaltete Abzeichen" aria-valuenow="${earnedCount}" aria-valuemin="0" aria-valuemax="${BADGES.length}"><i style="width:${pct}%"></i></div>
      <span class="subtle" style="font-size:.85rem">${earnedCount} von ${BADGES.length} Abzeichen freigeschaltet</span>
    </div>

    ${BADGE_GROUPS.map(group => {
      const items = BADGES.filter(b => b.group === group);
      if (!items.length) return '';
      return `<section style="margin-top:26px">
        <h2 style="margin-bottom:14px">${esc(group)}</h2>
        <div class="badge-grid">
          ${items.map(b => badgeTile(b, ctx, !!earned[b.id])).join('')}
        </div>
      </section>`;
    }).join('')}
  </div>`;
}

function badgeTile(b, ctx, unlocked) {
  const cur = b.metric(ctx);
  const goal = badgeGoal(b, ctx);
  const pct = Math.min(100, Math.round(cur / goal * 100));
  return `<article class="badge-tile ${unlocked ? 'is-earned' : 'is-locked'}" aria-label="${esc(b.name)} – ${unlocked ? 'freigeschaltet' : 'gesperrt'}">
    <div class="badge-medal">${icon(unlocked ? b.icon : 'lock')}</div>
    <b>${esc(b.name)}</b>
    <span class="subtle" style="font-size:.8rem;line-height:1.3">${esc(b.desc)}</span>
    ${unlocked
      ? `<span class="badge badge--green" style="margin-top:2px">${icon('check').replace('<svg ', '<svg style="width:12px;height:12px" ')} Freigeschaltet</span>`
      : `<div style="width:100%;margin-top:4px">
          <div class="progress" style="height:6px"><i style="width:${pct}%"></i></div>
          <span class="subtle" style="font-size:.75rem">${Math.min(cur, goal)}/${goal}</span>
        </div>`}
  </article>`;
}
