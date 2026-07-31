/* =========================================================================
   MODUL H — Sprechfunk & Digitalfunk
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls H.

   Fachliche Grundlage: PDV/DV 810 (Sprech- und Datenfunkverkehr der BOS),
   FwDV 800 (IuK im Einsatz), FwDV 100, TETRA-BOS-Rahmenrichtlinien,
   DIN 5009 (Buchstabiertafeln). Rufnamen, Kennzahlen und Gruppen-
   bezeichnungen sind landes- bzw. kreisspezifisch – maßgeblich ist die
   Regelung deiner Leitstelle. Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_H = [

/* ---------------------------------------------------------------- H1 ---- */
{
  id: 'h1', title: 'Grundlagen & Nachrichtenverkehr', duration: 22,
  blocks: [
    P('Funk ist die Lebensader der Einsatzführung. Über ihn erfährt die Einsatzleitung, was im Gebäude passiert, und über ihn erfährt der Trupp, dass er zurückkommen soll. Ein Funkkanal wird von vielen geteilt und ist immer knapp – deshalb ist Funken keine Frage der Technik, sondern der Disziplin.'),

    H2('warum', 'Warum diszipliniert gefunkt wird'),
    P('Auf einem Kanal kann immer nur einer sprechen. Wer redet, blockiert alle anderen – auch den Trupp, der gerade einen Notruf absetzen will. Aus dieser einfachen technischen Tatsache leiten sich sämtliche Funkregeln ab. Sie sind kein Selbstzweck und keine Förmlichkeit, sondern der Grund dafür, dass die wichtige Meldung durchkommt.'),
    KF(
      '<b>Erst denken, dann drücken.</b> Die Nachricht im Kopf fertig formulieren, bevor die Sprechtaste gedrückt wird.',
      '<b>Sprechtaste drücken, kurz warten, dann sprechen</b> – sonst fehlt der Anfang der Nachricht.',
      '<b>Nur betriebsnotwendige Nachrichten</b> – kein Privatgespräch über Funk.',
      '<b>Kurz, klar, eindeutig</b> – Nebensätze und Höflichkeitsfloskeln weglassen.',
      '<b>Vollständige Rufnamen verwenden</b>, nicht abkürzen.',
      '<b>Normale Sprechgeschwindigkeit</b>, deutlich, ohne Hektik – auch wenn es eilt.',
      '<b>Zahlen und Namen buchstabieren</b>, wenn Verwechslungsgefahr besteht.'),
    CO('tip', 'Der häufigste Fehler', 'Zu früh sprechen. Zwischen Drücken der Sprechtaste und dem Aufbau der Verbindung vergeht ein Sekundenbruchteil – im Digitalfunk sogar spürbar länger. Wer sofort losredet, verliert die ersten Wörter, also meist den eigenen Rufnamen. Eine Sekunde Pause löst das Problem vollständig.'),

    H2('ablauf', 'Der Ablauf eines Funkgesprächs'),
    P('Jedes Gespräch folgt demselben Muster: Anruf, Antwort, Nachricht, Bestätigung, Ende. Dieses Muster stellt sicher, dass beide Seiten wissen, wer spricht, dass die Verbindung steht und dass die Nachricht angekommen ist.'),
    FIG('funkablauf', 'Ablauf eines Funkgesprächs: Anruf → Antwort → Nachricht → Bestätigung → Ende.'),
    STEPS(
      '<b>Anruf:</b> „Florian Musterstadt 1/44 von Florian Musterstadt 11/1 – kommen." Zuerst der Gerufene, dann der Rufende.',
      '<b>Antwort:</b> „Florian Musterstadt 11/1 von Florian Musterstadt 1/44 – kommen."',
      '<b>Nachricht:</b> Die eigentliche Durchsage, kurz und gegliedert, abgeschlossen mit „kommen".',
      '<b>Bestätigung:</b> „Verstanden" – gegebenenfalls mit Wiederholung der wesentlichen Angaben.',
      '<b>Ende:</b> „Ende" – das Gespräch ist abgeschlossen, der Kanal wieder frei.'),
    CO('info', 'Warum zuerst der Gerufene genannt wird', 'Der Angerufene soll wissen, dass er gemeint ist, bevor die Information kommt. Wer zuerst sich selbst nennt, sorgt dafür, dass die Gegenstelle die erste Hälfte der Nachricht überhört, weil sie noch nicht aufmerksam war. Diese Reihenfolge ist deshalb keine Formalie.'),

    H2('woerter', 'Die Verkehrswörter'),
    P('Feststehende Wörter steuern den Ablauf und ersetzen ganze Sätze. Sie sind eindeutig und dürfen nicht durch Umgangssprache ersetzt werden.'),
    TBL(['Wort', 'Bedeutung'],[
      ['kommen', 'Ende meiner Durchsage, ich erwarte eine Antwort'],
      ['verstanden', 'Nachricht empfangen und inhaltlich verstanden'],
      ['Ende', 'Gespräch beendet, keine Antwort mehr erwartet'],
      ['Frage', 'Es folgt eine Frage'],
      ['wiederholen Sie', 'Nachricht bitte noch einmal durchgeben'],
      ['ich wiederhole', 'Ich gebe das Gesagte noch einmal durch'],
      ['ich buchstabiere', 'Es folgt eine buchstabierte Angabe'],
      ['warten', 'Bleiben Sie auf Empfang, ich melde mich gleich'],
      ['kommen Sie', 'Aufforderung an die Gegenstelle zu sprechen'],
      ['hier ist', 'leitet den eigenen Rufnamen ein'],
    ]),
    CO('warn', '„Verstanden" ist keine Zustimmung', '„Verstanden" bedeutet ausschließlich, dass die Nachricht akustisch und inhaltlich angekommen ist. Ob ein Auftrag ausgeführt werden kann, ist eine andere Frage – das wird ausdrücklich gemeldet. Und ein „Roger", „Okay" oder „Alles klar" hat im Funk nichts verloren.'),

    H2('zahlen', 'Zahlen und Buchstaben durchgeben'),
    P('Zahlen werden ziffernweise gesprochen, nicht als Zahlwort: „eins – vier – vier" statt „hundertvierundvierzig". Die Ziffer <b>zwei</b> wird als „<b>zwo</b>" gesprochen, weil sie sonst leicht mit „drei" verwechselt wird.'),
    KF(
      'Ziffern einzeln sprechen, in Gruppen gegliedert.',
      '„zwo" statt „zwei" verwenden.',
      'Bei Verwechslungsgefahr buchstabieren – Straßennamen, Ortsteile, Fachbegriffe.',
      'Vor dem Buchstabieren „ich buchstabiere" ansagen.',
      'Wichtige Nachrichten wiederholen lassen.'),

    H2('vorrang', 'Dringlichkeit und Vorrang'),
    P('Nicht jede Nachricht ist gleich wichtig. Für dringende Meldungen gibt es Vorrangstufen, die den laufenden Verkehr unterbrechen dürfen. Sie werden ausschließlich für tatsächlich dringende Nachrichten verwendet – wer sie inflationär nutzt, entwertet sie.'),
    P('Die höchste Priorität hat der <b>Notruf einer Einsatzkraft</b>. Er wird mit dem Signalwort „Mayday" beziehungsweise über die Notruftaste des Digitalfunkgeräts abgesetzt und unterbricht jeden anderen Verkehr. Alle übrigen Stellen halten dann Funkstille, bis der Notfall abgewickelt ist. Details dazu stehen in <b>Modul F</b>.'),
    CO('danger', 'Funkstille bei Notrufen', 'Sobald ein Notruf läuft, wird der Kanal für alles andere gesperrt. Wer in dieser Situation eine Routinemeldung absetzt, kann die Rettung eines Menschen verzögern. Zuhören, warten, erst nach Freigabe wieder funken.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Auf einem Kanal spricht immer nur einer – Disziplin hält ihn für Wichtiges frei.',
      'Erst denken, Taste drücken, eine Sekunde warten, dann sprechen.',
      'Ablauf: Anruf – Antwort – Nachricht – Bestätigung – Ende.',
      'Im Anruf zuerst den Gerufenen nennen, dann sich selbst.',
      'Verkehrswörter sind feststehend: kommen, verstanden, Ende, Frage, wiederholen Sie.',
      'Zahlen ziffernweise, „zwo" statt „zwei".',
      'Notrufe unterbrechen alles – danach Funkstille halten.'),
  ],
},

/* ---------------------------------------------------------------- H2 ---- */
{
  id: 'h2', title: 'Buchstabieralphabet & Betriebsarten', duration: 22,
  blocks: [
    P('„Wir sind in der Grabbestraße" – oder war es die Krabbestraße? Über Funk klingen viele Wörter ähnlich, besonders unter Atemschutz, im Motorenlärm oder bei schlechter Verbindung. Das Buchstabieralphabet löst dieses Problem seit über hundert Jahren, und es funktioniert nur, wenn alle dasselbe benutzen.'),

    H2('alphabet', 'Das deutsche Buchstabieralphabet'),
    P('Im BOS-Funk wird das klassische deutsche Buchstabieralphabet verwendet. Es sollte auswendig sitzen – nicht ungefähr, sondern vollständig, weil Zögern beim Buchstabieren den Kanal genauso blockiert wie eine unklare Nachricht.'),
    TBL(['A–H', 'I–P', 'Q–Z'],[
      ['A Anton', 'I Ida', 'Q Quelle'],
      ['Ä Ärger', 'J Julius', 'R Richard'],
      ['B Berta', 'K Kaufmann', 'S Samuel'],
      ['C Cäsar', 'L Ludwig', 'Sch Schule'],
      ['Ch Charlotte', 'M Martha', 'T Theodor'],
      ['D Dora', 'N Nordpol', 'U Ulrich'],
      ['E Emil', 'O Otto', 'Ü Übermut'],
      ['F Friedrich', 'Ö Ökonom', 'V Viktor'],
      ['G Gustav', 'P Paula', 'W Wilhelm'],
      ['H Heinrich', '', 'X Xanthippe'],
      ['', '', 'Y Ypsilon'],
      ['', '', 'Z Zacharias'],
    ]),
    CO('info', 'Zwei Buchstabiertafeln', 'Die DIN 5009 wurde überarbeitet und enthält heute zusätzlich eine <b>Buchstabiertafel mit Städtenamen</b> (Aachen, Berlin, Chemnitz, Düsseldorf …). Im BOS-Funk ist weiterhin die klassische Tafel mit den Vornamen gebräuchlich. Wichtig ist, dass alle Beteiligten dieselbe verwenden – im Zweifel die, die deine Leitstelle nutzt.'),
    CO('tip', 'So lernst du es wirklich', 'Buchstabiere im Alltag: Autokennzeichen vor dir, Straßenschilder, dein eigener Nachname. Nach zwei Wochen sitzt es. Wer das Alphabet nur im Lehrgang liest, sucht im Einsatz nach dem Wort für „K" – und das dauert genau die Sekunden, die man nicht hat.'),

    H2('nachrichtenarten', 'Arten von Nachrichten'),
    P('Die Funkvorschrift unterscheidet drei Grundformen. Der Unterschied liegt in Förmlichkeit und Empfängerkreis.'),
    TBL(['Art', 'Merkmal', 'Typischer Einsatz'],[
      ['Gespräch', 'wechselseitiger, formloser Austausch', 'Standardfall im Einsatz'],
      ['Spruch', 'förmliche Nachricht mit Kopf: Absender, Empfänger, Uhrzeit, Nummer', 'wichtige Meldungen, die dokumentiert werden'],
      ['Durchsage / Sammelruf', 'an mehrere oder alle Stellen gleichzeitig, ohne Antwort', 'Warnungen, Rückzugsbefehle, allgemeine Hinweise'],
    ]),
    P('Für den Alltag der meisten Einsatzkräfte ist das Gespräch die Regel. Der Spruch begegnet dir bei größeren Lagen und in der Stabsarbeit, wo Nachrichten nachweisbar dokumentiert werden müssen. Der Sammelruf ist das Mittel der Wahl, wenn eine Information alle erreichen muss – etwa ein Rückzugsbefehl.'),

    H2('betriebsarten', 'Betriebsarten im analogen Funk'),
    P('Auch wenn der Digitalfunk heute Standard ist, gehören die klassischen Betriebsarten zum Grundwissen – sie erklären, warum bestimmte Dinge technisch möglich sind und andere nicht.'),
    TBL(['Betriebsart', 'Technik', 'Eigenschaft'],[
      ['Wechselverkehr', 'eine Frequenz, abwechselnd senden und empfangen', 'einfachste Form, nur einer kann sprechen'],
      ['Gegenverkehr', 'zwei Frequenzen, gleichzeitiges Senden und Empfangen', 'wie ein Telefongespräch'],
      ['Bedingter Gegenverkehr', 'zwei Frequenzen, aber nicht alle Stellen können gleichzeitig', 'Mischform'],
      ['Richtungsverkehr', 'Nachrichten laufen nur in eine Richtung', 'Sonderfall'],
      ['Relaisbetrieb', 'ortsfeste Relaisstelle verstärkt und leitet weiter', 'große Reichweite, Grundlage des Leitstellenfunks'],
    ]),
    P('Historisch arbeitete die Feuerwehr im <b>4-Meter-Band</b> für den Verkehr zwischen Leitstelle und Fahrzeugen und im <b>2-Meter-Band</b> für den Funk an der Einsatzstelle. Diese Trennung nach Aufgabe findet sich im Digitalfunk als Unterscheidung zwischen Netzbetrieb und Direktbetrieb wieder – nur mit anderer Technik.'),

    H2('digital', 'Digitalfunk BOS – der Überblick'),
    P('Der bundesweite Digitalfunk für Behörden und Organisationen mit Sicherheitsaufgaben basiert auf dem <b>TETRA</b>-Standard. Er löst die analogen Netze ab und bringt mehrere Vorteile mit sich, die den Einsatzalltag spürbar verändern.'),
    UL(
      '<b>Abhörsicherheit:</b> Die Übertragung ist verschlüsselt – Mithören mit einem Scanner ist nicht mehr möglich.',
      '<b>Sprachqualität:</b> deutlich besser und über die gesamte Reichweite gleichbleibend, statt langsam im Rauschen zu verschwinden.',
      '<b>Gruppenkommunikation:</b> Gesprächsgruppen statt fester Kanäle, flexibel umschaltbar.',
      '<b>Datenübertragung:</b> Status- und Textmeldungen entlasten den Sprechfunk erheblich.',
      '<b>Einzelrufe:</b> gezielte Verbindung zu einem einzelnen Teilnehmer.',
      '<b>Notruffunktion:</b> priorisierte Meldung per Tastendruck.'),
    TBL(['Betriebsart', 'Funktionsweise', 'Typischer Einsatz'],[
      ['TMO – Netzbetrieb', 'über Basisstationen des BOS-Netzes', 'überörtlich, Verbindung zur Leitstelle'],
      ['DMO – Direktbetrieb', 'Gerät zu Gerät ohne Netz', 'Einsatzstellenfunk vor Ort'],
    ]),
    CO('warn', 'Digitalfunk ist nicht störungsfrei', 'Er ist netzabhängig: In Kellern, Tiefgaragen, Tunneln und Stahlbetonbauten kann die Verbindung abreißen. Und er ist akkuabhängig – ein leeres Handfunkgerät ist ein Stück Plastik. Ersatzakkus, Ladehalterungen und der bewusste Wechsel auf DMO gehören deshalb zur Einsatzvorbereitung.'),

    H2('geraete', 'Die Endgeräte'),
    TBL(['Kürzel', 'Bedeutung', 'Verwendung'],[
      ['HRT', 'Handheld Radio Terminal', 'Handfunkgerät für Trupps und Führungskräfte'],
      ['MRT', 'Mobile Radio Terminal', 'fest eingebautes Fahrzeugfunkgerät'],
      ['FRT', 'Fixed Radio Terminal', 'ortsfeste Station, z. B. im Gerätehaus'],
    ]),
    P('Für den Trupp im Innenangriff ist das HRT das entscheidende Gerät. Es wird so getragen, dass es bedienbar bleibt und nicht verlorengeht, und die Lautstärke wird vor dem Vorgehen eingestellt – unter der Maske und mit Handschuhen lässt sich am Gerät kaum noch etwas ändern.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Das Buchstabieralphabet muss vollständig sitzen – Zögern blockiert den Kanal.',
      'Neben der klassischen Tafel gibt es die neuere Städtenamen-Tafel der DIN 5009.',
      'Nachrichtenarten: Gespräch, Spruch, Durchsage beziehungsweise Sammelruf.',
      'Betriebsarten: Wechsel-, Gegen-, bedingter Gegen-, Richtungsverkehr, Relaisbetrieb.',
      'Digitalfunk BOS basiert auf TETRA: verschlüsselt, gruppenbasiert, mit Datenfunk.',
      '<b>TMO</b> = Netzbetrieb überörtlich, <b>DMO</b> = Direktbetrieb an der Einsatzstelle.',
      'HRT, MRT, FRT – Hand-, Fahrzeug- und ortsfestes Gerät.'),
  ],
},

/* ---------------------------------------------------------------- H3 ---- */
{
  id: 'h3', title: 'Meldungen, Lagemeldung & Funkdisziplin', duration: 22,
  blocks: [
    P('Die erste Lagemeldung der ersteintreffenden Einheit ist die folgenreichste Nachricht des gesamten Einsatzes. Aus ihr entscheidet die Leitstelle, ob zwei Fahrzeuge reichen oder zwanzig alarmiert werden – und diese Entscheidung lässt sich später nur mit erheblichem Zeitverlust korrigieren. Diese Lektion behandelt, wie man sie richtig aufbaut.'),

    H2('lagemeldung', 'Die erste Lagemeldung'),
    P('Sie erfolgt unmittelbar nach dem Eintreffen und der ersten Erkundung – nicht erst, wenn alles klar ist. Eine unvollständige Meldung nach zwei Minuten ist wertvoller als eine perfekte nach zehn.'),
    MNE([{l:'W',w:'Wer meldet'},{l:'W',w:'Wo'},{l:'W',w:'Was ist'},{l:'W',w:'Welche Maßnahmen'},{l:'W',w:'Was wird benötigt'}],
      'Wer meldet? Wo ist die Einsatzstelle? Was ist tatsächlich passiert? Welche Maßnahmen laufen bereits? Was wird zusätzlich benötigt?'),
    P('Ein vollständiges Beispiel: <b>„Leitstelle von Florian Musterstadt 11/1 – Einsatzstelle erreicht, Musterstraße 12 – Wohnungsbrand im zweiten Obergeschoss, Rauch aus zwei Fenstern, eine Person am Fenster – Menschenrettung über Drehleiter eingeleitet, Innenangriff mit erstem Rohr läuft – ich fordere nach: Drehleiter, ein weiteres Löschfahrzeug, Rettungsdienst mit Notarzt – kommen."</b>'),
    KF(
      'Zuerst die Rückmeldung „Einsatzstelle erreicht" – die Leitstelle wartet darauf.',
      'Die tatsächliche Lage nennen, nicht das Einsatzstichwort wiederholen.',
      'Konkret nachfordern: was, wie viel, wofür.',
      'Bereitstellungsraum benennen, wenn viele Kräfte kommen.',
      'Bei Menschenrettung diese ausdrücklich melden – sie verändert die Priorität aller Beteiligten.',
      'Folgemeldungen absetzen, sobald sich die Lage wesentlich ändert.'),
    CO('warn', 'Der klassische Fehler', 'Die erste Lagemeldung zu spät abzusetzen, weil man zuerst „richtig erkunden" will. In dieser Zeit steht die Leitstelle ohne Information da und kann nichts vorbereiten. Besser: früh melden, was man sieht, und später ergänzen.'),

    H2('folgemeldungen', 'Verlaufs- und Abschlussmeldungen'),
    P('Nach der ersten Lagemeldung braucht die Leitstelle in Abständen Aktualisierungen. Sie müssen nicht lang sein, aber sie müssen kommen – eine Einheit, von der stundenlang nichts zu hören ist, bindet Aufmerksamkeit und Reserven.'),
    TBL(['Meldung', 'Inhalt'],[
      ['Eintreffmeldung', 'Einsatzstelle erreicht, erste Lage'],
      ['Zwischenmeldung', 'Lageentwicklung, durchgeführte Maßnahmen, Änderungen im Kräftebedarf'],
      ['Erfolgsmeldung', '„Feuer unter Kontrolle" beziehungsweise „Feuer aus"'],
      ['Personenmeldung', 'Anzahl geretteter, vermisster oder verletzter Personen'],
      ['Abschlussmeldung', 'Einsatz beendet, Einheiten rücken ein'],
      ['Einsatzbereitschaft', 'Einheit wieder einsatzbereit'],
    ]),
    CO('info', '„Feuer unter Kontrolle" ist eine Fachaussage', 'Sie bedeutet: Der Brand breitet sich nicht weiter aus, die eingesetzten Kräfte reichen aus. Sie bedeutet <b>nicht</b>, dass der Brand gelöscht ist. „Feuer aus" folgt später. Diese Unterscheidung ist für die Leitstelle und für nachrückende Kräfte wichtig – deshalb werden die Begriffe nicht vertauscht.'),

    H2('disziplin', 'Funkdisziplin im Detail'),
    KF(
      '<b>Erst hören, ob der Kanal frei ist</b> – nicht in ein laufendes Gespräch hineinfunken.',
      '<b>Keine Doppelmeldungen:</b> Was der Einheitsführer meldet, meldet der Truppführer nicht noch einmal.',
      '<b>Keine Kommentare</b> und keine Diskussionen über Funk.',
      '<b>Nicht ungeduldig nachrufen</b> – die Gegenstelle ist womöglich gerade beschäftigt.',
      '<b>Aufträge bestätigen</b>, damit der Absender Sicherheit hat.',
      '<b>Sich abmelden</b>, wenn man den Bereich verlässt oder das Gerät abschaltet.'),
    CO('danger', 'Sensible Daten gehören nicht in den Funk', 'Namen von Betroffenen, Diagnosen, Todesfeststellungen und Angaben zu Straftaten werden nicht über Funk übermittelt. Im analogen Funk kann jeder mithören; im Digitalfunk zwar nicht, aber die Nachricht wird protokolliert und von vielen mitgehört. Solche Informationen laufen über Telefon oder werden persönlich übergeben.'),

    H2('stoerung', 'Wenn der Funk ausfällt'),
    P('Funk fällt aus – im Keller, im Tunnel, in der Tiefgarage, bei leerem Akku, bei Netzstörung. Darauf muss jede Einheit vorbereitet sein, und zwar bevor es passiert.'),
    STEPS(
      'Vor dem Vorgehen klären: Was gilt, wenn die Verbindung abreißt? Rückzugszeitpunkt festlegen.',
      'Bei Verbindungsabbruch zunächst Position wechseln – oft reichen wenige Meter.',
      'Auf DMO wechseln, wenn das Netz nicht erreichbar ist.',
      'Melder einsetzen – ein Mensch, der die Nachricht persönlich überbringt.',
      'Sichtzeichen und vereinbarte akustische Signale nutzen.',
      'Mobiltelefon als Rückfallebene, sofern verfügbar.',
      'Wichtige Aufträge im Zweifel persönlich bestätigen lassen.'),
    CO('warn', 'Kein Funkkontakt ist ein Alarmzeichen', 'Meldet sich ein Trupp unter Atemschutz nicht auf zwei Anrufe, gilt das als Notfall – nicht als technisches Problem. Der Sicherheitstrupp geht vor. Die Klärung, ob es „nur" der Funk war, erfolgt danach.'),

    H2('uebung', 'Funken lernt man nur durch Funken'),
    P('Funkregeln zu lesen reicht nicht. Die Formulierungen müssen so automatisiert sein, dass sie auch dann funktionieren, wenn der Kopf mit der Lage beschäftigt ist. Bewährt haben sich kurze Funkübungen am Dienstabend, bei denen bewusst auch schwierige Nachrichten geübt werden: Nachforderungen, Lagemeldungen, Personenmeldungen und der Notruf.'),
    KF(
      'Lagemeldungen laut üben, nicht nur denken.',
      'Buchstabieren unter Zeitdruck trainieren.',
      'Den Notruf mit vollständigem Wortlaut sprechen üben.',
      'Gruppenwechsel und Gerätebedienung mit Handschuhen üben.',
      'Nach Einsätzen den Funkverkehr gemeinsam auswerten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Erste Lagemeldung früh absetzen – unvollständig und schnell schlägt perfekt und spät.',
      'Schema: Wer meldet, wo, was ist, welche Maßnahmen, was wird benötigt.',
      'Konkret nachfordern und Bereitstellungsraum benennen.',
      '„Feuer unter Kontrolle" heißt keine weitere Ausbreitung, nicht gelöscht.',
      'Erst hören, dann funken; keine Doppelmeldungen, keine Kommentare.',
      'Namen, Diagnosen und Straftaten nicht über Funk.',
      'Bei Funkausfall: Position wechseln, DMO, Melder, Sichtzeichen, Telefon.',
      'Kein Funkkontakt zum Atemschutztrupp ist ein Notfall.'),
  ],
},

/* ---------------------------------------------------------------- H4 ---- */
{
  id: 'h4', title: 'Rufnamen, Funkverkehrskreise & Kanäle', duration: 20,
  blocks: [
    P('An einer Großeinsatzstelle sind hundert Funkgeräte in Betrieb. Damit daraus geordnete Kommunikation wird, braucht es zwei Ordnungssysteme: eindeutige Rufnamen, damit jeder weiß, wer spricht, und getrennte Verkehrskreise, damit nicht alle auf demselben Kanal reden.'),

    H2('rufnamen', 'Aufbau der Rufnamen'),
    P('Ein Rufname identifiziert eine Funkstelle eindeutig. Er ist so aufgebaut, dass man an ihm bereits erkennt, welche Organisation spricht, woher sie kommt und um welches Fahrzeug es sich handelt.'),
    DEF('Aufbau eines Rufnamens', 'Kennwort der Organisation + Ortskennung + Kennzahl. Beispiel: „<b>Florian Musterstadt 1/44/1</b>" – Feuerwehr, Standort Musterstadt, Löschzug 1, Fahrzeugtyp 44, laufende Nummer 1.'),
    TBL(['Kennwort', 'Organisation'],[
      ['Florian', 'Feuerwehr'],
      ['Rotkreuz', 'Deutsches Rotes Kreuz'],
      ['Johannes', 'Johanniter-Unfall-Hilfe'],
      ['Sama', 'Arbeiter-Samariter-Bund'],
      ['Akkon', 'Malteser Hilfsdienst'],
      ['Pelikan', 'Deutsche Lebens-Rettungs-Gesellschaft'],
      ['Heros', 'Technisches Hilfswerk'],
      ['Christoph', 'Rettungshubschrauber'],
      ['Leitstelle', 'die zuständige Leitstelle'],
    ]),
    DEF('Funktionskennzahl', 'Der Zahlenteil des Rufnamens verschlüsselt Fahrzeugtyp und Funktion – etwa Löschfahrzeug, Drehleiter, Rüstwagen oder Einsatzleitwagen. Dadurch erkennt jede Führungskraft am Rufnamen, welches Fahrzeug spricht und was es kann. Die konkrete Zuordnung der Kennzahlen ist <b>landes- oder kreisspezifisch</b> geregelt.'),
    CO('warn', 'Kennzahlen sind nicht bundeseinheitlich', 'Die Zuordnung von Kennzahlen zu Fahrzeugtypen unterscheidet sich zwischen den Bundesländern und teilweise sogar zwischen Kreisen. Bei überörtlicher Hilfe kann derselbe Zahlencode ein anderes Fahrzeug bedeuten. Im Zweifel wird der Fahrzeugtyp im Klartext genannt.'),

    H2('kreise', 'Funkverkehrskreise'),
    P('Würde die gesamte Kommunikation über einen Kanal laufen, wäre er nach fünf Minuten unbrauchbar. Deshalb wird die Kommunikation in <b>Verkehrskreise</b> getrennt, die unabhängig voneinander arbeiten.'),
    TBL(['Kreis', 'Wer spricht miteinander', 'Typisch'],[
      ['Führungs- oder Leitstellenkreis', 'Leitstelle ↔ Einheiten und Einsatzleitung', 'TMO-Rufgruppe'],
      ['Einsatzstellenfunk', 'Kräfte vor Ort untereinander', 'DMO-Betriebsgruppe'],
      ['Abschnittsfunk', 'innerhalb eines Einsatzabschnitts', 'eigene Gruppe je Abschnitt'],
      ['Organisationsübergreifend', 'Feuerwehr, Rettungsdienst, Polizei', 'festgelegte gemeinsame Gruppe'],
    ]),
    KF(
      'Der Führungskreis wird für Führungskommunikation freigehalten.',
      'Einsatzstellenfunk bleibt lokal und belastet das Netz nicht.',
      'Bei mehreren Abschnitten bekommt jeder Abschnitt seine eigene Gruppe.',
      'Wer die Gruppe wechselt, meldet sich ab und in der neuen Gruppe an.',
      'Die Zuordnung der Gruppen legt die Einsatzleitung fest und gibt sie bekannt.'),
    CO('tip', 'Kanaldisziplin ist Führungsleistung', 'Ein überlasteter Führungskreis ist fast immer ein Organisationsfehler, kein Disziplinproblem der Einsatzkräfte. Wer früh Abschnitte bildet und ihnen eigene Gruppen zuweist, entlastet den Führungskreis automatisch.'),

    H2('gruppen', 'Von Kanälen zu Gruppen'),
    P('Im analogen Funk war ein Kanal eine Frequenz – wer sie eingestellt hatte, hörte alles darauf. Im Digitalfunk gibt es stattdessen <b>Gesprächsgruppen</b>. Alle Geräte, die dieselbe Gruppe geschaltet haben, bilden einen gemeinsamen Kommunikationsraum, unabhängig davon, über welche Basisstation sie verbunden sind.'),
    P('Das hat einen großen praktischen Vorteil: Eine Gruppe kann sich über einen ganzen Landkreis erstrecken, während gleichzeitig an derselben Einsatzstelle eine zweite Gruppe für den Einsatzstellenfunk läuft. Und sie hat einen Nachteil, der der häufigste Digitalfunkfehler überhaupt ist: Wer die falsche Gruppe geschaltet hat, hört niemanden – und niemand hört ihn.'),
    CO('danger', 'Gruppe vor dem Vorgehen kontrollieren', 'Vor jedem Vorgehen wird die geschaltete Gruppe geprüft und die Verbindung getestet: kurzer Funkcheck mit der Gegenstelle. Ein Trupp, der mit falscher Gruppe in ein Gebäude geht, ist funktechnisch nicht vorhanden – und merkt es erst, wenn er Hilfe braucht.'),

    H2('reichweite', 'Was die Reichweite beeinflusst'),
    P('Funkwellen breiten sich weitgehend geradlinig aus und werden von Hindernissen gedämpft. Daraus ergeben sich einige praktische Regeln, die im Einsatz oft weiterhelfen.'),
    KF(
      'Höhe hilft: ein Stockwerk höher oder auf freier Fläche verbessert die Verbindung oft deutlich.',
      'Stahlbeton, Erdreich und Metallkonstruktionen dämpfen stark – Keller und Tiefgaragen sind kritisch.',
      'Das Fahrzeugfunkgerät hat mehr Sendeleistung als das Handfunkgerät.',
      'Der Körper schirmt ab – Gerät nicht zwischen Körper und Gegenstelle tragen.',
      'DMO-Repeater und Gateways verlängern die Reichweite bei Bedarf.',
      'Bei kritischen Objekten die Funkverbindung vorher testen, nicht im Ernstfall.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Rufname = Kennwort + Ortskennung + Kennzahl.',
      '„Florian" steht bundesweit für die Feuerwehr, „Heros" für das THW, „Christoph" für den RTH.',
      'Funktionskennzahlen sind <b>nicht</b> bundeseinheitlich – im Zweifel Klartext.',
      'Verkehrskreise trennen Führungs-, Einsatzstellen- und Abschnittskommunikation.',
      'Der Führungskreis wird freigehalten; Abschnitte bekommen eigene Gruppen.',
      'Falsch geschaltete Gruppe ist der häufigste Digitalfunkfehler – vorher Funkcheck.',
      'Höhe verbessert, Stahlbeton und Erdreich verschlechtern die Reichweite.'),
  ],
},

/* ---------------------------------------------------------------- H5 ---- */
{
  id: 'h5', title: 'Kartenkunde, Koordinaten & Standortmeldung', duration: 20,
  blocks: [
    P('„Wir sind hier im Wald an der Kreuzung" ist keine Standortangabe. Sie kostet nachrückende Kräfte zwanzig Minuten Suche und im Vegetationsbrand oder bei einer vermissten Person unter Umständen den Einsatzerfolg. Diese Lektion behandelt, wie man sich so verortet, dass andere einen finden.'),

    H2('warum', 'Warum die Standortangabe so oft schiefgeht'),
    P('Im bebauten Bereich funktioniert die Adresse. Sobald es davon abweicht – Waldwege, Feldwege, Autobahnen, Bahnstrecken, Gewässer, große Betriebsgelände – versagt sie, und es braucht andere Systeme. Genau in diesen Lagen ist die Suche besonders teuer, weil die Wege lang sind und Umkehren viel Zeit kostet.'),

    H2('koordinaten', 'Koordinatensysteme'),
    TBL(['System', 'Form', 'Verwendung'],[
      ['UTM', 'metrische Gitterkoordinaten, z. B. 32U 456789 5678901', 'topografische Karten, Vegetationsbrand, Katastrophenschutz'],
      ['Geografische Koordinaten', 'Breite und Länge in Grad', 'GPS-Geräte, Luftfahrt, Rettungshubschrauber'],
      ['Kachel- und Wortsysteme', 'z. B. drei Wörter für ein Quadrat von wenigen Metern', 'schnelle Standortangabe per Telefon und App'],
      ['Kilometrierung', 'Stationszeichen an Autobahn und Bahnstrecke', 'Verkehrswege, Zufahrtsplanung'],
      ['Rettungspunkte', 'nummerierte Punkte im Wald', 'Forst- und Vegetationsbrandeinsätze'],
    ]),
    CO('info', 'Rettungspunkte im Wald', 'In vielen Bundesländern gibt es ein Netz nummerierter <b>forstlicher Rettungspunkte</b> an befahrbaren Wegen. Sie sind in Leitstellensystemen hinterlegt und ermöglichen eine präzise Zuweisung ohne Koordinaten. Wer im Wald arbeitet, sollte die Punkte im eigenen Gebiet kennen.'),

    H2('karte', 'Kartenkunde'),
    P('Topografische Karten zeigen Gelände, Wege, Gewässer, Bebauung und häufig auch Löschwasserentnahmestellen. Für die Feuerwehr besonders wichtig sind drei Dinge: der <b>Maßstab</b>, die <b>Höhenlinien</b> und die <b>Wegequalität</b>.'),
    KF(
      'Maßstab beachten: 1 : 25.000 heißt, 1 cm auf der Karte sind 250 m in der Natur.',
      'Höhenlinien zeigen Steigungen – entscheidend für Wasserförderung und Fahrzeugeignung.',
      'Wegekategorien unterscheiden: befestigt, Forstweg, Pfad – nicht jeder Weg trägt ein Löschfahrzeug.',
      'Nordrichtung immer feststellen und auf der Lagekarte vermerken.',
      'Legende lesen – Symbole unterscheiden sich zwischen Kartenwerken.',
      'Bei Vegetationsbränden ist die Karte zusammen mit Luftbildern das zentrale Führungsmittel.'),

    H2('meldung', 'Die Standortmeldung'),
    STEPS(
      'Einen eindeutigen Bezugspunkt nennen: Adresse, Kreuzung, Kilometerangabe, Rettungspunkt.',
      'Bei Bedarf Koordinaten durchgeben – ziffernweise und mit Wiederholung.',
      'Die Zufahrt beschreiben: von welcher Richtung, über welchen Weg, welche Abzweigung.',
      'Besonderheiten melden: Sperrungen, Engstellen, Höhenbegrenzungen, Tragfähigkeit.',
      'Einen Einweiser benennen oder stellen, wenn die Zufahrt schwierig ist.',
      'Bei unklarer Lage einen Treffpunkt festlegen, an dem nachrückende Kräfte gesammelt werden.'),
    CO('tip', 'Der Einweiser ist unschlagbar', 'Bei schwieriger Zufahrt ist eine Einsatzkraft an der entscheidenden Abzweigung wirksamer als jede Koordinate. Das kostet eine Person und spart oft mehr als zehn Minuten – bei nachrückenden Kräften aus Nachbarwehren sogar deutlich mehr.'),

    H2('anfahrt', 'Anfahrt planen und beschreiben'),
    P('Bei größeren Lagen wird die Anfahrt aktiv gesteuert. Das verhindert, dass Fahrzeuge sich gegenseitig blockieren oder die Rettungswege zustellen.'),
    KF(
      'Anfahrtsrichtung vorgeben – möglichst gegen die Windrichtung bei Gefahrstoffen.',
      'Bereitstellungsraum benennen und Anfahrtsweg dorthin beschreiben.',
      'Rettungsdienst getrennt führen, damit der Abtransport frei bleibt.',
      'Eine Fahrtrichtung festlegen, wenn der Weg eng ist – Einbahnregelung.',
      'Wendemöglichkeit einplanen, besonders bei Sackgassen und Waldwegen.',
      'Drehleiter und Sonderfahrzeuge gezielt einweisen, sie brauchen Platz.'),

    H2('digital', 'Digitale Ortung und ihre Grenzen'),
    P('Moderne Leitstellen orten Notrufe automatisch, Einsatz-Apps zeigen die eigene Position, und Fahrzeuge übermitteln ihren Standort. Das ist ein enormer Fortschritt – und kein Ersatz für die gesprochene Standortangabe.'),
    CO('warn', 'Technik fällt aus', 'GPS funktioniert unter dichtem Kronendach, in Gebäuden und in Tälern schlecht bis gar nicht. Mobilfunkortung ist ungenau. Akkus sind leer. Deshalb bleibt die Fähigkeit, den eigenen Standort mit Worten präzise zu beschreiben, eine Grundfertigkeit – gerade dann, wenn es darauf ankommt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Adressen versagen abseits der Bebauung – dann Koordinaten, Kilometrierung oder Rettungspunkte.',
      'UTM für Karten, geografische Koordinaten für GPS und Luftfahrt.',
      'Forstliche Rettungspunkte im eigenen Gebiet kennen.',
      'Maßstab, Höhenlinien und Wegequalität sind die drei wichtigsten Kartenangaben.',
      'Standortmeldung: Bezugspunkt, Zufahrt, Besonderheiten, Einweiser.',
      'Anfahrt aktiv steuern: Bereitstellungsraum, Fahrtrichtung, Wendemöglichkeit.',
      'Digitale Ortung ergänzt die gesprochene Angabe – sie ersetzt sie nicht.'),
  ],
},

/* ---------------------------------------------------------------- H6 ---- */
{
  id: 'h6', title: 'IuK im Einsatz (FwDV 800) & die Funkvorschriften', duration: 20,
  blocks: [
    P('Es gibt drei Vorschriften, die die Kommunikation im Einsatz regeln, und sie werden regelmäßig verwechselt. Die eine sagt, <i>dass</i> Führung Kommunikation braucht, die zweite organisiert die <i>Technik</i> dafür, und die dritte legt fest, <i>wie</i> gesprochen wird. Diese Lektion ordnet das Verhältnis und behandelt die Planung der Kommunikation bei größeren Lagen.'),

    H2('vorschriften', 'Drei Vorschriften, drei Aufgaben'),
    TBL(['Vorschrift', 'Regelt', 'Kernaussage'],[
      ['FwDV 100', 'Führung und Leitung im Einsatz', 'Kommunikationsmittel sind Führungsmittel – ohne sie keine Führung'],
      ['FwDV 800', 'Informations- und Kommunikationstechnik im Einsatz', 'IuK planen, bereitstellen und betreiben'],
      ['PDV/DV 810', 'Sprech- und Datenfunkverkehr der BOS', 'Betriebsarten, Rufnamen, Nachrichtenaufbau, Buchstabieren'],
    ]),
    CO('tip', 'Die Merkformel', 'FwDV 100 sagt, <b>dass</b> Führung Kommunikation braucht. FwDV 800 organisiert die <b>Technik</b> dafür. DV 810 legt fest, <b>wie</b> gefunkt wird. Alle drei greifen ineinander – keine ersetzt eine andere.'),
    P('Die <b>PDV/DV 810</b> ist eine gemeinsame Vorschrift von Polizei und Feuerwehr und damit die Grundlage dafür, dass BOS-Organisationen miteinander funken können. Sie ist die Quelle für alles, was in den vorangegangenen Lektionen dieses Moduls behandelt wurde.'),

    H2('iuk', 'Was zur IuK gehört'),
    DEF('IuK als Führungsmittel', 'Informations- und Kommunikationstechnik umfasst alles, was Nachrichten überträgt, darstellt und dokumentiert: Funk, Telefon, Einsatzleitsysteme, Lagedarstellung, Vordrucke und die Menschen, die das betreiben. Ohne funktionierende IuK gibt es keine Führung – deshalb wird sie bei größeren Lagen bewusst geplant und nicht dem Zufall überlassen.'),
    UL(
      '<b>Kommunikationsstruktur:</b> Wer spricht mit wem, über welche Gruppe, mit welchem Rückfallweg?',
      '<b>Technik:</b> Funkgeräte, Relais, Repeater, Gateways, Telefonverbindungen, Netzersatz.',
      '<b>Personal:</b> IuK-Fachkräfte, Führungsassistenten, Funkbediener, Melder.',
      '<b>Darstellung:</b> Lagekarte, Kräfteübersicht, digitale Lagedarstellung.',
      '<b>Dokumentation:</b> Einsatztagebuch, Nachrichtenvordrucke, Statusmeldungen.',
      '<b>Energieversorgung:</b> Ersatzakkus, Ladetechnik, Stromversorgung der Führungsstelle.'),

    H2('planung', 'Kommunikation planen'),
    P('Bei einer Standardlage genügt das, was ohnehin eingerichtet ist. Sobald mehrere Abschnitte, mehrere Organisationen oder eine längere Dauer ins Spiel kommen, muss die Kommunikation aktiv geplant werden – am besten, bevor sie zusammenbricht.'),
    STEPS(
      'Bedarf feststellen: Wie viele Abschnitte, welche Organisationen, welche Dauer?',
      'Gruppen zuweisen: Führungskreis, Abschnittsgruppen, organisationsübergreifende Gruppe.',
      'Zuweisung bekannt geben und schriftlich festhalten – nicht nur einmal über Funk ansagen.',
      'Rückfallebene festlegen: DMO, Melder, Telefon, Sichtzeichen.',
      'Reichweitenprobleme klären: Repeater oder Gateway einsetzen, Führungsstelle günstig platzieren.',
      'Energieversorgung sicherstellen: Ersatzakkus, Ladehalterungen, Nachschub organisieren.',
      'Bei langer Dauer: Ablösung für die Funkbediener einplanen.'),
    CO('warn', 'Die Gruppenzuweisung schriftlich', 'Eine über Funk durchgegebene Gruppenzuweisung erreicht nie alle – jemand ist gerade beschäftigt, jemand hört sie falsch, jemand kommt später dazu. Deshalb gehört sie auf ein Blatt an der Führungsstelle und in die Einweisung nachrückender Kräfte.'),

    H2('iukEinheiten', 'IuK-Einheiten und Fachpersonal'),
    P('In vielen Kreisen gibt es eigene IuK-Einheiten oder Fachdienste, die bei größeren Lagen die Kommunikation aufbauen und betreiben. Sie bringen Technik mit, die eine normale Einheit nicht hat – Relaisstellen, Netzersatzanlagen, mobile Führungsstellen –, und vor allem Fachpersonal, das damit umgehen kann.'),
    KF(
      'IuK-Einheiten früh alarmieren – Aufbau und Anfahrt brauchen Zeit.',
      'Sie unterstützen die Führung, führen aber nicht selbst.',
      'Ihre Fachberatung zur Kommunikationsstruktur aktiv nutzen.',
      'Bei Lagen über mehrere Stunden sind sie praktisch unverzichtbar.',
      'Auch Verbindungen zu anderen Organisationen und Behörden gehören zu ihrer Aufgabe.'),

    H2('dokumentation', 'Dokumentation des Funkverkehrs'),
    P('Was über Funk läuft, wird an der Führungsstelle festgehalten. Diese Dokumentation dient der laufenden Führung, der Übergabe bei Ablösung und der späteren Nachvollziehbarkeit. Bei Unfällen, Ermittlungen und Versicherungsfragen ist sie oft die einzige belastbare Quelle.'),
    KF(
      'Uhrzeit, Absender, Empfänger, Inhalt – knapp und sachlich.',
      'Wesentliche Meldungen vollständig, Routineverkehr nur stichwortartig.',
      'Nachforderungen und deren Bestätigung immer festhalten.',
      'Atemschutzeinsätze getrennt in der Atemschutzüberwachung dokumentieren.',
      'Keine Bewertungen und keine Namen von Betroffenen.',
      'Unterlagen nach dem Einsatz geordnet an die Einsatzleitung übergeben.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'FwDV 100: Kommunikation ist Führungsmittel. FwDV 800: Technik planen und betreiben. DV 810: wie gefunkt wird.',
      'PDV/DV 810 ist eine gemeinsame Vorschrift von Polizei und Feuerwehr.',
      'Zur IuK gehören Struktur, Technik, Personal, Darstellung, Dokumentation und Energieversorgung.',
      'Kommunikation bei größeren Lagen aktiv planen, nicht improvisieren.',
      'Gruppenzuweisung schriftlich festhalten und bei Einweisungen weitergeben.',
      'IuK-Einheiten früh alarmieren – Aufbau braucht Zeit.',
      'Funkverkehr dokumentieren: Uhrzeit, Absender, Empfänger, Inhalt.'),
  ],
},

/* ---------------------------------------------------------------- H7 ---- */
{
  id: 'h7', title: 'Digitalfunk vertieft: Gruppen, OPTA & Betriebsabwicklung', duration: 24,
  blocks: [
    P('Der Digitalfunk kann deutlich mehr als der analoge Funk – und verlangt dafür ein paar zusätzliche Begriffe und Handgriffe. Diese Lektion geht in die Tiefe: Betriebsarten, Adressierung, Statusmeldungen und die Fehler, die in der Praxis am häufigsten passieren.'),

    H2('betriebsarten', 'TMO und DMO im Detail'),
    TBL(['Betriebsart', 'Funktionsweise', 'Reichweite', 'Typischer Einsatz'],[
      ['TMO – Trunked Mode Operation', 'über Basisstationen des BOS-Netzes', 'landesweit, netzabhängig', 'Leitstelle, überörtliche Verbindungen'],
      ['DMO – Direct Mode Operation', 'direkt von Gerät zu Gerät', 'einige hundert Meter, geländeabhängig', 'Einsatzstellenfunk, Netzausfall'],
      ['DMO-Repeater', 'ein Gerät verstärkt und leitet DMO weiter', 'verlängert DMO deutlich', 'Gebäude, Tiefgaragen, Täler'],
      ['DMO-Gateway', 'koppelt eine DMO-Gruppe an das TMO-Netz', 'verbindet beide Welten', 'Trupp im Keller mit Anbindung zur Leitstelle'],
    ]),
    CO('info', 'Warum DMO an der Einsatzstelle', 'Der Einsatzstellenfunk soll lokal bleiben. Würde er über das Netz laufen, wäre er landesweit hörbar und würde Netzkapazität verbrauchen. DMO hält die Kommunikation dort, wo sie hingehört – und funktioniert auch, wenn das Netz ausfällt.'),

    H2('gruppen', 'Gesprächsgruppen und Adressierung'),
    DEF('Rufgruppe und Betriebsgruppe', 'Im Netzbetrieb spricht man von <b>Rufgruppen</b> (TMO), im Direktbetrieb von <b>Betriebsgruppen</b> (DMO). In beiden Fällen gilt: Alle Endgeräte mit derselben Gruppe bilden einen gemeinsamen Kommunikationsraum. Ein Gruppenwechsel versetzt das Gerät in einen anderen Raum – vorher hört es niemanden mehr aus der alten Gruppe.'),
    TBL(['Begriff', 'Bedeutung'],[
      ['OPTA', 'Operativ-Taktische Adresse – sprechender Name der Funktion, erscheint im Display der Gegenstelle'],
      ['ISSI', 'Individual Short Subscriber Identity – die technische Teilnehmerkennung des Endgeräts'],
      ['TEI', 'Terminal Equipment Identity – die Gerätekennung der Hardware'],
      ['Einzelruf', 'gezielte Verbindung zu genau einem Teilnehmer'],
      ['Gruppenruf', 'Verbindung an alle Teilnehmer der Gruppe – der Normalfall'],
      ['Notruf', 'priorisierter Ruf per Notruftaste, unterbricht laufenden Verkehr'],
    ]),
    P('Die <b>OPTA</b> ist eine der praktischsten Neuerungen des Digitalfunks: Im Display der Gegenstelle erscheint, wer gerade spricht – auch wenn der Rufname akustisch untergeht. Sie ersetzt aber nicht die Nennung des eigenen Rufnamens, denn nicht jeder schaut aufs Display, und im Innenangriff schon gar nicht.'),

    H2('status', 'Statusmeldungen'),
    P('Statusmeldungen übermitteln den Zustand eines Fahrzeugs per Tastendruck an die Leitstelle. Sie sind schnell, eindeutig und belasten den Sprechfunk überhaupt nicht – deshalb sollten sie konsequent genutzt werden.'),
    TBL(['Status', 'Bedeutung'],[
      ['0', 'priorisierter Sprechwunsch beziehungsweise Notruf'],
      ['1', 'einsatzbereit über Funk'],
      ['2', 'einsatzbereit auf der Wache'],
      ['3', 'Einsatz übernommen, Anfahrt läuft'],
      ['4', 'Ankunft an der Einsatzstelle'],
      ['5', 'Sprechwunsch'],
      ['6', 'nicht einsatzbereit'],
      ['7', 'Patient aufgenommen (Rettungsdienst)'],
      ['8', 'Ankunft am Zielort, z. B. Krankenhaus'],
      ['9', 'Fremdanmeldung in einem anderen Bereich'],
    ]),
    CO('tip', 'Status statt Sprechfunk', 'Jede Statusmeldung, die gedrückt statt gesprochen wird, hält den Kanal frei. Besonders die Status 3 und 4 – Anfahrt und Ankunft – werden oft vergessen und dann umständlich per Funk mitgeteilt. Ein Tastendruck erledigt dasselbe in einer Sekunde.'),

    H2('abwicklung', 'Betriebsabwicklung Schritt für Schritt'),
    STEPS(
      'Gerät einschalten und Akkuzustand prüfen.',
      'Die richtige Gruppe schalten – TMO-Rufgruppe für den Führungskreis, DMO-Betriebsgruppe für die Einsatzstelle.',
      'Lautstärke einstellen, solange das noch mit bloßen Händen möglich ist.',
      'Funkcheck mit der Gegenstelle durchführen: „Funkprobe – kommen."',
      'Vor jeder Durchsage prüfen, ob die Gruppe frei ist.',
      'Nachricht in genormter Form abwickeln, eigenen Rufnamen nennen.',
      'Statusmeldungen für Standardvorgänge nutzen.',
      'Bei Gruppenwechsel abmelden, wechseln, neu anmelden und den Wechsel bestätigen.'),
    CO('warn', 'Die häufigste Fehlerquelle', 'Eine falsch geschaltete Gruppe. Das Gerät zeigt volle Empfangsstärke, alles wirkt normal – und trotzdem hört einen niemand. Deshalb: vor dem Einsatz die Gruppe kontrollieren, nach jedem Gruppenwechsel bestätigen lassen und im Zweifel eine Funkprobe durchführen.'),

    H2('notruf', 'Die Notruffunktion'),
    P('Jedes BOS-Digitalfunkgerät hat eine Notruftaste. Sie löst einen priorisierten Notruf aus, der laufenden Verkehr unterbricht, das Gerät für eine bestimmte Zeit auf Senden schaltet und der Leitstelle die Kennung des Geräts übermittelt.'),
    KF(
      'Die Notruftaste ist bewusst hervorgehoben und mit Handschuhen bedienbar.',
      'Nach dem Auslösen wird das Mikrofon automatisch geöffnet – sprich trotzdem deine Meldung.',
      'Der Notruf ersetzt nicht die gesprochene Information: wer, wo, was, wie viel Luft.',
      'Nach dem Notruf Funkstille aller anderen Stellen.',
      'Auslösen im Zweifel – ein versehentlicher Notruf wird zurückgenommen, ein unterlassener nicht.',
      'Die Bedienung muss mit Handschuhen und unter Maske geübt sein.'),

    H2('grenzen', 'Grenzen und Rückfallebenen'),
    P('So gut der Digitalfunk ist – er hat klare Grenzen, die jede Einsatzkraft kennen muss.'),
    TBL(['Grenze', 'Auswirkung', 'Rückfallebene'],[
      ['Netzausfall oder Funkloch', 'kein TMO möglich', 'DMO, Repeater, Gateway'],
      ['Gebäudedämpfung', 'Verbindung reißt im Keller ab', 'Repeater, Melder, Positionswechsel'],
      ['Leerer Akku', 'Gerät fällt komplett aus', 'Ersatzakku, Fahrzeugfunkgerät'],
      ['Falsche Gruppe', 'niemand hört mit', 'Funkprobe, Gruppe kontrollieren'],
      ['Überlastete Gruppe', 'Durchsagen kommen nicht durch', 'Abschnittsgruppen bilden'],
    ]),
    CO('danger', 'Kommunikation ist nie garantiert', 'Jede Einsatzplanung muss den Ausfall der Kommunikation berücksichtigen. Deshalb wird vor dem Vorgehen festgelegt, was gilt, wenn die Verbindung abreißt: Rückzugszeitpunkt, Treffpunkt, Melder. Ein Trupp, der keinen Plan für den Funkausfall hat, hat keinen vollständigen Auftrag.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'TMO über das Netz, DMO direkt von Gerät zu Gerät; Repeater und Gateway erweitern DMO.',
      'Rufgruppe (TMO) und Betriebsgruppe (DMO) bilden den Kommunikationsraum.',
      '<b>OPTA</b> ist der sprechende Name, <b>ISSI</b> die technische Kennung.',
      'Statusmeldungen 0 bis 9 entlasten den Sprechfunk – besonders 3 und 4.',
      'Vor dem Einsatz: Akku, Gruppe, Lautstärke, Funkprobe.',
      'Falsch geschaltete Gruppe ist der häufigste Digitalfunkfehler.',
      'Notruftaste auslösen und trotzdem die Meldung sprechen.',
      'Für jeden Einsatz eine Rückfallebene für den Kommunikationsausfall festlegen.'),
  ],
},

];
