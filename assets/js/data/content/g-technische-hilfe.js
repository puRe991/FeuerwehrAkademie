/* =========================================================================
   MODUL G — Technische Hilfeleistung
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls G.

   Fachliche Grundlage: FwDV 1, FwDV 3, FwDV 100, DGUV Vorschrift 49 und
   zugehörige Regeln/Informationen zur technischen Hilfeleistung,
   Rettungsdatenblätter der Hersteller, Regelwerk der DB AG für Einsätze
   im Bahnbereich. Abstände und Zahlenwerte sind Richtwerte – maßgeblich
   sind Hersteller- und Betreiberangaben.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_G = [

/* ---------------------------------------------------------------- G1 ---- */
{
  id: 'g1', title: 'Einsatzstelle & Gefahren', duration: 22,
  blocks: [
    P('Bei einem Verkehrsunfall gibt es zwei Gruppen von Gefahren: die, die vom Unfall ausgehen, und die, die von allem anderen kommen – vor allem vom fließenden Verkehr. Statistisch ist die zweite Gruppe für Einsatzkräfte die gefährlichere. Deshalb beginnt jede technische Hilfeleistung mit der Absicherung und nicht mit dem Rettungsgerät.'),

    H2('sichern', 'Einsatzstellensicherung'),
    P('Die Absicherung schafft einen Arbeitsraum, in dem gefahrlos gearbeitet werden kann. Sie wird sofort begonnen, parallel zur ersten Erkundung, und nicht nachgeholt, wenn Zeit ist.'),
    STEPS(
      'Warnkleidung tragen – schon beim Absitzen, nicht erst an der Unfallstelle.',
      'Fahrzeug als Schutzschild schräg vor der Unfallstelle abstellen, Räder abgewandt eingeschlagen.',
      'Warnleuchten, Verkehrswarnanlage und Blaulicht nutzen; Fahrlicht bei Gegenverkehr abblenden.',
      'Warneinrichtungen weit vorgelagert aufstellen – bei hoher Geschwindigkeit mehrere hundert Meter.',
      'Absperrbereich festlegen und mit der Polizei abstimmen.',
      'Brandschutz sicherstellen: Löscher und Schnellangriff beziehungsweise C-Rohr bereitlegen.',
      'Unfallfahrzeug gegen Wegrollen sichern, Zündung ausschalten, Handbremse anziehen.',
      'Batterie abklemmen – <b>Minuspol zuerst</b> –, wenn die Lage es erfordert.'),
    FIG('thstelle', 'Ordnung des Raumes an der Einsatzstelle: innerer Bereich für die Rettung, äußerer Bereich für die Geräte, davor die Verkehrsabsicherung.'),
    CO('danger', 'Der fließende Verkehr ist die Hauptgefahr', 'Einsatzkräfte werden regelmäßig auf Autobahnen und Landstraßen angefahren – auch bei vollständiger Absicherung. Deshalb: niemals mit dem Rücken zum Verkehr arbeiten, den geschützten Bereich nicht verlassen, und bei Arbeiten auf der Gegenfahrbahn zusätzlich absichern lassen.'),
    CO('warn', 'Batterie abklemmen – aber überlegt', 'Das Abklemmen unterbricht Zündquellen und verhindert das Auslösen weiterer Rückhaltesysteme. Es schaltet aber auch elektrische Sitzverstellungen, Fensterheber und Zentralverriegelung ab, die für die Rettung nützlich sein können. Deshalb: erst nutzen, was gebraucht wird – Fenster öffnen, Sitz zurückfahren –, dann abklemmen.'),

    H2('gefahren', 'Gefahren am Unfallfahrzeug'),
    TBL(['Gefahr', 'Warum gefährlich', 'Maßnahme'],[
      ['Nicht ausgelöste Airbags', 'lösen mit hoher Energie aus', 'Sicherheitsabstände einhalten, Abdeckungen nutzen, HV/Batterie abklemmen'],
      ['Gurtstraffer', 'pyrotechnisch, ziehen ruckartig an', 'Bereich meiden, nicht durchtrennen'],
      ['Betriebsstoffe', 'Brand- und Rutschgefahr, Umweltschaden', 'Auffangen, Bindemittel, Brandschutz'],
      ['Fahrzeugstabilität', 'Bewegung gefährdet Patient und Retter', 'vor jeder Arbeit stabilisieren'],
      ['Scharfe Kanten und Glas', 'Schnittverletzungen', 'Kantenschutz, Glasmanagement, Handschuhe'],
      ['Alternative Antriebe', 'Hochvolt, Gas, Wasserstoff', 'Rettungsdatenblatt, Freischalten, Fachberatung'],
      ['Ladung', 'Gefahrgut, Verschiebung, herabfallende Teile', 'Kennzeichnung prüfen, sichern'],
    ]),
    P('Als Richtwerte für die Sicherheitsabstände zu nicht ausgelösten Rückhaltesystemen gelten etwa 30 cm zum Fahrerairbag, etwa 60 cm zum Beifahrerairbag und etwa 15 cm zu Seitenairbags. Diese Werte sind herstellerabhängig – verbindlich ist das Rettungsdatenblatt des jeweiligen Fahrzeugs.'),

    H2('rettungskarte', 'Rettungsdatenblatt und Rettungskarte'),
    DEF('Rettungsdatenblatt', 'Eine herstellerspezifische Übersicht, die für ein Fahrzeugmodell zeigt, wo Airbags, Gurtstraffer, Batterien, Hochvoltkomponenten, Gastanks und verstärkte Karosseriebereiche liegen – und wo geschnitten werden darf. Es ist über Datenbanken, Apps und QR-Codes am Fahrzeug abrufbar; manche Fahrzeuge führen eine gedruckte <b>Rettungskarte</b> hinter der Sonnenblende mit.'),
    CO('tip', 'Immer zuerst nachsehen', 'Das Rettungsdatenblatt zu holen dauert eine Minute und verändert oft die gesamte Vorgehensweise – etwa weil eine Batterie im Kofferraum liegt oder ein Holm nicht geschnitten werden darf. Diese Minute ist praktisch immer gut investiert.'),

    H2('hv', 'Fahrzeuge mit alternativen Antrieben'),
    CO('danger', 'Hochvolt-Fahrzeuge', 'Orange gekennzeichnete Hochvoltleitungen werden <b>niemals</b> durchtrennt oder beschädigt. Das Hochvoltsystem wird nach Herstellervorgabe freigeschaltet, soweit möglich. Beschädigte Antriebsbatterien können sich stark erwärmen und in ein thermisches Durchgehen geraten – auch noch Stunden nach dem Unfall.'),
    TBL(['Antrieb', 'Hauptgefahr', 'Grundregel'],[
      ['Elektro und Hybrid', 'Hochvolt, Batteriebrand mit Rückzündung', 'orange Leitungen nie trennen, freischalten, Fahrzeug lange beobachten'],
      ['Erdgas (CNG)', 'Gasaustritt nach oben, Behälterversagen', 'Zündquellen meiden, Behälter kühlen, aus Deckung arbeiten'],
      ['Flüssiggas (LPG)', 'schweres Gas, sammelt sich unten', 'tiefe Bereiche meiden, Ausbreitung nach unten beachten'],
      ['Wasserstoff', 'sehr weiter Zündbereich, nahezu unsichtbare Flamme', 'großer Abstand, Fachberatung, Belüftung beachten'],
    ]),
    P('Für die Praxis gilt: Antriebsart früh feststellen – am Typschild, am Ladeanschluss, an der Kennzeichnung, über das Kennzeichen oder das Rettungsdatenblatt. Wer erst beim Schneiden merkt, dass es ein Elektrofahrzeug ist, hat den entscheidenden Schritt übersprungen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Absicherung vor allem anderen – der fließende Verkehr ist die Hauptgefahr.',
      'Fahrzeug als Schutzschild, Warneinrichtungen weit vorgelagert, Brandschutz bereitstellen.',
      'Zündung aus, gegen Wegrollen sichern, Batterie überlegt abklemmen (Minuspol zuerst).',
      'Richtwerte Airbagabstände: Fahrer etwa 30 cm, Beifahrer etwa 60 cm, Seite etwa 15 cm.',
      'Rettungsdatenblatt beziehungsweise Rettungskarte immer heranziehen.',
      'Orange Hochvoltleitungen niemals durchtrennen.',
      'Antriebsart früh feststellen – am Anfang, nicht beim Schneiden.'),
  ],
},

/* ---------------------------------------------------------------- G2 ---- */
{
  id: 'g2', title: 'Rettungssatz & patientengerechte Rettung', duration: 24,
  blocks: [
    P('Der hydraulische Rettungssatz kann Türen aufreißen, Dächer abnehmen und Fahrzeuge auseinanderziehen. Diese Kraft ist beeindruckend – und sie ist nur ein Werkzeug. Was die Qualität einer technischen Rettung ausmacht, ist nicht die Technik, sondern die Frage, ob das Vorgehen zum Zustand des Patienten passt.'),

    H2('satz', 'Der hydraulische Rettungssatz'),
    TBL(['Gerät', 'Funktion', 'Typische Anwendung'],[
      ['Spreizer', 'drücken, ziehen, quetschen', 'Türen öffnen, Spalten schaffen, Bleche wegdrücken'],
      ['Schere', 'trennen', 'Holme, Bleche, Pedale, Lenkrad'],
      ['Rettungszylinder', 'wegdrücken über größere Wege', 'Armaturenbrett anheben, Fußraum vergrößern'],
      ['Kombigerät', 'spreizen und schneiden in einem Gerät', 'kompakte Einsätze, Erstangriff'],
      ['Pedalschneider', 'Trennen dünner Bauteile', 'Pedale, Lenkradspeichen'],
      ['Aggregat oder Akku', 'Energieversorgung', 'motorbetrieben oder akkubetrieben'],
    ]),
    P('Moderne Geräte sind zunehmend <b>akkubetrieben</b>: kein Schlauch, kein Aggregat, sofort einsatzbereit, deutlich leiser. Der Preis ist die begrenzte Akkukapazität – Ersatzakkus gehören deshalb zwingend an die Einsatzstelle.'),
    CO('warn', 'Hochfeste Stähle', 'Moderne Karosserien enthalten borlegierte und hochfeste Stähle, die nicht jede Schere durchtrennt. Ein falsch angesetzter Schnitt kann die Schere beschädigen und Bauteile unkontrolliert wegschnellen lassen. Deshalb: Schnittstellen bewusst wählen, Rettungsdatenblatt beachten und im Zweifel eine andere Stelle nutzen.'),

    H2('grundsaetze', 'Grundsätze beim Arbeiten mit dem Rettungssatz'),
    KF(
      'Vor jeder Arbeit das Fahrzeug <b>stabilisieren</b> – ohne Ausnahme.',
      'Jede kraftbetätigte Bewegung ankündigen: „Spreizer öffnet", „Schere schneidet".',
      'Patientenschutz stellen: eine Kraft schirmt den Patienten ab und beobachtet ihn.',
      'Glasmanagement vor dem Schneiden: Scheiben kontrolliert entfernen oder sichern.',
      'Kantenschutz auf jede scharfe Kante, bevor jemand daran vorbeiarbeitet.',
      'Nur im gesicherten Bereich stehen – nie in der Bewegungsrichtung eines Bauteils.',
      'Jede Einsatzkraft darf jederzeit „Halt" rufen.'),
    CO('danger', 'Das Halt-Vetorecht', 'Bei der technischen Hilfeleistung darf und muss jede Einsatzkraft die Arbeit sofort stoppen, wenn sie eine Gefahr erkennt – unabhängig von Funktion und Dienstgrad. Dieses Vetorecht ist ausdrücklich gewollt und wird nach dem Einsatz nie kritisiert, auch wenn sich die Sorge als unbegründet herausstellt.'),

    H2('ablauf', 'Patientenorientierte Rettung'),
    P('Die technische Rettung folgt der Medizin, nicht umgekehrt. Der Rettungsdienst beurteilt den Zustand des Patienten und gibt vor, wie viel Zeit zur Verfügung steht. Aus dieser Zeitvorgabe ergibt sich die Rettungsart.'),
    TBL(['Rettungsart', 'Wann', 'Vorgehen'],[
      ['Sofortrettung', 'unmittelbare Lebensgefahr: Brand, Atemstillstand, drohender Absturz', 'schnellstmöglich, Kompromisse bei der Schonung bewusst in Kauf nehmen'],
      ['Schonende Rettung', 'Standardfall', 'ausreichend große Rettungsöffnung, achsengerecht, abgestimmt mit dem Rettungsdienst'],
      ['Versorgungsöffnung', 'zuerst Zugang für die medizinische Erstversorgung', 'kleine Öffnung, damit der Rettungsdienst früh arbeiten kann'],
    ]),
    STEPS(
      'Lagebeurteilung gemeinsam mit dem Rettungsdienst: Wie viele Patienten, wie eingeklemmt, wie dringend?',
      'Zugang schaffen – eine Versorgungsöffnung, damit die medizinische Betreuung sofort beginnen kann.',
      'Fahrzeug stabilisieren und Glasmanagement durchführen.',
      'Rettungsöffnung planen: Wohin soll der Patient herausgebracht werden?',
      'Rettungsöffnung schaffen – groß genug, dass achsengerecht gearbeitet werden kann.',
      'Patient unter Führung des Rettungsdienstes befreien und aufnehmen.',
      'Übergabe und Abtransport; Einsatzstelle danach sichern und aufräumen.'),
    CO('info', 'Ein Kommandogeber', 'Bei der patientenorientierten Rettung gibt es genau eine Person, die den Ablauf koordiniert und Feuerwehr und Rettungsdienst zusammenführt. Ohne diese Rolle arbeiten beide Seiten parallel aneinander vorbei – mit ihr entsteht ein gemeinsamer Plan.'),

    H2('goldene', 'Die goldene Stunde'),
    DEF('Golden Hour of Shock', 'Der Zeitraum von etwa einer Stunde nach einem schweren Trauma, innerhalb dessen der Patient idealerweise die geeignete Klinik erreicht haben sollte. Jede Verzögerung verschlechtert die Prognose messbar. Deshalb arbeiten Feuerwehr und Rettungsdienst nicht nacheinander, sondern <b>parallel</b>: Während die Feuerwehr befreit, versorgt der Rettungsdienst bereits.'),
    P('Für die Feuerwehr bedeutet das konkret: Es geht nicht darum, möglichst schnell irgendetwas zu schneiden, sondern darum, den Gesamtprozess kurz zu halten. Fünf Minuten für eine sinnvolle Planung sparen häufig fünfzehn Minuten hektischer Umwege.'),

    H2('patientenschutz', 'Patientenschutz'),
    P('Für den eingeklemmten Menschen ist die Rettung laut, hell, kalt und beängstigend. Der Patientenschutz mildert das ab und ist eine eigenständige, wichtige Funktion.'),
    KF(
      'Eine Einsatzkraft bleibt dauerhaft beim Patienten und spricht mit ihm.',
      'Vor jedem Arbeitsschritt ankündigen, was gleich passiert und wie es klingen wird.',
      'Splitterschutz mit Decke oder Schutzschild, Augen des Patienten abschirmen.',
      'Gehörschutz anbieten, wenn Trennschleifer oder laute Geräte eingesetzt werden.',
      'Wärmeerhalt sicherstellen – eingeklemmte Patienten kühlen schnell aus.',
      'Auffälligkeiten sofort an den Rettungsdienst melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Rettungssatz: Spreizer, Schere, Rettungszylinder, Kombigerät, Pedalschneider.',
      'Hochfeste Stähle: Schnittstellen bewusst wählen, Rettungsdatenblatt beachten.',
      'Immer erst stabilisieren, dann arbeiten.',
      'Jede kraftbetätigte Bewegung ankündigen; jede Kraft darf „Halt" rufen.',
      'Sofortrettung nur bei unmittelbarer Lebensgefahr, sonst schonende Rettung.',
      'Frühe Versorgungsöffnung ermöglicht medizinische Betreuung parallel zur Befreiung.',
      'Ein Kommandogeber koordiniert Feuerwehr und Rettungsdienst.',
      'Patientenschutz ist eine eigene Funktion – Ansprache, Splitterschutz, Wärme.'),
  ],
},

/* ---------------------------------------------------------------- G3 ---- */
{
  id: 'g3', title: 'Stabilisieren, Heben & Lastensicherung', duration: 22,
  blocks: [
    P('Ein Fahrzeug auf vier Rädern wirkt stabil – ist es aber nicht. Die Federung lässt es bei jedem Arbeitsschritt nachgeben, und ein Fahrzeug in Seiten- oder Dachlage kann jederzeit kippen. Jede Bewegung überträgt sich unmittelbar auf den eingeklemmten Patienten. Stabilisieren ist deshalb keine Vorbereitung, sondern Teil der Rettung.'),

    H2('stab', 'Fahrzeuge stabilisieren'),
    STEPS(
      'Lage des Fahrzeugs beurteilen: Normallage, Seitenlage, Dachlage, geneigt, aufgeschoben?',
      'Unterbaumaterial an tragfähigen Punkten ansetzen – Schweller, Rahmen, feste Karosserieteile.',
      'Keile, Blöcke und Stufenkeile spielfrei anlegen, sodass keine Bewegung mehr möglich ist.',
      'Reifen entlüften oder das Fahrzeug auf die Unterbauten absetzen, damit die Federung nicht mehr arbeitet.',
      'Bei Seiten- und Dachlage zusätzlich Abstützsysteme einsetzen.',
      'Stabilität nach jedem Arbeitsschritt erneut prüfen – sie verändert sich beim Schneiden.'),
    CO('warn', 'Die Federung ist der unterschätzte Gegner', 'Solange die Reifen tragen, bewegt sich das Fahrzeug bei jeder Krafteinwirkung um mehrere Zentimeter. Für einen Patienten mit Wirbelsäulenverletzung ist das erheblich. Erst wenn das Fahrzeug fest auf dem Unterbau sitzt, ist es wirklich stabil.'),

    H2('heben', 'Heben schwerer Lasten'),
    DEF('Hebekissen', 'Mit Druckluft befüllbare Kissen zum Anheben schwerer Lasten. <b>Hochdruckkissen</b> heben sehr große Lasten über kurze Wege, <b>Niederdruckkissen</b> kleinere Lasten über größere Wege. Beide arbeiten auch in engen Spalten und passen sich der Kontur der Last an.'),
    KF(
      '<b>Heben und Unterbauen im Wechsel</b> – niemals unter eine nur schwebende Last greifen.',
      'Hebekissen mittig und auf tragfähiger, ebener Fläche ansetzen.',
      'Nicht über die zulässige Stapelhöhe stapeln; das obere Kissen zuerst füllen.',
      'Keine spitzen Kanten unter dem Kissen – Kantenschutz verwenden.',
      'Last kann seitlich ausweichen: Bewegungsrichtung vorher überlegen und sichern.',
      'Beim Absenken genauso vorsichtig arbeiten wie beim Heben.'),
    CO('danger', 'Der Kraftschluss darf nie verlorengehen', 'Zwischen Last und Unterbau muss zu jedem Zeitpunkt eine tragfähige Verbindung bestehen. Wer die Last anhebt und den Unterbau erst danach nachschiebt, arbeitet in dem Moment unter einer schwebenden Last. Die Regel „Zug um Zug" ist deshalb keine Empfehlung.'),

    H2('winden', 'Seilwinden und Zugmittel'),
    P('Seilwinden, Greifzüge und Anschlagmittel bewegen Lasten, die sich nicht heben lassen. Die Gefahr liegt weniger im Ziehen als im plötzlichen Versagen: Ein reißendes Seil unter Spannung schlägt mit erheblicher Energie zurück.'),
    KF(
      'Zugrichtung und Ausweichrichtung der Last vorher festlegen.',
      'Niemand steht im Bereich des gespannten Seils oder in seiner Verlängerung.',
      'Anschlagmittel nach Tragfähigkeit auswählen und auf Beschädigung prüfen.',
      'Umlenkungen nur mit geeigneten Rollen – nicht über scharfe Kanten.',
      'Seil mit einer Decke oder einem Seilschutz beschweren, um die Energie im Versagensfall zu dämpfen.',
      'Langsam und kontrolliert ziehen, Spannung beobachten.'),

    H2('lasten', 'Lastensicherung und Umgebung'),
    P('An einer technischen Einsatzstelle sind nicht nur Fahrzeuge instabil. Ladung kann verrutschen, Anhänger können kippen, Bäume können nachgeben, und Bauteile können unter Spannung stehen. Vor jeder Arbeit lohnt die Frage: Was kann sich hier bewegen, wenn ich etwas verändere?'),
    TBL(['Situation', 'Risiko', 'Maßnahme'],[
      ['Beladener Lkw in Schräglage', 'Ladung verrutscht, Fahrzeug kippt', 'Abstützen, Ladung sichern, Fachfirma'],
      ['Anhänger abgekoppelt', 'kippt beim Entlasten', 'Stützrad und Unterbau, Zugmaschine nicht wegfahren'],
      ['Bauteil unter Spannung', 'schnellt beim Trennen weg', 'Spannung beurteilen, Trennstelle bewusst wählen'],
      ['Baum unter Spannung', 'schlägt beim Schnitt aus', 'Schnitttechnik nach Modul Y, Gefahrenbereich räumen'],
      ['Container, Silo, Schüttgut', 'nachrutschendes Material', 'Fachberatung, nicht betreten'],
    ]),

    H2('nachher', 'Nach der Rettung'),
    P('Mit dem Abtransport des Patienten ist der Einsatz nicht beendet. Die Einsatzstelle muss in einen sicheren Zustand gebracht und geordnet übergeben werden.'),
    KF(
      'Betriebsstoffe binden und aufnehmen, Kanaleinläufe kontrollieren.',
      'Fahrzeug gegen Wegrollen und unbefugten Zugriff sichern.',
      'Geräte zusammensuchen, prüfen und verlasten – Vollständigkeit kontrollieren.',
      'Einsatzstelle an Polizei, Abschleppdienst oder Betreiber übergeben.',
      'Bei Hochvoltfahrzeugen auf Beobachtung und Quarantäne hinweisen.',
      'Beschädigte Geräte kennzeichnen und melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Vor jeder Arbeit stabilisieren – Federung ausschalten, Fahrzeug auf Unterbau absetzen.',
      'Stabilität nach jedem Arbeitsschritt neu prüfen.',
      'Hebekissen: heben und unterbauen im Wechsel, Kraftschluss nie verlieren.',
      'Nicht über die zulässige Stapelhöhe stapeln, Kantenschutz verwenden.',
      'Bei Zugmitteln niemand in der Verlängerung des gespannten Seils.',
      'Vor jedem Eingriff fragen: Was kann sich bewegen?',
      'Einsatzstelle nach der Rettung sichern und geordnet übergeben.'),
  ],
},

/* ---------------------------------------------------------------- G4 ---- */
{
  id: 'g4', title: 'THL bei Bahn-, Wasser- & Sonderlagen', duration: 22,
  blocks: [
    P('Die meisten technischen Hilfeleistungen sind Verkehrsunfälle. Daneben gibt es Lagen, in denen das übliche Vorgehen nicht funktioniert oder sogar tödlich wäre – im Bahnbereich, am Wasser, in engen Räumen. Diese Lektion behandelt die wichtigsten Sonderlagen und ihre jeweils eigenen Regeln.'),

    H2('bahn', 'Einsätze im Bahnbereich'),
    CO('danger', 'Bahnstrom und Zugverkehr', 'Oberleitungen führen Hochspannung – bei der Deutschen Bahn üblicherweise 15.000 Volt. Ein Lichtbogen entsteht bereits <b>ohne Berührung</b>. Gearbeitet wird erst, wenn die Bahn die Fahrleitung abgeschaltet <b>und geerdet</b> hat und das Gleis gesperrt ist. Beides wird ausdrücklich bestätigt – eine Vermutung reicht nicht.'),
    STEPS(
      'Über die Leitstelle das Notfallmanagement der Bahn einschalten – sofort, nicht später.',
      'Bis zur bestätigten Freigabe Sicherheitsabstand zur Oberleitung halten und niemanden ins Gleis lassen.',
      'Rückmeldungen abwarten: „Fahrleitung abgeschaltet und geerdet" sowie „Gleis gesperrt".',
      'Auch Nachbargleise beachten – sie können weiter befahren sein.',
      'Definierte Zugänge und Rettungswege nutzen, nicht querfeldein.',
      'Lange Anmarschwege und schweres Gerät einplanen, Materialtransport organisieren.',
      'Notfallmanager der Bahn als Fachberater in die Einsatzleitung einbinden.'),
    CO('warn', 'Ein Zug ist leiser, als man denkt', 'Ein herannahender Zug ist bei Wind und Arbeitslärm oft erst wenige Sekunden vor dem Erreichen zu hören, und der Bremsweg beträgt hunderte Meter. Deshalb wird im Gleisbereich niemals ohne bestätigte Sperrung und ohne Sicherungsposten gearbeitet.'),

    H2('wasser', 'Einsätze am und im Wasser'),
    P('Wasser unterschätzt praktisch jeder. Strömung, Kälte, Sichtverhältnisse und Hindernisse unter der Oberfläche machen jede Rettung gefährlich – und ein Helfer, der selbst ins Wasser gerät, wird sehr schnell zum zweiten Patienten.'),
    KF(
      'Eigensicherung zuerst: Rettungsweste bei allen Arbeiten am Wasser.',
      'Rettung vorrangig <b>vom Ufer oder vom Boot aus</b> – Wurfsack, Leiter, Stange, Rettungsring.',
      'Ins Wasser gehen nur ausgebildete, gesicherte Kräfte.',
      'Strömung beurteilen: Fließgewässer sind auch bei geringer Tiefe gefährlich.',
      'Unterkühlung beachten – bei Betroffenen und bei Einsatzkräften.',
      'Sicherungsposten stromabwärts stellen.',
      'Spezialkräfte früh alarmieren: Wasserrettung, DLRG, Strömungsretter.'),
    P('Die ausführliche Behandlung dieser Lagen steht in <b>Modul X – Wasserrettung, Eis und Bootsdienst</b>. Für die technische Hilfeleistung gilt vor allem: Die Rettungsreihenfolge lautet Rufen, Werfen, Fahren, Schwimmen – und Schwimmen ist die letzte, nicht die erste Option.'),

    H2('engeraeume', 'Enge Räume, Silos, Schächte und Gruben'),
    CO('danger', 'Confined Space', 'Behälter, Silos, Schächte, Gruben und Kanäle sind eine der gefährlichsten Einsatzumgebungen überhaupt. Sauerstoffmangel, giftige oder zündfähige Gase, nachrutschendes Schüttgut und Absturzgefahr treten dort gemeinsam auf – und die typische Unfallkette beginnt damit, dass ein Helfer dem Verunglückten hinterhersteigt und ebenfalls bewusstlos wird.'),
    STEPS(
      'Niemals ungesichert einsteigen – auch nicht „kurz", auch nicht bei sichtbarer Person.',
      'Atmosphäre messen: Sauerstoff, Explosionsgefahr, giftige Gase.',
      'Umluftunabhängigen Atemschutz verwenden – Filtergeräte helfen hier nicht.',
      'Absturzsicherung und Rückholmöglichkeit einrichten (Dreibein, Höhensicherungsgerät).',
      'Sicherungsposten außerhalb stellen, der ständigen Kontakt hält.',
      'Belüften, wo möglich – aber die Zündgefahr beim Verdünnen beachten.',
      'Bei Schüttgut niemals auf oder in das Material treten – Einsinkgefahr.'),

    H2('sonder', 'Weitere Sonderlagen'),
    TBL(['Lage', 'Besonderheit', 'Grundsatz'],[
      ['Aufzugnotbefreiung', 'Steuerung, Türverriegelung, Kabinenposition', 'Ruhe bewahren, Betroffene beruhigen, Fachfirma und Herstellervorgaben'],
      ['Tierrettung', 'unberechenbares Verhalten, Größe und Kraft', 'Eigenschutz, Tierarzt hinzuziehen, Fluchtwege freihalten'],
      ['Einsturz und Verschüttung', 'Statik, Nachrutschen, Ortung', 'THW und Statiker, langsames und gesichertes Vorgehen'],
      ['Person unter Fahrzeug oder Last', 'Gewicht, Instabilität, Zeitdruck', 'stabilisieren, heben und unterbauen im Wechsel'],
      ['Landwirtschaftliche Maschinen', 'gespeicherte Energie, Zapfwellen, Hydraulik', 'Antrieb sichern, Restdruck ablassen, Fachberatung'],
      ['Person in Maschine', 'komplexe Mechanik', 'Maschine gegen Anlaufen sichern, Betriebspersonal einbinden'],
    ]),
    CO('tip', 'Die gemeinsame Regel aller Sonderlagen', 'Bei jeder dieser Lagen gilt derselbe Dreiklang: Eigensicherung vor Schnelligkeit, Fachberatung früh einbinden, und keine Maßnahme beginnen, deren Auswirkungen man nicht überblickt. Wer sich daran hält, macht selten etwas grundlegend falsch.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Bahn: erst arbeiten nach bestätigter Abschaltung, Erdung und Gleissperrung.',
      'Nachbargleise können befahren bleiben – Sicherungsposten stellen.',
      'Wasser: Rettungsweste, vom Ufer oder Boot retten, Rufen–Werfen–Fahren–Schwimmen.',
      'Enge Räume: messen, umluftunabhängiger Atemschutz, Rückholmöglichkeit, Sicherungsposten.',
      'Niemals dem Verunglückten ungesichert hinterhersteigen.',
      'Sonderlagen: Eigensicherung vor Schnelligkeit, Fachberatung früh einbinden.'),
  ],
},

/* ---------------------------------------------------------------- G5 ---- */
{
  id: 'g5', title: 'Einsatzstelle organisieren & Zusammenarbeit', duration: 20,
  blocks: [
    P('An einer technischen Einsatzstelle arbeiten zwölf Menschen auf wenigen Quadratmetern mit schweren Geräten an einem verletzten Patienten. Ohne räumliche Ordnung wird daraus ein Gedränge, in dem Werkzeuge verschwinden, Kabel zu Stolperfallen werden und niemand mehr weiß, wer was tut. Diese Lektion behandelt die Organisation der Einsatzstelle.'),

    H2('ordnung', 'Ordnung des Raumes'),
    P('Bewährt hat sich eine Gliederung in konzentrische Bereiche rund um das Unfallfahrzeug. Die genauen Maße sind Richtwerte und werden an die Lage angepasst.'),
    TBL(['Bereich', 'Größe (Richtwert)', 'Wer und was'],[
      ['Innerer Bereich', 'etwa 5 m um das Fahrzeug', 'nur der arbeitende Rettungstrupp, Rettungsdienst, Patientenschutz'],
      ['Äußerer Bereich', 'etwa 10 m', 'Gerätebereitstellung, Rettungssatz, Material, Reserve'],
      ['Bereitstellungsraum', 'weiter entfernt', 'nachrückende Kräfte und Fahrzeuge'],
      ['Absperrbereich', 'weit vorgelagert', 'Verkehrsabsicherung, Schaulustige, Presse'],
    ]),
    FIG('thstelle', 'Ordnung des Raumes an der Einsatzstelle: innerer Bereich, äußerer Bereich und Absperrung.'),
    CO('warn', 'Der innere Bereich bleibt frei', 'Jede Person, die dort nicht gebraucht wird, behindert. Das gilt auch für Führungskräfte, die „nur mal schauen" wollen. Wer nicht arbeitet, steht im äußeren Bereich – von dort sieht man ohnehin mehr.'),

    H2('geraeteablage', 'Die Geräteablage'),
    P('Werkzeuge werden auf einer Plane geordnet abgelegt, nicht dort, wo sie gerade aus der Hand fallen. Eine gute Geräteablage spart bei jedem Handgriff Sekunden und verhindert, dass jemand über ein Rettungsgerät stolpert.'),
    KF(
      'Plane an einer festen, gut erreichbaren Stelle im äußeren Bereich auslegen.',
      'Geräte immer an denselben Platz legen – so findet jeder alles im Dunkeln.',
      'Schläuche und Kabel gebündelt führen, nicht kreuz und quer.',
      'Kleinteile und Kantenschutz griffbereit halten.',
      'Nach Gebrauch zurücklegen statt liegen lassen.',
      'Am Ende Vollständigkeit prüfen – gegen die Ablage, nicht aus dem Gedächtnis.'),

    H2('funktionen', 'Funktionen an der THL-Stelle'),
    P('Bei einer strukturierten technischen Rettung hat jede Kraft eine benannte Aufgabe. Das verhindert, dass drei Leute dasselbe tun und niemand den Patienten betreut.'),
    TBL(['Funktion', 'Aufgabe'],[
      ['Einheitsführer', 'führt, koordiniert mit dem Rettungsdienst, hält Funkkontakt'],
      ['Kommandogeber', 'steuert den Ablauf der Rettung, gibt Bewegungen frei'],
      ['Geräteführer', 'bedient Spreizer, Schere, Zylinder'],
      ['Patientenschutz', 'bleibt beim Patienten, schirmt ab, beobachtet, meldet'],
      ['Gerätebereitsteller', 'legt Material vor, hält die Ablage in Ordnung'],
      ['Brandschutz und Absicherung', 'Löschbereitschaft, Verkehrssicherung, Beleuchtung'],
      ['Stabilisierung', 'unterbaut, stützt ab, prüft laufend nach'],
    ]),

    H2('zusammenarbeit', 'Zusammenarbeit mit anderen'),
    TBL(['Partner', 'Rolle an der THL-Stelle'],[
      ['Rettungsdienst und Notarzt', 'medizinische Führung, gibt Rettungsart und Tempo vor'],
      ['Polizei', 'Verkehrslenkung, Absperrung, Ermittlung, Spurensicherung'],
      ['Abschlepp- und Bergungsdienst', 'Bergung des Fahrzeugs nach der Rettung'],
      ['THW', 'schwere technische Hilfe, Statik, Beleuchtung, Räumung'],
      ['Straßenmeisterei, Autobahnmeisterei', 'Fahrbahnsperrung, Reinigung, Beschilderung'],
      ['Fachberater und Betreiber', 'Hochvolt, Gefahrgut, Maschinen, Bahn'],
    ]),
    CO('tip', 'Der Satz, der viel Ärger spart', '„Wie viel Zeit haben wir?" – an den Notarzt gerichtet. Aus der Antwort ergibt sich alles Weitere: Sofortrettung oder schonende Rettung, welche Öffnung, welche Reihenfolge. Wer diese Frage stellt, bekommt eine gemeinsame Planung statt zweier paralleler.'),

    H2('nachbereitung', 'Nachbereitung'),
    STEPS(
      'Einsatzstelle sichern und an den zuständigen Partner übergeben.',
      'Betriebsstoffe aufnehmen, Fahrbahn nach Absprache reinigen lassen.',
      'Geräte reinigen, prüfen, verlasten und Vollständigkeit kontrollieren.',
      'Verbrauchsmaterial ergänzen: Kantenschutz, Bindemittel, Unterbaumaterial.',
      'Beschädigte oder belastete Geräte kennzeichnen und melden.',
      'Einsatz dokumentieren, bei belastenden Lagen Nachbesprechung anbieten.',
      'Einsatzbereitschaft melden.'),
    CO('info', 'Belastende Einsätze offen ansprechen', 'Technische Hilfeleistungen mit schwer verletzten oder getöteten Personen – besonders bei Kindern oder Bekannten – belasten stark. Die psychosoziale Notfallversorgung ist für genau diese Fälle da. Sie in Anspruch zu nehmen ist selbstverständlich und keine Schwäche.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Innerer Bereich etwa 5 m nur für den Rettungstrupp, äußerer Bereich etwa 10 m für Geräte.',
      'Wer nicht arbeitet, steht draußen.',
      'Geräteablage auf einer Plane, immer an denselben Plätzen.',
      'Jede Kraft hat eine benannte Funktion – besonders der Patientenschutz.',
      'Der Rettungsdienst gibt Rettungsart und Tempo vor.',
      'Die Frage „Wie viel Zeit haben wir?" schafft eine gemeinsame Planung.',
      'Nachbereitung: sichern, übergeben, prüfen, ergänzen, dokumentieren, nachbesprechen.'),
  ],
},

];
