/* =========================================================================
   MODUL P — Arbeits- & Unfallschutz (UVV/DGUV)
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls P.

   Fachliche Grundlage: DGUV Vorschrift 49 „Feuerwehren" und zugehörige
   Regeln und Informationen, Arbeitsschutzgesetz, Biostoffverordnung,
   Gefahrstoffverordnung, arbeitsmedizinische Vorsorge (u. a. G 26),
   Empfehlungen zur Einsatzstellenhygiene. Konkrete Vorgaben regeln
   Träger und Unfallkasse.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_P = [

/* ---------------------------------------------------------------- P1 ---- */
{
  id: 'p1', title: 'Unfallverhütung im Feuerwehrdienst', duration: 20,
  blocks: [
    P('Feuerwehrdienst ist gefährlich – aber nicht so, wie die meisten denken. Die häufigsten Verletzungen entstehen nicht im Brandraum, sondern beim Absitzen, beim Tragen, beim Aufräumen und auf der Straße. Genau deshalb lohnt es sich, den Arbeitsschutz ernst zu nehmen: Er wirkt dort, wo tatsächlich etwas passiert.'),

    H2('grundlage', 'Rechtliche Grundlage'),
    P('Feuerwehrangehörige sind über die Unfallkasse gesetzlich unfallversichert – beitragsfrei und umfassend, für Einsatz, Ausbildung, Dienstsport und die Wege dorthin. Die zentrale Vorschrift ist die <b>DGUV Vorschrift 49 „Feuerwehren"</b>, ergänzt durch DGUV Regeln und Informationen.'),
    KF(
      'Sie regelt Bau und Ausrüstung von Feuerwehrhäusern und Fahrzeugen.',
      'Sie legt Anforderungen an die persönliche Schutzausrüstung fest.',
      'Sie bestimmt, wer welche Tätigkeit ausüben darf.',
      'Sie schreibt Unterweisungen und Prüfungen vor.',
      'Sie ist über die Unfallversicherung unmittelbar verbindlich.',
      'Sie steht damit gleichrangig neben den Feuerwehr-Dienstvorschriften.'),
    CO('info', 'Vorschrift und Realität', 'Der Arbeitsschutz im Feuerwehrdienst hat eine Besonderheit: Er muss mit einer Tätigkeit umgehen, deren Zweck es ist, sich in Gefahr zu begeben. Die Antwort darauf ist nicht der Verzicht auf Schutz, sondern die bewusste Risikoabwägung – Gefahren kennen, Maßnahmen treffen, Restrisiko akzeptieren, wo es einem übergeordneten Ziel dient.'),

    H2('grundsaetze', 'Die Grundsätze'),
    KF(
      '<b>Nur ausgebildete Kräfte</b> an Geräten und in Funktionen einsetzen.',
      '<b>PSA vollständig und bestimmungsgemäß</b> tragen.',
      '<b>Sicherungsposten und Absperrungen</b> einrichten, bevor gearbeitet wird.',
      '<b>Anweisungen der Führungskraft befolgen</b> – und erkannte Gefahren melden.',
      '<b>Geräte nur bestimmungsgemäß verwenden</b> und vor Gebrauch prüfen.',
      '<b>Eigensicherung vor Fremdrettung</b> – als Bedingung, nicht als Ausrede.'),
    CO('tip', 'Eigenschutz und Menschenrettung', '„Eigenschutz geht vor" wird gelegentlich missverstanden als Zurückhaltung bei der Menschenrettung. Gemeint ist das Gegenteil: Nur wer sich selbst schützt, kann überhaupt retten. Ein verletzter Retter rettet niemanden mehr, sondern bindet die Kräfte, die für die Rettung gebraucht würden.'),

    H2('gefaehrdungen', 'Typische Gefährdungen'),
    TBL(['Gefährdung', 'Wo sie auftritt', 'Schutzmaßnahme'],[
      ['Straßenverkehr', 'jede Einsatzstelle an Verkehrswegen', 'Warnkleidung, Absperrung, Fahrzeug als Schutzschild'],
      ['Absturz', 'Dächer, Gruben, Schächte, Fahrzeuge', 'Absturzsicherung, hoch anschlagen, Rückhalten'],
      ['Atemgifte und Sauerstoffmangel', 'Brandrauch, Keller, Silos, Gruben', 'umluftunabhängiger Atemschutz, Messung'],
      ['Elektrizität', 'Anlagen, Freileitungen, PV, E-Fahrzeuge', 'Abstand, freischalten lassen, Bestätigung abwarten'],
      ['Heben und Tragen', 'Geräte, Patienten, Material', 'Technik, Hilfsmittel, Teamarbeit'],
      ['Lärm und Vibration', 'Aggregate, Motorsäge, Trennschleifer', 'Gehörschutz, Arbeitsrotation'],
      ['Infektion und Kontamination', 'Blut, Körperflüssigkeiten, Brandrückstände', 'Handschuhe, Hygiene, Schwarz-Weiß-Trennung'],
      ['Hitze und Kreislaufbelastung', 'Atemschutz, Sommereinsätze', 'Pausen, Trinken, Ablösung'],
      ['Stolpern, Rutschen, Stürzen', 'überall – häufigste Unfallart', 'Ordnung, Beleuchtung, Schlauchmanagement'],
    ]),
    CO('warn', 'Die unterschätzte Nummer eins', 'Stolpern, Rutschen und Stürzen ist über alle Statistiken hinweg die häufigste Unfallart im Feuerwehrdienst – deutlich vor allen dramatischen Gefahren. Ordnung an der Einsatzstelle, gute Beleuchtung und sauber verlegte Schläuche sind deshalb kein Perfektionismus, sondern wirksamer Arbeitsschutz.'),

    H2('meldung', 'Wenn doch etwas passiert'),
    STEPS(
      'Erste Hilfe leisten und den Rettungsdienst hinzuziehen.',
      'Die Führungskraft sofort informieren.',
      'Unfallstelle sichern, Beweismittel und beteiligte Geräte unverändert lassen.',
      'Eintrag ins Verbandbuch, bei ärztlicher Behandlung Unfallanzeige an die Unfallkasse.',
      '<b>Durchgangsarzt</b> aufsuchen – nicht den Hausarzt; er leitet das Heilverfahren.',
      'Ursachen auswerten und Konsequenzen ziehen.',
      'Beteiligte betreuen und psychosoziale Unterstützung anbieten.'),
    CO('danger', 'Kleine Verletzungen melden', 'Ein Kratzer, der drei Wochen später eine Infektion wird, ist ohne dokumentierte Meldung schwer als Dienstunfall anzuerkennen. Deshalb gehört auch die scheinbar harmlose Verletzung ins Verbandbuch. Das kostet zwei Minuten und kann später viel wert sein.'),

    H2('kultur', 'Sicherheitskultur'),
    P('Vorschriften allein machen keine Wehr sicher. Entscheidend ist, ob es normal ist, Bedenken auszusprechen, Fehler zu benennen und einander auf Nachlässigkeiten anzusprechen – ohne dass das als Angriff verstanden wird.'),
    KF(
      'Bedenken sind erwünscht und werden nie belächelt.',
      'Jede Kraft darf eine Tätigkeit stoppen, wenn sie eine Gefahr erkennt.',
      'Fehler werden ausgewertet, nicht bestraft.',
      'Führungskräfte gehen mit gutem Beispiel voran – auch bei der PSA.',
      'Beinahe-Unfälle werden besprochen; sie sind kostenlose Warnungen.',
      'Nachbesprechungen sind Standard, nicht Ausnahme.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Feuerwehrangehörige sind über die Unfallkasse gesetzlich unfallversichert.',
      'Zentrale Vorschrift ist die <b>DGUV Vorschrift 49</b>.',
      'Nur ausgebildete Kräfte, vollständige PSA, Absperrung vor Arbeitsbeginn.',
      'Eigenschutz ist die Bedingung für Menschenrettung, nicht ihr Gegenteil.',
      'Stolpern, Rutschen und Stürzen ist die häufigste Unfallart.',
      'Jede Verletzung melden und dokumentieren, Durchgangsarzt aufsuchen.',
      'Sicherheitskultur: Bedenken erwünscht, Fehler auswerten statt bestrafen.'),
  ],
},

/* ---------------------------------------------------------------- P2 ---- */
{
  id: 'p2', title: 'Einsatzstellenhygiene', duration: 20,
  blocks: [
    P('Von allen Gefahren des Feuerwehrdienstes ist diese die unauffälligste – und möglicherweise die folgenreichste. Brandrauch enthält krebserzeugende Stoffe, die sich auf Schutzkleidung, Haut und Geräten ablagern. Sie tun nicht weh, sie riechen nach „Einsatz", und sie wirken über Jahrzehnte.'),

    H2('warum', 'Warum Hygiene lebenswichtig ist'),
    P('Bei Bränden entstehen unter anderem <b>polyzyklische aromatische Kohlenwasserstoffe (PAK)</b>, Benzol, Formaldehyd und weitere Stoffe, die als krebserzeugend eingestuft sind. Sie gelangen nicht nur über die Atemwege in den Körper – der Atemschutz schützt davor –, sondern vor allem über die <b>Haut</b>.'),
    KF(
      'Die Hautaufnahme steigt bei Wärme deutlich an – und im Einsatz ist die Haut warm.',
      'Besonders durchlässig sind Hals, Kinn, Handgelenke, Leiste und Kopf.',
      'Rußpartikel haften an Schutzkleidung, Helm, Maske, Handschuhen und Werkzeug.',
      'Die Aufnahme erfolgt auch noch Stunden nach dem Einsatz, solange die Rückstände anhaften.',
      'Hand-Mund-Kontakt beim Essen und Trinken ist ein wesentlicher Aufnahmeweg.',
      'Untersuchungen zeigen bei Feuerwehrangehörigen erhöhte Belastungen – konsequente Hygiene senkt sie messbar.'),
    CO('danger', 'Verrußte PSA ist kein Ehrenabzeichen', 'Die alte Vorstellung, dass eine schwarze Einsatzjacke Erfahrung zeigt, ist überholt und gefährlich. Sie zeigt eine Schadstoffquelle, die der Träger mit sich herumträgt – im Fahrzeug, im Gerätehaus, im Auto und zu Hause bei seiner Familie.'),

    H2('trennung', 'Die Schwarz-Weiß-Trennung'),
    DEF('Schwarz-Weiß-Trennung', 'Die konsequente räumliche und organisatorische Trennung von kontaminierten („schwarzen") und sauberen („weißen") Bereichen, Ausrüstungsteilen und Abläufen. Sie zieht sich von der Einsatzstelle über den Transport und das Gerätehaus bis zum Umkleidebereich. Ziel ist, dass Schadstoffe an der Einsatzstelle bleiben und nicht in Fahrzeug, Wache und Privatbereich wandern.'),
    STEPS(
      '<b>An der Einsatzstelle:</b> Grobreinigung der Schutzkleidung, Ablegen an einer festgelegten Stelle.',
      '<b>Sofortmaßnahme:</b> Hände, Gesicht und Hals reinigen – Reinigungstücher gehören auf jedes Fahrzeug.',
      '<b>Nicht essen, trinken oder rauchen</b> mit kontaminierten Händen.',
      '<b>Transport:</b> kontaminierte PSA in Säcken oder Behältern, nicht im Mannschaftsraum.',
      '<b>Im Gerätehaus:</b> Übergabe im schwarzen Bereich, Wechselkleidung im weißen Bereich.',
      '<b>Nach dem Einsatz duschen</b> – möglichst zeitnah, nicht erst am nächsten Morgen.',
      '<b>Kontaminierte Kleidung</b> fachgerecht reinigen lassen, nicht mit privater Wäsche mischen.',
      '<b>Atemschutzgeräte und Masken</b> getrennt transportieren und reinigen.'),
    CO('warn', 'Der Privatwagen', 'Ein häufig übersehener Verschleppungsweg: Wer nach dem Einsatz in kontaminierter Unterkleidung ins eigene Auto steigt, trägt die Schadstoffe in ein Fahrzeug, in dem später Kinder mitfahren. Wechselkleidung im Gerätehaus löst dieses Problem vollständig.'),

    H2('praxis', 'Was jede Wehr umsetzen kann'),
    P('Vollständige bauliche Schwarz-Weiß-Trennung ist eine Investition, die nicht jede Wehr kurzfristig leisten kann. Ein großer Teil des Nutzens lässt sich aber ohne Umbau erreichen.'),
    KF(
      'Reinigungstücher und Einmalhandschuhe auf jedes Fahrzeug.',
      'Transportsäcke für kontaminierte PSA beschaffen.',
      'Feste Ablagestelle für kontaminierte Ausrüstung an der Einsatzstelle festlegen.',
      'Zweite Garnitur Einsatzkleidung anstreben.',
      'Regel einführen: erst reinigen, dann trinken.',
      'Duschmöglichkeit im Gerätehaus nutzen und Wechselkleidung vorhalten.',
      'Fahrzeuginnenräume regelmäßig reinigen.',
      'Das Thema im Dienstabend behandeln – Bewusstsein ist die wichtigste Maßnahme.'),

    H2('atemschutz', 'Atemschutz und Nachlöscharbeiten'),
    CO('danger', 'Die Maske bleibt auf', 'Die höchste Schadstoffbelastung besteht häufig nicht während des Löschens, sondern bei den <b>Nachlöscharbeiten</b> – wenn der Brand aus ist, die Maske abgesetzt wird und in warmen, verrußten Räumen aufgeräumt wird. Genau dort werden große Mengen aufgewirbelt und eingeatmet. Der Atemschutz bleibt so lange auf, bis die Belastung tatsächlich unbedenklich ist – im Zweifel gemessen.'),

    H2('psychisch', 'Psychische Gesundheit'),
    P('Zum Arbeitsschutz gehört auch, was Einsätze im Kopf hinterlassen. Belastende Erlebnisse – schwere Unfälle, Tod, betroffene Kinder, eigene Gefährdung, Einsätze bei Bekannten – wirken nach. Reaktionen wie Schlafstörungen, wiederkehrende Bilder, Reizbarkeit oder Rückzug sind <b>normale Reaktionen auf ein unnormales Ereignis</b>.'),
    KF(
      'Einsatznachbesprechung als Standard, nicht nur nach Extremlagen.',
      'Angebote der psychosozialen Notfallversorgung kennen und nutzen.',
      'Aufeinander achten: nachfragen, ansprechen, Angebote machen.',
      'Führungskräfte beobachten ihre Kräfte und reagieren früh.',
      'Anhaltende Beschwerden professionell abklären lassen.',
      'Hilfe anzunehmen ist Professionalität, nicht Schwäche.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Brandrückstände enthalten krebserzeugende Stoffe und werden über die Haut aufgenommen.',
      'Besonders durchlässig: Hals, Kinn, Handgelenke, Kopf.',
      '<b>Schwarz-Weiß-Trennung</b> von der Einsatzstelle bis nach Hause.',
      'Sofort Hände, Gesicht und Hals reinigen; nicht kontaminiert essen oder trinken.',
      'Kontaminierte PSA getrennt transportieren und fachgerecht reinigen lassen.',
      'Nach dem Einsatz zeitnah duschen und Kleidung wechseln.',
      'Bei Nachlöscharbeiten den Atemschutz aufbehalten.',
      'Psychische Belastung ernst nehmen – PSNV gehört zum Arbeitsschutz.'),
  ],
},

/* ---------------------------------------------------------------- P3 ---- */
{
  id: 'p3', title: 'Gefährdungsbeurteilung & sichere Übung', duration: 18,
  blocks: [
    P('Übungen sind der Ort, an dem Feuerwehren besser werden – und einer der häufigsten Orte für vermeidbare Unfälle. Das liegt an einem Widerspruch: Übungen sollen realistisch sein, dürfen aber niemanden gefährden. Diese Lektion behandelt, wie man beides zusammenbringt.'),

    H2('beurteilung', 'Die Gefährdungsbeurteilung'),
    DEF('Gefährdungsbeurteilung', 'Die systematische Ermittlung der Gefährdungen einer Tätigkeit und die Festlegung der erforderlichen Schutzmaßnahmen – vor Beginn, nicht danach. Sie ist für Übungen, Ausbildungen und regelmäßige Tätigkeiten schriftlich zu dokumentieren und bei Änderungen fortzuschreiben.'),
    STEPS(
      'Tätigkeit und Ablauf beschreiben.',
      'Gefährdungen ermitteln – mechanisch, thermisch, elektrisch, chemisch, biologisch, psychisch.',
      'Risiko bewerten: Wie wahrscheinlich, wie schwerwiegend?',
      'Schutzmaßnahmen nach der Rangfolge festlegen.',
      'Maßnahmen umsetzen und die Beteiligten unterweisen.',
      'Wirksamkeit prüfen und bei Bedarf nachsteuern.',
      'Ergebnis dokumentieren und fortschreiben.'),

    H2('stop', 'Die Rangfolge der Schutzmaßnahmen'),
    MNE([{l:'S',w:'Substitution'},{l:'T',w:'Technisch'},{l:'O',w:'Organisatorisch'},{l:'P',w:'Persönlich'}],
      'Erst die Gefahr beseitigen oder ersetzen, dann technische Schutzmaßnahmen, dann organisatorische Regelungen – und erst zuletzt persönliche Schutzausrüstung.'),
    FIG('stopprinzip', 'STOP-Prinzip: Rangfolge der Schutzmaßnahmen – Substitution vor Technik vor Organisation vor persönlicher Schutzausrüstung.'),
    P('Die Reihenfolge ist keine Empfehlung, sondern eine Wirksamkeitsordnung. Eine Gefahr, die beseitigt wurde, kann niemanden mehr verletzen. Eine technische Schutzeinrichtung wirkt unabhängig vom Verhalten. Eine Regel wirkt nur, wenn sie befolgt wird. Und die persönliche Schutzausrüstung wirkt nur, wenn sie getragen wird und die Gefahr sie nicht überfordert – sie ist die schwächste, wenn auch unverzichtbare Stufe.'),
    TBL(['Stufe', 'Beispiel aus der Feuerwehrübung'],[
      ['Substitution', 'statt echtem Brandrauch Nebelmaschine verwenden'],
      ['Technisch', 'Absturzkante mit Geländer sichern, Auffangnetz spannen'],
      ['Organisatorisch', 'Sicherungsposten, Abbruchkriterien, begrenzte Teilnehmerzahl'],
      ['Persönlich', 'vollständige PSA, Auffanggurt, Gehörschutz'],
    ]),

    H2('uebung', 'Sicher üben'),
    KF(
      'Der Übungsleiter plant Sicherheit von Anfang an mit – nicht als Anhang.',
      'Sicherungsposten, Brandschutz und Erste Hilfe sind vor Beginn eingeteilt.',
      'Realistische, aber beherrschbare Belastung – Überforderung erzeugt Fehler statt Lernen.',
      'Teilnehmer über Ablauf, Gefahren und Abbruchsignal unterweisen.',
      'Ein klares Abbruchsignal vereinbaren, das jeder auslösen darf.',
      'Übungen bei Dunkelheit, Nässe und Kälte besonders sorgfältig planen.',
      'Nach der Übung nachbesprechen – offen, sachlich und wertschätzend.'),
    CO('warn', 'Die Übung ist kein Wettbewerb', 'Zeitdruck in Übungen erzeugt genau die Fehler, die man abtrainieren will. Wer auf Geschwindigkeit übt, bevor der Ablauf sitzt, trainiert Hektik. Erst korrekt, dann flüssig, dann schnell – in dieser Reihenfolge.'),

    H2('heiss', 'Heißausbildung'),
    CO('danger', 'Realbrandausbildung', 'Die Ausbildung in Brandübungsanlagen ist außerordentlich wertvoll und zugleich eine der gefährlichsten Ausbildungsformen überhaupt: Hitzestress, Kohlenstoffmonoxid, Sichtverlust und körperliche Erschöpfung treffen zusammen. Sie findet ausschließlich mit qualifizierten Instruktoren, definierten Wärmebelastungsgrenzen, klaren Abbruchkriterien, Sanitätsdienst und ausreichender Getränkeversorgung statt.'),
    KF(
      'Gesundheitliche Eignung aller Teilnehmer prüfen – G 26.3 aktuell.',
      'Belastungsdauer und Anzahl der Durchgänge begrenzen.',
      'Vor, zwischen und nach den Durchgängen ausreichend trinken.',
      'Erholungsphasen einplanen und einhalten.',
      'Abbruchkriterien vorher festlegen und konsequent anwenden.',
      'Nach der Ausbildung Einsatzstellenhygiene wie nach einem realen Brand.'),

    H2('grenzen', 'Persönliche Grenzen'),
    P('Hitze, Dehydrierung und Erschöpfung sind reale Gefahren, die sich schleichend aufbauen. Der Körper meldet sie – man muss nur zuhören.'),
    KF(
      'Vor und nach Belastung ausreichend trinken; Durst kommt zu spät.',
      'Warnsignale ernst nehmen: Schwindel, Übelkeit, Kopfschmerz, Gänsehaut trotz Hitze.',
      'Erschöpfung offen melden – das ist keine Schwäche, sondern Selbsteinschätzung.',
      'Pausen und Ablösung annehmen, wenn sie angeboten werden.',
      'Nach Krankheit oder Fieber nicht sofort voll belasten.',
      'Grundfitness und arbeitsmedizinische Vorsorge sichern die Einsatztauglichkeit.'),
    CO('tip', 'Die ehrlichste Rückmeldung', 'Wer nach einer Übung sagt „ich war am Limit", liefert dem Übungsleiter die wertvollste Information überhaupt. Sie zeigt, wo die Belastungsgrenze der Mannschaft liegt – und die zu kennen, ist im Einsatz mehr wert als jede geübte Handgriffkombination.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Gefährdungsbeurteilung erfolgt vor der Tätigkeit und wird dokumentiert.',
      '<b>STOP-Prinzip</b>: Substitution, Technik, Organisation, persönliche Schutzausrüstung.',
      'PSA ist die schwächste, wenn auch unverzichtbare Stufe.',
      'Übungen: Sicherheit von Anfang an mitplanen, Abbruchsignal vereinbaren.',
      'Erst korrekt, dann flüssig, dann schnell – nicht umgekehrt.',
      'Heißausbildung nur mit Instruktoren, Grenzen, Abbruchkriterien und Sanitätsdienst.',
      'Warnsignale des Körpers ernst nehmen und offen melden.'),
  ],
},

/* ---------------------------------------------------------------- P4 ---- */
{
  id: 'p4', title: 'Biologische & chemische Gefährdungen, Impfschutz', duration: 18,
  blocks: [
    P('Neben Feuer, Rauch und Verkehr gibt es Gefahren, die man weder sieht noch spürt und deren Wirkung sich erst Wochen später zeigt. Krankheitserreger und Gefahrstoffe gehören dazu. Der Schutz davor besteht aus wenigen, einfachen Gewohnheiten – die allerdings konsequent eingehalten werden müssen.'),

    H2('bio', 'Biologische Gefährdungen'),
    P('Einsatzkräfte kommen mit Krankheitserregern in Kontakt: über Blut und Körperflüssigkeiten bei der Ersten Hilfe, über kontaminierte Flächen, bei Einsätzen in verwahrlosten Wohnungen, bei Tierrettungen und bei Arbeiten in Abwasser oder Hochwasser.'),
    TBL(['Situation', 'Risiko', 'Schutz'],[
      ['Erste Hilfe mit Blutkontakt', 'blutübertragbare Erreger', 'Einmalhandschuhe, bei Spritzgefahr Schutzbrille'],
      ['Reanimation', 'Kontakt mit Atemwegssekret', 'Beatmungshilfe, Handschuhe'],
      ['Verwahrloste Umgebung', 'Erreger, Parasiten, Schimmel', 'geschlossene Kleidung, Handschuhe, Atemschutz'],
      ['Hochwasser und Abwasser', 'Fäkalkeime, Leptospiren', 'Wathose, Handschuhe, Hautschutz, Impfschutz'],
      ['Tierrettung', 'Biss, Kratzer, Zoonosen', 'Abstand, Handschuhe, Fachkraft hinzuziehen'],
      ['Nadelstichverletzung', 'blutübertragbare Erreger', 'sofort melden, ärztlich abklären'],
    ]),
    KF(
      'Einmalhandschuhe grundsätzlich bei Kontakt mit Blut und Körperflüssigkeiten.',
      'Bei Spritzgefahr zusätzlich Schutzbrille oder Visier.',
      'Hände nach jedem Einsatz desinfizieren und waschen.',
      'Wunden vor dem Dienst abdecken.',
      'Kontaminationsverletzungen sofort melden und versorgen lassen.',
      'Kein Essen, Trinken oder Rauchen mit ungereinigten Händen.'),
    CO('danger', 'Nadelstichverletzung', 'Eine Stichverletzung mit einer benutzten Kanüle ist ein Notfall des Arbeitsschutzes: Wunde bluten lassen, spülen, desinfizieren und <b>sofort</b> ärztlich vorstellen – innerhalb weniger Stunden sind vorbeugende Maßnahmen möglich, später nicht mehr. Die Meldung erfolgt unabhängig davon, wie harmlos es wirkt.'),

    H2('impf', 'Impfschutz'),
    DEF('Impfschutz für Einsatzkräfte', 'Im Rahmen der arbeitsmedizinischen Vorsorge werden Feuerwehrangehörigen Impfungen angeboten, die typische Einsatzrisiken abdecken – unter anderem Tetanus, Hepatitis A und B sowie der allgemein empfohlene Grundschutz. Die konkreten Empfehlungen richten sich nach der Gefährdungsbeurteilung des Trägers und der arbeitsmedizinischen Beratung.'),
    KF(
      'Impfstatus kennen und den Impfausweis aktuell halten.',
      'Auffrischungen rechtzeitig wahrnehmen.',
      'Die Kosten trägt in der Regel der Träger im Rahmen der Vorsorge.',
      'Bei besonderen Tätigkeiten – Wasserrettung, Hochwasser – gegebenenfalls erweiterter Schutz.',
      'Impfschutz ersetzt keine Hygiene, sondern ergänzt sie.'),

    H2('chem', 'Chemische Gefährdungen im Alltag'),
    P('Nicht nur beim Gefahrguteinsatz wirken Chemikalien. Auch der normale Feuerwehralltag bringt Kontakt mit Gefahrstoffen mit sich – häufig unbemerkt.'),
    UL(
      '<b>Brandrauch und Brandrückstände</b> – die wichtigste Quelle, siehe Einsatzstellenhygiene.',
      '<b>Betriebsstoffe</b> – Kraftstoffe, Öle, Kühlmittel, Hydrauliköl.',
      '<b>Reinigungs- und Desinfektionsmittel</b> im Gerätehaus.',
      '<b>Schaummittel</b> – Hautkontakt vermeiden, PFAS-Problematik beachten.',
      '<b>Batteriesäure und Elektrolyte</b> bei Fahrzeugunfällen.',
      '<b>Stäube</b> bei Aufräum- und Abbrucharbeiten – auch Asbest in Altbauten.'),
    CO('warn', 'Asbest in Altbauten', 'Bei Bränden und Schäden an Gebäuden aus der Zeit vor dem Asbestverbot können asbesthaltige Materialien freigesetzt werden – Dacheindeckungen, Bodenbeläge, Brandschutzverkleidungen. Bei Verdacht wird nicht trocken gekehrt, nicht aufgewirbelt und Atemschutz getragen; die Fachbehörde wird eingeschaltet.'),
    KF(
      'GHS-Kennzeichnung auf Gebinden lesen und beachten.',
      'Sicherheitsdatenblätter der im Gerätehaus verwendeten Stoffe kennen.',
      'Betriebsanweisungen für Gefahrstoffe beachten.',
      'Hautschutz und Hautpflege nutzen – Handschuhe allein reichen nicht.',
      'Bei Hautkontakt sofort spülen und melden.',
      'Gefahrstoffe im Gerätehaus sachgerecht lagern und kennzeichnen.'),

    H2('vorsorge', 'Arbeitsmedizinische Vorsorge'),
    P('Die arbeitsmedizinische Vorsorge dient dazu, gesundheitliche Risiken früh zu erkennen und die Eignung für bestimmte Tätigkeiten festzustellen. Bekanntestes Beispiel ist die Vorsorge <b>G 26.3</b> für Träger von umluftunabhängigem Atemschutz.'),
    KF(
      'G 26.3 ist Voraussetzung für den Atemschutzeinsatz und muss gültig sein.',
      'Weitere Vorsorgen je nach Tätigkeit – Lärm, Bildschirm, Fahrtätigkeit, Gefahrstoffe.',
      'Die Vorsorge ist vertraulich; der Träger erfährt nur das Ergebnis der Eignung.',
      'Veränderungen des Gesundheitszustands selbst melden.',
      'Nach längerer Erkrankung Eignung erneut prüfen lassen.',
      'Die Vorsorge ist ein Angebot zur eigenen Gesundheit, keine Kontrolle.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Einmalhandschuhe bei jedem Kontakt mit Blut und Körperflüssigkeiten.',
      'Nadelstichverletzungen sofort melden und ärztlich abklären lassen.',
      'Impfschutz im Rahmen der arbeitsmedizinischen Vorsorge nutzen und aktuell halten.',
      'Gefahrstoffe begegnen auch im Alltag – Brandrückstände sind die wichtigste Quelle.',
      'Bei Asbestverdacht nicht aufwirbeln, Atemschutz tragen, Fachbehörde einschalten.',
      'GHS-Kennzeichnung und Betriebsanweisungen im Gerätehaus beachten.',
      '<b>G 26.3</b> ist Voraussetzung für den Atemschutzeinsatz.'),
  ],
},

/* ---------------------------------------------------------------- P5 ---- */
{
  id: 'p5', title: 'Ergonomie, Belastung & psychische Gesundheit', duration: 18,
  blocks: [
    P('Feuerwehrdienst belastet den Körper und den Kopf – und beides oft über Jahrzehnte. Rückenschäden, Kreislaufprobleme und psychische Folgen belastender Einsätze beenden mehr Feuerwehrlaufbahnen als spektakuläre Unfälle. Diese Lektion behandelt, wie man lange gesund bleibt.'),

    H2('ergonomie', 'Heben und Tragen'),
    P('Feuerwehrangehörige heben und tragen ständig: Geräte, Schläuche, Leitern, Patienten. Die Technik dabei entscheidet darüber, ob der Rücken das dreißig Jahre mitmacht.'),
    KF(
      '<b>Aus den Beinen heben</b>, nicht aus dem Rücken – in die Hocke gehen, Rücken gerade.',
      '<b>Last nah am Körper</b> führen – jeder Zentimeter Abstand vervielfacht die Belastung.',
      '<b>Nicht verdreht heben</b> – erst heben, dann mit den Füßen drehen.',
      '<b>Im Team koordinieren</b> – auf Kommando gemeinsam heben.',
      '<b>Hilfsmittel nutzen</b> – Trage, Rollen, Rutschbrett, Hebekissen.',
      '<b>Griff und Weg vorher klären</b> – nicht mitten im Tragen umgreifen.',
      '<b>Grenzen respektieren</b> – lieber eine Person mehr als ein Bandscheibenvorfall.'),
    CO('tip', 'Der Klassiker: das Fahrzeug', 'Die meisten Rückenbelastungen entstehen nicht bei der spektakulären Patientenrettung, sondern beim Entnehmen schwerer Geräte aus hohen Geräteräumen und beim Verlasten. Wer dort bewusst arbeitet – Auszüge nutzen, zu zweit heben, nicht über Kopf –, schont sich bei jedem Einsatz.'),

    H2('hitze', 'Hitze- und Kreislaufbelastung'),
    P('Schutzkleidung schützt vor Hitze von außen und behindert gleichzeitig die körpereigene Kühlung. Bei Arbeit unter Atemschutz steigt die Körperkerntemperatur, der Flüssigkeitsverlust erreicht schnell ein bis zwei Liter, und die Herzfrequenz liegt dauerhaft hoch.'),
    KF(
      '<b>Vor</b> der Belastung trinken – Durst ist bereits ein Mangelsignal.',
      'Zwischen den Einsatzabschnitten trinken und abkühlen.',
      'Nach der Belastung Erholungsphase einhalten, Schutzkleidung öffnen.',
      'Warnsignale ernst nehmen: Schwindel, Übelkeit, Kopfschmerz, Verwirrtheit.',
      'Bei Hitzeeinsätzen einen Erholungsbereich mit Getränken einrichten.',
      'Im Winter genauso wichtig: Auskühlung nach dem Schwitzen verhindern.',
      'Ablösung planen, bevor Erschöpfung sichtbar wird.'),
    CO('danger', 'Herz-Kreislauf ist die häufigste Ursache', 'Ein erheblicher Teil der Todesfälle im Feuerwehrdienst geht auf Herz-Kreislauf-Ereignisse zurück – nicht auf Flammen oder Einstürze. Grundfitness, arbeitsmedizinische Vorsorge, ausreichendes Trinken und konsequente Erholungspausen sind deshalb keine Nebensache, sondern die wirksamste lebensrettende Maßnahme für die eigene Person.'),

    H2('laerm', 'Lärm, Vibration und weitere Belastungen'),
    TBL(['Belastung', 'Quelle', 'Schutz'],[
      ['Lärm', 'Aggregate, Motorsäge, Trennschleifer, Einsatzhorn', 'Gehörschutz, Abstand, Arbeitsrotation'],
      ['Vibration', 'Motorsäge, Trennschleifer, Aufbruchhammer', 'Arbeitszeiten begrenzen, Hilfsmittel nutzen'],
      ['Zwangshaltung', 'Arbeiten in engen Räumen, unter Fahrzeugen', 'Wechsel, Pausen, Hilfsmittel'],
      ['Kälte und Nässe', 'Winter-, Hochwasser- und Nachteinsätze', 'Wechselkleidung, Wärmebereich, Getränke'],
      ['Schlafmangel', 'Nachtalarme, lange Lagen', 'Ablösung, Rückkehr in den Ruhezustand ermöglichen'],
    ]),

    H2('psyche', 'Psychische Belastung'),
    P('Manche Einsätze bleiben. Schwere Unfälle, der Tod von Menschen, betroffene Kinder, Einsätze bei Bekannten, eigene Gefährdung oder das Gefühl, nicht genug getan zu haben – all das wirkt nach. Reaktionen darauf sind <b>normale Reaktionen auf ein unnormales Ereignis</b> und kein Zeichen von Schwäche.'),
    KF(
      'Typische Reaktionen: wiederkehrende Bilder, Schlafstörungen, Reizbarkeit, Grübeln, Rückzug.',
      'Sie klingen bei den meisten Menschen nach einigen Tagen bis Wochen ab.',
      'Bestehen sie länger oder verschlimmern sie sich, ist professionelle Hilfe angezeigt.',
      'Alkohol und Rückzug verschlechtern den Verlauf.',
      'Reden hilft – mit dem Trupp, mit Peers, mit Fachkräften.',
      'Auch die Familie ist mitbetroffen und darf einbezogen werden.'),
    DEF('Psychosoziale Notfallversorgung (PSNV)', 'Strukturierte Angebote zur Unterstützung nach belastenden Einsätzen: von der kollegialen Ansprache durch geschulte <b>Peers</b> aus der eigenen Organisation über die Einsatznachsorge bis zur Vermittlung professioneller Hilfe. Die Angebote sind vertraulich und stehen allen Einsatzkräften offen.'),
    CO('tip', 'Aufeinander achten', 'Die wirksamste Maßnahme ist die einfachste: nachfragen. „Wie geht es dir mit dem Einsatz von gestern?" – gestellt von einem Kameraden, ein paar Tage danach. Eine Wehr, in der über Belastung gesprochen werden darf, bleibt langfristig gesund und einsatzbereit. Eine, in der das als Schwäche gilt, verliert Menschen.'),

    H2('langfristig', 'Lange gesund bleiben'),
    KF(
      'Grundfitness aufbauen und halten – sie ist die Basis für alles andere.',
      'Arbeitsmedizinische Vorsorge wahrnehmen und Ergebnisse ernst nehmen.',
      'Einsatzstellenhygiene konsequent umsetzen.',
      'Ergonomisch arbeiten – jeden Tag, nicht nur im Einsatz.',
      'Erholung zulassen: Schlaf, Pausen, Zeit ohne Piepser.',
      'Belastungen ansprechen, bevor sie sich festsetzen.',
      'Die eigene Familie einbeziehen – sie trägt den Dienst mit.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Aus den Beinen heben, Last nah am Körper, nicht verdreht, im Team koordiniert.',
      'Vor der Belastung trinken – Durst kommt zu spät.',
      'Herz-Kreislauf-Ereignisse sind die häufigste Todesursache im Feuerwehrdienst.',
      'Erholungsbereich, Ablösung und Getränke bei längeren Lagen einrichten.',
      'Gehörschutz bei Aggregaten, Motorsäge und Trennschleifer.',
      'Belastungsreaktionen sind normal; anhaltende Beschwerden abklären lassen.',
      '<b>PSNV</b> ist vertraulich und steht allen offen.',
      'Nachfragen ist die wirksamste Maßnahme für die psychische Gesundheit der Mannschaft.'),
  ],
},

];
