/* =========================================================================
   MODUL T — Löschwasserversorgung & Wasserförderung
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls T.

   Fachliche Grundlage: FwDV 3, DVGW-Arbeitsblatt W 405 (Löschwasser-
   bereitstellung), DIN 14210 ff. (Löschwasserbehälter und -brunnen),
   DIN 3221/3222 (Hydranten), DIN 4066 (Hinweisschilder), DIN 14420 ff.
   (Feuerlöschkreiselpumpen). Zahlenwerte sind Richtwerte.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_T = [

/* ---------------------------------------------------------------- T1 ---- */
{
  id: 't1', title: 'Löschwasserquellen & Entnahme', duration: 22,
  blocks: [
    P('Der Satz „ohne Wasser kein Löschangriff" klingt banal, beschreibt aber die häufigste Ursache dafür, dass Brände größer werden als nötig. Der Fahrzeugtank reicht wenige Minuten. Was danach kommt, entscheidet sich in den ersten Minuten des Einsatzes – oder gar nicht.'),

    H2('quellen', 'Woher das Wasser kommt'),
    TBL(['Quelle', 'Art', 'Merkmal', 'Grenze'],[
      ['Fahrzeugtank', 'mitgeführt', 'sofort verfügbar, kein Aufbau', 'nach wenigen Minuten leer'],
      ['Überflurhydrant', 'abhängig', 'sichtbar, schnell anschließbar', 'Netzleistung, anfahrgefährdet'],
      ['Unterflurhydrant', 'abhängig', 'geschützt, unauffällig', 'Standrohr nötig, Deckel finden und öffnen'],
      ['Offenes Gewässer', 'unabhängig', 'praktisch unbegrenzt ergiebig', 'Saugbetrieb, Zugang, Saughöhe'],
      ['Löschteich, Zisterne', 'unabhängig', 'bevorratet, gekennzeichnet', 'begrenzte Menge, Wartungszustand'],
      ['Löschwasserbrunnen', 'unabhängig', 'auch bei Trockenheit verfügbar', 'Ergiebigkeit prüfen, Technik'],
      ['Faltbehälter mit Pendelverkehr', 'mitgeführt', 'flexibel im Gelände', 'personal- und fahrzeugintensiv'],
    ]),
    DEF('Abhängige und unabhängige Löschwasserversorgung', '<b>Abhängig</b> heißt: aus dem Trinkwassernetz über Hydranten. Sie ist schnell verfügbar, aber in der Menge durch die Leistung des Rohrnetzes begrenzt und bei Netzstörungen nicht nutzbar. <b>Unabhängig</b> heißt: aus offenen Gewässern, Behältern oder Brunnen – vom Netz unabhängig und meist ergiebiger, aber aufwendiger herzustellen.'),
    CO('info', 'Beides hat seinen Platz', 'Im bebauten Bereich ist der Hydrant fast immer die schnellste Lösung. Bei hohem Wasserbedarf, in ländlichen Gebieten und bei Großlagen führt kein Weg an unabhängigen Quellen vorbei. Die Kunst besteht darin, früh zu erkennen, welche gebraucht wird.'),

    H2('tank', 'Der Fahrzeugtank als Überbrückung'),
    P('Der Löschwassertank ermöglicht den sofortigen Erstangriff, während parallel die Wasserversorgung aufgebaut wird. Genau dafür ist er gedacht – als Überbrückung, nicht als Vorrat.'),
    TBL(['Rohr', 'Durchfluss (Richtwert)', '1.000 l reichen etwa', '2.000 l reichen etwa'],[
      ['C-Rohr mit Mundstück', '100 l/min', '10 Minuten', '20 Minuten'],
      ['C-Rohr ohne Mundstück', '200 l/min', '5 Minuten', '10 Minuten'],
      ['B-Rohr mit Mundstück', '400 l/min', '2,5 Minuten', '5 Minuten'],
      ['B-Rohr ohne Mundstück', '800 l/min', 'gut 1 Minute', '2,5 Minuten'],
    ]),
    CO('danger', 'Die Uhr läuft ab dem ersten Tropfen', 'Diese Tabelle ist der Grund, warum die Wasserversorgung <b>parallel</b> zum Erstangriff aufgebaut wird und nicht danach. Ein Angriffstrupp, dem im Innenangriff das Wasser ausgeht, steht im Brandraum ohne Schutz. Der Maschinist meldet den Füllstand rechtzeitig – nicht, wenn der Tank leer ist.'),

    H2('hydrant', 'Entnahme aus dem Hydranten'),
    STEPS(
      'Hydrant anhand des Hinweisschildes suchen und freimachen – Schnee, Laub, geparkte Fahrzeuge.',
      'Straßenkappe öffnen und Klauendeckel reinigen.',
      'Standrohr aufsetzen und festdrehen; auf saubere Dichtflächen achten.',
      'Hydrant langsam öffnen – zu schnelles Öffnen erzeugt einen Wasserschlag im Netz.',
      'Erst spülen, bis das Wasser klar ist, dann die Leitung ankuppeln.',
      'Abgänge des Standrohrs einzeln bedienen.',
      'Nach dem Einsatz Hydrant schließen, entwässern lassen, Kappe verschließen.'),
    CO('warn', 'Langsam öffnen und schließen', 'Ein schlagartig geöffneter oder geschlossener Hydrant erzeugt eine Druckwelle im Trinkwassernetz, die Rohrbrüche verursachen und Ablagerungen aufwirbeln kann. Die Folge sind braunes Wasser in der ganzen Straße und im schlimmsten Fall ein Schaden am Netz. Immer langsam bedienen.'),

    H2('saugbetrieb', 'Wasserentnahme aus offenem Gewässer'),
    STEPS(
      'Saugstelle erkunden: Zugänglichkeit, Wassertiefe, Untergrund, Absturzgefahr.',
      'Saugschläuche kuppeln – Dichtringe prüfen, Kupplungen sauber halten.',
      'Saugkorb anbringen, Ventilleine und Halteleine anschlagen.',
      'Saugleitung zu Wasser bringen: Saugkorb vollständig eintauchen, Grund nicht berühren.',
      'Alle Druckabgänge und die Entwässerung schließen.',
      'Entlüftungseinrichtung betätigen, bis Wasser ansteht.',
      'Pumpe auf Betriebsdrehzahl bringen und Abgang langsam öffnen.',
      'Saughöhe, Ansaugverhalten und Saugkorb dauerhaft überwachen.'),
    CO('warn', 'Saughöhe und Sauberkeit', 'Die praktische geodätische Saughöhe liegt bei etwa 7,5 Metern – darüber wird das Ansaugen unzuverlässig. Der Saugkorb darf weder auf den Grund absinken noch so flach liegen, dass er Luft zieht. Beides führt zu Kavitation und zum Abriss der Förderung.'),

    H2('planung', 'Die Wasserversorgung planen'),
    KF(
      'Wasserbedarf abschätzen: Wie viele Rohre werden voraussichtlich gebraucht?',
      'Nächste Entnahmestelle bestimmen – aus Ortskenntnis, Karte oder Feuerwehrplan.',
      'Ergiebigkeit einschätzen: Reicht der Hydrant, oder muss unabhängig entnommen werden?',
      'Zweite Entnahmestelle als Reserve mitdenken.',
      'Kräftebedarf berücksichtigen – Wasserversorgung bindet Personal.',
      'Bei absehbar hohem Bedarf frühzeitig nachfordern.',
      'Aufbau parallel zum Erstangriff beginnen, nicht danach.'),
    CO('tip', 'Der Flaschenhals', 'Bei den meisten größer werdenden Bränden ist nicht das Personal und nicht die Technik der begrenzende Faktor, sondern das Wasser. Wer als Führungskraft eine Gewohnheit entwickeln will, dann diese: In der ersten Lagebeurteilung immer die Frage stellen „Woher kommt das nächste Wasser?".'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Abhängige Versorgung aus dem Netz, unabhängige aus Gewässern, Behältern und Brunnen.',
      'Der Fahrzeugtank überbrückt – ein C-Rohr leert 1.000 l in etwa 10 Minuten.',
      'Wasserversorgung parallel zum Erstangriff aufbauen.',
      'Hydranten langsam öffnen und schließen – Wasserschlaggefahr.',
      'Saugbetrieb: kuppeln, sichern, Abgänge schließen, entlüften, Drehzahl, Abgang öffnen.',
      'Praktische Saughöhe etwa 7,5 m; Saugkorb weder auf Grund noch zu flach.',
      'Die Frage „Woher kommt das nächste Wasser?" gehört in jede Lagebeurteilung.'),
  ],
},

/* ---------------------------------------------------------------- T2 ---- */
{
  id: 't2', title: 'Wasserförderung über lange Wegstrecke', duration: 22,
  blocks: [
    P('Wenn zwischen Wasser und Brand mehrere hundert Meter liegen, wird aus der Wasserversorgung ein eigenes Bauwerk: eine Schlauchstrecke mit Pumpen, Druckstufen und einer Logik, die man verstehen muss. Diese Lektion behandelt Planung und Betrieb der langen Wegstrecke.'),

    H2('warum', 'Wann eine lange Wegstrecke nötig wird'),
    UL(
      'Am Objekt gibt es keine ausreichende Löschwasserversorgung – ländliche Gebiete, Waldbrand, Aussiedlerhöfe.',
      'Das Hydrantennetz liefert weniger, als der Brand erfordert.',
      'Die Entnahmestelle ist weit entfernt oder liegt deutlich tiefer.',
      'Der Bedarf ist über Stunden hoch – Pendelverkehr allein reicht nicht.',
      'Mehrere Objekte müssen gleichzeitig versorgt werden.'),

    H2('physik', 'Was den Druck aufzehrt'),
    TBL(['Effekt', 'Verhalten', 'Beeinflussbar durch'],[
      ['Höhenunterschied', 'etwa 1 bar je 10 m – exakt, unabhängig vom Durchfluss', 'Trassenwahl, Umgehung von Steigungen'],
      ['Reibungsverlust', 'steigt mit der Länge und überproportional mit dem Durchfluss', 'größerer Querschnitt, zweite Leitung'],
      ['Armaturen', 'kleiner Anteil je Verteiler, Übergangsstück, Krümmer', 'Anzahl reduzieren'],
    ]),
    DEF('Reibungsverlust', 'Der Druckverlust durch Reibung des Wassers in der Schlauchleitung. Er steigt mit der Länge und ungefähr mit dem Quadrat des Durchflusses: Verdoppelt man die Wassermenge, vervierfacht sich etwa der Reibungsverlust. Ein größerer Querschnitt – B statt C, zwei Leitungen statt einer – verringert ihn erheblich.'),
    CO('info', 'Die wichtigste Einsicht der Wasserförderung', 'Mehr Wasser über eine lange Strecke bekommt man am wirksamsten durch einen <b>größeren Querschnitt</b>, nicht durch mehr Pumpendruck. Mehr Druck erhöht den Durchfluss und damit auch die Verluste – man dreht sich im Kreis. Eine zweite B-Leitung bringt fast immer mehr als 2 bar mehr Ausgangsdruck.'),

    H2('planung', 'Eine Förderstrecke planen'),
    STEPS(
      'Wasserbedarf festlegen: Wie viel Liter pro Minute werden gebraucht?',
      'Entfernung und Höhenprofil bestimmen – Karte, Höhenlinien, Ortskenntnis.',
      'Höhenverlust berechnen: Höhendifferenz in Metern geteilt durch 10 ergibt bar.',
      'Reibungsverlust abschätzen und Ausgangsdruck festlegen.',
      'Pumpenabstände so wählen, dass an jeder Folgepumpe mindestens etwa 1,5 bar ankommen.',
      'Schlauchbedarf ermitteln und Material bereitstellen – Schlauchwagen anfordern.',
      'Funkverbindung zwischen allen Pumpenstandorten sicherstellen.',
      'Reserve einplanen: lieber eine Pumpe mehr als ein Förderabriss.'),
    FIG('wasserfoerderung', 'Wasserförderung über lange Wegstrecke: Verstärkerpumpen halten den Druck über die Distanz.'),
    DEF('Verstärkerpumpe', 'Eine in die Förderstrecke eingebaute Pumpe, die das mit Restdruck ankommende Wasser übernimmt und wieder auf Ausgangsdruck bringt. Sie arbeitet im <b>Zulaufbetrieb</b> und saugt nicht an. Entscheidend ist, dass ihr Eingangsdruck nicht unter den Grenzwert fällt – sonst reißt die Förderung ab und muss neu aufgebaut werden.'),

    H2('betrieb', 'Betrieb der Strecke'),
    KF(
      'Ausgangsdruck begrenzen, damit die Schläuche nicht überlastet werden.',
      'Druckbegrenzungsventile einsetzen, wo Druckstöße drohen.',
      'Strahlrohre und Abgänge langsam öffnen und schließen.',
      'Jede Änderung an einem Ende allen Pumpenstandorten melden.',
      'Eingangsdrücke laufend beobachten und melden.',
      'Bei Schlauchplatzern die Leitung sofort drucklos machen und den Abschnitt ersetzen.',
      'Reserveschläuche und Kupplungen entlang der Strecke bereithalten.',
      'Die Leitung gegen Überfahren sichern und an Straßen kennzeichnen.'),
    CO('danger', 'Druckstoß', 'Wird am Ende einer langen Leitung schlagartig geschlossen, läuft eine Druckwelle zurück durch die Strecke. Sie kann Schläuche platzen lassen, Kupplungen sprengen und Kräfte verletzen. Deshalb: an langen Strecken immer langsam öffnen und schließen und den Maschinisten am Anfang informieren.'),

    H2('pendel', 'Der Pendelverkehr als Alternative'),
    DEF('Pendelverkehr', 'Tanklöschfahrzeuge fahren im Wechsel zwischen einer Befüllstelle und der Einsatzstelle und speisen dort in einen Faltbehälter oder direkt in die Pumpe ein. Das Verfahren ist unabhängig von Schlauchmaterial und Gelände, bindet aber viele Fahrzeuge und Fahrer.'),
    TBL(['', 'Lange Wegstrecke', 'Pendelverkehr'],[
      ['Vorteil', 'kontinuierliche Förderung, wenig Personal im Dauerbetrieb', 'unabhängig von Gelände und Schlauchmaterial'],
      ['Nachteil', 'viel Schlauchmaterial, Aufbauzeit, störanfällig', 'viele Fahrzeuge und Fahrer nötig, Unterbrechungen'],
      ['Geeignet für', 'befahrbare Trassen, dauerhaft hoher Bedarf', 'unwegsames Gelände, Vegetationsbrand, kurze Wege'],
      ['Kombination', 'häufig sinnvoll: Pendelverkehr überbrückt den Aufbau der Strecke', ''],
    ]),
    CO('tip', 'Beides gleichzeitig starten', 'Bei großem Wasserbedarf lohnt es sich, den Pendelverkehr sofort zu beginnen und parallel die Förderstrecke aufzubauen. Der Pendelverkehr liefert die ersten dreißig Minuten, die Strecke danach dauerhaft. Wer nur eines von beiden macht, hat entweder eine Lücke am Anfang oder gebundene Fahrzeuge über Stunden.'),

    H2('kavitation', 'Kavitation vermeiden'),
    CO('danger', 'Kavitation', 'Bei zu großer Saughöhe, zu hoher Drehzahl, verstopftem Saugkorb oder zu geringem Zulauf fällt der Druck an der Saugseite unter den Dampfdruck des Wassers. Es bilden sich Dampfblasen, die schlagartig zusammenfallen. Die Folgen: Leistungseinbruch, ratterndes Geräusch, Materialabtrag am Laufrad und im schlimmsten Fall Förderabriss.'),
    KF(
      'Saughöhe so gering wie möglich halten.',
      'Saugkorb frei halten und ausreichend tief eintauchen.',
      'Bei ersten Anzeichen die Drehzahl reduzieren.',
      'Eingangsdruck an Folgepumpen nie unter den Grenzwert fallen lassen.',
      'Förderstrom bei Problemen reduzieren, statt Druck zu erhöhen.',
      'Bei anhaltenden Problemen zusätzliche Entnahmestelle erschließen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Höhenverlust etwa 1 bar je 10 m; Reibungsverlust steigt überproportional mit dem Durchfluss.',
      'Größerer Querschnitt schlägt höheren Druck.',
      'Eingangsdruck an jeder Folgepumpe mindestens etwa 1,5 bar.',
      'Ohne Funkverbindung keine Förderstrecke.',
      'Langsam öffnen und schließen – Druckstoßgefahr.',
      '<b>Pendelverkehr</b> ist die Alternative im Gelände; Kombination beider oft ideal.',
      'Kavitation durch Saughöhe, Saugkorb und Drehzahl vermeiden.',
      'Reserve einplanen: lieber eine Pumpe mehr als ein Förderabriss.'),
  ],
},

/* ---------------------------------------------------------------- T3 ---- */
{
  id: 't3', title: 'Hydranten & Löschwassernetz', duration: 18,
  blocks: [
    P('Ein Hydrant ist kein Wasserspeicher, sondern ein Zugang zum Trinkwassernetz. Wie viel er liefert, hat mit dem Hydranten selbst wenig zu tun – und viel mit dem Rohr, an dem er hängt. Wer das versteht, schätzt die Ergiebigkeit im eigenen Ausrückgebiet richtig ein.'),

    H2('netz', 'Das Löschwassernetz'),
    P('Hydranten sind an das öffentliche Trinkwassernetz angeschlossen. Dessen Aufbau bestimmt, wie viel Wasser an einer Stelle entnommen werden kann.'),
    TBL(['Merkmal', 'Bedeutung', 'Folge für die Entnahme'],[
      ['Ringleitung', 'Speisung von zwei Seiten', 'deutlich höhere Ergiebigkeit'],
      ['Stichleitung, Endstrang', 'Speisung nur von einer Seite', 'begrenzte Ergiebigkeit, Druckabfall'],
      ['Nennweite (DN)', 'Durchmesser der Versorgungsleitung', 'je größer, desto mehr Durchfluss'],
      ['Netzdruck', 'Ruhedruck im Netz', 'sinkt bei Entnahme deutlich ab'],
      ['Gleichzeitige Entnahme', 'mehrere Hydranten an einem Strang', 'jeder liefert weniger'],
    ]),
    CO('warn', 'Nicht alle Hydranten an einen Strang', 'Werden mehrere Hydranten desselben Leitungsstrangs gleichzeitig genutzt, sinkt die Menge an jedem einzelnen. Bei größeren Lagen lohnt es sich deshalb, Entnahmestellen auf verschiedene Stränge zu verteilen – oder ganz auf unabhängige Quellen auszuweichen.'),

    H2('arten', 'Hydrantenarten'),
    TBL(['Art', 'Aufbau', 'Vorteil', 'Nachteil'],[
      ['Überflurhydrant', 'Säule über dem Boden mit Abgängen', 'sofort sichtbar, schnell anschließbar', 'anfahrgefährdet, benötigt Platz'],
      ['Unterflurhydrant', 'im Boden unter einer Straßenkappe', 'geschützt, unauffällig, platzsparend', 'Standrohr nötig, Kappe muss gefunden werden'],
      ['Wandhydrant', 'im Gebäude an einer Steigleitung', 'Löschwasser direkt im Geschoss', 'begrenzte Menge, Bauart beachten'],
      ['Steigleitung trocken', 'Rohr im Gebäude ohne Wasser', 'Feuerwehr speist von außen ein', 'Einspeisestelle muss gefunden werden'],
      ['Steigleitung nass', 'ständig wassergefüllt', 'sofort verfügbar', 'nur in bestimmten Gebäuden'],
    ]),

    H2('kennung', 'Hinweisschilder'),
    DEF('Hydrantenschild', 'Ein genormtes weiß-rotes Schild, das die Lage des Hydranten relativ zum Schild angibt: Es nennt die <b>Nennweite</b> der Versorgungsleitung sowie den Abstand in Metern nach vorn beziehungsweise nach links und rechts. Damit lässt sich der Hydrant auch dann finden, wenn die Straßenkappe unter Schnee, Laub oder einem parkenden Fahrzeug verborgen ist.'),
    KF(
      'Schilder im Ausrückgebiet kennen und ihre Angaben lesen können.',
      'Die Nennweite gibt einen ersten Hinweis auf die Ergiebigkeit.',
      'Beschädigte oder fehlende Schilder melden.',
      'Im Winter Kappen von Schnee und Eis freihalten.',
      'Zugeparkte Hydranten melden – sie sind rechtlich geschützt.',
      'Bei Bauarbeiten Netzabschaltungen erfragen und im Blick behalten.'),

    H2('ergiebig', 'Ergiebigkeit einschätzen'),
    DEF('Löschwasservolumenstrom', 'Die Wassermenge pro Zeit, die an einer Entnahmestelle tatsächlich verfügbar ist. Sie hängt vom Rohrnetz, vom Netzdruck und von der gleichzeitigen Entnahme an anderen Stellen ab – nicht vom Hydranten selbst. Deshalb kann derselbe Hydrantentyp an verschiedenen Orten sehr unterschiedliche Mengen liefern.'),
    P('Die Ergiebigkeit der Hydranten im eigenen Gebiet zu kennen, ist Teil der Einsatzvorbereitung. Bei Großobjekten ist sie häufig im Feuerwehrplan vermerkt; darüber hinaus liefert der Wasserversorger Auskunft. Wer weiß, dass ein bestimmter Hydrant nur begrenzt liefert, plant von vornherein eine zweite Entnahmestelle ein.'),
    CO('danger', 'Das Netz kann zu wenig liefern', 'In ländlichen Gebieten, in Wohngebieten mit kleinen Leitungsquerschnitten und bei Objekten mit hoher Brandlast reicht das Hydrantennetz häufig nicht aus. Dann sind unabhängige Löschwasserquellen und Wasserförderung über lange Wegstrecke erforderlich. Diese Erkenntnis muss <b>vor</b> dem Einsatz vorliegen, nicht während.'),

    H2('praxis', 'Praktische Hinweise'),
    KF(
      'Standrohr immer vollständig aufsetzen und festdrehen.',
      'Hydrant vor dem Ankuppeln spülen – Ablagerungen und Rost.',
      'Langsam öffnen und schließen; Wasserschlag vermeiden.',
      'Abgänge einzeln bedienen, nicht alle gleichzeitig aufreißen.',
      'Nach dem Einsatz Hydrant vollständig schließen und entwässern lassen.',
      'Kappe verschließen und den Bereich sauber hinterlassen.',
      'Schäden am Hydranten dem Wasserversorger melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Ergiebigkeit hängt vom Rohrnetz ab, nicht vom Hydranten.',
      'Ringleitungen liefern deutlich mehr als Stichleitungen.',
      'Mehrere Hydranten an einem Strang schwächen sich gegenseitig.',
      'Über-, Unterflur-, Wandhydrant und Steigleitungen unterscheiden.',
      'Das Hydrantenschild nennt Nennweite und Abstand.',
      'Ergiebigkeit im eigenen Gebiet vorher kennen, nicht im Einsatz herausfinden.',
      'Langsam öffnen und schließen, spülen, nach dem Einsatz entwässern.'),
  ],
},

/* ---------------------------------------------------------------- T4 ---- */
{
  id: 't4', title: 'Offene Wasserentnahme im Detail', duration: 18,
  blocks: [
    P('Die Entnahme aus einem Gewässer ist die ergiebigste Form der Löschwasserversorgung – und die störanfälligste. Sie hängt von der Saugstelle ab, von der Dichtheit der Leitung und davon, ob jemand den Saugkorb im Blick behält. Diese Lektion behandelt die Praxis.'),

    H2('saugstelle', 'Die Saugstelle'),
    P('Eine geeignete Saugstelle entscheidet über Erfolg oder Misserfolg. Sie muss vier Anforderungen gleichzeitig erfüllen: erreichbar für das Fahrzeug, ausreichend tief, mit festem Untergrund und sicher für die Mannschaft.'),
    KF(
      '<b>Zugänglichkeit:</b> Kann das Fahrzeug heranfahren und wieder wenden?',
      '<b>Wassertiefe:</b> Der Saugkorb muss vollständig eintauchen, ohne den Grund zu berühren.',
      '<b>Untergrund:</b> tragfähig für Fahrzeug und Mannschaft, nicht rutschig.',
      '<b>Saughöhe:</b> so gering wie möglich – jeder Meter zählt.',
      '<b>Sicherheit:</b> Absturz- und Rutschgefahr am Ufer, Beleuchtung bei Dunkelheit.',
      '<b>Fließgeschwindigkeit:</b> starke Strömung erschwert das Sichern der Saugleitung.'),
    CO('warn', 'Eigensicherung am Wasser', 'Ufer sind rutschig, Böschungen steil und das Wasser kalt. Wer am Wasser arbeitet, trägt eine Rettungsweste, arbeitet nicht allein und hat einen gesicherten Standplatz. Ein Sturz ins Wasser bei Nacht und im Winter ist lebensgefährlich – auch für einen guten Schwimmer in Einsatzkleidung.'),

    H2('aufbau', 'Aufbau der Saugleitung'),
    STEPS(
      'Saugstelle erkunden und Standort des Fahrzeugs festlegen.',
      'Benötigte Zahl der Saugschläuche ermitteln – so wenig wie möglich.',
      'Saugschläuche kuppeln; Dichtringe auf Vollständigkeit und Zustand prüfen.',
      'Saugkorb anbringen, Ventilleine und Halteleine anschlagen.',
      'Leitung zu Wasser bringen; Saugkorb vollständig eintauchen lassen.',
      'Halteleine so befestigen, dass der Saugkorb in der richtigen Tiefe bleibt.',
      'Entlüften, ansaugen, Betriebsdruck einregeln.',
      'Saugleitung gegen Abrutschen sichern und den Bereich absichern.'),
    CO('danger', 'Undichte Saugleitung', 'Die häufigste Ursache für einen misslungenen Ansaugvorgang ist eine undichte Saugleitung – ein fehlender oder spröder Dichtring, eine nicht vollständig verriegelte Kupplung, ein beschädigter Saugschlauch. Die Dichtringe werden vor jedem Aufbau geprüft; im Einsatz ist dafür keine Zeit mehr.'),

    H2('saugkorb', 'Der Saugkorb'),
    DEF('Saugkorb', 'Die Armatur am Ende der Saugleitung. Sie verhindert das Ansaugen von Feststoffen und enthält ein Rückschlagventil, das verhindert, dass das Wasser nach dem Ansaugen zurückläuft. Über die <b>Ventilleine</b> lässt sich das Ventil öffnen, um die Leitung zu entleeren; die <b>Halteleine</b> hält den Saugkorb in der gewünschten Tiefe.'),
    KF(
      'Saugkorb weder auf den Grund absinken lassen noch zu flach halten.',
      'Regelmäßig auf Verstopfung prüfen – Laub, Treibgut, Eis, Schlamm.',
      'Bei sinkendem Wasserstand die Tiefe nachjustieren.',
      'Bei Fließgewässern gegen Verdriften sichern.',
      'Ventilleine so führen, dass sie von der Bedienstelle aus erreichbar ist.',
      'Nach dem Einsatz Saugkorb reinigen und auf Beschädigung prüfen.'),

    H2('faltbehaelter', 'Faltbehälter als Puffer'),
    DEF('Faltbehälter', 'Ein mobiler Löschwasserbehälter, der als Puffer zwischen der Wasseranlieferung und der Entnahme dient. Beim Pendelverkehr füllen Tanklöschfahrzeuge den Behälter, während die Pumpe kontinuierlich daraus entnimmt. Dadurch wird aus einer stoßweisen Anlieferung eine gleichmäßige Versorgung.'),
    KF(
      'Aufstellort eben, tragfähig und für die Fahrzeuge erreichbar wählen.',
      'Ausreichend Platz für Zufahrt und Wenden einplanen.',
      'Behälter vor dem ersten Befüllen vollständig entfalten und ausrichten.',
      'Füllstand überwachen – der Behälter ist der Puffer, nicht der Vorrat.',
      'Einspeisung und Entnahme räumlich trennen, damit sich Fahrzeuge nicht blockieren.',
      'Bei Frost an Vereisung denken.'),

    H2('umwelt', 'Gewässerschutz'),
    P('Die Entnahme aus einem Gewässer greift in ein Ökosystem ein. Der Aufwand, das zu berücksichtigen, ist gering – die Wirkung erheblich.'),
    KF(
      'Saugkorb so anbringen, dass möglichst keine Fische angesaugt werden.',
      'Uferbereich schonen, Böschungen nicht mit Fahrzeugen zerstören.',
      'Kein Kraftstoff, Öl oder Schaummittel ins Gewässer gelangen lassen.',
      'Bei Naturschutzgebieten die zuständige Behörde einbinden.',
      'Nach dem Einsatz die Saugstelle sauber hinterlassen.',
      'Vorbereitete Saugstellen regelmäßig prüfen und pflegen.'),
    CO('tip', 'Saugstellen vorher kennen und prüfen', 'Vorbereitete Saugstellen im eigenen Gebiet sollten regelmäßig angefahren und geprüft werden – besonders vor dem Winter und nach Hochwasser. Eine zugewachsene, vereiste oder verlandete Saugstelle nützt im Ernstfall nichts, und das merkt man dann in der schlechtestmöglichen Situation.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Saugstelle muss zugänglich, tief genug, tragfähig und sicher sein.',
      'Eigensicherung am Wasser: Rettungsweste, nie allein, gesicherter Standplatz.',
      'Dichtringe vor jedem Aufbau prüfen – Undichtigkeit ist die häufigste Ansaugstörung.',
      'Saugkorb vollständig eintauchen, aber nicht auf dem Grund.',
      'Ventil- und Halteleine anschlagen und erreichbar führen.',
      '<b>Faltbehälter</b> macht aus stoßweiser Anlieferung eine gleichmäßige Versorgung.',
      'Gewässer und Ufer schonen, Saugstellen regelmäßig prüfen.'),
  ],
},

/* ---------------------------------------------------------------- T5 ---- */
{
  id: 't5', title: 'Wasserförderung planen & berechnen', duration: 20,
  blocks: [
    P('Die Wasserförderung über lange Wegstrecke ist eine der wenigen Aufgaben in der Feuerwehr, bei denen tatsächlich gerechnet wird. Die Rechnung ist einfach – aber sie muss vor dem Aufbau gemacht werden, nicht danach. Eine falsch geplante Strecke lässt sich nicht durch mehr Gas an der Pumpe retten.'),

    H2('groessen', 'Die Größen der Rechnung'),
    TBL(['Größe', 'Bedeutung', 'Richtwert'],[
      ['Ausgangsdruck', 'Druck an der ersten beziehungsweise jeder Pumpe', 'je nach Schlauchmaterial begrenzt, häufig 8 bis 10 bar'],
      ['Höhenverlust', 'Druckverlust durch Steigung', 'etwa 1 bar je 10 m Höhe'],
      ['Höhengewinn', 'Druckgewinn bei Gefälle', 'etwa 1 bar je 10 m Gefälle'],
      ['Reibungsverlust', 'Verlust in der Schlauchleitung', 'stark abhängig vom Durchfluss'],
      ['Eingangsdruck Folgepumpe', 'Restdruck, der ankommen muss', 'mindestens etwa 1,5 bar'],
      ['Förderstrom', 'benötigte Wassermenge', 'aus der Zahl und Art der Rohre'],
    ]),
    CO('info', 'Der Höhenverlust ist exakt', 'Anders als der Reibungsverlust lässt sich der Höhenverlust exakt berechnen: Er beträgt etwa 1 bar je 10 Meter, unabhängig vom Durchfluss, vom Schlauchdurchmesser und von der Länge. Das macht ihn zur verlässlichsten Größe der ganzen Rechnung – und zur ersten, die man berücksichtigt.'),

    H2('rechnen', 'Die Rechnung Schritt für Schritt'),
    STEPS(
      '<b>Bedarf bestimmen:</b> Wie viele Rohre mit welchem Durchfluss? Daraus ergibt sich der Förderstrom.',
      '<b>Höhenprofil ermitteln:</b> Wie viele Meter Höhenunterschied liegen zwischen Entnahme und Objekt?',
      '<b>Höhenverlust berechnen:</b> Höhendifferenz in Metern durch 10 – das Ergebnis in bar.',
      '<b>Verfügbaren Druck bestimmen:</b> Ausgangsdruck minus geforderter Eingangsdruck der Folgepumpe.',
      '<b>Rest für Reibung:</b> verfügbarer Druck minus Höhenverlust ergibt den Druck, der für Reibung zur Verfügung steht.',
      '<b>Pumpenabstand ableiten:</b> Je größer der Förderstrom, desto kürzer die möglichen Abstände.',
      '<b>Reserve einplanen:</b> Abstände lieber kürzer wählen als knapp bemessen.',
      '<b>Material zählen:</b> Schlauchbedarf ermitteln und Nachschub organisieren.'),
    P('Ein Beispiel zur Veranschaulichung: Liegt das Brandobjekt 60 Meter höher als die Entnahmestelle, gehen allein dafür rund 6 bar verloren. Bei einem Ausgangsdruck von 10 bar und einem geforderten Eingangsdruck von 1,5 bar an der Folgepumpe bleiben etwa 2,5 bar für den Reibungsverlust – die Strecke bis zur nächsten Pumpe wird also deutlich kürzer als in der Ebene.'),
    CO('warn', 'Faustwerte sind Faustwerte', 'Die tatsächlichen Reibungsverluste hängen von Schlauchmaterial, Alter, Kupplungen und Durchfluss ab. Deshalb wird mit Reserve geplant und die Strecke im Betrieb anhand der tatsächlichen Eingangsdrücke nachjustiert. Wer die Rechnung als exakte Vorhersage versteht, wird enttäuscht; wer sie als Planungsgrundlage nutzt, kommt zuverlässig ans Ziel.'),

    H2('mittel', 'Mittel der Förderung'),
    UL(
      '<b>Verstärkerpumpen</b> in der Strecke heben den Druck wieder an.',
      '<b>Schlauchwagen</b> transportieren mehrere tausend Meter B-Schlauch und verlegen ihn während der Fahrt.',
      '<b>Schlauchtragekörbe</b> ermöglichen das Verlegen im Gelände ohne Fahrzeug.',
      '<b>Druckbegrenzungsventile</b> schützen Schläuche und Kräfte.',
      '<b>Sammelstücke und Verteiler</b> für Verzweigungen und Reserveleitungen.',
      '<b>Faltbehälter</b> als Puffer am Ende der Strecke.',
      '<b>Funkverbindung</b> – ohne sie ist keine Strecke betreibbar.'),

    H2('betrieb', 'Die Strecke betreiben'),
    KF(
      'Jede Pumpenstelle meldet ihren Eingangs- und Ausgangsdruck.',
      'Änderungen am Verbrauch werden über die gesamte Strecke kommuniziert.',
      'Strahlrohre und Abgänge langsam bedienen.',
      'Schlauchplatzer sofort melden, Leitung drucklos machen, Abschnitt ersetzen.',
      'Reservematerial entlang der Strecke verteilen, nicht nur am Anfang.',
      'Straßenquerungen kennzeichnen und gegen Überfahren schützen.',
      'Ablösung für die Pumpenstellen einplanen – der Betrieb dauert oft Stunden.',
      'Betriebsstoffe für die Pumpen nachführen.'),
    CO('danger', 'Der Förderabriss', 'Reißt die Förderung ab – durch Kavitation, Schlauchplatzer oder zu geringen Eingangsdruck –, steht der Löschangriff. Der Wiederaufbau dauert deutlich länger als der ursprüngliche Aufbau, weil die Leitung neu entlüftet und der Druck stufenweise wieder aufgebaut werden muss. Deshalb gilt: lieber eine Pumpe mehr in der Strecke als ein Abriss mitten im Einsatz.'),

    H2('fuehrung', 'Wasserförderung ist Führungsaufgabe'),
    P('Eine Förderstrecke bindet erhebliche Kräfte: Pumpen, Maschinisten, Material, Funk, Ablösung. Sie wird deshalb als eigener <b>Einsatzabschnitt</b> geführt, mit einem verantwortlichen Abschnittsleiter und einer eigenen Funkgruppe.'),
    KF(
      'Abschnitt „Wasserversorgung" bilden und einen Leiter benennen.',
      'Eigene Funkgruppe für die Strecke einrichten.',
      'Skizze der Strecke anfertigen: Pumpenstandorte, Längen, Höhen.',
      'Materialbedarf und Nachschub frühzeitig planen.',
      'Ablösung und Verpflegung für die Pumpenstellen organisieren.',
      'Rückmeldung an die Einsatzleitung: Wann steht die Strecke, wie viel liefert sie?',
      'Abbau ebenso planen wie den Aufbau.'),
    CO('tip', 'Reserve einplanen', 'Der erfahrenste Grundsatz der Wasserförderung lautet: lieber eine Pumpe mehr in der Strecke als ein Förderabriss mitten im Löschangriff. Eine zusätzliche Pumpe kostet ein Fahrzeug und zwei Kräfte. Ein Abriss kostet den Angriff – und möglicherweise das Objekt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Höhenverlust etwa 1 bar je 10 m – exakt und unabhängig vom Durchfluss.',
      'Reibungsverlust steigt stark mit dem Förderstrom.',
      'Eingangsdruck an jeder Folgepumpe mindestens etwa 1,5 bar.',
      'Rechnung: Bedarf, Höhenprofil, Höhenverlust, verfügbarer Druck, Pumpenabstand, Reserve.',
      'Faustwerte sind Planungsgrundlage, keine exakte Vorhersage.',
      'Ohne Funkverbindung keine Förderstrecke.',
      'Ein Förderabriss kostet mehr Zeit als der ursprüngliche Aufbau.',
      'Wasserförderung als eigenen Einsatzabschnitt führen.'),
  ],
},

];
