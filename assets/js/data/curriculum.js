/* =========================================================================
   CURRICULUM — Feuerwehr Online Akademie
   Fachlich orientiert an den Feuerwehr-Dienstvorschriften (FwDV) und der
   Modularen Truppausbildung (MTA). Bildungsinhalte für Aus- und Fortbildung.
   Hinweis: Ersetzt keine praktische Ausbildung am Standort. Maßgeblich sind
   die geltenden FwDV, Landesvorschriften und Herstellerangaben.

   Blocktypen im Renderer (siehe views/lesson.js):
     h2,h3 | p | list/ol(items) | keyfacts(items) | callout(kind,title,text)
     def(term,text) | steps(items) | mnemonic(letters[],text) | table(head,rows)
     figure(svg,caption)
   ========================================================================= */

export const CATEGORIES = {
  grund:    { label: 'Grundausbildung',   color: '#d81f26' },
  technik:  { label: 'Technik & Geräte',  color: '#1e5fa8' },
  einsatz:  { label: 'Einsatzdienst',     color: '#c0392b' },
  atem:     { label: 'Atemschutz',        color: '#8e44ad' },
  gefahr:   { label: 'Gefahrenabwehr',    color: '#e67e22' },
  fuehrung: { label: 'Führung',           color: '#16607a' },
  medizin:  { label: 'Medizin & Erste Hilfe', color: '#2e9e5b' },
  praevention:{ label: 'Prävention',      color: '#7f8c8d' },
};

export const LEVELS = {
  1: 'Einsteiger',
  2: 'Truppmann/-frau',
  3: 'Truppführung',
  4: 'Gruppen-/Zugführung',
  5: 'Verbandsführung',
};

/* Hilfsfunktionen zum kompakten Schreiben von Blöcken (gemeinsam genutzt) */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';
import { EXTRA_LESSONS } from './curriculum-extra.js';
import { EXTRA_LESSONS_2 } from './curriculum-extra2.js';
import { EXTRA_LESSONS_3 } from './curriculum-deep.js';
import { MODULES_EXTRA } from './modules-extra.js';

/* Ausgebaute Module: vollständige Lektionstexte liegen je Modul in einer
   eigenen Datei unter content/. Sie ersetzen die Kurzfassungen komplett –
   die betreffenden Module tauchen deshalb in curriculum-extra*.js nicht
   mehr auf. */
import { LESSONS_A } from './content/a-rechtsgrundlagen.js';
import { LESSONS_B } from './content/b-brennen-loeschen.js';
import { LESSONS_C } from './content/c-fahrzeugkunde.js';
import { LESSONS_D } from './content/d-geraetekunde.js';
import { LESSONS_E } from './content/e-loescheinsatz.js';
import { LESSONS_F } from './content/f-atemschutz.js';
import { LESSONS_G } from './content/g-technische-hilfe.js';
import { LESSONS_H } from './content/h-sprechfunk.js';
import { LESSONS_I } from './content/i-gefahrgut.js';
import { LESSONS_L } from './content/l-fuehrung-fwdv100.js';
import { LESSONS_M } from './content/m-vorbeugender-brandschutz.js';
import { LESSONS_N } from './content/n-maschinist.js';
import { LESSONS_J } from './content/j-erste-hilfe.js';
import { LESSONS_K } from './content/k-absturzsicherung.js';

export const MODULES = [

/* ======================================================================= A */
{
  id: 'a-rechtsgrundlagen', code: 'A', title: 'Rechtsgrundlagen & Organisation',
  category: 'grund', level: 1, icon: 'shield', duration: 45,
  summary: 'Aufgaben der Feuerwehr, Rechtsrahmen, Organisation und Dienstgrade – das Fundament für jeden Einsatzdienst.',
  objectives: [
    'Die gesetzlichen Aufgaben der Feuerwehr benennen',
    'Aufbau und Organisation der Feuerwehr erklären',
    'Rechte und Pflichten im Feuerwehrdienst kennen',
    'Dienstgrade und Funktionen zuordnen',
  ],
  tags: ['Recht', 'Organisation', 'Grundlagen'],
  lessons: LESSONS_A,
},

/* ======================================================================= B */
{
  id: 'b-brennen-loeschen', code: 'B', title: 'Brennen & Löschen',
  category: 'grund', level: 1, icon: 'fire', duration: 55,
  summary: 'Verbrennungslehre, das Verbrennungsdreieck, Brandklassen und die vier Löschwirkungen – naturwissenschaftliches Fundament der Brandbekämpfung.',
  objectives: [
    'Voraussetzungen einer Verbrennung erklären (Verbrennungsdreieck/-fünfeck)',
    'Brandklassen A–F unterscheiden und Löschmittel zuordnen',
    'Die vier Löschwirkungen beschreiben',
    'Gefahren wie Flashover und Backdraft erkennen',
  ],
  tags: ['Verbrennung', 'Löschmittel', 'Brandklassen', 'Chemie'],
  lessons: LESSONS_B,
},

/* ======================================================================= C */
{
  id: 'c-fahrzeugkunde', code: 'C', title: 'Fahrzeugkunde',
  category: 'technik', level: 2, icon: 'truck', duration: 40,
  summary: 'Genormte Feuerwehrfahrzeuge nach DIN, ihre Kennzeichnung, Beladung und Einsatzwerte – vom LF bis zur DLK.',
  objectives: [
    'Fahrzeugklassen und ihre Kurzbezeichnungen entschlüsseln',
    'Löschgruppenfahrzeuge und ihre Beladung beschreiben',
    'Hubrettungs- und Sonderfahrzeuge einordnen',
    'Bedeutung von Wassertank, Pumpe und Besatzung erklären',
  ],
  tags: ['Fahrzeuge', 'DIN', 'Technik'],
  lessons: LESSONS_C,
},

/* ======================================================================= D */
{
  id: 'd-geraetekunde', code: 'D', title: 'Persönliche Schutzausrüstung & Gerätekunde',
  category: 'technik', level: 1, icon: 'helmet', duration: 45,
  summary: 'Die persönliche Schutzausrüstung (PSA), Schläuche, Armaturen und Strahlrohre – die Werkzeuge, mit denen jede Einsatzkraft arbeitet.',
  objectives: [
    'Bestandteile der PSA und ihren Schutzzweck benennen',
    'Saug- und Druckschläuche sowie Kupplungen unterscheiden',
    'Armaturen zur Wasserführung zuordnen',
    'Funktion des Hohlstrahlrohrs erklären',
  ],
  tags: ['PSA', 'Schläuche', 'Armaturen', 'Ausrüstung'],
  lessons: LESSONS_D,
},

/* ======================================================================= E */
{
  id: 'e-loescheinsatz', code: 'E', title: 'Löscheinsatz & Einsatzlehre (FwDV 3)',
  category: 'einsatz', level: 2, icon: 'water', duration: 50,
  summary: 'Der geregelte Ablauf des Löscheinsatzes nach FwDV 3: Aufgaben der Trupps, Wasserversorgung und Einheiten im Einsatz.',
  objectives: [
    'Den Einsatzablauf einer Gruppe nach FwDV 3 beschreiben',
    'Aufgaben von Angriffs-, Wasser- und Schlauchtrupp zuordnen',
    'Die Wasserversorgung vom Hydranten zum Strahlrohr aufbauen',
    'Das Kommando „zum Einsatz fertig" korrekt umsetzen',
  ],
  tags: ['FwDV 3', 'Löscheinsatz', 'Taktik', 'Gruppe'],
  lessons: LESSONS_E,
},

/* ======================================================================= F */
{
  id: 'f-atemschutz', code: 'F', title: 'Atemschutz (FwDV 7)',
  category: 'atem', level: 3, icon: 'mask', duration: 60,
  summary: 'Umluftunabhängiger Atemschutz: Gerätekunde, Einsatzgrundsätze, Atemschutzüberwachung und Notfallverfahren – lebenswichtiges Spezialwissen.',
  objectives: [
    'Aufbau und Funktion des Pressluftatmers erklären',
    'Einsatzgrundsätze und -grenzen nach FwDV 7 einhalten',
    'Atemschutzüberwachung führen und Rückzugszeitpunkt berechnen',
    'Notfallverfahren und Verhalten bei Gerätestörung kennen',
  ],
  tags: ['Atemschutz', 'FwDV 7', 'PA', 'Innenangriff'],
  lessons: LESSONS_F,
},

/* ======================================================================= G */
{
  id: 'g-technische-hilfe', code: 'G', title: 'Technische Hilfeleistung',
  category: 'einsatz', level: 2, icon: 'wrench', duration: 45,
  summary: 'Technische Rettung bei Verkehrsunfällen und Notlagen: Einsatzstellensicherung, hydraulischer Rettungssatz und patientengerechte Rettung.',
  objectives: [
    'Eine Einsatzstelle im Verkehr absichern',
    'Den hydraulischen Rettungssatz und seine Einsatzgrundsätze beschreiben',
    'Den Ablauf einer patientenorientierten Rettung erklären',
    'Gefahren an der Einsatzstelle erkennen (Airbag, Batterie, Betriebsstoffe)',
  ],
  tags: ['THL', 'Verkehrsunfall', 'Rettung', 'Hydraulik'],
  lessons: LESSONS_G,
},

/* ======================================================================= H */
{
  id: 'h-sprechfunk', code: 'H', title: 'Sprechfunk & Digitalfunk',
  category: 'technik', level: 2, icon: 'radio', duration: 40,
  summary: 'Funkbetrieb nach FwDV 810: Betriebsarten, Nachrichtenaufbau, Buchstabieralphabet und Digitalfunk BOS (TETRA).',
  objectives: [
    'Betriebsarten und Rufnamensystematik erklären',
    'Eine Nachricht formgerecht abwickeln',
    'Das Buchstabieralphabet sicher anwenden',
    'Grundlagen des Digitalfunks (TMO/DMO) beschreiben',
  ],
  tags: ['Funk', 'FwDV 810', 'TETRA', 'Kommunikation'],
  lessons: LESSONS_H,
},

/* ======================================================================= I */
{
  id: 'i-gefahrgut', code: 'I', title: 'ABC-Gefahrstoffe (FwDV 500)',
  category: 'gefahr', level: 3, icon: 'hazmat', duration: 55,
  summary: 'Einsatz bei atomaren, biologischen und chemischen Gefahren: Kennzeichnung, GAMS-Regel, Gefahrengruppen und Dekontamination.',
  objectives: [
    'Gefahrstoffe anhand von Kennzeichnung identifizieren (Warntafel, GHS)',
    'Die GAMS-Regel als Ersteinsatz-Grundregel anwenden',
    'Gefahrengruppen und Schutzausrüstung zuordnen',
    'Grundlagen der Dekontamination erklären',
  ],
  tags: ['ABC', 'Gefahrgut', 'FwDV 500', 'CBRN'],
  lessons: LESSONS_I,
},

/* ======================================================================= J */
{
  id: 'j-erste-hilfe', code: 'J', title: 'Erste Hilfe & lebensrettende Sofortmaßnahmen',
  category: 'medizin', level: 1, icon: 'heart', duration: 40,
  summary: 'Lebensrettende Sofortmaßnahmen: Notruf, Auffinden einer Person, stabile Seitenlage und Herz-Lungen-Wiederbelebung nach aktuellen Leitlinien.',
  objectives: [
    'Die Rettungskette und den Notruf korrekt anwenden',
    'Eine bewusstlose Person versorgen (Atemkontrolle, Seitenlage)',
    'Die Herz-Lungen-Wiederbelebung durchführen',
    'Einen AED einsetzen',
  ],
  tags: ['Erste Hilfe', 'Reanimation', 'AED', 'Notfall'],
  lessons: LESSONS_J,
},

/* ======================================================================= K */
{
  id: 'k-absturzsicherung', code: 'K', title: 'Absturzsicherung & Retten aus Höhen',
  category: 'einsatz', level: 3, icon: 'rope', duration: 35,
  summary: 'Sicherung gegen Absturz und Rettung aus Höhen und Tiefen: Ausrüstung, Sicherungsmethoden und Grundsätze der Gerätesatz-Absturzsicherung.',
  objectives: [
    'Gefahren durch Absturz einschätzen',
    'Bestandteile des Gerätesatzes Absturzsicherung benennen',
    'Grundsätze der Selbst- und Fremdsicherung erklären',
    'Anschlagpunkte richtig auswählen',
  ],
  tags: ['Absturzsicherung', 'Höhenrettung', 'Sicherung'],
  lessons: LESSONS_K,
},

/* ======================================================================= L */
{
  id: 'l-fuehrung-fwdv100', code: 'L', title: 'Führung & Leitung im Einsatz (FwDV 100)',
  category: 'fuehrung', level: 4, icon: 'compass', duration: 65,
  summary: 'Führungslehre nach FwDV 100: Führungssystem, Führungsvorgang (Lagefeststellung–Planung–Befehl), Führungsstufen und Führungsorganisation.',
  objectives: [
    'Das Führungssystem der FwDV 100 erklären',
    'Den Führungsvorgang als Regelkreis anwenden',
    'Führungsstufen A–D unterscheiden',
    'Eine strukturierte Lagebeurteilung durchführen',
  ],
  tags: ['Führung', 'FwDV 100', 'Einsatzleitung', 'Taktik'],
  lessons: LESSONS_L,
},

/* ======================================================================= M */
{
  id: 'm-vorbeugender-brandschutz', code: 'M', title: 'Vorbeugender Brandschutz & Objektkunde',
  category: 'praevention', level: 3, icon: 'building', duration: 40,
  summary: 'Baulicher, anlagentechnischer und organisatorischer Brandschutz: Rettungswege, Brandabschnitte, Brandmelde- und Löschanlagen.',
  objectives: [
    'Die drei Säulen des vorbeugenden Brandschutzes erklären',
    'Anforderungen an Rettungswege beschreiben',
    'Brandmelde- und Löschanlagen einordnen',
    'Feuerwehrpläne und -zufahrten nutzen',
  ],
  tags: ['Brandschutz', 'Prävention', 'Baukunde'],
  lessons: LESSONS_M,
},

/* ======================================================================= N */
{
  id: 'n-maschinist', code: 'N', title: 'Maschinist (FwDV 2)',
  category: 'technik', level: 3, icon: 'truck', duration: 55,
  summary: 'Der Maschinist bedient Fahrzeug, Feuerlöschkreiselpumpe und Aggregate. Pumpenkunde, Wasserförderung und Verantwortung am Standort.',
  objectives: [
    'Aufgaben und Verantwortung des Maschinisten benennen',
    'Aufbau und Funktion der Feuerlöschkreiselpumpe erklären',
    'Ansaugvorgang, Kavitation und Betriebsdrücke beherrschen',
    'Stromerzeuger und Aggregate sicher betreiben',
  ],
  tags: ['Maschinist', 'FwDV 2', 'Pumpe', 'Aggregate'],
  lessons: LESSONS_N,
},

/* ======================================================================= O */
{
  id: 'o-baukunde', code: 'O', title: 'Objekt- & Baukunde',
  category: 'praevention', level: 3, icon: 'building', duration: 40,
  summary: 'Baustoffe, Bauteile und Gebäudeverhalten im Brandfall: Wie Konstruktionen versagen, wo Gefahren lauern und wie man Objekte taktisch liest.',
  objectives: [
    'Baustoff- und Feuerwiderstandsklassen einordnen',
    'Typisches Brandverhalten von Bauteilen einschätzen',
    'Einsturzgefahren erkennen',
    'Gebäude taktisch erkunden (Zugänge, Rettungswege, Ausbreitungswege)',
  ],
  tags: ['Baukunde', 'Statik', 'Objektkunde', 'Einsturz'],
  lessons: [
    {
      id: 'o1', title: 'Baustoffe & Feuerwiderstand', duration: 20,
      blocks: [
        H2('klassen', 'Baustoffklassen (Brennbarkeit)'),
        P('Baustoffe werden nach ihrem Brandverhalten klassifiziert (früher DIN 4102: A/B, heute europäisch DIN EN 13501-1: A1 bis F).'),
        TBL(['Klasse (DIN 4102)', 'Bedeutung', 'Beispiel'],[
          ['A1 / A2', 'nicht brennbar', 'Beton, Stahl, Mauerwerk'],
          ['B1', 'schwer entflammbar', 'Gipskarton, bestimmte Dämmstoffe'],
          ['B2', 'normal entflammbar', 'Holz, viele Kunststoffe'],
          ['B3', 'leicht entflammbar', 'Papier, ungeschützter Schaumstoff'],
        ]),
        H2('widerstand', 'Feuerwiderstandsklassen'),
        DEF('Feuerwiderstand (F 30 – F 90)', 'Gibt an, wie viele Minuten ein Bauteil im Normbrand seine Funktion behält. F 30 = feuerhemmend (30 min), F 90 = feuerbeständig (90 min). Europäisch: R/E/I mit Minutenangabe (z. B. REI 90).'),
        CO('info', 'Merkhilfe', 'F 30 „feuerhemmend", F 60 „hochfeuerhemmend", F 90 „feuerbeständig". Die Zahl ist die garantierte Standzeit im Prüfnormbrand – kein Versprechen für den realen Brand.'),
      ],
    },
    {
      id: 'o2', title: 'Bauteilverhalten & Einsturzgefahr', duration: 20,
      blocks: [
        H2('verhalten', 'Wie Baustoffe im Brand versagen'),
        UL(
          '<b>Stahl:</b> unbrennbar, verliert aber ab ~500 °C rapide an Festigkeit und „fließt" – ungeschützte Stahlkonstruktionen (Hallen!) können plötzlich einstürzen.',
          '<b>Beton:</b> nicht brennbar, aber Betonabplatzungen durch Wasserdampf im Inneren; Bewehrungsstahl verliert bei Hitze Tragkraft.',
          '<b>Holz:</b> brennt kontrolliert ab (Abbrandrate ~0,7 mm/min), verkohlte Schicht schützt den Kern – Holzträger versagen oft berechenbarer als Stahl.',
          '<b>Mauerwerk:</b> relativ formstabil, kann aber durch einseitige Erwärmung reißen.'),
        CO('danger', 'Trügerischer Stahl', 'Eine ungeschützte Stahlhalle kann ohne Vorwarnung schlagartig kollabieren, wenn die Träger ihre kritische Temperatur erreichen. Bei ausgedehnten Hallenbränden defensiv vorgehen und Einsturzbereiche meiden.'),
        H2('anzeichen', 'Anzeichen drohenden Einsturzes'),
        KF(
          'Risse in Wänden/Decken, sich weitende Fugen',
          'Durchbiegung von Trägern und Decken',
          'Abfallender Putz, knackende/knirschende Geräusche',
          'Ausbauchende Wände, klemmende Türen/Fenster',
          'Lange Brandeinwirkung auf tragende Bauteile'),
        H2('taktik', 'Gebäude taktisch lesen'),
        P('Bei der Erkundung achtet die Führungskraft auf: Zugänge und Rettungswege, Ausbreitungswege (Schächte, Leitungen, Fassade), tragende vs. nichttragende Wände, Keller-/Dachlage und Sonderbauteile (z. B. Photovoltaik auf dem Dach → Elektrogefahr, auch bei Nacht/verdecktem Zustand).'),
        CO('warn', 'Photovoltaik & Speicher', 'PV-Anlagen stehen bei Lichteinfall dauerhaft unter Gleichspannung und lassen sich nicht einfach „abschalten". Batteriespeicher können thermisch durchgehen. Bei der Erkundung immer nach PV/Speicher fragen.'),
      ],
    },
  ],
},

/* ======================================================================= P */
{
  id: 'p-arbeitsschutz', code: 'P', title: 'Arbeits- & Unfallschutz (UVV/DGUV)',
  category: 'grund', level: 1, icon: 'shield', duration: 35,
  summary: 'Sicherheit im Feuerwehrdienst: Unfallverhütungsvorschriften, Gefährdungen, Hygiene (Einsatzstellenhygiene) und richtiges Verhalten.',
  objectives: [
    'Bedeutung der DGUV Vorschrift 49 für die Feuerwehr erklären',
    'Grundsätze der Unfallverhütung im Dienst anwenden',
    'Einsatzstellenhygiene und Kontaminationsschutz umsetzen',
    'Gefährdungen erkennen und Schutzmaßnahmen ableiten',
  ],
  tags: ['UVV', 'DGUV', 'Arbeitsschutz', 'Hygiene'],
  lessons: [
    {
      id: 'p1', title: 'Unfallverhütung im Feuerwehrdienst', duration: 18,
      blocks: [
        H2('grundlage', 'Rechtliche Grundlage'),
        P('Feuerwehrangehörige sind über die Unfallkasse gesetzlich unfallversichert. Zentrale Vorschrift ist die <b>DGUV Vorschrift 49</b> „Feuerwehren" (früher GUV-V C53), ergänzt durch DGUV Regeln und Informationen. Sie regelt Bau, Ausrüstung, Betrieb und Verhalten.'),
        KF(
          'Nur ausgebildete Kräfte an Geräten einsetzen',
          'PSA bestimmungsgemäß und vollständig tragen',
          'Sicherungsposten und Absperrungen einrichten',
          'Anweisungen der Führungskraft befolgen – aber offensichtliche Gefahren melden'),
        H2('gefaehrdungen', 'Typische Gefährdungen'),
        TBL(['Gefährdung', 'Schutzmaßnahme'],[
          ['Verkehr an der Einsatzstelle', 'Warnkleidung, Absperrung, Sicherungsfahrzeug'],
          ['Absturz', 'Absturzsicherung, Auffanggurt, hoch anschlagen'],
          ['Atemgifte/Rauch', 'umluftunabhängiger Atemschutz'],
          ['Elektrizität', 'Abstand halten, freischalten lassen'],
          ['Lärm/Vibration', 'Gehörschutz, Arbeitsrotation'],
          ['Infektion/Kontamination', 'Handschuhe, Hygiene, Einsatzstellenhygiene'],
        ]),
        CO('tip', 'Sicheres Auftreten', 'Sicherheit ist kein Zeitverlust, sondern Voraussetzung. „Eigenschutz geht vor" ist kein Widerspruch zur Menschenrettung, sondern ihre Bedingung – ein verletzter Retter kann niemanden retten.'),
      ],
    },
    {
      id: 'p2', title: 'Einsatzstellenhygiene', duration: 17,
      blocks: [
        H2('warum', 'Warum Hygiene lebenswichtig ist'),
        P('Brandrauch enthält krebserzeugende Stoffe (z. B. polyzyklische aromatische Kohlenwasserstoffe, PAK). Sie lagern sich auf PSA, Haut und Geräten ab. Konsequente <b>Einsatzstellenhygiene</b> senkt das langfristige Krebsrisiko der Einsatzkräfte deutlich.'),
        DEF('Schwarz-Weiß-Trennung', 'Kontaminierte („schwarze") Bereiche/Ausrüstung werden konsequent von sauberen („weißen") getrennt – von der Einsatzstelle über den Transport bis zur Fahrzeughalle. Ziel: keine Verschleppung von Schadstoffen in Mannschaftsraum, Wache und nach Hause.'),
        STEPS(
          'Kontaminierte PSA an der Einsatzstelle grob reinigen/ablegen',
          'Getrennt (Sack/Behälter) transportieren, nicht im Mannschaftsraum',
          'Hände/Gesicht/Hals reinigen, nicht mit kontaminierten Händen essen/trinken',
          'PSA fachgerecht reinigen lassen, duschen nach dem Einsatz',
          'Kontaminierte Kleidung nicht mit privater Wäsche mischen'),
        CO('danger', 'Unsichtbare Gefahr', 'Ruß auf der Haut wird über die Haut aufgenommen – besonders an Hals, Handgelenken und Kopf. „Dreckige" PSA ist kein Ehrenabzeichen, sondern ein Gesundheitsrisiko.'),
        H2('psychisch', 'Psychische Gesundheit'),
        P('Belastende Einsätze können nachwirken. Angebote wie <b>PSNV</b> (Psychosoziale Notfallversorgung) und offene Nachbesprechungen gehören zum Arbeitsschutz. Belastungen ernst nehmen – für sich und für Kameradinnen und Kameraden.'),
      ],
    },
  ],
},

/* ======================================================================= Q */
{
  id: 'q-jugend', code: 'Q', title: 'Jugend- & Nachwuchsarbeit',
  category: 'grund', level: 1, icon: 'users', duration: 30,
  summary: 'Die Jugendfeuerwehr als Zukunft der Wehr: Ziele, Aufsichtspflicht, altersgerechte Ausbildung und rechtliche Rahmenbedingungen.',
  objectives: [
    'Ziele und Bedeutung der Jugendfeuerwehr erklären',
    'Aufsichtspflicht und rechtliche Grundlagen kennen',
    'Grundsätze altersgerechter, sicherer Ausbildung anwenden',
    'Kindeswohl und Prävention im Vereinsleben beachten',
  ],
  tags: ['Jugendfeuerwehr', 'Nachwuchs', 'Aufsichtspflicht', 'Pädagogik'],
  lessons: [
    {
      id: 'q1', title: 'Auftrag & Rechtsrahmen', duration: 15,
      blocks: [
        H2('ziel', 'Was die Jugendfeuerwehr leistet'),
        P('Die Jugendfeuerwehr (JF) verbindet <b>feuerwehrtechnische Grundausbildung</b> mit allgemeiner Jugendarbeit. Sie sichert den Nachwuchs, vermittelt Werte wie Teamgeist, Verantwortung und Hilfsbereitschaft und macht Kinder und Jugendliche fit für den späteren Einsatzdienst.'),
        KF(
          'Aufnahme meist ab 10 Jahren (landesabhängig, teils Kinderfeuerwehr ab 6)',
          'Übergang in den aktiven Dienst i. d. R. ab 16/18 Jahren',
          'Mischung aus Technik, Sport, Spiel und Gemeinschaft',
          'Demokratische Mitbestimmung (Jugendsprecher, Gruppenstunden)'),
        H2('recht', 'Rechtlicher Rahmen'),
        DEF('Aufsichtspflicht', 'Betreuerinnen und Betreuer übernehmen für die Dauer der Veranstaltung die Aufsichtspflicht. Umfang richtet sich nach Alter, Reife und Gefährlichkeit der Tätigkeit. Grundsatz: so viel Freiheit wie möglich, so viel Aufsicht wie nötig.'),
        UL(
          '<b>Jugendschutzgesetz</b> und Jugendarbeitsschutz beachten',
          '<b>Einverständniserklärungen</b> der Erziehungsberechtigten einholen',
          'Kein Einsatz Minderjähriger im realen Gefahrenbereich',
          'Qualifizierte Betreuer (JuLeiCa – Jugendleiter-Card empfohlen)'),
      ],
    },
    {
      id: 'q2', title: 'Sichere & altersgerechte Ausbildung', duration: 15,
      blocks: [
        H2('paedagogik', 'Altersgerecht ausbilden'),
        P('Kinder und Jugendliche lernen anders als Erwachsene: kürzere Konzentrationsspannen, hoher Bewegungsdrang, starkes Bedürfnis nach Erfolgserlebnissen. Ausbildung sollte <b>handlungsorientiert, abwechslungsreich und altersgerecht</b> sein.'),
        KF(
          'Übungen in kleine, erlebbare Schritte gliedern',
          'Sicherheit hat Vorrang – reduzierte Geräte, betreute Stationen',
          'Erfolgserlebnisse schaffen, Wettbewerbe (Leistungsspange) motivieren',
          'Vorbildfunktion der Betreuer – Sprache, Auftreten, PSA'),
        H2('kindeswohl', 'Kindeswohl & Prävention'),
        CO('warn', 'Schutzkonzept', 'Viele Feuerwehren haben ein Kinder- und Jugendschutzkonzept. Betreuer sollten geschult sein (Prävention sexualisierter Gewalt), erweitertes Führungszeugnis vorlegen und das „Vier-Augen-Prinzip" wahren. Kinderschutz ist Führungsaufgabe.'),
        H2('gemeinschaft', 'Gemeinschaft & Bindung'),
        P('Zeltlager, Ausflüge und gemeinsame Aktionen binden den Nachwuchs. Wer sich in der Jugendfeuerwehr wohlfühlt, bleibt der Feuerwehr oft ein Leben lang treu – Nachwuchsarbeit ist Investition in die Einsatzbereitschaft von morgen.'),
      ],
    },
  ],
},

/* ======================================================================= R */
{
  id: 'r-digital', code: 'R', title: 'Digitale Einsatzunterstützung',
  category: 'technik', level: 3, icon: 'eye', duration: 35,
  summary: 'Moderne Technik im Einsatz: Wärmebildkamera und Drohnen (UAS). Physikalische Grundlagen, Einsatzmöglichkeiten und Grenzen.',
  objectives: [
    'Funktionsprinzip der Wärmebildkamera erklären',
    'Einsatzmöglichkeiten und Fehlerquellen der WBK kennen',
    'Einsatzfelder von Drohnen (UAS) benennen',
    'Rechtliche und sicherheitstechnische Grenzen beachten',
  ],
  tags: ['Wärmebild', 'Drohne', 'UAS', 'Technik', 'Digitalisierung'],
  lessons: [
    {
      id: 'r1', title: 'Wärmebildkamera (WBK)', duration: 18,
      blocks: [
        H2('physik', 'Wie eine Wärmebildkamera „sieht"'),
        P('Jeder Körper über dem absoluten Nullpunkt strahlt <b>Infrarotstrahlung</b> ab. Die Wärmebildkamera macht diese für das Auge unsichtbare Strahlung sichtbar und stellt Temperaturunterschiede als Bild dar – auch bei völliger Dunkelheit und im Rauch.'),
        FIG('waermebild', 'Wärmebildkamera: Infrarotstrahlung wird über den Sensor in ein Falschfarbenbild umgesetzt – warme Bereiche hell, kalte dunkel.'),
        H2('einsatz', 'Einsatzmöglichkeiten'),
        KF(
          'Personensuche im verrauchten Raum (Körperwärme)',
          'Glutnester und Brandausbreitung in Wänden/Decken erkennen',
          'Flüssigkeitsstände in Behältern abschätzen',
          'Kontrolle nach dem Ablöschen (Nachlöscharbeiten)',
          'Orientierung und Rückwegsicherung im Innenangriff'),
        H2('grenzen', 'Grenzen & Fehlerquellen'),
        CO('warn', 'Kein Röntgenblick', 'Die WBK sieht nur Oberflächentemperaturen – nicht durch Wände, Glas oder Wasser. Glas reflektiert IR (Spiegelbild!), heiße Umgebung „blendet", nasse Oberflächen verfälschen. Die Kamera ersetzt nie das systematische Absuchen und die eigene Sinne.'),
        CO('danger', 'Verlass dich nicht blind', 'Ein Trupp darf sich nie allein auf die WBK verlassen: Bei Ausfall (Akku, Hitze) muss die Orientierung auch ohne Kamera funktionieren. Immer Wandkontakt und Rückweg sichern.'),
      ],
    },
    {
      id: 'r2', title: 'Drohnen (UAS) im Einsatz', duration: 17,
      blocks: [
        H2('was', 'Unbemannte Luftfahrtsysteme'),
        P('Drohnen (fachlich UAS – Unmanned Aircraft Systems) liefern der Einsatzleitung schnell ein <b>Lagebild aus der Luft</b>. Mit Tageslicht- und Wärmebildkamera unterstützen sie die Erkundung erheblich.'),
        H2('felder', 'Typische Einsatzfelder'),
        UL(
          '<b>Lageerkundung:</b> Überblick über ausgedehnte Schadenlagen, Dachflächen, unzugängliche Bereiche',
          '<b>Vegetations-/Waldbrand:</b> Brandausbreitung und Glutnester aus der Luft',
          '<b>Personensuche:</b> Vermisstensuche im Gelände (Wärmebild)',
          '<b>Gefahrgut:</b> Erkundung aus sicherer Entfernung',
          '<b>Dokumentation:</b> Lagekarten, Einsatznachbereitung'),
        H2('recht', 'Rechtliche Grenzen'),
        DEF('EU-Drohnenverordnung', 'Der Betrieb unterliegt EU-Recht (Kategorien Open/Specific/Certified), Registrierungs- und Kenntnisnachweispflichten. BOS haben teils Sonderregelungen, dennoch gelten Betriebsgrenzen, Flugverbotszonen und Fernpilot-Anforderungen.'),
        CO('warn', 'Luftraum-Koordination', 'Bei Einsätzen mit Rettungshubschrauber ist die Luftraum-Koordination zwingend: Drohne und Hubschrauber dürfen sich nie gefährden. Der Drohnenbetrieb wird bei Bedarf sofort eingestellt.'),
        H2('mehrwert', 'Mehrwert & Grenzen'),
        P('Drohnen beschleunigen die Lagefeststellung und erhöhen die Sicherheit (Erkundung ohne Eigengefährdung). Sie ersetzen aber keine Erkundung am Boden und sind wetter- und akkuabhängig. Ausbildung und Übung der Fernpiloten sind entscheidend.'),
      ],
    },
  ],
},

];

/* Weitere vollständige Module (S–Z) anhängen – echte A-bis-Z-Abdeckung */
MODULES.push(...MODULES_EXTRA);

/* Zusatz-Lektionen aus den Erweiterungsebenen einhängen (Inhaltstiefe) */
for (const source of [EXTRA_LESSONS, EXTRA_LESSONS_2, EXTRA_LESSONS_3]) {
  for (const m of MODULES) {
    const extra = source[m.id];
    if (extra && extra.length) {
      m.lessons.push(...extra);
      m.duration += extra.reduce((n, l) => n + (l.duration || 0), 0);
    }
  }
}

/* Moduldauer immer aus den Lektionen ableiten. So kann die angezeigte Zeit
   nicht mehr von den tatsächlichen Inhalten abweichen – sie wächst
   automatisch mit, wenn Lektionen ergänzt oder ausgebaut werden. */
for (const m of MODULES) m.duration = m.lessons.reduce((n, l) => n + (l.duration || 0), 0);

/* Schnellzugriff-Index */
export const MODULE_BY_ID = Object.fromEntries(MODULES.map(m => [m.id, m]));
export const LESSON_COUNT = MODULES.reduce((n, m) => n + m.lessons.length, 0);
