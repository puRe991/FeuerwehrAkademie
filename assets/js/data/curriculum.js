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
  lessons: [
    {
      id: 'c1', title: 'Systematik & Kurzbezeichnungen', duration: 20,
      blocks: [
        H2('system', 'Wie sich Fahrzeugnamen zusammensetzen'),
        P('Feuerwehrfahrzeuge sind in Deutschland genormt (DIN EN 1846 / DIN 14530 ff.). Die Kurzbezeichnung verrät Typ und oft die Löschwassermenge.'),
        TBL(['Kürzel', 'Bedeutung', 'Besatzung'],[
          ['LF', 'Löschgruppenfahrzeug', '1/8 (Gruppe)'],
          ['HLF', 'Hilfeleistungslöschgruppenfahrzeug', '1/8'],
          ['TLF', 'Tanklöschfahrzeug (großer Wassertank)', '1/2 – 1/5'],
          ['DLK', 'Drehleiter mit Korb', '1/2'],
          ['RW', 'Rüstwagen (technische Hilfe)', '1/2'],
          ['ELW', 'Einsatzleitwagen (Führung)', '1/x'],
          ['TSF(-W)', 'Tragkraftspritzenfahrzeug (-Wasser)', '1/5 (Staffel)'],
          ['MTF', 'Mannschaftstransportfahrzeug', '1/8'],
        ]),
        CO('info', 'Zahlenzusatz', 'Beim LF 20 steht die „20" für die Pumpenleistung (Nennförderstrom 2000 l/min bei 10 bar), nicht für die Tankgröße. Historisch (LF 8/6) bezeichnete die zweite Zahl den Wassertank in hundert Litern.'),
        FIG('fahrzeug', 'Grundkomponenten eines Löschgruppenfahrzeugs: Besatzung, Löschwassertank und Feuerlöschpumpe.'),
      ],
    },
    {
      id: 'c2', title: 'Löschfahrzeuge & Sonderfahrzeuge', duration: 20,
      blocks: [
        H2('lf', 'Das (H)LF – das Arbeitspferd'),
        P('Das Löschgruppenfahrzeug ist das Standardfahrzeug der meisten Wehren. Es transportiert eine komplette Gruppe (1/8), Löschwasser (600–2000 l), eine Feuerlöschkreiselpumpe und umfangreiche Beladung für Brandbekämpfung und einfache technische Hilfe.'),
        KF(
          'Feuerlöschkreiselpumpe (FPN 10-2000 beim LF 20)',
          'Löschwasserbehälter 1000–2000 l',
          'Tragbare Leitern, Schläuche, Armaturen',
          '4 umluftunabhängige Atemschutzgeräte in der Mannschaftskabine',
          'Beim HLF zusätzlich hydraulischer Rettungssatz (Schere/Spreizer)'),
        H2('dlk', 'Drehleiter (DLK 23-12)'),
        P('Die „23-12" bedeutet: <b>23 m Nennrettungshöhe</b> bei <b>12 m Ausladung</b>. Sie dient der Menschenrettung aus Höhen, dem Einsatz als Angriffsweg und als Arbeitsplattform (Wenderohr).'),
        CO('tip', 'Der zweite Rettungsweg', 'In vielen Gebäuden bildet die Drehleiter den „zweiten Rettungsweg" der Feuerwehr. Deshalb müssen Flächen für die Feuerwehr (Aufstellflächen) freigehalten werden.'),
        H2('sonder', 'Weitere Fahrzeuge'),
        UL(
          '<b>RW / Rüstwagen:</b> schwere technische Hilfe, Seilwinde, Stromerzeuger, umfangreiches Werkzeug.',
          '<b>GW (Gerätewagen):</b> Spezialbeladung, z. B. GW-Gefahrgut, GW-Atemschutz, GW-Logistik.',
          '<b>ELW 1/2:</b> Einsatzleitung und Kommunikation.',
          '<b>SW / Schlauchwagen:</b> lange Schlauchstrecken für die Wasserförderung über lange Wegstrecke.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'd1', title: 'Persönliche Schutzausrüstung (PSA)', duration: 20,
      blocks: [
        H2('psa', 'Schutz von Kopf bis Fuß'),
        P('Die PSA schützt die Einsatzkraft vor Hitze, mechanischen Einwirkungen, Nässe und Sichtbarkeitsrisiken. Sie ist normgerecht zu tragen – unvollständige PSA bedeutet Verzicht auf Schutz.'),
        UL(
          '<b>Feuerwehrhelm</b> (DIN EN 443) mit Nackenschutz und Visier',
          '<b>Feuerwehrschutzanzug</b> / Überjacke & -hose (HuPF bzw. EN 469)',
          '<b>Feuerwehrschutzhandschuhe</b> (EN 659)',
          '<b>Feuerwehrstiefel</b> mit Zehen- und Durchtrittschutz',
          '<b>Feuerwehr-Haltegurt</b> mit Feuerwehrleine',
          'Ggf. <b>Flammschutzhaube</b> und <b>Warnkleidung</b> nach EN ISO 20471'),
        CO('danger', 'Grundsatz', 'Keine PSA – kein Einsatz. Wer nicht vollständig geschützt ist, gefährdet sich selbst und blockiert seine Gruppe. Baumwoll-Unterbekleidung tragen (keine schmelzenden Kunstfasern auf der Haut).'),
        H2('kennzeichnung', 'Funktionskennzeichnung'),
        P('Helmkennzeichnung und Funktionswesten helfen, Funktionen im Einsatz auf einen Blick zu erkennen (z. B. farbige Helmkennung für Führungskräfte, Westen „Gruppenführer", „Einsatzleiter", „Atemschutzüberwachung").'),
      ],
    },
    {
      id: 'd2', title: 'Schläuche, Kupplungen & Armaturen', duration: 25,
      blocks: [
        H2('schlaeuche', 'Schlaucharten'),
        TBL(['Typ', 'Verwendung', 'Größen'],[
          ['Saugschlauch (A)', 'formstabil, Wasserentnahme aus offenem Gewässer', 'A-110'],
          ['Druckschlauch B', 'Zubringer-/Verteilerleitung', 'B-75, meist 20 m'],
          ['Druckschlauch C', 'Angriffsleitung zum Strahlrohr', 'C-42/C-52, 15 m'],
          ['Druckschlauch D', 'Kleinlöschgeräte, wenig genutzt', 'D-25'],
        ]),
        DEF('Storz-Kupplung', 'Genormte Knaggenkupplung (Symmetrisch, „geschlechtslos"), die Schläuche und Armaturen schnell und dicht verbindet. Kupplungsgrößen: A, B, C, D.'),
        H2('armaturen', 'Armaturen der Wasserführung'),
        P('Armaturen steuern und verteilen das Löschwasser. Man unterscheidet Armaturen zur Wasserentnahme, -fortleitung und -abgabe.'),
        UL(
          '<b>Standrohr:</b> Wasserentnahme aus dem Unterflurhydranten.',
          '<b>Verteiler (B-CBC):</b> teilt eine B-Leitung auf mehrere C-Leitungen auf – Schlüsselstelle des Gruppenführers.',
          '<b>Sammelstück (A-2B):</b> führt zwei B-Leitungen zur Pumpe zusammen.',
          '<b>Stützkrümmer:</b> nimmt die Rückstoßkraft am B-Rohr auf.',
          '<b>Übergangsstücke</b> und <b>Blindkupplungen</b> zum Anpassen/Verschließen.'),
        H2('strahlrohr', 'Das Hohlstrahlrohr'),
        P('Das moderne Hohlstrahlrohr löst das alte Mehrzweckstrahlrohr zunehmend ab. Es erlaubt die stufenlose Regelung von <b>Durchflussmenge</b> und <b>Sprühbild</b> (Vollstrahl ↔ Sprühstrahl) direkt am Rohr.'),
        KF(
          'Vollstrahl: große Wurfweite, punktuelle Kühlung',
          'Sprühstrahl: großer Wärmeschutz-„Schirm", effektive Rauchgaskühlung',
          'Mannschutzbrause: schützt den Trupp vor Wärmestrahlung',
          'Durchflussregelung: bedarfsgerechter Wassereinsatz, weniger Wasserschaden'),
        FIG('strahlrohr', 'Hohlstrahlrohr: regelbar zwischen Vollstrahl (Wurfweite) und Sprühstrahl (Wärmeschutz).'),
        CO('tip', 'Türprozedur', 'Vor dem Öffnen einer Brandraumtür kurze Sprühstöße („Puls-Gun-Technik") zur Rauchgaskühlung abgeben – reduziert die Flashover-Gefahr deutlich.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'e1', title: 'Einsatzablauf & Truppaufgaben', duration: 25,
      blocks: [
        H2('grundsatz', 'Der Einsatzbefehl'),
        P('Der Gruppenführer entwickelt aus der <b>Lageerkundung</b> seinen Entschluss und gibt den Einsatzbefehl in fester Reihenfolge. Der klassische Befehlsaufbau lautet:'),
        MNE([{l:'E',w:'Einheit'},{l:'A',w:'Auftrag'},{l:'M',w:'Mittel'},{l:'Z',w:'Ziel'},{l:'W',w:'Weg'}],
          '„Einheit – Auftrag – Mittel – Ziel – Weg": Wer macht was, womit, wozu und auf welchem Weg. Beispiel: „Angriffstrupp – zur Menschenrettung – mit C-Rohr – über die Treppe – vor!"'),
        H2('trupps', 'Aufgaben der Trupps (Löscheinsatz)'),
        TBL(['Trupp', 'Grundaufgabe', 'Danach'],[
          ['Angriffstrupp', 'Menschenrettung & Brandbekämpfung (1. Rohr)', 'hält den Innenangriff'],
          ['Wassertrupp', 'Wasserversorgung Verteiler ← Pumpe herstellen', 'stellt Sicherheitstrupp'],
          ['Schlauchtrupp', 'Schlauchleitung Verteiler → Angriffstrupp verlegen', 'unterstützt / 2. Rohr'],
        ]),
        CO('info', 'Faustregel Wasserversorgung', 'Der Wassertrupp arbeitet „von der Pumpe zum Verteiler". Der Angriffstrupp arbeitet „vom Verteiler zum Brand". Der Verteiler ist die Nahtstelle.'),
        FIG('wasserweg', 'Der Wasserweg: von der Pumpe über den Verteiler zum Strahlrohr – verbunden mit Storz-Kupplungen.'),
        H2('sicherheit', 'Der Sicherheitstrupp'),
        DEF('Sicherheitstrupp', 'Bei einem Atemschutzeinsatz muss ein zweiter, ausgerüsteter Trupp bereitstehen, um einen in Not geratenen Trupp zu retten. Grundsatz: „Kein Innenangriff unter Atemschutz ohne Sicherheitstrupp."'),
      ],
    },
    {
      id: 'e2', title: 'Wasserförderung & besondere Einsätze', duration: 25,
      blocks: [
        H2('foerderung', 'Wasserförderung über lange Wegstrecke'),
        P('Reicht die Löschwassermenge am Objekt nicht aus, wird über eine lange B-Schlauchstrecke gefördert. Bei großen Höhenunterschieden oder Entfernungen kommen <b>Verstärkerpumpen</b> zum Einsatz.'),
        KF(
          'Reibungsverluste steigen mit Länge und Durchfluss',
          'Höhenunterschied: je 10 m Höhe ≈ 1 bar Druckverlust',
          'Eingangsdruck an Folgepumpe mind. 1,5 bar halten (Kavitation vermeiden)',
          'Kommunikation zwischen den Pumpen ist entscheidend'),
        H2('offenes', 'Wasserentnahme aus offenem Gewässer'),
        STEPS(
          'Saugschläuche kuppeln und mit Saugkorb + Ventilleine sichern',
          'Halteleine anbringen, Saugleitung zu Wasser bringen',
          'Entlüftungseinrichtung betätigen, bis Wasser ansteht',
          'Pumpe langsam auf Betriebsdruck bringen, Druckabgang öffnen'),
        CO('warn', 'Kavitation', 'Zu hohe Saughöhe oder verstopfter Saugkorb führen zu Kavitation (Dampfblasenbildung) – die Pumpe „reißt ab" und kann beschädigt werden. Max. geodätische Saughöhe praktisch ca. 7,5 m.'),
        H2('riegel', 'Riegelstellung & Brandausbreitung'),
        P('Bei ausgedehnten Bränden verhindert eine <b>Riegelstellung</b> das Übergreifen auf Nachbarobjekte. Der Gruppenführer bestimmt Abschnitte; Prioritäten sind Menschenrettung, dann Ausbreitungsverhinderung, dann Ablöschen.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'f1', title: 'Gerätekunde Pressluftatmer', duration: 25,
      blocks: [
        H2('warum', 'Warum Atemschutz?'),
        P('Brandrauch ist die häufigste Todesursache bei Bränden. Er enthält u. a. <b>Kohlenstoffmonoxid (CO)</b>, <b>Kohlenstoffdioxid (CO₂)</b>, Blausäure (HCN) und reizende/toxische Pyrolyseprodukte, ist heiß und sichtbehindernd. Zusätzlich sinkt der Sauerstoffgehalt.'),
        CO('danger', 'Kohlenstoffmonoxid', 'CO ist farb-, geruch- und geschmacklos und bindet ca. 200–300× stärker an Hämoglobin als Sauerstoff. Schon geringe Konzentrationen wirken tödlich – deshalb nie ohne umluftunabhängigen Atemschutz in den Rauch.'),
        H2('aufbau', 'Aufbau des Pressluftatmers (PA)'),
        UL(
          '<b>Druckluftflasche(n):</b> Stahl 300 bar oder Composite bis 300 bar, z. B. 6,8 l.',
          '<b>Druckminderer:</b> reduziert Flaschendruck auf Mitteldruck (~7 bar).',
          '<b>Lungenautomat (LA):</b> liefert Atemluft nach Bedarf, meist Überdruck (Plus-System).',
          '<b>Atemanschluss (Vollmaske):</b> dichtet ab, schützt das Gesicht.',
          '<b>Warneinrichtung:</b> akustisches Signal bei ca. 50–55 bar Restdruck.',
          '<b>Trageeinrichtung</b> mit Bebänderung.'),
        FIG('pressluftatmer', 'Luftweg im Pressluftatmer: von der Hochdruckflasche über den Druckminderer und Lungenautomaten zur Maske.'),
        DEF('Überdruck-System', 'In der Maske herrscht permanent leichter Überdruck. Vorteil: Bei einer Undichtigkeit strömt Luft nach außen – keine Schadstoffe nach innen. Preis: höherer Luftverbrauch.'),
        H2('einsatzkurz', 'Einsatzkurzprüfung'),
        P('Vor jedem Einsatz führt der Geräteträger die Einsatzkurzprüfung durch: Flaschendruck (voll ≥ 270 bar), Hochdruckdichtprüfung, Funktion der Warneinrichtung und Dichtsitz der Maske.'),
      ],
    },
    {
      id: 'f2', title: 'Einsatzgrundsätze & Überwachung', duration: 20,
      blocks: [
        H2('grundsaetze', 'Einsatzgrundsätze nach FwDV 7'),
        UL(
          'Atemschutz nur trupp­weise (mind. 2 Personen) einsetzen.',
          'Ständige Verbindung halten (Sicht, Ruf, Leine/Funk).',
          'Rückweg sichern und beobachten.',
          'Vor Rückzug denken: rechtzeitig umkehren, bevor die Luft knapp wird.',
          'Bei Störung/Gefahr: gemeinsam als Trupp zurückziehen.'),
        H2('grenzen', 'Einsatzgrenzen'),
        P('Voraussetzungen für den Geräteträger: körperliche Eignung (arbeitsmedizinische Vorsorge <b>G 26.3</b>), Mindestalter, gültige Ausbildung und regelmäßige Übungen sowie Belastungsübung (Atemschutzstrecke).'),
        H2('ueberwachung', 'Atemschutzüberwachung'),
        P('Für jeden eingesetzten Trupp wird eine Überwachung geführt: Notiert werden Namen, Einsatzbeginn, Anfangsdruck und der berechnete Rückzugs-/Warnzeitpunkt. Die Überwachung hält ständigen Kontakt.'),
        CO('info', 'Faustformel Rückzug', 'Rückzug rechtzeitig antreten! Grundregel: Für den Rückweg mindestens so viel Luft einplanen wie für den Hinweg verbraucht wurde – zzgl. Sicherheitsreserve. Spätestens bei Ansprechen der Warneinrichtung (~55 bar) ist der Rückzug bereits abzuschließen.'),
      ],
    },
    {
      id: 'f3', title: 'Notfallverfahren', duration: 15,
      blocks: [
        H2('mayday', 'Notfallmeldung „Mayday"'),
        P('Gerät ein Trupp in eine lebensbedrohliche Notlage (Orientierungsverlust, Einschluss, Luftmangel, Verletzung), setzt er unverzüglich einen Notruf über Funk ab.'),
        MNE([{l:'M',w:'Mayday'},{l:'A',w:'Atemschutznotfall'},{l:'N',w:'Name/Trupp'},{l:'V',w:'Vitalstatus'}],
          'Nach dem Absetzen: Ruhe bewahren, Standort halten, Luft sparen (ruhig atmen), Kontakt zur Wand/Leine halten, Signal geben (Rufen, Klopfen, Lampe).'),
        H2('sparen', 'Luft sparen im Notfall'),
        STEPS(
          'Ruhig und tief atmen, Panik vermeiden – Panik verdreifacht den Verbrauch',
          'Notruf absetzen und Position beschreiben',
          'Zur Wand orientieren und Rückzugsweg suchen',
          'Bemerkbar machen: rufen, klopfen, Lampe zur Decke richten',
          'Auf Sicherheitstrupp warten, Kräfte einteilen'),
        CO('danger', 'Sicherheitstrupp', 'Der Sicherheitstrupp geht mit zusätzlichem Atemschutz-Rettungsgerät (z. B. Reserveluft/Rettungsmaske) vor. Er wird sofort alarmiert, sobald ein Mayday eingeht.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'g1', title: 'Einsatzstelle & Gefahren', duration: 20,
      blocks: [
        H2('sichern', 'Einsatzstellensicherung'),
        P('Die eigene Sicherheit hat Vorrang. Vor jeder Tätigkeit wird die Einsatzstelle gegen den fließenden Verkehr abgesichert und ein Sicherheitsabstand geschaffen.'),
        STEPS(
          'Warnkleidung tragen, Fahrzeug als Sperre schräg stellen (Verkehrsschutz)',
          'Warnleuchten/Blaulicht, Verkehrswarnanlage, Warndreieck weit vorher',
          'Brandschutz sicherstellen (C-Rohr/Löscher bereitstellen)',
          'Fahrzeug gegen Wegrollen/Bewegung sichern, Zündung aus',
          'Batterie ggf. abklemmen (Minuspol zuerst)'),
        FIG('thstelle', 'Ordnung des Raumes an der THL-Einsatzstelle: innerer Bereich (Rettung), äußerer Bereich (Geräteablage) und Absperrbereich gegen den Verkehr.'),
        H2('gefahren', 'Gefahren am Unfallfahrzeug'),
        UL(
          '<b>Nicht ausgelöste Airbags / Gurtstraffer:</b> Sicherheitsabstände einhalten (Front ~30 cm, Seite ~15 cm – herstellerabhängig).',
          '<b>Betriebsstoffe:</b> Kraftstoff, Öl, Kühlmittel – Brand-/Rutschgefahr.',
          '<b>Alternative Antriebe:</b> Hochvolt-Systeme (E-/Hybrid), Gasanlagen (CNG/LPG), Wasserstoff – besondere Verfahren!',
          '<b>Fahrzeugstabilität:</b> Fahrzeug vor Arbeitsbeginn stabilisieren (Unterbau, Keile).'),
        CO('danger', 'Hochvolt-Fahrzeuge', 'Bei E-Fahrzeugen orange gekennzeichnete HV-Leitungen niemals durchtrennen. Rettungsdatenblatt/Rettungskarte nutzen, HV-System freischalten, auf thermisches Durchgehen der Batterie achten.'),
      ],
    },
    {
      id: 'g2', title: 'Rettungssatz & patientengerechte Rettung', duration: 25,
      blocks: [
        H2('satz', 'Der hydraulische Rettungssatz'),
        TBL(['Gerät', 'Funktion'],[
          ['Spreizer', 'Aufdrücken, Ziehen, Quetschen – z. B. Türen öffnen'],
          ['Schere', 'Durchtrennen von Blechen, Holmen, Pedalen'],
          ['Rettungszylinder', 'Wegdrücken/Aufstemmen größerer Abstände'],
          ['Pedalschneider/Kombigerät', 'kompakte Sonderarbeiten'],
        ]),
        CO('warn', 'Verstärkte Holme', 'Moderne Karosserien enthalten hochfeste (borlegierte) Stähle. Nicht jede Schere schneidet jeden Holm – Schnittstellen bewusst wählen, Herstellerhinweise beachten.'),
        H2('ablauf', 'Patientenorientierte Rettung'),
        P('Die Rettung richtet sich nach dem Zustand des Patienten. Man unterscheidet:'),
        UL(
          '<b>Sofortrettung / Crash-Rettung:</b> bei unmittelbarer Lebensgefahr (z. B. Brand, Atemstillstand) – schnellstmöglich, Kompromisse bei Schonung.',
          '<b>Schonende Rettung:</b> Standard – abgestimmt mit dem Rettungsdienst, achsengerecht, unter HWS-Schutz.'),
        H2('goldene', 'Die „goldene Stunde"'),
        DEF('Golden Hour of Shock', 'Ziel ist, den Patienten möglichst innerhalb einer Stunde nach dem Unfall in der geeigneten Klinik zu haben. Feuerwehr und Rettungsdienst arbeiten deshalb parallel und eng abgestimmt („Innerer und äußerer Rettungsring").'),
        CO('tip', 'Zusammenarbeit', 'Die technische Rettung folgt der Medizin: Der Notarzt/Rettungsdienst gibt Tempo und Rettungsweg vor. Ständige Kommunikation über den Zustand des Patienten ist Pflicht.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'h1', title: 'Grundlagen & Nachrichtenverkehr', duration: 20,
      blocks: [
        H2('warum', 'Warum diszipliniert funken?'),
        P('Funk ist die Lebensader der Einsatzführung. Ein Funkkanal wird von vielen geteilt – deshalb gilt: <b>kurz, klar, eindeutig</b>. Erst denken, dann Sprechtaste drücken, kurz warten, dann sprechen.'),
        KF(
          'Disziplin: nur betriebsnotwendige Nachrichten',
          'Klare Aussprache, normale Sprechgeschwindigkeit',
          'Vollständige Rufnamen verwenden',
          'Wichtige Angaben (Zahlen, Namen) buchstabieren'),
        H2('ablauf', 'Ablauf einer Nachricht (Anruf)'),
        STEPS(
          'Anruf: „Florian Musterstadt 1/44 von Florian Musterstadt 11/1 – kommen"',
          'Antwort der Gegenstelle: „…11/1 von …1/44 – kommen"',
          'Nachricht durchgeben, Ende mit „kommen"',
          'Empfang bestätigen: „verstanden" – Abschluss mit „Ende"'),
        FIG('funkablauf', 'Ablauf eines Funkgesprächs: Anruf → Antwort → Nachricht → Bestätigung → Ende.'),
        DEF('Wichtige Sprechgruppen', '„kommen" = Ende der eigenen Durchsage, Antwort erwartet. „verstanden" = Nachricht empfangen. „Ende" = Gespräch beendet. „Frage" = es folgt eine Frage. „Wiederholen Sie" = Nachricht bitte erneut.'),
      ],
    },
    {
      id: 'h2', title: 'Buchstabieralphabet & Digitalfunk', duration: 20,
      blocks: [
        H2('alphabet', 'Deutsches Buchstabieralphabet'),
        P('Zum eindeutigen Buchstabieren wird das genormte Alphabet verwendet (Auszug):'),
        TBL(['A–I', 'J–R', 'S–Z'],[
          ['A Anton, B Berta, C Cäsar', 'J Julius, K Kaufmann, L Ludwig', 'S Samuel, T Theodor, U Ulrich'],
          ['D Dora, E Emil, F Friedrich', 'M Martha, N Nordpol, O Otto', 'V Viktor, W Wilhelm, X Xanthippe'],
          ['G Gustav, H Heinrich, I Ida', 'P Paula, Q Quelle, R Richard', 'Y Ypsilon, Z Zacharias'],
        ]),
        H2('digital', 'Digitalfunk BOS (TETRA)'),
        P('Der bundesweite Digitalfunk für Behörden und Organisationen mit Sicherheitsaufgaben (BOS) basiert auf dem TETRA-Standard. Er bietet abhörsicheren, verschlüsselten Sprech- und Datenfunk.'),
        UL(
          '<b>TMO (Trunked Mode Operation):</b> Netzbetrieb über Basisstationen – große Reichweite, Gesprächsgruppen.',
          '<b>DMO (Direct Mode Operation):</b> Direktbetrieb Gerät-zu-Gerät ohne Netz – für den lokalen Einsatzstellenfunk.',
          '<b>Notruftaste:</b> priorisierte Notfallmeldung an die Leitstelle.',
          '<b>Endgeräte:</b> HRT (Handfunk), MRT (Fahrzeugfunk), FRT (feste Station).'),
        CO('info', 'Vorteil Digitalfunk', 'Bessere Sprachqualität, Abhörsicherheit durch Verschlüsselung, Gruppenkommunikation und Datenübertragung (Status/Text). Im Einsatzstellenfunk meist DMO, überörtlich TMO.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'i1', title: 'Erkennen & Kennzeichnung', duration: 25,
      blocks: [
        H2('gefahren', 'Die Gefahren der Gefahrstoffe'),
        P('ABC steht für <b>Atomare (radiologische), Biologische und Chemische</b> Gefahren. Die möglichen Schädigungswege fasst man mit den „4 A" bzw. „AAAA" zusammen:'),
        MNE([{l:'A',w:'Atemgifte'},{l:'A',w:'Angst'},{l:'A',w:'Ausbreitung'},{l:'A',w:'Atomare Gefahr'}],
          'Ergänzt um: Chemische Gefahr, Erkrankung/Verletzung, Explosion, Einsturz, Elektrizität – die klassischen „Gefahren der Einsatzstelle".'),
        CO('info', 'Gefahren der Einsatzstelle', 'Merkschema „4 A – 1 C – 4 E": Atemgifte, Angst, Ausbreitung, Atomare Gefahr | Chemische Gefahr | Erkrankung/Verletzung, Explosion, Einsturz, Elektrizität.'),
        H2('kennzeichnung', 'Kennzeichnung im Transport'),
        DEF('Orangefarbene Warntafel', 'An Gefahrgut-Transportern. Oben die <b>Gefahrnummer</b> (Kemler-Zahl), unten die <b>UN-Nummer</b> (Stoffnummer). Beispiel 33/1203 = leicht entzündlicher Stoff / Benzin.'),
        FIG('warntafel', 'Orangefarbene Warntafel: oben die Gefahrnummer (Kemler), unten die UN-Stoffnummer.'),
        UL(
          '<b>Kemler-Zahl:</b> erste Ziffer = Hauptgefahr, weitere = Nebengefahren. Verdopplung = Verstärkung. Vorangestelltes „X" = darf nicht mit Wasser in Berührung kommen!',
          '<b>UN-Nummer:</b> identifiziert den konkreten Stoff (Nachschlagen in Hommel/ERICARD).',
          '<b>Gefahrzettel (Rauten):</b> Symbol + Klasse (z. B. Klasse 3 entzündbare Flüssigkeiten).',
          '<b>GHS/CLP-Piktogramme:</b> Kennzeichnung ortsfester Gebinde/Chemikalien.'),
        CO('danger', 'Erste Ziffer 0', 'Steht als zweite Ziffer eine 0, hat der Stoff keine weitere Nebengefahr. Ein „X" vor der Kemler-Zahl warnt: gefährliche Reaktion mit Wasser – kein Wasser einsetzen!'),
      ],
    },
    {
      id: 'i2', title: 'GAMS-Regel & Gefahrengruppen', duration: 30,
      blocks: [
        H2('gams', 'Die GAMS-Regel'),
        P('Für die ersteintreffende Einheit ohne Spezialausrüstung gilt die <b>GAMS-Regel</b> als Handlungsrahmen:'),
        MNE([{l:'G',w:'Gefahr erkennen'},{l:'A',w:'Absperren'},{l:'M',w:'Menschen retten'},{l:'S',w:'Spezialkräfte'}],
          'Gefahr erkennen → Absperren (Abstand!) → Menschenrettung nur mit Eigenschutz → Spezialkräfte (Gefahrgutzug, Fachberater) nachfordern.'),
        FIG('gams', 'Die GAMS-Regel als Handlungsrahmen der ersteintreffenden Einheit bei Gefahrgutlagen.'),
        CO('warn', 'Abstand ist Schutz', 'Grundregel Abstand: bei unklarer Lage mind. 50 m, bei größeren Mengen/Explosionsgefahr deutlich mehr. Windrichtung beachten – immer von der windzugewandten Seite (Luv) annähern.'),
        H2('gruppen', 'Gefahrengruppen (FwDV 500)'),
        TBL(['Gruppe', 'Bedeutung', 'Schutz'],[
          ['I', 'geringe Gefahr', 'umluftunabhängiger Atemschutz + Schutzkleidung (Form 1)'],
          ['II', 'erhöhte Gefahr', 'Kontaminationsschutz (Form 2), erweiterte Maßnahmen'],
          ['III', 'hohe Gefahr', 'Chemikalienschutzanzug (CSA, Form 3), Dekon zwingend'],
        ]),
        H2('dekon', 'Dekontamination'),
        DEF('Dekontamination (Dekon)', 'Entfernen oder Unschädlichmachen gefährlicher Stoffe von Personen, Geräten und Kleidung. Es gibt Stufen von der Notdekon (schnell, lebensrettend) bis zur Standard-/Gerätedekon. Ziel: Verschleppung verhindern.'),
        STEPS(
          'Gefahrenbereich mit Zugangskontrolle einrichten (Schwarz-/Weißbereich)',
          'Dekon-Platz an der Grenze aufbauen (Dekon-P für Personen)',
          'Kontaminierte grob und fein dekontaminieren',
          'Registrierung, ärztliche Kontrolle, Abtransport'),
        CO('info', 'Zonenmodell', 'Klassisch: Gefahrenzone (rot, nur Schutzausrüstung), Dekon-/Absperrbereich (gelb), sicherer Bereich (grün). Übergänge nur über den Dekon-Platz.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'j1', title: 'Rettungskette & Basismaßnahmen', duration: 20,
      blocks: [
        H2('kette', 'Die Rettungskette'),
        P('Der Behandlungserfolg hängt von einer lückenlosen Kette ab. Jedes Glied zählt – das schwächste bestimmt das Ergebnis.'),
        UL(
          '<b>Sofortmaßnahmen</b> (Absichern, Notruf, lebensrettende Handgriffe)',
          '<b>Erste Hilfe</b> durch Anwesende',
          '<b>Rettungsdienst</b> (Transport, notfallmedizinische Versorgung)',
          '<b>Krankenhaus</b> (definitive Versorgung)'),
        FIG('rettungskette', 'Die Rettungskette: Nur wenn alle Glieder greifen, gelingt die Versorgung.'),
        H2('notruf', 'Notruf 112'),
        MNE([{l:'W',w:'Wo'},{l:'W',w:'Was'},{l:'W',w:'Wie viele'},{l:'W',w:'Welche'},{l:'W',w:'Warten'}],
          'Wo ist es passiert? Was ist geschehen? Wie viele Betroffene? Welche Verletzungen/Erkrankungen? Warten auf Rückfragen – nicht auflegen!'),
        H2('auffinden', 'Auffinden einer Person'),
        STEPS(
          'Eigenschutz beachten, Bewusstsein prüfen (ansprechen, anfassen)',
          'Bei fehlender Reaktion: laut um Hilfe rufen',
          'Atemwege freimachen (Kopf überstrecken, Kinn anheben)',
          'Atmung prüfen (max. 10 Sek.: sehen, hören, fühlen)',
          'Normale Atmung → stabile Seitenlage; keine normale Atmung → Reanimation'),
        FIG('seitenlage', 'Stabile Seitenlage: hält die Atemwege einer bewusstlosen Person mit normaler Atmung frei.'),
      ],
    },
    {
      id: 'j2', title: 'Reanimation & AED', duration: 20,
      blocks: [
        H2('hlw', 'Herz-Lungen-Wiederbelebung (HLW)'),
        P('Bei Kreislaufstillstand (keine normale Atmung) sofort mit der HLW beginnen. Nach aktuellen ERC-Leitlinien im Verhältnis <b>30 : 2</b> (Kompressionen : Beatmungen).'),
        KF(
          'Druckpunkt: Mitte des Brustkorbs (untere Sternumhälfte)',
          'Drucktiefe: 5–6 cm beim Erwachsenen',
          'Frequenz: 100–120 pro Minute',
          'Brustkorb vollständig entlasten, Unterbrechungen minimieren'),
        FIG('hlw', 'Herz-Lungen-Wiederbelebung im Verhältnis 30 : 2 (Kompressionen : Beatmungen).'),
        CO('tip', 'Nur-Drücken ist besser als Nichts', 'Wer sich eine Beatmung nicht zutraut, führt durchgehende Thoraxkompressionen durch. Entscheidend ist ununterbrochenes, kräftiges Drücken bis zum Eintreffen des Rettungsdienstes.'),
        H2('aed', 'Automatisierter Externer Defibrillator (AED)'),
        STEPS(
          'AED sofort holen lassen und einschalten',
          'Elektroden nach Bild aufkleben (rechts unter Schlüsselbein, links seitlich unter Achsel)',
          'Analyse abwarten – dabei Patient nicht berühren',
          'Bei Aufforderung Schock auslösen, danach sofort weiter drücken',
          'Anweisungen des Geräts bis zum Eintreffen des Rettungsdienstes folgen'),
        CO('danger', 'Zeit ist Leben', 'Mit jeder Minute ohne Reanimation sinkt die Überlebenswahrscheinlichkeit um ca. 10 %. Frühe HLW und frühe Defibrillation sind die entscheidenden Glieder.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'k1', title: 'Grundlagen & Ausrüstung', duration: 20,
      blocks: [
        H2('warum', 'Wann Absturzsicherung?'),
        P('Sobald an Einsatzstellen Absturzgefahr besteht (Dächer, Gruben, Silos, Brücken), muss gesichert werden. Der <b>Gerätesatz Absturzsicherung</b> dient der Sicherung von Einsatzkräften – nicht als vollwertige Höhenrettung (dafür: Höhenrettungsgruppe).'),
        CO('warn', 'Abgrenzung', 'Der Gerätesatz Absturzsicherung ist zur Sicherung und einfachen Rettung gedacht. Komplexe Rettungen aus großen Höhen/Tiefen sind Aufgabe speziell ausgebildeter Höhenretter.'),
        H2('satz', 'Gerätesatz Absturzsicherung (Auszug)'),
        UL(
          '<b>Auffanggurt</b> (Ganzkörpergurt nach EN 361)',
          '<b>Kernmantel-Dynamikseil</b> und Verbindungsmittel',
          '<b>Bandschlingen</b> zum Anschlagen',
          '<b>Karabiner</b> mit Verschlusssicherung (EN 362)',
          '<b>Abseil-/Sicherungsgerät</b> und Auffanggerät',
          'Feuerwehrhaltegurt ist <b>keine</b> Absturzsicherung!'),
        FIG('auffangsystem', 'Aufbau eines Auffangsystems: Anschlagpunkt → Verbindungsmittel mit Falldämpfer → Auffanggurt (EN 361).'),
        H2('anschlag', 'Anschlagpunkte'),
        KF(
          'Tragfähig und geprüft (im Zweifel höhere Sicherheit wählen)',
          'Möglichst hoch anschlagen → geringere Sturzhöhe',
          'Scharfe Kanten vermeiden/schützen (Kantenschutz)',
          'Pendelsturz vermeiden – möglichst senkrecht über der Person'),
        CO('danger', 'Sturzfaktor & Hängetrauma', 'Je höher der Sturzfaktor, desto größere Kräfte. Nach einem Sturz droht bei bewegungslosem Hängen im Gurt ein lebensgefährliches Hängetrauma – schnelle Rettung und richtige Lagerung sind entscheidend.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'l1', title: 'Führungssystem & Führungsvorgang', duration: 30,
      blocks: [
        H2('system', 'Das Führungssystem'),
        P('Führung ist die zielgerichtete Einflussnahme auf Menschen zur Erfüllung eines Auftrags. Die FwDV 100 beschreibt ein <b>Führungssystem</b> aus drei zusammenwirkenden Komponenten:'),
        UL(
          '<b>Führungsorganisation:</b> Aufbau der Führung (wer führt wen, Führungsstufen, Stab).',
          '<b>Führungsvorgang:</b> der methodische Ablauf des Führens (Regelkreis).',
          '<b>Führungsmittel:</b> Hilfsmittel der Führung (Kommunikation, Führungsassistenten, Kartenwerk, IT).'),
        H2('vorgang', 'Der Führungsvorgang'),
        P('Der Führungsvorgang ist ein <b>Regelkreis</b>, der ständig durchlaufen wird, solange der Einsatz läuft:'),
        STEPS(
          'Lagefeststellung – Erkundung & Kontrolle: Was ist passiert, was droht?',
          'Planung – Beurteilung & Entschluss: Möglichkeiten abwägen, entscheiden',
          'Befehlsgebung – Umsetzung: klare Aufträge erteilen',
          'zurück zur Lagefeststellung: Wirkung kontrollieren, nachsteuern'),
        CO('info', 'Regelkreis', 'Lagefeststellung → Planung → Befehlsgebung → (Kontrolle) → Lagefeststellung … Führung ist nie „fertig", sondern passt sich der sich ändernden Lage laufend an.'),
        FIG('fuehrungsvorgang', 'Der Führungsvorgang als Regelkreis – er wird durchlaufen, solange der Einsatz läuft.'),
        H2('beurteilung', 'Die Lagebeurteilung'),
        P('Kern der Planung ist die Beurteilung der Lage. Strukturhilfe – vier Kernfragen:'),
        KF(
          '<b>Gefahren:</b> Welche Gefahren bestehen für wen? (Menschen, Umwelt, Sachwerte, Einsatzkräfte)',
          '<b>Eigene Kräfte/Mittel:</b> Was habe ich, was fehlt mir?',
          '<b>Möglichkeiten:</b> Welche Handlungsoptionen gibt es? Vor-/Nachteile?',
          '<b>Entschluss:</b> Für welche Option entscheide ich mich – und warum?'),
      ],
    },
    {
      id: 'l2', title: 'Führungsstufen & Führungsorganisation', duration: 35,
      blocks: [
        H2('stufen', 'Führungsstufen A–D'),
        P('Mit wachsender Einsatzgröße wächst die Führungsorganisation. Die FwDV 100 kennt vier Führungsstufen:'),
        TBL(['Stufe', 'Umfang', 'Führung durch'],[
          ['A', 'Führung selbstständiger Trupps', 'Truppführer'],
          ['B', 'Führung mit einer Einheit (Gruppe/Staffel)', 'Gruppen-/Staffelführer'],
          ['C', 'Führung mit mehreren Einheiten (Zug)', 'Zugführer + Führungsassistent'],
          ['D', 'Führung mit Einheiten verschiedener Fachdienste', 'Verbandsführer + Führungsstab'],
        ]),
        FIG('fuehrungsstufen', 'Die vier Führungsstufen A–D wachsen mit der Einsatzgröße (FwDV 100).'),
        H2('gefahrenmatrix', 'Die Gefahrenmatrix (Merkschema)'),
        P('Zur schnellen, vollständigen Gefahreneinschätzung dient das bekannte Merkschema „<b>4 A – 1 C – 4 E</b>":'),
        MNE([{l:'A',w:'Atemgifte'},{l:'A',w:'Angst'},{l:'A',w:'Ausbreitung'},{l:'A',w:'Atomar'},{l:'C',w:'Chemisch'},{l:'E',w:'Erkrankung'},{l:'E',w:'Explosion'},{l:'E',w:'Einsturz'},{l:'E',w:'Elektrizität'}],
          'Für jede dieser Gefahren prüft die Führungskraft: Wer ist bedroht? Und leitet die passenden Maßnahmen ab.'),
        H2('stab', 'Der Führungsstab'),
        P('Bei Großschadenslagen unterstützt ein <b>Führungsstab</b> die Einsatzleitung. Sachgebiete (S1–S6):'),
        TBL(['SG', 'Aufgabe'],[
          ['S1', 'Personal / Innerer Dienst'],
          ['S2', 'Lage (Lagedarstellung, Dokumentation)'],
          ['S3', 'Einsatz (Planung, Führung der Maßnahmen)'],
          ['S4', 'Versorgung / Logistik'],
          ['S5', 'Presse- & Medienarbeit'],
          ['S6', 'Information & Kommunikation (IuK)'],
        ]),
        CO('tip', 'Führungsgrundsatz', 'Führen heißt entscheiden. Lieber eine klare, zügige Entscheidung mit 80 % Information als eine perfekte Entscheidung, die zu spät kommt. Aber: Entschluss laufend an der Lage überprüfen.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'm1', title: 'Die drei Säulen & Rettungswege', duration: 20,
      blocks: [
        H2('saeulen', 'Drei Säulen des vorbeugenden Brandschutzes'),
        UL(
          '<b>Baulicher Brandschutz:</b> Brandabschnitte, feuerbeständige Wände/Decken, Rettungswege, Baustoffklassen.',
          '<b>Anlagentechnischer Brandschutz:</b> Brandmeldeanlagen, Sprinkler, Rauch- und Wärmeabzug (RWA), Löschanlagen.',
          '<b>Organisatorischer Brandschutz:</b> Brandschutzordnung, Flucht-/Rettungspläne, Unterweisungen, Brandschutzhelfer.'),
        FIG('brandschutzsaeulen', 'Die drei Säulen des vorbeugenden Brandschutzes: baulich, anlagentechnisch und organisatorisch.'),
        H2('rettungswege', 'Rettungswege'),
        DEF('Erster & zweiter Rettungsweg', 'Aufenthaltsräume benötigen i. d. R. zwei voneinander unabhängige Rettungswege. Der erste ist meist der bauliche (Treppenraum), der zweite kann über Rettungsgeräte der Feuerwehr (Drehleiter) sichergestellt werden.'),
        KF(
          'Rettungswege müssen frei und benutzbar sein',
          'Notausgänge nicht verstellen/verschließen',
          'Feuerwehrzufahrten & Aufstellflächen freihalten',
          'Fluchtwegkennzeichnung nach ASR A1.3 beachten'),
        CO('warn', 'Freihalten von Zufahrten', 'Zugeparkte Feuerwehrzufahrten kosten wertvolle Minuten und Menschenleben. Sie sind rechtlich geschützt und dürfen nicht blockiert werden.'),
      ],
    },
    {
      id: 'm2', title: 'Anlagentechnik & Feuerwehrpläne', duration: 20,
      blocks: [
        H2('bma', 'Brandmeldeanlagen (BMA)'),
        P('Eine BMA erkennt Brände frühzeitig (Rauch-, Wärme-, Flammenmelder) und alarmiert automatisch die Feuerwehr über die Leitstelle. Zentrales Element vor Ort:'),
        UL(
          '<b>Brandmelderzentrale (BMZ):</b> wertet Melder aus, steuert Alarmierung.',
          '<b>Feuerwehr-Bedienfeld (FBF)</b> und <b>Feuerwehr-Anzeigetableau (FAT):</b> Bedienung/Anzeige für die Feuerwehr.',
          '<b>Feuerwehr-Schlüsseldepot (FSD):</b> ermöglicht gewaltfreien Zutritt.'),
        H2('loeschanlagen', 'Ortsfeste Löschanlagen'),
        TBL(['Anlage', 'Prinzip'],[
          ['Sprinkleranlage', 'selbsttätiges Auslösen einzelner Sprinkler bei Hitze'],
          ['Gaslöschanlage', 'Sauerstoffverdrängung – z. B. Serverräume (kein Wasserschaden)'],
          ['Schaumlöschanlage', 'Flüssigkeitsbrände in Industrie/Tanklagern'],
          ['RWA', 'Rauch- und Wärmeabzug – hält Rettungswege raucharm'],
        ]),
        H2('plaene', 'Feuerwehrpläne'),
        P('Feuerwehrpläne nach DIN 14095 geben der einrückenden Einheit einen schnellen Überblick über Objekt, Zufahrten, Gefahren, Löschwasser und Absperreinrichtungen. Sie liegen an definierten Stellen (z. B. FSD, BMZ) bereit.'),
        CO('tip', 'Objektkenntnis', 'Wer sein Ausrückgebiet kennt – Sonderobjekte, Pflegeheime, Industrie, Löschwasserquellen – gewinnt im Ernstfall entscheidende Zeit. Objektbegehungen sind gelebter Brandschutz.'),
      ],
    },
  ],
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
  lessons: [
    {
      id: 'n1', title: 'Aufgaben & Verantwortung', duration: 15,
      blocks: [
        H2('rolle', 'Wer ist der Maschinist?'),
        P('Der Maschinist ist Fahrer des Feuerwehrfahrzeugs und bedient die eingebauten und tragbaren Aggregate – vor allem die <b>Feuerlöschkreiselpumpe</b>. Er ist eine Schlüsselfunktion der Gruppe: Ohne funktionierende Wasserförderung steht der Angriffstrupp ohne Wasser da.'),
        KF(
          'Führt das Fahrzeug sicher zur Einsatzstelle (Sonder- und Wegerechte)',
          'Bedient Pumpe und Aggregate, überwacht Betriebswerte',
          'Sichert die Einsatzstelle fahrzeugseitig (Verkehr, Beleuchtung)',
          'Verantwortlich für Pflege, Prüfung und Einsatzbereitschaft'),
        CO('warn', 'Sonder- & Wegerecht', 'Blaulicht + Martinshorn (§ 38 StVO) verpflichten andere zur „freien Bahn", entbinden aber nicht von der Sorgfaltspflicht. Der Maschinist muss defensiv und vorausschauend fahren – die schnellste Anfahrt nützt nichts, wenn die Gruppe verunglückt.'),
        H2('voraussetzung', 'Voraussetzungen'),
        P('Für die Funktion Maschinist gelten: gültige Fahrerlaubnis der passenden Klasse (oft C/C1 bzw. Feuerwehrführerschein), abgeschlossene Truppausbildung und der Lehrgang „Maschinisten für Löschfahrzeuge" nach FwDV 2.'),
      ],
    },
    {
      id: 'n2', title: 'Die Feuerlöschkreiselpumpe', duration: 25,
      blocks: [
        H2('prinzip', 'Funktionsprinzip'),
        P('Die Feuerlöschkreiselpumpe (FP) erzeugt Druck durch ein schnell drehendes <b>Laufrad</b>: Das Wasser wird durch die Fliehkraft nach außen geschleudert, wodurch im Zentrum Unterdruck (Sog) und am Rand Überdruck entsteht. Da eine Kreiselpumpe nicht selbstständig ansaugt, braucht sie eine <b>Entlüftungseinrichtung</b>.'),
        DEF('Bezeichnung FPN 10-2000', 'FP = Feuerlöschpumpe, N = Normaldruck, 10 = Nenndruck 10 bar, 2000 = Nennförderstrom 2000 l/min. Beim LF 20 verbaut.'),
        FIG('kreiselpumpe', 'Feuerlöschkreiselpumpe: Das Laufrad schleudert das Wasser nach außen – Sog an der Saugseite, Druck an der Druckseite.'),
        H2('ansaugen', 'Ansaugvorgang aus offenem Gewässer'),
        STEPS(
          'Saugleitung kuppeln, Saugkorb mit Ventil und Halteleine sichern',
          'Alle Abgänge und Entlüftung schließen',
          'Entlüftungseinrichtung (Trokomat/Kolbenpumpe) betätigen',
          'Wenn Wasser ansteht (Manometer): Pumpe auf Drehzahl bringen',
          'Druckabgang langsam öffnen, Betriebsdruck einregeln'),
        H2('kavitation', 'Kavitation vermeiden'),
        CO('danger', 'Kavitation', 'Bei zu hoher Saughöhe, zu hoher Drehzahl oder verstopftem Saugkorb fällt der Druck lokal unter den Dampfdruck – es bilden sich Dampfblasen, die schlagartig implodieren. Folgen: Leistungseinbruch, ratterndes Geräusch, Materialschäden am Laufrad. Praktische Grenze der geodätischen Saughöhe: ca. 7,5 m.'),
        TBL(['Betriebswert', 'Richtwert'],[
          ['Nenndruck Normaldruckpumpe', '10 bar'],
          ['Eingangsdruck Folgepumpe (Förderstrecke)', 'min. 1,5 bar halten'],
          ['Druckverlust je 10 m Höhe', 'ca. 1 bar'],
          ['Max. praktische Saughöhe', 'ca. 7,5 m'],
        ]),
      ],
    },
    {
      id: 'n3', title: 'Aggregate & Stromerzeuger', duration: 15,
      blocks: [
        H2('strom', 'Tragbarer Stromerzeuger'),
        P('Stromerzeuger versorgen Beleuchtung, Rettungsgeräte, Lüfter und Tauchpumpen. Der Maschinist überwacht Auslastung, Tankinhalt und die elektrische Sicherheit.'),
        KF(
          'Schutzmaßnahme meist „Schutztrennung mit Isolationsüberwachung"',
          'Nicht überlasten – Nennleistung (kVA) beachten',
          'Ausreichend Abstand/Belüftung (Abgase – CO-Gefahr!)',
          'Kabeltrommeln vollständig abrollen (Wärmestau vermeiden)'),
        CO('danger', 'Abgase', 'Verbrennungsmotoren niemals in geschlossenen Räumen ohne Abgasführung betreiben – Kohlenstoffmonoxid ist tödlich. Auch tragbare Pumpen (TS) und Lüfter mit Verbrennungsmotor betreffen das.'),
        H2('ts', 'Tragkraftspritze (TS)'),
        P('Die Tragkraftspritze ist eine tragbare Feuerlöschkreiselpumpe mit eigenem Motor (z. B. PFPN 10-1000). Sie ermöglicht die Wasserentnahme dort, wo das Fahrzeug nicht hinkommt – etwa am Löschteich.'),
        H2('pflege', 'Pflege & Prüfung'),
        P('Regelmäßige Prüfungen (Saugprobe/Trockensaugprobe, Dichtheit, Förderleistung) und Pflege sichern die Einsatzbereitschaft. Nach jedem Einsatz: durchspülen (besonders nach Schmutz-/Salzwasser), auf Frostschutz achten.'),
      ],
    },
  ],
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
