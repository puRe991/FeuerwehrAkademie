/* =========================================================================
   MODUL S — Rettung & Selbstrettung
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls S.

   Fachliche Grundlage: FwDV 1, FwDV 3, FwDV 7, FwDV 10, DGUV Vorschrift 49,
   Empfehlungen zur Sichtung bei einem Massenanfall von Verletzten.
   Rettungstechniken müssen praktisch geübt werden – dieser Text ersetzt
   die Ausbildung am Standort nicht.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_S = [

/* ---------------------------------------------------------------- S1 ---- */
{
  id: 's1', title: 'Menschen retten', duration: 22,
  blocks: [
    P('Retten ist die erste und wichtigste Aufgabe der Feuerwehr. Alles andere – Löschen, Bergen, Schützen – ordnet sich diesem Ziel unter. Diese Lektion behandelt, wie eine Rettung strukturiert abläuft, welche Verfahren es gibt und warum der Eigenschutz dabei keine Einschränkung, sondern die Voraussetzung ist.'),

    H2('grundsatz', 'Retten hat Vorrang'),
    P('Die Rettung von Menschen aus Lebensgefahr ist die vornehmste Aufgabe der Feuerwehr. Retten bedeutet, Menschen und Tiere aus einer lebensbedrohlichen Zwangslage zu befreien und ihnen die notwendige Erstversorgung zukommen zu lassen.'),
    DEF('Retten und Bergen', 'Lebende Menschen werden <b>gerettet</b>, Verstorbene und Sachwerte werden <b>geborgen</b>. Diese Unterscheidung ist keine Wortklauberei: Sie bestimmt die Dringlichkeit, die Priorität und die Bereitschaft, dafür Risiken einzugehen. In der Lagemeldung macht sie den Unterschied zwischen einer laufenden Menschenrettung und einer Aufräumarbeit.'),
    FIG('feuerwehraufgaben', 'Die vier Aufgaben der Feuerwehr – die Menschenrettung hat immer Vorrang.'),

    H2('ablauf', 'Der Ablauf einer Rettung'),
    STEPS(
      '<b>Eigensicherung herstellen:</b> vollständige PSA, Atemschutz, Sicherheitstrupp, gesicherter Rückweg.',
      '<b>Lage prüfen:</b> Wo ist die Person, wie ist sie eingeschlossen, welche Gefahren bestehen?',
      '<b>Person ansprechen</b> und Zustand grob einschätzen: ansprechbar, Atmung, sichtbare Verletzungen.',
      '<b>Rettungsmethode wählen</b> nach Zustand, Weg, Gewicht und verfügbarer Zeit.',
      '<b>Aus dem Gefahrenbereich bringen</b> – erst raus, dann versorgen.',
      '<b>Medizinische Versorgung</b> beginnen und den Rettungsdienst einbinden.',
      '<b>Übergabe und Meldung:</b> Fundort, Zustand, Zeiten, Hinweise auf weitere Personen.'),
    CO('info', 'Erst raus, dann versorgen', 'Eine Reanimation im verrauchten Treppenhaus hilft niemandem – weder dem Patienten noch dem Trupp. Solange die Umgebung lebensbedrohlich ist, gilt: schnellstmöglich heraus, und die Versorgung beginnt dort, wo sie durchführbar ist.'),

    H2('griffe', 'Rettungsgriffe und Tragehilfen'),
    TBL(['Methode', 'Anwendung', 'Zu beachten'],[
      ['Gehende Rettung', 'Person ist gehfähig und ansprechbar', 'stützen, führen, Fluchthaube aufsetzen, beruhigen'],
      ['Rautek-Rettungsgriff', 'schnelles Ziehen einer nicht gehfähigen Person', 'kraftraubend, nicht für lange Strecken, nicht bei Wirbelsäulenverdacht'],
      ['Rettungstuch', 'kurze Strecken, enge Wege, Treppen', 'zwei bis vier Helfer, kein Wirbelsäulenschutz'],
      ['Krankentrage', 'längere Strecken', 'braucht Platz und mehrere Kräfte'],
      ['Schleifkorbtrage', 'unwegsames Gelände, Höhen und Tiefen', 'Fixierung möglich, aufwendiger'],
      ['Mehrhelfer-Griffe', 'schweres Heben im Team', 'Kommandogeber, synchron heben'],
    ]),
    CO('warn', 'Der Rautek-Griff hat Grenzen', 'Er ist schnell und braucht nur eine Person – deshalb ist er für die Sofortrettung wertvoll. Er belastet aber Retter und Patient erheblich, ist auf Treppen schwierig und für Personen mit Verdacht auf Wirbelsäulenverletzung ungeeignet, sofern keine akute Lebensgefahr besteht. Wo Zeit ist, wird schonender gerettet.'),

    H2('sofort', 'Sofortrettung und schonende Rettung'),
    TBL(['', 'Sofortrettung', 'Schonende Rettung'],[
      ['Wann', 'unmittelbare Lebensgefahr: Feuer, Rauch, Einsturz, Ertrinken', 'Standardfall, Lage beherrschbar'],
      ['Ziel', 'so schnell wie möglich aus der Gefahr', 'so schonend wie möglich, achsengerecht'],
      ['Kompromiss', 'mögliche Zusatzverletzungen bewusst in Kauf genommen', 'Zeitaufwand bewusst in Kauf genommen'],
      ['Entscheidung', 'trifft die Einsatzkraft vor Ort', 'abgestimmt mit dem Rettungsdienst'],
    ]),
    P('Die Entscheidung zwischen beiden ist eine der schwierigsten überhaupt. Die Faustregel lautet: Wenn die Umgebung den Menschen in den nächsten Minuten tötet, wird sofort gerettet. Wenn nicht, wird schonend gearbeitet.'),

    H2('suchen', 'Systematisch suchen'),
    P('Eine Person zu retten setzt voraus, sie zu finden. In verrauchten Räumen ist das eine methodische Aufgabe – ausführlich behandelt in <b>Modul E</b>. Die Kernpunkte gehören auch hierher.'),
    KF(
      'Vor dem Betreten Absuchrichtung und Rückweg festlegen.',
      'An einer Wand orientieren und diese konsequent halten.',
      'Erst die Wände, dann die Fläche absuchen.',
      'Gezielt dort suchen, wo Menschen liegen: unter Fenstern, hinter Türen, in Betten und Schränken.',
      'Abgesuchte Räume kennzeichnen.',
      'Funde sofort melden – die Führung braucht die Information.'),

    H2('tiere', 'Tierrettung'),
    P('Tiere zählen ausdrücklich zum Rettungsauftrag. Gleichzeitig gelten für sie besondere Regeln: Ein verängstigtes Tier ist unberechenbar, und Verletzungen durch Bisse, Tritte und Hörner sind häufig.'),
    KF(
      'Eigenschutz hat auch hier Vorrang – kein Risiko für ein Tier.',
      'Verhalten des Tieres beobachten, ruhige Bewegungen, keine Hektik.',
      'Tierarzt oder Tierhalter frühzeitig hinzuziehen.',
      'Bei Großtieren Fachkräfte und geeignete Technik anfordern.',
      'Fluchtwege für Mensch und Tier freihalten.',
      'Nie zwischen ein Tier und seinen vermeintlichen Fluchtweg stellen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Menschen werden gerettet, Verstorbene und Sachwerte geborgen.',
      'Ablauf: Eigensicherung, Lage, Ansprache, Methode, Rettung, Versorgung, Übergabe.',
      'Erst aus dem Gefahrenbereich, dann versorgen.',
      'Methode nach Zustand, Weg, Gewicht und Zeit wählen.',
      'Der Rautek-Griff ist schnell, aber begrenzt einsetzbar.',
      '<b>Sofortrettung</b> nur bei unmittelbarer Lebensgefahr, sonst schonend.',
      'Systematisch suchen, Räume kennzeichnen, Funde melden.',
      'Tierrettung nur mit Eigenschutz und Fachberatung.'),
  ],
},

/* ---------------------------------------------------------------- S2 ---- */
{
  id: 's2', title: 'Selbstretten & Selbstschutz', duration: 22,
  blocks: [
    P('Die Selbstrettung ist das Verfahren, das man hoffentlich nie braucht – und das man deshalb besonders sicher beherrschen muss. Wenn der Rückweg abgeschnitten ist, die Luft knapp wird oder ein Trupp eingeschlossen ist, entscheidet sich innerhalb von Minuten, ob die Ausbildung trägt.'),

    H2('warum', 'Wenn der Rückweg abgeschnitten ist'),
    P('Ein Trupp im Innenangriff kann in eine Notlage geraten: durch Einsturz, durch eine plötzliche Brandausbreitung, durch Orientierungsverlust oder durch eine Gerätestörung. Die Selbstrettung ist die letzte Möglichkeit, wenn der geordnete Rückzug nicht mehr geht.'),
    KF(
      'Der geordnete Rückzug hat immer Vorrang vor der Selbstrettung.',
      'Selbstrettung ist eine Notmaßnahme mit erheblichem Risiko.',
      'Sie beginnt nicht mit einem Verfahren, sondern mit dem Notruf.',
      'Sie funktioniert nur, wenn sie geübt ist – unter Maske und mit Handschuhen.',
      'Der Trupp bleibt auch in der Notlage zusammen.',
      'Die beste Selbstrettung ist die, die durch rechtzeitigen Rückzug vermieden wurde.'),

    H2('reihenfolge', 'Was zuerst zu tun ist'),
    STEPS(
      '<b>Notruf absetzen:</b> Mayday dreifach, dann wer, wo, was und wie viel Luft.',
      '<b>Ruhig atmen:</b> Panik verdreifacht den Luftverbrauch – das ist die wirksamste Einzelmaßnahme.',
      '<b>Position bestimmen</b> und Wandkontakt aufnehmen.',
      '<b>Rückweg suchen:</b> Schlauchleitung ertasten, Kupplungsrichtung nutzen.',
      '<b>Bemerkbar machen:</b> rufen, klopfen, Handlampe zur Decke richten.',
      '<b>Schutz suchen:</b> Türen zwischen sich und den Brand bringen.',
      '<b>Erst wenn kein Weg bleibt:</b> Selbstrettung über die Feuerwehrleine.'),
    CO('tip', 'Die Kupplung als Kompass', 'An der Storz-Kupplung zeigt die Seite mit den Nocken zur Pumpe. Wer im Dunkeln der Schlauchleitung folgt und die Kupplungsrichtung ertastet, weiß, in welche Richtung es hinausgeht. Diese Kleinigkeit hat schon Trupps aus verrauchten Gebäuden geführt – sie gehört in jede Atemschutzübung.'),

    H2('mittel', 'Mittel der Selbstrettung'),
    UL(
      '<b>Feuerwehrleine mit Haltegurt:</b> Ablassen aus einem Fenster – ausschließlich im äußersten Notfall.',
      '<b>Wandkontakt und Wandhangeln:</b> systematisches Suchen des Rückwegs.',
      '<b>Schlauchleitung als Leitlinie:</b> der zuverlässigste Weg nach draußen.',
      '<b>Türen als Rückzugsschutz:</b> sperren Rauch und Wärme aus und schaffen Zeit.',
      '<b>Notruf und Rückzugssignal:</b> lösen die Rettung von außen aus.',
      '<b>Fenster als Rückzugsposition:</b> Frischluft, Sichtbarkeit für den Sicherheitstrupp.'),
    DEF('Selbstretten über die Leine', 'Mit Feuerwehrleine und Feuerwehr-Haltegurt kann sich eine Einsatzkraft im äußersten Notfall aus einem Fenster ablassen. Das Verfahren ist eine Notmaßnahme mit hohem Risiko: Der Haltegurt ist keine Absturzsicherung, die Leine ist nicht dafür ausgelegt, einen Sturz aufzufangen, und das Verfahren gelingt nur, wenn es sicher beherrscht wird. Es wird ausschließlich dann angewendet, wenn keine andere Möglichkeit bleibt.'),
    CO('danger', 'Kein Absprung, keine Improvisation', 'Der Sprung aus einem Fenster ist keine Selbstrettung, sondern eine Verzweiflungstat mit hoher Verletzungswahrscheinlichkeit. Ebenso wenig taugen improvisierte Konstruktionen aus Schläuchen oder Kabeln. Wer keinen Weg hat, sichert seine Position, macht sich bemerkbar und wartet auf den Sicherheitstrupp – das ist in den meisten Fällen die bessere Entscheidung.'),

    H2('position', 'Position halten und überleben'),
    P('Wenn keine Selbstrettung möglich ist, besteht die Aufgabe darin, so lange durchzuhalten, bis Hilfe kommt. Das klingt passiv, ist aber eine aktive Leistung.'),
    KF(
      'Ruhig und gleichmäßig atmen – jede eingesparte Atemzugfrequenz verlängert die Zeit.',
      'An einen Ort mit Frischluft oder mit einer Tür zwischen sich und dem Brand bewegen.',
      'Sich groß und auffindbar machen: an eine Wand, in Türnähe, nicht in eine Ecke.',
      'Handlampe zur Decke richten – sie ist im Rauch von weitem sichtbar.',
      'Regelmäßig klopfen und rufen, dazwischen ruhen.',
      'Bewegungsmelder des Atemschutzgeräts auslösen lassen.',
      'Funkverbindung halten und Position wiederholt melden.'),

    H2('vorbeugen', 'Notlagen vermeiden'),
    P('Die wirksamsten Maßnahmen liegen vor der Notlage. Fast jede Selbstrettungssituation hatte einen Punkt, an dem ein rechtzeitiger Rückzug problemlos möglich gewesen wäre.'),
    KF(
      'Rückweg merken und sichern – die Schlauchleitung nie loslassen.',
      'Rückzugsdruck vorher berechnen und einhalten.',
      'Als Trupp zusammenbleiben, ständigen Kontakt halten.',
      'Auf Warnsignale achten: steigende Hitze, verändertes Rauchverhalten, Geräusche.',
      'Orientierungspunkte laut benennen.',
      'Bei Zweifel gemeinsam zurückziehen – Zweifel sind ein Rückzugsgrund.',
      'Türen hinter sich kontrolliert schließen, um den Rückweg zu schützen.'),
    CO('warn', 'Ruhe rettet Luft', 'In der Notlage entscheidet Ruhe über Leben und Tod. Ein Mensch in Panik verbraucht ein Vielfaches der Luft eines ruhig atmenden – und trifft zusätzlich schlechtere Entscheidungen. Die Fähigkeit, unter Stress ruhig zu bleiben, ist trainierbar: durch realistische Übungen, durch bekannte Abläufe und dadurch, dass die Notfallverfahren automatisiert sind.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der geordnete Rückzug hat immer Vorrang vor der Selbstrettung.',
      'Zuerst Notruf absetzen, dann ruhig atmen, dann handeln.',
      'Schlauchleitung als Leitlinie; Kupplungsnocken zeigen zur Pumpe.',
      'Türen zwischen sich und den Brand bringen – sie schaffen Zeit.',
      'Selbstretten über die Leine nur im äußersten Notfall.',
      'Kein Absprung, keine improvisierten Konstruktionen.',
      'Wenn kein Weg bleibt: Position sichern, auffindbar machen, durchhalten.',
      'Die beste Selbstrettung ist die, die durch rechtzeitigen Rückzug vermieden wurde.'),
  ],
},

/* ---------------------------------------------------------------- S3 ---- */
{
  id: 's3', title: 'Tragehilfen & patientenschonender Transport', duration: 20,
  blocks: [
    P('Zwischen dem Auffinden einer Person und der Übergabe an den Rettungsdienst liegt der Transport – oft über Treppen, durch enge Flure, über Trümmer oder unwegsames Gelände. Wie dieser Transport durchgeführt wird, entscheidet mit darüber, wie der Patient in der Klinik ankommt.'),

    H2('geraete', 'Geräte für den Transport'),
    TBL(['Gerät', 'Einsatz', 'Stärke', 'Grenze'],[
      ['Rettungstuch', 'kurze Strecken, enge Wege', 'schnell einsetzbar, wenig Platzbedarf', 'kein Wirbelsäulenschutz, unbequem'],
      ['Krankentrage', 'Standardtransport liegender Patienten', 'stabil, gut zu tragen', 'braucht Platz, schwer in Treppenhäusern'],
      ['Schleifkorbtrage', 'unwegsames Gelände, Höhen und Tiefen', 'Patient vollständig fixierbar', 'aufwendig, schwer, mehrere Kräfte'],
      ['Spineboard', 'Verdacht auf Wirbelsäulenverletzung', 'achsengerechte Fixierung', 'unbequem, nicht für lange Liegezeiten'],
      ['Schaufeltrage', 'schonendes Aufnehmen ohne Umlagern', 'Patient muss nicht gedreht werden', 'nicht für Transport über weite Strecken'],
      ['Vakuummatratze', 'Ruhigstellung bei Verletzungen', 'passt sich der Körperform an', 'Zeitaufwand, Rettungsdienstgerät'],
      ['Tragestuhl', 'sitzender Transport über Treppen', 'ideal im Treppenhaus', 'nur für sitzfähige Patienten'],
    ]),
    CO('info', 'Das richtige Gerät spart mehr Zeit, als seine Auswahl kostet', 'Wer eine Person mit dem Rettungstuch über drei Treppen zerrt, obwohl ein Tragestuhl im Fahrzeug liegt, verliert Zeit und Kraft und belastet den Patienten unnötig. Ein kurzer Blick auf Weg und Zustand vor dem Transport lohnt sich fast immer.'),

    H2('achse', 'Achsengerecht bewegen'),
    DEF('Achsengerechte Rettung', 'Bewegung eines Patienten so, dass <b>Kopf, Hals und Rumpf in einer Linie</b> bleiben und keine Verdrehung oder Abknickung der Wirbelsäule entsteht. Sie ist bei jedem Verdacht auf eine Wirbelsäulenverletzung angezeigt – etwa nach Sturz aus Höhe, Verkehrsunfall oder Kopfverletzung.'),
    STEPS(
      'Ausreichend Helfer bereitstellen – achsengerechtes Bewegen ist keine Einzelarbeit.',
      'Einen Kommandogeber bestimmen, der am Kopf steht und den Kopf hält.',
      'Ablauf vorher besprechen: Wer greift wo, wohin wird bewegt?',
      'Patient informieren, was gleich passiert.',
      'Auf Kommando gemeinsam und langsam bewegen.',
      'Kopf während der gesamten Bewegung stabil halten.',
      'Nach dem Bewegen Zustand erneut prüfen.'),
    CO('warn', 'Nur so viel bewegen wie nötig', 'Jede Bewegung eines Schwerverletzten birgt Risiken. Außer bei akuter Lebensgefahr wird schonend und in Abstimmung mit dem Rettungsdienst gearbeitet. Die Frage „Müssen wir ihn überhaupt bewegen?" ist berechtigt und wird zu selten gestellt.'),

    H2('team', 'Im Team heben und tragen'),
    P('Fast jeder Transport ist Teamarbeit. Wo mehrere Menschen gemeinsam heben, entscheidet die Koordination über Sicherheit und Kraftaufwand.'),
    KF(
      '<b>Ein Kommandogeber</b> zählt an: „Achtung – heben!" Alle heben gleichzeitig.',
      '<b>Aus den Beinen heben</b>, Rücken gerade, Last nah am Körper.',
      '<b>Gleichmäßig und langsam</b> bewegen – ruckartige Bewegungen belasten Patient und Helfer.',
      '<b>Griffe vorher festlegen</b> – nicht mitten im Tragen umgreifen.',
      '<b>Weg vorher freimachen</b>: Türen öffnen, Hindernisse beiseite, Beleuchtung.',
      '<b>Pausen einplanen</b> und Ablösung organisieren.',
      '<b>Patient ansprechen</b> und über jeden Schritt informieren.'),
    CO('tip', 'Der freigemachte Weg', 'Die häufigste Ursache für Stolperunfälle beim Patiententransport ist ein nicht vorbereiteter Weg: Schläuche, Türen, Stufen, Dunkelheit. Eine Kraft, die vorausgeht und den Weg freimacht und ausleuchtet, ist besser eingesetzt als eine, die zusätzlich mitträgt.'),

    H2('treppe', 'Transport über Treppen'),
    P('Treppenhäuser sind die schwierigste Transportstrecke: eng, gewendelt, oft verraucht und mit Absturzkante. Sie verdienen besondere Aufmerksamkeit.'),
    KF(
      'Grundsatz: Der Patient wird mit dem <b>Kopf bergauf</b> transportiert.',
      'Bei Verdacht auf Kreislaufproblemen abweichende Lagerung mit dem Rettungsdienst abstimmen.',
      'Ausreichend Helfer – auf Treppen mindestens vier.',
      'Treppenhaus vorher freiräumen und ausleuchten.',
      'Langsam und mit festen Zwischenstopps arbeiten.',
      'Auf Absturzkanten und Geländer achten.',
      'Tragestuhl nutzen, wo der Patient sitzen kann.'),

    H2('uebergabe', 'Die Übergabe'),
    KF(
      'Wo und wie wurde die Person gefunden?',
      'Wie lange war sie der Gefahr ausgesetzt?',
      'Was war auffällig: Bewusstsein, Atmung, Verletzungen, Veränderungen?',
      'Welche Maßnahmen wurden durchgeführt?',
      'Wurde die Person bewegt, und wie?',
      'Gibt es Hinweise auf weitere Betroffene?'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Transportgerät nach Zustand, Weg und Zeit auswählen.',
      '<b>Achsengerecht</b> bedeutet Kopf, Hals und Rumpf in einer Linie.',
      'Achsengerechtes Bewegen braucht mehrere Helfer und einen Kommandogeber am Kopf.',
      'Nur so viel bewegen wie nötig.',
      'Im Team auf Kommando heben, aus den Beinen, Last nah am Körper.',
      'Den Weg vorher freimachen und ausleuchten.',
      'Auf Treppen Kopf bergauf und mindestens vier Helfer.',
      'Strukturierte Übergabe mit Fundort, Zeiten und Beobachtungen.'),
  ],
},

/* ---------------------------------------------------------------- S4 ---- */
{
  id: 's4', title: 'Rettung über Leitern & Rettungsgeräte', duration: 18,
  blocks: [
    P('Wenn der Treppenraum ausfällt, bleibt der Weg über die Fassade. Rettungen über Leitern gehören zu den anspruchsvollsten Aufgaben der Feuerwehr – körperlich fordernd, für den Geretteten beängstigend und für alle Beteiligten mit Absturzrisiko verbunden.'),

    H2('reihenfolge', 'Die Reihenfolge der Rettungswege'),
    OL(
      '<b>Baulicher Rettungsweg</b> – der Treppenraum, sofern nutzbar. Immer erste Wahl.',
      '<b>Drehleiter</b> – komfortabel, sicher, auch für nicht gehfähige Personen geeignet.',
      '<b>Tragbare Leitern</b> – Steckleiter oder Schiebleiter, wenn keine Drehleiter verfügbar ist.',
      '<b>Rettungsgeräte</b> – Schleifkorbtrage, Abseilverfahren, Höhenrettung.',
      '<b>Sprungrettungsgerät</b> – absolute Ausnahme, wenn nichts anderes möglich ist.'),
    CO('info', 'Warum die Reihenfolge zählt', 'Jede Stufe nach unten bedeutet mehr Risiko und mehr Zeitaufwand. Wer die Reihenfolge kennt, entscheidet unter Druck richtig – und beginnt nicht mit der aufwendigsten Variante, weil sie gerade greifbar ist.'),

    H2('leiter', 'Rettung über tragbare Leitern'),
    P('Über Steck- oder Schiebleiter können Personen aus Obergeschossen gerettet werden. Das Verfahren ist erlernbar, aber es muss <b>geübt</b> sein – der erste Versuch darf nicht der Ernstfall sein.'),
    KF(
      'Leiter richtig in Stellung bringen: Anstellwinkel 65 bis 75 Grad, mindestens 1 m Überstand.',
      'Leiter während der gesamten Rettung von unten festhalten lassen.',
      'Ausreichend Helfer bereitstellen – oben, an der Leiter und unten.',
      'Bei bewusstlosen oder schweren Personen ist die Leiterrettung kaum durchführbar.',
      'Belastungsgrenzen der Leiter beachten – Retter und Geretteter zählen zusammen.',
      'Die gerettete Person beruhigen und führen; Panik ist die größte Gefahr.',
      'Bei Absturzgefahr für die Einsatzkraft zusätzlich sichern.'),
    CO('warn', 'Nur geübte Leiterrettung', 'Die Rettung einer hilflosen Person über eine Leiter ist anspruchsvoll und gefährlich – für beide Beteiligten. Sie erfordert regelmäßige Übung. Im Zweifel und wenn die Zeit es zulässt, ist die Drehleiter die deutlich bessere Wahl.'),

    H2('dl', 'Die Drehleiter'),
    P('Die Drehleiter mit Korb ist das komfortabelste und sicherste Rettungsmittel aus Höhen. Sie erreicht Personen an Fenstern und auf Dächern, kann nicht gehfähige Menschen aufnehmen und erlaubt sogar den Transport einer Krankentrage im Korb.'),
    KF(
      'Aufstell- und Bewegungsflächen müssen frei sein – deshalb sind sie baurechtlich geschützt.',
      'Standsicherheit durch vollständige Abstützung; der Untergrund muss tragfähig sein.',
      'Freileitungen, Bäume und Balkone begrenzen den Bewegungsraum.',
      'Die erreichbare Höhe sinkt mit zunehmender Ausladung.',
      'Der Korb hat eine begrenzte Nutzlast – Personenzahl und Gewicht beachten.',
      'Bei Wind gelten Einschränkungen des Herstellers.',
      'Die Anfahrt kann länger dauern als der Innenangriff – früh anfordern.'),

    H2('sprung', 'Sprungrettungsgerät'),
    DEF('Sprungrettungsgerät', 'Ein aufblasbares Polster, das eine springende Person auffängt. Es hat eine begrenzte zulässige Sprunghöhe, setzt eine ansprechbare und sprungfähige Person voraus und birgt auch bei korrekter Anwendung ein erhebliches Verletzungsrisiko. Es ist ausschließlich das <b>allerletzte Mittel</b>, wenn kein anderer Rettungsweg möglich ist und die Person sonst sterben würde.'),
    CO('danger', 'Kein Ersatz für andere Rettungswege', 'Ein Sprungrettungsgerät wird nicht eingesetzt, weil es schnell aufgebaut ist, sondern weil nichts anderes geht. Solange Leiter, Drehleiter oder Innenangriff möglich sind, haben sie Vorrang. Die springende Person muss die Anweisungen verstehen und befolgen können – bei Panik, Rauchgasvergiftung oder Bewusstseinstrübung ist das Verfahren ungeeignet.'),

    H2('hoehen', 'Höhenrettung'),
    P('Rettungen aus großen Höhen und Tiefen – Kräne, Windkraftanlagen, Silos, Schächte, Brücken – sind Aufgabe speziell ausgebildeter Höhenrettungsgruppen. Die allgemeine Feuerwehr sichert bis zu deren Eintreffen den Bereich und die betroffene Person. Die Verfahren behandelt <b>Modul K</b> ausführlich.'),

    H2('betreuung', 'Die gerettete Person'),
    KF(
      'Von Anfang an ansprechen und erklären, was passiert.',
      'Ruhig und bestimmt führen – Unsicherheit überträgt sich sofort.',
      'Körperkontakt herstellen und halten.',
      'Bei Höhenangst nicht diskutieren, sondern führen und sichern.',
      'Nach der Rettung sofort dem Rettungsdienst vorstellen.',
      'Auch scheinbar unverletzte Gerettete betreuen – der Schock kommt oft später.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Reihenfolge: Treppenraum, Drehleiter, tragbare Leitern, Rettungsgeräte, Sprungrettungsgerät.',
      'Leiterrettung nur geübt, mit Fußsicherung und ausreichend Helfern.',
      'Bei bewusstlosen Personen ist die Leiterrettung kaum durchführbar.',
      'Die Drehleiter braucht freie Aufstellflächen und tragfähigen Untergrund.',
      'Die erreichbare Höhe sinkt mit zunehmender Ausladung.',
      'Sprungrettungsgerät ist das allerletzte Mittel.',
      'Höhenrettung aus großen Höhen und Tiefen ist Spezialaufgabe.',
      'Gerettete durchgehend betreuen und dem Rettungsdienst vorstellen.'),
  ],
},

/* ---------------------------------------------------------------- S5 ---- */
{
  id: 's5', title: 'Menschenrettung planen: Prioritäten & viele Betroffene', duration: 18,
  blocks: [
    P('Solange eine Person betroffen ist, ist die Aufgabe klar. Sobald es fünf sind, wird sie schwierig – und bei fünfzig verändert sich die Logik grundlegend. Diese Lektion behandelt, wie unter knappen Kräften priorisiert wird und was bei einem Massenanfall von Verletzten gilt.'),

    H2('prio', 'Prioritäten setzen'),
    P('Sind mehrere Menschen in Gefahr und reichen die Kräfte nicht für alle gleichzeitig, muss die Führungskraft entscheiden. Die Reihenfolge orientiert sich daran, wo die Gefährdung am größten und die Rettung am aussichtsreichsten ist.'),
    OL(
      '<b>Unmittelbar Lebensbedrohte</b> – im Brandbereich, im Rauch, unter Einsturzgefahr.',
      '<b>Akut Gefährdete</b> – in Rauchausbreitungsrichtung, in den betroffenen Geschossen.',
      '<b>Personen in den Rettungswegen</b> – Treppenraum, Flure.',
      '<b>Übrige Bereiche</b> – geordnete Evakuierung.'),
    KF(
      'Rufende und sichtbare Personen leiten die Suche – sie sind auffindbar.',
      'Stille Bereiche nicht vernachlässigen: Bewusstlose rufen nicht.',
      'Systematisch absuchen, damit niemand vergessen wird.',
      'Gerettete Personen registrieren und die Vollzähligkeit prüfen.',
      'Informationen von Anwohnern und Betriebspersonal aktiv einholen.',
      'Bei knappen Kräften nachfordern, bevor priorisiert werden muss.'),
    CO('warn', 'Die schwerste Entscheidung', 'Wenn Kräfte nicht für alle reichen, bedeutet Priorisieren, dass jemand warten muss. Diese Entscheidung trifft die Führungskraft – bewusst, begründet und mitgeteilt. Sie einzelnen Trupps zu überlassen, führt dazu, dass alle dieselbe sichtbare Person retten und die stillen Bereiche unbearbeitet bleiben.'),

    H2('manv', 'Massenanfall von Verletzten'),
    DEF('MANV', 'Ein Massenanfall von Verletzten liegt vor, wenn die Zahl der Betroffenen die verfügbaren Rettungsmittel übersteigt. Dann wird von der individualmedizinischen auf eine <b>gruppenbezogene</b> Versorgung umgestellt: Ziel ist es, mit begrenzten Mitteln möglichst vielen zu helfen – nicht, jedem Einzelnen alles zu geben.'),
    DEF('Sichtung', 'Die Einteilung der Betroffenen nach Behandlungsdringlichkeit durch ärztliches oder speziell geschultes Personal des Rettungsdienstes. Aus der Sichtungskategorie ergibt sich, wer zuerst behandelt und transportiert wird. Die Sichtung ist eine <b>medizinische</b> Aufgabe – die Feuerwehr führt sie nicht durch, unterstützt aber ihre Umsetzung.'),
    P('Für die Feuerwehr bedeutet ein MANV vor allem organisatorische Arbeit: Rettung und Transport aus dem Gefahrenbereich, Einrichtung von Sammelstellen, Beleuchtung, Wetterschutz, Betreuung und Unterstützung des Rettungsdienstes.'),

    H2('struktur', 'Strukturen bei vielen Betroffenen'),
    TBL(['Struktur', 'Zweck'],[
      ['Sammelstelle für Betroffene', 'unverletzte und leicht betroffene Personen zusammenführen und betreuen'],
      ['Verletztenablage', 'Betroffene aus dem Gefahrenbereich zusammenführen, erste Sichtung'],
      ['Behandlungsplatz', 'strukturierte medizinische Versorgung durch den Rettungsdienst'],
      ['Bereitstellungsraum', 'nachrückende Kräfte und Fahrzeuge sammeln und gezielt einsetzen'],
      ['Abtransportstelle', 'geordneter Abtransport, Übergabe an Fahrzeuge'],
      ['Registrierung', 'Erfassung aller Betroffenen und ihres Verbleibs'],
    ]),
    CO('info', 'Registrierung ist keine Bürokratie', 'Bei vielen Betroffenen ist die zentrale Frage: Fehlt noch jemand? Ohne Registrierung lässt sie sich nicht beantworten – und dann muss ein Gebäude erneut vollständig abgesucht werden, obwohl vielleicht alle draußen sind. Die Erfassung geretteter Personen ist deshalb eine der wertvollsten Aufgaben überhaupt.'),

    H2('evakuierung', 'Evakuierung und Räumung'),
    P('Nicht jede Menschenrettung ist eine Rettung im engeren Sinne. Häufig geht es darum, viele Menschen geordnet aus einem Bereich zu bringen, bevor sie überhaupt in Gefahr geraten.'),
    KF(
      'Klare, ruhige Ansagen – Panik entsteht durch Unsicherheit, nicht durch Gefahr.',
      'Bekannte Wege nutzen; Menschen gehen instinktiv dorthin, wo sie hergekommen sind.',
      'Aufzüge meiden und sperren.',
      'Hilfebedürftige Personen gezielt begleiten – vorher festlegen, wer wen unterstützt.',
      'Sammelplatz benennen und Vollzähligkeit prüfen.',
      'Personal des Objekts einbinden – es kennt Menschen und Wege.',
      'Betreuung nach der Evakuierung sicherstellen: Wetterschutz, Wärme, Information.'),

    H2('betreuung', 'Betreuung ist Teil der Rettung'),
    P('Menschen, die gerade aus einer Gefahr gerettet wurden, sind erschüttert, oft leicht bekleidet, ohne Papiere und ohne Vorstellung, wie es weitergeht. Ihre Betreuung ist keine Nebenaufgabe – sie ist Teil des Auftrags <b>Schützen</b>.'),
    KF(
      'Wetterschutz und Wärme organisieren – Bus, Zelt, benachbartes Gebäude.',
      'Getränke und Sitzgelegenheiten bereitstellen.',
      'Angehörige zusammenführen, besonders bei Kindern.',
      'Verständlich informieren, was passiert und wie es weitergeht.',
      'Vor Blicken und Presse schützen.',
      'Hilfsorganisationen für die Betreuung frühzeitig anfordern.',
      'Psychosoziale Notfallversorgung auch für Betroffene einbinden.'),
    CO('tip', 'Ruhe bewahren und strukturiert führen', 'Viele Betroffene, laute Lage, Zeitdruck – gerade dann trägt der Führungsvorgang. Überblick behalten, Abschnitte bilden, delegieren und regelmäßig kontrollieren, statt sich in Einzelmaßnahmen zu verlieren. Wer versucht, alles selbst zu machen, verliert das Ganze.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Priorität: unmittelbar Lebensbedrohte, akut Gefährdete, Rettungswege, übrige Bereiche.',
      'Bewusstlose rufen nicht – stille Bereiche nicht vernachlässigen.',
      'Priorisierung ist Führungsaufgabe, nicht Truppentscheidung.',
      '<b>MANV</b>: Umstellung von individueller auf gruppenbezogene Versorgung.',
      'Die <b>Sichtung</b> ist eine medizinische Aufgabe des Rettungsdienstes.',
      'Strukturen: Sammelstelle, Verletztenablage, Behandlungsplatz, Bereitstellungsraum, Registrierung.',
      'Registrierung beantwortet die zentrale Frage: Fehlt noch jemand?',
      'Betreuung der Betroffenen gehört zum Auftrag Schützen.'),
  ],
},

];
