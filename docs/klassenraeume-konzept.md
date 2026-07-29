# 🏫 Konzept: Klassenräume / Lehrsäle für die Feuerwehr-Online-Akademie

> Virtuelle Lernräume – inspiriert von Teams-Meeting-Räumen, aber **lern-nativ**,
> **feuerwehr-spezifisch** und **datenschutzfreundlich**. Kein fertiger Code, sondern
> Plan, Architektur-Optionen und Feature-Konzept als Diskussionsgrundlage.

**Stand:** 2026-07-29 · **Branch:** `claude/klassenraeume-lernkonzept-zivis6` · **Status:** Entwurf/Diskussion

---

## 1. Warum nicht einfach „Teams für die Feuerwehr"?

Ein Teams-Meeting-Raum ist ein **allgemeiner Kommunikationsraum**: Video, Bildschirm teilen,
Chat, Breakout-Räume. Er weiß nichts über *Lerninhalte* und nichts über *Feuerwehr*.

Unser Vorteil: Die Akademie hat bereits **Curriculum, Prüfungen, Schaubilder, Planspiele,
Einsatzkompass, Gamification und eine Ausbilder-Ansicht**. Ein „Klassenraum" ist deshalb kein
Videokonferenz-Klon, sondern ein **Lehrsaal, der die vorhandenen Inhalte gemeinsam erlebbar macht**.

**Das Leitbild:** *Nicht „wir bauen Videochat", sondern „wir machen die Akademie mehrspielerfähig".*

| Teams-Meeting-Raum | Unser Lehrsaal (besser) |
|---|---|
| Video + Screen-Share | **Synchronisierte Lektion**: alle sehen dasselbe Schaubild live, Ausbilder führt |
| Chat | **Meldungen & Handzeichen** im Feuerwehr-Duktus |
| Umfrage-Add-on | **Live-Prüfung (Kahoot-Style)** direkt aus den 996 Fragen, Live-Rangliste |
| Breakout-Räume | **Trupps** – Teilnehmer in Gruppen aufteilen, dann zurück in den Lehrsaal |
| Whiteboard | **Übungshof**: taktische Zeichen als Stempel, Fahrzeugaufstellung, Einsatzskizze |
| Aufzeichnung | **Replay als geführter Selbstlern-Pfad** – nachholen statt nur zuschauen |
| Anwesenheitsliste | **Automatischer Ausbildungsnachweis** (druckbar, knüpft an Ausbilder-Ansicht an) |
| „Noch ein Call" | **Alarm-Modus**: gemeinsame Live-Einsatzübung unter Zeitdruck |

---

## 2. Die zentrale Architektur-Entscheidung

Die App ist **bewusst serverlos**: kein Login, kein Backend, `localStorage`, offline-fähig.
Ein echter „Raum" mit mehreren Personen braucht aber **irgendeine Form von Verbindung**.
Das ist der Kern jeder Design-Entscheidung. Wir lösen das über **drei Stufen**, die
aufeinander aufbauen – man kann bei Stufe 0 anfangen und muss den serverlosen Charakter nie aufgeben.

### Stufe 0 — Async-Klassenraum *(kein Server, passt 1:1 zur heutigen Architektur)*
Ein „Raum" ist eine **geteilte Lehrplan-Konfiguration** (Playlist aus Lektionen, Prüfungen,
Planspielen), die der Ausbilder erstellt und per **Code / Link / QR** teilt.
- Teilnehmer „betreten" den Raum → bekommen denselben Lernpfad, dieselben Prüfungen.
- Ergebnisse werden lokal gesammelt und per **JSON-Export/-Import** (existiert bereits!) oder
  QR an den Ausbilder zurückgespielt.
- **Ein-Geräte-Variante „Beamer-Modus":** Ausbilder projiziert, steuert Lektion & Live-Quiz,
  Teilnehmer antworten auf ihren Handys über einen einfachen Antwort-Client.
- **Vorteil:** null Infrastruktur, kein Datenschutz-Risiko, funktioniert offline im Gerätehaus.

### Stufe 1 — Live-Lite *(P2P, minimaler Signaling-Server)*
Echtzeit über **WebRTC-Data-Channels** – nur Daten (Präsenz, aktuelle Folie, Quiz-Antworten,
Chat), **kein Video**. Nötig ist nur ein winziger Signaling-/Relay-Dienst (self-hostbar oder
ein kostenloser Dienst).
- Live-Präsenz, Follow-the-Ausbilder, Live-Prüfung mit Countdown, kooperatives Planspiel.
- Klein, günstig, DSGVO-arm (nur Lerndaten, keine Videostreams).

### Stufe 2 — Voll-Live *(optionaler Server)*
Audio/Video (WebRTC-SFU), persistente Räume, Aufzeichnung.
- **Bricht das „kein Server"-Versprechen** → deshalb strikt **optional & self-hostbar**,
  z. B. für Kreisausbildungszentren mit eigener Infrastruktur.
- Nicht Teil des Kern-MVP.

> **Empfehlung:** MVP = **Stufe 0** (async + Beamer-Modus). Das liefert 80 % des Nutzens ohne
> Server. **Stufe 1** als erster „echter" Live-Ausbau. Stufe 2 nur bei konkretem Bedarf.

---

## 3. Rollen im Lehrsaal

| Rolle | Rechte |
|---|---|
| **Ausbilder** (Host) | Raum erstellen, Lehrplan wählen, Lektion steuern, Quiz starten, Trupps bilden, Auswertung & Nachweis |
| **Co-Ausbilder** | Wie Ausbilder, ohne Raum-Löschung; kann Trupp-Räume betreuen |
| **Gruppenführer** | Kann einen zugewiesenen Trupp-Raum leiten (Breakout) |
| **Teilnehmer** | Beitreten, mitlernen, antworten, „Meldung" geben |
| **Gast/Beobachter** | Nur zuschauen (z. B. Wehrführung) |

Rollen bewusst im Feuerwehr-Duktus benannt – das ist Teil des „geiler als Teams".

---

## 4. Feature-Konzept (die „geilen" Bausteine)

1. **Synchronisierter Lehrsaal (Follow-the-Ausbilder)**
   Alle sehen live dieselbe Lektion/dasselbe Schaubild. Ausbilder blättert → alle folgen.
   „Laserpointer" / Markierung auf Schaubildern (z. B. auf das Verbrennungsdreieck zeigen).

2. **Live-Prüfung (Kahoot-Style)**
   Ausbilder wirft eine Frage aus den vorhandenen 996 an die Wand, alle antworten gleichzeitig,
   Countdown, danach **Live-Rangliste** und automatische Auflösung mit Erklärung.
   Speist bestehende Systeme: XP, Streak, Fehler-Center.

3. **Kooperatives Planspiel** *(Killer-Feature)*
   Die verzweigten Einsatz-Simulationen gemeinsam spielen. Teilnehmer übernehmen **Rollen**
   (Einheitsführer, Maschinist, Angriffstrupp) und stimmen über Entscheidungen ab.
   Live-Bewertung (Menschenrettung · Eigensicherung · Taktik) für das ganze Team.

4. **Trupps (Breakout-Räume)**
   Teilnehmer in kleine Trupps aufteilen für eine Aufgabe, dann Rückruf in den Lehrsaal.
   Ausbilder springt zwischen den Trupps.

5. **Übungshof (kollaboratives Whiteboard mit taktischen Zeichen)**
   Gemeinsame Einsatzskizze / Fahrzeugaufstellung. **Taktische Zeichen als Stempel** –
   das kann Teams-Whiteboard nicht. Für Lagebesprechung und Führungsausbildung.

6. **Meldungen & Präsenz**
   „Meldung" (Handzeichen), Status (verstanden / Frage), einfacher Chat.
   Feuerwehr-typische Signale statt generischer Emojis.

7. **Alarm-Modus (Live-Einsatzübung)**
   Ausbilder löst einen „Alarm" aus → alle bekommen eine Lage und müssen unter Zeitdruck
   reagieren (Erstmaßnahmen, GAMS, Meldebild). Adrenalin-Moment, den Teams nie bieten wird.

8. **Team-Gamification**
   Klassen-XP, **Trupp-Wettbewerbe**, gemeinsame Streak, „Wache/Trupp des Abends", Konfetti
   für das ganze Team. Baut auf der vorhandenen Gamification auf.

9. **Anwesenheit & Ausbildungsnachweis**
   Automatische Teilnahmeerfassung → **druckbarer Nachweis / Teilnahmebestätigung**.
   Direkte Erweiterung der bestehenden Ausbilder-Ansicht.

10. **Replay als Selbstlern-Pfad**
    Wer nicht live dabei war, holt die Session als geführten Pfad nach (gleiche Lektionen,
    gleiche Quizfragen) – „Aufzeichnung", aber interaktiv statt nur Video.

---

## 5. Lebenszyklus eines Klassenraums

```
Planen ─► Erstellen ─► Beitreten ─► Live-Phase ─► Nachbereitung ─► Archiv/Replay
  │          │            │            │              │               │
Lehrplan   Vorlage/     Code/QR/     Sync-Lektion, Auswertung,     Nachholen als
& Ziel     freier Bau   Link         Quiz, Trupps, Nachweis,       Selbstlern-Pfad
                                     Planspiel     Fehler-Center
```

- **Vorlagen** für typische Einheiten: „Truppmann Teil 1 – Abend 3", „Atemschutz-Auffrischung",
  „Maschinisten-Lehrgang", „Jugendfeuerwehr – Jugendflamme Stufe 2".
- Raum kann **wiederkehrend** sein (fester Übungsabend) oder einmalig.

---

## 6. Datenschutz / DSGVO (wichtig im Feuerwehr-Kontext)

- **Datenminimierung:** keine Accounts, Anzeigename genügt; kein Zwang zu Klarnamen.
- **Stufe 0/1** übertragen nur Lerndaten, **keine** Video-/Audiostreams.
- Lokale Speicherung bleibt der Standard; geteilt wird nur, was der Ausbilder aktiv exportiert.
- Bei Stufe 2 (Video) klare Opt-in-Regeln, self-hosting bevorzugt, keine Cloud-Zwang.
- Passt zum bestehenden Versprechen „keine Anmeldung, keine Server nötig".

---

## 7. Integration in die bestehende Architektur

Alles fügt sich in das vorhandene Muster (Views mit `render`/`bind`, Hash-Routing,
`state.js`-Pub/Sub, `localStorage`) ein:

- **Neue Views:** `#/lehrsaal` (Übersicht/Beitreten), `#/lehrsaal/:code` (Raum),
  `#/lehrsaal/erstellen` (Ausbilder). Reiht sich neben `simulator`, `planspiel`, `instructor` ein.
- **State-Erweiterung:** `rooms`-Zweig (erstellte/beigetretene Räume, Rolle, Live-Zustand).
- **Wiederverwendung:** Curriculum, `exams`, `planspiele`, `diagrams`, Gamification, Export/Import.
- **Neuer Baustein nur für Live:** dünne Transport-Schicht (Stufe 1 WebRTC), sauber gekapselt,
  damit Stufe 0 ohne sie funktioniert.

---

## 8. Vorgeschlagene Umsetzungs-Phasen

| Phase | Inhalt | Server nötig? |
|---|---|---|
| **P0 – MVP** | Async-Raum + **Beamer-Modus** (1 Ausbilder-Gerät steuert, Handys antworten), Live-Prüfung lokal, Anwesenheit/Nachweis | ❌ nein |
| **P1 – Live-Lite** | WebRTC-Data-Channels: echte Präsenz, Follow-the-Ausbilder, Live-Quiz über Distanz, Chat/Meldungen | ⚠️ nur Mini-Signaling |
| **P2 – Kooperation** | Kooperatives Planspiel, Trupps/Breakout, Übungshof mit taktischen Zeichen | ⚠️ wie P1 |
| **P3 – Voll-Live (optional)** | Audio/Video, Aufzeichnung, persistente Räume | ✅ optionaler self-host-Server |

---

## 9. Offene Fragen für die nächste Runde

1. **Einsatzumfeld:** Primär *Präsenz* (alle im selben Schulungsraum, Beamer) oder *remote*
   (jeder zu Hause)? Das entscheidet, ob P0 (Beamer) oder P1 (WebRTC) zuerst kommt.
2. **Gruppengröße:** typischer Lehrgang (10–15) oder auch große Formate (>30)?
3. **Server ja/nein:** Ist ein winziger Signaling-Dienst akzeptabel, oder muss es
   **strikt** bei „null Server" bleiben (→ dann nur P0 + QR-Rückkanal)?
4. **Priorität:** Womit starten – **Live-Prüfung** (schneller Wow-Effekt) oder
   **kooperatives Planspiel** (das echte Alleinstellungsmerkmal)?
5. **Nachweis:** Soll der Teilnahme-/Ausbildungsnachweis rechtlich verwertbar formatiert sein?
