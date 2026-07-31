/* =========================================================================
   MODUL X — Wasserrettung, Eis & Bootsdienst
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls X.

   Fachliche Grundlage: FwDV 8 (Tauchen), DGUV Vorschrift 49 und
   zugehörige Regeln zum Einsatz an und auf Gewässern, DIN EN ISO 12402
   (Rettungswesten), Empfehlungen der Wasserrettungsorganisationen.
   Wasserrettung erfordert Ausbildung – dieser Text ersetzt sie nicht.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_X = [

/* ---------------------------------------------------------------- X1 ---- */
{
  id: 'x1', title: 'Rettung aus dem Wasser', duration: 20,
  blocks: [
    P('Bei kaum einem anderen Einsatz verunglücken so häufig Helfer wie bei der Wasserrettung – und zwar überwiegend Menschen, die spontan und ungesichert ins Wasser gesprungen sind. Die wichtigste Botschaft dieses Moduls lautet deshalb: Es gibt eine Reihenfolge, und Schwimmen steht darin an letzter Stelle.'),

    H2('eigenschutz', 'Eigenschutz zuerst'),
    P('Wasserrettung ist gefährlich. Strömung, Kälte, Sichttrübung, Hindernisse unter der Oberfläche und panische Personen wirken zusammen. Ein Mensch in Panik klammert sich an alles, was ihn über Wasser hält – auch an seinen Retter.'),
    KF(
      'Ohne Ausbildung, Rettungsweste und Sicherung geht niemand ins oder ans Wasser.',
      'Kaltes Wasser führt binnen Minuten zu Kälteschock und Handlungsunfähigkeit.',
      'Einsatzkleidung und Stiefel saugen sich voll und ziehen nach unten.',
      'Panische Personen sind eine erhebliche Gefahr für den Retter.',
      'Unter der Oberfläche sind Tiefe, Untergrund und Hindernisse nicht erkennbar.',
      'Auch am Ufer besteht Absturz- und Rutschgefahr.'),
    CO('danger', 'Nie ungesichert nachspringen', 'Die häufigste Ursache für tote Retter ist der ungesicherte Sprung ins Wasser. Er ist verständlich – und fast immer falsch. Eine ertrinkende Person kann von Land aus mit einem Wurfsack in Sekunden erreicht werden; ein Retter im Wasser braucht deutlich länger und ist selbst gefährdet.'),

    H2('reihenfolge', 'Die Rettungsreihenfolge'),
    MNE([{l:'R',w:'Rufen'},{l:'W',w:'Werfen'},{l:'F',w:'Fahren'},{l:'S',w:'Schwimmen'}],
      'Zuerst zurufen und anweisen, dann Rettungsmittel werfen, dann mit Boot oder Gerät fahren – und nur als allerletztes und nur durch ausgebildete Rettungsschwimmer schwimmen.'),
    FIG('rettungsreihenfolge', 'Rettungsreihenfolge am Wasser: Rufen – Werfen – Fahren – Schwimmen (nur als letztes Mittel).'),
    TBL(['Stufe', 'Was zu tun ist', 'Warum zuerst'],[
      ['Rufen', 'Person ansprechen, beruhigen, anleiten', 'kostet nichts, wirkt sofort, viele können sich selbst helfen'],
      ['Werfen', 'Wurfsack, Rettungsring, Rettungsleine, Stange, Leiter', 'Retter bleibt an Land, schnell einsetzbar'],
      ['Fahren', 'Boot, Rettungsbrett, Wasserfahrzeug', 'Retter bleibt über Wasser'],
      ['Schwimmen', 'nur ausgebildete Rettungsschwimmer, gesichert', 'höchstes Risiko für den Retter'],
    ]),
    CO('info', 'Rufen wird unterschätzt', 'Viele Menschen in Not sind grundsätzlich schwimmfähig, aber panisch oder erschöpft. Eine ruhige, klare Anweisung vom Ufer – „auf den Rücken drehen, ruhig atmen, wir kommen" – kann bereits ausreichen und verschafft Zeit für die nächste Stufe.'),

    H2('mittel', 'Rettungsmittel'),
    UL(
      '<b>Wurfsack:</b> Leine im Beutel, wird der Person zugeworfen – das wirksamste Mittel vom Ufer.',
      '<b>Rettungsring mit Leine:</b> schwimmfähig, gut sichtbar.',
      '<b>Rettungsstange:</b> verlängert die Reichweite am Ufer oder Beckenrand.',
      '<b>Steckleiter:</b> als Rettungsbrücke über Eis oder weiches Ufer.',
      '<b>Boot:</b> für die Rettung auf offenem Wasser.',
      '<b>Rettungsbrett und Rettungsboje:</b> bei ausgebildeten Kräften.',
      '<b>Feuerwehrleine mit Kantenschutz:</b> zum Sichern der Retter am Ufer.'),
    STEPS(
      'Wurfsack am Leinenende festhalten – sonst fliegt er komplett weg.',
      'Person ansprechen und ankündigen: „Wurfsack kommt!"',
      'Sack <b>über</b> die Person oder leicht oberhalb in die Strömung werfen.',
      'Person anweisen, die Leine festzuhalten und sich auf den Rücken zu drehen.',
      'Langsam und gleichmäßig zum Ufer ziehen, nicht ruckartig.',
      'Bei Fehlwurf: Leine einholen und erneut werfen – Zweitsack bereithalten.'),

    H2('ufer', 'Sicherung am Ufer'),
    CO('warn', 'Rettungsweste für alle am Wasser', 'Nicht nur wer ins Wasser geht, sondern <b>jeder, der am Wasser arbeitet</b>, trägt eine ohnmachtssichere Rettungsweste. Ufer sind rutschig, Böschungen steil, und ein Sturz ins kalte Wasser in voller Einsatzkleidung ist auch für gute Schwimmer lebensgefährlich.'),
    KF(
      'Ohnmachtssichere Rettungsweste, keine einfache Schwimmhilfe.',
      'Standplatz prüfen: Rutschgefahr, Böschung, Unterspülung.',
      'Nie allein am Wasser arbeiten.',
      'Sicherungsposten stromabwärts stellen.',
      'Bei Dunkelheit ausleuchten – auch die Wasserfläche.',
      'Rückweg vom Ufer frei halten.'),

    H2('gerettete', 'Die gerettete Person'),
    P('Wer aus kaltem Wasser gerettet wird, ist unterkühlt, erschöpft und häufig in einem Schockzustand – auch wenn er ansprechbar wirkt. Die Versorgung nach der Rettung ist deshalb genauso wichtig wie die Rettung selbst.'),
    KF(
      'Vor weiterer Auskühlung schützen: nasse Kleidung entfernen, zudecken, Wind abhalten.',
      'Stark unterkühlte Personen nur vorsichtig bewegen – Bergungstodgefahr.',
      'Nicht aktiv aufwärmen; keine heißen Getränke, kein Alkohol, kein Reiben.',
      'Atmung und Bewusstsein fortlaufend kontrollieren.',
      'Auch bei kurzem Untertauchen ärztlich vorstellen – Wasser in der Lunge wirkt verzögert.',
      'Betreuen und beruhigen; Ertrinkungsnotfälle sind psychisch stark belastend.'),
    CO('danger', 'Sekundäres Ertrinken', 'Auch wer nach kurzem Untertauchen wieder wohlauf wirkt, kann Wasser in die Lunge aufgenommen haben. Beschwerden können Stunden später auftreten. Jede aus dem Wasser gerettete Person gehört deshalb dem Rettungsdienst vorgestellt – auch wenn sie das selbst ablehnen möchte.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Ohne Ausbildung, Rettungsweste und Sicherung geht niemand ins oder ans Wasser.',
      'Der ungesicherte Sprung ins Wasser ist die häufigste Ursache für tote Retter.',
      'Reihenfolge: <b>Rufen – Werfen – Fahren – Schwimmen</b>.',
      'Der Wurfsack ist das wirksamste Mittel vom Ufer.',
      'Ohnmachtssichere Rettungsweste für alle, die am Wasser arbeiten.',
      'Stark unterkühlte Personen nur vorsichtig bewegen, nicht aktiv aufwärmen.',
      'Jede aus dem Wasser gerettete Person ärztlich vorstellen.'),
  ],
},

/* ---------------------------------------------------------------- X2 ---- */
{
  id: 'x2', title: 'Eisunfälle & Bootsdienst', duration: 18,
  blocks: [
    P('Ein Eisunfall vereint zwei Probleme: Der Betroffene kühlt schnell aus, und das Eis, das ihn nicht getragen hat, trägt auch den Retter nicht. Wer das nicht berücksichtigt, hat nach kurzer Zeit zwei Personen im Wasser statt einer.'),

    H2('eis', 'Eingebrochen ins Eis'),
    P('Bei Eisunfällen zählt jede Minute – die Unterkühlung schreitet im Eiswasser sehr schnell voran. Gleichzeitig verbietet sich jedes unüberlegte Betreten der Fläche.'),
    STEPS(
      'Betroffenen ansprechen, beruhigen und anweisen: Arme auf die Eiskante, nicht strampeln.',
      'Rettungsmittel zuwerfen oder zuschieben: Wurfsack, Leiter, Steckleiter, Rettungsring.',
      'Wenn ein Retter aufs Eis muss: nur gesichert und mit <b>Lastverteilung</b> – liegend, auf einer Leiter, mit Brett.',
      'Retter über Leine vom Ufer sichern, zweiter Retter als Reserve bereit.',
      'Betroffenen möglichst <b>flach</b> aus dem Loch ziehen, nicht senkrecht hochheben.',
      'Sofort vor weiterer Auskühlung schützen und vom Eis bringen.',
      'Schonender Transport, Rettungsdienst, ärztliche Überwachung.'),
    CO('danger', 'Nie aufrecht aufs Eis', 'Eine stehende Person übt punktuell hohen Druck aus. Wer aufs Eis muss, verteilt sein Gewicht: liegend, auf einer flach geschobenen Steckleiter oder auf einem Brett. Und niemals ohne Sicherung durch eine Leine vom Ufer.'),
    CO('warn', 'Unterkühlung und Bergungstod', 'Stark unterkühlte Personen dürfen nicht ruckartig bewegt und nicht aktiv aufgewärmt werden. Kaltes Blut aus der Peripherie kann beim Bewegen zum Herzen gespült werden und dort Rhythmusstörungen bis zum Kreislaufstillstand auslösen. Deshalb: flach lagern, isolieren, zudecken, vorsichtig transportieren – und dem Rettungsdienst überlassen, was darüber hinausgeht.'),

    H2('eisregeln', 'Warum Eis trügt'),
    KF(
      'Eisdicke ist nie gleichmäßig – über Strömung, an Zuflüssen und über Wasserpflanzen dünner.',
      'Schnee auf dem Eis isoliert und verlangsamt das Durchfrieren.',
      'Nach Tauwetter verliert Eis Tragfähigkeit, auch wenn es dick aussieht.',
      'Fließgewässer tragen praktisch nie zuverlässig.',
      'Uferbereiche sind besonders unsicher.',
      'Zugefrorene Klärteiche und Regenrückhaltebecken sind besonders gefährlich.'),

    H2('boot', 'Bootsdienst – Grundlagen'),
    P('Das Boot ist bei Wasser- und Hochwasserlagen ein zentrales Rettungsmittel. Es verlangt allerdings eine eigene Ausbildung – für den Bootsführer ebenso wie für die Besatzung.'),
    KF(
      '<b>Rettungsweste für alle an Bord</b> – ohnmachtssicher, richtig angelegt und verschlossen.',
      'Der <b>Bootsführer</b> verantwortet Besatzung, Beladung und Fahrweise.',
      'Beladung und Trimm beachten – nicht überladen, Gewicht verteilen.',
      'Strömung, Untiefen, Treibgut und Hindernisse beachten.',
      'Wehre und Walzen großräumig meiden.',
      'Ständigen Kontakt zum Ufer und zur Einsatzleitung halten.',
      'Bei Dunkelheit Beleuchtung und Positionslichter nutzen.',
      'Vor der Fahrt Ausrüstung prüfen: Paddel, Wurfsack, Anker, Leine, Beleuchtung.'),
    DEF('Rettungsweste und Schwimmhilfe', 'Eine echte <b>Rettungsweste</b> dreht auch eine bewusstlose Person selbstständig in die stabile Rückenlage und hält die Atemwege frei – sie ist ohnmachtssicher. Eine <b>Schwimmhilfe</b> leistet das nicht; sie unterstützt nur einen bewussten, schwimmfähigen Träger. Im Feuerwehreinsatz gehören ausschließlich ohnmachtssichere Rettungswesten getragen.'),

    H2('rettungboot', 'Personen vom Boot aus retten'),
    STEPS(
      'Boot so führen, dass es gegen die Strömung steht und kontrollierbar bleibt.',
      'Person ansprechen und anleiten, bevor das Boot heran ist.',
      'An der geeigneten Stelle aufnehmen – am Heck oder über die niedrige Seite.',
      'Bei mehreren Personen einzeln aufnehmen, Gewicht ausbalancieren.',
      'Bei Bewusstlosigkeit mit mehreren Helfern kontrolliert bergen.',
      'Aufgenommene Person sofort vor Auskühlung schützen.',
      'Zügig an Land bringen und an den Rettungsdienst übergeben.'),
    CO('warn', 'Kentergefahr', 'Eine panische oder schwere Person kann ein kleines Boot zum Kentern bringen – besonders, wenn sie über die Bordwand gezogen wird. Deshalb: ruhig anleiten, an der richtigen Stelle aufnehmen, Gewicht ausbalancieren und die Besatzung entsprechend positionieren. Im Zweifel wird die Person am Boot gesichert und geschleppt statt an Bord genommen.'),

    H2('zusammenarbeit', 'Zusammenarbeit mit Spezialkräften'),
    P('Wasserrettung ist in vielen Regionen Aufgabe spezialisierter Organisationen – DLRG, Wasserwacht, Wasserrettungszüge. Sie bringen Ausbildung, Boote, Strömungsretter und Taucher mit. Die Feuerwehr sichert bis zu ihrem Eintreffen, unterstützt und stellt die Infrastruktur.'),
    KF(
      'Spezialkräfte sofort mitalarmieren, nicht erst nach eigenen Versuchen.',
      'Zufahrt, Beleuchtung und Einsatzstellensicherung übernehmen.',
      'Ufer sichern und Absperrung einrichten.',
      'Sammelstelle für Betroffene und Angehörige einrichten.',
      'Kommunikationswege zwischen den Organisationen klären.',
      'Taucheinsätze sind in der FwDV 8 geregelt und ausschließlich Sache ausgebildeter Taucher.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Bei Eisunfällen zählt jede Minute – aber das Eis trägt auch den Retter nicht.',
      'Aufs Eis nur gesichert und mit Lastverteilung: liegend, Leiter, Brett.',
      'Betroffene flach aus dem Loch ziehen, nicht senkrecht hochheben.',
      'Stark Unterkühlte nur vorsichtig bewegen, nicht aktiv aufwärmen.',
      'Eis ist nie gleichmäßig dick; Fließgewässer tragen praktisch nie.',
      'Ohnmachtssichere Rettungsweste für alle an Bord.',
      'Der Bootsführer verantwortet Besatzung, Beladung und Fahrweise.',
      'Spezialkräfte der Wasserrettung sofort mitalarmieren.'),
  ],
},

/* ---------------------------------------------------------------- X3 ---- */
{
  id: 'x3', title: 'Fließgewässer & Strömungsrettung', duration: 18,
  blocks: [
    P('Stehendes Wasser ist gefährlich. Strömendes Wasser ist eine andere Größenordnung. Es entwickelt Kräfte, die kaum jemand richtig einschätzt, und es erzeugt Fallen, die von der Oberfläche aus nicht erkennbar sind. Diese Lektion behandelt, was Fließgewässer so gefährlich macht – und warum die Regelfeuerwehr dort vom Ufer arbeitet.'),

    H2('stroemung', 'Die Kraft des Wassers'),
    P('Die Kraft strömenden Wassers steigt überproportional mit der Geschwindigkeit. Schon geringe Tiefen und mäßige Geschwindigkeiten entwickeln enorme Kräfte und drücken Menschen unter Wasser oder gegen Hindernisse.'),
    KF(
      'Bereits etwa 30 cm strömendes Wasser können einen erwachsenen Menschen umreißen.',
      'Etwa 60 cm können ein Auto forttragen.',
      'Wer einmal liegt, kommt in der Strömung kaum wieder auf die Beine.',
      'Kaltes Wasser führt binnen Minuten zu Kälteschock und Handlungsunfähigkeit.',
      'Einsatzkleidung und Stiefel wirken wie Ballast.',
      'Die Wassergeschwindigkeit ist von oben schwer einzuschätzen.'),
    CO('danger', 'Niemals ungesichert ins Fließgewässer', 'Strömungsrettung ist speziell ausgebildeten <b>Strömungsrettern</b> vorbehalten. Die Regelfeuerwehr rettet von Land, von der Brücke oder vom Boot: Rufen – Werfen – Fahren. Wer ohne diese Ausbildung ins fließende Wasser geht, wird selbst zum Patienten.'),

    H2('fallen', 'Die Fallen im Fließgewässer'),
    TBL(['Gefahr', 'Was passiert', 'Erkennbar an'],[
      ['Siebe (Strainer)', 'Wasser fließt durch, Körper wird gegen Hindernis gedrückt und festgehalten', 'Bäume, Wurzeln, Gitter, Zäune im Wasser'],
      ['Walzen an Wehren', 'Rücklaufströmung hält Schwimmende dauerhaft fest', 'gleichmäßige Wasserlinie, aufschäumendes Wasser'],
      ['Unterspülungen', 'Strömung zieht unter Ufer oder Fels', 'Ufer mit Überhang, tiefes Wasser am Ufer'],
      ['Verklemmen (Foot Entrapment)', 'Fuß verkeilt sich am Grund, Strömung drückt Körper unter', 'jedes Fließgewässer mit Steinen und Spalten'],
      ['Treibgut', 'Bäume, Fässer, Fahrzeugteile treffen Personen und Boote', 'sichtbar bei Hochwasser'],
      ['Kaltes Wasser', 'Kälteschock, Erschöpfung, Handlungsunfähigkeit', 'jederzeit außerhalb des Sommers'],
    ]),
    CO('danger', 'Siebe und Walzen sind tödlich', 'Ein <b>Sieb</b> – ein Baum, ein Gitter, ein Zaun im Wasser – lässt Wasser durch, aber keinen Körper. Wer dagegen gedrückt wird, kommt aus eigener Kraft nicht mehr frei. Eine <b>Walze</b> unterhalb eines Wehrs erzeugt eine Rücklaufströmung, die Schwimmende immer wieder zurückzieht. Beide Gefahren sind von der Oberfläche kaum zu erkennen und fordern regelmäßig Todesopfer – auch unter Rettern.'),

    H2('technik', 'Rettungstechniken vom Ufer'),
    STEPS(
      'Person ansprechen und anleiten: auf den Rücken drehen, <b>Füße stromabwärts</b>, Kopf hoch.',
      'Standort stromabwärts wählen – die Person kommt zu dir, nicht du zu ihr.',
      'Wurfsack gezielt <b>oberhalb</b> der Person in die Strömung werfen.',
      'Leine so führen, dass die Person zum Ufer pendelt, nicht gegen die Strömung gezogen wird.',
      'Feste Uferpunkte zum Sichern nutzen, Retter am Ufer sichern.',
      'Bei mehreren Rettungsversuchen mehrere Wurfsäcke bereithalten.',
      'Sicherungsposten weiter stromabwärts stellen.'),
    CO('tip', 'Füße stromabwärts', 'Die wichtigste Anweisung an eine Person in der Strömung lautet: auf den Rücken drehen, Füße stromabwärts, Kopf angehoben. So werden Hindernisse mit den Füßen abgefangen statt mit dem Kopf, und die Gefahr des Verklemmens sinkt erheblich. Diese Anweisung laut und wiederholt zu geben, ist eine wirksame Rettungsmaßnahme.'),

    H2('hochwasser', 'Fließgewässer bei Hochwasser'),
    P('Bei Hochwasser wird jedes Gewässer zum Fließgewässer – auch Straßen, Wiesen und Unterführungen. Die vertrauten Verhältnisse gelten nicht mehr: Wege sind unterspült, Kanaldeckel fehlen, Zäune und Hindernisse liegen unter Wasser.'),
    KF(
      'Überflutete Bereiche nicht zu Fuß und nicht mit dem Fahrzeug durchqueren.',
      'Die Wassertiefe ist unter der Oberfläche nicht erkennbar.',
      'Unterspülungen können Wege und Ufer unvermittelt einbrechen lassen.',
      'Treibgut und Strömung wirken zusammen.',
      'Zäune, Gitter und Bewuchs unter Wasser wirken als Siebe.',
      'Bei jeder Arbeit am Wasser Rettungsweste und Sicherung.'),

    H2('spezial', 'Wann Spezialkräfte gebraucht werden'),
    KF(
      'Person in der Strömung, die nicht vom Ufer erreicht werden kann.',
      'Person in einem Sieb oder in einer Walze festgehalten.',
      'Rettung aus einem Fahrzeug im Wasser.',
      'Suche unter Wasser – ausschließlich Aufgabe ausgebildeter Taucher nach FwDV 8.',
      'Ausgedehnte Hochwasserlagen mit Menschenrettung.',
      'Jede Lage, die den Einsatz im fließenden Wasser erfordert.'),
    CO('info', 'Sofort mitalarmieren', 'Strömungsretter, Wasserrettungszüge und Taucher haben lange Anfahrts- und Rüstzeiten. Sie werden deshalb bei jedem Verdacht sofort mitalarmiert – nicht erst, wenn eigene Versuche gescheitert sind. Ein Rückruf kostet nichts; eine verlorene halbe Stunde kann alles kosten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Etwa 30 cm strömendes Wasser reißen einen Menschen um, 60 cm ein Auto.',
      '<b>Siebe</b> und <b>Walzen</b> sind tödliche Fallen und kaum erkennbar.',
      'Strömungsrettung ist Spezialkräften vorbehalten.',
      'Die Regelfeuerwehr rettet vom Land, von der Brücke oder vom Boot.',
      'Anweisung an Betroffene: auf den Rücken, <b>Füße stromabwärts</b>, Kopf hoch.',
      'Standort stromabwärts wählen, Wurfsack oberhalb werfen.',
      'Bei Hochwasser wird jedes Gewässer zum Fließgewässer.',
      'Spezialkräfte sofort mitalarmieren, nicht erst nach eigenen Versuchen.'),
  ],
},

/* ---------------------------------------------------------------- X4 ---- */
{
  id: 'x4', title: 'Bootsdienst: Führung, Beladung & Rettung vom Boot', duration: 18,
  blocks: [
    P('Ein Feuerwehrboot ist kein Freizeitboot mit Blaulicht. Es fährt bei Hochwasser durch Treibgut, nachts, mit voller Besatzung in Schutzkleidung und häufig gegen die Strömung. Das verlangt vom Bootsführer eine eigene Ausbildung – und von der Besatzung Disziplin.'),

    H2('bootsfuehrer', 'Verantwortung des Bootsführers'),
    P('Der Bootsführer verantwortet Besatzung, Beladung und Fahrweise. Er entscheidet über den sicheren Einsatz des Bootes und kann eine Fahrt jederzeit ablehnen oder abbrechen – auch gegen den Wunsch der Einsatzleitung, wenn er sie für unverantwortbar hält.'),
    KF(
      'Kenntnis des Gewässers: Strömung, Untiefen, Hindernisse, Wehre.',
      'Beurteilung von Wetter, Wasserstand und Sichtverhältnissen.',
      'Verantwortung für Beladung, Trimm und Besatzungsstärke.',
      'Einweisung der Besatzung vor jeder Fahrt.',
      'Entscheidung über Abbruch – seine Entscheidung, nicht die der Einsatzleitung.',
      'Meldung der Fahrt an die Einsatzleitung mit Ziel und voraussichtlicher Dauer.'),
    CO('warn', 'Das Boot ist kein Taxi', 'Bei Hochwasserlagen entsteht schnell die Erwartung, das Boot könne beliebig Menschen und Material transportieren. Jede Fahrt ist aber ein eigener Einsatz mit eigenem Risiko. Der Bootsführer entscheidet über Zahl und Sinn der Fahrten – nicht die Zahl der Anfragen.'),

    H2('vorbereitung', 'Vor der Fahrt'),
    STEPS(
      'Boot und Motor prüfen: Kraftstoff, Funktion, Ruderanlage, Beleuchtung.',
      'Ausrüstung kontrollieren: Paddel, Anker, Leinen, Wurfsack, Rettungsmittel, Funk.',
      'Rettungswesten für alle an Bord prüfen und richtig anlegen lassen.',
      'Besatzung einweisen: Ablauf, Aufgaben, Verhalten bei Kentern, Kommandos.',
      'Beladung planen: Gewicht verteilen, nicht überladen, nichts lose transportieren.',
      'Fahrtroute und Rückweg festlegen, Hindernisse einplanen.',
      'Fahrt bei der Einsatzleitung anmelden.'),
    KF(
      'Rettungsweste ohnmachtssicher, geschlossen und richtig eingestellt.',
      'Keine losen Gegenstände an Bord – sie werden bei Kentern zur Gefahr.',
      'Schweres Gerät tief und mittig verstauen.',
      'Immer Paddel und Anker mitführen – auch bei Motorbooten.',
      'Funkgerät wasserdicht verpacken oder wassergeschützt ausführen.',
      'Beleuchtung für Nachtfahrten prüfen.'),

    H2('fahren', 'Fahrweise'),
    P('Die Fahrweise auf einem Fließgewässer unterscheidet sich grundlegend vom stehenden Wasser: Das Boot muss ständig gegen die Strömung gehalten werden, und jede Bewegung wird von ihr beeinflusst.'),
    KF(
      'Mit dem Bug gegen die Strömung fahren – so bleibt das Boot steuerbar.',
      'Wehre, Walzen und Rückströmungen großräumig meiden.',
      'Treibgut beobachten – es kann Motor und Bootshaut beschädigen.',
      'Bei Brücken und Engstellen langsam und mit Abstand fahren.',
      'Untiefen und überflutete Hindernisse einkalkulieren: Zäune, Autos, Mauern.',
      'Bei Dunkelheit Geschwindigkeit deutlich reduzieren.',
      'Bei Verlust der Kontrolle: Anker werfen und Hilfe anfordern.'),
    CO('danger', 'Wehre und Walzen', 'Unterhalb eines Wehrs bildet sich eine Rücklaufströmung, die Boote und Menschen festhält. Sie ist von oberhalb kaum zu erkennen und aus eigener Kraft nicht zu verlassen. Wehre werden großräumig gemieden, und ihre Lage gehört in die Einsatzplanung jedes Gewässers im Ausrückgebiet.'),

    H2('rettung', 'Personen vom Boot aus aufnehmen'),
    STEPS(
      'Person frühzeitig ansprechen und anleiten, bevor das Boot heran ist.',
      'Boot gegen die Strömung stellen und Position halten.',
      'Person an der niedrigsten geeigneten Stelle aufnehmen – Heck oder Seite.',
      'Besatzung als Gegengewicht auf der anderen Seite positionieren.',
      'Bei Bewusstlosigkeit mit mehreren Helfern kontrolliert bergen.',
      'Person sofort vor Auskühlung schützen und flach lagern.',
      'Zügig an Land bringen und dem Rettungsdienst übergeben.'),
    CO('warn', 'Nicht über die Bordwand ziehen', 'Eine Person über die hohe Bordwand ins Boot zu ziehen, erzeugt ein erhebliches Kippmoment – besonders bei Schlauchbooten und kleinen Booten. Deshalb wird über das Heck oder die niedrigste Stelle aufgenommen, und die Besatzung gleicht das Gewicht aus. Wenn das nicht geht, wird die Person am Boot gesichert und zum Ufer geschleppt.'),

    H2('kentern', 'Verhalten bei Kentern'),
    KF(
      'Ruhe bewahren – die Rettungsweste hält über Wasser.',
      'Am Boot bleiben, wenn es schwimmt: Es ist groß, sichtbar und trägt.',
      'Personen zählen und laut Kontakt halten.',
      'Füße stromabwärts, wenn man abgetrieben wird.',
      'Nicht gegen die Strömung schwimmen – zum Ufer pendeln.',
      'Sofort Notruf über Funk oder durch die Ufersicherung.',
      'Das Verhalten bei Kentern wird vor jeder Fahrt besprochen und regelmäßig geübt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der Bootsführer verantwortet Besatzung, Beladung und Fahrweise – und kann abbrechen.',
      'Vor jeder Fahrt: Boot, Ausrüstung, Rettungswesten, Einweisung, Anmeldung.',
      'Keine losen Gegenstände an Bord; Paddel und Anker immer mitführen.',
      'Mit dem Bug gegen die Strömung fahren.',
      'Wehre und Walzen großräumig meiden.',
      'Personen an der niedrigsten Stelle aufnehmen, Gewicht ausgleichen.',
      'Bei Kentern am schwimmenden Boot bleiben, Füße stromabwärts.',
      'Verhalten bei Kentern vor jeder Fahrt besprechen.'),
  ],
},

/* ---------------------------------------------------------------- X5 ---- */
{
  id: 'x5', title: 'Tauchen im Feuerwehreinsatz (FwDV 8)', duration: 16,
  blocks: [
    P('Der Feuerwehrtaucher ist eine der aufwendigsten Spezialfunktionen überhaupt: hohe Anforderungen an Gesundheit und Ausbildung, ständige Übungspflicht und ein Einsatzumfeld, in dem der Taucher weder sieht noch gehört wird. Diese Lektion vermittelt, was jede Einsatzkraft darüber wissen sollte – auch ohne selbst zu tauchen.'),

    H2('warum', 'Wann getaucht wird'),
    P('Der Tauchereinsatz ist immer eine Ausnahme. Er kommt in Betracht, wenn eine Person unter Wasser vermutet wird, wenn Gegenstände geborgen oder wenn Arbeiten unter Wasser durchgeführt werden müssen – und wenn keine andere Möglichkeit besteht.'),
    TBL(['Anlass', 'Bewertung'],[
      ['Personensuche kurz nach dem Untergehen', 'zeitkritisch, höchste Priorität, Rettungschance besteht'],
      ['Personensuche nach längerer Zeit', 'Bergung, keine Zeitkritikalität – Risikoabwägung ändert sich'],
      ['Fahrzeug im Wasser', 'zunächst klären, ob Personen darin sind'],
      ['Bergung von Sachwerten', 'nachrangig, oft Aufgabe von Fachfirmen'],
      ['Arbeiten unter Wasser', 'nur bei entsprechender Qualifikation und Auftrag'],
    ]),
    CO('info', 'Die entscheidende Frage', 'Vor jedem Tauchereinsatz steht die Frage, ob es sich um eine <b>Rettung</b> oder eine <b>Bergung</b> handelt. Bei einer Rettung ist ein höheres Risiko vertretbar, weil ein Menschenleben zu retten ist. Bei einer Bergung ist es das nicht – dann wird geplant, vorbereitet und gegebenenfalls auf günstigere Bedingungen gewartet.'),

    H2('fwdv8', 'Die FwDV 8'),
    DEF('FwDV 8', 'Die Feuerwehr-Dienstvorschrift 8 regelt den Tauchereinsatz der Feuerwehr: Voraussetzungen für Taucher, Zusammensetzung des Tauchtrupps, Ausrüstung, Einsatzgrenzen und Sicherheitsbestimmungen. Sie ist eine der Vorschriften mit den strengsten persönlichen Anforderungen überhaupt.'),
    KF(
      'Ausbildung zum Feuerwehrtaucher mit mehreren Stufen.',
      'Regelmäßige arbeitsmedizinische Vorsorge für Taucherarbeiten.',
      'Mindestzahl an Pflichttauchgängen pro Jahr, um die Qualifikation zu erhalten.',
      'Einsatz nur im <b>Tauchtrupp</b> mit festgelegter Mindeststärke.',
      'Signalleine zwischen Taucher und Sicherungsposten.',
      'Reservetaucher, der einsatzbereit an Land steht.',
      'Taucheinsatzführer, der den Einsatz leitet und verantwortet.'),

    H2('grenzen', 'Einsatzgrenzen'),
    P('Tauchen im Feuerwehreinsatz findet unter Bedingungen statt, die mit Sporttauchen nichts zu tun haben: null Sicht, kaltes Wasser, Hindernisse, Strömung und Zeitdruck. Deshalb sind die Grenzen eng gezogen.'),
    KF(
      'Begrenzte Tauchtiefe je nach Qualifikation.',
      'Strömungsgeschwindigkeit als Ausschlusskriterium.',
      'Kein Tauchen in Bereichen mit Sog, etwa an Einlaufbauwerken.',
      'Kein Tauchen unter Eis ohne besondere Qualifikation und Ausrüstung.',
      'Kein Tauchen in kontaminiertem Wasser ohne geeigneten Schutz.',
      'Kein Einstieg in Hohlräume und Wracks ohne Spezialausbildung.',
      'Abbruch bei technischen Problemen, Kälte oder Erschöpfung.'),
    CO('danger', 'Null Sicht ist der Normalfall', 'In deutschen Binnengewässern taucht die Feuerwehr fast immer bei null Sicht – der Taucher arbeitet ausschließlich mit den Händen und der Signalleine. Das erklärt, warum die Suche so lange dauert und warum jede Abweichung vom Verfahren gefährlich ist.'),

    H2('unterstuetzung', 'Was die übrigen Kräfte leisten'),
    P('Die meisten Einsatzkräfte werden nie tauchen – aber viele werden einen Tauchereinsatz unterstützen. Diese Unterstützung ist erheblich und entscheidet mit über den Erfolg.'),
    KF(
      'Einsatzstelle sichern, Ufer absperren, Zuschauer fernhalten.',
      'Beleuchtung herstellen – der Bereich muss auch nachts ausgeleuchtet sein.',
      'Ein- und Ausstiegsstelle vorbereiten und sichern.',
      'Boot bereitstellen und führen.',
      'Zeugen befragen und den vermuteten Eintrittspunkt möglichst genau festlegen.',
      'Sammelstelle für Angehörige einrichten und betreuen.',
      'Rettungsdienst und Notarzt vorhalten.',
      'Wärmebereich und Getränke für die Taucher bereitstellen.'),
    CO('tip', 'Der Eintrittspunkt entscheidet', 'Die wichtigste Information für einen Tauchereinsatz ist der Punkt, an dem die Person zuletzt gesehen wurde. Je genauer er bestimmt werden kann, desto kleiner das Suchgebiet und desto größer die Chance. Zeugen zu befragen und den Punkt vom Ufer aus einzupeilen, ist deshalb eine der wertvollsten Aufgaben überhaupt – und sie kann jeder übernehmen.'),

    H2('psnv', 'Belastung'),
    P('Tauchereinsätze zur Personensuche enden häufig mit der Bergung eines Verstorbenen. Für die beteiligten Kräfte – nicht nur für die Taucher – ist das eine erhebliche Belastung. Die psychosoziale Notfallversorgung gehört bei solchen Einsätzen zur Nachbereitung, nicht zur Ausnahme.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der Tauchereinsatz ist immer eine Ausnahme mit hohem Aufwand und Risiko.',
      'Erst klären: Rettung oder Bergung? Davon hängt die Risikoabwägung ab.',
      'Die <b>FwDV 8</b> regelt Voraussetzungen, Tauchtrupp, Ausrüstung und Grenzen.',
      'Einsatz nur im Tauchtrupp mit Signalleine, Reservetaucher und Einsatzführer.',
      'In Binnengewässern ist null Sicht der Normalfall.',
      'Die übrigen Kräfte sichern, beleuchten, befragen und betreuen.',
      'Der genaue Eintrittspunkt ist die wichtigste Information.',
      'Nach der Bergung Verstorbener gehört die PSNV zur Nachbereitung.'),
  ],
},

];
