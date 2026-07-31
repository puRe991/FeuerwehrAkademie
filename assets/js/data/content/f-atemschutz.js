/* =========================================================================
   MODUL F — Atemschutz (FwDV 7)
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls F. Ersetzt die früher auf
   curriculum.js / curriculum-extra.js / curriculum-extra2.js verteilten
   Kurzfassungen.

   Fachliche Grundlage: FwDV 7 (Atemschutz), DGUV Vorschrift 49, DGUV
   Information 205-014 (Auswahl von Atemschutzgeräten), DIN EN 137,
   arbeitsmedizinische Vorsorge G 26.3. Zahlenwerte sind Richtwerte –
   maßgeblich sind Herstellerangaben und die Vorgaben deiner Wehr.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_F = [

/* ---------------------------------------------------------------- F1 ---- */
{
  id: 'f1', title: 'Gerätekunde Pressluftatmer', duration: 26,
  blocks: [
    P('Der Pressluftatmer ist das Gerät, das den Innenangriff überhaupt erst möglich macht. Er trennt die Atemluft der Einsatzkraft vollständig von der Umgebung – und genau deshalb ist er das einzige Gerät der Feuerwehr, bei dem ein Bedienfehler unmittelbar tödlich enden kann. Diese Lektion erklärt Aufbau, Funktion und Prüfung, bevor die folgenden Lektionen zu Einsatzgrundsätzen und Notfallverfahren kommen.'),

    H2('warum', 'Warum umluftunabhängiger Atemschutz?'),
    P('Brandrauch ist die häufigste Todesursache bei Wohnungsbränden – nicht die Flamme. Er wirkt gleich vierfach gegen den Menschen: Er ist <b>giftig</b>, er ist <b>heiß</b>, er nimmt die <b>Sicht</b>, und er verdrängt den <b>Sauerstoff</b>. Kein Tuch vor dem Mund und kein Filter hilft dagegen zuverlässig.'),
    CO('danger', 'Kohlenstoffmonoxid', 'CO ist farb-, geruch- und geschmacklos und bindet rund 200- bis 300-mal stärker an das Hämoglobin des Blutes als Sauerstoff. Die Bindung ist zudem kaum reversibel. Schon geringe Konzentrationen führen innerhalb von Minuten zu Bewusstlosigkeit und Tod – ohne dass der Betroffene es merkt. Es gibt keine Warnung durch die eigenen Sinne.'),
    P('Hinzu kommt <b>Cyanwasserstoff (HCN, Blausäure)</b>, der bei der Verbrennung stickstoffhaltiger Kunststoffe, Wolle und Polyurethan entsteht. CO und HCN verstärken sich in ihrer Wirkung gegenseitig – die Kombination ist deutlich gefährlicher als jeder Stoff für sich. Deshalb kennt die FwDV 7 keine Abstufung: In Rauch wird ausschließlich mit umluftunabhängigem Atemschutz gearbeitet.'),

    H2('aufbau', 'Aufbau des Pressluftatmers'),
    P('Der Pressluftatmer ist ein <b>Behältergerät</b>: Er führt die Atemluft in einer Druckflasche mit und arbeitet damit vollkommen unabhängig von der Umgebungsatmosphäre. Der Luftweg führt über drei Druckstufen von der Flasche bis zur Lunge.'),
    FIG('pressluftatmer', 'Luftweg im Pressluftatmer: von der Hochdruckflasche über den Druckminderer und den Lungenautomaten zur Maske.'),
    TBL(['Bauteil', 'Funktion', 'Typischer Wert'],[
      ['Druckluftflasche', 'speichert die Atemluft', 'Stahl oder Composite, 300 bar, z. B. 6,8 l'],
      ['Flaschenventil mit Manometer', 'Absperren und Druckanzeige', 'Hochdruckbereich'],
      ['Druckminderer', 'reduziert Flaschendruck auf Mitteldruck', 'etwa 5 bis 9 bar'],
      ['Mitteldruckschlauch', 'führt zur Bedarfssteuerung', '–'],
      ['Lungenautomat', 'gibt Luft nach Atembedarf ab', 'meist Überdrucksystem'],
      ['Atemanschluss (Vollmaske)', 'dichtet ab, schützt Augen und Gesicht', 'persönlich angepasst'],
      ['Warneinrichtung', 'akustisches Signal bei Restdruck', 'spricht bei etwa 50–60 bar an'],
      ['Trageeinrichtung', 'Tragegestell mit Bebänderung', 'Gesamtgewicht rund 12–18 kg'],
    ]),
    DEF('Überdruck-System', 'In der Maske herrscht dauerhaft ein leichter Überdruck gegenüber der Umgebung. Der Vorteil ist entscheidend: Bei einer Undichtigkeit – etwa an einem Bartstoppel oder einem verrutschten Maskenrand – strömt Luft nach <b>außen</b>, statt Schadstoffe nach innen zu lassen. Der Preis ist ein höherer Luftverbrauch, weil auch die Leckluft aus der Flasche kommt.'),

    H2('luftvorrat', 'Wie viel Luft ist eigentlich drin?'),
    P('Der Luftvorrat lässt sich einfach berechnen: <b>Flaschenvolumen × Flaschendruck</b>. Eine 6,8-Liter-Flasche mit 300 bar enthält also rund 2.040 Liter Atemluft. Diese Zahl allein sagt aber noch nichts über die Einsatzzeit – die hängt vom Atemminutenvolumen ab, und das schwankt je nach Belastung um den Faktor zehn.'),
    TBL(['Belastung', 'Atemminutenvolumen (Richtwert)', 'Rechnerische Zeit bei 2.040 l'],[
      ['Ruhe', '10–20 l/min', 'über 100 Minuten'],
      ['leichte Arbeit', '20–30 l/min', 'etwa 70–100 Minuten'],
      ['mittlere Arbeit', '30–50 l/min', 'etwa 40–70 Minuten'],
      ['schwere Arbeit unter Hitze', '60–100 l/min', 'etwa 20–35 Minuten'],
      ['Stress und Panik', 'über 100 l/min', 'unter 20 Minuten'],
    ]),
    CO('warn', 'Die Zeit im Gerät ist nie fix', 'Es gibt keine „30-Minuten-Flasche". Dieselbe Flasche hält bei ruhiger Arbeit über eine Stunde und im Extremfall keine 15 Minuten. Wer sich auf eine Uhrzeit statt auf den Manometerdruck verlässt, verrechnet sich – und zwar genau dann, wenn es am schlimmsten ist. Der Druck ist die Wahrheit, nicht die Zeit.'),

    H2('anlegen', 'Anlegen und Einsatzkurzprüfung'),
    P('Vor jedem Einsatz führt der Geräteträger die <b>Einsatzkurzprüfung</b> selbst durch. Sie dauert weniger als eine Minute und ist keine Formalität: Sie ist die letzte Gelegenheit, einen Gerätefehler zu bemerken, bevor er lebensgefährlich wird.'),
    STEPS(
      '<b>Flaschendruck prüfen:</b> Ventil vollständig öffnen, Manometer ablesen. Ein 300-bar-Gerät gilt in der Regel ab etwa 270 bar als einsatzbereit.',
      '<b>Hochdruckdichtprüfung:</b> Ventil wieder schließen und den Druckabfall beobachten. Der Druck darf innerhalb einer Minute nur geringfügig fallen – als Richtwert gelten höchstens etwa 10 bar.',
      '<b>Warneinrichtung prüfen:</b> Druck langsam über den Lungenautomaten ablassen, bis das Signal ertönt. Es muss deutlich hörbar sein.',
      '<b>Lungenautomat prüfen:</b> Funktion und dichter Anschluss an den Atemanschluss.',
      '<b>Maskendichtprobe:</b> Maske anlegen, Bebänderung gleichmäßig anziehen, Anschluss mit der Hand verschließen und einatmen – die Maske muss sich spürbar ansaugen und dicht bleiben.',
      '<b>Ventil wieder vollständig öffnen</b> und Ausgangsdruck an die Atemschutzüberwachung melden.'),
    CO('danger', 'Der häufigste Fehler', 'Das Flaschenventil nach der Prüfung nicht wieder vollständig zu öffnen. Das Gerät funktioniert dann zunächst scheinbar normal – und versagt unter Belastung, wenn der Luftbedarf steigt. Ventil immer bis zum Anschlag öffnen und die Partnerkontrolle im Trupp durchführen.'),

    H2('dichtsitz', 'Der Dichtsitz der Maske'),
    P('Die beste Technik nützt nichts, wenn die Maske nicht dicht sitzt. Drei Dinge stören den Dichtsitz regelmäßig und müssen vorher geklärt sein:'),
    UL(
      '<b>Bartwuchs</b> im Dichtbereich – schon Stoppeln führen zu Leckagen. Der Dichtbereich muss glatt rasiert sein.',
      '<b>Brillenbügel</b> unter dem Dichtrand – dafür gibt es die in die Maske einsetzbare <b>Maskenbrille</b>.',
      '<b>Falsche Größe oder verrutschte Bebänderung</b> – die Maske wird persönlich angepasst und gleichmäßig über Kreuz angezogen.'),
    P('Auch lange Haare, Schmuck im Gesichtsbereich und beschädigte Dichtlippen sind Ausschlussgründe. Die Maske gehört zur persönlichen Ausrüstung; wer sie regelmäßig trägt, kennt ihre Eigenheiten.'),

    H2('nach', 'Nach dem Einsatz'),
    P('Ein benutztes Atemschutzgerät ist kontaminiert und nicht einsatzbereit. Der Ablauf danach ist genauso verbindlich wie die Prüfung davor.'),
    KF(
      'Gerät und Maske getrennt und kontaminiert transportieren – nicht in der Mannschaftskabine.',
      'Flasche tauschen oder füllen lassen; leere Geräte gehören gekennzeichnet.',
      'Maske reinigen, desinfizieren, trocknen und prüfen.',
      'Gerät nach den Fristen der Wehr und den Herstellerangaben prüfen lassen.',
      'Einsatz in der Atemschutznachweisung dokumentieren.',
      'Persönliche Hygiene: Hände und Gesicht reinigen, kontaminierte Kleidung wechseln.'),
    CO('warn', 'Kontamination ist ein Gesundheitsrisiko', 'An Gerät, Maske und Einsatzkleidung haften krebserzeugende Brandrückstände. Sie gelangen über Haut und Hand-Mund-Kontakt in den Körper. Einsatzstellenhygiene ist deshalb kein Sauberkeitsthema, sondern Arbeitsschutz – ausführlich in <b>Modul P</b>.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Brandrauch ist giftig, heiß, sichtbehindernd und sauerstoffarm – nur umluftunabhängiger Atemschutz schützt.',
      'CO bindet 200- bis 300-mal stärker an Hämoglobin als Sauerstoff und ist nicht wahrnehmbar.',
      'Luftweg: Flasche → Druckminderer (Mitteldruck) → Lungenautomat → Maske.',
      'Überdrucksystem drückt bei Leckage Luft nach außen.',
      'Luftvorrat = Volumen × Druck; 6,8 l bei 300 bar ≈ 2.040 l.',
      'Einsatzzeit ist nie fix – der Manometerdruck zählt, nicht die Uhr.',
      'Einsatzkurzprüfung: Druck, Dichtheit, Warneinrichtung, Lungenautomat, Maskendichtprobe, Ventil auf.'),
  ],
},

/* ---------------------------------------------------------------- F2 ---- */
{
  id: 'f2', title: 'Einsatzgrundsätze & Atemschutzüberwachung', duration: 24,
  blocks: [
    P('Die FwDV 7 ist im Kern ein Regelwerk zur Unfallverhütung. Fast jeder ihrer Grundsätze lässt sich auf einen realen Atemschutzunfall zurückführen, aus dem gelernt wurde. Diese Lektion behandelt die Regeln für den Einsatz unter Atemschutz und das System, das dafür sorgt, dass draußen jederzeit bekannt ist, wer drinnen ist – die Atemschutzüberwachung.'),

    H2('voraussetzungen', 'Wer darf unter Atemschutz eingesetzt werden?'),
    P('Der Einsatz unter umluftunabhängigem Atemschutz ist körperlich und psychisch fordernd. Deshalb knüpft die FwDV 7 ihn an persönliche Voraussetzungen, die vollständig erfüllt sein müssen – nicht überwiegend.'),
    TBL(['Voraussetzung', 'Inhalt'],[
      ['Mindestalter', 'in der Regel 18 Jahre'],
      ['Gesundheitliche Eignung', 'arbeitsmedizinische Vorsorge <b>G 26.3</b>, regelmäßig zu wiederholen'],
      ['Ausbildung', 'abgeschlossener Lehrgang Atemschutzgeräteträger'],
      ['Belastungsübung', 'jährlich in einer Atemschutzübungsanlage'],
      ['Einsatzübung', 'jährlich eine Übung unter Atemschutz unter einsatznahen Bedingungen'],
      ['Unterweisung', 'regelmäßige Unterweisung am Gerät der eigenen Wehr'],
    ]),
    CO('warn', 'Fehlt eine Voraussetzung, fehlt die Berechtigung', 'Wer die jährliche Belastungsübung nicht absolviert hat oder dessen G 26.3 abgelaufen ist, darf nicht unter Atemschutz eingesetzt werden – auch nicht ausnahmsweise, auch nicht bei Personalmangel. Die Verantwortung dafür liegt beim Einheitsführer und bei der Atemschutzüberwachung.'),
    P('Ebenso wichtig ist die Selbsteinschätzung: Wer erkältet ist, schlecht geschlafen hat, Fieber hatte oder sich nicht fit fühlt, meldet das <b>vor</b> dem Einsatz. Das ist kein Zeichen von Schwäche, sondern die einzige Möglichkeit, einen medizinischen Notfall im Brandraum zu verhindern.'),

    H2('grundsaetze', 'Die Einsatzgrundsätze'),
    KF(
      'Atemschutz wird <b>nur truppweise</b> eingesetzt – mindestens zwei Personen, die zusammenbleiben.',
      'Ständige Verbindung zum Trupp halten: Sicht, Ruf, Feuerwehrleine oder Funk.',
      'Der Rückweg wird festgelegt, gesichert und beobachtet – die Schlauchleitung ist die Leitlinie.',
      'Nur mit Wasser am Rohr in den Brandbereich vorgehen.',
      'Rechtzeitig zurückziehen – der Rückweg braucht mindestens so viel Luft wie der Hinweg.',
      'Bei Störung, Zweifel oder Gefahr zieht sich der <b>gesamte Trupp gemeinsam</b> zurück.',
      'Kein Einsatz unter Atemschutz ohne bereitstehenden Sicherheitstrupp.'),
    P('Der letzte Punkt verdient eine Erklärung, weil er in der Praxis am häufigsten unter Druck gerät. Der Sicherheitstrupp ist keine Formalie, sondern die einzige realistische Chance eines in Not geratenen Trupps. Er steht vollständig ausgerüstet bereit, hat sein eigenes Strahlrohr, Rettungsmittel und ein Atemschutz-Rettungsgerät – und er übernimmt keine andere Aufgabe, solange er Sicherheitstrupp ist.'),
    CO('danger', 'Zweifel sind ein Rückzugsgrund', 'Ein Trupp muss nicht beweisen, dass eine Lage gefährlich ist, um sie zu verlassen. Orientierungsverlust, unklare Geräusche, unerwartete Hitzeentwicklung, ein ungewöhnliches Gerätegeräusch – all das rechtfertigt den sofortigen gemeinsamen Rückzug. Über die Bewertung wird danach gesprochen, nicht davor.'),

    H2('ueberwachung', 'Die Atemschutzüberwachung'),
    DEF('Atemschutzüberwachung', 'Die durchgehende Erfassung und Kontrolle aller unter Atemschutz eingesetzten Trupps durch eine dafür eingeteilte Einsatzkraft. Sie weiß jederzeit, welcher Trupp seit wann mit welchem Anfangsdruck wo im Einsatz ist, hält Verbindung und löst bei Zeit- oder Druckgrenzen sowie bei Kontaktverlust die vorgesehenen Maßnahmen aus.'),
    P('Die Überwachung wird bei jedem Atemschutzeinsatz eingerichtet – auch beim scheinbar kleinen. Häufig übernimmt der Melder diese Aufgabe. Sie erfolgt nachvollziehbar schriftlich oder digital, weil sie im Notfall die Grundlage für die Rettung ist.'),
    TBL(['Erfasst wird', 'Warum'],[
      ['Truppbezeichnung und Namen', 'Wer ist im Einsatz? Wen muss der Sicherheitstrupp suchen?'],
      ['Zeitpunkt des Einsatzbeginns', 'Grundlage für die Einsatzzeit'],
      ['Anfangsdruck jedes Geräteträgers', 'Grundlage für die Verbrauchsrechnung'],
      ['Auftrag und Einsatzort', 'Wo genau ist der Trupp?'],
      ['Rückzugsdruck / Rückzugszeit', 'Wann muss der Trupp spätestens umkehren?'],
      ['Meldungen und Druckkontrollen', 'Verlauf und Verbrauchsentwicklung'],
      ['Zeitpunkt der Rückkehr', 'Abschluss – der Trupp ist heraus'],
    ]),
    CO('info', 'Die Überwachung führt nicht den Einsatz', 'Sie überwacht ihn. Ihre Aufgabe ist es, Grenzen zu erkennen und die Führungskraft zu alarmieren – nicht, taktische Entscheidungen zu treffen. Umgekehrt muss die Führungskraft die Meldungen der Überwachung ernst nehmen: Ein „Rückzugsdruck erreicht" ist keine Empfehlung.'),

    H2('rueckzug', 'Den Rückzug richtig planen'),
    P('Die zentrale Frage lautet: Wann muss der Trupp umkehren, damit er sicher wieder herauskommt? Die Antwort ergibt sich aus dem Verbrauch auf dem Hinweg.'),
    STEPS(
      'Anfangsdruck notieren – beispielsweise 300 bar.',
      'Am Einsatzort meldet der Trupp den aktuellen Druck – beispielsweise 240 bar.',
      'Verbrauch für den Hinweg berechnen: 300 − 240 = 60 bar.',
      'Für den Rückweg mindestens denselben Betrag einplanen: nochmals 60 bar.',
      'Sicherheitsreserve und den Ansprechdruck der Warneinrichtung hinzurechnen.',
      'Ergebnis ist der Rückzugsdruck – bei diesem Wert tritt der Trupp den Rückweg an, nicht erst später.'),
    CO('warn', 'Warum der Rückweg mehr kostet', 'Auf dem Rückweg ist der Trupp erschöpfter, trägt möglicherweise eine gerettete Person, arbeitet unter Zeitdruck und atmet entsprechend mehr. Die Reserve ist deshalb kein Sicherheitsluxus, sondern realistisch kalkuliert. Die Warneinrichtung ist die <b>letzte</b> Warnung – bei ihrem Ansprechen sollte der Trupp bereits auf dem Rückweg oder draußen sein.'),
    P('Verändert sich die Lage – etwa weil der Trupp weiter vordringen muss als geplant –, wird neu gerechnet und gemeldet. Eine einmal getroffene Rückzugsrechnung ist keine Konstante.'),

    H2('kommunikation', 'Verbindung halten'),
    P('Die Verbindung zwischen Trupp und Überwachung ist die Lebensader des Einsatzes. Sie wird über Funk gehalten, ergänzt durch feste Meldezeitpunkte.'),
    UL(
      'Meldung beim Erreichen des Einsatzortes mit Druckangabe',
      'Regelmäßige Druckkontrollen im Trupp – gegenseitig, nicht nur selbst',
      'Meldung bei jeder wesentlichen Lageänderung',
      'Meldung beim Antritt des Rückwegs',
      'Rückmeldung beim Verlassen des Gefahrenbereichs'),
    CO('danger', 'Kontaktverlust ist ein Notfall', 'Meldet sich ein Trupp auf zwei Anrufe nicht, gilt das als Atemschutznotfall. Die Überwachung informiert sofort die Führungskraft, der Sicherheitstrupp wird eingesetzt und weitere Kräfte werden nachgefordert. Abwarten und „der meldet sich schon" ist keine Option – die verlorene Zeit lässt sich nicht aufholen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Voraussetzungen: Mindestalter, G 26.3, Ausbildung, jährliche Belastungs- und Einsatzübung.',
      'Einsatz nur truppweise, mit ständiger Verbindung und gesichertem Rückweg.',
      'Kein Atemschutzeinsatz ohne bereitstehenden Sicherheitstrupp.',
      'Zweifel rechtfertigen den sofortigen gemeinsamen Rückzug.',
      'Die Überwachung erfasst Namen, Zeit, Anfangsdruck, Auftrag und Rückzugsdruck.',
      'Rückzugsdruck = Hinwegverbrauch + gleicher Betrag für den Rückweg + Reserve.',
      'Kontaktverlust nach zwei Anrufen ist ein Atemschutznotfall.'),
  ],
},

/* ---------------------------------------------------------------- F3 ---- */
{
  id: 'f3', title: 'Notfallverfahren & Mayday', duration: 22,
  blocks: [
    P('Ein Atemschutznotfall entwickelt sich selten plötzlich – meistens gibt es eine Kette kleiner Ereignisse, an deren Ende ein Trupp in Not ist. Wer die Verfahren kennt, kann diese Kette früh unterbrechen. Und wenn es doch passiert, entscheidet die Qualität der ersten dreißig Sekunden über den Ausgang. Diese Lektion behandelt die Notfallmeldung und das Verhalten danach.'),

    H2('erkennen', 'Wann ist es ein Notfall?'),
    P('Die schwierigste Entscheidung ist die, den eigenen Zustand als Notfall einzustufen. Aus Stolz oder Fehleinschätzung wird oft zu lange gewartet – und genau diese Minuten fehlen später. Ein Notfall liegt vor bei:'),
    UL(
      '<b>Orientierungsverlust</b> – der Rückweg ist nicht mehr sicher auffindbar',
      '<b>Luftmangel</b> – der Vorrat reicht erkennbar nicht für den Rückweg',
      '<b>Gerätestörung</b> – Ausfall oder Fehlfunktion von Gerät oder Maske',
      '<b>Einschluss</b> – Einsturz, verklemmte Tür, Verhängen, Absturz',
      '<b>Gesundheitliche Probleme</b> – Kreislauf, Überhitzung, Verletzung',
      '<b>Verlust eines Truppmitglieds</b> – der Trupp ist getrennt'),
    CO('warn', 'Lieber einmal zu früh', 'Ein zurückgenommener Mayday kostet nichts außer einer kurzen Nachbesprechung. Ein zu spät abgesetzter Mayday kostet unter Umständen ein Leben. Es gab noch nie ein Verfahren, bei dem sich jemand für einen zu früh gemeldeten Notfall rechtfertigen musste.'),

    H2('mayday', 'Die Notfallmeldung'),
    P('Der Notruf wird über Funk abgesetzt und hat Vorrang vor jedem anderen Funkverkehr. Er beginnt mit dem dreifachen Signalwort, damit er unter allen Umständen erkannt wird.'),
    MNE([{l:'M',w:'Mayday rufen'},{l:'W',w:'Wer'},{l:'W',w:'Wo'},{l:'W',w:'Was'},{l:'L',w:'Luftvorrat'}],
      'Mayday – Mayday – Mayday, dann: Wer bin ich, wo bin ich, was ist passiert, wie viel Luft habe ich noch.'),
    P('Ein vollständiges Beispiel: <b>„Mayday, Mayday, Mayday – hier Angriffstrupp Florian Musterstadt 1 – zweites Obergeschoss, Zimmer rechts vom Treppenraum – Truppmann verletzt, wir sitzen fest – noch 90 bar."</b> Danach wird das Funkgerät nicht mehr belegt, damit die Einsatzleitung antworten kann.'),
    CO('info', 'Was draußen passiert', 'Mit dem Mayday läuft ein festes Programm an: Der Funkverkehr wird auf das Nötigste reduziert, der Sicherheitstrupp geht sofort vor, weitere Kräfte und der Rettungsdienst werden nachgefordert, und die Einsatzstelle wird auf die Rettung ausgerichtet. Alle anderen Trupps werden über die Lage informiert und gegebenenfalls zurückgezogen.'),

    H2('danach', 'Verhalten nach dem Mayday'),
    STEPS(
      '<b>Ruhig und tief atmen.</b> Panik vervielfacht den Luftverbrauch – ruhige Atmung ist die wirksamste Einzelmaßnahme.',
      '<b>Position halten</b>, sofern kein sicherer Rückweg erkennbar ist. Ziellos herumirren verbraucht Luft und erschwert das Auffinden.',
      '<b>Wandkontakt aufnehmen</b> und die Lage beschreiben – jede zusätzliche Ortsangabe hilft dem Sicherheitstrupp.',
      '<b>Bemerkbar machen:</b> rufen, klopfen, Handlampe zur Decke richten, Bewegungsmelder auslösen.',
      '<b>Kräfte einteilen</b> – nur bewegen, wenn es der Rettung dient.',
      '<b>Wenn möglich, den Rückweg entlang der Schlauchleitung suchen</b> – die Kupplungen zeigen die Richtung.'),
    CO('tip', 'Kupplung als Kompass', 'Bei den Storz-Kupplungen zeigt die Seite mit den Nocken zur Pumpe. Wer im Dunkeln der Leitung folgt und die Kupplungsrichtung ertastet, weiß, in welche Richtung es nach draußen geht. Diese Kleinigkeit hat schon Trupps aus verrauchten Gebäuden geführt.'),

    H2('sicherheitstrupp', 'Der Sicherheitstrupp im Einsatz'),
    P('Der Sicherheitstrupp geht mit zusätzlicher Ausrüstung vor, weil er nicht nur sich selbst, sondern auch einen bewegungsunfähigen Trupp versorgen muss.'),
    KF(
      'Vollständige eigene Atemschutzausrüstung',
      '<b>Atemschutz-Rettungsgerät</b> – Reserveluftversorgung für den verunglückten Geräteträger',
      'Eigenes Strahlrohr zur Selbstsicherung',
      'Rettungsmittel: Feuerwehrleine, Rettungstuch, Bandschlinge',
      'Werkzeug zum Öffnen von Türen und Beseitigen von Hindernissen',
      'Handlampe und Funkgerät'),
    P('Der Sicherheitstrupp arbeitet nach demselben Grundsatz wie jeder andere Trupp: Er darf sich nicht selbst in eine Notlage bringen. Deshalb wird beim Einsatz des Sicherheitstrupps unverzüglich ein <b>neuer</b> Sicherheitstrupp gestellt – notfalls durch Nachalarmierung.'),
    CO('danger', 'Rettung braucht Kräfte', 'Die Rettung eines bewusstlosen Atemschutzgeräteträgers ist eine der körperlich härtesten Aufgaben überhaupt. Erfahrungswerte zeigen: Für die Rettung einer Person werden schnell zwei bis drei Trupps gebraucht. Wer beim Mayday nicht sofort massiv nachfordert, hat die Rettung bereits erschwert.'),

    H2('rueckzugssignal', 'Das Rückzugssignal'),
    DEF('Rückzugssignal', 'Ein vorher vereinbartes Signal für den sofortigen Rückzug <b>aller</b> Trupps – etwa ein mehrfach wiederholtes Signal mit dem Fahrzeughorn oder ein festgelegter Funkspruch. Es wird gegeben, wenn die gesamte Einsatzstelle gefährdet ist: bei drohendem Einsturz, unbeherrschbarer Brandausbreitung oder erkannter Explosionsgefahr.'),
    P('Das Rückzugssignal wird von jedem Geräteträger <b>sofort und ohne Rückfrage</b> befolgt. Es wird zudem von jedem, der es hört, weitergegeben – im Rauch hört nicht jeder das Horn. Die Wirksamkeit dieses Signals hängt vollständig davon ab, dass es vorher besprochen und geübt wurde.'),

    H2('nachher', 'Nach einem Atemschutznotfall'),
    P('Ein Atemschutznotfall endet nicht mit der Rettung. Betroffene werden dem Rettungsdienst vorgestellt – auch wenn sie sich wohlfühlen, denn CO- und HCN-Aufnahme zeigt sich teils verzögert. Das Gerät wird gesichert und nicht wieder in Dienst gestellt, bis es geprüft wurde; bei Verdacht auf Gerätefehler ist es für die Untersuchung unverändert aufzubewahren.'),
    P('Ebenso wichtig ist die <b>psychische</b> Nachsorge. Ein Atemschutznotfall belastet den Betroffenen, den Trupp und den Sicherheitstrupp. Die Angebote der psychosozialen Notfallversorgung stehen allen offen und in Anspruch zu nehmen ist ein Zeichen von Professionalität.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Notfall bei Orientierungsverlust, Luftmangel, Gerätestörung, Einschluss, Erkrankung oder Trupptrennung.',
      'Lieber einmal zu früh melden als einmal zu spät.',
      'Meldung: <b>Mayday dreifach</b>, dann Wer – Wo – Was – Luftvorrat.',
      'Danach: ruhig atmen, Position halten, bemerkbar machen, Kräfte einteilen.',
      'Storz-Kupplung: Nockenseite zeigt zur Pumpe – Orientierung im Dunkeln.',
      'Sicherheitstrupp geht mit Rettungsgerät vor; sofort neuen Sicherheitstrupp stellen.',
      'Rückzugssignal gilt sofort, ohne Rückfrage, und wird weitergegeben.'),
  ],
},

/* ---------------------------------------------------------------- F4 ---- */
{
  id: 'f4', title: 'Atemgifte, Belastung & Vorgehen im Trupp', duration: 22,
  blocks: [
    P('Atemschutz schützt gegen zwei sehr verschiedene Gefahren: gegen das, was in der Luft ist, und gegen das, was dem Körper unter dem Gerät passiert. Diese Lektion behandelt beides – die Systematik der Atemgifte und die körperliche Belastung, die im Innenangriff mindestens genauso viele Einsatzkräfte gefährdet wie der Rauch selbst.'),

    H2('atemgifte', 'Die drei Gruppen der Atemgifte'),
    P('Atemgifte wirken auf unterschiedliche Weise. Die Einteilung in drei Gruppen hilft, die Gefahr einzuschätzen und die richtigen Schutzmaßnahmen zu wählen.'),
    TBL(['Gruppe', 'Wirkung', 'Beispiele', 'Besonderheit'],[
      ['Erstickend wirkend', 'verdrängen den Sauerstoff aus der Atemluft', 'Kohlenstoffdioxid, Stickstoff, Methan, Edelgase', 'kein eigener Giftcharakter – der Sauerstoffmangel tötet'],
      ['Reizend und ätzend', 'schädigen Atemwege, Lunge und Gewebe', 'Chlor, Ammoniak, nitrose Gase, Salzsäure', 'Wirkung teils erst nach Stunden (toxisches Lungenödem)'],
      ['Auf Blut, Nerven und Zellen wirkend', 'stören Sauerstofftransport oder Zellatmung', 'Kohlenstoffmonoxid, Blausäure, Schwefelwasserstoff', 'oft ohne Warnwirkung, sehr schnelle Wirkung'],
    ]),
    CO('danger', 'Verzögerte Wirkung', 'Nitrose Gase und Phosgen können zunächst nahezu beschwerdefrei bleiben und erst Stunden später zu einem lebensbedrohlichen Lungenödem führen. Wer solchen Stoffen ausgesetzt war, gehört auch ohne Symptome ärztlich überwacht – das ist keine Vorsichtsmaßnahme, sondern zwingend.'),
    P('Kohlenstoffmonoxid ist der häufigste Vertreter der dritten Gruppe und deshalb die wichtigste Einzelgefahr im Brandeinsatz. Schwefelwasserstoff hat eine besonders tückische Eigenschaft: Er riecht in geringer Konzentration nach faulen Eiern, betäubt aber in hoher Konzentration den Geruchssinn – der Betroffene riecht nichts mehr und hält die Luft für sauber.'),

    H2('sauerstoff', 'Sauerstoffmangel'),
    P('Normale Atemluft enthält rund 21 Volumenprozent Sauerstoff. Sinkt dieser Anteil, sind die Folgen abgestuft, aber schnell dramatisch.'),
    TBL(['Sauerstoffgehalt', 'Wirkung'],[
      ['21 %', 'normal'],
      ['unter 17 %', 'Leistungsabfall, beschleunigte Atmung, Konzentrationsstörungen'],
      ['unter 11 %', 'Bewusstlosigkeit innerhalb kurzer Zeit'],
      ['unter 8 %', 'rascher Tod'],
    ]),
    CO('danger', 'Filtergeräte helfen hier nicht', 'Ein Filtergerät reinigt die Umgebungsluft – es kann keinen Sauerstoff herstellen. Bei Sauerstoffmangel ist es wirkungslos und wiegt den Träger in falscher Sicherheit. Deshalb ist in Kellern, Silos, Gruben, Gärbehältern und Schächten grundsätzlich umluftunabhängiger Atemschutz vorgeschrieben.'),

    H2('belastung', 'Körperliche Belastung unter dem Gerät'),
    P('Ein Atemschutzeinsatz ist Schwerarbeit unter erschwerten Bedingungen. Das Gerät wiegt zusammen mit der Schutzkleidung schnell 25 bis 30 Kilogramm. Dazu kommt die Umgebungswärme – und die Schutzkleidung, die zwar vor Hitze schützt, aber gleichzeitig die körpereigene Kühlung durch Schwitzen weitgehend blockiert.'),
    UL(
      '<b>Wärmestau:</b> Die Körperkerntemperatur steigt, weil der Schweiß nicht verdunsten kann.',
      '<b>Flüssigkeitsverlust:</b> Ein bis zwei Liter Schweiß pro Einsatz sind normal.',
      '<b>Kreislaufbelastung:</b> Herzfrequenzen über 170 Schläge pro Minute sind keine Seltenheit.',
      '<b>Eingeschränkte Sinne:</b> Sicht durch die Maske reduziert, Gehör durch Haube und Helm gedämpft.',
      '<b>Kognitive Belastung:</b> Unter Stress und Hitze sinkt die Fähigkeit, komplexe Entscheidungen zu treffen.'),
    CO('warn', 'Der Kreislauf ist die häufigste Ursache', 'Ein erheblicher Teil der schweren Zwischenfälle im Feuerwehrdienst geht auf Herz-Kreislauf-Ereignisse zurück, nicht auf Flammen. Deshalb sind die G 26.3, ausreichende Fitness, Trinken vor und nach dem Einsatz sowie konsequente Erholungspausen keine Nebensache.'),
    P('Nach dem Einsatz gehört daher eine geordnete <b>Erholungsphase</b> dazu: Gerät ablegen, Schutzkleidung öffnen, im Schatten oder in der Wärme abkühlen beziehungsweise aufwärmen, ausreichend trinken und den Kreislauf beobachten. Größere Einsatzstellen richten dafür einen eigenen Bereitstellungs- und Erholungsraum ein.'),

    H2('luftverbrauch', 'Luftverbrauch realistisch einschätzen'),
    P('Der Luftverbrauch ist die direkte Folge der Belastung – und er ist der Grund, warum jede Zeitangabe im Atemschutz trügerisch ist. Wer die eigenen Werte kennt, schätzt im Einsatz besser.'),
    KF(
      'Ruhige, gleichmäßige Atmung spart Luft und Kräfte.',
      'Hektik und Panik können den Verbrauch mehr als verdreifachen.',
      'Treppensteigen, Schlauchmanagement und das Tragen von Personen sind die größten Verbraucher.',
      'Die Reserve für den Rückweg wird immer eingeplant – vor dem Vorgehen, nicht danach.',
      'Die Atemschutzüberwachung rechnet mit, aber die Verantwortung bleibt beim Trupp.',
      'Den eigenen Verbrauch in der Belastungsübung kennenlernen und merken.'),
    CO('tip', 'Kenne deine eigene Zahl', 'Notiere dir nach jeder Belastungsübung, wie viel bar du für welche Belastung gebraucht hast. Nach drei, vier Übungen kennst du deinen persönlichen Verbrauch – und kannst im Einsatz realistisch einschätzen, was noch geht. Diese Zahl ist individuell und lässt sich nicht von anderen übernehmen.'),

    H2('vorgehen', 'Im Trupp vorgehen'),
    STEPS(
      'Vor dem Einsatz: Einsatzkurzprüfung, Auftrag klären, Rückweg und Rückzugsdruck festlegen, Partnerkontrolle durchführen.',
      'Gemeinsam vorgehen und ständigen Kontakt halten – Sicht, Ruf oder Körperkontakt, im Zweifel die Hand am Kameraden.',
      'Türen und Räume vorsichtig erkunden, Wärme vor dem Öffnen prüfen, Rauchgasschicht kühlen.',
      'Regelmäßig gegenseitig den Druck kontrollieren und melden – nicht nur den eigenen.',
      'Orientierungspunkte merken und laut benennen: „links Tür, geradeaus Flur".',
      'Bei Störung, Luftmangel, Zweifel oder Gefahr gemeinsam zurückziehen.'),
    P('Die gegenseitige Druckkontrolle ist dabei mehr als eine Formalie. Wer nur den eigenen Druck kennt, übersieht, dass der Truppmann vielleicht deutlich mehr verbraucht hat – und der Trupp richtet sich immer nach dem <b>niedrigsten</b> Wert im Trupp.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Atemgifte: erstickend – reizend/ätzend – auf Blut, Nerven und Zellen wirkend.',
      'Reizgase können verzögert zum Lungenödem führen – immer ärztlich abklären lassen.',
      'Sauerstoff unter 17 % Leistungsabfall, unter 11 % Bewusstlosigkeit, unter 8 % rascher Tod.',
      'Filtergeräte helfen bei Sauerstoffmangel nicht.',
      'Wärmestau, Flüssigkeitsverlust und Kreislaufbelastung sind reale Hauptgefahren.',
      'Panik verdreifacht den Luftverbrauch; den eigenen Verbrauch kennenlernen.',
      'Gegenseitige Druckkontrolle – der Trupp richtet sich nach dem niedrigsten Wert.'),
  ],
},

/* ---------------------------------------------------------------- F5 ---- */
{
  id: 'f5', title: 'Gerätevarianten, Fluchthauben & Filter', duration: 20,
  blocks: [
    P('Der Pressluftatmer ist das Standardgerät der Feuerwehr, aber nicht das einzige. Für bestimmte Lagen gibt es andere Bauarten, und für zu rettende Personen gibt es eigene Hilfsmittel. Wer die Systematik kennt, wählt richtig aus – und erkennt vor allem, wann ein Gerät <b>nicht</b> geeignet ist.'),

    H2('einteilung', 'Die große Trennlinie'),
    P('Alle Atemschutzgeräte lassen sich zwei Familien zuordnen, und der Unterschied zwischen ihnen ist der wichtigste des ganzen Themas.'),
    TBL(['Familie', 'Prinzip', 'Voraussetzung', 'Typische Vertreter'],[
      ['Umluftabhängig (Filtergeräte)', 'reinigen die Umgebungsluft', 'genug Sauerstoff <b>und</b> bekannter, filterbarer Schadstoff', 'Halbmaske mit Filter, Vollmaske mit Filter, Gebläsefiltergerät'],
      ['Umluftunabhängig (Isoliergeräte)', 'führen eigene Atemluft mit oder erzeugen sie', 'keine – arbeiten unabhängig von der Umgebung', 'Pressluftatmer, Regenerationsgerät, Schlauchgerät'],
    ]),
    CO('danger', 'Filter ist kein Universalschutz', 'Ein Filtergerät versagt in zwei Fällen vollständig: bei Sauerstoffmangel und bei Stoffen, für die der Filter nicht ausgelegt ist. Beides ist im Brandrauch die Regel. Deshalb gilt ohne Ausnahme: <b>Im Brandeinsatz und bei unbekannter Atmosphäre nur umluftunabhängiger Atemschutz.</b>'),

    H2('filter', 'Filtergeräte – wo sie sinnvoll sind'),
    P('Filtergeräte haben durchaus ihren Platz in der Feuerwehr, nur eben nicht im Innenangriff. Typische Einsatzfelder sind Nachlösch- und Aufräumarbeiten im Freien, Arbeiten bei Staubentwicklung, Tierrettungen unter beengten Verhältnissen im Freien oder Tätigkeiten in der Werkstatt.'),
    TBL(['Filtertyp', 'Schützt gegen', 'Kennfarbe'],[
      ['P (Partikelfilter)', 'Stäube, Aerosole, Fasern', 'weiß'],
      ['A (Gasfilter)', 'organische Gase und Dämpfe', 'braun'],
      ['B', 'anorganische Gase, z. B. Chlor', 'grau'],
      ['E', 'saure Gase, z. B. Schwefeldioxid', 'gelb'],
      ['K', 'Ammoniak und organische Amine', 'grün'],
      ['Kombinationsfilter', 'Kombination aus Gas- und Partikelfilter', 'entsprechende Ringe'],
    ]),
    P('Wichtig ist neben dem Typ auch die <b>Klasse</b> (1 bis 3), die die Aufnahmekapazität beschreibt, und die begrenzte Gebrauchsdauer. Ein angebrochener Filter ist nur begrenzt haltbar, und ein Filter, durch den es „durchriecht", ist erschöpft und sofort zu wechseln.'),

    H2('varianten', 'Umluftunabhängige Bauarten'),
    TBL(['Bauart', 'Funktionsweise', 'Einsatzbereich'],[
      ['Pressluftatmer (Behältergerät)', 'Druckluft aus einer mitgeführten Flasche', 'Standardgerät der Feuerwehr'],
      ['Regenerationsgerät', 'Ausatemluft wird chemisch von CO₂ befreit und mit Sauerstoff angereichert', 'sehr lange Einsatzzeiten, Grubenwehr, Spezialeinheiten'],
      ['Schlauchgerät', 'Atemluft wird über einen Schlauch von außen zugeführt', 'ortsgebundene Arbeiten, Behälter, Kanäle'],
      ['Selbstretter', 'kleines Gerät für die eigene Flucht', 'Industrie, Bergbau, Sonderobjekte'],
    ]),
    P('Für die allermeisten Feuerwehren ist der Pressluftatmer das einzige relevante Gerät. Regenerations- und Schlauchgeräte begegnen dir vor allem in Werkfeuerwehren und bei Spezialeinheiten – wichtig ist, ihre Existenz und ihr Prinzip zu kennen, wenn du mit solchen Einheiten zusammenarbeitest.'),

    H2('flucht', 'Fluchthauben für zu rettende Personen'),
    DEF('Brandfluchthaube', 'Eine über den Kopf zu ziehende Haube mit Filter, die einer zu rettenden Person für kurze Zeit Schutz vor Brandrauch bietet, während sie aus dem Gefahrenbereich geführt wird. Sie ist ein <b>Rettungsmittel für Betroffene</b> und ausdrücklich kein Ersatz für den Pressluftatmer der Einsatzkraft.'),
    P('Fluchthauben sind einfach anzulegen, benötigen keine Anpassung und funktionieren auch über Brillen und Bärten. Ihre Grenzen sind allerdings dieselben wie bei jedem Filter: Sie helfen nicht bei Sauerstoffmangel und nur für wenige Minuten. Sie werden deshalb erst unmittelbar vor dem Verlassen des Gefahrenbereichs aufgesetzt und nicht als Dauerlösung verwendet.'),
    CO('warn', 'Für den Trupp verboten', 'Eine Fluchthaube ersetzt niemals den Pressluftatmer einer Einsatzkraft – auch nicht „nur kurz" und auch nicht, wenn das eigene Gerät ausgefallen ist. In diesem Fall gilt die Notfallprozedur mit Mayday und Sicherheitstrupp.'),

    H2('maske', 'Atemanschluss und Lungenautomat'),
    P('Der Atemanschluss ist das Bauteil mit dem größten Einfluss auf die Schutzwirkung – und das am meisten unterschätzte. Ein hochwertiges Gerät mit schlecht sitzender Maske schützt nicht.'),
    KF(
      'Der Dichtsitz ist entscheidend – Bart, Brillenbügel und Schmuck im Dichtbereich sind Ausschlussgründe.',
      'Überdrucksysteme verhindern das Eindringen von Schadstoffen bei kleinen Leckagen.',
      'Vor jedem Einsatz: Einsatzkurzprüfung inklusive Dichtprobe.',
      'Nach jedem Einsatz: Reinigung, Desinfektion, Trocknung und Prüfung.',
      'Maske und Lungenautomat werden persönlich angepasst und dokumentiert.',
      'Beschädigte Dichtlippen, trübe Sichtscheiben und poröse Bänder führen zur Aussonderung.'),
    P('Die Prüf- und Wartungsfristen ergeben sich aus den Herstellerangaben und den Vorgaben der DGUV. Sie werden in der Atemschutzwerkstatt dokumentiert – ein Gerät ohne gültige Prüfung ist kein einsatzbereites Gerät.'),

    H2('auswahl', 'Die Auswahlfrage in drei Schritten'),
    STEPS(
      'Ist der Sauerstoffgehalt sicher ausreichend? Wenn nein oder unbekannt → umluftunabhängig.',
      'Ist der Schadstoff bekannt und durch einen verfügbaren Filter sicher abscheidbar? Wenn nein → umluftunabhängig.',
      'Ist die Konzentration niedrig genug für den gewählten Filter und die geplante Dauer? Wenn nein oder unbekannt → umluftunabhängig.'),
    CO('info', 'Im Zweifel immer die sichere Variante', 'Die drei Fragen laufen fast immer auf dieselbe Antwort hinaus. Das ist kein Fehler der Systematik, sondern ihr Zweck: Filtergeräte sind die Ausnahme für klar definierte Lagen, nicht die bequeme Alternative.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Zwei Familien: <b>umluftabhängig</b> (Filter) und <b>umluftunabhängig</b> (Isoliergeräte).',
      'Filtergeräte versagen bei Sauerstoffmangel und bei nicht passenden Stoffen.',
      'Filtertypen: P Partikel, A organisch, B anorganisch, E sauer, K Ammoniak.',
      'Pressluftatmer ist das Standardgerät; Regenerations- und Schlauchgeräte sind Sonderfälle.',
      'Fluchthauben sind Rettungsmittel für Betroffene, nie Ersatz für den PA.',
      'Der Dichtsitz der Maske entscheidet über die Schutzwirkung.',
      'Auswahlregel: Sauerstoff unbekannt oder Stoff unbekannt → umluftunabhängig.'),
  ],
},

/* ---------------------------------------------------------------- F6 ---- */
{
  id: 'f6', title: 'Atemschutzunfall, Rettung & Zusammenarbeit', duration: 22,
  blocks: [
    P('Die vorangegangenen Lektionen haben Gerät, Regeln und Notfallmeldung behandelt. Diese Lektion schaut auf das, was Unfälle tatsächlich verursacht – und auf das, was sie am zuverlässigsten verhindert: die Qualität der Zusammenarbeit im Trupp. Atemschutzunfälle sind fast nie das Ergebnis eines einzelnen Fehlers, sondern einer Kette.'),

    H2('ursachen', 'Wie es zum Notfall kommt'),
    P('Die Auswertung von Atemschutzunfällen zeigt immer wieder dieselben Muster. Keines davon ist überraschend – und genau das macht sie vermeidbar.'),
    TBL(['Ursache', 'Typischer Ablauf', 'Wirksame Gegenmaßnahme'],[
      ['Orientierungsverlust', 'Trupp verlässt die Schlauchleitung, Sicht null, Rückweg unklar', 'Leitlinie nie loslassen, Orientierungspunkte laut benennen'],
      ['Luftmangel', 'Rückzugsdruck nicht berechnet oder überzogen', 'Rückzugsdruck vorher festlegen, gegenseitig kontrollieren'],
      ['Gerätestörung', 'Ventil nicht ganz geöffnet, Maske undicht, Schlauch verhakt', 'Einsatzkurzprüfung, Partnerkontrolle'],
      ['Einschluss', 'Einsturz, verklemmte Tür, Durchsturz durch geschwächte Decke', 'Bausubstanz beurteilen, Fluchtwege offen halten'],
      ['Gesundheitliche Probleme', 'Kreislauf, Überhitzung, Vorerkrankung', 'G 26.3, Fitness, ehrliche Selbsteinschätzung, Pausen'],
      ['Trupptrennung', 'ein Mitglied bleibt zurück, Kontakt reißt ab', 'Kontakt nie aufgeben, gemeinsam vor und zurück'],
    ]),
    CO('warn', 'Die Kette unterbrechen', 'Vor fast jedem Atemschutzunfall gab es mehrere Punkte, an denen ein Rückzug problemlos möglich gewesen wäre. Der wirksamste Schutz ist deshalb nicht mehr Ausrüstung, sondern die Bereitschaft, früh umzukehren – bevor aus einem unangenehmen Gefühl eine Notlage wird.'),

    H2('rettung', 'Rettung eines Atemschutzgeräteträgers'),
    P('Die Rettung eines verunglückten Geräteträgers unterscheidet sich deutlich von der Rettung einer zivilen Person: Der Verunglückte trägt schwere Ausrüstung, ist möglicherweise verhakt und braucht unter Umständen sofort Atemluft.'),
    STEPS(
      'Auffinden und Lage feststellen: Ist die Person ansprechbar? Wie ist der Luftvorrat? Ist sie eingeklemmt?',
      'Luftversorgung sicherstellen – über das mitgeführte Atemschutz-Rettungsgerät oder eine Zweitanschlussmöglichkeit.',
      'Eigensicherung prüfen: Ist der Rückweg noch frei? Reicht die eigene Luft für Rettung <b>und</b> Rückweg?',
      'Hindernisse beseitigen, Gurte und Bebänderung nutzen, um zu ziehen.',
      'Rückmeldung nach draußen: Person gefunden, Zustand, benötigte Unterstützung.',
      'Transport nach draußen – bei Bedarf mit weiteren Trupps, Rettungstuch oder Schleifkorbtrage.',
      'Sofortige Übergabe an den Rettungsdienst.'),
    CO('danger', 'Die eigene Grenze gilt auch hier', 'Reicht die eigene Luft nicht für Rettung und Rückweg, muss der Sicherheitstrupp selbst zurück und die Position melden. Ein zweiter verunglückter Trupp verdoppelt das Problem und halbiert die Chancen des Ersten. Das ist die härteste Entscheidung im Feuerwehrdienst – und sie muss vorher besprochen sein.'),

    H2('crm', 'Zusammenarbeit im Trupp'),
    P('Die Luftfahrt hat aus schweren Unfällen ein Konzept entwickelt, das inzwischen auch in der Feuerwehr Fuß gefasst hat: <b>Crew Resource Management</b>. Der Kerngedanke ist einfach – die meisten Fehler entstehen nicht aus fehlendem Wissen, sondern aus schlechter Kommunikation und aus Hierarchie, die niemanden widersprechen lässt.'),
    KF(
      '<b>Klare Absprachen:</b> Vor dem Vorgehen Auftrag, Weg, Rückweg und Rückzugsdruck laut besprechen.',
      '<b>Ständige Kommunikation:</b> Beobachtungen aussprechen, auch wenn sie unwichtig scheinen.',
      '<b>Gegenseitige Kontrolle:</b> Druck, Zustand und Orientierung des anderen aktiv mitverfolgen.',
      '<b>Aufmerksamkeit teilen:</b> Nicht beide auf dieselbe Aufgabe fixieren – einer arbeitet, einer beobachtet.',
      '<b>Zweifel offen ansprechen:</b> „Ich bin unsicher, wo wir sind" ist ein wertvoller Satz, kein Eingeständnis.',
      '<b>Entscheidungen laut aussprechen:</b> „Wir gehen jetzt zurück" – damit beide dieselbe Vorstellung haben.'),
    CO('tip', 'Der wichtigste Satz im Trupp', '„Ich bin mir nicht sicher." Wer ihn ausspricht, gibt dem Trupp die Chance, gemeinsam eine bessere Entscheidung zu treffen. Wer ihn unterdrückt, um nicht schwach zu wirken, riskiert beide. Eine gute Truppkultur macht diesen Satz selbstverständlich.'),

    H2('fuehrung', 'Was die Führung beitragen muss'),
    P('Die beste Truppdisziplin nützt wenig, wenn die Rahmenbedingungen nicht stimmen. Führungskräfte tragen für den Atemschutzeinsatz eine besondere Verantwortung.'),
    UL(
      'Klare, vollständige Aufträge geben – ein unklarer Auftrag führt zu improvisiertem Vorgehen.',
      'Atemschutzüberwachung einrichten und ihre Meldungen ernst nehmen.',
      'Sicherheitstrupp stellen, bevor der erste Trupp vorgeht – nicht danach.',
      'Rechtzeitig nachfordern: Ein Atemschutzeinsatz bindet mehr Kräfte, als es zunächst scheint.',
      'Ablösung einplanen – ein Trupp ist nach einem Flaschenvorrat körperlich erschöpft.',
      'Erholungsbereich und Getränke bereitstellen.',
      'Rückzugssignal vorher festlegen und bekannt geben.'),

    H2('uebung', 'Warum Üben unersetzlich ist'),
    P('Unter Atemschutz funktioniert nur, was automatisiert ist. Bei 40 Grad, ohne Sicht, mit 170 Schlägen pro Minute und unter Zeitdruck ist niemand in der Lage, ein Verfahren zum ersten Mal zu durchdenken. Die jährliche Belastungsübung und die Einsatzübung sind deshalb keine Pflichtübung zum Abhaken, sondern der eigentliche Grund, warum das System funktioniert.'),
    KF(
      'Notfallverfahren so lange üben, bis sie ohne Nachdenken ablaufen.',
      'Mayday laut aussprechen üben – im Ernstfall fehlen sonst die Worte.',
      'Rettung eines Geräteträgers regelmäßig praktisch trainieren.',
      'Den eigenen Luftverbrauch bei verschiedenen Belastungen kennenlernen.',
      'Zusammenarbeit im festen Trupp üben – eingespielte Trupps sind messbar sicherer.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Häufigste Ursachen: Orientierungsverlust, Luftmangel, Gerätestörung, Einschluss, Kreislauf, Trupptrennung.',
      'Unfälle sind Ketten – früher Rückzug unterbricht sie.',
      'Rettung eines Geräteträgers: Luftversorgung sicherstellen, Eigensicherung prüfen, Kräfte nachfordern.',
      'Reicht die eigene Luft nicht für Rettung und Rückweg, muss der Sicherheitstrupp zurück.',
      'CRM: klare Absprachen, gegenseitige Kontrolle, Zweifel offen ansprechen.',
      'Führung: Auftrag, Überwachung, Sicherheitstrupp, Nachforderung, Ablösung, Erholung.',
      'Unter Atemschutz funktioniert nur, was vorher automatisiert wurde.'),
  ],
},

];
