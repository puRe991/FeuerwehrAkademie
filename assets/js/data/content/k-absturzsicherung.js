/* =========================================================================
   MODUL K — Absturzsicherung & Retten aus Höhen
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls K.

   Fachliche Grundlage: DGUV Vorschrift 49 und zugehörige Regeln,
   DGUV Information zur Absturzsicherung bei der Feuerwehr, DIN EN 361
   (Auffanggurte), EN 355 (Falldämpfer), EN 362 (Karabiner), EN 795
   (Anschlageinrichtungen), EN 1891/892 (Seile), FwDV 1.
   Der Gerätesatz Absturzsicherung ersetzt keine Höhenrettung.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_K = [

/* ---------------------------------------------------------------- K1 ---- */
{
  id: 'k1', title: 'Grundlagen & Ausrüstung', duration: 22,
  blocks: [
    P('Absturz ist eine der häufigsten Ursachen für tödliche Arbeitsunfälle – auch im Feuerwehrdienst. Das Tückische daran: Die Gefahr wirkt selten dramatisch. Ein Dach mit leichter Neigung, eine Grube, ein Silo, eine Brüstung in Hüfthöhe – all das sieht harmlos aus und ist es nicht. Diese Lektion legt die Grundlagen der Sicherung.'),

    H2('wann', 'Wann gesichert werden muss'),
    P('Gesichert wird, sobald Absturzgefahr besteht. Das ist keine Frage des Muts, sondern der Vorschrift: Die DGUV-Regelwerke legen fest, ab wann Maßnahmen gegen Absturz zu treffen sind. Typische Situationen im Feuerwehrdienst sind Arbeiten auf Dächern, an Böschungen und Gruben, an Brücken und Silos, in Schächten und auf Fahrzeugen.'),
    KF(
      'Absturzgefahr besteht früher, als man denkt – auch an niedrigen Kanten.',
      'Nasse, vereiste oder bemooste Flächen sind grundsätzlich rutschig.',
      'Dachflächen können brandgeschwächt sein und durchbrechen – Durchsturzgefahr.',
      'Lichtkuppeln und Oberlichter tragen keine Personen.',
      'Bei Dunkelheit werden Kanten und Öffnungen leicht übersehen.',
      'Wer ungesichert an eine Kante geht, kann sich im Sturzfall nicht selbst retten.'),
    CO('warn', 'Abgrenzung Absturzsicherung und Höhenrettung', 'Der <b>Gerätesatz Absturzsicherung</b> dient dazu, Einsatzkräfte gegen Absturz zu sichern und einfache Rettungen durchzuführen. Komplexe Rettungen aus großen Höhen und Tiefen – Windkraftanlagen, Kräne, tiefe Schächte – sind Aufgabe speziell ausgebildeter <b>Höhenrettungsgruppen</b>. Wer die Grenze überschreitet, gefährdet sich und die zu rettende Person.'),

    H2('satz', 'Der Gerätesatz Absturzsicherung'),
    TBL(['Bestandteil', 'Aufgabe', 'Norm (Beispiel)'],[
      ['Auffanggurt', 'Ganzkörpergurt, verteilt die Fangstoßkraft auf den Körper', 'DIN EN 361'],
      ['Verbindungsmittel', 'verbindet Gurt und Anschlagpunkt', 'DIN EN 354'],
      ['Falldämpfer', 'begrenzt die Fangstoßkraft im Sturzfall', 'DIN EN 355'],
      ['Karabiner mit Verschlusssicherung', 'sichere Verbindung der Elemente', 'DIN EN 362'],
      ['Kernmantelseil', 'dynamisch zum Auffangen, statisch als Arbeitsseil', 'EN 892 / EN 1891'],
      ['Bandschlingen', 'Anschlagen an Bauteilen', 'EN 566 / EN 795'],
      ['Auffanggerät', 'läuft am Seil mit und blockiert bei Sturz', 'DIN EN 353-2'],
      ['Abseil- und Sicherungsgerät', 'kontrolliertes Ablassen und Sichern', 'DIN EN 341'],
      ['Kantenschutz', 'schützt Seile an Kanten', '–'],
    ]),
    FIG('auffangsystem', 'Aufbau eines Auffangsystems: Anschlagpunkt, Verbindungsmittel mit Falldämpfer und Auffanggurt.'),
    CO('danger', 'Der Haltegurt ist keine Absturzsicherung', 'Der Feuerwehr-Haltegurt dient zum Halten an einem Standplatz und zum Selbstretten mit der Feuerwehrleine. Er ist <b>nicht</b> dafür ausgelegt, einen Sturz aufzufangen – die Kräfte würden auf die Taille wirken und schwerste innere Verletzungen verursachen. Wo Absturzgefahr besteht, wird ein <b>Auffanggurt nach EN 361</b> getragen.'),

    H2('systeme', 'Die drei Systemarten'),
    P('Je nachdem, was das System leisten soll, unterscheidet man drei Grundarten. Die Unterscheidung ist wichtig, weil sich daraus ergibt, welche Ausrüstung nötig ist und wie viel freier Raum unter der Einsatzkraft vorhanden sein muss.'),
    TBL(['System', 'Zweck', 'Verhindert ein Sturz?'],[
      ['Rückhaltesystem', 'verhindert, dass die Absturzkante überhaupt erreicht wird', 'ja – es kommt gar nicht zum Sturz'],
      ['Haltesystem', 'hält die Person am Standplatz, ermöglicht freies Arbeiten', 'ja, solange straff gehalten'],
      ['Auffangsystem', 'fängt einen bereits eingetretenen Sturz ab', 'nein – es begrenzt die Folgen'],
    ]),
    CO('tip', 'Das beste System ist das, das den Sturz verhindert', 'Ein Rückhaltesystem, das die Einsatzkraft gar nicht erst an die Kante lässt, ist jedem Auffangsystem überlegen. Es braucht keinen Sturzraum, erzeugt keine Fangstoßkraft und macht keine Rettung nötig. Wenn die Aufgabe es zulässt, ist Rückhalten immer die erste Wahl.'),

    H2('anschlag', 'Anschlagpunkte'),
    P('Jede Sicherung ist nur so gut wie ihr Anschlagpunkt. Er nimmt im Sturzfall die gesamte Kraft auf – und diese Kraft ist erheblich höher als das Körpergewicht.'),
    KF(
      '<b>Tragfähig:</b> massives Bauteil, keine Regenrinne, kein loses Geländer, kein Lüftungsrohr.',
      '<b>Möglichst hoch anschlagen:</b> Das verringert die mögliche Sturzhöhe und die Fangstoßkraft.',
      '<b>Möglichst senkrecht über der Person:</b> Das verhindert einen Pendelsturz.',
      '<b>Kanten schützen:</b> Ein Seil, das unter Last über eine scharfe Kante läuft, kann durchtrennt werden.',
      '<b>Im Zweifel redundant:</b> zwei unabhängige Anschlagpunkte.',
      '<b>Vor der Benutzung prüfen</b> – ansehen, belasten, beurteilen.'),

    H2('sturzfaktor', 'Sturzfaktor und Fangstoß'),
    DEF('Sturzfaktor', 'Das Verhältnis von Sturzhöhe zu ausgegebener Seillänge. Er liegt zwischen 0 und 2. Ein Sturzfaktor von 2 – die Person steht über dem Anschlagpunkt und stürzt an straffem, kurzem Seil – erzeugt die höchsten Kräfte. Deshalb gilt: <b>hoch anschlagen und Seil straff halten</b>.'),
    DEF('Fangstoß', 'Die Kraft, die im Moment des Auffangens auf den Körper wirkt. Sie darf einen Grenzwert nicht überschreiten – die Norm für Falldämpfer nennt 6 kN. Ohne Falldämpfer können bereits kurze Stürze zu schweren inneren Verletzungen führen, selbst wenn das Material hält.'),
    CO('danger', 'Sturzraum beachten', 'Unter der Einsatzkraft muss genug freier Raum sein, damit sie im Sturzfall nicht aufschlägt, bevor das System greift. Zu berücksichtigen sind Seildehnung, Auszug des Falldämpfers, Körpergröße und ein Sicherheitsabstand. Reicht der Raum nicht, hilft die beste Sicherung nichts – dann muss ein Rückhaltesystem verwendet werden.'),

    H2('haengetrauma', 'Hängetrauma'),
    CO('danger', 'Zeit zählt', 'Hängt eine Person bewegungslos im Gurt, versackt das Blut in den Beinen. Der Rückstrom zum Herzen bricht ein, und es kann innerhalb weniger Minuten zu Bewusstlosigkeit und Kreislaufversagen kommen. Die Rettung ist deshalb zeitkritisch – ein im Gurt hängender Mensch ist ein Notfall, auch wenn er noch spricht.'),
    P('Nach der Befreiung wird die Person <b>nicht abrupt flach hingelegt</b>: Der plötzlich einsetzende Rückstrom kann den Kreislauf zusätzlich belasten. Bewährt ist eine zunächst hockende oder halbsitzende Lagerung und ein langsamer Übergang. Ist die Person allerdings bewusstlos oder kreislaufinstabil, haben die üblichen lebensrettenden Maßnahmen Vorrang. In jedem Fall gehört sie sofort dem Rettungsdienst vorgestellt und ärztlich überwacht.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Absturzgefahr besteht früher, als es aussieht – Dächer, Gruben, Schächte, Brüstungen.',
      'Der Gerätesatz Absturzsicherung ist keine Höhenrettung.',
      'Der <b>Haltegurt</b> ist keine Absturzsicherung – Auffanggurt nach EN 361 verwenden.',
      'Rückhalten ist besser als Auffangen.',
      'Anschlagpunkte tragfähig, hoch, senkrecht über der Person, mit Kantenschutz.',
      '<b>Sturzfaktor</b> gering halten; Falldämpfer begrenzt den Fangstoß auf 6 kN.',
      'Sturzraum prüfen – sonst schlägt die Person auf, bevor das System greift.',
      '<b>Hängetrauma</b>: schnell retten, nicht abrupt flach lagern, ärztlich überwachen.'),
  ],
},

/* ---------------------------------------------------------------- K2 ---- */
{
  id: 'k2', title: 'Sicherungsmethoden & Rettung nach Sturz', duration: 20,
  blocks: [
    P('Ausrüstung allein sichert niemanden. Entscheidend ist, wie sie eingesetzt wird – wer wen sichert, an welchem Punkt, mit welchem Verfahren. Diese Lektion behandelt die Sicherungsmethoden und das Vorgehen, wenn trotz aller Vorkehrungen ein Sturz eingetreten ist.'),

    H2('methoden', 'Selbst- und Fremdsicherung'),
    TBL(['Methode', 'Wie es funktioniert', 'Typische Anwendung'],[
      ['Selbstsicherung', 'Die Einsatzkraft sichert sich mit dem Verbindungsmittel selbst am Anschlagpunkt.', 'Arbeiten an einer festen Position nahe der Kante'],
      ['Fremdsicherung, Halten', 'Ein Sicherungsposten hält die Person am Seil und gibt kontrolliert Seil aus.', 'Annäherung an die Kante, Arbeiten mit Bewegung'],
      ['Auffangsystem', 'Auffanggurt, Falldämpfer und mitlaufendes Auffanggerät fangen einen Sturz ab.', 'wenn ein Sturz nicht ausgeschlossen werden kann'],
      ['Rückhaltesystem', 'Die Seillänge ist so bemessen, dass die Kante nicht erreicht wird.', 'Arbeiten auf Flächen mit definierter Kante'],
    ]),
    CO('warn', 'Erst sich selbst sichern', 'Bevor sich jemand einer Absturzkante nähert, sichert er sich. Das gilt auch für den Sicherungsposten: Wer sichert, braucht selbst einen sicheren Standplatz, von dem er nicht in die Gefahrenzone gezogen werden kann. Ungesichert nähert sich niemand dem Rand – auch nicht, um „nur kurz zu schauen".'),

    H2('sicherungsposten', 'Der Sicherungsposten'),
    P('Wer sichert, hat eine Aufgabe und nur diese. Er beobachtet die gesicherte Person durchgehend, führt das Seil, hält Verbindung und greift bei einem Sturz ein. Nebenbei zu funken, Geräte zu reichen oder zu telefonieren ist damit unvereinbar.'),
    KF(
      'Standplatz gesichert und so gewählt, dass die Last kontrollierbar bleibt.',
      'Blickkontakt oder ständige Rufverbindung zur gesicherten Person.',
      'Seil straff halten – schlaffes Seil erhöht die Sturzhöhe.',
      'Vereinbarte Kommandos verwenden: „Seil ein", „Seil aus", „Stand", „Zu".',
      'Keine Nebenaufgaben übernehmen.',
      'Bei jedem Zweifel die Arbeit stoppen lassen.'),

    H2('freiraum', 'Sturzraum berechnen'),
    P('Vor dem Einsatz eines Auffangsystems muss geklärt sein, ob unter der Einsatzkraft genug freier Raum ist. Andernfalls schlägt sie auf, bevor das System sie hält.'),
    OL(
      'Länge des Verbindungsmittels beziehungsweise ausgegebene Seillänge.',
      'Auszug des Falldämpfers im Sturzfall.',
      'Dehnung des Seils.',
      'Körpergröße der Person unterhalb des Anschlagpunkts am Gurt.',
      'Sicherheitsabstand zum Boden oder zum nächsten Hindernis.'),
    CO('danger', 'Wenn der Raum nicht reicht', 'Reicht der Sturzraum nicht aus – etwa auf einem niedrigen Dach oder über einer Zwischenebene –, darf kein Auffangsystem verwendet werden. Dann ist ein <b>Rückhaltesystem</b> zu wählen, das den Sturz von vornherein verhindert.'),

    H2('pendel', 'Pendelsturz'),
    DEF('Pendelsturz', 'Ein Sturz, bei dem die Person nicht senkrecht fällt, sondern seitlich am Seil pendelt – weil der Anschlagpunkt nicht über ihr liegt. Der Aufprall gegen Bauteile ist dabei oft gefährlicher als der Sturz selbst, und das Seil kann über eine Kante gezogen werden. Vermeiden lässt sich das durch einen senkrecht über der Arbeitsposition liegenden Anschlagpunkt oder eine seitliche Bewegungsbegrenzung.'),

    H2('rettung', 'Rettung nach einem Sturz'),
    STEPS(
      'Lage überblicken und die eigene Sicherung herstellen – niemals ungesichert zur Kante.',
      'Kontakt zur gestürzten Person aufnehmen, sie ansprechen und beruhigen.',
      'Zustand grob einschätzen: ansprechbar, Atmung, sichtbare Verletzungen, Position.',
      'Rettungsdienst und gegebenenfalls Höhenrettung nachfordern – sofort, nicht später.',
      'Schnellstmöglich aus der hängenden Position befreien – das Hängetrauma läuft.',
      'Person kontrolliert ablassen oder aufziehen, Verfahren vorher festlegen.',
      'Nach der Befreiung nicht abrupt flach lagern; bei Bewusstlosigkeit lebensrettende Maßnahmen.',
      'Übergabe an den Rettungsdienst mit Angabe der Hängedauer.'),
    CO('warn', 'Die Hängedauer ist eine wichtige Information', 'Wie lange eine Person im Gurt gehangen hat, ist für die weitere medizinische Behandlung entscheidend. Merke dir die Uhrzeit, sobald du von dem Sturz erfährst, und gib sie bei der Übergabe an.'),

    H2('nachher', 'Nach dem Ereignis'),
    KF(
      'Sturzbelastetes Material sofort aussondern – Gurt, Seil, Falldämpfer, Karabiner.',
      'Material für die Untersuchung unverändert aufbewahren.',
      'Unfall melden und dokumentieren, Durchgangsarzt einschalten.',
      'Beteiligte betreuen und psychosoziale Unterstützung anbieten.',
      'Den Hergang auswerten: Was hat den Sturz ermöglicht?',
      'Konsequenzen für Ausbildung und Ausrüstung ziehen.'),
    CO('danger', 'Sturzbelastetes Material wird nie wiederverwendet', 'Ein Falldämpfer, der ausgelöst hat, ist verbraucht. Ein Karabiner, ein Gurt oder ein Seil, das einen Sturz gehalten hat, kann unsichtbare Schäden aufweisen. Solches Material wird ausgesondert und nicht „für Übungszwecke" weiterverwendet.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Methoden: Selbstsicherung, Fremdsicherung, Auffangsystem, Rückhaltesystem.',
      'Erst sich selbst sichern – auch der Sicherungsposten.',
      'Der Sicherungsposten hat nur diese eine Aufgabe.',
      'Sturzraum aus Seillänge, Falldämpferauszug, Dehnung, Körpergröße und Reserve ermitteln.',
      'Reicht der Sturzraum nicht, ist ein Rückhaltesystem zu verwenden.',
      '<b>Pendelsturz</b> durch senkrechten Anschlagpunkt vermeiden.',
      'Nach einem Sturz zeitkritisch retten, Hängedauer merken und melden.',
      'Sturzbelastetes Material sofort und dauerhaft aussondern.'),
  ],
},

/* ---------------------------------------------------------------- K3 ---- */
{
  id: 'k3', title: 'Knoten, Anschlagmittel & Materialkunde', duration: 18,
  blocks: [
    P('Absturzsicherung ist eine der wenigen Tätigkeiten in der Feuerwehr, bei der ein einzelner falsch gelegter Knoten unmittelbar tödlich sein kann. Deshalb ist Materialkunde hier kein Nebenfach: Wer weiß, wie Seile, Gurte und Karabiner funktionieren und altern, erkennt Probleme, bevor sie zum Unfall werden.'),

    H2('knoten', 'Die wichtigsten Knoten'),
    TBL(['Knoten', 'Zweck', 'Besonderheit'],[
      ['Achterknoten', 'sichere Seilschlaufe zum Anseilen und Anschlagen', 'gut kontrollierbar, auch nach Belastung lösbar'],
      ['Mastwurf', 'Befestigen an Rundmaterial, in der Länge verstellbar', 'schnell zu legen, muss gesichert werden'],
      ['Halbmastwurf (HMS)', 'dynamisches Sichern und Ablassen', 'nur mit HMS-tauglichem Karabiner'],
      ['Pfahlstich (Bulin)', 'feste Schlinge, klassischer Rettungsknoten', 'muss gegen Aufgehen gesichert werden'],
      ['Doppelter Ankerstich', 'Bandschlinge am Anschlagpunkt befestigen', 'einfach und materialschonend'],
      ['Sackstich', 'einfache Schlaufe, Endknoten', 'nach Belastung schwer zu lösen'],
    ]),
    CO('warn', 'Knoten schwächen das Seil', 'Jeder Knoten reduziert die Bruchlast eines Seils erheblich – je nach Knotenart um einen erheblichen Anteil. Das ist bei der Auslegung berücksichtigt, aber es erklärt, warum Knoten sauber gelegt und straff gezogen werden müssen: Ein schief gelegter Knoten schwächt zusätzlich und kann sich unter Last verschieben.'),
    P('Die praktische Ausführung dieser Knoten wird in <b>Modul U</b> und mit dem Knoten-Trainer der Akademie geübt. Für die Absturzsicherung gilt: Es werden nur Knoten verwendet, die man sicher beherrscht – im Dunkeln, mit Handschuhen und unter Zeitdruck.'),

    H2('seile', 'Seile'),
    TBL(['Seilart', 'Eigenschaft', 'Verwendung'],[
      ['Dynamisches Kernmantelseil', 'dehnt sich unter Last, baut Sturzenergie ab', 'Auffangsysteme, wo Stürze möglich sind'],
      ['Statisches Kernmantelseil', 'geringe Dehnung, präzises Arbeiten', 'Arbeitsseil, Ablassen, Aufziehen'],
      ['Feuerwehrleine', 'Kernmantelleine, etwa 30 m', 'Halten, Sichern, Selbstretten – <b>keine</b> Absturzsicherung'],
    ]),
    P('Der Unterschied zwischen dynamisch und statisch ist sicherheitsrelevant. Ein statisches Seil dehnt sich kaum und leitet die Sturzenergie nahezu ungebremst in Körper und Anschlagpunkt weiter. Es gehört deshalb nicht in ein System, in dem ein Sturz möglich ist – oder es muss zwingend mit einem Falldämpfer kombiniert werden.'),

    H2('material', 'Anschlagmittel und Verbindungselemente'),
    UL(
      '<b>Bandschlingen:</b> zum Anschlagen an Bauteilen; genähte Schlingen sind Knotenverbindungen vorzuziehen.',
      '<b>Reepschnüre:</b> Hilfsmittel, keine Anschlagmittel für volle Last.',
      '<b>Karabiner mit Verschlusssicherung:</b> nur mit geschlossenem und verriegeltem Verschluss belastbar.',
      '<b>Auffanggeräte:</b> laufen am Seil mit und blockieren bei plötzlicher Belastung.',
      '<b>Abseil- und Sicherungsgeräte:</b> ermöglichen kontrolliertes Ablassen.',
      '<b>Kantenschutz:</b> Pflicht, sobald ein Seil über eine Kante läuft.'),
    DEF('Bruchlast und Gebrauchslast', 'Die <b>Bruchlast</b> ist die Kraft, bei der das Material versagt – bei Karabinern in der Längsachse häufig über 20 kN. Im Einsatz wird mit erheblicher Sicherheitsreserve weit darunter gearbeitet. Wichtig: Ein Karabiner ist nur in <b>Längsrichtung mit geschlossenem Verschluss</b> voll belastbar; quer belastet oder mit offenem Schnapper bricht er bei einem Bruchteil dieser Last.'),
    CO('danger', 'Quer belastete Karabiner', 'Ein Karabiner, der über eine Kante gezogen, verkantet oder quer belastet wird, verliert den größten Teil seiner Festigkeit. Deshalb wird bei jeder Verbindung darauf geachtet, dass der Karabiner frei in Längsrichtung hängen kann – und der Verschluss verriegelt ist.'),

    H2('alterung', 'Alterung, Prüfung und Ablegereife'),
    P('Textiles Material altert auch dann, wenn es nur im Schrank liegt. UV-Strahlung, Feuchtigkeit, Chemikalien und mechanische Belastung wirken zusammen. Deshalb hat jedes Teil eine begrenzte Lebensdauer – unabhängig vom Zustand.'),
    KF(
      'Vor jeder Benutzung Sichtprüfung: Schnitte, Aufrauung, Verfärbung, Schmelzstellen, defekte Nähte.',
      'Nach jedem Einsatz prüfen und dokumentieren.',
      'Regelmäßige Prüfung durch eine befähigte Person nach Vorgabe.',
      'Herstellerangaben zur maximalen Lebensdauer beachten.',
      'Trocken, dunkel und ohne Kontakt zu Chemikalien lagern.',
      'Bei Zweifel aussondern – im Zweifel für die Sicherheit.'),
    CO('warn', 'Chemikalien sind unsichtbar gefährlich', 'Säuren und einige Lösemittel können Kunstfasern schädigen, ohne dass man es sieht. Ein Gurt, der Kontakt mit Batteriesäure oder unbekannten Chemikalien hatte, wird ausgesondert – auch wenn er unbeschädigt aussieht.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Nur Knoten verwenden, die man sicher beherrscht – auch im Dunkeln und mit Handschuhen.',
      'Knoten schwächen das Seil; sauber legen und straff ziehen.',
      'Dynamische Seile fangen Stürze ab, statische Seile sind Arbeitsseile.',
      'Die Feuerwehrleine ist keine Absturzsicherung.',
      'Karabiner nur längs und mit verriegeltem Verschluss belasten.',
      'Kantenschutz ist Pflicht, sobald ein Seil über eine Kante läuft.',
      'Textiles Material altert auch ungenutzt – Lebensdauer und Prüffristen beachten.',
      'Im Zweifel aussondern.'),
  ],
},

/* ---------------------------------------------------------------- K4 ---- */
{
  id: 'k4', title: 'Höhen- & Tiefenrettung im Überblick', duration: 18,
  blocks: [
    P('Zwischen „gesichert an der Dachkante arbeiten" und „einen bewusstlosen Menschen aus einer Windkraftanlage holen" liegen Welten. Diese Lektion ordnet ein, was eine normale Feuerwehr leisten kann und wo die Höhenrettung beginnt – und beschreibt die Grundverfahren, die beiden gemeinsam sind.'),

    H2('abgrenzung', 'Wer macht was?'),
    TBL(['Aufgabe', 'Wer', 'Voraussetzung'],[
      ['Sichern gegen Absturz', 'jede ausgebildete Einsatzkraft', 'Ausbildung Absturzsicherung, Gerätesatz'],
      ['Einfache Rettung aus geringer Höhe/Tiefe', 'Einheit mit Gerätesatz Absturzsicherung', 'geübte Verfahren, ausreichende Kräfte'],
      ['Rettung aus großer Höhe oder Tiefe', 'Höhenrettungsgruppe', 'Spezialausbildung, Spezialgerät'],
      ['Rettung aus Fenstern und von Dächern', 'Drehleiter oder tragbare Leitern', 'Aufstellfläche, Ausbildung'],
      ['Rettung aus Schächten mit Atemgiftgefahr', 'Höhenrettung plus Atemschutz', 'Messung, Rückholeinrichtung, Sicherungsposten'],
    ]),
    CO('warn', 'Die Grenze früh erkennen', 'Höhenrettungsgruppen haben lange Anfahrtswege – oft 30 bis 60 Minuten. Wer erst nach einem gescheiterten eigenen Versuch alarmiert, verliert diese Zeit doppelt. Die Frage „Schaffen wir das mit unseren Mitteln?" wird deshalb bei der Erkundung beantwortet, nicht nach zwanzig Minuten Arbeit.'),

    H2('verfahren', 'Die Grundverfahren'),
    TBL(['Verfahren', 'Prinzip', 'Typische Anwendung'],[
      ['Ablassen', 'Person wird kontrolliert am Seil nach unten gebracht', 'Rettung vom Dach, aus dem Turm'],
      ['Aufziehen', 'Person wird nach oben gezogen, meist über Flaschenzug', 'Rettung aus Schacht, Grube, Silo'],
      ['Begleitetes Abseilen', 'Retter seilt gemeinsam mit dem Patienten ab', 'Patient kann nicht allein gesichert werden'],
      ['Schrägseil', 'Person wird schräg über ein gespanntes Seil bewegt', 'Hindernisse überwinden, Sonderfall'],
      ['Rettung über Drehleiter', 'Korb oder Leiter als Rettungsweg', 'Fenster, Dächer, wenn Aufstellfläche vorhanden'],
    ]),
    DEF('Flaschenzug', 'Eine Anordnung aus Seil und Rollen, die die aufzubringende Zugkraft auf Kosten des Seilwegs verringert. Ein einfacher Flaschenzug halbiert die nötige Kraft, komplexere Anordnungen reduzieren sie weiter. Für das Aufziehen einer Person aus einem Schacht ist er praktisch unverzichtbar – von Hand ist das kaum zu schaffen.'),

    H2('redundanz', 'Das Prinzip der Redundanz'),
    CO('danger', 'Nie ohne zweite Sicherung', 'In Höhen und Tiefen wird grundsätzlich mit zwei voneinander unabhängigen Systemen gearbeitet: einem <b>Arbeitsseil</b> und einem <b>Sicherungsseil</b>, an getrennten Anschlagpunkten. Ein einzelner Fehler – ein gerissenes Seil, ein gelöster Knoten, ein versagender Anschlagpunkt – darf niemals zum Absturz führen.'),
    KF(
      'Zwei unabhängige Anschlagpunkte verwenden.',
      'Arbeits- und Sicherungsseil getrennt führen.',
      'Gegenseitige Kontrolle vor Beginn: Partner-Check aller Verbindungen.',
      'Ein klarer Kommandogeber steuert den Ablauf.',
      'Vereinbarte Kommandos verwenden und bestätigen lassen.',
      'Bei jedem Zweifel anhalten – jede Kraft darf stoppen.'),

    H2('patient', 'Den Patienten sichern'),
    P('Zur Rettung dient meist eine <b>Schleifkorbtrage</b>, in der die Person liegend gesichert und schonend transportiert werden kann. Sie lässt sich waagerecht und senkrecht bewegen und schützt den Patienten gegen Anstoßen.'),
    KF(
      'Patienten vollständig sichern – Gurte, Fußstütze, Kopffixierung.',
      'Bei Verdacht auf Wirbelsäulenverletzung achsengerecht arbeiten und HWS schützen.',
      'Vor Kälte, Nässe und herabfallenden Teilen schützen.',
      'Ständiger Patientenkontakt – eine Kraft spricht durchgehend mit ihm.',
      'Bei begleitetem Abseilen den Patienten im Blick behalten.',
      'Übergabe an den Rettungsdienst mit vollständigen Informationen.'),

    H2('tiefen', 'Besonderheiten bei der Tiefenrettung'),
    P('Rettungen aus Schächten, Gruben, Silos und Behältern kombinieren Absturzgefahr mit Atemgiftgefahr. Sie sind deshalb besonders anspruchsvoll – und die häufigste Ursache für Mehrfachunfälle, weil Helfer ungesichert hinterhersteigen.'),
    STEPS(
      'Nicht einsteigen – zunächst von außen erkunden und Kontakt aufnehmen.',
      'Atmosphäre messen: Sauerstoff, Explosionsgefahr, giftige Gase.',
      'Umluftunabhängigen Atemschutz einsetzen; Filtergeräte helfen hier nicht.',
      'Rückholeinrichtung aufbauen – Dreibein oder Ausleger mit Höhensicherungsgerät.',
      'Sicherungsposten außerhalb stellen, ständiger Kontakt zum Trupp.',
      'Belüften, wo möglich – Zündgefahr beim Verdünnen beachten.',
      'Höhenrettung und Rettungsdienst frühzeitig anfordern.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Absturzsicherung sichert und rettet einfach – Höhenrettung übernimmt das Komplexe.',
      'Die Grenze bei der Erkundung klären, nicht nach dem gescheiterten Versuch.',
      'Grundverfahren: Ablassen, Aufziehen, begleitetes Abseilen, Drehleiter.',
      'Der Flaschenzug macht das Aufziehen einer Person überhaupt erst möglich.',
      '<b>Redundanz</b>: Arbeits- und Sicherungsseil an getrennten Anschlagpunkten.',
      'Ein Kommandogeber, vereinbarte Kommandos, Partner-Check.',
      'Patient in der Schleifkorbtrage vollständig sichern, ständiger Kontakt.',
      'Tiefenrettung: messen, Atemschutz, Rückholeinrichtung, Sicherungsposten.'),
  ],
},

/* ---------------------------------------------------------------- K5 ---- */
{
  id: 'k5', title: 'Anschlagpunkte & sichere Standplätze', duration: 18,
  blocks: [
    P('Der Anschlagpunkt ist das Fundament jeder Sicherung. Alle anderen Elemente – Gurt, Seil, Karabiner – sind genormt, geprüft und in ihrer Belastbarkeit bekannt. Der Anschlagpunkt an einer realen Einsatzstelle ist es nicht: Er muss von der Einsatzkraft beurteilt werden, und diese Beurteilung entscheidet über Leben und Tod.'),

    H2('beurteilen', 'Einen Anschlagpunkt beurteilen'),
    P('Die Frage lautet nicht „hält das?", sondern „hält das die Kräfte, die im Sturzfall auftreten?" – und die sind ein Vielfaches des Körpergewichts. Ein Bauteil, das einen stehenden Menschen trägt, muss deshalb noch lange keinen Sturz halten.'),
    TBL(['Geeignet', 'Ungeeignet'],[
      ['Massive Stahlträger und -stützen', 'Regenrinnen und Fallrohre'],
      ['Tragende Betonbauteile', 'Lüftungsrohre und Kaminaufsätze'],
      ['Geprüfte Anschlageinrichtungen nach EN 795', 'lose oder korrodierte Geländer'],
      ['Kräftige, gesunde Baumstämme', 'Antennenmasten und Blitzschutzleitungen'],
      ['Fahrzeuge mit geeigneten Anschlagpunkten, gesichert', 'Photovoltaikbefestigungen'],
      ['Mehrere Punkte kombiniert (Redundanz)', 'ein einzelner unklarer Punkt'],
    ]),
    KF(
      '<b>Tragfähig</b> – im Zweifel den stärkeren Punkt wählen.',
      '<b>Hoch</b> – reduziert Sturzhöhe und Fangstoßkraft.',
      '<b>Senkrecht über der Arbeitsposition</b> – verhindert Pendelsturz.',
      '<b>Kantenfrei oder mit Kantenschutz.</b>',
      '<b>Zugänglich</b>, ohne sich dafür ungesichert zu bewegen.',
      '<b>Redundant</b>, wo die Tragfähigkeit nicht sicher beurteilbar ist.'),
    DEF('Redundanz', 'Sicherheitsrelevante Systeme werden doppelt ausgelegt. Fällt ein Anschlagpunkt, ein Seil oder eine Verbindung aus, hält das zweite unabhängige System. Ein einzelner Fehler darf niemals zum Absturz führen. Wichtig ist dabei die <b>Unabhängigkeit</b>: Zwei Schlingen um dasselbe morsche Rohr sind keine Redundanz.'),

    H2('bandschlingen', 'Anschlagen mit Bandschlingen'),
    P('Bandschlingen sind das flexibelste Anschlagmittel. Wie sie gelegt werden, verändert allerdings die Belastung erheblich.'),
    KF(
      'Doppelter Ankerstich am Bauteil – einfach, materialschonend, gut kontrollierbar.',
      'Schlinge nicht über scharfe Kanten legen, sonst Kantenschutz verwenden.',
      'Kein spitzer Winkel zwischen den Schenkeln – je spitzer, desto höher die Kraft in jedem Schenkel.',
      'Bandschlingen nicht knoten, wenn genähte Schlingen verfügbar sind.',
      'Schlingen nicht über raue Oberflächen ziehen – Abrieb schwächt sie.',
      'Vor jeder Benutzung Sichtprüfung.'),
    CO('warn', 'Der Winkel zählt', 'Werden zwei Schenkel einer Schlinge in einem sehr spitzen Winkel zueinander belastet, wirkt in jedem Schenkel deutlich mehr Kraft als die eigentliche Last. Bei sehr flachen Anordnungen kann das ein Vielfaches sein. Deshalb: Schlingen möglichst mit weitem Winkel führen.'),

    H2('standplatz', 'Der sichere Standplatz'),
    P('Wer sichert, braucht selbst einen Platz, an dem er nicht abstürzen und nicht mitgerissen werden kann. Das wird regelmäßig übersehen – mit der Folge, dass im Sturzfall zwei Personen statt einer in Gefahr sind.'),
    KF(
      'Selbst gegen Absturz gesichert, bevor die Sicherungsaufgabe beginnt.',
      'Standfest, mit sicherem Tritt, nicht auf rutschigem oder losem Untergrund.',
      'So positioniert, dass die Last kontrolliert werden kann – möglichst in Zugrichtung.',
      'Nicht in der Fluchtlinie eines möglichen Seilrisses.',
      'Ausreichend Platz zum Arbeiten mit dem Sicherungsgerät.',
      'Rückzugsweg frei und bekannt.'),

    H2('dach', 'Arbeiten auf Dächern'),
    P('Das Dach ist der häufigste absturzgefährdete Arbeitsplatz der Feuerwehr – bei Sturmschäden, Dachstuhlbränden, Photovoltaikanlagen und Schneelast. Es bringt eigene Gefahren mit.'),
    CO('danger', 'Durchsturzgefahr', 'Lichtkuppeln, Oberlichter, Wellplatten und brandgeschwächte Dachflächen tragen keine Person. Sie sehen häufig aus wie begehbare Flächen und brechen ohne Vorwarnung durch. Auf unbekannten Dächern wird nur mit Lastverteilung – Leitern, Bohlen – und gesichert gearbeitet.'),
    KF(
      'Dachaufbau und Tragfähigkeit vor dem Betreten klären, wenn möglich beim Betreiber.',
      'Bei Brandeinwirkung grundsätzlich von Durchsturzgefahr ausgehen.',
      'Lichtkuppeln und Oberlichter weiträumig meiden.',
      'Nässe, Moos, Eis und Schnee machen jede Dachfläche rutschig.',
      'Photovoltaik: Module als spannungsführend behandeln, nicht betreten.',
      'Absturzkanten bei Dunkelheit ausleuchten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der Anschlagpunkt muss Sturzkräfte halten – nicht nur ein Körpergewicht.',
      'Geeignet: massive tragende Bauteile, geprüfte Anschlageinrichtungen.',
      'Ungeeignet: Regenrinnen, Lüftungsrohre, lose Geländer, Antennen.',
      '<b>Redundanz</b> heißt unabhängig – nicht zweimal derselbe Punkt.',
      'Bandschlingen mit weitem Winkel führen und vor Kanten schützen.',
      'Der Sichernde sichert sich selbst zuerst und steht kontrollierbar.',
      'Dächer: Durchsturzgefahr, Lichtkuppeln meiden, Lastverteilung nutzen.'),
  ],
},

/* ---------------------------------------------------------------- K6 ---- */
{
  id: 'k6', title: 'Retten aus Höhen & Tiefen – Ablauf', duration: 20,
  blocks: [
    P('Eine Rettung aus Höhe oder Tiefe ist Teamarbeit unter Zeitdruck, bei der mehrere Menschen gleichzeitig an einem System arbeiten. Sie gelingt nicht durch Schnelligkeit, sondern durch einen klaren Ablauf, eindeutige Kommandos und die Bereitschaft, jederzeit anzuhalten.'),

    H2('planung', 'Die Rettung planen'),
    STEPS(
      '<b>Lage erkunden:</b> Wo ist die Person, wie kommt man hin, welche Gefahren bestehen?',
      '<b>Eigene Sicherung herstellen</b> – bevor sich jemand der Kante nähert.',
      '<b>Kontakt aufnehmen:</b> Person ansprechen, Zustand grob einschätzen, beruhigen.',
      '<b>Kräfte und Zeit beurteilen:</b> Schaffen wir das? Was wird zusätzlich gebraucht?',
      '<b>Nachfordern:</b> Höhenrettung, Rettungsdienst, Drehleiter – frühzeitig.',
      '<b>Verfahren wählen:</b> Ablassen, Aufziehen, begleitetes Abseilen, Drehleiter.',
      '<b>System aufbauen</b> mit Redundanz und gegenseitiger Kontrolle.',
      '<b>Person sichern</b> und kontrolliert bewegen.',
      '<b>Übergeben</b> an den Rettungsdienst mit allen relevanten Informationen.'),
    CO('tip', 'Die Minute, die man investiert', 'Ein sauber geplanter Aufbau dauert wenige Minuten länger und spart oft zwanzig – weil nichts umgebaut, nichts korrigiert und nichts wiederholt werden muss. Unter Zeitdruck ist die Versuchung groß, sofort anzufangen. Genau dann lohnt es sich am meisten, kurz innezuhalten.'),

    H2('kommunikation', 'Kommandos und Kommunikation'),
    P('An einem Seilsystem arbeiten mehrere Personen, die einander teilweise nicht sehen. Missverständnisse haben hier unmittelbare Folgen. Deshalb werden feste Kommandos verwendet und jedes Kommando bestätigt.'),
    TBL(['Kommando', 'Bedeutung'],[
      ['„Seil aus"', 'Seil nachgeben'],
      ['„Seil ein"', 'Seil einholen, straffen'],
      ['„Stand"', 'ich bin gesichert und stehe sicher'],
      ['„Zu"', 'ich bin ins System eingebunden'],
      ['„Ab"', 'ich beginne mit dem Abseilen beziehungsweise Ablassen'],
      ['„Halt"', 'sofort alle Bewegungen stoppen'],
    ]),
    CO('danger', '„Halt" gilt sofort und für alle', 'Jede beteiligte Kraft darf „Halt" rufen, sobald sie etwas bemerkt – ein verkanteter Karabiner, ein scheuerndes Seil, ein Problem beim Patienten. Alle Bewegungen werden sofort eingestellt, ohne Rückfrage und ohne Diskussion. Geklärt wird danach.'),

    H2('kommandogeber', 'Der Kommandogeber'),
    P('Eine Person steuert den gesamten Ablauf. Sie hat den Überblick, gibt die Kommandos, koordiniert die Beteiligten und hält Verbindung zum Einheitsführer. Sie bedient dabei möglichst kein Gerät selbst – wer zieht, kann nicht gleichzeitig führen.'),
    KF(
      'Position mit Überblick über System, Patient und Beteiligte.',
      'Ablauf vor Beginn laut durchsprechen, damit alle dasselbe Bild haben.',
      'Partner-Check aller Verbindungen vor der ersten Belastung.',
      'Kommandos deutlich geben und bestätigen lassen.',
      'Bei Änderungen anhalten, neu absprechen, dann weitermachen.',
      'Nach Abschluss System kontrolliert abbauen.'),

    H2('patient', 'Umgang mit der geretteten Person'),
    P('Die Person, die gerettet wird, hat in aller Regel Angst, Schmerzen und keinerlei Kontrolle über die Situation. Ihre Betreuung ist kein Nebenthema, sondern beeinflusst den Verlauf erheblich.'),
    KF(
      'Von Anfang an Kontakt halten und erklären, was als Nächstes passiert.',
      'Nicht über den Kopf der Person hinweg über sie sprechen.',
      'Vor Kälte, Nässe und herabfallendem Material schützen.',
      'Bei Hängetrauma-Verdacht die Hängedauer merken und melden.',
      'Nach der Befreiung nicht abrupt flach lagern; bei Bewusstlosigkeit lebensrettende Maßnahmen.',
      'Strukturierte Übergabe an den Rettungsdienst.'),
    CO('warn', 'Auch scheinbar unverletzte Personen vorstellen', 'Wer im Gurt gehangen hat, gehört ärztlich untersucht – auch wenn er sich gut fühlt und selbst gehen kann. Die Auswirkungen eines Hängetraumas können verzögert eintreten.'),

    H2('abschluss', 'Nach dem Einsatz'),
    KF(
      'System kontrolliert und vollständig abbauen, nichts zurücklassen.',
      'Sturzbelastetes Material aussondern und kennzeichnen.',
      'Gesamtes Material sichten, reinigen, trocknen und prüfen lassen.',
      'Einsatz und Materialverwendung dokumentieren.',
      'Ablauf nachbesprechen – was hat gut funktioniert, was nicht?',
      'Belastende Einsätze mit der psychosozialen Notfallversorgung nachbereiten.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Erst planen, dann bauen – die investierte Minute spart mehrere.',
      'Eigene Sicherung vor jeder Annäherung an die Kante.',
      'Höhenrettung und Rettungsdienst frühzeitig nachfordern.',
      'Feste Kommandos verwenden und bestätigen lassen.',
      '„Halt" gilt sofort, für alle, ohne Rückfrage.',
      'Ein Kommandogeber führt und bedient möglichst kein Gerät.',
      'Patienten durchgehend betreuen, Hängedauer melden, ärztlich vorstellen.',
      'Sturzbelastetes Material aussondern, Einsatz dokumentieren und nachbesprechen.'),
  ],
},

];
