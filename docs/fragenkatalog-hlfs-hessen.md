# HLFS-Fragenkatalog Hessen – Analyse & Integration

> Auswertung des **Fragenkatalogs zur Hessischen Feuerwehrleistungsübung**
> (Hessische Landesfeuerwehrschule, Stand **Oktober 2021**) und Ableitung,
> was wir davon für unsere Fragen, Prüfungen und Übungen übernehmen bzw.
> ergänzen können.
>
> Quelle: <https://hlfs.hessen.de/sites/hlfs.hessen.de/files/2022-09/Fragenkatalog%202021.pdf>

---

## 1. Was ist das für ein Katalog?

- **Herausgeber:** Hessische Landesfeuerwehrschule (HLFS).
- **Zweck:** Fragenpool der **Hessischen Feuerwehrleistungsübung** für die
  **Kreis- und Bezirksebene** – ein Mannschafts-Bewerb (vergleichbar mit
  Leistungsabzeichen/-spange), bei dem der schriftliche Fragenteil **eine von
  mehreren, überwiegend praktischen Stationen** ist.
- **Umfang:** **679 Fragen** in **23 Ausbildungseinheiten**.
- **Format:** **Single-Choice**, je Frage **genau 3 Antwortmöglichkeiten**,
  „Es ist nur eine Antwortmöglichkeit richtig!".
- **Wichtig:** Der PDF-Bogen ist ein **Blanko-Katalog ohne markierte Lösungen**
  (leere Ankreuzkästchen). Die richtigen Antworten stehen **nicht** im Dokument.

**Konsequenz für uns:** Fragetexte und Optionen sind übernehmbar; die
**Lösung und die Erklärung mussten wir fachlich selbst ergänzen** (auf Basis
der FwDV, der DGUV-Vorschrift 49 „UVV Feuerwehren" und der einschlägigen
Normen). Genau so ist es umgesetzt und in den Dateien dokumentiert.

---

## 2. Die 23 Ausbildungseinheiten → unsere Module

| HLFS-Ausbildungseinheit | Σ Fragen | Unser Modul |
|---|---:|---|
| ABC-Gefahrstoffe | 31 | **I** Gefahrgut (FwDV 500) |
| Atemschutz | 33 | **F** Atemschutz (FwDV 7) |
| Besondere Gefahren im Zivilschutz | 17 | **Z** Katastrophenschutz |
| Brandsicherheitsdienst | 7 | **Z** Katastrophenschutz / **M** VB |
| Brennen | 72 | **B** Brennen & Löschen |
| Fahrzeugkunde | 56 | **C** Fahrzeugkunde |
| Geräte für die Technische Hilfeleistung | 14 | **D** Gerätekunde |
| Grundlagen des Zivil- und Katastrophenschutzes | 18 | **Z** Katastrophenschutz |
| Lebensrettende Sofortmaßnahmen (Erste Hilfe) | 24 | **J** Erste Hilfe |
| Löscheinsatz | 82 | **E** Löscheinsatz (FwDV 3) |
| Löschen | 67 | **B** Brennen & Löschen |
| Löschgeräte, Schläuche, Armaturen | 58 | **D** Gerätekunde |
| Persönliche Ausrüstung | 12 | **D** Gerätekunde / **P** Arbeitsschutz |
| Physische und psychische Belastung | 9 | **P** Arbeitsschutz |
| Rechtsgrundlagen | 24 | **A** Rechtsgrundlagen |
| Rettung und Absturzsicherung | 12 | **K** Absturzsicherung / **S** Rettung |
| Rettungsgeräte | 45 | **D** Gerätekunde (tragbare Leitern) |
| Sonstige Geräte | 7 | **D** Gerätekunde |
| Sprechfunk | 12 | **H** Sprechfunk & Digitalfunk |
| Technische Hilfeleistung | 16 | **G** Technische Hilfeleistung |
| Unfallverhütung / Unfallversicherung | 30 | **P** Arbeitsschutz (UVV/DGUV) |
| Verhalten bei Gefahr | 23 | **E** Löscheinsatz (Gefahren d. Einsatzstelle) |
| Wasserförderung | 10 | **T** Löschwasserversorgung |
| **Summe** | **679** | – |

**Erkenntnis:** Der Katalog deckt fast exakt unsere Grundausbildungs-Module
(A–K, P, T, Z) ab. Führung (L), Vorbeugender Brandschutz (M, weitgehend),
Baukunde (O), Jugend (Q), Digitale Einsatzunterstützung (R), Vegetationsbrand
(V), Naturgefahren (W), Wasserrettung (X), Motorsäge (Y) kommen im Katalog
**nicht** vor – das ist erwartbar, da die Leistungsübung auf die
**Truppmann-/Truppführer-Grundausbildung** zielt.

---

## 3. Was wir übernommen haben (Umsetzung)

### 3.1 Neue authentische Fragenbank

Neue Datei **`assets/js/data/exams-hlfs.js`** mit einer **kuratierten Auswahl
authentischer HLFS-Fragen** (Single-Choice, 3 Optionen) über **alle
grundausbildungsrelevanten Themen**. Jede Frage:

- übernimmt **Fragetext und Antwortoptionen** aus dem HLFS-Katalog,
- ist mit **fachlich ergänzter Lösung** und **Erklärung** versehen,
- trägt die Herkunftskennung `src: 'HLFS 2021'`,
- ist in unser bestehendes Fragen-Schema eingepasst
  (`type/difficulty/topic/q/options/correct/exp`).

Die Fragen werden in **`exams.js`** – wie die übrigen Erweiterungsebenen
(`EXTRA_QUESTIONS_*`) – an die jeweiligen **Modul-Fragenbänke angehängt**.
Damit erscheinen sie automatisch in

- den **Modulprüfungen** (Übungsmodus) der betroffenen Module,
- den bestehenden **Abschlussprüfungssets** (z. B. Truppmann-Gesamtprüfung),
- dem **Fehler-/Wiederholungs-Center** (über `QUESTION_BY_ID`).

### 3.2 Neues Prüfungsset „Hessische Feuerwehrleistungsübung"

In **`assets/js/data/pruefungssets.js`** ergänzt: Set
`set-hlfs-leistungsuebung` – eine **modulübergreifende Wissensprüfung im Stil
der Leistungsübung** (Kreis-/Bezirksebene), die Fragen aus den passenden
Modulen zieht.

- **Bestehensgrenze 50 %**, Richtzeit ca. **75 s/Frage** – kalibriert wie
  unsere übrigen realitätsnahen Sets (siehe `pruefungen-echtheit-vergleich.md`).
- **`realNote`** stellt ehrlich klar: Grundlage ist der **offizielle
  HLFS-Katalog (Stand 10/2021)**; die **echte** Leistungsübung ist ein
  **Mannschafts-Bewerb**, in dem der Fragenteil nur **eine praktische Station**
  von mehreren ist.

---

## 4. Ehrlichkeits-/Verbindlichkeitshinweis

- Der HLFS-Katalog markiert **keine** richtigen Antworten. Unsere Lösungen und
  Erklärungen sind eine **fachliche Ergänzung** und ausdrücklich als solche
  gekennzeichnet (`src: 'HLFS 2021'`, Kommentarkopf in `exams-hlfs.js`,
  `realNote` im Set). Sie ersetzen **keine** offizielle Musterlösung.
- Feuerwehrrecht und Prüfungswesen sind **Ländersache**. Maßgeblich bleiben die
  geltenden **FwDV**, die **DGUV-Vorschrift 49**, die einschlägigen **Normen**
  sowie die Vorgaben der **HLFS** und der eigenen Feuerwehr.

---

## 5. Ausbaupotenzial (nächste Schritte, optional)

Der Katalog bietet 679 Fragen – aktuell ist eine **qualitätsgesicherte Auswahl**
integriert. Sinnvolle Erweiterungen:

1. **Themenabdeckung vertiefen** – weitere Fragen je Ausbildungseinheit
   ergänzen (v. a. Brennen/Löschen und Löscheinsatz mit den meisten Fragen).
2. **Rettungsgeräte/tragbare Leitern** – eigener Themenschwerpunkt „FwDV 10"
   in Modul D, da der Katalog hier sehr detailliert ist (45 Fragen).
3. **Karteikarten** – markante Merkwerte (Anstellwinkel 65–75°, 30:2, GAMS,
   4A-1C-4E, Restdruckwarnung 50–60 bar) zusätzlich als `flashcards` aufnehmen.
4. **Zweite Lösungsdurchsicht** – die fachlich ergänzten Lösungen vor größeren
   Erweiterungen durch eine Ausbilderin/einen Ausbilder gegenlesen lassen.

---

## 6. Betroffene Dateien

- `assets/js/data/exams-hlfs.js` – **neu**: authentische HLFS-Fragenbank.
- `assets/js/data/exams.js` – Import + Merge der HLFS-Fragen.
- `assets/js/data/pruefungssets.js` – neues Set „Hessische Feuerwehrleistungsübung".
- `docs/fragenkatalog-hlfs-hessen.md` – dieses Dokument.
