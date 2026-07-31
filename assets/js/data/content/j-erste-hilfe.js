/* =========================================================================
   MODUL J — Erste Hilfe & lebensrettende Sofortmaßnahmen
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls J.

   Fachliche Grundlage: Leitlinien des European Resuscitation Council (ERC)
   in der jeweils geltenden Fassung, DGUV Information 204-006 (Erste Hilfe),
   FwDV 1 und 3. Erste Hilfe ersetzt keine praktische Ausbildung – jede
   Einsatzkraft benötigt einen gültigen, praktisch geübten Erste-Hilfe-
   Nachweis. Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_J = [

/* ---------------------------------------------------------------- J1 ---- */
{
  id: 'j1', title: 'Rettungskette, Notruf & Basismaßnahmen', duration: 22,
  blocks: [
    P('Die Feuerwehr ist bei vielen Notfällen vor dem Rettungsdienst da – manchmal um Minuten, in ländlichen Bereichen um deutlich mehr. Genau in diesen Minuten entscheidet sich bei Kreislaufstillstand, starken Blutungen oder verlegten Atemwegen, ob ein Mensch überlebt. Diese Lektion legt die Grundlagen: das Denkmodell der Rettungskette, den Notruf und das systematische Vorgehen beim Auffinden einer Person.'),

    H2('kette', 'Die Rettungskette'),
    P('Die Rettungskette beschreibt die Versorgung eines Notfallpatienten als Abfolge ineinandergreifender Glieder. Das Bild ist bewusst gewählt: Eine Kette ist immer nur so stark wie ihr <b>schwächstes</b> Glied. Der beste Notarzt kann nicht ausgleichen, was in den ersten fünf Minuten versäumt wurde.'),
    UL(
      '<b>Absichern und Sofortmaßnahmen</b> – Eigenschutz, Gefahrenbereich, lebensrettende Handgriffe',
      '<b>Notruf 112</b> – so früh wie möglich, parallel zu den Maßnahmen',
      '<b>Weitere Erste Hilfe</b> – Blutstillung, Lagerung, Betreuung, Wärmeerhalt',
      '<b>Rettungsdienst</b> – notfallmedizinische Versorgung und Transport',
      '<b>Krankenhaus</b> – definitive Versorgung'),
    FIG('rettungskette', 'Die Rettungskette: Nur wenn alle Glieder greifen, gelingt die Versorgung.'),
    P('Für die Feuerwehr sind die ersten drei Glieder der eigentliche Auftrag. Wer als Ersteintreffender richtig handelt, verschafft dem Rettungsdienst die Ausgangslage, aus der heraus überhaupt etwas zu erreichen ist.'),
    CO('info', 'Feuerwehr als First Responder', 'In vielen Landkreisen wird die Feuerwehr bei lebensbedrohlichen Notfällen parallel zum Rettungsdienst alarmiert, weil sie schneller vor Ort ist. Diese sogenannte First-Responder- oder Helfer-vor-Ort-Alarmierung ist keine Konkurrenz zum Rettungsdienst, sondern schließt die Lücke bis zu seinem Eintreffen.'),

    H2('eigenschutz', 'Eigenschutz zuerst'),
    P('Der erste Blick gilt nicht dem Patienten, sondern der Lage. Ein Helfer, der selbst zum Patienten wird, hat die Situation verschlechtert statt verbessert. Das ist keine Theorie – Verkehrsunfälle auf Autobahnen und Stromunfälle fordern regelmäßig Ersthelfer als zusätzliche Opfer.'),
    KF(
      'Gefahren für mich, für Betroffene und für Umstehende prüfen: Verkehr, Strom, Gase, Feuer, Absturz.',
      'Einsatzstelle absichern, bevor gearbeitet wird – Warnkleidung, Warndreieck, Absperrung.',
      '<b>Einmalhandschuhe</b> anziehen, bei Blutungen zusätzlich Schutzbrille erwägen.',
      'Bei Gefahrstoffen, Strom oder unklarer Lage: erst Gefahr beseitigen oder Fachkräfte abwarten.',
      'Nur so viele Helfer wie nötig in den Gefahrenbereich.'),
    CO('danger', 'Infektionsschutz ist Pflicht', 'Blut und Körperflüssigkeiten können Krankheitserreger übertragen. Einmalhandschuhe gehören in jede Einsatzjacke und werden angezogen, bevor der Patient berührt wird – nicht danach. Nach dem Einsatz Hände desinfizieren und waschen, kontaminierte Kleidung wechseln.'),

    H2('notruf', 'Der Notruf 112'),
    P('Die 112 ist europaweit erreichbar, kostenfrei und funktioniert aus jedem Netz. Der Anruf sollte so früh wie möglich erfolgen – wenn mehrere Helfer da sind, parallel zu den Maßnahmen. Bist du allein bei einer bewusstlosen Person, gilt: <b>erst Notruf, dann Maßnahmen</b>, denn ohne Rettungsdienst hilft die beste Reanimation nur begrenzt.'),
    MNE([{l:'W',w:'Wo'},{l:'W',w:'Was'},{l:'W',w:'Wie viele'},{l:'W',w:'Welche'},{l:'W',w:'Warten'}],
      'Wo ist es passiert? Was ist geschehen? Wie viele Betroffene? Welche Verletzungen oder Erkrankungen? Warten auf Rückfragen – niemals selbst auflegen.'),
    P('Der letzte Punkt ist der wichtigste und wird am häufigsten falsch gemacht. Der Disponent in der Leitstelle arbeitet mit einer strukturierten Abfrage, erkennt daran den richtigen Alarm und kann Anleitung zur Reanimation über das Telefon geben – die sogenannte <b>Telefonreanimation</b>. Wer auflegt, schneidet diese Hilfe ab.'),
    CO('tip', 'Lautsprecher einschalten', 'Schalte das Telefon auf Lautsprecher und lege es neben dich. So kannst du weiterarbeiten und gleichzeitig die Anleitung der Leitstelle hören. Bei einer Reanimation gibt der Disponent den Takt vor – das hilft messbar.'),

    H2('auffinden', 'Auffinden einer Person – das Schema'),
    P('Damit unter Stress nichts vergessen wird, folgt die Untersuchung einem festen Ablauf. Er dauert insgesamt weniger als eine Minute.'),
    STEPS(
      '<b>Eigenschutz und Gefahren prüfen</b> – erst dann herantreten.',
      '<b>Bewusstsein prüfen:</b> laut ansprechen und vorsichtig an beiden Schultern rütteln.',
      '<b>Keine Reaktion?</b> Laut um Hilfe rufen und Umstehende gezielt ansprechen: „Sie im blauen Mantel – rufen Sie den Notruf 112."',
      '<b>Atemwege freimachen:</b> Kopf vorsichtig überstrecken, Kinn anheben.',
      '<b>Atmung prüfen – maximal 10 Sekunden:</b> Brustkorb ansehen, Atemgeräusche hören, Luftstrom an der Wange fühlen.',
      '<b>Normale Atmung vorhanden?</b> → stabile Seitenlage, Notruf, Betreuung, Atmung weiter kontrollieren.',
      '<b>Keine normale Atmung?</b> → sofort mit der Wiederbelebung beginnen und AED holen lassen.'),
    CO('danger', 'Schnappatmung ist keine Atmung', 'In den ersten Minuten nach einem Kreislaufstillstand zeigen viele Betroffene eine unregelmäßige, geräuschvolle, ringende Atmung – die Schnappatmung. Sie sieht nach Atmung aus, ist aber ein <b>Zeichen des Kreislaufstillstands</b>. Wer sie für Atmung hält, verliert die entscheidenden Minuten. Im Zweifel gilt: <b>keine normale Atmung → Reanimation beginnen.</b>'),

    H2('seitenlage', 'Die stabile Seitenlage'),
    P('Die stabile Seitenlage ist für <b>bewusstlose Personen mit normaler Atmung</b> gedacht. Sie hält die Atemwege frei und sorgt dafür, dass Erbrochenes und Blut ablaufen können, statt in die Lunge zu gelangen.'),
    FIG('seitenlage', 'Stabile Seitenlage: hält die Atemwege einer bewusstlosen Person mit normaler Atmung frei.'),
    STEPS(
      'Neben der Person knien, Beine strecken.',
      'Den nahen Arm angewinkelt nach oben legen, Handfläche nach oben.',
      'Den fernen Arm über die Brust führen, Handrücken an die nahe Wange legen.',
      'Das ferne Bein am Knie greifen und aufstellen.',
      'Am Knie zu sich herüberziehen, bis die Person auf der Seite liegt.',
      'Kopf überstrecken, Mund leicht öffnen, Hand unter der Wange belassen.',
      'Zudecken, betreuen, Atmung <b>fortlaufend</b> kontrollieren.'),
    CO('warn', 'Die Atmung kann jederzeit aussetzen', 'Eine bewusstlose Person in Seitenlage darf nie allein gelassen werden. Setzt die normale Atmung aus, wird sofort auf den Rücken gedreht und mit der Wiederbelebung begonnen. Deshalb ist die Kontrolle keine Fleißaufgabe, sondern der eigentliche Zweck der Betreuung.'),

    H2('betreuung', 'Betreuen ist Erste Hilfe'),
    P('Zwischen den technischen Maßnahmen wird die psychische Betreuung leicht übersehen – dabei ist sie eine der wirksamsten Hilfen überhaupt. Ein Mensch in einem Notfall hat Angst, Schmerzen und das Gefühl, die Kontrolle verloren zu haben.'),
    KF(
      'Sich mit Namen vorstellen und sagen, dass Hilfe unterwegs ist.',
      'Auf Augenhöhe gehen, ruhig und langsam sprechen.',
      'Körperkontakt anbieten – eine Hand halten wirkt.',
      'Vor Wärmeverlust schützen: zudecken, Isolation nach unten nicht vergessen.',
      'Vor Blicken schützen – Sichtschutz stellen, Schaulustige fernhalten.',
      'Nicht anlügen, aber auch keine Prognosen abgeben.',
      'Angehörige einbeziehen und ebenfalls betreuen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Rettungskette: Absichern und Sofortmaßnahmen → Notruf → Erste Hilfe → Rettungsdienst → Krankenhaus.',
      'Eigenschutz vor Patientenversorgung – Handschuhe immer.',
      'Notruf nach den <b>5 W</b>, nicht auflegen, Lautsprecher nutzen.',
      'Prüfschema: Bewusstsein → Hilfe rufen → Atemwege freimachen → Atmung max. 10 s prüfen.',
      '<b>Schnappatmung ist keine Atmung</b> – im Zweifel reanimieren.',
      'Stabile Seitenlage nur bei bewusstlos <b>mit</b> normaler Atmung; Atmung fortlaufend kontrollieren.',
      'Betreuung, Wärmeerhalt und Sichtschutz gehören zur Ersten Hilfe.'),
  ],
},

/* ---------------------------------------------------------------- J2 ---- */
{
  id: 'j2', title: 'Reanimation & AED', duration: 22,
  blocks: [
    P('Der plötzliche Herz-Kreislauf-Stillstand ist der zeitkritischste Notfall überhaupt. Ohne Maßnahmen sinkt die Überlebenswahrscheinlichkeit mit jeder Minute um etwa zehn Prozent – nach zehn Minuten ist sie praktisch bei null. Gleichzeitig ist die Wiederbelebung eine der wenigen Maßnahmen, die ein Laie ohne Ausrüstung durchführen kann. Diese Lektion behandelt sie deshalb in aller Ausführlichkeit.'),

    H2('warum', 'Was beim Kreislaufstillstand passiert'),
    P('Bei einem Kreislaufstillstand pumpt das Herz nicht mehr wirksam – meistens, weil es in ein ungeordnetes Flimmern geraten ist (<b>Kammerflimmern</b>). Das Gehirn wird nicht mehr mit Sauerstoff versorgt. Nach etwa drei bis fünf Minuten beginnen irreversible Schäden.'),
    P('Die Herzdruckmassage ersetzt die Pumpfunktion und hält einen Restkreislauf aufrecht. Sie behebt das Flimmern nicht – das kann nur die <b>Defibrillation</b>. Aber sie kauft die Zeit, bis der Defibrillator da ist, und sie hält das Herz in einem Zustand, in dem der Schock überhaupt noch wirken kann. Deshalb gehören beide zusammen.'),
    CO('danger', 'Zeit ist Leben', 'Pro Minute ohne Wiederbelebung sinkt die Überlebenswahrscheinlichkeit um rund 10 Prozent. Frühe Herzdruckmassage und frühe Defibrillation sind die beiden Glieder, die über das Ergebnis entscheiden – und beide liegen zeitlich vor dem Eintreffen des Rettungsdienstes.'),

    H2('hlw', 'Herz-Lungen-Wiederbelebung beim Erwachsenen'),
    P('Bei fehlender normaler Atmung wird sofort begonnen. Es wird nicht nach einem Puls gesucht – das kostet Zeit und ist selbst für Geübte unzuverlässig.'),
    FIG('hlw', 'Herz-Lungen-Wiederbelebung im Verhältnis 30 : 2 – 30 Kompressionen, dann 2 Beatmungen.'),
    TBL(['Parameter', 'Vorgabe'],[
      ['Verhältnis', '<b>30 Kompressionen : 2 Beatmungen</b>'],
      ['Druckpunkt', 'Mitte des Brustkorbs, untere Hälfte des Brustbeins'],
      ['Drucktiefe', '5 bis 6 cm'],
      ['Frequenz', '100 bis 120 pro Minute'],
      ['Entlastung', 'Brustkorb nach jeder Kompression vollständig entlasten'],
      ['Unterbrechungen', 'so kurz wie möglich, möglichst unter 10 Sekunden'],
      ['Helferwechsel', 'etwa alle 2 Minuten, um Qualitätsverlust zu vermeiden'],
    ]),
    STEPS(
      'Person flach auf harter Unterlage auf den Rücken legen, Brustkorb freimachen.',
      'Handballen auf die Mitte des Brustkorbs setzen, zweite Hand darüber, Finger verschränken.',
      'Arme durchstrecken, Schultern senkrecht über dem Druckpunkt – aus dem Oberkörper arbeiten, nicht aus den Armen.',
      '30-mal kräftig und zügig drücken, 5 bis 6 cm tief, vollständig entlasten.',
      'Atemwege freimachen, Nase verschließen, 2-mal je etwa 1 Sekunde beatmen – der Brustkorb soll sich sichtbar heben.',
      'Ohne Pause weiter im Wechsel 30 : 2 bis zur Übernahme durch den Rettungsdienst, bis der AED anweist zu pausieren oder bis die Person normal zu atmen beginnt.'),
    CO('tip', 'Nur drücken ist besser als nichts', 'Wer sich die Beatmung nicht zutraut oder kein Beatmungstuch hat, führt <b>durchgehende Herzdruckmassage ohne Unterbrechung</b> durch. Das ist deutlich besser als gar nichts und in den ersten Minuten fast gleichwertig. Entscheidend ist, dass gedrückt wird – kräftig, schnell und ohne lange Pausen.'),
    P('Zwei Fehler dominieren in der Praxis: zu <b>flach</b> und zu <b>langsam</b> gedrückt, und zu <b>lange Pausen</b> zwischen den Zyklen. Beides lässt sich üben. Wer das Tempo nicht im Gefühl hat, orientiert sich an einem Lied mit rund 110 Schlägen pro Minute – das funktioniert erstaunlich gut.'),

    H2('aed', 'Der automatisierte externe Defibrillator'),
    DEF('AED', 'Ein Gerät, das den Herzrhythmus selbstständig analysiert und nur dann einen Stromstoß freigibt, wenn dieser medizinisch sinnvoll ist. Der AED ist so konstruiert, dass er von Laien bedient werden kann: Er spricht, zeigt Bilder und verweigert den Schock, wenn kein defibrillierbarer Rhythmus vorliegt. Falsch anwenden im Sinne von „Schaden anrichten" kann man ihn praktisch nicht.'),
    STEPS(
      'AED sofort durch einen zweiten Helfer holen lassen – die Herzdruckmassage läuft dabei weiter.',
      'Gerät einschalten und den Sprachanweisungen folgen.',
      'Brustkorb freimachen, bei Bedarf trocknen; stark behaarte Stellen rasieren, wenn ein Rasierer beiliegt.',
      'Elektroden nach Bild aufkleben: eine rechts unterhalb des Schlüsselbeins, eine links seitlich unterhalb der Achsel.',
      'Während der Analyse niemanden berühren und laut ansagen: „Alle weg vom Patienten!"',
      'Bei Aufforderung Schockknopf drücken – vorher erneut sicherstellen, dass niemand Kontakt hat.',
      'Sofort nach dem Schock ohne Verzögerung mit der Herzdruckmassage weitermachen.',
      'Den Anweisungen des Geräts folgen, bis der Rettungsdienst übernimmt.'),
    CO('warn', 'Besonderheiten beim Kleben', 'Metallschmuck und Piercings im Klebebereich entfernen. Bei einem sichtbaren Herzschrittmacher die Elektrode einige Zentimeter versetzt aufkleben. Nasse Haut abtrocknen. Auf Metallflächen oder in Wasserlachen den Patienten vorher umlagern. Nichts davon rechtfertigt eine lange Verzögerung – im Zweifel weiterdrücken und pragmatisch handeln.'),

    H2('kinder', 'Besonderheiten bei Kindern und Säuglingen'),
    P('Bei Kindern liegt einem Kreislaufstillstand meist ein <b>Sauerstoffmangel</b> zugrunde – Ertrinken, Verlegung der Atemwege, schwerer Asthmaanfall – und nicht ein Herzproblem. Deshalb steht die Beatmung stärker im Vordergrund.'),
    TBL(['', 'Erwachsener', 'Kind / Säugling'],[
      ['Beginn', 'sofort Kompressionen', '<b>5 initiale Beatmungen</b>, dann Kompressionen'],
      ['Verhältnis für Laienhelfer', '30 : 2', '30 : 2'],
      ['Drucktiefe', '5–6 cm', 'etwa ein Drittel des Brustkorbdurchmessers'],
      ['Technik', 'zwei Hände', 'Kind: ein oder zwei Hände · Säugling: zwei Finger'],
      ['AED', 'Standardelektroden', 'Kinderelektroden bzw. Kindermodus, wenn vorhanden'],
    ]),
    CO('info', 'Im Zweifel wie beim Erwachsenen', 'Wer bei einem Kind unsicher ist, wendet das Erwachsenenschema an. Eine Reanimation nach Erwachsenenschema ist bei einem Kind deutlich besser als keine Reanimation. Diese Botschaft ist wichtiger als jedes Detail.'),

    H2('team', 'Reanimation im Team'),
    P('Die Feuerwehr reanimiert selten allein – meist stehen mehrere Kräfte zur Verfügung. Dann gilt es, die Aufgaben klar zu verteilen, statt zu dritt gleichzeitig zu drücken.'),
    UL(
      '<b>Einer drückt</b> – und wird alle zwei Minuten abgelöst, bevor die Qualität nachlässt.',
      '<b>Einer beatmet</b> beziehungsweise bedient den Beatmungsbeutel.',
      '<b>Einer bedient den AED</b> und übernimmt die Zeitansage.',
      '<b>Einer koordiniert</b>, hält Funkkontakt und weist den Rettungsdienst ein.',
      '<b>Einer betreut Angehörige</b> – diese Aufgabe wird oft vergessen und ist doch wichtig.'),
    P('Bei der Übergabe an den Rettungsdienst wird kurz und strukturiert berichtet: Was ist passiert, wann wurde der Kreislaufstillstand festgestellt, wann wurde mit der Reanimation begonnen, wie viele Schocks wurden abgegeben, welche Vorerkrankungen sind bekannt. Diese Angaben sind für die weitere Behandlung entscheidend.'),

    H2('belastung', 'Nach der Reanimation'),
    P('Eine Reanimation ist auch für die Helfer eine erhebliche Belastung – besonders, wenn sie erfolglos bleibt oder ein Kind betrifft. Das Gefühl, versagt zu haben, ist häufig und fachlich fast immer unbegründet: Die meisten Kreislaufstillstände sind trotz optimaler Hilfe nicht zu überleben.'),
    CO('tip', 'Reden hilft', 'Nutze die Einsatznachbesprechung und die Angebote der psychosozialen Notfallversorgung. Belastende Einsätze wirken nach, und darüber zu sprechen ist der wirksamste Schutz. Wer nach einem solchen Einsatz nicht mehr abschalten kann, schlecht schläft oder sich zurückzieht, sollte aktiv Hilfe suchen – das ist professionell, nicht schwach.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Keine normale Atmung → sofort reanimieren, keinen Puls suchen.',
      '<b>30 : 2</b>, 5–6 cm tief, 100–120 pro Minute, vollständig entlasten.',
      'Unterbrechungen unter 10 Sekunden, Helferwechsel alle 2 Minuten.',
      'Nur-Drücken ist deutlich besser als nichts.',
      'AED früh holen, Elektroden rechts oben und links seitlich, nach dem Schock sofort weiterdrücken.',
      'Kinder: 5 initiale Beatmungen, Drucktiefe ein Drittel des Brustkorbs.',
      'Im Team Aufgaben verteilen, strukturiert übergeben, danach nachbesprechen.'),
  ],
},

/* ---------------------------------------------------------------- J3 ---- */
{
  id: 'j3', title: 'Wunden, Blutungen, Schock & Lagerung', duration: 22,
  blocks: [
    P('Nach dem Kreislaufstillstand ist die unkontrollierte Blutung die zweithäufigste unmittelbar tödliche Notfallsituation – und die am schnellsten behebbare. Ein Mensch kann durch eine arterielle Blutung in wenigen Minuten verbluten; derselbe Mensch ist mit konsequentem Druck auf die Wunde in Sekunden stabilisiert. Diese Lektion behandelt Blutstillung, Schock und die richtige Lagerung.'),

    H2('blutung', 'Starke Blutungen stillen'),
    P('Bei einer starken äußeren Blutung zählt Konsequenz mehr als Technik. Es gibt keinen Grund, zunächst nach dem perfekten Verbandmaterial zu suchen – die Hand auf der Wunde wirkt sofort.'),
    STEPS(
      '<b>Eigenschutz:</b> Einmalhandschuhe anziehen.',
      '<b>Betroffenen hinlegen</b> – bei Kreislaufproblemen sinkt so das Risiko eines Sturzes.',
      '<b>Direkten Druck</b> auf die Wunde ausüben – zur Not mit der behandschuhten Hand und einem Kleidungsstück.',
      '<b>Verletzte Extremität hochhalten</b>, soweit es die Verletzung zulässt.',
      '<b>Druckverband</b> anlegen: keimfreie Wundauflage, darüber ein Druckpolster, fest anwickeln.',
      '<b>Blutet es durch:</b> Verband nicht entfernen, sondern einen zweiten darüber anlegen.',
      '<b>Notruf</b> absetzen, Betroffenen betreuen, auf Schockzeichen achten.'),
    DEF('Druckverband', 'Eine keimfreie Wundauflage wird auf die Wunde gelegt, darüber kommt ein Druckpolster – klassisch das noch verpackte zweite Verbandpäckchen –, und beides wird mit der Binde fest umwickelt. Der Druck wirkt gezielt auf die Blutungsquelle, ohne die gesamte Extremität abzubinden.'),
    CO('danger', 'Lebensbedrohliche Extremitätenblutung', 'Lässt sich eine Blutung an Arm oder Bein durch Druck nicht beherrschen – etwa bei einer Amputationsverletzung –, wird ein <b>Tourniquet</b> deutlich oberhalb der Wunde angelegt und so fest gezogen, bis die Blutung steht. Anlegezeitpunkt notieren und dem Rettungsdienst nennen. Ein einmal angelegtes Tourniquet wird von Ersthelfern <b>nicht wieder gelöst</b>.'),

    H2('wunden', 'Wunden versorgen'),
    P('Bei allen anderen Wunden gilt der Grundsatz: keimfrei bedecken und in Ruhe lassen. Erste Hilfe reinigt keine Wunden, entfernt keine Fremdkörper und verwendet keine Salben, Puder oder Hausmittel.'),
    TBL(['Situation', 'Vorgehen'],[
      ['Schürf- und Platzwunden', 'keimfrei bedecken, nicht reinigen, nicht desinfizieren'],
      ['Fremdkörper in der Wunde', 'in der Wunde belassen, umpolstern, fixieren'],
      ['Amputationsverletzung', 'Blutung stillen; Amputat trocken und keimfrei einpacken, indirekt kühlen, mitgeben'],
      ['Bauchwunde mit austretenden Organen', 'nicht zurückdrücken, feucht und keimfrei abdecken, Knierolle'],
      ['Verletzung mit Tierbiss oder Schmutz', 'bedecken, Tetanusschutz beim Arzt klären lassen'],
    ]),
    CO('warn', 'Fremdkörper bleiben drin', 'Ein steckendes Messer, ein Holzsplitter oder ein Metallteil wirkt oft selbst wie ein Stöpsel. Wird er entfernt, beginnt die Blutung erst richtig – und der Verletzungskanal kann zusätzlich geschädigt werden. Fremdkörper werden deshalb umpolstert und fixiert, nicht gezogen.'),

    H2('schock', 'Der Schock'),
    DEF('Schock', 'Ein lebensbedrohliches Missverhältnis zwischen Sauerstoffbedarf und Sauerstoffangebot im Kreislauf. Der Körper zentralisiert den Kreislauf, um Herz und Gehirn zu versorgen, und opfert dafür die Durchblutung von Haut, Muskeln und Organen. Unbehandelt führt der Schock zum Kreislaufversagen.'),
    P('Häufigste Ursache im Feuerwehreinsatz ist der <b>Volumenmangel</b> durch Blutverlust – auch durch innere Blutungen, die von außen unsichtbar bleiben. Weitere Formen entstehen durch Herzversagen, allergische Reaktionen oder schwere Infektionen.'),
    TBL(['Zeichen', 'Ursache'],[
      ['blasse, kalte, schweißige Haut', 'Zentralisation des Kreislaufs'],
      ['Frieren, Zittern', 'verminderte Durchblutung'],
      ['schneller, flacher Puls', 'Kompensationsversuch des Herzens'],
      ['Unruhe, Angst, später Teilnahmslosigkeit', 'Sauerstoffmangel im Gehirn'],
      ['Durstgefühl', 'Volumenmangel'],
      ['flache, schnelle Atmung', 'Kompensationsversuch'],
    ]),
    STEPS(
      'Ursache bekämpfen – vor allem: Blutung stoppen.',
      'Flach lagern, Beine erhöht (Schocklage) – nur wenn die Verletzungen das zulassen.',
      'Vor Wärmeverlust schützen: zudecken, auch nach unten isolieren.',
      'Beruhigen, betreuen, nicht allein lassen.',
      'Nichts zu essen oder zu trinken geben.',
      'Notruf, Atmung und Bewusstsein fortlaufend kontrollieren.'),
    CO('danger', 'Keine Schocklage bei …', 'Schädel-Hirn-Trauma, Atemnot, Verletzungen von Wirbelsäule oder Becken, Verletzungen von Brust und Bauch sowie Knochenbrüchen der Beine. In diesen Fällen wird flach gelagert beziehungsweise die zur Verletzung passende Lagerung gewählt – die Schocklage würde mehr schaden als nutzen.'),

    H2('lagerung', 'Lagerungsarten'),
    P('Die richtige Lagerung entlastet den Körper und kann Beschwerden deutlich lindern. Grundregel: Der Zustand des Patienten bestimmt die Lagerung – und ein wacher Patient darf die für ihn angenehmste Position wählen.'),
    TBL(['Zustand', 'Lagerung', 'Warum'],[
      ['bewusstlos, atmet normal', 'stabile Seitenlage', 'hält die Atemwege frei'],
      ['Schock ohne Gegenanzeige', 'Schocklage, Beine hoch', 'unterstützt den Rückstrom zum Herzen'],
      ['Atemnot, Herzbeschwerden', 'Oberkörper erhöht, sitzend', 'erleichtert die Atmung, entlastet das Herz'],
      ['Bauchverletzung oder Bauchschmerz', 'Knierolle, Beine angewinkelt', 'entspannt die Bauchdecke'],
      ['Schädel-Hirn-Trauma', 'Oberkörper leicht erhöht, ruhigstellen', 'senkt den Hirndruck'],
      ['Verdacht auf Wirbelsäulenverletzung', 'flach, achsengerecht, möglichst nicht bewegen', 'vermeidet Zusatzschäden'],
      ['Beckenverletzung', 'flach, Becken stabilisieren', 'verhindert weitere Blutung'],
    ]),
    CO('tip', 'Betreuung nicht vergessen', 'Ansprache, Wärme und Zuwendung sind Teil der Ersten Hilfe – keine nette Zugabe. Ein betreuter, beruhigter Patient hat einen ruhigeren Kreislauf, weniger Schmerzen und verarbeitet das Erlebte besser. Wer nichts anderes tun kann, kann immer betreuen.'),

    H2('knochen', 'Knochenbrüche und Gelenkverletzungen'),
    P('Bei Verdacht auf einen Bruch gilt: nicht einrichten, nicht bewegen, in der vorgefundenen Stellung ruhigstellen und polstern. Offene Brüche werden keimfrei bedeckt. Kühlen kann Schmerzen und Schwellung lindern, aber nie direkt auf der Haut.'),
    KF(
      'Sichere Zeichen: sichtbare Fehlstellung, offene Bruchenden, abnorme Beweglichkeit.',
      'Unsichere Zeichen: Schmerz, Schwellung, Bewegungseinschränkung, Blutergüsse.',
      'Ruhigstellen in der vorgefundenen Position, gut polstern.',
      'Bei Verdacht auf Wirbelsäulenverletzung so wenig wie möglich bewegen.',
      'Immer auch an den Schock denken – Brüche großer Knochen bluten erheblich nach innen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Starke Blutung: Handschuhe, hinlegen, direkter Druck, Druckverband, bei Durchbluten verstärken.',
      'Tourniquet bei nicht beherrschbarer Extremitätenblutung – Zeit notieren, nicht wieder lösen.',
      'Wunden nur keimfrei bedecken; Fremdkörper belassen und umpolstern.',
      'Schock erkennen: blass, kalt, schweißig, unruhig, schneller flacher Puls.',
      'Schocklage nur ohne Gegenanzeige – nicht bei SHT, Atemnot, Wirbelsäule, Becken.',
      'Lagerung richtet sich nach dem Zustand; wache Patienten wählen selbst.',
      'Brüche nicht einrichten, ruhigstellen, polstern, an den Schock denken.'),
  ],
},

/* ---------------------------------------------------------------- J4 ---- */
{
  id: 'j4', title: 'Internistische Notfälle', duration: 22,
  blocks: [
    P('Nicht jeder Notfall hat eine sichtbare Ursache. Herzinfarkt, Schlaganfall, Krampfanfall oder Unterzuckerung treffen Menschen ohne äußere Verletzung – und sind genauso zeitkritisch wie ein Verkehrsunfall. Diese Lektion zeigt, woran du die wichtigsten internistischen Notfälle erkennst und was in den ersten Minuten zu tun ist.'),

    H2('herzinfarkt', 'Herzinfarkt'),
    P('Beim Herzinfarkt verschließt sich ein Herzkranzgefäß. Der dahinterliegende Herzmuskel wird nicht mehr durchblutet und stirbt ab – <b>je Minute mehr Gewebe</b>. Deshalb ist der Herzinfarkt einer der wenigen Notfälle, bei denen der Zeitpunkt des Notrufs direkt über bleibende Schäden entscheidet.'),
    KF(
      'Starker Druck, Enge oder Schmerz in der Brust, oft länger als 5 Minuten anhaltend.',
      'Ausstrahlung in Arm, Schulter, Hals, Kiefer, Rücken oder Oberbauch.',
      'Vernichtungsgefühl, Todesangst, Atemnot.',
      'Blässe, kalter Schweiß, Übelkeit, Erbrechen.',
      'Bei Frauen, älteren und zuckerkranken Menschen häufig <b>untypisch</b>: nur Übelkeit, Oberbauchbeschwerden, Schwäche.'),
    STEPS(
      'Sofort Notruf 112 – Verdacht auf Herzinfarkt ausdrücklich nennen.',
      'Beruhigen, jede körperliche Anstrengung vermeiden – nicht laufen lassen.',
      'Oberkörper erhöht lagern, enge Kleidung öffnen, für frische Luft sorgen.',
      'Patient nicht allein lassen, fortlaufend Bewusstsein und Atmung kontrollieren.',
      'AED holen lassen und auf einen Kreislaufstillstand vorbereitet sein.'),
    CO('warn', 'Nicht ins Auto setzen', 'Angehörige wollen den Betroffenen oft selbst ins Krankenhaus fahren. Das ist gefährlich: Ein Herzinfarkt kann jederzeit in einen Kreislaufstillstand übergehen, und im Auto kann niemand reanimieren. Der Rettungsdienst bringt außerdem die Behandlung mit – die Fahrt beginnt praktisch schon zu Hause.'),

    H2('schlaganfall', 'Schlaganfall'),
    P('Beim Schlaganfall wird ein Hirnbereich nicht mehr durchblutet – meist durch ein verschlossenes Gefäß, seltener durch eine Blutung. Auch hier gilt: Zeit ist Hirn. Moderne Behandlungen wirken nur innerhalb eines engen Zeitfensters, das ab dem Symptombeginn läuft.'),
    MNE([{l:'F',w:'Face'},{l:'A',w:'Arms'},{l:'S',w:'Speech'},{l:'T',w:'Time'}],
      'Face: Bitte lächeln – hängt ein Mundwinkel? Arms: Beide Arme nach vorn heben – sinkt einer ab oder dreht sich? Speech: Einen einfachen Satz nachsprechen lassen – ist die Sprache verwaschen? Time: Bei einer einzigen Auffälligkeit sofort 112.'),
    FIG('fast', 'Der FAST-Test erkennt einen Schlaganfall schnell – bei Auffälligkeit sofort den Notruf 112.'),
    P('Weitere mögliche Zeichen sind plötzliche Sehstörungen, Doppelbilder, Schwindel mit Gangunsicherheit, Taubheitsgefühle einer Körperhälfte und heftigster, plötzlich einsetzender Kopfschmerz. Wichtig für den Rettungsdienst ist der <b>Zeitpunkt des Symptombeginns</b> – frage aktiv danach und merke ihn dir.'),
    CO('info', 'Auch wenn es wieder weggeht', 'Verschwinden die Symptome nach Minuten von selbst, war es möglicherweise eine Vorstufe des Schlaganfalls. Auch dann gehört der Betroffene sofort ins Krankenhaus – das Risiko eines vollständigen Schlaganfalls in den folgenden Stunden ist hoch.'),

    H2('krampf', 'Krampfanfall'),
    P('Ein generalisierter Krampfanfall wirkt dramatisch, endet aber meist nach ein bis zwei Minuten von selbst. Die Aufgabe des Ersthelfers besteht vor allem darin, Verletzungen zu verhindern – nicht darin, den Anfall zu stoppen.'),
    STEPS(
      'Umgebung sichern: harte und scharfe Gegenstände wegräumen, Kopf polstern.',
      'Den Betroffenen <b>nicht festhalten</b> und nichts in den Mund schieben.',
      'Dauer des Anfalls im Blick behalten.',
      'Nach dem Anfall: Bewusstsein und Atmung prüfen, bei Bewusstlosigkeit mit normaler Atmung in die stabile Seitenlage.',
      'Betreuen – nach dem Anfall sind Betroffene oft verwirrt, müde und orientierungslos.',
      'Notruf bei erstem Anfall, Anfall über 5 Minuten, mehreren Anfällen hintereinander, Verletzungen oder ausbleibendem Aufwachen.'),
    CO('danger', 'Der alte Irrtum', 'Es wird <b>nichts</b> zwischen die Zähne geschoben – kein Löffel, kein Stück Holz, kein Finger. Der Betroffene kann sich daran schwer verletzen, und der Helfer riskiert einen Bissverletzung. Ein Zungenbiss ist unangenehm, aber harmlos im Vergleich.'),

    H2('weitere', 'Weitere internistische Notfälle'),
    TBL(['Notfall', 'Typische Zeichen', 'Erste Hilfe'],[
      ['Unterzuckerung', 'Heißhunger, Zittern, Schwitzen, Verwirrtheit, aggressives Verhalten', 'wenn wach und schluckfähig: Traubenzucker oder gezuckertes Getränk'],
      ['Überzuckerung', 'starker Durst, trockene Haut, tiefe Atmung, Azetongeruch', 'Notruf, Lagerung nach Bewusstseinslage, Vitalfunktionen überwachen'],
      ['Asthmaanfall', 'pfeifende Ausatmung, Atemnot, Angst', 'aufrecht sitzen lassen, eigenes Spray reichen, beruhigen, Lippenbremse'],
      ['Allergischer Schock', 'Quaddeln, Schwellung, Atemnot, Kreislaufversagen', 'Notruf, Allergen entfernen, Notfallset des Betroffenen reichen, Schocklage'],
      ['Kollaps, Ohnmacht', 'kurze Bewusstlosigkeit, blass, rasche Erholung', 'flach lagern, Beine hoch, Atmung prüfen, Ursache klären lassen'],
      ['Hitzschlag', 'heiße, trockene Haut, hohe Temperatur, Bewusstseinsstörung', 'in den Schatten, Kleidung öffnen, kühlen, Notruf'],
      ['Unterkühlung', 'Zittern, später Teilnahmslosigkeit, langsame Atmung', 'vorsichtig bewegen, isolieren, warm zudecken, keine aktive Wärmezufuhr'],
    ]),
    CO('danger', 'Bergungstod bei Unterkühlung', 'Stark unterkühlte Menschen dürfen nur äußerst vorsichtig bewegt werden. Ruckartige Bewegungen können kaltes Blut aus der Peripherie zum Herzen spülen und dort Rhythmusstörungen bis zum Kreislaufstillstand auslösen. Isolieren, zudecken, flach lagern – und den Rettungsdienst abwarten.'),
    CO('tip', 'Im Zweifel 112', 'Bei unklaren, aber bedrohlich wirkenden Symptomen lieber einmal zu viel den Notruf wählen. Der Disponent klärt am Telefon, schickt die passende Hilfe und ist ausdrücklich dafür da. Niemand wird für einen begründeten Notruf kritisiert.'),

    H2('anamnese', 'Was der Rettungsdienst wissen will'),
    P('Während ihr wartet, könnt ihr Informationen sammeln, die dem Rettungsdienst viel Zeit sparen. Das ist eine der wertvollsten Aufgaben, die eine Einsatzkraft ohne medizinische Ausbildung übernehmen kann.'),
    KF(
      'Was genau ist passiert, und wann hat es begonnen?',
      'Welche Beschwerden hat der Betroffene selbst geschildert?',
      'Welche Vorerkrankungen sind bekannt?',
      'Welche Medikamente werden eingenommen – Packungen oder Medikamentenplan bereitlegen.',
      'Bestehen Allergien?',
      'Gibt es einen Notfall- oder Organspendeausweis, eine Patientenverfügung?',
      'Wer ist Ansprechpartner, wer sind Angehörige?'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Herzinfarkt: Brustschmerz mit Ausstrahlung, Vernichtungsgefühl – sofort 112, Oberkörper hoch, keine Anstrengung.',
      'Bei Frauen und Diabetikern verläuft der Infarkt oft untypisch.',
      'Schlaganfall mit <b>FAST</b> prüfen; Symptombeginn merken; auch bei Rückbildung ins Krankenhaus.',
      'Krampfanfall: Umgebung sichern, nichts in den Mund, nicht festhalten, danach betreuen.',
      'Unterzuckerung: nur bei wachem, schluckfähigem Patienten Zucker geben.',
      'Unterkühlte Personen nur vorsichtig bewegen – Bergungstod.',
      'Vorerkrankungen, Medikamente und Zeiten für den Rettungsdienst sammeln.'),
  ],
},

/* ---------------------------------------------------------------- J5 ---- */
{
  id: 'j5', title: 'Thermische Notfälle, Vergiftungen & Verätzungen', duration: 20,
  blocks: [
    P('Verbrennungen, Rauchgasvergiftungen und Verätzungen sind die Notfälle, die im Feuerwehreinsatz am häufigsten unmittelbar mit dem Schadenereignis zusammenhängen – bei Betroffenen wie bei Einsatzkräften. Diese Lektion behandelt sie und räumt zugleich mit einigen hartnäckigen Irrtümern auf.'),

    H2('verbrennung', 'Verbrennungen und Verbrühungen'),
    P('Wie schwer eine thermische Verletzung ist, hängt von zwei Dingen ab: von der <b>Tiefe</b> und von der <b>Ausdehnung</b>. Die Tiefe bestimmt die spätere Heilung, die Ausdehnung die unmittelbare Lebensgefahr.'),
    TBL(['Grad', 'Merkmale', 'Schmerz'],[
      ['1. Grad', 'Rötung, Schwellung, Haut intakt', 'stark schmerzhaft'],
      ['2. Grad', 'Blasenbildung, feuchte Wundfläche', 'sehr stark schmerzhaft'],
      ['3. Grad', 'weiß-grau oder lederartig, trocken', 'schmerzlos – die Nerven sind zerstört'],
    ]),
    DEF('Handflächenregel', 'Die Handfläche des Betroffenen einschließlich der Finger entspricht etwa <b>1 Prozent</b> seiner Körperoberfläche. Damit lässt sich die Ausdehnung schnell abschätzen. Bei Erwachsenen gelten Verbrennungen ab etwa 10 Prozent, bei Kindern bereits ab etwa 5 Prozent als lebensbedrohlich.'),
    STEPS(
      'Hitzequelle beseitigen, brennende Kleidung mit Decke oder Wasser löschen.',
      'Festhaftende Kleidung <b>nicht</b> entfernen; nicht festhaftende, mit heißer Flüssigkeit durchtränkte Kleidung entfernen.',
      'Nur <b>kleinflächige</b> Verbrennungen kurz mit handwarmem Wasser kühlen – zur Schmerzlinderung, nicht zur Behandlung.',
      'Wunde keimfrei und locker bedecken, Brandwunden nicht öffnen.',
      'Wärmeerhalt sicherstellen: zudecken, vor Auskühlung schützen.',
      'Notruf, Schock behandeln, Vitalfunktionen überwachen.'),
    CO('warn', 'Kühlen mit Maß – oder gar nicht', 'Großflächiges Kühlen führt zu gefährlicher Unterkühlung, besonders bei Kindern und Bewusstlosen. Bei ausgedehnten Verbrennungen hat der <b>Wärmeerhalt Vorrang</b>. Gekühlt wird nur kleinflächig, kurz, mit handwarmem Wasser und niemals mit Eis. Keine Salben, kein Puder, kein Mehl, kein Öl.'),
    P('Bei Verbrennungen im Gesicht sowie bei Verdacht auf ein <b>Inhalationstrauma</b> – Ruß um Mund und Nase, angesengte Nasenhaare, heisere Stimme, Husten – besteht zusätzlich die Gefahr, dass die Atemwege anschwellen. Diese Patienten haben höchste Priorität und gehören sofort dem Rettungsdienst vorgestellt, auch wenn sie zunächst unauffällig wirken.'),

    H2('rauchgas', 'Rauchgasvergiftung'),
    P('Die Rauchgasvergiftung ist der häufigste Personenschaden bei Bränden – und der am leichtesten unterschätzte, weil Betroffene äußerlich unverletzt wirken können. Verantwortlich sind vor allem <b>Kohlenstoffmonoxid</b> und <b>Blausäure</b>, die sich in ihrer Wirkung gegenseitig verstärken.'),
    KF(
      'Betroffene sofort aus dem Gefahrenbereich bringen – unter Eigenschutz.',
      'Frischluft, beengende Kleidung öffnen, körperliche Anstrengung vermeiden.',
      'Bewusstsein und Atmung fortlaufend kontrollieren.',
      'Sauerstoffgabe durch qualifizierte Kräfte, sobald verfügbar.',
      'Notruf mit dem klaren Hinweis „Rauchgasexposition".',
      '<b>Jede</b> exponierte Person ärztlich vorstellen – auch beschwerdefreie.'),
    CO('danger', 'Die rosige Hautfarbe ist ein Mythos', 'Die oft beschriebene kirschrote Hautfarbe bei CO-Vergiftung tritt in der Praxis selten und meist erst spät auf. Sich darauf zu verlassen, ist gefährlich. Maßgeblich ist die <b>Exposition</b>: Wer im Rauch war, gilt als vergiftet, bis das Gegenteil ärztlich geklärt ist. Das gilt ausdrücklich auch für Einsatzkräfte.'),

    H2('vergiftung', 'Vergiftungen allgemein'),
    P('Vergiftungen können über Mund, Atemwege, Haut oder Injektion erfolgen. Für die Erste Hilfe ist entscheidend, den Aufnahmeweg zu unterbrechen und den Stoff zu identifizieren.'),
    UL(
      '<b>Giftinformationszentrale</b> anrufen – sie berät rund um die Uhr und ist die kompetenteste Quelle.',
      '<b>Reste, Verpackungen und Erbrochenes sichern</b> – sie ermöglichen die Identifikation.',
      '<b>Kein Erbrechen erzwingen</b> – bei Säuren, Laugen und schäumenden Mitteln richtet das zusätzlichen Schaden an.',
      '<b>Nichts zu trinken geben</b>, außer die Giftinformationszentrale weist ausdrücklich anders an.',
      '<b>Atemwege sichern</b>, Vitalfunktionen überwachen, bei Bewusstlosigkeit mit Atmung in stabile Seitenlage.',
      '<b>Eigenschutz</b> beachten – bei Hautkontakt und bei giftigen Gasen gefährdet der Stoff auch die Helfer.'),

    H2('veraetzung', 'Verätzungen'),
    P('Säuren und Laugen zerstören Gewebe unmittelbar bei Kontakt und wirken weiter, solange sie auf der Haut bleiben. Die einzige wirksame Erstmaßnahme ist deshalb <b>ausgiebiges Spülen mit Wasser</b> – sofort und lange.'),
    STEPS(
      'Eigenschutz: Handschuhe, bei Bedarf Schutzbrille und Schutzkleidung.',
      'Kontaminierte Kleidung entfernen, dabei nichts über den Kopf ziehen.',
      'Betroffene Hautstellen mindestens 10 bis 15 Minuten mit viel fließendem Wasser spülen.',
      'Wunde keimfrei bedecken.',
      'Notruf; wenn möglich Produktbezeichnung und Sicherheitsdatenblatt bereitlegen.'),
    CO('danger', 'Verätzung am Auge', 'Augenverätzungen sind absolute Notfälle. Sofort und ausgiebig mit Wasser spülen – vom inneren Augenwinkel nach außen und so, dass die Spülflüssigkeit <b>nicht ins gesunde Auge</b> läuft. Das Auge dabei vorsichtig offen halten; der Betroffene wird es reflexhaft zukneifen. Nicht reiben lassen, kein Neutralisationsversuch.'),

    H2('einsatzkraft', 'Wenn es die eigene Einsatzkraft trifft'),
    P('Für Einsatzkräfte gelten dieselben Regeln – mit zwei Ergänzungen. Erstens: Jede im Einsatz erlittene Verletzung oder Exposition wird gemeldet und dokumentiert. Das ist Voraussetzung für den Unfallversicherungsschutz und für spätere Anerkennung von Folgeschäden. Zweitens: Der <b>Durchgangsarzt</b> ist bei Arbeitsunfällen die richtige Anlaufstelle, nicht der Hausarzt.'),
    KF(
      'Verletzung oder Exposition sofort dem Einheitsführer melden.',
      'Unfallanzeige und Eintrag in das Verbandbuch veranlassen.',
      'Bei Rauchgasexposition ärztlich untersuchen lassen, auch ohne Beschwerden.',
      'Bei Kontakt mit Blut oder Körperflüssigkeiten: sofort ärztlich klären lassen.',
      'Nachsorge und psychosoziale Unterstützung in Anspruch nehmen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Verbrennungsgrade 1 bis 3; der 3. Grad ist schmerzlos – das täuscht.',
      'Handfläche des Betroffenen ≈ 1 % Körperoberfläche.',
      'Nur kleinflächig, kurz und handwarm kühlen – sonst Wärmeerhalt.',
      'Keine Salben, kein Eis, festhaftende Kleidung belassen.',
      'Inhalationstrauma vermuten bei Ruß im Gesicht, Heiserkeit, Husten.',
      'Rauchgasexposition: jede Person ärztlich vorstellen, auch beschwerdefreie.',
      'Vergiftung: Giftinformationszentrale, kein Erbrechen erzwingen, Reste sichern.',
      'Verätzung: sofort und lange spülen, am Auge von innen nach außen.'),
  ],
},

];
