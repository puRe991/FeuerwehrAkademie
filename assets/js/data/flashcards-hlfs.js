/* =========================================================================
   KARTEIKARTEN — HLFS-Merkkarten.

   Kuratierte Merk-/Faustwert-Karten zu den Kernthemen des HLFS-Fragen-
   katalogs (Brandlehre, Schaum, Gerätekunde, FwDV 3, Gefahrgut, Atemschutz,
   Erste Hilfe, Absturzsicherung, UVV). Werden in flashcards.js über
   buildCards() eingespielt; moduleCode/cat werden dort aus dem Modul
   abgeleitet. IDs sind stabil (Leitner-Fortschritt bleibt erhalten).
   ========================================================================= */

export const HLFS_CARDS = [
  /* --- Brandlehre & Löschen (B) --- */
  { id:'hlfs-fc-verbrennungsdreieck', moduleId:'b-brennen-loeschen',
    front:'Welche drei Voraussetzungen bilden das <b>Verbrennungsdreieck</b>?',
    back:'Brennbarer Stoff + Sauerstoff + Zündenergie (Wärme) – zusätzlich im richtigen Mengenverhältnis. Fehlt ein Faktor, ist kein Brennen möglich.' },
  { id:'hlfs-fc-brandklassen', moduleId:'b-brennen-loeschen',
    front:'Wofür stehen die <b>Brandklassen A, B, C, D und F</b>?',
    back:'A = feste Stoffe · B = flüssige/flüssig werdende Stoffe · C = Gase · D = Metalle · F = Speiseöle/-fette in Frittier- und Fettbackgeräten.' },
  { id:'hlfs-fc-loeschwirkungen', moduleId:'b-brennen-loeschen',
    front:'Welche <b>Löschwirkungen/-verfahren</b> gibt es?',
    back:'Abkühlen (Wärme entziehen) · Ersticken (Sauerstoff verdrängen) · Trennen/Abmagern (Brennstoff entziehen) · antikatalytischer Effekt (Kettenabbruch, z. B. Pulver).' },
  { id:'hlfs-fc-verschaeumung', moduleId:'b-brennen-loeschen',
    front:'Wie sind <b>Schwer-, Mittel- und Leichtschaum</b> über die Verschäumungszahl (VZ) abgegrenzt?',
    back:'Schwerschaum VZ < 20 · Mittelschaum VZ 20–200 · Leichtschaum VZ > 200. Luftschaummenge = Wasser-Schaummittel-Gemisch × VZ.' },
  { id:'hlfs-fc-zumischer', moduleId:'b-brennen-loeschen',
    front:'Was sagt die Zahl beim Zumischer/Schaumstrahlrohr aus (z. B. <b>Z 4</b>)?',
    back:'Die Zahl × 100 = Gemischdurchfluss in l/min. Z 2 = 200 l/min, Z 4 = 400 l/min, Z 8 = 800 l/min. Das „R" (Z 4 R) steht für Zumisch-Regelung.' },

  /* --- Gerätekunde: Strahlrohre, Schläuche, Leitern, PSA (D) --- */
  { id:'hlfs-fc-strahlrohr-faustwerte', moduleId:'d-geraetekunde',
    front:'Wasserlieferung der Strahlrohre – <b>Faustwerte bei 5 bar</b> (ohne / mit Mundstück)?',
    back:'BM ≈ 800 / 400 l/min · CM ≈ 200 / 100 l/min · DM ≈ 50 / 25 l/min. Wassermenge = l/min × Zeit.' },
  { id:'hlfs-fc-schlauch-durchmesser', moduleId:'d-geraetekunde',
    front:'Welche <b>Innendurchmesser</b> haben die genormten Druckschläuche A, B, C, D?',
    back:'A = 110 mm · B = 75 mm · C = 52 mm (auch 42 mm) · D = 25 mm.' },
  { id:'hlfs-fc-schlauch-laengen', moduleId:'d-geraetekunde',
    front:'Welche genormten <b>Längen</b> haben B-, C- und D-Druckschläuche?',
    back:'B = 5 m und 20 m · C = 15 m und 30 m · D = 5 m und 15 m.' },
  { id:'hlfs-fc-anstellwinkel', moduleId:'d-geraetekunde',
    front:'Welchen <b>Anstellwinkel</b> muss eine angestellte tragbare Leiter haben?',
    back:'65° bis 75° (Faustprobe/„Ellenbogenprobe"). Die Leiter muss beim Übersteigen mind. 1 m (≈ 3 Sprossen) überstehen.' },
  { id:'hlfs-fc-leitern-besteigen', moduleId:'d-geraetekunde',
    front:'Wie viele Personen dürfen <b>Steckleiter</b> bzw. <b>dreiteilige Schiebleiter</b> gleichzeitig besteigen?',
    back:'Steckleiter: nur 1 Person. Dreiteilige Schiebleiter: 2 Personen. Reichweite: Steckleiter bis 1. OG, dreiteilige Schiebleiter bis 2. OG (≈ 7,5 m).' },
  { id:'hlfs-fc-mindestschutz', moduleId:'d-geraetekunde',
    front:'Was gehört zur <b>persönlichen Mindestschutzausrüstung</b> (FwDV 1)?',
    back:'Feuerwehrschutzanzug · Helm mit Nackenschutz · Schutzhandschuhe · Schutzschuhwerk · Feuerwehr-Haltegurt · Feuerwehrleine mit Beutel.' },

  /* --- FwDV 3: Einheiten & Aufgaben (E / G) --- */
  { id:'hlfs-fc-taktische-einheiten', moduleId:'e-loescheinsatz',
    front:'Stärke von <b>Trupp, Staffel und Gruppe</b>?',
    back:'Trupp = 0/2 (Führer + Truppmann) · Staffel = 1/5/6 · Gruppe = 1/8/9. Die Gruppe ist die taktische Grundeinheit. Selbstständiger Trupp = Truppführer + Maschinist + Truppmann.' },
  { id:'hlfs-fc-fwdv3-loesch', moduleId:'e-loescheinsatz',
    front:'Aufgaben der Trupps im <b>Löscheinsatz</b> (FwDV 3)?',
    back:'Angriffstrupp: rettet, setzt Verteiler, nimmt das 1. Rohr vor. Wassertrupp: stellt die Wasserversorgung her (wird bei Atemschutz Sicherheitstrupp). Schlauchtrupp: verlegt Schläuche, unterstützt.' },
  { id:'hlfs-fc-fwdv3-thl', moduleId:'g-technische-hilfe',
    front:'Aufgaben der Trupps im <b>Hilfeleistungseinsatz</b> (FwDV 3)?',
    back:'Angriffstrupp: Rettung. Wassertrupp: Sicherung. Schlauchtrupp: Gerätebereitstellung.' },
  { id:'hlfs-fc-gefahren', moduleId:'e-loescheinsatz',
    front:'Wie lautet die Merkregel zu den <b>Gefahren der Einsatzstelle</b> (4A-1C-4E)?',
    back:'4A: Atemgifte, Angstreaktion, Ausbreitung, Atomare Gefahren · 1C: Chemische Gefahren · 4E: Erkrankung/Verletzung, Explosion, Einsturz, Elektrizität.' },

  /* --- Gefahrgut / ABC (I) --- */
  { id:'hlfs-fc-gams', moduleId:'i-gefahrgut',
    front:'Wofür steht die <b>GAMS-Regel</b> (FwDV 500)?',
    back:'G = Gefahr erkennen · A = Absperren · M = Menschenrettung · S = Spezialkräfte alarmieren. Erstmaßnahmen der Ersteinheit im ABC-Einsatz.' },
  { id:'hlfs-fc-warntafel', moduleId:'i-gefahrgut',
    front:'Wie ist die orangefarbene <b>Warntafel</b> aufgebaut, und was bedeutet ein „X"?',
    back:'Oben: Gefahrnummer (Kemler). Unten: UN-Nummer (Stoffnummer). Verdoppelte Ziffer = Gefahrerhöhung. Vorangestelltes „X": Stoff reagiert gefährlich mit Wasser – kein Wasser einsetzen.' },
  { id:'hlfs-fc-3a-atemschutz', moduleId:'i-gefahrgut',
    front:'Wie schützt man sich vor der <b>Einwirkung von GABC-Stoffen</b>?',
    back:'Gegen äußere Einwirkung: Abstand, Abschirmung, Aufenthaltsdauer begrenzen (3 A). Gegen Inkorporation (Aufnahme in den Körper): umluftunabhängiger Atemschutz.' },

  /* --- Atemschutz (F) --- */
  { id:'hlfs-fc-pressluftatmer', moduleId:'f-atemschutz',
    front:'Merkwerte <b>Pressluftatmer</b>: Warnsignal, Einsatzbereitschaft, Luftvorrat?',
    back:'Restdruckwarnung bei 50–60 bar · Einsatzbereit ≥ 90 % (300-bar-Gerät ≥ 270 bar) · Luftvorrat bei mittlerer Belastung ≈ 30–40 min.' },
  { id:'hlfs-fc-atemgiftgruppen', moduleId:'f-atemschutz',
    front:'In welche drei Gruppen werden <b>Atemgifte</b> eingeteilt?',
    back:'1) erstickende Wirkung (z. B. CO₂, N₂) · 2) Reiz- und Ätzwirkung (z. B. Chlor) · 3) Wirkung auf Blut, Nerven und Zellen (z. B. CO, Blausäure).' },

  /* --- Erste Hilfe (J) --- */
  { id:'hlfs-fc-reanimation', moduleId:'j-erste-hilfe',
    front:'Kennwerte der <b>Herz-Lungen-Wiederbelebung</b> beim Erwachsenen?',
    back:'Rhythmus 30 : 2 (30 Herzdruckmassagen, 2 Beatmungen) · Drucktiefe 5–6 cm · Frequenz 100–120/min.' },
  { id:'hlfs-fc-ssl', moduleId:'j-erste-hilfe',
    front:'Wann bringt man eine Person in die <b>stabile Seitenlage</b>?',
    back:'Bei Bewusstlosigkeit mit vorhandener Atmung – so bleiben die Atemwege frei. Danach: Wärmeerhalt und laufende Kontrolle.' },

  /* --- Absturzsicherung (K) --- */
  { id:'hlfs-fc-feuerwehrleine', moduleId:'k-absturzsicherung',
    front:'Womit wird die <b>Feuerwehrleine an einem Festpunkt</b> angeschlagen?',
    back:'Mit einem Mastwurf, gesichert durch einen Spierenstich. Der Anschlagpunkt muss oberhalb des Feuerwehr-Haltegurtes liegen.' },

  /* --- Arbeits-/Unfallschutz (P) --- */
  { id:'hlfs-fc-uvv', moduleId:'p-arbeitsschutz',
    front:'Kernpunkte der <b>UVV Feuerwehren (DGUV-Vorschrift 49)</b>?',
    back:'Unterweisung mind. 1×/Jahr · Träger in Hessen: Unfallkasse Hessen (UKH) · Geräte nach jeder Benutzung: Sicht- und Funktionsprüfung · immer angemessene PSA tragen.' },
  { id:'hlfs-fc-strom-abstaende', moduleId:'p-arbeitsschutz',
    front:'<b>Sicherheitsabstände zu Strom</b> mit dem Löschstrahl (DIN VDE 0132)?',
    back:'Bis 1000 V (Niederspannung): 1 m · bis 110 kV: 3 m · bis 220 kV: 4 m · über 220 kV: 5 m.' },
];
