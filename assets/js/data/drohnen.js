/* =========================================================================
   BOS-DROHNEN — Ausbildungsbereich „Drohnen in der Gefahrenabwehr"

   Ein eigenständiger Lernbereich neben den Feuerwehr-Modulen A–Z. Fünfzehn
   Module von den Grundlagen bis zum Sicherheitsmanagement; jedes Modul ist
   auf 60–90 Minuten Lernzeit ausgelegt und in vier Lektionen gegliedert.

   Rechtsgrundlage ist durchgehend das EU-Recht:
     · Durchführungsverordnung (EU) 2019/947  – Betrieb, Kategorien, Nachweise
     · Delegierte Verordnung (EU) 2019/945    – Produkte, Klassen C0–C6
     · Verordnung (EU) 376/2014               – Ereignismeldung, Just Culture
     · Verordnung (EU) 2016/679 (DSGVO)       – Datenschutz
   Nationales Recht nur, soweit die EU-Verordnungen es ausdrücklich öffnen.

   Hinweis: Bildungsinhalte für Aus- und Fortbildung. Ersetzt weder den
   Kompetenznachweis nach EU-Recht noch die praktische Flugausbildung, die
   Betriebsgenehmigung oder das Betriebshandbuch der eigenen Einheit.
   ========================================================================= */

import { DROHNEN_MODULE_1 } from './drohnen-modules-1.js';
import { DROHNEN_MODULE_2 } from './drohnen-modules-2.js';
import { DROHNEN_MODULE_3 } from './drohnen-modules-3.js';
import { DROHNEN_MODULE_4 } from './drohnen-modules-4.js';
import { DROHNEN_MODULE_5 } from './drohnen-modules-5.js';

/* Themenbereiche des Lernpfads (eigene Kategorien, unabhängig von den
   Feuerwehr-Modulkategorien). */
export const DROHNEN_KATEGORIEN = {
  'dr-grund':   { label: 'Grundlagen',        color: '#1e5fa8', icon: 'book' },
  'dr-recht':   { label: 'Recht & Luftraum',  color: '#16607a', icon: 'shield' },
  'dr-technik': { label: 'Technik & Sensorik', color: '#8e44ad', icon: 'wrench' },
  'dr-einsatz': { label: 'Einsatztaktik',     color: '#d81f26', icon: 'fire' },
  'dr-fuehrung':{ label: 'Führung & Qualität', color: '#2e9e5b', icon: 'compass' },
};

/* Empfohlener Lernpfad in vier Stufen. */
export const DROHNEN_STUFEN = [
  {
    id: 'stufe-1', title: 'Stufe 1 · Einstieg',
    desc: 'Verstehen, worum es geht: Begriffe, Einsatzwert, Organisation und der europäische Rechtsrahmen mit der Kategorie OFFEN.',
    modules: ['dr-grundlagen', 'dr-recht-offen'],
  },
  {
    id: 'stufe-2', title: 'Stufe 2 · Rechtssicherheit & Luftraum',
    desc: 'Der Rahmen des echten Einsatzbetriebs: Kategorie SPEZIELL, SORA, Betriebshandbuch, Luftraum, Geo-Zonen und die Koordination mit der Luftrettung.',
    modules: ['dr-recht-speziell', 'dr-luftraum', 'dr-datenschutz'],
  },
  {
    id: 'stufe-3', title: 'Stufe 3 · Technik & Mensch',
    desc: 'Das System beherrschen: Aufbau und Failsafe, Energie, Nutzlasten und Wärmebild, Wetter sowie die menschlichen Faktoren im Team.',
    modules: ['dr-technik', 'dr-energie', 'dr-nutzlast', 'dr-wetter', 'dr-humanfactors'],
  },
  {
    id: 'stufe-4', title: 'Stufe 4 · Einsatz & Qualität',
    desc: 'Anwenden und dauerhaft können: Verfahren und Checklisten, Einsatztaktik in allen Lagen, Daten und Führung, Sicherheitsmanagement und Kompetenzerhalt.',
    modules: ['dr-flugbetrieb', 'dr-taktik-brand', 'dr-taktik-thl', 'dr-daten', 'dr-sicherheit'],
  },
];

/* Alle Module in der Reihenfolge D1–D15. */
export const DROHNEN_MODULE = [
  ...DROHNEN_MODULE_1,
  ...DROHNEN_MODULE_2,
  ...DROHNEN_MODULE_3,
  ...DROHNEN_MODULE_4,
  ...DROHNEN_MODULE_5,
];

/* Moduldauer aus den Lektionen ableiten, damit Anzeige und Inhalt nie
   auseinanderlaufen. */
for (const m of DROHNEN_MODULE) {
  m.duration = m.lessons.reduce((n, l) => n + (l.duration || 0), 0);
  m.bereich = 'drohnen';
}

export const DROHNEN_BY_ID = Object.fromEntries(DROHNEN_MODULE.map(m => [m.id, m]));
export const DROHNEN_LEKTIONEN = DROHNEN_MODULE.reduce((n, m) => n + m.lessons.length, 0);
export const DROHNEN_MINUTEN = DROHNEN_MODULE.reduce((n, m) => n + m.duration, 0);

/** Module einer Kategorie. */
export function drohnenNachKategorie(catId) {
  return DROHNEN_MODULE.filter(m => m.category === catId);
}

/** Anzahl der Selbsttestfragen im gesamten Bereich. */
export const DROHNEN_FRAGEN = DROHNEN_MODULE.reduce((n, m) =>
  n + m.lessons.reduce((k, l) =>
    k + l.blocks.filter(b => b.t === 'quiz').reduce((q, b) => q + b.items.length, 0), 0), 0);
