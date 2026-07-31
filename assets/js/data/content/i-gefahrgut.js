/* =========================================================================
   MODUL I — ABC-Gefahrstoffe (FwDV 500)
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls I.

   Fachliche Grundlage: FwDV 500 (Einheiten im ABC-Einsatz), ADR/GGVSEB,
   CLP-Verordnung (GHS), Strahlenschutzverordnung, DGUV Vorschrift 49.
   Zahlenwerte sind Richtwerte – maßgeblich sind die Vorgaben deines
   Landes und die Anordnungen der Fachberatung.
   Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_I = [

/* ---------------------------------------------------------------- I1 ---- */
{
  id: 'i1', title: 'Erkennen & Kennzeichnung', duration: 26,
  blocks: [
    P('Ein umgestürzter Tanklastzug sieht auf den ersten Blick aus wie ein Verkehrsunfall. Ob er einer ist oder eine Gefahrgutlage mit kilometerweitem Absperrbereich, entscheidet sich an einer orangefarbenen Tafel und ein paar Rauten am Fahrzeug. Diese Lektion bringt dir bei, diese Zeichen zu lesen – und zwar aus sicherer Entfernung mit dem Fernglas, nicht am Fahrzeug stehend.'),

    H2('abc', 'Was ABC bedeutet'),
    P('ABC steht für die drei Gefahrenarten, die dieses Modul behandelt: <b>Atomare</b> beziehungsweise radiologische, <b>Biologische</b> und <b>Chemische</b> Gefahren. International und zunehmend auch in Deutschland wird dafür die Abkürzung <b>CBRN</b> verwendet – chemisch, biologisch, radiologisch, nuklear. Gemeint ist dasselbe.'),
    P('Allen dreien ist eines gemeinsam: Die Gefahr ist häufig <b>nicht sichtbar</b>. Ein Gas breitet sich lautlos aus, radioaktive Strahlung ist ohne Messgerät nicht wahrnehmbar, und ein Krankheitserreger sieht man ohnehin nicht. Deshalb ist bei ABC-Lagen die Erkundung wichtiger als bei jedem anderen Einsatz – und der Reflex, erst einmal Abstand zu halten, richtiger als überall sonst.'),
    MNE([{l:'A',w:'Atemgifte'},{l:'A',w:'Angstreaktion'},{l:'A',w:'Ausbreitung'},{l:'A',w:'Atomare Gefahren'},{l:'C',w:'Chemische Stoffe'},{l:'E',w:'Erkrankung'},{l:'E',w:'Explosion'},{l:'E',w:'Elektrizität'},{l:'E',w:'Einsturz'}],
      'Die Gefahren der Einsatzstelle nach dem Schema 4 A – 1 C – 4 E. Bei ABC-Lagen sind fast immer mehrere davon gleichzeitig im Spiel.'),

    H2('warntafel', 'Die orangefarbene Warntafel'),
    DEF('Orangefarbene Warntafel', 'Die rechteckige orange Tafel an Gefahrguttransportern. Steht sie <b>ohne</b> Beschriftung, transportiert das Fahrzeug verschiedene verpackte Gefahrgüter – die Angaben stehen dann in den Beförderungspapieren. Ist sie <b>beschriftet</b>, steht oben die <b>Gefahrnummer</b> (Kemler-Zahl) und unten die vierstellige <b>UN-Nummer</b> des konkreten Stoffes.'),
    FIG('warntafel', 'Orangefarbene Warntafel: oben die Gefahrnummer (Kemler-Zahl), unten die UN-Stoffnummer.'),
    P('Ein Beispiel: <b>33 / 1203</b>. Die obere Zahl 33 bedeutet „stark entzündbarer flüssiger Stoff", die untere Zahl 1203 steht für Ottokraftstoff. Mit diesen beiden Angaben lässt sich in jedem Nachschlagewerk innerhalb von Sekunden ermitteln, womit man es zu tun hat.'),

    H3('Die Gefahrnummer im Detail'),
    P('Die Kemler-Zahl besteht aus zwei oder drei Ziffern, gelegentlich mit einem vorangestellten Buchstaben. Die <b>erste Ziffer</b> nennt die Hauptgefahr, weitere Ziffern nennen Nebengefahren.'),
    TBL(['Ziffer', 'Bedeutung'],[
      ['2', 'Entweichen von Gas durch Druck oder chemische Reaktion'],
      ['3', 'Entzündbarkeit von flüssigen Stoffen und Gasen'],
      ['4', 'Entzündbarkeit von festen Stoffen'],
      ['5', 'oxidierende, brandfördernde Wirkung'],
      ['6', 'Giftigkeit oder Ansteckungsgefahr'],
      ['7', 'Radioaktivität'],
      ['8', 'Ätzwirkung'],
      ['9', 'Gefahr einer spontanen heftigen Reaktion'],
    ]),
    KF(
      '<b>Verdoppelte Ziffer</b> (z. B. 33, 88) bedeutet eine Verstärkung der Gefahr.',
      '<b>Eine 0 als zweite Ziffer</b> bedeutet: keine weitere Nebengefahr.',
      '<b>Ein vorangestelltes X</b> bedeutet: Der Stoff darf <b>nicht mit Wasser</b> in Berührung kommen.',
      'Die UN-Nummer ist immer vierstellig und weltweit eindeutig.'),
    CO('danger', 'Das X ist die wichtigste Information auf der Tafel', 'Ein X vor der Gefahrnummer – etwa X333 – warnt vor einer gefährlichen Reaktion mit Wasser. In diesem Fall wird kein Wasser eingesetzt, weder zum Löschen noch zum Niederschlagen. Wer das übersieht, kann aus einem Brand eine Explosion machen.'),

    H2('gefahrzettel', 'Gefahrzettel und Klassen'),
    P('Zusätzlich zur Warntafel tragen Fahrzeuge und Gebinde <b>Gefahrzettel</b> – auf der Spitze stehende Quadrate mit Symbol, Farbe und Klassenziffer. Sie zeigen die Gefahrenklasse auf einen Blick, auch ohne Nachschlagewerk.'),
    TBL(['Klasse', 'Inhalt', 'Typisches Beispiel'],[
      ['1', 'explosive Stoffe und Gegenstände', 'Sprengstoff, Feuerwerk'],
      ['2', 'Gase (entzündbar, nicht entzündbar, giftig)', 'Propan, Sauerstoff, Chlor'],
      ['3', 'entzündbare flüssige Stoffe', 'Benzin, Lösemittel'],
      ['4.1 / 4.2 / 4.3', 'entzündbare feste Stoffe / selbstentzündlich / entwickeln mit Wasser Gase', 'Schwefel / Phosphor / Carbid'],
      ['5.1 / 5.2', 'oxidierend / organische Peroxide', 'Wasserstoffperoxid'],
      ['6.1 / 6.2', 'giftig / ansteckungsgefährlich', 'Pflanzenschutzmittel / medizinische Proben'],
      ['7', 'radioaktive Stoffe', 'Isotope für Medizin und Technik'],
      ['8', 'ätzende Stoffe', 'Salzsäure, Natronlauge'],
      ['9', 'verschiedene gefährliche Stoffe', 'Lithiumbatterien, umweltgefährdende Stoffe'],
    ]),
    CO('info', 'Klasse 9 nicht unterschätzen', 'Die Sammelklasse 9 wirkt harmlos, enthält aber unter anderem Lithiumbatterien. Deren Brände sind schwer beherrschbar, setzen giftige Gase frei und können sich nach Stunden erneut entzünden. Bei Elektrofahrzeugen und Batterietransporten ist die Klasse 9 der Hinweis, dass Fachberatung nötig ist.'),

    H2('ghs', 'GHS-Kennzeichnung ortsfester Gebinde'),
    P('Chemikalien in Betrieben, Laboren und Haushalten tragen keine Warntafel, sondern <b>GHS-Piktogramme</b> nach der CLP-Verordnung: rot umrandete Rauten mit schwarzem Symbol auf weißem Grund. Sie kennzeichnen das Gebinde, nicht den Transport.'),
    UL(
      '<b>Flamme:</b> entzündbar',
      '<b>Flamme über Kreis:</b> brandfördernd, oxidierend',
      '<b>Explodierende Bombe:</b> explosiv',
      '<b>Gasflasche:</b> unter Druck stehende Gase',
      '<b>Ätzwirkung:</b> ätzend für Haut, Augen oder Metalle',
      '<b>Totenkopf:</b> akut toxisch',
      '<b>Ausrufezeichen:</b> gesundheitsschädlich, reizend',
      '<b>Gesundheitsgefahr (Person):</b> krebserzeugend, erbgutverändernd, atemwegssensibilisierend',
      '<b>Umwelt:</b> gewässergefährdend'),
    P('Ergänzt werden die Piktogramme durch <b>H-Sätze</b> (Gefahrenhinweise) und <b>P-Sätze</b> (Sicherheitshinweise) sowie durch das <b>Sicherheitsdatenblatt</b>, das jeder Betrieb für seine Stoffe vorhalten muss. Dieses Datenblatt ist im Einsatz Gold wert – frage aktiv danach.'),

    H2('quellen', 'Wo du nachschlägst'),
    P('Niemand kennt tausende Stoffe auswendig. Entscheidend ist zu wissen, wo die Antwort steht – und danach zu greifen, statt zu raten.'),
    TBL(['Quelle', 'Was sie liefert'],[
      ['Beförderungspapiere', 'genaue Stoffbezeichnung, Menge, Absender, Empfänger'],
      ['Nachschlagewerk (z. B. Hommel)', 'Stoffdaten, Gefahren, empfohlene Maßnahmen'],
      ['ERICARDS / Unfallmerkblätter', 'schnelle Handlungsempfehlungen nach Stoffgruppe'],
      ['Sicherheitsdatenblatt des Betriebs', 'vollständige Stoff- und Schutzangaben'],
      ['Fachberater Chemie, TUIS', 'Beratung durch die Industrie, rund um die Uhr'],
      ['Giftinformationszentrale', 'medizinische Beratung bei Personenkontakt'],
      ['Feuerwehrplan, Betriebsleitung', 'Ortskenntnis, Lagerorte, Anlagentechnik'],
    ]),
    CO('warn', 'Erkunden heißt nicht hingehen', 'Kennzeichnungen werden mit dem <b>Fernglas</b> aus sicherer Entfernung und von der windzugewandten Seite abgelesen. Wer zum Ablesen an den Tank läuft, hat den Sinn der Kennzeichnung missverstanden – sie soll gerade verhindern, dass jemand nah heranmuss.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'ABC = atomar, biologisch, chemisch; international CBRN.',
      'Warntafel: oben Gefahrnummer (Kemler), unten vierstellige UN-Nummer.',
      'Erste Ziffer = Hauptgefahr, weitere = Nebengefahren, Verdopplung = Verstärkung.',
      '<b>Vorangestelltes X: kein Wasser einsetzen.</b>',
      'Gefahrzettel zeigen die Klasse 1 bis 9 mit Symbol und Farbe.',
      'GHS-Piktogramme kennzeichnen ortsfeste Gebinde; Sicherheitsdatenblatt erfragen.',
      'Kennzeichnung immer mit dem Fernglas aus Luv ablesen.'),
  ],
},

/* ---------------------------------------------------------------- I2 ---- */
{
  id: 'i2', title: 'GAMS-Regel, Gefahrengruppen & Zonen', duration: 26,
  blocks: [
    P('Die allermeisten Feuerwehren haben keinen Gefahrgutzug und keine Chemikalienschutzanzüge. Trotzdem sind sie fast immer die Ersten an einer Gefahrgutlage. Für genau diese Situation gibt es eine Regel, die kurz genug ist, um sie unter Stress abzurufen, und vollständig genug, um nichts falsch zu machen: die GAMS-Regel.'),

    H2('gams', 'Die GAMS-Regel'),
    MNE([{l:'G',w:'Gefahr erkennen'},{l:'A',w:'Absperren'},{l:'M',w:'Menschenrettung'},{l:'S',w:'Spezialkräfte'}],
      'Gefahr erkennen – Absperren – Menschenrettung durchführen – Spezialkräfte anfordern. Der Handlungsrahmen der ersteintreffenden Einheit ohne Sonderausstattung.'),
    FIG('gams', 'Die GAMS-Regel als Handlungsrahmen der ersteintreffenden Einheit bei Gefahrgutlagen.'),

    H3('G – Gefahr erkennen'),
    P('Aus sicherer Entfernung und von der windzugewandten Seite wird erkundet: Welche Kennzeichnung? Welcher Stoff? Welche Menge? Tritt bereits etwas aus? Gibt es Betroffene? Welche Objekte sind gefährdet? Wie ist die Windrichtung? Diese Erkundung erfolgt mit dem Fernglas, nicht zu Fuß am Objekt.'),

    H3('A – Absperren'),
    P('Der Absperrbereich wird großzügig festgelegt und lieber später verkleinert als vergrößert. Als Grundregel gilt bei unklarer Lage ein Radius von mindestens <b>50 Metern</b>; bei größeren Mengen, Gasaustritt oder Explosionsgefahr deutlich mehr. Die Annäherung erfolgt immer aus <b>Luv</b>, also von der windzugewandten Seite, und möglichst von einer höher gelegenen Position.'),
    CO('warn', 'Abstand ist die wirksamste Schutzausrüstung', 'Kein Anzug und kein Atemschutz schützt so zuverlässig wie Entfernung. Wer unsicher ist, geht weiter zurück – das kostet nichts und macht nichts kaputt. Ein zu klein gewählter Absperrbereich dagegen ist im Nachhinein kaum noch zu korrigieren, weil sich dann bereits Kräfte und Fahrzeuge darin befinden.'),

    H3('M – Menschenrettung'),
    P('Auch bei Gefahrgutlagen hat die Menschenrettung Vorrang. Sie erfolgt aber nur mit der verfügbaren Schutzausrüstung, unter Beachtung der Aufenthaltszeit und nach klarer Abwägung. Gerettete Personen werden nicht einfach in den sicheren Bereich gebracht, sondern an einer festgelegten Stelle gesammelt, weil sie selbst kontaminiert sein können.'),

    H3('S – Spezialkräfte'),
    P('Frühzeitig und nicht erst nach dem Scheitern eigener Versuche: Gefahrgutzug, Fachberater Chemie, Messtrupp, Umweltbehörde, Polizei, gegebenenfalls TUIS-Werkfeuerwehr. Die Anfahrtszeiten dieser Kräfte sind lang – wer zu spät alarmiert, verliert eine Stunde, die niemand aufholt.'),

    H2('gruppen', 'Die Gefahrengruppen der FwDV 500'),
    P('Die FwDV 500 ordnet Einsätze drei Gefahrengruppen zu. Aus der Gruppe folgt die erforderliche Schutzausrüstung und damit auch, ob die eigene Einheit überhaupt tätig werden darf.'),
    TBL(['Gruppe', 'Bedeutung', 'Schutzausrüstung'],[
      ['I', 'geringe Gefahr', 'Feuerwehrschutzkleidung und umluftunabhängiger Atemschutz (Körperschutz Form 1)'],
      ['II', 'erhöhte Gefahr', 'zusätzlich Kontaminationsschutz, z. B. Kontaminationsschutzhaube oder -anzug (Form 2)'],
      ['III', 'hohe Gefahr', 'Chemikalienschutzanzug (Form 3), Dekontamination zwingend'],
    ]),
    P('Die Einordnung trifft die Führungskraft anhand von Stoff, Menge, Zustandsform und Lage – bei Unklarheit gilt die höhere Gruppe. Für eine Feuerwehr ohne CSA bedeutet Gruppe III praktisch: absperren, Menschen retten soweit möglich, Spezialkräfte abwarten.'),
    CO('info', 'Körperschutz Form 3 ist anspruchsvoll', 'Der Chemikalienschutzanzug ist gasdicht und schließt den Träger vollständig ein. Die Wärmebelastung ist enorm, die Einsatzzeit dadurch stark begrenzt, und der An- und Ablegevorgang braucht Helfer und Zeit. Ohne regelmäßige Übung ist ein CSA-Einsatz nicht durchführbar.'),

    H2('zonen', 'Das Zonenmodell'),
    P('Eine ABC-Einsatzstelle wird räumlich gegliedert, damit die Kontamination nicht verschleppt wird. Dieses Zonenmodell ist die zentrale Ordnungsstruktur des gesamten Einsatzes.'),
    TBL(['Bereich', 'Wer darf hinein', 'Was passiert dort'],[
      ['Gefahrenbereich', 'nur Trupps mit der erforderlichen Schutzausrüstung', 'Erkundung, Menschenrettung, Abdichtmaßnahmen'],
      ['Absperrbereich mit Dekon-Stelle', 'Kräfte mit Auftrag', 'Dekontamination, Bereitstellung, Übergabe'],
      ['Sicherer Bereich', 'alle Einsatzkräfte, Führung, Rettungsdienst', 'Einsatzleitung, Sammelplätze, Fahrzeuge'],
    ]),
    STEPS(
      'Gefahrenbereich festlegen – zunächst nach Faustregel, später nach Messwerten.',
      'Zugang nur an einer einzigen definierten Stelle zulassen und dort kontrollieren.',
      'Dekon-Stelle an der Grenze des Gefahrenbereichs aufbauen, bevor der erste Trupp vorgeht.',
      'Bereitstellungsraum und Sammelplatz für Betroffene im sicheren Bereich einrichten.',
      'Windrichtung fortlaufend beobachten – dreht der Wind, verschieben sich die Zonen.',
      'Registrierung führen: wer war wann im Gefahrenbereich?'),
    CO('danger', 'Die Windrichtung ist keine Konstante', 'Ein Winddreher kann eine sichere Einsatzleitung binnen Minuten in die Gaswolke stellen. Deshalb wird die Windrichtung dauerhaft beobachtet – etwa mit einem Windsack, einem Band am Fahrzeug oder über die Wetterdaten. Der Bereitstellungsraum liegt immer in Luv.'),

    H2('dekon', 'Dekontamination'),
    DEF('Dekontamination', 'Das Entfernen oder Unschädlichmachen gefährlicher Stoffe von Personen, Schutzkleidung, Geräten und Fahrzeugen. Ziel ist nicht die vollständige Reinigung, sondern die <b>Verhinderung der Verschleppung</b> aus dem Gefahrenbereich hinaus.'),
    TBL(['Stufe', 'Zweck', 'Wann'],[
      ['Notdekontamination', 'lebensrettende Erstmaßnahme, grobe Entfernung des Stoffs', 'sofort bei Kontamination von Personen'],
      ['Standard-Dekontamination', 'geregeltes Verfahren für Einsatzkräfte', 'beim Verlassen des Gefahrenbereichs'],
      ['Erweiterte Dekontamination', 'aufwendiges Verfahren mit Spezialkräften', 'bei hoher Gefährdung, vielen Betroffenen'],
    ]),
    P('Für <b>verletzte Personen</b> gilt eine eigene Priorität: Die medizinische Versorgung darf nicht beliebig lange auf eine perfekte Dekontamination warten. Deshalb wird bei ihnen die Notdekontamination durchgeführt – Kleidung entfernen, mit viel Wasser abspülen – und die Person danach unter Schutzmaßnahmen dem Rettungsdienst übergeben. Bereits das Ausziehen der Kleidung entfernt einen erheblichen Teil der Kontamination.'),
    CO('warn', 'Verschleppung ist der klassische Fehler', 'Kontaminierte Kräfte, Schläuche, Geräte und Fahrzeuge dürfen den sicheren Bereich erst nach Dekontamination betreten. Sonst wandert der Gefahrstoff in die Fahrzeuge, ins Gerätehaus, in die Privatwagen und nach Hause. Dieser Fehler passiert leise, fällt erst später auf und betrifft dann viele.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      '<b>GAMS:</b> Gefahr erkennen – Absperren – Menschenrettung – Spezialkräfte.',
      'Annäherung aus Luv, Erkundung mit dem Fernglas, mindestens 50 m bei unklarer Lage.',
      'Abstand ist die wirksamste Schutzausrüstung.',
      'Gefahrengruppen I/II/III bestimmen die Schutzausrüstung; im Zweifel die höhere Gruppe.',
      'Zonenmodell: Gefahrenbereich – Absperrbereich mit Dekon – sicherer Bereich.',
      'Zugang nur an einer kontrollierten Stelle; Registrierung führen.',
      'Dekon-Stelle steht, bevor der erste Trupp vorgeht.',
      'Windrichtung fortlaufend beobachten.'),
  ],
},

/* ---------------------------------------------------------------- I3 ---- */
{
  id: 'i3', title: 'Strahlenschutz & radiologische Gefahren', duration: 22,
  blocks: [
    P('Radioaktive Stoffe begegnen der Feuerwehr häufiger, als viele denken: in Kliniken und Arztpraxen, in Laboren, in der industriellen Werkstoffprüfung, in Bauteilen und auf der Straße als Transportgut. Die Gefahr ist unsichtbar, geruchlos und ohne Messgerät nicht feststellbar – aber sie folgt einfachen physikalischen Regeln, die zuverlässig schützen.'),

    H2('grundlagen', 'Ionisierende Strahlung'),
    P('Radioaktive Stoffe senden <b>ionisierende Strahlung</b> aus – Energie, die Atome und Moleküle im Gewebe verändern kann. Für die Feuerwehr sind drei Strahlungsarten relevant, die sich in Reichweite und Abschirmbarkeit stark unterscheiden.'),
    TBL(['Strahlung', 'Reichweite in Luft', 'Abschirmung', 'Hauptgefahr'],[
      ['Alpha (α)', 'wenige Zentimeter', 'ein Blatt Papier, Haut', 'gefährlich bei Aufnahme in den Körper'],
      ['Beta (β)', 'einige Meter', 'dünnes Metall, Plexiglas', 'Haut und Augen, auch Aufnahme'],
      ['Gamma (γ)', 'sehr weit', 'dicke Blei- oder Betonschichten', 'Bestrahlung des ganzen Körpers'],
      ['Neutronen', 'sehr weit', 'wasserstoffhaltige Materialien', 'selten, meist nur an Anlagen'],
    ]),
    FIG('strahlungsarten', 'Reichweite und Abschirmung: Alpha stoppt ein Blatt Papier, Beta dünnes Metall, Gamma erst dickes Blei oder Beton.'),
    P('Bemerkenswert ist die Umkehrung: Alphastrahlung wird von der Haut abgehalten und ist von außen fast harmlos – gelangt der Alphastrahler aber in den Körper, ist er besonders gefährlich, weil er seine gesamte Energie direkt im Gewebe abgibt. Gammastrahlung dagegen durchdringt den Körper und wirkt auch aus der Entfernung.'),

    H2('kontamination', 'Kontamination, Inkorporation, Bestrahlung'),
    DEF('Kontamination', 'Radioaktive Stoffe haften <b>außen</b> an Haut, Kleidung, Geräten oder Fahrzeugen an. Der Betroffene wird dadurch selbst zur Strahlenquelle und kann den Stoff verschleppen. Kontamination lässt sich durch Dekontamination weitgehend beseitigen.'),
    DEF('Inkorporation', 'Radioaktive Stoffe sind durch Einatmen, Verschlucken oder über Wunden <b>in den Körper</b> gelangt. Sie bestrahlen das Gewebe von innen, sind kaum zu entfernen und wirken so lange, bis der Stoff zerfallen oder ausgeschieden ist. Deshalb ist Atemschutz bei A-Lagen zwingend.'),
    DEF('Bestrahlung', 'Der Körper wird von außen durchstrahlt, ohne dass Material anhaftet. Nach Verlassen des Strahlenfeldes endet die Einwirkung sofort – eine bestrahlte Person ist <b>nicht</b> radioaktiv und gefährdet niemanden.'),
    CO('info', 'Der Unterschied ist einsatzentscheidend', 'Eine bestrahlte Person kann ohne Weiteres versorgt und transportiert werden. Eine kontaminierte Person muss dekontaminiert werden, bevor sie den Gefahrenbereich verlässt. Diese Unterscheidung verhindert sowohl unnötige Panik als auch gefährliche Sorglosigkeit.'),

    H2('vierA', 'Die vier A des Strahlenschutzes'),
    MNE([{l:'A',w:'Abstand'},{l:'A',w:'Aufenthaltszeit'},{l:'A',w:'Abschirmung'},{l:'A',w:'Aufnahme vermeiden'}],
      'Großer Abstand, kurze Aufenthaltszeit, vorhandene Abschirmung nutzen und die Aufnahme radioaktiver Stoffe in den Körper vermeiden.'),
    P('Der wirksamste dieser vier Punkte ist der <b>Abstand</b>, denn die Dosisleistung nimmt mit dem Quadrat der Entfernung ab: Doppelter Abstand bedeutet ein Viertel der Belastung, dreifacher Abstand ein Neuntel. Wenige Meter mehr verändern die Belastung dramatisch.'),
    KF(
      '<b>Abstand:</b> so groß wie möglich, Dosisleistung sinkt quadratisch.',
      '<b>Aufenthaltszeit:</b> so kurz wie möglich, Aufgaben vorher genau planen.',
      '<b>Abschirmung:</b> Mauern, Fahrzeuge, Erdwälle zwischen sich und die Quelle bringen.',
      '<b>Aufnahme vermeiden:</b> umluftunabhängiger Atemschutz, geschlossene Schutzkleidung, im Gefahrenbereich nicht essen, trinken oder rauchen.'),

    H2('messen', 'Messen und Gefahrenbereich'),
    P('Ohne Messung ist die Ausdehnung einer radiologischen Gefahr nicht bestimmbar. Deshalb gehört das Dosisleistungsmessgerät zur Grundausstattung vieler Feuerwehren, und der Messtrupp ist bei A-Lagen die erste angeforderte Spezialkraft.'),
    CO('warn', 'Richtwert für den Gefahrenbereich', 'Als Orientierung für die Grenze des Gefahrenbereichs wird in der FwDV 500 eine Ortsdosisleistung von <b>25 µSv/h</b> genannt. Liegt keine Messung vor, wird großzügig abgesperrt und der Messtrupp abgewartet. Für Einsatzkräfte gelten zudem festgelegte Dosisrichtwerte, deren Einhaltung dokumentiert wird.'),
    P('Jede im Gefahrenbereich eingesetzte Kraft trägt ein <b>Dosimeter</b>. Die Werte werden erfasst und der Einsatz dokumentiert – das ist Voraussetzung dafür, dass später eine mögliche Belastung nachvollzogen und anerkannt werden kann.'),

    H2('vorgehen', 'Vorgehen der ersten Einheit'),
    P('Auch bei radiologischen Lagen gilt die GAMS-Regel unverändert. Die Besonderheiten liegen im Detail.'),
    STEPS(
      '<b>Gefahr erkennen:</b> Trefoil-Symbol, Gefahrzettel Klasse 7, Kennzeichnung „Radioaktiv", Beförderungspapiere, Objektkenntnis (Klinik, Labor, Industrie).',
      '<b>Absperren:</b> großzügig, aus Luv annähern, Zugang kontrollieren.',
      '<b>Menschenrettung:</b> hat auch hier Vorrang – die Strahlendosis bei einer kurzen Rettungsmaßnahme bleibt in aller Regel vertretbar.',
      '<b>Spezialkräfte:</b> Messtrupp, Strahlenschutzfachkraft, Behörde und Rettungsdienst frühzeitig anfordern.',
      'Aufenthaltszeiten begrenzen, Kräfte häufig wechseln, alle Beteiligten registrieren.',
      'Beim Verlassen dekontaminieren und Personen ärztlich vorstellen.'),
    CO('danger', 'Menschenrettung geht vor – auch hier', 'Die Angst vor Strahlung führt gelegentlich zu Zögern. Fachlich gilt: Eine kurze, zielgerichtete Menschenrettung ist auch im Strahlenfeld vertretbar, wenn die vier A beachtet werden. Was nicht vertretbar ist, sind langes Suchen ohne Messwerte und Sachwertrettung im Strahlenfeld.'),

    H2('bio', 'Ein Wort zu biologischen Gefahren'),
    P('Biologische Lagen – Krankheitserreger, kontaminierte Proben, verdächtige Postsendungen – folgen denselben Grundsätzen: Gefahr erkennen, absperren, Menschen retten, Spezialkräfte anfordern. Der wesentliche Unterschied liegt im Schutz vor <b>Aufnahme</b>: Atemschutz, geschlossene Schutzkleidung, konsequente Hygiene und die Vermeidung jeder Verschleppung.'),
    KF(
      'Verdächtige Gegenstände nicht öffnen, nicht bewegen, nicht beschnüffeln.',
      'Betroffene Personen absondern und betreuen, nicht wegschicken.',
      'Gesundheitsamt und Fachberatung frühzeitig einbinden.',
      'Konsequente Hygiene, Kleidung wechseln, Hände desinfizieren.',
      'Dokumentieren, wer Kontakt hatte.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Alpha: kurze Reichweite, gefährlich bei Aufnahme. Beta: mittlere Reichweite. Gamma: sehr durchdringend.',
      '<b>Kontamination</b> haftet außen an, <b>Inkorporation</b> ist im Körper, <b>Bestrahlung</b> endet beim Verlassen des Feldes.',
      'Eine nur bestrahlte Person ist nicht radioaktiv.',
      'Vier A: Abstand, Aufenthaltszeit, Abschirmung, Aufnahme vermeiden.',
      'Dosisleistung sinkt mit dem Quadrat der Entfernung.',
      'Richtwert für die Gefahrenbereichsgrenze: 25 µSv/h; ohne Messung großzügig absperren.',
      'Menschenrettung hat auch im Strahlenfeld Vorrang.'),
  ],
},

/* ---------------------------------------------------------------- I4 ---- */
{
  id: 'i4', title: 'Chemische Grundlagen & Ausbreitung', duration: 22,
  blocks: [
    P('Ob ein ausgetretener Stoff in den Keller läuft oder über die Dächer zieht, ob er auf dem Bach schwimmt oder sich darin löst, ob 50 Meter Abstand reichen oder 500 – all das ergibt sich aus wenigen physikalischen Eigenschaften. Wer sie kennt und im Nachschlagewerk findet, kann eine Lage einschätzen, ohne Chemiker zu sein.'),

    H2('zustand', 'Zustandsform und Ausbreitung'),
    TBL(['Form', 'Verhalten', 'Konsequenz für den Einsatz'],[
      ['Gas oder Dampf', 'breitet sich mit der Luft aus, unsichtbar', 'Windrichtung entscheidet über den Gefahrenbereich'],
      ['Flüssigkeit', 'fließt in Senken, Gruben, Kanäle; verdampft an der Oberfläche', 'Ausbreitungswege am Boden verfolgen, Kanäle sichern'],
      ['Feststoff oder Staub', 'wird verweht, haftet an, kann explodieren', 'nicht aufwirbeln, Kontaktschutz, Ex-Gefahr beachten'],
    ]),
    P('Bei Gasen entscheidet zusätzlich die <b>Dichte</b> gegenüber Luft. Leichte Gase steigen auf und verdünnen sich vergleichsweise schnell; schwere Gase bleiben am Boden, fließen wie Wasser bergab und sammeln sich in Kellern, Gruben und Kanälen – wo sie noch Stunden später gefährlich sein können.'),
    CO('danger', 'Der tödliche Reflex', 'Wenn „oben nichts zu messen ist", steigt jemand in den Keller. Bei schweren Gasen steht das Gas genau dort. Gemessen wird immer in der Höhe, in der der Stoff zu erwarten ist – und niemals ohne Messgerät, Atemschutz und Sicherung.'),

    H2('eigenschaften', 'Gefährliche Eigenschaften'),
    UL(
      '<b>Entzündbarkeit:</b> Flammpunkt, Zündtemperatur und Explosionsgrenzen bestimmen, ob und wann es brennt oder explodiert (siehe Modul B).',
      '<b>Toxizität:</b> Aufnahme über Atemwege, Haut oder Verschlucken; manche Stoffe wirken erst verzögert.',
      '<b>Ätzwirkung:</b> zerstört Gewebe und Material – auch Schutzkleidung, die für diesen Stoff nicht geeignet ist.',
      '<b>Oxidierende Wirkung:</b> fördert Brände erheblich, kann mit brennbaren Stoffen heftig reagieren.',
      '<b>Reaktivität mit Wasser:</b> Carbide, Alkalimetalle und andere reagieren unter Gasentwicklung oder Wärmeabgabe.',
      '<b>Umweltgefährlichkeit:</b> schon kleine Mengen können Gewässer und Boden dauerhaft schädigen.'),
    CO('warn', 'Schutzkleidung ist stoffabhängig', 'Ein Chemikalienschutzanzug ist nicht gegen alles beständig. Für jeden Stoff gibt es Durchbruchzeiten, die von Material und Konzentration abhängen. Diese Angaben liefern Hersteller und Nachschlagewerk – sie sind der Grund, warum die Aufenthaltszeit im CSA vorher festgelegt wird.'),

    H2('dichte', 'Dichte und Wasserlöslichkeit'),
    DEF('Relative Dichte und Wasserlöslichkeit', 'Ob ein Stoff auf Wasser schwimmt oder sinkt und ob er sich darin löst, entscheidet über sein Verhalten im Gewässer und über die Wahl der Gegenmaßnahmen. Beide Angaben stehen im Nachschlagewerk zur UN-Nummer.'),
    TBL(['Verhalten im Wasser', 'Folge', 'Maßnahme'],[
      ['schwimmt auf, löst sich nicht', 'Ausbreitung auf der Oberfläche', 'Ölsperren, Abschöpfen, Bindemittel'],
      ['löst sich vollständig', 'Verdünnung im gesamten Wasserkörper', 'Ausbreitung stoppen, Wasserbehörde, keine Sperre wirksam'],
      ['sinkt ab, löst sich nicht', 'Ansammlung am Gewässergrund', 'Fachfirma, Bergung durch Spezialkräfte'],
    ]),
    P('Dieselben Überlegungen gelten für die Kanalisation. Ein in den Kanal gelaufener entzündbarer Stoff kann dort ein zündfähiges Gemisch bilden und Hunderte Meter entfernt zu einer Explosion führen. Deshalb gehört bei jeder Flüssigkeitsfreisetzung die Frage nach dem Kanalanschluss zur Erkundung.'),

    H2('massnahmen', 'Erste Maßnahmen bei Freisetzung'),
    STEPS(
      'Ausbreitung feststellen: Wohin fließt oder zieht der Stoff?',
      'Zündquellen ausschalten – auch eigene: Motoren, Funkgeräte außerhalb Ex-Schutz, Beleuchtung.',
      'Kanaleinläufe und Gewässerzugänge sichern, soweit gefahrlos möglich.',
      'Ausbreitung eindämmen: Eindeichen, Auffangbehälter, Bindemittel – nur mit passender Schutzausrüstung.',
      'Bei Gasaustritt: Absperren, aus Luv arbeiten, Messungen veranlassen, Nachbarschaft warnen.',
      'Abdichtmaßnahmen nur durch dafür ausgebildete Kräfte mit geeigneter Ausrüstung.',
      'Betroffene Bevölkerung warnen und informieren – Fenster und Türen schließen, Lüftungen abschalten.'),
    CO('info', 'Nachschlagen statt raten', 'Im Zweifel niemals raten. Über die UN-Nummer lassen sich im Nachschlagewerk, in der Einsatz-App oder über den Fachberater die Stoffdaten und die empfohlenen Maßnahmen in Minuten ermitteln. Diese Minuten sind immer gut investiert – ein falsches Löschmittel oder eine falsche Maßnahme kostet deutlich mehr.'),

    H2('brand', 'Wenn Gefahrstoffe brennen'),
    P('Ein brennender Gefahrstoff stellt vor eine schwierige Abwägung. Das Feuer zerstört viele Stoffe und macht sie unschädlich – gleichzeitig entstehen Brandgase, die weiträumig wirken, und Löschwasser, das den Stoff verteilt.'),
    KF(
      'Bei X-Kennzeichnung grundsätzlich kein Wasser einsetzen.',
      'Kontrolliertes Abbrennenlassen kann die richtige Entscheidung sein – Fachberatung einholen.',
      'Behälter aus Deckung kühlen, um BLEVE zu verhindern.',
      'Brandgase können weit reichen: Ausbreitungsrichtung berechnen lassen, Bevölkerung warnen.',
      'Löschwasser konsequent zurückhalten – siehe Modul E.',
      'Umweltbehörde, Fachberater und Betriebsleitung früh einbinden.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Zustandsform bestimmt die Ausbreitung: Gas mit dem Wind, Flüssigkeit in Senken, Staub durch Verwehung.',
      'Schwere Gase sammeln sich in Kellern, Gruben und Kanälen.',
      'Gefährliche Eigenschaften: entzündbar, giftig, ätzend, oxidierend, wasserreaktiv, umweltgefährlich.',
      'Schutzkleidung ist stoffabhängig – Durchbruchzeiten beachten.',
      'Dichte und Wasserlöslichkeit bestimmen das Verhalten im Gewässer.',
      'Kanalanschluss gehört in jede Erkundung bei Flüssigkeitsaustritt.',
      'Bei X-Kennzeichnung kein Wasser; kontrolliertes Abbrennen kann richtig sein.'),
  ],
},

/* ---------------------------------------------------------------- I5 ---- */
{
  id: 'i5', title: 'Messen, Nachweisen & Einsatzhygiene', duration: 20,
  blocks: [
    P('Ohne Messwerte ist jede Gefahrgutlage eine Vermutung. Erst die Messung sagt, wo der Gefahrenbereich endet, welche Schutzstufe nötig ist und wann Entwarnung gegeben werden kann. Diese Lektion behandelt die Messtechnik und die Hygienemaßnahmen, die verhindern, dass der Gefahrstoff die Einsatzstelle verlässt.'),

    H2('spuren', 'Der Spür- und Messtrupp'),
    P('Der Mess- oder Spürtrupp hat die Aufgabe, Art und Ausdehnung der Gefahr zu bestimmen. Er arbeitet systematisch: von außen nach innen, in festgelegten Messpunkten, mit dokumentierten Werten. Erst auf dieser Grundlage lassen sich Gefahrenbereich und Schutzstufe sicher festlegen.'),
    TBL(['Messgröße', 'Gerät oder Methode', 'Wozu'],[
      ['Explosionsgefahr', 'Ex-Messgerät, Anzeige in % der UEG', 'Zündgefahr beurteilen, Zutritt freigeben'],
      ['Sauerstoffgehalt', 'Sauerstoffsensor', 'Erstickungsgefahr, Eignung von Filtergeräten'],
      ['Giftige Gase', 'elektrochemische Sensoren, Prüfröhrchen, Photoionisationsdetektor', 'Konzentration und Ausdehnung bestimmen'],
      ['Radioaktivität', 'Dosisleistungsmessgerät, Kontaminationsnachweisgerät', 'Gefahrenbereich, Kontaminationskontrolle'],
      ['Stoffart und pH-Wert', 'Indikatorpapier, Teststäbchen, Nachweisverfahren', 'grobe Einordnung des Stoffes'],
    ]),
    CO('warn', 'Messgeräte haben Grenzen', 'Jedes Messgerät misst nur, wofür es ausgelegt ist. Ein Ex-Messgerät zeigt keine Giftigkeit an, ein CO-Sensor erkennt kein Chlor, und ein Gerät ohne Sauerstoff funktioniert teilweise gar nicht. Ein unauffälliger Messwert bedeutet deshalb nie automatisch „ungefährlich" – er bedeutet nur, dass dieses Gerät für diese Größe nichts angezeigt hat.'),
    P('Ebenso wichtig sind Kalibrierung und Funktionsprüfung. Ein Messgerät mit abgelaufener Kalibrierung liefert Werte, auf die sich niemand verlassen darf. Die Prüffristen gehören zur Gerätewartung und werden dokumentiert.'),

    H2('zonen', 'Vom Messwert zum Gefahrenbereich'),
    P('Der zunächst nach Faustregel festgelegte Absperrbereich wird durch die Messungen überprüft und angepasst. Dabei gilt eine wichtige Reihenfolge: Der Bereich wird erst <b>verkleinert</b>, wenn belastbare Werte vorliegen – nicht, weil er unpraktisch groß ist.'),
    STEPS(
      'Messpunkte festlegen: entlang der Ausbreitungsrichtung, in mehreren Höhen, an tiefen Punkten.',
      'Werte dokumentieren mit Ort, Zeit, Gerät und Messgröße.',
      'Gefahrenbereich anhand der Werte und der einschlägigen Richtwerte festlegen.',
      'Bei Winddreher oder Lageänderung erneut messen.',
      'Vor der Freigabe eines Bereichs Kontrollmessungen durchführen.',
      'Alle Werte an die Einsatzleitung und die Fachberatung melden.'),

    H2('hygiene', 'Einsatz- und Kontaminationshygiene'),
    P('Die größte Gefahr bei ABC-Lagen entsteht oft nicht im Gefahrenbereich, sondern danach – durch Verschleppung. Sie geschieht unbemerkt: über Handschuhe, über den Helmriemen, über die Schuhsohle, über das Funkgerät, über den Türgriff des Fahrzeugs.'),
    STEPS(
      'Nur mit der passenden Schutzstufe und nur mit Auftrag in den Gefahrenbereich.',
      'Kontakt mit dem Stoff so weit wie möglich vermeiden – nichts unnötig berühren, nichts mitnehmen.',
      'Im Gefahrenbereich nicht essen, trinken, rauchen und das Gesicht nicht berühren.',
      'Beim Verlassen die Dekon-Stelle benutzen: grobe Dekontamination, dann feine.',
      'Schutzkleidung und Geräte fachgerecht dekontaminieren oder als kontaminiert kennzeichnen und entsorgen.',
      'Kontaminierte Ausrüstung getrennt transportieren – nicht in der Mannschaftskabine.',
      'Beteiligte Kräfte registrieren, ärztlich kontrollieren lassen und den Einsatz dokumentieren.'),
    CO('danger', 'Der Weg nach Hause', 'Der klassische Verschleppungsweg führt vom Gefahrenbereich über das Fahrzeug ins Gerätehaus, in den Privatwagen und schließlich in die eigene Wohnung – zu Partnern und Kindern. Genau deshalb ist die Schwarz-Weiß-Trennung keine Bürokratie: Sie ist der Punkt, an dem diese Kette unterbrochen wird.'),

    H2('dokumentation', 'Dokumentation und Nachsorge'),
    P('Bei ABC-Einsätzen ist die Dokumentation ausnahmsweise genauso wichtig wie die Maßnahme selbst. Sie ist die Grundlage dafür, dass eine spätere Erkrankung als Folge des Einsatzes anerkannt werden kann.'),
    KF(
      'Wer war wann und wie lange im Gefahrenbereich?',
      'Welche Schutzausrüstung wurde getragen?',
      'Welcher Stoff, welche Konzentration, welche Messwerte?',
      'Wurde dekontaminiert, und wie?',
      'Gab es Auffälligkeiten, Beschwerden, Zwischenfälle?',
      'Welche Ausrüstung wurde kontaminiert und wie weiter behandelt?'),
    P('Alle im Gefahrenbereich eingesetzten Kräfte werden nach dem Einsatz ärztlich vorgestellt – auch beschwerdefreie. Viele Stoffe wirken verzögert, und der Nachweis einer Exposition ist nur zeitnah möglich. Die Meldung als Arbeitsunfall beziehungsweise Berufskrankheitsverdacht ist Aufgabe des Trägers und wird von der Führungskraft veranlasst.'),

    H2('uebung', 'Was regelmäßig geübt werden muss'),
    KF(
      'Kennzeichnungen lesen und Stoffdaten nachschlagen – unter Zeitdruck.',
      'GAMS-Regel als Ablauf, nicht als Merkspruch.',
      'Absperren und Zonenbildung inklusive Windbeobachtung.',
      'Dekon-Stelle aufbauen und betreiben.',
      'Umgang mit den eigenen Messgeräten inklusive Funktionsprüfung.',
      'An- und Ablegen der Schutzausrüstung mit Helfern.',
      'Zusammenarbeit mit Gefahrgutzug, Fachberatern und Behörden.'),
    CO('tip', 'Der realistische Anspruch', 'Eine durchschnittliche Freiwillige Feuerwehr wird keine Gefahrgutlage allein abarbeiten – das ist auch nicht ihre Aufgabe. Ihr Auftrag ist die erste halbe Stunde: erkennen, absperren, retten, nachfordern. Wer diese vier Punkte sicher beherrscht, hat das Wesentliche geleistet.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Der Messtrupp bestimmt Art und Ausdehnung – ohne Messwerte bleibt alles Vermutung.',
      'Jedes Gerät misst nur seine Größe; unauffällig heißt nicht ungefährlich.',
      'Gefahrenbereich erst nach belastbaren Werten verkleinern.',
      'Verschleppung ist die häufigste und unauffälligste Gefahr.',
      'Im Gefahrenbereich nicht essen, trinken, rauchen, Gesicht nicht berühren.',
      'Kontaminierte Ausrüstung getrennt transportieren und kennzeichnen.',
      'Lückenlos dokumentieren und alle Beteiligten ärztlich vorstellen.'),
  ],
},

];
