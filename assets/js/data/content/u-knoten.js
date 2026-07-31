/* =========================================================================
   MODUL U — Knoten, Stiche & Bunde
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls U.

   Fachliche Grundlage: FwDV 1 (Grundtätigkeiten), DIN 14920 ff.
   (Feuerwehrleinen), DIN 14927 (Feuerwehr-Haltegurt), DIN EN 362
   (Karabiner), DIN EN 566/795 (Bandschlingen und Anschlageinrichtungen),
   DGUV Vorschrift 49. Knoten müssen praktisch geübt werden – Text und
   Knoten-Trainer ersetzen die Ausbildung am Standort nicht.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_U = [

/* ---------------------------------------------------------------- U1 ---- */
{
  id: 'u1', title: 'Die wichtigsten Knoten', duration: 20,
  blocks: [
    P('Knoten gehören zu den ältesten Techniken der Feuerwehr und zu den wenigen, die sich in hundert Jahren kaum verändert haben. Der Grund ist einfach: Sie funktionieren. Ein sauber gelegter Mastwurf hält heute genauso wie vor fünfzig Jahren – vorausgesetzt, er sitzt.'),

    H2('warum', 'Warum Knoten sitzen müssen'),
    P('Knoten sichern Geräte, Personen und die Einsatzkraft selbst. Ein falsch gelegter Knoten sieht oft fast richtig aus und versagt unter Last. Deshalb gilt für die wenigen Knoten, die man wirklich braucht, ein hoher Anspruch: Sie müssen im Dunkeln, mit Handschuhen und unter Stress gelingen.'),
    KF(
      'Ein Knoten, der nur bei Tageslicht und ohne Handschuhe gelingt, ist im Einsatz nutzlos.',
      'Lieber fünf Knoten sicher als fünfzehn ungefähr.',
      'Jeder Knoten schwächt die Leine – sauberes Legen begrenzt den Verlust.',
      'Knoten werden gegen selbstständiges Lösen gesichert.',
      'Nach dem Legen wird geprüft: Sitzt der Knoten so, wie er soll?',
      'Im Zweifel neu legen statt nachjustieren.'),

    H2('knoten', 'Die feuerwehrtechnischen Knoten'),
    TBL(['Knoten', 'Zweck', 'Besonderheit'],[
      ['Mastwurf', 'Befestigen an Rundmaterial, Geräte hochziehen', 'schnell, verstellbar, muss gesichert werden'],
      ['Zimmermannsschlag', 'schnelles Befestigen an Balken und Stangen', 'zieht sich unter Last fest, gut lösbar'],
      ['Pfahlstich (Rettungsknoten)', 'feste Schlinge, die sich nicht zuzieht', 'klassischer Rettungsknoten, sichern'],
      ['Doppelter Ankerstich', 'Bandschlinge am Anschlagpunkt befestigen', 'einfach und materialschonend'],
      ['Kreuzknoten (Weberknoten)', 'zwei gleich starke Leinen verbinden', 'nur für geringe Belastung'],
      ['Achterknoten', 'sichere Endschlaufe, Stopperknoten', 'auch nach Belastung gut zu lösen'],
      ['Spierenstich, Halbschlag', 'Sichern anderer Knoten', 'gehört zu fast jedem Knoten dazu'],
    ]),
    CO('tip', 'Üben, üben, üben', 'Knoten lernt man ausschließlich durch Wiederholung. Nimm dir eine Leine mit nach Hause und lege den Mastwurf hundertmal – am Stuhlbein, beim Fernsehen, mit geschlossenen Augen. Danach sitzt er. Der Knoten-Trainer der Akademie hilft beim Einprägen der Abfolge, ersetzt aber das Legen mit echtem Material nicht.'),

    H2('mastwurf', 'Der Mastwurf – der Allrounder'),
    P('Der Mastwurf ist der meistgenutzte Feuerwehrknoten. Er befestigt die Leine an Rundmaterial, dient zum Hochziehen von Geräten und lässt sich auch unter geringer Last noch nachjustieren. Er ist schnell zu legen – und genau deshalb wird er häufig zu schnell gelegt.'),
    FIG('mastwurf', 'Der Mastwurf – der Allrounder unter den Feuerwehrknoten, mit Halbschlag gesichert.'),
    KF(
      'Der Mastwurf wird immer mit einem <b>Halbschlag</b> oder Spierenstich gesichert.',
      'Er hält nur auf Rundmaterial zuverlässig – an einer Kante kann er wandern.',
      'Er zieht sich unter Last fest und lässt sich danach schwerer lösen.',
      'Bei wechselnder Belastungsrichtung kann er sich lockern.',
      'Zum Hochziehen von Geräten wird zusätzlich ein Halbschlag um das Gerät gelegt.',
      'Nach dem Legen wird der Sitz geprüft, bevor belastet wird.'),

    H2('rettungsknoten', 'Der Rettungsknoten'),
    P('Der <b>Pfahlstich</b> – auch Bulin oder Palstek genannt – erzeugt eine feste Schlinge, die sich unter Last nicht zuzieht. Genau das macht ihn zum klassischen Rettungsknoten: Eine Schlinge, die sich zusammenzieht, würde eine gesicherte Person einschnüren.'),
    CO('warn', 'Der Rettungsknoten sichert, er fängt nicht auf', 'Mit dem Rettungsknoten kann eine Person an der Feuerwehrleine gesichert oder im äußersten Notfall abgelassen werden. Er ist <b>keine</b> Absturzsicherung: Weder die Feuerwehrleine noch der Haltegurt sind dafür ausgelegt, einen Sturz aufzufangen. Wo Absturzgefahr besteht, gehört der Gerätesatz Absturzsicherung aus <b>Modul K</b> zum Einsatz.'),

    H2('bunde', 'Bunde'),
    P('Bunde verbinden Hölzer oder Stangen miteinander – etwa beim Bau von Behelfskonstruktionen, beim Abstützen oder bei Übungen. Sie spielen im Alltag eine geringere Rolle als die Knoten, gehören aber zum feuerwehrtechnischen Handwerk.'),
    UL(
      '<b>Kreuzbund:</b> verbindet zwei sich kreuzende Hölzer.',
      '<b>Parallelbund:</b> verbindet zwei parallel liegende Hölzer, verlängert sie.',
      '<b>Dreibock:</b> aus drei Stangen, als Aufhängepunkt oder Stütze.'),

    H2('reihenfolge', 'Welche Knoten wann'),
    STEPS(
      '<b>Gerät an der Leine hochziehen:</b> Mastwurf am Gerät, mit Halbschlag gesichert.',
      '<b>Leine an einem Balken befestigen:</b> Zimmermannsschlag oder Mastwurf mit Sicherung.',
      '<b>Feste Schlinge herstellen:</b> Pfahlstich oder Achterknoten.',
      '<b>Bandschlinge anschlagen:</b> doppelter Ankerstich.',
      '<b>Zwei Leinen verbinden:</b> Kreuzknoten – nur bei geringer Belastung.',
      '<b>Leinenende sichern:</b> Achterknoten als Stopper.'),
    CO('info', 'Der Zweck bestimmt den Knoten', 'Es gibt nicht den einen besten Knoten, sondern den passenden für die Aufgabe. Wer sich die sechs Standardsituationen oben merkt, kommt in der Praxis fast immer aus – und weiß auch, wann er lieber jemanden fragt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Knoten müssen im Dunkeln, mit Handschuhen und unter Stress gelingen.',
      'Lieber wenige Knoten sicher als viele ungefähr.',
      'Der <b>Mastwurf</b> ist der Allrounder – immer mit Halbschlag sichern.',
      'Der <b>Pfahlstich</b> erzeugt eine Schlinge, die sich nicht zuzieht.',
      'Der Rettungsknoten sichert, er fängt keinen Sturz auf.',
      'Bunde verbinden Hölzer: Kreuzbund, Parallelbund, Dreibock.',
      'Der Zweck bestimmt den Knoten – sechs Standardsituationen reichen im Alltag.'),
  ],
},

/* ---------------------------------------------------------------- U2 ---- */
{
  id: 'u2', title: 'Leinen, Anwendung & Sicherheit', duration: 18,
  blocks: [
    P('Die Feuerwehrleine ist eines der vielseitigsten Geräte auf dem Fahrzeug – und eines der am häufigsten falsch verwendeten. Sie hält Geräte, sichert Bereiche und rettet im Notfall Leben. Sie ersetzt aber keine Absturzsicherung, und dieser Unterschied ist lebenswichtig.'),

    H2('leinen', 'Die Feuerwehrleine'),
    DEF('Feuerwehrleine', 'Eine genormte Kernmantelleine von etwa 30 Metern Länge, die in einem Leinenbeutel mitgeführt wird. Sie dient zum Sichern, Halten, Hochziehen von Geräten, zum Absperren und zur Not-Selbstrettung. Sie ist <b>keine</b> Absturzsicherung – dafür ist der Gerätesatz Absturzsicherung vorgesehen.'),
    KF(
      'Sie wird im Leinenbeutel geführt, damit sie sich nicht verheddert und geschützt bleibt.',
      'Sie wird nicht geknotet gelagert – Knoten belasten das Material dauerhaft.',
      'Sie ist gekennzeichnet und geprüft; die Prüfung wird dokumentiert.',
      'Sie wird nach jedem Gebrauch geprüft und getrocknet.',
      'Sie hat eine begrenzte Lebensdauer, auch ohne sichtbare Schäden.',
      'Neben der Feuerwehrleine gibt es die kürzere <b>Mehrzweckleine</b> für Hilfsaufgaben.'),

    H2('anwendung', 'Typische Anwendungen'),
    TBL(['Anwendung', 'Vorgehen', 'Zu beachten'],[
      ['Geräte hochziehen', 'Mastwurf mit Halbschlag, Umlenkung mit Kantenschutz', 'niemand unter der Last'],
      ['Bereiche absperren', 'Leine spannen, gut sichtbar kennzeichnen', 'nicht als Absperrung gegen Fahrzeuge'],
      ['Gegenstände sichern', 'gegen Herabfallen oder Wegrollen festlegen', 'Zugrichtung beachten'],
      ['Rückwegsicherung', 'als Leitlinie im Innenangriff', 'ergänzt die Schlauchleitung, ersetzt sie nicht'],
      ['Person sichern', 'Rettungsknoten am Haltegurt', 'nur Halten und Sichern, kein Auffangen'],
      ['Selbstrettung', 'Ablassen aus einem Fenster', 'äußerster Notfall, muss geübt sein'],
      ['Saugleitung sichern', 'Halte- und Ventilleine am Saugkorb', 'Standardanwendung beim Saugbetrieb'],
    ]),
    CO('danger', 'Die entscheidende Abgrenzung', 'Feuerwehrleine und Feuerwehr-Haltegurt sind für <b>Halten und Sichern</b> ausgelegt – also dafür, dass jemand gar nicht erst stürzt. Sie sind nicht dafür gebaut, die Kräfte eines Sturzes aufzufangen. Wo ein Sturz möglich ist, braucht es Auffanggurt, Falldämpfer und dynamisches Seil.'),

    H2('handhabung', 'Richtig handhaben'),
    STEPS(
      'Leine vor Gebrauch aus dem Beutel nehmen und sichten – Schäden erkennen.',
      'Zugrichtung und Umlenkungen festlegen, Kantenschutz einsetzen.',
      'Knoten sauber legen und sichern, Sitz prüfen.',
      'Langsam und gleichmäßig belasten, keine ruckartigen Bewegungen.',
      'Während der Belastung beobachten – Leine, Knoten, Kante, Last.',
      'Nach Gebrauch entlasten, sichten, trocknen und ordnungsgemäß einbeutlen.'),
    CO('warn', 'Kanten schützen', 'Eine über eine scharfe Kante geführte Leine kann unter Last blitzartig durchtrennt werden – schneller, als man reagieren kann. Kantenschutz ist deshalb keine Empfehlung, sondern Voraussetzung. Wenn nichts anderes zur Hand ist, tut es auch eine gefaltete Einsatzjacke oder ein Stück Schlauch.'),

    H2('sicherheit', 'Sicherheitsregeln'),
    KF(
      'Niemand hält sich unter einer hängenden oder gezogenen Last auf.',
      'Leine nicht ruckartig belasten – Stoßbelastung vervielfacht die Kräfte.',
      'Nicht um Körperteile wickeln, um Zug aufzunehmen.',
      'Handschuhe tragen – durchlaufende Leinen verursachen schwere Verbrennungen.',
      'Leinen nicht über heiße Oberflächen führen.',
      'Nach jeder Sturz- oder Stoßbelastung aussondern.',
      'Bei Zweifeln am Zustand: aussondern.'),

    H2('pflege', 'Pflege und Prüfung'),
    KF(
      'Vor und nach jedem Gebrauch Sichtprüfung: Schnitte, Aufrauung, harte Stellen, Verfärbungen.',
      'Verschmutzte Leinen mit klarem Wasser reinigen, keine Lösemittel.',
      'Luftig und im Schatten trocknen – nicht auf der Heizung, nicht in der Sonne.',
      'Vor Chemikalien, Öl, Hitze und UV-Strahlung schützen.',
      'Trocken und dunkel im Leinenbeutel lagern.',
      'Regelmäßige dokumentierte Prüfung durch eine befähigte Person.',
      'Prüfbuch führen und Kennzeichnung erhalten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Feuerwehrleine ist etwa 30 m lang und wird im Leinenbeutel geführt.',
      'Sie dient zum Halten, Sichern, Hochziehen, Absperren und zur Not-Selbstrettung.',
      'Sie ist <b>keine</b> Absturzsicherung.',
      'Kantenschutz ist bei jeder Kantenführung Voraussetzung.',
      'Niemand hält sich unter einer Last auf; nicht ruckartig belasten.',
      'Handschuhe tragen – durchlaufende Leinen verbrennen die Hände.',
      'Nach Sturz- oder Stoßbelastung aussondern.',
      'Sichtprüfung vor und nach Gebrauch, dokumentierte Prüfung regelmäßig.'),
  ],
},

/* ---------------------------------------------------------------- U3 ---- */
{
  id: 'u3', title: 'Anwendung: Geräte hochziehen & sichern', duration: 16,
  blocks: [
    P('Ein Strahlrohr über eine Steckleiter ins zweite Obergeschoss zu tragen ist mühsam und gefährlich. Es an der Leine hochzuziehen ist schnell, sicher und schont Kräfte. Diese Lektion behandelt die praktischen Anwendungen, für die die Feuerwehrleine im Alltag am häufigsten gebraucht wird.'),

    H2('hochziehen', 'Geräte hochziehen'),
    P('Mit Feuerwehrleine und Mastwurf werden Geräte kontrolliert zu einem Trupp in der Höhe gezogen – Strahlrohr, Werkzeug, Schlauch, Beleuchtung. Das Verfahren ist einfach und wird trotzdem regelmäßig unsauber ausgeführt.'),
    STEPS(
      'Gerät mit Mastwurf anschlagen und mit einem Halbschlag sichern.',
      'Bei länglichen Geräten einen zweiten Halbschlag setzen, damit sie waagerecht oder senkrecht hängen wie gewünscht.',
      'Leine über eine Kante oder Umlenkung führen – <b>immer mit Kantenschutz</b>.',
      'Bereich unterhalb freimachen und freihalten.',
      'Auf Kommando gleichmäßig hochziehen – nicht ruckartig.',
      'Gerät oben in Empfang nehmen und sichern.',
      'Erst danach die Leine lösen.'),
    CO('danger', 'Nichts über Menschen ziehen', 'Beim Hochziehen darf sich niemand unter der Last aufhalten – auch nicht kurz. Löst sich der Knoten oder reißt die Leine, wird die Last zum Geschoss. Der Bereich unterhalb wird freigemacht und, wenn nötig, durch eine Kraft freigehalten.'),
    KF(
      'Vor dem Hochziehen Sichtkontakt oder Rufverbindung herstellen.',
      'Kommandos vereinbaren: „Leine straff", „ziehen", „halt".',
      'Gerät so anschlagen, dass es nicht kippen oder herausrutschen kann.',
      'Bei schweren Lasten Umlenkung nutzen und zu mehreren ziehen.',
      'Werkzeug mit losen Teilen zusätzlich sichern.',
      'Nicht über Fensterbrüstungen scheuern lassen.'),

    H2('sichern', 'Sichern und Festlegen'),
    P('Die zweite große Anwendungsgruppe ist das Festlegen: Gegenstände gegen Herabfallen sichern, Schläuche fixieren, Bauteile zurückbinden. Auch hier gilt, dass Zugrichtung und Belastung vorher überlegt werden.'),
    UL(
      '<b>Schläuche an Leitern und Geländern</b> mit Schlauchhaltern oder Mastwurf fixieren – das entlastet den Trupp erheblich.',
      '<b>Gegenstände gegen Herabfallen sichern</b>, etwa lose Dachteile nach Sturm.',
      '<b>Türen und Klappen</b> gegen unbeabsichtigtes Schließen oder Aufschlagen festlegen.',
      '<b>Bauteile zurückbinden</b>, um einen Weg freizuhalten.',
      '<b>Saugleitung sichern</b> mit Halte- und Ventilleine.'),

    H2('absperren', 'Absperren und Kennzeichnen'),
    P('Leinen eignen sich zum Absperren von Bereichen, in denen keine feste Absperrung möglich ist – etwa im Gelände oder an einer Einsatzstelle im Wald. Sie sind allerdings kein Ersatz für eine Verkehrsabsicherung.'),
    KF(
      'Leine gut sichtbar spannen, bei Dunkelheit ausleuchten oder mit Trassierband ergänzen.',
      'In Sicht- und Griffhöhe spannen, nicht als Stolperfalle.',
      'Nicht als Absperrung gegen Fahrzeuge verwenden – dafür sind Fahrzeuge und Warneinrichtungen da.',
      'Absperrung bewachen oder regelmäßig kontrollieren.',
      'Nach dem Einsatz vollständig abbauen und mitnehmen.'),

    H2('person', 'Personen sichern'),
    CO('warn', 'Nur Halten und Sichern', 'Eine Person kann mit dem Rettungsknoten an der Feuerwehrleine gesichert oder im äußersten Notfall abgelassen werden. Das ist eine Notmaßnahme. Für planmäßiges Arbeiten in absturzgefährdeten Bereichen ist der Gerätesatz Absturzsicherung vorgesehen – mit Auffanggurt, Falldämpfer und geeignetem Seil.'),

    H2('team', 'Zusammenarbeit'),
    KF(
      'Ein Kommandogeber steuert den Vorgang.',
      'Kommandos laut und eindeutig geben, Empfang bestätigen lassen.',
      'Bei fehlendem Sichtkontakt Funk oder einen Melder einsetzen.',
      'Jede Kraft darf den Vorgang stoppen, wenn sie eine Gefahr erkennt.',
      'Vor Beginn den Ablauf kurz durchsprechen.',
      'Nach dem Vorgang Material einsammeln und prüfen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Geräte mit Mastwurf und Halbschlag anschlagen, Kantenschutz verwenden.',
      'Niemand hält sich unter der Last auf.',
      'Gleichmäßig ziehen, oben sichern, erst dann die Leine lösen.',
      'Schläuche fixieren entlastet den Trupp erheblich.',
      'Absperrleinen sichtbar spannen – kein Ersatz für Verkehrsabsicherung.',
      'Personen sichern nur im Sinne von Halten – kein Auffangen.',
      'Ein Kommandogeber, klare Kommandos, jederzeitiges Stopprecht.'),
  ],
},

/* ---------------------------------------------------------------- U4 ---- */
{
  id: 'u4', title: 'Bandschlingen, Karabiner & Anschlagmittel', duration: 16,
  blocks: [
    P('Neben der Leine gehören zunehmend genähte Bandschlingen, Karabiner und Rollen zur Ausstattung. Sie sind schneller anzuwenden als Knoten, belastbarer und materialschonender – vorausgesetzt, man kennt ihre Eigenheiten. Denn falsch belastet versagen sie bei einem Bruchteil ihrer Nennlast.'),

    H2('mittel', 'Die Anschlagmittel'),
    TBL(['Mittel', 'Verwendung', 'Zu beachten'],[
      ['Bandschlinge', 'Anschlagen an Bauteilen, meist mit Ankerstich', 'keine scharfen Kanten, Winkel beachten'],
      ['Reepschnur', 'Hilfsschnur, Klemmknoten wie der Prusik', 'kein vollwertiges Anschlagmittel'],
      ['Karabiner mit Verschlusssicherung', 'Verbinden von Elementen', 'nur längs und verriegelt belasten'],
      ['Umlenkrolle', 'Kraftrichtung ändern, Reibung mindern', 'Umlenkung verdoppelt näherungsweise die Kraft am Anschlagpunkt'],
      ['Anschlageinrichtung nach EN 795', 'geprüfter, fester Anschlagpunkt', 'sofern vorhanden, immer bevorzugen'],
      ['Kantenschutz', 'schützt Seile und Bänder an Kanten', 'Pflicht, sobald eine Kante im Spiel ist'],
    ]),
    DEF('Ankerstich', 'Mit dem einfachen oder doppelten Ankerstich wird eine Bandschlinge um einen Anschlagpunkt gelegt. Er ist schnell, materialschonend und gut zu kontrollieren. Wichtig: Über eine scharfe Kante gelegt verliert er erheblich an Tragfähigkeit – dann gehört Kantenschutz darunter.'),

    H2('winkel', 'Der Winkel entscheidet'),
    P('Wird eine Schlinge so gelegt, dass ihre beiden Schenkel einen Winkel bilden, verteilt sich die Last nicht einfach hälftig. Je <b>spitzer</b> der Winkel zwischen den Schenkeln, desto höher die Kraft in jedem einzelnen Schenkel – bei sehr flachen Anordnungen kann sie ein Vielfaches der eigentlichen Last betragen.'),
    KF(
      'Schlingen möglichst mit weitem Winkel führen.',
      'Sehr flache Anordnungen vermeiden – sie erzeugen enorme Kräfte.',
      'Bei zwei Anschlagpunkten die Schlinge nicht straff zwischen ihnen spannen.',
      'Lieber eine längere Schlinge nehmen als eine zu kurze straff ziehen.',
      'Bei Unsicherheit einen einzelnen, tragfähigen Punkt bevorzugen.'),

    H2('belastung', 'Belastung und Kräfte'),
    DEF('Bruchlast und Gebrauchslast', 'Die <b>Bruchlast</b> ist die Kraft, bei der ein Bauteil versagt – bei Karabinern in der Längsachse häufig über 20 kN, also mehr als zwei Tonnen. Im Einsatz bleibt man mit großer Sicherheitsreserve weit darunter. Diese Reserve ist kein Puffer für Nachlässigkeit, sondern gleicht Fertigungsstreuung, Alterung, dynamische Belastung und ungünstige Geometrie aus.'),
    CO('danger', 'Karabiner richtig belasten', 'Ein Karabiner ist nur <b>in Längsrichtung mit geschlossenem und verriegeltem Verschluss</b> voll belastbar. Quer belastet, mit offenem Schnapper oder über eine Kante gezogen bricht er bei einem Bruchteil dieser Last. Deshalb: darauf achten, dass der Karabiner frei hängen kann, nicht verkantet und nicht an einem Bauteil aufliegt.'),
    KF(
      'Verschluss immer schließen und verriegeln – Kontrolle durch Ansehen und Anfassen.',
      'Karabiner nicht über Kanten oder Ecken belasten.',
      'Keine Querbelastung, kein Aufliegen des Schnappers.',
      'Nicht mehrere Karabiner ineinanderhängen.',
      'Nach Sturzbelastung aussondern.',
      'Nur Material mit Kennzeichnung und gültiger Prüfung verwenden.'),

    H2('rollen', 'Umlenkrollen und Kraftrichtung'),
    P('Eine Umlenkrolle ändert die Kraftrichtung und verringert die Reibung. Sie hat aber einen Effekt, der oft übersehen wird: Am Anschlagpunkt der Rolle wirkt näherungsweise die <b>Summe</b> beider Seilkräfte – bei einer Umlenkung um 180 Grad also ungefähr die doppelte Last.'),
    KF(
      'Anschlagpunkt der Umlenkung entsprechend stark auslegen.',
      'Nur geeignete Rollen verwenden, keine Karabiner als Umlenkung bei hoher Last.',
      'Seildurchmesser und Rollengröße müssen zusammenpassen.',
      'Rollen regelmäßig prüfen – Lager, Seitenteile, Achse.',
      'Bei Flaschenzügen die Übersetzung kennen und die Kräfte abschätzen.'),

    H2('zusammen', 'Zusammenspiel mit Knoten'),
    P('Knoten und industrielle Anschlagmittel schließen sich nicht aus – sie ergänzen sich. Wo eine genähte Bandschlinge verfügbar ist, ist sie einem geknoteten Behelf vorzuziehen: Sie ist geprüft, ihre Tragfähigkeit ist bekannt und sie schwächt sich nicht durch Knoten. Wo keine da ist, tut es der Knoten – wenn er sitzt.'),
    CO('tip', 'Kennzeichnung lesen', 'Genähte Bandschlingen, Karabiner und Rollen tragen eine Kennzeichnung mit Norm, Bruchlast und Herstellungsdatum. Diese Angaben zu lesen und zu verstehen, gehört zur Materialkunde – und dauert zwanzig Sekunden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Anschlagmittel: Bandschlinge, Reepschnur, Karabiner, Umlenkrolle, Anschlageinrichtung.',
      'Der <b>doppelte Ankerstich</b> ist die Standardanwendung für Bandschlingen.',
      'Je spitzer der Winkel zwischen den Schenkeln, desto höher die Kraft.',
      'Karabiner nur längs und mit verriegeltem Verschluss belasten.',
      'Am Anschlagpunkt einer Umlenkung wirkt näherungsweise die doppelte Last.',
      'Genähte Schlingen sind geknoteten Behelfen vorzuziehen.',
      'Kennzeichnung lesen: Norm, Bruchlast, Herstellungsdatum.'),
  ],
},

/* ---------------------------------------------------------------- U5 ---- */
{
  id: 'u5', title: 'Leinen & Material prüfen, pflegen, aussondern', duration: 16,
  blocks: [
    P('Textiles Material ist das einzige auf dem Fahrzeug, das altert, ohne benutzt zu werden – und dessen Schäden man häufig nicht sieht. Ein Seil, das perfekt aussieht, kann durch Chemikalienkontakt oder UV-Strahlung erheblich geschwächt sein. Deshalb ist Materialkunde hier keine Nebensache.'),

    H2('pruefen', 'Prüfen vor und nach Gebrauch'),
    P('Die Sichtprüfung durch die Einsatzkraft ist die erste und wichtigste Kontrolle. Sie dauert eine Minute und findet die meisten Schäden.'),
    KF(
      '<b>Mantel:</b> Schnitte, Aufrauung, Fransen, freiliegender Kern.',
      '<b>Verfärbungen:</b> können auf Chemikalien- oder Hitzeeinwirkung hindeuten.',
      '<b>Harte oder verglaste Stellen:</b> Hinweis auf Hitzeeinwirkung durch Reibung.',
      '<b>Weiche oder verdickte Stellen:</b> möglicher Kernschaden – die Leine über die ganze Länge durch die Hand ziehen.',
      '<b>Nähte bei Bandschlingen und Gurten:</b> aufgegangene, gerissene oder aufgeriebene Nähte.',
      '<b>Beschläge:</b> Karabiner, Ösen, Schnallen auf Verformung und Funktion prüfen.',
      '<b>Kennzeichnung:</b> lesbar und vollständig?'),
    CO('warn', 'Die Tastprüfung nicht überspringen', 'Kernschäden sind von außen oft unsichtbar. Wer die Leine langsam durch die Hand laufen lässt, spürt Verdickungen, Weichstellen und Unregelmäßigkeiten, die das Auge nicht findet. Diese Prüfung dauert bei 30 Metern etwa eine Minute.'),

    H2('aussondern', 'Wann ausgesondert wird'),
    TBL(['Anlass', 'Konsequenz'],[
      ['Sturz- oder Stoßbelastung', 'sofort aussondern – unsichtbare Schäden möglich'],
      ['Sichtbare Beschädigung', 'aussondern'],
      ['Kontakt mit Chemikalien', 'aussondern, auch ohne sichtbaren Schaden'],
      ['Hitzeeinwirkung, Schmelzstellen', 'aussondern'],
      ['Überschreitung der Lebensdauer', 'aussondern nach Herstellerangabe'],
      ['Unklare Vorgeschichte', 'aussondern – im Zweifel für die Sicherheit'],
      ['Fehlende oder unlesbare Kennzeichnung', 'aussondern'],
    ]),
    CO('danger', 'Aussondern heißt aussondern', 'Ausgesondertes Material wird eindeutig gekennzeichnet, unbrauchbar gemacht und getrennt gelagert – nicht „für Übungen" weiterverwendet. Übungsmaterial, das im Ernstfall gegriffen wird, ist eine klassische Unfallursache. Wer eine Leine aussortiert, schneidet sie durch.'),

    H2('pflege', 'Pflege'),
    KF(
      'Verschmutzte Leinen mit klarem, lauwarmem Wasser reinigen; keine Lösemittel.',
      'Luftig, im Schatten und bei Raumtemperatur trocknen.',
      'Nicht auf der Heizung, nicht im Trockner, nicht in der Sonne trocknen.',
      'Trocken, dunkel und ohne Kontakt zu Chemikalien lagern.',
      'Im Leinenbeutel und nicht geknotet lagern.',
      'Nicht über scharfe Kanten oder rauen Boden ziehen.',
      'Von Kraftstoffen, Ölen, Batteriesäure und Reinigungsmitteln fernhalten.'),
    CO('warn', 'Chemikalien wirken unsichtbar', 'Säuren und einige Lösemittel schädigen Kunstfasern, ohne dass man es sieht. Eine Leine, die Kontakt mit Batteriesäure, unbekannten Chemikalien oder Kraftstoff hatte, wird ausgesondert – auch wenn sie unbeschädigt aussieht und sich normal anfühlt.'),

    H2('lebensdauer', 'Alterung und Lebensdauer'),
    P('Textiles Material altert durch UV-Strahlung, Feuchtigkeit, Temperaturwechsel und mechanische Beanspruchung – auch dann, wenn es nur gelagert wird. Hersteller geben deshalb eine maximale Lebensdauer an, die unabhängig vom Zustand gilt.'),
    KF(
      'Herstellungsdatum kennzeichnen und im Prüfbuch führen.',
      'Maximale Lagerdauer und maximale Gebrauchsdauer unterscheiden.',
      'Intensiv genutztes Material altert schneller als selten benutztes.',
      'Bei Erreichen der Lebensdauer aussondern, auch ohne Schäden.',
      'Ersatzbeschaffung rechtzeitig planen – nicht erst bei Ablauf.'),

    H2('doku', 'Prüfung und Dokumentation'),
    STEPS(
      'Sichtprüfung durch die Einsatzkraft vor und nach jedem Gebrauch.',
      'Prüfung durch eine befähigte Person nach den festgelegten Fristen.',
      'Ergebnis, Datum und Prüfer im Prüfbuch oder der Software dokumentieren.',
      'Kennzeichnung am Material erhalten und lesbar halten.',
      'Mängel sofort melden und das Material der Nutzung entziehen.',
      'Ausgesondertes Material dokumentieren und unbrauchbar machen.'),
    CO('tip', 'Vertrauen ins Material', 'Wer sich an einer Leine sichert oder ein Gerät über den Köpfen anderer hochzieht, muss dem Material vertrauen können. Dieses Vertrauen entsteht nicht durch Hoffnung, sondern durch Pflege, ehrliche Prüfung und konsequentes Aussondern. Es ist gelebter Eigenschutz – und kostet weniger als jeder Unfall.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Sichtprüfung vor und nach jedem Gebrauch; Tastprüfung über die ganze Länge.',
      'Aussondern nach Sturzbelastung, Beschädigung, Chemikalien- oder Hitzekontakt.',
      'Ausgesondertes Material unbrauchbar machen – nicht für Übungen verwenden.',
      'Mit klarem Wasser reinigen, luftig und im Schatten trocknen.',
      'Trocken, dunkel und chemikalienfrei lagern; nicht geknotet.',
      'Textiles Material altert auch ungenutzt – Lebensdauer beachten.',
      'Prüfungen dokumentieren, Kennzeichnung erhalten.',
      'Im Zweifel für die Sicherheit.'),
  ],
},

];
