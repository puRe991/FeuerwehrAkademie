# 🧰 Installations-Setup (Windows)

Dieser Ordner enthält alles, um aus der Feuerwehr Online Akademie ein
**professionelles Windows-Installationsprogramm** (`FeuerwehrAkademie-Setup.exe`)
zu erzeugen – installierbar wie normale Software, mit Startmenü- und
Desktop-Verknüpfung, Eintrag unter *Apps & Features* und sauberer
Deinstallation.

## 📥 Für Anwender: einfach installieren

1. Auf der [Releases-Seite](https://github.com/puRe991/FeuerwehrAkademie/releases)
   die aktuelle **`FeuerwehrAkademie-Setup.exe`** herunterladen.
2. Doppelklick, dem Assistenten folgen (Deutsch/Englisch) – fertig.
3. Die Akademie über die **Startmenü-** oder **Desktop-Verknüpfung** starten.
   Sie öffnet sich als eigenständiges App-Fenster.

> Kein Administrator nötig: Das Setup lässt sich wahlweise *nur für Sie* oder
> *für alle Benutzer* installieren. Es läuft vollständig **offline** – der
> mitgelieferte lokale Server bindet ausschließlich an `127.0.0.1` (nur dieser PC).

Zum Schließen des Hintergrund-Servers gibt es die Startmenü-Verknüpfung
**„Feuerwehr Akademie beenden"**.

## 🏗️ Für Entwickler: Setup selbst bauen

### Automatisch (empfohlen)

Der Workflow [`.github/workflows/build-installer.yml`](../.github/workflows/build-installer.yml)
baut das Setup auf einem Windows-Runner:

- **Bei einem Versions-Tag** (z. B. `git tag v1.0.0 && git push origin v1.0.0`)
  wird automatisch ein GitHub-Release erstellt und die `Setup.exe` angehängt.
- **Manuell** über *Actions → „Windows-Installer bauen" → Run workflow* (mit
  optionaler Versionsnummer). Das Ergebnis liegt anschließend als Build-Artefakt
  zum Download bereit.

### Lokal (auf einem Windows-PC)

1. [Inno Setup 6](https://jrsoftware.org/isdl.php) installieren (kostenlos).
2. Im Projekt-Hauptordner ausführen:

   ```bat
   "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" installer\FeuerwehrAkademie.iss
   ```

   Optional mit eigener Versionsnummer:

   ```bat
   "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" /DAppVersion=1.2.0 installer\FeuerwehrAkademie.iss
   ```

3. Das fertige Setup liegt in **`installer\Output\FeuerwehrAkademie-Setup.exe`**.

## 📁 Inhalt dieses Ordners

| Datei | Zweck |
|---|---|
| `FeuerwehrAkademie.iss` | Inno-Setup-Skript – beschreibt das komplette Installationsprogramm |
| `Feuerwehr-Akademie.vbs` | App-Starter: startet den lokalen Server unsichtbar und öffnet die Akademie als App-Fenster |
| `Feuerwehr-Akademie-beenden.vbs` | Beendet den im Hintergrund laufenden Server |
| `assets/feuerwehr-akademie.ico` | Programm-Icon (aus dem App-Logo erzeugt, 16–256 px) |

Die eigentlichen App-Dateien (`index.html`, `assets/`, `server.ps1` …) liegen
weiterhin im Projekt-Hauptordner und werden vom Setup automatisch eingesammelt.
