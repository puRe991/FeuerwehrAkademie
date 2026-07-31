/* =========================================================================
   MODUL E — Löscheinsatz & Einsatzlehre (FwDV 3)
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls E. Ersetzt die früher auf
   curriculum.js / curriculum-extra.js / curriculum-extra2.js verteilten
   Kurzfassungen.

   Fachliche Grundlage: FwDV 1, FwDV 3, FwDV 7, DGUV Vorschrift 49.
   Kommandowortlaute können landesrechtlich leicht abweichen – maßgeblich
   ist die im Bundesland eingeführte Fassung. Stand: module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_E = [

/* ---------------------------------------------------------------- E1 ---- */
{
  id: 'e1', title: 'Einsatzablauf & Truppaufgaben', duration: 26,
  blocks: [
    P('Die FwDV 3 ist das Herzstück der deutschen Löscheinsatztaktik. Sie legt fest, wer in einer Einheit welche Aufgabe hat, in welcher Reihenfolge gearbeitet wird und mit welchen Worten befohlen wird. Der Nutzen zeigt sich immer dann, wenn Kräfte zusammenarbeiten, die sich nicht kennen: Jeder weiß trotzdem sofort, was von ihm erwartet wird. Diese Lektion führt durch den Ablauf vom Eintreffen bis zum Wasser am Rohr.'),

    H2('erkundung', 'Erkundung und Lagebeurteilung'),
    P('Bevor irgendetwas befohlen wird, muss der Einheitsführer wissen, womit er es zu tun hat. Die <b>Erkundung</b> beginnt schon auf der Anfahrt – mit dem Einsatzstichwort, der Objektkenntnis und dem, was aus der Ferne sichtbar ist. An der Einsatzstelle geht sie in einen strukturierten Rundgang über.'),
    STEPS(
      'Lage auf den ersten Blick erfassen: Was brennt, wie groß, wie weit fortgeschritten?',
      'Menschen: Sind Personen gemeldet, vermisst oder sichtbar? Wer kann Auskunft geben?',
      'Gefahren erkennen – nach dem Merkschema der Gefahren der Einsatzstelle.',
      'Ausbreitung beurteilen: Wohin läuft der Brand als Nächstes?',
      'Eigene Möglichkeiten prüfen: Kräfte, Wasser, Geräte, Zeit.',
      'Entschluss fassen und in einen Befehl übersetzen.'),
    MNE([{l:'A',w:'Atemgifte'},{l:'A',w:'Angstreaktion'},{l:'A',w:'Ausbreitung'},{l:'C',w:'Chemische Stoffe'},{l:'E',w:'Erkrankung/Verletzung'},{l:'E',w:'Explosion'},{l:'E',w:'Elektrizität'},{l:'E',w:'Einsturz'}],
      'Die „4 A – 1 C – 4 E"-Regel fasst die Gefahren der Einsatzstelle zusammen: Atemgifte, Angstreaktion, Ausbreitung, Atomare Gefahren – Chemische Stoffe – Erkrankung/Verletzung, Explosion, Elektrizität, Einsturz.'),
    CO('info', 'Erkundung hört nie auf', 'Die Lage ändert sich ständig. Erkundung ist deshalb kein einmaliger Schritt am Anfang, sondern ein fortlaufender Vorgang: Jede Rückmeldung eines Trupps, jede neue Beobachtung fließt in eine erneute Beurteilung ein. Genau das beschreibt der Führungsvorgang in <b>Modul L</b>.'),

    H2('befehl', 'Der Einsatzbefehl'),
    P('Aus dem Entschluss wird ein Befehl – und zwar in einer festen Reihenfolge, damit nichts fehlt und nichts missverstanden wird.'),
    MNE([{l:'E',w:'Einheit'},{l:'A',w:'Auftrag'},{l:'M',w:'Mittel'},{l:'Z',w:'Ziel'},{l:'W',w:'Weg'}],
      'Einheit – Auftrag – Mittel – Ziel – Weg: Wer macht was, womit, wozu und auf welchem Weg.'),
    TBL(['Teil', 'Beantwortet', 'Beispiel'],[
      ['Einheit', 'Wer führt aus?', '„Angriffstrupp"'],
      ['Auftrag', 'Was ist zu tun?', '„zur Menschenrettung"'],
      ['Mittel', 'Womit?', '„mit C-Rohr und Rettungstuch"'],
      ['Ziel', 'Wo genau?', '„im ersten Obergeschoss links"'],
      ['Weg', 'Auf welchem Weg?', '„über die Steckleiter" oder „über den Treppenraum"'],
    ]),
    P('Der vollständige Befehl lautet dann beispielsweise: <b>„Angriffstrupp – zur Menschenrettung – mit C-Rohr – im ersten Obergeschoss links – über den Treppenraum – vor!"</b> Der Trupp wiederholt sinngemäß und bestätigt. Fehlt ein Teil des Befehls, fragt der Truppführer nach – lieber fünf Sekunden Rückfrage als ein Trupp am falschen Ort.'),
    CO('tip', 'Warum die Reihenfolge feststeht', 'Der Trupp hört zuerst, dass er gemeint ist, und ist damit aufmerksam. Dann erfährt er den Zweck – daran kann er sein Handeln ausrichten, auch wenn die Lage sich ändert. Erst danach kommen Details. Diese Reihenfolge ist psychologisch durchdacht, nicht zufällig.'),

    H2('trupps', 'Die Aufgaben der Trupps'),
    P('Im Löscheinsatz der Gruppe hat jeder Trupp eine Grundaufgabe, die er ohne gesonderten Befehl beginnt, sobald der Einsatzbefehl gegeben ist. Genau das macht die Einheit schnell.'),
    TBL(['Trupp', 'Grundaufgabe', 'Danach'],[
      ['Angriffstrupp (A)', 'Menschenrettung und Brandbekämpfung – nimmt das erste Rohr vor', 'hält den Innenangriff'],
      ['Wassertrupp (W)', 'verlegt die B-Leitung von der Pumpe zum Verteiler, setzt den Verteiler und stellt die Wasserversorgung zur Entnahmestelle her', 'stellt den Sicherheitstrupp'],
      ['Schlauchtrupp (S)', 'verlegt die Schlauchleitung vom Verteiler zum Angriffstrupp', 'unterstützt, nimmt bei Bedarf das zweite Rohr vor'],
    ]),
    FIG('wasserweg', 'Der Wasserweg: von der Entnahmestelle über Pumpe und Verteiler zum Strahlrohr – verbunden mit Storz-Kupplungen.'),
    CO('info', 'Die Faustregel', 'Der Wassertrupp arbeitet <b>von der Pumpe zum Verteiler</b>, der Angriffstrupp <b>vom Verteiler zum Brand</b>. Der Verteiler ist die Nahtstelle – und damit die wichtigste Position der Einsatzstelle, weil dort über jede Leitung entschieden wird.'),
    P('Melder und Maschinist ergänzen das Bild. Der <b>Melder</b> bleibt beim Gruppenführer, übernimmt Sonderaufgaben, führt Aufzeichnungen und wird häufig zur Atemschutzüberwachung eingeteilt. Der <b>Maschinist</b> sichert das Fahrzeug ab, bedient die Pumpe, überwacht Drücke und Wasservorrat und bleibt an seiner Pumpe – er ist ausdrücklich nicht als Springer für andere Aufgaben gedacht.'),

    H2('sicherheit', 'Der Sicherheitstrupp'),
    DEF('Sicherheitstrupp', 'Ein vollständig ausgerüsteter Trupp, der bereitsteht, um einen in Not geratenen Atemschutztrupp zu retten. Er trägt einsatzbereites Atemschutzgerät, verfügt über ein eigenes Strahlrohr sowie Rettungsmittel und darf keine andere Aufgabe übernehmen, solange er als Sicherheitstrupp eingeteilt ist.'),
    CO('danger', 'Der Grundsatz ohne Ausnahme', 'Kein Innenangriff unter Atemschutz ohne Sicherheitstrupp. Wer ihn aus Personalmangel weglässt, spart keine Kräfte – er riskiert, im Notfall überhaupt niemanden retten zu können. Reicht das Personal nicht, wird nachgefordert und bis dahin von außen gearbeitet.'),
    P('Die Details zu Bereitstellung, Ausrüstung und Notfallverfahren des Sicherheitstrupps stehen in der FwDV 7 und werden in <b>Modul F</b> ausführlich behandelt.'),

    H2('reihenfolge', 'Prioritäten an der Einsatzstelle'),
    P('Wenn Kräfte knapp sind – und das sind sie fast immer in den ersten Minuten – entscheidet die richtige Reihenfolge über den Ausgang des Einsatzes.'),
    OL(
      '<b>Menschenrettung</b> – hat absoluten Vorrang vor allem anderen.',
      '<b>Eigensicherung und Sicherung der Einsatzstelle</b> – ohne sie ist Punkt 1 nicht durchhaltbar.',
      '<b>Ausbreitung verhindern</b> – Riegelstellung, Schutz gefährdeter Bereiche.',
      '<b>Brandbekämpfung</b> – der eigentliche Löschangriff.',
      '<b>Schadenminderung</b> – Wasserschaden begrenzen, Sachwerte schützen.',
      '<b>Nachschau und Übergabe</b> – Glutnester, Brandwache, Dokumentation.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Erkundung ist fortlaufend, nicht einmalig – Gefahren nach 4 A – 1 C – 4 E prüfen.',
      'Einsatzbefehl: <b>Einheit – Auftrag – Mittel – Ziel – Weg</b>.',
      'Angriffstrupp rettet und nimmt das erste Rohr vor.',
      'Wassertrupp: Pumpe → Verteiler, dann Sicherheitstrupp.',
      'Schlauchtrupp: Verteiler → Angriffstrupp.',
      'Der Verteiler ist die Nahtstelle des gesamten Wasserwegs.',
      'Kein Innenangriff unter Atemschutz ohne Sicherheitstrupp.'),
  ],
},

/* ---------------------------------------------------------------- E2 ---- */
{
  id: 'e2', title: 'Wasserführende Armaturen & Wasserförderung', duration: 26,
  blocks: [
    P('Zwischen der Löschwasserentnahmestelle und dem Strahlrohr liegt eine Kette aus Schläuchen, Kupplungen und Armaturen. Jedes Glied hat eine Aufgabe, und jedes hat physikalische Grenzen. Wer diese Kette versteht, weiß im Einsatz sofort, warum am Rohr zu wenig Druck ankommt – und was dagegen hilft.'),

    H2('schlaeuche', 'Schläuche und Kupplungen'),
    P('Feuerwehrschläuche sind nach Durchmessern genormt und mit <b>Storz-Kupplungen</b> versehen – einer Klauenkupplung, die sich durch eine Vierteldrehung verbindet und in beide Richtungen passt. Das klingt banal, ist aber der Grund, warum Schläuche verschiedener Wehren ohne Adapter zusammenpassen.'),
    TBL(['Größe', 'Innendurchmesser', 'Übliche Länge', 'Verwendung'],[
      ['A', '110 mm', '5 m (Saugschlauch: 1,6 m)', 'Zubringer, Saugleitung'],
      ['B', '75 mm', '5 m und 20 m', 'Zubringerleitung Pumpe → Verteiler, B-Rohr'],
      ['C', '42 oder 52 mm', '15 m und 30 m', 'Angriffsleitung zum Strahlrohr'],
      ['D', '25 mm', '5 m und 15 m', 'Kleinlöschgeräte, Vegetationsbrand'],
    ]),
    P('Für die Praxis wichtig: <b>Druckschläuche</b> sind formstabil und werden gerollt oder in Buchten verlegt, <b>Saugschläuche</b> sind durch eine eingearbeitete Spirale formfest, damit sie beim Ansaugen nicht zusammenfallen. Ein Druckschlauch kann niemals saugen – ein häufiger Anfängerfehler bei der offenen Wasserentnahme.'),

    H2('armaturen', 'Die wichtigsten Armaturen'),
    TBL(['Armatur', 'Aufgabe'],[
      ['Standrohr', 'Entnahme aus dem Unterflurhydranten; hat zwei absperrbare B-Abgänge'],
      ['Verteiler', 'teilt eine B-Leitung auf zwei C-Abgänge und einen B-Abgang auf; jeder Abgang einzeln absperrbar'],
      ['Sammelstück', 'führt zwei B-Leitungen zu einem A-Eingang der Pumpe zusammen'],
      ['Übergangsstück', 'verbindet unterschiedliche Kupplungsgrößen, z. B. B auf C'],
      ['Stützkrümmer', 'nimmt die Rückstoßkraft am B-Rohr auf und lenkt die Leitung um'],
      ['Saugkorb', 'verhindert das Ansaugen von Feststoffen und hält das Wasser beim Ansaugen zurück'],
      ['Druckbegrenzungsventil', 'schützt Schläuche und Kräfte bei Wasserförderung über lange Wegstrecken'],
    ]),
    CO('tip', 'Verteiler richtig setzen', 'Der Verteiler steht außerhalb des Gefahrenbereichs, gut sichtbar, an einer Stelle, die nicht von Fahrzeugen überfahren wird, und so, dass die Abgänge in die Angriffsrichtungen zeigen. Ein schlecht gesetzter Verteiler kostet später bei jeder Leitungsänderung Zeit.'),

    H2('strahlrohre', 'Strahlrohre'),
    P('Am Ende der Leitung entscheidet das Strahlrohr, wie das Wasser wirkt. Zwei Bauarten sind verbreitet, und der Unterschied ist erheblich.'),
    TBL(['Bauart', 'Merkmale', 'Stärken', 'Grenzen'],[
      ['Mehrzweckstrahlrohr', 'Vollstrahl oder Sprühstrahl, mit oder ohne Mundstück', 'robust, einfach, große Wurfweite', 'Durchfluss nicht regelbar, grobe Tropfen'],
      ['Hohlstrahlrohr', 'stufenlos regelbarer Durchfluss und Strahlbild', 'feine Tropfen, Rauchgaskühlung, dosierbar', 'empfindlicher, Bedienung muss geübt sein'],
    ]),
    FIG('strahlrohr', 'Vollstrahl für Wurfweite, Sprühstrahl für Wärmeschutz und Rauchgaskühlung – Hohlstrahlrohre regeln beides stufenlos.'),
    P('Als Orientierung für die Durchflussmengen der Mehrzweckstrahlrohre bei etwa 5 bar Strahlrohrdruck gelten die klassischen Werte: <b>C-Rohr</b> rund 100 l/min mit Mundstück und rund 200 l/min ohne Mundstück, <b>B-Rohr</b> rund 400 l/min mit und rund 800 l/min ohne Mundstück. Diese Zahlen sind die Grundlage jeder Wasserbedarfsrechnung – sie sollten sitzen.'),
    CO('warn', 'Vollstrahl ist kein Standard', 'Der Vollstrahl hat Wurfweite und Wucht, kühlt aber schlecht, weil er kaum verdampft. Im Innenangriff wird deshalb mit Sprühstrahl gearbeitet. Vollstrahl ist die Ausnahme für große Entfernung, Kühlung von Behältern aus Deckung und das Durchdringen von Materialschichten.'),

    H2('druckverlust', 'Warum am Rohr weniger ankommt'),
    P('Der Ausgangsdruck der Pumpe kommt nie vollständig am Strahlrohr an. Drei Effekte zehren ihn auf, und alle drei lassen sich beeinflussen.'),
    UL(
      '<b>Höhenunterschied:</b> Je 10 Meter Höhe geht rund 1 bar verloren – bergab wird entsprechend gewonnen. Dieser Wert ist exakte Physik und gilt immer.',
      '<b>Reibungsverluste in der Leitung:</b> Sie steigen mit der Länge und überproportional mit der Durchflussmenge. Doppelte Wassermenge bedeutet ungefähr den vierfachen Reibungsverlust.',
      '<b>Armaturen:</b> Verteiler, Übergangsstücke und Krümmer kosten jeweils einen kleinen Anteil.'),
    CO('info', 'Der praktische Schluss', 'Wer mehr Wasser über eine lange Strecke braucht, gewinnt am meisten durch einen <b>größeren Leitungsquerschnitt</b> – also eine zweite oder eine B- statt C-Leitung – und nicht durch mehr Pumpendruck. Mehr Druck erhöht nur die Reibungsverluste weiter. Die Rechenwege dazu stehen in <b>Modul N (Maschinist)</b> und <b>Modul T (Wasserversorgung)</b>.'),

    H2('lange', 'Wasserförderung über lange Wegstrecke'),
    P('Reicht die Löschwassermenge am Objekt nicht aus – etwa bei Waldbränden oder in Gebieten ohne Hydrantennetz –, wird über eine lange B-Schlauchstrecke gefördert. Ab einer bestimmten Länge oder Höhendifferenz genügt eine Pumpe nicht mehr; dann werden <b>Verstärkerpumpen</b> in die Strecke eingebaut.'),
    FIG('wasserfoerderung', 'Wasserförderung über lange Wegstrecke: Entnahmestelle, Pumpe und Verstärkerpumpen in der Strecke.'),
    KF(
      'Reibungsverluste steigen mit Länge und Durchflussmenge.',
      'Je 10 m Höhenunterschied etwa 1 bar Druckverlust.',
      'Eingangsdruck an jeder Folgepumpe mindestens etwa 1,5 bar halten.',
      'Ausgangsdruck begrenzen, damit die Schläuche nicht überlastet werden.',
      'Druckbegrenzungsventile einsetzen, wo Druckstöße drohen.',
      'Kommunikation zwischen den Pumpen ist entscheidend – ohne Funk keine lange Wegstrecke.'),
    CO('danger', 'Druckstoß', 'Wird ein Strahlrohr am Ende einer langen Strecke schlagartig geschlossen, entsteht ein Druckstoß, der Schläuche platzen lassen und Kräfte verletzen kann. Deshalb: Strahlrohre langsam öffnen und schließen und den Maschinisten über größere Änderungen informieren.'),

    H2('offen', 'Wasserentnahme aus offenem Gewässer'),
    STEPS(
      'Saugschläuche kuppeln, Saugkorb anbringen und mit Ventil- sowie Halteleine sichern.',
      'Saugleitung zu Wasser bringen – Saugkorb muss vollständig eintauchen und darf den Grund nicht berühren.',
      'Entlüftungseinrichtung betätigen, bis Wasser ansteht.',
      'Pumpe langsam auf Betriebsdruck bringen und erst dann den Druckabgang öffnen.',
      'Saughöhe und Ansaugverhalten dauerhaft beobachten.'),
    CO('warn', 'Kavitation', 'Eine zu große Saughöhe, ein verstopfter Saugkorb oder eine undichte Saugleitung führen zu Dampfblasenbildung in der Pumpe – die Pumpe „reißt ab", der Druck bricht ein, und das Laufrad kann Schaden nehmen. Die geodätische Saughöhe liegt praktisch bei etwa 7,5 Metern; darüber wird die Entnahme unzuverlässig.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Storz-Kupplungen machen Schläuche wehrübergreifend kompatibel; A 110, B 75, C 42/52, D 25 mm.',
      'Saugschläuche sind formfest, Druckschläuche nicht – sie können nicht saugen.',
      'Verteiler teilt B auf 2× C und 1× B; jeder Abgang einzeln absperrbar.',
      'Richtwerte bei 5 bar: C-Rohr 100/200 l/min, B-Rohr 400/800 l/min.',
      'Je 10 m Höhe rund 1 bar; Reibungsverlust steigt überproportional mit der Menge.',
      'Mehr Wasser über weite Strecken: größerer Querschnitt statt mehr Druck.',
      'Kavitation vermeiden – praktische Saughöhe bis etwa 7,5 m.'),
  ],
},

/* ---------------------------------------------------------------- E3 ---- */
{
  id: 'e3', title: 'Innenangriff & Brandbekämpfungsverfahren', duration: 24,
  blocks: [
    P('Der Innenangriff ist die wirksamste Form der Brandbekämpfung – und die gefährlichste. Er bringt Einsatzkräfte in einen Raum, in dem Temperatur, Sicht und Sauerstoffgehalt sich binnen Sekunden ändern können. Deshalb ist er in ein enges Regelwerk eingebunden: Atemschutz, Sicherheitstrupp, Wasser am Rohr, gesicherter Rückweg. Diese Lektion erklärt Verfahren und Grundsätze.'),

    H2('entscheidung', 'Offensiv oder defensiv – die Grundentscheidung'),
    P('Vor jedem Innenangriff steht eine Entscheidung der Führungskraft: Kann und soll überhaupt hineingegangen werden?'),
    TBL(['Vorgehen', 'Bedeutung', 'Wann'],[
      ['Offensiv (Innenangriff)', 'Vorgehen in das Gebäude an den Brandherd', 'Menschen vermutet, Lage beherrschbar, Kräfte ausreichend'],
      ['Defensiv (Außenangriff)', 'Bekämpfung von außen, Schutz der Umgebung', 'Einsturzgefahr, Vollbrand ohne Menschenleben, zu wenig Kräfte'],
    ]),
    CO('danger', 'Der Wechsel ins defensive Vorgehen ist kein Rückzug', 'Bei Einsturzgefahr, durchgehendem Vollbrand ohne Hinweis auf Personen oder unzureichenden Kräften ist der Außenangriff die fachlich richtige und lebensrettende Entscheidung. Gebäude sind ersetzbar, Einsatzkräfte nicht. Wer diese Entscheidung trifft, handelt professionell – nicht ängstlich.'),
    P('Beide Verfahren dürfen niemals gleichzeitig am selben Objekt laufen. Ein Außenangriff, der Wasser und Rauchgase auf einen innen vorgehenden Trupp treibt, gefährdet diesen unmittelbar. Der Wechsel zwischen den Verfahren wird deshalb immer angekündigt, und alle Trupps werden zuvor zurückgezogen.'),

    H2('grundsaetze', 'Grundsätze im Innenangriff'),
    KF(
      'Immer geduckt vorgehen – die Temperaturschichtung macht den Bodenbereich deutlich kühler.',
      'Nur mit Wasser am Rohr vorgehen; das Rohr bleibt beim Trupp.',
      'Der Trupp bleibt zusammen – immer in Sicht-, Ruf- oder Körperkontakt.',
      'Rückweg merken und sichern; die Schlauchleitung ist die Leitlinie nach draußen.',
      'Türen kontrolliert öffnen und hinter sich schließen, wenn es die Lage erfordert.',
      'Vor jeder Tür und in jedem neuen Raum die Rauchgasschicht prüfen und kühlen.',
      'Rückmeldungen an den Einheitsführer geben – die Führung braucht Informationen.'),
    P('Die Temperaturschichtung ist dabei kein kleiner Effekt: Während in Deckennähe schon mehrere hundert Grad herrschen können, sind es in Bodennähe oft weniger als hundert. Wer aufrecht durch einen Raum geht, bewegt sich mit dem Kopf im gefährlichsten Bereich – und verliert zusätzlich die Sicht, die in Bodennähe häufig noch besteht.'),

    H2('tuer', 'Die Türprozedur'),
    P('Die Tür zum Brandraum ist der kritischste Punkt des gesamten Innenangriffs. Hinter ihr kann ein sauerstoffarmer Raum voller unverbrannter Pyrolysegase liegen – die Ausgangslage für einen Backdraft.'),
    STEPS(
      'Vor dem Öffnen die Tür prüfen: Temperatur mit dem Handrücken oder der Wärmebildkamera, Rauchaustritt, Geräusche.',
      'Trupp seitlich der Tür positionieren, nie im Öffnungsbereich stehen.',
      'Strahlrohr einsatzbereit, Sprühstrahl eingestellt, Wasser am Rohr.',
      'Tür nur spaltweise öffnen und sofort wieder schließen können – Türsicherungsmittel oder zweiter Trupp am Türblatt.',
      'Kurze Sprühstöße in die austretende Rauchgasschicht geben und die Reaktion beobachten.',
      'Erst wenn die Reaktion beherrschbar bleibt: weiter öffnen und geduckt vorgehen.'),
    CO('warn', 'Was die Reaktion verrät', 'Verdampft das Wasser hörbar und sichtbar sofort, ist es sehr heiß – Vorsicht. Wird der Sprühnebel in den Raum hineingesogen, herrscht Unterdruck und damit Sauerstoffmangel – klassisches Backdraft-Zeichen. Ändert sich nichts, ist die Lage vergleichsweise entspannt.'),

    H2('verfahren', 'Brandbekämpfungsverfahren'),
    TBL(['Verfahren', 'Prinzip', 'Vorteil', 'Grenze'],[
      ['Direkter Angriff', 'Wasser direkt auf das brennende Material', 'wirksame, gezielte Kühlung des Brandguts', 'setzt Sicht auf den Brandherd voraus'],
      ['Indirekter Angriff', 'Wasser an heiße Oberflächen und Decke – der entstehende Dampf erstickt', 'sehr wirksam bei geschlossenen Räumen', '<b>nur wenn sicher keine Personen im Raum sind</b> – Verbrühungsgefahr'],
      ['Rauchgaskühlung', 'kurze Sprühstöße in die heiße Rauchgasschicht', 'senkt Temperatur und Flashover-Gefahr', 'kühlt den Brandherd nicht – ist Wegbereitung, kein Löschen'],
    ]),
    CO('danger', 'Der indirekte Angriff und Menschen im Raum', 'Beim indirekten Angriff entsteht schlagartig sehr viel heißer Wasserdampf. Für eine im Raum befindliche Person bedeutet das schwerste Verbrühungen. Deshalb ist dieses Verfahren ausgeschlossen, solange nicht sicher ist, dass sich niemand im Raum aufhält.'),

    H2('rauchgas', 'Rauchgaskühlung in der Praxis'),
    P('Die Rauchgaskühlung ist die wichtigste Technik des modernen Innenangriffs – und die am häufigsten falsch ausgeführte. Ziel ist nicht, den Raum zu fluten, sondern der heißen Gasschicht über dem Trupp Energie zu entziehen. Dafür werden <b>kurze, dosierte Sprühstöße</b> nach oben gegeben, jeweils gefolgt von einer kurzen Beobachtungspause.'),
    P('Zu viel Wasser bringt zwei Probleme mit sich: Es zerstört die Temperaturschichtung, sodass heiße Gase nach unten gedrückt werden, und es erzeugt große Mengen Wasserdampf, der den Trupp selbst verbrüht. Der Merksatz lautet deshalb: <b>Impulse statt Dauerstrahl, beobachten statt fluten.</b>'),

    H2('ventilation', 'Taktische Ventilation'),
    DEF('Überdruckbelüftung (PPV)', 'Ein Lüfter erzeugt vor einer Zuluftöffnung einen leichten Überdruck und drückt Rauch und Wärme durch eine definierte Abluftöffnung aus dem Gebäude. Voraussetzung ist immer eine geschaffene und kontrollierte Abluftöffnung sowie die Abstimmung mit dem Innenangriff.'),
    P('Richtig eingesetzt verbessert die Ventilation Sicht und Temperatur dramatisch und erleichtert die Menschenrettung. Falsch eingesetzt führt sie dem Brand Sauerstoff zu und trägt Feuer und Rauch in bisher unbetroffene Bereiche – auch in solche, in denen Menschen auf Rettung warten.'),
    STEPS(
      'Abluftöffnung festlegen und schaffen – vor dem Einschalten des Lüfters.',
      'Sicherstellen, dass sich zwischen Zuluft und Abluft keine Personen und keine Trupps befinden.',
      'Innenangriff informieren und Freigabe abwarten.',
      'Lüfter starten, Wirkung beobachten, bei unerwarteter Brandentwicklung sofort abschalten.',
      'Abluftöffnung dauerhaft im Blick behalten.'),
    CO('warn', 'Ventilation ist Führungsaufgabe', 'Der Lüfter wird nicht eingeschaltet, weil er gerade dasteht, sondern auf Befehl und nach Abstimmung. Eine unkoordinierte Belüftung hat schon Trupps in tödliche Lagen gebracht.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Grundentscheidung offensiv oder defensiv – nie beides gleichzeitig am selben Objekt.',
      'Geduckt vorgehen, Wasser am Rohr, Trupp zusammen, Rückweg gesichert.',
      '<b>Türprozedur</b>: prüfen, seitlich stehen, spaltweise öffnen, kühlen, beobachten.',
      'Direkter Angriff kühlt das Brandgut, indirekter erstickt – Letzterer nur ohne Personen im Raum.',
      'Rauchgaskühlung: kurze Impulse, beobachten, nicht fluten.',
      'Überdruckbelüftung nur mit geschaffener Abluftöffnung und Freigabe.',
      'Bei Einsturzgefahr oder zu wenig Kräften ist der Außenangriff die richtige Entscheidung.'),
  ],
},

/* ---------------------------------------------------------------- E4 ---- */
{
  id: 'e4', title: 'Menschenrettung & systematische Personensuche', duration: 22,
  blocks: [
    P('Menschenrettung ist der Grund, warum die Feuerwehr existiert. Sie hat Vorrang vor jeder anderen Maßnahme – und sie ist gleichzeitig die anspruchsvollste Aufgabe im Löscheinsatz, weil sie unter Zeitdruck, ohne Sicht und in einer sich verändernden Lage stattfindet. Diese Lektion beschreibt, wie systematisch gesucht und wie sicher gerettet wird.'),

    H2('prioritaet', 'Wo anfangen?'),
    P('Wenn mehrere Personen betroffen sind, muss die Suche irgendwo beginnen. Die bewährte Reihenfolge orientiert sich daran, wo die Gefahr am größten und die Rettung am aussichtsreichsten ist.'),
    OL(
      '<b>Personen im unmittelbaren Brandbereich</b> – höchste Gefährdung, kürzeste verbleibende Zeit.',
      '<b>Personen im Rauchbereich</b> – Räume oberhalb und in Rauchausbreitungsrichtung.',
      '<b>Personen in den Rettungswegen</b> – Treppenraum, Flure.',
      '<b>Personen in noch nicht betroffenen Bereichen</b> – geordnete Evakuierung.'),
    CO('info', 'Informationen sind Gold wert', 'Angehörige, Nachbarn und Passanten wissen oft genau, wer wo wohnt und ob jemand zu Hause ist. Diese Informationen aktiv einholen und weitergeben – der Melder oder der Einheitsführer erfragt sie parallel zur Erkundung. Klingelschilder, Kinderfahrräder im Flur und abgestellte Rollatoren sind ebenfalls Hinweise.'),

    H2('suche', 'Systematisch absuchen'),
    P('In verrauchten Räumen ist Sicht Glückssache. Damit trotzdem kein Bereich vergessen wird und der Trupp zuverlässig zurückfindet, wird nach einem festen Muster gesucht.'),
    STEPS(
      'Vor dem Betreten Rückweg und Absuchrichtung festlegen und ansagen.',
      'An einer Wand orientieren und diese konsequent halten – <b>Rechtshand-</b> oder <b>Linkshandregel</b>, im gesamten Einsatz einheitlich.',
      'Erst die Wände abtasten, dann die Fläche in der Raummitte absuchen.',
      'Gezielt an den Stellen suchen, an denen Menschen liegen: unter Fenstern, hinter Türen, in und unter Betten, in Schränken, hinter Vorhängen, in Nassräumen.',
      'Abgesuchte Räume kennzeichnen, damit kein Trupp doppelt sucht.',
      'Fund sofort melden – die Führung braucht die Information für die weitere Kräfteverteilung.',
      'Über denselben Weg zurück: Wandkontakt oder Schlauchleitung als Leitlinie.'),
    CO('tip', 'Wo Menschen sich verstecken', 'Kinder verkriechen sich aus Angst – unter Betten, in Schränken, hinter Sofas, in Ecken. Ältere Menschen werden häufig auf dem Weg zur Tür oder im Bad gefunden. Wer nur den Raum „überfliegt", übersieht genau diese Personen.'),
    P('Bei größeren Objekten wird die Suche in Abschnitte gegliedert und dokumentiert – wer hat welchen Bereich wann abgesucht? Diese Dokumentation ist keine Bürokratie: Sie verhindert, dass ein Bereich in dem Glauben ausgelassen wird, ein anderer Trupp sei schon dort gewesen.'),

    H2('transport', 'Rettungsmethoden'),
    P('Wie eine Person aus dem Gefahrenbereich gebracht wird, hängt von ihrem Zustand, vom Weg und von der verfügbaren Zeit ab.'),
    TBL(['Situation', 'Methode', 'Hinweis'],[
      ['gehfähig, ansprechbar', 'führen und stützen, Fluchthaube aufsetzen', 'beruhigen, Blickkontakt halten, klar ansagen'],
      ['nicht gehfähig, kurze Strecke', 'Rautek-Rettungsgriff', 'schnell, aber belastend für Retter und Patient'],
      ['nicht gehfähig, längere Strecke', 'Rettungstuch, Krankentrage, Schleifkorbtrage', 'schonender, braucht mehr Kräfte'],
      ['über Leiter', 'nur mit geübter Technik und Sicherung', 'letzte Wahl, wenn der Treppenraum ausfällt'],
      ['Verdacht auf Wirbelsäulenverletzung', 'achsengerechte Rettung, wenn die Lage es zulässt', 'in akuter Lebensgefahr geht Schnelligkeit vor Schonung'],
    ]),
    P('Die genaue Ausführung der Griffe und Trageverfahren gehört in die praktische Ausbildung und wird in <b>Modul S (Rettung &amp; Selbstrettung)</b> vertieft. Wichtig ist hier das Prinzip: <b>zuerst raus aus dem Gefahrenbereich, dann versorgen.</b> Eine Reanimation im verrauchten Treppenhaus hilft niemandem.'),

    H2('uebergabe', 'Übergabe an den Rettungsdienst'),
    P('An der frischen Luft folgt die geordnete Übergabe. Der rettende Trupp gibt weiter, was er weiß – auch wenn es wenig ist, denn für den Rettungsdienst zählt jede Information.'),
    KF(
      'Wo wurde die Person gefunden – Raum, Lage, Position?',
      'Wie lange war sie vermutlich der Rauchbelastung ausgesetzt?',
      'Was war auffällig – Bewusstsein, Atmung, sichtbare Verletzungen?',
      'Welche Maßnahmen wurden bereits durchgeführt?',
      'Gibt es Hinweise auf weitere Personen im Objekt?'),
    CO('warn', 'Rauchgasintoxikation wird unterschätzt', 'Eine gerettete Person, die zunächst wach und ansprechbar wirkt, kann dennoch erhebliche Mengen Kohlenstoffmonoxid und Blausäure aufgenommen haben. Symptome treten teils verzögert auf. Jede aus dem Rauch gerettete Person gehört dem Rettungsdienst vorgestellt – auch wenn sie das selbst ablehnen möchte.'),

    H2('eigenschutz', 'Eigenschutz bleibt Bedingung'),
    CO('danger', 'Kein Retter ohne Sicherung', 'Auch die dringendste Menschenrettung erfolgt nur mit Atemschutz, mit Sicherheitstrupp und mit gesichertem Rückweg. Ein verunglückter Retter rettet niemanden mehr – er bindet stattdessen die Kräfte, die für die eigentliche Rettung gebraucht würden.'),
    P('Diese Regel wird in der Praxis am häufigsten dort gebrochen, wo der Druck am größten ist: wenn Angehörige schreiend auf ein Fenster zeigen. Genau dann ist die Führungskraft gefordert, den Ablauf durchzuhalten – Trupp vollständig ausgerüstet, Sicherheitstrupp bereit, Wasser am Rohr. Die dabei verlorenen 60 Sekunden sind gut investiert.'),
    P('Umgekehrt gilt: Wenn eine Person <b>sichtbar</b> und ohne Betreten des Gefahrenbereichs erreichbar ist – am Fenster, auf dem Balkon –, wird sofort gehandelt. Drehleiter, tragbare Leitern und Sprungrettungsgeräte sind hierfür die Mittel der Wahl, und sie erfordern keinen Innenangriff.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Suchreihenfolge: Brandbereich → Rauchbereich → Rettungswege → übrige Bereiche.',
      'Informationen von Anwohnern aktiv einholen und weitergeben.',
      'Systematisch mit <b>Rechts- oder Linkshandregel</b> suchen, Räume kennzeichnen.',
      'Gezielt dort suchen, wo Menschen liegen: unter Betten, in Schränken, an Fenstern.',
      'Rettungsmethode nach Zustand und Weg wählen – erst raus, dann versorgen.',
      'Strukturierte Übergabe an den Rettungsdienst, auch bei wachen Personen.',
      'Kein Vorgehen ohne Atemschutz, Sicherheitstrupp und gesicherten Rückweg.'),
  ],
},

/* ---------------------------------------------------------------- E5 ---- */
{
  id: 'e5', title: 'Umweltschutz & Löschwasserrückhaltung', duration: 20,
  blocks: [
    P('Ein Brand ist ein Schadenereignis – die Löschmaßnahmen können ein zweites daraus machen. Löschwasser nimmt auf, was der Brand freisetzt, und trägt es dorthin, wo es besonders schadet: in Böden, Kanäle und Gewässer. Umweltschutz ist deshalb kein Zusatzthema, sondern Teil der Kernaufgabe <b>Schützen</b>.'),

    H2('problem', 'Warum kontaminiertes Löschwasser gefährlich ist'),
    P('Löschwasser löst und transportiert Ruß, Brandrückstände, Schwermetalle, Öle, Schaummittel und – bei Bränden in Betrieben – auch Chemikalien. Schon kleine Mengen können erheblichen Schaden anrichten: Ein Liter Mineralöl kann rechnerisch bis zu einer Million Liter Wasser verunreinigen.'),
    TBL(['Weg', 'Folge'],[
      ['Versickerung in den Boden', 'Grundwasserbelastung, teure Bodensanierung'],
      ['Schmutzwasserkanal', 'Kläranlage kann Schadstoffe nicht abbauen, biologische Stufe kippt'],
      ['Regenwasserkanal', 'direkte Einleitung ins Gewässer – meist der schlimmste Fall'],
      ['Oberflächengewässer', 'Fischsterben, langfristige Schädigung des Ökosystems'],
    ]),
    CO('warn', 'Der Regenwasserkanal ist die größte Falle', 'Viele Einsatzstellen liegen auf Flächen, die an den Regenwasserkanal angeschlossen sind. Dieser führt in aller Regel <b>ungeklärt</b> in den nächsten Bach. Wer nicht weiß, wohin ein Gully führt, muss davon ausgehen, dass er direkt ins Gewässer führt.'),

    H2('rueckhaltung', 'Löschwasser zurückhalten'),
    P('Die wirksamste Maßnahme ist, das Wasser dort zu halten, wo es angefallen ist. Dafür gibt es abgestufte Möglichkeiten – von der einfachen Kanaldichtung bis zum Auffangbehälter.'),
    STEPS(
      'Frühzeitig entscheiden: Ist mit kontaminiertem Löschwasser zu rechnen? Diese Frage gehört in die Erkundung.',
      'Abflusswege erkunden – Gullys, Rinnen, Gefälle, Bodeneinläufe im Gebäude.',
      'Kanaleinläufe abdichten: Kanaldichtkissen, Abdeckmatten, Sandsäcke, notfalls Folie mit Beschwerung.',
      'Auffangraum schaffen: Eindeichen mit Sandsäcken, Auffangbecken, Faltbehälter, Mulden nutzen.',
      'Wenn vorhanden: betriebliche Löschwasserrückhalteeinrichtungen aktivieren und Schieber schließen lassen.',
      'Anfallendes Wasser abpumpen und in Behälter oder Tankfahrzeuge übernehmen.',
      'Untere Wasserbehörde, Umweltamt und Entsorgungsfachbetrieb frühzeitig einbinden.'),
    CO('info', 'Wer entscheidet über die Entsorgung?', 'Die Feuerwehr hält zurück und dokumentiert – über Beprobung und Entsorgung entscheiden die Umweltbehörde und der Verursacher. Wichtig ist, dass das Wasser bis dahin nicht unkontrolliert abläuft und dass festgehalten wird, was wo angefallen ist.'),

    H2('sparsam', 'Wasser gezielt einsetzen'),
    P('Die zweite, oft unterschätzte Maßnahme ist, von vornherein weniger Wasser einzusetzen. Modernes Löschen heißt, mit möglichst geringer Wassermenge den größten Effekt zu erzielen – durch Hohlstrahlrohre mit regelbarem Durchfluss, durch Impulslöschen und durch das konsequente Schließen des Rohrs, sobald es nicht gebraucht wird.'),
    KF(
      'Durchfluss am Hohlstrahlrohr an die tatsächliche Lage anpassen.',
      'Rohr schließen, sobald nicht gelöscht wird – nicht „laufen lassen".',
      'Sprühstrahl statt Vollstrahl, wo es die Lage zulässt.',
      'Nach dem Löschen zügig auf Nachschau und Kühlung umstellen.',
      '„So viel wie nötig, so wenig wie möglich" – auch als Schutz vor Wasserschaden im Gebäude.'),

    H2('gefahrgut', 'Besondere Vorsicht bei Gefahrstoffen'),
    CO('danger', 'Kennzeichnung „X" beachten', 'Trägt die Gefahrnummer auf der orangefarbenen Warntafel ein vorangestelltes <b>X</b>, darf der Stoff <b>nicht mit Wasser</b> in Berührung kommen – es droht eine gefährliche Reaktion. In diesem Fall wird trocken gearbeitet oder ein geeignetes anderes Löschmittel eingesetzt. Die Systematik der Warntafel behandelt <b>Modul I</b>.'),
    P('Auch ohne X-Kennzeichnung gilt bei Chemikalien: Rücksprache mit dem Fachberater, Nutzung der Gefahrgutdatenbanken und Einsatz des Löschmittels, das der Stoff verträgt. Schaummittelhaltiges Wasser ist dabei selbst ein Umweltthema – siehe die PFAS-Problematik in <b>Modul B</b>.'),

    H2('nachhaltig', 'Umweltschutz als Führungsaufgabe'),
    P('Ob Löschwasser zurückgehalten wird, entscheidet sich nicht am Strahlrohr, sondern in der Einsatzleitung – und zwar früh. Wer erst nach zwanzig Minuten an den Gully denkt, hat die Entscheidung bereits verloren. Deshalb gehört die Frage „Wohin läuft das Wasser?" zu den Standardfragen der Erkundung, gleich neben „Wo sind Menschen?" und „Wohin breitet sich der Brand aus?".'),
    P('Zum Umweltschutz gehört ebenso die geordnete Übergabe der Einsatzstelle: Was ist ausgelaufen, was wurde zurückgehalten, was muss noch entsorgt werden? Diese Informationen werden dokumentiert und an Eigentümer, Behörde und gegebenenfalls die Polizei weitergegeben.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Löschwasser nimmt Schadstoffe auf und trägt sie in Boden, Kanal und Gewässer.',
      'Der Regenwasserkanal führt meist ungeklärt in ein Gewässer.',
      'Abflusswege gehören in die Erkundung – früh entscheiden, nicht nachträglich.',
      'Rückhalten durch Kanaldichtkissen, Eindeichen, Auffangbehälter, betriebliche Anlagen.',
      'Wenig Wasser einsetzen: Hohlstrahlrohr regeln, Rohr schließen, Sprühstrahl nutzen.',
      'Gefahrnummer mit <b>X</b>: kein Wasser einsetzen.',
      'Umweltbehörde früh einbinden, Vorgänge dokumentieren.'),
  ],
},

/* ---------------------------------------------------------------- E6 ---- */
{
  id: 'e6', title: 'Kommandos & Ordnung im Einsatz', duration: 20,
  blocks: [
    P('Unter Atemschutz ist Sprache schwer verständlich, an der Pumpe übertönt der Motor jedes Wort, und im Stress hört man nur die Hälfte. Genau deshalb arbeitet die Feuerwehr mit einer <b>genormten Kommandosprache</b>: kurze, feststehende Formeln, deren Bedeutung jeder kennt und die auch dann funktionieren, wenn die Bedingungen schlecht sind.'),

    H2('warum', 'Warum feste Kommandos?'),
    P('Ein Kommando ist ein vereinbartes Signal, keine Gesprächsäußerung. Sein Wert liegt darin, dass es <b>nicht interpretiert</b> werden muss. „Wasser marsch" bedeutet überall dasselbe – in Flensburg wie in Garmisch, im Lehrgang wie im Ernstfall, beim eigenen Zugführer wie beim fremden.'),
    KF(
      'Eindeutigkeit: eine Bedeutung, keine Auslegung.',
      'Kürze: verständlich auch bei Lärm und schlechter Sicht.',
      'Überörtlichkeit: fremde Einheiten arbeiten sofort mit.',
      'Sicherheit: sicherheitsrelevante Kommandos werden sofort und ohne Rückfrage befolgt.'),

    H2('ordnung', 'Antrete- und Sitzordnung'),
    P('Ordnung im Einsatz beginnt vor dem Ausrücken. Die FwDV 3 legt fest, wo jede Funktion sitzt und wo sie antritt – damit der Einheitsführer mit einem Blick sieht, ob die Einheit vollständig ist und wer welche Funktion übernommen hat.'),
    UL(
      '<b>Sitzordnung:</b> Jeder Funktion ist ein fester Sitzplatz im Fahrzeug zugeordnet. Das verhindert Diskussionen beim Ausrücken und stellt sicher, dass die Atemschutzgeräte für die richtigen Funktionen erreichbar sind.',
      '<b>Antreteordnung:</b> Die Mannschaft tritt in einer festen Reihenfolge an – der Einheitsführer hat sofort den Überblick über Stärke und Besetzung.',
      '<b>Aufsitzen und Absitzen:</b> Auf Kommando, geordnet und immer zur <b>verkehrsabgewandten Seite</b>. Auf Straßen ist das eine der wichtigsten Sicherheitsregeln überhaupt.'),
    CO('danger', 'Absitzen zur sicheren Seite', 'Die meisten schweren Unfälle im Feuerwehrdienst passieren nicht im Brandraum, sondern auf der Straße. Zur Fahrbahnseite abzusitzen, weil es näher ist, hat schon Einsatzkräfte das Leben gekostet. Das Fahrzeug wird als Schutzschild genutzt – nicht umgangen.'),

    H2('aufbau', 'Wie ein Kommando aufgebaut ist'),
    DEF('Aufbau eines Kommandos', 'Ein Kommando besteht aus einer <b>Ankündigung</b> (wer ist gemeint, was soll geschehen) und einem betonten <b>Ausführungswort</b>. Gehandelt wird ausschließlich auf das Ausführungswort. Beispiel: „Erstes Rohr – <b>Wasser marsch!</b>" – die Ankündigung nennt die Leitung, die Ausführung löst die Handlung aus.'),
    P('Diese Zweiteilung gibt allen Beteiligten Zeit, sich vorzubereiten, und verhindert, dass eine Handlung zu früh beginnt. Wer die Ankündigung hört, richtet sich aus; wer das Ausführungswort hört, handelt. Deshalb wird die Ausführung laut und betont gegeben und nie beiläufig genuschelt.'),

    H2('kommandos', 'Die wichtigsten Einsatzkommandos'),
    TBL(['Kommando', 'Bedeutung'],[
      ['„…trupp – zum Einsatz fertig!"', 'Der Trupp rüstet sich vollständig aus und meldet Bereitschaft'],
      ['„Zum Angriff – fertig!" / „Vor!"', 'Angriff vortragen, vorgehen'],
      ['„Wasser marsch!"', 'Wasser auf die benannte Leitung geben'],
      ['„Wasser halt!"', 'Wasserabgabe sofort stoppen'],
      ['„Rohr halt!"', 'Strahlrohr schließen'],
      ['„Verteiler auf – erstes Rohr!"', 'Abgang am Verteiler für die erste Leitung öffnen'],
      ['„Zurück, marsch – zurück!"', 'Geordneter Rückzug aller Kräfte'],
      ['„Zum Abmarsch – fertig!"', 'Geräte verlasten, Einheit macht sich abmarschbereit'],
    ]),
    CO('info', 'Landesfassungen beachten', 'Die genaue Wortwahl kann je nach eingeführter FwDV-Fassung und Landesvorschrift leicht abweichen. Das Prinzip – Ankündigung plus Ausführungswort, feste Bedeutung – ist bundesweit identisch. Im Zweifel gilt die Fassung deiner Landesfeuerwehrschule.'),

    H2('befehl', 'Befehl und Kommando – der Unterschied'),
    TBL(['', 'Einsatzbefehl', 'Kommando'],[
      ['Regelt', 'was ein Trupp erreichen soll', 'die Ausführung einer Grundtätigkeit'],
      ['Aufbau', 'Einheit – Auftrag – Mittel – Ziel – Weg', 'Ankündigung + Ausführungswort'],
      ['Beispiel', '„Angriffstrupp – zur Brandbekämpfung – mit C-Rohr – im Erdgeschoss – über den Flur – vor!"', '„Erstes Rohr – Wasser marsch!"'],
      ['Wer gibt ihn', 'der Einheitsführer', 'Einheitsführer oder Truppführer'],
    ]),
    P('Beide greifen ineinander: Der Befehl legt Ziel und Auftrag fest, die Kommandos steuern die einzelnen Handgriffe auf dem Weg dorthin. Wer beides beherrscht, kann in jeder deutschen Feuerwehr sofort mitarbeiten.'),

    H2('rueckmeldung', 'Rückmeldungen und Bestätigungen'),
    P('Kommunikation ist keine Einbahnstraße. Ein Trupp, der einen Auftrag erhält, bestätigt ihn; ein Trupp, der etwas Wichtiges feststellt, meldet es unaufgefordert. Ohne diese Rückmeldungen führt der Einheitsführer blind.'),
    KF(
      'Auftrag verstanden? Kurz bestätigen, im Zweifel nachfragen.',
      'Lageänderungen sofort melden – auch scheinbar Nebensächliches.',
      'Personenfund, Gefahrstellen und Rückzug haben Meldevorrang.',
      'Meldungen kurz, sachlich und vollständig – Wer, Wo, Was, Was wird gebraucht.'),
    CO('danger', 'Rückzug geht immer', 'Das Kommando „Zurück, marsch – zurück!" oder ein vereinbartes Rückzugssignal – etwa ein wiederholtes Signal mit dem Fahrzeughorn – muss von jeder Kraft <b>sofort und ohne Rückfrage</b> befolgt werden. Diskussionen über den Rückzug finden nach dem Einsatz statt, nicht während.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Kommandos sind genormte Signale, keine Gesprächsbeiträge.',
      'Aufbau: <b>Ankündigung + betontes Ausführungswort</b> – gehandelt wird erst auf die Ausführung.',
      'Sitz- und Antreteordnung schaffen Überblick; Absitzen immer zur verkehrsabgewandten Seite.',
      'Befehl regelt das Ziel, Kommando die Ausführung.',
      'Aufträge bestätigen, Lageänderungen unaufgefordert melden.',
      'Rückzugskommandos werden sofort und ohne Rückfrage befolgt.'),
  ],
},

/* ---------------------------------------------------------------- E7 ---- */
{
  id: 'e7', title: 'Kommando-Referenz: Löschangriff Schritt für Schritt', duration: 24,
  blocks: [
    P('Diese Lektion ist eine Referenz zum Nachschlagen: der vollständige Ablauf eines Löschangriffs der Gruppe von der Ankunft bis zum Wasser am Rohr – mit den Kommandos an der jeweils richtigen Stelle. Sie ersetzt keine praktische Übung, hilft aber, den Ablauf vor dem Dienstabend im Kopf durchzugehen.'),

    H2('ablauf', 'Der Löschangriff im Überblick'),
    FIG('gruppe', 'Die Gruppe nach FwDV 3 – jede Funktion hat im Löschangriff einen festen Platz im Ablauf.'),
    STEPS(
      'Fahrzeug hält in Einsatzstellung. Der Maschinist sichert ab, der Gruppenführer gibt <b>„Absitzen!"</b>.',
      'Die Mannschaft sitzt zur verkehrsabgewandten Seite ab und tritt in Antreteordnung an.',
      'Der Gruppenführer erkundet, beurteilt die Lage und fasst seinen Entschluss.',
      'Er gibt den Einsatzbefehl nach dem Schema Einheit – Auftrag – Mittel – Ziel – Weg.',
      'Der Wassertrupp verlegt die B-Leitung von der Pumpe zum Verteiler und setzt den Verteiler.',
      'Der Wassertrupp stellt die Wasserversorgung von der Entnahmestelle zur Pumpe her.',
      'Der Schlauchtrupp verlegt die Angriffsleitung vom Verteiler zum Angriffstrupp.',
      'Der Angriffstrupp rüstet sich aus und meldet <b>„Angriffstrupp zum Angriff fertig"</b>.',
      'Am Verteiler: <b>„Erstes Rohr – Wasser marsch!"</b>',
      'Der Wassertrupp wird nach Herstellung der Wasserversorgung <b>Sicherheitstrupp</b>.'),
    CO('info', 'Parallel statt nacheinander', 'Die Schritte laufen in der Praxis weitgehend gleichzeitig ab – während der Wassertrupp die Leitung verlegt, rüstet sich der Angriffstrupp bereits aus. Die Nummerierung zeigt die logische Reihenfolge, nicht eine zeitliche Abfolge.'),

    H2('wasserversorgung', 'Kommandos der Wasserversorgung'),
    TBL(['Kommando', 'Bedeutung'],[
      ['„Zum Einsatz – fertig!"', 'Die benannte Einheit rüstet sich aus und stellt die Leitung her'],
      ['„Fertig zum Ansaugen!"', 'Saugleitung ist gekuppelt und zu Wasser gebracht'],
      ['„Saugleitung – hoch!"', 'Saugleitung wird angehoben'],
      ['„Saugleitung – zu Wasser!"', 'Saugleitung wird ins Wasser eingelegt'],
      ['„Wasser marsch!"', 'Wasser auf die Zubringer- oder Angriffsleitung geben'],
      ['„Verteiler auf – erstes Rohr!"', 'Abgang für die erste C-Leitung öffnen'],
      ['„Wasser halt!"', 'Wasserabgabe sofort stoppen'],
    ]),

    H2('angriff', 'Kommandos am Rohr und beim Rückzug'),
    TBL(['Kommando', 'Bedeutung'],[
      ['„…trupp – zum Einsatz fertig!"', 'Trupp rüstet sich vollständig aus, meldet Bereitschaft'],
      ['„Zum Angriff – fertig!"', 'Angriff wird vorbereitet'],
      ['„Vor!"', 'Trupp geht vor'],
      ['„Rohr halt – Wasser halt!"', 'Strahlrohr schließen, Wasserabgabe stoppen'],
      ['„Zurück, marsch – zurück!"', 'Geordneter Rückzug der Kräfte'],
      ['„Zum Abmarsch – fertig!"', 'Geräte verlasten, Einheit macht sich abmarschbereit'],
    ]),
    CO('warn', 'Vor dem „Wasser marsch"', 'Bevor Wasser auf eine Leitung gegeben wird, prüft der Verantwortliche: Ist die Leitung vollständig gekuppelt? Ist das Strahlrohr geschlossen? Steht niemand in der Leitung oder auf einer Kupplung? Ein unter Druck aufspringender Schlauch verletzt zuverlässig.'),

    H2('th', 'Kommandos bei der technischen Hilfeleistung'),
    P('Auch abseits des Löscheinsatzes gilt das Prinzip der klaren Ansage. Bei der technischen Hilfeleistung kündigt der Geräteführer <b>jede kraftbetätigte Bewegung an</b>, bevor sie beginnt – damit alle im Arbeitsbereich vorbereitet sind und der Patientenschutz reagieren kann.'),
    UL(
      '„Spreizer öffnet" / „Spreizer schließt"',
      '„Schere schneidet"',
      '„Achtung – Bewegung!" vor jedem Heben oder Absenken',
      '„Halt!" – von <b>jeder</b> Einsatzkraft und vom Patientenschutz jederzeit auslösbar'),
    CO('danger', 'Jeder darf „Halt" rufen', 'Bei der technischen Hilfeleistung darf und muss jede Einsatzkraft die Arbeit sofort stoppen, wenn sie eine Gefahr erkennt – unabhängig von Funktion und Dienstgrad. Dieses Vetorecht ist ausdrücklich gewollt und wird nach dem Einsatz nie kritisiert.'),

    H2('grundsatz', 'Grundsätze der Kommandogabe'),
    KF(
      'Ankündigung und betontes Ausführungswort – gehandelt wird erst auf die Ausführung.',
      'Laut, deutlich, eindeutig und in der genormten Form.',
      'Blickkontakt herstellen, wo möglich – unter Atemschutz zusätzlich mit Handzeichen arbeiten.',
      'Empfang wichtiger Kommandos bestätigen.',
      'Sicherheitsrelevante Kommandos haben Vorrang und werden weitergegeben.',
      'Im Zweifel nachfragen – eine Rückfrage kostet Sekunden, ein Missverständnis kostet mehr.'),
    CO('tip', 'So übst du das wirksam', 'Kommandos lernt man nicht durch Auswendiglernen, sondern durch Sprechen. Geh den Ablauf im Kopf durch und sprich die Kommandos laut mit – im Auto, beim Spaziergang, vor dem Dienstabend. Was du einmal ausgesprochen hast, ist im Einsatz abrufbar; was du nur gelesen hast, oft nicht.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Ablauf: Absitzen → Erkundung → Befehl → Wasserversorgung → Angriffsleitung → Wasser marsch.',
      'Wassertrupp: Pumpe → Verteiler, dann Entnahmestelle, danach Sicherheitstrupp.',
      'Schlauchtrupp: Verteiler → Angriffstrupp.',
      'Vor „Wasser marsch" die Leitung prüfen: gekuppelt, Rohr geschlossen, niemand in der Leitung.',
      'Bei der THL jede kraftbetätigte Bewegung ankündigen.',
      'Jede Einsatzkraft darf jederzeit „Halt" rufen.',
      'Kommandos laut mitsprechen – so werden sie im Einsatz abrufbar.'),
  ],
},

];
