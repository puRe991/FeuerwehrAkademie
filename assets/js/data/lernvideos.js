/* =========================================================================
   LERNVIDEOS — kuratierte YouTube-Lernvideos, nach Themen gegliedert.

   Datenschutz: Die Videos werden erst nach Klick über youtube-nocookie.com
   eingebunden (Click-to-Load, siehe views/lernvideos.js). Bis dahin lädt
   nur das Vorschaubild – vor der Einwilligung wird kein Tracking-Cookie
   gesetzt.

   ► youtubeId eintragen: die 11-stellige ID aus der YouTube-URL, also der
     Teil hinter „v=" bzw. „youtu.be/". Beispiel:
     https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: 'dQw4w9WgXcQ'
     Die unten hinterlegten IDs sind PLATZHALTER und durch echte, geprüfte
     Lernvideos zu ersetzen. Ohne gültige ID zeigt die Karte ein neutrales
     Themen-Panel statt eines Vorschaubilds.
   ========================================================================= */

/* Eigene Video-Kategorien (unabhängig von den Modul-Kategorien). */
export const VIDEO_CATEGORIES = {
  grundtaetigkeiten: { label: 'Grundtätigkeiten',   color: '#d81f26', icon: 'flag'    },
  geraetekunde:      { label: 'Gerätekunde',        color: '#1e5fa8', icon: 'wrench'  },
  fahrzeugkunde:     { label: 'Fahrzeugkunde',      color: '#16607a', icon: 'truck'   },
  loeschtechnik:     { label: 'Löschtechnik & Wasserförderung', color: '#0e8a8a', icon: 'water' },
  atemschutz:        { label: 'Atemschutz',         color: '#8e44ad', icon: 'mask'    },
  thl:               { label: 'Technische Hilfeleistung', color: '#e67e22', icon: 'bolt' },
  taktik:            { label: 'Führung & Taktik',   color: '#c0392b', icon: 'compass' },
  erklaervideos:     { label: 'Grundlagen & Erklärvideos', color: '#2e9e5b', icon: 'book' },
  sprechfunk:        { label: 'Sprechfunk & Digitalfunk', color: '#3949ab', icon: 'radio' },
  gefahrgut:         { label: 'ABC-Gefahrstoffe',    color: '#c9a227', icon: 'hazmat'  },
  erstehilfe:        { label: 'Erste Hilfe',         color: '#43a047', icon: 'heart'   },
  absturzsicherung:  { label: 'Absturzsicherung',    color: '#5d4037', icon: 'rope'    },
  brandschutz:       { label: 'Vorbeugender Brandschutz', color: '#78909c', icon: 'shield' },
  maschinist:        { label: 'Maschinist',          color: '#37474f', icon: 'wrench'  },
  baukunde:          { label: 'Objekt- & Baukunde',  color: '#8d6e63', icon: 'building' },
  arbeitsschutz:     { label: 'Arbeits- & Unfallschutz', color: '#d68910', icon: 'helmet' },
  digital:           { label: 'Digitale Einsatzunterstützung', color: '#00acc1', icon: 'target' },
  rechtsgrundlagen:  { label: 'Rechtsgrundlagen & Organisation', color: '#455a64', icon: 'users' },
};

/* Videos. minutes = Länge in Minuten (für die Anzeige). */
export const LERNVIDEOS = [
  {
    id: 'lv-knoten-mastwurf',
    title: 'Mastwurf gelegt und gestochen',
    category: 'grundtaetigkeiten',
    youtubeId: 'Cct4yRathZo',
    minutes: 6,
    desc: 'Der Mastwurf als Anschlagknoten – Schritt für Schritt gelegt und am Objekt gestochen. Grundlage für Gerätekunde und Absturzsicherung.',
  },
  {
    id: 'lv-saugleitung-kuppeln',
    title: 'Saugleitung kuppeln und zu Wasser bringen',
    category: 'grundtaetigkeiten',
    youtubeId: 'OtmXiOCqFsM',
    minutes: 9,
    desc: 'Ablauf der offenen Wasserentnahme: Saugleitung zusammenkuppeln, mit Halte- und Ventilleine sichern und zu Wasser bringen.',
  },
  {
    id: 'lv-tragkraftspritze',
    title: 'Tragkraftspritze PFPN 10-1000 im Überblick',
    category: 'geraetekunde',
    youtubeId: 'GebA7fWyRdw',
    minutes: 11,
    desc: 'Aufbau, Bedienelemente und Inbetriebnahme der Tragkraftspritze. Entlüftung, Druckaufbau und typische Fehlerquellen.',
  },
  {
    id: 'lv-strahlrohre',
    title: 'Strahlrohre und Wurfweiten richtig einsetzen',
    category: 'geraetekunde',
    youtubeId: 'cs4_OKJcFSc',
    minutes: 7,
    desc: 'Hohlstrahlrohr vs. Mehrzweckstrahlrohr: Durchflussmengen, Sprüh- und Vollstrahl sowie taktische Anwendung.',
  },
  {
    id: 'lv-hlf-beladung',
    title: 'Beladung eines HLF 20 – die wichtigsten Geräteräume',
    category: 'fahrzeugkunde',
    youtubeId: 'OZNEXqvc2Ls',
    minutes: 13,
    desc: 'Rundgang um ein Hilfeleistungslöschgruppenfahrzeug: Geräteräume, Gruppierung der Beladung und Standort der wichtigsten Geräte.',
  },
  {
    id: 'lv-wasserfoerderung-lange-strecke',
    title: 'Wasserförderung über lange Wegstrecke',
    category: 'loeschtechnik',
    youtubeId: 'XpYzq8O60YQ',
    minutes: 14,
    desc: 'Aufbau einer Förderstrecke mit Verstärkerpumpen: Druckverluste, Pumpenabstände und Koordination über Funk.',
  },
  {
    id: 'lv-loeschlehre',
    title: 'Löschlehre – Verbrennung und Löschwirkungen',
    category: 'loeschtechnik',
    youtubeId: 'M4MEh0PC3r4',
    minutes: 8,
    desc: 'Verbrennungsdreieck, Brandklassen und die vier Löschwirkungen. Warum welches Löschmittel zu welchem Brand passt.',
  },
  {
    id: 'lv-atemschutz-anlegen',
    title: 'Pressluftatmer anlegen und Einsatzkurzprüfung',
    category: 'atemschutz',
    youtubeId: 't____7ajaNM',
    minutes: 10,
    desc: 'Anlegen des umluftunabhängigen Atemschutzgeräts, Dichtprobe der Maske und Einsatzkurzprüfung vor dem Vorgehen.',
  },
  {
    id: 'lv-atemschutz-notfall',
    title: 'Atemschutznotfall – Ablauf und Rettung',
    category: 'atemschutz',
    youtubeId: 'ck97TJp41kU',
    minutes: 12,
    desc: 'Mayday-Meldung, Aufgaben des Sicherheitstrupps und Vorgehen bei einem verunfallten Atemschutzgeräteträger.',
  },
  {
    id: 'lv-thl-vu-patientengerecht',
    title: 'Verkehrsunfall – patientengerechte Rettung',
    category: 'thl',
    youtubeId: 'NhZuwO2Cmp8',
    minutes: 15,
    desc: 'Absichern, Zugang schaffen, Fahrzeug stabilisieren und schonende Befreiung im Zusammenspiel mit dem Rettungsdienst.',
  },
  {
    id: 'lv-thl-hydraulik',
    title: 'Hydraulische Rettungsgeräte sicher bedienen',
    category: 'thl',
    youtubeId: 'Fy5F9y5MVp4',
    minutes: 9,
    desc: 'Spreizer, Schere und Rettungszylinder: Ansatzpunkte, Kräfte und Sicherheitsregeln beim Arbeiten am Fahrzeug.',
  },
  {
    id: 'lv-fuehrungsvorgang',
    title: 'Der Führungsvorgang nach FwDV 100',
    category: 'taktik',
    youtubeId: '-L04eSw1KzY',
    minutes: 16,
    desc: 'Lagefeststellung, Planung und Befehlsgebung als Regelkreis. Grundlage jeder strukturierten Einsatzführung.',
  },
  {
    id: 'lv-einheiten-fwdv3',
    title: 'Die Gruppe im Löscheinsatz (FwDV 3)',
    category: 'taktik',
    youtubeId: 'LCxYmSe1YG4',
    minutes: 12,
    desc: 'Sitzordnung, Funktionen und Aufgabenverteilung der taktischen Einheiten vom Trupp bis zum Zug.',
  },
  {
    id: 'lv-fwdv-ueberblick',
    title: 'Feuerwehr-Dienstvorschriften im Überblick',
    category: 'erklaervideos',
    youtubeId: '',
    minutes: 7,
    desc: 'Was regeln die wichtigsten FwDV? Ein kompakter Einstieg in Aufbau und Zweck der Dienstvorschriften.',
  },
  {
    id: 'lv-atemgifte',
    title: 'Atemgifte und Brandrauch verstehen',
    category: 'erklaervideos',
    youtubeId: 'e47g4MEgblI',
    minutes: 8,
    desc: 'Warum Brandrauch so gefährlich ist: Reiz- und Erstickungsgifte, Rauchgasdurchzündung und die Folgen für die Eigensicherung.',
  },
  {
    id: 'lv-sprechfunk-grundlagen',
    title: 'Sprechfunk – Grundregeln für den Funkverkehr',
    category: 'sprechfunk',
    youtubeId: 'ZNKeZGl2tv0',
    minutes: 9,
    desc: 'Die wichtigsten Regeln für klaren Funkverkehr: Wer meldet sich wie, was gehört in eine Meldung und was hat im Funk nichts verloren.',
  },
  {
    id: 'lv-digitalfunk-einstieg',
    title: 'Digitalfunk – Einstieg und Vergleich zum Analogfunk',
    category: 'sprechfunk',
    youtubeId: 'forv2deiuzs',
    minutes: 10,
    desc: 'Was sich beim Umstieg von Analog- auf Digitalfunk (BOS) ändert: Bedienung, Gruppenruf und die wichtigsten Funktionen im Überblick.',
  },
  {
    id: 'lv-gams-regel',
    title: 'Die GAMS-Regel bei Gefahrguteinsätzen',
    category: 'gefahrgut',
    youtubeId: 'DjxCzMDIEG8',
    minutes: 8,
    desc: 'Gefahr erkennen, Absperren, Menschen retten, Spezialkräfte anfordern: die GAMS-Regel als Handlungsschema nach FwDV 500.',
  },
  {
    id: 'lv-rettungskette-bls',
    title: 'Rettungskette und Basismaßnahmen (BLS)',
    category: 'erstehilfe',
    youtubeId: 'eYx89EfgV1U',
    minutes: 11,
    desc: 'Notruf, stabile Seitenlage, Herzdruckmassage und AED-Einsatz: die Basismaßnahmen der Ersten Hilfe nach aktueller Leitlinie.',
  },
  {
    id: 'lv-reanimation-aed',
    title: 'Reanimation mit AED',
    category: 'erstehilfe',
    youtubeId: 'zNDZQHKWca8',
    minutes: 7,
    desc: 'Ablauf der Herz-Lungen-Wiederbelebung mit automatisiertem externem Defibrillator – Schritt für Schritt erklärt.',
  },
  {
    id: 'lv-psaga-anlegen',
    title: 'Persönliche Schutzausrüstung gegen Absturz (PSAgA) anlegen',
    category: 'absturzsicherung',
    youtubeId: 'rEFixt7lae8',
    minutes: 9,
    desc: 'Korrektes Anlegen von Auffanggurt, Verbindungsmitteln und Falldämpfer – Grundlage für sicheres Arbeiten in der Höhe.',
  },
  {
    id: 'lv-brandschutz-grundlagen',
    title: 'Vorbeugender Brandschutz – Grundlagen und Aufbau',
    category: 'brandschutz',
    youtubeId: '96UXwdECb2Q',
    minutes: 10,
    desc: 'Die drei Säulen des Brandschutzes und wie baulicher, anlagentechnischer und organisatorischer Brandschutz zusammenwirken.',
  },
  {
    id: 'lv-rettungswege',
    title: 'Rettungswege im vorbeugenden Brandschutz',
    category: 'brandschutz',
    youtubeId: 'WbcXNduAPNI',
    minutes: 8,
    desc: 'Erster und zweiter Rettungsweg, Feuerwehrpläne nach DIN 14095 und warum freie Rettungswege im Ernstfall entscheidend sind.',
  },
  {
    id: 'lv-feuerloeschkreiselpumpe',
    title: 'Die Feuerlöschkreiselpumpe – Aufbau und Funktion',
    category: 'maschinist',
    youtubeId: 'cCgh_4Sw3w4',
    minutes: 12,
    desc: 'Wie die fest im Fahrzeug verbaute Kreiselpumpe funktioniert: Ansaugen, Entlüften, Druckaufbau und Bedienelemente am Pumpenstand.',
  },
  {
    id: 'lv-baukunde-feuerwiderstand',
    title: 'Baulicher Brandschutz und Feuerwiderstandsklassen',
    category: 'baukunde',
    youtubeId: 'Baa5jQ50E6U',
    minutes: 9,
    desc: 'Wie Baustoffe wie Holz, Stahl und Beton im Brandfall reagieren und was Feuerwiderstandsklassen für den Einsatz bedeuten.',
  },
  {
    id: 'lv-unfallverhuetung',
    title: 'Unfallverhütung im Feuerwehrdienst',
    category: 'arbeitsschutz',
    youtubeId: 'EvrpGQiR7Ag',
    minutes: 10,
    desc: 'Typische Gefahrenquellen im Feuerwehrdienst und wie sich Unfälle bei Übung und Einsatz durch richtiges Verhalten vermeiden lassen.',
  },
  {
    id: 'lv-einsatzstellenhygiene',
    title: 'Einsatzstellenhygiene bei der Feuerwehr',
    category: 'arbeitsschutz',
    youtubeId: '-6aSUQwk6vQ',
    minutes: 7,
    desc: 'Unsichtbare Gefahren durch Ruß und Schadstoffe: warum Kontaminationsschutz und Hygiene an der Einsatzstelle so wichtig sind.',
  },
  {
    id: 'lv-waermebildkamera',
    title: 'Wärmebildkameras bei der Feuerwehr: Technik und Einsatz',
    category: 'digital',
    youtubeId: 'wEjKvwiNKfw',
    minutes: 11,
    desc: 'Wie Wärmebildkameras funktionieren und beim Innenangriff helfen, Brandherde und vermisste Personen schneller zu finden.',
  },
  {
    id: 'lv-drohnen-einsatz',
    title: 'Drohnen im Feuerwehreinsatz',
    category: 'digital',
    youtubeId: '2Xxq82w95gc',
    minutes: 9,
    desc: 'Wie unbemannte Fluggeräte die Lageerkundung bei Großschadenslagen verändern – vom ersten Überblick bis zur Personensuche.',
  },
  {
    id: 'lv-aufgaben-feuerwehr',
    title: 'Die Aufgaben der Feuerwehr',
    category: 'rechtsgrundlagen',
    youtubeId: 'd5ehpNEa6uI',
    minutes: 6,
    desc: 'Abwehrender und vorbeugender Brandschutz, Technische Hilfeleistung und Rettungsdienst: die gesetzlichen Aufgaben der Feuerwehr im Überblick.',
  },
  {
    id: 'lv-dienstgrade',
    title: 'Dienstgrade bei der Feuerwehr',
    category: 'rechtsgrundlagen',
    youtubeId: 'dE25a-OZrRc',
    minutes: 8,
    desc: 'Vom Feuerwehrmann bis zum Kreisbrandmeister: Laufbahnen, Dienstgrade und wer welche Funktion im Einsatz übernimmt.',
  },
];

/* Schnellzugriff nach ID. */
export const LERNVIDEO_BY_ID = Object.fromEntries(LERNVIDEOS.map(v => [v.id, v]));

/* Anzahl Videos je Kategorie (nur Kategorien mit Inhalt). */
export function videosByCategory() {
  const map = {};
  for (const v of LERNVIDEOS) (map[v.category] ||= []).push(v);
  return map;
}
