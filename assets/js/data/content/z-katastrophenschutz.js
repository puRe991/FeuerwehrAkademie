/* =========================================================================
   MODUL Z — Katastrophenschutz & überörtliche Hilfe
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls Z.

   Fachliche Grundlage: FwDV 100, Landeskatastrophenschutzgesetze,
   Zivilschutz- und Katastrophenhilfegesetz, Konzepte des Bundesamtes für
   Bevölkerungsschutz und Katastrophenhilfe, Rahmenempfehlungen zur
   Stabsarbeit. Bezeichnungen und Strukturen sind landesrechtlich
   unterschiedlich – maßgeblich ist die Regelung deines Landes.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_Z = [

/* ---------------------------------------------------------------- Z1 ---- */
{
  id: 'z1', title: 'System des Bevölkerungsschutzes', duration: 20,
  blocks: [
    P('Die meisten Einsätze bewältigt eine Feuerwehr allein. Für die wenigen, bei denen das nicht reicht – Hochwasser, Großbrand, Stromausfall, Pandemie –, gibt es ein gestuftes System, das von der Gemeinde bis zum Bund reicht. Es zu kennen, hilft nicht nur Führungskräften: Es erklärt, warum Hilfe kommt, wie lange sie braucht und wer sie anfordert.'),

    H2('aufbau', 'Wer schützt die Bevölkerung?'),
    P('Der Schutz der Bevölkerung ist in Deutschland auf mehrere Ebenen verteilt. Zentral ist die Unterscheidung zwischen dem <b>Katastrophenschutz der Länder</b> – zuständig für den Alltag, also Großschadenlagen und Naturkatastrophen – und dem <b>Zivilschutz des Bundes</b>, der für den Verteidigungsfall zuständig ist und die Länder ergänzend ausstattet.'),
    TBL(['Ebene', 'Zuständig für', 'Typische Aufgaben'],[
      ['Gemeinde', 'örtliche Gefahrenabwehr', 'Feuerwehr aufstellen, Brandschutzbedarfsplanung'],
      ['Kreis / kreisfreie Stadt', 'Katastrophenschutzbehörde', 'Leitstelle, überörtliche Hilfe, Katastrophenschutzplanung'],
      ['Land', 'Katastrophenschutz insgesamt', 'Landesgesetze, Landesfeuerwehrschule, Landeskonzepte'],
      ['Bund', 'Zivilschutz und Ergänzung', 'THW, ergänzende Ausstattung, Warnsysteme, BBK'],
    ]),
    CO('info', 'Warum diese Trennung?', 'Nach dem Grundgesetz ist die Gefahrenabwehr Sache der Länder – der Bund darf hier nicht führen. Er unterstützt aber: mit dem THW, mit ergänzender Ausstattung für den Katastrophenschutz und mit Warnsystemen. Diese Konstruktion erklärt, warum bei Großlagen Bundes- und Landeskräfte nebeneinander arbeiten, ohne dass eine Seite der anderen unterstellt ist.'),

    H2('stufen', 'Das gestufte Hilfeleistungssystem'),
    DEF('Gestuftes Hilfeleistungssystem', 'Reichen die örtlichen Kräfte nicht aus, wird überörtliche Hilfe angefordert – stufenweise: Nachbarschaftshilfe innerhalb des Kreises, dann Kräfte des Kreises, dann überörtliche Bereitschaften und Kontingente, dann länderübergreifende Hilfe und schließlich Unterstützung des Bundes. Jede Ebene unterstützt die darunterliegende und übernimmt nicht deren Führung.'),
    FIG('hilfeleistung', 'Gestuftes Hilfeleistungssystem: von der Gemeinde über Kreis und Land bis zum Bund – jede Ebene unterstützt die darunterliegende.'),
    KF(
      'Die örtliche Zuständigkeit bleibt bestehen – Hilfe unterstützt, sie ersetzt nicht.',
      'Angefordert wird über die zuständige Leitstelle beziehungsweise Behörde.',
      'Je höher die Stufe, desto länger die Vorlaufzeit – deshalb früh anfordern.',
      'Überörtliche Kräfte kommen als geschlossene Einheiten, nicht einzeln.',
      'Die anfordernde Stelle muss Unterbringung, Verpflegung und Führung sicherstellen.',
      'Auslandshilfe ist über das europäische Katastrophenschutzverfahren möglich.'),
    CO('warn', 'Vorlaufzeiten realistisch einschätzen', 'Eine Nachbarwehr ist in Minuten da. Eine Bereitschaft aus dem Nachbarkreis braucht ein bis zwei Stunden. Ein Kontingent aus einem anderen Bundesland kann einen halben Tag benötigen – Alarmierung, Zusammenstellung, Anfahrt, Einweisung. Wer erst anfordert, wenn er die Kräfte braucht, bekommt sie deutlich zu spät.'),

    H2('mitwirkende', 'Die mitwirkenden Organisationen'),
    TBL(['Organisation', 'Schwerpunkt'],[
      ['Feuerwehren', 'Brandschutz, technische Hilfe, ABC, Rettung'],
      ['THW', 'technische Großhilfe, Statik, Räumung, Logistik, Wasserversorgung'],
      ['DRK, ASB, JUH, MHD', 'Sanitäts-, Betreuungs- und Verpflegungsdienst'],
      ['DLRG und Wasserwacht', 'Wasserrettung, Strömungsrettung, Bootsdienst'],
      ['Polizei', 'Absperrung, Verkehr, Evakuierung, Ermittlung'],
      ['Bundeswehr', 'Amtshilfe: Personal, Technik, Hubschrauber, Transport'],
      ['Behörden und Fachdienste', 'Umwelt, Gesundheit, Veterinär, Bauaufsicht, Energieversorger'],
      ['Ehrenamtliche und Nachbarschaftshilfe', 'einfache Tätigkeiten, Logistik, Verpflegung'],
    ]),
    P('Diese Vielfalt ist die Stärke des deutschen Systems – und zugleich seine Herausforderung. Verschiedene Organisationen mit eigenen Strukturen, eigener Sprache und eigenen Führungswegen müssen zusammenarbeiten. Das gelingt nur, wenn sie sich vorher kennen.'),
    CO('tip', 'Die Vorbereitung entscheidet', 'Wer den THW-Ortsbeauftragten und den Kreisbereitschaftsleiter des DRK persönlich kennt, arbeitet an der Einsatzstelle völlig anders zusammen als jemand, der ihnen zum ersten Mal begegnet. Gemeinsame Übungen, Besuche und Planungsrunden sind deshalb keine Höflichkeit, sondern Einsatzvorbereitung.'),

    H2('kats', 'Wann wird es eine Katastrophe?'),
    DEF('Katastrophe', 'Ein Ereignis, bei dem Leben, Gesundheit, die lebenswichtige Versorgung oder erhebliche Sachwerte in einem Ausmaß gefährdet oder geschädigt sind, dass die Gefahrenabwehr mit den üblichen Mitteln und Zuständigkeiten nicht mehr wirksam möglich ist. Die genaue Definition steht im jeweiligen Landesgesetz. Entscheidend ist die Konsequenz: Mit der <b>Feststellung des Katastrophenfalls</b> geht die Gesamtverantwortung auf die Katastrophenschutzbehörde über.'),
    KF(
      'Die Feststellung trifft die zuständige Behörde – meist Landrat oder Oberbürgermeister.',
      'Sie eröffnet erweiterte Befugnisse: Anordnungen, Heranziehung, Evakuierung.',
      'Sie ermöglicht den Einsatz von Katastrophenschutzeinheiten und -mitteln.',
      'Sie ändert nicht die fachliche Arbeit an der Einsatzstelle.',
      'Sie wird auch wieder aufgehoben, wenn die Lage beherrschbar ist.',
      'Auch unterhalb der Katastrophenschwelle gibt es Großschadenlagen mit ähnlichen Strukturen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Katastrophenschutz ist Ländersache, Zivilschutz Bundessache.',
      'Der Bund unterstützt mit THW, ergänzender Ausstattung und Warnsystemen.',
      'Das <b>gestufte Hilfeleistungssystem</b> reicht von der Nachbarschaftshilfe bis zum Bund.',
      'Jede Ebene unterstützt die darunterliegende – die örtliche Zuständigkeit bleibt.',
      'Vorlaufzeiten realistisch einschätzen und früh anfordern.',
      'Feuerwehren, THW, Hilfsorganisationen, Polizei und Behörden wirken zusammen.',
      'Die <b>Feststellung des Katastrophenfalls</b> überträgt die Gesamtverantwortung auf die Behörde.'),
  ],
},

/* ---------------------------------------------------------------- Z2 ---- */
{
  id: 'z2', title: 'Überörtliche Einheiten & Zusammenarbeit', duration: 20,
  blocks: [
    P('Wenn eine Bereitschaft mit zwanzig Fahrzeugen aus dem Nachbarkreis eintrifft, entscheidet sich in den nächsten zwanzig Minuten, ob sie eine Hilfe oder ein Problem wird. Der Unterschied liegt fast vollständig in der Vorbereitung der aufnehmenden Seite.'),

    H2('einheiten', 'Verbände und Bereitschaften'),
    P('Für große Lagen werden Einheiten zu größeren Verbänden zusammengefasst. Oberhalb des Zuges stehen Bereitschaften und Kontingente, die überörtlich verlegt werden können und über eine eigene Führung verfügen.'),
    TBL(['Einheit', 'Größenordnung', 'Merkmal'],[
      ['Trupp', '2 bis 3 Kräfte', 'kleinste Einheit'],
      ['Staffel', '6 Kräfte', 'einfacher Löschangriff'],
      ['Gruppe', '9 Kräfte', 'kleinste selbstständige taktische Einheit'],
      ['Zug', 'in der Regel etwa 22 Kräfte', 'Verband aus Zugtrupp und zwei Gruppen'],
      ['Bereitschaft', 'mehrere Züge', 'überörtlich verlegbar, eigene Führung'],
      ['Hilfeleistungskontingent', 'zusammengestellte Kräfte eines Kreises oder Landes', 'für länderübergreifende Hilfe'],
      ['Fachzug oder Fachgruppe', 'spezialisiert', 'ABC, Wasserförderung, Logistik, Höhenrettung'],
    ]),
    CO('info', 'Kontingente sind selbstständig gedacht', 'Ein Hilfeleistungskontingent wird so zusammengestellt, dass es für eine gewisse Zeit selbstständig arbeiten kann – mit eigener Führung, eigener Logistik und eigener Verpflegung. Das entlastet die aufnehmende Seite erheblich. Trotzdem braucht es einen Ansprechpartner, einen Auftrag und einen Bereitstellungsraum.'),

    H2('aufnehmen', 'Überörtliche Kräfte aufnehmen'),
    STEPS(
      '<b>Bereitstellungsraum</b> festlegen: ausreichend groß, erreichbar, außerhalb des Gefahrenbereichs.',
      '<b>Lotsen oder Einweiser</b> an markanten Punkten stellen – ortsfremde Kräfte finden sonst nichts.',
      '<b>Empfang organisieren:</b> Ansprechpartner, Registrierung, Kräfteübersicht.',
      '<b>Einweisung geben:</b> Lage, Auftrag, Funkgruppen, Ansprechpartner, Gefahren.',
      '<b>Auftrag als Abschnitt</b> erteilen – nicht einzelne Fahrzeuge verteilen.',
      '<b>Versorgung klären:</b> Verpflegung, Kraftstoff, Unterkunft, Sanitär.',
      '<b>Ablösung planen</b> und Rückverlegung frühzeitig vorbereiten.'),
    CO('warn', 'Der häufigste Fehler bei überörtlicher Hilfe', 'Ankommende Einheiten werden auseinandergerissen und einzeln verteilt. Damit verlieren sie ihre Führung, ihre eingespielten Abläufe und ihre Logistik – und die aufnehmende Seite hat plötzlich zwanzig einzelne Fahrzeuge zu führen. Richtig ist es, dem Verband einen <b>Abschnitt</b> zu geben und ihn geschlossen arbeiten zu lassen.'),

    H2('zusammenarbeit', 'Zusammenarbeit organisieren'),
    KF(
      '<b>Einheitliche Führung</b> nach FwDV 100 mit klarer Unterstellung.',
      '<b>Kommunikation klären:</b> Funkgruppen zuweisen und schriftlich festhalten.',
      '<b>Gemeinsame Lagekarte</b> für alle Beteiligten führen.',
      '<b>Verbindungspersonen</b> einsetzen, wo mehrere Organisationen beteiligt sind.',
      '<b>Feste Lagebesprechungen</b> in festen Abständen, kurz und ergebnisorientiert.',
      '<b>Logistik und Durchhaltefähigkeit</b> über Tage sicherstellen.',
      '<b>Abstimmung mit Verwaltungsstab</b> und Behörden.',
      '<b>Dokumentation</b> von Kräften, Zeiten und Aufträgen.'),

    H2('stufe', 'Führungsstufe D'),
    DEF('Führungsstufe D', 'Die höchste Führungsstufe der FwDV 100: Führen mit einer Führungsstaffel und einem Führungsstab. Sie greift, wenn Einheiten verschiedener Fachdienste und Organisationen über längere Zeit geführt werden müssen – der typische Fall bei Katastrophenlagen. Der Stab ist in die Sachgebiete S1 bis S6 gegliedert.'),
    TBL(['Sachgebiet', 'Aufgabe bei einer Großlage'],[
      ['S1', 'Personal: Kräfteübersicht, Ablösung, Registrierung, Nachforderung'],
      ['S2', 'Lage: Lagekarte, Lagebilder, Dokumentation, Einsatztagebuch'],
      ['S3', 'Einsatz: Planung und Führung der Maßnahmen, Abschnittsbildung'],
      ['S4', 'Versorgung: Verpflegung, Betriebsstoffe, Material, Unterkunft'],
      ['S5', 'Presse und Medien: Öffentlichkeitsarbeit, Warnung, Information'],
      ['S6', 'IuK: Funk, IT, Verbindungen, technische Kommunikation'],
    ]),

    H2('ueben', 'Zusammenarbeit üben'),
    P('Die Strukturen des Katastrophenschutzes funktionieren nur, wenn sie eingeübt sind. Eine Bereitschaft, die zum ersten Mal im Ernstfall zusammengestellt wird, verliert Stunden mit Organisation, die geübt in Minuten erledigt wäre.'),
    KF(
      'Gemeinsame Übungen mit Nachbarwehren, THW und Hilfsorganisationen.',
      'Bereitschaften und Kontingente regelmäßig zusammenstellen und verlegen.',
      'Stabsrahmenübungen für Führungskräfte.',
      'Kommunikationsstrukturen und Funkgruppen üben.',
      'Bereitstellungsräume und Lotsenpunkte vorplanen.',
      'Verpflegungs- und Unterbringungskonzepte vorbereiten.',
      'Nach jeder Übung und Lage auswerten und Erkenntnisse festhalten.'),
    CO('tip', 'Gemeinsam stark', 'Große Lagen bewältigt keine Organisation allein. Das eingespielte Zusammenwirken von Feuerwehr, Hilfsorganisationen, THW und Behörden – vorbereitet, geübt und klar geführt – ist das Rückgrat des Bevölkerungsschutzes. Es entsteht nicht im Einsatz, sondern lange davor.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Über dem Zug stehen Bereitschaften und Kontingente mit eigener Führung.',
      'Kontingente sind für eine gewisse Zeit selbstständig arbeitsfähig.',
      'Überörtliche Kräfte <b>geschlossen</b> einsetzen – nicht auseinanderreißen.',
      'Bereitstellungsraum, Lotsen, Einweisung und Versorgung vorbereiten.',
      'Einheitliche Führung nach FwDV 100 mit klarer Unterstellung.',
      '<b>Führungsstufe D</b>: Führen mit Führungsstaffel und Stab (S1 bis S6).',
      'Zusammenarbeit entsteht durch Üben, nicht im Ernstfall.'),
  ],
},

/* ---------------------------------------------------------------- Z3 ---- */
{
  id: 'z3', title: 'Führungsorganisation im Katastrophenschutz', duration: 18,
  blocks: [
    P('Bei einer Katastrophe reicht die gewohnte Einsatzleitung nicht mehr aus. Es geht nicht mehr nur um Löschen und Retten, sondern gleichzeitig um Evakuierungen, Versorgung, Information der Bevölkerung, Unterbringung, Straßensperrungen und rechtliche Anordnungen. Für diese Doppelaufgabe gibt es zwei Stäbe.'),

    H2('struktur', 'Wer führt eine Katastrophe?'),
    P('Mit der Feststellung des Katastrophenfalls übernimmt die <b>Katastrophenschutzbehörde</b> – in der Regel der Landkreis oder die kreisfreie Stadt – die Gesamtverantwortung. Sie führt mit zwei Stäben, die eng zusammenwirken, aber unterschiedliche Aufgaben haben.'),
    TBL(['Stab', 'Aufgabe', 'Besetzung'],[
      ['Verwaltungsstab', 'administrativ-organisatorisch: Ressourcen, Recht, Bevölkerung, Finanzen', 'Behördenleitung, Fachämter, Pressestelle'],
      ['Führungsstab beziehungsweise TEL', 'operativ-taktisch: Führung der eingesetzten Einheiten', 'Führungskräfte der Einsatzorganisationen'],
    ]),
    DEF('Technische Einsatzleitung (TEL)', 'Die TEL führt die eingesetzten Einheiten operativ-taktisch im Auftrag der Katastrophenschutzbehörde. Sie ist nach dem Führungssystem der FwDV 100 organisiert und in die Sachgebiete S1 bis S6 gegliedert. Ihre Zusammensetzung und ihre Bezeichnung unterscheiden sich zwischen den Bundesländern.'),
    CO('info', 'Warum zwei Stäbe?', 'Ein Einsatzleiter, der gleichzeitig über die Bekämpfung eines Großbrandes, die Unterbringung von 500 Evakuierten, die Sperrung einer Bundesstraße und die Information der Presse entscheiden soll, kann nichts davon gut machen. Die Trennung entlastet beide Seiten: Der Verwaltungsstab schafft Rahmen und Ressourcen, der Führungsstab setzt operativ um.'),

    H2('zusammen', 'Das Zusammenwirken'),
    KF(
      'Der Verwaltungsstab trifft die übergeordneten Entscheidungen und schafft die Voraussetzungen.',
      'Der Führungsstab beziehungsweise die TEL führt die Kräfte an der Schadenstelle.',
      'Beide tauschen laufend Lageinformationen aus.',
      'Verbindungspersonen sichern die Schnittstelle.',
      'Klare Zuständigkeiten verhindern Doppelentscheidungen.',
      'Gemeinsame Lagebesprechungen in festen Abständen.',
      'Eine gemeinsame Lagedarstellung für beide Stäbe.'),
    CO('warn', 'Die Schnittstelle ist die Schwachstelle', 'Die häufigsten Probleme bei Katastrophenlagen entstehen nicht innerhalb der Stäbe, sondern zwischen ihnen: Entscheidungen, von denen die andere Seite nichts weiß, Anforderungen, die im Nirgendwo landen, widersprüchliche Aussagen an die Presse. Deshalb sind benannte Verbindungspersonen und feste Abstimmungszeiten unverzichtbar.'),

    H2('stab', 'Arbeiten im Stab'),
    P('Stabsarbeit unterscheidet sich grundlegend von der Führung an der Einsatzstelle: Sie ist mittelbar, langsamer, papier- und bildschirmbasiert und läuft über Tage. Wer aus dem operativen Dienst kommt, muss sich darauf umstellen.'),
    KF(
      'Feste Arbeitsplätze und klare Zuständigkeiten je Sachgebiet.',
      'Alles wird dokumentiert – im Stab gilt: Was nicht aufgeschrieben ist, ist nicht passiert.',
      'Regelmäßige Lagebesprechungen mit festem Ablauf und fester Zeit.',
      'Ein gemeinsames Lagebild, das alle sehen und das laufend gepflegt wird.',
      'Aufträge schriftlich erteilen und ihre Erledigung nachhalten.',
      'Schichtbetrieb von Anfang an – Stäbe arbeiten über Tage.',
      'Ruhe im Raum halten: Stabsarbeit braucht Konzentration.'),
    CO('tip', 'Der Lagevortrag', 'Ein guter Lagevortrag im Stab dauert wenige Minuten und beantwortet immer dieselben Fragen: Was ist die Lage, was haben wir getan, was tun wir als Nächstes, was brauchen wir? Wer sich daran hält, hält Besprechungen kurz – und das ist bei mehrtägigen Lagen ein erheblicher Zeitgewinn.'),

    H2('vorbereitung', 'Vorbereitung'),
    P('Stäbe entstehen nicht im Ereignis. Sie werden lange vorher aufgestellt, personell besetzt, ausgestattet und geübt. Wer erst im Chaos anfängt zu organisieren, hat bereits verloren.'),
    KF(
      'Stabspersonal benennen, ausbilden und in Übungen einsetzen.',
      'Räume, Technik und Ausstattung vorhalten und regelmäßig prüfen.',
      'Alarmierungsplan für den Stab erstellen und testen.',
      'Vorlagen und Formulare vorbereiten: Lagemeldung, Einsatztagebuch, Aufträge.',
      'Erreichbarkeiten und Ansprechpartner aktuell halten.',
      'Regelmäßige Stabsrahmenübungen durchführen.',
      'Nach jeder Übung und Lage auswerten und nachbessern.'),

    H2('ehrenamt', 'Führen über Tage'),
    P('Eine Besonderheit des deutschen Systems ist, dass ein großer Teil dieser Strukturen ehrenamtlich getragen wird. Menschen, die tagsüber ihrem Beruf nachgehen, führen abends und nachts eine Katastrophenlage. Das funktioniert – aber nur mit realistischer Schichtplanung.'),
    KF(
      'Schichtbetrieb von Beginn an planen, nicht bei Erschöpfung.',
      'Ablösung frühzeitig alarmieren und einweisen.',
      'Übergaben strukturiert durchführen – Lage, Absicht, Kräfte, offene Punkte.',
      'Arbeitgeber informieren und Freistellungen klären.',
      'Verpflegung, Getränke und Ruhemöglichkeiten organisieren.',
      'Auf Belastungszeichen achten – auch im Stab.',
      'Nachbetreuung anbieten; Führungsverantwortung belastet.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Mit der Feststellung des Katastrophenfalls übernimmt die Behörde die Gesamtverantwortung.',
      '<b>Verwaltungsstab</b> administrativ-organisatorisch, <b>TEL</b> operativ-taktisch.',
      'Die Schnittstelle zwischen beiden ist die typische Schwachstelle.',
      'Stabsarbeit: dokumentieren, gemeinsames Lagebild, feste Besprechungen, Schichtbetrieb.',
      'Der Lagevortrag beantwortet: Lage, Getanes, Nächstes, Bedarf.',
      'Stäbe werden vorher aufgestellt, ausgestattet und geübt.',
      'Ehrenamtliche Strukturen brauchen realistische Schichtplanung.'),
  ],
},

/* ---------------------------------------------------------------- Z4 ---- */
{
  id: 'z4', title: 'Betreuung, Verpflegung & Logistik', duration: 16,
  blocks: [
    P('Bei einer Großlage werden nicht nur Menschen gerettet, sondern auch untergebracht, verpflegt, betreut und informiert – oft hunderte über mehrere Tage. Und die Einsatzkräfte selbst brauchen dasselbe. Diese Aufgabe ist so umfangreich, dass sie einen eigenen Abschnitt und eigene Fachdienste erfordert.'),

    H2('betreuung', 'Menschen versorgen'),
    P('Bei Evakuierungen, Hochwasser, Großbränden und Stromausfällen müssen Betroffene aus ihren Wohnungen. Sie kommen häufig mit dem, was sie am Körper tragen – ohne Medikamente, ohne Papiere, ohne Vorstellung, wie es weitergeht. Die Betreuung leisten vor allem die <b>Hilfsorganisationen</b>.'),
    TBL(['Fachdienst', 'Aufgabe'],[
      ['Betreuungsdienst', 'Sammelstellen, Notunterkünfte, Registrierung, Kinderbetreuung'],
      ['Verpflegungsdienst', 'Feldküche, Getränke, Verpflegung für Betroffene und Einsatzkräfte'],
      ['Sanitätsdienst', 'medizinische Versorgung, Behandlungsplatz bei MANV'],
      ['Psychosoziale Notfallversorgung', 'Betreuung von Betroffenen, Angehörigen und Einsatzkräften'],
      ['Logistik und Technik', 'Material, Strom, Beleuchtung, Zelte, Transport'],
      ['Suchdienst', 'Zusammenführung von Familien, Auskunft über Verbleib'],
    ]),
    KF(
      'Notunterkünfte früh vorbereiten: Turnhallen, Gemeindezentren, Schulen.',
      'Registrierung von Anfang an – sonst weiß niemand, wer wo ist.',
      'Besondere Bedarfe berücksichtigen: Medikamente, Pflege, Kinder, Haustiere.',
      'Information der Betroffenen organisieren – Ungewissheit belastet am meisten.',
      'Angehörige zusammenführen, besonders bei Kindern und älteren Menschen.',
      'Rückkehr planen: Wann können die Menschen zurück, und wer sagt es ihnen?'),
    CO('info', 'Haustiere nicht vergessen', 'Bei Evakuierungen ist die Frage nach Haustieren einer der häufigsten Gründe, warum Menschen ihre Wohnung nicht verlassen wollen oder heimlich zurückkehren. Wer die Unterbringung von Tieren mitplant, verhindert genau das – und erspart sich später gefährliche Rückholaktionen.'),

    H2('einsatzkraefte', 'Die eigenen Kräfte versorgen'),
    P('Die Versorgung der Einsatzkräfte wird bei Großlagen regelmäßig unterschätzt. Nach acht Stunden ohne Essen, Trinken und Pause sinkt die Leistungsfähigkeit dramatisch – und die Unfallhäufigkeit steigt.'),
    KF(
      '<b>Getränke</b> von der ersten Stunde an – nicht erst, wenn jemand danach fragt.',
      '<b>Verpflegung</b> in festen Abständen, auch nachts.',
      '<b>Ruhemöglichkeiten</b>: Wärme oder Schatten, Sitzgelegenheit, trockene Kleidung.',
      '<b>Sanitäre Einrichtungen</b> bei Lagen über mehrere Stunden.',
      '<b>Unterkunft</b> bei mehrtägigen Einsätzen.',
      '<b>Wechselkleidung</b> und Möglichkeit zur Körperhygiene.',
      '<b>Sanitätsdienst</b> für die Einsatzkräfte selbst.'),

    H2('logistik', 'Materielle Logistik'),
    KF(
      '<b>Betriebsstoffe:</b> Kraftstoff für Fahrzeuge, Aggregate, Pumpen und Sägen.',
      '<b>Atemluft:</b> gefüllte Flaschen, Wechselstelle, Kompressor oder GW-Atemschutz.',
      '<b>Verbrauchsmaterial:</b> Sandsäcke, Bindemittel, Folien, Ketten, Schläuche.',
      '<b>Beleuchtung und Strom</b> für Einsatzstelle und Führungsstellen.',
      '<b>Ersatzgerät</b> für Ausfälle.',
      '<b>Transportkapazität</b> für Material und Kräfte.',
      '<b>Entsorgung</b> von Abfall und kontaminiertem Material.'),
    CO('warn', 'Logistik braucht Vorlauf', 'Material, das erst bestellt werden muss, ist nicht in zwei Stunden da. Deshalb wird der Bedarf vorausschauend geplant: Was brauchen wir in sechs Stunden, was morgen früh? Wer erst nachfordert, wenn nichts mehr da ist, hat eine Lücke – und die trifft immer die arbeitenden Kräfte.'),

    H2('durchhalten', 'Durchhaltefähigkeit'),
    STEPS(
      'Schichtkonzept über Tage aufstellen – wer arbeitet wann, wer ruht wann?',
      'Ablösung frühzeitig alarmieren und einweisen.',
      'Übergaben strukturiert durchführen.',
      'Verpflegung, Unterkunft und Hygiene sicherstellen.',
      'Nachschub an Betriebsstoffen, Atemluft und Material organisieren.',
      'Kräfteübersicht und Dokumentation führen.',
      'Nachbetreuung und psychosoziale Unterstützung anbieten.'),
    CO('info', 'Gemeinsame Stärke', 'Kein Träger schafft eine Großlage allein. Das eingespielte Zusammenwirken von Feuerwehr, Hilfsorganisationen und THW ist das Rückgrat des Bevölkerungsschutzes – und es zeigt sich am deutlichsten in der Logistik, die niemand sieht und ohne die nichts funktioniert.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Betreuung, Verpflegung und Unterbringung leisten vor allem die Hilfsorganisationen.',
      'Registrierung von Anfang an – sonst weiß niemand, wer wo ist.',
      'Besondere Bedarfe mitplanen: Medikamente, Pflege, Kinder, Haustiere.',
      'Die eigenen Kräfte brauchen Getränke, Verpflegung, Ruhe und Hygiene.',
      'Materielle Logistik: Betriebsstoffe, Atemluft, Verbrauchsmaterial, Ersatzgerät.',
      'Bedarf vorausschauend planen – Logistik braucht Vorlauf.',
      'Schichtkonzept, Ablösung und Nachbetreuung von Anfang an einplanen.'),
  ],
},

/* ---------------------------------------------------------------- Z5 ---- */
{
  id: 'z5', title: 'Warnung der Bevölkerung', duration: 16,
  blocks: [
    P('Eine Gefahr, von der die Bevölkerung nichts weiß, kann sie nicht vermeiden. Warnung ist deshalb keine Nebenaufgabe der Gefahrenabwehr, sondern häufig die wirksamste Maßnahme überhaupt: Fenster schließen kostet Sekunden und schützt tausende Menschen vor einer Rauchwolke.'),

    H2('warnung', 'Wie gewarnt wird'),
    P('Für die Warnung der Bevölkerung steht ein Bündel von Mitteln zur Verfügung. Keines erreicht alle Menschen – deshalb werden sie kombiniert eingesetzt. Fachlich spricht man vom <b>Warnmittelmix</b>.'),
    TBL(['Warnmittel', 'Stärke', 'Grenze'],[
      ['Sirenen', 'Weckeffekt, erreichen auch Schlafende', 'kein Informationsgehalt, nicht flächendeckend vorhanden'],
      ['Cell Broadcast', 'erreicht alle Mobiltelefone in einer Funkzelle, ohne App', 'setzt Mobilfunk und eingeschaltetes Gerät voraus'],
      ['Warn-Apps', 'detaillierte Informationen und Handlungshinweise', 'nur bei installierter App'],
      ['Rundfunk und Fernsehen', 'große Reichweite, ausführliche Information', 'nur bei eingeschaltetem Gerät'],
      ['Lautsprecherfahrzeuge', 'gezielt, ortsgenau, auch ohne Technik beim Empfänger', 'langsam, personalintensiv, begrenzte Reichweite'],
      ['Digitale Anzeigetafeln', 'auffällig im öffentlichen Raum', 'nur punktuell verfügbar'],
      ['Persönliche Ansprache', 'sicherste Erreichbarkeit', 'sehr personalintensiv'],
    ]),
    CO('info', 'Warum die Sirene wieder wichtig wird', 'Die Sirene transportiert keine Information – aber sie hat etwas, das kein digitales Mittel bietet: Sie weckt Menschen nachts und erreicht sie ohne Gerät, ohne Strom beim Empfänger und ohne App. Deshalb wurden Sirenennetze nach jahrzehntelangem Rückbau vielerorts wieder ausgebaut. Ihre Aufgabe ist es, die Menschen zu veranlassen, sich zu informieren.'),

    H2('signale', 'Signale und Bedeutung'),
    DEF('Sirenensignale', 'Der bundesweit gebräuchliche <b>Warnton</b> ist ein einminütiger auf- und abschwellender Heulton. Er bedeutet: Gefahr – Rundfunk oder Warn-App einschalten und Hinweise beachten. Die <b>Entwarnung</b> erfolgt mit einem einminütigen Dauerton. Daneben gibt es das Signal zur Alarmierung der Feuerwehr. Die genauen Signale und ihre Bedeutung regeln die Länder – sie werden regelmäßig öffentlich bekannt gemacht.'),
    KF(
      'Warnton: aufschwellender Heulton – Gefahr, informieren.',
      'Entwarnung: Dauerton – Gefahr vorüber.',
      'Feuerwehralarm: eigenes Signal, keine Bevölkerungswarnung.',
      'Bundesweite Warntage testen die Systeme und machen die Signale bekannt.',
      'Die Bedeutung der Signale muss der Bevölkerung bekannt sein – sonst wirken sie nicht.'),

    H2('inhalt', 'Was eine Warnung enthalten muss'),
    P('Eine Warnung, die nur Angst erzeugt, hilft niemandem. Wirksam wird sie erst, wenn sie sagt, was zu tun ist. Bewährt hat sich ein festes Schema.'),
    STEPS(
      '<b>Was ist passiert?</b> Kurz und verständlich, ohne Fachbegriffe.',
      '<b>Wo?</b> Betroffenes Gebiet möglichst genau benennen.',
      '<b>Welche Gefahr besteht?</b> Konkret, ohne Dramatisierung.',
      '<b>Was sollen die Menschen tun?</b> Klare, umsetzbare Handlungsanweisungen.',
      '<b>Was sollen sie unterlassen?</b> Etwa: nicht zur Einsatzstelle fahren, Notruf freihalten.',
      '<b>Wo gibt es weitere Informationen?</b> Radio, App, Internetseite, Bürgertelefon.',
      '<b>Wann kommt die nächste Information?</b> Auch wenn sich nichts geändert hat.'),
    CO('tip', 'Wiederholen und aktualisieren', 'Eine einmalige Warnung erreicht nur einen Teil der Menschen. Wirksame Warnung wird wiederholt und in festen Abständen aktualisiert – auch dann, wenn es nichts Neues gibt. Die Nachricht „Lage unverändert, nächste Information um 18 Uhr" verhindert Gerüchte und entlastet den Notruf spürbar.'),

    H2('verhalten', 'Verhaltenshinweise für die Bevölkerung'),
    UL(
      'Bei Sirenensignal: Radio oder Warn-App einschalten und Hinweise beachten.',
      'Bei Rauch oder Gefahrstoffen: <b>Fenster und Türen schließen</b>, Lüftung und Klimaanlage abschalten.',
      'In Gebäuden bleiben, wenn dazu aufgefordert wird.',
      'Nachbarn informieren, insbesondere ältere und hilfebedürftige Menschen.',
      'Den <b>Notruf freihalten</b> – er wird für echte Notfälle gebraucht.',
      'Nicht zur Einsatzstelle fahren und keine Drohnen fliegen lassen.',
      'Anweisungen der Behörden und Einsatzkräfte befolgen.',
      'Bei Aufforderung zur Evakuierung: Medikamente, Papiere und Nötigstes mitnehmen.'),

    H2('rolle', 'Die Rolle der Feuerwehr'),
    P('Die Entscheidung über eine Warnung der Bevölkerung trifft in der Regel die zuständige Behörde. Die Feuerwehr liefert dafür die fachliche Grundlage – und ist häufig diejenige, die den Bedarf zuerst erkennt.'),
    KF(
      'Warnbedarf frühzeitig melden – lieber einmal zu früh.',
      'Fachliche Einschätzung liefern: Ausbreitungsrichtung, betroffenes Gebiet, Dauer.',
      'Mit der Leitstelle und der Behörde abstimmen, wer warnt.',
      'Lautsprecherdurchsagen unterstützen, wo nötig.',
      'Einheitliche Aussagen sicherstellen – widersprüchliche Informationen zerstören Vertrauen.',
      'Nach der Lage über Ursachen und Vorbeugung informieren.'),
    CO('tip', 'Warnen rettet Leben', 'Eine frühzeitige, klare Warnung mit konkreten Handlungshinweisen ist eine der wirksamsten Maßnahmen der Gefahrenabwehr überhaupt – und eine der günstigsten. Sie erreicht Menschen, bevor die Einsatzkräfte bei ihnen sein könnten, und sie wirkt in der Fläche. Die Feuerwehr wirkt hier eng mit den Behörden zusammen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Kein Warnmittel erreicht alle – deshalb der <b>Warnmittelmix</b>.',
      'Sirenen wecken und erreichen ohne Gerät; Cell Broadcast erreicht alle Handys in der Funkzelle.',
      'Warnton ist ein aufschwellender Heulton, Entwarnung ein Dauerton.',
      'Eine Warnung muss sagen, was zu tun ist – nicht nur, was passiert ist.',
      'Warnungen wiederholen und in festen Abständen aktualisieren.',
      'Standardhinweis bei Rauch und Gefahrstoffen: Fenster und Türen schließen, Lüftung aus.',
      'Die Behörde entscheidet, die Feuerwehr liefert die fachliche Grundlage.',
      'Warnbedarf früh melden – lieber einmal zu früh.'),
  ],
},

];
