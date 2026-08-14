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
];

/* Schnellzugriff nach ID. */
export const LERNVIDEO_BY_ID = Object.fromEntries(LERNVIDEOS.map(v => [v.id, v]));

/* Anzahl Videos je Kategorie (nur Kategorien mit Inhalt). */
export function videosByCategory() {
  const map = {};
  for (const v of LERNVIDEOS) (map[v.category] ||= []).push(v);
  return map;
}
