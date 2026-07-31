/* =========================================================================
   MODUL A — Rechtsgrundlagen & Organisation
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Diese Datei enthält ALLE Lektionen des Moduls A. Sie ersetzt die früher
   auf curriculum.js / curriculum-extra.js / curriculum-extra2.js verteilten
   Kurzfassungen. Blockformat siehe blocks.js und views/lesson.js.

   Fachliche Grundlage: Brandschutz- und Hilfeleistungsgesetze der Länder,
   FwDV 1/2/3/100, DGUV Vorschrift 49, DSGVO. Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_A = [

/* ---------------------------------------------------------------- A1 ---- */
{
  id: 'a1', title: 'Aufgaben & Rechtsgrundlagen', duration: 22,
  blocks: [
    P('Wer zum ersten Mal ein Feuerwehrhaus betritt, sieht Fahrzeuge, Geräte und Menschen, die anpacken. Was er nicht sieht, ist das rechtliche Gerüst, das dahintersteht: Jede Übung, jeder Einsatz und jede Entscheidung an der Einsatzstelle beruht auf Gesetzen, Vorschriften und Satzungen. Diese Lektion legt genau dieses Fundament – sie erklärt, <b>warum</b> es die Feuerwehr gibt, <b>was</b> sie tun muss, <b>was</b> sie tun darf und <b>wer</b> dafür verantwortlich ist.'),

    H2('aufgaben', 'Die vier Kernaufgaben'),
    P('Die Feuerwehr ist Teil der <b>nichtpolizeilichen Gefahrenabwehr</b>. Sie wehrt Gefahren für Leben, Gesundheit, Umwelt und Sachwerte ab, ohne Polizeibehörde zu sein. Ihre Aufgaben ergeben sich aus den <b>Brandschutz- und Hilfeleistungsgesetzen der Länder</b> – etwa dem BHKG in Nordrhein-Westfalen, dem BayFwG in Bayern oder dem FwG in Baden-Württemberg. So unterschiedlich diese Gesetze im Detail sind: Der Kern ist überall gleich und lässt sich mit einem Merkwort einprägen.'),
    MNE([{l:'R',w:'Retten'},{l:'L',w:'Löschen'},{l:'B',w:'Bergen'},{l:'S',w:'Schützen'}],
      'Retten – Löschen – Bergen – Schützen. Diese vier Begriffe beschreiben den gesamten Auftrag der Feuerwehr und geben zugleich die Rangfolge vor, in der abgearbeitet wird.'),
    FIG('feuerwehraufgaben', 'Die vier Kernaufgaben der Feuerwehr in ihrer Rangfolge: Retten steht immer an erster Stelle.'),

    H3('Retten'),
    P('Retten bedeutet, Menschen und Tiere aus einer <b>akuten Lebensgefahr</b> zu befreien und ihnen die notwendige Erstversorgung zukommen zu lassen. Das ist die höchstrangige Aufgabe: Solange Menschen in Gefahr sind, ordnet sich alles andere diesem Ziel unter. Praktisch heißt das, dass ein Trupp mit Strahlrohr an einer brennenden Wohnung zuerst die Personensuche durchführt und den Brand nur so weit bekämpft, wie es für den Rettungsweg nötig ist. Retten umfasst auch Menschen, die zwar nicht verletzt, aber eingeschlossen sind – etwa in einem Aufzug oder hinter einer verschlossenen Tür.'),

    H3('Löschen'),
    P('Löschen ist die Bekämpfung von <b>Schadenfeuern</b> jeder Art und Größe – vom Papierkorbbrand bis zum Großbrand einer Industriehalle. Der Begriff meint dabei nicht nur den Wasserstrahl: Dazu gehören ebenso das Verhindern der Brandausbreitung, das Kühlen benachbarter Bauteile und die Nachlöscharbeiten, mit denen ein Wiederaufflammen ausgeschlossen wird. Ein Brand gilt erst dann als abgearbeitet, wenn die Einsatzstelle sicher an den Eigentümer oder die Brandwache übergeben werden kann.'),

    H3('Bergen'),
    P('Bergen heißt, <b>Sachwerte in Sicherheit zu bringen</b> oder aus einer Zwangslage zu befreien. Das reicht vom Abdecken von Möbeln mit Planen über das Auspumpen eines Kellers bis zum Herausziehen eines Fahrzeugs aus einem Graben. Sprachlich wichtig – und in Prüfungen ein Klassiker: Menschen werden <b>gerettet</b>, solange sie leben. Verstorbene werden <b>geborgen</b>. Wer diese beiden Begriffe verwechselt, verwechselt in der Lagemeldung auch die Dringlichkeit.'),

    H3('Schützen'),
    P('Schützen bedeutet, <b>weitere Schäden abzuwenden</b>, die aus dem Schadenereignis erst entstehen würden. Dazu zählen das Auffangen auslaufender Betriebsstoffe, das Abdecken eines abgedeckten Daches gegen Regen, das Absichern einer Unfallstelle gegen den fließenden Verkehr oder das Zurückhalten von kontaminiertem Löschwasser. Diese Aufgabe wird von Außenstehenden oft unterschätzt, verhindert aber häufig den größeren Folgeschaden.'),

    KF(
      '<b>Retten</b> hat immer die höchste Priorität – Menschenrettung geht vor Brandbekämpfung.',
      '<b>Löschen</b> umfasst Bekämpfung, Ausbreitungsverhinderung und Nachlöscharbeiten.',
      '<b>Bergen</b> meint Sachwerte – und das In-Sicherheit-Bringen von Verstorbenen.',
      '<b>Schützen</b> = Abwehr weiterer Gefahren für Menschen, Umwelt und Sachwerte.'),
    CO('danger', 'Merksatz', 'Menschenrettung hat absoluten Vorrang. Alle anderen Maßnahmen ordnen sich diesem Ziel unter – auch dann, wenn dabei Sachschaden in Kauf genommen werden muss.'),

    H2('abwehrend', 'Abwehrender und vorbeugender Brandschutz'),
    P('Die vier Kernaufgaben beschreiben, was die Feuerwehr tut, <i>wenn</i> etwas passiert ist. Das ist der <b>abwehrende Brandschutz</b>. Daneben steht der <b>vorbeugende Brandschutz</b>: alles, was dafür sorgt, dass ein Brand gar nicht erst entsteht, sich nicht ausbreitet und Menschen sich rechtzeitig in Sicherheit bringen können. Dazu gehören Bauvorschriften, Rettungswege, Brandmeldeanlagen, Feuerwehrpläne und die Brandschutzerziehung in Kindergärten und Schulen.'),
    P('Beide Bereiche greifen ineinander. Wer im Einsatz von einer Brandwand profitiert, die den Brand auf einen Gebäudeteil begrenzt hat, erlebt vorbeugenden Brandschutz in Aktion. Deshalb ist die Feuerwehr bei Bauvorhaben als Träger öffentlicher Belange beteiligt und prüft mit, ob Zufahrten, Aufstellflächen und Löschwasserversorgung ausreichen. Die Details dazu vertieft <b>Modul M – Vorbeugender Brandschutz &amp; Objektkunde</b>.'),
    TBL(['Bereich', 'Ziel', 'Beispiele'],[
      ['Vorbeugender Brandschutz', 'Entstehung und Ausbreitung verhindern', 'Brandwände, Rettungswege, Brandmeldeanlage, Brandschutzerziehung'],
      ['Abwehrender Brandschutz', 'eingetretene Gefahr bekämpfen', 'Löscheinsatz, Menschenrettung, technische Hilfeleistung'],
    ]),

    H2('rechtsrahmen', 'Der rechtliche Rahmen'),
    P('Feuerwehrrecht ist in Deutschland <b>Ländersache</b>. Es gibt kein bundeseinheitliches Feuerwehrgesetz, weil die Gefahrenabwehr nach dem Grundgesetz zu den Aufgaben der Länder gehört. Jedes Bundesland regelt daher in einem eigenen Gesetz, wer Träger der Feuerwehr ist, welche Aufgaben sie hat und welche Pflichten Bürger und Einsatzkräfte treffen. Das erklärt, warum Dienstgrade, Bezeichnungen und Zuständigkeiten von Land zu Land abweichen – die Einsatztaktik dagegen ist über die FwDV bundesweit weitgehend einheitlich.'),
    P('Für die tägliche Praxis ist es hilfreich, die Regelwerke nach ihrer Verbindlichkeit zu ordnen. Von oben nach unten gilt: Was höher steht, hat Vorrang.'),
    TBL(['Ebene', 'Regelt', 'Verbindlichkeit', 'Beispiel'],[
      ['Landesgesetz', 'Aufgaben, Träger, Pflichten, Kosten', 'Gesetz – bindend', 'BHKG NRW, BayFwG, FwG BW'],
      ['Rechtsverordnung', 'Details zum Gesetz (Ausbildung, Laufbahn)', 'bindend', 'Feuerwehrverordnung des Landes'],
      ['DGUV Vorschrift', 'Arbeits- und Unfallschutz', 'bindend (Unfallversicherung)', 'DGUV Vorschrift 49 „Feuerwehren"'],
      ['FwDV', 'Taktik und Ausbildung, bundeseinheitlich', 'durch Landeseinführung bindend', 'FwDV 3, 7, 100, 500'],
      ['Satzung / Dienstanweisung', 'örtliche Regelungen der Gemeinde/Wehr', 'bindend vor Ort', 'Feuerwehrsatzung, Alarmordnung'],
      ['Normen (DIN/EN)', 'technische Ausführung von Geräten', 'Stand der Technik', 'DIN 14555 (Rüstwagen)'],
    ]),
    CO('info', 'Warum das wichtig ist', 'Wenn sich eine örtliche Dienstanweisung und eine FwDV widersprechen, entscheidet nicht das Bauchgefühl, sondern die Rangfolge – und im Zweifel die Anordnung der zuständigen Führungskraft. Frag im Dienst nach, statt an der Einsatzstelle zu improvisieren.'),

    H2('traeger', 'Träger, Pflichtaufgabe und Zuständigkeit'),
    DEF('Träger der Feuerwehr', 'In der Regel die Gemeinde. Sie ist gesetzlich verpflichtet, eine den örtlichen Verhältnissen entsprechende leistungsfähige Feuerwehr aufzustellen, auszurüsten, zu unterhalten und auszubilden. Es handelt sich um eine <b>Pflichtaufgabe</b> der Selbstverwaltung – die Gemeinde kann nicht entscheiden, ob sie eine Feuerwehr unterhält, sondern nur, wie sie das konkret umsetzt.'),
    P('Aus dieser Trägerschaft folgt eine ganze Kette von Konsequenzen: Die Gemeinde stellt das Feuerwehrhaus, beschafft Fahrzeuge und persönliche Schutzausrüstung, trägt die Kosten für Ausbildung und Versicherung und erlässt die Feuerwehrsatzung. Sie legt in der <b>Brandschutzbedarfsplanung</b> fest, welche Risiken im Gemeindegebiet bestehen und mit welchen Kräften und in welcher Zeit darauf reagiert werden soll.'),
    P('Oberhalb der Gemeinde stehen Kreis und Land. Der <b>Kreis</b> hält überörtliche Einrichtungen vor – etwa die Leitstelle, Fachberater, Sonderfahrzeuge und die Kreisausbildung – und unterstützt, wenn die Kräfte einer Gemeinde nicht ausreichen. Das <b>Land</b> betreibt die Landesfeuerwehrschule, regelt die Ausbildung der Führungskräfte und koordiniert den Katastrophenschutz. Wie diese Ebenen bei Großschadenlagen zusammenwirken, behandelt <b>Modul Z – Katastrophenschutz &amp; überörtliche Hilfe</b>.'),
    TBL(['Ebene', 'Typische Zuständigkeit'],[
      ['Gemeinde', 'Feuerwehr aufstellen, ausrüsten, unterhalten; Brandschutzbedarfsplan; Satzung'],
      ['Kreis / kreisfreie Stadt', 'Leitstelle, überörtliche Hilfe, Kreisausbildung, Fachberater, Sonderfahrzeuge'],
      ['Land', 'Landesfeuerwehrschule, Führungsausbildung, Katastrophenschutz, Förderung'],
      ['Bund', 'Zivilschutz (ergänzende Ausstattung), THW, Warnsysteme'],
    ]),

    H2('grenzen', 'Was die Feuerwehr darf – und was nicht'),
    P('Damit die Feuerwehr ihren Auftrag erfüllen kann, räumt ihr das Gesetz <b>Eingriffsbefugnisse</b> ein. Sie darf Grundstücke und Gebäude betreten, notfalls gewaltsam öffnen, Sachen beiseiteräumen oder zerstören, Personen von der Einsatzstelle verweisen und Straßen sperren lassen. Diese Befugnisse sind aber kein Freibrief: Sie gelten nur, soweit es zur Abwehr der konkreten Gefahr <b>erforderlich</b> ist, und sie müssen <b>verhältnismäßig</b> sein.'),
    P('Verhältnismäßig heißt: Von mehreren geeigneten Mitteln ist das mildeste zu wählen, und der angerichtete Schaden darf nicht außer Verhältnis zum abgewendeten Schaden stehen. Wer eine Wohnungstür öffnen muss, um einen hilflosen Bewohner zu erreichen, handelt richtig – auch wenn die Tür beschädigt wird. Wer dieselbe Tür einschlägt, obwohl der Nachbar einen Schlüssel hat und in zwei Minuten da ist, handelt es nicht.'),
    CO('warn', 'Nicht Aufgabe der Feuerwehr', 'Die Feuerwehr ist keine Polizei und keine Ordnungsbehörde. Sie ermittelt keine Brandursache im Sinne einer Strafverfolgung, klärt keine Schuldfragen und stellt keine Personalien fest. Bei Verdacht auf eine Straftat wird die Einsatzstelle gesichert und die Polizei hinzugezogen – Spuren bleiben unberührt, soweit die Gefahrenabwehr das zulässt.'),
    P('Ebenfalls klar abzugrenzen ist der <b>Rettungsdienst</b>. Er ist in den meisten Ländern eigenständig geregelt und wird von Hilfsorganisationen, Kreisen oder Berufsfeuerwehren betrieben. Die Feuerwehr leistet als Ersthelfer lebensrettende Sofortmaßnahmen und unterstützt bei der technischen Rettung, ersetzt aber nicht den Rettungsdienst. In manchen Städten ist die Berufsfeuerwehr zugleich Träger des Rettungsdienstes – das ist eine organisatorische Entscheidung, keine bundesweite Regel.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Feuerwehr gehört zur nichtpolizeilichen Gefahrenabwehr; ihre Aufgaben stehen in den Landesgesetzen.',
      'Kernaufgaben: <b>Retten, Löschen, Bergen, Schützen</b> – in dieser Rangfolge.',
      'Menschen werden gerettet, Sachwerte und Verstorbene geborgen.',
      'Abwehrender Brandschutz bekämpft, vorbeugender Brandschutz verhindert.',
      'Träger ist in der Regel die Gemeinde – Feuerwehr ist eine <b>Pflichtaufgabe</b>.',
      'Eingriffsbefugnisse gelten nur erforderlich und verhältnismäßig.',
      'Die Feuerwehr ist weder Polizei noch Ersatz für den Rettungsdienst.'),
  ],
},

/* ---------------------------------------------------------------- A2 ---- */
{
  id: 'a2', title: 'Organisation, Arten & taktische Einheiten', duration: 26,
  blocks: [
    P('Feuerwehr funktioniert nur, weil sie geordnet ist. An einer Einsatzstelle treffen Menschen aufeinander, die sich teilweise nicht kennen, unter Zeitdruck stehen und unter Atemschutz kaum sprechen können. Dass das trotzdem funktioniert, liegt an einer festen Gliederung mit klar verteilten Aufgaben. Diese Lektion zeigt, welche Arten von Feuerwehren es gibt, wie sich Einheiten von Trupp bis Zug aufbauen und wer in der Gruppe wofür zuständig ist.'),

    H2('arten', 'Arten von Feuerwehren'),
    P('Das Gesetz kennt mehrere Formen, eine Feuerwehr zu betreiben. Welche vor Ort besteht, hängt von Einwohnerzahl, Risiko und Struktur der Gemeinde ab.'),
    UL(
      '<b>Freiwillige Feuerwehr (FF):</b> Die mit Abstand häufigste Form. Ehrenamtliche Kräfte, die neben Beruf und Familie Dienst leisten. Rund 95 Prozent aller Feuerwehrangehörigen in Deutschland sind ehrenamtlich tätig. Größere Freiwillige Feuerwehren beschäftigen zusätzlich hauptamtliche Kräfte für Gerätewartung und Tagesalarmsicherheit.',
      '<b>Berufsfeuerwehr (BF):</b> Hauptamtliche Kräfte im Schichtdienst. Große Städte sind gesetzlich verpflichtet, eine Berufsfeuerwehr aufzustellen – die Schwelle liegt je nach Landesrecht meist bei etwa 100.000 Einwohnern. Die Berufsfeuerwehr arbeitet in der Regel eng mit der Freiwilligen Feuerwehr derselben Stadt zusammen.',
      '<b>Werkfeuerwehr (WF):</b> Feuerwehr eines Industrie- oder Gewerbebetriebs, etwa in Chemieparks, Raffinerien oder an Flughäfen. Sie wird von der Behörde anerkannt und kann bei besonderem Risiko sogar angeordnet werden. Werkfeuerwehren kennen ihr Objekt bis ins Detail und verfügen häufig über Spezialgerät.',
      '<b>Betriebsfeuerwehr:</b> Wie die Werkfeuerwehr betrieblich organisiert, aber ohne behördliche Anerkennung – daher ohne die damit verbundenen Rechte und Pflichten.',
      '<b>Pflichtfeuerwehr:</b> Der gesetzliche Notnagel. Kommt in einer Gemeinde keine ausreichende Freiwillige Feuerwehr zustande, kann die Gemeinde geeignete Einwohner zum Dienst verpflichten. In der Praxis ist das die absolute Ausnahme.'),
    CO('info', 'Jugendfeuerwehr und Kinderfeuerwehr', 'Sie sind keine eigene Feuerwehrart, sondern Nachwuchsabteilungen der Freiwilligen Feuerwehr. Sie nehmen nicht am Einsatzdienst teil. Mehr dazu in <b>Modul Q</b>.'),

    H2('gliederung', 'Taktische Einheiten'),
    P('Eine <b>taktische Einheit</b> ist eine Mannschaft mit ihrem Führer, die eine Aufgabe geschlossen abarbeiten kann. Die FwDV 3 kennt vier davon, und sie bauen aufeinander auf. Entscheidend ist der Begriff <b>selbstständig</b>: Die Gruppe ist die kleinste Einheit, die einen Löscheinsatz von der Wasserentnahme bis zum Strahlrohr komplett allein durchführen kann.'),
    TBL(['Einheit', 'Stärke', 'Zusammensetzung', 'Kann leisten'],[
      ['Trupp', '0/2 bis 0/3', 'Truppführer + 1–2 Truppmitglieder', 'ein Auftrag innerhalb einer Einheit'],
      ['selbstständiger Trupp', '1/2/3', 'Truppführer, Maschinist, Truppmann', 'kleine Einsätze, z. B. mit KLF/TSF'],
      ['Staffel', '1/5/6', 'Staffelführer, Maschinist, Angriffs- und Wassertrupp', 'einfacher Löschangriff'],
      ['Gruppe', '1/8/9', 'Gruppenführer, Melder, Maschinist, 3 Trupps', 'vollständiger Löscheinsatz'],
      ['Zug', 'i. d. R. 1/21/22', 'Zugtrupp + zwei Gruppen (Verband)', 'größere Schadenlagen, Abschnittsbildung'],
    ]),
    CO('info', 'Stärkeangabe lesen', 'Die Schreibweise <b>1/8/9</b> bedeutet: 1 Führer, 8 Mannschaft, 9 gesamt. Die dritte Zahl ist immer die Summe der beiden ersten – sie erspart der Leitstelle das Kopfrechnen. Bei der Lagemeldung wird die Stärke immer in dieser Reihenfolge genannt.'),
    FIG('einheiten', 'Taktische Einheiten vom Trupp bis zum Zug – der rote Punkt ist jeweils der Führer.'),
    P('Die Praxis weicht davon regelmäßig ab: Rückt eine Freiwillige Feuerwehr tagsüber mit sieben statt neun Kräften aus, arbeitet sie als Staffel weiter oder ergänzt sich mit dem nachrückenden Fahrzeug. Die Stärke wird deshalb bei der Ankunft gemeldet, damit die Einsatzleitung weiß, was tatsächlich verfügbar ist.'),

    H2('gruppe', 'Die Gruppe im Löscheinsatz (FwDV 3)'),
    P('Die Gruppe ist die Standardeinheit des deutschen Löscheinsatzes. Jede der neun Positionen hat eine feste Aufgabe – und zwar unabhängig davon, wer sie besetzt. Genau das macht die Zusammenarbeit auch mit fremden Wehren möglich: Ein Angriffstrupp aus der Nachbargemeinde weiß ohne Absprache, was von ihm erwartet wird.'),
    TBL(['Funktion', 'Kurz', 'Hauptaufgabe im Löscheinsatz'],[
      ['Gruppenführer', 'GF', 'führt die Gruppe, erkundet, gibt Befehle, hält Funkkontakt'],
      ['Melder', 'Me', 'unterstützt den Gruppenführer, übernimmt Sonderaufgaben'],
      ['Maschinist', 'Ma', 'fährt das Fahrzeug, bedient Pumpe und Aggregate, sichert die Einsatzstelle'],
      ['Angriffstrupp', 'A-Trupp', 'Menschenrettung und Brandbekämpfung – nimmt das erste Rohr vor'],
      ['Wassertrupp', 'W-Trupp', 'stellt die Wasserversorgung her, wird danach Sicherheitstrupp'],
      ['Schlauchtrupp', 'S-Trupp', 'verlegt Schläuche, setzt Verteiler, unterstützt die anderen Trupps'],
    ]),
    FIG('gruppe', 'Die Gruppe im Löscheinsatz nach FwDV 3 – Gruppenführer, Melder, Maschinist und die drei Trupps.'),
    P('Zwei Punkte werden in Prüfungen gern gefragt. Erstens: Der <b>Wassertrupp</b> hat eine Doppelrolle. Nachdem er die Wasserversorgung vom Hydranten zum Fahrzeug hergestellt hat, steht er als <b>Sicherheitstrupp</b> für den unter Atemschutz vorgehenden Angriffstrupp bereit. Zweitens: Der <b>Angriffstrupp</b> geht immer zuerst vor – er hat den Auftrag der Menschenrettung, und alle anderen Trupps arbeiten ihm zu.'),
    P('Die genauen Befehle, Kommandos und Handgriffe dieses Ablaufs sind Gegenstand von <b>Modul E – Löscheinsatz &amp; Einsatzlehre</b>. Hier reicht das Bild der Rollenverteilung.'),
    CO('tip', 'Merkhilfe für die Trupp-Reihenfolge', 'A vor W vor S: <b>A</b>ngriff rettet, <b>W</b>asser versorgt, <b>S</b>chlauch verbindet. In dieser Reihenfolge werden die Trupps auch aufgesessen und abgesessen eingeteilt.'),

    H2('verbaende', 'Über den Zug hinaus'),
    P('Reicht ein Zug nicht aus, werden mehrere Einheiten zu <b>Verbänden</b> zusammengefasst. Gebräuchlich sind Bereitschaften und Abteilungen, die überörtlich alarmiert werden – etwa bei Waldbränden, Hochwasser oder Großbränden. Wie so eine Struktur geführt wird, welche Führungsstufen es gibt und wie Einsatzabschnitte gebildet werden, behandeln <b>Modul L (Führung, FwDV 100)</b> und <b>Modul Z (Katastrophenschutz)</b>.'),

    H2('dienstgrade', 'Dienstgrad, Funktion und Ausbildung'),
    P('Am Helm und auf den Schulterklappen sind <b>Dienstgrade</b> zu sehen. Sie richten sich nach Landesrecht und drücken Ausbildungsstand, Funktion und Dienstzeit aus. Davon streng zu unterscheiden ist die <b>Funktion</b>, also die Aufgabe im konkreten Einsatz. Wer an diesem Abend als Gruppenführer eingeteilt ist, führt die Gruppe – auch dann, wenn ein Kamerad mit höherem Dienstgrad in derselben Gruppe Truppmann ist.'),
    CO('tip', 'Der Satz, der alles klärt', 'Im Einsatz zählt die Funktion, nicht der Dienstgrad. Der Dienstgrad sagt, was jemand gelernt hat; die Funktion sagt, was er jetzt gerade tut.'),
    P('Damit die Funktionen an der Einsatzstelle sichtbar sind, werden Kennzeichnungswesten getragen – für Einsatzleiter, Abschnittsleiter, Atemschutzüberwachung oder Sicherheitstrupp. Die genaue Laufbahn mit ihren Lehrgängen ist Thema der Lektion <b>Dienstgrade, Laufbahn &amp; Funktionen</b> in diesem Modul.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Feuerwehrarten: Freiwillige, Berufs-, Werk-, Betriebs- und Pflichtfeuerwehr.',
      'Taktische Einheiten: Trupp – selbstständiger Trupp – Staffel – Gruppe – Zug.',
      'Die <b>Gruppe (1/8/9)</b> ist die kleinste Einheit für einen vollständigen Löscheinsatz.',
      'Stärkeangabe: Führer / Mannschaft / Gesamt.',
      'Gruppe = GF, Melder, Maschinist, Angriffs-, Wasser- und Schlauchtrupp.',
      'Der Wassertrupp wird nach der Wasserversorgung zum <b>Sicherheitstrupp</b>.',
      'Funktion schlägt Dienstgrad – immer.'),
  ],
},

/* ---------------------------------------------------------------- A3 ---- */
{
  id: 'a3', title: 'Alarmierung, Einsatzablauf & Pflichten', duration: 24,
  blocks: [
    P('Zwischen dem Notruf eines Bürgers und der Rückkehr des letzten Fahrzeugs liegt ein streng geregelter Ablauf. Er ist deshalb so festgelegt, weil unter Zeitdruck niemand neu nachdenken soll: Wer weiß, was als Nächstes kommt, verliert keine Sekunde. Diese Lektion führt einmal komplett durch den Einsatz – und klärt danach, welche Rechte und Pflichten für dich als Einsatzkraft daraus folgen.'),

    H2('alarm', 'Von der Alarmierung zum Einsatz'),
    STEPS(
      'Der Notruf <b>112</b> geht in der Leitstelle ein – kostenfrei, aus jedem Netz, ohne Vorwahl.',
      'Der Disponent erfragt strukturiert die Lage (Wo? Was? Wie viele Betroffene? Welche Gefahren? Wer meldet?) und vergibt ein Einsatzstichwort.',
      'Nach der <b>Alarm- und Ausrückeordnung (AAO)</b> werden automatisch die passenden Einheiten alarmiert – über Sirene, Funkmeldeempfänger oder App.',
      'Die Einsatzkräfte rücken zum Gerätehaus aus, besetzen die Fahrzeuge und melden sich einsatzbereit.',
      'Anfahrt mit <b>Sonder- und Wegerechten</b>, sofern das Stichwort das rechtfertigt.',
      'An der Einsatzstelle: Erkundung, Lagebeurteilung, Befehlsgebung, Einsatzdurchführung.',
      'Nach Abschluss: Rückbau, Übergabe der Einsatzstelle, Rückfahrt.',
      'Im Gerätehaus: Geräte reinigen und prüfen, Fahrzeuge auffüllen, <b>Einsatzbereitschaft wiederherstellen</b>, Einsatz dokumentieren.'),
    CO('warn', 'Der Einsatz endet nicht an der Einsatzstelle', 'Ein häufiger Anfängerfehler ist, nach dem letzten Strahlrohr abzuschalten. Erst wenn Schläuche gewaschen, Atemschutzgeräte getauscht, der Tank gefüllt und das Fahrzeug wieder beladen ist, ist die Wehr für den nächsten Notruf bereit – und der kann zehn Minuten später kommen.'),

    H2('aao', 'Alarm- und Ausrückeordnung, Schutzziel und Hilfsfrist'),
    DEF('Alarm- und Ausrückeordnung (AAO)', 'Ein vorab festgelegter Plan, welche Einheiten und Fahrzeuge bei welchem Einsatzstichwort automatisch alarmiert werden. Die AAO nimmt dem Disponenten die Einzelfallentscheidung ab und sorgt für schnelle, bedarfsgerechte und immer gleiche Alarmierung – auch nachts um drei.'),
    P('Die AAO ist der Grund, warum bei „Feuer 2 – Menschenleben in Gefahr" ohne Rückfrage mehrere Fahrzeuge und der Rettungsdienst gleichzeitig auf die Straße gehen. Sie wird von der Gemeinde beziehungsweise dem Kreis aufgestellt und regelmäßig fortgeschrieben, wenn sich Risiken, Fahrzeuge oder Personalstärken ändern.'),
    DEF('Schutzziel & Hilfsfrist', 'Das Schutzziel legt fest, mit wie vielen Einsatzkräften die Feuerwehr in welcher Zeit und mit welcher Zuverlässigkeit an einer Einsatzstelle sein soll. Die <b>Hilfsfrist</b> ist der Zeitanteil davon, gemessen typischerweise von der Alarmierung bis zum Eintreffen der ersten Einheit. Konkrete Werte legt die Gemeinde im Brandschutzbedarfsplan fest – sie unterscheiden sich je nach Land und Struktur erheblich.'),
    P('Hinter den Zahlen steckt Brandphysik und Medizin: Nach einigen Minuten ohne Sauerstoff entstehen bleibende Hirnschäden, und ein Zimmerbrand kann nach wenigen Minuten in den Flashover übergehen. Die Hilfsfrist ist also kein Verwaltungswert, sondern der Versuch, rechtzeitig da zu sein, solange Rettung überhaupt noch möglich ist.'),

    H2('sonderrechte', 'Sonderrechte und Wegerecht'),
    P('Zwei Begriffe, die ständig verwechselt werden, aber Unterschiedliches bedeuten.'),
    TBL(['Begriff', 'Was es erlaubt', 'Voraussetzung'],[
      ['Sonderrechte (§ 35 StVO)', 'Befreiung von den Vorschriften der StVO, soweit zur Erfüllung hoheitlicher Aufgaben dringend geboten', 'dringende Aufgabe – auch ohne Blaulicht/Horn möglich'],
      ['Wegerecht (§ 38 StVO)', 'andere Verkehrsteilnehmer müssen sofort freie Bahn schaffen', '<b>Blaulicht und Einsatzhorn zusammen</b>'],
    ]),
    P('Wichtig ist der Zusatz in beiden Paragrafen: Sonderrechte dürfen nur unter <b>gebührender Berücksichtigung der öffentlichen Sicherheit und Ordnung</b> ausgeübt werden. Wer eine rote Ampel überfährt und dabei einen Unfall verursacht, kann sich nicht auf Paragraf 35 berufen. Die Verantwortung bleibt beim Fahrzeugführer – dem Maschinisten. Vertieft wird das in <b>Modul N – Maschinist</b>.'),
    CO('danger', 'Blaulicht allein reicht nicht', 'Nur Blaulicht bedeutet: „Achtung, Einsatzfahrt" – niemand muss Platz machen. Erst Blaulicht <b>und</b> Einsatzhorn verpflichten andere, sofort freie Bahn zu schaffen. Und selbst dann darf man sich nie darauf verlassen, dass es alle bemerken.'),

    H2('pflichten', 'Pflichten der Einsatzkräfte'),
    P('Mit dem Eintritt in die Feuerwehr übernimmst du Pflichten, die über das Erscheinen zum Dienst hinausgehen. Sie ergeben sich aus Landesgesetz, Satzung und Dienstanweisungen.'),
    UL(
      '<b>Teilnahmepflicht:</b> regelmäßige Teilnahme an Ausbildung, Übungen und – im Rahmen des Möglichen – am Einsatzdienst.',
      '<b>Weisungsgebundenheit:</b> Befolgen der Anordnungen von Vorgesetzten und Einsatzleitung. Das ist keine Formalität, sondern Voraussetzung für sicheres Arbeiten.',
      '<b>Verschwiegenheit:</b> über alles, was du über persönliche Verhältnisse Betroffener erfährst – auch nach dem Ausscheiden aus dem Dienst.',
      '<b>Sorgfaltspflicht:</b> pfleglicher Umgang mit Ausrüstung, Melden von Mängeln und Schäden.',
      '<b>Eigensicherung:</b> Du bist verpflichtet, dich selbst nicht unnötig zu gefährden – ein verletzter Feuerwehrangehöriger bindet Kräfte, statt zu helfen.',
      '<b>Gesundheitliche Eignung:</b> insbesondere für Atemschutz (arbeitsmedizinische Vorsorge nach G 26.3).'),
    CO('warn', 'Grenzen des Gehorsams', 'Weisungsgebunden heißt nicht bedingungslos. Einen Befehl, der offensichtlich eine Straftat darstellt oder zu einer unvertretbaren Eigengefährdung führt, musst du nicht ausführen. Der richtige Weg ist die klare Rückmeldung an den Befehlsgeber – „Ich kann den Auftrag so nicht ausführen, weil …" – und nicht das stille Ignorieren.'),

    H2('rechte', 'Rechte und Absicherung'),
    P('Dem gegenüber stehen Rechte, die das Ehrenamt überhaupt erst möglich machen.'),
    UL(
      '<b>Freistellung durch den Arbeitgeber:</b> Für Einsätze und angeordnete Ausbildungen ist der Arbeitgeber zur Freistellung verpflichtet.',
      '<b>Lohnfortzahlung:</b> Der Arbeitgeber zahlt weiter und kann sich die Kosten von der Gemeinde erstatten lassen. Selbstständigen wird der Verdienstausfall ersetzt.',
      '<b>Benachteiligungsverbot:</b> Aus dem Feuerwehrdienst darf kein beruflicher Nachteil entstehen.',
      '<b>Unfallversicherungsschutz:</b> über die zuständige Unfallkasse – für Einsatz, Ausbildung, Dienstsport und auch für die Wege dorthin.',
      '<b>Ersatz von Sachschäden:</b> Im Dienst beschädigte private Gegenstände werden im Rahmen der landesrechtlichen Regelungen ersetzt.',
      '<b>Aus- und Fortbildung</b> auf Kosten des Trägers.'),
    P('Der Versicherungsschutz ist der Punkt, den viele unterschätzen. Er greift nur im dienstlichen Zusammenhang – also für angeordnete oder gebilligte Tätigkeiten. Die eigenmächtige Fahrt zur Einsatzstelle in Zivil mit dem Privatwagen kann hier eine Grauzone sein; frage im Zweifel deinen Wehrführer, wie das bei euch geregelt ist.'),

    H2('betreten', 'Betretungs- und Eingriffsrechte'),
    P('Zur Gefahrenabwehr darf die Feuerwehr Grundstücke und Gebäude betreten, Türen gewaltsam öffnen, Sachen entfernen und den Verkehr umleiten lassen. Anwesende können zur Hilfeleistung herangezogen und Unbeteiligte von der Einsatzstelle verwiesen werden. Wie in Lektion 1 beschrieben, gilt für all das der Grundsatz der Verhältnismäßigkeit.'),
    P('Praktisch wichtig ist die Dokumentation: Wird eine Tür geöffnet oder ein Bauteil zerstört, gehört das in den Einsatzbericht – mit Begründung. Das schützt die Wehr im Streitfall und ist zugleich die Grundlage für die Schadenregulierung.'),

    H2('kosten', 'Kostenfreiheit und ihre Ausnahmen'),
    P('Der Grundsatz lautet: Die <b>Rettung von Menschen und die Bekämpfung von Schadenfeuern sind kostenfrei</b>. Niemand soll aus Angst vor einer Rechnung zögern, die 112 zu wählen. Von diesem Grundsatz gibt es allerdings Ausnahmen, die das Landesrecht und die kommunale Gebührensatzung regeln.'),
    TBL(['Fall', 'In der Regel'],[
      ['Brandbekämpfung, Menschenrettung', 'kostenfrei'],
      ['Vorsätzlich oder grob fahrlässig verursachter Einsatz', 'kostenpflichtig'],
      ['Missbräuchlicher Alarm / böswillige Alarmierung', 'kostenpflichtig'],
      ['Fehlalarm einer Brandmeldeanlage', 'häufig kostenpflichtig (Satzung)'],
      ['Technische Hilfeleistung, z. B. nach Verkehrsunfall', 'oft kostenpflichtig (Verursacher/Versicherung)'],
      ['Gefahrgut- und Ölschadeneinsätze', 'kostenpflichtig gegenüber dem Verursacher'],
      ['Türöffnung für Hilflose', 'meist kostenfrei; ohne Notlage kostenpflichtig'],
    ]),
    CO('info', 'Was du Betroffenen sagen kannst', 'Auf die Frage „Was kostet mich das?" ist die einzig richtige Antwort: „Darüber entscheidet nicht die Einsatzkraft, sondern die Gemeinde nach ihrer Satzung." Niemals Zusagen machen – weder in die eine noch in die andere Richtung.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Ablauf: Notruf → Disposition nach AAO → Ausrücken → Erkundung → Durchführung → Wiederherstellung der Einsatzbereitschaft.',
      'Die <b>AAO</b> legt vorab fest, wer bei welchem Stichwort alarmiert wird.',
      '<b>Sonderrechte</b> = Befreiung von der StVO; <b>Wegerecht</b> = freie Bahn, nur mit Blaulicht <b>und</b> Horn.',
      'Pflichten: Teilnahme, Weisung, Verschwiegenheit, Sorgfalt, Eigensicherung.',
      'Rechte: Freistellung, Lohnfortzahlung, Benachteiligungsverbot, Unfallversicherung.',
      'Eingriffsbefugnisse nur erforderlich, verhältnismäßig und dokumentiert.',
      'Brandbekämpfung und Menschenrettung sind grundsätzlich kostenfrei.'),
  ],
},

/* ---------------------------------------------------------------- A4 ---- */
{
  id: 'a4', title: 'Dienstgrade, Laufbahn & Funktionen', duration: 22,
  blocks: [
    P('„Was bedeuten eigentlich die Balken auf dem Helm?" – diese Frage stellt sich jeder neue Feuerwehrangehörige in der ersten Woche. Die Antwort ist überraschend vielschichtig, denn hinter der Kennzeichnung stehen drei verschiedene Dinge, die im Alltag oft in einen Topf geworfen werden: Dienstgrad, Funktion und Qualifikation. Diese Lektion trennt sie sauber und zeigt den Weg durch die Laufbahn der Freiwilligen Feuerwehr.'),

    H2('unterschied', 'Dienstgrad, Funktion, Qualifikation'),
    TBL(['Begriff', 'Beantwortet die Frage', 'Beispiel', 'Sichtbar an'],[
      ['Dienstgrad', 'Welchen Rang hat die Person?', 'Oberfeuerwehrmann', 'Schulterklappe, Helmkennzeichnung'],
      ['Funktion', 'Welche Aufgabe hat sie <i>jetzt</i>?', 'Gruppenführer dieses Einsatzes', 'Kennzeichnungsweste'],
      ['Qualifikation', 'Welchen Lehrgang hat sie bestanden?', 'Atemschutzgeräteträger', 'Ausbildungsnachweis'],
    ]),
    P('Der Unterschied ist mehr als Wortklauberei. Der <b>Dienstgrad</b> wird verliehen und bleibt – er zeigt Ausbildungsstand und Dienstzeit an und ist landesrechtlich geregelt, weshalb Bezeichnungen und Abzeichen von Bundesland zu Bundesland abweichen. Die <b>Funktion</b> wird für einen Einsatz oder eine Zeit übertragen und kann wechseln: Wer heute Gruppenführer ist, kann morgen als Maschinist eingeteilt sein. Die <b>Qualifikation</b> schließlich ist der bestandene Lehrgang – ohne sie darf eine Funktion gar nicht erst übertragen werden.'),
    CO('tip', 'Die Faustregel', 'Der Dienstgrad sagt, was jemand kann. Die Funktion sagt, was er heute tut. Im Einsatz zählt ausschließlich die Funktion.'),

    H2('laufbahn', 'Die Laufbahn der Freiwilligen Feuerwehr'),
    P('Die Ausbildung ist modular aufgebaut: Jeder Lehrgang setzt auf dem vorherigen auf, und Fachlehrgänge lassen sich je nach Bedarf und Neigung ergänzen. Grundlage ist die <b>FwDV 2 (Ausbildung der Freiwilligen Feuerwehren)</b>, die das Land in eigenen Vorschriften umsetzt.'),
    STEPS(
      '<b>Feuerwehranwärter:</b> Eintritt in den aktiven Dienst, meist mit 16 oder 17 Jahren – häufig aus der Jugendfeuerwehr kommend.',
      '<b>Truppmann/-frau Teil 1 (Grundausbildung, MTA):</b> der Basislehrgang. Danach ist der Einsatzdienst unter Aufsicht möglich.',
      '<b>Truppmann/-frau Teil 2:</b> zweijährige praktische Ausbildungsphase in der eigenen Wehr mit Übungen, Einsatzdiensten und Fachlehrgängen.',
      '<b>Truppführer:</b> befähigt zur Führung eines Trupps – die erste Führungsfunktion.',
      '<b>Gruppenführer:</b> führt Gruppe oder Staffel und ist damit an vielen Einsatzstellen der erste Einsatzleiter.',
      '<b>Zugführer:</b> führt einen Zug, bildet Einsatzabschnitte, leitet größere Einsatzstellen.',
      '<b>Verbandsführer:</b> führt Verbände oberhalb der Zugstärke, Führungsstufe C/D nach FwDV 100.'),
    DEF('Modulare Truppausbildung (MTA)', 'Das in vielen Ländern eingeführte Ausbildungskonzept, das die frühere starre Trennung von Truppmann-Grundlehrgang und Truppführerlehrgang durch aufeinander aufbauende Module ersetzt. Basismodul, Fachmodule (z. B. Sprechfunk, Atemschutz, Technische Hilfeleistung) und ein Abschlussmodul führen zur vollständigen Truppausbildung.'),

    H2('lehrgaenge', 'Die wichtigsten Lehrgänge'),
    TBL(['Lehrgang', 'Befähigt zu', 'Typische Voraussetzung'],[
      ['Truppmann/-frau (MTA)', 'Grundtätigkeiten im Trupp', 'Aufnahme in die Wehr'],
      ['Sprechfunker', 'Bedienung von Funkgeräten, Sprechfunkverkehr', 'Truppmann Teil 1'],
      ['Atemschutzgeräteträger', 'Einsatz unter umluftunabhängigem Atemschutz', 'Mindestalter 18, G 26.3, Truppmann Teil 1'],
      ['Maschinist', 'Bedienung von Fahrzeug, Pumpe und Aggregaten', 'Truppmann Teil 1, Fahrerlaubnis'],
      ['Technische Hilfeleistung', 'Arbeiten mit hydraulischem Rettungsgerät', 'Truppmann Teil 1'],
      ['Truppführer', 'Führung eines Trupps', 'abgeschlossene Truppausbildung'],
      ['Gruppenführer', 'Führung einer Gruppe/Staffel, Einsatzleitung', 'Truppführer + Fachlehrgänge'],
      ['Zugführer', 'Führung eines Zuges', 'Gruppenführer + Erfahrung'],
      ['Ausbilder in der Feuerwehr', 'Ausbildung auf Standort-/Kreisebene', 'Führungslehrgang'],
    ]),
    CO('info', 'Landesrecht schlägt Faustregel', 'Bezeichnungen, Lehrgangsdauern und Zugangsvoraussetzungen unterscheiden sich zwischen den Ländern deutlich. Die Tabelle beschreibt das gemeinsame Grundmuster – maßgeblich ist immer die Ausbildungsvorschrift deines Landes.'),

    H2('funktionen', 'Funktionen sichtbar machen'),
    P('An einer größeren Einsatzstelle stehen schnell 40 Menschen in gleicher Schutzkleidung. Damit trotzdem jeder sofort erkennt, wer führt und wer welche Sonderaufgabe hat, werden <b>Kennzeichnungswesten</b> und Helmkennzeichnungen verwendet. Die Farbgebung ist landes- oder kreisweise geregelt, das Prinzip überall gleich: Führung und Sonderfunktionen müssen auf einen Blick erkennbar sein.'),
    UL(
      '<b>Einsatzleiter</b> – verantwortlich für die gesamte Einsatzstelle',
      '<b>Abschnittsleiter</b> – führt einen Einsatzabschnitt',
      '<b>Gruppen-/Zugführer</b> – führt seine taktische Einheit',
      '<b>Atemschutzüberwachung</b> – überwacht Zeiten und Verbleib der Atemschutztrupps',
      '<b>Sicherheitstrupp</b> – bereit zur Rettung vorgehender Trupps',
      '<b>Fachberater</b> – Chemie, Bahn, Elektrizitätsversorgung, Statik'),
    CO('warn', 'Ohne Kennzeichnung keine Führung', 'Wenn niemand erkennt, wer die Einsatzleitung hat, entstehen Doppelbefehle und Lücken. Die Weste anzulegen gehört deshalb zu den ersten Handlungen des Einsatzleiters – nicht zu den letzten.'),

    H2('ehrenamt', 'Ehrenamt, Anerkennung und Verantwortung'),
    P('Rund eine Million Menschen engagieren sich in Deutschland ehrenamtlich in der Feuerwehr. Sie stellen den weit überwiegenden Teil des Brandschutzes sicher – oft unbemerkt, nachts, bei jedem Wetter, neben Beruf und Familie. Dienstgrade, Ehrenzeichen und Auszeichnungen für langjährige Mitgliedschaft sind der sichtbare Ausdruck dieser Anerkennung.'),
    P('Mit der Beförderung wächst zugleich die Verantwortung. Wer eine Führungsfunktion übernimmt, trifft Entscheidungen, von denen die Sicherheit anderer abhängt – und muss dafür geradestehen. Deshalb ist die Laufbahn kein Selbstzweck: Sie stellt sicher, dass Verantwortung erst dann übertragen wird, wenn die Ausbildung dafür nachgewiesen ist.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      '<b>Dienstgrad</b> = Rang, <b>Funktion</b> = aktuelle Aufgabe, <b>Qualifikation</b> = Lehrgang.',
      'Laufbahn: Anwärter → Truppmann 1 & 2 → Truppführer → Gruppenführer → Zugführer → Verbandsführer.',
      'Die <b>MTA</b> gliedert die Truppausbildung in aufeinander aufbauende Module.',
      'Fachlehrgänge (Funk, Atemschutz, Maschinist, THL) ergänzen die Laufbahn.',
      'Kennzeichnungswesten machen Führung und Sonderfunktionen sichtbar.',
      'Bezeichnungen und Voraussetzungen regelt das jeweilige Landesrecht.'),
  ],
},

/* ---------------------------------------------------------------- A5 ---- */
{
  id: 'a5', title: 'Datenschutz, Schweigepflicht & Öffentlichkeit', duration: 20,
  blocks: [
    P('Die Feuerwehr kommt dorthin, wo sonst niemand hinkommt: in Wohnungen, in Fahrzeuge, in die schlimmsten Momente eines Menschenlebens. Aus diesem Vertrauen erwächst eine Verpflichtung, die genauso zum Handwerk gehört wie das Strahlrohr. Diese Lektion behandelt Verschwiegenheit, Datenschutz und das Verhalten gegenüber Presse und Öffentlichkeit – Themen, bei denen ein einzelner Fehler das Ansehen einer ganzen Wehr beschädigen kann.'),

    H2('schweigen', 'Die Verschwiegenheitspflicht'),
    P('Im Einsatz erfährst du Dinge, die niemanden sonst etwas angehen: gesundheitliche Probleme, Suchterkrankungen, verwahrloste Wohnungen, familiäre Konflikte, finanzielle Notlagen, Suizidversuche. Diese Informationen unterliegen der <b>Verschwiegenheitspflicht</b>. Sie gilt gegenüber jedermann – gegenüber Freunden, gegenüber der Familie, im Feuerwehrhaus am Stammtisch und erst recht gegenüber der Presse.'),
    P('Die Pflicht endet nicht mit dem Einsatz und auch nicht mit dem Austritt aus der Feuerwehr. Sie hat zwei Wurzeln: das Feuerwehrgesetz beziehungsweise die Satzung deiner Wehr und das allgemeine Persönlichkeitsrecht der Betroffenen. Verstöße können dienstrechtliche Konsequenzen haben und im Einzelfall auch strafbar sein.'),
    CO('warn', 'Der häufigste Fehler', 'Nicht die große Indiskretion ist das Problem, sondern der beiläufige Satz: „Du glaubst nicht, wie es da drin aussah." In einem Dorf mit 2.000 Einwohnern reicht das aus, um die Betroffenen zu identifizieren. Erzähle vom Einsatz, nicht von den Menschen.'),
    P('Erlaubt und wichtig ist dagegen das Gespräch <b>innerhalb</b> der Einheit: Einsatznachbesprechung, fachlicher Austausch und – bei belastenden Einsätzen – das Gespräch mit der psychosozialen Notfallversorgung. Das ist kein Widerspruch zur Verschwiegenheit, sondern ihr geschützter Rahmen.'),

    H2('fotos', 'Fotos und soziale Medien'),
    CO('danger', 'Keine Einsatzfotos', 'Fotos oder Videos von Betroffenen, Verletzten, Verstorbenen, von Innenräumen oder erkennbaren Fahrzeugen und Adressen dürfen nicht angefertigt und erst recht nicht verbreitet werden. Das verletzt Persönlichkeitsrechte und Datenschutz, kann strafbar sein (unter anderem nach § 201a StGB) und zerstört das Vertrauen, von dem die Feuerwehr lebt.'),
    P('Auch das scheinbar harmlose Bild hat Tücken. Ein Foto der Einsatzstelle ohne Personen kann über das Kennzeichen eines Fahrzeugs, ein Hausnummernschild oder die Metadaten des Bildes den Betroffenen identifizierbar machen. Und ein Bild, das im geschlossenen Gruppenchat der Wehr geteilt wird, ist erfahrungsgemäß nach zwei Weiterleitungen öffentlich.'),
    P('Offizielle Öffentlichkeitsarbeit ist etwas anderes: Sie wird vom Wehrführer oder dem Pressebeauftragten verantwortet, folgt einer klaren Linie und zeigt Einsatzgeschehen ohne identifizierbare Betroffene. Wenn deine Wehr eine Social-Media-Richtlinie hat, ist sie verbindlich – wenn nicht, gilt der Grundsatz: im Zweifel nicht veröffentlichen.'),

    H2('dsgvo', 'Datenschutz nach DSGVO'),
    P('Die Datenschutz-Grundverordnung gilt auch für die Feuerwehr. Personenbezogene Daten – Namen, Adressen, Gesundheitsdaten, Einsatzberichte, Fotos, Funktionsverzeichnisse – dürfen nur verarbeitet werden, wenn es dafür eine Rechtsgrundlage gibt, und nur für den Zweck, für den sie erhoben wurden.'),
    UL(
      '<b>Zweckbindung:</b> Einsatzdaten dienen der Gefahrenabwehr und der Dokumentation – nicht der privaten Neugier.',
      '<b>Datenminimierung:</b> nur erheben, was gebraucht wird.',
      '<b>Vertraulichkeit:</b> Einsatzberichte, Alarmlisten und Personaldaten gehören nicht auf private Geräte oder in offene Ablagen.',
      '<b>Löschung:</b> Aufbewahrungsfristen beachten, danach vernichten.',
      '<b>Digitale Einsatzmittel:</b> Tablets, Alarm-Apps und Einsatzsoftware sorgfältig behandeln, Bildschirmsperre nutzen, keine privaten Cloud-Dienste.'),
    P('Ein praktischer Sonderfall sind <b>Gesundheitsdaten</b>. Sie zählen zu den besonders geschützten Datenkategorien. Was du über den Zustand eines Patienten erfährst, gehört ausschließlich in die Übergabe an den Rettungsdienst – nicht in den Einsatzbericht der Wehr und nicht in ein Gespräch danach.'),

    H2('presse', 'Verhalten gegenüber Presse und Schaulustigen'),
    P('Journalisten haben ein berechtigtes Interesse an Informationen, und eine sachlich informierte Presse hilft der Feuerwehr. Auskünfte gibt aber ausschließlich die dafür zuständige Stelle: die Einsatzleitung oder der Pressesprecher. Als Einsatzkraft im Trupp äußerst du dich <b>nicht</b> zu Ursache, Schuld, Schadenhöhe oder zum Zustand von Betroffenen.'),
    STEPS(
      'Freundlich bleiben, nicht abweisend – die Presse tut ihre Arbeit.',
      'Auf die Einsatzleitung beziehungsweise den Pressesprecher verweisen.',
      'Keine Spekulationen über Ursache, Schuld oder Opfer äußern.',
      'Presse aus dem Gefahrenbereich heraushalten – das ist Arbeitsschutz, nicht Zensur.',
      'Aufnahmen von Betroffenen unterbinden, indem Sichtschutz gestellt wird (Planen, Fahrzeuge).'),
    P('Schaulustige sind das andere Extrem. Sie behindern, gefährden sich selbst und filmen häufig. Der richtige Umgang ist ruhige Bestimmtheit: Absperrgrenze klar benennen, Begründung geben („Hier arbeitet Rettungsdienst, bitte treten Sie zurück"), bei Uneinsichtigkeit die Polizei einbinden. Diskussionen an der Absperrung bindet Kräfte, die woanders gebraucht werden.'),
    CO('tip', 'Botschafter der Feuerwehr', 'Jede Einsatzkraft prägt das Bild ihrer Wehr – in Uniform, im Ort und in sozialen Medien. Respekt, Zurückhaltung und Hilfsbereitschaft wirken stärker als jede Imagekampagne. Und umgekehrt: Ein einziges unbedachtes Video kann jahrelange Vertrauensarbeit zunichtemachen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Verschwiegenheit gilt gegenüber jedermann, dauerhaft und über den Austritt hinaus.',
      'Keine Fotos oder Videos von Betroffenen, Innenräumen oder identifizierbaren Details.',
      'DSGVO: Zweckbindung, Datenminimierung, Vertraulichkeit, Löschfristen.',
      'Gesundheitsdaten genießen besonderen Schutz.',
      'Presseauskunft nur durch Einsatzleitung oder Pressesprecher.',
      'Keine Aussagen zu Ursache, Schuld, Schadenhöhe oder Opfern.',
      'Im Zweifel: nichts sagen, nichts posten, nachfragen.'),
  ],
},

/* ---------------------------------------------------------------- A6 ---- */
{
  id: 'a6', title: 'Die Feuerwehr-Dienstvorschriften (FwDV)', duration: 20,
  blocks: [
    P('Wenn eine Gruppe aus Niedersachsen und eine aus Bayern gemeinsam an einer Autobahn arbeiten, verstehen sie sich – obwohl sie unterschiedlichen Landesgesetzen unterliegen. Möglich macht das ein Regelwerk, das quer über alle Ländergrenzen gilt: die Feuerwehr-Dienstvorschriften. Diese Lektion erklärt, was FwDV sind, wie verbindlich sie wirklich sind und welche Nummer wofür steht.'),

    H2('was', 'Was FwDV sind – und was nicht'),
    P('Feuerwehr-Dienstvorschriften sind bundesweit abgestimmte Richtlinien für <b>Taktik, Ausbildung und Einsatzdurchführung</b>. Erarbeitet werden sie von Fachgremien und im Ausschuss für Feuerwehrangelegenheiten, Katastrophenschutz und zivile Verteidigung (<b>AFKzV</b>) abgestimmt. Anschließend werden sie den Ländern zur Einführung <b>empfohlen</b>.'),
    P('Dieser letzte Punkt ist der entscheidende und wird oft falsch verstanden: Eine FwDV ist zunächst nur eine Empfehlung. Verbindlich wird sie erst dadurch, dass ein Bundesland sie <b>einführt</b> – meist per Erlass. Deshalb kann es vorkommen, dass in einem Land noch eine ältere Fassung gilt oder dass Abweichungen ergänzt wurden. Was in deinem Land gilt, erfährst du bei deiner Führungskraft oder auf den Seiten der Landesfeuerwehrschule.'),
    DEF('AFKzV', 'Ausschuss für Feuerwehrangelegenheiten, Katastrophenschutz und zivile Verteidigung – das Gremium der Innenministerien von Bund und Ländern, das die FwDV abstimmt und ihre Einführung empfiehlt. Er sorgt dafür, dass Taktik und Ausbildung bundesweit vergleichbar bleiben, obwohl das Feuerwehrrecht Ländersache ist.'),
    CO('info', 'Warum bundeseinheitlich?', 'Überörtliche Hilfe funktioniert nur, wenn Begriffe, Kommandos und Abläufe gleich sind. Ein „Wasser marsch" muss überall dasselbe auslösen, und ein Angriffstrupp muss in jeder Gruppe dieselbe Aufgabe haben. Genau das leisten die FwDV.'),

    H2('liste', 'Übersicht FwDV 1 bis 10'),
    TBL(['FwDV', 'Titel', 'Status', 'Kurz gesagt'],[
      ['1', 'Grundtätigkeiten – Lösch- und Hilfeleistungseinsatz', 'gültig', 'die Handgriffe: Geräte, Leitern, Knoten, Rettung'],
      ['2', 'Ausbildung der Freiwilligen Feuerwehren', 'gültig', 'Lehrgangssystem und Laufbahn'],
      ['3', 'Einheiten im Lösch- und Hilfeleistungseinsatz', 'gültig', 'Gruppe, Staffel, Zug – Aufgaben und Kommandos'],
      ['4', 'Die Gruppe im Löscheinsatz', 'aufgegangen in FwDV 3', 'historisch'],
      ['5', 'Der Zug im Löscheinsatz', 'aufgegangen in FwDV 3', 'historisch'],
      ['6', 'Taktische Einheiten und Verbände', 'nicht als eigene Vorschrift in Kraft', 'Inhalte teils in FwDV 3/100'],
      ['7', 'Atemschutz', 'gültig', 'Einsatzgrundsätze, Überwachung, Notfallverfahren'],
      ['8', 'Tauchen', 'gültig', 'Tauchereinsatz der Feuerwehr'],
      ['9', 'Strahlenschutz', 'aufgegangen in FwDV 500', 'historisch'],
      ['10', 'Die tragbaren Leitern', 'gültig', 'Leiterarten, Aufbau, Rettung über Leitern'],
    ]),
    CO('warn', 'Häufige Prüfungsfrage', 'FwDV 4 und 5 gibt es nicht mehr – ihre Inhalte stecken seit 2008 in der <b>FwDV 3</b>. Die FwDV 9 wurde von der <b>FwDV 500</b> abgelöst. Wer in der Prüfung nach „Der Zug im Löscheinsatz" gefragt wird, antwortet also: FwDV 3.'),

    H2('weitere', 'Die Vorschriften jenseits der Nummern 1 bis 10'),
    P('Über die klassische Nummernreihe hinaus gibt es Vorschriften mit dreistelligen Nummern, die besondere Einsatzarten und die Führung regeln. Sie sind im Alltag mindestens genauso wichtig.'),
    TBL(['Vorschrift', 'Regelt'],[
      ['FwDV 100', 'Führung und Leitung im Einsatz – Führungssystem, Führungsvorgang, Führungsstufen'],
      ['FwDV 500', 'Einheiten im ABC-Einsatz – Gefahrstoffe, Strahlenschutz, Dekontamination'],
      ['PDV/DV 810', 'Sprechfunkdienst – Betriebsabwicklung im Funk'],
      ['DV 800 / FwDV 800', 'Fernmeldedienst und Informations- und Kommunikationstechnik'],
    ]),
    P('Ergänzt werden die FwDV durch die <b>DGUV Vorschrift 49</b> und die zugehörigen Regeln, die den Arbeits- und Unfallschutz im Feuerwehrdienst festlegen. Sie sind über die gesetzliche Unfallversicherung unmittelbar verbindlich – eine FwDV kann eine DGUV-Vorschrift nicht aushebeln.'),

    H2('abdeckung', 'Wo findest du das in der Akademie?'),
    P('Die Module dieser Akademie sind bewusst entlang der Dienstvorschriften aufgebaut. Diese Übersicht hilft dir, gezielt nachzuschlagen.'),
    UL(
      '<b>FwDV 1</b> (Grundtätigkeiten) → Module D (Geräte), S (Rettung), T (Wasserversorgung), U (Knoten)',
      '<b>FwDV 2</b> (Ausbildung) → Laufbahn in Modul A, Maschinistenausbildung in Modul N',
      '<b>FwDV 3</b> (Einheiten) → Modul E (Löscheinsatz &amp; Einsatzlehre)',
      '<b>FwDV 7</b> (Atemschutz) → Modul F',
      '<b>FwDV 8</b> (Tauchen) → Modul X (Wasserrettung)',
      '<b>FwDV 10</b> (tragbare Leitern) → Modul D, Lektion „Tragbare Leitern"',
      '<b>FwDV 100</b> (Führung) → Modul L',
      '<b>FwDV 500</b> (ABC) → Modul I',
      '<b>DV 810 / FwDV 800</b> (Funk) → Modul H',
      '<b>DGUV V 49</b> (Arbeitsschutz) → Modul P'),

    H2('umgang', 'Wie du mit Vorschriften arbeitest'),
    P('Vorschriften auswendig zu lernen bringt wenig. Sinnvoller ist es, ihre <b>Systematik</b> zu kennen: Wenn du weißt, dass alles zum Atemschutz in der FwDV 7 steht, findest du die Antwort in zwei Minuten – auch Jahre nach dem Lehrgang. Führungskräfte sollten zusätzlich wissen, welche Fassung in ihrem Land eingeführt ist, weil sich daraus die verbindlichen Details ergeben.'),
    CO('tip', 'Praxistipp', 'Lade dir die in deinem Land eingeführten Fassungen als PDF auf das Diensthandy oder Tablet. An der Einsatzstelle nachzuschlagen ist kein Zeichen von Unwissen, sondern von Sorgfalt – besonders bei selten geübten Lagen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'FwDV sind bundeseinheitlich abgestimmte Richtlinien für Taktik, Ausbildung und Einsatz.',
      'Abgestimmt im <b>AFKzV</b>, verbindlich erst durch Einführung im jeweiligen Land.',
      '<b>FwDV 3</b> hat die früheren FwDV 4 und 5 ersetzt.',
      '<b>FwDV 500</b> hat die frühere FwDV 9 (Strahlenschutz) abgelöst.',
      'Wichtig darüber hinaus: FwDV 100 (Führung), DV 810 (Funk), DGUV V 49 (Arbeitsschutz).',
      'Nicht auswendig lernen – die Systematik kennen und gezielt nachschlagen.'),
  ],
},

];
