/* =========================================================================
   MODUL Q — Jugend- & Nachwuchsarbeit
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls Q.

   Fachliche Grundlage: Jugendschutzgesetz, SGB VIII (insbesondere zum
   Kinderschutz und erweiterten Führungszeugnis), Landesfeuerwehrgesetze
   und Jugendfeuerwehrordnungen, DGUV Vorschrift 49, Ordnungen der
   Deutschen Jugendfeuerwehr. Altersgrenzen und Regelungen sind
   landesrechtlich unterschiedlich – maßgeblich ist die Jugendfeuerwehr-
   ordnung deines Landes.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_Q = [

/* ---------------------------------------------------------------- Q1 ---- */
{
  id: 'q1', title: 'Auftrag & Rechtsrahmen', duration: 18,
  blocks: [
    P('Jede aktive Einsatzkraft war einmal neu. Ein erheblicher Teil kommt aus der Jugendfeuerwehr – und wer dort gut betreut wurde, bleibt der Feuerwehr oft ein Leben lang treu. Nachwuchsarbeit ist deshalb keine nette Zusatzaufgabe, sondern die Investition, von der die Einsatzbereitschaft in zehn und zwanzig Jahren abhängt.'),

    H2('ziel', 'Was die Jugendfeuerwehr leistet'),
    P('Die Jugendfeuerwehr verbindet zwei Aufträge, die gleich wichtig sind: die <b>feuerwehrtechnische Grundausbildung</b> und die <b>allgemeine Jugendarbeit</b>. Wer nur das erste betreibt, bekommt gelangweilte Jugendliche; wer nur das zweite betreibt, bekommt einen Jugendclub ohne Bezug zur Feuerwehr.'),
    KF(
      'Feuerwehrtechnische Grundlagen altersgerecht vermitteln.',
      'Werte wie Teamgeist, Verantwortung, Verlässlichkeit und Hilfsbereitschaft vorleben.',
      'Gemeinschaft und Zugehörigkeit schaffen – der wichtigste Bindungsfaktor.',
      'Demokratische Mitbestimmung üben: Jugendsprecher, Mitplanung, eigene Ideen.',
      'Den Übergang in den aktiven Dienst vorbereiten und begleiten.',
      'Persönlichkeitsentwicklung fördern – Selbstvertrauen, Verantwortung, Konfliktfähigkeit.'),
    TBL(['Stufe', 'Alter (typisch)', 'Schwerpunkt'],[
      ['Kinderfeuerwehr / Bambini', 'etwa 6 bis 10 Jahre', 'spielerisches Heranführen, Brandschutzerziehung'],
      ['Jugendfeuerwehr', 'etwa 10 bis 18 Jahre', 'Grundausbildung, Wettbewerbe, Gemeinschaft'],
      ['Übergang in den aktiven Dienst', 'ab 16 oder 18 Jahre', 'Truppausbildung, erste Einsätze unter Aufsicht'],
    ]),
    CO('info', 'Altersgrenzen sind Landesrecht', 'Aufnahmealter, Übergangsalter und die Frage, ob Minderjährige am Einsatzdienst teilnehmen dürfen, regeln die Landesgesetze und Jugendfeuerwehrordnungen unterschiedlich. Was in einem Bundesland zulässig ist, kann im Nachbarland ausgeschlossen sein – im Zweifel bei der Jugendfeuerwehrleitung nachfragen.'),

    H2('recht', 'Der rechtliche Rahmen'),
    DEF('Aufsichtspflicht', 'Betreuerinnen und Betreuer übernehmen für die Dauer der Veranstaltung die Aufsichtspflicht über die anvertrauten Kinder und Jugendlichen. Ihr Umfang richtet sich nach <b>Alter, Reife und Einsichtsfähigkeit</b> der Betreuten sowie nach der <b>Gefährlichkeit</b> der Tätigkeit und den <b>örtlichen Verhältnissen</b>. Der Grundsatz lautet: so viel Freiheit wie möglich, so viel Aufsicht wie nötig.'),
    P('Aufsichtspflicht bedeutet nicht ständige lückenlose Beobachtung. Eine Gruppe 16-Jähriger darf beim Schlauchkuppeln allein arbeiten; eine Gruppe 10-Jähriger an derselben Aufgabe braucht durchgehende Betreuung. Entscheidend ist, dass die Betreuer die Gefahren kennen, die Betreuten einschätzen können und im Zweifel enger begleiten.'),
    KF(
      '<b>Jugendschutzgesetz</b> beachten – Zeiten, Aufenthalt, Alkohol und Tabak.',
      '<b>Einverständniserklärungen</b> der Erziehungsberechtigten einholen und aktuell halten.',
      '<b>Gesundheitsangaben</b> erfragen: Allergien, Medikamente, Erkrankungen.',
      '<b>Kein Einsatz Minderjähriger</b> im realen Gefahrenbereich.',
      '<b>Qualifizierte Betreuer</b> – die Jugendleiter-Card (JuLeiCa) ist ein bewährter Nachweis.',
      '<b>Erweitertes Führungszeugnis</b> für alle Betreuer.',
      '<b>Versicherungsschutz</b> über die Unfallkasse klären.'),
    CO('danger', 'Minderjährige und der Einsatzdienst', 'Kinder und Jugendliche in der Jugendfeuerwehr nehmen <b>nicht</b> am realen Einsatzdienst teil. Sie gehören nicht an eine Einsatzstelle, auch nicht als Zuschauer, und schon gar nicht in den Gefahrenbereich. Wo das Landesrecht eine Teilnahme ab 16 Jahren zulässt, gilt sie nur unter engen Voraussetzungen und mit besonderer Betreuung.'),

    H2('betreuer', 'Wer betreut'),
    P('Die Qualität der Jugendarbeit steht und fällt mit den Betreuern. Sie brauchen fachliches Können, pädagogisches Gespür und die Bereitschaft, verlässlich da zu sein – über Jahre.'),
    KF(
      'Feuerwehrtechnische Qualifikation, mindestens abgeschlossene Truppausbildung.',
      'Pädagogische Schulung, etwa über die Jugendleiter-Card.',
      'Schulung zur Prävention sexualisierter Gewalt.',
      'Erweitertes Führungszeugnis, regelmäßig erneuert.',
      'Erste-Hilfe-Ausbildung, aktuell gehalten.',
      'Ausreichende Zahl – ein Betreuer allein ist weder rechtlich noch praktisch tragfähig.'),
    CO('tip', 'Der Betreuungsschlüssel', 'Eine Faustregel für die Zahl der Betreuer gibt es nicht, weil sie von Alter, Aktivität und Ort abhängt. Zwei Betreuer sind das absolute Minimum – schon damit bei einem Notfall einer betreuen und einer handeln kann. Bei Ausflügen, Zeltlagern und Wasseraktivitäten deutlich mehr.'),

    H2('eltern', 'Zusammenarbeit mit den Eltern'),
    P('Eltern vertrauen der Feuerwehr ihre Kinder an. Dieses Vertrauen entsteht durch Transparenz: klare Informationen über Termine und Inhalte, erreichbare Ansprechpartner, verlässliche Abläufe und eine offene Fehlerkultur.'),
    KF(
      'Jahresplan und Termine frühzeitig bekannt geben.',
      'Erreichbarkeit während der Veranstaltungen sicherstellen.',
      'Bei Vorfällen sofort und offen informieren.',
      'Eltern einbinden – als Helfer, Fahrer, Unterstützer.',
      'Erwartungen klären: Was leistet die Jugendfeuerwehr, was nicht?',
      'Datenschutz beachten: Fotos nur mit Einwilligung veröffentlichen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Jugendfeuerwehr verbindet feuerwehrtechnische Ausbildung mit Jugendarbeit.',
      'Altersgrenzen und Regelungen sind Landesrecht.',
      '<b>Aufsichtspflicht</b> richtet sich nach Alter, Reife, Gefährlichkeit und Ort.',
      'So viel Freiheit wie möglich, so viel Aufsicht wie nötig.',
      'Minderjährige gehören nicht in den realen Gefahrenbereich.',
      'Betreuer brauchen fachliche und pädagogische Qualifikation sowie erweitertes Führungszeugnis.',
      'Mindestens zwei Betreuer – bei besonderen Aktivitäten deutlich mehr.',
      'Transparenz gegenüber Eltern schafft Vertrauen.'),
  ],
},

/* ---------------------------------------------------------------- Q2 ---- */
{
  id: 'q2', title: 'Sichere & altersgerechte Ausbildung', duration: 18,
  blocks: [
    P('Ein Zwölfjähriger ist kein kleiner Erwachsener. Er lernt anders, ermüdet anders, schätzt Gefahren anders ein und braucht andere Erfolgserlebnisse. Wer Jugendausbildung wie Erwachsenenausbildung betreibt, verliert die Gruppe – und riskiert im schlimmsten Fall Unfälle.'),

    H2('paedagogik', 'Wie Kinder und Jugendliche lernen'),
    KF(
      '<b>Kürzere Konzentrationsspannen</b> – Blöcke von 15 bis 20 Minuten, dann Wechsel.',
      '<b>Hoher Bewegungsdrang</b> – Theorie im Sitzen funktioniert nur kurz.',
      '<b>Lernen durch Tun</b> – selbst machen prägt sich weit besser ein als zusehen.',
      '<b>Starkes Bedürfnis nach Erfolgserlebnissen</b> – jeder soll etwas schaffen.',
      '<b>Große Unterschiede</b> in Entwicklung und Belastbarkeit innerhalb einer Altersgruppe.',
      '<b>Vorbilder wirken stärker als Worte</b> – Betreuer werden genau beobachtet.'),
    P('Praktisch heißt das: kurze Theorieanteile, viel Praxis, häufiger Methodenwechsel, Stationsbetrieb statt Frontalunterricht und ein spürbarer Bezug zur echten Feuerwehr. Wer einen Knoten übt, soll auch erfahren, wozu er gebraucht wird.'),

    H2('sicher', 'Sicherheit in der Jugendausbildung'),
    P('Für die Jugendfeuerwehr gelten dieselben Arbeitsschutzgrundsätze wie für den aktiven Dienst – mit dem Unterschied, dass die Betreuten Gefahren schlechter einschätzen können und ihre körperliche Belastbarkeit geringer ist.'),
    KF(
      'Persönliche Schutzausrüstung in passender Größe – nicht die abgelegte Erwachsenengarnitur.',
      'Geräte und Belastung altersgerecht reduzieren: leichtere Schläuche, weniger Gewicht, kürzere Strecken.',
      'Kein Umgang mit gefährlichen Geräten – keine Motorsäge, kein Trennschleifer, kein hydraulischer Rettungssatz.',
      'Kein Atemschutz und keine Übungen unter realer Brandbelastung.',
      'Übungen an betreuten Stationen mit klaren Regeln.',
      'Vor jeder Übung Ablauf, Gefahren und Abbruchsignal erklären.',
      'Trinken, Pausen und Wetterschutz einplanen.'),
    CO('danger', 'Der häufigste Fehler', 'Aus Begeisterung zu viel zuzumuten. Ein Jugendlicher, der unbedingt den schweren Schlauch tragen will, sagt nicht, wenn es zu viel wird. Die Verantwortung dafür liegt bei den Betreuern – nicht bei ihm.'),

    H2('kindeswohl', 'Kindeswohl und Prävention'),
    P('Der Schutz vor Grenzverletzungen und sexualisierter Gewalt gehört heute zur Grundausstattung jeder Jugendarbeit. Das ist kein Misstrauen gegenüber den Betreuern, sondern ein Schutz für alle Beteiligten – auch für die Betreuer selbst.'),
    DEF('Schutzkonzept', 'Ein schriftliches Konzept der Wehr zum Schutz von Kindern und Jugendlichen. Es enthält Verhaltensregeln, Zuständigkeiten, Beschwerdewege und Verfahren beim Verdacht auf Grenzverletzungen. Ergänzt wird es durch Schulungen, erweiterte Führungszeugnisse und eine Selbstverpflichtung der Betreuer.'),
    KF(
      '<b>Vier-Augen-Prinzip:</b> Betreuer sind mit Kindern möglichst nicht allein in geschlossenen Räumen.',
      '<b>Klare Regeln</b> für Übernachtungen, Umkleiden, Duschen und Körperkontakt.',
      '<b>Beschwerdeweg</b>, den Kinder kennen und ohne Hürde nutzen können.',
      '<b>Ansprechpartner</b> benennen – auch außerhalb der eigenen Betreuergruppe.',
      '<b>Grenzverletzungen ansprechen</b>, auch wenn sie unbeabsichtigt wirken.',
      '<b>Bei Verdacht</b> nicht selbst ermitteln, sondern das festgelegte Verfahren einhalten und Fachberatung einbeziehen.'),
    CO('warn', 'Auch der Umgang untereinander zählt', 'Grenzverletzungen gehen häufig nicht von Erwachsenen aus, sondern zwischen den Jugendlichen. Mobbing, Ausgrenzung, respektlose Sprache und Mutproben gehören ebenso in den Blick. Eine Kultur, in der so etwas angesprochen werden darf, schützt am besten.'),

    H2('gemeinschaft', 'Gemeinschaft und Bindung'),
    P('Der wichtigste Grund, warum Jugendliche in der Feuerwehr bleiben, ist selten die Technik – es ist die Gruppe. Wer sich zugehörig fühlt, kommt wieder. Wer sich fremd fühlt, geht, egal wie gut die Ausbildung ist.'),
    KF(
      'Gemeinsame Erlebnisse schaffen: Zeltlager, Ausflüge, Berufsfeuerwehrtage.',
      'Rituale und Traditionen pflegen – sie stiften Identität.',
      'Verantwortung übertragen: Ältere leiten Jüngere an.',
      'Neue Mitglieder aktiv integrieren und Paten benennen.',
      'Erfolge sichtbar machen: Urkunden, Abzeichen, Berichte.',
      'Den Übergang in den aktiven Dienst bewusst gestalten und begleiten.'),
    CO('tip', 'Der kritische Moment', 'Der Übergang aus der Jugendfeuerwehr in den aktiven Dienst ist die Stelle, an der die meisten verloren gehen: aus der vertrauten Gruppe in eine fremde Mannschaft, von der Betreuung in die Anforderung. Wer diesen Übergang bewusst begleitet – Paten, gemeinsame Übungen, frühzeitige Einbindung –, hält deutlich mehr Nachwuchs.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Kurze Blöcke, viel Praxis, Methodenwechsel, Bezug zur echten Feuerwehr.',
      'Jeder soll Erfolgserlebnisse haben.',
      'PSA in passender Größe, Belastung und Geräte altersgerecht reduzieren.',
      'Keine gefährlichen Geräte, kein Atemschutz, keine reale Brandbelastung.',
      '<b>Schutzkonzept</b> mit Vier-Augen-Prinzip, Beschwerdeweg und Ansprechpartnern.',
      'Auch den Umgang der Jugendlichen untereinander im Blick behalten.',
      'Gemeinschaft ist der stärkste Bindungsfaktor.',
      'Den Übergang in den aktiven Dienst bewusst begleiten.'),
  ],
},

/* ---------------------------------------------------------------- Q3 ---- */
{
  id: 'q3', title: 'Ausbildungsmethodik & Gruppenstunde gestalten', duration: 18,
  blocks: [
    P('Ausbilden kann nicht jeder, der etwas gut kann. Wissen zu haben und Wissen weitergeben zu können, sind zwei verschiedene Fähigkeiten – und die zweite lässt sich lernen. Diese Lektion behandelt die Methodik, die in der Feuerwehr seit Jahrzehnten funktioniert.'),

    H2('methodik', 'Wie Menschen lernen'),
    P('Menschen behalten sehr unterschiedlich viel, je nachdem, wie sie mit einem Inhalt umgehen. Der alte Merksatz bringt es auf den Punkt: <b>„Sag es mir – ich vergesse. Zeig es mir – ich erinnere mich. Lass es mich tun – ich verstehe."</b>'),
    KF(
      'Reines Zuhören ist die schwächste Lernform.',
      'Sehen und Hören zusammen wirkt deutlich besser.',
      'Selbst tun prägt sich am stärksten ein.',
      'Etwas anderen erklären festigt am nachhaltigsten.',
      'Wiederholung in Abständen schlägt einmaliges langes Üben.',
      'Emotionen und Erlebnisse verankern Wissen zusätzlich.'),
    CO('tip', 'Die stärkste Methode', 'Lass Jugendliche das Gelernte einem anderen erklären oder vormachen. Wer erklären muss, merkt sofort, wo sein eigenes Verständnis Lücken hat – und schließt sie von selbst. Das kostet fünf Minuten und ersetzt zwanzig Minuten Wiederholung.'),

    H2('vierstufen', 'Die Vier-Stufen-Methode'),
    DEF('Vier-Stufen-Methode', 'Das bewährte Ausbildungsschema für praktische Fertigkeiten: <b>1. Vorbereiten</b> – Interesse wecken, Ziel nennen, Vorwissen abfragen. <b>2. Vormachen und erklären</b> – langsam, in Schritten, mit Begründung. <b>3. Nachmachen lassen</b> – der Lernende führt aus und erklärt dabei, was er tut. <b>4. Üben und festigen</b> – selbstständiges Wiederholen bis zur Sicherheit.'),
    FIG('vierstufen', 'Die Vier-Stufen-Methode der Ausbildung: Vorbereiten, Vormachen, Nachmachen, Üben.'),
    P('Der häufigste Fehler ist das Überspringen von Stufe vier. Vormachen und einmal nachmachen lassen erzeugt kein Können – nur den Eindruck davon. Erst das wiederholte, selbstständige Üben macht eine Fertigkeit unter Stress abrufbar.'),
    P('Der zweithäufigste Fehler liegt in Stufe drei: Der Ausbilder greift ein, sobald etwas nicht perfekt läuft. Damit nimmt er dem Lernenden die wertvollste Erfahrung. Solange keine Gefahr besteht, lohnt es sich, den Fehler geschehen zu lassen und anschließend gemeinsam zu besprechen.'),

    H2('stunde', 'Eine Gruppenstunde planen'),
    STEPS(
      '<b>Lernziel festlegen:</b> Was soll jeder nach der Stunde können? Ein Ziel, konkret formuliert.',
      '<b>Einstieg gestalten:</b> Motivation schaffen, Bezug zur Praxis herstellen, Neugier wecken.',
      '<b>Hauptteil aufbauen:</b> aktive Beteiligung, Stationen, Üben – möglichst wenig Redeanteil des Ausbilders.',
      '<b>Sicherung:</b> Wiederholen, Quiz, gegenseitiges Erklären, Zusammenfassung.',
      '<b>Abschluss:</b> Rückmeldung geben, Ausblick auf die nächste Stunde, gemeinsamer Abschluss.',
      '<b>Nachbereitung:</b> Was hat funktioniert, was nicht? Für das nächste Mal notieren.'),
    TBL(['Zeitanteil', 'Phase', 'Faustregel'],[
      ['etwa 10 %', 'Einstieg', 'kurz, aber nicht weglassen'],
      ['etwa 60 %', 'Hauptteil mit Praxis', 'so viel Selbsttun wie möglich'],
      ['etwa 20 %', 'Sicherung und Üben', 'wird am häufigsten gestrichen – zu Unrecht'],
      ['etwa 10 %', 'Abschluss', 'Rückmeldung und Ausblick'],
    ]),

    H2('motivation', 'Motivieren und binden'),
    KF(
      '<b>Abwechslung:</b> Technik, Sport, Spiel und Gemeinschaft mischen.',
      '<b>Erfolgserlebnisse:</b> Aufgaben so zuschneiden, dass jeder etwas schafft.',
      '<b>Verantwortung übertragen:</b> Ältere leiten Stationen für Jüngere.',
      '<b>Ziele setzen:</b> Wettbewerbe, Abzeichen, Prüfungen geben der Ausbildung Richtung.',
      '<b>Mitbestimmung:</b> Jugendliche bei der Jahresplanung beteiligen.',
      '<b>Ehrliches Lob</b> – konkret und für etwas Bestimmtes, nicht pauschal.',
      '<b>Verlässlichkeit:</b> Termine einhalten, vorbereitet sein, ansprechbar bleiben.'),
    CO('warn', 'Der Motivationskiller Nummer eins', 'Warten. Eine Gruppe von zwölf Jugendlichen, von denen zwei etwas vormachen und zehn zusehen, verliert nach fünf Minuten die Aufmerksamkeit. Stationsbetrieb mit kleinen Gruppen löst das Problem – mehr Betreuer, aber deutlich mehr Wirkung.'),

    H2('rueckmeldung', 'Rückmeldung geben'),
    P('Wie Rückmeldung gegeben wird, entscheidet darüber, ob sie ankommt. Bewährt hat sich, mit dem Positiven zu beginnen, dann konkret zu benennen, was anders sein soll, und mit einem Ausblick zu enden.'),
    KF(
      'Konkret sein: nicht „war gut", sondern „der Mastwurf saß auf Anhieb".',
      'Verhalten benennen, nicht die Person bewerten.',
      'Zeitnah geben – nicht drei Wochen später.',
      'In der Gruppe loben, unter vier Augen kritisieren.',
      'Fragen statt behaupten: „Was würdest du beim nächsten Mal anders machen?"',
      'Auch Rückmeldung einholen: Was war für euch heute schwierig?'),
    CO('tip', 'Vorbild sein', 'Betreuerinnen und Betreuer wirken durch ihr Verhalten stärker als durch alles, was sie sagen: pünktlich, vorbereitet, fair, mit vollständiger Schutzausrüstung, respektvoll im Ton. Was die Jugend hier erlebt, prägt die Feuerwehr von morgen – im Guten wie im Schlechten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Selbst tun schlägt zusehen; anderen erklären festigt am stärksten.',
      '<b>Vier-Stufen-Methode:</b> Vorbereiten, Vormachen, Nachmachen, Üben.',
      'Stufe vier wird am häufigsten übersprungen – ohne Üben kein Können.',
      'Gruppenstunde: Ziel, Einstieg, Hauptteil, Sicherung, Abschluss, Nachbereitung.',
      'Der Hauptteil gehört den Jugendlichen, nicht dem Ausbilder.',
      'Warten ist der größte Motivationskiller – Stationsbetrieb nutzen.',
      'Rückmeldung konkret, zeitnah, verhaltensbezogen.',
      'Betreuer wirken durch ihr Vorbild.'),
  ],
},

/* ---------------------------------------------------------------- Q4 ---- */
{
  id: 'q4', title: 'Wettbewerbe, Leistungsspange & Abzeichen', duration: 16,
  blocks: [
    P('Ausbildung ohne Ziel verliert sich. Wettbewerbe und Abzeichen geben der Jugendarbeit eine Richtung, machen Fortschritt sichtbar und schaffen gemeinsame Erlebnisse, an die sich Jugendliche noch Jahrzehnte später erinnern.'),

    H2('warum', 'Warum Wettbewerbe?'),
    KF(
      'Sie geben der Ausbildung ein konkretes, terminiertes Ziel.',
      'Sie fördern regelmäßiges Üben, weil ein Termin dahintersteht.',
      'Sie machen Können sichtbar – für die Jugendlichen und für die Wehr.',
      'Sie stärken den Zusammenhalt: Man schafft es nur gemeinsam.',
      'Sie bringen Kontakt zu anderen Jugendfeuerwehren.',
      'Sie schaffen Erfolgserlebnisse, die lange nachwirken.'),

    H2('leistungsspange', 'Die Leistungsspange der Deutschen Jugendfeuerwehr'),
    DEF('Leistungsspange', 'Die höchste Auszeichnung der Deutschen Jugendfeuerwehr, in der Regel ab einem Mindestalter von 15 Jahren. Eine Gruppe zeigt gemeinsam mehrere Teilbereiche – unter anderem eine <b>Schnelligkeitsübung</b>, eine <b>sportliche Übung</b>, einen <b>Löschangriff</b>, eine <b>Wissensabfrage</b> und den <b>Gesamteindruck</b>. Bewertet wird die Gruppe als Ganzes; einzelne Spitzenleistungen gleichen Schwächen nicht aus.'),
    P('Genau das macht die Leistungsspange pädagogisch wertvoll: Sie belohnt nicht den Schnellsten, sondern die Gruppe, die zusammen funktioniert. Wer die Vorbereitung erlebt hat, versteht danach, was eine taktische Einheit ausmacht – eine Erfahrung, die im späteren Einsatzdienst unmittelbar trägt.'),

    H2('weitere', 'Weitere Wettbewerbe und Abzeichen'),
    TBL(['Auszeichnung', 'Wer', 'Inhalt'],[
      ['Jugendflamme Stufe 1 bis 3', 'einzelne Jugendliche', 'aufbauende Grundfertigkeiten – Knoten, Geräte, Erste Hilfe, Funk'],
      ['Leistungsspange', 'Gruppe ab etwa 15 Jahren', 'Schnelligkeit, Sport, Löschangriff, Wissen, Gesamteindruck'],
      ['Bundeswettbewerb der DJF', 'Gruppen', 'Löschangriff und Staffellauf nach festem Regelwerk'],
      ['Leistungsabzeichen der Länder', 'variiert', 'landesspezifische Prüfungen'],
      ['Berufsfeuerwehrtag', 'ganze Jugendfeuerwehr', '24 Stunden Dienstbetrieb mit gestellten Einsätzen'],
      ['Orientierungsmärsche und Zeltlagerspiele', 'Gruppen', 'Teamaufgaben, Orientierung, Spaß'],
    ]),
    CO('info', 'Der Berufsfeuerwehrtag', 'Ein 24-Stunden-Dienst mit realistisch gestellten Einsätzen ist für viele Jugendliche das prägendste Erlebnis überhaupt. Er verlangt allerdings sorgfältige Planung: gestellte Lagen ohne echte Gefahr, ausreichend Betreuer, Ruhezeiten, Verpflegung und ein klares Sicherheitskonzept.'),

    H2('vorbereitung', 'Auf einen Wettbewerb vorbereiten'),
    STEPS(
      'Regelwerk beschaffen und gemeinsam durchgehen – alle sollen wissen, worauf es ankommt.',
      'Ausgangsstand ermitteln: Was können wir schon, was fehlt?',
      'Übungsplan aufstellen mit realistischem Zeitrahmen.',
      'Einzelfertigkeiten sauber erarbeiten, bevor auf Zeit geübt wird.',
      'Erst korrekt, dann flüssig, dann schnell.',
      'Gruppendynamik im Blick behalten – niemanden vorführen.',
      'Generalprobe unter Wettbewerbsbedingungen.',
      'Nach dem Wettbewerb gemeinsam auswerten und feiern – unabhängig vom Ergebnis.'),
    CO('warn', 'Der Druck darf nicht kippen', 'Ehrgeiz motiviert, Druck vertreibt. Wenn Jugendliche vor lauter Wettbewerbsvorbereitung keinen Spaß mehr haben oder einzelne als Schuldige für Fehler dastehen, ist das Ziel verfehlt. Ein guter Betreuer merkt, wann er das Tempo herausnehmen muss.'),

    H2('wert', 'Der pädagogische Wert'),
    P('Wettbewerbe sind Mittel, nicht Zweck. Was Jugendliche dabei tatsächlich lernen, geht weit über den Löschangriff hinaus: Sie erleben, dass Übung zu messbarem Fortschritt führt, dass eine Gruppe mehr leistet als die Summe ihrer Mitglieder und dass man auch mit einem enttäuschenden Ergebnis fair umgehen kann.'),
    CO('tip', 'Fair bleiben', 'Im Wettbewerb geht es um gemeinsames Können, nicht um den Sieg um jeden Preis. Fairness gegenüber anderen Gruppen, gegenseitige Unterstützung und Freude am Miteinander sind die eigentlichen Ziele. Jugendliche merken sehr genau, ob Betreuer das ernst meinen – und übernehmen es dann auch.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Wettbewerbe geben der Ausbildung ein Ziel und machen Fortschritt sichtbar.',
      'Die <b>Leistungsspange</b> bewertet die Gruppe als Ganzes, nicht Einzelleistungen.',
      'Die <b>Jugendflamme</b> deckt individuelle Grundfertigkeiten in drei Stufen ab.',
      'Der Berufsfeuerwehrtag ist prägend, verlangt aber sorgfältige Planung.',
      'Vorbereitung: erst korrekt, dann flüssig, dann schnell.',
      'Druck darf nicht kippen – Spaß und Fairness bleiben das Ziel.',
      'Nach dem Wettbewerb gemeinsam auswerten und feiern, unabhängig vom Ergebnis.'),
  ],
},

/* ---------------------------------------------------------------- Q5 ---- */
{
  id: 'q5', title: 'Zeltlager & Ausflüge rechtssicher organisieren', duration: 16,
  blocks: [
    P('Zeltlager und Ausflüge sind für die meisten Jugendlichen der Höhepunkt des Feuerwehrjahres – und für die Betreuer die anspruchsvollste Aufgabe. Über mehrere Tage tragen sie rund um die Uhr Verantwortung für Kinder, die nicht ihre eigenen sind. Sorgfältige Vorbereitung ist deshalb keine Formsache.'),

    H2('planung', 'Gut geplant ist halb gewonnen'),
    STEPS(
      'Termin, Ort und Rahmen früh festlegen und bekannt geben.',
      'Betreuerteam zusammenstellen und Aufgaben verteilen.',
      'Anmeldung mit Einverständniserklärung, Gesundheitsangaben und Notfallkontakten.',
      'Programm planen – mit Puffer und Schlechtwetteralternative.',
      'Verpflegung organisieren, Allergien und Unverträglichkeiten berücksichtigen.',
      'Unterkunft, Sanitäranlagen und Schlafsituation klären.',
      'Notfallplan aufstellen: Erste Hilfe, Erreichbarkeit, nächstes Krankenhaus, Abholung.',
      'Fahrten organisieren und versicherungsrechtlich absichern.'),
    KF(
      'Ausreichend qualifizierte Betreuer – bei Übernachtungen deutlich mehr als beim Dienstabend.',
      'Erste-Hilfe-Ausstattung und mindestens eine Person mit aktueller Ausbildung.',
      'Erreichbarkeit rund um die Uhr sicherstellen, Telefonliste führen.',
      'Medikamente der Teilnehmer sicher verwahren und dokumentiert ausgeben.',
      'Klare Regeln vorab kommunizieren – Teilnehmer und Eltern.',
      'Genehmigungen und Versicherungsschutz klären.'),

    H2('recht', 'Rechtliche Rahmenbedingungen'),
    UL(
      '<b>Aufsichtspflicht</b> gilt durchgehend – auch nachts, auch in der Freizeit.',
      '<b>Jugendschutzgesetz</b> beachten: Zeiten, Alkohol, Tabak; für Betreuer gilt Vorbildpflicht.',
      '<b>Kinderschutz:</b> Vier-Augen-Prinzip, geschulte Betreuer, erweiterte Führungszeugnisse.',
      '<b>Datenschutz:</b> Fotos nur mit Einwilligung, keine Veröffentlichung ohne Zustimmung.',
      '<b>Versicherung:</b> Unfallversicherung über die Unfallkasse, Haftpflicht klären.',
      '<b>Verkehrssicherheit</b> bei Fahrten: geeignete Fahrzeuge, ausgeruhte Fahrer, Sicherung.'),
    CO('warn', 'Nachtruhe ist Betreuungszeit', 'Die Aufsichtspflicht endet nicht um 22 Uhr. Gerade nachts entstehen die Situationen, die später Probleme machen – Mutproben, Grenzverletzungen, unbemerktes Verlassen des Geländes. Ein Nachtdienstplan mit wachen, erreichbaren Betreuern gehört deshalb zu jedem Zeltlager.'),

    H2('baden', 'Besondere Gefahr: Baden'),
    CO('danger', 'Ertrinken passiert leise', 'Anders als im Film ruft ein ertrinkendes Kind nicht um Hilfe und schlägt nicht um sich – es geht still unter, oft innerhalb von zwanzig bis sechzig Sekunden und in unmittelbarer Nähe anderer Menschen. Deshalb ist Badeaufsicht keine Nebenbeschäftigung.'),
    KF(
      'Nur an geeigneten, möglichst bewachten Badestellen baden.',
      'Schwimmfähigkeit vorab erfragen; Nichtschwimmer besonders kennzeichnen und sichern.',
      'Klare Bereichsgrenzen festlegen und sichtbar markieren.',
      'Aufsicht am und im Wasser – Betreuer im Wasser zählen nicht als Aufsicht.',
      'Regelmäßige Zählappelle – vor, während und nach dem Baden.',
      'Rettungsmittel bereithalten: Wurfsack, Rettungsring, Stange.',
      'Bei unklaren Verhältnissen, Strömung oder trübem Wasser: nicht baden.'),

    H2('gefahren', 'Weitere typische Gefahrenpunkte'),
    TBL(['Bereich', 'Risiko', 'Maßnahme'],[
      ['Lagerfeuer', 'Verbrennungen, Funkenflug', 'Abstand, Löschmittel, Aufsicht, kein Brandbeschleuniger'],
      ['Küche und Verpflegung', 'Verbrühung, Lebensmittelhygiene', 'Zuständigkeiten, Kühlkette, Handhygiene'],
      ['Zelte und Aufbau', 'Heringe, Sturm, Stolperfallen', 'Aufbau prüfen, Sturmwarnung beachten'],
      ['Sonne und Hitze', 'Sonnenstich, Dehydrierung', 'Kopfbedeckung, Trinken, Schattenzeiten'],
      ['Ausflüge und Wanderungen', 'Verkehr, Verlaufen, Erschöpfung', 'Route planen, Zählen, Tempo anpassen'],
      ['Heimweh und Konflikte', 'psychische Belastung', 'Ansprechpartner, Rückzugsmöglichkeit, Elternkontakt'],
    ]),

    H2('notfall', 'Wenn etwas passiert'),
    STEPS(
      'Erste Hilfe leisten und bei Bedarf den Rettungsdienst rufen.',
      'Betroffenes Kind nicht allein lassen; eine feste Bezugsperson bleibt dabei.',
      'Übrige Gruppe betreuen und aus der Situation herausnehmen.',
      'Erziehungsberechtigte umgehend informieren – offen und vollständig.',
      'Vorfall dokumentieren: was, wann, wer, welche Maßnahmen.',
      'Unfallanzeige an die Unfallkasse veranlassen.',
      'Im Team nachbesprechen und Konsequenzen ziehen.'),
    CO('tip', 'Erlebnis mit Verantwortung', 'Zeltlager schaffen Erinnerungen fürs Leben und binden Nachwuchs stärker als jede Übung. Wer Sicherheit und Freiraum in Balance hält – klare Regeln, aber genug Raum für eigene Erfahrungen –, legt den Grundstein für begeisterte Feuerwehrleute von morgen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Einverständnis, Gesundheitsangaben und Notfallkontakte vorab einholen.',
      'Ausreichend qualifizierte Betreuer, Erste-Hilfe-Ausstattung, Notfallplan.',
      'Aufsichtspflicht gilt durchgehend – auch nachts.',
      'Kinderschutz: Vier-Augen-Prinzip, geschulte Betreuer, klare Regeln.',
      '<b>Baden:</b> Ertrinken passiert leise – Aufsicht, Zählappelle, Rettungsmittel.',
      'Typische Gefahren: Lagerfeuer, Küche, Sturm, Hitze, Ausflüge, Heimweh.',
      'Bei Vorfällen: versorgen, Eltern informieren, dokumentieren, melden.'),
  ],
},

];
