/* =========================================================================
   CURRICULUM-EXTRA — Zusätzliche Lektionen zur Vertiefung (Inhaltstiefe)
   Wird in curriculum.js an die jeweiligen Module angehängt.
   Format je Lektion identisch zu curriculum.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS = {

  /* ------------------------------------------------------------------- A */
  'a-rechtsgrundlagen': [
    {
      id: 'a3', title: 'Alarmierung, Einsatzablauf & Pflichten', duration: 20,
      blocks: [
        H2('alarm', 'Von der Alarmierung zum Einsatz'),
        P('Jeder Einsatz folgt einem geregelten Ablauf. Er beginnt mit dem Notruf des Bürgers und endet mit der Wiederherstellung der Einsatzbereitschaft.'),
        STEPS(
          'Notruf 112 geht in der Leitstelle ein',
          'Disponent erfasst die Lage und alarmiert nach Alarm- und Ausrückeordnung (AAO)',
          'Ausrücken der Einheiten mit Sonder- und Wegerechten',
          'Erkundung und Einsatzdurchführung an der Einsatzstelle',
          'Rückkehr, Herstellen der Einsatzbereitschaft, Einsatzdokumentation'),
        DEF('Alarm- und Ausrückeordnung (AAO)', 'Legt fest, welche Einheiten bei welchem Stichwort automatisch alarmiert werden. Sie sorgt für schnelle, bedarfsgerechte und einheitliche Alarmierung ohne Zeitverlust.'),
        DEF('Schutzziel & Hilfsfrist', 'Das Schutzziel beschreibt, mit wie vielen Kräften die Feuerwehr in welcher Zeit (Hilfsfrist) an der Einsatzstelle sein soll (z. B. „ersteintreffende Einheit in 8–10 Minuten"). Grundlage der Bedarfsplanung der Gemeinde.'),
        H2('pflichten', 'Rechte & Pflichten der Einsatzkräfte'),
        UL(
          '<b>Teilnahmepflicht</b> an Ausbildung und Einsatz (bei aktiver Mitgliedschaft)',
          '<b>Weisungsgebundenheit</b> gegenüber der Einsatzleitung',
          '<b>Verschwiegenheit</b> über persönliche Verhältnisse Betroffener',
          '<b>Freistellung & Lohnfortzahlung</b> durch den Arbeitgeber bei Einsatz/Ausbildung',
          '<b>Unfallversicherungsschutz</b> über die Unfallkasse'),
        CO('info', 'Betreten & Wegerecht', 'Zur Gefahrenabwehr darf die Feuerwehr Grundstücke und Gebäude betreten und notfalls gewaltsam öffnen. Diese Eingriffsbefugnisse sind an die konkrete Gefahr gebunden – stets verhältnismäßig handeln.'),
        H2('kosten', 'Kostenfreiheit & Ausnahmen'),
        P('Die Brandbekämpfung und die Rettung von Menschen sind grundsätzlich <b>kostenfrei</b>. Kosten können jedoch u. a. bei vorsätzlich/grob fahrlässig verursachten Einsätzen, missbräuchlichem Alarm, Gefahrguttransporten oder bestimmten technischen Hilfeleistungen erhoben werden (Landesrecht/Satzung).'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- B */
  'b-brennen-loeschen': [
    {
      id: 'b4', title: 'Löschmittel im Detail: Schaum, Pulver, CO₂', duration: 20,
      blocks: [
        H2('schaum', 'Löschschaum'),
        P('Schaum entsteht aus <b>Wasser + Schaummittel + Luft</b>. Er legt sich als Decke auf brennende Flüssigkeiten, trennt Brennstoff und Sauerstoff (Ersticken) und kühlt. Entscheidend ist die Verschäumungszahl (VZ = Volumen Schaum ÷ Volumen Schaummittellösung).'),
        TBL(['Schaumart', 'Verschäumungszahl', 'Einsatz'],[
          ['Schwerschaum', 'bis 20', 'große Flüssigkeitsbrände, Wurfweite'],
          ['Mittelschaum', '20–200', 'Flächen, Auffangräume'],
          ['Leichtschaum', '200–1000', 'Fluten von Räumen/Kellern'],
        ]),
        DEF('Zumischer', 'Armatur, die dem Löschwasser Schaummittel in einem festen Prozentsatz (z. B. 3 %) beimischt. Kombiniert mit einem Schaumrohr, das Luft einbringt, entsteht der fertige Schaum.'),
        CO('warn', 'Fluorfreie Schaummittel', 'Fluorhaltige Schaummittel (PFAS) stehen wegen ihrer Umwelt- und Gesundheitsschädlichkeit stark in der Kritik und werden zunehmend verboten. Moderne Wehren setzen auf fluorfreie Alternativen.'),
        H2('pulver', 'Löschpulver'),
        UL(
          '<b>ABC-Pulver (Glutbrandpulver):</b> universell für feste, flüssige und gasförmige Stoffe',
          '<b>BC-Pulver (Flammbrandpulver):</b> für Flüssigkeits- und Gasbrände',
          '<b>D-Pulver (Metallbrandpulver):</b> speziell für Metallbrände'),
        CO('info', 'Wirkung von Pulver', 'Pulver wirkt vor allem antikatalytisch (unterbricht die Kettenreaktion) – extrem schnelle Löschwirkung, aber keine Kühlung: Rückzündungsgefahr! Zudem starke Verschmutzung/Rückstände.'),
        H2('co2', 'Kohlenstoffdioxid (CO₂)'),
        P('CO₂ verdrängt den Sauerstoff (Ersticken) und hinterlässt keine Rückstände – ideal für elektrische Anlagen, Labore und empfindliche Technik. Nachteil: <b>Erstickungsgefahr</b> in geschlossenen Räumen für Personen, kaum Kühlwirkung.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- C */
  'c-fahrzeugkunde': [
    {
      id: 'c3', title: 'Feuerwehrtechnische Beladung & Normung', duration: 18,
      blocks: [
        H2('normung', 'Warum genormt wird'),
        P('Damit jede Einsatzkraft an jedem Fahrzeug „blind" die Geräte findet und Einheiten überörtlich zusammenarbeiten können, sind Fahrzeuge und Beladung genormt (DIN/EN). Die Beladung ist nach Verwendungszweck gegliedert.'),
        H2('gruppen', 'Beladungsgruppen (Auszug)'),
        TBL(['Gruppe', 'Beispiele'],[
          ['Löschgeräte', 'Strahlrohre, Schläuche, Verteiler, Standrohr'],
          ['Rettungsgeräte', 'tragbare Leitern, Sprungpolster, Rettungssatz'],
          ['Technische Geräte', 'Motorsäge, Trennschleifer, Stromerzeuger, Lüfter'],
          ['Mess-/Warngeräte', 'CO-Warner, Ex-Messgerät, Wärmebildkamera'],
          ['Sanitätsmaterial', 'Verbandkasten, Krankentrage, Schleifkorbtrage'],
        ]),
        DEF('Normbeladung', 'Die DIN legt für jeden Fahrzeugtyp eine Mindestbeladung fest. Zusätzliche Beladung („Zusatzbeladung") ergänzt die Wehr nach örtlichem Bedarf.'),
        H2('sicher', 'Ladungssicherung & Bereitschaft'),
        UL(
          'Geräte fest und gesichert verlasten (bei Unfall werden lose Geräte zu Geschossen)',
          'Nach jedem Einsatz: Vollständigkeit prüfen, reinigen, Betriebsstoffe auffüllen',
          'Regelmäßige Geräteprüfungen dokumentieren (Prüffristen einhalten)',
          'Fahrzeug ist erst wieder „einsatzbereit", wenn Beladung vollständig ist'),
        CO('tip', 'Ortskenntnis am Fahrzeug', 'Der beste Zeitpunkt, die Beladung zu lernen, ist im Dienst – nicht im Einsatz. Wer weiß, wo jedes Gerät liegt, spart im Ernstfall wertvolle Sekunden.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- D */
  'd-geraetekunde': [
    {
      id: 'd3', title: 'Tragbare Leitern & Rettungsgeräte', duration: 18,
      blocks: [
        H2('leitern', 'Tragbare Leitern'),
        P('Tragbare Leitern dienen als Angriffsweg, Rettungsweg und Arbeitsgerät. Sie werden von der Mannschaft getragen und in Stellung gebracht.'),
        TBL(['Leiter', 'Rettungshöhe (ca.)', 'Merkmal'],[
          ['Steckleiter', '2. OG (ca. 7,2 m)', 'aus Teilen zusammensteckbar'],
          ['Klappleiter', 'innen, niedrig', 'kompakt, für Innenräume'],
          ['Multifunktions-/Schiebleiter', '3. OG (bis ~14 m)', 'ausziehbar, mit Stützstangen'],
          ['Hakenleiter', 'geschossweise', 'Spezialleiter (Einhängen)'],
        ]),
        CO('warn', 'Sicher anlegen', 'Anstellwinkel ca. 65–75°, Leiter mind. 1 m über die Austrittsstelle hinausragen lassen, gegen Wegrutschen/Umfallen sichern (Fußsicherung). Beim Besteigen: Leiter halten lassen, immer 3-Punkt-Kontakt.'),
        FIG('leiterwinkel', 'Richtiger Anstellwinkel einer tragbaren Leiter: 65–75°, mit mindestens 1 m Überstand.'),
        H2('rettung', 'Weitere Rettungsgeräte'),
        UL(
          '<b>Sprungrettungsgerät (Sprungpolster):</b> nur als letztes Mittel, wenn kein anderer Rettungsweg möglich ist',
          '<b>Schleifkorbtrage / Krankentrage:</b> patientenschonender Transport',
          '<b>Feuerwehrleine mit Feuerwehr-Haltegurt:</b> Selbstretten, Halten, Sichern (keine Absturzsicherung!)',
          '<b>Rettungstuch:</b> Transport nicht gehfähiger Personen über kurze Strecken'),
        H2('leine', 'Die Feuerwehrleine'),
        DEF('Feuerwehr-Rettungsknoten', 'Genormter Knoten, mit dem eine Person zur Rettung an der Feuerwehrleine gesichert werden kann. Leinen sind nach Gebrauch und regelmäßig zu prüfen; beschädigte oder überlastete Leinen werden ausgesondert.'),
        CO('tip', 'Knoten & Stiche sitzen im Schlaf', 'Mastwurf, Zimmermannsschlag, Pfahlstich (Rettungsknoten) und Doppelter Ankerstich gehören zum Handwerkszeug. Regelmäßig üben, bis sie unter Stress sicher sitzen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- E */
  'e-loescheinsatz': [
    {
      id: 'e3', title: 'Innenangriff & Brandbekämpfungsverfahren', duration: 22,
      blocks: [
        H2('grundsatz', 'Vorgehen im Innenangriff'),
        P('Der Innenangriff ist der direkte Angriff auf den Brand im Gebäude – das wirksamste, aber auch gefährlichste Verfahren. Er verlangt Atemschutz, Sicherheitstrupp, Wasser am Rohr und höchste Disziplin.'),
        KF(
          'Immer geduckt vorgehen (Temperaturschichtung: unten kühler)',
          'Tür kontrolliert öffnen (Türprozedur), vorher Rauchgase kühlen',
          'Rückweg merken und sichern (Schlauch als Leitlinie)',
          'Nur mit Wasser am Rohr vorgehen, Trupp bleibt zusammen'),
        H2('verfahren', 'Brandbekämpfungsverfahren'),
        TBL(['Verfahren', 'Prinzip'],[
          ['Direkter Angriff', 'Wasser direkt auf das brennende Material – Kühlung'],
          ['Indirekter Angriff', 'Wasser an heiße Oberflächen/Decke – Wasserdampf erstickt (nur ohne Personen im Raum!)'],
          ['Offensiv (Innenangriff)', 'Vorgehen ins Gebäude, wenn vertretbar'],
          ['Defensiv (Außenangriff)', 'Angriff von außen, wenn Innenangriff zu gefährlich (Einsturz, Vollbrand)'],
        ]),
        CO('danger', 'Offensiv vs. defensiv', 'Die Entscheidung trifft die Führungskraft nach Lagebeurteilung. Bei Einsturzgefahr, Vollbrand ohne Menschenleben oder unzureichenden Kräften ist der Wechsel in den defensiven Außenangriff die richtige, lebensrettende Entscheidung.'),
        H2('rauchgas', 'Rauchgaskühlung & Ventilation'),
        P('Kurze Sprühstöße in die heiße Rauchgasschicht senken die Temperatur und die Flashover-Gefahr. Durch <b>taktische Ventilation</b> (z. B. Überdrucklüfter) wird Rauch gezielt aus dem Gebäude gedrückt – nur koordiniert, sonst Anfachen des Feuers!'),
        DEF('Überdruckbelüftung (PPV)', 'Ein Lüfter erzeugt vor dem Gebäude Überdruck und drückt Rauch/Wärme durch eine definierte Abluftöffnung heraus. Zwingend: Abluftöffnung schaffen und mit dem Innenangriff abstimmen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- F */
  'f-atemschutz': [
    {
      id: 'f4', title: 'Atemgifte, Belastung & Vorgehen im Trupp', duration: 20,
      blocks: [
        H2('atemgifte', 'Einteilung der Atemgifte'),
        P('Atemgifte wirken auf unterschiedliche Weise – die Einteilung hilft, die Gefahr einzuschätzen:'),
        TBL(['Gruppe', 'Wirkung', 'Beispiel'],[
          ['Erstickend', 'verdrängen Sauerstoff', 'CO₂, Stickstoff, Methan'],
          ['Reizend/ätzend', 'schädigen Atemwege/Gewebe', 'Chlor, Ammoniak, nitrose Gase'],
          ['Auf Blut/Nerven wirkend', 'stören Sauerstofftransport/Nerven', 'Kohlenstoffmonoxid, Blausäure'],
        ]),
        CO('danger', 'Sauerstoffmangel', 'Sinkt der Sauerstoffgehalt der Luft von normal 21 % ab, drohen ab ~17 % Leistungsabfall, ab ~11 % Bewusstlosigkeit, unter ~8 % rascher Tod. Umluftunabhängiger Atemschutz schützt – ein Filtergerät hier NICHT!'),
        H2('luftverbrauch', 'Luftverbrauch realistisch einschätzen'),
        P('Der Luftverbrauch hängt stark von Belastung und Stress ab: In Ruhe ~30 l/min, unter schwerer Arbeit und Stress leicht 60–100 l/min. Deshalb ist die Zeit im Gerät nie fix – rechtzeitiger Rückzug ist Pflicht.'),
        KF(
          'Ruhig und gleichmäßig atmen spart Luft und Kräfte',
          'Hektik und Panik vervielfachen den Verbrauch',
          'Reserve für den Rückweg immer einplanen',
          'Die Atemschutzüberwachung rechnet mit – aber der Trupp ist selbst verantwortlich'),
        H2('vorgehen', 'Im Trupp vorgehen'),
        STEPS(
          'Vor dem Einsatz: Einsatzkurzprüfung, Auftrag klären, Rückweg festlegen',
          'Gemeinsam vorgehen, ständigen Kontakt halten (Sicht/Ruf/Körperkontakt)',
          'Vorsichtig Türen/Räume erkunden, Wärme prüfen (Handrücken)',
          'Regelmäßig Druck kontrollieren und melden',
          'Bei Störung, Luftmangel oder Gefahr: gemeinsam zurückziehen'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- G */
  'g-technische-hilfe': [
    {
      id: 'g3', title: 'Stabilisieren, Heben & neue Antriebe', duration: 20,
      blocks: [
        H2('stab', 'Fahrzeug stabilisieren'),
        P('Vor jeder Arbeit am Unfallfahrzeug wird dieses gegen jede Bewegung gesichert. Ein wackelndes Fahrzeug gefährdet Patient und Retter und verfälscht die Rettung.'),
        UL(
          '<b>Unterbaumaterial</b> (Keile, Blöcke, Stufenkeile) unter tragende Punkte',
          '<b>Reifen entlüften</b> bzw. auf Felge absetzen, damit das Fahrzeug „steht"',
          '<b>Abstützsysteme</b> bei Fahrzeugen in Seiten-/Dachlage',
          'Erst stabilisieren, dann Glasmanagement und Rettungsöffnung'),
        H2('heben', 'Hebekissen & Winden'),
        DEF('Hebekissen', 'Mit Druckluft befüllbare Kissen, die schwere Lasten anheben (Niederdruck für große Wege, Hochdruck für große Lasten). Grundsatz: „Heben und unterbauen im Wechsel" – nie unter eine nur schwebende Last greifen.'),
        CO('warn', 'Sicher heben', 'Last immer synchron zum Heben unterbauen (Zug um Zug). Hebekissen nie überlappt stapeln über die zulässige Höhe, nie auf spitze Kanten. Der Kraftschluss muss jederzeit gesichert bleiben.'),
        H2('antriebe', 'Alternative Antriebe'),
        TBL(['Antrieb', 'Hauptgefahr', 'Grundregel'],[
          ['Elektro/Hybrid', 'Hochvolt, Batteriebrand (thermal runaway)', 'orange HV-Leitungen nie trennen, freischalten, Rettungskarte'],
          ['Gas (CNG/LPG)', 'Gasaustritt, Explosion, BLEVE', 'Zündquellen meiden, Gasflaschen kühlen/schützen'],
          ['Wasserstoff', 'sehr leicht entzündlich, unsichtbare Flamme', 'Abstand, Fachberater, Belüftung beachten'],
        ]),
        CO('danger', 'Batterie-Rückzündung', 'Beschädigte HV-Batterien können sich Stunden später erneut entzünden (thermisches Durchgehen). Betroffene E-Fahrzeuge lange beobachten, ggf. in Wasserbad/Quarantäne – Herstellerhinweise beachten.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- H */
  'h-sprechfunk': [
    {
      id: 'h3', title: 'Meldungen, Lagemeldung & Funkdisziplin', duration: 18,
      blocks: [
        H2('arten', 'Arten von Nachrichten'),
        P('Im Funkverkehr unterscheidet man nach Dringlichkeit und Form. Ordnung und Kürze halten den Kanal frei für das Wesentliche.'),
        UL(
          '<b>Gespräch:</b> wechselseitiger Austausch',
          '<b>Spruch:</b> förmliche Nachricht mit festem Kopf (Absender, Empfänger, Uhrzeit)',
          '<b>Durchsage/Sammelruf:</b> an mehrere Stellen gleichzeitig'),
        H2('lagemeldung', 'Die Lagemeldung'),
        P('Die erste Lagemeldung der ersteintreffenden Einheit ist entscheidend – sie ermöglicht der Leitstelle die richtige Nachalarmierung. Bewährtes Schema:'),
        MNE([{l:'W',w:'Wer meldet'},{l:'W',w:'Wo'},{l:'W',w:'Was ist'},{l:'W',w:'Welche Maßnahmen'}],
          'Beispiel: „Florian 11/1 an Leitstelle: An der Einsatzstelle eingetroffen, Wohnungsbrand 2. OG, eine Person gerettet, Menschenrettung läuft, Nachforderung Drehleiter – kommen."'),
        H2('disziplin', 'Funkdisziplin'),
        KF(
          'Erst hören, ob der Kanal frei ist – nicht dazwischenfunken',
          'Sprechtaste drücken, kurz warten, dann sprechen',
          'Betriebsnotwendige Nachrichten – kein „Quatschfunk"',
          'Zahlen/Namen buchstabieren, wichtige Nachrichten wiederholen lassen'),
        CO('warn', 'Rufnamen & Verschlüsselung', 'Klartext im Funk kann mitgehört werden (Analogfunk). Personennamen, Diagnosen und sensible Daten möglichst vermeiden bzw. über gesicherte Wege übermitteln. Der Digitalfunk (TETRA) ist verschlüsselt.'),
        H2('stoerung', 'Bei Funkstörungen'),
        P('Fällt der Funk aus, greifen alternative Kommunikationswege: Melder (Person), Sichtzeichen, Mobiltelefon oder Rückgriff auf DMO. Wichtige Aufträge im Zweifel persönlich bestätigen lassen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- I */
  'i-gefahrgut': [
    {
      id: 'i3', title: 'Strahlenschutz & radiologische Gefahren', duration: 20,
      blocks: [
        H2('grundlagen', 'Ionisierende Strahlung'),
        P('Bei A-Einsätzen (atomar/radiologisch) geht die Gefahr von <b>ionisierender Strahlung</b> aus. Man unterscheidet drei Strahlungsarten mit sehr unterschiedlicher Durchdringung.'),
        TBL(['Strahlung', 'Reichweite/Abschirmung', 'Gefahr'],[
          ['Alpha (α)', 'wenige cm Luft, Papier schirmt ab', 'gefährlich bei Inkorporation (Einatmen/Verschlucken)'],
          ['Beta (β)', 'Meter in Luft, dünnes Metall/Plexiglas', 'Haut/Augen, auch Inkorporation'],
          ['Gamma (γ) / Neutronen', 'sehr durchdringend, dicke Abschirmung nötig', 'Ganzkörperbestrahlung'],
        ]),
        FIG('strahlungsarten', 'Reichweite und Abschirmung: Alpha stoppt Papier, Beta Metall, Gamma erst dickes Blei/Beton.'),
        H2('schutz', 'Die vier A des Strahlenschutzes'),
        MNE([{l:'A',w:'Abstand'},{l:'A',w:'Aufenthaltszeit'},{l:'A',w:'Abschirmung'},{l:'A',w:'Aktivitätsbegrenzung'}],
          'Großer Abstand (Dosis sinkt mit dem Quadrat der Entfernung!), kurze Aufenthaltszeit, Abschirmung nutzen, Aufnahme/Kontamination vermeiden (Atemschutz, Schutzkleidung).'),
        DEF('Kontamination vs. Inkorporation', 'Kontamination = radioaktive Stoffe haften außen an (abwaschbar/Dekon). Inkorporation = radioaktive Stoffe sind in den Körper gelangt (eingeatmet/verschluckt) – deutlich gefährlicher, kaum umkehrbar.'),
        CO('warn', 'Dosisleistungsmessgerät', 'Der Gefahrenbereich wird mit Messgeräten festgelegt. Faustwert: Grenze des Gefahrenbereichs oft bei 25 µSv/h. Ohne Messung großzügig Abstand halten und Fachkräfte/Strahlenschutz nachfordern.'),
        H2('vorgehen', 'Vorgehen der ersten Einheit'),
        P('Auch hier gilt die GAMS-Regel: Gefahr erkennen (Kennzeichen „Radioaktiv", Trefoil-Symbol), Absperren, Menschen retten (Menschenrettung hat auch hier Vorrang – die Strahlendosis bei kurzer Rettung bleibt meist vertretbar), Spezialkräfte anfordern.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- J */
  'j-erste-hilfe': [
    {
      id: 'j3', title: 'Wunden, Blutungen, Schock & Lagerung', duration: 20,
      blocks: [
        H2('blutung', 'Starke Blutungen stillen'),
        P('Starke äußere Blutungen sind lebensbedrohlich und haben hohe Priorität. Schnelles, konsequentes Handeln rettet Leben.'),
        STEPS(
          'Eigenschutz: Einmalhandschuhe anziehen',
          'Betroffenen hinlegen, verletzte Körperstelle hochhalten',
          'Direkten Druck auf die Wunde ausüben (Druckverband)',
          'Bei lebensbedrohlicher Extremitätenblutung: Tourniquet/Abbindung oberhalb der Wunde',
          'Notruf, Betroffenen betreuen, auf Schock achten'),
        DEF('Druckverband', 'Wundauflage + Druckpolster (z. B. Verbandpäckchen) fest über der Wunde anwickeln. Blutet es durch, den Verband nicht entfernen, sondern verstärken.'),
        H2('schock', 'Der Schock'),
        P('Ein Schock ist ein lebensbedrohliches Missverhältnis zwischen Sauerstoffbedarf und -angebot im Kreislauf (z. B. durch Blutverlust). Zeichen: blasse, kalte, schweißige Haut, Frieren, schneller Puls, Unruhe.'),
        UL(
          'Blutung stoppen (Ursache bekämpfen)',
          'Flach lagern, Beine hochlagern (Schocklage) – außer bei bestimmten Verletzungen',
          'Vor Wärmeverlust schützen (zudecken), beruhigen',
          'Nichts zu essen/trinken geben, Notruf'),
        H2('lagerung', 'Lagerungsarten'),
        TBL(['Zustand', 'Lagerung'],[
          ['bewusstlos, atmet', 'stabile Seitenlage'],
          ['Schock', 'Schocklage (Beine hoch)'],
          ['Atemnot / Herzprobleme', 'Oberkörper erhöht (sitzend)'],
          ['Bauchverletzung', 'Knierolle (Beine angewinkelt)'],
          ['Schädel-Hirn-Trauma', 'Oberkörper leicht erhöht, ruhigstellen'],
        ]),
        CO('tip', 'Betreuung nicht vergessen', 'Ansprache, Wärme und Zuwendung sind Teil der Ersten Hilfe. Ein betreuter, beruhigter Patient hat bessere Chancen – auch psychisch.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- K */
  'k-absturzsicherung': [
    {
      id: 'k2', title: 'Sicherungsmethoden & Rettung', duration: 18,
      blocks: [
        H2('methoden', 'Selbst- und Fremdsicherung'),
        P('Man unterscheidet, ob sich die Einsatzkraft selbst sichert oder durch andere gesichert wird:'),
        UL(
          '<b>Selbstsicherung:</b> die Einsatzkraft sichert sich mit Verbindungsmittel selbst am Anschlagpunkt (z. B. beim Arbeiten am Rand)',
          '<b>Fremdsicherung (Halten):</b> ein Sicherungsposten hält die Person am Seil, bevor sie in den absturzgefährdeten Bereich geht',
          '<b>Auffangsystem:</b> fängt einen Sturz mit Auffanggurt, Falldämpfer und mitlaufendem Auffanggerät ab'),
        DEF('Falldämpfer', 'Bandfalldämpfer reißen bei einem Sturz kontrolliert auf und begrenzen die auf den Körper wirkende Fangstoßkraft (max. 6 kN). Ohne Falldämpfer können bereits kurze Stürze zu schweren inneren Verletzungen führen.'),
        H2('freiraum', 'Sturzraum & lichte Höhe'),
        CO('warn', 'Ausreichend Freiraum', 'Unter der Einsatzkraft muss genug freier Raum sein, damit sie im Sturzfall nicht aufschlägt, bevor das System greift (Seildehnung + Falldämpfer-Auszug + Sicherheitsabstand). Sonst hilft die beste Sicherung nichts.'),
        H2('rettung', 'Rettung nach einem Sturz'),
        STEPS(
          'Situation überblicken, eigene Sicherung herstellen',
          'Kontakt zur gestürzten Person aufnehmen, beruhigen',
          'Schnellstmöglich aus der hängenden Position befreien (Hängetrauma!)',
          'Person NICHT flach hinlegen – Hocke-/Kauerposition, langsam lagern',
          'Rettungsdienst, ärztliche Überwachung (Bergungstod-Risiko)'),
        CO('danger', 'Hängetrauma – Zeit zählt', 'Bewegungsloses Hängen im Gurt kann in Minuten lebensbedrohlich werden (Blut versackt in den Beinen). Schnelle Rettung ist Pflicht – aber nach der Befreiung nicht abrupt flach lagern (Rückstrom-Belastung des Herzens).'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- L */
  'l-fuehrung-fwdv100': [
    {
      id: 'l3', title: 'Führungsmittel, Führungsvorgang in der Praxis', duration: 22,
      blocks: [
        H2('mittel', 'Führungsmittel'),
        P('Führungsmittel unterstützen die Führungskraft beim Führen. Sie ersetzen nicht das Denken, machen es aber schneller und sicherer.'),
        UL(
          '<b>Kommunikationsmittel:</b> Funk, Telefon, Melder',
          '<b>Führungsassistenten:</b> unterstützen bei Lage, Dokumentation, Kommunikation',
          '<b>Darstellungsmittel:</b> Lagekarte, taktische Zeichen, Einsatztagebuch',
          '<b>IT/Einsatzführungssysteme:</b> digitale Lagedarstellung, Kräfteübersicht'),
        H2('zeichen', 'Taktische Zeichen'),
        P('Taktische Zeichen stellen Einheiten, Fahrzeuge, Gefahren und Maßnahmen einheitlich auf der Lagekarte dar. Sie schaffen ein gemeinsames Lagebild – jede Führungskraft „liest" dieselbe Karte gleich.'),
        H2('praxis', 'Der Führungsvorgang in der Praxis'),
        P('Unter Zeitdruck läuft der Regelkreis oft in Sekunden ab. Ein bewährtes Kurzschema für den ersten Entschluss:'),
        MNE([{l:'G',w:'Gefahren'},{l:'A',w:'Aufgaben ableiten'},{l:'M',w:'Maßnahmen/Mittel'},{l:'E',w:'Entschluss & Befehl'}],
          'Welche Gefahren bestehen für wen? Welche Aufgaben folgen daraus? Welche Mittel setze ich ein? Entschluss fassen und als Befehl umsetzen – dann Wirkung kontrollieren.'),
        DEF('Beurteilung der Lage', 'Kern der Planung: aus Erkundung + Erfahrung die möglichen Handlungsoptionen abwägen (Vor-/Nachteile, Kräfte, Zeit, Risiko) und einen begründeten Entschluss fassen. „Kein Plan überlebt den ersten Kontakt" – deshalb laufend nachsteuern.'),
        CO('tip', 'Delegieren & Führungsspanne', 'Eine Führungskraft kann nur begrenzt viele Untergebene direkt führen (Führungsspanne ~3–5 Einheiten). Bei größeren Lagen: Abschnitte bilden und delegieren, statt alles selbst zu machen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- M */
  'm-vorbeugender-brandschutz': [
    {
      id: 'm3', title: 'Organisatorischer Brandschutz & Brandschutzhelfer', duration: 18,
      blocks: [
        H2('orga', 'Organisatorischer Brandschutz'),
        P('Der organisatorische Brandschutz umfasst alle Regelungen und Maßnahmen, die im Betrieb Brände verhindern und im Ernstfall Schaden begrenzen – das „Verhalten" ergänzt Bau und Technik.'),
        UL(
          '<b>Brandschutzordnung (DIN 14096):</b> Teil A (Aushang), B (für alle Beschäftigten), C (für Personen mit besonderen Aufgaben)',
          '<b>Flucht- und Rettungspläne</b> gut sichtbar aushängen',
          '<b>Unterweisungen</b> und regelmäßige Räumungsübungen',
          '<b>Brandschutzbeauftragte</b> und <b>Brandschutzhelfer</b> benennen'),
        DEF('Brandschutzhelfer', 'Beschäftigte, die im Brandfall Erstmaßnahmen ergreifen: Alarmierung, Beginn der Räumung und – wenn gefahrlos möglich – Bekämpfung von Entstehungsbränden mit dem Feuerlöscher. Empfohlen: ca. 5 % der Beschäftigten.'),
        H2('loescher', 'Feuerlöscher richtig einsetzen'),
        STEPS(
          'Löscher zum Brand tragen und entsichern (Sicherung ziehen)',
          'Mit dem Wind (im Rücken) an den Brand herangehen',
          'Brand von vorne und unten angreifen, nicht in die Flammen zielen',
          'Flächenbrände von vorne nach hinten ablöschen',
          'Genug Löscher gleichzeitig einsetzen – nicht nacheinander',
          'Nach dem Löschen: Brandstelle beobachten (Rückzündung)'),
        CO('warn', 'Eigenschutz vor Löschversuch', 'Ein Entstehungsbrand kann in Minuten außer Kontrolle geraten. Im Zweifel: Menschen warnen, Bereich räumen, Feuerwehr rufen – kein Löschversuch unter Eigengefährdung.'),
        H2('raeumung', 'Räumung'),
        P('Im Ernstfall zählt die geordnete Räumung: bekannte Fluchtwege nutzen, Aufzüge meiden, Sammelplatz aufsuchen und Vollzähligkeit prüfen. Wer schon einmal geübt hat, handelt im Ernstfall ruhiger und schneller.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- N */
  'n-maschinist': [
    {
      id: 'n4', title: 'Wasserförderung & Sonderaufgaben des Maschinisten', duration: 18,
      blocks: [
        H2('foerderung', 'Wasserförderung über lange Wegstrecke'),
        P('Reicht das Löschwasser am Objekt nicht, fördert man über eine lange B-Leitung. Der Maschinist plant Pumpenabstände so, dass an jeder Folgepumpe genug Eingangsdruck ankommt.'),
        KF(
          'Reibungsverlust steigt mit Länge und Förderstrom',
          'Je 10 m Höhenunterschied ca. 1 bar berücksichtigen',
          'Eingangsdruck an der Folgepumpe min. 1,5 bar halten',
          'Pumpenabstand richtet sich nach Gelände, Förderstrom und Ausgangsdruck'),
        DEF('Verstärkerpumpe', 'In die Förderstrecke eingebaute Pumpe, die den Druck wieder anhebt. Sie „übernimmt" das ankommende Wasser mit Restdruck und fördert es weiter – die Abstimmung zwischen den Maschinisten ist entscheidend.'),
        H2('offenes', 'Betrieb an offener Wasserstelle'),
        P('An Teich/Fluss sichert der Maschinist Saugkorb (Ventilleine) und Saugleitung gegen Absinken/Verschmutzen. Er überwacht die Saughöhe und beugt Kavitation vor. Bei Frost: Entwässerung und Frostschutz beachten.'),
        H2('sonder', 'Sonderaufgaben & Überwachung'),
        UL(
          'Betriebswerte laufend überwachen (Druck, Drehzahl, Temperatur, Tankfüllung)',
          'Beleuchtung der Einsatzstelle und Verkehrssicherung',
          'Bedienung von Seilwinde, Lichtmast, Aggregaten',
          'Kommunikation mit dem Angriffstrupp über Wasserbedarf'),
        CO('tip', 'Der ruhende Pol', 'Der Maschinist bleibt bei seiner Pumpe – ruhig, aufmerksam, zuverlässig. Wer am Wasser die Nerven behält und vorausschauend arbeitet, ist die stille Lebensversicherung des Angriffstrupps.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- O */
  'o-baukunde': [
    {
      id: 'o3', title: 'Gebäudearten & Ausbreitungswege', duration: 18,
      blocks: [
        H2('arten', 'Gebäudeklassen & Sonderbauten'),
        P('Die Landesbauordnungen teilen Gebäude in Gebäudeklassen (GK 1–5) nach Höhe und Nutzung ein. Höhere Anforderungen gelten für <b>Sonderbauten</b> mit besonderem Risiko.'),
        UL(
          '<b>Hochhäuser</b> (Aufenthaltsräume > 22 m) – eigene Vorschriften, Sicherheitstreppenräume',
          '<b>Versammlungsstätten</b> (viele Personen) – Entfluchtung',
          '<b>Krankenhäuser/Pflegeheime</b> – nicht/schwer gehfähige Personen',
          '<b>Industrie-/Lagerbauten</b> – große Brandlasten, weite Flächen',
          '<b>Verkaufsstätten, Schulen, Beherbergung</b> – jeweils eigene Sonderbau-Regeln'),
        H2('ausbreitung', 'Wie sich Feuer & Rauch ausbreiten'),
        P('Brandrauch verteilt sich oft schneller und weiter als das Feuer selbst – über Wege, an die man zuerst nicht denkt:'),
        TBL(['Weg', 'Beispiel'],[
          ['vertikal', 'Treppenräume, Schächte, Aufzüge (Kamineffekt)'],
          ['horizontal', 'Flure, abgehängte Decken, Doppelböden'],
          ['über Installationen', 'Kabel-/Lüftungskanäle, Rohrdurchführungen'],
          ['über die Fassade', 'Fenster („Feuerüberschlag"), Wärmedämmung'],
        ]),
        DEF('Brandabschnitt', 'Durch feuerbeständige Wände/Decken (Brandwände) abgetrennter Gebäudebereich, der die Ausbreitung auf eine bestimmte Zeit begrenzt. Öffnungen darin (Türen, Klappen) müssen im Brandfall selbsttätig schließen.'),
        CO('warn', 'Kamineffekt', 'In Treppenräumen und Schächten zieht heißer Rauch nach oben und verraucht in Minuten ganze Geschosse. Rauchfreihaltung von Rettungswegen (Türen zu, RWA nutzen) ist überlebenswichtig für eingeschlossene Personen.'),
        FIG('kamineffekt', 'Kamineffekt: Im Treppenraum steigt heißer Rauch schnell nach oben – Türen schließen hält den Rettungsweg raucharm.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- P */
  'p-arbeitsschutz': [
    {
      id: 'p3', title: 'Gefährdungsbeurteilung & sichere Übung', duration: 16,
      blocks: [
        H2('beurteilung', 'Gefährdungsbeurteilung'),
        P('Vor Tätigkeiten und Übungen werden Gefährdungen systematisch ermittelt und Schutzmaßnahmen festgelegt. Grundprinzip ist die <b>Rangfolge der Schutzmaßnahmen (STOP)</b>:'),
        MNE([{l:'S',w:'Substitution'},{l:'T',w:'Technisch'},{l:'O',w:'Organisatorisch'},{l:'P',w:'Persönlich'}],
          'Erst Gefahr ersetzen/vermeiden, dann technische Schutzmaßnahmen, dann organisatorische (Regeln, Unterweisung), zuletzt persönliche Schutzausrüstung.'),
        H2('uebung', 'Sicher üben'),
        KF(
          'Übungsleiter plant Sicherheit mit (Sicherungsposten, Brandschutz, Erste Hilfe)',
          'Realistische, aber beherrschbare Belastung – Überforderung vermeiden',
          'Heißausbildung (Brandcontainer) nur mit geschulten Instruktoren',
          'Nach der Übung: Nachbesprechung, Fehler offen und wertschätzend besprechen'),
        CO('danger', 'Gefahr Heißausbildung', 'Realbrandausbildung in Brandübungsanlagen ist wertvoll, aber gefährlich (Hitzestress, CO). Nur mit qualifizierten Ausbildern, definierten Abbruchkriterien, Wärmebelastungsgrenzen und Bereitstellung von Wasser und Sanitätsdienst.'),
        H2('grenzen', 'Persönliche Grenzen'),
        P('Hitze, Dehydrierung und Erschöpfung sind reale Gefahren. Vor und nach Belastung trinken, Pausen und Ablösung ernst nehmen, Warnsignale des Körpers (Schwindel, Übelkeit) nicht ignorieren. Fitness und arbeitsmedizinische Vorsorge (z. B. G 26) sichern die Einsatztauglichkeit.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- Q */
  'q-jugend': [
    {
      id: 'q3', title: 'Ausbildungsmethodik & Gruppenstunde gestalten', duration: 16,
      blocks: [
        H2('methodik', 'Wie Menschen lernen'),
        P('Gute Ausbildung berücksichtigt, dass Wissen durch <b>Sehen, Hören und vor allem selbst Tun</b> haften bleibt. Der Merksatz: „Sag es mir – ich vergesse. Zeig es mir – ich erinnere mich. Lass es mich tun – ich verstehe."'),
        DEF('Vier-Stufen-Methode', 'Bewährtes Ausbildungsschema: 1. Vorbereiten (Interesse wecken), 2. Vormachen/Erklären, 3. Nachmachen lassen, 4. Üben und festigen. So wird aus Zeigen echtes Können.'),
        H2('stunde', 'Eine Gruppenstunde planen'),
        STEPS(
          'Lernziel festlegen (Was sollen alle danach können?)',
          'Einstieg gestalten (Motivation, Bezug zur Praxis)',
          'Hauptteil mit aktiver Beteiligung (Stationen, Üben, Spiel)',
          'Sicherung/Wiederholung (Quiz, Zusammenfassung)',
          'Abschluss und Ausblick auf die nächste Stunde'),
        H2('motivation', 'Motivieren & binden'),
        KF(
          'Abwechslung: Theorie, Praxis, Sport und Spaß mischen',
          'Erfolgserlebnisse ermöglichen (jede/r soll etwas schaffen)',
          'Verantwortung übertragen (Jugendliche anleiten Jüngere)',
          'Wettbewerbe (Leistungsspange, Bundeswettbewerb) als Ziel'),
        CO('tip', 'Vorbild sein', 'Betreuerinnen und Betreuer wirken durch ihr Verhalten stärker als durch Worte: pünktlich, fair, sicherheitsbewusst, mit vollständiger PSA. Was die Jugend hier lernt, prägt die Feuerwehr von morgen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- R */
  'r-digital': [
    {
      id: 'r3', title: 'Messen, Dokumentieren & digitale Lage', duration: 16,
      blocks: [
        H2('messen', 'Mess- und Warngeräte'),
        P('Digitale Einsatzunterstützung heißt auch: unsichtbare Gefahren messbar machen. Mess- und Warngeräte schützen die Einsatzkräfte.'),
        TBL(['Gerät', 'Misst / warnt vor'],[
          ['CO-Warner', 'Kohlenstoffmonoxid (persönlicher Schutz)'],
          ['Ex-Messgerät', 'explosionsfähige Atmosphäre (% der UEG)'],
          ['Mehrgasmessgerät', 'O₂, CO, Ex, ggf. H₂S u. a.'],
          ['Dosisleistungsmesser', 'ionisierende Strahlung'],
        ]),
        CO('warn', 'Messen vor Betreten', 'In Schächten, Kellern, Silos und Gärkellern kann Sauerstoffmangel oder ein zündfähiges/giftiges Gemisch herrschen. Vor dem Betreten messen – nie „auf gut Glück" einsteigen.'),
        H2('doku', 'Digitale Dokumentation & Lage'),
        P('Einsatzführungssysteme und Tablets ermöglichen digitale Lagekarten, Kräfteübersichten und automatische Dokumentation. Rettungsdatenblätter (QR-Code/App) liefern fahrzeugspezifische Rettungsinfos in Sekunden.'),
        H2('grenzen', 'Chancen & Grenzen der Digitalisierung'),
        UL(
          '<b>Chance:</b> schnelleres, gemeinsames Lagebild, weniger Informationsverlust',
          '<b>Chance:</b> Vernetzung mit Leitstelle, Nachbarwehren, Fachdiensten',
          '<b>Grenze:</b> Abhängigkeit von Strom, Netz und Akku – Rückfallebene nötig',
          '<b>Grenze:</b> Technik ersetzt kein Handwerk – Grundfertigkeiten bleiben Pflicht'),
        CO('tip', 'Technik dient dem Menschen', 'Digitale Werkzeuge sind Mittel, kein Selbstzweck. Wer die Grundlagen beherrscht, nutzt Technik als Verstärker – und bleibt handlungsfähig, wenn sie einmal ausfällt.'),
      ],
    },
  ],

};
