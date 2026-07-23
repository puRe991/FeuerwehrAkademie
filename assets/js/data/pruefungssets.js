/* =========================================================================
   PRÜFUNGSSETS — modulübergreifende Abschlussprüfungen.
   Ziehen Fragen aus mehreren Modulen zu einer Gesamtprüfung zusammen
   (z. B. Truppmann-Gesamtprüfung). Die Fragenauswahl erfolgt beim Start.
   ========================================================================= */
import { EXAMS } from './exams.js';
import { shuffle } from '../utils.js';

export const EXAM_SETS = [
  {
    id: 'set-truppmann',
    title: 'Truppmann/-frau (MTA) – Gesamtprüfung',
    desc: 'Die zentrale Basisprüfung der Truppausbildung: Recht, Brennen & Löschen, Gerätekunde, Löscheinsatz und Erste Hilfe.',
    icon: 'shield', color: '#d81f26', level: 2, passScore: 70, timeLimit: 1500,
    sources: [
      { moduleId: 'a-rechtsgrundlagen', count: 3 },
      { moduleId: 'b-brennen-loeschen', count: 3 },
      { moduleId: 'd-geraetekunde', count: 3 },
      { moduleId: 'e-loescheinsatz', count: 2 },
      { moduleId: 'j-erste-hilfe', count: 2 },
      { moduleId: 'p-arbeitsschutz', count: 2 },
    ],
  },
  {
    id: 'set-truppfuehrer',
    title: 'Truppführer/in – Abschlussprüfung',
    desc: 'Führung im Trupp und vertiefte Einsatzlehre: Taktik, Führungsgrundlagen, Gefahren und technische Hilfe.',
    icon: 'compass', color: '#16607a', level: 3, passScore: 70, timeLimit: 1500,
    sources: [
      { moduleId: 'a-rechtsgrundlagen', count: 2 },
      { moduleId: 'e-loescheinsatz', count: 3 },
      { moduleId: 'l-fuehrung-fwdv100', count: 2 },
      { moduleId: 'i-gefahrgut', count: 2 },
      { moduleId: 'f-atemschutz', count: 2 },
      { moduleId: 'g-technische-hilfe', count: 2 },
    ],
  },
  {
    id: 'set-atemschutz',
    title: 'Atemschutzgeräteträger/in – Prüfung',
    desc: 'Umfassende Prüfung zum Atemschutz nach FwDV 7 mit Bezügen zu Brandlehre und Innenangriff.',
    icon: 'mask', color: '#8e44ad', level: 3, passScore: 75, timeLimit: 1200,
    sources: [
      { moduleId: 'f-atemschutz', count: 6 },
      { moduleId: 'b-brennen-loeschen', count: 2 },
      { moduleId: 'e-loescheinsatz', count: 2 },
    ],
  },
  {
    id: 'set-maschinist',
    title: 'Maschinist/in – Prüfung',
    desc: 'Pumpenkunde, Wasserförderung, Fahrzeug- und Gerätetechnik nach FwDV 2.',
    icon: 'truck', color: '#1e5fa8', level: 3, passScore: 75, timeLimit: 1200,
    sources: [
      { moduleId: 'n-maschinist', count: 5 },
      { moduleId: 'c-fahrzeugkunde', count: 3 },
      { moduleId: 'd-geraetekunde', count: 2 },
    ],
  },
  {
    id: 'set-gruppenfuehrer',
    title: 'Gruppen-/Zugführung – Führungsprüfung',
    desc: 'Führung und Leitung im Einsatz (FwDV 100), Einsatztaktik, Gefahren und Objektkunde.',
    icon: 'flag', color: '#c0392b', level: 4, passScore: 75, timeLimit: 1500,
    sources: [
      { moduleId: 'l-fuehrung-fwdv100', count: 5 },
      { moduleId: 'e-loescheinsatz', count: 3 },
      { moduleId: 'i-gefahrgut', count: 2 },
      { moduleId: 'o-baukunde', count: 2 },
    ],
  },
  {
    id: 'set-einsatzdienst',
    title: 'Einsatzdienst & Sonderlagen',
    desc: 'Praxisnahe Gesamtprüfung zu Einsatzarten: Rettung, Wasserversorgung, Vegetationsbrand, Unwetter/Hochwasser und Wasserrettung.',
    icon: 'water', color: '#2e9e5b', level: 3, passScore: 70, timeLimit: 1500,
    sources: [
      { moduleId: 's-rettung', count: 3 },
      { moduleId: 't-wasserversorgung', count: 3 },
      { moduleId: 'v-vegetationsbrand', count: 3 },
      { moduleId: 'w-naturgefahren', count: 3 },
      { moduleId: 'x-wasserrettung', count: 2 },
    ],
  },
  {
    id: 'set-gesamt',
    title: 'Großes Feuerwehr-Examen (A–Z)',
    desc: 'Die Meisterprüfung: je eine Frage aus jedem der 26 Module – umfassendes Feuerwehrwissen von A bis Z.',
    icon: 'award', color: '#f5a623', level: 5, passScore: 80, timeLimit: 2700,
    sources: [
      'a-rechtsgrundlagen', 'b-brennen-loeschen', 'c-fahrzeugkunde', 'd-geraetekunde',
      'e-loescheinsatz', 'f-atemschutz', 'g-technische-hilfe', 'h-sprechfunk',
      'i-gefahrgut', 'j-erste-hilfe', 'k-absturzsicherung', 'l-fuehrung-fwdv100',
      'm-vorbeugender-brandschutz', 'n-maschinist', 'o-baukunde', 'p-arbeitsschutz',
      'q-jugend', 'r-digital', 's-rettung', 't-wasserversorgung', 'u-knoten',
      'v-vegetationsbrand', 'w-naturgefahren', 'x-wasserrettung', 'y-motorsaege',
      'z-katastrophenschutz',
    ].map(moduleId => ({ moduleId, count: 1 })),
  },
];

/* =========================================================================
   JUGENDFEUERWEHR — Abzeichen-Vorbereitungen.
   Geführte, altersgerechte Übungsprüfungen zu den Abzeichen der Deutschen
   Jugendfeuerwehr. Als eigener Bereich in der Prüfungsübersicht markiert
   (youth: true). `badge` liefert die Stufen-Beschriftung.
   ========================================================================= */
export const JUGEND_SETS = [
  {
    id: 'jf-set-flamme1', youth: true, badge: 'Jugendflamme · Stufe 1',
    title: 'Jugendflamme Stufe 1',
    desc: 'Der Einstieg: Notruf 112 richtig absetzen, erste Knoten, Schläuche kuppeln und sicheres Verhalten. Ideal für neue Mitglieder.',
    icon: 'shield', color: '#2e9e5b', level: 1, passScore: 70, timeLimit: 600,
    sources: [
      { moduleId: 'jf-flamme1', count: 9 },
    ],
  },
  {
    id: 'jf-set-flamme2', youth: true, badge: 'Jugendflamme · Stufe 2',
    title: 'Jugendflamme Stufe 2',
    desc: 'Aufbaustufe: mehr Knoten, Gerätekunde (Verteiler, Strahlrohr), stabile Seitenlage und Fahrzeugwissen.',
    icon: 'refresh', color: '#1e5fa8', level: 2, passScore: 70, timeLimit: 600,
    sources: [
      { moduleId: 'jf-flamme2', count: 8 },
      { moduleId: 'jf-flamme1', count: 2 },
    ],
  },
  {
    id: 'jf-set-flamme3', youth: true, badge: 'Jugendflamme · Stufe 3',
    title: 'Jugendflamme Stufe 3',
    desc: 'Vertiefung für Ältere: Gruppe im Löscheinsatz, Erste Hilfe, Verantwortung übernehmen und ein Thema präsentieren.',
    icon: 'flag', color: '#c0392b', level: 3, passScore: 75, timeLimit: 720,
    sources: [
      { moduleId: 'jf-flamme3', count: 8 },
      { moduleId: 'jf-flamme2', count: 2 },
    ],
  },
  {
    id: 'jf-set-leistungsspange', youth: true, badge: 'Leistungsspange',
    title: 'Leistungsspange – Wissensteil',
    desc: 'Die höchste Auszeichnung der JF, als Gruppe erbracht. Übe hier den Fragenteil rund um Leistungsspange und Feuerwehr-Grundwissen.',
    icon: 'award', color: '#f5a623', level: 4, passScore: 75, timeLimit: 720,
    sources: [
      { moduleId: 'jf-leistungsspange', count: 8 },
      { moduleId: 'jf-flamme3', count: 2 },
    ],
  },
];

/* JF-Sets in die Gesamtliste aufnehmen, damit die Prüfungs-Engine sie
   (über EXAM_SET_BY_ID) genauso auflöst wie die anderen Abschlussprüfungen. */
EXAM_SETS.push(...JUGEND_SETS);

export const EXAM_SET_BY_ID = Object.fromEntries(EXAM_SETS.map(s => [s.id, s]));

/** Anzahl Fragen eines Sets (Soll) */
export function setSize(set) {
  return set.sources.reduce((n, s) => n + (s.count || 1), 0);
}

/** Fragen eines Sets zusammenstellen (frische, gemischte Auswahl) */
export function buildSetQuestions(set) {
  const picked = [];
  for (const src of set.sources) {
    const exam = EXAMS[src.moduleId];
    if (!exam) continue;
    let pool = exam.questions.slice();
    if (src.difficulty) pool = pool.filter(q => q.difficulty <= src.difficulty);
    if (pool.length < (src.count || 1)) pool = exam.questions.slice();
    picked.push(...shuffle(pool).slice(0, src.count || 1).map(q => ({ ...q })));
  }
  return shuffle(picked);
}
