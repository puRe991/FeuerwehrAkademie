/* =========================================================================
   CURRICULUM-EXTRA-2 — Maximale Inhaltstiefe: je 2 weitere Lektionen pro Modul.
   Deckt die verbliebenen Kernpunkte jedes Themengebiets ab, sodass jedes
   Modul einem vollständigen Lehrgang entspricht.
   Wird in curriculum.js an die Module angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS_2 = {

  /* ------------------------------------------------------------------- C */
  'c-fahrzeugkunde': [
    {
      id: 'c4', title: 'Löschwasserversorgung & Pumpensystem', duration: 18,
      blocks: [
        H2('quellen', 'Woher kommt das Löschwasser?'),
        UL(
          '<b>Hydranten</b> (Über-/Unterflur) am Trinkwassernetz – abhängige Löschwasserversorgung',
          '<b>Offene Gewässer</b> (Teich, Fluss, Löschteich) – unabhängige Versorgung',
          '<b>Löschwasserbehälter/-zisternen</b> und Löschwasserbrunnen',
          '<b>Fahrzeugtank</b> für den schnellen Erstangriff'),
        DEF('Abhängige/unabhängige Löschwasserversorgung', 'Abhängig = aus dem Leitungsnetz (Hydrant), begrenzt durch Netzleistung. Unabhängig = aus offenem Gewässer/Behälter, unabhängig vom Netz, aber aufwendiger herzustellen.'),
        H2('tank', 'Der Löschwassertank – schnelle Reserve'),
        P('Der Fahrzeugtank (600–2000 l und mehr) erlaubt den sofortigen Löschangriff, während parallel die Wasserversorgung aufgebaut wird. Faustwert: Ein C-Rohr mit ~100 l/min leert 1000 l in rund 10 Minuten – deshalb rasch nachspeisen.'),
        H2('foerderarten', 'Wasserförderung – zwei Wege'),
        TBL(['Verfahren', 'Anwendung'],[
          ['Förderung über lange Wegstrecke', 'B-Leitung mit Verstärkerpumpen über große Entfernung'],
          ['Pendelverkehr mit Tanklöschfahrzeugen', 'unwegsames Gelände, Vegetationsbrand'],
        ]),
        CO('tip', 'Wasser marsch – aber geplant', 'Die Wasserversorgung ist oft der Flaschenhals. Der Gruppenführer plant sie parallel zum Erstangriff, damit dem Angriffstrupp nie das Wasser ausgeht.'),
      ],
    },
    {
      id: 'c5', title: 'Wechsellader, Abrollbehälter & Logistik', duration: 16,
      blocks: [
        H2('wlf', 'Das Wechselladersystem (WLF/AB)'),
        P('Ein <b>Wechselladerfahrzeug (WLF)</b> transportiert austauschbare <b>Abrollbehälter (AB)</b>. So wird ein Trägerfahrzeug für viele Aufgaben nutzbar – man tauscht nur den Behälter.'),
        UL(
          '<b>AB-Wasser/Schaum:</b> große Lösch-/Schaummittelmengen',
          '<b>AB-Rüst/THL:</b> technische Hilfeleistung',
          '<b>AB-Gefahrgut:</b> Ausstattung für ABC-Einsätze',
          '<b>AB-Atemschutz, AB-Logistik, AB-Mulde</b> u. v. m.'),
        H2('logistik', 'Einsatzlogistik'),
        P('Bei längeren Einsätzen wird Nachschub organisiert: Atemluftflaschen, Kraftstoff, Löschmittel, Verpflegung und Ablösung. Die Logistik (Sachgebiet S4) hält die Einsatzfähigkeit über Stunden aufrecht.'),
        H2('gwl', 'Gerätewagen & Sonderfahrzeuge'),
        TBL(['Fahrzeug', 'Zweck'],[
          ['GW-Logistik', 'Nachschub, Material, Verpflegung'],
          ['GW-Messtechnik', 'Gefahrstoffmessung, Spürtrupp'],
          ['GW-Höhenrettung', 'Spezialgerät für Höhen/Tiefen'],
          ['ELW 2', 'Führungsunterstützung großer Lagen'],
        ]),
        CO('info', 'Modularität', 'Das Wechselladersystem macht Feuerwehren flexibel und wirtschaftlich: Ein WLF ersetzt mehrere Spezialfahrzeuge – die passende Ausstattung rollt bedarfsgerecht an die Einsatzstelle.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- D */
  'd-geraetekunde': [
    {
      id: 'd4', title: 'Beleuchtung, Aggregate & Kleingeräte', duration: 18,
      blocks: [
        H2('licht', 'Beleuchtung an der Einsatzstelle'),
        P('Ausreichendes Licht ist Sicherheit: Es verhindert Unfälle, ermöglicht sauberes Arbeiten und macht Gefahren sichtbar. Beleuchtung gehört zu den ersten Maßnahmen bei Nacht.'),
        UL(
          '<b>Lichtmast / Umfeldbeleuchtung</b> am Fahrzeug',
          '<b>Stativ-/Flutlichtstrahler</b> für Arbeitsbereiche',
          '<b>Handscheinwerfer / Kopflampen</b> (ex-geschützt, wo nötig)',
          '<b>Verkehrswarn- und Signalgeräte</b>'),
        H2('strom', 'Stromversorgung'),
        DEF('Schutztrennung', 'Bei tragbaren Stromerzeugern übliche Schutzmaßnahme: Der Generator ist galvanisch vom Erdreich getrennt, eine Isolationsüberwachung meldet Fehler. Wichtig: nur geprüfte Kabel/Geräte verwenden, Trommeln vollständig abrollen.'),
        H2('klein', 'Wichtige Kleingeräte'),
        TBL(['Gerät', 'Verwendung'],[
          ['Motorsäge/Kettensäge', 'Holz, umgestürzte Bäume (nur geschult!)'],
          ['Trennschleifer', 'Metall, Gitter, Bleche'],
          ['Tauchpumpe/Wassersauger', 'Wasserschäden, überflutete Keller'],
          ['Lüfter (Überdruck)', 'Entrauchung'],
          ['Werkzeugsatz, Brechwerkzeug', 'Türöffnung, einfache THL'],
        ]),
        CO('warn', 'Nur geschult einsetzen', 'Motorsäge, Trennschleifer und Rettungsgeräte dürfen nur ausgebildete Kräfte bedienen. Schnittschutz, Gehör- und Augenschutz tragen, Umstehende schützen.'),
      ],
    },
    {
      id: 'd5', title: 'Wartung, Prüfung & Gerätemanagement', duration: 15,
      blocks: [
        H2('warum', 'Warum prüfen?'),
        P('Geräte müssen im Ernstfall zu 100 % funktionieren. Regelmäßige Sicht-, Funktions- und Sachkundigenprüfungen stellen die Betriebssicherheit her – vorgeschrieben durch Hersteller, Normen und Unfallverhütungsvorschriften.'),
        H2('fristen', 'Prüffristen (Beispiele)'),
        TBL(['Gerät', 'Prüfung'],[
          ['Atemschutzgeräte', 'nach Gebrauch + regelmäßige Grund-/Sichtprüfung'],
          ['Leitern', 'jährliche Prüfung durch Sachkundige'],
          ['Feuerwehrleinen/Gurte', 'nach Gebrauch + regelmäßig, Aussonderung bei Schäden'],
          ['Elektrische Geräte', 'wiederkehrende Prüfung (z. B. DGUV V3)'],
          ['Schläuche', 'nach Gebrauch reinigen, Druckprüfung'],
        ]),
        H2('doku', 'Dokumentation'),
        P('Jede Prüfung wird dokumentiert (Prüfbuch/Software). So ist jederzeit nachvollziehbar, welches Gerät wann geprüft wurde und einsatzbereit ist – auch rechtlich wichtig.'),
        CO('tip', 'Pflege ist Einsatzvorbereitung', 'Ein sauber gepflegtes, geprüftes Gerät ist gelebte Sicherheit. „Nach dem Einsatz ist vor dem Einsatz" – erst mit vollständiger, geprüfter Ausrüstung ist die Wehr wieder bereit.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- G */
  'g-technische-hilfe': [
    {
      id: 'g4', title: 'THL bei Bahn-, Wasser- & Sonderlagen', duration: 20,
      blocks: [
        H2('bahn', 'Einsätze im Bahnbereich'),
        CO('danger', 'Bahnstrom & Züge', 'Oberleitungen führen 15.000 Volt. Niemals in ihre Nähe (Sicherheitsabstand!) – erst nach bestätigter Erdung/Freischaltung durch die Bahn arbeiten. Nachbargleise können weiter befahren sein: Sperrung durch den Notfallmanager der Bahn abwarten.'),
        UL(
          'Immer über die Leitstelle/Notfallmanagement der Bahn koordinieren',
          'Erst arbeiten nach „Fahrleitung geerdet" und „Gleis gesperrt"',
          'Auf Nachbargleise achten, definierte Zugänge nutzen',
          'Lange Anmarschwege, schweres Gerät einplanen'),
        H2('wasser', 'Einsätze am/im Wasser'),
        P('Bei Personen im Wasser, Hochwasser oder Eisunfällen gilt: <b>Eigensicherung zuerst</b>. Nur ausgebildete Kräfte mit Rettungsweste und Sicherung ans/ins Wasser; bevorzugt vom Ufer oder Boot aus retten (Wurfsack, Leiter, Boot).'),
        H2('sonder', 'Weitere Sonderlagen'),
        TBL(['Lage', 'Besonderheit'],[
          ['Aufzugnotbefreiung', 'Steuerung/Türverriegelung, Ruhe bewahren, Fachfirma'],
          ['Tierrettung', 'Eigenschutz, Verhalten des Tieres, ggf. Tierarzt'],
          ['Einsturz/Verschüttung', 'Statik, THW, Ortung, langsames Vorgehen'],
          ['Silo/Grube/enger Raum', 'Atemgifte/O₂-Mangel, Messen, Absturzsicherung'],
        ]),
        CO('warn', 'Enge Räume (Confined Space)', 'Behälter, Silos, Schächte und Gruben sind lebensgefährlich: Sauerstoffmangel und giftige/zündfähige Gase. Vor dem Einsteigen messen, sichern (Absturz), Rückholmöglichkeit und Sicherungsposten stellen.'),
      ],
    },
    {
      id: 'g5', title: 'Einsatzstelle organisieren & Zusammenarbeit', duration: 16,
      blocks: [
        H2('ordnung', 'Ordnung des Raumes an der THL-Stelle'),
        P('Eine strukturierte Einsatzstelle beschleunigt die Rettung und erhöht die Sicherheit. Bewährt hat sich die Einteilung in Bereiche rund um das verunfallte Fahrzeug.'),
        UL(
          '<b>Innerer Bereich (ca. 5 m):</b> nur der arbeitende Rettungstrupp',
          '<b>Äußerer Bereich (ca. 10 m):</b> Gerätebereitstellung, Rettungssatz, Material',
          '<b>Ablage-/Bereitstellungsraum:</b> Geräte übersichtlich ablegen',
          '<b>Verkehrsabsicherung</b> weit vorgelagert'),
        H2('geraetablage', 'Geräteablage'),
        P('Werkzeuge werden auf einer Plane geordnet abgelegt – griffbereit und sicher. So findet jeder das Gerät sofort und niemand stolpert im Arbeitsbereich.'),
        H2('zusammenarbeit', 'Zusammenarbeit mit Rettungsdienst & Polizei'),
        TBL(['Partner', 'Rolle'],[
          ['Rettungsdienst/Notarzt', 'medizinische Führung, gibt Rettungstempo vor'],
          ['Polizei', 'Verkehr, Absperrung, Ermittlung, Spuren'],
          ['Abschleppdienst/Bergung', 'Fahrzeugbergung nach der Rettung'],
          ['THW', 'schwere technische Hilfe, Statik, Beleuchtung'],
        ]),
        CO('tip', 'Ein Kommandogeber', 'Bei der patientenorientierten Rettung gibt es einen klaren Kommandogeber, der Feuerwehr und Rettungsdienst koordiniert. Ständige Kommunikation über den Patientenzustand ist Pflicht.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- K */
  'k-absturzsicherung': [
    {
      id: 'k3', title: 'Knoten, Anschlagmittel & Materialkunde', duration: 16,
      blocks: [
        H2('knoten', 'Wichtige Knoten & Stiche'),
        TBL(['Knoten', 'Zweck'],[
          ['Mastwurf', 'Befestigen an Rundmaterial, verstellbar'],
          ['Achterknoten', 'sichere Seilschlaufe (Anseilen/Anschlagen)'],
          ['Pfahlstich (Bulin)', 'feste Schlinge, z. B. Rettungsknoten'],
          ['Doppelter Ankerstich', 'Bandschlinge am Anschlagpunkt'],
          ['Halbmastwurf (HMS)', 'dynamisches Sichern/Ablassen'],
        ]),
        H2('material', 'Material & Belastbarkeit'),
        UL(
          '<b>Kernmantelseile:</b> dynamisch (dehnt, fängt Stürze) vs. statisch (Arbeitsseil)',
          '<b>Bandschlingen/Reepschnüre</b> zum Anschlagen',
          '<b>Karabiner</b> mit Verschlusssicherung (Verschlusskraft/Bruchlast beachten)',
          '<b>Gurte, Auffang-/Abseilgeräte</b> nach EN-Normen'),
        DEF('Bruchlast vs. Gebrauchslast', 'Die Bruchlast (z. B. Karabiner 20+ kN) ist die Grenze, an der das Material versagt. Im Einsatz bleibt man mit großer Sicherheitsreserve weit darunter. Beschädigtes oder überlastetes Material wird ausgesondert.'),
        CO('warn', 'Kanten & Alterung', 'Scharfe Kanten durchtrennen Seile unter Last blitzschnell – immer Kantenschutz verwenden. Textiles Material altert (UV, Chemie, Sturzbelastung) und ist regelmäßig zu prüfen und bei Zweifel auszusondern.'),
      ],
    },
    {
      id: 'k4', title: 'Höhen- & Tiefenrettung im Überblick', duration: 16,
      blocks: [
        H2('abgrenzung', 'Wer macht was?'),
        P('Der Gerätesatz Absturzsicherung dient der Sicherung und einfachen Rettung. Komplexe Rettungen aus großer Höhe/Tiefe übernimmt die speziell ausgebildete <b>Höhenrettungsgruppe</b>.'),
        H2('verfahren', 'Grundverfahren'),
        UL(
          '<b>Ablassen:</b> gesichertes Herablassen einer Person kontrolliert am Seil',
          '<b>Aufziehen/Flaschenzug:</b> Heben mit Kraftübersetzung (Rollen)',
          '<b>Begleitetes Abseilen:</b> Retter seilt mit Patient gemeinsam ab',
          '<b>Rettung aus Tiefen:</b> Schacht/Grube – Absturz- und Atemgiftgefahr beachten'),
        H2('trage', 'Patient sichern'),
        P('Zur Rettung dient meist eine Schleifkorbtrage, in der die Person gesichert und schonend transportiert wird. HWS-Schutz, Lagesicherung und ständiger Patientenkontakt sind Pflicht.'),
        H2('drehleiter', 'Drehleiter als Rettungsmittel'),
        P('Auch die Drehleiter mit Korb ist Höhenrettungsmittel – für Menschenrettung aus Fenstern/Dächern und als Arbeitsplattform. Aufstellflächen freihalten, Standsicherheit (Abstützung) beachten.'),
        CO('danger', 'Nie ohne Redundanz', 'In Höhe/Tiefe wird nach dem Prinzip der Redundanz gearbeitet: möglichst zwei unabhängige Sicherungen (Arbeits- und Sicherungsseil). Ein Fehler darf nie zum Absturz führen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- M */
  'm-vorbeugender-brandschutz': [
    {
      id: 'm4', title: 'Löschwasserversorgung & Hydranten', duration: 18,
      blocks: [
        H2('grundschutz', 'Löschwasser bereitstellen'),
        P('Für den vorbeugenden Brandschutz muss ausreichend Löschwasser verfügbar sein. Der „Grundschutz" richtet sich nach Bebauung und Gefahr und wird von der Gemeinde sichergestellt.'),
        H2('hydranten', 'Hydrantenarten'),
        TBL(['Art', 'Merkmal'],[
          ['Überflurhydrant', 'sichtbar, schnell einsetzbar, frostempfindlicher'],
          ['Unterflurhydrant', 'im Boden, mit Standrohr, geschützt'],
          ['Wandhydrant', 'im Gebäude, für Ersthelfer/Feuerwehr'],
        ]),
        DEF('Löschwasservolumenstrom', 'Die Menge Löschwasser pro Zeit (l/min), die an einer Entnahmestelle verfügbar ist. Sie hängt von Rohrnetz und Druck ab – deshalb Hydranten im Ausrückgebiet kennen und Ergiebigkeit einschätzen.'),
        H2('unabhaengig', 'Unabhängige Löschwasserquellen'),
        UL(
          '<b>Löschteiche/-brunnen</b> und Zisternen',
          '<b>Offene Gewässer</b> mit befestigter Entnahmestelle (Saugstelle)',
          '<b>Löschwasserbehälter</b> an Sonderobjekten',
          'Kennzeichnung durch Hinweisschilder nach DIN'),
        CO('warn', 'Löschwasser sicherstellen', 'Bei Objekten mit hoher Brandlast (Industrie, Lager) reicht das Netz oft nicht – dann sind zusätzliche unabhängige Löschwasserquellen gefordert. Das ist Teil der Bauplanung und der Objektbegehung.'),
      ],
    },
    {
      id: 'm5', title: 'Betrieblicher Brandschutz & Brandsicherheitswache', duration: 16,
      blocks: [
        H2('feuergefaehrlich', 'Feuergefährliche Arbeiten'),
        P('Schweißen, Trennen, Löten & Co. sind häufige Brandursachen. Für solche „feuergefährlichen Arbeiten" braucht es einen <b>Erlaubnisschein</b>, Schutzmaßnahmen und oft eine Brandwache.'),
        KF(
          'Brennbares aus dem Gefahrenbereich entfernen/abdecken',
          'Löschmittel bereitstellen (Feuerlöscher, Wasser)',
          'Während und nach der Arbeit Brandwache stellen',
          'Nachkontrolle – Schwelbrände zeigen sich oft erst Stunden später'),
        H2('sicherheitswache', 'Brandsicherheitswache'),
        DEF('Brandsicherheitswache', 'Von der Feuerwehr gestellte Wache bei Veranstaltungen mit erhöhtem Risiko (Theater, Feste, Zirkus). Aufgabe: Brände früh erkennen, Erstmaßnahmen einleiten, Räumung unterstützen, Rettungswege im Blick behalten.'),
        H2('veranstaltung', 'Veranstaltungen absichern'),
        UL(
          'Flucht- und Rettungswege sowie Ausgänge freihalten',
          'Pyrotechnik/offenes Feuer überwachen',
          'Kommunikation mit Veranstalter und Ordnungsdienst',
          'Bei Gefahr: Veranstaltung stoppen, räumen, Feuerwehr nachfordern'),
        CO('tip', 'Prävention wirkt', 'Der beste Brand ist der, der nicht entsteht. Betrieblicher und organisatorischer Brandschutz verhindert weit mehr Schäden, als jede Feuerwehr je löschen kann.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- N */
  'n-maschinist': [
    {
      id: 'n5', title: 'Elektrische Sicherheit & Schutzmaßnahmen', duration: 16,
      blocks: [
        H2('gefahr', 'Strom als Gefahr'),
        P('Der Maschinist betreibt Stromerzeuger und elektrische Geräte. Elektrischer Strom ist unsichtbar und lebensgefährlich – Schutzmaßnahmen sind Pflicht.'),
        DEF('Schutztrennung mit Isolationsüberwachung', 'Standard-Schutzmaßnahme tragbarer Feuerwehr-Stromerzeuger: Das Netz ist erdfrei, ein Isolationswächter überwacht permanent. Erster Fehler wird gemeldet (nicht sofort gefährlich), muss aber behoben werden.'),
        H2('regeln', 'Sichere Bedienung'),
        UL(
          'Nur geprüfte Kabel und Geräte verwenden',
          'Kabeltrommeln vollständig abrollen (Wärmestau)',
          'Geräte nicht überlasten (Nennleistung beachten)',
          'Bei Nässe besondere Vorsicht, Stecker trocken halten',
          'Beschädigte Kabel/Geräte sofort außer Betrieb nehmen'),
        H2('fremdstrom', 'Elektrische Anlagen im Einsatz'),
        CO('danger', 'Abstand zu Spannung', 'Bei Bränden/Unfällen an elektrischen Anlagen (Trafo, Oberleitung, PV) gilt: Abstand halten, freischalten lassen, erst nach Bestätigung arbeiten. Löschen an Niederspannung nur mit geeignetem Löschmittel und Sicherheitsabstand.'),
        H2('erdung', 'Potenzialausgleich'),
        P('Bei manchen Einsätzen (z. B. Bahn) ist Erdung/Potenzialausgleich durch Fachpersonal nötig, bevor gearbeitet werden darf. Der Maschinist kennt die Grenzen seiner Geräte und ruft im Zweifel Fachkräfte.'),
      ],
    },
    {
      id: 'n6', title: 'Einsatzfahrt, Fahrphysik & Fahrsicherheit', duration: 18,
      blocks: [
        H2('sonderrecht', 'Sonder- und Wegerechte'),
        P('Mit Blaulicht und Martinshorn nimmt der Maschinist Sonder- und Wegerechte in Anspruch (§§ 35, 38 StVO). Sie befreien von einzelnen Verkehrsregeln – aber nie von der Sorgfaltspflicht.'),
        CO('danger', 'Defensiv trotz Eile', 'Die meisten schweren Feuerwehrunfälle passieren auf der Anfahrt. An Kreuzungen/roten Ampeln Schrittgeschwindigkeit, Blickkontakt suchen, mit Fehlern anderer rechnen. Lieber 30 Sekunden später und sicher ankommen.'),
        H2('physik', 'Fahrphysik schwerer Fahrzeuge'),
        KF(
          'Langer Bremsweg, hohes Gewicht – Geschwindigkeit anpassen',
          'Hoher Schwerpunkt → Kippgefahr in Kurven',
          'Wasser im Tank „schwappt" und beeinflusst die Fahrdynamik',
          'Breite/Höhe/Länge beachten (Unterführungen, enge Zufahrten)'),
        H2('gurt', 'Sicherheit im Fahrzeug'),
        UL(
          'Anschnallpflicht – auch im Mannschaftsraum',
          'Erst anschnallen/ausrüsten, wenn das Fahrzeug steht bzw. sicher',
          'Ladung/Geräte gesichert (keine losen Teile)',
          'Ein-/Aussteigen zur sicheren Seite (Verkehr!)'),
        CO('tip', 'Ankommen ist Teil des Auftrags', 'Der Einsatz beginnt mit der sicheren Anfahrt. Wer verunfallt, hilft niemandem und bindet weitere Kräfte. Sicheres Fahren ist gelebte Verantwortung für die ganze Besatzung.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- O */
  'o-baukunde': [
    {
      id: 'o4', title: 'Baustoffe im Detail & ihr Brandverhalten', duration: 18,
      blocks: [
        H2('detail', 'Baustoffe unter Hitze'),
        TBL(['Baustoff', 'Verhalten im Brand'],[
          ['Beton', 'unbrennbar; Abplatzungen durch Wasserdampf, Bewehrung verliert Kraft'],
          ['Stahl', 'unbrennbar; ab ~500 °C starker Festigkeitsverlust, verformt sich'],
          ['Holz', 'brennbar; brennt mit ~0,7 mm/min ab, Kohleschicht schützt Kern'],
          ['Glas', 'zerspringt bei Hitze/Temperaturschock; Sicherheitsglas anders'],
          ['Kunststoffe', 'brennen/schmelzen, starke Rauch- und Giftgasbildung'],
          ['Aluminium', 'schmilzt bei ~660 °C, verliert früh Tragkraft'],
        ]),
        H2('daemmung', 'Dämmstoffe & Fassaden'),
        CO('warn', 'Fassaden & WDVS', 'Wärmedämm-Verbundsysteme aus brennbarem Material (z. B. Polystyrol) können Brände über die Fassade nach oben tragen. Bei Fassadenbränden mit rascher, oft verdeckter Ausbreitung rechnen.'),
        H2('konstruktion', 'Konstruktionen lesen'),
        P('Tragwerke unterscheiden sich stark: Massivbau (Mauerwerk/Beton) ist meist stabiler als Leichtbau/Stahlhallen. Holzständer-, Fachwerk- und Leichtbaudecken können unerwartet früh versagen. Die Bauweise beeinflusst die Einsatztaktik direkt.'),
        CO('danger', 'Leichtbaudecken', 'Moderne Leichtbau-/Nagelplattenbinder-Konstruktionen können im Brand plötzlich und ohne Vorwarnung versagen. Bei Dachstuhl-/Hallenbränden defensiv vorgehen, Aufenthalt darunter minimieren.'),
      ],
    },
    {
      id: 'o5', title: 'Einsturz, Trümmer & Sicherung', duration: 16,
      blocks: [
        H2('ursachen', 'Warum Gebäude einstürzen'),
        UL(
          'Verlust der Tragfähigkeit durch Hitze (Stahl, Beton, Holz)',
          'Zusätzliche Lasten (Löschwasser in Decken, Trümmer)',
          'Explosionen (Gas, Staub)',
          'Vorschädigung (Alter, Umbau, mangelnde Wartung)'),
        H2('anzeichen', 'Warnzeichen (Wiederholung & Vertiefung)'),
        KF(
          'Risse, sich weitende Fugen, ausbauchende Wände',
          'Durchbiegung von Decken/Trägern, klemmende Türen',
          'Herabfallender Putz, knackende/knirschende Geräusche',
          'Lange, intensive Brandeinwirkung auf tragende Teile'),
        H2('sichern', 'Sichern & Vorgehen bei Einsturz'),
        STEPS(
          'Gefahrenbereich großräumig absperren (Trümmerschatten beachten)',
          'Zugänge kontrollieren, Anwesende erfassen (wer war wo?)',
          'THW und Fachberater Statik nachfordern',
          'Bei Verschütteten: Ortung, vorsichtiges, gesichertes Vorgehen',
          'Nachrutsch-/Folgeeinsturzgefahr laufend bewerten'),
        DEF('Trümmerschatten', 'Der Bereich, in den Teile eines einstürzenden Gebäudes fallen können (Faustregel: mind. Gebäudehöhe als Abstand). Fahrzeuge und Kräfte gehören nicht in den Trümmerschatten einsturzgefährdeter Bauten.'),
        CO('danger', 'Menschenleben vs. Eigenschutz', 'Auch bei Verschütteten gilt die Abwägung: Rettung nur so weit, wie es die eigene Sicherheit zulässt. Kopfloses Eindringen in einsturzgefährdete Trümmer fordert oft weitere Opfer.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- P */
  'p-arbeitsschutz': [
    {
      id: 'p4', title: 'Biologische & chemische Gefährdungen, Impfschutz', duration: 16,
      blocks: [
        H2('bio', 'Biologische Gefährdungen'),
        P('Einsatzkräfte können mit Krankheitserregern in Kontakt kommen – über Blut, Körperflüssigkeiten, kontaminierte Flächen oder bei Einsätzen in verwahrlosten Umgebungen.'),
        KF(
          'Immer Einmalhandschuhe bei Kontakt mit Blut/Körperflüssigkeiten',
          'Bei Spritzgefahr: Schutzbrille/Visier, ggf. Mundschutz',
          'Hände- und Flächendesinfektion, Einsatzstellenhygiene',
          'Nadelstich-/Kontaminationsverletzungen sofort melden und versorgen'),
        H2('impf', 'Impfschutz'),
        DEF('Empfohlene Impfungen', 'Für Einsatzkräfte werden u. a. Tetanus, Hepatitis A/B und der übliche Grundschutz empfohlen. Der Impfschutz gehört zur arbeitsmedizinischen Vorsorge und schützt vor typischen Einsatzrisiken.'),
        H2('chem', 'Chemische Gefährdungen im Alltag'),
        P('Auch außerhalb von Gefahrguteinsätzen wirken Chemikalien: Brandrauch, Betriebsstoffe, Reinigungs-/Desinfektionsmittel. Gefahrstoffkennzeichnung (GHS) beachten, Sicherheitsdatenblätter kennen, PSA nutzen.'),
        CO('warn', 'Ruß = Gefahrstoff', 'Brandruß enthält krebserzeugende Stoffe. Er wird über Atmung und Haut aufgenommen. Konsequente Einsatzstellenhygiene (Schwarz-Weiß-Trennung, Reinigung, Duschen) ist aktiver Gesundheitsschutz.'),
      ],
    },
    {
      id: 'p5', title: 'Ergonomie, Belastung & psychische Gesundheit', duration: 16,
      blocks: [
        H2('ergonomie', 'Heben & Tragen'),
        P('Rückenschonendes Arbeiten beugt Verletzungen vor: aus den Beinen heben, Last nah am Körper, nicht verdreht heben, im Team koordinieren und Hilfsmittel (Trage, Rollen) nutzen.'),
        H2('hitze', 'Hitze- & Kreislaufbelastung'),
        KF(
          'Vor und nach Belastung ausreichend trinken',
          'PSA staut Wärme – Pausen und Ablösung einplanen',
          'Warnsignale (Schwindel, Übelkeit, Kopfschmerz) ernst nehmen',
          'Nach Atemschutz-/Hitzeeinsatz erholen (Rehab-Bereich)'),
        H2('psyche', 'Psychische Belastung & PSNV'),
        P('Belastende Einsätze (schwere Unfälle, Tod, Kinder, eigene Gefährdung) können nachwirken. Reaktionen wie Schlafstörungen, Grübeln oder Reizbarkeit sind normale Reaktionen auf ein unnormales Ereignis.'),
        DEF('PSNV', 'Psychosoziale Notfallversorgung: strukturierte Angebote zur Unterstützung nach belastenden Einsätzen – von der kollegialen Ansprache (Peers) über die Einsatznachsorge bis zur professionellen Hilfe. Nutzen ist Stärke, kein Zeichen von Schwäche.'),
        CO('tip', 'Aufeinander achten', 'Führungskräfte und Kameraden achten aufeinander: nachfragen, Angebote machen, Belastung ernst nehmen. Eine Kultur, in der man über Belastung reden darf, hält die Mannschaft langfristig gesund und einsatzbereit.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- Q */
  'q-jugend': [
    {
      id: 'q4', title: 'Wettbewerbe, Leistungsspange & Abzeichen', duration: 15,
      blocks: [
        H2('warum', 'Warum Wettbewerbe?'),
        P('Wettbewerbe verbinden Können, Teamgeist und Motivation. Sie geben der Ausbildung ein Ziel, fördern Übung und stärken den Zusammenhalt – und machen Erfolge sichtbar.'),
        H2('leistungsspange', 'Die Leistungsspange der Deutschen Jugendfeuerwehr'),
        DEF('Leistungsspange', 'Höchste Auszeichnung der Jugendfeuerwehr (i. d. R. ab 15 Jahren). Eine Gruppe zeigt gemeinsam: Schnelligkeitsübung, Kugelstoßen/Staffellauf (Sport), Löschangriff, Fragen (Wissen) und Gesamteindruck. Es zählt die Teamleistung.'),
        H2('weitere', 'Weitere Wettbewerbe & Abzeichen'),
        UL(
          '<b>Bundeswettbewerb</b> der Deutschen Jugendfeuerwehr',
          '<b>Jugendflamme</b> (Stufen 1–3): individuelle Grundfertigkeiten',
          '<b>Leistungsabzeichen</b> der Länder',
          'Orientierungsmärsche, Berufsfeuerwehrtage (24-h-Erlebnis)'),
        H2('paedagogik', 'Der pädagogische Wert'),
        CO('tip', 'Fair bleiben', 'Im Wettbewerb geht es ums gemeinsame Können, nicht um Sieg um jeden Preis. Fairness, gegenseitige Unterstützung und Freude am Miteinander sind die eigentlichen Ziele – und binden die Jugend an die Feuerwehr.'),
      ],
    },
    {
      id: 'q5', title: 'Zeltlager & Ausflüge rechtssicher organisieren', duration: 15,
      blocks: [
        H2('planung', 'Gut geplant ist halb gewonnen'),
        P('Zeltlager und Ausflüge sind Höhepunkte des Jahres – und organisatorisch anspruchsvoll. Sorgfältige Planung sorgt für Sicherheit und gelungene Erlebnisse.'),
        KF(
          'Einverständnis der Erziehungsberechtigten, Gesundheitsangaben',
          'Ausreichend qualifizierte Betreuer (Betreuungsschlüssel)',
          'Notfallplan, Erste-Hilfe-Ausstattung, Erreichbarkeit',
          'Aufsicht, Nachtruhe, Baderegeln, Ausflüge absichern'),
        H2('recht', 'Rechtliche Rahmenbedingungen'),
        UL(
          '<b>Aufsichtspflicht</b> durchgehend sicherstellen',
          '<b>Jugendschutz</b> (Zeiten, Alkohol/Nikotin – für Betreuer Vorbildpflicht)',
          '<b>Kinderschutz:</b> Vier-Augen-Prinzip, geschulte Betreuer',
          '<b>Versicherung</b> und Genehmigungen klären'),
        H2('baden', 'Besondere Gefahr: Baden'),
        CO('danger', 'Baderegeln', 'Ertrinken passiert leise und schnell. Baden nur an geeigneten, bewachten Stellen, mit klaren Regeln, Aufsicht am und im Wasser und Zählappellen. Nichtschwimmer besonders sichern.'),
        CO('tip', 'Erlebnis mit Verantwortung', 'Zeltlager schaffen Erinnerungen fürs Leben und binden den Nachwuchs. Wer Sicherheit und Spaß in Balance hält, legt den Grundstein für treue, begeisterte Feuerwehrleute von morgen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- R */
  'r-digital': [
    {
      id: 'r4', title: 'Drohnenbetrieb vertieft: Recht, Technik, Taktik', duration: 16,
      blocks: [
        H2('recht', 'Rechtlicher Rahmen'),
        P('Der Drohnenbetrieb (UAS) unterliegt EU-Recht mit den Kategorien <b>Open, Specific, Certified</b>. Fernpiloten benötigen Kenntnisnachweise, Drohnen sind zu registrieren; für BOS gelten teils Erleichterungen, aber nicht schrankenlos.'),
        KF(
          'Kompetenznachweis der Fernpiloten, regelmäßiges Üben',
          'Flugverbots-/Kontrollzonen (Flughäfen!) beachten',
          'Datenschutz bei Kamerabildern respektieren',
          'Betriebsgrenzen (Sichtweite, Höhe, Wetter) einhalten'),
        H2('technik', 'Sensorik & Ausstattung'),
        UL(
          '<b>Tageslichtkamera</b> für Lageübersicht und Dokumentation',
          '<b>Wärmebildkamera</b> für Glutnester und Personensuche',
          '<b>Zoom/Gimbal</b> für Details aus sicherer Distanz',
          '<b>Lautsprecher/Abwurf</b> bei manchen Systemen'),
        H2('taktik', 'Taktischer Einsatz'),
        CO('danger', 'Luftraum-Koordination', 'Bei parallelem Rettungshubschrauber-Einsatz ist die Koordination zwingend – die Drohne wird notfalls sofort gelandet. Ein Zusammenstoß wäre katastrophal. Klare Absprache mit der Einsatzleitung/Leitstelle.'),
        H2('grenzen', 'Grenzen'),
        P('Drohnen sind wetter- (Wind, Regen) und akkuabhängig, brauchen freie Sicht und geschulte Piloten. Sie ergänzen die Erkundung, ersetzen aber keine Kräfte am Boden.'),
      ],
    },
    {
      id: 'r5', title: 'Vernetzung, Leitstelle & Zukunftstechnologien', duration: 15,
      blocks: [
        H2('leitstelle', 'Die Leitstelle als Nervenzentrum'),
        P('Die integrierte Leitstelle nimmt Notrufe an, disponiert Einheiten, koordiniert und dokumentiert. Digitale Systeme (Einsatzleitsysteme, Statusmeldungen, Alarmierung per App/Funkmeldeempfänger) beschleunigen die Abläufe.'),
        H2('vernetzung', 'Vernetzte Einsatzführung'),
        UL(
          '<b>Digitale Lagekarten</b> und Kräfteübersichten in Echtzeit',
          '<b>Statusmeldungen</b> (Fahrzeugstatus 1–9) automatisiert',
          '<b>Sensorik/IoT:</b> Brandmeldeanlagen, Rauchmelder, Wasserstände',
          '<b>Rettungsdatenblätter</b> per QR/App direkt am Fahrzeug'),
        H2('zukunft', 'Blick nach vorn'),
        TBL(['Technologie', 'Potenzial'],[
          ['KI-gestützte Lageauswertung', 'schnelleres Erkennen von Mustern/Gefahren'],
          ['Löschroboter/UGV', 'Einsatz in extrem gefährlichen Bereichen'],
          ['Exoskelette', 'Entlastung beim Tragen'],
          ['Vernetzte PSA/Sensorik', 'Vitaldaten- und Positionsüberwachung im Trupp'],
        ]),
        CO('tip', 'Mensch bleibt entscheidend', 'Technik verstärkt die Feuerwehr, ersetzt aber weder Erfahrung noch Handwerk noch Menschlichkeit. Wer die Grundlagen beherrscht und neue Werkzeuge klug nutzt, ist auf der Höhe der Zeit – und bleibt handlungsfähig, wenn die Technik einmal schweigt.'),
      ],
    },
  ],

  /* --------------------------------------------------- X (Tauchen, FwDV 8) */
  'x-wasserrettung': [
    {
      id: 'x3', title: 'Tauchen im Feuerwehreinsatz (FwDV 8)', duration: 18,
      blocks: [
        H2('was', 'Tauchen als Spezialaufgabe'),
        P('Der <b>Tauchereinsatz</b> ist in der <b>FwDV 8</b> geregelt. Feuerwehrtauchen dient der Menschenrettung, der Suche und der technischen Hilfe unter Wasser. Es ist eine hoch spezialisierte, gefährliche Tätigkeit – nur ausgebildete und regelmäßig geübte <b>Feuerwehrtaucher</b> mit gültiger arbeitsmedizinischer Vorsorge (G 31) dürfen tauchen.'),
        CO('warn', 'Kein Standard jeder Wehr', 'Nicht jede Feuerwehr hat eine Taucherstaffel. Die meisten Wehren fordern bei Wassernotlagen ausgebildete Taucher (Feuerwehr, DLRG, THW) nach und leisten selbst die Wasserrettung von Land/Boot aus (Rufen–Werfen–Fahren).'),
        H2('trupp', 'Der Tauchtrupp'),
        P('Getaucht wird niemals allein. Der Tauchtrupp besteht mindestens aus:'),
        UL(
          '<b>Taucher</b> – führt den Einsatz unter Wasser durch',
          '<b>Signalmann (Leinenführer)</b> – hält über die Signalleine ständigen Kontakt',
          '<b>Reservetaucher (Sicherungstaucher)</b> – einsatzbereit zur sofortigen Rettung',
          '<b>Tauchereinsatzführer</b> – leitet und überwacht den Tauchgang'),
        DEF('Signalleine & Leinenzugzeichen', 'Über die Signalleine verständigen sich Taucher und Signalmann mit vereinbarten Zugzeichen (z. B. „alles in Ordnung?", „auftauchen"). Bei Ausfall der Kommunikation wird der Tauchgang sofort abgebrochen.'),
        H2('grundsaetze', 'Grundsätze & Grenzen'),
        KF(
          'Nur ausgebildete Feuerwehrtaucher, tauglich (G 31), regelmäßig geübt',
          'Immer mit Reservetaucher und Tauchereinsatzführer',
          'Tauchzeit, Tiefe und Luftvorrat streng überwachen',
          'Gefahren: Strömung, Kälte, Sicht null, Hindernisse, Verhängen'),
        CO('danger', 'Extreme Eigengefährdung', 'Tauchen unter Eis, in Strömung oder in verschmutztem/unübersichtlichem Wasser ist lebensgefährlich. Ohne Spezialausbildung, Ausrüstung und Absicherung wird nicht getaucht – die Wasserrettung von Land/Boot hat für die Regel-Feuerwehr Vorrang.'),
      ],
    },
  ],

};
