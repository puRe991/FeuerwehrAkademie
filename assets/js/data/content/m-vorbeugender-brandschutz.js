/* =========================================================================
   MODUL M — Vorbeugender Brandschutz & Objektkunde
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls M.

   Fachliche Grundlage: Musterbauordnung und Landesbauordnungen,
   DIN 4102 / DIN EN 13501 (Brandverhalten), DIN 14095 (Feuerwehrpläne),
   DIN 14675 (Brandmeldeanlagen), DIN 14096 (Brandschutzordnung),
   DIN 14090 (Flächen für die Feuerwehr), ASR A1.3, DGUV Information zu
   Brandschutzhelfern. Baurechtliche Anforderungen sind Ländersache –
   maßgeblich ist die Bauordnung deines Landes.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_M = [

/* ---------------------------------------------------------------- M1 ---- */
{
  id: 'm1', title: 'Die drei Säulen & Rettungswege', duration: 22,
  blocks: [
    P('Jedes Mal, wenn eine Brandwand einen Brand auf einen Gebäudeteil begrenzt, wenn eine Brandmeldeanlage nachts alarmiert oder wenn sich Menschen über einen rauchfreien Treppenraum selbst retten, wirkt vorbeugender Brandschutz. Er verhindert weit mehr Schäden, als jede Feuerwehr je löschen kann – nur sieht man ihm das nicht an.'),

    H2('saeulen', 'Die drei Säulen'),
    P('Der vorbeugende Brandschutz gliedert sich in drei Bereiche, die zusammenwirken müssen. Jeder für sich hat Lücken – erst zusammen ergeben sie ein Schutzkonzept.'),
    TBL(['Säule', 'Was dazugehört', 'Wirkt vor allem gegen'],[
      ['Baulicher Brandschutz', 'Brandabschnitte, Brandwände, feuerbeständige Bauteile, Rettungswege, Baustoffwahl', 'Ausbreitung von Feuer und Rauch'],
      ['Anlagentechnischer Brandschutz', 'Brandmeldeanlage, Sprinkler, Rauch- und Wärmeabzug, Löschanlagen, Sicherheitsbeleuchtung', 'späte Entdeckung und ungebremstes Wachstum'],
      ['Organisatorischer Brandschutz', 'Brandschutzordnung, Flucht- und Rettungspläne, Unterweisung, Brandschutzhelfer, Räumungsübungen', 'falsches Verhalten im Ernstfall'],
    ]),
    FIG('brandschutzsaeulen', 'Die drei Säulen des vorbeugenden Brandschutzes: baulich, anlagentechnisch und organisatorisch.'),
    CO('info', 'Und der abwehrende Brandschutz?', 'Manche Darstellungen nennen ihn als vierte Säule. Fachlich ist er die <b>Ergänzung</b>: Der vorbeugende Brandschutz sorgt dafür, dass es gar nicht so weit kommt und dass die Feuerwehr im Ernstfall überhaupt wirksam arbeiten kann – durch Zufahrten, Löschwasser, Brandabschnitte und Pläne.'),

    H2('baulich', 'Baulicher Brandschutz'),
    P('Der bauliche Brandschutz ist der wichtigste und zuverlässigste Teil, weil er ohne Technik und ohne menschliches Handeln funktioniert. Sein Kernprinzip ist die <b>Abschottung</b>: Ein Gebäude wird in Bereiche unterteilt, die einander für eine definierte Zeit nicht gefährden.'),
    DEF('Brandabschnitt', 'Ein durch Brandwände und feuerbeständige Decken abgetrennter Gebäudebereich. Ein Brand soll auf ihn begrenzt bleiben, bis die Feuerwehr eingreift. Die zulässige Größe von Brandabschnitten regelt die Bauordnung – bei Wohn- und Bürogebäuden wird die Ausdehnung typischerweise auf einige Dutzend Meter begrenzt.'),
    TBL(['Begriff', 'Bedeutung'],[
      ['Feuerwiderstandsdauer', 'Zeit in Minuten, die ein Bauteil im Brandfall seine Funktion behält – etwa 30, 60 oder 90 Minuten'],
      ['Brandwand', 'Wand, die die Brandausbreitung verhindert und zusätzlich mechanischer Beanspruchung standhält'],
      ['Feuerschutzabschluss', 'selbstschließende Tür oder Klappe in einer Brandwand'],
      ['Abschottung', 'brandsichere Durchführung von Rohren und Kabeln durch Wände und Decken'],
      ['Baustoffklasse', 'Einstufung des Brandverhaltens von nichtbrennbar bis leichtentflammbar'],
    ]),
    CO('warn', 'Die häufigste Schwachstelle', 'Nicht die Brandwand versagt, sondern das, was durch sie hindurchgeht. Nachträglich verlegte Kabel, aufgekeilte Brandschutztüren und fehlende Abschottungen machen den besten baulichen Brandschutz wirkungslos. Bei Objektbegehungen lohnt genau darauf der Blick.'),

    H2('rettungswege', 'Rettungswege'),
    DEF('Erster und zweiter Rettungsweg', 'Aufenthaltsräume benötigen in der Regel <b>zwei voneinander unabhängige Rettungswege</b>. Der erste ist üblicherweise der bauliche Weg über den notwendigen Treppenraum. Der zweite kann ein weiterer baulicher Weg sein – oder er wird über <b>Rettungsgeräte der Feuerwehr</b> sichergestellt, also über tragbare Leitern oder die Drehleiter.'),
    P('Diese Regelung hat unmittelbare Konsequenzen für die Feuerwehr: Wenn der zweite Rettungsweg über die Drehleiter führt, muss sie das Gebäude auch erreichen können. Deshalb sind Zufahrten, Aufstell- und Bewegungsflächen baurechtlich gefordert und müssen freigehalten werden.'),
    KF(
      'Rettungswege müssen jederzeit frei, benutzbar und erkennbar sein.',
      'Notausgänge dürfen nicht verstellt oder verschlossen werden.',
      'Der notwendige Treppenraum wird rauchfrei gehalten – er ist der Rettungsweg.',
      'Fluchtwegkennzeichnung und Sicherheitsbeleuchtung müssen funktionieren.',
      'Feuerwehrzufahrten, Aufstell- und Bewegungsflächen sind freizuhalten.',
      'Die Anleiterbarkeit von Fenstern darf nicht durch Anbauten verbaut werden.'),
    CO('danger', 'Zugeparkte Zufahrten kosten Menschenleben', 'Eine blockierte Feuerwehrzufahrt kostet im Ernstfall Minuten – genau die Minuten, in denen eine Menschenrettung über die Drehleiter noch möglich gewesen wäre. Diese Flächen sind rechtlich geschützt und gekennzeichnet. Wer sie zuparkt, entzieht dem Gebäude seinen zweiten Rettungsweg.'),

    H2('treppenraum', 'Der notwendige Treppenraum'),
    P('Der Treppenraum ist das Herzstück der Selbstrettung. Solange er rauchfrei bleibt, können sich Bewohner selbst in Sicherheit bringen und die Feuerwehr kann darüber vorgehen. Ist er verraucht, kehrt sich das um: Er wird zur Falle.'),
    KF(
      'Wohnungstüren im Brandfall schließen – das hält den Treppenraum frei.',
      'Türen hinter dem vorgehenden Trupp schließen.',
      'Rauchabzug im Treppenraum nutzen, wenn vorhanden.',
      'Keine Brandlasten im Treppenraum: Kinderwagen, Schuhschränke, Kartons.',
      'Bei Verrauchung hat die Freihaltung Vorrang vor fast allem anderen.'),

    H2('objektkunde', 'Warum Objektkunde zählt'),
    P('Der vorbeugende Brandschutz eines Gebäudes wirkt im Einsatz nur, wenn die Feuerwehr ihn kennt. Wo liegt die Brandwand? Wo ist der Rauchabzug? Wo sind die Absperreinrichtungen? Diese Fragen lassen sich vorher klären – und nicht in den ersten fünf Minuten eines Einsatzes.'),
    CO('tip', 'Objektbegehungen sind gelebter Brandschutz', 'Wer sein Ausrückgebiet kennt – Pflegeheime, Schulen, Industriebetriebe, Sonderbauten und ihre Löschwasserquellen – gewinnt im Ernstfall entscheidende Zeit. Eine Begehung am Dienstabend ist eine der wirksamsten Vorbereitungen überhaupt und kostet nichts außer Zeit.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Drei Säulen: baulich, anlagentechnisch, organisatorisch.',
      'Baulicher Brandschutz wirkt ohne Technik und ohne menschliches Handeln.',
      '<b>Brandabschnitte</b> begrenzen die Ausbreitung; Schwachstelle sind Durchführungen.',
      'Zwei unabhängige Rettungswege; der zweite oft über Rettungsgeräte der Feuerwehr.',
      'Feuerwehrzufahrten und Aufstellflächen sind Teil des Rettungswegs.',
      'Der notwendige Treppenraum wird rauchfrei gehalten.',
      'Objektkenntnis macht vorbeugenden Brandschutz im Einsatz nutzbar.'),
  ],
},

/* ---------------------------------------------------------------- M2 ---- */
{
  id: 'm2', title: 'Anlagentechnik & Feuerwehrpläne', duration: 22,
  blocks: [
    P('Wenn eine Brandmeldeanlage um drei Uhr nachts auslöst, entscheidet sich in den ersten Minuten, ob die Feuerwehr zielgerichtet arbeitet oder ein großes Gebäude absucht. Der Unterschied liegt in ein paar technischen Einrichtungen und in einem Plan – wenn man weiß, wie man beide benutzt.'),

    H2('bma', 'Brandmeldeanlagen'),
    P('Eine Brandmeldeanlage erkennt Brände frühzeitig und alarmiert automatisch – über die Leitstelle die Feuerwehr und im Gebäude die anwesenden Personen. Sie ist bei Sonderbauten häufig vorgeschrieben und bei vielen Betrieben freiwillig installiert.'),
    TBL(['Melderart', 'Reagiert auf', 'Typischer Einsatzort'],[
      ['Rauchmelder (optisch)', 'Rauchpartikel in der Luft', 'Flure, Büros, Wohnbereiche'],
      ['Wärmemelder', 'Temperatur oder Temperaturanstieg', 'Küchen, Werkstätten, staubige Bereiche'],
      ['Flammenmelder', 'Strahlung offener Flammen', 'Hallen, Lager mit hohem Risiko'],
      ['Ansaugrauchmelder', 'angesaugte Luftproben', 'Serverräume, Hochregallager'],
      ['Handfeuermelder', 'Betätigung durch Menschen', 'Flure, Ausgänge, Treppenräume'],
    ]),

    H3('Die Einrichtungen für die Feuerwehr'),
    UL(
      '<b>Brandmelderzentrale (BMZ):</b> wertet die Melder aus und steuert die Alarmierung.',
      '<b>Feuerwehr-Bedienfeld (FBF):</b> einheitlich aufgebautes Bedienfeld – Anlage zurücksetzen, akustische Signale abschalten, Übertragungseinrichtung ab- und anschalten.',
      '<b>Feuerwehr-Anzeigetableau (FAT):</b> zeigt an, welche Meldergruppe und welcher Melder ausgelöst hat.',
      '<b>Feuerwehr-Laufkarten:</b> führen von der Zentrale zum ausgelösten Melder – mit Weg, Etage und Raum.',
      '<b>Feuerwehr-Schlüsseldepot (FSD):</b> ermöglicht den gewaltfreien Zutritt zum Objekt.',
      '<b>Feuerwehr-Informationszentrale (FIZ):</b> fasst FBF, FAT und Unterlagen an einem Ort zusammen.'),
    CO('tip', 'Der Ablauf bei BMA-Alarm', 'Zugang über das Schlüsseldepot, zur Zentrale, am Anzeigetableau die ausgelöste Meldergruppe ablesen, die passende Laufkarte entnehmen, gezielt zum Melder gehen und erkunden. Dieser Ablauf ist überall gleich – wer ihn einmal geübt hat, arbeitet in jedem Objekt zügig.'),
    CO('warn', 'Täuschungsalarme sind die Regel', 'Der weit überwiegende Teil aller BMA-Auslösungen sind Täuschungs- oder Fehlalarme: Wasserdampf, Staub, Zigarettenrauch, Handwerkerarbeiten. Das darf nicht dazu führen, dass die Erkundung nachlässig wird. Jeder Alarm wird vollständig abgearbeitet – der eine echte Brand kündigt sich nicht anders an.'),

    H2('loeschanlagen', 'Ortsfeste Löschanlagen'),
    TBL(['Anlage', 'Prinzip', 'Typischer Einsatzort', 'Für die Feuerwehr wichtig'],[
      ['Sprinkleranlage', 'einzelne Sprinkler öffnen bei Hitze selbsttätig', 'Lager, Kaufhäuser, Hotels', 'Absperreinrichtung erst nach Freigabe schließen'],
      ['Sprühwasseranlage', 'flächige Beaufschlagung eines Bereichs', 'Industrie, Trafo, Kabelkanäle', 'große Wassermengen, Rückhaltung nötig'],
      ['Gaslöschanlage', 'Sauerstoffverdrängung ohne Rückstände', 'Serverräume, Archive, Schaltanlagen', '<b>Erstickungsgefahr</b> – nur mit Atemschutz betreten'],
      ['Schaumlöschanlage', 'Schaumdecke auf Flüssigkeiten', 'Tanklager, Chemie', 'Löschwasserrückhaltung, Schaummittelbelastung'],
      ['Rauch- und Wärmeabzug (RWA)', 'führt Rauch und Wärme ab', 'Treppenräume, Hallen, Tiefgaragen', 'Auslösestellen kennen, mit Innenangriff abstimmen'],
    ]),
    CO('danger', 'Sprinkleranlagen nicht vorschnell abstellen', 'Eine ausgelöste Sprinkleranlage hält den Brand häufig bereits in Schach. Wird sie zu früh abgestellt, flammt er wieder auf – und dann ohne Anlagenschutz. Die Absperrung erfolgt erst, wenn die Feuerwehr die Lage sicher beurteilt hat und eine Brandwache steht.'),
    CO('danger', 'Gaslöschanlagen', 'Ein Raum, in dem eine Gaslöschanlage ausgelöst hat, ist sauerstoffarm und für Menschen lebensgefährlich – ohne jede Vorwarnung durch die Sinne. Solche Räume werden nur mit umluftunabhängigem Atemschutz betreten und vorher belüftet.'),

    H2('plaene', 'Feuerwehrpläne'),
    DEF('Feuerwehrplan nach DIN 14095', 'Eine standardisierte Planunterlage, die der einrückenden Einheit einen schnellen Überblick über das Objekt gibt: Gebäudeumriss, Zufahrten, Zugänge, Geschosse, Brandabschnitte, besondere Gefahren, Löschwasserentnahmestellen, Absperreinrichtungen und Angriffswege. Er wird mit der Feuerwehr abgestimmt und an definierter Stelle bereitgehalten – häufig am Schlüsseldepot oder an der Brandmelderzentrale.'),
    KF(
      'Feuerwehrpläne sind einheitlich aufgebaut – wer einen lesen kann, kann alle lesen.',
      'Sie zeigen, was von außen nicht erkennbar ist: Gefahrstofflager, Hochspannung, Batteriespeicher.',
      'Sie nennen Absperreinrichtungen für Gas, Strom, Lüftung und Löschanlagen.',
      'Sie enthalten Ansprechpartner des Betreibers.',
      'Sie werden fortgeschrieben – veraltete Pläne sind gefährlich.',
      'Ergänzt werden sie durch Laufkarten der Brandmeldeanlage.'),

    H2('objekt', 'Objektbegehung'),
    P('Ein Feuerwehrplan ersetzt keine Ortskenntnis. Wer ein Objekt einmal begangen hat, weiß, wie eng die Zufahrt wirklich ist, wo der Aufzug endet und wie lang der Weg vom Eingang zur Brandmelderzentrale ist.'),
    STEPS(
      'Zufahrt, Aufstellflächen und Zugänge abfahren und beurteilen.',
      'Brandmelderzentrale, Bedienfeld und Schlüsseldepot aufsuchen.',
      'Steigleitungen, Absperreinrichtungen und Löschwasserentnahmestellen ansehen.',
      'Besondere Gefahren erfassen: Gefahrstoffe, Hochspannung, Batteriespeicher, Photovoltaik.',
      'Rettungswege und Anleiterbarkeit prüfen.',
      'Ansprechpartner des Betreibers kennenlernen.',
      'Erkenntnisse dokumentieren und im Feuerwehrplan aktualisieren lassen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Melderarten: Rauch-, Wärme-, Flammen-, Ansaugrauchmelder, Handfeuermelder.',
      'Für die Feuerwehr: BMZ, FBF, FAT, Laufkarten, FSD, FIZ.',
      'BMA-Ablauf: Zugang, Zentrale, Meldergruppe ablesen, Laufkarte, gezielt erkunden.',
      'Täuschungsalarme sind die Regel – trotzdem jeden Alarm vollständig abarbeiten.',
      'Sprinkleranlagen nicht vorschnell abstellen.',
      'Räume mit ausgelöster Gaslöschanlage nur mit Atemschutz betreten.',
      '<b>Feuerwehrpläne nach DIN 14095</b> zeigen, was von außen nicht erkennbar ist.',
      'Objektbegehungen ersetzen keine Pläne – und Pläne keine Begehungen.'),
  ],
},

/* ---------------------------------------------------------------- M3 ---- */
{
  id: 'm3', title: 'Organisatorischer Brandschutz & Brandschutzhelfer', duration: 20,
  blocks: [
    P('Bauliche und technische Maßnahmen wirken, ohne dass jemand etwas tun muss. Der organisatorische Brandschutz ist das Gegenteil: Er lebt vollständig davon, dass Menschen wissen, was zu tun ist – und es im Ernstfall auch tun. Genau deshalb ist er die anfälligste, aber auch die am günstigsten zu verbessernde Säule.'),

    H2('orga', 'Was dazugehört'),
    UL(
      '<b>Brandschutzordnung nach DIN 14096</b> mit ihren drei Teilen.',
      '<b>Flucht- und Rettungspläne</b>, gut sichtbar an den richtigen Stellen.',
      '<b>Kennzeichnung</b> von Fluchtwegen, Ausgängen und Löschmitteln.',
      '<b>Unterweisungen</b> aller Beschäftigten, regelmäßig wiederholt.',
      '<b>Räumungsübungen</b> mit anschließender Auswertung.',
      '<b>Brandschutzbeauftragte</b> und <b>Brandschutzhelfer</b>.',
      '<b>Regelungen für feuergefährliche Arbeiten</b> und für Fremdfirmen.'),
    DEF('Brandschutzordnung nach DIN 14096', '<b>Teil A</b> ist der Aushang für jedermann – kurz, mit Verhaltensregeln im Brandfall. <b>Teil B</b> richtet sich an alle Beschäftigten ohne besondere Aufgaben und beschreibt Verhalten, Meldung und Räumung. <b>Teil C</b> gilt für Personen mit besonderen Brandschutzaufgaben und regelt deren Pflichten im Detail.'),

    H2('helfer', 'Brandschutzhelfer'),
    DEF('Brandschutzhelfer', 'Beschäftigte, die für den Brandfall besonders unterwiesen sind und Erstmaßnahmen ergreifen: alarmieren, die Räumung einleiten, Personen unterstützen und – wenn es gefahrlos möglich ist – Entstehungsbrände mit dem Feuerlöscher bekämpfen. Als Richtwert wird häufig ein Anteil von etwa fünf Prozent der Beschäftigten genannt; bei erhöhter Gefährdung entsprechend mehr.'),
    P('Für die Feuerwehr sind Brandschutzhelfer wertvolle Partner: Sie kennen das Gebäude, wissen, wer sich wo aufhält, und können bei der Erkundung entscheidende Informationen liefern. An der Einsatzstelle lohnt es sich, gezielt nach ihnen zu fragen.'),

    H2('loescher', 'Feuerlöscher richtig einsetzen'),
    P('Der Feuerlöscher ist das Werkzeug des Brandschutzhelfers – und eines, das häufig falsch bedient wird. Die richtige Technik entscheidet darüber, ob ein Entstehungsbrand gelöscht wird oder ob der Löscher wirkungslos leerläuft.'),
    STEPS(
      'Löscher zum Brand tragen und erst dort entsichern.',
      'Mit dem Wind im Rücken beziehungsweise in Richtung des Luftzugs herangehen.',
      'Brand von <b>vorne und unten</b> angreifen – nicht in die Flammen zielen.',
      'Flächenbrände von vorn nach hinten ablöschen.',
      'Tropf- und Fließbrände von oben nach unten bekämpfen.',
      'Mehrere Löscher <b>gleichzeitig</b> einsetzen, nicht nacheinander.',
      'Nach dem Löschen die Brandstelle beobachten – Rückzündungsgefahr.',
      'Benutzte Löscher nicht zurückhängen, sondern zur Wartung geben.'),
    CO('warn', 'Eigenschutz vor Löschversuch', 'Ein Entstehungsbrand kann in wenigen Minuten außer Kontrolle geraten. Im Zweifel gilt: Menschen warnen, Bereich räumen, Feuerwehr rufen – und keinen Löschversuch unter Eigengefährdung. Ein Feuerlöscher hat wenige Sekunden Löschmittelvorrat; wer damit einen Vollbrand angeht, verliert.'),
    CO('info', 'Löschmitteleinheiten', 'Die Leistungsfähigkeit eines Feuerlöschers wird in <b>Löschmitteleinheiten (LE)</b> angegeben. Wie viele davon in einem Gebäude vorzuhalten sind, hängt von Fläche und Gefährdung ab. Für die Feuerwehr ist vor allem wichtig: Ein Löscher ist ein Hilfsmittel für Entstehungsbrände, kein Ersatz für einen Löschangriff.'),

    H2('raeumung', 'Räumung und Evakuierung'),
    P('Die geordnete Räumung eines Gebäudes ist eine der wirksamsten Maßnahmen überhaupt – und eine, die fast vollständig davon abhängt, ob sie vorher geübt wurde. Menschen verhalten sich im Ernstfall so, wie sie es gelernt haben.'),
    KF(
      'Bekannte Fluchtwege nutzen – Menschen gehen instinktiv den Weg, den sie kennen.',
      'Aufzüge meiden – sie können im Brandfall zur tödlichen Falle werden.',
      'Türen schließen, aber nicht abschließen.',
      'Sammelplatz aufsuchen und Vollzähligkeit prüfen.',
      'Hilfebedürftige Personen gezielt unterstützen – vorher festlegen, wer wen begleitet.',
      'Rückmeldung an die Feuerwehr: Wer fehlt, und wo wurde er zuletzt gesehen?'),
    CO('tip', 'Die wichtigste Information für die Feuerwehr', 'Beim Eintreffen lautet die entscheidende Frage: „Sind noch Personen im Gebäude?" Eine Räumungsorganisation, die eine belastbare Antwort liefern kann, verändert den gesamten Einsatz. Wer nur „vielleicht" sagen kann, zwingt die Feuerwehr zur vollständigen Absuche.'),

    H2('zusammenarbeit', 'Zusammenarbeit im Einsatz'),
    P('An einer Einsatzstelle in einem Betrieb sind Brandschutzbeauftragte, Brandschutzhelfer und Betriebspersonal eine wertvolle Informationsquelle. Sie kennen Gefahren, Abläufe und Personen – Wissen, das die Feuerwehr sich sonst mühsam erarbeiten müsste.'),
    KF(
      'Gezielt nach dem Brandschutzbeauftragten oder einer verantwortlichen Person fragen.',
      'Nach Vollzähligkeitsmeldung, Gefahrstoffen und Absperreinrichtungen fragen.',
      'Betriebspersonal für das Freischalten von Anlagen einbinden.',
      'Feuerwehrplan und Laufkarten nutzen.',
      'Nach dem Einsatz Rückmeldung geben – das verbessert den betrieblichen Brandschutz.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Organisatorischer Brandschutz lebt davon, dass Menschen wissen und tun, was nötig ist.',
      'Brandschutzordnung: Teil A Aushang, Teil B alle Beschäftigten, Teil C besondere Aufgaben.',
      'Brandschutzhelfer – Richtwert etwa 5 Prozent der Beschäftigten.',
      'Feuerlöscher: von vorn und unten, Flächen von vorn nach hinten, mehrere gleichzeitig.',
      'Eigenschutz vor Löschversuch.',
      'Räumung: bekannte Wege, keine Aufzüge, Sammelplatz, Vollzähligkeit.',
      'Die Frage „Sind noch Personen im Gebäude?" verändert den gesamten Einsatz.'),
  ],
},

/* ---------------------------------------------------------------- M4 ---- */
{
  id: 'm4', title: 'Löschwasserversorgung & Hydranten', duration: 20,
  blocks: [
    P('Ohne Löschwasser ist die beste Feuerwehr wirkungslos. Dass an nahezu jeder Adresse in Deutschland innerhalb weniger Minuten Löschwasser verfügbar ist, ist keine Selbstverständlichkeit, sondern das Ergebnis planvoller Vorsorge – und damit Teil des vorbeugenden Brandschutzes.'),

    H2('grundschutz', 'Der Löschwassergrundschutz'),
    DEF('Grundschutz', 'Die Löschwassermenge, die eine Gemeinde flächendeckend für den allgemeinen Bedarf bereitstellen muss. Ihre Höhe richtet sich nach Bebauung, Gefahr der Brandausbreitung und Nutzung – ein Wohngebiet mit Einfamilienhäusern braucht weniger als ein Gewerbegebiet. Über den Grundschutz hinaus benötigen Objekte mit besonderem Risiko einen <b>Objektschutz</b> mit zusätzlichen Löschwasserquellen.'),
    P('Verantwortlich für den Grundschutz ist die Gemeinde als Träger der Feuerwehr. In der Praxis wird er meist über das Trinkwassernetz mit Hydranten sichergestellt – ergänzt um unabhängige Quellen dort, wo das Netz nicht ausreicht.'),

    H2('hydranten', 'Hydrantenarten'),
    TBL(['Art', 'Merkmal', 'Vorteil', 'Nachteil'],[
      ['Überflurhydrant', 'sichtbar über dem Boden', 'schnell gefunden und angeschlossen', 'anfahrgefährdet, frostempfindlicher'],
      ['Unterflurhydrant', 'im Boden unter einer Straßenkappe', 'geschützt, unauffällig', 'Standrohr nötig, Deckel muss gefunden und geöffnet werden'],
      ['Wandhydrant', 'im Gebäude, Steigleitung', 'Löschwasser direkt im Geschoss', 'begrenzte Menge, Bauart beachten'],
    ]),
    KF(
      'Hydranten sind durch Hinweisschilder gekennzeichnet – Abstand und Richtung ablesbar.',
      'Im Winter Schnee und Eis von Hydrantenkappen freihalten.',
      'Nach dem Einsatz Hydranten schließen, entwässern lassen und Kappe verschließen.',
      'Standrohr vor dem Öffnen sichern; Wasserschlag durch langsames Öffnen vermeiden.',
      'Hydrantenpläne im Ausrückgebiet kennen und aktuell halten.',
      'Bei Bauarbeiten und Netzabschaltungen informiert bleiben.'),
    DEF('Löschwasservolumenstrom', 'Die Wassermenge pro Zeit, die an einer Entnahmestelle tatsächlich verfügbar ist – angegeben in Litern pro Minute. Sie hängt vom Rohrnetz, vom Druck und von der gleichzeitigen Entnahme an anderen Stellen ab, nicht vom Hydranten selbst. Deshalb kann derselbe Hydrantentyp an verschiedenen Stellen sehr unterschiedliche Mengen liefern.'),
    CO('warn', 'Nicht alle Hydranten an einer Leitung', 'Werden mehrere Hydranten desselben Leitungsstrangs gleichzeitig genutzt, sinkt die Menge an jedem einzelnen. Bei größeren Lagen lohnt es sich deshalb, Entnahmestellen auf verschiedene Stränge zu verteilen – oder auf unabhängige Quellen auszuweichen.'),

    H2('unabhaengig', 'Unabhängige Löschwasserquellen'),
    UL(
      '<b>Löschwasserteiche und -brunnen</b> mit befestigter Entnahmestelle.',
      '<b>Löschwasserbehälter und Zisternen</b>, oft an Sonderobjekten.',
      '<b>Offene Gewässer</b> mit vorbereiteter Saugstelle und Zufahrt.',
      '<b>Löschwasserbrunnen</b> mit Saug- oder Unterwasserpumpe.',
      '<b>Schwimmbäder, Regenrückhaltebecken und Feuerlöschteiche</b> als Reserve.'),
    P('Alle diese Quellen sind gekennzeichnet und in Karten sowie Feuerwehrplänen verzeichnet. Ihr Wert steht und fällt allerdings mit ihrer <b>Zugänglichkeit</b>: Eine Saugstelle, die zugewachsen ist oder deren Zufahrt zugeparkt wird, hilft im Ernstfall nicht. Die regelmäßige Kontrolle gehört zu den Aufgaben der Feuerwehr.'),
    CO('tip', 'Saugstellen im Winter prüfen', 'Vereiste Saugstellen und zugefrorene Teiche sind eine typische Winterüberraschung. Wer die Quellen im eigenen Gebiet regelmäßig anfährt und prüft, weiß im Ernstfall, worauf er sich verlassen kann – und was er sich sparen kann.'),

    H2('objekt', 'Löschwasser bei besonderen Objekten'),
    P('Bei Objekten mit hoher Brandlast oder großem Schadenpotenzial reicht der Grundschutz nicht. Industriebetriebe, Lagerhallen, Chemiebetriebe und große Sonderbauten benötigen zusätzliche Löschwassermengen – nachzuweisen im Rahmen des Baugenehmigungsverfahrens.'),
    KF(
      'Erforderliche Menge und Dauer ergeben sich aus dem Brandschutzkonzept.',
      'Zusätzliche Quellen: Löschwasserbehälter, Brunnen, offene Gewässer, Werksnetz.',
      'Löschwasserrückhaltung ist bei Gefahrstoffobjekten Teil des Konzepts.',
      'Die Feuerwehr wird bei der Planung beteiligt – Objektkenntnis entsteht dort.',
      'Anlagen regelmäßig gemeinsam mit dem Betreiber prüfen.'),

    H2('praxis', 'Was die Einsatzkraft davon braucht'),
    STEPS(
      'Die Löschwasserquellen im eigenen Ausrückgebiet kennen – Lage, Art, Ergiebigkeit.',
      'Wissen, wo Hydrantenpläne und Feuerwehrpläne liegen.',
      'Die Entnahmestellen bei Objektbegehungen mit ansehen.',
      'Im Einsatz frühzeitig entscheiden, welche Quelle genutzt wird.',
      'Bei ausgedehnten Lagen mehrere Quellen parallel erschließen.',
      'Mängel an Quellen und Kennzeichnung melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der Grundschutz ist Aufgabe der Gemeinde; Sonderobjekte brauchen Objektschutz.',
      'Über-, Unterflur- und Wandhydranten mit unterschiedlichen Eigenschaften.',
      'Die verfügbare Menge hängt vom Rohrnetz ab, nicht vom Hydranten.',
      'Mehrere Hydranten an einem Strang schwächen sich gegenseitig.',
      'Unabhängige Quellen: Teiche, Brunnen, Zisternen, offene Gewässer.',
      'Zugänglichkeit und Zustand regelmäßig prüfen – besonders im Winter.',
      'Löschwasserquellen des eigenen Gebiets kennen, bevor man sie braucht.'),
  ],
},

/* ---------------------------------------------------------------- M5 ---- */
{
  id: 'm5', title: 'Betrieblicher Brandschutz & Brandsicherheitswache', duration: 18,
  blocks: [
    P('Ein erheblicher Teil aller Brände in Betrieben entsteht bei Arbeiten, die mit Feuer, Funken oder Hitze zu tun haben – Schweißen, Trennschleifen, Löten, Dachdecken. Diese Brände sind fast vollständig vermeidbar, und dafür gibt es ein einfaches, wirksames Instrument: den Erlaubnisschein.'),

    H2('feuergefaehrlich', 'Feuergefährliche Arbeiten'),
    DEF('Erlaubnisschein für feuergefährliche Arbeiten', 'Eine schriftliche Freigabe, die vor Beginn von Schweiß-, Schneid-, Löt-, Trenn- und ähnlichen Arbeiten erteilt wird. Sie legt fest, welche Schutzmaßnahmen zu treffen sind, wer die Brandwache stellt und wie lange nachkontrolliert wird. Sie zwingt dazu, die Gefahren vor Beginn zu durchdenken – genau darin liegt ihr Wert.'),
    KF(
      'Brennbare Stoffe aus dem Gefahrenbereich entfernen oder abdecken.',
      'Öffnungen, Fugen und Durchbrüche abdichten – Funken fliegen weit und fallen tief.',
      'Löschmittel bereitstellen: Feuerlöscher, angeschlossener Wasserschlauch.',
      'Während der Arbeiten eine Brandwache stellen.',
      'Nach Abschluss mehrfach nachkontrollieren – über Stunden.',
      'Bei Arbeiten in Bereichen mit Brandmeldeanlage die Anlage abstimmen, nicht eigenmächtig abschalten.'),
    CO('danger', 'Schwelbrände zeigen sich spät', 'Ein Funke, der in eine Dämmung, einen Hohlraum oder einen Zwischenboden fällt, kann dort stundenlang schwelen und erst nach Feierabend zum offenen Brand werden – wenn niemand mehr da ist. Deshalb ist die <b>Nachkontrolle</b> der wichtigste Teil des Erlaubnisscheins und keine Formalie.'),

    H2('sicherheitswache', 'Die Brandsicherheitswache'),
    DEF('Brandsicherheitswache', 'Eine von der Feuerwehr gestellte Wache bei Veranstaltungen mit erhöhtem Brandrisiko oder hoher Personenzahl – Theater, Zirkus, Volksfeste, große Versammlungen. Ihre Aufgabe ist es, Brände früh zu erkennen, Erstmaßnahmen einzuleiten, die Räumung zu unterstützen und die Rettungswege im Blick zu behalten. Wann sie erforderlich ist, regelt das Landesrecht beziehungsweise die Versammlungsstättenverordnung.'),
    STEPS(
      'Vor Beginn das Objekt begehen: Rettungswege, Ausgänge, Löschmittel, Absperreinrichtungen.',
      'Mit Veranstalter und Ordnungsdienst Kontakt aufnehmen und Zuständigkeiten klären.',
      'Kommunikationswege festlegen – wer alarmiert wen und wie?',
      'Während der Veranstaltung Rettungswege und Ausgänge dauerhaft im Blick behalten.',
      'Pyrotechnik, offenes Feuer und Heizgeräte überwachen.',
      'Bei Gefahr: Veranstaltung stoppen lassen, räumen, Feuerwehr nachfordern.',
      'Nach der Veranstaltung Nachkontrolle und Rückmeldung.'),
    CO('warn', 'Die Wache ist keine Zuschauerrolle', 'Eine Brandsicherheitswache, die von einem festen Platz aus die Veranstaltung ansieht, erfüllt ihren Zweck nicht. Sie geht Runden, prüft Ausgänge, spricht Blockaden an und dokumentiert Beanstandungen. Die häufigste Feststellung ist ein zugestellter oder verschlossener Notausgang – und genau der kostet im Ernstfall Menschenleben.'),

    H2('veranstaltung', 'Veranstaltungen absichern'),
    KF(
      'Flucht- und Rettungswege sowie Ausgänge müssen frei und unverschlossen sein.',
      'Bestuhlung und Aufbauten dürfen Wege nicht einengen.',
      'Dekoration und Textilien müssen schwerentflammbar sein.',
      'Pyrotechnik nur mit Genehmigung, Sachkunde und Sicherheitsabständen.',
      'Heizpilze, Fritteusen und Grills brauchen Abstand und Löschmittel.',
      'Zufahrten für Feuerwehr und Rettungsdienst freihalten.',
      'Bei Überfüllung Einlassstopp veranlassen.'),

    H2('praevention', 'Brandschutzerziehung und Aufklärung'),
    P('Der wirksamste Brandschutz beginnt lange vor dem Einsatz. Brandschutzerziehung in Kindergärten und Schulen, Rauchmelderaktionen, Beratung von Betrieben und Aufklärung zu Themen wie Adventskranz, Fettbrand oder Elektrogeräten verhindert Brände, bevor sie entstehen.'),
    KF(
      'Brandschutzerziehung erreicht Kinder – und über sie ihre Familien.',
      'Rauchwarnmelder sind in Wohnungen Pflicht und retten nachweislich Leben.',
      'Aufklärung zu Fettbränden verhindert eine der häufigsten schweren Küchenverletzungen.',
      'Beratung von Betrieben und Vereinen ist gelebter vorbeugender Brandschutz.',
      'Tage der offenen Tür verbinden Nachwuchsgewinnung mit Aufklärung.'),
    CO('tip', 'Der beste Brand ist der, der nie entsteht', 'Prävention wirkt still und unsichtbar – niemand dankt der Feuerwehr für einen Brand, der nicht passiert ist. Trotzdem verhindert betrieblicher und organisatorischer Brandschutz weit mehr Schäden, als jede Feuerwehr je löschen kann. Wer sich dort engagiert, leistet den wirksamsten Beitrag überhaupt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Feuergefährliche Arbeiten brauchen einen Erlaubnisschein mit Schutzmaßnahmen.',
      'Brennbares entfernen, Öffnungen abdichten, Löschmittel bereitstellen, Brandwache stellen.',
      'Die <b>Nachkontrolle</b> über Stunden ist der wichtigste Teil – Schwelbrände zeigen sich spät.',
      'Die Brandsicherheitswache erkennt früh, unterstützt die Räumung und hält Wege frei.',
      'Sie geht Runden und dokumentiert – sie sitzt nicht.',
      'Bei Veranstaltungen: Wege frei, Dekoration schwerentflammbar, Pyrotechnik überwacht.',
      'Brandschutzerziehung und Aufklärung verhindern mehr Schäden als jeder Löscheinsatz.'),
  ],
},

];
