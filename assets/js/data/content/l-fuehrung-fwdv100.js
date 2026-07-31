/* =========================================================================
   MODUL L — Führung & Leitung im Einsatz (FwDV 100)
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls L.

   Fachliche Grundlage: FwDV 100 (Führung und Leitung im Einsatz),
   FwDV 3, Landesvorschriften zur Einsatzleitung und zum Katastrophen-
   schutz. Bezeichnungen der Führungsorganisation weichen zwischen den
   Ländern ab – maßgeblich ist die bei dir eingeführte Fassung.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_L = [

/* ---------------------------------------------------------------- L1 ---- */
{
  id: 'l1', title: 'Führungssystem & Führungsvorgang', duration: 28,
  blocks: [
    P('An einer Einsatzstelle passieren viele Dinge gleichzeitig, Informationen sind lückenhaft, die Lage ändert sich, und trotzdem müssen Entscheidungen fallen. Führung ist die Methode, mit der aus dieser Unordnung geordnetes Handeln wird. Die FwDV 100 beschreibt dafür kein Talent, sondern ein <b>Handwerk</b> – erlernbar, wiederholbar und unter Stress abrufbar.'),

    H2('was', 'Was Führung bedeutet'),
    DEF('Führung', 'Die zielgerichtete Einflussnahme auf Menschen zur Erfüllung eines Auftrags. Führung besteht aus zwei untrennbaren Teilen: der <b>fachlichen</b> Seite – was ist zu tun, mit welchen Mitteln – und der <b>menschlichen</b> Seite – Motivation, Vertrauen, Fürsorge. Wer nur eine der beiden beherrscht, führt nicht vollständig.'),
    P('Führung im Feuerwehreinsatz hat eine Besonderheit, die sie von fast jeder anderen Führungsaufgabe unterscheidet: Sie findet unter <b>Zeitdruck</b>, bei <b>unvollständiger Information</b> und mit <b>Gefahr für die Geführten</b> statt. Genau deshalb ist ein methodisches Gerüst nötig – Improvisation reicht nicht.'),

    H2('system', 'Das Führungssystem'),
    P('Die FwDV 100 fasst Führung in einem System aus drei Komponenten zusammen, die zusammenwirken müssen. Fällt eine aus, funktioniert das Ganze nicht.'),
    TBL(['Komponente', 'Beantwortet', 'Beispiele'],[
      ['Führungsorganisation', 'Wer führt wen? Wie ist die Führung aufgebaut?', 'Führungsstufen, Einsatzabschnitte, Unterstellungsverhältnisse, Stab'],
      ['Führungsvorgang', 'Wie wird geführt? Nach welcher Methode?', 'Lagefeststellung, Planung, Befehlsgebung als Regelkreis'],
      ['Führungsmittel', 'Womit wird geführt?', 'Funk, Lagekarte, Führungsassistenten, Einsatztagebuch, IT'],
    ]),
    CO('info', 'Ein einfaches Bild', 'Die Führungsorganisation ist das Gerüst, der Führungsvorgang der Arbeitsablauf und die Führungsmittel das Werkzeug. Ein guter Handwerker braucht alle drei – aber das Werkzeug allein macht noch keine gute Arbeit.'),

    H2('vorgang', 'Der Führungsvorgang'),
    P('Der Führungsvorgang ist das Herzstück der FwDV 100. Er beschreibt Führung als <b>Regelkreis</b>, der ununterbrochen durchlaufen wird, solange der Einsatz läuft – nicht als einmalige Abfolge zu Beginn.'),
    FIG('fuehrungsvorgang', 'Der Führungsvorgang als Regelkreis – er wird durchlaufen, solange der Einsatz läuft.'),
    STEPS(
      '<b>Lagefeststellung:</b> Erkunden und Kontrollieren. Was ist passiert, was droht, was hat sich seit der letzten Runde geändert?',
      '<b>Planung:</b> Die Lage beurteilen, Handlungsmöglichkeiten abwägen und einen Entschluss fassen.',
      '<b>Befehlsgebung:</b> Den Entschluss in klare, vollständige Aufträge übersetzen und erteilen.',
      '<b>Zurück zur Lagefeststellung:</b> Wirkung kontrollieren, neue Meldungen aufnehmen, nachsteuern.'),
    P('Die Kontrolle ist dabei kein Anhängsel, sondern der Punkt, an dem sich gute von schlechter Führung unterscheidet. Wer einen Befehl gibt und dann annimmt, dass er wie geplant wirkt, führt blind. Wer nachfragt, beobachtet und Rückmeldungen einholt, erkennt Abweichungen, solange sie noch korrigierbar sind.'),
    CO('warn', 'Der häufigste Führungsfehler', 'Im Regelkreis stecken zu bleiben – meist in der Lagefeststellung. Führungskräfte, die immer weiter erkunden, weil sie noch keine vollständige Information haben, treffen irgendwann gar keine Entscheidung mehr. Der Regelkreis ist zum Durchlaufen gedacht, nicht zum Verweilen.'),

    H2('lagefeststellung', 'Lagefeststellung'),
    P('Die Lagefeststellung liefert die Grundlage jeder Entscheidung. Sie speist sich aus mehreren Quellen, die eine Führungskraft aktiv nutzen muss.'),
    KF(
      '<b>Eigene Erkundung:</b> Rundgang, Blick von oben, Blick auf die Rückseite – niemals nur die Vorderseite beurteilen.',
      '<b>Meldungen der Trupps:</b> die wichtigste Quelle für alles, was man selbst nicht sieht.',
      '<b>Auskünfte:</b> Betroffene, Anwohner, Betriebsangehörige, Objektkundige.',
      '<b>Unterlagen:</b> Feuerwehrpläne, Beförderungspapiere, Sicherheitsdatenblätter.',
      '<b>Fachberatung:</b> Chemie, Statik, Energieversorger, Bahn.',
      '<b>Eigene Erfahrung und Objektkenntnis.</b>'),
    P('Wichtig ist die Unterscheidung zwischen <b>Beobachtung</b> und <b>Vermutung</b>. „Aus dem zweiten Obergeschoss dringt dichter Rauch" ist eine Beobachtung. „Im zweiten Obergeschoss brennt es" ist eine Vermutung – möglicherweise richtig, möglicherweise zieht der Rauch nur dorthin. Wer beides vermischt, baut seine Entscheidung auf Sand.'),

    H2('beurteilung', 'Die Beurteilung der Lage'),
    P('Die Beurteilung ist der eigentliche Denkschritt. Sie führt von der Frage „Was ist?" zur Frage „Was tue ich?". Vier Kernfragen strukturieren sie.'),
    KF(
      '<b>Welche Gefahren bestehen – und für wen?</b> Menschen, Tiere, Einsatzkräfte, Umwelt, Sachwerte.',
      '<b>Welche Kräfte und Mittel habe ich – und was fehlt mir?</b> Personal, Fahrzeuge, Wasser, Zeit.',
      '<b>Welche Handlungsmöglichkeiten gibt es – mit welchen Vor- und Nachteilen?</b>',
      '<b>Wofür entscheide ich mich – und warum?</b> Der Entschluss mit seiner Begründung.'),
    P('Zur vollständigen Gefahrenbetrachtung dient das Merkschema der <b>Gefahren der Einsatzstelle</b>. Es zwingt dazu, auch an die Gefahren zu denken, die gerade nicht ins Auge springen.'),
    MNE([{l:'A',w:'Atemgifte'},{l:'A',w:'Angstreaktion'},{l:'A',w:'Ausbreitung'},{l:'A',w:'Atomare Gefahren'},{l:'C',w:'Chemische Stoffe'},{l:'E',w:'Erkrankung'},{l:'E',w:'Explosion'},{l:'E',w:'Elektrizität'},{l:'E',w:'Einsturz'}],
      '4 A – 1 C – 4 E: Für jede dieser Gefahren prüft die Führungskraft, wer bedroht ist, und leitet daraus Maßnahmen ab.'),

    H2('entschluss', 'Der Entschluss'),
    P('Am Ende der Planung steht der Entschluss – eine bewusste Entscheidung für einen Weg und gegen andere. Er wird in einem Satz formuliert und beantwortet, <b>was</b> erreicht werden soll, nicht wie im Detail gearbeitet wird.'),
    P('Ein Beispiel: „Ich rette die Personen aus dem ersten Obergeschoss über den Treppenraum, verhindere die Brandausbreitung auf das Nachbargebäude und bekämpfe den Brand von innen." Aus diesem Entschluss lassen sich anschließend die einzelnen Befehle ableiten.'),
    CO('tip', 'Führen heißt entscheiden', 'Eine klare, zügige Entscheidung auf Grundlage von etwa 80 Prozent der Information ist besser als die perfekte Entscheidung, die zehn Minuten zu spät kommt. Wichtig ist nur, den Entschluss laufend an der Lage zu überprüfen – dafür ist der Regelkreis da.'),

    H2('befehl', 'Die Befehlsgebung'),
    P('Der Entschluss wird in Befehle übersetzt. Der Aufbau ist derselbe wie im Löscheinsatz und aus <b>Modul E</b> bekannt: Einheit – Auftrag – Mittel – Ziel – Weg. Bei größeren Lagen kommt der ausführlichere <b>Einsatzbefehl</b> hinzu, der zusätzlich Lage, Absicht, Aufträge, Versorgung und Führungsverbindung enthält.'),
    KF(
      'Vollständig: Wer, was, womit, wozu, wie.',
      'Klar: eine Aussage, keine Alternativen im selben Satz.',
      'Empfänger nennen und Verstehen sicherstellen.',
      'Aufträge statt Einzelanweisungen – die Ausführung dem Fachmann überlassen.',
      'Immer den Zweck mitgeben, damit bei Lageänderung sinnvoll gehandelt werden kann.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Führungssystem = Führungsorganisation + Führungsvorgang + Führungsmittel.',
      'Führungsvorgang als Regelkreis: Lagefeststellung → Planung → Befehlsgebung → Kontrolle.',
      'Der Regelkreis wird durchlaufen, nicht bewohnt – Entscheidungsstau ist der häufigste Fehler.',
      'Beobachtung und Vermutung sauber trennen.',
      'Beurteilung über vier Kernfragen; Gefahren nach 4 A – 1 C – 4 E prüfen.',
      'Der Entschluss sagt, <b>was</b> erreicht werden soll.',
      'Befehle vollständig, klar, mit Zweck und als Auftrag formuliert.'),
  ],
},

/* ---------------------------------------------------------------- L2 ---- */
{
  id: 'l2', title: 'Führungsstufen & Führungsorganisation', duration: 28,
  blocks: [
    P('Ein Zimmerbrand wird von einem Gruppenführer geführt, der alles selbst überblickt. Eine Hochwasserlage über drei Tage braucht einen Stab, Schichtwechsel und eine Struktur, die niemand mehr im Kopf behält. Zwischen diesen Extremen liegt ein System, das mit der Lage mitwächst: die Führungsstufen der FwDV 100.'),

    H2('stufen', 'Die vier Führungsstufen'),
    P('Die Führungsstufen beschreiben, <b>wie viel Unterstützung</b> die Führungskraft benötigt, um ihre Aufgabe zu bewältigen. Sie hängen nicht in erster Linie von der Zahl der Fahrzeuge ab, sondern von der Komplexität der Lage.'),
    TBL(['Stufe', 'Bezeichnung', 'Typischerweise', 'Führung durch'],[
      ['A', 'Führen ohne Führungsunterstützung', 'ein Einsatz mit einer taktischen Einheit', 'Gruppen- oder Staffelführer, selbstständiger Truppführer'],
      ['B', 'Führen mit Führungsassistenten', 'mehrere Einheiten, ein Zug', 'Zugführer mit Assistenten im Zugtrupp'],
      ['C', 'Führen mit einer Führungsgruppe', 'mehrere Einheiten, auch verschiedener Fachdienste', 'Verbandsführer mit Führungsgruppe'],
      ['D', 'Führen mit einer Führungsstaffel und Stab', 'Großschadenlage, lange Dauer, viele Beteiligte', 'Einsatzleiter mit Führungsstab'],
    ]),
    FIG('fuehrungsstufen', 'Die vier Führungsstufen A bis D wachsen mit der Komplexität der Lage (FwDV 100).'),
    CO('info', 'Die Stufe wird nicht ausgerufen', 'Man wechselt nicht auf Zuruf von B nach C. Die Stufe ergibt sich daraus, welche Unterstützung tatsächlich aufgebaut wird. Die eigentliche Führungsleistung besteht darin, den Bedarf <b>rechtzeitig</b> zu erkennen – also die Führungsunterstützung anzufordern, bevor man ertrinkt, nicht danach.'),

    H2('spanne', 'Die Führungsspanne'),
    DEF('Führungsspanne', 'Die Zahl der Untergebenen, die eine Führungskraft unmittelbar und wirksam führen kann. Erfahrungsgemäß liegt sie bei etwa <b>drei bis fünf</b> unterstellten Einheiten oder Abschnitten. Wird sie überschritten, sinkt die Führungsqualität rapide: Meldungen werden nicht mehr verarbeitet, Aufträge nicht kontrolliert, Kräfte vergessen.'),
    P('Die Führungsspanne ist der eigentliche Grund für die gesamte Führungsorganisation. Wer als Einsatzleiter zwölf Fahrzeuge direkt führen will, scheitert – nicht aus Unfähigkeit, sondern aus Arithmetik. Die Antwort lautet in jedem Fall: <b>gliedern und delegieren</b>.'),

    H2('abschnitte', 'Einsatzabschnitte'),
    P('Wächst eine Lage über die Führungsspanne hinaus, wird sie in <b>Einsatzabschnitte</b> gegliedert. Jeder Abschnitt bekommt einen eigenverantwortlichen Leiter, einen klaren Auftrag und eigene Kräfte.'),
    TBL(['Gliederungsart', 'Prinzip', 'Beispiel'],[
      ['räumlich', 'nach Bereichen der Einsatzstelle', 'Abschnitt Nord, Abschnitt Süd, Abschnitt Rückseite'],
      ['nach Aufgabe', 'nach Art der Maßnahme', 'Menschenrettung, Brandbekämpfung, Wasserversorgung, Riegelstellung'],
      ['nach Objekt', 'nach betroffenen Gebäuden oder Anlagen', 'Halle 1, Halle 2, Verwaltungsgebäude'],
      ['nach Fachdienst', 'nach beteiligter Organisation', 'Feuerwehr, Rettungsdienst, THW'],
    ]),
    KF(
      'Der Abschnittsleiter führt selbstständig im Rahmen seines Auftrags.',
      'Die Einsatzleitung führt die <b>Abschnittsleiter</b>, nicht einzelne Trupps.',
      'Jeder Abschnitt hat einen klaren Auftrag, eigene Kräfte und eine Funkverbindung.',
      'Abschnittsgrenzen müssen eindeutig sein – Überschneidungen erzeugen Doppelbefehle.',
      'Abschnitte werden gebildet, bevor die Führungsspanne gesprengt ist.'),
    CO('warn', 'Der Rückfall in die Detailführung', 'Eine häufige Falle: Der Einsatzleiter greift durch und befiehlt einem einzelnen Trupp direkt, weil es gerade schneller geht. Damit hat er den Abschnittsleiter übergangen, der nun nicht mehr weiß, wo seine Kräfte sind. Was einmal delegiert wurde, bleibt delegiert.'),

    H2('einheit', 'Einheit der Führung'),
    CO('danger', 'Ein Vorgesetzter je Einsatzkraft', 'Jede Einsatzkraft hat zu jedem Zeitpunkt <b>genau einen</b> Vorgesetzten. Widersprüchliche Befehle aus zwei Richtungen sind eine der zuverlässigsten Ursachen für Unfälle und Chaos. Wer einer fremden Einheit etwas mitteilen will, geht über deren Führungskraft – nicht direkt an den Trupp.'),
    P('Das gilt auch dann, wenn eine dienstgradhöhere Person an der Einsatzstelle eintrifft. Die Einsatzleitung wird ausdrücklich und für alle erkennbar <b>übergeben</b> – mit einer Lageübergabe, die den bisherigen Verlauf, die eingesetzten Kräfte, die laufenden Aufträge und die offenen Punkte enthält. Eine stillschweigende Übernahme ist gefährlich, weil dann niemand weiß, wer führt.'),

    H2('stab', 'Der Führungsstab'),
    P('Bei Großschadenlagen unterstützt ein <b>Führungsstab</b> die Einsatzleitung. Er ist nach Sachgebieten gegliedert, damit jede Aufgabe einen eindeutigen Verantwortlichen hat.'),
    TBL(['Sachgebiet', 'Aufgabe'],[
      ['S1', 'Personal und innerer Dienst – Kräfteübersicht, Ablösung, Verpflegungsplanung'],
      ['S2', 'Lage – Lagedarstellung, Lagekarte, Dokumentation, Einsatztagebuch'],
      ['S3', 'Einsatz – Planung und Führung der Maßnahmen, Kernstück des Stabes'],
      ['S4', 'Versorgung und Logistik – Material, Betriebsstoffe, Verpflegung, Unterkunft'],
      ['S5', 'Presse- und Medienarbeit – Öffentlichkeit, Warnung, Information'],
      ['S6', 'Information und Kommunikation – Funk, IT, Verbindungen'],
    ]),
    P('Ergänzt wird der Stab durch <b>Fachberater</b> – Chemie, Statik, Energieversorger, Bahn, Umweltbehörde – und durch <b>Verbindungspersonen</b> anderer Organisationen. Sie haben kein Weisungsrecht, sondern liefern Fachwissen und stellen die Verbindung zu ihrer Organisation her.'),

    H2('stabsarten', 'Operativ-taktisch und administrativ-organisatorisch'),
    DEF('Zwei Stäbe, zwei Aufgaben', 'Der <b>operativ-taktische</b> Stab – die Einsatzleitung – führt den Einsatz an der Schadenstelle: Kräfte, Maßnahmen, Taktik. Der <b>administrativ-organisatorische</b> Stab beziehungsweise Verwaltungs- oder Krisenstab der Behörde trifft die übergeordneten Entscheidungen: Ressourcen, rechtliche Anordnungen, Evakuierungen, Information der Bevölkerung, Finanzen.'),
    P('Beide arbeiten eng zusammen und tauschen laufend Lageinformationen aus, bleiben aber getrennt. Der Grund ist praktisch: Ein Einsatzleiter, der gleichzeitig über die Sperrung einer Bundesstraße, die Unterbringung von 300 Evakuierten und die Brandbekämpfung entscheiden soll, kann keines davon gut machen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Führungsstufen A bis D beschreiben den Umfang der Führungsunterstützung.',
      'A ohne Unterstützung, B mit Führungsassistenten, C mit Führungsgruppe, D mit Stab.',
      'Führungsunterstützung rechtzeitig anfordern, nicht erst bei Überlastung.',
      '<b>Führungsspanne</b> etwa drei bis fünf unterstellte Einheiten.',
      'Einsatzabschnitte räumlich, nach Aufgabe, nach Objekt oder nach Fachdienst bilden.',
      'Die Einsatzleitung führt Abschnittsleiter, nicht einzelne Trupps.',
      '<b>Einheit der Führung</b>: genau ein Vorgesetzter je Einsatzkraft; Übergabe immer ausdrücklich.',
      'Stab mit S1 bis S6; operativ-taktischer und Verwaltungsstab bleiben getrennt.'),
  ],
},

/* ---------------------------------------------------------------- L3 ---- */
{
  id: 'l3', title: 'Führungsmittel & Führungsvorgang in der Praxis', duration: 24,
  blocks: [
    P('Eine Führungskraft kann sich nicht auf ihr Gedächtnis verlassen. Nach zwanzig Minuten Einsatz sind ein Dutzend Trupps unterwegs, es gab dreißig Funksprüche, vier Nachforderungen und zwei Lageänderungen. Führungsmittel sind die Werkzeuge, die diese Menge beherrschbar machen – und die im Nachhinein belegen, was wann entschieden wurde.'),

    H2('mittel', 'Die Führungsmittel'),
    TBL(['Gruppe', 'Beispiele', 'Zweck'],[
      ['Kommunikationsmittel', 'Funk, Telefon, Melder, Handzeichen', 'Befehle geben, Meldungen empfangen'],
      ['Führungsassistenten', 'Melder, Führungsassistent, Stabsmitglieder', 'entlasten die Führungskraft von Nebenaufgaben'],
      ['Darstellungsmittel', 'Lagekarte, taktische Zeichen, Kräfteübersicht, Whiteboard', 'gemeinsames Lagebild schaffen'],
      ['Dokumentationsmittel', 'Einsatztagebuch, Atemschutzüberwachung, Protokolle', 'Nachvollziehbarkeit und Rechtssicherheit'],
      ['Einsatzführungssysteme', 'digitale Lagedarstellung, Kräftedisposition', 'Übersicht bei großen Lagen'],
      ['Unterlagen', 'Feuerwehrpläne, AAO, Karten, Nachschlagewerke', 'Objekt- und Fachwissen verfügbar machen'],
    ]),
    CO('info', 'Werkzeuge ersetzen kein Denken', 'Ein Einsatzführungssystem trifft keine Entscheidung, und eine perfekt gepflegte Lagekarte löscht keinen Brand. Führungsmittel machen das Führen schneller und sicherer – sie nehmen der Führungskraft aber weder die Beurteilung noch die Verantwortung ab.'),

    H2('lagekarte', 'Lagekarte und taktische Zeichen'),
    P('Die Lagekarte ist das gemeinsame Gedächtnis der Einsatzleitung. Sie zeigt auf einen Blick, was wo passiert, wer wo eingesetzt ist und welche Bereiche noch offen sind. Ihr Wert steigt exponentiell mit der Einsatzdauer – spätestens bei einem Führungswechsel ist sie unersetzlich.'),
    P('Damit alle dasselbe darin lesen, werden <b>taktische Zeichen</b> verwendet: einheitlich genormte Symbole für Einheiten, Fahrzeuge, Führungsstellen, Gefahren und Maßnahmen. Wer sie beherrscht, versteht die Lagekarte einer fremden Wehr sofort.'),
    KF(
      'Einheiten und Fahrzeuge mit Standort und Auftrag eintragen.',
      'Gefahrenbereiche, Absperrungen und Zugänge kennzeichnen.',
      'Wasserentnahmestellen und Bereitstellungsräume markieren.',
      'Einsatzabschnitte mit Grenzen und Leitern eintragen.',
      'Uhrzeit an wesentliche Eintragungen schreiben – der Verlauf ist wichtiger als der Zustand.',
      'Nordrichtung und Windrichtung immer vermerken.'),

    H2('tagebuch', 'Das Einsatztagebuch'),
    P('Das Einsatztagebuch hält chronologisch fest, was gemeldet, entschieden und befohlen wurde. Es dient drei Zwecken: der Führung im laufenden Einsatz, der Übergabe bei Ablösung und der Nachvollziehbarkeit im Nachhinein – bei Unfalluntersuchungen, Versicherungsfragen oder Ermittlungen.'),
    CO('tip', 'Was hineingehört', 'Uhrzeit, Ereignis oder Meldung, getroffene Entscheidung und der daraus folgende Auftrag. Knapp, sachlich, ohne Bewertung. Wer im Zweifel ist, ob etwas hineingehört, schreibt es hinein – nachträglich lässt sich nichts ergänzen, was niemand notiert hat.'),

    H2('praxis', 'Der Führungsvorgang unter Zeitdruck'),
    P('In der Theorie ist der Führungsvorgang ein ausführlicher Denkprozess. In der Realität der ersten fünf Minuten läuft er in Sekunden ab. Dafür haben sich Kurzschemata bewährt, die den vollständigen Vorgang komprimieren, ohne etwas Wesentliches wegzulassen.'),
    MNE([{l:'G',w:'Gefahren'},{l:'A',w:'Aufgaben'},{l:'M',w:'Mittel'},{l:'E',w:'Entschluss'}],
      'Welche Gefahren bestehen für wen? Welche Aufgaben folgen daraus? Welche Mittel setze ich ein? Entschluss fassen, befehlen – und die Wirkung kontrollieren.'),
    P('Der erste Entschluss muss nicht der beste aller möglichen sein. Er muss <b>tragfähig</b> sein: die Menschenrettung einleiten, die Ausbreitung begrenzen und die Kräfte nicht gefährden. Verfeinert wird er in der nächsten Runde des Regelkreises, wenn mehr Informationen vorliegen.'),
    DEF('Beurteilung der Lage', 'Aus Erkundung und Erfahrung die möglichen Handlungsoptionen abwägen – nach Nutzen, Risiko, Kräftebedarf und Zeit – und einen begründeten Entschluss fassen. Der Grundsatz „kein Plan überlebt den ersten Kontakt mit der Lage" ist keine Ausrede für Planlosigkeit, sondern die Begründung für das laufende Nachsteuern.'),

    H2('nachforderung', 'Rechtzeitig nachfordern'),
    P('Die häufigste Fehleinschätzung unerfahrener Führungskräfte ist der Kräftebedarf. Zwischen Nachforderung und Eintreffen liegen bei Freiwilligen Feuerwehren schnell zwanzig Minuten oder mehr – Zeit, die im Einsatz nirgends aufgeholt wird.'),
    KF(
      'Lieber zu früh nachfordern – Kräfte lassen sich zurückschicken, Zeit nicht.',
      'Beim Nachfordern konkret werden: welche Einheit, wofür, wohin.',
      'Bereitstellungsraum benennen, damit nachrückende Kräfte nicht die Einsatzstelle verstopfen.',
      'An Ablösung denken – ein Einsatz über zwei Stunden braucht frische Kräfte.',
      'Sonderkräfte haben lange Anfahrten: Drehleiter, Gefahrgut, Fachberater früh alarmieren.',
      'Auch an Logistik denken: Atemluft, Betriebsstoffe, Verpflegung, Beleuchtung.'),

    H2('uebergabe', 'Führungswechsel und Ablösung'),
    P('Bei längeren Einsätzen wechselt die Führung. Dieser Moment ist besonders fehleranfällig, weil Wissen verloren geht, das nirgends aufgeschrieben ist. Eine strukturierte Übergabe verhindert das.'),
    STEPS(
      'Lage schildern: Was ist passiert, was ist der aktuelle Stand?',
      'Eigener Entschluss und Absicht: Was soll erreicht werden?',
      'Eingesetzte Kräfte: wer ist wo, mit welchem Auftrag, seit wann?',
      'Offene Punkte und Gefahren: Was ist noch ungeklärt, worauf ist zu achten?',
      'Nachgeforderte Kräfte und erwartete Eintreffzeiten.',
      'Verbindungen: Funkkanäle, Ansprechpartner, Behörden.',
      'Übergabe ausdrücklich erklären und allen Beteiligten bekannt geben.'),
    CO('danger', 'Übergabe ohne Ansage', 'Wenn nicht klar ist, wer führt, führt niemand. Ein Führungswechsel wird laut, eindeutig und über Funk an alle Abschnitte kommuniziert – nicht durch ein Nicken zwischen zwei Führungskräften. Die Atemschutzüberwachung und die Leitstelle gehören ausdrücklich dazu.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Führungsmittel: Kommunikation, Assistenten, Darstellung, Dokumentation, IT, Unterlagen.',
      'Werkzeuge ersetzen kein Denken und keine Verantwortung.',
      'Lagekarte mit taktischen Zeichen schafft ein gemeinsames Lagebild.',
      'Einsatztagebuch: Uhrzeit, Meldung, Entscheidung, Auftrag – knapp und sachlich.',
      'Kurzschema <b>GAME</b>: Gefahren, Aufgaben, Mittel, Entschluss.',
      'Der erste Entschluss muss tragfähig sein, nicht perfekt.',
      'Früh nachfordern – Kräfte lassen sich zurückschicken, Zeit nicht.',
      'Führungswechsel strukturiert übergeben und laut bekannt geben.'),
  ],
},

/* ---------------------------------------------------------------- L4 ---- */
{
  id: 'l4', title: 'Zusammenwirken mit anderen Organisationen', duration: 22,
  blocks: [
    P('Kaum eine größere Einsatzstelle gehört der Feuerwehr allein. Rettungsdienst, Polizei, THW, Energieversorger, Behörden und Betreiber arbeiten gleichzeitig am selben Ort, mit unterschiedlichen Aufträgen, unterschiedlichen Befugnissen und unterschiedlicher Sprache. Diese Lektion behandelt, wie daraus Zusammenarbeit statt Nebeneinander wird.'),

    H2('partner', 'Wer typischerweise beteiligt ist'),
    TBL(['Partner', 'Auftrag', 'Schnittstelle zur Feuerwehr'],[
      ['Rettungsdienst', 'medizinische Versorgung und Transport', 'Patientenübergabe, gemeinsame technische Rettung, Bereitstellungsraum'],
      ['Polizei', 'Gefahrenabwehr im Zuständigkeitsbereich, Absperrung, Verkehr, Ermittlung', 'Absperrgrenzen, Spurensicherung, Personenfeststellung'],
      ['THW', 'technische Großhilfe, Statik, Räumung, Beleuchtung, Logistik', 'Fachberatung, Abschnittsbildung, Gerätestellung'],
      ['Energieversorger', 'Strom, Gas, Fernwärme abschalten und sichern', 'Freischalten, Fachberatung, Freigabe'],
      ['Bahn', 'Sperrung, Erdung, Fahrleitung', 'Bahnerdung, Zugang zum Gleisbereich'],
      ['Untere Wasserbehörde, Umweltamt', 'Umweltschutz, Beprobung, Entsorgung', 'Löschwasserrückhaltung, Freigabe'],
      ['Verwaltungs- oder Krisenstab', 'übergeordnete Entscheidungen, Bevölkerung', 'Lagemeldungen, Warnung, Evakuierung'],
      ['Hilfsorganisationen', 'Betreuung, Verpflegung, Unterbringung', 'Sammelstellen, Versorgung von Betroffenen'],
    ]),
    CO('info', 'Niemand ist dem anderen unterstellt', 'Die beteiligten Organisationen führen jeweils ihre eigenen Kräfte. Es gibt keine automatische Weisungsbefugnis der Feuerwehr gegenüber Polizei oder Rettungsdienst – und umgekehrt genauso wenig. Zusammenarbeit funktioniert über <b>Abstimmung</b> und über die Führungskräfte, nicht über Befehle quer durch die Organisationen.'),

    H2('abstimmung', 'Wie Abstimmung gelingt'),
    P('Die häufigsten Reibungen entstehen nicht aus bösem Willen, sondern aus fehlender Kommunikation und unterschiedlichen Zielen. Ein paar Grundregeln lösen die meisten davon.'),
    KF(
      '<b>Früh Kontakt aufnehmen:</b> Die Führungskräfte der Organisationen finden sich, bevor es klemmt.',
      '<b>Einen gemeinsamen Ort schaffen:</b> ein Führungsfahrzeug, ein Tisch, eine Lagekarte für alle.',
      '<b>Aufträge und Grenzen klären:</b> Wer macht was, wo hört meine Zuständigkeit auf?',
      '<b>Gemeinsame Lagebesprechungen</b> in festen Abständen, kurz und ergebnisorientiert.',
      '<b>Eine gemeinsame Sprache verwenden:</b> Fachjargon der eigenen Organisation vermeiden.',
      '<b>Verbindungspersonen einsetzen</b>, wenn die Lage komplex wird.',
      '<b>Funkverbindung klären:</b> Wer erreicht wen auf welchem Weg?'),
    CO('warn', 'Der klassische Konflikt', 'Die Feuerwehr will die Person schnell aus dem Fahrzeug befreien, der Rettungsdienst will sie schonend befreien, die Polizei will die Unfallstelle unverändert dokumentieren. Alle drei haben recht – aus ihrer Sicht. Gelöst wird das nur durch ein gemeinsames Gespräch am Fahrzeug, in dem eine Priorität festgelegt wird. Meist ist es die des Patienten.'),

    H2('polizei', 'Besonderheiten im Umgang mit der Polizei'),
    P('Zwei Punkte kommen regelmäßig vor und sollten sitzen. Erstens: <b>Spurensicherung</b>. Bei Verdacht auf Brandstiftung oder Straftaten wird die Einsatzstelle so wenig wie möglich verändert, sobald die Gefahrenabwehr das zulässt. Was bewegt wurde, wird der Polizei mitgeteilt. Zweitens: <b>Zuständigkeit für Absperrung und Verkehr</b> liegt bei der Polizei – die Feuerwehr legt aber den Gefahrenbereich fest, weil sie ihn fachlich beurteilen kann.'),
    P('Bei einem Todesfall gilt: Der Rettungsdienst beziehungsweise Notarzt stellt den Tod fest, die Polizei übernimmt die weitere Bearbeitung. Die Feuerwehr verändert an der Auffindesituation nichts mehr, sobald die Rettung abgeschlossen ist.'),

    H2('rettungsdienst', 'Besonderheiten im Umgang mit dem Rettungsdienst'),
    P('Der Rettungsdienst hat bei der medizinischen Versorgung die fachliche Führung – die Feuerwehr schafft die Voraussetzungen dafür. In der Praxis heißt das: Die Feuerwehr befreit, sichert, beleuchtet, trägt und schützt; der Rettungsdienst behandelt.'),
    KF(
      'Zugang zum Patienten schaffen und offen halten.',
      'Patientenschutz gegen Splitter, Lärm, Wetter und Kälte sicherstellen.',
      'Rettungswege für die Trage vorbereiten, bevor sie gebraucht werden.',
      'Beim Rettungsdienst nachfragen, wie viel Zeit für die Befreiung bleibt.',
      'Strukturierte Übergabe der Informationen: Auffindesituation, Zeiten, Beobachtungen.',
      'Landeplatz für den Rettungshubschrauber sichern, wenn angefordert.'),

    H2('grosslage', 'Bei Großlagen: Struktur schlägt Improvisation'),
    P('Je größer die Lage, desto wichtiger wird die Struktur – und desto weniger funktioniert das Zurufprinzip. Bewährte Elemente sind ein gemeinsamer <b>Bereitstellungsraum</b>, an dem alle nachrückenden Kräfte zunächst gesammelt und dann gezielt eingesetzt werden, eine gemeinsame <b>Lagekarte</b>, feste <b>Lagebesprechungen</b> und eine klare <b>Verbindungsstruktur</b> zwischen den Organisationen.'),
    CO('tip', 'Der Bereitstellungsraum ist unterschätzt', 'Nachrückende Kräfte, die direkt zur Einsatzstelle fahren, verstopfen Zufahrten und stehen ungeführt herum. Ein früh eingerichteter Bereitstellungsraum in ausreichendem Abstand löst dieses Problem vollständig – und gibt der Einsatzleitung eine Reserve, über die sie tatsächlich verfügen kann.'),

    H2('vorher', 'Zusammenarbeit beginnt vor dem Einsatz'),
    P('Der wirksamste Beitrag zu guter Zusammenarbeit wird nicht im Einsatz geleistet, sondern davor: gemeinsame Übungen, gegenseitige Besuche, gemeinsame Objektbegehungen und persönliche Bekanntschaft der Führungskräfte. Wer den Rettungsdienstleiter des Kreises schon kennt, kommuniziert an der Einsatzstelle völlig anders als jemand, der ihm zum ersten Mal begegnet.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Jede Organisation führt ihre eigenen Kräfte – keine gegenseitige Weisungsbefugnis.',
      'Zusammenarbeit läuft über Abstimmung zwischen den Führungskräften.',
      'Früh Kontakt aufnehmen, gemeinsamen Ort und gemeinsame Lagekarte schaffen.',
      'Feste, kurze Lagebesprechungen statt Zurufprinzip.',
      'Polizei: Spurensicherung beachten, Absperrung ist ihre Zuständigkeit, Gefahrenbereich unsere.',
      'Rettungsdienst führt medizinisch, Feuerwehr schafft die Voraussetzungen.',
      'Bereitstellungsraum früh einrichten.',
      'Gute Zusammenarbeit entsteht durch gemeinsames Üben vor dem Einsatz.'),
  ],
},

/* ---------------------------------------------------------------- L5 ---- */
{
  id: 'l5', title: 'Führungsverhalten, Stress & Entscheidungen', duration: 22,
  blocks: [
    P('Die FwDV 100 beschreibt Methoden. Was sie nicht beschreiben kann, ist der Mensch, der sie anwendet – unter Zeitdruck, mit Verantwortung für Leben und mit allen Begrenzungen, die Stress mit sich bringt. Diese Lektion behandelt die menschliche Seite der Führung, die in der Praxis mindestens genauso oft über den Ausgang entscheidet wie die fachliche.'),

    H2('verhalten', 'Wie Führungskräfte wirken'),
    P('Eine Führungskraft wird beobachtet – ständig und genauer, als ihr bewusst ist. Ihr Verhalten überträgt sich unmittelbar auf die Einheit: Hektik erzeugt Hektik, Ruhe erzeugt Ruhe. Das ist kein Charakterthema, sondern ein Führungsinstrument.'),
    KF(
      '<b>Vorbild sein:</b> Ruhe, Sicherheit im Auftreten, Fairness, konsequente Eigensicherung.',
      '<b>Klar kommunizieren:</b> knapp, eindeutig, ohne Ironie und ohne Schuldzuweisung.',
      '<b>Aufträge kontrollieren:</b> Vertrauen ist gut, Rückmeldung einholen ist Führung.',
      '<b>Verantwortung übernehmen:</b> nach außen für die Einheit einstehen, Kritik intern klären.',
      '<b>Kräfte schonen:</b> Ablösung, Pausen, Getränke, Wärme oder Schatten organisieren.',
      '<b>Zuhören:</b> Der Trupp am Rohr sieht Dinge, die die Führungskraft nicht sehen kann.'),
    CO('tip', 'Ruhe ist ansteckend', 'Wer als Führungskraft langsam spricht, bewusst atmet und sich nicht in Bewegung auflöst, senkt das Stressniveau der gesamten Einheit messbar. Das ist keine Schauspielerei, sondern eine erlernbare Technik – und sie wirkt auch auf die Führungskraft selbst zurück.'),

    H2('stress', 'Was Stress mit der Wahrnehmung macht'),
    P('Unter starkem Stress verändert sich die Informationsverarbeitung – bei jedem Menschen, unabhängig von Erfahrung und Willen. Wer diese Effekte kennt, kann gegensteuern.'),
    TBL(['Effekt', 'Was passiert', 'Gegenmaßnahme'],[
      ['Tunnelblick', 'Wahrnehmung verengt sich auf ein Detail', 'bewusst Abstand nehmen, Rundgang machen, Assistenten fragen'],
      ['Zeitverzerrung', 'Minuten fühlen sich wie Sekunden an – oder umgekehrt', 'feste Zeitmarken setzen, Zeit ansagen lassen'],
      ['Hörverlust', 'Meldungen kommen an, werden aber nicht verarbeitet', 'Rückfragen, wiederholen lassen, mitschreiben'],
      ['Fixierung', 'Festhalten an einem Plan trotz gegenteiliger Hinweise', 'aktiv nach Gegenargumenten fragen'],
      ['Handlungsdruck', 'Aktionismus statt Beurteilung', 'kurz innehalten, Regelkreis bewusst durchlaufen'],
      ['Übergehen von Bedenken', 'Widerspruch wird als Störung empfunden', 'Bedenken ausdrücklich einfordern'],
    ]),
    CO('danger', 'Der gefährlichste Effekt', 'Fixierung. Eine Führungskraft, die sich auf einen Plan festgelegt hat, blendet Hinweise aus, die dagegen sprechen – und merkt es nicht. Genau deshalb ist die Frage „Was spricht dagegen?" an den Führungsassistenten oder einen erfahrenen Kameraden ein so wirksames Werkzeug. Sie muss laut gestellt werden.'),

    H2('bedenken', 'Bedenken zulassen'),
    P('In der Luftfahrt hat die Erkenntnis, dass Untergebene ihre Bedenken aus Respekt vor der Hierarchie zurückhalten, zu einem eigenen Trainingskonzept geführt. Die Feuerwehr hat dieselbe Struktur – und dasselbe Risiko.'),
    KF(
      'Bedenken ausdrücklich erwünschen und aktiv danach fragen.',
      'Wer Bedenken äußert, wird nie dafür kritisiert – auch nicht, wenn sie unbegründet waren.',
      'Sicherheitsrelevante Einwände haben Vorrang vor dem Ablauf.',
      'Jede Einsatzkraft darf und muss bei erkannter Gefahr „Halt" rufen.',
      'Nach dem Einsatz besprechen, ob Bedenken zurückgehalten wurden – und warum.'),
    P('Der Aufwand dafür ist gering, der Nutzen erheblich. Ein Truppmann, der sagt „Chef, die Decke sieht komisch aus", liefert unter Umständen die Information, die den Einsatz sicher macht – aber nur, wenn er weiß, dass er das darf.'),

    H2('entscheidung', 'Entscheiden unter Unsicherheit'),
    P('Führungskräfte entscheiden nie mit vollständiger Information. Das ist kein Mangel, sondern die Natur der Sache. Die Kunst besteht darin, mit dem Verfügbaren tragfähig zu entscheiden und die Entscheidung offen für Korrekturen zu halten.'),
    STEPS(
      'Lage rasch erfassen – Erkundung, Meldungen, Objektwissen.',
      'Wesentliches vom Unwesentlichen trennen: Wo liegt der Schwerpunkt?',
      'Zwei bis drei Handlungsoptionen bilden – nicht nur eine.',
      'Optionen nach Nutzen, Risiko, Kräftebedarf und Zeit abwägen.',
      'Klar entscheiden, begründen und als Auftrag befehlen.',
      'Wirkung kontrollieren und bei Abweichung nachsteuern.'),
    CO('info', 'Lieber gut und rechtzeitig als perfekt und zu spät', 'Eine zügige, tragfähige Entscheidung schlägt die perfekte Entscheidung, die zu spät kommt. Der Regelkreis der FwDV 100 ist genau dafür gebaut: Er erlaubt es, früh zu handeln und später zu korrigieren, ohne das Gesicht zu verlieren. Eine Entscheidung zu ändern, weil sich die Lage geändert hat, ist Führungsstärke – nicht Schwäche.'),

    H2('fuersorge', 'Fürsorge als Führungsaufgabe'),
    P('Die Verantwortung einer Führungskraft endet nicht bei der Taktik. Sie umfasst die körperliche und psychische Unversehrtheit der ihr anvertrauten Menschen – im Einsatz und danach.'),
    KF(
      'Ablösung planen, bevor Erschöpfung sichtbar wird.',
      'Getränke, Verpflegung, Wärme oder Schatten organisieren.',
      'Auf Anzeichen von Überforderung achten und Kräfte notfalls herausnehmen.',
      'Junge und unerfahrene Kräfte gezielt begleiten.',
      'Nach belastenden Einsätzen die psychosoziale Notfallversorgung einbinden.',
      'Bei Verletzungen konsequent dokumentieren und den Durchgangsarzt einschalten.'),

    H2('nachbesprechung', 'Die Einsatznachbesprechung'),
    P('Die Nachbesprechung ist das Instrument, mit dem eine Wehr besser wird. Sie funktioniert nur, wenn sie sachlich bleibt und nicht zur Schuldsuche wird. Bewährt hat sich eine einfache Struktur, die auch bei kleinen Einsätzen in zehn Minuten machbar ist.'),
    STEPS(
      'Was war die Lage, und was haben wir getan? – gemeinsames Bild herstellen.',
      'Was lief gut? – zuerst und ausdrücklich benennen.',
      'Was lief nicht gut? – Sache benennen, nicht Person.',
      'Warum lief es so? – nach Ursachen suchen, nicht nach Schuldigen.',
      'Was ändern wir konkret? – ein oder zwei umsetzbare Punkte, nicht zehn.',
      'Wer kümmert sich bis wann darum?'),
    CO('tip', 'Auch gute Einsätze nachbesprechen', 'Nachbesprechungen nur nach Problemen abzuhalten, macht sie zum Strafgericht. Wer auch nach einem gut gelaufenen Einsatz kurz zusammensitzt, etabliert die Nachbesprechung als Normalität – und dann funktioniert sie auch, wenn es einmal schwierig war.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Das Verhalten der Führungskraft überträgt sich unmittelbar auf die Einheit.',
      'Stress erzeugt Tunnelblick, Zeitverzerrung, Hörverlust und Fixierung.',
      '<b>Fixierung</b> ist der gefährlichste Effekt – aktiv nach Gegenargumenten fragen.',
      'Bedenken ausdrücklich einfordern; wer sie äußert, wird nie kritisiert.',
      'Zwei bis drei Optionen bilden, klar entscheiden, Wirkung kontrollieren.',
      'Eine Entscheidung zu ändern, weil sich die Lage geändert hat, ist Stärke.',
      'Fürsorge gehört zur Führung: Ablösung, Verpflegung, PSNV, Dokumentation.',
      'Nachbesprechung sachlich, lösungsorientiert – und auch nach guten Einsätzen.'),
  ],
},

];
