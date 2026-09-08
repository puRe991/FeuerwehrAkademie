# Prüfprotokoll: Aktualität der Bezugsdokumente

**Prüfdatum:** 8. September 2026
**Gegenstand:** die in `assets/js/data/module-sources.js` je Modul
ausgewiesenen Vorschriften und Normen.

## Ausgangslage

Vor dieser Prüfung trug die Datei eine einzige Konstante `STAND = '2025'`,
die pauschal für alle 26 Module galt. Das war aus zwei Gründen
problematisch:

1. Es suggerierte einen Vorschriftenstand von 2025, obwohl mehrere
   zugrunde liegende Feuerwehr-Dienstvorschriften aus den Jahren 1999 bis
   2014 stammen und seither nicht neu gefasst wurden.
2. Es behauptete eine gleichzeitige Überprüfung aller 26 Module, die es
   nie gab.

**Umgesetzt:** Der Ausgabestand wird nun **je Bezugsdokument** im Feld
`edition` geführt und in der Anwendung an jeder Vorschrift als Badge
angezeigt. `STAND` bezeichnet jetzt ausdrücklich nur noch den Stand der
*redaktionellen Aufbereitung* (09/2026).

## Geprüfte Feuerwehr-Dienstvorschriften

| Vorschrift | Titel | Ausgabe | Status |
|---|---|---|---|
| FwDV 1 | Grundtätigkeiten – Lösch- und Hilfeleistungseinsatz | 2006/2007 | aktuell gültige Fassung |
| FwDV 2 | Ausbildung der Freiwilligen Feuerwehren | 01/2012 | aktuell gültige Fassung |
| FwDV 3 | Einheiten im Lösch- und Hilfeleistungseinsatz | 02/2008 | aktuell gültige Fassung |
| FwDV 7 | Atemschutz | 2002, Änd. 2005 | aktuell gültige Fassung |
| FwDV 8 | Tauchen | 03/2014 | aktuell gültige Fassung |
| FwDV 100 | Führung und Leitung im Einsatz | 1999, Änd. 2005 | aktuell gültige Fassung |
| FwDV 500 | Einheiten im ABC-Einsatz | **01/2022** | ⚠️ **neu gefasst — siehe unten** |
| FwDV/DV 810 | Sprech- und Datenfunkverkehr | 2018 | aktuell gültige Fassung |

> Die niedrigen Jahreszahlen sind **kein Mangel des Projekts**: Es sind
> tatsächlich die aktuell gültigen Fassungen. Der AFKzV fasst die FwDV nur
> selten neu. Genau deshalb ist die Angabe je Dokument wertvoll — sie zeigt
> Ausbildern, worauf sich eine Aussage stützt.

## ⚠️ Befund mit Handlungsbedarf: FwDV 500

Die FwDV 500 „Einheiten im ABC-Einsatz" wurde am **16. März 2022** vom
AFKzV in der Fassung **Januar 2022** beschlossen und den Ländern zur
Einführung empfohlen. Sie **ersetzt die Fassung von 2012**.

Wesentliche Änderungsgründe waren das neue Strahlenschutzrecht, geänderte
Vorschriften im Gefahrgutrecht, Änderungen der Biostoffverordnung sowie
die Weiterentwicklung des Standes der Technik bei der Dekontamination.

**Zu tun:** Die Quellenangabe für Modul I (ABC-Gefahrstoffe) ist bereits
auf `01/2022` korrigiert. **Der inhaltliche Abgleich der Lektionen und
Prüfungsfragen des Moduls I gegen die Fassung 2022 steht jedoch noch aus**
und sollte Teil der fachlichen Abnahme durch die Ausbilderin bzw. den
Ausbilder sein. Besonders zu prüfen sind Aussagen zu Strahlenschutz,
Dekontamination und Gefahrgutkennzeichnung.

## Weitere geprüfte Regelwerke

| Regelwerk | Ausgabe | Status |
|---|---|---|
| DGUV Vorschrift 49 „Feuerwehren" | **05/2025** | aktuell; löste 2019 die GUV-V C53 ab, zuletzt in Abschnitt 2.4 und Anhang 1 aktualisiert |
| DGUV Regel 105-049 | begleitend | konkretisiert die Vorschrift 49 — **Ergänzung empfohlen**, bisher nicht ausgewiesen |

## Nicht abschließend geprüft

Für folgende Angaben konnte der Ausgabestand nicht mit vertretbarem
Aufwand belastbar bestimmt werden. Sie sind bewusst **ohne** `edition`
belassen, statt ein geratenes Jahr auszuweisen:

- DIN-Normen (DIN EN 469, 1846, 1028, 3, 2, 13501; DIN 4102, 14675,
  14751, 14530, 14210) — kostenpflichtig, Ausgabestände wechseln
  regelmäßig. **Empfehlung:** vor dem kommerziellen Vertrieb über das
  Beuth/DIN-Portal verifizieren.
- vfdb-Richtlinien, HuPF, ERC-Leitlinien, TR-BOS, ERICards
- Landesrecht (Landesbrandschutzgesetze, Landesbauordnungen,
  Landeskatastrophenschutzgesetze) — 16 Länder mit eigenen Ständen; die
  Anwendung weist hierauf bereits korrekt hin.

## Empfehlung zur Wiedervorlage

Die FwDV werden vom AFKzV gepflegt. Eine jährliche Kontrolle über die
Seiten einer Landesfeuerwehrschule (z. B. LFS Sachsen, IBK
Heyrothsberge) genügt, um Neufassungen zu bemerken. Der nächste sinnvolle
Prüftermin ist **09/2027** oder früher, sobald eine Neufassung bekannt wird.
