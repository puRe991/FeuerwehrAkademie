# Live-Modus (Kahoot-Prinzip) — Umsetzungskonzept

> Status: **Konzept / Machbarkeitsprüfung — noch kein Code.**
> Ziel: Ausbilder/in startet ein Quiz oder Planspiel, Teilnehmende klinken sich
> live mit ihren eigenen Geräten ein (à la Kahoot). Inhaltsbasis: die ~996
> Prüfungsfragen und die 17 Planspiele — beides ideal geeignet.

---

## 1. Was der Live-Modus sein soll

Ausbilder/in (**Host**) startet eine Session → Beamer/Großbildschirm zeigt
Frage, **Beitritts-Code** und **QR-Code**. Teilnehmende öffnen die App/URL auf
dem Handy, geben Code + Spitzname ein und landen in der **Lobby**. Der Host
startet; alle sehen dieselbe Frage gleichzeitig, tippen ihre Antwort, bekommen
Punkte nach **Richtigkeit + Tempo**, dazwischen ein **Live-Leaderboard**, am
Ende ein **Podium**.

Zwei Inhaltstypen — beide bereits vorhanden:

- **Live-Quiz** — aus den ~996 Fragen zusammengestellt (nach Modul, Thema,
  Schwierigkeit oder Abschlussprüfung). Das klassische Kahoot-Erlebnis.
- **Live-Planspiel** — eines der 17 verzweigten Szenarien, **kollektiv geführt**:
  An jedem Entscheidungsknoten stimmt die Gruppe ab, der Host (oder die Mehrheit)
  entscheidet, die Bewertungsachsen (Rettung · Sicherheit · Taktik) laufen für
  alle sichtbar mit. Das ist didaktisch stärker als reines Quiz und ein echtes
  Alleinstellungsmerkmal gegenüber Kahoot.

---

## 2. Die zentrale technische Frage: Woher kommt der Echtzeit-Kanal?

Live-Multiplayer = geteilter Echtzeit-Zustand über mehrere Geräte. Das braucht
zwingend einen **Kommunikationskanal** zwischen den Geräten. Genau den hat die
App heute bewusst **nicht** (rein statisch, kein Server, `localStorage`,
offline-first). **Diese eine Entscheidung ist der Kern des Features** — UI,
Scoring und Inhalte sind vergleichsweise einfach, weil die Datenstrukturen
schon perfekt passen (siehe Abschnitt 3).

Es gibt drei Wege, mit klaren Trade-offs.

### Weg A — Cloud-Realtime-Backend (BaaS) — **Empfehlung für „echtes Kahoot"**

Ein Realtime-Dienst hält den Raum-Zustand; alle Geräte abonnieren ihn.
Kandidaten: **Firebase** Realtime Database/Firestore, **Supabase** Realtime,
oder ein Pub/Sub wie **Ably / Pusher / PubNub**.

- **Ablauf:** Host legt einen Raum an (`rooms/ABCD`) und pusht die aktuelle
  Frage + Phase. Teilnehmende schreiben ihre Antwort nach
  `rooms/ABCD/answers`; der Host rechnet Punkte und pusht das Leaderboard.
- **Aufwand:** nur Client-SDK + ein paar Sicherheitsregeln, **kein eigener
  Serverbetrieb**, kein Build (SDK per ESM-CDN-Import → passt zur
  No-Build-Philosophie).
- **Kosten:** kostenlose Tarife decken Vereins-/Lehrgangsgröße locker ab
  (Firebase Spark, Supabase Free, Ably Free = 200 gleichzeitige Verbindungen).
- **Vorteile:** robust; funktioniert über beliebige Netze und Standorte (auch
  Remote-Schulung); NAT/Firewall/WLAN egal; wenig eigener Code.
- **Nachteile:** braucht Internet; externer Dienst + Account; datenschutzrechtlich
  zu bewerten — aber es fließen **nur Spitzname + Antworten, ephemer, ohne
  echten Personenbezug** → DSGVO-arm, Raum nach Ende löschen. Bricht das
  „keine Server nötig"-Versprechen — aber nur für dieses **eine, optionale**
  Feature; der Lern- und Prüfungskern bleibt offline und lokal.

### Weg B — Eigener kleiner Raum-Server (WebSocket) — Mittelweg, volle Kontrolle

Ein winziger WebSocket-Hub (eine Datei) als „Spielraum". Betrieb wahlweise:

- **Serverless-Free-Tier:** Cloudflare Workers + Durable Objects, Deno Deploy,
  Val Town → eine Datei, kostenlos, kein Serverunterhalt.
- **Lokal im Feuerwehrhaus:** ein Node-Prozess auf dem Ausbilder-Laptop;
  Teilnehmende im selben WLAN verbinden sich zu `ws://<laptop-ip>:port`.
  100 % offline/lokal → passt exakt zur Feuerwehrhaus-Realität ohne Internet.
  **Aber:** das heutige `server.ps1` ist nur ein statischer Dateiserver und kann
  **kein WebSocket** — es braucht eine neue Laufzeit (z. B. Node).

- **Vorteile:** Datenhoheit, keine Fremdabhängigkeit, LAN-Betrieb ohne Internet.
- **Nachteile:** Server muss betrieben/gewartet werden; eigener Server-Code =
  Bruch mit „No-Build / kein Server"; der lokale Betrieb ist für Laien fummelig
  (IP, Ports, Firewall, WLAN-Client-Isolation).

### Weg C — Peer-to-Peer / gar kein Backend — nur Fallback

- **WebRTC** (Host = Nabe, Teilnehmende = Speichen): braucht trotzdem einen
  **Signaling-Kanal** für den Verbindungsaufbau (SDP/ICE). Ohne winzigen
  Signaling-Server nur über QR/Copy-Paste — bei 20+ Teilnehmenden unpraktikabel
  und fragil bei Netzwechseln.
- **Reiner Beamer-/Ein-Geräte-Modus** (kein Netz, `BroadcastChannel`):
  „Quiz-Show" — Beamer zeigt die Frage, Teams antworten mündlich/per Buzzer,
  Host tippt das Ergebnis. Null Infrastruktur, sofort baubar — aber **kein
  echtes „live einklinken"**.
- **Fazit:** C ist Prototyp/Fallback, nicht das Zielbild.

### Empfehlung

**Weg A (BaaS)** als Zielbild für „echtes Kahoot über beliebige Netze";
optional später **Weg B (lokaler LAN-Server)** als datensouveräne
Offline-Variante fürs Feuerwehrhaus. Am besten den Kanal hinter einem
**Transport-Interface** kapseln (`data/live-transport.js`), sodass A und B
austauschbar dahinterliegen — dann ist der Transport eine Konfigurationsfrage
statt einer Neuentwicklung.

---

## 3. Einbettung in die bestehende App (passt sehr gut)

- **Router:** neue Hash-Routen in `routeView()` — `#/live` (Host: Auswahl/
  Erstellen), `#/live/host/CODE` (Beamer-Ansicht), `#/join` + `#/join/CODE`
  (Teilnehmer). Reiht sich ein wie alle bestehenden Views.
- **Neue Views:** `views/live-host.js`, `views/live-play.js` +
  `data/live-transport.js`. Gleiches `render*`/`bind*`-Muster wie überall.
- **Inhalte 1:1 wiederverwendbar:** Die Fragestruktur
  `{ id, type, options, correct, exp, difficulty, topic }` in `EXAMS` ist schon
  exakt das, was ein Live-Quiz braucht — **kein Umbau der ~996 Fragen**.
  `type: single | multiple | truefalse` bleibt gültig. Ein „Quiz-Builder"
  filtert nur nach Modul/Thema/Schwierigkeit aus dem vorhandenen Pool.
- **Planspiele passen perfekt:** die Knoten
  (`nodes[].decisions[].effects / kind / next`) eignen sich unmittelbar für
  kollektive Abstimmung — der Host fährt denselben Graphen wie `planspiel.js`,
  nur getrieben durch Gruppenvotes statt Einzelklick.
- **Teilnehmende brauchen kein Profil:** Live-Join ist ein „bare"-Modus (wie
  `#/onboarding`), nur Spitzname. Der Erststart-Onboarding-Zwang in `render()`
  muss für `#/join` ausgenommen werden.
- **Lernkreis schließen:** Nach der Session kann jede/r optional die falsch
  beantworteten Fragen ins lokale Fehler-Center (`recordQuestionResult`)
  übernehmen. Die Ausbilder-Ansicht könnte eine Session-Auswertung als CSV
  exportieren — passt zum bestehenden Export-Muster in `views/instructor.js`.

---

## 4. Datenmodell des Live-Raums (transport-unabhängig)

```text
room {
  code, hostId,
  phase:  lobby | question | reveal | scoreboard | ended,
  mode:   quiz | planspiel,
  quizConfig | planspielId,
  currentIndex | currentNode,
  questionStartedAt,               // Server-Zeitstempel (fürs faire Tempo)
  players: { pid: { name, score, streak, lastAnswer } },
  answers: { pid: { choice, ts } } // pro Runde, danach zurückgesetzt
}
```

**Scoring (Kahoot-Stil):** richtige Antwort = Basis (z. B. 1000) × Tempofaktor
(fällt über das Zeitlimit ab) + Streak-Bonus; falsch/Timeout = 0. Bei
`multiple` entweder Teilpunkte oder „alles-oder-nichts". Maßgeblich ist der
**Server-Zeitstempel**, nicht die Client-Uhr.

---

## 5. Zustandsmaschine / Ablauf

```
Lobby (Code + QR, Namen tröpfeln rein)
   └─[Host: Start]→ Frage (Countdown, „x/y geantwortet")
        └→ Reveal (Lösung + Erklärung + Antwortverteilung)
             └→ Scoreboard (Top-Namen)
                  └→ nächste Frage … → Podium / Abschluss
```

Der Host steuert per Klick; der Teilnehmer-Screen folgt automatisch der Phase.

---

## 6. Aufwand & Risiko (grob)

| Baustein | Aufwand | Bemerkung |
|---|---|---|
| Transport-Abstraktion + Lobby/Join + **eine** Quiz-Runde end-to-end | mittel | Hier steckt das **meiste Risiko** (Realtime, Codes/QR, Reconnect) |
| Quiz-Vollmodus (alle Fragetypen, Scoring, Leaderboard, Reveal) | mittel | Inhalte ready, Struktur passt |
| Live-Planspiel (Abstimmung + Bewertungsachsen) | mittel | Eigenständiges, überschaubares Add-on |
| Robustheit (Reconnect, Doppel-Join, Host-Wechsel, Zeitsync) | **unterschätzt** | Die eigentliche Fleißarbeit |

---

## 7. Offene Punkte / zu klären

- **Datenschutz/DSGVO:** bei Cloud nur ephemer + Spitzname; Räume nach Ende
  löschen; EU-Region wählen. Bei LAN-Server kein Thema.
- **Offline-Versprechen:** Live ist optional & additiv; der Kern bleibt offline
  und lokal. Ehrlich kommunizieren, dass Live Netz (Weg A) bzw. WLAN (Weg B)
  braucht.
- **Free-Tier-Limits / Accounts** bei großen Gruppen.
- **Zeitsynchronisation** fürs faire Tempo-Scoring (Server-Zeit maßgeblich).
- **WLAN-Client-Isolation** im Feuerwehrhaus kann den LAN-Weg (B) blockieren.

---

## 8. Empfohlener nächster Schritt

1. **Zielbild festlegen:** Weg A (z. B. Firebase RTDB oder Supabase Realtime)
   für „echtes Kahoot", Transport gekapselt hinter `live-transport.js`.
2. **Vertikaler Durchstich (Prototyp):** ein Raum, ein Quiz aus 5 Fragen,
   2–3 Handys, Ablauf Lobby → Frage → Reveal → Scoreboard. Damit werden die
   Realtime-Kernannahmen früh validiert.
3. **Ausbau:** Fragetypen vervollständigen → Leaderboard/Podium →
   Live-Planspiel → Robustheit + Session-Auswertung.

**Entscheidung, die vor dem Start nötig ist:**
(a) Cloud (Weg A) vs. lokaler LAN-Server (Weg B) als Primärweg,
(b) welcher konkrete Dienst,
(c) muss es zwingend offline im Feuerwehrhaus laufen?
