/* =========================================================================
   MODUL Y — Motorkettensäge & technische Geräte
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls Y.

   Fachliche Grundlage: DGUV Vorschrift 49, DGUV Information zur
   Motorkettensägenausbildung, DGUV Regel 112-191 ff. (persönliche
   Schutzausrüstung), FwDV 1, Herstellerbetriebsanleitungen.
   Die Motorkettensäge darf nur von ausgebildeten Kräften bedient werden –
   dieser Text ersetzt die Ausbildung nicht.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_Y = [

/* ---------------------------------------------------------------- Y1 ---- */
{
  id: 'y1', title: 'Motorsäge: Aufbau & Sicherheit', duration: 20,
  blocks: [
    P('Die Motorkettensäge ist das gefährlichste Handgerät der Feuerwehr. Eine laufende Kette bewegt sich mit rund 20 Metern pro Sekunde; eine Berührung durchtrennt Gewebe schneller, als ein Mensch reagieren kann. Genau deshalb ist die Bedienung an eine eigene Ausbildung gebunden – und deshalb wird in diesem Modul so viel über Sicherheit gesprochen.'),

    H2('einsatz', 'Wozu die Säge?'),
    P('Die Motorkettensäge kommt bei Sturmschäden zum Einsatz, bei der technischen Hilfe, zur Schaffung von Zugängen und beim Vegetationsbrand. Sie nimmt schwere Arbeit ab – und verzeiht keine Nachlässigkeit.'),
    CO('danger', 'Nur ausgebildete Kräfte', 'Die Motorkettensäge darf ausschließlich von Einsatzkräften bedient werden, die den entsprechenden Lehrgang absolviert haben und regelmäßig damit arbeiten. Das ist keine Formalie: Die typischen Verletzungen sind tiefe Schnittwunden an Bein, Hand und Gesicht – bleibend, häufig mit Nervenschäden. Wer unsicher ist, gibt die Säge ab.'),

    H2('aufbau', 'Aufbau und Sicherheitseinrichtungen'),
    TBL(['Bauteil', 'Funktion'],[
      ['Führungsschiene und Sägekette', 'trennt das Holz; Kettengeschwindigkeit etwa 20 m/s'],
      ['Kettenbremse mit Handschutz', 'stoppt die Kette bei Rückschlag und bei Auslösung von Hand'],
      ['Gashebelsperre', 'verhindert unbeabsichtigtes Gasgeben'],
      ['Kettenfangbolzen', 'fängt eine gerissene Kette ab'],
      ['Krallenanschlag', 'setzt am Holz an, ermöglicht kontrolliertes Sägen'],
      ['Antivibrationssystem', 'reduziert die Vibrationsbelastung der Hände'],
      ['Kettenschmierung', 'schmiert und kühlt die Kette – ohne sie überhitzt alles'],
      ['Kurzschluss- und Stoppschalter', 'schaltet den Motor ab'],
    ]),
    KF(
      'Alle Sicherheitseinrichtungen werden vor jedem Einsatz geprüft.',
      'Eine Säge mit defekter Kettenbremse wird nicht benutzt.',
      'Der Krallenanschlag ist kein Zubehör – er ermöglicht sicheres Arbeiten.',
      'Die Kettenschmierung wird während der Arbeit kontrolliert.',
      'Manipulierte oder überbrückte Sicherheitseinrichtungen sind ein Ausschlussgrund.'),

    H2('psa', 'Persönliche Schutzausrüstung'),
    P('Die Schnittschutzausrüstung funktioniert nach einem einfachen Prinzip: Fasern im Material werden von der Kette erfasst, wickeln sich um das Kettenrad und blockieren es innerhalb von Sekundenbruchteilen. Das funktioniert nur, wenn die Ausrüstung vollständig, unbeschädigt und richtig getragen wird.'),
    KF(
      '<b>Schnittschutzhose</b> – Pflicht, in der passenden Schnittschutzklasse.',
      '<b>Helm mit Gesichtsschutz und Gehörschutz</b> – Späne und Lärm.',
      '<b>Schnittschutzstiefel</b> mit Zehenschutz und griffiger Sohle.',
      '<b>Griffsichere Handschuhe</b>, bei Bedarf mit Schnittschutz am Handrücken.',
      '<b>Eng anliegende Kleidung</b> – nichts Loses, keine Schals, keine offenen Jacken.',
      '<b>Warnkleidung</b> bei Arbeiten im Verkehrsbereich.',
      'Bei Arbeiten über Kopfhöhe zusätzlich Absturzsicherung.'),
    CO('warn', 'Beschädigte Schnittschutzhose ersetzen', 'Eine Schnittschutzhose, die einmal von der Kette erfasst wurde, ist verbraucht – auch wenn sie äußerlich noch brauchbar aussieht. Ebenso wenig schützt eine durchgescheuerte oder falsch gewaschene Hose zuverlässig. Sie wird ersetzt, nicht repariert.'),

    H2('kickback', 'Der Rückschlag'),
    DEF('Rückschlag (Kickback)', 'Berührt der obere Quadrant der Schienenspitze das Holz, wird die Säge blitzartig nach oben und in Richtung des Bedieners geschleudert. Der Vorgang dauert Sekundenbruchteile und ist mit menschlicher Reaktion nicht aufzuhalten. Die <b>Kettenbremse</b> stoppt die Kette dabei – aber die beste Gegenmaßnahme ist, den Rückschlag gar nicht erst auszulösen.'),
    FIG('kickback', 'Rückschlag: Berührt der obere Quadrant der Schienenspitze das Holz, schlägt die Säge blitzartig zum Bediener zurück.'),
    KF(
      'Niemals mit der oberen Schienenspitze arbeiten.',
      'Beim Einstechen besondere Technik anwenden – nur nach Ausbildung.',
      'Auf verdeckte Äste und Hindernisse im Schnittbereich achten.',
      'Säge immer mit <b>beiden Händen</b> und festem Griff führen – Daumen umschließen den Griff.',
      'Nie über Schulterhöhe sägen.',
      'Nie einhändig arbeiten.',
      'Sicheren, festen Stand einnehmen; nicht auf Leitern oder instabilem Untergrund sägen.'),

    H2('spannung', 'Spannung im Holz'),
    CO('danger', 'Spannung ist die zweite große Gefahr', 'Umgestürzte, verkeilte oder gebogene Bäume stehen unter Spannung. Beim Durchtrennen kann das Holz schlagartig zurückschnellen, die Säge einklemmen oder ein Stammteil in Bewegung setzen. Die Spannungsverhältnisse werden <b>vor</b> jedem Schnitt beurteilt – die Technik dazu behandelt die nächste Lektion.'),

    H2('grundregeln', 'Grundregeln beim Sägen'),
    KF(
      'Nie allein arbeiten – eine zweite Kraft sichert und beobachtet.',
      'Rückweichplatz festlegen, bevor der Schnitt beginnt.',
      'Gefahrenbereich absperren und freihalten – Umstehende und Verkehr.',
      'Vor dem Start: Kette frei, Kettenbremse eingelegt, sicherer Stand.',
      'Mit Vollgas sägen – zu geringe Drehzahl erhöht die Rückschlaggefahr.',
      'Nicht drücken – eine scharfe Kette zieht sich selbst ins Holz.',
      'Bei Ermüdung Pause machen; die meisten Unfälle passieren nach langer Arbeit.',
      'Beim Tragen Motor abstellen oder Kettenbremse einlegen, Schiene nach hinten.'),
    CO('tip', 'Die Regel für müde Sägenführer', 'Nach etwa zwei Stunden konzentrierter Sägearbeit lässt die Aufmerksamkeit messbar nach. Bei Unwetterlagen wird oft deutlich länger gearbeitet. Deshalb: Ablösung einplanen, Sägenführer rotieren lassen und Pausen konsequent einhalten. Das ist Führungsaufgabe, nicht Sache des Einzelnen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Motorkettensäge darf nur von ausgebildeten Kräften bedient werden.',
      'Sicherheitseinrichtungen vor jedem Einsatz prüfen; defekte Säge nicht benutzen.',
      'Vollständige Schnittschutzausrüstung – Hose, Helm mit Gesichts- und Gehörschutz, Stiefel, Handschuhe.',
      'Eine einmal erfasste Schnittschutzhose wird ersetzt.',
      '<b>Rückschlag</b> entsteht am oberen Quadranten der Schienenspitze.',
      'Immer beidhändig, mit Vollgas, nie über Schulterhöhe.',
      'Spannung im Holz vor jedem Schnitt beurteilen.',
      'Nie allein arbeiten; Rückweichplatz festlegen; bei Ermüdung Pause.'),
  ],
},

/* ---------------------------------------------------------------- Y2 ---- */
{
  id: 'y2', title: 'Weitere Kraftgeräte', duration: 16,
  blocks: [
    P('Neben der Motorkettensäge führt die Feuerwehr eine Reihe weiterer Kraftgeräte mit: Trennschleifer, Säbelsäge, Bohrhammer, Hebekissen. Sie alle nehmen schwere Arbeit ab, und sie alle haben ihre eigenen, spezifischen Gefahren.'),

    H2('geraete', 'Die wichtigsten Kraftgeräte'),
    TBL(['Gerät', 'Verwendung', 'Hauptgefahr', 'Schutz'],[
      ['Trennschleifer', 'Metall, Gitter, Bleche, Beton', 'Funkenflug, Scheibenbruch, Rückschlag', 'Gesichts-, Gehör-, Atemschutz, Brandschutz'],
      ['Säbel- und Rettungssäge', 'Bleche, Kunststoffe, Holz', 'Klemmen, Späne, Vibration', 'Augenschutz, feste Werkstückauflage'],
      ['Bohrhammer, Kombihammer', 'Beton, Mauerwerk', 'Staub, Verkanten, Vibration', 'Atemschutz, Augenschutz, sicherer Stand'],
      ['Hebekissen', 'schwere Lasten anheben', 'Wegrutschen, Überlast, Kippen', 'heben und unterbauen im Wechsel'],
      ['Hydraulischer Rettungssatz', 'Fahrzeugöffnung, technische Rettung', 'wegschnellende Bauteile, Splitter', 'Ankündigung, Kantenschutz, Abstand'],
      ['Winde und Greifzug', 'Ziehen und Bergen', 'reißendes Seil, Peitscheneffekt', 'Gefahrenbereich absperren'],
      ['Rettungsspreizer, Türöffner', 'Türöffnung', 'plötzliches Nachgeben', 'sicherer Stand, Ankündigung'],
    ]),

    H2('trennschleifer', 'Der Trennschleifer'),
    P('Der Trennschleifer trennt Metall, Gitter und Bleche schnell und zuverlässig. Er erzeugt dabei allerdings einen heißen Funkenstrahl, der mehrere Meter weit reicht und alles entzünden kann, was brennbar ist.'),
    CO('danger', 'Funkenflug und Explosionsgefahr', 'Der Trennschleifer wird <b>niemals</b> in einer explosionsgefährdeten Atmosphäre eingesetzt – bei Gasaustritt, an Tanks, in Räumen mit Lösemitteldämpfen oder in staubbelasteten Bereichen. Die Funken können Brände und Explosionen auslösen. Im Zweifel wird gemessen oder ein funkenarmes Verfahren gewählt.'),
    KF(
      'Passende Trennscheibe für das Material wählen – Metall, Stein, Universal.',
      'Scheibe vor Gebrauch auf Risse und Beschädigungen prüfen.',
      'Ablaufdatum der Scheibe beachten – Trennscheiben altern.',
      'Umgebung schützen: Brandwache, Löschmittel bereit, Brennbares abdecken.',
      'Werkstück sicher auflegen und gegen Bewegung sichern.',
      'Nicht verkanten – dabei kann die Scheibe brechen.',
      'Auslaufen der Scheibe abwarten, bevor das Gerät abgelegt wird.',
      'Gehör-, Augen- und Atemschutz tragen; bei Metallstaub zusätzlich Schutzkleidung.'),

    H2('hebekissen', 'Hebekissen'),
    P('Hebekissen heben schwere Lasten auch in engen Spalten. Ihre Gefahr liegt darin, dass die Last während des Hebens seitlich ausweichen oder kippen kann – und dass die Versuchung groß ist, unter eine nur schwebende Last zu greifen.'),
    KF(
      '<b>Heben und Unterbauen im Wechsel</b> – niemals unter eine schwebende Last greifen.',
      'Kissen mittig und auf tragfähiger, ebener Fläche ansetzen.',
      'Kantenschutz verwenden – spitze Kanten zerstören das Kissen.',
      'Zulässige Stapelhöhe nicht überschreiten; oberes Kissen zuerst füllen.',
      'Bewegungsrichtung der Last vorher überlegen und sichern.',
      'Beim Absenken genauso vorsichtig arbeiten wie beim Heben.',
      'Kissen nach Gebrauch reinigen und auf Beschädigungen prüfen.'),

    H2('grundsaetze', 'Grundsätze für alle Kraftgeräte'),
    STEPS(
      'Nur eingewiesene oder ausgebildete Kräfte bedienen das Gerät.',
      'Vor Gebrauch prüfen: Zustand, Betriebsstoffe, Sicherheitseinrichtungen, Zubehör.',
      'Richtiges Gerät und richtiges Einsatzmittel für die Aufgabe wählen.',
      'Vollständige persönliche Schutzausrüstung anlegen.',
      'Umstehende schützen und Gefahrenbereich absperren.',
      'Sicheren Stand und feste Werkstückauflage sicherstellen.',
      'Arbeitsschritte ankündigen, damit alle vorbereitet sind.',
      'Nach Gebrauch reinigen, prüfen, auffüllen und Mängel melden.'),
    CO('danger', 'Abgase in geschlossenen Räumen', 'Alle motorbetriebenen Geräte – Motorsäge, Trennschleifer, Aggregat, Pumpe, Lüfter – erzeugen Kohlenstoffmonoxid. In Kellern, Tiefgaragen, Zelten und geschlossenen Räumen entstehen binnen Minuten tödliche Konzentrationen, ohne dass es jemand bemerkt. Diese Geräte gehören ins Freie oder brauchen eine Abgasführung.'),

    H2('laerm', 'Lärm und Vibration'),
    P('Kraftgeräte erzeugen Lärmpegel, die dauerhaft das Gehör schädigen, und Vibrationen, die bei häufiger Anwendung zu bleibenden Durchblutungsstörungen der Hände führen können. Beides wirkt schleichend und wird deshalb unterschätzt.'),
    KF(
      'Gehörschutz bei allen motorbetriebenen Geräten – auch bei kurzer Anwendung.',
      'Antivibrationssysteme nutzen und Griffe nicht fester als nötig umfassen.',
      'Arbeitszeiten begrenzen und Sägenführer rotieren lassen.',
      'Handschuhe schützen zusätzlich vor Kälte und Vibration.',
      'Bei Taubheitsgefühl oder weißen Fingern nach der Arbeit: ärztlich abklären lassen.',
      'Bei Ausbildung und Übung dieselben Schutzmaßnahmen wie im Einsatz.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Kraftgeräte nur von eingewiesenen oder ausgebildeten Kräften bedienen.',
      'Trennschleifer <b>niemals</b> in explosionsgefährdeter Atmosphäre.',
      'Trennscheiben prüfen, richtig wählen, nicht verkanten.',
      'Hebekissen: heben und unterbauen im Wechsel, Kraftschluss nie verlieren.',
      'Vor Gebrauch prüfen, PSA anlegen, Umstehende schützen, Stand sichern.',
      'Motorbetriebene Geräte niemals in geschlossenen Räumen betreiben.',
      'Gehörschutz und Vibrationsschutz konsequent nutzen.'),
  ],
},

/* ---------------------------------------------------------------- Y3 ---- */
{
  id: 'y3', title: 'Schnitttechnik & Arbeiten unter Spannung', duration: 18,
  blocks: [
    P('Die Kettensäge zu bedienen ist das eine. Zu wissen, wo geschnitten werden darf und was danach passiert, ist das andere – und deutlich schwieriger. Diese Lektion behandelt die Schnitttechnik und die Beurteilung von Spannung, die häufigste Ursache schwerer Sägenunfälle.'),

    H2('grund', 'Sicher schneiden'),
    KF(
      '<b>Sicherer Stand:</b> fester Untergrund, Beine leicht gespreizt, nicht auf Leitern oder losem Material.',
      '<b>Beide Hände</b> am Gerät, Daumen umschließen die Griffe.',
      '<b>Krallenanschlag ansetzen</b> und die Säge um diesen Punkt schwenken.',
      '<b>Mit Vollgas sägen</b> – geringe Drehzahl erhöht die Rückschlaggefahr.',
      '<b>Nicht drücken</b> – eine scharfe Kette zieht sich selbst ins Holz.',
      '<b>Nie über Schulterhöhe</b> und nie mit der Schienenspitze.',
      '<b>Rückweichplatz</b> vorher festlegen und freihalten.',
      '<b>Körper aus der Schnittebene</b> halten – nicht hinter der Säge stehen.'),
    CO('warn', 'Der Rückweichplatz', 'Vor jedem Schnitt an einem Baum oder Stamm wird festgelegt, wohin man ausweicht, wenn sich etwas unerwartet bewegt. Dieser Weg wird freigeräumt – Äste, Werkzeug, Schläuche. Wer beim Zurückweichen stolpert, hat den gefährlichsten Moment nicht überstanden.'),

    H2('spannung', 'Druck- und Zugseite'),
    DEF('Druck- und Zugseite', 'Ein liegender, aufliegender oder gebogener Stamm ist auf einer Seite gestaucht – das ist die <b>Druckseite</b> – und auf der gegenüberliegenden gedehnt – die <b>Zugseite</b>. Wird auf der Zugseite zuerst durchgeschnitten, reißt der Stamm auf und schnellt auseinander. Wird auf der Druckseite zuerst durchgeschnitten, schließt sich der Schnitt und die Säge klemmt fest.'),
    STEPS(
      'Lage beurteilen: Wo liegt der Stamm auf, wo hängt er frei?',
      'Druck- und Zugseite bestimmen.',
      'Auf der <b>Druckseite</b> einen Entlastungsschnitt setzen – etwa ein Drittel des Durchmessers.',
      'Von der <b>Zugseite</b> aus den Trennschnitt führen, bis der Stamm sich löst.',
      'Beim Durchtrennen die Bewegung des Stammes beobachten.',
      'Bei unklarer Spannung mechanisch entlasten – Keile, Winde, Abstützung.',
      'Im Zweifel nicht schneiden, sondern Rücksprache halten.'),
    CO('danger', 'Falsch eingeschätzte Spannung tötet', 'Ein Stamm, der unter erheblicher Spannung durchtrennt wird, kann mit großer Wucht auseinanderschnellen oder die Säge nach oben schlagen lassen. Bei verkeilten Windwurfbäumen sind die Verhältnisse häufig nicht eindeutig zu erkennen. Dann wird die Spannung mechanisch entlastet – mit Keilen, mit der Seilwinde oder durch Abstützen – und nicht auf Verdacht geschnitten.'),

    H2('faelle', 'Typische Situationen'),
    TBL(['Situation', 'Spannung', 'Vorgehen'],[
      ['Stamm liegt frei auf zwei Auflagen', 'Druck oben, Zug unten', 'oben Entlastungsschnitt, von unten trennen'],
      ['Stamm liegt einseitig auf, Ende hängt frei', 'Druck unten, Zug oben', 'unten Entlastungsschnitt, von oben trennen'],
      ['Baum verkeilt in anderem Baum', 'unklar, oft mehrfach', 'nicht schneiden – mechanisch entlasten, Fachkraft'],
      ['Wurzelteller aufgestellt', 'gespannt, kann zurückschlagen', 'Gefahrenbereich sperren, Fachkraft'],
      ['Ast unter Biegespannung', 'Zug oben, Druck unten', 'schrittweise entlasten, nicht am Ende beginnen'],
      ['Stamm in Leitung hängend', '–', 'nicht schneiden, Netzbetreiber, Freischaltung abwarten'],
    ]),
    CO('warn', 'Wurzelteller und Windwurf', 'Ein aufgestellter Wurzelteller steht unter erheblicher Spannung und kann beim Durchtrennen des Stammes zurückkippen – mit tödlicher Wucht und in einem Bereich, in dem man ihn nicht erwartet. Der Bereich hinter dem Wurzelteller wird abgesperrt, und die Bearbeitung erfolgt nur durch entsprechend ausgebildete Kräfte.'),

    H2('regeln', 'Grundregeln'),
    KF(
      'Nie allein arbeiten – eine zweite Person sichert und beobachtet.',
      'Gefahrenbereich absperren: Umstehende, Verkehr, andere Einsatzkräfte.',
      'Rückweichplatz festlegen und freiräumen.',
      'Verständigung vor dem Schnitt: Wer steht wo, wer beobachtet was?',
      'Bei Ermüdung Pause – die meisten Unfälle passieren müde.',
      'Bei Dunkelheit ausreichend ausleuchten.',
      'Bei Regen, Sturm und Glätte besonders zurückhaltend arbeiten.',
      'Im Zweifel abbrechen und Fachkräfte anfordern.'),

    H2('grenzen', 'Wo die Grenze liegt'),
    P('Nicht jede Baumarbeit ist eine Feuerwehraufgabe. Fällarbeiten an stehenden Bäumen, das Bearbeiten von Wurzeltellern, Arbeiten in der Krone und Arbeiten an Bäumen in Leitungen erfordern eine über den Feuerwehrlehrgang hinausgehende Qualifikation.'),
    KF(
      'Die Feuerwehr beseitigt akute Gefahren – sie führt keine Forstarbeiten durch.',
      'Fällarbeiten an stehenden Bäumen sind Sache entsprechend ausgebildeter Fachkräfte.',
      'Arbeiten in der Krone erfordern Seilklettertechnik.',
      'Bei Bäumen in Leitungen entscheidet der Netzbetreiber.',
      'Bei unklarer Spannung Fachfirma oder THW hinzuziehen.',
      'Nach der Gefahrenbeseitigung Übergabe an Eigentümer oder Fachbetrieb.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Sicherer Stand, beide Hände, Krallenanschlag, Vollgas, nicht drücken.',
      'Nie über Schulterhöhe, nie mit der Schienenspitze, nie einhändig.',
      'Rückweichplatz vor dem Schnitt festlegen und freiräumen.',
      '<b>Entlastungsschnitt auf der Druckseite</b>, Trennschnitt von der Zugseite.',
      'Bei unklarer Spannung mechanisch entlasten statt schneiden.',
      'Wurzelteller und verkeilte Bäume nur durch entsprechend ausgebildete Kräfte.',
      'Nie allein arbeiten, Gefahrenbereich absperren, bei Ermüdung Pause.',
      'Die Feuerwehr beseitigt Gefahren – sie führt keine Forstarbeiten durch.'),
  ],
},

/* ---------------------------------------------------------------- Y4 ---- */
{
  id: 'y4', title: 'Wartung, Betriebsstoffe & Einsatzbereitschaft', duration: 16,
  blocks: [
    P('Eine Motorsäge, die nicht anspringt, ist bei einem Sturmeinsatz genauso wertlos wie eine leere Wasserflasche im Brandeinsatz. Und eine stumpfe Kette ist nicht nur langsam, sondern gefährlich. Wartung ist bei diesem Gerät kein Komfortthema, sondern Sicherheitsthema.'),

    H2('pflege', 'Vor und nach dem Einsatz'),
    KF(
      '<b>Kette scharf und richtig gespannt</b> – Sicherheit und Leistung zugleich.',
      '<b>Kettenschmierung prüfen</b>: Ölstand und Funktion der Ölpumpe.',
      '<b>Luftfilter reinigen</b> – ein verstopfter Filter kostet Leistung und Startverhalten.',
      '<b>Kettenbremse und Gashebelsperre</b> auf Funktion prüfen.',
      '<b>Schiene prüfen</b>: Grat abziehen, Nut reinigen, gleichmäßiger Verschleiß.',
      '<b>Kettenrad und Kettenfangbolzen</b> kontrollieren.',
      '<b>Kraftstoff frisch</b> – Zweitaktgemisch altert innerhalb weniger Wochen.',
      '<b>Startversuch</b> nach jedem Einsatz und in festen Intervallen.'),
    CO('danger', 'Eine stumpfe Kette ist gefährlich', 'Eine stumpfe oder falsch gespannte Kette schneidet nicht mehr von selbst. Der Bediener beginnt zu drücken, die Säge verkantet, springt und neigt stärker zum Rückschlag. Zugleich überhitzt Kette und Schiene. Der Satz „scharfe Kette gleich sichere Arbeit" ist keine Redensart, sondern beschreibt einen unmittelbaren Zusammenhang.'),

    H2('spannung', 'Kette richtig spannen'),
    STEPS(
      'Motor abstellen und Kette abkühlen lassen – warme Ketten dehnen sich.',
      'Kettenbremse lösen.',
      'Schutzhandschuhe anziehen – die Schneidezähne sind scharf.',
      'Spannschraube so einstellen, dass die Kette an der Schienenunterseite anliegt.',
      'Prüfen: Die Kette muss sich von Hand noch um die Schiene ziehen lassen.',
      'Muttern der Schienenbefestigung festziehen, dabei Schienenspitze anheben.',
      'Spannung nach kurzer Arbeitszeit erneut prüfen – neue Ketten längen sich.'),

    H2('betriebsstoffe', 'Betriebsstoffe'),
    TBL(['Stoff', 'Hinweise'],[
      ['Zweitaktgemisch', 'im vorgeschriebenen Mischungsverhältnis, frisch; altert innerhalb weniger Wochen'],
      ['Sonderkraftstoff (Alkylatbenzin)', 'deutlich schadstoffärmer und lagerfähiger – für Feuerwehren empfehlenswert'],
      ['Kettenhaftöl', 'biologisch abbaubar bevorzugen, besonders im Wald und am Wasser'],
      ['Reservekanister', 'zugelassene Behälter, gesichert transportieren, gekennzeichnet'],
    ]),
    CO('tip', 'Sonderkraftstoff lohnt sich', 'Alkylatbenzin ist teurer, aber deutlich schadstoffärmer im Abgas und über Jahre lagerfähig. Für Feuerwehren, die die Säge selten, dafür aber zuverlässig brauchen, ist das ein doppelter Gewinn: bessere Luft für den Sägenführer und ein Gerät, das nach Monaten Standzeit trotzdem anspringt.'),

    H2('betrieb', 'Betrieb und Abgase'),
    KF(
      'Motor nie in geschlossenen Räumen ohne Abgasführung betreiben – Kohlenstoffmonoxid.',
      'Standfest starten: Kette frei, Kettenbremse eingelegt, Säge am Boden oder zwischen den Beinen fixiert.',
      'Nicht aus der Hand starten („Fallstart") – hohe Verletzungsgefahr.',
      'Betriebsstoffe nur bei abgestelltem, abgekühltem Motor nachfüllen.',
      'Beim Betanken nicht rauchen und Zündquellen fernhalten.',
      'Verschütteten Kraftstoff aufnehmen, bevor gestartet wird.',
      'Beim Transport Kettenschutz aufsetzen und Säge gesichert verlasten.'),

    H2('pruefung', 'Prüfung und Dokumentation'),
    P('Die Motorkettensäge unterliegt wiederkehrenden Prüfungen. Sie werden vom Gerätewart oder einer befähigten Person durchgeführt und dokumentiert. Für die Einsatzkraft gilt zusätzlich die Sichtprüfung vor jedem Gebrauch.'),
    KF(
      'Sichtprüfung vor jedem Einsatz durch den Bediener.',
      'Wiederkehrende Prüfung nach Herstellervorgabe und Regelwerk.',
      'Prüfergebnisse dokumentieren.',
      'Mängel sofort melden und Gerät kennzeichnen.',
      'Verschleißteile rechtzeitig ersetzen: Kette, Schiene, Kettenrad, Filter, Zündkerze.',
      'Ersatzketten und -schienen vorhalten – im Einsatz ist keine Zeit zum Schärfen.'),
    CO('tip', 'Bereitschaft ist Pflege', 'Ein gepflegtes, geprüftes Gerät startet zuverlässig und arbeitet sicher. Nach dem Einsatz reinigen, prüfen, auffüllen und schärfen – dann ist die Säge wieder einsatzbereit. Wer das auf „später" verschiebt, findet beim nächsten Sturm ein Gerät vor, das nicht anspringt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Scharfe, richtig gespannte Kette ist Sicherheit, nicht Komfort.',
      'Kettenschmierung, Luftfilter, Kettenbremse und Schiene regelmäßig prüfen.',
      'Kette nur bei abgekühltem Motor und mit Handschuhen spannen.',
      'Zweitaktgemisch altert – Sonderkraftstoff ist die bessere Wahl.',
      'Biologisch abbaubares Kettenhaftöl im Wald und am Wasser.',
      'Nie in geschlossenen Räumen betreiben; nicht aus der Hand starten.',
      'Betanken nur bei abgestelltem, abgekühltem Motor.',
      'Sichtprüfung vor jedem Einsatz, wiederkehrende Prüfung dokumentieren.'),
  ],
},

/* ---------------------------------------------------------------- Y5 ---- */
{
  id: 'y5', title: 'Trennschleifer, Säbelsäge & Rettungsgeräte', duration: 16,
  blocks: [
    P('Wenn Metall getrennt werden muss – ein Gitter vor einem Fenster, eine verschlossene Tür, ein Fahrzeugteil –, kommen andere Geräte zum Einsatz als die Kettensäge. Sie haben eigene Stärken und eigene Gefahren, und die Wahl des richtigen Geräts entscheidet oft über Erfolg und Sicherheit.'),

    H2('trenn', 'Der Trennschleifer'),
    P('Der Trennschleifer trennt Metall, Gitter, Bleche und mit passender Scheibe auch Stein und Beton. Er ist schnell und kraftvoll – und erzeugt dabei einen heißen Funkenstrahl, der mehrere Meter weit reicht.'),
    KF(
      'Passende Scheibe wählen: Metall, Stein oder Universal – niemals zweckentfremden.',
      'Scheibe vor Gebrauch auf Risse, Absplitterungen und Ablaufdatum prüfen.',
      'Werkstück gegen Bewegung sichern und fest auflegen.',
      'Nicht verkanten – dabei kann die Scheibe brechen und wegfliegen.',
      'Schutzhaube richtig einstellen, sodass Funken vom Bediener weggelenkt werden.',
      'Beim Trennen von Gittern und Stäben an die Spannung im Material denken.',
      'Auslaufen der Scheibe abwarten, bevor das Gerät abgelegt wird.',
      'Gesichts-, Gehör- und Atemschutz tragen.'),
    CO('danger', 'Funkenflug und Explosionsgefahr', 'Der Trennschleifer wird niemals in explosionsgefährdeter Atmosphäre eingesetzt: bei Gasaustritt, in der Nähe von Kraftstoffen, an Tanks, in staubbelasteten Bereichen und in Räumen mit Lösemitteldämpfen. Zusätzlich gilt bei jedem Einsatz: Brennbares abdecken oder entfernen, Brandschutz bereitstellen und die Umgebung nach dem Trennen auf Glimmbrände kontrollieren.'),
    CO('warn', 'An Fahrzeugen zurückhaltend einsetzen', 'Am Unfallfahrzeug ist der Trennschleifer wegen Funkenflug, Kraftstoff und Batterie problematisch. Hydraulisches Rettungsgerät und Säbelsäge sind dort in aller Regel die bessere Wahl. Wo er dennoch nötig ist, wird der Patient konsequent abgeschirmt und Brandschutz sichergestellt.'),

    H2('saebelsaege', 'Säbel- und Rettungssäge'),
    P('Die Säbelsäge arbeitet mit einem hin- und hergehenden Sägeblatt. Sie erzeugt kaum Funken, arbeitet vergleichsweise leise und lässt sich präzise führen – dafür ist sie langsamer als der Trennschleifer.'),
    KF(
      'Passendes Sägeblatt für das Material wählen und rechtzeitig wechseln.',
      'Werkstück fest auflegen – ein loses Blech vibriert stark.',
      'Sägeblattlänge beachten: Was dahinter liegt, wird mitgeschnitten.',
      'Bei Arbeiten am Fahrzeug an Leitungen, Tanks und Airbags denken.',
      'Augenschutz gegen Späne, Gehörschutz bei längerer Anwendung.',
      'Vibrationsbelastung beachten und Arbeit aufteilen.',
      'Akkugeräte: Ersatzakkus mitführen.'),

    H2('weitere', 'Weitere Geräte im Vergleich'),
    TBL(['Gerät', 'Stärke', 'Grenze', 'Typische Anwendung'],[
      ['Trennschleifer', 'schnell, kraftvoll, trennt fast alles', 'Funkenflug, Scheibenbruch, laut', 'Gitter, Bleche, Stahl, Beton'],
      ['Säbelsäge', 'funkenarm, präzise, leise', 'langsamer, Blattverschleiß', 'Fahrzeugbleche, Kunststoff, Holz'],
      ['Hydraulische Schere', 'sehr kraftvoll, funkenfrei', 'schwer, Aggregat nötig', 'Fahrzeugholme, dicke Profile'],
      ['Bohrhammer', 'Beton und Mauerwerk', 'Staub, Vibration', 'Durchbrüche, Befestigungen'],
      ['Rettungsspreizer', 'öffnet Türen und Spalten', 'Platzbedarf', 'Türöffnung, Fahrzeugöffnung'],
      ['Türöffnungswerkzeug', 'schnell, schonend, leise', 'nicht bei jeder Tür', 'Wohnungstüröffnung'],
      ['Bolzenschneider', 'einfach, funkenfrei, leise', 'begrenzte Materialstärke', 'Ketten, Schlösser, dünne Stäbe'],
    ]),
    CO('tip', 'Das leiseste geeignete Werkzeug wählen', 'Bei einer Türöffnung für eine hilflose Person ist ein Türöffnungswerkzeug fast immer besser als der Trennschleifer: schneller, leiser, schonender für die Tür und ohne Funken. Die Faustregel lautet: das leiseste und schonendste Werkzeug, das die Aufgabe sicher erfüllt.'),

    H2('grundsatz', 'Für alle Geräte'),
    STEPS(
      'Nur eingewiesene Kräfte bedienen das Gerät.',
      'Vollständige persönliche Schutzausrüstung anlegen.',
      'Gerät und Einsatzmittel vor Gebrauch prüfen.',
      'Aufgabe und Werkzeug zueinander passend wählen.',
      'Umstehende und Patienten schützen, Gefahrenbereich absperren.',
      'Sicheren Stand und feste Werkstückauflage sicherstellen.',
      'Bei Funkenflug Brandschutz bereitstellen und danach kontrollieren.',
      'Nach Gebrauch reinigen, prüfen und Mängel melden.'),
    CO('tip', 'Werkzeug ist Verantwortung', 'Kraftgeräte nehmen schwere Arbeit ab – und verzeihen keine Nachlässigkeit. Ausbildung, Konzentration und Schutzausrüstung sind bei ihnen kein Zusatz, sondern Voraussetzung. Wer sich an einem Gerät unsicher fühlt, sagt das und lässt jemand anderen arbeiten. Das ist Professionalität, nicht Schwäche.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Trennschleifer: passende Scheibe, prüfen, nicht verkanten, Auslaufen abwarten.',
      'Niemals in explosionsgefährdeter Atmosphäre trennen.',
      'Am Unfallfahrzeug sind Säbelsäge und hydraulisches Gerät meist besser.',
      'Säbelsäge ist funkenarm und präzise, aber langsamer.',
      'Sägeblattlänge beachten – was dahinterliegt, wird mitgeschnitten.',
      'Das leiseste und schonendste geeignete Werkzeug wählen.',
      'Bei Funkenflug Brandschutz bereitstellen und danach kontrollieren.',
      'Nur eingewiesene Kräfte, vollständige PSA, Umstehendenschutz.'),
  ],
},

];
