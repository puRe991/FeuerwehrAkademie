/* =========================================================================
   PRÜFUNGSSETS — modulübergreifende Abschlussprüfungen.
   Ziehen Fragen aus mehreren Modulen zu einer Gesamtprüfung zusammen
   (z. B. Truppmann-Gesamtprüfung). Die Fragenauswahl erfolgt beim Start.
   ========================================================================= */
import { EXAMS, questionKey } from './exams.js';
import { shuffle } from '../utils.js';

export const EXAM_SETS = [
  {
    id: 'set-truppmann',
    title: 'Truppmann/-frau (MTA) – Gesamtprüfung',
    desc: 'Die zentrale Basisprüfung der Truppausbildung: Recht, Brennen & Löschen, Gerätekunde, Löscheinsatz und Erste Hilfe.',
    // Real: MTA-Basismodul ~50 Fragen, ≥ 50 % (1 Punkt/Frage). Zeit ~72 s/Frage.
    realNote: 'Kalibriert an der MTA-Basisprüfung (real ~50 Fragen, ≥ 50 %). Die echte Prüfung ist schriftlich + praktisch (mind. 4 Einzelaufgaben inkl. Funk).',
    icon: 'shield', color: '#d81f26', level: 2, passScore: 50, timeLimit: 3600,
    sources: [
      { moduleId: 'a-rechtsgrundlagen', count: 10 },
      { moduleId: 'b-brennen-loeschen', count: 10 },
      { moduleId: 'd-geraetekunde', count: 10 },
      { moduleId: 'e-loescheinsatz', count: 8 },
      { moduleId: 'j-erste-hilfe', count: 7 },
      { moduleId: 'p-arbeitsschutz', count: 5 },
    ],
  },
  {
    id: 'set-truppfuehrer',
    title: 'Truppführer/in – Abschlussprüfung',
    desc: 'Führung im Trupp und vertiefte Einsatzlehre: Taktik, Führungsgrundlagen, Gefahren und technische Hilfe.',
    // Real: MTA-Abschluss 15 Fragen (Mehrfachantworten möglich), ≥ 50 %.
    realNote: 'Kalibriert am MTA-Abschluss (real 15 Fragen, ≥ 50 %). Die echte Prüfung ist schriftlich + praktisch (Trupp- und Gruppenaufgabe).',
    icon: 'compass', color: '#16607a', level: 3, passScore: 50, timeLimit: 1200,
    sources: [
      { moduleId: 'a-rechtsgrundlagen', count: 2 },
      { moduleId: 'e-loescheinsatz', count: 4 },
      { moduleId: 'l-fuehrung-fwdv100', count: 3 },
      { moduleId: 'i-gefahrgut', count: 2 },
      { moduleId: 'f-atemschutz', count: 2 },
      { moduleId: 'g-technische-hilfe', count: 2 },
    ],
  },
  {
    id: 'set-atemschutz',
    title: 'Atemschutzgeräteträger/in – Prüfung',
    desc: 'Umfassende Prüfung zum Atemschutz nach FwDV 7 mit Bezügen zu Brandlehre und Innenangriff.',
    // Real: AGT-Fragenkatalog (Module à 30), schriftlicher Test ~20–30 MC-Fragen, i. d. R. ≥ 50 %.
    realNote: 'Kalibriert an der AGT-Prüfung (FwDV 7, ~20 Fragen, ≥ 50 %). Die echte Prüfung ist schriftlich + praktische Belastungs-/Gewöhnungsübung.',
    icon: 'mask', color: '#8e44ad', level: 3, passScore: 50, timeLimit: 1500,
    sources: [
      { moduleId: 'f-atemschutz', count: 12 },
      { moduleId: 'b-brennen-loeschen', count: 4 },
      { moduleId: 'e-loescheinsatz', count: 4 },
    ],
  },
  {
    id: 'set-maschinist',
    title: 'Maschinist/in – Prüfung',
    desc: 'Pumpenkunde, Wasserförderung, Fahrzeug- und Gerätetechnik nach FwDV 2.',
    // Real: Maschinisten-Lehrgang, schriftliche Lernzielkontrolle ~20–30 MC-Fragen, ≥ 50 %.
    realNote: 'Kalibriert an der Maschinisten-Prüfung (FwDV 2, ~20 Fragen, ≥ 50 %). Die echte Prüfung ist schriftlich + praktische Pumpen-/Gerätebedienung.',
    icon: 'truck', color: '#1e5fa8', level: 3, passScore: 50, timeLimit: 1500,
    sources: [
      { moduleId: 'n-maschinist', count: 12 },
      { moduleId: 'c-fahrzeugkunde', count: 5 },
      { moduleId: 'd-geraetekunde', count: 3 },
    ],
  },
  {
    id: 'set-gruppenfuehrer',
    title: 'Gruppen-/Zugführung – Führungsprüfung',
    desc: 'Führung und Leitung im Einsatz (FwDV 100), Einsatztaktik, Gefahren und Objektkunde.',
    // Real: Gruppen-/Zugführer (F-III/IV) 20 Fachfragen / 60 min, ~60 %, 3 Prüfungsteile.
    realNote: 'Kalibriert am Gruppen-/Zugführer-Lehrgang (real 20 Fragen / 60 min, ~60 %). Die echte Prüfung hat schriftliche, mündliche und praktische Teile.',
    icon: 'flag', color: '#c0392b', level: 4, passScore: 60, timeLimit: 3600,
    sources: [
      { moduleId: 'l-fuehrung-fwdv100', count: 8 },
      { moduleId: 'e-loescheinsatz', count: 5 },
      { moduleId: 'i-gefahrgut', count: 4 },
      { moduleId: 'o-baukunde', count: 3 },
    ],
  },
  {
    id: 'set-einsatzdienst',
    title: 'Einsatzdienst & Sonderlagen',
    desc: 'Praxisnahe Gesamtprüfung zu Einsatzarten: Rettung, Wasserversorgung, Vegetationsbrand, Unwetter/Hochwasser und Wasserrettung.',
    // Kein reales 1:1-Pendant – bündelt mehrere Einsatzarten/Fortbildungen der App.
    realNote: 'App-Gesamtprüfung ohne direktes reales 1:1-Pendant – sie bündelt mehrere Einsatzarten (Rettung, Wasser, Vegetation, Unwetter). Bestehensgrenze wie im Truppdienst (50 %).',
    icon: 'water', color: '#2e9e5b', level: 3, passScore: 50, timeLimit: 1200,
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
    // Meta-Examen der Akademie – kein reales Pendant; Capstone-Anspruch (60 %).
    realNote: 'Meta-Examen der Akademie ohne reales Pendant – ein Gesamtüberblick A–Z. Etwas höhere Hürde (60 %) als Anspruch der „Meisterprüfung".',
    icon: 'award', color: '#f5a623', level: 5, passScore: 60, timeLimit: 1980,
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
  {
    id: 'set-hlfs-leistungsuebung',
    title: 'Hessische Feuerwehrleistungsübung',
    desc: 'Modulübergreifende Wissensprüfung im Stil der Hessischen Feuerwehrleistungsübung (Kreis-/Bezirksebene) – von ABC-Gefahrstoffen über Löscheinsatz und Gerätekunde bis Rechtsgrundlagen.',
    // Real: HLFS-Fragenkatalog (Stand 10/2021, 679 Fragen, Single-Choice mit 3 Antworten).
    realNote: 'Aufgebaut nach dem offiziellen Fragenkatalog der Hessischen Landesfeuerwehrschule (HLFS, Stand Oktober 2021); die Auswahl zieht u. a. authentische HLFS-Fragen (Kennung „HLFS 2021"). Die echte Leistungsübung ist ein Mannschafts-Bewerb – der schriftliche Fragenteil ist nur eine von mehreren, überwiegend praktischen Stationen. Übernommene Fragetexte stammen aus dem HLFS-Katalog, die Lösungen wurden fachlich ergänzt.',
    icon: 'award', color: '#0b8043', level: 2, passScore: 50, timeLimit: 1950,
    sources: [
      { moduleId: 'i-gefahrgut', count: 2 },
      { moduleId: 'f-atemschutz', count: 2 },
      { moduleId: 'b-brennen-loeschen', count: 3 },
      { moduleId: 'c-fahrzeugkunde', count: 2 },
      { moduleId: 'e-loescheinsatz', count: 3 },
      { moduleId: 'a-rechtsgrundlagen', count: 2 },
      { moduleId: 'j-erste-hilfe', count: 2 },
      { moduleId: 'h-sprechfunk', count: 1 },
      { moduleId: 'g-technische-hilfe', count: 1 },
      { moduleId: 'd-geraetekunde', count: 3 },
      { moduleId: 't-wasserversorgung', count: 1 },
      { moduleId: 'p-arbeitsschutz', count: 1 },
      { moduleId: 'k-absturzsicherung', count: 1 },
      { moduleId: 'z-katastrophenschutz', count: 2 },
    ],
  },
  {
    id: 'set-hlfs-rechnen',
    title: 'Rechenaufgaben – Schaum & Wasserlieferung',
    desc: 'Reiner Rechen-Trainer: Schaumherstellung (Verschäumungszahl, Zumischung) und Wasserlieferung der Strahlrohre (l/min-Faustwerte). Jede Frage mit vollständigem Rechenweg.',
    realNote: 'Berechnungsfragen aus dem HLFS-Fragenkatalog (Stand 10/2021). Zum Üben lohnt sich das Auswendiglernen der Faustwerte (BM/CM/DM-Strahlrohr) und der Zumischer-/Verschäumungslogik – die Erklärung zeigt jeweils den kompletten Rechenweg.',
    icon: 'water', color: '#1e5fa8', level: 3, passScore: 50, timeLimit: 1200,
    sources: [
      { moduleId: 'b-brennen-loeschen', count: 4, topics: ['Berechnung'] },
      { moduleId: 'd-geraetekunde', count: 6, topics: ['Berechnung'] },
    ],
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
    // Real: praktische Abnahme an Stationen (Notruf, 3 Knoten, einfache Aufgaben) – kein MC-Test.
    realNote: 'Wissens-Vorbereitung. Die echte Jugendflamme Stufe 1 wird praktisch an Stationen abgenommen (Notruf 112, drei Knoten, einfache feuerwehrtechnische Aufgaben) – es gibt keinen Multiple-Choice-Test und keine Prozent-Grenze.',
    icon: 'shield', color: '#2e9e5b', level: 1, passScore: 60, timeLimit: 900,
    sources: [
      { moduleId: 'jf-flamme1', count: 9 },
    ],
  },
  {
    id: 'jf-set-flamme2', youth: true, badge: 'Jugendflamme · Stufe 2',
    title: 'Jugendflamme Stufe 2',
    desc: 'Aufbaustufe: mehr Knoten, Gerätekunde (Verteiler, Strahlrohr), stabile Seitenlage und Fahrzeugwissen.',
    // Real: praktische Aufgaben (Fahrzeug-/Gerätekunde, Technik, Sport & Spiel) – kein MC-Test.
    realNote: 'Wissens-Vorbereitung. Die echte Jugendflamme Stufe 2 wird praktisch abgenommen (Fahrzeug-/Gerätekunde, Technik, Sport & Spiel) und vom Kreisjugendfeuerwehrwart bewertet – kein Multiple-Choice-Test.',
    icon: 'refresh', color: '#1e5fa8', level: 2, passScore: 60, timeLimit: 900,
    sources: [
      { moduleId: 'jf-flamme2', count: 8 },
      { moduleId: 'jf-flamme1', count: 2 },
    ],
  },
  {
    id: 'jf-set-flamme3', youth: true, badge: 'Jugendflamme · Stufe 3',
    title: 'Jugendflamme Stufe 3',
    desc: 'Vertiefung für Ältere: Gruppe im Löscheinsatz, Erste Hilfe, Verantwortung übernehmen und ein Thema präsentieren.',
    // Real: setzt Leistungsspange + Stufe 2 + gültigen EH-Nachweis voraus; praktisch abgenommen.
    realNote: 'Wissens-Vorbereitung. Die echte Jugendflamme Stufe 3 setzt Leistungsspange, Stufe 2 und einen gültigen Erste-Hilfe-Nachweis voraus und wird praktisch von der DJF abgenommen – kein Multiple-Choice-Test.',
    icon: 'flag', color: '#c0392b', level: 3, passScore: 60, timeLimit: 900,
    sources: [
      { moduleId: 'jf-flamme3', count: 8 },
      { moduleId: 'jf-flamme2', count: 2 },
    ],
  },
  {
    id: 'jf-set-leistungsspange', youth: true, badge: 'Leistungsspange',
    title: 'Leistungsspange – Wissensteil',
    desc: 'Die höchste Auszeichnung der JF, als Gruppe erbracht. Übe hier den Fragenteil rund um Leistungsspange und Feuerwehr-Grundwissen.',
    // Real: Mannschaftswettbewerb mit fünf Disziplinen – nur eine davon ist das Fragenbeantworten.
    realNote: 'Wissens-Vorbereitung. Die echte Leistungsspange ist ein Mannschafts-Wettbewerb mit fünf Disziplinen (u. a. Löschangriff, Staffellauf, Kugelstoßen, Knoten, Fragen beantworten) – dies übt nur den Fragen-/Wissensteil, keine Einzel-Prozent-Prüfung.',
    icon: 'award', color: '#f5a623', level: 4, passScore: 60, timeLimit: 900,
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

/** Fragen eines Sets zusammenstellen (frische, gemischte Auswahl).
 *  Es wird garantiert, dass keine Frage doppelt vorkommt: weder dieselbe ID
 *  noch derselbe Fragetext (Duplikate über die Erweiterungsebenen). Bevorzugt
 *  werden nach ID und Text eindeutige Fragen; nur falls ein Pool nicht genug
 *  textlich eindeutige Fragen hergibt, wird die Sollzahl über ID-eindeutige
 *  Fragen aufgefüllt – dieselbe Frage kommt dabei nie zweimal. */
export function buildSetQuestions(set) {
  const picked = [];
  const seenIds = new Set();
  const seenText = new Set();
  for (const src of set.sources) {
    const exam = EXAMS[src.moduleId];
    if (!exam) continue;
    const need = src.count || 1;
    let pool = exam.questions.slice();
    if (src.difficulty) pool = pool.filter(q => q.difficulty <= src.difficulty);
    // Optionaler Themen-Filter: nur Fragen bestimmter Topics (z. B. 'Berechnung').
    // Greift nur, wenn dadurch genug Fragen übrig bleiben – sonst voller Pool.
    if (Array.isArray(src.topics) && src.topics.length) {
      const filtered = pool.filter(q => src.topics.includes(q.topic));
      if (filtered.length >= need) pool = filtered;
    }
    if (pool.length < need) pool = exam.questions.slice();
    pool = shuffle(pool);

    // 1. Wahl: Fragen, die (per ID und Text) noch nicht vorkamen – die
    //    „seen"-Mengen werden dabei laufend fortgeschrieben, damit auch
    //    innerhalb derselben Quelle keine zwei textgleichen Fragen landen.
    const chosen = [];
    const take = (q) => {
      chosen.push(q);
      if (q.id) seenIds.add(q.id);
      const key = questionKey(q);
      if (key) seenText.add(key);
    };
    for (const q of pool) {
      if (chosen.length >= need) break;
      if (seenIds.has(q.id) || seenText.has(questionKey(q))) continue;
      take(q);
    }
    // Auffüllen, falls zu wenige textlich eindeutige Fragen übrig sind –
    // dabei niemals dieselbe ID wiederholen.
    if (chosen.length < need) {
      for (const q of pool) {
        if (chosen.length >= need) break;
        if (seenIds.has(q.id)) continue;
        take(q);
      }
    }

    for (const q of chosen) picked.push({ ...q });
  }
  return shuffle(picked);
}
