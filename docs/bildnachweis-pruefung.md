# Prüfnachweis Bildrechte

**Prüfdatum:** 8. September 2026
**Prüfumfang:** alle 10 Fotografien unter `assets/img/drohnen/`
**Methode:** Für jedes Bild wurde die in `assets/js/data/drohnen-bilder.js`
hinterlegte Quell-URL auf Wikimedia Commons aufgerufen und die dort
ausgewiesene Urheber- und Lizenzangabe mit der im Projekt hinterlegten
Angabe verglichen.

## Ergebnis

**Alle 10 Bilder: Urheber und Lizenz stimmen exakt mit der Quelle überein.
Kein Bild musste ersetzt werden. Es besteht kein Handlungsbedarf.**

| Datei | Urheber | Lizenz | Quelle geprüft | Übereinstimmung |
|---|---|---|---|---|
| `bos-drohne-start.jpg` | Iswoar | CC BY-SA 4.0 | ✓ | ✓ exakt |
| `bos-drohne-nutzlast.jpg` | Iswoar | CC BY-SA 4.0 | ✓ | ✓ exakt |
| `einsatzstelle-drohne.jpg` | Tessa Bury | CC BY 4.0 | ✓ | ✓ exakt |
| `bergrettung-uas.jpg` | HotNews Romania – Adi Iacob, Ovidiu Popica | CC BY 3.0 | ✓ | ✓ exakt |
| `tethered-uas.jpg` | Stahlmann | CC BY-SA 4.0 | ✓ | ✓ exakt |
| `kopter-komponenten.jpg` | Lucasbosch | CC BY-SA 3.0 | ✓ | ✓ exakt |
| `waermebild-hund.jpg` | NASA/IPAC | gemeinfrei (PD-USGov-NASA) | ✓ | ✓ exakt |
| `lipo-aufgeblaeht.jpg` | Stemoc | CC0 1.0 | ✓ | ✓ exakt |
| `vegetationsbrand-start.jpg` | US Forest Service – Northern Region | gemeinfrei (PD-USGov) | ✓ | ✓ exakt |
| `kleindrohne.jpg` | Jacek Halicki | CC BY-SA 4.0 | ✓ | ✓ exakt |

## Bewertung der Lizenzpflichten

**Namensnennung (alle CC-BY- und CC-BY-SA-Bilder):** erfüllt. Die Anwendung
gibt an jedem Bild automatisch Urheber, Lizenzbezeichnung, Link auf den
Lizenztext und Link auf die Quelle aus (`assets/js/views/drohnen.js`).
Zusätzlich existiert eine gesammelte Bildnachweis-Seite. Das ist mehr, als
die Lizenzen verlangen.

**Share-Alike (CC BY-SA 3.0/4.0 — betrifft 5 Bilder):** unkritisch. Die
Copyleft-Wirkung greift nur bei *Bearbeitungen* des jeweiligen Bildes.
Die Bilder werden hier unverändert und lediglich neben eigenem Text
angeordnet. Das ist eine reine Zusammenstellung ("Sammelwerk" /
"aggregation"), keine Bearbeitung. Der Quellcode und die Lerninhalte
werden dadurch **nicht** unter CC BY-SA gestellt und können proprietär
lizenziert bleiben. Dies ist in `LICENSE` Ziffer 5 ausdrücklich festgehalten.

> **Wichtig für die Zukunft:** Wird eines der CC-BY-SA-Bilder *verändert*
> (zugeschnitten, retuschiert, mit Beschriftungen versehen, in eine Grafik
> montiert), muss das Ergebnis unter derselben Lizenz weitergegeben und die
> Bearbeitung kenntlich gemacht werden. Reine Skalierung und
> Formatumwandlung gelten dabei nicht als Bearbeitung.

**Gemeinfreie Bilder (2 Bilder, US-Bundesbehörden):** Beide sind Werke von
US-Bundesbehörden (NASA bzw. US Forest Service) und in den USA gemeinfrei.
Die Namensnennung erfolgt freiwillig und ist wissenschaftlich sauber.

## Schriften

Zusätzlich geprüft: Die Schriftarten Inter und JetBrains Mono stehen unter
der SIL Open Font License 1.1, die die Einbettung und kommerzielle Nutzung
auch in proprietären Produkten erlaubt. Nachweis in
`assets/fonts/LIZENZ.md`. Sie wurden im Zuge dieser Prüfung von der
Einbindung über Google-Server auf lokale Auslieferung umgestellt.

## Nicht Gegenstand dieser Prüfung

- Die 39 Schaubilder und 12 Drohnen-Schaubilder sind **eigene Inline-SVG**
  und werfen keine Fremdrechtefragen auf.
- Die Screenshots unter `assets/press/shots/` zeigen die eigene Anwendung.
- Die verlinkten YouTube-Videos werden nicht gehostet, sondern erst auf
  Klick von youtube-nocookie.com geladen. Für Lernzwecke ist die
  Verlinkung zulässig; eine Einbettung fremder Videos in ein
  kostenpflichtiges Angebot sollte vor dem Verkaufsstart gesondert
  bewertet werden.

## Wiedervorlage

Bei jeder Ergänzung eines Fotos ist der Eintrag in
`assets/js/data/drohnen-bilder.js` zwingend mit Urheber, Lizenz,
Lizenz-URL und Quell-URL zu füllen. Der Kopfkommentar dieser Datei weist
bereits darauf hin. Eine erneute Vollprüfung empfiehlt sich vor dem ersten
kommerziellen Vertrieb.
