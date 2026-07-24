/* =========================================================================
   ABZEICHEN / ERFOLGE — Definitionen für die Erfolgssammlung.
   Rein datengetrieben: jede `metric(ctx)` liefert den aktuellen Wert, `goal`
   die Zielschwelle (Zahl oder Funktion des Kontexts). Verdient, sobald
   metric ≥ goal. Der Kontext wird in views/achievements.js aufgebaut.
   ========================================================================= */

export const BADGE_GROUPS = ['Lernen', 'Prüfungen', 'Fragen', 'Praxis', 'Gewohnheit'];

export const BADGES = [
  /* ---- Lernen ---- */
  { id: 'lekt-1',   group: 'Lernen', icon: 'book',  name: 'Erster Funke',     desc: 'Erste Lektion abgeschlossen',        goal: 1,                    metric: c => c.lessonsDone },
  { id: 'lekt-25',  group: 'Lernen', icon: 'book',  name: 'Auf Kurs',         desc: '25 Lektionen abgeschlossen',         goal: 25,                   metric: c => c.lessonsDone },
  { id: 'lekt-75',  group: 'Lernen', icon: 'book',  name: 'Wissenshunger',    desc: '75 Lektionen abgeschlossen',         goal: 75,                   metric: c => c.lessonsDone },
  { id: 'lekt-all', group: 'Lernen', icon: 'award', name: 'Vollausbildung',   desc: 'Alle Lektionen abgeschlossen',       goal: c => c.lessonsTotal,  metric: c => c.lessonsDone },

  /* ---- Prüfungen ---- */
  { id: 'exam-1',   group: 'Prüfungen', icon: 'exam',   name: 'Bestanden!',        desc: 'Erste Modulprüfung bestanden',        goal: 1,                       metric: c => c.modulesPassed },
  { id: 'exam-5',   group: 'Prüfungen', icon: 'shield', name: 'Modulmeister',      desc: '5 Modulprüfungen bestanden',          goal: 5,                       metric: c => c.modulesPassed },
  { id: 'exam-13',  group: 'Prüfungen', icon: 'flag',   name: 'Halbzeit',          desc: '13 Modulprüfungen bestanden',         goal: 13,                      metric: c => c.modulesPassed },
  { id: 'exam-all', group: 'Prüfungen', icon: 'award',  name: 'Großmeister A–Z',   desc: 'Alle Modulprüfungen bestanden',       goal: c => c.modulesWithExam,  metric: c => c.modulesPassed },
  { id: 'exam-100', group: 'Prüfungen', icon: 'star',   name: 'Glasklar',          desc: 'Eine Prüfung mit 100 % abgeschlossen',goal: 1,                       metric: c => c.perfectExam },
  { id: 'exam-sim', group: 'Prüfungen', icon: 'clock',  name: 'Ernstfall gemeistert', desc: 'Prüfungssimulator bestanden',      goal: 1,                       metric: c => c.simulatorPassed },

  /* ---- Fragen ---- */
  { id: 'q-50',   group: 'Fragen', icon: 'check',  name: 'Sattelfest',      desc: '50 Fragen richtig beantwortet',   goal: 50,  metric: c => c.questionsCorrect },
  { id: 'q-250',  group: 'Fragen', icon: 'check',  name: 'Routinier',       desc: '250 Fragen richtig beantwortet',  goal: 250, metric: c => c.questionsCorrect },
  { id: 'q-500',  group: 'Fragen', icon: 'award',  name: 'Fragen-Experte',  desc: '500 Fragen richtig beantwortet',  goal: 500, metric: c => c.questionsCorrect },
  { id: 'q-fix',  group: 'Fragen', icon: 'refresh',name: 'Aus Fehlern gelernt', desc: '10 falsche Fragen ausgebessert', goal: 10, metric: c => c.correctRecovered },

  /* ---- Praxis ---- */
  { id: 'knot-1',   group: 'Praxis', icon: 'target',  name: 'Erster Knoten',   desc: 'Ersten Knoten geübt',            goal: 1,                  metric: c => c.knotsLearned },
  { id: 'knot-all', group: 'Praxis', icon: 'target',  name: 'Knotenmeister',   desc: 'Alle Knoten geübt',              goal: c => c.knotsTotal,  metric: c => c.knotsLearned },
  { id: 'ps-1',     group: 'Praxis', icon: 'game',    name: 'Lagebesprechung', desc: 'Erstes Planspiel gespielt',      goal: 1,                  metric: c => c.planspiele },
  { id: 'fc-20',    group: 'Praxis', icon: 'refresh', name: 'Gedächtnismeister',desc: '20 Karteikarten gemeistert',    goal: 20,                 metric: c => c.flashcardsMastered },

  /* ---- Gewohnheit ---- */
  { id: 'streak-3',  group: 'Gewohnheit', icon: 'bolt',  name: 'Dranbleiber',  desc: '3 Tage in Folge gelernt',   goal: 3,  metric: c => c.streak },
  { id: 'streak-7',  group: 'Gewohnheit', icon: 'bolt',  name: 'Wochenheld',   desc: '7 Tage in Folge gelernt',   goal: 7,  metric: c => c.streak },
  { id: 'streak-30', group: 'Gewohnheit', icon: 'star',  name: 'Unermüdlich',  desc: '30 Tage in Folge gelernt',  goal: 30, metric: c => c.streak },
  { id: 'daily-1',   group: 'Gewohnheit', icon: 'check', name: 'Tagesform',    desc: 'Frage des Tages beantwortet', goal: 1, metric: c => c.dailyAnswered },
];

export const BADGE_BY_ID = Object.fromEntries(BADGES.map(b => [b.id, b]));

/** Zielschwelle auflösen (Zahl oder Funktion des Kontexts). */
export function badgeGoal(b, ctx) {
  return typeof b.goal === 'function' ? b.goal(ctx) : b.goal;
}
