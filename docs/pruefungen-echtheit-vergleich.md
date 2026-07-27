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

## 3. Unsere Prüfungen im Ist-Zustand

### 3.1 Modulprüfungen (A–Z) – 30 Stück, 698 Fragen

| Kennwert | Unsere Werte | Echte Referenz |
|---|---|---|
| Fragen je Prüfung | 19–34 | 20–50 (aber je **Lehrgang**, nicht je Thema) |
| Zeitlimit | 7–12 min | – |
| **Zeit pro Frage** | **15–29 s** | **~90–180 s** ⚠️ |
| Bestehensgrenze | **70–75 %** | **50 %** ⚠️ |

### 3.2 Prüfungssets (Abschlussprüfungen) – das echte Gegenstück

| Set | Fragen | Zeit | s/Frage | Pass | Realistisch? |
|---|---|---|---|---|---|
| Truppmann (MTA) | 15 | 25 min | 100 s | 70 % | Zeit ✅ · Pass etwas streng |
| Truppführer | 13 | 25 min | 115 s | 70 % | ✅ |
| Atemschutz | 10 | 20 min | 120 s | 75 % | Zeit ✅ · Pass etwas streng |
| Maschinist | 10 | 20 min | 120 s | 75 % | Zeit ✅ · Pass etwas streng |
| Gruppen-/Zugführung | 12 | 25 min | 125 s | 75 % | ✅ (real: 20 Fr./60 min) |
| Einsatzdienst & Sonderlagen | 14 | 25 min | 107 s | 70 % | kein reales 1:1-Pendant |
| Großes Examen (A–Z) | 26 | 45 min | 104 s | 80 % | Meta-Prüfung, kein reales Pendant |
| Jugendflamme 1/2/3 | 9–10 | 10–12 min | 60–72 s | 70–75 % | real **praktisch**, nicht MC |
| Leistungsspange (Wissen) | 10 | 12 min | 72 s | 75 % | real **Team-Wettbewerb** |

**Fazit:** Die **Prüfungssets sind nah an der Realität** (Zeit stimmt, Struktur stimmt). Die
**Modulprüfungen** sind als Lern-Drill sinnvoll, aber **nicht als echte Prüfung vergleichbar**
(zu wenig Zeit, zu hohe Hürde, falsche Granularität).

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

## 5. Konkrete Empfehlungen (damit es „echt" wirkt)

**Wichtig:** Das Folgende sind **Vorschläge** – noch nichts davon ist im Code geändert.

1. **Zeit der Modulprüfungen realistischer machen.** 15–29 s/Frage sind unrealistisch hart.
   Richtwert **60–90 s/Frage** → z. B. bei 30 Fragen ~30–45 min statt 10 min. Alternativ die
   Modulprüfungen offen als **„Übungsmodus ohne echtes Zeitlimit"** kennzeichnen (dann ist die
   knappe Zeit kein Problem, weil kein Echtheitsanspruch besteht).
2. **Zwei getrennte Modi klar benennen:**
   - **Übungsmodus** = Modulprüfungen (A–Z), Lern-Drill, Zeit locker.
   - **Prüfungsmodus** = Prüfungssets, an echten Lehrgängen kalibriert.
3. **Bestehensgrenzen an die Realität angleichen** (optional, wenn „realitätsnah" das Ziel ist):
   Truppmann/AGT/Maschinist real **50 %**, Führung **~60 %**. Unsere 70–80 % sind bewusst
   strenger – das ist als „Premium-Anspruch" vertretbar, sollte aber transparent sein.
4. **Prüfungssets an echte Fragenzahlen annähern:** Gruppen-/Zugführung real **20 Fragen /
   60 min** – unser Set zieht nur 12. Truppmann-Basis real **50 Fragen** – unser Set 15.
   Wer maximale Echtheit will, erhöht die gezogene Fragenzahl der Sets.
5. **Jugendflamme/Leistungsspange ehrlich einordnen:** Real sind das **praktische Stationen bzw.
   ein Mannschaftswettbewerb**, kein Multiple-Choice-Test. Unser MC-Quiz ist eine sinnvolle
   **Wissens-Vorbereitung**, sollte aber nicht als „die Prüfung" verkauft werden.
6. **Praxis sichtbar machen:** Jede echte Prüfung hat einen **praktischen Teil** (Knoten,
   Gerät, Pumpe, Funk). Der Knoten-Trainer, die Planspiele und der Einsatzkompass decken das
   teilweise ab – ein Hinweis „echte Prüfung = schriftlich **+ praktisch**" erhöht die
   Glaubwürdigkeit.

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
