/* =========================================================================
   MODUL B — Brennen & Löschen
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls B. Ersetzt die früher auf
   curriculum.js / curriculum-extra.js / curriculum-extra2.js verteilten
   Kurzfassungen.

   Fachliche Grundlage: Verbrennungslehre, DIN EN 2 (Brandklassen),
   DIN EN 3 (Feuerlöscher), FwDV 1 und 3. Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_B = [

/* ---------------------------------------------------------------- B1 ---- */
{
  id: 'b1', title: 'Verbrennung verstehen', duration: 26,
  blocks: [
    P('Feuer zu bekämpfen, ohne zu wissen, wie es funktioniert, ist wie Autofahren ohne Verkehrsregeln – es geht eine Weile gut. Fast jede taktische Entscheidung im Löscheinsatz beruht auf ein paar naturwissenschaftlichen Grundlagen: warum ein Stoff brennt, wann er zündet, was ihn zum Erlöschen bringt. Wer diese Zusammenhänge verstanden hat, muss Löschregeln nicht auswendig lernen – er leitet sie ab.'),

    H2('dreieck', 'Das Verbrennungsdreieck'),
    P('Eine Verbrennung ist chemisch betrachtet eine <b>exotherme Oxidation</b>: Ein Stoff reagiert mit Sauerstoff und gibt dabei Energie in Form von Wärme und Licht ab. „Exotherm" heißt, dass mehr Energie frei wird, als zum Start nötig war – deshalb hält sich ein Feuer selbst am Laufen, sobald es einmal brennt.'),
    P('Damit diese Reaktion überhaupt beginnt, müssen drei Faktoren <b>gleichzeitig</b> und im richtigen Verhältnis zusammentreffen:'),
    KF(
      '<b>Brennbarer Stoff</b> – fest, flüssig oder gasförmig',
      '<b>Sauerstoff</b> – in der Regel aus der Luft mit rund 21 Volumenprozent',
      '<b>Zündenergie</b> – Wärme, Funke, Flamme oder Reibung'),
    FIG('verbrennungsdreieck', 'Verbrennungsdreieck: Fehlt eine Seite, erlischt das Feuer – hier setzt jedes Löschverfahren an.'),
    P('Das Dreieck ist mehr als ein Merkbild: Es ist die Landkarte aller Löschverfahren. Wasser entzieht die Wärme, Schaum trennt vom Sauerstoff, das Absperren einer Gasleitung nimmt den Brennstoff weg. Jedes Löschmittel greift mindestens eine Seite des Dreiecks an – mehr Möglichkeiten gibt es physikalisch nicht.'),
    CO('info', 'Erweiterung: das Verbrennungsfünfeck', 'Modern ergänzt man das Dreieck um zwei weitere Bedingungen: das <b>richtige Mengenverhältnis</b> von Brennstoff und Sauerstoff und den <b>ungestörten Ablauf der Kettenreaktion</b>. Erst damit lässt sich erklären, warum Löschpulver wirkt, obwohl es weder kühlt noch nennenswert erstickt – es greift in die chemische Kettenreaktion ein.'),

    H2('festfluessiggas', 'Warum der Aggregatzustand entscheidet'),
    P('Ein verbreitetes Missverständnis: Feste und flüssige Stoffe brennen gar nicht selbst. Was brennt, ist immer das <b>Gas</b> beziehungsweise der <b>Dampf</b> über dem Stoff. Ein Holzscheit muss erst so weit erhitzt werden, dass er brennbare Gase abgibt – dieser Vorgang heißt <b>Pyrolyse</b>. Erst diese Gase verbrennen mit einer sichtbaren Flamme.'),
    DEF('Pyrolyse', 'Thermische Zersetzung eines festen Stoffs unter Wärmeeinwirkung und weitgehendem Sauerstoffmangel. Dabei entstehen brennbare Gase, Teere und Kohlenstoff. Pyrolysegase sind der eigentliche Brennstoff des Zimmerbrands – und der Grund, warum ein Raum mit dichtem Rauch schlagartig durchzünden kann.'),
    P('Bei Flüssigkeiten läuft dasselbe Prinzip ab, nur bei niedrigeren Temperaturen: Über jeder brennbaren Flüssigkeit steht ein Dampfpolster. Zündet man an, brennt der Dampf – nicht die Flüssigkeit. Deshalb ist die Frage, ab welcher Temperatur genug Dampf entsteht, für die Einsatzpraxis so wichtig.'),
    TBL(['Aggregatzustand', 'Was tatsächlich brennt', 'Typische Brandart'],[
      ['fest', 'die durch Pyrolyse entstehenden Gase', 'Flammen- und Glutbrand'],
      ['flüssig', 'der Dampf über der Oberfläche', 'reiner Flammenbrand'],
      ['gasförmig', 'das Gas selbst', 'Flammenbrand, Explosionsgefahr'],
    ]),
    CO('warn', 'Glut oder Flamme?', 'Feste Stoffe brennen zusätzlich als <b>Glut</b> weiter, wenn keine Gase mehr entstehen – Glut ist eine Oberflächenreaktion direkt am Feststoff. Deshalb reicht bei einem Glutbrand das Ablöschen der Flammen nicht: Es muss durchdringend gekühlt werden, sonst flammt der Brand wieder auf.'),

    H2('begriffe', 'Die vier Kenngrößen, die du kennen musst'),
    DEF('Flammpunkt', 'Die niedrigste Temperatur, bei der eine brennbare Flüssigkeit so viel Dampf abgibt, dass sich über ihr ein zündfähiges Dampf-Luft-Gemisch bildet. Am Flammpunkt brennt das Gemisch nach Zündung kurz auf, erlischt aber wieder, weil noch nicht genug Dampf nachgeliefert wird.'),
    DEF('Brennpunkt', 'Die etwas höhere Temperatur, ab der die Flüssigkeit so viel Dampf nachliefert, dass die Flamme selbstständig weiterbrennt. In der Einsatzpraxis wird meist mit dem Flammpunkt gearbeitet, weil er die Gefahrenschwelle markiert.'),
    DEF('Zündtemperatur', 'Die Temperatur, bei der sich ein Stoff <b>ohne</b> äußere Zündquelle selbst entzündet – allein durch Erwärmung. Sie erklärt, warum ein heißer Auspuff trockenes Gras entzünden kann und warum Bauteile in der Nähe eines Brandes gekühlt werden müssen.'),
    DEF('Explosionsgrenzen (UEG/OEG)', 'Der Konzentrationsbereich, in dem ein Gas-Luft-Gemisch zündfähig ist. Unterhalb der <b>unteren Explosionsgrenze</b> ist es „zu mager", oberhalb der <b>oberen Explosionsgrenze</b> „zu fett". Beide Zustände sind nicht zündfähig – aber ein zu fettes Gemisch wird beim Lüften durch den zündfähigen Bereich hindurchverdünnt.'),
    TBL(['Stoff', 'Flammpunkt (ca.)', 'Bedeutung im Einsatz'],[
      ['Ottokraftstoff (Benzin)', 'unter −20 °C', 'jederzeit zündfähige Dämpfe, auch im Winter'],
      ['Dieselkraftstoff', 'über +55 °C', 'bei Umgebungstemperatur schwer entzündbar'],
      ['Heizöl EL', 'über +55 °C', 'wie Diesel – gefährlich wird es bei Erwärmung'],
      ['Spiritus / Ethanol', 'etwa +12 °C', 'zündfähig bereits bei Raumtemperatur'],
      ['Speiseöl', 'über +200 °C', 'Fettbrand erst bei starker Überhitzung'],
    ]),
    CO('danger', 'Der Merksatz zum Flammpunkt', 'Flüssigkeiten brennen nie selbst – es brennt immer der Dampf. Eine Benzinlache ist deshalb auch bei minus zehn Grad hochgefährlich, eine Dieselpfütze bei derselben Temperatur nicht. Genau das entscheidet an der Einsatzstelle über Absperrbereich und Zündquellenverbot.'),

    H2('rauch', 'Brandrauch – der eigentliche Killer'),
    P('Bei Wohnungsbränden sterben die meisten Menschen nicht durch Flammen, sondern durch <b>Rauchgase</b>. Brandrauch ist ein Gemisch aus heißen Gasen, unverbrannten Pyrolyseprodukten und Rußpartikeln. Er ist gleichzeitig giftig, heiß, sichtbehindernd und – weil er unverbrannten Brennstoff enthält – <b>selbst brennbar</b>.'),
    TBL(['Bestandteil', 'Wirkung'],[
      ['Kohlenstoffmonoxid (CO)', 'blockiert den Sauerstofftransport im Blut, geruchlos'],
      ['Kohlenstoffdioxid (CO₂)', 'steigert die Atemfrequenz – man atmet mehr Gift ein'],
      ['Cyanwasserstoff (HCN)', 'Blausäure aus Kunststoffen und Wolle, hochgiftig'],
      ['Salzsäure, Nitrose Gase', 'reizen und verätzen die Atemwege'],
      ['Rußpartikel', 'Sichtbehinderung, Träger anhaftender Schadstoffe'],
    ]),
    P('Aus dieser Zusammensetzung folgen drei Einsatzgrundsätze, die durch das ganze Modul und durch <b>Modul F (Atemschutz)</b> hindurch gelten: Im Rauch wird niemals ohne umluftunabhängigen Atemschutz gearbeitet. Rauch ist brennbar, muss also gekühlt und nicht nur durchquert werden. Und die Kontamination der Schutzkleidung nach dem Einsatz ist ein echtes Gesundheitsrisiko – Stichwort Einsatzstellenhygiene in <b>Modul P</b>.'),
    CO('warn', 'Rauch lügt nicht', 'Farbe, Dichte und Geschwindigkeit des Rauchs verraten viel über den Brand: dichter, dunkler, schnell austretender Rauch bedeutet viel unverbranntes Gas und hohe Energie. Helle, langsam quellende Rauchfahnen deuten auf einen sauerstoffreicheren, kühleren Brand hin. Die Rauchbeobachtung gehört zu jeder Erkundung.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Verbrennung = exotherme Oxidation; sie braucht Brennstoff, Sauerstoff und Zündenergie.',
      'Erweitert: richtiges Mengenverhältnis und ungestörte Kettenreaktion (Fünfeck).',
      'Es brennt immer das Gas beziehungsweise der Dampf – nie der Feststoff selbst.',
      '<b>Pyrolyse</b> liefert die brennbaren Gase des Zimmerbrands.',
      '<b>Flammpunkt</b> = Dampf zündet kurz, <b>Brennpunkt</b> = Flamme bleibt, <b>Zündtemperatur</b> = Selbstentzündung.',
      'Brandrauch ist giftig, heiß, sichtbehindernd und brennbar.',
      'Glutbrände brauchen durchdringende Kühlung, nicht nur Flammenlöschung.'),
  ],
},

/* ---------------------------------------------------------------- B2 ---- */
{
  id: 'b2', title: 'Brandklassen & Löschwirkungen', duration: 24,
  blocks: [
    P('„Womit lösche ich das?" ist die Frage, die an jeder Einsatzstelle zuerst beantwortet werden muss – und die falsche Antwort kann die Lage schlagartig verschlimmern. Damit niemand raten muss, ordnet die Norm brennbare Stoffe in <b>Brandklassen</b> ein. Diese Lektion verbindet die Klassen mit den vier physikalisch möglichen Löschwirkungen.'),

    H2('klassen', 'Die Brandklassen nach DIN EN 2'),
    TBL(['Klasse', 'Brennbare Stoffe', 'Typisch dafür', 'Geeignetes Löschmittel'],[
      ['A', 'feste Stoffe: Holz, Papier, Textil, Kohle, Stroh', 'Glutbildung', 'Wasser, Netzmittel, Schaum, ABC-Pulver'],
      ['B', 'flüssige oder flüssig werdende Stoffe: Benzin, Öl, Lack, Wachs', 'reiner Flammenbrand', 'Schaum, ABC-/BC-Pulver, CO₂'],
      ['C', 'Gase: Methan, Propan, Erdgas, Wasserstoff', 'Ausströmen unter Druck', 'ABC-/BC-Pulver – zuerst Zufuhr stoppen'],
      ['D', 'Metalle: Magnesium, Aluminium, Natrium, Lithium', 'extrem hohe Temperaturen', 'D-Pulver, trockener Sand, Zement'],
      ['F', 'Speiseöle und -fette in Küchengeräten', 'Fettexplosionsgefahr', 'Fettbrandlöscher (Verseifung)'],
    ]),
    FIG('brandklassen', 'Die Brandklassen A–F – das geeignete Löschmittel richtet sich nach der Klasse.'),
    CO('warn', 'Warum es keine Klasse E gibt', 'Früher gab es eine Brandklasse E für Brände in elektrischen Anlagen. Sie wurde gestrichen, weil Elektrizität kein Brennstoff ist – es brennen immer Isolierung, Kunststoff oder Betriebsmittel, also Klasse A oder B. Entscheidend ist heute nicht eine eigene Klasse, sondern die Zulassung des Löschmittels und der <b>Sicherheitsabstand</b> bei Spannung.'),
    P('Diese Abstände solltest du im Kopf haben, weil sie an jeder zweiten Einsatzstelle relevant werden. Als Faustwerte für den Sprühstrahl gelten rund 1 Meter bei Niederspannung bis 1.000 Volt und rund 5 Meter bei Hochspannung über 1.000 Volt. Beim Vollstrahl sind die Abstände deutlich größer – deshalb wird an elektrischen Anlagen grundsätzlich mit Sprühstrahl gearbeitet. Die verbindlichen Werte stehen in den Betriebsanweisungen und in <b>Modul N</b>.'),

    H2('fettbrand', 'Der Sonderfall Fettbrand'),
    CO('danger', 'Fettbrand niemals mit Wasser', 'Trifft Wasser auf brennendes Fett von etwa 300 °C, verdampft es schlagartig und dehnt sich rund 1.700-fach aus. Es reißt das brennende Fett mit und schleudert es als meterhohe Stichflamme durch den Raum – die sogenannte <b>Fettexplosion</b>. Ein Becher Wasser reicht dafür aus.'),
    P('Richtig ist ausschließlich das Ersticken: Deckel auflegen, Gerät ausschalten, Fettbrandlöscher der Klasse F verwenden. Dieser enthält ein Löschmittel, das mit dem heißen Fett chemisch reagiert und eine dichte, kühlende Seifenschicht bildet – die sogenannte <b>Verseifung</b>. Sie verhindert zugleich die Rückzündung, die bei Fettbränden besonders leicht auftritt.'),

    H2('wirkungen', 'Die vier Löschwirkungen'),
    P('So viele Löschmittel es gibt – die Wirkungsmechanismen sind auf vier begrenzt. Jedes Mittel nutzt einen oder mehrere davon, und jeder Mechanismus lässt sich direkt auf das Verbrennungsdreieck zurückführen.'),
    TBL(['Löschwirkung', 'Was passiert', 'Typisches Mittel', 'Angriff auf'],[
      ['Abkühlen', 'Wärme wird entzogen, Temperatur sinkt unter die Zündtemperatur', 'Wasser', 'Energie'],
      ['Ersticken', 'Sauerstoff wird verdrängt oder abgetrennt', 'Schaum, CO₂, Sand, Löschdecke', 'Sauerstoff'],
      ['Trennen / Nährstoffentzug', 'der brennbare Stoff wird entfernt oder abgesperrt', 'Gashahn schließen, Schneise schlagen', 'Brennstoff'],
      ['Antikatalytisch (Inhibition)', 'die chemische Kettenreaktion wird unterbrochen', 'Löschpulver', 'Kettenreaktion'],
    ]),
    FIG('loeschwirkungen', 'Die vier Löschwirkungen – jedes Löschmittel greift an mindestens einer Seite des Verbrennungsdreiecks an.'),
    P('In der Praxis wirken die meisten Löschmittel <b>kombiniert</b>. Schaum erstickt und kühlt zugleich. Wasser kühlt hauptsächlich, verdrängt beim Verdampfen aber auch Sauerstoff. Nur Löschpulver ist ein nahezu reiner Vertreter der antikatalytischen Wirkung – was zugleich seine größte Schwäche erklärt, wie die Lektion zu den Löschmitteln zeigt.'),

    H2('wasser', 'Warum Wasser das Standardlöschmittel ist'),
    DEF('Löschwirkung von Wasser', 'Ein Liter Wasser nimmt beim Erwärmen von 10 °C auf 100 °C rund 0,38 MJ auf – und beim Verdampfen zusätzlich etwa <b>2,26 MJ</b>. Der weitaus größte Teil der Kühlleistung steckt also im Phasenwechsel. Gleichzeitig dehnt sich der Liter auf rund <b>1.700 Liter Wasserdampf</b> aus.'),
    P('Aus diesen beiden Zahlen folgt die gesamte moderne Strahlrohrtaktik. Wasser kühlt nur dann maximal, wenn es tatsächlich <b>verdampft</b> – also in feinen Tropfen mit großer Oberfläche ausgebracht wird. Ein Vollstrahl, der durch den Raum schießt und als Wasser wieder herunterläuft, nutzt nur einen Bruchteil des Potenzials und richtet zugleich Wasserschaden an.'),
    P('Die Ausdehnung auf das 1.700-Fache ist Segen und Fluch. Sie verdrängt Sauerstoff und hilft beim Ersticken. Sie kann aber auch heißen Wasserdampf auf einen Trupp oder auf eingeschlossene Personen treiben – Verbrühungsgefahr. Deshalb wird im Innenangriff dosiert und impulsweise in die heiße Rauchgasschicht gekühlt, statt dauerhaft ins Feuer zu halten. Die konkreten Verfahren behandelt <b>Modul E</b>.'),
    CO('info', 'Wasserschaden ist auch Schaden', 'Ein Kellerbrand, der mit 3.000 Litern gelöscht wird, hinterlässt 3.000 Liter Wasser im Gebäude. Der Grundsatz „so viel wie nötig, so wenig wie möglich" ist deshalb kein Sparzwang, sondern Teil der Aufgabe <b>Schützen</b>.'),

    H2('grenzen', 'Wann Wasser nicht geht'),
    UL(
      '<b>Fettbrände (Klasse F):</b> Fettexplosion – nur ersticken.',
      '<b>Metallbrände (Klasse D):</b> Wasser wird zersetzt, es entsteht Wasserstoff – Explosionsgefahr. Nur D-Pulver oder trockener Sand.',
      '<b>Leichtflüssigkeiten (Klasse B):</b> Wasser sinkt unter die Flüssigkeit, das brennende Medium schwimmt auf und läuft über – Ausbreitung statt Löschung.',
      '<b>Elektrische Anlagen:</b> nur mit zugelassenem Strahlrohr, Sprühstrahl und eingehaltenem Sicherheitsabstand.',
      '<b>Stoffe, die mit Wasser reagieren:</b> Carbide, Alkalimetalle, bestimmte Chemikalien – siehe <b>Modul I</b>.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Brandklassen nach DIN EN 2: <b>A</b> fest, <b>B</b> flüssig, <b>C</b> Gase, <b>D</b> Metalle, <b>F</b> Speisefette.',
      'Eine Klasse E gibt es nicht mehr – entscheidend sind Löschmitteleignung und Sicherheitsabstand.',
      'Fettbrand nur ersticken; Wasser löst eine Fettexplosion aus.',
      'Vier Löschwirkungen: Abkühlen, Ersticken, Trennen, antikatalytisch.',
      '1 Liter Wasser bindet beim Verdampfen rund 2,26 MJ und wird zu etwa 1.700 Liter Dampf.',
      'Maximale Kühlwirkung nur bei feiner Verteilung und tatsächlicher Verdampfung.',
      'Wasser ist ungeeignet bei Fett-, Metall- und vielen Flüssigkeitsbränden.'),
  ],
},

/* ---------------------------------------------------------------- B3 ---- */
{
  id: 'b3', title: 'Brandphasen & extreme Brandereignisse', duration: 22,
  blocks: [
    P('Ein Zimmerbrand ist kein gleichmäßiger Vorgang, sondern ein Ablauf mit Phasen – und mit zwei Momenten, in denen er innerhalb von Sekunden lebensgefährlich wird. Wer die Anzeichen dieser Momente kennt, überlebt sie. Wer sie nicht kennt, steht im falschen Augenblick am falschen Ort. Diese Lektion gehört zu den wichtigsten des gesamten Grundlagenteils.'),

    H2('phasen', 'Der Brandverlauf'),
    P('Der typische Raumbrand durchläuft vier Phasen. Ihre Dauer hängt vor allem von der Brandlast und der verfügbaren Luft ab – moderne Wohnungen mit viel Kunststoff und dichten Fenstern haben die Zeiten gegenüber früher deutlich verkürzt.'),
    TBL(['Phase', 'Was passiert', 'Sauerstoff', 'Bedeutung für die Feuerwehr'],[
      ['Entstehungsbrand', 'kleiner, örtlich begrenzter Brand', 'reichlich', 'jetzt ist Löschen mit einfachsten Mitteln möglich'],
      ['Wachstumsphase', 'Brand greift auf weitere Gegenstände über, Rauchschicht bildet sich', 'noch ausreichend', 'kritische Phase – hier droht der Flashover'],
      ['Vollbrand', 'alle brennbaren Oberflächen brennen', 'begrenzt', 'sehr hohe Temperaturen, Einsturzgefahr'],
      ['Abklingphase', 'Brandlast verbraucht, Temperatur sinkt', 'wieder mehr', 'Nachlöscharbeiten, Glutnester, Rückzündung möglich'],
    ]),
    FIG('brandverlauf', 'Typischer Temperaturverlauf eines Zimmerbrands – der Flashover markiert den sprunghaften Übergang zum Vollbrand.'),
    P('Entscheidend ist die Erkenntnis, dass der Übergang von der Wachstumsphase zum Vollbrand nicht allmählich verläuft, sondern <b>sprunghaft</b>. Genau dieser Sprung heißt Flashover.'),

    H2('ventilation', 'Brandgesteuert oder ventilationsgesteuert'),
    P('Für die Einsatztaktik ist eine zweite Unterscheidung mindestens genauso wichtig wie die Phasen: Wovon wird der Brand gerade begrenzt?'),
    DEF('Brandgesteuerter Brand', 'Es ist genug Sauerstoff vorhanden; die Brandausbreitung hängt nur von der verfügbaren Brandlast ab. Typisch für die frühe Phase oder für Brände im Freien und in gut belüfteten Räumen.'),
    DEF('Ventilationsgesteuerter Brand', 'Der Sauerstoff ist der begrenzende Faktor. Der Brand „hungert", produziert dabei aber weiter große Mengen unverbrannter Pyrolysegase. Typisch für den geschlossenen Wohnungsbrand – und die gefährlichste Ausgangslage für die vorgehenden Kräfte.'),
    CO('danger', 'Warum das über Leben entscheidet', 'Wer bei einem ventilationsgesteuerten Brand eine Tür oder ein Fenster öffnet, liefert genau das nach, was dem Brand fehlt: Sauerstoff. Die Folge ist eine schlagartige Leistungssteigerung – im schlimmsten Fall ein Backdraft. Jede Öffnung an einem Brandobjekt ist deshalb eine <b>taktische Entscheidung</b>, niemals eine Nebensache.'),

    H2('flashover', 'Flashover – die Durchzündung'),
    DEF('Flashover', 'Schlagartige Durchzündung aller brennbaren Oberflächen in einem Raum. Die von Brand und Rauchgasschicht abgestrahlte Wärme erhitzt sämtliche Einrichtungsgegenstände so weit, dass sie Pyrolysegase abgeben und diese nahezu gleichzeitig zünden. Innerhalb weniger Sekunden steht der gesamte Raum im Vollbrand.'),
    P('Beim Flashover werden Temperaturen von deutlich über 600 °C in Bodennähe erreicht. Ein Trupp im Raum hat praktisch keine Überlebenschance – auch nicht in vollständiger persönlicher Schutzausrüstung. Die einzige wirksame Antwort ist, es gar nicht so weit kommen zu lassen.'),
    H3('Vorzeichen erkennen'),
    UL(
      '<b>Dichte, dunkle Rauchgasschicht</b>, die schnell absinkt',
      '<b>Rollover:</b> einzelne Flammenzungen, die durch die Rauchschicht an der Decke laufen',
      '<b>Stark ansteigende Wärme</b>, die selbst durch die Schutzkleidung spürbar wird',
      '<b>Pyrolyse an Gegenständen</b> weit entfernt vom eigentlichen Brandherd',
      '<b>Turbulente, schnelle Rauchbewegung</b> statt ruhigem Ausströmen'),
    CO('warn', 'Die Antwort auf den Flashover', 'Rauchgasschicht mit kurzen Sprühstößen kühlen, Temperaturschichtung beachten, geduckt arbeiten, Rückweg sichern – und im Zweifel zurückziehen. Ein Trupp, der bei den ersten Rollover-Zungen den Raum verlässt, hat richtig gehandelt, nicht versagt.'),

    H2('backdraft', 'Backdraft – die Rauchgasexplosion'),
    DEF('Backdraft', 'In einem weitgehend geschlossenen, sauerstoffarmen Brandraum sammeln sich große Mengen heißer, unverbrannter Pyrolysegase. Wird plötzlich Sauerstoff zugeführt – etwa durch das Öffnen einer Tür –, strömt Luft ein, vermischt sich mit den Gasen und diese zünden explosionsartig durch. Der entstehende Feuerball schlägt durch die Öffnung nach außen.'),
    P('Der Unterschied zum Flashover ist wichtig: Der Flashover entsteht durch <b>Wärme</b>, wenn der Raum genug Luft hat. Der Backdraft entsteht durch <b>Sauerstoffzufuhr</b> in einen Raum, der zu wenig davon hat. Der Flashover kündigt sich im Raum an, der Backdraft von außen an der Tür.'),
    TBL(['Merkmal', 'Flashover', 'Backdraft'],[
      ['Auslöser', 'Wärmestrahlung im Raum', 'plötzliche Sauerstoffzufuhr'],
      ['Sauerstofflage vorher', 'ausreichend', 'stark unterversorgt'],
      ['Wo bemerkbar', 'im Raum, während des Vorgehens', 'außen, vor dem Öffnen'],
      ['Wirkung', 'Vollbrand im gesamten Raum', 'Druckwelle und Feuerball durch die Öffnung'],
    ]),
    H3('Anzeichen für Backdraft-Gefahr'),
    UL(
      '<b>Pulsierender Rauch</b>, der aus Ritzen quillt und wieder eingesogen wird – das Objekt „atmet"',
      '<b>Gelbbrauner, fettiger Rauch</b> unter Druck',
      '<b>An Scheiben kondensierte Öle</b>, verrußte und heiße Fensterflächen',
      '<b>Heiße Türblätter und Türklinken</b>',
      '<b>Pfeifende oder saugende Geräusche</b> an Öffnungen',
      '<b>Keine sichtbaren Flammen</b> trotz starker Rauchentwicklung'),
    CO('danger', 'Türprozedur anwenden', 'Bei Verdacht wird die Tür niemals einfach geöffnet: Position seitlich der Tür einnehmen, Tür kontrolliert und nur spaltweise öffnen, Rauchgase mit kurzen Sprühstößen kühlen, Reaktion beobachten, dann weiter. Ein Trupp mit Wasser am Rohr steht dabei bereit – immer.'),

    H2('weitere', 'Weitere Sonderphänomene'),
    TBL(['Phänomen', 'Was dahintersteckt'],[
      ['Rollover', 'Vorstufe des Flashovers: Zünden der Pyrolysegase in der Deckenschicht'],
      ['Rauchgasdurchzündung', 'Zündung ausgetretener Rauchgase außerhalb des Brandraums, z. B. im Treppenraum'],
      ['Flammenüberschlag', 'Brandausbreitung über die Fassade in das darüberliegende Geschoss'],
      ['Fettexplosion', 'schlagartige Verdampfung von Wasser in heißem Fett'],
      ['Rückzündung', 'erneutes Aufflammen aus Glutnestern nach scheinbarer Löschung'],
    ]),
    P('Die letzte Zeile wird regelmäßig unterschätzt: Rückzündungen aus Glutnestern in Dämmungen, Zwischendecken und Hohlräumen sind der häufigste Grund für Nachalarmierungen zur selben Adresse. Deshalb gehören eine gründliche Nachschau – gerne mit der Wärmebildkamera aus <b>Modul R</b> – und gegebenenfalls eine Brandwache zu jedem Brandeinsatz.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Phasen: Entstehungsbrand → Wachstum → Vollbrand → Abklingen.',
      '<b>Brandgesteuert</b> = Brandlast begrenzt, <b>ventilationsgesteuert</b> = Sauerstoff begrenzt.',
      'Jede Öffnung am Brandobjekt ist eine taktische Entscheidung.',
      '<b>Flashover</b> entsteht durch Wärme; Vorzeichen sind Rollover, absinkende Rauchschicht, starke Hitze.',
      '<b>Backdraft</b> entsteht durch Sauerstoffzufuhr; Anzeichen sind pulsierender Rauch, heiße Türen, Pfeifgeräusche.',
      'Türprozedur und Kühlen der Rauchgasschicht sind die Standardantworten.',
      'Glutnester und Rückzündung machen die Nachschau zum Pflichtteil des Einsatzes.'),
  ],
},

/* ---------------------------------------------------------------- B4 ---- */
{
  id: 'b4', title: 'Löschmittel im Detail: Schaum, Pulver, CO₂', duration: 24,
  blocks: [
    P('Wasser deckt den größten Teil der Einsätze ab – aber eben nicht alle. Für Flüssigkeits-, Gas-, Metall- und Elektrobrände hält die Feuerwehr Löschmittel bereit, deren Wirkprinzipien sich grundlegend unterscheiden. Diese Lektion erklärt, was Schaum, Pulver und Kohlenstoffdioxid können, wo ihre Grenzen liegen und welche Nebenwirkungen sie mitbringen.'),

    H2('schaum', 'Löschschaum'),
    P('Schaum entsteht aus drei Zutaten: <b>Wasser + Schaummittel + Luft</b>. Das Schaummittel setzt die Oberflächenspannung des Wassers herab, sodass sich stabile Bläschen bilden. Die entstehende Schaumdecke legt sich auf die brennende Flüssigkeit, trennt sie vom Sauerstoff, unterdrückt die Dampfbildung und kühlt zugleich durch das enthaltene Wasser.'),
    DEF('Verschäumungszahl (VZ)', 'Das Verhältnis von fertigem Schaumvolumen zum Volumen der eingesetzten Schaummittellösung. Eine VZ von 100 bedeutet: Aus einem Liter Lösung entstehen 100 Liter Schaum. Die VZ bestimmt, wofür der Schaum taugt – je höher, desto leichter und trockener, desto geringer aber auch Wurfweite und Kühlwirkung.'),
    TBL(['Schaumart', 'Verschäumungszahl', 'Eigenschaften', 'Typischer Einsatz'],[
      ['Schwerschaum', 'bis 20', 'nass, schwer, große Wurfweite, gute Kühlung', 'große Flüssigkeitsbrände, Tanklager, Ölspuren'],
      ['Mittelschaum', '20 bis 200', 'ausgewogen, begrenzte Wurfweite', 'Flächenbrände, Auffangräume, Abdecken von Lachen'],
      ['Leichtschaum', '200 bis 1.000', 'sehr leicht, kaum Wurfweite, geringe Kühlung', 'Fluten von Kellern, Schächten, Tiefgaragen'],
    ]),
    DEF('Zumischer', 'Armatur, die dem Löschwasser das Schaummittel in einem festen Prozentsatz beimischt – gängig sind 3 % oder 6 %. In Verbindung mit einem Schaumrohr, das Luft einbringt, entsteht daraus der fertige Schaum. Die Zumischrate muss zum Schaummittel und zum Rohr passen, sonst stimmt die Schaumqualität nicht.'),
    H3('Schaum richtig ausbringen'),
    P('Schaum wird nicht in den Brand geschossen, sondern <b>aufgetragen</b>. Ein harter Strahl direkt in eine brennende Lache zerschlägt die Decke und wirbelt die Flüssigkeit auf. Bewährt haben sich der Auftrag gegen eine Wand oder den Behälterrand, von dem der Schaum sanft abläuft, und das flache Anlegen vor der Lache, sodass sich die Decke von selbst über die Fläche schiebt.'),
    CO('warn', 'Fluorfreie Schaummittel', 'Fluorhaltige Schaummittel (PFAS) sind extrem langlebig, reichern sich in Umwelt und Organismus an und stehen deshalb unter starkem regulatorischem Druck bis hin zum Verbot. Moderne Wehren stellen auf fluorfreie Alternativen um. Für die Praxis heißt das: Schaumeinsatz bewusst dosieren, Rückhaltung sicherstellen und die Vorgaben deines Trägers kennen.'),
    CO('info', 'Schaum braucht Rückhaltung', 'Schaummittelhaltiges Löschwasser darf nicht in die Kanalisation oder in Gewässer gelangen. Löschwasserrückhaltung ist deshalb fester Bestandteil jedes größeren Schaumeinsatzes – siehe <b>Modul E</b>.'),

    H2('pulver', 'Löschpulver'),
    P('Löschpulver wirkt vor allem <b>antikatalytisch</b>: Feinste Partikel fangen die für die Verbrennung nötigen Radikale ab und unterbrechen so die chemische Kettenreaktion. Die Löschwirkung setzt dadurch nahezu augenblicklich ein – kein anderes Mittel löscht eine offene Flamme so schnell.'),
    TBL(['Pulverart', 'Kürzel', 'Für Brandklassen', 'Bemerkung'],[
      ['Glutbrandpulver', 'ABC', 'A, B, C', 'universell, bildet auf Glut eine Schmelzschicht'],
      ['Flammbrandpulver', 'BC', 'B, C', 'nur Flammenbrände, keine Glutwirkung'],
      ['Metallbrandpulver', 'D', 'D', 'speziell für Metallbrände, wird sanft aufgelegt'],
    ]),
    CO('warn', 'Schnell, aber ohne Kühlung', 'Pulver kühlt praktisch nicht. Nach dem Ablöschen ist der Brandstoff noch heiß – die <b>Rückzündungsgefahr</b> ist hoch. Deshalb wird nach dem Pulverstoß in aller Regel mit Wasser oder Schaum nachgearbeitet und gekühlt.'),
    P('Der zweite Nachteil ist der Schaden, den Pulver anrichtet. Es dringt in jede Ritze, ist stark hygroskopisch und wirkt auf Elektronik und Metall korrosiv. In Serverräumen, Werkstätten oder Museen kann der Pulverschaden den Brandschaden übersteigen. Und in Innenräumen nimmt der Pulvernebel die Sicht schlagartig auf null – für einen Trupp im Innenangriff eine ernste Gefahr.'),

    H2('co2', 'Kohlenstoffdioxid (CO₂)'),
    P('CO₂ ist ein Gas, das schwerer ist als Luft. Es verdrängt den Sauerstoff und erstickt so den Brand. Sein größter Vorteil: Es hinterlässt <b>keinerlei Rückstände</b>. Damit ist es das Mittel der Wahl überall dort, wo das Löschmittel selbst nicht schaden darf – in Serverräumen, Laboren, Schaltanlagen, an Maschinen und empfindlicher Technik.'),
    UL(
      '<b>Wirkung:</b> Ersticken durch Sauerstoffverdrängung, geringe Kühlwirkung durch Entspannung',
      '<b>Vorteil:</b> rückstandsfrei, elektrisch nicht leitend',
      '<b>Grenze:</b> im Freien praktisch wirkungslos, weil das Gas sofort verweht',
      '<b>Grenze:</b> keine nennenswerte Kühlung, daher Rückzündungsgefahr bei Glutbränden'),
    CO('danger', 'Erstickungsgefahr für Menschen', 'CO₂ wirkt auf Menschen genauso wie auf das Feuer. In geschlossenen Räumen kann eine ausgelöste CO₂-Löschanlage oder ein größerer Löscher lebensgefährliche Konzentrationen erzeugen – geruchlos und ohne Vorwarnung. Räume mit CO₂-Löschanlagen nur unter umluftunabhängigem Atemschutz betreten und vorher lüften. An der Löscherdüse drohen zusätzlich Kälteverbrennungen.'),

    H2('sonstige', 'Weitere Löschmittel'),
    TBL(['Mittel', 'Wirkung', 'Typischer Einsatz'],[
      ['Netzmittel im Wasser', 'senkt Oberflächenspannung, bessere Durchdringung', 'Glutbrände, Heu, Stroh, Vegetationsbrand'],
      ['Löschgel', 'haftet an senkrechten Flächen, verdunstet langsam', 'Riegelstellung, Schutz benachbarter Fassaden'],
      ['Trockener Sand, Zement', 'Abdecken und Ersticken', 'Metallbrände, kleine Flüssigkeitslachen'],
      ['Löschdecke', 'Ersticken', 'Kleinbrände, Personen mit brennender Kleidung'],
      ['Inertgase (Argon, Stickstoff)', 'Sauerstoffverdrängung', 'ortsfeste Löschanlagen'],
    ]),

    H2('auswahl', 'Löschmittel auswählen – die Denkreihenfolge'),
    STEPS(
      'Was brennt? Brandklasse bestimmen.',
      'Welche Löschwirkung braucht dieser Brand – kühlen, ersticken, trennen, unterbrechen?',
      'Welches verfügbare Mittel liefert diese Wirkung?',
      'Welche Nebenwirkungen hat es – Folgeschaden, Umwelt, Gefahr für Einsatzkräfte?',
      'Reicht die Menge? Wie ist die Nachschubfrage geregelt?',
      'Muss das Löschwasser zurückgehalten werden?'),
    CO('tip', 'Die häufigste Kombination', 'Pulver stoppt die Flamme sofort, Wasser oder Schaum verhindert danach die Rückzündung. Wer beides beherrscht, deckt fast jede Lage ab – schnelle Kontrolle zuerst, nachhaltige Kühlung danach.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Schaum = Wasser + Schaummittel + Luft; die <b>Verschäumungszahl</b> bestimmt die Schaumart.',
      'Schwerschaum bis 20, Mittelschaum 20–200, Leichtschaum 200–1.000.',
      'Schaum wird aufgetragen, nicht hineingeschossen; PFAS-freie Mittel bevorzugen.',
      'Pulver wirkt antikatalytisch: extrem schnell, aber ohne Kühlung – Rückzündungsgefahr.',
      'ABC = Glutbrand, BC = Flammbrand, D = Metallbrand.',
      'CO₂ ist rückstandsfrei und ideal für Elektronik – aber im Freien wirkungslos und für Menschen erstickend.',
      'Löschmittelwahl immer über Brandklasse, benötigte Wirkung und Nebenwirkungen.'),
  ],
},

/* ---------------------------------------------------------------- B5 ---- */
{
  id: 'b5', title: 'Wärmeübertragung & Brandausbreitung', duration: 22,
  blocks: [
    P('Ein Brand bleibt selten dort, wo er entstanden ist. Er wandert – durch Wände, durch Schächte, über die Straße. Wer die drei physikalischen Wege kennt, auf denen Wärme transportiert wird, kann vorhersagen, wohin sich ein Brand als Nächstes ausbreitet. Und genau darauf beruht die wichtigste taktische Entscheidung überhaupt: wo der Riegel gestellt wird.'),

    H2('arten', 'Die drei Arten der Wärmeübertragung'),
    TBL(['Art', 'Prinzip', 'Braucht ein Medium?', 'Beispiel im Einsatz'],[
      ['Wärmeleitung', 'Wärme wandert durch einen festen Stoff', 'ja, Feststoff', 'ein Stahlträger überträgt Hitze in den Nachbarraum'],
      ['Wärmeströmung (Konvektion)', 'heiße Gase und Flüssigkeiten strömen und nehmen Wärme mit', 'ja, Gas/Flüssigkeit', 'Rauch verraucht über das Treppenhaus die oberen Geschosse'],
      ['Wärmestrahlung', 'Energie überträgt sich elektromagnetisch', 'nein', 'der Brand springt über die Straße auf das Nachbarhaus'],
    ]),
    FIG('waermeuebertragung', 'Drei Arten der Wärmeübertragung – sie bestimmen die Ausbreitungswege eines Brandes.'),

    H3('Wärmeleitung'),
    P('Metalle leiten Wärme hervorragend, Holz und Mineralwolle schlecht. Deshalb kann ein Rohr oder ein Stahlträger, der durch eine Brandwand führt, den Brand auf die andere Seite tragen, obwohl die Wand selbst hält. In der Nachschau nach einem Brand gehören solche Bauteile deshalb zu den Punkten, die mit der Wärmebildkamera kontrolliert werden.'),

    H3('Wärmeströmung'),
    P('Heiße Gase sind leichter als kalte und steigen auf. In Gebäuden folgt der Rauch deshalb jedem Weg nach oben: Treppenräume, Aufzugsschächte, Installationsschächte, Lichthöfe. Der Effekt verstärkt sich bei kaltem Wetter, weil der Temperaturunterschied zwischen innen und außen den Sog erhöht – dieser <b>Kamineffekt</b> kann einen Rauch in Sekunden durch ein ganzes Hochhaus tragen.'),
    FIG('kamineffekt', 'Kamineffekt: Heiße Rauchgase steigen im Treppenraum auf und verrauchen die oberen Geschosse.'),
    P('Daraus folgt einer der wichtigsten Grundsätze des Innenangriffs: Der <b>Treppenraum ist der Rettungsweg</b>. Er wird rauchfrei gehalten, Türen werden hinter dem Trupp geschlossen, und wenn er verraucht ist, hat seine Freihaltung Vorrang vor fast allem anderen.'),

    H3('Wärmestrahlung'),
    DEF('Wärmestrahlung', 'Elektromagnetische Übertragung von Wärmeenergie, die kein Trägermedium benötigt und sich geradlinig ausbreitet. Ihre Intensität nimmt mit dem <b>Quadrat der Entfernung</b> ab: Doppelter Abstand bedeutet nur noch ein Viertel der Strahlungsleistung.'),
    P('Diese quadratische Abnahme ist die beste Nachricht der Brandlehre. Sie bedeutet, dass wenige Meter zusätzlicher Abstand die Belastung dramatisch senken – für Einsatzkräfte wie für gefährdete Gebäude. Umgekehrt erklärt sie, warum ein Vollbrand ein Nachbarhaus in 8 Metern Entfernung entzünden kann, während dasselbe Haus in 20 Metern sicher ist.'),
    CO('tip', 'Strahlung abschirmen', 'Gegen Wärmestrahlung helfen drei Dinge: Abstand, ein Hindernis in der Sichtlinie und ein Wasserschleier. Fahrzeuge, Mauern und aufgestellte Leitern können als Strahlungsschutz genutzt werden – Strahlung wirkt nur dort, wo eine direkte Sichtverbindung besteht.'),

    H2('flug', 'Flugfeuer und Funkenflug'),
    P('Bei Dachstuhl-, Lager- und Vegetationsbränden entsteht ein kräftiger Aufwind, der brennende Teile in die Höhe reißt und mit dem Wind forträgt. Dieses <b>Flugfeuer</b> kann mehrere hundert Meter weit fliegen und dort neue Brände entzünden – häufig unbemerkt, weil alle Aufmerksamkeit beim Hauptbrand liegt.'),
    STEPS(
      'Windrichtung und Windstärke feststellen.',
      'Die windabgewandte Seite (Lee) als Gefahrenbereich definieren.',
      'Brandwachen oder einen Erkundungstrupp in Lee einsetzen.',
      'Gefährdete Dächer und Lagerflächen kontrollieren und bei Bedarf befeuchten.',
      'Bei ausgedehnten Lagen Luftbeobachtung oder Drohne einsetzen (Modul R).'),

    H2('riegel', 'Ausbreitung stoppen: die Riegelstellung'),
    DEF('Riegelstellung', 'Ein gezielt vorgenommenes Rohr, das nicht den Brand bekämpft, sondern seine Ausbreitung auf einen bestimmten Bereich verhindert. Der Riegel wird zwischen Brand und schützenswertem Objekt aufgebaut und kühlt die strahlungsbelasteten Flächen, bevor diese ihre Zündtemperatur erreichen.'),
    P('Die Riegelstellung ist eine der am häufigsten unterschätzten Maßnahmen. Sie fühlt sich passiv an, weil sie nicht löscht – tatsächlich entscheidet sie oft darüber, ob aus einem Gebäudebrand ein Straßenzugbrand wird. Bei begrenzten Kräften kann es taktisch richtig sein, den Brandherd zunächst brennen zu lassen und stattdessen die Ausbreitung zu stoppen.'),
    KF(
      'Ausbreitungsrichtung bestimmen: Wind, Gebäudegeometrie, Schächte, Sichtlinien.',
      'Riegel zwischen Brand und gefährdetem Bereich aufbauen.',
      'Strahlungsbelastete Flächen kühlen, bevor sie pyrolysieren.',
      'Brandlasten reduzieren – was kann noch zünden, was lässt sich wegräumen?',
      'Öffnungen schließen, um die Konvektion zu unterbrechen.',
      'Lee-Seite auf Flugfeuer kontrollieren.'),

    H2('bau', 'Bauliche Ausbreitungswege'),
    P('Neben der Physik bestimmt die Bauweise, wohin ein Brand läuft. Besonders kritisch sind Wege, die man nicht sieht.'),
    UL(
      '<b>Installationsschächte</b> für Rohre und Kabel, die mehrere Geschosse durchziehen',
      '<b>Hohlräume</b> in abgehängten Decken, Doppelböden und Trockenbauwänden',
      '<b>Fassadendämmung</b>, die den Brand außen nach oben führt',
      '<b>Dachaufbauten und Kaltdächer</b>, in denen sich der Brand horizontal ausbreitet',
      '<b>Fehlende oder beschädigte Brandabschottungen</b> nach Umbauten',
      '<b>Lüftungsanlagen</b>, die Rauch aktiv verteilen'),
    P('Deshalb gehört zu jedem Brandeinsatz die Kontrolle der angrenzenden Bereiche: das Geschoss darüber, das Geschoss darunter, die Nachbarwohnung, der Dachboden. Wie sich Gebäudearten dabei unterscheiden, vertieft <b>Modul O – Objekt- und Baukunde</b>.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Drei Übertragungswege: <b>Leitung</b> (Feststoff), <b>Strömung</b> (Gase), <b>Strahlung</b> (ohne Medium).',
      'Wärmestrahlung nimmt mit dem Quadrat der Entfernung ab – Abstand wirkt stark.',
      'Der <b>Kamineffekt</b> trägt Rauch über Treppen- und Installationsschächte nach oben.',
      'Der Treppenraum ist Rettungsweg und wird rauchfrei gehalten.',
      '<b>Flugfeuer</b> gefährdet die windabgewandte Seite – Brandwachen stellen.',
      'Die <b>Riegelstellung</b> verhindert Ausbreitung, statt zu löschen.',
      'Verdeckte bauliche Wege (Schächte, Hohlräume, Dämmung) immer kontrollieren.'),
  ],
},

/* ---------------------------------------------------------------- B6 ---- */
{
  id: 'b6', title: 'Explosionen, Gase & Staubexplosionen', duration: 22,
  blocks: [
    P('Eine Explosion ist nichts anderes als eine sehr schnelle Verbrennung – mit dem Unterschied, dass die freiwerdende Energie nicht als Flamme abgegeben wird, sondern als Druckwelle. Für Einsatzkräfte ist das der gefährlichste Fall überhaupt, weil er keine Reaktionszeit lässt. Diese Lektion zeigt, unter welchen Bedingungen es explosiv wird und wie man diese Bedingungen erkennt, bevor sie eintreten.'),

    H2('grundlagen', 'Wann es explosiv wird'),
    P('Damit ein Gemisch explodieren kann, müssen drei Bedingungen erfüllt sein: Es muss ein <b>brennbarer Stoff in feiner Verteilung</b> vorliegen – als Gas, Dampf oder Staub. Dieser muss mit Luft in einem Verhältnis <b>innerhalb der Explosionsgrenzen</b> gemischt sein. Und es muss eine <b>Zündquelle</b> hinzukommen. Fehlt eine der drei, passiert nichts.'),
    DEF('Explosionsgrenzen (UEG/OEG)', 'Nur zwischen der unteren Explosionsgrenze (UEG) und der oberen Explosionsgrenze (OEG) ist ein Gemisch zündfähig. Unterhalb der UEG ist zu wenig Brennstoff vorhanden („zu mager"), oberhalb der OEG zu wenig Sauerstoff („zu fett"). Beide Zustände sind für sich genommen sicher – aber nur solange sich das Mischungsverhältnis nicht ändert.'),
    FIG('explosionsgrenzen', 'Zündfähig ist ein Gemisch nur zwischen UEG und OEG – darunter zu mager, darüber zu fett.'),
    CO('danger', 'Die Falle beim Lüften', 'Ein zu fettes Gemisch – etwa in einem vollgelaufenen Gasraum – ist nicht zündfähig. Beim Lüften wird es jedoch verdünnt und durchläuft dabei zwangsläufig den zündfähigen Bereich. Lüften ist deshalb bei Gasaustritt keine harmlose Standardmaßnahme, sondern eine Maßnahme mit Zündquellenverbot, Messung und Fachberatung.'),
    TBL(['Gas', 'UEG (ca.)', 'OEG (ca.)', 'Besonderheit'],[
      ['Methan / Erdgas', '4,4 Vol.-%', '17 Vol.-%', 'leichter als Luft, steigt auf'],
      ['Propan', '1,7 Vol.-%', '10,9 Vol.-%', 'schwerer als Luft, fließt nach unten'],
      ['Wasserstoff', '4 Vol.-%', '77 Vol.-%', 'extrem weiter Bereich, sehr zündwillig'],
      ['Acetylen', '2,3 Vol.-%', '82 Vol.-%', 'zusätzlich zerfallsfähig, sehr gefährlich'],
    ]),
    P('Die Tabelle zeigt, warum Wasserstoff und Acetylen eine Sonderrolle spielen: Ihr zündfähiger Bereich ist so breit, dass fast jedes Mischungsverhältnis gefährlich ist. Der Umgang mit Acetylenflaschen im Brandfall ist deshalb ein eigenes Kapitel, das in <b>Modul I</b> vertieft wird.'),

    H2('gase', 'Gefahren durch Gase'),
    P('Ob ein Gas nach oben steigt oder am Boden bleibt, entscheidet über Absperrbereich, Vorgehensweg und Messstellen. Diese Frage muss bei jedem Gasaustritt als Erstes beantwortet werden.'),
    TBL(['Eigenschaft', 'Beispiele', 'Bedeutung im Einsatz'],[
      ['leichter als Luft', 'Erdgas, Methan, Wasserstoff, Ammoniak', 'sammelt sich oben; Gefahr in Dachräumen, Decken, oberen Geschossen'],
      ['ungefähr wie Luft', 'Kohlenstoffmonoxid, Ethen', 'verteilt sich gleichmäßig, schwer vorhersagbar'],
      ['schwerer als Luft', 'Propan, Butan, Kohlenstoffdioxid, Benzindämpfe', 'fließt nach unten in Keller, Gruben, Kanäle, Senken'],
    ]),
    CO('warn', 'Der klassische Fehler', 'Bei einem Propangasaustritt in ein Kellergeschoss zu steigen, weil „oben nichts zu messen ist", ist lebensgefährlich. Schwere Gase stehen wie Wasser in tiefen Bereichen. Gemessen wird deshalb immer in der Höhe, in der das Gas zu erwarten ist – und niemals ohne Messgerät und Absicherung.'),

    H2('bleve', 'BLEVE und Druckgasflaschen'),
    DEF('BLEVE', 'Boiling Liquid Expanding Vapour Explosion – das Bersten eines Behälters mit einer unter Druck verflüssigten Gasfüllung infolge äußerer Erwärmung. Die Behälterwand verliert im Bereich der Gasphase ihre Festigkeit, der Behälter reißt auf, die Flüssigkeit verdampft schlagartig und verbrennt als riesiger Feuerball. Behälterteile können hunderte Meter weit fliegen.'),
    P('Die Gefahr entsteht bevorzugt dort, wo Flammen den Behälter <b>oberhalb des Flüssigkeitsspiegels</b> erwärmen. Dort fehlt der kühlende Kontakt zur Flüssigkeit, und das Metall gibt nach. Ein Sicherheitsventil kann eine BLEVE verzögern, aber nicht sicher verhindern.'),
    STEPS(
      'Bei Bränden in der Nähe von Druckgasflaschen sofort großräumig absperren.',
      'Behälter aus <b>gedeckter Stellung</b> und mit maximaler Wurfweite kühlen – niemals frei stehend daneben.',
      'Nie in der Flucht- oder Achsrichtung eines Ventils oder Behälterendes aufhalten.',
      'Abkühlung kontrollieren: Zischen, Vibrieren oder eine trocken bleibende Behälterwand sind Alarmzeichen.',
      'Im Zweifel Rückzug und kontrolliertes Abbrennenlassen aus sicherer Entfernung.'),
    CO('danger', 'Abbruchkriterium', 'Verändert sich das Geräusch am Sicherheitsventil zu einem hohen Pfeifen, verfärbt sich die Behälterwand oder bleibt sie trotz Kühlung trocken, gilt: sofortiger Rückzug aller Kräfte über die vorher festgelegte Rückzugsstrecke. Diese Strecke wird <b>vor</b> Beginn der Kühlung festgelegt, nicht danach.'),

    H2('staub', 'Staubexplosionen'),
    P('Dass Mehl explodieren kann, klingt zunächst abwegig – bis man die Physik betrachtet. Ein Kilogramm Mehl als Haufen hat eine kleine Oberfläche und brennt schlecht. Dasselbe Kilogramm, fein in der Luft verteilt, hat eine gigantische Oberfläche, an der die Reaktion gleichzeitig ablaufen kann. Genau das ist eine Staubexplosion.'),
    UL(
      '<b>Gefährdete Stoffe:</b> Mehl, Zucker, Stärke, Holzstaub, Kohlestaub, Metallstäube, Kunststoffgranulat, Futtermittel',
      '<b>Typische Orte:</b> Mühlen, Silos, Sägewerke, Futtermittelbetriebe, Lackierereien, Metallschleifereien',
      '<b>Zündquellen:</b> Funken, heiße Oberflächen, elektrostatische Entladung, Reibung, offenes Licht'),
    CO('danger', 'Die Folgeexplosion ist die schlimmere', 'Eine erste, oft kleine Zündung wirbelt den auf Balken, Kanten und Maschinen abgelagerten Staub auf. Dieser bildet eine viel größere Staubwolke, die kurz darauf zündet. Diese <b>Sekundärexplosion</b> ist es, die Gebäude zerstört. Deshalb gilt in staubbelasteten Bereichen absolutes Aufwirbelungsverbot.'),
    STEPS(
      'Kein Vollstrahl, kein Aufwirbeln, keine hastigen Bewegungen.',
      'Zündquellen konsequent vermeiden – auch Funken von Werkzeugen und Handlampen.',
      'Wenn Wasser nötig ist: feiner Sprühnebel zum Niederschlagen des Staubs.',
      'Ex-Messung veranlassen und Fachkräfte des Betriebs hinzuziehen.',
      'Großräumig absperren – Sekundärexplosionen wirken weit über den Ursprungsraum hinaus.'),

    H2('erkennen', 'Explosionsgefahr frühzeitig erkennen'),
    P('Die meisten Explosionslagen kündigen sich an – wenn man auf die richtigen Dinge achtet. Bei der Erkundung helfen die folgenden Fragen, die sich in wenigen Sekunden beantworten lassen.'),
    KF(
      'Riecht es nach Gas – oder meldet die Anrufende einen Gasgeruch?',
      'Gibt es Hinweisschilder, Gefahrzettel, Ex-Zonen-Kennzeichnung?',
      'Stehen Druckgasflaschen im Bereich der Flammen?',
      'Handelt es sich um einen Betrieb mit brennbaren Stäuben?',
      'Ist der Brandraum geschlossen und sauerstoffarm – Backdraft-Verdacht?',
      'Liegen tiefer gelegene Bereiche in der Nähe, in denen sich schwere Gase sammeln können?'),
    CO('tip', 'Der wichtigste Reflex', 'Bei jedem Verdacht auf Explosionsgefahr gilt zuerst: Abstand vergrößern und Kräfte reduzieren. Es gibt kaum eine Lage, in der schnelles Handeln so wenig hilft und Zurückhaltung so viel rettet. Menschenrettung bleibt möglich – aber als bewusste Entscheidung der Einsatzleitung, nicht als Reflex.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Explosion = extrem schnelle Verbrennung mit Druckwelle.',
      'Voraussetzung: feinverteilter Brennstoff + Luft <b>innerhalb der Explosionsgrenzen</b> + Zündquelle.',
      'Zu fette Gemische werden beim Lüften durch den zündfähigen Bereich verdünnt.',
      'Leichte Gase sammeln sich oben, schwere Gase in Kellern, Gruben und Kanälen.',
      '<b>BLEVE:</b> Druckgasbehälter aus Deckung kühlen, nie in Ventilrichtung stehen, Abbruchkriterien festlegen.',
      'Staubexplosionen: nicht aufwirbeln, keine Zündquellen, Sekundärexplosion ist die gefährlichere.',
      'Bei Explosionsverdacht: Abstand vergrößern, Kräfte reduzieren, messen lassen.'),
  ],
},

];
