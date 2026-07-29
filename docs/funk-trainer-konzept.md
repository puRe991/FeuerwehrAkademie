# Funk-Trainer – Konzept

> Konzept für einen interaktiven Sprechfunk-Trainer in der Feuerwehr Online Akademie.
> Ziel: richtiges Funken **üben und tun** – nicht nur Wissen abfragen.
> Fachlich orientiert an **PDV/DV 810 (BOS-Sprechfunk)** und dem vorhandenen Modul H.
> Stand: Juli 2026. **Dies ist ein Konzept – noch keine Umsetzung.**

---

## 1. Warum überhaupt? Die Lücke in einem Satz

Modul **H „Sprechfunk & Digitalfunk"** vermittelt die **Theorie** (Betriebsarten,
Nachrichtenaufbau, Buchstabieralphabet, Lagemeldungs-Schema, TMO/DMO, PDV/DV 810) – als
Lektionen, Prüfungsfragen und Glossar. Alles läuft über **Lesen → Ankreuzen**.

Was fehlt, ist der Schritt vom Wissen zum **Können**: hören, formulieren, in der richtigen
Reihenfolge mit den richtigen Betriebsworten – unter Zeitdruck und mit Störung. Genau das
soll der Funk-Trainer liefern.

---

## 2. Was „realistisch" beim Sprechfunk bedeutet

Ein gutes Funk-Training muss vier Dinge trainieren, die ein Quiz nicht kann:

1. **Struktur & Ablauf** – Anruf → Antwort → Spruch → Bestätigung → Ende. Die Reihenfolge
   ist entscheidend.
2. **Betriebsworte korrekt** – „kommen", „verstanden", „wiederholen Sie", „frage", „hier",
   „Ende". Weglassen oder falsch verwenden ist ein Fehler.
3. **Unter Druck & mit Störung** – Rauschen, Zeitdruck, eine Gegenstelle, die *jetzt*
   „kommen" erwartet. Buchstabieralphabet flüssig statt nachdenkend.
4. **Funkdisziplin** – kurz, klar, kein Klartext-Name, Kreis frei halten, richtige
   Rufgruppe geschaltet.

Der Trainer bewertet deshalb **Struktur und Betriebsworte**, nicht nur ein „richtig/falsch".

---

## 3. Aufbau in drei Ebenen (Rollen gestaffelt)

Ein Bereich, drei aufeinander aufbauende Ausbildungsstufen – „alle Ebenen" als Lernpfad
statt Sammelsurium:

| Stufe | Rolle | Worum es geht |
|---|---|---|
| **1 – Grundlagen** | Truppmann / Melder / Sprechfunker | Buchstabieren, einfacher Sprechfunk, Rückmeldung geben, Status durchgeben |
| **2 – Führung Gruppe** | Gruppenführer | Erste **Lagemeldung** strukturiert absetzen, nachfordern, an Leitstelle melden |
| **3 – Führung Zug / Digitalfunk** | Zugführer / Digitalfunk | Rufgruppen-Handling, überörtlich, mehrere Gegenstellen, Führungskreis frei halten |

Jede Stufe wird erst freigeschaltet, wenn die vorige sitzt (passt zum vorhandenen
Fortschritts- und XP-System).

---

## 4. Die vier Übungstypen

In jeder Stufe passend bestückt, vom Einfachen zum Realistischen.

### 4.1 Buchstabier-Drill (Aufwärmen)

- Ein Funkrufname/Wort erscheint → unter Zeitdruck mit Anton-Berta-Cäsar buchstabieren.
- Umgekehrt: Audio hören → richtiges Wort erkennen/tippen.
- Trainiert **Tempo**. Technisch einfach.

### 4.2 Funkspruch-Baukasten (Kern-Mechanik)

- Statt Freitext baut der Nutzer den Spruch aus **Bausteinen** zusammen
  (Aufruf · eigener Rufname · „kommen" · Spruch · Betriebswort) **oder** tippt ihn.
- Die App bewertet **Struktur + Betriebsworte** mit gezieltem Feedback,
  z. B. „Aufruf korrekt, aber ‚kommen' vergessen."
- Der entscheidende Unterschied zum Ankreuzen – und offline sauber machbar.

### 4.3 Sprechfunk-Dialog / Rollenspiel (das Realistische)

- Verzweigtes Szenario nach dem Muster der **Planspiele**: Der Nutzer ist z. B.
  **Angriffstrupp** oder **Melder**. Die Leitstelle / der Gruppenführer funkt an (Audio),
  der Nutzer antwortet korrekt, der Verlauf geht weiter.
- Beispiele: erste **Lagemeldung** absetzen, **Rückmeldung** geben, **nachfordern**,
  **Statusdurchgabe** im Digitalfunk.
- Bewertung über Meter analog Planspiel: **Disziplin · Struktur · Tempo**.

### 4.4 Digitalfunk-Handgriffe

- Richtige **Rufgruppe schalten**, TMO/DMO-Wechsel, **FMS-/Statusmeldung** als kurze
  interaktive Klick-Aufgaben (v. a. Stufe 3).

---

## 5. Audio – was es „echt" macht (offline)

Die App ist eine reine Offline-PWA ohne Server (Vanilla-JS, ES-Module). „Realistisch"
heißt hier vor allem **Audio**, und zwar ohne externe Dateien, damit die PWA offline
lauffähig bleibt:

- **Gegenstelle spricht** per `SpeechSynthesis` (deutsche Stimme, im Browser vorhanden)
  → man *hört* Funkverkehr, statt ihn zu lesen.
- **Funk-Sound** per WebAudio: Bandpass-Filter + etwas Rauschen + „Squelch"-Klick am
  Anfang/Ende → klingt wie ein echtes Gerät. Vollständig offline erzeugt.
- **Realismus-Stufen:** sauber → verrauscht → mit Zeitdruck/Störung.

---

## 6. Antwort-Modus: Kern + optionaler Zusatz

### 6.1 Kern (MVP): Bausteine / Tippen

Die verlässliche, überall offline funktionierende Grundlage. Bewertung über Baustein-Reihenfolge
bzw. Fuzzy-Matching des getippten Spruchs gegen die erwarteten Betriebsworte.

### 6.2 Zusatz: echte Spracheingabe (Bonus)

- **Jetzt schon einbaubar** als **Bonus-Modus** neben Bausteinen/Tippen: Browser-
  `SpeechRecognition`. Man spricht rein, die App gleicht per Fuzzy-Matching gegen die
  erwarteten Betriebsworte ab.
- **Ehrliche Grenze:** funktioniert praktisch nur in Chrome, braucht Netz und ist bei
  Fachbegriffen (Rufnamen, Ortsnamen) unzuverlässig. Deshalb **nie die alleinige
  Bewertung** – Bausteine/Tippen bleiben immer die sichere Grundlage.
- Die Spracheingabe ist die **Kür**, die später perfektioniert wird (siehe Abschnitt 8).

---

## 7. Einordnung ins Projekt (keine Architekturänderung)

Fügt sich 1:1 ins bestehende Muster ein:

- Neue Datendatei `assets/js/data/funk-szenarien.js` (analog `planspiele.js`).
- Neue View `assets/js/views/funk.js` (analog `planspiel.js`).
- Kleines Audio-Utility (WebAudio-Funk-Effekt + TTS-Wrapper).
- Verlinkt aus **Modul H** und vom **Dashboard**; Fortschritt/XP über das vorhandene
  State-System.

---

## 8. Ausbaustufe „High-End-Backend" – TO-DO (nicht Teil des MVP)

Der MVP läuft **komplett ohne Backend**. Sobald später ein Server dazukommt, wird aus dem
Bonus-Sprechmodus echtes, belastbares Sprechtraining. Dieser Abschnitt ist bewusst als
offener Plan gehalten:

- [ ] **Server-Speech-to-Text mit Feuerwehr-Vokabular** (Rufnamen, Betriebsworte,
      Ortsnamen) → zuverlässige Erkennung statt Browser-Wackelkandidat.
- [ ] **Aussprache- und Tempo-Feedback** – zu schnell, zu leise, „kommen" verschluckt.
- [ ] **Automatische Struktur-Bewertung** des gesprochenen Spruchs (nicht nur
      Stichwort-Match, sondern Reihenfolge und Vollständigkeit).
- [ ] **Realistischere KI-Gegenstelle**, die auf unerwartete Antworten reagiert und
      Rückfragen stellt.
- [ ] **Ausbilder-Auswertung** der Sprech-Sessions (Fehlermuster, Fortschritt über Zeit).
- [ ] **Datenschutz/Offline-Fallback** klären: Sprachdaten verlassen das Gerät nur mit
      Zustimmung; ohne Netz bleibt der Bausteine-/Tipp-Modus voll nutzbar.

---

## 9. Empfohlener Zuschnitt / Reihenfolge

1. **MVP:** Funkspruch-Baukasten (4.2) + Sprechfunk-Dialog (4.3) mit Audio-Ausgabe und
   3–4 Startszenarien (Lagemeldung, Rückmeldung, Nachforderung, Statusdurchgabe).
2. Buchstabier-Drill (4.1) als schnelles Extra dazu.
3. Echte Spracheingabe (6.2) als optionaler Bonus-Modus.
4. Digitalfunk-Handgriffe (4.4) und Stufe 3 ausbauen.
5. High-End-Backend (Abschnitt 8) als eigene, spätere Ausbaustufe.

---

## 10. Fachlicher Hinweis

Maßgeblich sind die geltenden Vorschriften (PDV/DV 810, FwDV) sowie die Regelungen des
jeweiligen Bundeslandes und der eigenen Feuerwehr. Der Funk-Trainer ist ein Übungsformat
und ersetzt keine offizielle Sprechfunkausbildung.
