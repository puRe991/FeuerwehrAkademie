/* =========================================================================
   MODUL N — Maschinist (FwDV 2)
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls N.

   Fachliche Grundlage: FwDV 2 (Ausbildung), FwDV 3, DIN 14420 ff.
   (Feuerlöschkreiselpumpen), DGUV Vorschrift 49 und 3, StVO §§ 35 und 38,
   StVG § 2 Abs. 10a (Feuerwehrführerschein). Betriebswerte sind
   Richtwerte – maßgeblich sind Hersteller- und Betriebsanweisungen.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_N = [

/* ---------------------------------------------------------------- N1 ---- */
{
  id: 'n1', title: 'Aufgaben & Verantwortung', duration: 18,
  blocks: [
    P('Der Maschinist steht selten im Rampenlicht. Er geht nicht in den Innenangriff und rettet keine Personen aus dem Fenster. Trotzdem hängt der Erfolg des gesamten Einsatzes an ihm: Ohne Wasser am Rohr kann der Angriffstrupp nichts ausrichten, und ohne sichere Anfahrt kommt die Gruppe gar nicht erst an.'),

    H2('rolle', 'Wer ist der Maschinist?'),
    P('Der Maschinist ist Fahrer des Feuerwehrfahrzeugs und bedient die eingebauten sowie die tragbaren Aggregate – vor allem die <b>Feuerlöschkreiselpumpe</b>. Er ist damit eine der Schlüsselfunktionen der Gruppe nach FwDV 3.'),
    KF(
      '<b>Führt das Fahrzeug</b> sicher und zügig zur Einsatzstelle.',
      '<b>Wählt die Einsatzstellung</b> nach Weisung des Einheitsführers und stellt das Fahrzeug ab.',
      '<b>Bedient Pumpe und Aggregate</b> und überwacht ihre Betriebswerte laufend.',
      '<b>Sichert die Einsatzstelle</b> fahrzeugseitig: Warneinrichtungen, Beleuchtung, Verkehrsschutz.',
      '<b>Bleibt bei seiner Pumpe</b> – er ist ausdrücklich kein Springer für andere Aufgaben.',
      '<b>Verantwortet Pflege, Prüfung und Einsatzbereitschaft</b> der ihm anvertrauten Technik.'),
    CO('info', 'Warum der Maschinist bleibt', 'Ein unbeaufsichtigter Pumpenstand ist eine Gefahrenquelle: Der Druck kann steigen oder einbrechen, der Tank leerlaufen, die Pumpe trockenlaufen. Wenn der Angriffstrupp Wasser braucht, muss jemand da sein, der reagiert. Deshalb ist die Regel „der Maschinist bleibt bei der Pumpe" keine Bequemlichkeit, sondern Sicherheit.'),

    H2('voraussetzungen', 'Voraussetzungen für die Funktion'),
    TBL(['Voraussetzung', 'Inhalt'],[
      ['Fahrerlaubnis', 'passende Klasse für das Fahrzeug – häufig C1 oder C, für leichtere Fahrzeuge auch die Feuerwehrführerscheinregelung'],
      ['Truppausbildung', 'abgeschlossene Ausbildung zum Truppmann beziehungsweise zur Truppfrau'],
      ['Lehrgang Maschinist', 'Maschinist für Löschfahrzeuge nach FwDV 2'],
      ['Fahrpraxis', 'regelmäßige Übungsfahrten mit dem eigenen Fahrzeug'],
      ['Ortskenntnis', 'Zufahrten, Wasserentnahmestellen, Engstellen, Objektbesonderheiten'],
      ['Gerätekenntnis', 'sichere Bedienung aller Aggregate des eigenen Fahrzeugs'],
    ]),
    DEF('Feuerwehrführerschein', 'Eine Sonderregelung des Straßenverkehrsgesetzes, die es Feuerwehrangehörigen erlaubt, nach einer gesonderten Ausbildung und Prüfung Einsatzfahrzeuge bis zu einer bestimmten zulässigen Gesamtmasse zu führen, ohne die volle Lkw-Fahrerlaubnis zu besitzen. Die Berechtigung gilt ausschließlich für Fahrten im Feuerwehrdienst.'),

    H2('anfahrt', 'Sonder- und Wegerechte'),
    P('Auf der Anfahrt nimmt der Maschinist Sonderrechte nach § 35 StVO und – mit Blaulicht und Einsatzhorn – das Wegerecht nach § 38 StVO in Anspruch. Beides befreit von einzelnen Verkehrsregeln, aber niemals von der Sorgfaltspflicht.'),
    CO('danger', 'Die gefährlichste Phase des Einsatzes', 'Ein erheblicher Teil der schweren Feuerwehrunfälle passiert auf der Anfahrt – nicht im Brandraum. An roten Ampeln und Kreuzungen gilt deshalb: auf Schrittgeschwindigkeit herunter, Blickkontakt zu anderen Verkehrsteilnehmern suchen, mit Fehlern rechnen. Dreißig Sekunden später und sicher anzukommen ist immer besser als der Alternativfall.'),
    P('Die Verantwortung bleibt vollständig beim Fahrzeugführer. Weder der Einheitsführer noch das Einsatzstichwort entbinden davon. Wer sich einer Fahrsituation nicht gewachsen fühlt, sagt das – vor der Abfahrt.'),

    H2('einsatzstelle', 'An der Einsatzstelle'),
    STEPS(
      'Fahrzeug in der befohlenen Einsatzstellung abstellen, Handbremse anziehen, gegen Wegrollen sichern.',
      'Warneinrichtungen einschalten, bei Verkehrslagen Fahrzeug als Schutzschild nutzen.',
      'Umfeldbeleuchtung und bei Bedarf Lichtmast einschalten.',
      'Pumpe in Betrieb nehmen und Wasserabgabe vorbereiten.',
      'Betriebswerte überwachen: Druck, Drehzahl, Temperatur, Tankfüllstand.',
      'Funkverbindung zum Einheitsführer und zum Verteiler halten.',
      'Aggregate nach Bedarf in Betrieb nehmen und überwachen.'),
    CO('tip', 'Der ruhende Pol', 'Der Maschinist ist die einzige Funktion, die während des gesamten Einsatzes an derselben Stelle bleibt und den Überblick über Wasser, Strom und Fahrzeug behält. Wer ruhig, aufmerksam und vorausschauend arbeitet, ist die stille Lebensversicherung des Angriffstrupps.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der Maschinist fährt, bedient die Pumpe und Aggregate und sichert das Fahrzeug.',
      'Er bleibt bei seiner Pumpe und ist kein Springer.',
      'Voraussetzungen: Fahrerlaubnis, Truppausbildung, Maschinistenlehrgang, Fahrpraxis.',
      'Sonder- und Wegerechte befreien nicht von der Sorgfaltspflicht.',
      'Die Anfahrt ist die gefährlichste Phase – an Kreuzungen Schrittgeschwindigkeit.',
      'An der Einsatzstelle: sichern, beleuchten, Pumpe betreiben, Werte überwachen.'),
  ],
},

/* ---------------------------------------------------------------- N2 ---- */
{
  id: 'n2', title: 'Die Feuerlöschkreiselpumpe', duration: 26,
  blocks: [
    P('Die Feuerlöschkreiselpumpe ist das wichtigste technische Gerät der Feuerwehr. Ihr Prinzip ist einfach genug, um es in fünf Minuten zu verstehen – und ihre Eigenheiten sind zahlreich genug, um einen ganzen Lehrgang zu füllen. Diese Lektion behandelt Aufbau, Funktion und die Betriebswerte, die ein Maschinist im Kopf haben muss.'),

    H2('prinzip', 'Das Funktionsprinzip'),
    P('Im Inneren der Pumpe dreht sich ein <b>Laufrad</b> mit hoher Drehzahl. Das Wasser tritt in der Mitte ein, wird durch die Fliehkraft nach außen geschleudert und verlässt die Pumpe am Rand mit hoher Geschwindigkeit. Im Pumpengehäuse wird diese Geschwindigkeit in <b>Druck</b> umgewandelt. Gleichzeitig entsteht in der Mitte ein Unterdruck, der weiteres Wasser nachzieht.'),
    FIG('kreiselpumpe', 'Feuerlöschkreiselpumpe: Das Laufrad schleudert das Wasser nach außen – Sog an der Saugseite, Druck an der Druckseite.'),
    CO('warn', 'Kreiselpumpen saugen nicht von selbst an', 'Eine Kreiselpumpe kann nur Wasser fördern, kein Luft-Wasser-Gemisch. Solange Luft in der Saugleitung steht, passiert nichts. Deshalb hat jede Feuerlöschkreiselpumpe eine <b>Entlüftungseinrichtung</b>, die die Luft aus Saugleitung und Pumpengehäuse entfernt und so den Ansaugvorgang erst ermöglicht.'),

    H2('bezeichnung', 'Die Pumpenbezeichnung'),
    DEF('FPN 10-2000', 'F = Feuerlöschpumpe, P = Pumpe, N = Normaldruck, 10 = Nenndruck in bar, 2000 = Nennförderstrom in Litern pro Minute. Diese Werte werden unter definierten Bedingungen gemessen – unter anderem bei einer bestimmten geodätischen Saughöhe. Im Einsatz können sie je nach Saughöhe und Leitungsführung abweichen.'),
    TBL(['Bezeichnung', 'Bedeutung', 'Typisch verbaut'],[
      ['FPN 10-1000', 'fest eingebaut, 10 bar, 1.000 l/min', 'LF 10, MLF'],
      ['FPN 10-2000', 'fest eingebaut, 10 bar, 2.000 l/min', 'LF 20, HLF 20'],
      ['PFPN 10-1000', 'tragbar (Tragkraftspritze), 10 bar, 1.000 l/min', 'TSF, TSF-W, als Zusatzpumpe'],
      ['FPH', 'Hochdruckpumpe', 'Sonderfahrzeuge, Hochdruck-Löschanlagen'],
    ]),

    H2('aufbau', 'Aufbau und Bedienelemente'),
    UL(
      '<b>Saugeingang</b> mit A-Kupplung für Saugleitung oder Zuleitung.',
      '<b>Druckabgänge</b>, meist mehrere B-Abgänge, einzeln absperrbar.',
      '<b>Entlüftungseinrichtung</b> zum Ansaugen.',
      '<b>Ein- und Ausgangsmanometer</b> zur Überwachung.',
      '<b>Gashebel oder Drehzahlregelung</b> zur Einstellung des Ausgangsdrucks.',
      '<b>Tankfüllstandsanzeige</b> und Umschaltung Tank- oder Fremdbetrieb.',
      '<b>Entwässerungseinrichtung</b> für Frostschutz und Reinigung.'),
    P('Moderne Pumpen verfügen zusätzlich über <b>Druckregelautomatik</b> und <b>Trockenlaufschutz</b>. Beides entlastet den Maschinisten, ersetzt aber nicht die Überwachung: Automatiken versagen, und der Maschinist muss erkennen, wenn etwas nicht stimmt.'),

    H2('ansaugen', 'Ansaugen aus offenem Gewässer'),
    STEPS(
      'Saugleitung kuppeln – Kupplungen sauber, Dichtringe vorhanden und unbeschädigt.',
      'Saugkorb anbringen, Ventilleine und Halteleine anschlagen.',
      'Saugleitung zu Wasser bringen: Saugkorb vollständig eintauchen, Grund nicht berühren.',
      'Alle Druckabgänge und die Entwässerung schließen.',
      'Entlüftungseinrichtung betätigen, bis Wasser ansteht – Eingangsmanometer beobachten.',
      'Pumpe auf Betriebsdrehzahl bringen.',
      'Druckabgang langsam öffnen und den gewünschten Ausgangsdruck einregeln.',
      'Saughöhe, Ansaugverhalten und Betriebswerte laufend überwachen.'),
    CO('warn', 'Die häufigsten Ansaugfehler', 'Undichte Saugleitung, fehlender oder beschädigter Dichtring, nicht vollständig geschlossene Abgänge, zu geringe Eintauchtiefe des Saugkorbs, verstopfter Saugkorb. In fast allen Fällen zeigt das Eingangsmanometer, dass etwas nicht stimmt – wer es beobachtet, findet den Fehler in Sekunden.'),

    H2('kavitation', 'Kavitation'),
    CO('danger', 'Kavitation', 'Bei zu großer Saughöhe, zu hoher Drehzahl, verstopftem Saugkorb oder zu geringem Zulauf fällt der Druck an der Saugseite unter den Dampfdruck des Wassers. Es bilden sich <b>Dampfblasen</b>, die im Druckbereich schlagartig zusammenfallen. Die Folgen: Leistungseinbruch, ein charakteristisches Rattern oder Kiesgeräusch und mit der Zeit Materialabtrag am Laufrad.'),
    STEPS(
      'Bei Verdacht sofort die Drehzahl reduzieren.',
      'Saugkorb auf Verstopfung prüfen, Eintauchtiefe kontrollieren.',
      'Saughöhe verringern – Fahrzeug oder Pumpe näher ans Wasser bringen.',
      'Förderstrom reduzieren, gegebenenfalls einen Abgang schließen.',
      'Bei anhaltendem Problem einen zweiten Entnahmepunkt oder eine zusätzliche Pumpe einsetzen.'),

    H2('werte', 'Betriebswerte im Kopf'),
    TBL(['Größe', 'Richtwert', 'Bedeutung'],[
      ['Nenndruck Normaldruckpumpe', '10 bar', 'Auslegungsdruck der Pumpe'],
      ['Praktische geodätische Saughöhe', 'etwa 7,5 m', 'darüber wird das Ansaugen unzuverlässig'],
      ['Theoretische Saughöhe', 'etwa 10,3 m', 'physikalische Grenze durch den Luftdruck'],
      ['Eingangsdruck an einer Folgepumpe', 'mindestens etwa 1,5 bar', 'darunter droht Kavitation'],
      ['Druckverlust je 10 m Höhe', 'etwa 1 bar', 'gilt exakt, unabhängig vom Durchfluss'],
      ['C-Rohr mit Mundstück bei 5 bar', 'etwa 100 l/min', 'Grundlage der Wasserbedarfsrechnung'],
      ['B-Rohr ohne Mundstück bei 5 bar', 'etwa 800 l/min', 'entleert einen 2.000-l-Tank in Minuten'],
    ]),

    H2('pflege', 'Nach dem Betrieb'),
    KF(
      'Pumpe und Leitungen durchspülen – zwingend nach Schmutz-, Brack- oder Salzwasser.',
      'Vollständig entwässern, besonders bei Frostgefahr.',
      'Dichtringe und Kupplungen prüfen, Saugkorb reinigen.',
      'Trockensaugprobe zur Dichtheitskontrolle durchführen.',
      'Betriebsstunden und Auffälligkeiten dokumentieren.',
      'Mängel sofort melden – eine Pumpe, die im Einsatz nicht ansaugt, ist ein Totalausfall.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Das Laufrad erzeugt durch Fliehkraft Sog an der Saug- und Druck an der Druckseite.',
      'Kreiselpumpen saugen nicht selbst an – dafür gibt es die Entlüftungseinrichtung.',
      '<b>FPN 10-2000</b>: Normaldruck, 10 bar, 2.000 l/min; <b>P</b> voran bedeutet tragbar.',
      'Ansaugen: kuppeln, sichern, Abgänge schließen, entlüften, Drehzahl, Abgang öffnen.',
      '<b>Kavitation</b> bei zu großer Saughöhe oder verstopftem Saugkorb – Drehzahl sofort senken.',
      'Praktische Saughöhe etwa 7,5 m, Eingangsdruck an Folgepumpen mindestens 1,5 bar.',
      'Nach dem Betrieb spülen, entwässern, Dichtheit prüfen, dokumentieren.'),
  ],
},

/* ---------------------------------------------------------------- N3 ---- */
{
  id: 'n3', title: 'Aggregate & Stromerzeuger', duration: 18,
  blocks: [
    P('Neben der Pumpe betreibt der Maschinist eine ganze Reihe weiterer Aggregate: Stromerzeuger, Lichtmast, Lüfter, Tauchpumpen, Tragkraftspritzen und Seilwinden. Jedes davon hat eigene Betriebsregeln – und mehrere davon können bei falscher Bedienung Menschen töten.'),

    H2('strom', 'Der tragbare Stromerzeuger'),
    P('Stromerzeuger versorgen Beleuchtung, Rettungsgeräte, Lüfter und Tauchpumpen. Sie erzeugen ein eigenes, vom öffentlichen Netz unabhängiges Stromnetz – und genau daraus ergeben sich ihre besonderen Schutzmaßnahmen.'),
    DEF('Schutztrennung mit Isolationsüberwachung', 'Die übliche Schutzmaßnahme tragbarer Feuerwehr-Stromerzeuger. Das erzeugte Netz ist galvanisch vom Erdreich getrennt, sodass ein einzelner Isolationsfehler noch keinen gefährlichen Strom durch den Körper fließen lässt. Ein <b>Isolationswächter</b> überwacht das Netz permanent und meldet den ersten Fehler – der dann behoben werden muss, bevor ein zweiter hinzukommt.'),
    KF(
      'Nur geprüfte Kabel, Verteiler und Geräte anschließen.',
      'Kabeltrommeln <b>vollständig abrollen</b> – aufgewickelte Kabel überhitzen.',
      'Nennleistung beachten und nicht überlasten; Anlaufströme einrechnen.',
      'Isolationswächter beobachten und Meldungen ernst nehmen.',
      'Standfest, trocken und mit Abstand zu brennbarem Material aufstellen.',
      'Bei Nässe besonders vorsichtig arbeiten, Steckverbindungen trocken halten.',
      'Beschädigte Kabel und Geräte sofort außer Betrieb nehmen.'),
    CO('danger', 'Abgase töten lautlos', 'Verbrennungsmotoren – Stromerzeuger, Tragkraftspritzen, Lüfter, Tauchpumpen – dürfen niemals in geschlossenen oder schlecht belüfteten Räumen betrieben werden. Kohlenstoffmonoxid ist farb-, geruch- und geschmacklos und erreicht in Kellern, Tiefgaragen und Zelten binnen Minuten tödliche Konzentrationen. Diese Geräte gehören ins Freie, und die Abgase dürfen nicht in Arbeitsbereiche zurückziehen.'),

    H2('ts', 'Die Tragkraftspritze'),
    P('Die <b>Tragkraftspritze (TS)</b> ist eine tragbare Feuerlöschkreiselpumpe mit eigenem Verbrennungsmotor – typischerweise eine PFPN 10-1000. Sie wird von vier Kräften getragen und ermöglicht die Wasserentnahme dort, wo ein Fahrzeug nicht hinkommt: am Löschteich, am Bachufer, hinter dem Deich.'),
    KF(
      'Vor dem Tragen Tragegriffe prüfen und Trageweg festlegen.',
      'Standfest und möglichst nah am Wasser aufstellen – jeder Meter Saughöhe zählt.',
      'Kraftstoffvorrat prüfen und Nachschub sicherstellen.',
      'Abgasführung beachten, nicht in Senken oder geschlossenen Bereichen betreiben.',
      'Nach dem Einsatz durchspülen, entwässern und Probelauf durchführen.',
      'Regelmäßige Trockensaug- und Leistungsprüfung nach Vorgabe.'),

    H2('weitere', 'Weitere Aggregate'),
    TBL(['Aggregat', 'Aufgabe', 'Zu beachten'],[
      ['Lichtmast', 'großflächige Ausleuchtung', 'Freileitungen, Standfestigkeit, Windlast, vor Abfahrt einfahren'],
      ['Überdrucklüfter', 'Entrauchung', 'nur koordiniert mit dem Innenangriff, Abluftöffnung erforderlich'],
      ['Tauchpumpe', 'Wasserschäden, überflutete Keller', 'Stromversorgung, Verschmutzungsgrad, Ansaughöhe'],
      ['Seilwinde', 'Ziehen und Bergen', 'Zugrichtung, niemand im Seilbereich, Anschlagpunkte prüfen'],
      ['Hydraulikaggregat', 'Rettungssatz', 'Schlauchführung, Ölstand, Stolperfallen vermeiden'],
      ['Atemluftkompressor', 'Flaschenfüllung', 'nur mit besonderer Ausbildung, Luftqualität überwachen'],
    ]),
    CO('warn', 'Der Lichtmast und die Abfahrt', 'Ein nicht eingefahrener Lichtmast reißt beim Losfahren Leitungen ab oder beschädigt das Fahrzeug schwer. Das gehört zu den häufigsten und teuersten Fehlern überhaupt. Deshalb: Vor jeder Abfahrt Rundgang um das Fahrzeug – Mast eingefahren, Klappen zu, Kabel entfernt, niemand mehr im Bereich.'),

    H2('ueberwachung', 'Betriebswerte überwachen'),
    P('Aggregate melden Probleme selten von selbst. Der Maschinist erkennt sie an Zahlen, Geräuschen und Gerüchen – vorausgesetzt, er schaut regelmäßig hin.'),
    KF(
      '<b>Druck und Drehzahl</b> an der Pumpe – Abweichungen deuten auf Leitungsprobleme.',
      '<b>Temperatur</b> von Motor und Aggregaten – Überhitzung kündigt sich an.',
      '<b>Tankfüllstand</b> von Löschwasser und Kraftstoff – rechtzeitig nachfordern.',
      '<b>Ölstände</b> und Leckagen.',
      '<b>Geräusche</b> – Rattern, Pfeifen und Klopfen sind Warnzeichen.',
      '<b>Isolationswächter</b> und Kontrollleuchten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Schutztrennung mit Isolationsüberwachung ist die Schutzmaßnahme am Stromerzeuger.',
      'Kabeltrommeln vollständig abrollen, Nennleistung nicht überschreiten.',
      'Verbrennungsmotoren niemals in geschlossenen Räumen – CO ist tödlich.',
      'Die Tragkraftspritze erreicht Wasserstellen, an die kein Fahrzeug kommt.',
      'Lichtmast vor der Abfahrt einfahren – Rundgang ums Fahrzeug.',
      'Betriebswerte laufend überwachen: Druck, Temperatur, Füllstände, Geräusche.'),
  ],
},

/* ---------------------------------------------------------------- N4 ---- */
{
  id: 'n4', title: 'Wasserförderung & Sonderaufgaben', duration: 20,
  blocks: [
    P('Wenn das Wasser nicht am Objekt ist, muss es dorthin gebracht werden – manchmal über hunderte Meter, manchmal über einen Höhenunterschied von fünfzig Metern. Die Wasserförderung über lange Wegstrecke ist die anspruchsvollste Aufgabe des Maschinisten und eine der wenigen, bei denen wirklich gerechnet wird.'),

    H2('grundlagen', 'Was den Druck aufzehrt'),
    P('Der Ausgangsdruck der ersten Pumpe kommt nie vollständig am Ende an. Drei Effekte zehren ihn auf, und nur einer davon ist unveränderlich.'),
    TBL(['Effekt', 'Verhalten', 'Beeinflussbar durch'],[
      ['Höhenunterschied', 'etwa 1 bar je 10 m – exakt und unabhängig vom Durchfluss', 'Trassenwahl'],
      ['Reibungsverlust', 'steigt mit der Länge und überproportional mit dem Durchfluss', 'größerer Querschnitt, zweite Leitung'],
      ['Armaturen', 'kleiner Anteil je Verteiler, Übergang, Krümmer', 'Anzahl der Armaturen reduzieren'],
    ]),
    CO('info', 'Die wichtigste Einsicht', 'Verdoppelt man den Durchfluss, steigt der Reibungsverlust ungefähr auf das Vierfache. Mehr Wasser über eine lange Strecke bekommt man deshalb am wirksamsten durch einen <b>größeren Querschnitt</b> – eine zweite B-Leitung – und nicht durch mehr Pumpendruck. Mehr Druck erhöht nur die Verluste weiter.'),

    H2('planung', 'Eine Förderstrecke planen'),
    STEPS(
      'Wasserbedarf abschätzen: Wie viele Rohre mit welchem Durchfluss?',
      'Entfernung und Höhenprofil bestimmen – Karte, Höhenlinien, Ortskenntnis.',
      'Höhenverlust berechnen: Höhendifferenz in Metern geteilt durch 10 ergibt bar.',
      'Reibungsverlust abschätzen und Ausgangsdruck festlegen.',
      'Pumpenabstände so wählen, dass an jeder Folgepumpe mindestens etwa 1,5 bar Eingangsdruck ankommen.',
      'Schlauchbedarf ermitteln und Material bereitstellen – Schlauchwagen anfordern.',
      'Funkverbindung zwischen allen Pumpenstandorten sicherstellen.',
      'Beim Aufbau die Leitung markieren und gegen Überfahren sichern.'),
    DEF('Verstärkerpumpe', 'Eine in die Förderstrecke eingebaute Pumpe, die das mit Restdruck ankommende Wasser übernimmt und wieder auf den Ausgangsdruck bringt. Sie saugt nicht an, sondern arbeitet im Zulaufbetrieb. Entscheidend ist, dass ihr Eingangsdruck nicht unter den Grenzwert fällt – sonst reißt die Förderung ab.'),

    H2('betrieb', 'Betrieb der Förderstrecke'),
    KF(
      'Ausgangsdruck begrenzen, damit die Schläuche nicht überlastet werden.',
      'Druckbegrenzungsventile einsetzen, wo Druckstöße drohen.',
      'Strahlrohre langsam öffnen und schließen – Druckstöße lassen Schläuche platzen.',
      'Jede Änderung an einem Ende allen Pumpenstandorten melden.',
      'Eingangsdrücke laufend beobachten und melden.',
      'Bei Schlauchplatzern die Leitung sofort drucklos machen und den Abschnitt ersetzen.',
      'Reserveschläuche und Kupplungen entlang der Strecke bereithalten.'),
    CO('danger', 'Druckstoß', 'Wird am Ende einer langen Leitung ein Strahlrohr schlagartig geschlossen, entsteht eine Druckwelle, die zurück durch die Leitung läuft. Sie kann Schläuche zum Platzen bringen und Kräfte verletzen. Deshalb wird an langen Strecken immer langsam geöffnet und geschlossen – und der Maschinist am Anfang der Strecke wird informiert.'),

    H2('offen', 'Betrieb an offener Wasserstelle'),
    P('Die Wasserentnahme aus einem Gewässer bindet den Maschinisten dauerhaft. Sie ist störanfälliger als der Hydrantenbetrieb und verlangt laufende Aufmerksamkeit.'),
    KF(
      'Saugkorb mit Ventil- und Halteleine sichern, damit er nicht absinkt oder verschlammt.',
      'Eintauchtiefe kontrollieren – bei sinkendem Wasserstand nachsteuern.',
      'Saugkorb regelmäßig auf Verstopfung prüfen, besonders bei Laub und Treibgut.',
      'Uferbereich sichern: Absturz, Rutschgefahr, Beleuchtung, Rettungsweste.',
      'Bei Frost Entwässerung vorbereiten und Leitungen in Bewegung halten.',
      'Saughöhe so gering wie möglich halten.'),

    H2('sonder', 'Sonderaufgaben des Maschinisten'),
    UL(
      'Beleuchtung der Einsatzstelle und Bedienung des Lichtmasts.',
      'Verkehrssicherung fahrzeugseitig und Aufstellen von Warneinrichtungen.',
      'Bedienung von Seilwinde, Aggregaten und Sondereinrichtungen.',
      'Kommunikation mit dem Verteiler und dem Angriffstrupp über den Wasserbedarf.',
      'Überwachung der Betriebsstoffe und rechtzeitige Nachforderung.',
      'Unterstützung bei der Atemluftversorgung, wenn dafür eingeteilt.',
      'Dokumentation von Betriebszeiten und Auffälligkeiten.'),
    CO('tip', 'Vorausschauend arbeiten', 'Der gute Maschinist meldet dem Einheitsführer, dass der Tank in fünf Minuten leer ist – nicht, dass er leer ist. Wer die Entwicklung im Blick hat statt nur den Zustand, verschafft der Führung Handlungszeit. Das ist der eigentliche Unterschied zwischen bedienen und betreiben.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Höhenverlust etwa 1 bar je 10 m; Reibungsverlust steigt überproportional mit dem Durchfluss.',
      'Mehr Wasser über weite Strecken: größerer Querschnitt statt mehr Druck.',
      'Eingangsdruck an jeder Folgepumpe mindestens etwa 1,5 bar.',
      'Strahlrohre langsam öffnen und schließen – Druckstoßgefahr.',
      'Ohne Funkverbindung keine Förderstrecke.',
      'An offener Wasserstelle Saugkorb sichern und Eintauchtiefe überwachen.',
      'Entwicklungen melden, nicht nur Zustände.'),
  ],
},

/* ---------------------------------------------------------------- N5 ---- */
{
  id: 'n5', title: 'Elektrische Sicherheit & Schutzmaßnahmen', duration: 18,
  blocks: [
    P('Strom ist unsichtbar, geräuschlos und wirkt sofort. Er ist eine der wenigen Gefahren an der Einsatzstelle, bei der es keine Vorwarnung und keine zweite Chance gibt. Der Maschinist betreibt die elektrischen Anlagen der Feuerwehr und trägt damit eine besondere Verantwortung.'),

    H2('gefahr', 'Wie Strom wirkt'),
    P('Gefährlich ist nicht die Spannung allein, sondern der <b>Strom durch den Körper</b>. Schon Bruchteile eines Ampere können Herzkammerflimmern auslösen. Wie viel Strom fließt, hängt von der Spannung, vom Körperwiderstand und vor allem davon ab, wie gut der Kontakt zur Erde ist – nasse Kleidung, Schweiß und feuchter Boden senken den Widerstand drastisch.'),
    TBL(['Wirkung', 'Beschreibung'],[
      ['Muskelverkrampfung', 'Loslassen ist nicht mehr möglich – der Betroffene hängt am Leiter'],
      ['Herzkammerflimmern', 'häufigste Todesursache bei Stromunfällen'],
      ['Verbrennungen', 'an Ein- und Austrittsstelle sowie entlang des Strompfads, oft tief'],
      ['Lichtbogen', 'entsteht auch ohne Berührung, verursacht schwere Verbrennungen und Augenschäden'],
      ['Sekundärunfälle', 'Sturz durch die Schreckreaktion'],
    ]),
    CO('danger', 'Verzögerte Wirkung beachten', 'Nach einem Stromdurchfluss können auch Stunden später noch Herzrhythmusstörungen auftreten. Jede Person, die einen Stromunfall erlitten hat, gehört deshalb ärztlich überwacht – auch wenn sie sich völlig unauffällig fühlt.'),

    H2('schutz', 'Schutzmaßnahmen am Stromerzeuger'),
    P('Das Netz eines tragbaren Stromerzeugers ist erdfrei. Diese <b>Schutztrennung</b> bewirkt, dass beim Berühren eines einzelnen Leiters kein geschlossener Stromkreis über die Erde entsteht. Erst ein zweiter Fehler an einer anderen Stelle würde gefährlich – und genau davor warnt die Isolationsüberwachung.'),
    KF(
      'Isolationswächter beobachten; eine Meldung ist ein Auftrag zum Handeln.',
      'Bei Meldung: Verbraucher einzeln abstecken, um den Fehler einzugrenzen.',
      'Nur geprüfte Betriebsmittel mit gültiger Prüfplakette anschließen.',
      'Beschädigte Kabel, Stecker und Gehäuse sofort außer Betrieb nehmen.',
      'Steckverbindungen aus Nässe und Pfützen heraushalten, erhöht ablegen.',
      'Nicht mehrere Erzeuger zusammenschalten, außer die Anlage ist dafür ausgelegt.',
      'Kabeltrommeln vollständig abrollen.'),

    H2('anlagen', 'Elektrische Anlagen an der Einsatzstelle'),
    CO('danger', 'Abstand halten und freischalten lassen', 'Bei Bränden und Unfällen an elektrischen Anlagen – Trafostationen, Freileitungen, Bahnoberleitungen, Photovoltaik – gilt: Abstand halten, freischalten lassen, erst nach ausdrücklicher Bestätigung durch den Betreiber arbeiten. Eine Vermutung, dass abgeschaltet sei, reicht nicht.'),
    TBL(['Anlage', 'Besonderheit', 'Vorgehen'],[
      ['Hausinstallation, Niederspannung', 'bis 1.000 V, meist abschaltbar', 'Hauptschalter, Sicherungen, Sprühstrahl mit Sicherheitsabstand'],
      ['Trafostation, Mittelspannung', 'Lichtbogengefahr auch ohne Berührung', 'nicht betreten, Energieversorger anfordern'],
      ['Freileitung', 'kann bei Abriss unter Spannung am Boden liegen', 'großräumig absperren, Schrittspannung beachten'],
      ['Bahnoberleitung', '15.000 V, Erdung erforderlich', 'Notfallmanagement der Bahn, erst nach Erdung arbeiten'],
      ['Photovoltaik', 'liefert bei Tageslicht Spannung, nicht abschaltbar', 'Module und Gleichstromleitungen als spannungsführend behandeln'],
      ['Ladeinfrastruktur, E-Fahrzeuge', 'Hochvolt, Batteriebrand', 'Rettungsdatenblatt, Freischalten, Beobachtung'],
    ]),
    P('Zum Löschen an elektrischen Anlagen gelten Sicherheitsabstände für den Wasserstrahl: als Richtwert etwa 1 Meter mit Sprühstrahl bei Niederspannung und etwa 5 Meter bei Hochspannung. Mit Vollstrahl sind die Abstände deutlich größer – deshalb wird dort grundsätzlich mit Sprühstrahl gearbeitet. Verbindlich sind die Vorgaben der Betriebsanweisung.'),

    H2('schrittspannung', 'Schrittspannung'),
    DEF('Schrittspannung', 'Liegt ein spannungsführender Leiter am Boden, fließt Strom in das Erdreich und erzeugt dort ein Spannungsgefälle. Zwischen zwei Punkten im Abstand einer Schrittlänge kann dadurch eine gefährliche Spannung anliegen. Wer sich einem solchen Bereich nähert oder ihn verlassen muss, geht in <b>kleinen Schritten mit geschlossenen Füßen</b> oder hüpft mit geschlossenen Beinen.'),

    H2('pv', 'Photovoltaik im Einsatz'),
    P('Photovoltaikanlagen sind zu einem Standardthema geworden. Ihre Besonderheit: Solange Licht auf die Module fällt, liefern sie Spannung – auch bei Mondlicht, auch bei Einsatzstellenbeleuchtung. Der Wechselrichter lässt sich abschalten, die Gleichstromseite zwischen Modulen und Wechselrichter aber nicht.'),
    KF(
      'Module und Gleichstromleitungen immer als spannungsführend behandeln.',
      'Wechselrichter abschalten und kennzeichnen, aber nicht auf Spannungsfreiheit vertrauen.',
      'Module nicht mit Vollstrahl beaufschlagen, Sicherheitsabstände einhalten.',
      'Keine Module betreten und keine Leitungen durchtrennen.',
      'Einsatzstellenbeleuchtung nicht auf die Module richten.',
      'Fachkraft des Betreibers hinzuziehen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Gefährlich ist der Strom durch den Körper – Nässe senkt den Widerstand drastisch.',
      'Stromunfälle immer ärztlich abklären lassen, auch ohne Beschwerden.',
      'Schutztrennung mit Isolationsüberwachung am Stromerzeuger; Meldungen ernst nehmen.',
      'An fremden Anlagen: Abstand, freischalten lassen, Bestätigung abwarten.',
      'Richtwerte Sprühstrahl: etwa 1 m bei Niederspannung, etwa 5 m bei Hochspannung.',
      '<b>Schrittspannung</b>: kleine Schritte mit geschlossenen Füßen.',
      'Photovoltaik liefert bei Licht immer Spannung – Gleichstromseite nicht abschaltbar.'),
  ],
},

/* ---------------------------------------------------------------- N6 ---- */
{
  id: 'n6', title: 'Einsatzfahrt, Fahrphysik & Fahrsicherheit', duration: 20,
  blocks: [
    P('Die Anfahrt ist der Teil des Einsatzes, bei dem am meisten passiert – im schlechten Sinne. Schwere Feuerwehrfahrzeuge sind hoch, schwer und träge, sie fahren unter Zeitdruck, oft nachts und bei schlechtem Wetter, und ihre Fahrer sind aufgeregt. Diese Lektion behandelt, wie man trotzdem sicher ankommt.'),

    H2('sonderrecht', 'Sonderrechte und Wegerecht'),
    TBL(['', 'Sonderrechte (§ 35 StVO)', 'Wegerecht (§ 38 StVO)'],[
      ['Was es erlaubt', 'Abweichen von den Vorschriften der StVO', 'andere müssen sofort freie Bahn schaffen'],
      ['Voraussetzung', 'dringende hoheitliche Aufgabe', '<b>Blaulicht und Einsatzhorn zusammen</b>'],
      ['Grenze', 'nur unter gebührender Berücksichtigung der öffentlichen Sicherheit', 'dieselbe Sorgfaltspflicht bleibt'],
      ['Verantwortung', 'beim Fahrzeugführer', 'beim Fahrzeugführer'],
    ]),
    CO('danger', 'Blaulicht allein reicht nicht', 'Nur Blaulicht bedeutet „Achtung, Einsatzfahrt" – niemand ist verpflichtet, Platz zu machen. Erst Blaulicht <b>und</b> Einsatzhorn lösen das Wegerecht aus. Und selbst dann darf man sich nie darauf verlassen, dass es alle wahrnehmen: Fahrzeuge sind heute gut gedämmt, Musik läuft, und ältere Menschen hören das Horn spät.'),
    P('Rechtlich entscheidend ist: Die Sonderrechte entbinden nicht von der Sorgfaltspflicht. Wer bei Rot in eine Kreuzung fährt und dabei einen Unfall verursacht, haftet – und zwar persönlich. Deshalb ist die Regel an Kreuzungen und roten Ampeln eindeutig: Geschwindigkeit auf Schrittgeschwindigkeit reduzieren, Blickkontakt suchen, erst weiterfahren, wenn der Querverkehr erkennbar reagiert hat.'),

    H2('physik', 'Fahrphysik schwerer Fahrzeuge'),
    P('Ein beladenes Löschgruppenfahrzeug wiegt schnell 14 Tonnen und hat einen deutlich höheren Schwerpunkt als ein Pkw. Beides verändert das Fahrverhalten grundlegend.'),
    KF(
      '<b>Langer Bremsweg:</b> Masse und Bremsanlage begrenzen die Verzögerung – Abstand vergrößern.',
      '<b>Hoher Schwerpunkt:</b> Kippgefahr in Kurven und bei Ausweichmanövern, besonders mit vollem Tank.',
      '<b>Schwappendes Löschwasser:</b> verlagert bei Brems- und Lenkbewegungen die Masse und kann das Fahrzeug destabilisieren.',
      '<b>Große Abmessungen:</b> Höhe, Breite und Länge – Unterführungen, Bäume, enge Zufahrten, Ausschwenken beim Abbiegen.',
      '<b>Toter Winkel:</b> deutlich größer als beim Pkw – Einweiser beim Rückwärtsfahren.',
      '<b>Beladungszustand:</b> ändert Bremsweg und Fahrverhalten spürbar.'),
    CO('warn', 'Einweiser beim Rückwärtsfahren', 'Rückwärtsfahren ohne Einweiser ist eine der häufigsten Unfallursachen im Feuerwehrdienst – meist mit Sachschaden, gelegentlich mit Personenschaden. Es kostet nichts, jemanden absteigen zu lassen, und es verhindert praktisch jeden dieser Schäden.'),

    H2('fahrweise', 'Fahrweise auf der Einsatzfahrt'),
    STEPS(
      'Vor der Abfahrt: alle angeschnallt, Türen zu, Fahrzeug frei, Auftrag und Ziel bekannt.',
      'Zügig, aber vorausschauend fahren – nicht schnell, sondern flüssig.',
      'An Kreuzungen und roten Ampeln auf Schrittgeschwindigkeit, Blickkontakt suchen.',
      'Mit Fehlern anderer rechnen: plötzliches Bremsen, Ausweichen in die falsche Richtung.',
      'Einsatzhorn frühzeitig und gezielt einsetzen, nicht dauerhaft.',
      'Bei Gegenverkehr Fernlicht abblenden – Blendung erzeugt Unfälle.',
      'Bei schwieriger Zufahrt vorher überlegen, wie man wieder herauskommt.'),
    CO('tip', 'Ankommen ist Teil des Auftrags', 'Ein verunfalltes Löschfahrzeug hilft niemandem – es blockiert die Straße, bindet Rettungsdienst und Polizei und nimmt der Einsatzstelle eine ganze Gruppe. Sicheres Fahren ist deshalb keine Vorsicht auf Kosten der Betroffenen, sondern die Voraussetzung dafür, ihnen überhaupt helfen zu können.'),

    H2('sicherheit', 'Sicherheit im Fahrzeug'),
    KF(
      '<b>Anschnallpflicht</b> gilt auch im Mannschaftsraum – ohne Ausnahme.',
      'Ausrüsten während der Fahrt nur, soweit das angeschnallt möglich ist.',
      'Keine losen Geräte im Fahrzeug – sie werden bei einem Unfall zu Geschossen.',
      'Erst absitzen, wenn das Fahrzeug steht und der Einheitsführer das Kommando gibt.',
      'Absitzen immer zur <b>verkehrsabgewandten</b> Seite.',
      'Türen nach dem Absitzen schließen, damit sie niemanden gefährden.'),

    H2('rueckfahrt', 'Rückfahrt und Nachbereitung'),
    P('Nach dem Einsatz lässt die Konzentration nach – Erschöpfung, Erleichterung und manchmal auch die Belastung des Erlebten wirken. Statistisch ist die Rückfahrt deshalb ebenfalls kritisch, obwohl kein Zeitdruck mehr besteht.'),
    KF(
      'Auf der Rückfahrt keine Sonderrechte – es besteht keine Dringlichkeit mehr.',
      'Bei Erschöpfung Fahrerwechsel anbieten und annehmen.',
      'Vor der Abfahrt Rundgang: Lichtmast eingefahren, Klappen zu, Geräte verlastet, niemand mehr im Bereich.',
      'Nach der Rückkehr Fahrzeug betanken, Wasser auffüllen, Geräte prüfen.',
      'Auffälligkeiten am Fahrzeug dokumentieren und melden.',
      'Erst danach Einsatzbereitschaft melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Sonderrechte befreien von StVO-Vorschriften, Wegerecht schafft freie Bahn – nur mit Blaulicht <b>und</b> Horn.',
      'Die Sorgfaltspflicht bleibt immer; die Verantwortung trägt der Fahrzeugführer.',
      'An Kreuzungen und roten Ampeln Schrittgeschwindigkeit und Blickkontakt.',
      'Langer Bremsweg, hoher Schwerpunkt, schwappendes Wasser, große Abmessungen.',
      'Rückwärtsfahren nur mit Einweiser.',
      'Anschnallpflicht auch im Mannschaftsraum; Absitzen zur verkehrsabgewandten Seite.',
      'Auf der Rückfahrt keine Sonderrechte; vor der Abfahrt Rundgang ums Fahrzeug.'),
  ],
},

];
