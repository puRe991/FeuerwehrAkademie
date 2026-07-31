/* =========================================================================
   MODUL W — Unwetter, Hochwasser & Naturgefahren
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls W.

   Fachliche Grundlage: FwDV 3 und 100, DGUV Vorschrift 49, Empfehlungen
   zur Deichverteidigung und zum Hochwasserschutz, Warnhinweise des
   Deutschen Wetterdienstes, wasserrechtliche Vorgaben der Länder.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_W = [

/* ---------------------------------------------------------------- W1 ---- */
{
  id: 'w1', title: 'Sturm & Starkregen', duration: 20,
  blocks: [
    P('Unwettereinsätze sind für die meisten Feuerwehren die häufigste Einsatzart überhaupt – und die einzige, bei der hundert Einsätze gleichzeitig eingehen. Die Schwierigkeit liegt selten in der einzelnen Einsatzstelle, sondern in der Bewältigung der Masse.'),

    H2('lagen', 'Der Massenanfall kleiner Einsätze'),
    P('Ein durchziehendes Unwetter erzeugt in kurzer Zeit dutzende bis hunderte Einsätze: umgestürzte Bäume, abgedeckte Dächer, vollgelaufene Keller, überflutete Straßen, ausgefallene Ampeln. Jeder einzelne ist meist einfach – zusammen überfordern sie jede Leitstelle.'),
    KF(
      '<b>Priorisieren statt abarbeiten:</b> Menschen in Gefahr zuerst, dann Gefahren im öffentlichen Raum, dann Sachwerte.',
      '<b>Nach Dringlichkeit</b>, nicht nach Eingangsreihenfolge arbeiten.',
      '<b>Räumlich bündeln:</b> Einsätze in einem Gebiet nacheinander abarbeiten spart Fahrten.',
      '<b>Abschnitte bilden</b> und eine örtliche Führungsstelle einrichten.',
      '<b>Bürger einbinden</b> und Erwartungen managen – nicht alles geht sofort.',
      '<b>Eigene Kräfte schonen:</b> Ablösung, Verpflegung, Pausen von Anfang an einplanen.'),
    CO('info', 'Erwartungsmanagement gehört dazu', 'Bei einer Unwetterlage werden viele Bürger stundenlang warten müssen. Eine klare, freundliche Auskunft – „wir kommen, aber es dauert, bitte sichern Sie selbst, was Sie sicher können" – verhindert Frust, Doppelanrufe und unnötige Diskussionen an der Einsatzstelle.'),

    H2('prioritaet', 'Priorisieren'),
    TBL(['Priorität', 'Beispiele'],[
      ['1 – Menschen in Gefahr', 'eingeschlossene Personen, Personen im Wasser, akute Verletzungsgefahr'],
      ['2 – Gefahren im öffentlichen Raum', 'Baum auf Fahrbahn, herabhängende Leitung, lose Bauteile über Gehweg'],
      ['3 – drohende erhebliche Schäden', 'abgedecktes Dach bei anhaltendem Regen, Wasser vor Heizungsanlage'],
      ['4 – Sachschäden ohne Folgegefahr', 'vollgelaufener Keller ohne Gefährdung, umgestürzter Gartenzaun'],
      ['5 – keine Feuerwehraufgabe', 'Aufräumarbeiten auf Privatgrund, Bagatellschäden'],
    ]),
    CO('warn', 'Nicht jede Meldung ist ein Feuerwehreinsatz', 'Bei Unwetterlagen gehen viele Meldungen ein, die keine Gefahrenabwehr sind. Sie freundlich, aber klar abzugrenzen, ist keine Unfreundlichkeit, sondern Voraussetzung dafür, dass die Kräfte für die echten Gefahren zur Verfügung stehen.'),

    H2('sturm', 'Gefahren bei Sturmeinsätzen'),
    CO('danger', 'Baum und Stromleitung', 'Unter Spannung stehende Bäume – Windwurf, verkeilte Stämme, gebogene Äste – können beim Schneiden schlagartig zurückschnellen. Herabhängende oder abgerissene Stromleitungen sind lebensgefährlich, auch wenn sie am Boden liegen. Abstand halten, Netzbetreiber alarmieren und erst nach bestätigter Freischaltung arbeiten.'),
    KF(
      'Motorsäge nur durch ausgebildete Kräfte mit vollständiger Schnittschutzausrüstung.',
      'Absturzgefahr auf Dächern – nur gesichert und mit Lastverteilung arbeiten.',
      'Loses Material kann jederzeit herabfallen: Ziegel, Bleche, Äste, Gerüstteile.',
      'Bei anhaltendem Sturm keine Arbeiten in der Höhe – Böen sind unberechenbar.',
      'Einsatzstelle gegen den Verkehr absichern, auch bei kurzen Einsätzen.',
      'Nicht unter noch stehenden, beschädigten Bäumen arbeiten.',
      'Bei Gewitter Arbeiten im Freien und auf Dächern einstellen.'),
    P('Die Arbeit mit der Motorkettensäge und die Beurteilung von Spannung im Holz behandelt <b>Modul Y</b> ausführlich. Für die Unwetterlage gilt vor allem: Die Zahl der Einsätze verleitet zur Eile, und Eile ist beim Umgang mit der Säge die häufigste Unfallursache.'),

    H2('starkregen', 'Starkregen und Überflutung'),
    P('Starkregen erzeugt innerhalb von Minuten Wassermengen, die keine Kanalisation aufnehmen kann. Typisch sind vollgelaufene Keller und Unterführungen, überflutete Straßen und Sturzfluten in Hanglagen.'),
    KF(
      'Vor dem Betreten überfluteter Keller: <b>Strom abschalten</b> – Stromschlaggefahr im Wasser.',
      'Auf Öltanks achten – aufschwimmende Tanks können abreißen und auslaufen.',
      'Gasgeräte und Heizungen prüfen lassen, bevor sie wieder in Betrieb gehen.',
      'Nicht in überflutete Unterführungen fahren – die Tiefe ist nicht erkennbar.',
      'Sturzfluten in Hanglagen entstehen extrem schnell und führen Geröll mit.',
      'Kanaldeckel können vom Druck angehoben sein – unsichtbare Löcher unter Wasser.',
      'Bei starkem Regen und Gewitter Einsatzstellen im Freien neu bewerten.'),
    CO('danger', 'Die unsichtbaren Löcher', 'Bei überfluteten Straßen und Plätzen können Kanaldeckel durch den Druck angehoben oder weggespült sein. Unter der Wasseroberfläche ist davon nichts zu sehen. Wer durch stehendes Wasser gehen muss, tastet den Weg mit einem Stab ab und geht nicht allein.'),

    H2('durchhalten', 'Durchhaltefähigkeit'),
    KF(
      'Ablösung von Anfang an einplanen – Unwetterlagen dauern oft die ganze Nacht.',
      'Verpflegung und Getränke organisieren, bevor die Kräfte erschöpft sind.',
      'Betriebsstoffe für Fahrzeuge und Aggregate nachführen.',
      'Materialnachschub: Sandsäcke, Pumpen, Folien, Kettensägenzubehör.',
      'Nachbarwehren und überörtliche Hilfe frühzeitig anfordern.',
      'Rückkehr in die Einsatzbereitschaft nicht vergessen – der nächste Brand kommt trotzdem.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Schwierigkeit liegt in der Masse, nicht in der einzelnen Einsatzstelle.',
      'Nach Dringlichkeit priorisieren, nicht nach Eingangsreihenfolge.',
      'Einsätze räumlich bündeln, Abschnitte bilden, Führungsstelle einrichten.',
      'Bäume unter Spannung und Stromleitungen sind die Hauptgefahren.',
      'Bei Sturm keine Arbeiten in der Höhe; bei Gewitter Freiluftarbeiten einstellen.',
      'Vor dem Betreten überfluteter Keller Strom abschalten.',
      'Angehobene Kanaldeckel sind unter Wasser unsichtbar.',
      'Ablösung, Verpflegung und Nachschub von Anfang an planen.'),
  ],
},

/* ---------------------------------------------------------------- W2 ---- */
{
  id: 'w2', title: 'Hochwasser & Deichverteidigung', duration: 20,
  blocks: [
    P('Hochwasser ist die Naturgefahr mit der längsten Vorwarnzeit – und der längsten Einsatzdauer. Anders als beim Sturm weiß man oft Tage vorher, was kommt. Wer diese Zeit nutzt, hat gewonnen; wer sie verstreichen lässt, arbeitet später gegen die Uhr.'),

    H2('vorbereitung', 'Vorwarnzeit nutzen'),
    KF(
      'Pegelstände und Vorhersagen der Hochwasserzentralen verfolgen.',
      'Gefährdete Bereiche kennen: Karten, Erfahrungen vergangener Hochwasser.',
      'Material rechtzeitig bereitstellen: Sandsäcke, Pumpen, Schläuche, Folien.',
      'Kräfte alarmieren und Schichtplan aufstellen, bevor es kritisch wird.',
      'Bevölkerung informieren und zur Eigenvorsorge auffordern.',
      'Kritische Infrastruktur identifizieren: Strom, Wasser, Heizung, Pflegeeinrichtungen.',
      'Zufahrten und Rückzugswege prüfen – sie können selbst überflutet werden.'),

    H2('pumpen', 'Wasser auspumpen'),
    P('Der häufigste Hochwassereinsatz ist das Auspumpen überfluteter Keller. Er wirkt einfach, hat aber zwei Fallstricke, die regelmäßig übersehen werden.'),
    STEPS(
      'Gefahren prüfen: Strom abschalten, Öltanks, Gasgeräte, Chemikalien im Keller.',
      'Außenwasserstand beurteilen – steht das Grundwasser noch hoch?',
      'Entscheiden, ob überhaupt gepumpt wird.',
      'Pumpe aufstellen, Ablaufweg klären – nicht in die überlastete Kanalisation.',
      'Kontrolliert und schrittweise absenken.',
      'Nach dem Auspumpen kontrollieren, ob Wasser nachläuft.',
      'Elektrische Anlagen und Heizung durch Fachbetrieb prüfen lassen.'),
    CO('danger', 'Die Kellerfalle', 'Ein Keller darf nicht leergepumpt werden, solange der Außenwasserstand hoch ist. Das Wasser im Keller wirkt als Gegendruck. Fällt er weg, kann der Wasserdruck von außen Wände eindrücken oder die Bodenplatte anheben – der Schaden ist dann weit größer als das Wasser. Erst pumpen, wenn der Außenpegel gefallen ist, und dann langsam.'),
    CO('warn', 'Strom vor dem Betreten abschalten', 'In einem überfluteten Keller steht das Wasser in Kontakt mit Steckdosen, Verteilern und Geräten. Vor dem Betreten wird die Anlage stromlos geschaltet – über den Hauptschalter oder durch den Netzbetreiber. Diese Regel wird regelmäßig gebrochen und hat schon Einsatzkräfte das Leben gekostet.'),

    H2('deich', 'Deichverteidigung'),
    DEF('Deichverteidigung', 'Alle Maßnahmen, die einen Deich bei Hochwasser vor Überströmung, Aufweichen und Versagen schützen: Erhöhung der Deichkrone mit Sandsäcken, Abdecken der Böschung, Sichern von Sicker- und Quellstellen sowie die laufende Kontrolle durch Deichläufer. Sie ist eine Fachaufgabe – die Feuerwehr arbeitet unter Anleitung der zuständigen Fachberatung.'),
    FIG('deich', 'Deichverteidigung: Sandsäcke im versetzten Läuferverband erhöhen die Deichkrone; Sickerstellen werden beruhigt, nicht abgedichtet.'),
    STEPS(
      'Sandsäcke etwa zu zwei Dritteln füllen – sie sollen sich anschmiegen, nicht prall sein.',
      'Sackverschluss nicht zubinden, sondern unterschlagen.',
      'Im versetzten Läuferverband schichten, Fugen versetzen wie beim Mauern.',
      'Verschlussseite zur Wasserseite legen.',
      'Bei Erhöhung der Deichkrone auf ausreichende Breite achten.',
      'Sicker- und Quellstellen mit einer Quellkade beruhigen, <b>nicht</b> abdichten.',
      'Deich laufend kontrollieren und Auffälligkeiten sofort melden.'),
    CO('danger', 'Quellstellen nicht abdichten', 'Tritt auf der Landseite Wasser aus dem Deich aus, ist das zunächst normal. Gefährlich wird es, wenn es Bodenmaterial mitführt – dann wird der Deich von innen ausgehöhlt. Die Gegenmaßnahme ist, mit einem Sandsackring einen Gegendruck aufzubauen und die Strömung zu <b>beruhigen</b>. Wird die Stelle abgedichtet, sucht sich das Wasser einen anderen Weg – und der ist unkontrolliert.'),

    H2('deichlaeufer', 'Deichläufer und Kontrolle'),
    P('Ein Deich versagt selten plötzlich – er kündigt sich an. Deshalb ist die laufende Kontrolle durch <b>Deichläufer</b> die wichtigste Maßnahme der Deichverteidigung überhaupt.'),
    KF(
      'Feste Abschnitte einteilen, jeder Läufer kontrolliert seinen Bereich.',
      'Auf Sickerstellen, Quellwasser, Rutschungen, Risse und Sackungen achten.',
      'Trübung des austretenden Wassers ist das Alarmzeichen – Bodenmaterial wird ausgetragen.',
      'Wasserseitige Böschung auf Wellenschlag und Auskolkung prüfen.',
      'Auffälligkeiten sofort melden und Ort genau angeben.',
      'Bei Dunkelheit ausleuchten und in Doppelbesetzung gehen.',
      'Rettungsweste tragen – auch auf der Deichkrone.'),

    H2('stroemung', 'Die Gefahr des strömenden Wassers'),
    CO('danger', 'Strömung wird massiv unterschätzt', 'Bereits etwa 30 Zentimeter strömendes Wasser können einen erwachsenen Menschen umreißen; etwa 60 Zentimeter tragen ein Auto fort. Wassereinsätze erfolgen nur mit Rettungsweste, mit Sicherung und mit ausgebildeten Kräften. Fließgewässer werden niemals zu Fuß durchquert, und in überflutete Bereiche fährt man nicht hinein.'),
    KF(
      'Rettungsweste bei allen Arbeiten am und im Wasser.',
      'Nie allein arbeiten, immer mit Sicherung vom Ufer.',
      'Wassertiefe und Untergrund sind unter der Oberfläche nicht erkennbar.',
      'Treibgut, Strömung und Kälte wirken zusammen.',
      'Fahrzeuge nicht in überflutete Bereiche fahren.',
      'Bei Personen im Wasser gilt die Rettungsreihenfolge aus <b>Modul X</b>.'),

    H2('nach', 'Nach dem Hochwasser'),
    KF(
      'Gebäude erst nach Freigabe betreten – Statik, Strom, Kontamination.',
      'Hochwasser trägt Fäkalkeime, Öl und Chemikalien mit – Hygiene beachten.',
      'Ölschäden und ausgelaufene Betriebsstoffe der Umweltbehörde melden.',
      'Kontaminierte Schutzkleidung reinigen lassen, gründliche Körperhygiene.',
      'Gerät reinigen und prüfen – Schlamm und Wasser schädigen Pumpen und Aggregate.',
      'Kräfte nachbetreuen; Hochwasserlagen sind psychisch belastend.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Hochwasser hat Vorwarnzeit – sie muss genutzt werden.',
      'Vor dem Betreten überfluteter Keller Strom abschalten.',
      '<b>Kellerfalle:</b> nicht leerpumpen, solange der Außenpegel hoch ist.',
      'Sandsäcke zu zwei Dritteln füllen, versetzt im Läuferverband schichten.',
      'Quellstellen beruhigen, nicht abdichten – Trübung ist das Alarmzeichen.',
      'Deichläufer sind die wichtigste Maßnahme der Deichverteidigung.',
      '30 cm strömendes Wasser reißen einen Menschen um, 60 cm ein Auto.',
      'Nach dem Hochwasser: Hygiene, Freigabe, Gerätepflege, Nachbetreuung.'),
  ],
},

/* ---------------------------------------------------------------- W3 ---- */
{
  id: 'w3', title: 'Ölspuren, Betriebsstoffe & Umweltschäden', duration: 16,
  blocks: [
    P('Die Ölspur ist einer der häufigsten und am meisten unterschätzten Einsätze. Sie sieht harmlos aus, ist eine erhebliche Rutschgefahr und kann – wenn sie in ein Gewässer gelangt – einen Umweltschaden verursachen, der Jahre nachwirkt.'),

    H2('oel', 'Ölspur und ausgelaufene Betriebsstoffe'),
    P('Ausgelaufenes Öl, Kraftstoff oder Hydraulikflüssigkeit auf der Straße ist zunächst eine <b>Verkehrsgefahr</b>: Für Zweiräder ist eine Ölspur unmittelbar lebensgefährlich. Gleichzeitig ist sie ein Umweltrisiko, sobald sie in Boden, Kanal oder Gewässer gelangt.'),
    STEPS(
      'Einsatzstelle absichern und Verkehr warnen – Zweiräder besonders.',
      'Zündquellen fernhalten, bei Kraftstoff Brandschutz bereitstellen.',
      'Ausbreitung stoppen: eindeichen, Kanaleinläufe abdichten oder abdecken.',
      'Ausmaß feststellen und Quelle abstellen, soweit möglich.',
      'Ölbindemittel gleichmäßig aufbringen, einarbeiten und wirken lassen.',
      'Gebundenes Material vollständig aufnehmen und in geeignete Behälter geben.',
      'Kontaminiertes Material fachgerecht entsorgen und dokumentieren.',
      'Straßenreinigung, Fachfirma oder Straßenmeisterei einbinden.'),
    CO('warn', 'Bindemittel ersetzt keine Reinigung', 'Ölbindemittel nimmt das Öl auf, entfernt aber nicht den Schmierfilm auf der Fahrbahn. Bei größeren Spuren bleibt die Straße rutschig, bis sie fachgerecht gereinigt wurde. Die Freigabe für den Verkehr ist deshalb nicht die Feuerwehr allein, sondern erfolgt in Abstimmung mit Polizei und Straßenbaulastträger.'),

    H2('gewaesser', 'Gewässer schützen'),
    CO('danger', 'Ein Liter Öl verunreinigt eine Million Liter Wasser', 'Läuft Öl oder Kraftstoff in ein Gewässer, entsteht ein Schaden, der weit über die sichtbare Menge hinausgeht. Der Regenwasserkanal führt in aller Regel ungeklärt in den nächsten Bach – wer nicht weiß, wohin ein Gully führt, muss davon ausgehen, dass er direkt ins Gewässer führt.'),
    KF(
      'Kanaleinläufe zuerst sichern – vor allen anderen Maßnahmen.',
      'Ölsperren einsetzen, wo bereits Material im Gewässer ist.',
      'Fließrichtung und weitere Einläufe stromabwärts prüfen.',
      'Untere Wasserbehörde und Umweltamt frühzeitig alarmieren.',
      'Fachfirma für die Aufnahme und Entsorgung hinzuziehen.',
      'Niemals ins Erdreich oder in den Kanal spülen.',
      'Menge, Ort und Maßnahmen dokumentieren.'),

    H2('gefahr', 'Wann es mehr als eine Ölspur ist'),
    P('Bei größeren Mengen, bei unbekannten Stoffen und bei Austritten aus Tanks oder Behältern greift die Gefahrgut-Logik. Dann gilt die <b>GAMS-Regel</b> aus <b>Modul I</b>: Gefahr erkennen, absperren, Menschen retten, Spezialkräfte anfordern.'),
    KF(
      'Kennzeichnungen prüfen: Warntafel, Gefahrzettel, GHS-Piktogramme.',
      'Bei unbekannten Stoffen keine eigenmächtigen Maßnahmen.',
      'Absperrbereich großzügig wählen, aus Luv annähern.',
      'Gefahrgutzug, Fachberater und Umweltbehörde alarmieren.',
      'Auf Dämpfe und Explosionsgefahr achten – besonders bei Kraftstoffen.',
      'Bei X-Kennzeichnung kein Wasser einsetzen.'),

    H2('heizoel', 'Heizölschäden in Gebäuden'),
    P('Ein besonderer Fall sind Heizölschäden – etwa durch einen defekten Tank oder ein Hochwasser, das den Tank aufschwimmen lässt. Sie sind aufwendig, teuer und für Betroffene sehr belastend.'),
    KF(
      'Ausbreitung stoppen, Ölbindemittel und Auffangbehälter einsetzen.',
      'Kellerräume gut lüften – Dämpfe sind gesundheitsschädlich und brennbar.',
      'Zündquellen ausschalten, elektrische Anlagen nicht betätigen.',
      'Sanierungsfirma und Umweltbehörde alarmieren.',
      'Nicht mit Wasser verdünnen – das verteilt das Öl nur.',
      'Betroffene informieren und an die Versicherung verweisen.'),

    H2('umwelt', 'Umweltschutz als Auftrag'),
    P('Umweltschäden abzuwehren gehört zur Kernaufgabe <b>Schützen</b>. Sie unterscheidet sich von anderen Aufgaben dadurch, dass die Wirkung des eigenen Handelns oft erst später sichtbar wird – ein Grund mehr, sorgfältig zu arbeiten und zu dokumentieren.'),
    KF(
      'Frühzeitig entscheiden: Wohin läuft das Material?',
      'Kanäle und Gewässer haben Vorrang vor der Reinigung der Fläche.',
      'Fachbehörden früh einbinden – sie entscheiden über Beprobung und Entsorgung.',
      'Vorgänge dokumentieren: Menge, Stoff, Ort, Maßnahmen, Beteiligte.',
      'Einsatzstelle geordnet übergeben.',
      'Eigene Schutzausrüstung nach Kontakt reinigen lassen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Ölspuren sind Verkehrsgefahr und Umweltrisiko zugleich.',
      'Kanaleinläufe zuerst sichern, dann binden und aufnehmen.',
      'Bindemittel entfernt nicht den Schmierfilm – Freigabe abstimmen.',
      'Der Regenwasserkanal führt meist ungeklärt ins Gewässer.',
      'Bei größeren Mengen oder unbekannten Stoffen gilt die GAMS-Regel.',
      'Heizölschäden: lüften, Zündquellen aus, Sanierungsfirma und Behörde.',
      'Umweltschutz gehört zur Kernaufgabe Schützen – dokumentieren.'),
  ],
},

/* ---------------------------------------------------------------- W4 ---- */
{
  id: 'w4', title: 'Sturmschäden, Bäume & Seilwinde', duration: 18,
  blocks: [
    P('Der Baum, der nach dem Sturm quer über der Straße liegt, ist der Standardeinsatz jeder Feuerwehr. Er ist auch der Einsatz, bei dem regelmäßig Einsatzkräfte schwer verletzt werden – weil ein liegender Baum unter Spannung steht und diese Spannung nicht sichtbar ist.'),

    H2('beurteilen', 'Die Lage beurteilen'),
    STEPS(
      'Gesamte Situation ansehen, nicht nur den Baum: Leitungen, Gebäude, Verkehr, Hang.',
      'Ist der Baum vollständig gefallen oder hängt er noch?',
      'Liegt er frei auf, oder ist er verkeilt, aufgestützt, verhakt?',
      'Wo sind Druck- und Zugseite? Wohin bewegt er sich beim Schneiden?',
      'Stehen weitere Bäume in der Nähe, die nachgeben könnten?',
      'Gibt es Leitungen im Kronenbereich oder darunter?',
      'Rückweichplatz und Gefahrenbereich festlegen.'),
    CO('danger', 'Spannung und Stromleitung', 'Verkeilte Stämme, gebogene Äste und in Leitungen hängende Bäume sind extrem gefährlich. Spannungen werden entlastet, nicht einfach durchtrennt. Bei Stromleitungen gilt ohne Ausnahme: Abstand halten, Netzbetreiber alarmieren und erst nach bestätigter Freischaltung arbeiten – auch dann, wenn die Leitung am Boden liegt und nichts passiert.'),

    H2('spannung', 'Druck- und Zugseite'),
    DEF('Druck- und Zugseite', 'Ein liegender oder gebogener Stamm ist auf einer Seite gestaucht (<b>Druckseite</b>) und auf der anderen gedehnt (<b>Zugseite</b>). Wird auf der Zugseite zuerst geschnitten, reißt der Stamm auf und schnellt zurück; wird auf der Druckseite zuerst durchgeschnitten, klemmt die Säge fest. Richtig ist ein <b>Entlastungsschnitt auf der Druckseite</b> und anschließend der Trennschnitt von der Zugseite.'),
    P('Die Beurteilung, welche Seite unter Druck steht, ist nicht immer eindeutig – besonders bei verkeilten oder mehrfach aufliegenden Stämmen. Im Zweifel wird die Spannung mechanisch entlastet: mit Keilen, mit einer Winde oder durch Abstützen. Die genaue Schnitttechnik behandelt <b>Modul Y</b>.'),

    H2('winde', 'Seilwinde und Zugtechnik'),
    P('Die Seilwinde nimmt schwere Arbeit ab und entlastet Spannungen kontrolliert. Ihre Gefahr liegt nicht im Ziehen, sondern im plötzlichen Versagen: Ein reißendes Seil unter Spannung schlägt mit tödlicher Wucht aus.'),
    KF(
      'Zugrichtung und Ausweichrichtung der Last vorher festlegen.',
      'Tragfähige Anschlagpunkte wählen und prüfen.',
      'Umlenkrollen nutzen, um die Zugrichtung zu ändern – nicht über Kanten ziehen.',
      'Niemand steht im Bereich oder in der Verlängerung des gespannten Seils.',
      'Seil mit einer Decke oder einem Seilschutz beschweren, um Energie im Versagensfall zu dämpfen.',
      'Langsam und kontrolliert ziehen, Spannung dauerhaft beobachten.',
      'Ständige Kommunikation zwischen Windenführer und Beobachter.'),
    CO('danger', 'Peitscheneffekt', 'Reißt ein gespanntes Seil, schnellt es mit enormer Geschwindigkeit zurück und kann Menschen töten. Der Gefahrenbereich reicht deutlich weiter, als die meisten annehmen – als Faustregel gilt beidseits des Seils ein Abstand von mindestens der Seillänge. Dieser Bereich wird abgesperrt und freigehalten.'),

    H2('dach', 'Dach- und Gebäudeschäden'),
    P('Abgedeckte Dächer, lose Ziegel, umgestürzte Schornsteine und beschädigte Fassaden sind typische Sturmschäden. Sie verlangen fast immer Arbeiten in der Höhe – und damit Absturzsicherung.'),
    KF(
      'Bei anhaltendem Sturm keine Arbeiten auf Dächern – Böen sind unberechenbar.',
      'Absturzsicherung nach <b>Modul K</b>; Rückhalten ist besser als Auffangen.',
      'Durchsturzgefahr beachten – Lichtkuppeln, geschwächte Flächen, nasse Ziegel.',
      'Bereich unterhalb absperren und freihalten.',
      'Lose Teile abnehmen oder sichern, nicht nur provisorisch abdecken.',
      'Notabdeckung mit Folie oder Plane als Sofortmaßnahme, dann Fachfirma.',
      'Bei größeren Schäden Statiker und Bauaufsicht einbinden.'),

    H2('grenzen', 'Wo die Feuerwehraufgabe endet'),
    P('Nicht jeder Sturmschaden ist Gefahrenabwehr. Die Feuerwehr beseitigt akute Gefahren – sie räumt keine Gärten auf und deckt keine Dächer neu ein. Diese Abgrenzung freundlich, aber klar zu kommunizieren, ist Teil der Arbeit.'),
    KF(
      'Akute Gefahr für Menschen oder den öffentlichen Verkehrsraum: Feuerwehraufgabe.',
      'Drohende erhebliche Folgeschäden: meist Feuerwehraufgabe als Sofortmaßnahme.',
      'Reine Aufräumarbeiten auf Privatgrund: Sache des Eigentümers.',
      'Dauerhafte Reparatur: Fachfirma.',
      'Im Zweifel Sofortmaßnahme, dann Übergabe an Eigentümer oder Fachbetrieb.',
      'Betroffene beraten, wen sie einschalten müssen – das hilft mehr als eine Absage.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Lage vollständig beurteilen, bevor die Säge angesetzt wird.',
      'Stromleitungen: Abstand, Netzbetreiber, erst nach bestätigter Freischaltung.',
      '<b>Druckseite</b> zuerst entlasten, dann von der Zugseite trennen.',
      'Im Zweifel Spannung mechanisch entlasten statt durchschneiden.',
      'Bei Zugmitteln niemand im Bereich oder in der Verlängerung des Seils.',
      'Bei anhaltendem Sturm keine Arbeiten auf Dächern.',
      'Absturzsicherung und Durchsturzgefahr auf Dächern beachten.',
      'Akute Gefahr ist Feuerwehraufgabe – Aufräumen nicht.'),
  ],
},

/* ---------------------------------------------------------------- W5 ---- */
{
  id: 'w5', title: 'Unwetterlage führen & koordinieren', duration: 18,
  blocks: [
    P('Eine Unwetterlage stellt die Führung vor eine ungewohnte Aufgabe: Nicht eine komplexe Einsatzstelle muss beherrscht werden, sondern hundert einfache gleichzeitig. Die Werkzeuge dafür sind dieselben wie sonst – aber sie werden anders eingesetzt.'),

    H2('lage', 'Der Massenanfall an Einsatzstellen'),
    P('Bei Unwettern gehen in kurzer Zeit dutzende bis hunderte Einsätze ein. Die Leitstelle ist innerhalb von Minuten überlastet, Anrufer kommen nicht durch, und die Kräfte fahren unkoordiniert von Einsatz zu Einsatz. Genau hier setzt die Führung an.'),
    KF(
      '<b>Priorisieren:</b> Menschenleben, dann öffentliche Gefahren, dann Sachwerte.',
      '<b>Abschnitte bilden</b> – räumlich, nach Ortsteilen oder nach Aufgabe.',
      '<b>Örtliche Führungsstelle einrichten</b>, die Einsätze sammelt und disponiert.',
      '<b>Einsätze bündeln:</b> räumlich abarbeiten spart erhebliche Fahrzeit.',
      '<b>Kräfte zusammenfassen</b> statt einzeln auszusenden.',
      '<b>Bürger einbinden</b> und Erwartungen managen.',
      '<b>Durchhaltefähigkeit sichern:</b> Ablösung, Verpflegung, Nachschub.'),
    DEF('Örtliche Einsatzleitung / Führungsstelle', 'Bei anhaltenden Unwetterlagen wird im Gerätehaus oder in einem geeigneten Gebäude eine Führungsstelle eingerichtet. Sie nimmt Einsätze entgegen, sammelt und priorisiert sie, disponiert die eigenen Kräfte und meldet der Leitstelle zusammengefasst zurück. Damit entlastet sie die überlastete Leitstelle erheblich und macht die örtliche Abarbeitung überhaupt erst steuerbar.'),

    H2('einrichten', 'Eine Führungsstelle einrichten'),
    STEPS(
      'Raum festlegen: ruhig, mit Telefon, Funk, Strom und Platz für eine Karte.',
      'Personal einteilen: Führungskraft, Disponent, Schriftführer, Funker.',
      'Übersicht anlegen: Einsatzliste mit Ort, Meldung, Priorität, Status.',
      'Karte mit eingetragenen Einsatzstellen führen – sie zeigt Schwerpunkte.',
      'Kräfteübersicht führen: welche Einheit ist wo, seit wann, bis wann?',
      'Absprache mit der Leitstelle: Was übernimmt wer?',
      'Ablösung für die Führungsstelle selbst einplanen.'),
    CO('tip', 'Die Karte zeigt den Schwerpunkt', 'Werden alle eingehenden Einsätze auf einer Karte markiert, wird nach kurzer Zeit sichtbar, wo sich das Unwetter ausgetobt hat. Häufungen zeigen Schwerpunkte, die gebündelt abgearbeitet werden können – und manchmal auch, dass ein ganzer Ortsteil noch gar keine Meldung abgesetzt hat, weil dort der Strom ausgefallen ist.'),

    H2('kommunikation', 'Kommunikation nach außen'),
    KF(
      'Bevölkerung frühzeitig informieren – über Warn-Apps, Presse, soziale Medien.',
      'Klar sagen, was die Feuerwehr leistet und was nicht.',
      'Hinweise zur Eigenvorsorge geben: Keller räumen, Fahrzeuge umsetzen, Gegenstände sichern.',
      'Notruf freihalten – für Meldungen ohne Gefahr andere Wege anbieten.',
      'Regelmäßig aktualisieren, auch wenn es nichts Neues gibt.',
      'Presseanfragen zentral über die Einsatzleitung bündeln.'),

    H2('kraefte', 'Kräfte einteilen'),
    P('Unwetterlagen dauern häufig acht bis achtundvierzig Stunden. Wer alle verfügbaren Kräfte in den ersten Stunden verbraucht, hat danach niemanden mehr – und der nächste Brandeinsatz kommt trotzdem.'),
    KF(
      'Von Anfang an in Schichten denken, nicht erst bei Erschöpfung.',
      'Einen Teil der Kräfte für den Regelbetrieb zurückhalten.',
      'Verpflegung, Getränke und Ruhemöglichkeiten organisieren.',
      'Ablösung frühzeitig alarmieren – nicht erst, wenn sie gebraucht wird.',
      'Auf Erschöpfungszeichen achten: Fehler, Reizbarkeit, Unaufmerksamkeit.',
      'Nachbarwehren und überörtliche Hilfe rechtzeitig anfordern.',
      'Jugendfeuerwehr und Alters- und Ehrenabteilung für Verpflegung einbinden.'),
    CO('warn', 'Erschöpfte Kräfte verunfallen', 'Die Unfallhäufigkeit steigt mit der Einsatzdauer messbar. Nach vielen Stunden mit Motorsäge, Pumpe und Nachtarbeit passieren Fehler, die am Anfang niemandem unterlaufen wären. Ablösung ist deshalb keine Nettigkeit, sondern eine Sicherheitsmaßnahme – und sie ist Führungsaufgabe.'),

    H2('nachbereitung', 'Nachbereitung'),
    KF(
      'Einsatzbereitschaft systematisch wiederherstellen: Fahrzeuge, Geräte, Betriebsstoffe.',
      'Verbrauchsmaterial ergänzen: Sandsäcke, Bindemittel, Kettenöl, Folien.',
      'Beschädigte Geräte melden und instandsetzen lassen.',
      'Einsätze dokumentieren – auch für die Kostenabrechnung.',
      'Lage gemeinsam auswerten: Was hat funktioniert, was nicht?',
      'Erkenntnisse in Alarmpläne und Materialbeschaffung einfließen lassen.',
      'Belastende Erlebnisse nachbesprechen und PSNV anbieten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Herausforderung ist die Koordination der Masse, nicht die Einzeleinsatzstelle.',
      'Priorisieren: Menschenleben, öffentliche Gefahren, Sachwerte.',
      'Eine <b>örtliche Führungsstelle</b> entlastet die Leitstelle erheblich.',
      'Einsätze auf einer Karte eintragen – sie zeigt Schwerpunkte.',
      'Räumlich bündeln spart erhebliche Fahrzeit.',
      'Von Anfang an in Schichten denken und Reserve zurückhalten.',
      'Erschöpfte Kräfte verunfallen – Ablösung ist Führungsaufgabe.',
      'Nachbereitung: Einsatzbereitschaft, Material, Auswertung, Nachbesprechung.'),
  ],
},

];
