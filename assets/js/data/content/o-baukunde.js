/* =========================================================================
   MODUL O — Objekt- & Baukunde
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls O.

   Fachliche Grundlage: Musterbauordnung und Landesbauordnungen,
   DIN 4102 und DIN EN 13501 (Brandverhalten und Feuerwiderstand),
   FwDV 3 und 100, DGUV Vorschrift 49. Baurechtliche Anforderungen sind
   Ländersache. Temperatur- und Zeitangaben sind Richtwerte.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_O = [

/* ---------------------------------------------------------------- O1 ---- */
{
  id: 'o1', title: 'Baustoffe & Feuerwiderstand', duration: 20,
  blocks: [
    P('Ein Gebäude ist im Brandfall kein passiver Behälter, sondern ein Mitspieler: Es leitet den Brand weiter oder hält ihn auf, es trägt oder es versagt. Wer die Sprache der Bauteile lesen kann, weiß, wie viel Zeit ihm bleibt – und das ist eine der wenigen Informationen, die im Einsatz wirklich über Leben entscheiden.'),

    H2('klassen', 'Baustoffklassen'),
    P('Baustoffe werden nach ihrem Brandverhalten eingeteilt. In Deutschland ist die Systematik der DIN 4102 nach wie vor gebräuchlich, europäisch gilt die DIN EN 13501-1 mit den Klassen A1 bis F.'),
    TBL(['Klasse nach DIN 4102', 'Bedeutung', 'Beispiele'],[
      ['A1', 'nicht brennbar, ohne brennbare Bestandteile', 'Beton, Stahl, Mauerwerk, Mineralwolle'],
      ['A2', 'nicht brennbar, mit geringen brennbaren Anteilen', 'Gipskartonplatten mit Zusätzen'],
      ['B1', 'schwer entflammbar', 'bestimmte Dämmstoffe, behandeltes Holz'],
      ['B2', 'normal entflammbar', 'Holz, viele Kunststoffe'],
      ['B3', 'leicht entflammbar', 'Papier, ungeschützter Schaumstoff, Stroh'],
    ]),
    CO('info', 'Nicht brennbar heißt nicht ungefährlich', 'Stahl und Beton brennen nicht – sie versagen trotzdem im Brand. Die Baustoffklasse beschreibt nur, ob ein Material zum Brand beiträgt. Wie lange ein <b>Bauteil</b> hält, sagt eine ganz andere Kennzahl: der Feuerwiderstand.'),

    H2('widerstand', 'Feuerwiderstandsklassen'),
    DEF('Feuerwiderstandsdauer', 'Die Zeit in Minuten, die ein Bauteil unter genormten Brandbedingungen seine Funktion behält. <b>F 30</b> heißt feuerhemmend, <b>F 60</b> hochfeuerhemmend, <b>F 90</b> feuerbeständig. Europäisch wird nach Kriterien unterschieden: <b>R</b> für Tragfähigkeit, <b>E</b> für Raumabschluss und <b>I</b> für Wärmedämmung – zum Beispiel REI 90.'),
    TBL(['Kürzel', 'Bedeutet', 'Praktische Frage'],[
      ['R', 'Tragfähigkeit', 'Trägt das Bauteil noch?'],
      ['E', 'Raumabschluss', 'Hält es Feuer und Rauch zurück?'],
      ['I', 'Wärmedämmung', 'Bleibt die abgewandte Seite kühl genug?'],
    ]),
    CO('warn', 'Die Zahl ist ein Prüfwert, keine Garantie', 'Die Angaben stammen aus einem genormten Prüfbrand mit definiertem Temperaturverlauf. Ein realer Brand kann heißer sein, schneller wachsen oder das Bauteil anders belasten – etwa durch zusätzliches Löschwasser in der Decke. F 90 bedeutet also nicht „90 Minuten sicher", sondern „unter Prüfbedingungen 90 Minuten". Im Einsatz ist das ein Anhaltspunkt, keine Uhr.'),

    H2('bauteile', 'Wichtige Bauteile'),
    UL(
      '<b>Tragende Wände und Stützen:</b> halten das Gebäude – ihr Versagen bedeutet Einsturz.',
      '<b>Nichttragende Wände:</b> trennen Räume, tragen aber keine Lasten.',
      '<b>Brandwände:</b> verhindern die Brandausbreitung und halten zusätzlich mechanischer Beanspruchung stand.',
      '<b>Decken:</b> tragen und trennen zugleich; sie nehmen im Brand zusätzlich Löschwasser auf.',
      '<b>Feuerschutzabschlüsse:</b> selbstschließende Türen und Klappen in Brandwänden.',
      '<b>Abschottungen:</b> brandsichere Durchführungen für Kabel und Rohre.'),
    CO('danger', 'Aufgekeilte Brandschutztüren', 'Eine Brandschutztür wirkt nur, wenn sie geschlossen ist. In der Praxis werden sie häufig mit Keilen, Kartons oder Haken offen gehalten, weil das im Alltag bequemer ist. Damit ist die gesamte Abschottung wirkungslos. Bei Objektbegehungen ist das eine der wichtigsten Feststellungen überhaupt.'),

    H2('bauweisen', 'Bauweisen unterscheiden'),
    TBL(['Bauweise', 'Merkmal', 'Verhalten im Brand'],[
      ['Massivbau', 'Mauerwerk, Beton, Stahlbeton', 'meist lange standfest, berechenbarer'],
      ['Stahlbau', 'ungeschützte Stahlkonstruktion', 'kann bei Erwärmung plötzlich versagen'],
      ['Holzbau', 'Balken, Ständer, Brettschichtholz', 'brennt kontrolliert ab, oft berechenbar'],
      ['Leichtbau', 'Nagelplattenbinder, Trockenbau, dünne Profile', 'kann früh und ohne Vorwarnung versagen'],
      ['Mischbauweise', 'Kombination, oft bei Umbauten', 'schwer einzuschätzen, Schwachstellen suchen'],
    ]),
    P('Für die Erkundung ist besonders wichtig, ob eine Konstruktion <b>geschützt</b> ist: Ein Stahlträger mit Brandschutzbekleidung verhält sich völlig anders als derselbe Träger ungeschützt in einer Lagerhalle. Diese Frage lässt sich häufig nur über Objektkenntnis oder den Betreiber klären – ein weiterer Grund für Objektbegehungen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Baustoffklassen beschreiben, ob ein Material zum Brand beiträgt.',
      'A1 und A2 nicht brennbar, B1 schwer, B2 normal, B3 leicht entflammbar.',
      '<b>Feuerwiderstand</b> beschreibt, wie lange ein Bauteil seine Funktion behält.',
      'F 30 feuerhemmend, F 60 hochfeuerhemmend, F 90 feuerbeständig; europäisch R, E, I.',
      'Prüfwerte sind Anhaltspunkte, keine Garantien für den realen Brand.',
      'Aufgekeilte Brandschutztüren machen die Abschottung wirkungslos.',
      'Entscheidend ist auch, ob eine Konstruktion brandschutztechnisch geschützt ist.'),
  ],
},

/* ---------------------------------------------------------------- O2 ---- */
{
  id: 'o2', title: 'Bauteilverhalten & Einsturzgefahr', duration: 20,
  blocks: [
    P('Jedes Baumaterial versagt im Brand auf seine eigene Weise – manche langsam und mit Vorwarnung, andere schlagartig. Diese Unterschiede zu kennen, ist keine akademische Übung: Sie entscheiden darüber, ob ein Innenangriff verantwortbar ist und wann er abgebrochen werden muss.'),

    H2('verhalten', 'Wie Baustoffe im Brand versagen'),
    TBL(['Baustoff', 'Verhalten', 'Für die Taktik'],[
      ['Stahl', 'unbrennbar, verliert ab etwa 500 °C rasch an Festigkeit, verformt sich stark', 'ungeschützte Stahlhallen können plötzlich kollabieren'],
      ['Beton', 'unbrennbar, Abplatzungen durch Wasserdampf, Bewehrung verliert Tragkraft', 'lange standfest, aber herabfallende Betonteile'],
      ['Holz', 'brennbar, brennt mit etwa 0,7 mm pro Minute ab, Kohleschicht schützt den Kern', 'oft berechenbarer als Stahl, aber Verbindungen versagen früher'],
      ['Mauerwerk', 'formstabil, kann bei einseitiger Erwärmung reißen und ausbauchen', 'Ausbauchung ist ein Warnzeichen'],
      ['Glas', 'zerspringt bei Temperaturschock', 'plötzliche Öffnungen verändern die Ventilation'],
      ['Aluminium', 'schmilzt bei etwa 660 °C', 'verliert sehr früh die Tragfähigkeit'],
      ['Kunststoffe', 'brennen und schmelzen, starke Rauch- und Giftgasbildung', 'hohe Brandlast, tropfende Schmelze'],
    ]),
    CO('danger', 'Der trügerische Stahl', 'Stahl brennt nicht – deshalb wirkt eine Stahlhalle im Brand lange unbeeindruckt. Erreichen die Träger jedoch ihre kritische Temperatur, verlieren sie innerhalb kurzer Zeit ihre Tragfähigkeit und die Konstruktion kann <b>ohne Vorwarnung</b> schlagartig einstürzen. Bei ausgedehnten Hallenbränden ist defensives Vorgehen deshalb keine Vorsicht, sondern die fachlich richtige Entscheidung.'),
    CO('warn', 'Leichtbaudecken und Nagelplattenbinder', 'Moderne Dachkonstruktionen aus dünnen Holzquerschnitten mit Nagelplattenverbindern haben wenig Materialreserve. Die Verbindungsstellen versagen früh, und das Versagen eines Binders kann eine Kettenreaktion auslösen. Der Aufenthalt unter solchen Konstruktionen wird im Brandfall auf das Notwendigste beschränkt.'),

    H2('lasten', 'Zusätzliche Lasten im Brandfall'),
    P('Ein Bauteil hält nicht nur die geplante Last, sondern im Brandfall zusätzlich das, was die Feuerwehr hinzufügt und was der Brand erzeugt. Diese Zusatzlasten werden regelmäßig unterschätzt.'),
    KF(
      '<b>Löschwasser:</b> Jeder Kubikmeter wiegt eine Tonne – Decken und Böden können sich stark aufladen.',
      '<b>Durchnässte Lagergüter:</b> Papier, Textilien und Dämmstoffe saugen sich voll und vervielfachen ihr Gewicht.',
      '<b>Trümmer:</b> herabgestürzte Bauteile belasten darunterliegende Decken.',
      '<b>Löschgeräte und Einsatzkräfte</b> auf Dächern und Zwischendecken.',
      '<b>Schnee und Eis</b> im Winter zusätzlich zur Brandbelastung.'),
    CO('danger', 'Löschwasser als Einsturzursache', 'Bei Bränden in Lagern und Dachgeschossen ist stehendes Löschwasser eine reale Einsturzursache. Deshalb gilt der Grundsatz „so viel wie nötig, so wenig wie möglich" nicht nur aus Umweltgründen – er ist auch Statik. Ablaufmöglichkeiten schaffen und die Wassermenge im Blick behalten.'),

    H2('anzeichen', 'Anzeichen drohenden Einsturzes'),
    KF(
      'Risse in Wänden und Decken, sich weitende Fugen.',
      'Durchbiegung von Trägern, Decken und Dachflächen.',
      'Ausbauchende oder sich neigende Wände.',
      'Herabfallender Putz, Betonabplatzungen.',
      'Knackende, knirschende oder ächzende Geräusche.',
      'Klemmende Türen und Fenster – ein Zeichen für Verformung.',
      'Lange, intensive Brandeinwirkung auf tragende Bauteile.',
      'Sichtbar verformte oder durchhängende Stahlträger.'),
    CO('warn', 'Wenn ein Anzeichen auftritt', 'Sofortiger Rückzug aller Kräfte über die vorher festgelegte Rückzugsstrecke, Absperrung des Trümmerschattens und Wechsel in den defensiven Außenangriff. Die Entscheidung fällt beim ersten Anzeichen – nicht beim dritten.'),

    H2('taktik', 'Gebäude taktisch lesen'),
    P('Bei der Erkundung stellt sich die Führungskraft eine feste Reihe von Fragen. Sie lassen sich in wenigen Minuten beantworten und strukturieren die gesamte Lagebeurteilung.'),
    STEPS(
      'Welche Bauweise liegt vor – massiv, Stahl, Holz, Leichtbau?',
      'Wo sind Zugänge, Rettungswege und Angriffswege?',
      'Wo verlaufen Brandabschnitte, und sind sie intakt?',
      'Welche Ausbreitungswege gibt es – Schächte, Hohlräume, Fassade?',
      'Welche Bauteile sind bereits brandbeaufschlagt, und wie lange schon?',
      'Gibt es Sonderbauteile – Photovoltaik, Batteriespeicher, Lüftungsanlagen?',
      'Welche Bereiche sind unter dem Gebäude – Keller, Tiefgarage, Kanäle?',
      'Wo liegt der Trümmerschatten, falls es zum Einsturz kommt?'),
    CO('warn', 'Photovoltaik und Batteriespeicher', 'Photovoltaikmodule stehen bei Lichteinfall dauerhaft unter Gleichspannung und lassen sich nicht abschalten – auch nicht durch das Abschalten des Wechselrichters. Batteriespeicher können thermisch durchgehen und noch Stunden später erneut zünden. Bei jeder Erkundung gehört die Frage nach beidem dazu.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Stahl verliert ab etwa 500 °C rapide an Festigkeit und kann plötzlich versagen.',
      'Holz brennt mit etwa 0,7 mm pro Minute ab und ist oft berechenbarer.',
      'Leichtbaukonstruktionen versagen früh und ohne Vorwarnung.',
      'Löschwasser ist eine reale Einsturzursache – Menge begrenzen, Ablauf schaffen.',
      'Einsturzanzeichen: Risse, Durchbiegung, Ausbauchung, Geräusche, klemmende Türen.',
      'Beim <b>ersten</b> Anzeichen zurückziehen, nicht beim dritten.',
      'Photovoltaik und Batteriespeicher bei jeder Erkundung abfragen.'),
  ],
},

/* ---------------------------------------------------------------- O3 ---- */
{
  id: 'o3', title: 'Gebäudearten & Ausbreitungswege', duration: 20,
  blocks: [
    P('Ein Einfamilienhaus, ein Pflegeheim und eine Lagerhalle sind im Brandfall drei völlig verschiedene Aufgaben – obwohl in allen dreien dasselbe brennen kann. Der Unterschied liegt in den Menschen, in der Bauweise und in den Wegen, die Feuer und Rauch nehmen.'),

    H2('klassen', 'Gebäudeklassen und Sonderbauten'),
    P('Die Landesbauordnungen teilen Gebäude nach Höhe, Größe und Nutzung in <b>Gebäudeklassen</b> ein. Aus der Klasse ergeben sich die brandschutztechnischen Anforderungen – je höher, desto strenger. Gebäude mit besonderen Risiken gelten zusätzlich als <b>Sonderbauten</b> und unterliegen eigenen Vorschriften.'),
    TBL(['Objektart', 'Besonderheit', 'Einsatztaktische Folge'],[
      ['Hochhaus', 'Aufenthaltsräume über der festgelegten Höhengrenze', 'Sicherheitstreppenraum, Steigleitungen, lange Wege, Aufzugssteuerung'],
      ['Krankenhaus, Pflegeheim', 'viele nicht oder schwer gehfähige Personen', 'Räumung in Abschnitte, horizontale Evakuierung, Personal einbinden'],
      ['Versammlungsstätte', 'sehr viele Personen gleichzeitig', 'Entfluchtung, Panikgefahr, Rettungswegbreite'],
      ['Schule, Kindergarten', 'viele Kinder, feste Abläufe', 'Sammelplätze, Vollzähligkeit, Lehrpersonal einbinden'],
      ['Industrie- und Lagerbau', 'große Flächen, hohe Brandlast', 'Stahlkonstruktion, lange Wege, Löschwasserbedarf'],
      ['Verkaufsstätte', 'Publikum, verwinkelte Grundrisse', 'Orientierung, Rauchabzug, Räumung'],
      ['Beherbergungsstätte', 'schlafende, ortsunkundige Personen', 'nachts kritisch, Alarmierung entscheidend'],
      ['Tiefgarage', 'unter Gelände, schlechte Belüftung', 'Rauchgasstau, Zugang schwierig, E-Fahrzeuge'],
    ]),
    CO('info', 'Die entscheidende Frage lautet immer gleich', 'Wer hält sich in diesem Gebäude auf, und kann er sich selbst retten? Aus der Antwort ergibt sich fast die gesamte Taktik. In einem Bürogebäude um 3 Uhr nachts ist sie eine andere als in einem Pflegeheim zur selben Zeit.'),

    H2('ausbreitung', 'Wie sich Feuer und Rauch ausbreiten'),
    P('Rauch verteilt sich fast immer schneller und weiter als das Feuer selbst – und häufig über Wege, an die zuerst niemand denkt. Wer diese Wege kennt, kontrolliert einen Brand, statt ihm hinterherzulaufen.'),
    TBL(['Weg', 'Beispiele', 'Gegenmaßnahme'],[
      ['vertikal', 'Treppenräume, Aufzugsschächte, Installationsschächte, Lichthöfe', 'Türen schließen, Rauchabzug nutzen, Schächte kontrollieren'],
      ['horizontal', 'Flure, abgehängte Decken, Doppelböden, Zwischenwände', 'Bereiche abschotten, Kontrollöffnungen schaffen'],
      ['über Installationen', 'Kabelkanäle, Lüftungsleitungen, Rohrdurchführungen', 'Lüftung abschalten, Abschottungen prüfen'],
      ['über die Fassade', 'Fenster, Wärmedämmverbundsystem, Balkone', 'Riegelstellung, Geschoss darüber kontrollieren'],
      ['über das Dach', 'Kaltdach, Dachaufbauten, Attika', 'Dachraum frühzeitig kontrollieren'],
    ]),
    FIG('kamineffekt', 'Kamineffekt: Im Treppenraum steigt heißer Rauch schnell nach oben – geschlossene Türen halten den Rettungsweg raucharm.'),
    CO('danger', 'Der Kamineffekt', 'In Treppenräumen und Schächten steigt heißer Rauch mit hoher Geschwindigkeit nach oben und verraucht innerhalb von Minuten ganze Geschosse. Bei kaltem Wetter verstärkt sich der Effekt. Die Rauchfreihaltung des Treppenraums – Türen schließen, Rauchabzug nutzen – ist deshalb für eingeschlossene Personen überlebenswichtig und hat hohe Priorität.'),

    H2('lueftung', 'Lüftungsanlagen'),
    P('Raumlufttechnische Anlagen können Rauch aktiv im Gebäude verteilen. Moderne Anlagen schalten bei Brandalarm ab oder in einen Entrauchungsmodus, ältere nicht. Deshalb gehört zur Erkundung die Frage, ob eine Lüftungsanlage läuft und wer sie abschalten kann.'),

    H2('kontrolle', 'Was immer kontrolliert wird'),
    P('Unabhängig vom Objekt gibt es Bereiche, die bei jedem Gebäudebrand kontrolliert werden müssen – weil sich Rauch und Feuer dort typischerweise unbemerkt ausbreiten.'),
    KF(
      'Das Geschoss <b>über</b> dem Brandgeschoss.',
      'Das Geschoss <b>unter</b> dem Brandgeschoss.',
      'Die angrenzenden Nutzungseinheiten auf derselben Ebene.',
      'Der Dachraum beziehungsweise das Dachgeschoss.',
      'Keller und Tiefgarage.',
      'Schächte, Hohlräume und abgehängte Decken.',
      'Die Fassade und das Geschoss darüber.'),
    CO('tip', 'Wärmebildkamera nutzen', 'Verdeckte Brandausbreitung in Hohlräumen, Dämmungen und hinter Verkleidungen lässt sich mit der Wärmebildkamera oft schnell finden. Sie ersetzt die Kontrolle nicht, macht sie aber erheblich effizienter – siehe <b>Modul R</b>.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Gebäudeklassen und Sonderbauten bestimmen die brandschutztechnischen Anforderungen.',
      'Die entscheidende Frage: Wer ist im Gebäude, und kann er sich selbst retten?',
      'Rauch breitet sich schneller aus als das Feuer – vertikal, horizontal, über Installationen und Fassade.',
      'Der <b>Kamineffekt</b> verraucht Treppenräume in Minuten.',
      'Lüftungsanlagen können Rauch aktiv verteilen – abschalten lassen.',
      'Immer kontrollieren: Geschoss darüber und darunter, Nachbarbereiche, Dach, Keller, Schächte.',
      'Die Wärmebildkamera hilft, verdeckte Ausbreitung zu finden.'),
  ],
},

/* ---------------------------------------------------------------- O4 ---- */
{
  id: 'o4', title: 'Baustoffe im Detail & moderne Bauweisen', duration: 20,
  blocks: [
    P('Gebäude haben sich in den letzten Jahrzehnten stark verändert: mehr Dämmung, mehr Kunststoff, leichtere Konstruktionen, dichtere Hüllen. Für die Feuerwehr bedeutet das schnellere Brandverläufe, höhere Brandlasten und Konstruktionen, die früher versagen. Diese Lektion behandelt, was sich geändert hat.'),

    H2('detail', 'Baustoffe unter Hitze'),
    TBL(['Baustoff', 'Kritischer Punkt', 'Was daraus folgt'],[
      ['Beton', 'Abplatzungen durch eingeschlossene Feuchtigkeit, Bewehrung verliert Kraft', 'herabfallende Teile, langsame aber fortschreitende Schwächung'],
      ['Stahl', 'Festigkeitsverlust ab etwa 500 °C', 'plötzliches Versagen ganzer Tragwerke'],
      ['Holz', 'Abbrand etwa 0,7 mm pro Minute, Verbindungen versagen früher', 'Restquerschnitt beurteilen, Verbindungsstellen beachten'],
      ['Aluminium', 'Schmelzpunkt etwa 660 °C', 'sehr früher Tragfähigkeitsverlust'],
      ['Glas', 'Temperaturschock', 'plötzliche Ventilationsänderung, Splitter'],
      ['Kunststoffe', 'brennen, schmelzen, tropfen', 'hohe Brandlast, giftige Gase, Brandausbreitung durch Tropfen'],
      ['Gipskarton', 'gebundenes Wasser wirkt zunächst kühlend', 'schützt eine Zeit lang, dann rasches Versagen'],
    ]),

    H2('daemmung', 'Dämmstoffe und Fassaden'),
    P('Die energetische Sanierung hat Fassaden verändert. <b>Wärmedämm-Verbundsysteme</b> aus brennbaren Materialien wie Polystyrol können einen Brand über die Fassade nach oben tragen – teilweise hinter der Putzschicht und damit von außen zunächst unsichtbar.'),
    CO('danger', 'Verdeckte Fassadenbrandausbreitung', 'Bei Fassadenbränden mit Wärmedämmverbundsystem breitet sich der Brand häufig <b>hinter</b> der sichtbaren Oberfläche aus. Was von außen wie ein begrenzter Brand aussieht, kann bereits mehrere Geschosse erfasst haben. Deshalb: Geschosse oberhalb kontrollieren, Wärmebildkamera einsetzen, Fassade großflächig öffnen, wenn nötig.'),
    KF(
      'Hinterlüftete Fassaden bieten dem Brand einen durchgehenden Kanal nach oben.',
      'Brandriegel in der Dämmung sollen das verhindern – sie können fehlen oder beschädigt sein.',
      'Mineralische Dämmstoffe verhalten sich deutlich günstiger als organische.',
      'Bei Altbauten mit nachträglicher Dämmung besonders aufmerksam sein.',
      'Riegelstellung und Kontrolle der darüberliegenden Geschosse einplanen.'),

    H2('modern', 'Moderne Bauweisen und ihre Folgen'),
    TBL(['Entwicklung', 'Vorteil im Alltag', 'Folge im Brandfall'],[
      ['Dichte Gebäudehülle', 'Energieeinsparung', 'wenig Luftwechsel – ventilationsgesteuerte Brände, Backdraft-Gefahr'],
      ['Leichte Konstruktionen', 'wirtschaftlich, schnell errichtet', 'geringere Materialreserve, früheres Versagen'],
      ['Offene Grundrisse', 'Wohnqualität', 'große zusammenhängende Brandräume, schnelle Ausbreitung'],
      ['Kunststoffreiche Einrichtung', 'günstig, pflegeleicht', 'hohe Brandlast, sehr schnelle Rauchentwicklung, giftige Gase'],
      ['Photovoltaik und Speicher', 'Eigenstrom', 'Gleichspannung, thermisches Durchgehen, Zugangsprobleme aufs Dach'],
      ['Große Glasflächen', 'Licht', 'plötzliche Ventilationsänderungen, Splittergefahr'],
    ]),
    CO('warn', 'Die Zeit ist knapper geworden', 'Untersuchungen zeigen, dass moderne Wohnungseinrichtungen den Zeitraum bis zur Durchzündung eines Raumes gegenüber früheren Jahrzehnten deutlich verkürzt haben. Das betrifft sowohl die Selbstrettungszeit der Bewohner als auch das Zeitfenster für den Innenangriff. Wer mit Erfahrungswerten aus alten Bränden rechnet, rechnet zu großzügig.'),

    H2('sonder', 'Sonderbauteile erkennen'),
    KF(
      '<b>Photovoltaik:</b> Module auf Dach oder Fassade, Wechselrichter, Gleichstromleitungen.',
      '<b>Batteriespeicher:</b> häufig im Keller oder in der Garage, oft unauffällig.',
      '<b>Wärmepumpen:</b> Kältemittel, teilweise brennbar.',
      '<b>Gasanlagen:</b> Flüssiggastanks, Gasleitungen, Blockheizkraftwerke.',
      '<b>Aufzüge:</b> Schachtverrauchung, Personen in der Kabine.',
      '<b>Lüftungs- und Klimaanlagen:</b> Rauchverteilung.',
      '<b>Solarthermie:</b> Verwechslungsgefahr mit Photovoltaik – anders zu behandeln.'),
    CO('tip', 'Vor der Tür stehenbleiben und schauen', 'Ein bewusster Blick auf Dach, Fassade und Zählerschrank vor dem Betreten liefert die meisten dieser Informationen in dreißig Sekunden. Das ist keine verlorene Zeit – es ist die Zeit, in der die Taktik entsteht.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Beton platzt ab, Stahl verliert Festigkeit, Holz brennt berechenbar ab, Aluminium schmilzt früh.',
      'Wärmedämmverbundsysteme können Brände verdeckt über die Fassade tragen.',
      'Geschosse oberhalb bei Fassadenbränden immer kontrollieren.',
      'Dichte Gebäudehüllen begünstigen ventilationsgesteuerte Brände.',
      'Kunststoffreiche Einrichtung hat die Zeit bis zur Durchzündung deutlich verkürzt.',
      'Sonderbauteile vor dem Betreten erfassen: PV, Speicher, Gas, Lüftung, Aufzug.'),
  ],
},

/* ---------------------------------------------------------------- O5 ---- */
{
  id: 'o5', title: 'Einsturz, Trümmer & Sicherung', duration: 18,
  blocks: [
    P('Der Einsturz eines Gebäudes ist der Ernstfall der Baukunde. Er kann durch einen Brand, eine Explosion, ein Unwetter oder einen Bauunfall ausgelöst werden – und er ist eine der wenigen Lagen, in denen unüberlegtes Handeln zuverlässig weitere Opfer fordert.'),

    H2('ursachen', 'Warum Gebäude einstürzen'),
    UL(
      '<b>Verlust der Tragfähigkeit durch Hitze</b> – Stahl, Bewehrung, Holzverbindungen.',
      '<b>Zusätzliche Lasten</b> – Löschwasser, durchnässte Güter, Trümmer, Schnee.',
      '<b>Explosionen</b> – Gas, Staub, Druckbehälter.',
      '<b>Vorschädigung</b> – Alter, mangelnde Wartung, Umbauten ohne Statiknachweis.',
      '<b>Anprall</b> – Fahrzeug, umgestürzter Baum, Kran.',
      '<b>Unterspülung und Setzung</b> – Hochwasser, Rohrbruch, Baugrube.'),
    P('Häufig wirken mehrere Ursachen zusammen: Ein alter Dachstuhl mit Vorschädigung, der brennt und zusätzlich mit Löschwasser belastet wird, versagt weit früher als die Bauteilklassifizierung vermuten ließe.'),

    H2('anzeichen', 'Warnzeichen'),
    KF(
      'Risse, die sich sichtbar weiten.',
      'Durchbiegung von Decken, Trägern und Dachflächen.',
      'Ausbauchende oder sich neigende Wände.',
      'Klemmende Türen und Fenster.',
      'Herabfallender Putz, Betonabplatzungen, rieselnder Mörtel.',
      'Knacken, Knirschen, Ächzen der Konstruktion.',
      'Verformte oder rot glühende Stahlträger.',
      'Lange, intensive Brandeinwirkung ohne wirksame Kühlung.'),
    CO('danger', 'Ein Anzeichen genügt', 'Wer auf mehrere Warnzeichen wartet, hat die Entscheidung bereits verpasst. Beim ersten deutlichen Anzeichen erfolgt der Rückzug aller Kräfte – über die vorher festgelegte Rückzugsstrecke und mit Kontrolle der Vollzähligkeit.'),

    H2('truemmerschatten', 'Der Trümmerschatten'),
    DEF('Trümmerschatten', 'Der Bereich, in den Teile eines einstürzenden Gebäudes fallen können. Als Faustregel gilt ein Abstand von mindestens der <b>Gebäudehöhe</b> – bei hohen oder instabilen Bauten mehr. In diesen Bereich gehören weder Einsatzkräfte noch Fahrzeuge, und dort werden keine Bereitstellungsräume eingerichtet.'),
    CO('warn', 'Fahrzeuge stehen oft falsch', 'Einsatzfahrzeuge werden bei der Ankunft dicht am Gebäude abgestellt, weil das praktisch ist. Bei Einsturzgefahr stehen sie damit im Trümmerschatten – und blockieren ihn zusätzlich für die Rettung. Bei ausgedehnten Bränden mit Einsturzgefahr werden Fahrzeuge deshalb bewusst umgesetzt.'),

    H2('vorgehen', 'Vorgehen bei Einsturz'),
    STEPS(
      'Gefahrenbereich großräumig absperren – Trümmerschatten großzügig bemessen.',
      'Vollzähligkeit der eigenen Kräfte prüfen und melden.',
      'Zugänge kontrollieren und erfassen, wer sich wo aufgehalten hat.',
      'Zeugen und Anwohner befragen: Wie viele Personen, wo zuletzt gesehen?',
      'THW, Fachberater Statik, Rettungsdienst und Ortungsfachkräfte nachfordern.',
      'Ruhe herstellen und horchen – Rufkontakt zu Verschütteten suchen.',
      'Nur gesichert und langsam vorgehen; Nachrutsch- und Folgeeinsturzgefahr laufend bewerten.',
      'Trümmerbereich nicht betreten, solange keine statische Beurteilung vorliegt.'),
    CO('danger', 'Menschenrettung und Eigenschutz', 'Auch bei Verschütteten gilt die Abwägung: Rettung nur so weit, wie die eigene Sicherheit es zulässt. Kopfloses Eindringen in einsturzgefährdete Trümmer fordert erfahrungsgemäß weitere Opfer und verhindert die geordnete Rettung. Die Ruhephase mit Rufkontakt bringt oft mehr als hektisches Graben.'),

    H2('sichern', 'Sichern und Abstützen'),
    P('Das Abstützen einsturzgefährdeter Bauteile ist eine Spezialaufgabe, für die das THW und entsprechend ausgebildete Feuerwehreinheiten zuständig sind. Für die allgemeine Feuerwehr gilt vor allem: absperren, beobachten, nachfordern und den Bereich freihalten.'),
    KF(
      'Absperrung deutlich und dauerhaft kennzeichnen – nicht nur Flatterband.',
      'Beobachtungsposten einteilen, der die Konstruktion im Blick behält.',
      'Referenzmarken setzen, um Bewegungen erkennen zu können.',
      'Zugänge kontrollieren – auch Anwohner und Presse fernhalten.',
      'Bei Dunkelheit ausleuchten, ohne Kräfte in den Gefahrenbereich zu bringen.',
      'Übergabe an Bauaufsicht, Statiker oder Eigentümer dokumentieren.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Einsturzursachen: Hitze, Zusatzlasten, Explosion, Vorschädigung, Anprall, Setzung.',
      'Beim <b>ersten</b> Warnzeichen zurückziehen und Vollzähligkeit prüfen.',
      '<b>Trümmerschatten</b>: mindestens Gebäudehöhe Abstand, auch für Fahrzeuge.',
      'Bei Verschütteten: absperren, erfassen, nachfordern, Ruhe herstellen, Rufkontakt.',
      'Kein Betreten von Trümmern ohne statische Beurteilung.',
      'Abstützen ist Aufgabe von THW und Spezialeinheiten.',
      'Beobachtungsposten und Referenzmarken machen Bewegungen erkennbar.'),
  ],
},

];
