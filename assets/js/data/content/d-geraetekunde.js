/* =========================================================================
   MODUL D — Persönliche Schutzausrüstung & Gerätekunde
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls D.

   Fachliche Grundlage: FwDV 1, FwDV 10 (tragbare Leitern), DGUV
   Vorschrift 49 und zugehörige Regeln, HuPF, DIN EN 443/469/659,
   DIN 14920 ff., DGUV Vorschrift 3. Maße und Fristen sind Richtwerte –
   maßgeblich sind Herstellerangaben und die Vorgaben deines Trägers.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_D = [

/* ---------------------------------------------------------------- D1 ---- */
{
  id: 'd1', title: 'Persönliche Schutzausrüstung (PSA)', duration: 22,
  blocks: [
    P('Die persönliche Schutzausrüstung ist das Einzige, was zwischen einer Einsatzkraft und der Einsatzstelle steht. Sie ist keine Uniform und kein Erkennungszeichen, sondern ein technisches Schutzsystem, das nur dann funktioniert, wenn es vollständig, richtig getragen und in Ordnung ist. Diese Lektion erklärt jedes Teil und den Grund für seine Existenz.'),

    H2('psa', 'Schutz von Kopf bis Fuß'),
    P('Die PSA schützt gegen Hitze und Flammen, gegen mechanische Einwirkungen wie Stöße, Schnitte und Durchtritte, gegen Nässe und Kälte, gegen Kontamination und gegen Übersehenwerden im Verkehr. Jedes Teil hat eine eigene Norm und einen eigenen Schutzzweck.'),
    TBL(['Teil', 'Norm (Beispiel)', 'Schützt vor'],[
      ['Feuerwehrhelm', 'DIN EN 443', 'Stoß, Durchdringung, Hitze, herabfallende Teile; mit Visier und Nackenschutz'],
      ['Feuerwehrschutzjacke und -hose', 'HuPF bzw. DIN EN 469', 'Flammen, Hitze, Nässe; mit Reflexstreifen'],
      ['Feuerwehrschutzhandschuhe', 'DIN EN 659', 'Hitze, Schnitt, Durchstich, Nässe'],
      ['Feuerwehrstiefel', 'DIN EN 15090', 'Durchtritt, Stoß, Nässe, Hitze; mit Zehenschutzkappe'],
      ['Flammschutzhaube', '–', 'Restwärme an Kopf, Hals und Ohren'],
      ['Feuerwehr-Haltegurt mit Beil', 'DIN 14927', 'Halten und Sichern, Werkzeug'],
      ['Warnkleidung', 'DIN EN ISO 20471', 'Übersehenwerden im Straßenverkehr'],
    ]),
    CO('danger', 'Keine PSA – kein Einsatz', 'Wer nicht vollständig geschützt ist, gefährdet sich selbst und blockiert seine Einheit, sobald etwas passiert. Das gilt auch für vermeintliche Kleinigkeiten: eine offene Jacke, fehlende Handschuhe oder ein nicht verschlossener Kinnriemen. Die PSA schützt nur als System.'),

    H2('unterkleidung', 'Was darunter getragen wird'),
    P('Ein oft übersehener Punkt: Unter der Schutzkleidung gehört <b>Baumwolle</b> oder ein anderes nicht schmelzendes Material auf die Haut. Kunstfasern wie Polyester schmelzen bei Hitzeeinwirkung und verkleben mit der Haut – die dadurch entstehenden Verletzungen sind erheblich schwerer als eine reine Verbrennung.'),
    KF(
      'Baumwolle oder Funktionsunterwäsche aus flammhemmendem Material tragen.',
      'Keine Kunstfasershirts, keine Fleecepullover unter der Einsatzjacke.',
      'Keine Ringe, Ketten oder Uhren – sie leiten Wärme und können hängen bleiben.',
      'Lange Haare zusammenbinden und unter Haube und Helm verstauen.',
      'Bart im Dichtbereich der Atemschutzmaske ausgeschlossen.'),

    H2('kennzeichnung', 'Funktionskennzeichnung'),
    P('An einer Einsatzstelle tragen alle dieselbe Schutzkleidung. Damit trotzdem erkennbar bleibt, wer führt und wer eine Sonderaufgabe hat, werden Helmkennzeichnungen und <b>Kennzeichnungswesten</b> verwendet – für Einsatzleiter, Abschnittsleiter, Gruppenführer, Atemschutzüberwachung, Sicherheitstrupp und Fachberater. Farben und Aufschriften sind landes- oder kreisweise geregelt.'),

    H2('zusatz', 'Zusätzliche Schutzausrüstung'),
    P('Über die Grundausstattung hinaus gibt es Ausrüstung für bestimmte Tätigkeiten. Sie wird nur getragen, wenn die Tätigkeit sie erfordert – und dann vollständig.'),
    TBL(['Ausrüstung', 'Wofür'],[
      ['Umluftunabhängiger Atemschutz', 'Rauch, Atemgifte, Sauerstoffmangel (Modul F)'],
      ['Schnittschutzausrüstung', 'Arbeiten mit der Motorkettensäge (Modul Y)'],
      ['Kontaminationsschutz, Chemikalienschutzanzug', 'ABC-Einsätze (Modul I)'],
      ['Auffanggurt und Verbindungsmittel', 'Absturzsicherung (Modul K)'],
      ['Rettungsweste, Watgurt', 'Arbeiten am und im Wasser (Modul X)'],
      ['Gehör-, Augen- und Gesichtsschutz', 'Trennschleifer, Rettungsgeräte, Lärm'],
      ['Wärmeschutzkleidung', 'Arbeiten in extremer Strahlungswärme'],
    ]),
    CO('warn', 'Der Haltegurt ist keine Absturzsicherung', 'Der Feuerwehr-Haltegurt dient zum <b>Halten</b> und <b>Sichern</b> an einem Standplatz sowie zum Selbstretten mit der Feuerwehrleine. Er ist ausdrücklich <b>nicht</b> dafür ausgelegt, einen Sturz aufzufangen. Wo Absturzgefahr besteht, ist ein Auffanggurt mit geeignetem Verbindungsmittel erforderlich – siehe <b>Modul K</b>.'),

    H2('pflege', 'Pflege und Grenzen der Schutzwirkung'),
    P('Schutzkleidung verliert ihre Wirkung durch Verschmutzung, Beschädigung und Alterung. Verschmutzte Kleidung schützt schlechter vor Hitze, und eingelagerte Brandrückstände sind selbst ein Gesundheitsrisiko.'),
    KF(
      'Nach kontaminierenden Einsätzen zeitnah reinigen lassen – nicht privat waschen.',
      'Beschädigungen, Risse, Schmelzstellen und defekte Reflexstreifen melden.',
      'Nasse Kleidung schützt schlechter – zügig wechseln oder trocknen.',
      'Helm nach starker Stoßbelastung aussondern, auch ohne sichtbaren Schaden.',
      'Ablaufdaten und Prüffristen der Ausrüstung beachten.',
      'Zweitgarnitur anstreben, damit nach einem Einsatz Einsatzbereitschaft bleibt.'),
    CO('danger', 'Schutzkleidung ist keine Feuerfestigkeit', 'Die PSA verschafft Zeit – sie macht nicht unverwundbar. Bei einem Flashover reicht sie nicht aus, und bei längerer Strahlungsbelastung erwärmt sie sich, bis die Wärme durchkommt. Wer sich auf sie verlässt statt auf Abstand und Taktik, hat ihren Zweck missverstanden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'PSA ist ein Schutzsystem – vollständig oder wirkungslos.',
      'Helm EN 443, Schutzkleidung HuPF/EN 469, Handschuhe EN 659, Stiefel EN 15090.',
      'Unter der Kleidung Baumwolle – Kunstfasern schmelzen auf der Haut.',
      'Kennzeichnungswesten machen Führung und Sonderfunktionen erkennbar.',
      'Der <b>Haltegurt</b> ist keine Absturzsicherung.',
      'Verschmutzte und nasse Kleidung schützt schlechter und ist gesundheitsschädlich.',
      'PSA verschafft Zeit, macht aber nicht unverwundbar.'),
  ],
},

/* ---------------------------------------------------------------- D2 ---- */
{
  id: 'd2', title: 'Schläuche, Kupplungen & Armaturen', duration: 24,
  blocks: [
    P('Zwischen Löschwasserentnahme und Strahlrohr liegt eine Kette aus Schläuchen und Armaturen. In <b>Modul E</b> geht es um ihren taktischen Einsatz – hier geht es um die Geräte selbst: Bauart, Größen, Bedienung und Pflege. Wer sie kennt, greift im Dunkeln zum richtigen Teil.'),

    H2('schlaeuche', 'Schlaucharten und Größen'),
    P('Feuerwehrschläuche werden nach Bauart in <b>Saugschläuche</b> und <b>Druckschläuche</b> unterschieden. Saugschläuche haben eine eingearbeitete Spirale und bleiben dadurch auch bei Unterdruck formstabil; Druckschläuche fallen im drucklosen Zustand flach zusammen und lassen sich rollen.'),
    TBL(['Typ', 'Innendurchmesser', 'Übliche Länge', 'Verwendung'],[
      ['Saugschlauch A', '110 mm', '1,6 m je Stück', 'Wasserentnahme aus offenem Gewässer'],
      ['Druckschlauch A', '110 mm', '5 m', 'Zubringer, selten'],
      ['Druckschlauch B', '75 mm', '5 m und 20 m', 'Zubringerleitung, B-Rohr'],
      ['Druckschlauch C', '42 oder 52 mm', '15 m und 30 m', 'Angriffsleitung zum Strahlrohr'],
      ['Druckschlauch D', '25 mm', '5 m und 15 m', 'Kleinlöschgeräte, Vegetationsbrand'],
    ]),
    CO('danger', 'Druckschläuche können nicht saugen', 'Ein Druckschlauch fällt bei Unterdruck sofort zusammen. Der Versuch, damit aus einem Gewässer anzusaugen, funktioniert nicht und kostet an einer Einsatzstelle wertvolle Minuten. Für die offene Wasserentnahme gibt es ausschließlich Saugschläuche.'),

    H2('kupplung', 'Die Storz-Kupplung'),
    DEF('Storz-Kupplung', 'Eine symmetrische Klauenkupplung ohne Innen- und Außenteil – zwei gleiche Kupplungen passen immer zusammen. Verbunden wird durch Zusammenstecken und eine Vierteldrehung. Diese Bauart ist der Grund, warum Schläuche unterschiedlicher Wehren und Hersteller ohne Adapter zusammenpassen.'),
    KF(
      'Kupplungsgrößen A, B, C und D entsprechen den Schlauchgrößen.',
      'Die <b>Nockenseite zeigt zur Pumpe</b> – wichtige Orientierungshilfe im Dunkeln.',
      'Dichtringe regelmäßig prüfen: spröde oder fehlende Ringe machen die Leitung undicht.',
      'Kupplungen nicht im Sand oder Schotter ablegen – Verschmutzung führt zu Undichtigkeit.',
      'Übergangsstücke verbinden unterschiedliche Größen, Blindkupplungen verschließen Abgänge.',
      'Beschädigte Klauen führen zum Aussondern des Schlauchs.'),

    H2('armaturen', 'Armaturen der Wasserführung'),
    P('Armaturen werden nach ihrer Aufgabe eingeteilt: Wasserentnahme, Wasserfortleitung und Wasserabgabe. Diese Einteilung hilft beim Lernen und ist eine klassische Prüfungsfrage.'),
    TBL(['Gruppe', 'Armatur', 'Aufgabe'],[
      ['Entnahme', 'Saugkorb', 'verhindert das Ansaugen von Feststoffen, hält Wasser beim Ansaugen zurück'],
      ['Entnahme', 'Standrohr', 'Entnahme aus dem Unterflurhydranten, zwei absperrbare B-Abgänge'],
      ['Entnahme', 'Sammelstück', 'führt zwei B-Leitungen zu einem A-Eingang der Pumpe zusammen'],
      ['Fortleitung', 'Verteiler', 'teilt eine B-Leitung auf zwei C- und einen B-Abgang auf'],
      ['Fortleitung', 'Übergangsstück', 'verbindet unterschiedliche Kupplungsgrößen'],
      ['Fortleitung', 'Druckbegrenzungsventil', 'schützt Schläuche und Kräfte vor Überdruck'],
      ['Abgabe', 'Strahlrohr', 'formt den Wasserstrahl'],
      ['Abgabe', 'Stützkrümmer', 'nimmt den Rückstoß am B-Rohr auf und lenkt die Leitung um'],
      ['Abgabe', 'Schaumrohr, Werfer, Hydroschild', 'Sonderformen der Wasser- und Schaumabgabe'],
    ]),
    CO('tip', 'Die drei Gruppen als Merkhilfe', 'Wasser <b>entnehmen</b>, Wasser <b>fortleiten</b>, Wasser <b>abgeben</b> – in dieser Reihenfolge läuft es auch im Einsatz. Wer eine Armatur nicht zuordnen kann, fragt sich: Wo im Wasserweg sitzt sie?'),

    H2('strahlrohre', 'Strahlrohre'),
    P('Am Ende der Leitung entscheidet das Strahlrohr, wie das Wasser wirkt. Zwei Bauarten sind verbreitet, und sie unterscheiden sich erheblich in Bedienung und Wirkung.'),
    TBL(['Bauart', 'Einstellmöglichkeiten', 'Stärken', 'Grenzen'],[
      ['Mehrzweckstrahlrohr', 'Vollstrahl, Sprühstrahl, mit oder ohne Mundstück', 'robust, einfach, große Wurfweite', 'Durchfluss nicht regelbar, grobe Tropfen'],
      ['Hohlstrahlrohr', 'stufenlos Durchfluss und Strahlbild, Mannschutzbrause', 'feine Tropfen, Rauchgaskühlung, dosierbar', 'empfindlicher, Bedienung muss sitzen'],
    ]),
    FIG('strahlrohr', 'Hohlstrahlrohr: regelbar zwischen Vollstrahl für Wurfweite und Sprühstrahl für Wärmeschutz.'),
    KF(
      '<b>Vollstrahl:</b> große Wurfweite, punktuelle Wirkung, geringe Verdampfung.',
      '<b>Sprühstrahl:</b> feine Tropfen, große Oberfläche, wirksame Rauchgaskühlung und Wärmeschutz.',
      '<b>Mannschutzbrause:</b> Wasserschirm, der den Trupp gegen Strahlungswärme abschirmt.',
      '<b>Durchflussregelung:</b> so viel Wasser wie nötig – weniger Wasserschaden und Umweltbelastung.',
      'Richtwerte bei 5 bar am Mehrzweckstrahlrohr: C-Rohr 100 oder 200 l/min, B-Rohr 400 oder 800 l/min.'),
    CO('warn', 'Das Rohr wird nicht losgelassen', 'Ein unter Druck stehendes, nicht gehaltenes Strahlrohr schlägt unkontrolliert um sich und verletzt schwer. Beim B-Rohr wird deshalb grundsätzlich mit Stützkrümmer und mindestens zu zweit gearbeitet. Vor dem Ablegen wird das Rohr geschlossen und die Leitung drucklos gemacht.'),

    H2('pflege', 'Nach dem Einsatz'),
    P('Schläuche und Armaturen sind Verbrauchsmaterial mit langer Lebensdauer – vorausgesetzt, sie werden gepflegt. Ein Großteil der Schäden entsteht nicht im Einsatz, sondern durch falsche Behandlung danach.'),
    STEPS(
      'Schläuche reinigen, bei Kontamination gesondert behandeln.',
      'Trocknen, bevor sie eingerollt und verlastet werden – nasse Schläuche schimmeln und verrotten.',
      'Auf Beschädigungen prüfen: Scheuerstellen, Risse, undichte Kupplungen.',
      'Beschädigte Schläuche kennzeichnen und der Prüfung zuführen.',
      'Armaturen spülen, beweglichen Teile prüfen, Dichtringe kontrollieren.',
      'Fahrzeug wieder vollständig beladen und Einsatzbereitschaft melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Saugschläuche sind formfest, Druckschläuche nicht – Letztere können nicht saugen.',
      'Größen: A 110, B 75, C 42/52, D 25 mm.',
      'Storz-Kupplungen sind symmetrisch; die Nockenseite zeigt zur Pumpe.',
      'Armaturen nach Entnahme, Fortleitung und Abgabe einteilen.',
      'Der Verteiler teilt B auf zwei C und einen B; jeder Abgang ist absperrbar.',
      'Hohlstrahlrohr regelt Durchfluss und Strahlbild stufenlos.',
      'B-Rohr nur mit Stützkrümmer und mindestens zu zweit.',
      'Schläuche trocken lagern, Schäden melden, Prüfung dokumentieren.'),
  ],
},

/* ---------------------------------------------------------------- D3 ---- */
{
  id: 'd3', title: 'Tragbare Leitern & Rettungsgeräte', duration: 22,
  blocks: [
    P('Nicht jede Feuerwehr hat eine Drehleiter, aber jede hat tragbare Leitern. Sie sind Angriffsweg, Rettungsweg und Arbeitsgerät zugleich – und sie sind eines der Geräte, bei denen Fehler in der Handhabung besonders schnell zu Unfällen führen. Die FwDV 10 regelt ihren Einsatz.'),

    H2('leitern', 'Die tragbaren Leitern'),
    TBL(['Leiter', 'Länge', 'Erreichbare Höhe', 'Merkmal'],[
      ['Steckleiter', '4 Teile à etwa 2,7 m', 'etwa 7,2 m – zweites Obergeschoss', 'aus Teilen zusammensteckbar, vielseitig'],
      ['Klappleiter', 'etwa 3,1 m', 'Innenräume, Dachböden', 'kompakt, schnell einsatzbereit'],
      ['Multifunktionsleiter', 'variabel', 'ähnlich Steckleiter', 'kombiniert mehrere Funktionen'],
      ['Dreiteilige Schiebleiter', 'bis etwa 14 m', 'etwa 12 m – drittes Obergeschoss', 'ausziehbar, mit Stützstangen, mehrere Kräfte nötig'],
      ['Hakenleiter', 'etwa 4,4 m', 'geschossweise', 'Spezialleiter zum Einhängen, nur mit Ausbildung'],
    ]),
    CO('info', 'Was „zweites Obergeschoss" bedeutet', 'Die Angaben beziehen sich auf übliche Geschosshöhen. Bei hohen Altbauten oder Gewerbebauten kann dieselbe Leiter deutlich weniger erreichen. Deshalb wird vor Ort beurteilt und nicht nach Tabelle – der Blick zur Fensterhöhe entscheidet.'),

    H2('anlegen', 'Leitern sicher in Stellung bringen'),
    STEPS(
      'Untergrund prüfen: tragfähig, eben, nicht rutschig, keine Kanaldeckel oder Schächte.',
      'Umgebung prüfen: Freileitungen, Vordächer, Fensterläden, Verkehr.',
      'Leiter in Stellung bringen und am Fuß sichern.',
      '<b>Anstellwinkel etwa 65 bis 75 Grad</b> einstellen.',
      'Leiter mindestens <b>1 Meter</b> über die Austrittsstelle hinausragen lassen.',
      'Fußsicherung durch eine Einsatzkraft, bis die Leiter anderweitig gesichert ist.',
      'Beim Besteigen Dreipunktkontakt halten und ruhig steigen.'),
    FIG('leiterwinkel', 'Richtiger Anstellwinkel einer tragbaren Leiter: 65 bis 75 Grad, mit mindestens 1 m Überstand.'),
    CO('tip', 'Winkel prüfen ohne Messgerät', 'Stell dich mit den Fußspitzen an den Leiterfuß und strecke die Arme waagerecht nach vorn. Erreichst du die Sprosse in Schulterhöhe bequem, stimmt der Winkel ungefähr. Zu steil angestellte Leitern kippen nach hinten, zu flache rutschen weg.'),
    CO('danger', 'Belastungsgrenzen beachten', 'Für jede Leiterart gilt eine zulässige Belastung – meist eine bestimmte Zahl von Personen je Leiterteil beziehungsweise gleichzeitig auf der Leiter. Diese Grenzen sind keine Empfehlung. Beim Retten über Leitern wird zusätzlich das Gewicht der geretteten Person eingerechnet.'),

    H2('einsatz', 'Wofür Leitern eingesetzt werden'),
    UL(
      '<b>Rettungsweg:</b> Rettung von Personen aus Obergeschossen, wenn der Treppenraum ausfällt.',
      '<b>Angriffsweg:</b> Zugang für den Trupp, wenn der reguläre Weg nicht nutzbar ist.',
      '<b>Arbeitsgerät:</b> Standplatz für Arbeiten in der Höhe.',
      '<b>Hilfsmittel:</b> als Behelfsbrücke, zur Absicherung von Schachtöffnungen oder als Auflage – jeweils nur, wenn die Konstruktion das zulässt.'),
    P('Die <b>Rettung über tragbare Leitern</b> ist anspruchsvoll und muss geübt sein. Sie belastet Retter und Gerettete stark und ist bei bewusstlosen Personen kaum durchführbar. Wo eine Drehleiter verfügbar ist, hat diese Vorrang – die tragbare Leiter ist der Rückfallweg.'),

    H2('rettungsgeraete', 'Weitere Rettungsgeräte'),
    TBL(['Gerät', 'Verwendung', 'Grenze'],[
      ['Rettungstuch', 'Transport nicht gehfähiger Personen über kurze Strecken', 'kein Schutz der Wirbelsäule'],
      ['Krankentrage', 'Transport über längere Strecken', 'braucht Platz und mehrere Kräfte'],
      ['Schleifkorbtrage', 'Rettung aus Höhen, Tiefen und unwegsamem Gelände', 'aufwendig, Ausbildung nötig'],
      ['Sprungrettungsgerät', 'Rettung durch Springen', '<b>nur letztes Mittel</b>, begrenzte Höhe, hohe Verletzungsgefahr'],
      ['Feuerwehrleine mit Haltegurt', 'Halten, Sichern, Selbstretten', '<b>keine</b> Absturzsicherung'],
    ]),
    CO('warn', 'Sprungrettungsgerät nur als letztes Mittel', 'Ein Sprungpolster kommt ausschließlich dann in Betracht, wenn kein anderer Rettungsweg möglich ist und die Person sonst sterben würde. Es hat eine begrenzte zulässige Sprunghöhe, verlangt eine ansprechbare, sprungfähige Person und birgt erhebliche Verletzungsrisiken. Leiter, Drehleiter und Innenangriff haben immer Vorrang.'),

    H2('leine', 'Die Feuerwehrleine'),
    DEF('Feuerwehrleine', 'Eine genormte Kernmantelleine von etwa 30 Metern Länge in einem Leinenbeutel. Sie dient zum Halten, Sichern, Selbstretten, zum Hochziehen von Geräten und zur Absperrung. Sie ist <b>kein</b> Mittel der Absturzsicherung und darf nicht zum Auffangen eines Sturzes verwendet werden.'),
    P('Zum sicheren Umgang gehören wenige Knoten, die dafür wirklich sitzen müssen: <b>Mastwurf</b>, <b>Zimmermannsschlag</b>, <b>Pfahlstich</b> und der genormte <b>Feuerwehr-Rettungsknoten</b>. Sie werden in <b>Modul U</b> ausführlich behandelt und mit dem Knoten-Trainer geübt.'),
    KF(
      'Leine nach jedem Gebrauch auf Beschädigungen prüfen.',
      'Nach starker Belastung, Sturzbelastung oder Chemikalienkontakt aussondern.',
      'Leine nicht über scharfe Kanten führen – Kantenschutz verwenden.',
      'Trocken und dunkel lagern, UV-Strahlung schädigt das Material.',
      'Prüfungen dokumentieren, Ablegereife konsequent beachten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Steckleiter erreicht etwa das zweite, dreiteilige Schiebleiter etwa das dritte Obergeschoss.',
      'Anstellwinkel 65 bis 75 Grad, mindestens 1 m Überstand, Fußsicherung.',
      'Belastungsgrenzen je Leiterart beachten – auch beim Retten.',
      'Rettung über tragbare Leitern ist anspruchsvoll; Drehleiter hat Vorrang.',
      'Sprungrettungsgerät nur als letztes Mittel.',
      'Feuerwehrleine dient zum Halten und Sichern – nicht zum Auffangen.',
      'Leinen nach Belastung prüfen und konsequent aussondern.'),
  ],
},

/* ---------------------------------------------------------------- D4 ---- */
{
  id: 'd4', title: 'Beleuchtung, Aggregate & Kleingeräte', duration: 20,
  blocks: [
    P('Die Hälfte aller Einsätze findet bei Dunkelheit statt, und ein erheblicher Teil der Unfälle im Feuerwehrdienst passiert beim Stolpern, Ausrutschen und Danebengreifen. Beleuchtung ist deshalb keine Bequemlichkeit, sondern eine der wirksamsten Sicherheitsmaßnahmen überhaupt – und sie gehört zu den ersten Handgriffen an einer nächtlichen Einsatzstelle.'),

    H2('licht', 'Beleuchtung an der Einsatzstelle'),
    UL(
      '<b>Umfeldbeleuchtung am Fahrzeug:</b> leuchtet den unmittelbaren Arbeitsbereich sofort aus, ohne Aufbauzeit.',
      '<b>Lichtmast:</b> beleuchtet großflächig von oben, blendungsarm, braucht Aufbauzeit und Stromversorgung.',
      '<b>Stativstrahler:</b> gezielte Ausleuchtung einzelner Arbeitsbereiche.',
      '<b>Handscheinwerfer und Helmlampen:</b> persönliches Licht für den Trupp, in explosionsgefährdeten Bereichen in Ex-Ausführung.',
      '<b>Verkehrswarn- und Signalgeräte:</b> machen die Einsatzstelle für den Verkehr sichtbar.'),
    CO('warn', 'Licht kann auch blenden', 'Scheinwerfer, die dem fließenden Verkehr entgegenstrahlen, blenden Autofahrer und erzeugen genau die Gefahr, die sie verhindern sollen. Beleuchtung wird deshalb bewusst ausgerichtet: auf die Arbeitsfläche, nicht in die Fahrbahn und nicht in die Augen der eigenen Kräfte.'),

    H2('strom', 'Stromerzeuger und elektrische Sicherheit'),
    P('Tragbare Stromerzeuger versorgen Beleuchtung, Pumpen, Lüfter und Rettungsgeräte. Sie arbeiten in einem Netz ohne Erdung – deshalb gelten für sie besondere Schutzmaßnahmen.'),
    DEF('Schutztrennung', 'Bei tragbaren Stromerzeugern übliche Schutzmaßnahme: Der Generator ist galvanisch vom Erdreich getrennt, sodass ein einzelner Fehler noch keinen gefährlichen Strom durch den Körper fließen lässt. Eine <b>Isolationsüberwachung</b> meldet den ersten Fehler, damit er behoben werden kann, bevor ein zweiter dazukommt.'),
    KF(
      'Nur geprüfte Kabel, Verteiler und Geräte anschließen – Prüfplakette beachten.',
      'Kabeltrommeln <b>vollständig abrollen</b>, sonst überhitzt das aufgewickelte Kabel.',
      'Isolationsüberwachung beobachten; bei Meldung Fehler suchen, nicht ignorieren.',
      'Stromerzeuger nie in geschlossenen Räumen betreiben – Abgase enthalten Kohlenstoffmonoxid.',
      'Standfest und trocken aufstellen, Abstand zu brennbarem Material halten.',
      'Betanken nur bei abgestelltem, abgekühltem Motor.'),
    CO('danger', 'Abgase töten lautlos', 'Ein Stromerzeuger oder eine Motorpumpe in einer Tiefgarage, einem Keller oder einem Zelt erzeugt binnen Minuten tödliche CO-Konzentrationen. Diese Geräte gehören ins Freie – und zwar so, dass die Abgase nicht in Arbeitsbereiche zurückgezogen werden.'),

    H2('klein', 'Wichtige Kleingeräte'),
    TBL(['Gerät', 'Verwendung', 'Zu beachten'],[
      ['Motorkettensäge', 'Holz, umgestürzte Bäume', 'nur mit Ausbildung und Schnittschutzausrüstung (Modul Y)'],
      ['Trennschleifer', 'Metall, Gitter, Bleche', 'Funkenflug, Brandgefahr, Augen- und Gehörschutz'],
      ['Säbelsäge, Rettungssäge', 'kontrolliertes Trennen', 'geringere Funkenbildung als Trennschleifer'],
      ['Tauchpumpe, Wassersauger', 'Wasserschäden, überflutete Keller', 'Stromversorgung, Ansaughöhe, Verschmutzungsgrad'],
      ['Überdrucklüfter', 'Entrauchung', 'nur koordiniert mit dem Innenangriff (Modul E)'],
      ['Brechwerkzeug, Halligan-Tool', 'Türöffnung, einfache technische Hilfe', 'Ausbildung, Umstehende schützen'],
      ['Hebekissen', 'Anheben schwerer Lasten', 'heben und unterbauen im Wechsel (Modul G)'],
    ]),
    CO('warn', 'Nur geschult einsetzen', 'Motorkettensäge, Trennschleifer, hydraulische Rettungsgeräte und Hebekissen dürfen nur von ausgebildeten Kräften bedient werden. Das ist keine Formalie: Die typischen Verletzungen bei diesen Geräten sind schwer und dauerhaft. Wer unsicher ist, sagt das – und lässt jemand anderen arbeiten.'),

    H2('vorbereitung', 'Geräte einsatzbereit halten'),
    P('Ein Gerät, das im Einsatz nicht anspringt, ist wertlos. Die meisten Ausfälle haben banale Ursachen: alter Kraftstoff, leerer Akku, stumpfe Kette, fehlendes Zubehör.'),
    KF(
      'Kraftstoffe regelmäßig erneuern – Zweitaktgemisch altert schnell.',
      'Akkugeräte nach jedem Einsatz laden, Ladezustand regelmäßig kontrollieren.',
      'Verschleißteile ersetzen: Ketten, Trennscheiben, Dichtungen, Filter.',
      'Probelauf nach festem Plan – nicht nur, wenn man daran denkt.',
      'Zubehör vollständig halten: Verlängerungen, Adapter, Zündschlüssel, Werkzeug.',
      'Mängel sofort melden und das Gerät kennzeichnen, statt es stillschweigend zurückzulegen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Beleuchtung gehört zu den ersten Maßnahmen bei Dunkelheit.',
      'Scheinwerfer bewusst ausrichten – nicht in Fahrbahn und Augen.',
      '<b>Schutztrennung</b> mit Isolationsüberwachung ist die Schutzmaßnahme am Stromerzeuger.',
      'Kabeltrommeln vollständig abrollen.',
      'Verbrennungsmotoren niemals in geschlossenen Räumen betreiben – CO-Gefahr.',
      'Motorsäge, Trennschleifer und Rettungsgeräte nur mit Ausbildung.',
      'Einsatzbereitschaft entsteht durch regelmäßige Probeläufe und Pflege.'),
  ],
},

/* ---------------------------------------------------------------- D5 ---- */
{
  id: 'd5', title: 'Wartung, Prüfung & Gerätemanagement', duration: 18,
  blocks: [
    P('Der Satz „nach dem Einsatz ist vor dem Einsatz" klingt nach Kalenderspruch, beschreibt aber eine harte Realität: Eine Wehr, die von einem Einsatz zurückkommt, ist erst dann wieder einsatzbereit, wenn jedes Gerät gereinigt, geprüft und verlastet ist. Diese Lektion behandelt, wie das systematisch organisiert wird.'),

    H2('warum', 'Warum geprüft wird'),
    P('Feuerwehrgeräte müssen im Ernstfall zu hundert Prozent funktionieren – oft beim ersten Versuch und unter Bedingungen, unter denen niemand nachbessern kann. Regelmäßige Prüfungen stellen diese Betriebssicherheit her. Sie sind zugleich rechtlich vorgeschrieben: durch Herstellerangaben, Normen, die DGUV-Vorschriften und die Betriebssicherheitsverordnung.'),
    TBL(['Prüfart', 'Was passiert', 'Wer'],[
      ['Sichtprüfung', 'augenscheinliche Kontrolle auf Schäden und Vollständigkeit', 'jede Einsatzkraft, nach jedem Gebrauch'],
      ['Funktionsprüfung', 'Erprobung der bestimmungsgemäßen Funktion', 'Gerätewart oder unterwiesene Kraft'],
      ['Prüfung durch Befähigte', 'fachkundige Prüfung nach Vorgabe, dokumentiert', 'Gerätewart mit entsprechender Qualifikation'],
      ['Prüfung durch den Hersteller', 'Grundüberholung, sicherheitsrelevante Bauteile', 'Fachwerkstatt'],
    ]),

    H2('fristen', 'Typische Prüffristen'),
    P('Die folgenden Angaben sind gängige Orientierungswerte. Maßgeblich sind immer die Herstellerangaben, die einschlägigen Vorschriften und die Regelungen deines Trägers.'),
    TBL(['Gerät', 'Typische Prüfung'],[
      ['Atemschutzgeräte und Masken', 'nach jedem Gebrauch reinigen und prüfen, dazu wiederkehrende Prüfungen nach Fristenplan'],
      ['Tragbare Leitern', 'jährliche Prüfung durch Befähigte, Sichtprüfung nach Gebrauch'],
      ['Feuerwehrleinen und Gurte', 'nach jedem Gebrauch und regelmäßig; Aussonderung bei Beschädigung'],
      ['Elektrische Geräte und Leitungen', 'wiederkehrende Prüfung nach DGUV Vorschrift 3'],
      ['Schläuche', 'nach Gebrauch reinigen und trocknen, wiederkehrende Druckprüfung'],
      ['Hydraulische Rettungsgeräte', 'jährliche Prüfung, Sichtprüfung nach Gebrauch'],
      ['Hebekissen und Anschlagmittel', 'jährliche Prüfung, Sichtprüfung vor jedem Einsatz'],
      ['Fahrzeuge', 'regelmäßige Wartung, Hauptuntersuchung, Pumpenprüfung'],
    ]),
    CO('danger', 'Ablegereife ist keine Verhandlungssache', 'Ein Gurt mit beschädigten Nähten, eine Leine mit Mantelschaden, ein Helm nach starkem Stoß, ein Schlauch mit Scheuerstelle – solche Ausrüstung wird ausgesondert, nicht „noch für Übungen" verwendet. Übungsgerät, das man im Ernstfall greift, ist die klassische Ursache für vermeidbare Unfälle.'),

    H2('doku', 'Dokumentation'),
    P('Jede Prüfung wird festgehalten – im Prüfbuch, in einer Gerätemanagement-Software oder auf Prüfkarten. Diese Dokumentation ist mehr als Bürokratie: Sie belegt, dass das Gerät zum Einsatzzeitpunkt geprüft war, und sie ist im Schadensfall die entscheidende Unterlage.'),
    KF(
      'Was wurde geprüft, wann, von wem und mit welchem Ergebnis?',
      'Mängel dokumentieren und die Behebung nachhalten.',
      'Geräte mit Prüfplakette oder Kennzeichnung versehen.',
      'Fristen im Voraus planen, nicht auf Zuruf abarbeiten.',
      'Ausgesonderte Geräte eindeutig kennzeichnen und getrennt lagern.',
      'Einsatzbereitschaft erst melden, wenn alles wieder vollständig ist.'),

    H2('gerätewart', 'Die Rolle des Gerätewarts'),
    P('Der Gerätewart ist eine der unterschätzten Schlüsselfunktionen einer Feuerwehr. Er hält den Bestand einsatzbereit, verwaltet Prüffristen, beschafft Ersatzteile und ist meist derjenige, der zuerst merkt, wenn etwas nicht stimmt. Seine Arbeit findet außerhalb der Einsätze statt und ist deshalb selten sichtbar.'),
    CO('tip', 'Was jede Einsatzkraft beitragen kann', 'Mängel sofort melden – und zwar mit konkreter Beschreibung, nicht als „irgendwas ist komisch". Geräte nach dem Einsatz nicht schnell und schmutzig zurücklegen. Und beim Verlasten prüfen, ob wirklich alles wieder an Bord ist. Diese drei Gewohnheiten ersparen dem Gerätewart die Hälfte seiner Arbeit.'),

    H2('nacheinsatz', 'Der Ablauf nach dem Einsatz'),
    STEPS(
      'Kontaminierte Ausrüstung getrennt behandeln und nicht in die Mannschaftskabine bringen.',
      'Atemschutzgeräte tauschen, Flaschen füllen lassen, Masken zur Reinigung geben.',
      'Schläuche reinigen, trocknen, ersetzen; Fahrzeug neu bestücken.',
      'Betriebsstoffe auffüllen: Kraftstoff, Löschwasser, Schaummittel, Bindemittel.',
      'Akkus laden, Geräte auf Funktion prüfen, Verbrauchsmaterial ergänzen.',
      'Mängel dokumentieren und melden.',
      'Persönliche Schutzausrüstung reinigen oder tauschen.',
      'Erst dann die Einsatzbereitschaft an die Leitstelle melden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Prüfungen sind vorgeschrieben und stellen die Betriebssicherheit her.',
      'Sichtprüfung nach jedem Gebrauch, dazu Funktions- und Sachkundigenprüfungen.',
      'Leitern und viele Rettungsgeräte werden jährlich geprüft.',
      'Elektrische Betriebsmittel nach DGUV Vorschrift 3.',
      'Ablegereife Ausrüstung wird ausgesondert – auch nicht für Übungen verwenden.',
      'Prüfungen lückenlos dokumentieren.',
      'Einsatzbereitschaft erst melden, wenn Fahrzeug und Ausrüstung vollständig sind.'),
  ],
},

];
