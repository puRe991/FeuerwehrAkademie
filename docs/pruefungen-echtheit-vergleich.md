# Prüfungs-Realitätscheck: Unsere Prüfungen vs. echte Feuerwehr-Prüfungen

> Recherche & Abgleich: Länge, Inhalt, Fragenanzahl und Zeit unserer App-Prüfungen im
> Vergleich zu den tatsächlichen Prüfungen der Feuerwehr-Aus- und Fortbildung.
> Stand der Recherche: Juli 2026. Quellen am Ende des Dokuments.

---

## 1. Kernbefund in drei Sätzen

1. **Struktur:** In der echten Feuerwehr gibt es **eine schriftliche Prüfung pro Lehrgang**
   (Truppmann, Atemschutz, Maschinist, Sprechfunker, Gruppenführer …), **nicht** eine
   Prüfung pro Themengebiet. Unsere **30 Modulprüfungen (A–Z)** sind ein Lern-/Übungsformat –
   das echte Gegenstück sind unsere **Prüfungssets** (`EXAM_SETS`).
2. **Bestehensgrenze:** Echte schriftliche Prüfungen sind meist bei **50 % (die Hälfte der
   Fragen)** bestanden, gehobene Lehrgänge bei ~60 %. Unsere App verlangt **70–80 %** –
   wir sind also **strenger** als die Realität.
3. **Zeit:** Unsere **Modulprüfungen geben nur 15–29 Sekunden pro Frage** – echte Prüfungen
   rechnen mit **ca. 90–180 Sekunden pro Frage**. Das ist die **größte Abweichung**. Unsere
   **Prüfungssets (100–125 s/Frage)** liegen dagegen realistisch.

---

## 2. Wie echte Feuerwehr-Prüfungen aufgebaut sind (Referenz)

Feuerwehrrecht ist **Ländersache** – jedes Bundesland hat eigene Ausbildungs- und
Prüfungsordnungen. Die Zahlen unten sind belegte, typische Werte; sie schwanken je nach
Land/Landesfeuerwehrschule etwas.

| Echte Prüfung | Fragen (schriftl.) | Zeit | Bestanden | Format / Besonderheit |
|---|---|---|---|---|
| **Truppmann/-frau Basis (MTA-Basismodul)** | **50** | k. A. (offen) | **≥ 50 %** (25/50), 1 Pkt./Frage | Grundlagen des gesamten Basismoduls |
| **Truppführer/-frau (MTA-Abschluss)** | **15** | k. A. | **≥ 50 %** (~8/15) | Mehrfachantworten möglich |
| **Standard-MC-Lehrgänge (verbreitetes Schema)** | **20** aus Landeskatalog | ~30–60 min | je Frage 5 % → 100 %, Bestehen meist **50–60 %** | 1–4 Antworten je Frage richtig |
| **Atemschutzgeräteträger (AGT, FwDV 7)** | ~**20–30** (Katalog: 113 Fragen, Module à 30) | ~10 min/Modul | i. d. R. **≥ 50 %** | MC, 4 Optionen |
| **Sprechfunker (FwDV 2)** | MC-Katalog (1–4 richtig) | am letzten Lehrgangstag | Lernzielkontrolle bestanden | schriftl. **+ praktisch** |
| **Maschinist (FwDV 2)** | schriftl. Lernzielkontrolle (~20–30) | am Lehrgangsende | bestanden | schriftl. **+ praktisch** (Pumpe/Aggregate) |
| **Gruppenführer / Zugführer (F-III / F-IV)** | **20** Fachfragen | **60 min** | 3 Prüfungsteile, alle bestehen | schriftl. + mündlich/praktisch |
| **Jugendflamme Stufe 1–3** | *kein* MC-%-Test | keine Zeitbegrenzung im MC-Sinn | Aufgaben/Stationen erfüllt | **praktisch**: Notruf, Knoten, Gerätekunde |
| **Leistungsspange** | 1 Disziplin = Fragen beantworten (im Team) | Wettbewerb | Wertungspunkte im Team | 5 Disziplinen, Mannschaftsleistung |

**Rote Fäden der echten Prüfungen:**
- **Multiple-Choice**, oft „1–4 Antworten richtig" – eine falsche/fehlende Markierung = ganze Frage falsch.
- **Bestehensgrenze 50 %** (Truppmann/AGT), **50–60 %** bei Führung.
- **Schriftlich + praktisch** – die Praxis ist gleichwertig oder wichtiger.
- **Eine Prüfung je Lehrgang**, nicht je Einzelthema.
- Nachwuchs (Jugendflamme/Leistungsspange) ist **stations-/wettbewerbsbasiert**, kein Prozent-Test.

---

## 3. Unsere Prüfungen – Ist-Zustand nach der Kalibrierung

> **Status: umgesetzt.** Die folgenden Werte sind der **neue** Stand nach Angleichung an die
> echten Prüfungen (vorher in Klammern). Umgesetzt in `assets/js/data/exams.js`,
> `assets/js/data/pruefungssets.js` und den Prüfungs-Views.

### 3.1 Modulprüfungen (A–Z) = **Übungsmodus**

| Kennwert | Neu (vorher) | Echte Referenz |
|---|---|---|
| Fragen je Prüfung | 19–34 (unverändert) | 20–50 (aber je **Lehrgang**, nicht je Thema) |
| Zeitlimit | **24–42 min** (vorher 7–12) | – |
| **Zeit pro Frage** | **~75 s** (vorher 15–29 s) | ~90–180 s ✅ |
| Bestehensgrenze | **50 %**, Führung **60 %** (vorher 70–75 %) | 50 % / Führung 60 % ✅ |

Zentral gesetzt in `exams.js` (`REALITAET_SEK_PRO_FRAGE = 75`), damit alle Module konsistent bleiben.

### 3.2 Prüfungssets (Abschlussprüfungen) = **Prüfungsmodus**

| Set | Fragen (vorher) | Zeit (vorher) | s/Frage | Pass (vorher) | An echter Prüfung |
|---|---|---|---|---|---|
| Truppmann (MTA) | **50** (15) | **60** (25) min | 72 s | **50 %** (70) | MTA-Basis: ~50 Fr./≥ 50 % ✅ |
| Truppführer | **15** (13) | **20** (25) min | 80 s | **50 %** (70) | MTA-Abschluss: 15 Fr./≥ 50 % ✅ |
| Atemschutz | **20** (10) | **25** (20) min | 75 s | **50 %** (75) | AGT (FwDV 7): ~20 Fr. ✅ |
| Maschinist | **20** (10) | **25** (20) min | 75 s | **50 %** (75) | Maschinist (FwDV 2): ~20 Fr. ✅ |
| Gruppen-/Zugführung | **20** (12) | **60** (25) min | 180 s | **60 %** (75) | F-III/IV: **20 Fr./60 min** ✅ |
| Einsatzdienst & Sonderlagen | 14 | **20** (25) min | 86 s | **50 %** (70) | kein reales 1:1-Pendant |
| Großes Examen (A–Z) | 26 | **33** (45) min | 76 s | **60 %** (80) | Meta-Prüfung, kein reales Pendant |
| Jugendflamme 1/2/3 | 9–10 | **15** (10–12) min | 90–100 s | **60 %** (70–75) | real **praktisch** – Vorbereitung |
| Leistungsspange (Wissen) | 10 | **15** (12) min | 90 s | **60 %** (75) | real **Team-Wettbewerb** – Vorbereitung |

**Fazit:** Beide Modi sind jetzt **realitätsnah** und klar getrennt. Jede Abschlussprüfung zeigt
im Intro einen **„Realitätscheck"** (`realNote`), welcher echten Prüfung sie entspricht und dass
die reale Prüfung **schriftlich + praktisch** ist.

---

## 4. Zu jedem Thema eine echte, vergleichbare Prüfung

| Unser Modul/Set | Echte vergleichbare Prüfung | Wo das Thema real geprüft wird |
|---|---|---|
| **A** Rechtsgrundlagen & Organisation | Truppmann-Basis (schriftl.) | Themenblock im Basismodul |
| **B** Brennen & Löschen | Truppmann-Basis (schriftl.) | Brandlehre im Basismodul |
| **C** Fahrzeugkunde | Truppmann-Basis (schriftl.) | Fahrzeug-/Gerätekunde |
| **D** PSA & Gerätekunde | Truppmann-Basis (schriftl. + prakt.) | Gerätekunde-Stationen |
| **E** Löscheinsatz (FwDV 3) | Truppmann Teil 2 / Truppführer | Einsatzlehre-Prüfung |
| **F** Atemschutz (FwDV 7) | **AGT-Lehrgang** (schriftl. + prakt.) | eigenständige AGT-Prüfung |
| **G** Technische Hilfeleistung | Truppmann / THL-Modul | THL-Lernzielkontrolle |
| **H** Sprechfunk & Digitalfunk | **Sprechfunker-Lehrgang** (schriftl. + prakt.) | eigenständige Funker-Prüfung |
| **I** ABC-Gefahrstoffe (FwDV 500) | ABC-/GABC-Einsatz-Lehrgang | Gefahrgut-Lehrgangsprüfung |
| **J** Erste Hilfe | Erste-Hilfe-Kurs / San-Grundausbildung | externer EH-Nachweis |
| **K** Absturzsicherung | Lehrgang Absturzsicherung | meist Unterweisung + prakt. Nachweis |
| **L** Führung & Leitung (FwDV 100) | **Gruppen-/Zugführer** (F-III/F-IV) | 20 Fr./60 min + mündl./prakt. |
| **M** Vorbeugender Brandschutz | Brandschutz-/Führungslehrgang-Modul | VB-Fachprüfung |
| **N** Maschinist (FwDV 2) | **Maschinisten-Lehrgang** (schriftl. + prakt.) | eigenständige Maschinisten-Prüfung |
| **O** Objekt- & Baukunde | Führungs-/VB-Lehrgang | Baukunde-Teil |
| **P** Arbeits- & Unfallschutz (UVV/DGUV) | Truppmann-Basis / jährliche UVV-Unterweisung | Sicherheitsunterweisung |
| **Q** Jugend- & Nachwuchsarbeit | Jugendgruppenleiter / JuLeiCa | Jugendleiter-Ausbildung |
| **R** Digitale Einsatzunterstützung (Drohne/Wärmebild) | Fortbildung (kein bundeseinh. Lehrgang) | Drohnen-/Wärmebild-Fortbildung |
| **S** Rettung & Selbstrettung | Truppmann / AGT-Notfalltraining | Rettungs-Stationen |
| **T** Löschwasserversorgung | Maschinist / Truppmann Teil 2 | Wasserförderung-Prüfung |
| **U** Knoten & Stiche | Truppmann-Basis (**praktisch**) | Knoten-Station (kein MC) |
| **V** Vegetationsbrand | Fortbildung Vegetationsbrandbekämpfung | Fachfortbildung |
| **W** Naturgefahren | Fortbildung / KatS | Fachfortbildung |
| **X** Wasserrettung | Strömungsretter / Rettungsschwimmer | eigenständige Rettungsschwimmer-Prüfung |
| **Y** Motorsäge | **Motorsägenführer** (DGUV, mit Prüfung) | Kettensägen-Lehrgangsprüfung |
| **Z** Katastrophenschutz | KatS-Fachdienst-Ausbildung | fachdienstspezifisch |
| **Set** Truppmann | MTA-Basismodul (50 Fr., ≥ 50 %) | ✅ direktes Pendant |
| **Set** Truppführer | MTA-Abschluss (15 Fr., ≥ 50 %) | ✅ direktes Pendant |
| **Set** Atemschutz | AGT schriftl. (~20–30 Fr.) | ✅ direktes Pendant |
| **Set** Maschinist | Maschinist schriftl. (~20–30 Fr.) | ✅ direktes Pendant |
| **Set** Gruppen-/Zugführung | F-III/F-IV (20 Fr./60 min) | ✅ direktes Pendant |
| **Set** Einsatzdienst & Sonderlagen | – (kombinierte App-Prüfung) | kein 1:1-Pendant |
| **Set** Großes Examen (A–Z) | – (Meta-Examen der App) | kein reales Pendant |
| **Set** Jugendflamme 1–3 | Jugendflamme (praktisch/Stationen) | Format weicht ab (App = MC) |
| **Set** Leistungsspange | Leistungsspange (Team-Wettbewerb) | Format weicht ab (App = MC) |

---

## 5. Empfehlungen – Umsetzungsstand ✅

Alle Empfehlungen sind **umgesetzt**:

1. **Zeit der Modulprüfungen realistisch** ✅ — zentral **~75 s/Frage** (statt 15–29 s), gesetzt
   in `exams.js`. Die Modulprüfungen sind zudem klar als **Übungsmodus** gekennzeichnet.
2. **Zwei getrennte Modi klar benannt** ✅ — **Übungsmodus** (Modulprüfungen) und
   **Prüfungsmodus** (Abschlussprüfungen) als Badges in Übersicht und Prüfungs-Intro.
3. **Bestehensgrenzen an die Realität angeglichen** ✅ — Modul-/Basisprüfungen **50 %**,
   Führung **60 %** (`REALITAET_FUEHRUNG`), Sets entsprechend (Truppmann/AGT/Maschinist 50 %,
   Gruppenführer 60 %).
4. **Prüfungssets an echte Fragenzahlen angenähert** ✅ — Truppmann **50 Fragen / 60 min**,
   Gruppen-/Zugführung **20 Fragen / 60 min**, AGT/Maschinist **20 Fragen**.
5. **Jugendflamme/Leistungsspange ehrlich eingeordnet** ✅ — als **Wissens-Vorbereitung**
   gekennzeichnet; jede JF-Prüfung erklärt per `realNote`, dass die echte Abnahme
   **praktisch/als Wettbewerb** erfolgt.
6. **Praxis sichtbar gemacht** ✅ — Hinweis **„echte Prüfung = schriftlich + praktisch"** in der
   Prüfungsübersicht und im „Realitätscheck" jeder Abschlussprüfung.

---

## 6. Quellen

- Modulare Truppausbildung – Prüfungen (KBI Dachau): <https://www.kbi-dachau.de/modulare-truppausbildung-pruefungen.html>
- MTA-Ausbildungsgrundlagen: <https://www.mta-r.de/blog/ausbildungsgrundlagen/>
- FwDV 7 „Atemschutz": <https://www.idf.nrw.de/service/downloads/pdf/fwdv7_stand_2002_mit_aenderungen_2005.pdf>
- FwDV 2 „Ausbildung der Freiwilligen Feuerwehren": <https://www.nlbk.niedersachsen.de/download/192512>
- Fragenkatalog Sprechfunker (NLBK Niedersachsen): <https://www.nlbk.niedersachsen.de/download/75433/fragenkatalog_lehrgang_sprechfunker.pdf>
- Fragenkatalog Maschinisten (NLBK): <https://www.nlbk.niedersachsen.de/download/48294/Lehrgang_Maschinisten_Fragenkatalog_Stand_26.01.2018_.pdf>
- Prüfungsrichtlinien Gruppenführer (IdF NRW): <https://www.idf.nrw.de/service/downloads/pdf/2016/2016-10-14-pruefungsrichtlinien-gf-basis.pdf>
- Ausbildungs-/Prüfungsvorschriften Brandenburg (bravors): <https://bravors.brandenburg.de/de/verwaltungsvorschriften-216075>
- Lernzielkatalog Truppmann Teil 1 (LFV SH): <https://www.lfv-sh.de/fileadmin/download/_Facharbeit/1_Ausbildung-Technik-Leistungsbewertung/Download_Ausbildung/Lernzielkatalog_Truppmann1.pdf>
- Jugendflamme – Grundsätze / Deutsche Jugendfeuerwehr: <https://jugendfeuerwehr.de/> · <https://kfv-freising.de/ausbildung/leistungsabzeichen-bewerbe/jugend/deutsche-jugendflamme>

> **Verbindlichkeitshinweis:** Feuerwehrrecht ist Ländersache. Die genannten Zahlen sind
> typische, belegte Richtwerte; verbindlich sind stets die Ausbildungs- und Prüfungsordnungen
> des jeweiligen Bundeslandes und der eigenen Feuerwehr.
