/* =========================================================================
   MODULES-EXTRA — Weitere vollständige Module (S–Z), damit die Akademie die
   Feuerwehrausbildung wirklich von A bis Z abbildet.
   Orientiert an den Themengebieten der Truppausbildung (FwDV 2) und den
   gängigen Fach-/Sonderlehrgängen. Wird in curriculum.js an MODULES angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';
import { LESSONS_Z } from './content/z-katastrophenschutz.js';
import { LESSONS_Y } from './content/y-motorsaege.js';
import { LESSONS_X } from './content/x-wasserrettung.js';
import { LESSONS_W } from './content/w-naturgefahren.js';
import { LESSONS_V } from './content/v-vegetationsbrand.js';
import { LESSONS_U } from './content/u-knoten.js';
import { LESSONS_T } from './content/t-wasserversorgung.js';
import { LESSONS_S } from './content/s-rettung.js';

export const MODULES_EXTRA = [

/* ======================================================================= S */
{
  id: 's-rettung', code: 'S', title: 'Rettung & Selbstrettung',
  category: 'einsatz', level: 2, icon: 'rope', duration: 45,
  summary: 'Menschen retten und sich selbst in Sicherheit bringen: Rettungsgriffe, Rettungsgeräte, Selbstretten und der Rautek-Rettungsgriff.',
  objectives: [
    'Rettungsgriffe und Tragehilfen sicher anwenden',
    'Rettungsgeräte der Feuerwehr benennen',
    'Selbstrettung und Selbstschutz durchführen',
    'Prioritäten der Menschenrettung einordnen',
  ],
  tags: ['Rettung', 'Selbstrettung', 'Rautek', 'Rettungsgeräte'],
  lessons: LESSONS_S,
},

/* ======================================================================= T */
{
  id: 't-wasserversorgung', code: 'T', title: 'Löschwasserversorgung & Wasserförderung',
  category: 'technik', level: 2, icon: 'water', duration: 45,
  summary: 'Vom Hydranten bis zur langen Wegstrecke: Löschwasserquellen, Saugbetrieb, Wasserförderung und die Rolle der Wasserversorgung im Einsatz.',
  objectives: [
    'Löschwasserquellen unterscheiden (abhängig/unabhängig)',
    'Den Aufbau der Wasserversorgung beschreiben',
    'Wasserförderung über lange Wegstrecke erklären',
    'Kavitation und Druckverluste einschätzen',
  ],
  tags: ['Wasserversorgung', 'Hydrant', 'Wasserförderung', 'Saugbetrieb'],
  lessons: LESSONS_T,
},

/* ======================================================================= U */
{
  id: 'u-knoten', code: 'U', title: 'Knoten, Stiche & Bunde',
  category: 'technik', level: 2, icon: 'rope', duration: 35,
  summary: 'Das Handwerk mit der Leine: die wichtigsten feuerwehrtechnischen Knoten, Stiche und Bunde und ihre richtige Anwendung.',
  objectives: [
    'Die wichtigsten Feuerwehrknoten benennen und zuordnen',
    'Anwendungszwecke der Knoten unterscheiden',
    'Sicherheitsregeln beim Arbeiten mit Leinen kennen',
    'Leinen und Knoten richtig pflegen und prüfen',
  ],
  tags: ['Knoten', 'Stiche', 'Leine', 'Bunde'],
  lessons: LESSONS_U,
},

/* ======================================================================= V */
{
  id: 'v-vegetationsbrand', code: 'V', title: 'Vegetations- & Waldbrandbekämpfung',
  category: 'einsatz', level: 3, icon: 'fire', duration: 45,
  summary: 'Bekämpfung von Flächen-, Vegetations- und Waldbränden: Brandverhalten, Taktik, Sicherheit (LACES) und Wassermanagement im Gelände.',
  objectives: [
    'Das besondere Brandverhalten von Vegetationsbränden erklären',
    'Taktiken der Vegetationsbrandbekämpfung anwenden',
    'Sicherheitsregeln (LACES) einhalten',
    'Wassermanagement im Gelände organisieren',
  ],
  tags: ['Vegetationsbrand', 'Waldbrand', 'LACES', 'Flächenbrand'],
  lessons: LESSONS_V,
},

/* ======================================================================= W */
{
  id: 'w-naturgefahren', code: 'W', title: 'Unwetter, Hochwasser & Naturgefahren',
  category: 'einsatz', level: 3, icon: 'water', duration: 40,
  summary: 'Die häufigsten Einsätze: Sturm, Starkregen, Hochwasser. Typische Lagen, Gefahren, Sandsack- und Pumpeneinsatz sowie Deichverteidigung.',
  objectives: [
    'Typische Unwetter- und Hochwasserlagen einschätzen',
    'Gefahren bei Sturm- und Wassereinsätzen erkennen',
    'Maßnahmen (Pumpen, Sandsäcke, Deichverteidigung) beschreiben',
    'Eigensicherung bei Naturgefahren einhalten',
  ],
  tags: ['Unwetter', 'Hochwasser', 'Sturm', 'Deich', 'Naturgefahren'],
  lessons: LESSONS_W,
},

/* ======================================================================= X */
{
  id: 'x-wasserrettung', code: 'X', title: 'Wasserrettung, Eis & Bootsdienst',
  category: 'einsatz', level: 3, icon: 'water', duration: 35,
  summary: 'Rettung aus und auf dem Wasser: Selbstschutz, Rettungsmittel, Verhalten bei Eisunfällen und Grundlagen des Bootseinsatzes.',
  objectives: [
    'Eigensicherung bei Wassereinsätzen sicherstellen',
    'Rettungsmittel und Rettungsreihenfolge anwenden',
    'Verhalten bei Eisunfällen erklären',
    'Grundlagen des Bootsdienstes beschreiben',
  ],
  tags: ['Wasserrettung', 'Eisrettung', 'Boot', 'Rettungsweste'],
  lessons: LESSONS_X,
},

/* ======================================================================= Y */
{
  id: 'y-motorsaege', code: 'Y', title: 'Motorkettensäge & technische Geräte',
  category: 'technik', level: 3, icon: 'wrench', duration: 35,
  summary: 'Sicherer Umgang mit Motorkettensäge, Trennschleifer und weiteren Kraftgeräten: Aufbau, Schutzausrüstung, Schnitttechnik und Gefahren.',
  objectives: [
    'Aufbau und Sicherheitseinrichtungen der Motorsäge kennen',
    'Erforderliche Schutzausrüstung benennen',
    'Grundlagen der Schnitttechnik und Gefahren verstehen',
    'Weitere Kraftgeräte sicher einordnen',
  ],
  tags: ['Motorsäge', 'Kettensäge', 'Trennschleifer', 'Schnittschutz'],
  lessons: LESSONS_Y,
},

/* ======================================================================= Z */
{
  id: 'z-katastrophenschutz', code: 'Z', title: 'Katastrophenschutz & überörtliche Hilfe',
  category: 'fuehrung', level: 4, icon: 'users', duration: 40,
  summary: 'Wenn es groß wird: Aufbau des Bevölkerungs- und Katastrophenschutzes, überörtliche Einheiten, Zusammenarbeit und das Hilfeleistungssystem.',
  objectives: [
    'Aufbau des Bevölkerungs-/Katastrophenschutzes erklären',
    'Überörtliche Einheiten und Verbände einordnen',
    'Zusammenarbeit der Organisationen beschreiben',
    'Das gestufte Hilfeleistungssystem verstehen',
  ],
  tags: ['Katastrophenschutz', 'Bevölkerungsschutz', 'überörtlich', 'KatS'],
  lessons: LESSONS_Z,
},

];

