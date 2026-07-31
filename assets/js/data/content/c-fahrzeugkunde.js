/* =========================================================================
   MODUL C — Fahrzeugkunde
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls C.

   Fachliche Grundlage: DIN EN 1846 (Feuerwehrfahrzeuge), DIN 14530 ff.
   (Löschfahrzeuge), DIN 14555 ff. (Rüst- und Gerätewagen), FwDV 3.
   Angaben zu Tankgrößen, Massen und Beladung sind Richtwerte der
   jeweiligen Normfassung – die tatsächliche Ausführung kann abweichen.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_C = [

/* ---------------------------------------------------------------- C1 ---- */
{
  id: 'c1', title: 'Systematik & Kurzbezeichnungen', duration: 22,
  blocks: [
    P('„HLF 20/16 mit FPN 10-2000" – für Außenstehende ist das Kauderwelsch, für die Feuerwehr eine vollständige Beschreibung eines Fahrzeugs in wenigen Zeichen. Diese Systematik ist kein Selbstzweck: Sie ermöglicht es der Leitstelle, aus einer Fahrzeugliste sofort zu erkennen, welche Fähigkeiten alarmiert werden – und einer fremden Einheit, sich auf einem unbekannten Fahrzeug zurechtzufinden.'),

    H2('warum', 'Warum Fahrzeuge genormt sind'),
    P('Feuerwehrfahrzeuge in Deutschland folgen europäischen und nationalen Normen. Die <b>DIN EN 1846</b> regelt die grundsätzliche Klassifizierung, die <b>DIN 14530</b> und weitere beschreiben die einzelnen Fahrzeugtypen mit ihrer Mindestbeladung.'),
    KF(
      'Überörtliche Zusammenarbeit: Ein LF 20 aus dem Nachbarkreis kann dasselbe wie das eigene.',
      'Ausbildung: Was auf einem Fahrzeugtyp gelernt wurde, gilt auch für andere Fahrzeuge desselben Typs.',
      'Beschaffung: Gemeinden können vergleichbar ausschreiben und beschaffen.',
      'Alarmplanung: Die Leitstelle disponiert nach Fähigkeiten, nicht nach Einzelfahrzeugen.',
      'Ersatzteile und Wartung sind standardisiert.'),

    H2('klassen', 'Die Klassifizierung nach DIN EN 1846'),
    P('Jedes Feuerwehrfahrzeug wird nach drei Merkmalen eingeordnet: Verwendung, zulässige Gesamtmasse und Geländefähigkeit. Besonders die letzten beiden entscheiden im Einsatz darüber, wohin ein Fahrzeug überhaupt fahren kann.'),
    TBL(['Merkmal', 'Einteilung'],[
      ['Massenklasse L (leicht)', 'zulässige Gesamtmasse bis etwa 7,5 t'],
      ['Massenklasse M (mittel)', 'etwa 7,5 bis 16 t'],
      ['Massenklasse S (super)', 'über etwa 16 t'],
      ['Kategorie 1 – straßenfähig', 'nur befestigte Wege'],
      ['Kategorie 2 – geländefähig', 'auch unbefestigte Wege'],
      ['Kategorie 3 – geländegängig', 'schweres Gelände, Allradantrieb'],
    ]),
    CO('info', 'Warum das im Einsatz zählt', 'Ein 16-Tonner auf einem aufgeweichten Waldweg wird zum Hindernis für alle nachrückenden Kräfte. Deshalb gehört die Frage nach Masse und Geländefähigkeit zur Anfahrtsplanung – besonders bei Vegetationsbränden und Einsätzen abseits befestigter Straßen.'),

    H2('kuerzel', 'Die Kurzbezeichnungen'),
    TBL(['Kürzel', 'Bedeutung', 'Typische Besatzung'],[
      ['KLF', 'Kleinlöschfahrzeug', '1/5 – Staffel'],
      ['TSF / TSF-W', 'Tragkraftspritzenfahrzeug, mit „W" zusätzlich Wassertank', '1/5 – Staffel'],
      ['MLF', 'Mittleres Löschfahrzeug', '1/5 – Staffel'],
      ['LF 10 / LF 20', 'Löschgruppenfahrzeug', '1/8 – Gruppe'],
      ['HLF 10 / HLF 20', 'Hilfeleistungslöschgruppenfahrzeug', '1/8 – Gruppe'],
      ['TLF', 'Tanklöschfahrzeug mit großem Wasservorrat', '1/2 bis 1/5'],
      ['DLK 23/12', 'Drehleiter mit Korb', '1/2 – Trupp'],
      ['RW', 'Rüstwagen für schwere technische Hilfe', '1/2 – Trupp'],
      ['GW', 'Gerätewagen mit Spezialbeladung', 'variabel'],
      ['ELW 1 / ELW 2', 'Einsatzleitwagen', 'variabel'],
      ['SW', 'Schlauchwagen für lange Wegstrecken', '1/2'],
      ['WLF', 'Wechselladerfahrzeug für Abrollbehälter', '1/2'],
      ['MTF / MTW', 'Mannschaftstransportfahrzeug', 'bis 1/8'],
    ]),
    CO('warn', 'Die Zahlen richtig lesen', 'Beim <b>LF 20</b> steht die 20 für die <b>Pumpenleistung</b>: eine Feuerlöschkreiselpumpe mit Nennförderstrom 2000 l/min bei 10 bar. Sie sagt nichts über den Wassertank. Historische Bezeichnungen wie „LF 8/6" nannten dagegen zuerst die Pumpenleistung und dann den Löschwasserbehälter in hundert Litern – das führt bis heute zu Verwechslungen.'),
    FIG('fahrzeug', 'Grundkomponenten eines Löschgruppenfahrzeugs: Besatzung, Löschwassertank und Feuerlöschkreiselpumpe.'),

    H2('pumpen', 'Pumpenbezeichnungen'),
    DEF('FPN 10-2000', 'F = Feuerlöschpumpe, P = Pumpe, N = Normaldruck, 10 = Nenndruck in bar, 2000 = Nennförderstrom in Litern pro Minute. Ein vorangestelltes <b>P</b> wie in <b>PFPN 10-1000</b> steht für „portable", also eine tragbare Pumpe – die klassische Tragkraftspritze.'),
    P('Diese Bezeichnung ist eine der praktischsten Abkürzungen der Feuerwehr: Sie sagt in sieben Zeichen, wie viel Wasser die Pumpe bei welchem Druck liefert. Für die Wasserbedarfsplanung ist das die entscheidende Größe.'),

    H2('lesen', 'Ein Fahrzeug erschließen'),
    P('Wer vor einem unbekannten Feuerwehrfahrzeug steht, kann sich mit wenigen Fragen orientieren – auch ohne die Wehr zu kennen.'),
    STEPS(
      'Welche Kurzbezeichnung steht am Fahrzeug? Daraus folgt der Grundtyp.',
      'Welche Besatzung ist vorgesehen? Gruppe, Staffel oder Trupp?',
      'Gibt es einen Löschwasserbehälter, und wie groß ist er?',
      'Welche Pumpe ist verbaut – fest eingebaut, Vorbaupumpe oder Tragkraftspritze?',
      'Welche Sonderbeladung ist erkennbar – Rettungssatz, Atemschutz, Messtechnik?',
      'Wo liegen die häufig gebrauchten Geräte? Beschriftung und Rollladenordnung lesen.'),
    CO('tip', 'Lernen im Dienst, nicht im Einsatz', 'Der beste Zeitpunkt, ein Fahrzeug kennenzulernen, ist der Dienstabend. Wer weiß, in welchem Geräteraum der Verteiler liegt, spart im Einsatz Sekunden – und zwar bei jedem einzelnen Handgriff.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Normung ermöglicht überörtliche Zusammenarbeit, Ausbildung und Beschaffung.',
      'DIN EN 1846 klassifiziert nach Verwendung, Masse (L/M/S) und Geländefähigkeit (1/2/3).',
      'Kurzbezeichnungen nennen Grundtyp und Fähigkeit.',
      'Die Zahl beim LF 20 steht für die <b>Pumpenleistung</b>, nicht für den Tank.',
      'FPN 10-2000 = Normaldruckpumpe, 10 bar, 2000 l/min; PFPN = tragbar.',
      'Ein unbekanntes Fahrzeug lässt sich über Typ, Besatzung, Tank, Pumpe und Beladung erschließen.'),
  ],
},

/* ---------------------------------------------------------------- C2 ---- */
{
  id: 'c2', title: 'Löschfahrzeuge & Sonderfahrzeuge', duration: 22,
  blocks: [
    P('Die meisten Feuerwehren in Deutschland arbeiten mit ein bis drei Fahrzeugen. Trotzdem lohnt der Blick auf die gesamte Familie: Bei überörtlicher Hilfe rückt an, was die Nachbarwehr hat, und wer weiß, was ein Rüstwagen oder ein Schlauchwagen leistet, fordert das Richtige an.'),

    H2('lf', 'Das Löschgruppenfahrzeug – das Arbeitspferd'),
    P('Das (H)LF ist das Standardfahrzeug der meisten Wehren. Es transportiert eine vollständige <b>Gruppe (1/8)</b>, führt Löschwasser mit, hat eine fest eingebaute Feuerlöschkreiselpumpe und eine umfangreiche genormte Beladung.'),
    TBL(['Typ', 'Pumpe (typisch)', 'Löschwasser (typisch)', 'Besonderheit'],[
      ['LF 10', 'FPN 10-1000', 'ab etwa 1.200 l', 'kompakter, auch für enge Ortslagen'],
      ['LF 20', 'FPN 10-2000', 'ab etwa 2.000 l', 'mehr Wasser und Pumpenleistung'],
      ['HLF 10 / HLF 20', 'wie LF', 'wie LF', 'zusätzlich hydraulischer Rettungssatz und THL-Beladung'],
      ['MLF', 'FPN 10-1000', 'etwa 600 l', 'Staffelbesatzung, für kleinere Wehren'],
      ['TSF-W', 'Tragkraftspritze', 'etwa 500 l', 'Staffel, Pumpe wird entnommen'],
      ['KLF', 'Tragkraftspritze', 'etwa 500 l', 'kleinstes genormtes Löschfahrzeug'],
    ]),
    KF(
      'Feuerlöschkreiselpumpe, fest eingebaut und vom Fahrzeugmotor angetrieben.',
      'Löschwasserbehälter für den sofortigen Erstangriff.',
      'Tragbare Leitern, Schläuche, Armaturen, Strahlrohre.',
      'Umluftunabhängige Atemschutzgeräte, teils in der Mannschaftskabine anlegbar.',
      'Beleuchtung, Stromerzeuger, Lüfter, Kleingeräte.',
      'Beim HLF zusätzlich Schere, Spreizer, Rettungszylinder und Stabilisierungsmaterial.'),
    CO('info', 'Atemschutz in der Kabine', 'Auf vielen Löschfahrzeugen können die Atemschutzgeräte bereits während der Anfahrt angelegt werden. Das spart an der Einsatzstelle wertvolle Minuten. Voraussetzung ist, dass die Geräte in den Sitzen verlastet und die Kräfte angeschnallt sind – Anschnallpflicht gilt auch dabei.'),

    H2('tlf', 'Tanklöschfahrzeuge'),
    P('Das <b>TLF</b> ist auf den Transport großer Wassermengen ausgelegt. Es hat eine kleinere Besatzung und weniger Beladung, dafür einen Tank von mehreren tausend Litern. Typische Einsatzfelder sind Vegetationsbrände, Gebiete ohne Hydrantennetz und der Pendelverkehr zur Wasserversorgung.'),
    P('Moderne Varianten für den Vegetationsbrand sind zusätzlich geländegängig, haben einen Selbstschutzanlage und lassen sich während der Fahrt einsetzen (Pump-and-Roll). Mehr dazu in <b>Modul V</b>.'),

    H2('dlk', 'Hubrettungsfahrzeuge'),
    DEF('DLK 23/12', 'Drehleiter mit Korb, deren Bezeichnung die Leistungsdaten nennt: <b>23 Meter Nennrettungshöhe bei 12 Metern Ausladung</b>. Beide Werte hängen zusammen – je weiter die Leiter zur Seite ausgefahren wird, desto geringer ist die erreichbare Höhe.'),
    UL(
      '<b>Menschenrettung</b> aus Obergeschossen, wenn der Treppenraum nicht nutzbar ist.',
      '<b>Angriffsweg</b> für den Trupp in obere Geschosse und auf Dächer.',
      '<b>Arbeitsplattform</b> für Arbeiten in der Höhe.',
      '<b>Wasserabgabe</b> über ein Wenderohr am Korb.',
      '<b>Technische Hilfe</b>, etwa beim Entfernen loser Bauteile nach Sturm.'),
    CO('tip', 'Der zweite Rettungsweg', 'In vielen Gebäuden ist die Drehleiter der baurechtlich vorgesehene <b>zweite Rettungsweg</b>. Damit sie ihn tatsächlich darstellen kann, müssen Zufahrten, Aufstell- und Bewegungsflächen frei bleiben. Zugeparkte Feuerwehrzufahrten sind deshalb kein Ordnungsproblem, sondern ein Sicherheitsproblem.'),

    H2('sonder', 'Rüst-, Geräte- und Führungsfahrzeuge'),
    TBL(['Fahrzeug', 'Aufgabe', 'Typische Ausstattung'],[
      ['RW – Rüstwagen', 'schwere technische Hilfe', 'Seilwinde, Stromerzeuger, Lichtmast, umfangreiches Werkzeug, Hebekissen'],
      ['GW-Gefahrgut', 'ABC-Einsätze', 'Schutzanzüge, Messtechnik, Auffang- und Abdichtmaterial, Dekon'],
      ['GW-Atemschutz', 'Atemluftversorgung', 'Ersatzflaschen, Kompressor, Werkstattausstattung'],
      ['GW-Logistik', 'Nachschub', 'Verbrauchsmaterial, Verpflegung, Transportmittel'],
      ['GW-Messtechnik', 'Spür- und Messtrupp', 'Messgeräte, Probenahme, Dokumentation'],
      ['SW – Schlauchwagen', 'Wasserförderung über lange Wegstrecke', 'mehrere tausend Meter B-Schlauch, Verteiler, Armaturen'],
      ['ELW 1', 'Führung kleinerer Lagen', 'Funk, Arbeitsplatz, Kartenmaterial'],
      ['ELW 2', 'Führungsunterstützung großer Lagen', 'Stabsarbeitsplätze, Lagedarstellung, umfangreiche IuK'],
    ]),

    H2('wlf', 'Das Wechselladersystem'),
    P('Ein <b>Wechselladerfahrzeug (WLF)</b> transportiert austauschbare <b>Abrollbehälter (AB)</b>. Damit lässt sich ein Trägerfahrzeug für viele Aufgaben nutzen – man tauscht nur den Behälter. Für Feuerwehren ist das wirtschaftlich attraktiv, weil eine teure Fahrgestell-Investition mehrere Spezialfahrzeuge ersetzt.'),
    UL(
      '<b>AB-Wasser und AB-Schaum:</b> große Lösch- und Schaummittelmengen',
      '<b>AB-Rüst:</b> schwere technische Hilfe',
      '<b>AB-Gefahrgut:</b> Ausstattung für ABC-Einsätze',
      '<b>AB-Atemschutz, AB-Logistik, AB-Mulde, AB-Sandsack</b> und viele weitere'),
    CO('warn', 'Zeitfaktor beachten', 'Ein Abrollbehälter steht nicht neben dem WLF, sondern im Depot – oft in einer anderen Gemeinde. Zwischen Alarmierung und Verfügbarkeit vergeht erhebliche Zeit. Wer einen bestimmten Behälter braucht, fordert ihn deshalb früh an.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Das (H)LF transportiert eine Gruppe, Löschwasser, Pumpe und Normbeladung.',
      'Das HLF hat zusätzlich hydraulischen Rettungssatz und THL-Beladung.',
      'TLF bringt viel Wasser bei kleiner Besatzung – Vegetationsbrand, Pendelverkehr.',
      '<b>DLK 23/12</b> = 23 m Rettungshöhe bei 12 m Ausladung; oft der zweite Rettungsweg.',
      'RW, GW und SW decken Sonderaufgaben ab.',
      'ELW 1 für kleinere, ELW 2 für große Führungslagen.',
      'Wechsellader mit Abrollbehältern sind flexibel, brauchen aber Vorlaufzeit.'),
  ],
},

/* ---------------------------------------------------------------- C3 ---- */
{
  id: 'c3', title: 'Feuerwehrtechnische Beladung & Normung', duration: 20,
  blocks: [
    P('Ein Löschgruppenfahrzeug enthält mehrere hundert Einzelteile. Dass eine fremde Einsatzkraft trotzdem in Sekunden den Verteiler findet, liegt an der genormten Beladung und an einer Ordnung, die überall demselben Prinzip folgt.'),

    H2('normbeladung', 'Norm- und Zusatzbeladung'),
    DEF('Normbeladung', 'Die in der jeweiligen DIN festgelegte <b>Mindestbeladung</b> eines Fahrzeugtyps. Sie stellt sicher, dass jedes Fahrzeug dieses Typs die vorgesehenen Aufgaben erfüllen kann. Darüber hinaus kann eine Wehr nach örtlichem Bedarf <b>Zusatzbeladung</b> mitführen – etwa Wathosen in Hochwassergebieten oder zusätzliche Motorsägen in Waldgemeinden.'),
    P('Die Zusatzbeladung ist der Punkt, an dem sich Fahrzeuge desselben Typs unterscheiden. Deshalb reicht es nicht, „ein LF 20" zu kennen – man muss <b>sein</b> LF 20 kennen. Bei überörtlicher Hilfe lohnt deshalb die kurze Frage, was das fremde Fahrzeug zusätzlich dabeihat.'),

    H2('gruppen', 'Gliederung der Beladung'),
    TBL(['Gruppe', 'Beispiele'],[
      ['Löschgeräte', 'Strahlrohre, Schläuche, Verteiler, Standrohr, Schaumzumischer'],
      ['Rettungsgeräte', 'tragbare Leitern, Rettungstuch, Krankentrage, Sprungrettungsgerät'],
      ['Technische Geräte', 'Motorsäge, Trennschleifer, Stromerzeuger, Lüfter, Tauchpumpe'],
      ['Hydraulische Rettungsgeräte', 'Schere, Spreizer, Rettungszylinder, Aggregat'],
      ['Mess- und Warngeräte', 'CO-Warner, Ex-Messgerät, Wärmebildkamera'],
      ['Atemschutz', 'Pressluftatmer, Ersatzflaschen, Masken, Fluchthauben'],
      ['Sanitätsmaterial', 'Verbandkasten, Rettungsdecke, Sanitätsrucksack'],
      ['Sonstiges', 'Werkzeug, Bindemittel, Absperrmaterial, Beleuchtung'],
    ]),

    H2('ordnung', 'Ordnung im Geräteraum'),
    P('Geräte sind nicht beliebig verstaut, sondern nach zwei Grundsätzen: <b>häufig gebraucht gleich griffbereit</b> und <b>zusammengehörig zusammen</b>. Der Verteiler liegt in der Nähe der B-Schläuche, das Standrohr beim Hydrantenschlüssel, der Rettungssatz beim Aggregat.'),
    KF(
      'Beschriftung und Piktogramme an den Geräteräumen beachten und pflegen.',
      'Schwere Geräte tief verlasten – das senkt den Schwerpunkt und erleichtert die Entnahme.',
      'Häufig gebrauchte Geräte in Griffhöhe und an der Fahrzeugseite, die zur Einsatzstelle zeigt.',
      'Nach jeder Änderung alle Einsatzkräfte informieren – stillschweigende Umbauten kosten im Einsatz Zeit.',
      'Beladeplan im Fahrzeug mitführen und aktuell halten.'),

    H2('ladungssicherung', 'Ladungssicherung'),
    CO('danger', 'Lose Geräte werden zu Geschossen', 'Bei einer Vollbremsung oder einem Unfall wirkt auf ein nicht gesichertes Gerät ein Vielfaches seines Gewichts. Ein loser Spreizer im Mannschaftsraum ist bei einem Aufprall lebensgefährlich für die gesamte Besatzung. Jedes Gerät gehört in seine Halterung – auch das, das gleich wieder gebraucht wird.'),
    KF(
      'Geräte immer in die vorgesehene Halterung zurücklegen, nicht nur ablegen.',
      'Halterungen und Gurte auf Funktion prüfen; defekte Halterungen melden.',
      'Nichts lose im Mannschaftsraum transportieren.',
      'Nach dem Einsatz vollständig und gesichert verlasten, bevor abgerückt wird.',
      'Bei Nachforderung von Material auf sichere Verlastung achten.'),

    H2('bereitschaft', 'Einsatzbereitschaft herstellen'),
    STEPS(
      'Vollständigkeit gegen den Beladeplan prüfen – nicht aus dem Gedächtnis.',
      'Geräte reinigen und auf Beschädigung prüfen.',
      'Betriebsstoffe auffüllen: Kraftstoff, Löschwasser, Schaummittel, Bindemittel.',
      'Atemschutzgeräte tauschen, Flaschen füllen lassen.',
      'Akkus laden, Verbrauchsmaterial ergänzen.',
      'Mängel dokumentieren und melden.',
      'Erst danach Einsatzbereitschaft an die Leitstelle melden.'),
    CO('tip', 'Fahrzeugkunde ist Selbstschutz', 'Wer die Beladung seines Fahrzeugs blind beherrscht, arbeitet im Einsatz schneller, sicherer und ruhiger. Das ist eine der wenigen Fähigkeiten, die sich vollständig am Dienstabend erwerben lässt – ohne Lehrgang, ohne Kosten, nur mit Zeit am Fahrzeug.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Normbeladung ist die Mindestausstattung, Zusatzbeladung ergänzt nach örtlichem Bedarf.',
      'Beladung ist nach Verwendungszweck gruppiert.',
      'Ordnungsprinzip: häufig gebraucht griffbereit, zusammengehörig zusammen.',
      'Lose Geräte sind bei einem Unfall lebensgefährlich – immer sichern.',
      'Beladeplan mitführen, aktuell halten und zur Vollständigkeitsprüfung nutzen.',
      'Einsatzbereitschaft erst melden, wenn das Fahrzeug vollständig ist.'),
  ],
},

/* ---------------------------------------------------------------- C4 ---- */
{
  id: 'c4', title: 'Löschwasserversorgung & Pumpensystem', duration: 20,
  blocks: [
    P('Ein Löschfahrzeug bringt Wasser mit – aber nicht viel. Ein C-Rohr mit rund 100 Litern pro Minute leert einen 1.000-Liter-Tank in etwa zehn Minuten. Deshalb ist die Frage, woher das nächste Wasser kommt, von der ersten Minute an eine der wichtigsten des Einsatzes.'),

    H2('quellen', 'Woher das Löschwasser kommt'),
    DEF('Abhängige und unabhängige Löschwasserversorgung', '<b>Abhängig</b> heißt: aus dem Trinkwassernetz über Hydranten – schnell verfügbar, aber in der Menge durch die Leistung des Netzes begrenzt. <b>Unabhängig</b> heißt: aus offenen Gewässern, Löschwasserbehältern, Zisternen oder Brunnen – vom Netz unabhängig und meist ergiebiger, aber aufwendiger herzustellen.'),
    TBL(['Quelle', 'Vorteil', 'Grenze'],[
      ['Fahrzeugtank', 'sofort verfügbar, kein Aufbau', 'nach wenigen Minuten leer'],
      ['Unterflurhydrant', 'dicht verfügbar, schnell', 'Netzleistung, Standrohr nötig, Deckel muss gefunden werden'],
      ['Überflurhydrant', 'schnell erkennbar und anschließbar', 'seltener, Netzleistung'],
      ['Offenes Gewässer', 'praktisch unbegrenzt', 'Saugleitung, Saughöhe, Zugang, Verschmutzung'],
      ['Löschwasserbehälter, Zisterne', 'unabhängig vom Netz', 'begrenzte Menge, Wartungszustand'],
      ['Pendelverkehr mit TLF', 'flexibel im Gelände', 'personal- und fahrzeugintensiv'],
    ]),
    CO('info', 'Hydranten sind nicht gleich Hydranten', 'Die entnehmbare Menge hängt vom Rohrnetz ab, nicht vom Hydranten selbst. In Wohngebieten mit kleinen Leitungsquerschnitten kann ein Hydrant deutlich weniger liefern als erwartet. Deshalb gehört die Löschwasserversorgung zur Objekt- und Ortskenntnis – und in den Feuerwehrplan.'),

    H2('tank', 'Der Löschwassertank'),
    P('Der Fahrzeugtank ist die Reserve für den <b>Erstangriff</b>. Er erlaubt es, sofort mit der Brandbekämpfung zu beginnen, während parallel die Wasserversorgung aufgebaut wird. Genau so ist er gedacht – als Überbrückung, nicht als Löschwasservorrat.'),
    TBL(['Wasserabgabe', 'Durchfluss (Richtwert)', '1.000 l reichen etwa'],[
      ['C-Rohr mit Mundstück', '100 l/min', '10 Minuten'],
      ['C-Rohr ohne Mundstück', '200 l/min', '5 Minuten'],
      ['B-Rohr mit Mundstück', '400 l/min', '2,5 Minuten'],
      ['B-Rohr ohne Mundstück', '800 l/min', 'gut 1 Minute'],
    ]),
    CO('warn', 'Der Tank ist schneller leer, als man denkt', 'Diese Tabelle ist der Grund, warum die Wasserversorgung parallel zum Erstangriff aufgebaut wird und nicht danach. Ein Angriffstrupp, dem im Innenangriff das Wasser ausgeht, ist in unmittelbarer Gefahr.'),

    H2('pumpen', 'Das Pumpensystem am Fahrzeug'),
    P('Die <b>Feuerlöschkreiselpumpe</b> ist bei den meisten Löschfahrzeugen fest eingebaut und wird vom Fahrzeugmotor über ein Nebenantriebsgetriebe angetrieben. Sie kann Wasser aus dem eigenen Tank, aus einem Hydranten oder – über eine Saugleitung – aus offenem Gewässer fördern.'),
    UL(
      '<b>Heckpumpe:</b> die häufigste Bauform, Bedienstand am Fahrzeugheck.',
      '<b>Vorbaupumpe:</b> vorn eingebaut, ermöglicht Wasserabgabe während der Fahrt.',
      '<b>Tragkraftspritze (TS):</b> tragbare Pumpe mit eigenem Motor, für Stellen, die das Fahrzeug nicht erreicht.',
      '<b>Schnellangriffseinrichtung:</b> formstabiler Schlauch auf einer Haspel für den sofortigen Erstangriff.'),
    P('Die technischen Details – Funktionsprinzip, Ansaugvorgang, Kavitation und Betriebswerte – behandelt <b>Modul N (Maschinist)</b> ausführlich.'),

    H2('foerderung', 'Wasserförderung über größere Entfernung'),
    TBL(['Verfahren', 'Anwendung', 'Bedarf'],[
      ['Förderung über lange Wegstrecke', 'B-Leitung mit Verstärkerpumpen', 'viel Schlauchmaterial, mehrere Pumpen, Funkverbindung'],
      ['Pendelverkehr mit Tanklöschfahrzeugen', 'unwegsames Gelände, kein Netz', 'mehrere TLF, Befüllstelle, Verkehrslenkung'],
      ['Kombination beider Verfahren', 'große Vegetationsbrände', 'erhebliche Kräfte, Abschnittsbildung'],
    ]),
    CO('tip', 'Wasserversorgung ist Führungsaufgabe', 'Sie wird geplant, nicht improvisiert – parallel zum Erstangriff und mit Blick auf den erwarteten Bedarf. Der Grundsatz lautet: Die Wasserversorgung muss stehen, bevor der Tank leer ist, nicht danach. Ausführlich in <b>Modul T</b>.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Abhängige Versorgung aus dem Netz, unabhängige aus Gewässern und Behältern.',
      'Die entnehmbare Hydrantenmenge hängt vom Rohrnetz ab, nicht vom Hydranten.',
      'Der Fahrzeugtank überbrückt den Erstangriff – ein C-Rohr leert 1.000 l in etwa 10 Minuten.',
      'Wasserversorgung parallel zum Erstangriff aufbauen, nicht danach.',
      'Pumpenbauformen: Heckpumpe, Vorbaupumpe, Tragkraftspritze, Schnellangriff.',
      'Über größere Entfernungen: lange Wegstrecke oder Pendelverkehr.'),
  ],
},

/* ---------------------------------------------------------------- C5 ---- */
{
  id: 'c5', title: 'Fahrzeugbetrieb, Logistik & Sonderfahrzeuge', duration: 18,
  blocks: [
    P('Ein Feuerwehrfahrzeug ist mehr als ein Transportmittel: Es ist Arbeitsplatz, Werkzeugkasten, Schutzschild und Stromversorgung zugleich. Diese Lektion behandelt, was den Betrieb im Einsatz ausmacht – und wie die Versorgung bei längeren Lagen organisiert wird.'),

    H2('einsatzstellung', 'Das Fahrzeug in Einsatzstellung'),
    P('Wo ein Fahrzeug steht, entscheidet über vieles: ob die Pumpe erreichbar ist, ob nachrückende Kräfte vorbeikommen, ob die Besatzung geschützt arbeitet. Die Einsatzstellung ist deshalb eine bewusste Entscheidung des Einheitsführers, keine Frage des nächsten freien Platzes.'),
    KF(
      'Fahrzeug so stellen, dass die Bedienseite zur Einsatzstelle und die Besatzung geschützt steht.',
      'Zufahrt für nachrückende Kräfte und Rettungsdienst freihalten.',
      'Abstand zum Gefahrenbereich halten – Wärmestrahlung, Einsturz, Explosion.',
      'Bei Verkehrslagen schräg als Schutzschild stellen, Räder abgewandt eingeschlagen.',
      'Nicht auf Hydranten, Schachtdeckeln oder in Rettungswegen abstellen.',
      'Windrichtung beachten – nicht in die Rauchfahne stellen.'),

    H2('sonderfahrzeuge', 'Sonderfahrzeuge im Überblick'),
    TBL(['Fahrzeug', 'Zweck', 'Wann anfordern'],[
      ['GW-Logistik', 'Nachschub, Material, Verpflegung', 'ab mehreren Stunden Einsatzdauer'],
      ['GW-Messtechnik', 'Gefahrstoffmessung, Spürtrupp', 'bei jeder unklaren ABC-Lage'],
      ['GW-Höhenrettung', 'Rettung aus Höhen und Tiefen', 'Absturzlagen, Windkraftanlagen, Schächte'],
      ['AB-Atemluft, GW-Atemschutz', 'Atemluftversorgung vor Ort', 'bei mehr als zwei bis drei Atemschutzeinsätzen je Trupp'],
      ['Schlauchwagen', 'lange Förderstrecken', 'wenn keine ausreichende Löschwasserversorgung am Objekt besteht'],
      ['ELW 2', 'Führungsunterstützung', 'ab Führungsstufe C und bei langer Dauer'],
      ['Rüstwagen', 'schwere technische Hilfe', 'Lkw-Unfälle, schwere Lasten, Seilwindenarbeit'],
    ]),
    CO('warn', 'Anfahrtszeiten einplanen', 'Sonderfahrzeuge stehen selten in der eigenen Gemeinde. Zwischen Anforderung und Eintreffen liegen häufig 30 bis 60 Minuten. Wer sie erst anfordert, wenn er sie braucht, bekommt sie eine Stunde zu spät. Die Frage lautet deshalb nicht „brauche ich das jetzt?", sondern „werde ich das in einer Stunde brauchen?".'),

    H2('logistik', 'Einsatzlogistik'),
    P('Bei längeren Einsätzen wird die Versorgung selbst zur Aufgabe. Ohne sie stehen nach zwei Stunden erschöpfte Kräfte mit leeren Atemluftflaschen an einem Fahrzeug ohne Kraftstoff.'),
    KF(
      '<b>Atemluft:</b> gefüllte Flaschen nachführen, Wechselstelle einrichten.',
      '<b>Kraftstoff:</b> für Fahrzeuge, Aggregate, Pumpen und Motorsägen.',
      '<b>Löschmittel:</b> Schaummittel, Bindemittel, Sonderlöschmittel.',
      '<b>Verpflegung und Getränke:</b> besonders bei Hitze und Kälte kritisch.',
      '<b>Ablösung:</b> frische Kräfte rechtzeitig alarmieren.',
      '<b>Erholungsbereich:</b> Sitzgelegenheit, Wetterschutz, Wärme oder Schatten.',
      '<b>Sanitäre Einrichtungen</b> bei mehrstündigen Lagen.'),
    P('Die Verantwortung dafür liegt im Sachgebiet <b>S4</b> des Führungsstabs beziehungsweise bei einer benannten Einsatzkraft. Wichtig ist vor allem, dass jemand sie überhaupt hat – Logistik organisiert sich nicht von selbst.'),

    H2('pflege', 'Fahrzeugpflege und Prüfung'),
    P('Ein Feuerwehrfahrzeug steht die meiste Zeit still und muss trotzdem jederzeit funktionieren. Genau das ist technisch anspruchsvoll: Stehende Fahrzeuge leiden unter Standschäden, alterndem Kraftstoff, entladenen Batterien und festsitzenden Armaturen.'),
    KF(
      'Regelmäßige Probeläufe von Motor, Pumpe und Aggregaten.',
      'Batterieladung über Erhaltungsladung sicherstellen.',
      'Wasserführende Teile im Winter entwässern beziehungsweise frostsicher halten.',
      'Reifenzustand und -alter prüfen – auch bei geringer Laufleistung.',
      'Wiederkehrende Pumpenprüfung nach Vorgabe durchführen und dokumentieren.',
      'Hauptuntersuchung, Sicherheitsprüfung und Wartung nach Plan.',
      'Nach Salzwasser- oder Schmutzwassereinsatz gründlich spülen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Einsatzstellung ist eine bewusste Entscheidung – Schutz, Zufahrt, Windrichtung.',
      'Sonderfahrzeuge früh anfordern; Anfahrtszeiten von 30 bis 60 Minuten einplanen.',
      'Logistik umfasst Atemluft, Kraftstoff, Löschmittel, Verpflegung, Ablösung, Erholung.',
      'Für die Logistik muss jemand benannt sein – sie organisiert sich nicht von selbst.',
      'Standfahrzeuge brauchen Probeläufe, Erhaltungsladung und Frostschutz.',
      'Prüfungen dokumentieren; nach Schmutz- oder Salzwasser gründlich spülen.'),
  ],
},

];
