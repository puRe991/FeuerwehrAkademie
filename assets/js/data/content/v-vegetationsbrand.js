/* =========================================================================
   MODUL V — Vegetations- & Waldbrandbekämpfung
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls V.

   Fachliche Grundlage: FwDV 3 und 100, Empfehlungen und Fachkonzepte zur
   Vegetationsbrandbekämpfung (u. a. @fire, vfdb), Waldbrandgefahrenindex
   des Deutschen Wetterdienstes, DGUV Vorschrift 49.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_V = [

/* ---------------------------------------------------------------- V1 ---- */
{
  id: 'v1', title: 'Brandverhalten & Taktik', duration: 22,
  blocks: [
    P('Ein Vegetationsbrand verhält sich grundlegend anders als ein Gebäudebrand. Er hat keine Wände, die ihn begrenzen, er bewegt sich mit dem Wind, er beschleunigt bergauf und er kann sich in Minuten über hunderte Meter ausdehnen. Wer ihn wie einen Zimmerbrand bekämpft, verliert.'),

    H2('verhalten', 'Wie sich Vegetationsbrände ausbreiten'),
    P('Drei Faktoren bestimmen das Verhalten: <b>Wetter, Gelände und Brennstoff</b>. Alle drei ändern sich im Verlauf eines Einsatzes – deshalb ist die Beurteilung des Brandverhaltens keine einmalige Aufgabe, sondern eine ständige.'),
    KF(
      '<b>Wind</b> bestimmt Richtung und Geschwindigkeit der Feuerfront – und er kann drehen.',
      '<b>Hangneigung</b> wirkt wie Wind: Bergauf breitet sich Feuer deutlich schneller aus, weil die Flammen den Bewuchs oberhalb vorwärmen.',
      '<b>Brennstoff</b>: trockenes Gras und Reisig zünden sofort, Totholz brennt lange, Nadelstreu glimmt in die Tiefe.',
      '<b>Trockenheit und Temperatur</b> senken die Zündschwelle erheblich.',
      '<b>Flugfeuer</b> entzündet Bereiche weit vor der eigentlichen Front.',
      '<b>Tageszeit</b>: Nachmittags sind Temperatur und Ausbreitung am höchsten, nachts sinkt die Aktivität meist.'),

    H2('formen', 'Formen des Vegetationsbrands'),
    TBL(['Form', 'Wo es brennt', 'Bedeutung'],[
      ['Bodenfeuer (Erdfeuer)', 'in Humus, Torf und Wurzelwerk', 'schwelt tief, schwer zu löschen, flammt spät wieder auf'],
      ['Lauffeuer', 'in Gras, Streu und Bodenbewuchs', 'häufigste Form, schnelle Ausbreitung, meist beherrschbar'],
      ['Kronenfeuer', 'in den Baumkronen', 'sehr schnell, sehr heiß, mit Bodenmitteln kaum zu bekämpfen'],
      ['Flugfeuer', 'brennende Teile im Aufwind', 'entzündet Bereiche weit vor der Front'],
      ['Stammfeuer', 'am einzelnen Baum', 'Übergang vom Boden- zum Kronenfeuer'],
    ]),
    CO('danger', 'Das Kronenfeuer ist die Grenze', 'Ein voll entwickeltes Kronenfeuer breitet sich mit hoher Geschwindigkeit aus und erzeugt Strahlungswärme, gegen die kein Bodenangriff mehr hilft. Dann geht es nicht mehr um Löschen, sondern um Riegel, Räumung und den Schutz bedrohter Objekte. Diese Entscheidung muss frühzeitig fallen.'),

    H2('teile', 'Die Teile eines Vegetationsbrands'),
    P('Ein Vegetationsbrand hat eine Struktur, die man kennen muss, um ihn zu bekämpfen. Die Begriffe sind international gebräuchlich und helfen bei der Verständigung.'),
    TBL(['Teil', 'Bedeutung', 'Taktisch'],[
      ['Kopf (Front)', 'die schnell laufende Vorderseite', 'gefährlichster Bereich, oft nicht direkt angreifbar'],
      ['Flanken', 'die seitlichen Ränder', 'gut angreifbar, Ansatzpunkt zum Einengen'],
      ['Rücken (Heck)', 'die langsam gegen den Wind laufende Rückseite', 'sicherster Ansatzpunkt, Ausgangspunkt des Angriffs'],
      ['Finger', 'schmale Vorsprünge der Front', 'können den Trupp umschließen'],
      ['Inseln', 'unverbrannte Bereiche innerhalb der Fläche', 'können später zünden'],
      ['Ankerpunkt', 'gesicherter Ausgangspunkt des Angriffs', 'zum Beispiel ein Weg, ein Gewässer, verbrannte Fläche'],
    ]),
    CO('info', 'Vom Ankerpunkt aus arbeiten', 'Ein Vegetationsbrand wird nicht irgendwo angegriffen, sondern von einem <b>gesicherten Ankerpunkt</b> aus – einer Stelle, an der das Feuer nicht vorbeikommt: ein breiter Weg, ein Gewässer, ein Acker oder die bereits abgebrannte Fläche. Von dort arbeitet man sich entlang der Flanke vor. Wer mitten in die Fläche einsteigt, kann umschlossen werden.'),

    H2('taktik', 'Taktiken der Bekämpfung'),
    TBL(['Verfahren', 'Prinzip', 'Wann geeignet'],[
      ['Direkter Angriff', 'Wasser oder Werkzeug unmittelbar an der Flammenfront', 'niedrige Flammen, ausreichend Wasser, sicherer Zugang'],
      ['Indirekter Angriff', 'Wundstreifen oder Riegel vor der Front anlegen', 'hohe Flammen, wenig Wasser, große Flächen'],
      ['Flankenangriff', 'Front von den Seiten her einengen', 'Standardverfahren, sicherer als der Frontalangriff'],
      ['Riegelstellung', 'bedrohte Objekte und Siedlungen schützen', 'wenn die Fläche nicht zu halten ist'],
      ['Abbrennen lassen', 'kontrolliertes Ausbrennen bis zu einer natürlichen Grenze', 'wenn kein Wert bedroht ist und Kräfte fehlen'],
    ]),
    DEF('Wundstreifen', 'Ein von brennbarem Material befreiter Geländestreifen – angelegt mit Handwerkzeug, Räumgerät oder Landmaschinen. Er entzieht dem Feuer den Brennstoff und stoppt so die Ausbreitung. Bei begrenzten Wassermengen ist er häufig wirksamer als jedes Ablöschen, weil er nicht nachgeliefert werden muss.'),
    CO('tip', 'Schwerpunkt: bedrohte Werte', 'Bei begrenzten Kräften gilt eine klare Reihenfolge: zuerst Menschen, dann bedrohte Objekte und Infrastruktur, dann die Fläche. Die Versuchung, dorthin zu fahren, wo das Feuer am eindrucksvollsten ist, ist groß – taktisch richtig ist fast immer etwas anderes.'),

    H2('werkzeug', 'Nicht alles ist Wasser'),
    P('Der wichtigste Unterschied zum Gebäudebrand: Beim Vegetationsbrand ist Wasser knapp und Nachschub aufwendig. Handwerkzeug wird deshalb zum gleichwertigen Löschmittel.'),
    UL(
      '<b>Feuerpatsche:</b> erstickt Flammen im Gras durch Ausschlagen.',
      '<b>Wiedehopfhaue und Waldbrandharke:</b> legen Wundstreifen an.',
      '<b>Löschrucksack:</b> gezieltes Ablöschen kleiner Stellen mit wenig Wasser.',
      '<b>Schaufel und Spaten:</b> Erde auf Glutnester werfen, Bodenfeuer trennen.',
      '<b>Räumgerät und Landmaschinen:</b> breite Wundstreifen in kurzer Zeit.',
      '<b>Netzmittel im Wasser:</b> verbessert die Durchdringung erheblich.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Wetter, Gelände und Brennstoff bestimmen das Brandverhalten – und ändern sich laufend.',
      'Bergauf breitet sich Feuer deutlich schneller aus.',
      'Formen: Bodenfeuer, Lauffeuer, Kronenfeuer, Flugfeuer.',
      'Ein Kronenfeuer ist mit Bodenmitteln kaum zu bekämpfen.',
      'Struktur: Kopf, Flanken, Rücken, Finger, Inseln, Ankerpunkt.',
      'Immer vom gesicherten <b>Ankerpunkt</b> aus arbeiten.',
      'Verfahren: direkt, indirekt, Flankenangriff, Riegel, kontrolliertes Abbrennen.',
      'Der <b>Wundstreifen</b> ist bei knappem Wasser oft wirksamer als Löschen.'),
  ],
},

/* ---------------------------------------------------------------- V2 ---- */
{
  id: 'v2', title: 'Sicherheit (LACES) & Wassermanagement', duration: 22,
  blocks: [
    P('Bei Vegetationsbränden sterben Einsatzkräfte fast nie durch das Feuer, das sie bekämpfen – sondern durch das, das sie einschließt. Eine Winddrehung, ein übersehener Finger der Front, ein Fluchtweg, der nicht mehr passierbar ist. Genau dagegen richtet sich das wichtigste Merkschema dieses Moduls.'),

    H2('gefahr', 'Die Hauptgefahr: Einschluss'),
    P('Die größte Gefahr ist der plötzliche <b>Einschluss</b> durch eine Winddrehung oder ein schnelles Überlaufen der Front. Ein Grasfeuer bewegt sich bei Wind schneller, als ein Mensch in Schutzkleidung laufen kann – erst recht bergauf.'),
    KF(
      'Winddrehungen können die Front binnen Sekunden auf die eigene Position lenken.',
      'Bergauf laufendes Feuer ist schneller als ein Mensch.',
      'Rauch nimmt Sicht und Orientierung – auch im Freien.',
      'Hitze und körperliche Belastung führen schnell zur Erschöpfung.',
      'Fahrzeuge können auf Waldwegen nicht wenden und werden zur Falle.',
      'Kommunikation bricht in Tälern und im Wald häufig ab.'),

    H2('laces', 'LACES'),
    MNE([{l:'L',w:'Lookout'},{l:'A',w:'Awareness'},{l:'C',w:'Communication'},{l:'E',w:'Escape routes'},{l:'S',w:'Safety zones'}],
      'Beobachter, Lageaufmerksamkeit, Kommunikation, festgelegte Fluchtwege und Sicherheitszonen – festgelegt und bekannt, <b>bevor</b> mit der Arbeit begonnen wird.'),
    FIG('laces', 'LACES – die fünf Sicherheitsgrundsätze bei Vegetationsbränden.'),
    TBL(['Buchstabe', 'Bedeutung', 'Praktisch'],[
      ['L – Lookout', 'Beobachter', 'eine Kraft beobachtet Front, Wind und Wetter und warnt sofort'],
      ['A – Awareness', 'Lageaufmerksamkeit', 'Brandverhalten, Wind, eigene Position laufend bewerten'],
      ['C – Communication', 'Kommunikation', 'ständige Funkverbindung, vereinbarte Signale, Rückmeldungen'],
      ['E – Escape routes', 'Fluchtwege', 'mindestens zwei, bekannt, begehbar, regelmäßig geprüft'],
      ['S – Safety zones', 'Sicherheitszonen', 'ausreichend große Bereiche ohne Brennstoff, erreichbar'],
    ]),
    CO('danger', 'LACES gilt vor Arbeitsbeginn', 'Die fünf Punkte werden festgelegt, <b>bevor</b> ein Trupp in die Fläche geht – nicht nachträglich. Ein Fluchtweg, der erst gesucht wird, wenn er gebraucht wird, existiert nicht. Und eine Sicherheitszone, die zehn Minuten entfernt ist, ist keine.'),
    P('Ändert sich einer der fünf Punkte – der Beobachter fällt aus, der Funk bricht ab, der Fluchtweg wird unpassierbar –, wird die Arbeit unterbrochen und die Lage neu bewertet. Das ist keine Übervorsicht: Praktisch jeder tödliche Unfall bei Vegetationsbränden lässt sich auf einen verletzten LACES-Punkt zurückführen.'),

    H2('winddrehung', 'Die Winddrehung'),
    CO('warn', 'Wetter aktiv verfolgen', 'Winddrehungen kündigen sich meist an: durch aufziehende Bewölkung, durch Gewitterzellen in der Nähe, durch den Durchzug einer Front, durch die typische Umkehr der Hangwinde am Abend. Wer die Wetterentwicklung verfolgt und den Wetterdienst abfragt, wird nicht überrascht. Der Beobachter meldet jede Änderung sofort.'),
    STEPS(
      'Windrichtung und -stärke vor Beginn feststellen und allen mitteilen.',
      'Windsack, Band oder Rauchfahne als dauerhafte Anzeige nutzen.',
      'Wetterentwicklung über Leitstelle oder App verfolgen.',
      'Bei Änderung sofort Arbeit unterbrechen und Lage neu bewerten.',
      'Fluchtwege und Sicherheitszonen an die neue Lage anpassen.',
      'Im Zweifel zurückziehen – die Fläche läuft nicht weg.'),

    H2('wasser', 'Wasser im Gelände managen'),
    P('Wasser ist bei Vegetationsbränden die knappste Ressource. Ein Tanklöschfahrzeug ist nach wenigen Minuten leer, und der Weg zur nächsten Entnahmestelle kann Kilometer betragen. Deshalb gilt hier ein anderer Umgang als beim Gebäudebrand.'),
    KF(
      '<b>Sparsam und gezielt</b> einsetzen – nicht flächig fluten.',
      '<b>Kleine Querschnitte</b> nutzen: D-Schläuche und kleine Rohre statt C.',
      '<b>Netzmittel</b> zusetzen – es verbessert die Durchdringung erheblich.',
      '<b>Pendelverkehr</b> mit Tanklöschfahrzeugen frühzeitig aufbauen.',
      '<b>Faltbehälter</b> als Puffer an zentraler Stelle aufstellen.',
      '<b>Handwerkzeug</b> gleichwertig einsetzen – Wundstreifen brauchen kein Wasser.',
      '<b>Entnahmestellen</b> früh erkunden und kartieren.'),
    CO('info', 'Wasser sparen ist Taktik', 'Ein Trupp, der mit einem Löschrucksack und einer Feuerpatsche arbeitet, hält eine Flanke oft länger als einer, der mit dem C-Rohr in fünf Minuten den Tank leert. Beim Vegetationsbrand ist nicht die Wassermenge entscheidend, sondern die Ausdauer.'),

    H2('fahrzeuge', 'Fahrzeuge im Gelände'),
    CO('danger', 'Das Fahrzeug als Falle', 'Ein Löschfahrzeug auf einem schmalen Waldweg kann nicht wenden. Kommt das Feuer, sitzt die Besatzung fest. Deshalb: Wendemöglichkeit vor der Einfahrt klären, Fahrzeug immer in Fluchtrichtung abstellen, Motor laufen lassen oder Schlüssel stecken, Fenster geschlossen halten und Rückzugsweg festlegen.'),
    KF(
      'Fahrzeug in Fluchtrichtung abstellen – nie mit der Front in die Sackgasse.',
      'Wendemöglichkeiten vorher erkunden.',
      'Nicht in unverbranntem, dichtem Bewuchs abstellen.',
      'Mindestens ein Rohr am Fahrzeug zum Eigenschutz bereithalten.',
      'Fahrzeugbesatzung nie vollständig verlassen – jemand bleibt fahrbereit.',
      'Auf Wegzustand achten: Löschfahrzeuge sind schwer und graben sich ein.'),

    H2('nachsorge', 'Nachlöschen und Glutnester'),
    CO('warn', 'Rückzündung', 'Vegetationsbrände flammen aus Glutnestern wieder auf – aus Wurzelwerk, Torf, Totholz und Baumstümpfen. Diese Glut kann Tage überdauern und dann bei aufkommendem Wind einen neuen Brand entzünden. Der Einsatz ist erst mit einem belastbaren „Feuer aus" beendet, nicht mit dem Verschwinden der Flammen.'),
    STEPS(
      'Brandfläche systematisch abschreiten, nicht stichprobenartig.',
      'Wärmebildkamera einsetzen – sie findet Glut unter der Oberfläche.',
      'Verdächtige Stellen aufgraben und durchnässen.',
      'Randbereiche besonders kontrollieren – dort beginnt die Wiederausbreitung.',
      'Baumstümpfe, Wurzeln und Totholz gezielt prüfen.',
      'Brandwache stellen, bei Trockenheit über mehrere Tage.',
      'Kontrollgänge mit dem Waldbesitzer oder Forst vereinbaren.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Hauptgefahr ist der Einschluss durch Winddrehung oder überlaufende Front.',
      '<b>LACES</b>: Lookout, Awareness, Communication, Escape routes, Safety zones.',
      'LACES wird vor Arbeitsbeginn festgelegt, nicht nachträglich.',
      'Ändert sich ein LACES-Punkt, wird die Arbeit unterbrochen.',
      'Wasser sparsam und gezielt einsetzen; Handwerkzeug ist gleichwertig.',
      'Fahrzeuge in Fluchtrichtung abstellen, Wendemöglichkeit vorher klären.',
      'Glutnester können Tage überdauern – Brandwache und Kontrollgänge.'),
  ],
},

/* ---------------------------------------------------------------- V3 ---- */
{
  id: 'v3', title: 'Wetter, Waldbrandgefahr & Brandverhalten', duration: 18,
  blocks: [
    P('Kein anderer Einsatz hängt so stark vom Wetter ab wie der Vegetationsbrand. Dieselbe Fläche, derselbe Bewuchs und dieselbe Zündquelle führen an einem feuchten Maitag zu einem Kleinbrand und an einem heißen Augusttag zu einer Großschadenlage. Wer das Wetter lesen kann, sagt das Brandverhalten voraus.'),

    H2('faktoren', 'Die Einflussgrößen'),
    TBL(['Faktor', 'Wirkung', 'Beobachtung'],[
      ['Wind', 'treibt Front und Flugfeuer, kann drehen', 'Windsack, Rauchfahne, Bäume, Wetterdienst'],
      ['Temperatur', 'senkt die Zündschwelle, trocknet Brennstoff', 'Tageszeit, Sonneneinstrahlung'],
      ['Luftfeuchte', 'niedrige Feuchte bedeutet höhere Gefahr', 'Wetterdaten, Tages- und Nachtgang'],
      ['Niederschlag', 'durchfeuchtet Brennstoff – aber nur oberflächlich', 'Vorgeschichte der letzten Wochen'],
      ['Hangneigung', 'bergauf deutlich schnellere Ausbreitung', 'Karte, Höhenlinien, Gelände'],
      ['Exposition', 'Südhänge sind trockener und heißer', 'Karte, Sonnenstand'],
      ['Brennstoff', 'Art, Menge, Feuchte und Verteilung', 'Bewuchs, Totholz, Streuauflage'],
    ]),
    CO('info', 'Der Tagesgang', 'Vegetationsbrände folgen einem Tagesrhythmus: Am späten Vormittag steigen Temperatur und Ausbreitungsgeschwindigkeit, am Nachmittag erreichen sie ihr Maximum, abends sinkt die Aktivität mit steigender Luftfeuchte. Das ist eine der wenigen verlässlichen Prognosen bei diesen Lagen – und die Grundlage für Kräfteplanung und Ablösung.'),

    H2('index', 'Waldbrandgefahrenindex'),
    DEF('Waldbrandgefahrenindex', 'Der Deutsche Wetterdienst veröffentlicht einen täglich aktualisierten Index der Waldbrandgefahr in <b>fünf Stufen</b>, der Wetterdaten und Brennstofffeuchte berücksichtigt. Ergänzend gibt es den Graslandfeuerindex für offene Flächen. Beide fließen in die Einsatzvorbereitung ein: Ab hohen Stufen erhöhen viele Wehren die Bereitschaft, fahren Streifen und halten zusätzliche Kräfte vor.'),
    KF(
      'Index täglich verfolgen, besonders im Frühjahr und Sommer.',
      'Frühjahr ist gefährlicher, als viele denken: trockenes Vorjahresgras, kaum grüner Bewuchs.',
      'Bei hohen Stufen Bereitschaft erhöhen und Ausrückeordnung anpassen.',
      'Waldbesitzer, Forst und Behörden abstimmen.',
      'Bevölkerung informieren – ein erheblicher Teil der Brände ist menschengemacht.',
      'Bei Großlagen Wetterberatung direkt beim Wetterdienst anfordern.'),

    H2('brennstoff', 'Brennstoff beurteilen'),
    P('Nicht jeder Bewuchs brennt gleich. Für die Einschätzung ist entscheidend, wie fein verteilt und wie trocken das Material ist – nicht, wie viel davon da ist.'),
    TBL(['Brennstoff', 'Verhalten'],[
      ['Trockenes Gras, Vorjahresgras', 'zündet sofort, sehr schnelle Ausbreitung, geringe Hitze'],
      ['Reisig, Streuauflage', 'zündet leicht, trägt das Feuer zum Stamm'],
      ['Nadelstreu, Rohhumus', 'glimmt in die Tiefe, langlebige Glutnester'],
      ['Totholz, Baumstümpfe', 'brennt lange, schwer zu löschen, Rückzündungsquelle'],
      ['Nadelbäume', 'harzreich, hohe Kronenfeuergefahr'],
      ['Laubwald mit grünem Bewuchs', 'deutlich geringere Gefahr'],
      ['Torf und Moor', 'schwelt über Wochen, sehr schwer zu löschen'],
    ]),
    CO('danger', 'Torf und Bodenfeuer', 'Brennt der Boden selbst – Torf, Rohhumus, Wurzelwerk –, ist die Fläche mit Oberflächenwasser nicht zu löschen. Solche Brände schwelen über Wochen und breiten sich unterirdisch aus. Sie erfordern das großflächige Durchnässen oder Aufgraben und eine sehr lange Nachkontrolle.'),

    H2('beobachtung', 'Brandverhalten beobachten'),
    P('Das Brandverhalten verrät, was als Nächstes passiert. Ein Beobachter, der die richtigen Zeichen kennt, warnt rechtzeitig.'),
    KF(
      '<b>Rauchfarbe und -richtung:</b> zeigen Windrichtung und Brandintensität.',
      '<b>Flammenhöhe:</b> Anhaltspunkt für die Angreifbarkeit – hohe Flammen bedeuten indirekten Angriff.',
      '<b>Ausbreitungsgeschwindigkeit:</b> laufend abschätzen und melden.',
      '<b>Flugfeuer:</b> Auftreten und Reichweite beobachten.',
      '<b>Wirbelbildung und Aufwind:</b> Zeichen für hohe Energie und mögliche Verwirbelung.',
      '<b>Übergang zum Kronenfeuer:</b> einzelne brennende Kronen sind das Warnzeichen.'),
    CO('warn', 'Wetter im Blick behalten', 'Aufkommender oder drehender Wind ist die größte Gefahr. Ein fest eingeteilter Beobachter verfolgt Wetter und Front laufend und meldet jede Änderung sofort. Diese Aufgabe wird nicht nebenbei erledigt – sie ist eine Funktion.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Wetter, Gelände und Brennstoff bestimmen das Brandverhalten.',
      'Der Tagesgang ist verlässlich: nachmittags Maximum, abends Rückgang.',
      'Der <b>Waldbrandgefahrenindex</b> des DWD hat fünf Stufen und fließt in die Vorbereitung ein.',
      'Das Frühjahr ist wegen trockenen Vorjahresgrases besonders gefährlich.',
      'Fein verteilter, trockener Brennstoff ist gefährlicher als große Mengen.',
      'Torf- und Bodenfeuer schwelen über Wochen und sind kaum zu löschen.',
      'Ein eingeteilter Beobachter verfolgt Wetter und Brandverhalten laufend.'),
  ],
},

/* ---------------------------------------------------------------- V4 ---- */
{
  id: 'v4', title: 'Fahrzeuge, Ausrüstung & Wassermanagement', duration: 18,
  blocks: [
    P('Ein Löschgruppenfahrzeug, das für den Zimmerbrand optimiert ist, hilft im Wald nur begrenzt: Es ist zu schwer für Waldwege, sein Tank ist nach Minuten leer, und seine Beladung passt nicht. Vegetationsbrandbekämpfung braucht eigene Technik – und vor allem eigenes Denken über Wasser.'),

    H2('fahrzeuge', 'Geeignete Fahrzeuge'),
    TBL(['Fahrzeug', 'Stärke', 'Grenze'],[
      ['TLF mit Allradantrieb', 'großer Wasservorrat, geländefähig', 'schwer, begrenzte Wendigkeit'],
      ['Waldbrand-TLF', 'Pump-and-Roll, Selbstschutzanlage, geländegängig', 'nicht überall vorhanden'],
      ['Kleinlöschfahrzeug, Pickup', 'wendig, kommt auf schmale Wege', 'wenig Wasser'],
      ['Löschwasser-Anhänger', 'zusätzlicher Vorrat', 'Zugfahrzeug nötig, eingeschränkte Beweglichkeit'],
      ['Landmaschinen mit Fasswagen', 'große Wassermengen im Gelände', 'Abstimmung mit Landwirten nötig'],
      ['Unimog und ähnliche', 'sehr geländegängig', 'begrenzter Wasservorrat'],
    ]),
    DEF('Pump-and-Roll', 'Löschen aus dem langsam fahrenden Fahrzeug heraus. Die Pumpe wird unabhängig vom Fahrantrieb betrieben, sodass gleichzeitig gefahren und Wasser abgegeben werden kann. Das Verfahren erlaubt es, eine lange Flanke effizient abzuarbeiten, ohne anzuhalten – erfordert aber eine eingespielte Abstimmung zwischen Maschinist und Rohrführer und geeignete Technik.'),
    CO('warn', 'Nicht jedes Fahrzeug gehört in den Wald', 'Ein 16-Tonner auf einem aufgeweichten Forstweg ist keine Hilfe, sondern eine Blockade für alle nachrückenden Kräfte. Vor der Einfahrt werden Wegzustand, Tragfähigkeit, Breite und Wendemöglichkeit beurteilt. Im Zweifel bleibt das schwere Fahrzeug an der befestigten Straße und speist eine Leitung ein.'),

    H2('ausruestung', 'Ausrüstung für den Vegetationsbrand'),
    UL(
      '<b>Löschrucksack:</b> etwa 20 Liter Wasser auf dem Rücken, gezieltes Ablöschen mit minimalem Verbrauch.',
      '<b>Feuerpatsche:</b> erstickt Grasfeuer durch Ausschlagen – ohne jedes Wasser.',
      '<b>Wiedehopfhaue, Waldbrandharke, McLeod:</b> legen Wundstreifen an.',
      '<b>Schaufel und Spaten:</b> Erde auf Glut, Bodenfeuer trennen.',
      '<b>D-Schläuche und kleine Hohlstrahlrohre:</b> sparsamer Wassereinsatz.',
      '<b>Netzmittelzumischung:</b> verbessert die Durchdringung von Streu und Humus.',
      '<b>Wärmebildkamera:</b> findet Glutnester in der Nachsorge.',
      '<b>Trinkwasser und Verpflegung:</b> für die Einsatzkräfte – oft unterschätzt.'),
    CO('info', 'Vegetationsbrand-PSA', 'Die schwere Feuerwehrschutzkleidung ist für den Vegetationsbrand ungeeignet: Sie staut Wärme und führt bei stundenlanger Arbeit in der Sonne schnell zu Erschöpfung und Kreislaufproblemen. Viele Wehren beschaffen deshalb leichtere Vegetationsbrand-Schutzkleidung. Wo sie fehlt, müssen Pausen, Trinken und Ablösung umso konsequenter organisiert werden.'),

    H2('wasser', 'Wasser im Gelände organisieren'),
    STEPS(
      'Entnahmestellen erkunden: Teiche, Bäche, Löschwasserbrunnen, Hydranten am Waldrand.',
      'Befüllstelle einrichten – mit ausreichend Platz und geregeltem Verkehr.',
      'Pendelverkehr organisieren: Fahrzeuge, Fahrer, Fahrweg, Einbahnregelung.',
      'Faltbehälter als Puffer an zentraler Stelle aufstellen.',
      'Verbrauch überwachen und Nachschub vorausschauend steuern.',
      'Bei langer Dauer zusätzlich eine Förderstrecke aufbauen.',
      'Landwirte mit Fasswagen einbinden – sie bringen große Mengen ins Gelände.'),
    KF(
      'Wasser sparsam und gezielt einsetzen – nicht flächig fluten.',
      'Kleine Querschnitte nutzen: D statt C.',
      'Netzmittel deutlich verbessern die Wirkung je Liter.',
      'Handwerkzeug spart Wasser vollständig.',
      'Erst durchnässen, wo es wirkt – nicht dort, wo es beeindruckt.',
      'Reserve für den Eigenschutz der Trupps immer vorhalten.'),

    H2('vorbereitung', 'Vorbereitung zahlt sich aus'),
    P('Vegetationsbrandbekämpfung ist der Bereich, in dem Vorbereitung den größten Unterschied macht. Wer die Wasserstellen, Zufahrten und Rettungspunkte im eigenen Gebiet kennt, gewinnt im Ernstfall eine halbe Stunde – und die entscheidet über die Größe der Fläche.'),
    KF(
      'Waldgebiete im Ausrückbereich kartieren: Wege, Tragfähigkeit, Wendemöglichkeiten.',
      'Wasserentnahmestellen erfassen und regelmäßig prüfen.',
      'Forstliche Rettungspunkte kennen und in die Karten übernehmen.',
      'Zusammenarbeit mit Forst, Waldbesitzern und Landwirten aufbauen.',
      'Geländegängige Technik und Handwerkzeug beschaffen und üben.',
      'Alarm- und Ausrückeordnung für Vegetationsbrandlagen anpassen.',
      'Gemeinsame Übungen mit Nachbarwehren durchführen.'),
    CO('tip', 'Die Landwirte nicht vergessen', 'Landwirtschaftliche Fasswagen fassen oft mehrere tausend Liter, sind geländegängig und werden von Menschen gefahren, die das Gelände kennen. In vielen Vegetationsbrandlagen sind sie die wirksamste Wasserversorgung überhaupt. Der Kontakt dazu wird vor dem Einsatz aufgebaut, nicht während.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Geländegängige Fahrzeuge mit großem Tank; Pump-and-Roll ist ein wesentlicher Vorteil.',
      'Schwere Fahrzeuge gehören nicht auf jeden Forstweg.',
      'Löschrucksack, Feuerpatsche und Handwerkzeug sind gleichwertige Mittel.',
      'D-Schläuche und Netzmittel erhöhen die Wirkung je Liter erheblich.',
      'Schwere Schutzkleidung staut Wärme – Pausen, Trinken und Ablösung einplanen.',
      'Wasserversorgung über Pendelverkehr, Faltbehälter und Förderstrecke organisieren.',
      'Landwirte mit Fasswagen sind eine der wirksamsten Wasserquellen.',
      'Vorbereitung – Karten, Wasserstellen, Rettungspunkte – macht den Unterschied.'),
  ],
},

/* ---------------------------------------------------------------- V5 ---- */
{
  id: 'v5', title: 'Luftunterstützung & Zusammenarbeit im Verband', duration: 16,
  blocks: [
    P('Ab einer bestimmten Größe ist ein Vegetationsbrand keine Aufgabe mehr für eine Feuerwehr, sondern für einen Verband – über Tage, mit Hubschraubern, mit Kontingenten aus mehreren Kreisen und mit einer Logistik, die selbst einen Einsatzabschnitt bildet. Diese Lektion behandelt die Zusammenarbeit in solchen Lagen.'),

    H2('luft', 'Unterstützung aus der Luft'),
    P('Bei größeren Lagen unterstützen Hubschrauber mit Außenlastbehältern, in manchen Ländern auch Löschflugzeuge. Drohnen liefern das Lagebild. Beides verändert die Einsatzführung erheblich – und verlangt strikte Koordination.'),
    KF(
      '<b>Hubschrauber</b> nehmen Wasser aus Gewässern oder Faltbehältern auf und werfen es gezielt ab.',
      '<b>Wasserabwürfe</b> kühlen die Front und stützen den Bodenangriff – sie löschen selten allein.',
      '<b>Drohnen</b> zeigen Brandkante, Glutnester und Wirkung der Maßnahmen.',
      '<b>Luftbeobachtung</b> liefert das Gesamtbild, das vom Boden nicht erkennbar ist.',
      '<b>Aufnahmestellen</b> für Hubschrauber müssen eingerichtet und gesichert werden.',
      '<b>Kommunikation</b> zwischen Luft und Boden über festgelegte Wege.'),
    CO('danger', 'Luftraum-Koordination', 'Wo Hubschrauber Wasser aufnehmen oder abwerfen, dürfen sich weder Drohnen noch Einsatzkräfte im Bereich aufhalten. Ein Wasserabwurf trifft mit erheblicher Wucht und kann Menschen verletzen und Bäume brechen. Die Koordination zwischen Luft- und Bodenkräften ist zwingend, und der Abwurfbereich wird vorher geräumt und bestätigt.'),

    H2('verband', 'Im Verband arbeiten'),
    P('Große Vegetationsbrände binden viele Kräfte über lange Zeit. Sie werden in Abschnitte gegliedert und im Verband geführt – mit Bereitschaften, überörtlichen Kontingenten und teilweise Kräften aus anderen Bundesländern.'),
    KF(
      '<b>Abschnitte bilden:</b> Flanke Nord, Flanke Süd, Riegel, Nachlöschen, Wasserversorgung, Logistik.',
      '<b>Klare Aufträge</b> je Abschnitt mit definierten Grenzen.',
      '<b>Eigene Funkgruppen</b> je Abschnitt, um den Führungskreis freizuhalten.',
      '<b>Durchhaltefähigkeit sichern:</b> Ablösung, Verpflegung, Wasser, Betriebsstoffe.',
      '<b>Bereitstellungsraum</b> außerhalb des Gefahrenbereichs einrichten.',
      '<b>Lagekarte</b> mit Brandkante, Abschnitten, Wasserstellen und Fluchtwegen führen.',
      '<b>Regelmäßige Lagebesprechungen</b> mit allen Abschnittsleitern.'),
    CO('info', 'Die Logistik wird zum Abschnitt', 'Bei mehrtägigen Lagen ist die Versorgung keine Nebenaufgabe: Verpflegung, Getränke, Betriebsstoffe, Ersatzmaterial, Unterkünfte und Ablösung für hunderte Kräfte. Diese Aufgabe bekommt einen eigenen Abschnitt und eine verantwortliche Führungskraft – sonst bricht der Einsatz nach 24 Stunden zusammen.'),

    H2('partner', 'Zusammenarbeit mit anderen'),
    TBL(['Partner', 'Beitrag'],[
      ['Forstverwaltung, Waldbesitzer', 'Ortskenntnis, Wege, Räumgerät, rechtliche Fragen'],
      ['Landwirte', 'Fasswagen, Räumgerät, Zugmaschinen, Geländekenntnis'],
      ['THW', 'Beleuchtung, Räumung, Logistik, Wegebau'],
      ['Polizei', 'Absperrung, Verkehr, Evakuierung, Ermittlung'],
      ['Rettungsdienst', 'Betreuung der Einsatzkräfte, Verletztenversorgung'],
      ['Bundeswehr und Bundespolizei', 'Hubschrauber, Personal, Technik'],
      ['Spezialisierte Einheiten', 'Vegetationsbrandbekämpfung, Führungsunterstützung'],
      ['Behörden und Krisenstab', 'Evakuierung, Warnung, übergeordnete Entscheidungen'],
    ]),

    H2('bevoelkerung', 'Bevölkerung und Öffentlichkeit'),
    KF(
      'Betroffene Ortschaften früh warnen – über Warn-Apps, Sirenen und Lautsprecher.',
      'Evakuierungen frühzeitig planen, nicht erst bei akuter Bedrohung.',
      'Verkehrslenkung: Schaulustige und Ausflügler fernhalten.',
      'Pressearbeit zentral über die Einsatzleitung oder den Krisenstab.',
      'Bevölkerung um Mithilfe bitten: keine Drohnen, keine Zufahrten blockieren.',
      'Nach dem Einsatz über Brandursachen und Vorbeugung informieren.'),

    H2('ausdauer', 'Ausdauer statt Tempo'),
    P('Vegetationsbrände sind Marathonlagen. Sie dauern Tage, verlaufen in Wellen und verlangen von der Führung vor allem Geduld: die Front einengen, Abschnitt für Abschnitt sichern, Nachlöscharbeiten konsequent durchziehen und dabei die Kräfte so einteilen, dass sie am dritten Tag noch arbeiten können.'),
    CO('tip', 'Ausdauer gewinnt', 'Wer Kräfte einteilt, Abschnitte klug führt, die Ablösung ernst nimmt und die Front geduldig einengt, gewinnt – und bringt alle sicher nach Hause. Wer am ersten Tag alles gibt, hat am zweiten niemanden mehr. Die wichtigste Kennzahl bei diesen Lagen ist nicht die gelöschte Fläche, sondern die Zahl der Einsatzkräfte, die unverletzt zurückkommen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Hubschrauber und Drohnen unterstützen; die Koordination des Luftraums ist zwingend.',
      'Wasserabwürfe stützen den Bodenangriff – sie löschen selten allein.',
      'Im Abwurfbereich halten sich keine Kräfte auf.',
      'Große Lagen werden in Abschnitte gegliedert, mit eigenen Funkgruppen.',
      'Die Logistik bekommt bei mehrtägigen Lagen einen eigenen Abschnitt.',
      'Forst, Landwirte, THW, Polizei und Behörden früh einbinden.',
      'Bevölkerung früh warnen und Verkehr lenken.',
      'Ausdauer gewinnt – die wichtigste Kennzahl sind unverletzte Einsatzkräfte.'),
  ],
},

];
