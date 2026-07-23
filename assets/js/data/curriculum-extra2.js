/* =========================================================================
   CURRICULUM-EXTRA-2 — Maximale Inhaltstiefe: je 2 weitere Lektionen pro Modul.
   Deckt die verbliebenen Kernpunkte jedes Themengebiets ab, sodass jedes
   Modul einem vollständigen Lehrgang entspricht.
   Wird in curriculum.js an die Module angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS_2 = {

  /* ------------------------------------------------------------------- A */
  'a-rechtsgrundlagen': [
    {
      id: 'a4', title: 'Dienstgrade, Laufbahn & Funktionen', duration: 20,
      blocks: [
        H2('unterschied', 'Dienstgrad, Funktion und Qualifikation'),
        P('Drei Begriffe werden oft verwechselt: Der <b>Dienstgrad</b> zeigt Ausbildungsstand und Zugehörigkeit, die <b>Funktion</b> ist die konkrete Aufgabe im Einsatz (z. B. Gruppenführer), die <b>Qualifikation</b> ist der nachgewiesene Lehrgang. Im Einsatz zählt die Funktion.'),
        DEF('Laufbahn der Freiwilligen Feuerwehr', 'Aufbauend: Feuerwehranwärter → Truppausbildung (Truppmann/-frau Teil 1 & 2) → Truppführer → Gruppenführer → Zugführer → Verbandsführer. Ergänzt um Fachlehrgänge (Atemschutz, Maschinist, Funk usw.).'),
        H2('lehrgaenge', 'Wichtige Lehrgänge'),
        TBL(['Lehrgang', 'Befähigt zu'],[
          ['Truppmann/-frau (MTA)', 'Grundtätigkeiten im Trupp'],
          ['Sprechfunker', 'Bedienung von Funkgeräten'],
          ['Atemschutzgeräteträger', 'Einsatz unter umluftunabhängigem Atemschutz'],
          ['Maschinist', 'Bedienung von Fahrzeug & Pumpe'],
          ['Truppführer', 'Führung eines Trupps'],
          ['Gruppenführer', 'Führung einer Gruppe/Staffel'],
          ['Zugführer', 'Führung eines Zuges'],
        ]),
        H2('funktionen', 'Funktionen kennzeichnen'),
        P('Funktionswesten und Helmkennzeichnungen machen Führungskräfte und Sonderfunktionen (Einsatzleiter, Gruppenführer, Atemschutzüberwachung, Sicherheitstrupp) im Einsatz sofort erkennbar – wichtig für die klare Führung.'),
        CO('tip', 'Ehrenamt & Wertschätzung', 'Über 1 Million Menschen engagieren sich in Deutschland ehrenamtlich in der Feuerwehr. Dienstgrade und Auszeichnungen (z. B. für langjährige Mitgliedschaft) drücken Anerkennung für dieses Engagement aus.'),
      ],
    },
    {
      id: 'a5', title: 'Datenschutz, Schweigepflicht & Öffentlichkeit', duration: 15,
      blocks: [
        H2('schweigen', 'Verschwiegenheit'),
        P('Einsatzkräfte erfahren im Einsatz oft Privates über Betroffene (Gesundheit, Wohnverhältnisse, persönliche Notlagen). Diese Informationen unterliegen der <b>Verschwiegenheitspflicht</b> – sie gehören nicht in Gespräche, soziale Medien oder an die Presse.'),
        CO('danger', 'Keine Einsatzfotos!', 'Fotos oder Videos von Einsätzen, Verletzten oder Verstorbenen dürfen nicht angefertigt und schon gar nicht verbreitet werden. Das verletzt Persönlichkeitsrechte, den Datenschutz (DSGVO) und kann strafbar sein – und beschädigt das Vertrauen in die Feuerwehr.'),
        H2('dsgvo', 'Datenschutz (DSGVO)'),
        UL(
          'Personenbezogene Daten nur für den Einsatzzweck verwenden',
          'Einsatzdokumentation vertraulich behandeln',
          'Keine Weitergabe an Unbefugte',
          'Sorgsamer Umgang mit digitalen Einsatzmitteln (Tablets, Apps)'),
        H2('presse', 'Verhalten gegenüber Presse & Öffentlichkeit'),
        P('Auskünfte an die Presse gibt nur die dafür bestimmte Stelle (Einsatzleitung, Pressesprecher). Einzelne Einsatzkräfte äußern sich <b>nicht</b> zu Ursache, Schuld oder Opfern. Ruhiges, professionelles Auftreten prägt das Bild der Feuerwehr in der Öffentlichkeit.'),
        CO('tip', 'Botschafter der Feuerwehr', 'Jede Einsatzkraft ist Aushängeschild ihrer Wehr – auch in Uniform in der Öffentlichkeit und in sozialen Medien. Respekt, Zurückhaltung und Hilfsbereitschaft stärken das Vertrauen der Bevölkerung.'),
      ],
    },
    {
      id: 'a6', title: 'Die Feuerwehr-Dienstvorschriften (FwDV 1–10)', duration: 18,
      blocks: [
        H2('was', 'Was sind FwDV?'),
        P('Feuerwehr-Dienstvorschriften (FwDV) sind bundesweit einheitliche Richtlinien für Taktik, Ausbildung und Einsatz. Sie werden von der Projektgruppe des <b>AFKzV</b> erstellt und den Ländern zur Einführung empfohlen. Sie schaffen einen einheitlichen Standard, damit Einheiten überörtlich reibungslos zusammenarbeiten.'),
        H2('liste', 'Übersicht FwDV 1 bis 10'),
        TBL(['FwDV', 'Titel', 'Status'],[
          ['1', 'Grundtätigkeiten – Lösch- und Hilfeleistungseinsatz', 'gültig'],
          ['2', 'Ausbildung der Freiwilligen Feuerwehr', 'gültig'],
          ['3', 'Einheiten im Lösch- und Hilfeleistungseinsatz', 'gültig (ersetzt 4 & 5)'],
          ['4', 'Die Gruppe im Löscheinsatz', 'aufgegangen in FwDV 3'],
          ['5', 'Der Zug im Löscheinsatz', 'aufgegangen in FwDV 3'],
          ['6', 'Taktische Einheiten und Verbände', 'in Planung / teils in FwDV 3'],
          ['7', 'Atemschutz', 'gültig'],
          ['8', 'Tauchen (Tauchereinsatz)', 'gültig'],
          ['9', 'Strahlenschutz (früher)', 'aufgegangen in FwDV 500'],
          ['10', 'Die tragbaren Leitern', 'gültig'],
        ]),
        CO('info', 'Weitere wichtige FwDV', 'Über die Nummern 1–10 hinaus gelten u. a. FwDV 100 (Führung und Leitung im Einsatz), FwDV 500 (ABC-Einsatz) sowie die PDV/DV 800/810 (Fernmelde-/Sprechfunkdienst).'),
        H2('abdeckung', 'Wo findest du das in der Akademie?'),
        UL(
          '<b>FwDV 1</b> (Grundtätigkeiten) → Module D (Geräte), S (Rettung), T (Wasser), U (Knoten)',
          '<b>FwDV 2</b> (Ausbildung) → Modul N (Maschinist) und die Laufbahn in Modul A',
          '<b>FwDV 3</b> (Einheiten) → Modul E (Löscheinsatz & Einsatzlehre)',
          '<b>FwDV 7</b> (Atemschutz) → Modul F',
          '<b>FwDV 8</b> (Tauchen) → Modul X (Wasserrettung)',
          '<b>FwDV 10</b> (tragbare Leitern) → Modul D, Lektion „Tragbare Leitern"',
          '<b>FwDV 100 / 500 / 810</b> → Module L / I / H'),
        CO('tip', 'Landesrecht beachten', 'FwDV sind Empfehlungen; die Länder führen sie ein – teils mit Abweichungen oder in älteren Fassungen. Maßgeblich sind stets die in deinem Bundesland eingeführten Vorschriften.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- B */
  'b-brennen-loeschen': [
    {
      id: 'b5', title: 'Wärmeübertragung & Brandausbreitung', duration: 20,
      blocks: [
        H2('arten', 'Drei Arten der Wärmeübertragung'),
        P('Ein Brand breitet sich aus, indem Wärme übertragen wird. Wer die Mechanismen kennt, erkennt Ausbreitungswege und stellt Riegel richtig.'),
        TBL(['Art', 'Prinzip', 'Beispiel im Einsatz'],[
          ['Wärmeleitung', 'Wärme wandert durch festen Stoff', 'heißer Stahlträger zündet Nachbarraum'],
          ['Wärmeströmung (Konvektion)', 'heiße Gase steigen auf/strömen', 'Rauch verraucht obere Geschosse'],
          ['Wärmestrahlung', 'Energie überträgt sich ohne Medium', 'Brand springt über die Straße auf Nachbarhaus'],
        ]),
        FIG('waermeuebertragung', 'Drei Arten der Wärmeübertragung – sie bestimmen die Ausbreitungswege eines Brandes.'),
        DEF('Wärmestrahlung', 'Elektromagnetische Übertragung von Wärme, wirkt geradlinig und ohne Trägermedium. Sie nimmt mit dem Quadrat der Entfernung ab – doppelter Abstand = ein Viertel der Strahlungsleistung. Deshalb schützt Abstand, und Riegelstellungen kühlen strahlungsbelastete Flächen.'),
        H2('flug', 'Flugfeuer & Funkenflug'),
        P('Bei Groß- und Dachstuhlbränden trägt der Aufwind brennende Teile (Flugfeuer) weit fort und entzündet entfernte Objekte. Der Einsatzleiter muss die windabgewandte Seite (Lee) beobachten und Brandwachen stellen.'),
        H2('brandausbreitung', 'Ausbreitung stoppen'),
        KF(
          'Ausbreitungsrichtung erkennen (Wind, Geometrie, Wärmewege)',
          'Riegelstellung zwischen Brand und gefährdetem Bereich',
          'Strahlungsbelastete Flächen kühlen',
          'Brandlasten begrenzen (was kann noch zünden?)'),
      ],
    },
    {
      id: 'b6', title: 'Explosionen, Gase & Staubexplosionen', duration: 20,
      blocks: [
        H2('grundlagen', 'Wann es explosiv wird'),
        P('Eine Explosion ist eine sehr schnelle Verbrennung mit plötzlicher Druckwelle. Voraussetzung ist ein zündfähiges Gemisch aus brennbarem Stoff (Gas, Dampf oder Staub) und Luft innerhalb der Explosionsgrenzen plus Zündquelle.'),
        DEF('Explosionsgrenzen (UEG/OEG)', 'Nur zwischen unterer (UEG) und oberer Explosionsgrenze (OEG) ist ein Gemisch zündfähig. Darunter „zu mager", darüber „zu fett". Beim Lüften/Verdünnen kann ein zu fettes Gemisch den zündfähigen Bereich durchlaufen – Vorsicht!'),
        FIG('explosionsgrenzen', 'Zündfähig ist ein Gemisch nur zwischen UEG und OEG – darunter zu mager, darüber zu fett.'),
        H2('gase', 'Gefahren durch Gase'),
        TBL(['Eigenschaft', 'Bedeutung im Einsatz'],[
          ['leichter als Luft (z. B. Erdgas)', 'sammelt sich oben, steigt auf'],
          ['schwerer als Luft (z. B. Propan)', 'sammelt sich unten, fließt in Keller/Gruben'],
          ['Druckgasflaschen', 'BLEVE-Gefahr bei Erwärmung – kühlen, Abstand'],
        ]),
        CO('danger', 'BLEVE', 'Boiling Liquid Expanding Vapour Explosion: Eine erwärmte Druckgasflasche/Tank kann bersten und den Inhalt schlagartig als Feuerball freisetzen. Behälter aus sicherer Deckung kühlen, großräumig absperren – nie in der Flucht­linie eines Ventils stehen.'),
        H2('staub', 'Staubexplosionen'),
        P('Fein verteilter brennbarer Staub (Mehl, Holz, Metall, Zucker) kann in Luft explodieren – z. B. in Mühlen, Silos, Sägewerken. Eine erste Zündung wirbelt weiteren Staub auf und löst oft eine verheerende Folgeexplosion aus.'),
        CO('warn', 'Nicht aufwirbeln', 'In staubbelasteten Bereichen keinen Staub aufwirbeln (kein Vollstrahl, vorsichtiges Vorgehen), Zündquellen konsequent vermeiden. Ex-Messung und Fachkräfte hinzuziehen.'),
      ],
    },
  ],

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

  /* ------------------------------------------------------------------- E */
  'e-loescheinsatz': [
    {
      id: 'e4', title: 'Menschenrettung & systematische Personensuche', duration: 20,
      blocks: [
        H2('prioritaet', 'Menschenrettung zuerst'),
        P('Die Rettung von Menschen aus Lebensgefahr steht über allem. Sie beginnt oft schon parallel zur Brandbekämpfung – der Angriffstrupp geht mit dem Auftrag „Menschenrettung" vor.'),
        H2('suche', 'Systematisch absuchen'),
        P('In verrauchten Räumen wird methodisch gesucht, damit kein Bereich vergessen wird und der Trupp den Rückweg findet.'),
        STEPS(
          'An einer Wand orientieren und diese konsequent halten (Rechts- oder Linkshand-Regel)',
          'Raum absuchen: Wände, dann Fläche (unter Fenstern, hinter Türen, in Betten/Schränken)',
          'Gefundene Personen markieren/melden und ins Freie bringen',
          'Abgesuchte Räume kennzeichnen',
          'Über denselben Weg (Wandkontakt/Schlauch) zurück'),
        CO('tip', 'Wo Menschen sich verstecken', 'Besonders Kinder verkriechen sich aus Angst: unter Betten, in Schränken, hinter Vorhängen, in Ecken. Auch dort gezielt suchen.'),
        H2('transport', 'Rettungsmethoden'),
        UL(
          '<b>Gehende Person:</b> führen/stützen, Fluchthaube aufsetzen',
          '<b>Nicht gehfähige Person:</b> Rautek-Rettungsgriff, Rettungstuch, Trage',
          '<b>Über Leitern:</b> nur geübt und gesichert',
          'Priorität: raus aus dem Gefahrenbereich, dann medizinische Versorgung'),
        CO('danger', 'Eigenschutz bleibt Bedingung', 'Auch die dringendste Menschenrettung erfolgt nur mit Atemschutz, Sicherheitstrupp und gesichertem Rückweg. Ein verunglückter Retter kann niemanden mehr retten.'),
      ],
    },
    {
      id: 'e5', title: 'Umweltschutz & Löschwasserrückhaltung', duration: 15,
      blocks: [
        H2('problem', 'Kontaminiertes Löschwasser'),
        P('Löschwasser nimmt Ruß, Brandrückstände, Öle und Chemikalien auf. Gelangt es ungehindert in Boden, Kanalisation oder Gewässer, kann es erhebliche Umweltschäden verursachen – deshalb ist Löschwasserrückhaltung Teil des Einsatzes.'),
        KF(
          'Löschwasser möglichst zurückhalten (Auffangen, Eindeichen)',
          'Kanaleinläufe abdichten/schützen',
          'Gewässer und Trinkwasser besonders schützen',
          'Umweltbehörde/Fachberater bei größeren Mengen einbinden'),
        H2('sparsam', 'Wasser gezielt einsetzen'),
        P('Modernes Löschen heißt: mit möglichst wenig Wasser den größten Effekt erzielen (Hohlstrahlrohr, Impulslöschen). Das reduziert Wasserschaden und Umweltbelastung – „so viel wie nötig, so wenig wie möglich".'),
        CO('warn', 'X in der Kemler-Zahl beachten', 'Bei Gefahrgut mit der Kennzeichnung „X" darf kein Wasser eingesetzt werden (gefährliche Reaktion). Auch sonst gilt: bei Chemikalien Rücksprache und geeignete Löschmittel wählen.'),
        H2('nachhaltig', 'Nachhaltige Einsatzführung'),
        P('Umweltschutz ist Führungsaufgabe: Schadstoffausbreitung erkennen, Ausbreitung eindämmen, Fachkräfte hinzuziehen und die Einsatzstelle geordnet übergeben – der Schutz der Umwelt gehört zum Schutzziel „Schützen".'),
      ],
    },
    {
      id: 'e6', title: 'Kommandos & Ordnung im Einsatz (FwDV 3)', duration: 18,
      blocks: [
        H2('warum', 'Warum feste Kommandos?'),
        P('Die FwDV 3 regelt nicht nur die Aufgaben der Funktionen, sondern auch eine <b>einheitliche Kommandosprache</b> und die Ordnung der Einheit. Feste Kommandos verhindern Missverständnisse – jeder weiß sofort, was zu tun ist, unabhängig von der Heimatwehr.'),
        H2('ordnung', 'Antrete- und Sitzordnung'),
        UL(
          '<b>Antreteordnung:</b> feste Reihenfolge, in der die Mannschaft am Fahrzeug antritt – der Einheitsführer hat sofort den Überblick.',
          '<b>Sitzordnung:</b> jeder Funktion ist ein fester Sitzplatz im Fahrzeug zugeordnet (Melder, Trupps, Maschinist).',
          '<b>Aufsitzen / Absitzen:</b> geordnetes Ein- und Aussteigen auf Kommando – zur sicheren (verkehrsabgewandten) Seite.'),
        H2('kommandos', 'Typische Einsatzkommandos'),
        TBL(['Kommando', 'Bedeutung'],[
          ['„…Trupp – zum Einsatz fertig!"', 'Trupp rüstet sich aus und meldet Bereitschaft'],
          ['„Wasser marsch!"', 'Wasser wird auf die Leitung gegeben'],
          ['„Wasser halt!"', 'Wasserabgabe stoppen'],
          ['„Zurück, Marsch – zurück!"', 'geordneter Rückzug der Kräfte'],
          ['„Zum Angriff – fertig!" / „Vor!"', 'Angriff vortragen'],
        ]),
        DEF('Aufbau eines Kommandos', 'Ein Kommando besteht meist aus Ankündigung (wer/was) und Ausführung (das eigentliche Signalwort). Die Ausführung wird betont und deutlich gegeben – erst auf das Ausführungswort wird gehandelt.'),
        H2('befehl', 'Befehl vs. Kommando'),
        P('Der <b>Einsatzbefehl</b> des Gruppenführers (Einheit–Auftrag–Mittel–Ziel–Weg) legt fest, <i>was</i> ein Trupp tun soll. <b>Kommandos</b> steuern die <i>Ausführung</i> von Grundtätigkeiten (z. B. „Wasser marsch"). Beide greifen ineinander.'),
        CO('tip', 'Klarheit rettet Zeit', 'Klare, laute, eindeutige Kommandos – kurz und in der genormten Form. Rückfragen kosten im Einsatz wertvolle Sekunden. Wer die Kommandos beherrscht, arbeitet in jeder Einheit sofort mit.'),
      ],
    },
    {
      id: 'e7', title: 'Kommando-Referenz: Löschangriff Schritt für Schritt', duration: 22,
      blocks: [
        H2('ablauf', 'Der Löschangriff der Gruppe im Ablauf'),
        P('Diese Referenz zeigt den typischen Ablauf eines Löschangriffs der Gruppe (1/8) nach FwDV 3 – vom Eintreffen bis zum Wasser am Rohr. Die genaue Wortwahl kann je Land leicht abweichen; das Prinzip ist bundesweit gleich.'),
        STEPS(
          'Gruppenführer: „Absitzen!" – die Mannschaft sitzt zur sicheren Seite ab und tritt in Antreteordnung an.',
          'Erkundung durch den Gruppenführer, Lagebeurteilung, Entschluss.',
          'Entwicklungs-/Einsatzbefehl an die Trupps (Einheit – Auftrag – Mittel – Ziel – Weg).',
          'Wassertrupp stellt die Wasserversorgung her (Pumpe → Verteiler).',
          'Schlauchtrupp verlegt die Angriffsleitung (Verteiler → Angriffstrupp).',
          'Angriffstrupp geht zum Einsatz vor und meldet „Angriffstrupp zum Angriff fertig".',
          'Am Verteiler: „Erstes Rohr – Wasser marsch!"',
        ),
        H2('wasserversorgung', 'Kommandos der Wasserversorgung'),
        TBL(['Kommando', 'Bedeutung'],[
          ['„Fertig zum Ansaugen!"', 'Saugleitung ist gekuppelt und zu Wasser gebracht'],
          ['„Saugleitung hoch!" / „…zu Wasser!"', 'Saugleitung anheben bzw. einlegen'],
          ['„Wasser marsch!"', 'Wasser auf die (Zubringer-)Leitung geben'],
          ['„Verteiler auf – erstes Rohr!"', 'Abgang am Verteiler für die erste C-Leitung öffnen'],
          ['„Wasser halt!"', 'Wasserabgabe sofort stoppen'],
        ]),
        H2('angriff', 'Kommandos am Rohr & Rückzug'),
        TBL(['Kommando', 'Bedeutung'],[
          ['„…Trupp – zum Einsatz fertig!"', 'Trupp rüstet sich vollständig aus, meldet Bereitschaft'],
          ['„Zum Angriff – fertig!" / „Vor!"', 'Angriff vortragen / vorgehen'],
          ['„Rohr halt – Wasser halt!"', 'Strahlrohr schließen, Wasser stoppen'],
          ['„Zurück, Marsch – zurück!"', 'Geordneter Rückzug der Kräfte'],
          ['„Zum Abmarsch – fertig!"', 'Geräte verlasten, Einheit macht sich abmarschbereit'],
        ]),
        H2('th', 'Kommandos bei der technischen Hilfeleistung'),
        P('Auch bei der THL gelten klare Ansagen: Der Geräteführer kündigt jede kraftbetätigte Bewegung an (z. B. „Spreizer öffnet", „Schere schneidet"), damit alle im Arbeitsbereich vorbereitet sind. Der Patientenschutz meldet Auffälligkeiten sofort.'),
        H2('grundsatz', 'Grundsätze der Kommandogabe'),
        KF(
          'Ankündigung + betontes Ausführungswort – gehandelt wird erst auf die Ausführung',
          'Laut, deutlich, eindeutig und in genormter Form',
          'Empfang wichtiger Kommandos bestätigen („verstanden")',
          'Sicherheitsrelevante Kommandos (Rückzug) haben Vorrang und werden weitergegeben'),
        CO('danger', 'Rückzug geht immer', 'Das Kommando „Zurück, Marsch – zurück!" bzw. ein vereinbartes Rückzugssignal muss jede Kraft sofort und ohne Rückfrage befolgen – es rettet im Ernstfall Leben.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- F */
  'f-atemschutz': [
    {
      id: 'f5', title: 'Gerätevarianten, Fluchthauben & Filter', duration: 18,
      blocks: [
        H2('einteilung', 'Einteilung der Atemschutzgeräte'),
        P('Atemschutz teilt sich grundsätzlich in zwei Familien: <b>umluftabhängig</b> (Filtergeräte – reinigen die Umgebungsluft) und <b>umluftunabhängig</b> (Isoliergeräte – eigene Atemluft).'),
        TBL(['Typ', 'Prinzip', 'Grenze'],[
          ['Filtergerät', 'Filter reinigt Umgebungsluft', 'nur bei genug O₂ und bekannter, gefilterter Gefahr'],
          ['Pressluftatmer (Behältergerät)', 'Druckluft aus Flasche', 'Standard der Feuerwehr, zeitlich begrenzt'],
          ['Regenerationsgerät', 'chemische/O₂-Regeneration', 'lange Einsatzzeiten (Grubenwehr, Spezial)'],
        ]),
        CO('danger', 'Filter ≠ Universalschutz', 'Ein Filtergerät versagt bei Sauerstoffmangel und bei Stoffen, für die der Filter nicht ausgelegt ist. Im Brandeinsatz mit unbekanntem Rauch gilt immer: umluftunabhängiger Atemschutz.'),
        H2('flucht', 'Fluchthauben & Selbstretter'),
        P('Fluchthauben (Brandfluchthauben) schützen zu rettende Personen kurzzeitig vor Rauch beim Verlassen des Gebäudes. Sie sind Rettungsmittel für Betroffene – kein Ersatz für den PA der Einsatzkraft.'),
        H2('lungenautomat', 'Lungenautomat & Maske'),
        UL(
          'Dichtsitz der Maske ist entscheidend (Bart/Brille können stören)',
          'Überdrucksysteme verhindern Schadstoffeintritt bei Leckage',
          'Vor Einsatz: Einsatzkurzprüfung, nach Einsatz: Reinigung & Prüfung',
          'Maske und Lungenautomat sind persönlich anzupassen'),
      ],
    },
    {
      id: 'f6', title: 'Atemschutzunfall, Rettung & Zusammenarbeit', duration: 20,
      blocks: [
        H2('ursachen', 'Wie es zum Notfall kommt'),
        UL(
          'Orientierungsverlust in Rauch/Dunkelheit',
          'Luftmangel durch Fehleinschätzung oder Gerätestörung',
          'Einschluss durch Einsturz, verklemmte Türen, Verhängen',
          'Gesundheitliche Probleme (Kreislauf, Überhitzung)',
          'Absturz, Durchsturz durch geschwächte Böden/Decken'),
        H2('mayday', 'Notfallmanagement'),
        STEPS(
          'Notruf „Mayday" absetzen: Wer, wo, was ist passiert, Luftvorrat',
          'Ruhe bewahren, Luft sparen (ruhig atmen), Position halten',
          'Bemerkbar machen: rufen, klopfen, Lampe zur Decke',
          'Atemschutzüberwachung alarmiert sofort den Sicherheitstrupp',
          'Sicherheitstrupp geht mit Rettungsausrüstung/Reserveluft vor'),
        DEF('Rückzugssignal', 'Ein vereinbartes Signal (Funk, akustisch) für den sofortigen Rückzug aller Trupps – z. B. bei drohendem Einsturz oder Lageverschlechterung. Jeder Geräteträger muss es kennen und sofort befolgen.'),
        H2('teamwork', 'Zusammenarbeit im Trupp (CRM-Gedanke)'),
        KF(
          'Klare Absprachen und ständige Kommunikation',
          'Gegenseitige Kontrolle (Druck, Zustand, Orientierung)',
          'Aufmerksamkeit teilen – nicht beide auf dieselbe Aufgabe fixieren',
          'Entscheidungen laut aussprechen, Zweifel offen ansprechen'),
        CO('tip', 'Der Trupp ist eine Einheit', 'Man geht gemeinsam vor und gemeinsam zurück. Ein Trupp lässt niemanden zurück – gegenseitiges Vertrauen und Aufmerksamkeit sind die beste Lebensversicherung.'),
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

  /* ------------------------------------------------------------------- H */
  'h-sprechfunk': [
    {
      id: 'h4', title: 'Rufnamen, Funkverkehrskreise & Kanäle', duration: 16,
      blocks: [
        H2('rufnamen', 'Rufnamensystematik'),
        P('Rufnamen identifizieren jede Funkstelle eindeutig. Typisch ist der Aufbau aus <b>Kennwort + Ort + Kennzahl</b>, z. B. „Florian Musterstadt 1/44/1". „Florian" steht bundesweit für die Feuerwehr, „Rotkreuz" für den DRK-Rettungsdienst usw.'),
        DEF('Funktionskennzahl', 'Teil des Rufnamens, der Fahrzeugtyp/Funktion verschlüsselt (z. B. 44 = Löschgruppenfahrzeug). So ist am Rufnamen erkennbar, wer spricht – wichtig für die taktische Übersicht.'),
        H2('kreise', 'Funkverkehrskreise'),
        P('Um Kanäle nicht zu überlasten, teilt man die Kommunikation in Kreise: <b>Führungskreis</b> (Leitstelle ↔ Einheiten) und <b>Einsatzstellenfunk</b> (Kräfte vor Ort, meist DMO). So bleibt jeder Kanal frei für seinen Zweck.'),
        H2('kanal', 'Kanaltrennung & Betriebsarten'),
        UL(
          '<b>Getrenntverkehr:</b> Senden und Empfangen auf verschiedenen Frequenzen (Relaisbetrieb)',
          '<b>Wechselverkehr:</b> Senden und Empfangen abwechselnd auf einer Frequenz',
          '<b>Gegenverkehr:</b> gleichzeitiges Senden/Empfangen (wie Telefon)',
          'Im Digitalfunk: Gesprächsgruppen statt fester Kanäle'),
        CO('tip', 'Kanaldisziplin', 'Wer auf dem richtigen Kreis funkt und den Führungskreis frei hält, sorgt dafür, dass wichtige Meldungen durchkommen. Einsatzstellenfunk bleibt lokal (DMO).'),
      ],
    },
    {
      id: 'h5', title: 'Kartenkunde, Koordinaten & Standortmeldung', duration: 16,
      blocks: [
        H2('warum', 'Sich verständlich verorten'),
        P('Eine präzise Standortangabe entscheidet, wie schnell Hilfe kommt. Neben Adressen nutzt die Feuerwehr Kartenkoordinaten und Orientierungspunkte.'),
        H2('koordinaten', 'Koordinaten'),
        UL(
          '<b>UTM/Gauß-Krüger:</b> metrische Gitterkoordinaten auf Karten',
          '<b>Geografische Koordinaten:</b> Breite/Länge (GPS)',
          '<b>what3words / Kachelsysteme:</b> zunehmend zur Standortangabe genutzt',
          '<b>Kilometrierung/Stationszeichen</b> an Autobahnen und Bahnstrecken'),
        H2('karte', 'Kartenkunde'),
        P('Topografische Karten zeigen Gelände, Wege, Gewässer und Löschwasserstellen. Maßstab und Legende richtig lesen; im Vegetationsbrand sind Karten (und Drohnenbilder) zur Lageübersicht entscheidend.'),
        H2('meldung', 'Standortmeldung'),
        STEPS(
          'Eindeutigen Bezugspunkt nennen (Adresse, Kreuzung, km-Angabe)',
          'Anfahrtsweg/Zufahrt beschreiben (für nachrückende Kräfte)',
          'Besonderheiten (Sperrungen, Engstellen) melden',
          'Bei unklarer Lage Koordinaten/GPS durchgeben'),
        CO('info', 'Digitale Ortung', 'Moderne Leitstellen und Einsatz-Apps orten Anrufer und Einheiten per GPS. Trotzdem bleibt die klare, gesprochene Standortangabe wichtig – Technik kann ausfallen.'),
      ],
    },
    {
      id: 'h6', title: 'IuK im Einsatz (FwDV 800) & die Funkvorschriften', duration: 18,
      blocks: [
        H2('fwdv800', 'FwDV 800 – Informations- und Kommunikationstechnik'),
        P('Während die Funkvorschrift die <i>Sprechregeln</i> festlegt, regelt die <b>FwDV 800</b> die <b>Planung, das Bereitstellen und das Betreiben der Informations- und Kommunikationstechnik (IuK)</b> im Einsatz. Sie sorgt dafür, dass Führung und Einheiten zuverlässig kommunizieren können – als Teil der Führungsmittel (vgl. FwDV 100).'),
        H2('iuk', 'Was zur IuK gehört'),
        UL(
          '<b>Kommunikationsstruktur:</b> wer spricht mit wem, welche Kreise/Gruppen (Führungs- und Einsatzstellenfunk)',
          '<b>Führungsmittel:</b> Funk, Telefon, IuK-Fachdienst, Einsatzleitsysteme',
          '<b>IuK-Einheiten/-Fachpersonal</b> bauen bei größeren Lagen die Kommunikation auf und betreiben sie',
          '<b>Dokumentation:</b> Einsatztagebuch, Nachrichtenvordrucke, Statusmeldungen'),
        DEF('IuK als Führungsmittel', 'Ohne funktionierende Kommunikation keine Führung. Bei Großlagen wird die IuK bewusst geplant und durch Fachpersonal betrieben (Aufbau von Relais/Gruppen, Anbindung der Abschnitte, der Leitstelle und anderer Organisationen).'),
        H2('vorschriften', 'Die Funkvorschriften: DV/PDV 810 & 800'),
        TBL(['Vorschrift', 'Regelt'],[
          ['FwDV/DV 800', 'IuK im Einsatz planen, bereitstellen, betreiben'],
          ['PDV/DV 810', 'Sprech- und Datenfunkverkehr – gemeinsame Vorschrift von Polizei und Feuerwehr'],
        ]),
        P('Die <b>PDV/DV 810</b> ist eine <b>gemeinsame Vorschrift von Polizei und Feuerwehr (BOS)</b> und regelt den eigentlichen Sprech- und Datenfunkverkehr: Betriebsarten, Rufnamen, Nachrichtenaufbau, Buchstabieralphabet und den Digitalfunk. Sie ist die Grundlage der Lektionen zum Sprechfunk in diesem Modul.'),
        CO('tip', 'Zusammenspiel', 'Merke: FwDV 100 sagt, <i>dass</i> Führung Kommunikation braucht; FwDV 800 organisiert die <i>Technik/IuK</i> dafür; die DV 810 legt fest, <i>wie</i> gefunkt wird. Alle drei greifen ineinander.'),
      ],
    },
    {
      id: 'h7', title: 'Digitalfunk vertieft: Gruppen, OPTA & Betriebsabwicklung', duration: 22,
      blocks: [
        H2('betriebsarten', 'TMO und DMO im Detail'),
        P('Der BOS-Digitalfunk (TETRA) kennt zwei Grundbetriebsarten. Wer sie sicher unterscheidet, wählt im Einsatz die richtige.'),
        TBL(['Betriebsart', 'Merkmal', 'Typischer Einsatz'],[
          ['TMO (Netzbetrieb)', 'über Basisstationen, große Reichweite, Gesprächsgruppen', 'überörtlich, Leitstelle ↔ Einheiten'],
          ['DMO (Direktbetrieb)', 'Gerät-zu-Gerät ohne Netz, begrenzte Reichweite', 'Einsatzstellenfunk vor Ort'],
          ['DMO-Repeater/Gateway', 'verlängert DMO bzw. koppelt DMO an das Netz', 'Reichweite in Gebäuden/Tälern'],
        ]),
        H2('gruppen', 'Gesprächsgruppen & Adressierung'),
        DEF('Rufgruppe (TMO) / Betriebsgruppe (DMO)', 'Statt fester Kanäle nutzt der Digitalfunk Gruppen. Alle Endgeräte, die dieselbe Gruppe geschaltet haben, hören und sprechen miteinander. Ein Gruppenwechsel ordnet ein Gerät einem anderen Kommunikationsraum zu.'),
        UL(
          '<b>OPTA</b> (Operativ-Taktische Adresse): sprechender Name des Geräts/der Funktion, wird im Display angezeigt.',
          '<b>ISSI:</b> individuelle technische Teilnehmerkennung des Endgeräts.',
          '<b>Endgeräte:</b> HRT (Handfunk), MRT (Fahrzeugfunk), FRT (feste Station).',
          '<b>Einzel-/Gruppenruf:</b> gezielt an einen Teilnehmer oder an die ganze Gruppe.'),
        H2('status', 'Statuskatalog (FMS/Statusmeldungen)'),
        P('Statusmeldungen übermitteln den Zustand eines Fahrzeugs per Tastendruck an die Leitstelle – schnell und kanalschonend. Gängige Status:'),
        TBL(['Status', 'Bedeutung'],[
          ['1', 'Einsatzbereit über Funk'],
          ['2', 'Einsatzbereit auf der Wache'],
          ['3', 'Einsatz übernommen (Anfahrt)'],
          ['4', 'Ankunft an der Einsatzstelle'],
          ['5', 'Sprechwunsch'],
          ['6', 'Nicht einsatzbereit'],
          ['0', 'Priorisierter (Not-)Sprechwunsch'],
        ]),
        H2('abwicklung', 'Betriebsabwicklung & Notruf'),
        STEPS(
          'Gerät einschalten, korrekte Gruppe schalten (TMO-Rufgruppe bzw. DMO-Betriebsgruppe)',
          'Vor dem Sprechen prüfen, ob die Gruppe frei ist',
          'Nachricht kurz und in genormter Form abwickeln (Rufname/OPTA nennen)',
          'Statusmeldungen zur Lageübermittlung nutzen (3 = Anfahrt, 4 = Ankunft …)',
          'Im Notfall die Notruftaste – sie schaltet einen priorisierten Notruf',
        ),
        CO('warn', 'Gruppe prüfen', 'Die häufigste Fehlerquelle im Digitalfunk: falsch geschaltete Gruppe – dann hört einen niemand. Vor dem Einsatz die richtige Rufgruppe/Betriebsgruppe kontrollieren und bei Gruppenwechsel bestätigen.'),
        CO('tip', 'Sicherheit & Rückfallebene', 'Digitalfunk ist verschlüsselt und abhörsicher, aber netz-/akkuabhängig. Fällt das Netz aus, wird auf DMO gewechselt; als letzte Rückfallebene dienen Melder, Telefon und Sichtzeichen.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- I */
  'i-gefahrgut': [
    {
      id: 'i4', title: 'Chemische Grundlagen & Ausbreitung', duration: 20,
      blocks: [
        H2('zustand', 'Zustandsformen & Ausbreitung'),
        P('Gefahrstoffe verhalten sich je nach Zustandsform sehr unterschiedlich – das bestimmt Ausbreitung und Schutzmaßnahmen.'),
        TBL(['Form', 'Verhalten'],[
          ['Gas/Dampf', 'breitet sich in Luft aus (Windrichtung!), teils schwerer/leichter als Luft'],
          ['Flüssigkeit', 'fließt in Senken/Kanäle, bildet Dämpfe'],
          ['Feststoff/Staub', 'Verwehung, Kontaktgefahr, Staubexplosion'],
        ]),
        H2('eigenschaften', 'Gefährliche Eigenschaften'),
        UL(
          '<b>Brennbar/entzündbar:</b> Flammpunkt, Zündtemperatur beachten',
          '<b>Giftig/gesundheitsschädlich:</b> Aufnahme über Atmung, Haut, Verschlucken',
          '<b>Ätzend/reizend:</b> Zerstörung von Gewebe/Material',
          '<b>Oxidierend:</b> fördert Brände, reagiert heftig',
          '<b>Umweltgefährlich:</b> Gewässer-/Bodenschäden'),
        H2('dichte', 'Dichte & Wasserlöslichkeit'),
        DEF('Relative Dichte & Löslichkeit', 'Ob ein Stoff auf Wasser schwimmt oder sinkt und ob er sich löst, entscheidet über die Ausbreitung im Gewässer und die Löschmittelwahl. Diese Angaben stehen im Nachschlagewerk (z. B. Hommel) zur UN-Nummer.'),
        CO('warn', 'Nachschlagen statt raten', 'Im Zweifel niemals raten: Über UN-Nummer im Gefahrgut-Nachschlagewerk (Hommel, ERICARD, Einsatz-App) die Stoffdaten und empfohlenen Maßnahmen ermitteln – oder Fachberater/Giftinformationszentrale hinzuziehen.'),
      ],
    },
    {
      id: 'i5', title: 'Messen, Nachweisen & Einsatzhygiene', duration: 18,
      blocks: [
        H2('spuren', 'Spür- und Messtrupp'),
        P('Der Spür-/Messtrupp bestimmt Art und Ausdehnung der Gefahr. Erst mit Messwerten lassen sich Gefahrenbereich und Schutzstufe sicher festlegen.'),
        TBL(['Messgröße', 'Gerät/Methode'],[
          ['Explosionsgefahr', 'Ex-Messgerät (% UEG)'],
          ['Sauerstoff', 'O₂-Sensor'],
          ['Giftige Gase', 'Prüfröhrchen, elektrochemische Sensoren, PID'],
          ['Radioaktivität', 'Dosisleistungsmessgerät'],
          ['pH/Stoffart', 'Indikatorpapier, Teststäbchen'],
        ]),
        H2('zonen', 'Gefahrenbereich festlegen'),
        P('Auf Basis der Messwerte werden die Zonen (Gefahren-, Absperr-, sicherer Bereich) festgelegt. Der Zugang erfolgt nur über die Dekon-Stelle. Windrichtung laufend beobachten.'),
        H2('hygiene', 'Einsatz- & Kontaminationshygiene'),
        STEPS(
          'Nur mit passender Schutzstufe in den Gefahrenbereich',
          'Kontakt mit dem Stoff minimieren, nichts verschleppen',
          'Beim Verlassen: Dekontamination (grob → fein)',
          'Schutzkleidung/Geräte fachgerecht dekontaminieren oder entsorgen',
          'Betroffene ärztlich kontrollieren, dokumentieren'),
        CO('danger', 'Verschleppung vermeiden', 'Kontaminierte Kräfte und Geräte dürfen den sicheren Bereich nur nach Dekontamination betreten. Sonst verschleppt man den Gefahrstoff in Fahrzeuge, Wache und nach Hause.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- J */
  'j-erste-hilfe': [
    {
      id: 'j4', title: 'Internistische Notfälle: Herz & Kreislauf', duration: 20,
      blocks: [
        H2('herzinfarkt', 'Herzinfarkt'),
        P('Beim Herzinfarkt verschließt sich ein Herzkranzgefäß – Herzmuskel stirbt ab. Jede Minute zählt.'),
        KF(
          'Starker Druck/Schmerz in der Brust, evtl. Ausstrahlung (Arm, Kiefer, Rücken)',
          'Enge-/Vernichtungsgefühl, Angst, Atemnot, Blässe, kalter Schweiß',
          'Bei Frauen/älteren Menschen oft untypisch (Übelkeit, Oberbauch)'),
        STEPS(
          'Notruf 112 (Verdacht Herzinfarkt nennen)',
          'Beruhigen, Oberkörper erhöht lagern, enge Kleidung öffnen',
          'Keine Anstrengung zulassen, Patient nicht allein lassen',
          'Auf Herz-Kreislauf-Stillstand vorbereitet sein (AED holen)'),
        H2('schlaganfall', 'Schlaganfall – der FAST-Test'),
        MNE([{l:'F',w:'Face'},{l:'A',w:'Arms'},{l:'S',w:'Speech'},{l:'T',w:'Time'}],
          'Face: hängt ein Mundwinkel? Arms: sinkt ein Arm ab? Speech: verwaschene Sprache? Time: sofort 112 – Zeit ist Hirn.'),
        FIG('fast', 'Der FAST-Test erkennt einen Schlaganfall schnell – bei Auffälligkeit sofort den Notruf 112.'),
        H2('weitere', 'Weitere internistische Notfälle'),
        TBL(['Notfall', 'Erste Hilfe'],[
          ['Krampfanfall', 'Umgebung sichern, nichts in den Mund, danach betreuen'],
          ['Unterzuckerung', 'wenn wach & schluckfähig: Zucker geben'],
          ['Asthmaanfall', 'aufrecht sitzen, eigenes Spray, beruhigen'],
          ['Kollaps/Ohnmacht', 'Beine hoch, Atmung prüfen'],
        ]),
        CO('tip', 'Im Zweifel 112', 'Bei unklaren, aber bedrohlichen Symptomen lieber einmal zu viel den Notruf wählen. Der Disponent hilft weiter und schickt die passende Hilfe.'),
      ],
    },
    {
      id: 'j5', title: 'Thermische Notfälle, Vergiftungen & Verätzungen', duration: 18,
      blocks: [
        H2('verbrennung', 'Verbrennungen'),
        STEPS(
          'Hitzequelle entfernen, brennende Kleidung löschen (Decke, Wasser)',
          'Kleinflächig kurz mit handwarmem Wasser kühlen (nicht großflächig – Unterkühlung!)',
          'Wunde keimfrei bedecken, nicht öffnen/salben',
          'Bei großflächigen/tiefen Verbrennungen: Notruf, Schock behandeln'),
        CO('warn', 'Kühlen mit Maß', 'Nur kleine Flächen kurz kühlen. Großflächiges Kühlen droht mit gefährlicher Unterkühlung – besonders bei Kindern. Wärmeerhalt hat Vorrang.'),
        H2('rauchgas', 'Rauchgasvergiftung'),
        P('Rauchgas (v. a. CO, Blausäure) vergiftet auch, wenn die Person äußerlich unverletzt wirkt. Betroffene aus dem Gefahrenbereich bringen, Frischluft, Notruf – auch scheinbar Erholte ärztlich vorstellen (verzögerte Symptome).'),
        H2('vergiftung', 'Vergiftungen'),
        UL(
          'Giftinformationszentrale kontaktieren (Beratung rund um die Uhr)',
          'Reste/Verpackung sichern (Identifikation)',
          'Kein Erbrechen erzwingen (Ausnahmen nur nach ärztlicher Anweisung)',
          'Atemwege sichern, Vitalfunktionen überwachen'),
        H2('veraetzung', 'Verätzungen'),
        P('Bei Säuren/Laugen auf Haut/Auge: sofort mit viel Wasser spülen (Auge von innen nach außen, mind. 10–15 Min.), kontaminierte Kleidung entfernen, Notruf. Eigenschutz (Handschuhe) beachten.'),
        CO('danger', 'Auge spülen', 'Verätzungen am Auge sind Notfälle: sofort und ausgiebig mit Wasser spülen und den Kopf so halten, dass die Spülflüssigkeit nicht ins gesunde Auge läuft.'),
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

  /* ------------------------------------------------------------------- L */
  'l-fuehrung-fwdv100': [
    {
      id: 'l4', title: 'Einsatzabschnitte & Zusammenwirken', duration: 20,
      blocks: [
        H2('abschnitte', 'Gliederung in Einsatzabschnitte'),
        P('Wächst eine Lage, gliedert die Einsatzleitung sie in <b>Einsatzabschnitte</b> – räumlich (z. B. „Abschnitt Nord/Süd") oder nach Aufgabe (z. B. „Menschenrettung", „Wasserversorgung", „Riegelstellung"). Jeder Abschnitt hat einen eigenverantwortlichen Leiter.'),
        KF(
          'Entlastet die Einsatzleitung (kleinere Führungsspanne)',
          'Klare Verantwortung und kurze Wege vor Ort',
          'Abschnittsleiter führen selbstständig im Rahmen des Auftrags',
          'Die Einsatzleitung führt die Abschnittsleiter, nicht einzelne Trupps'),
        H2('zusammenwirken', 'Zusammenwirken mit anderen'),
        TBL(['Partner', 'Zusammenarbeit'],[
          ['Rettungsdienst', 'medizinische Versorgung, gemeinsame Rettung'],
          ['Polizei', 'Absperrung, Verkehr, Ermittlung'],
          ['THW', 'technische Großhilfe, Statik, Logistik'],
          ['Verwaltungsstab/Krisenstab', 'übergeordnete Koordination bei Großlagen'],
          ['Fachberater/Energieversorger', 'Spezialwissen (Strom, Gas, Gefahrstoffe)'],
        ]),
        DEF('Politisch-administrativ vs. operativ-taktisch', 'Bei Großschadenslagen führt der operativ-taktische Stab (Feuerwehr/Einsatzleitung) den Einsatz, der Verwaltungs-/Krisenstab trifft übergeordnete Entscheidungen (Ressourcen, Bevölkerung, Öffentlichkeit). Beide arbeiten eng zusammen.'),
        CO('tip', 'Einheit der Führung', 'Jede Einsatzkraft hat genau einen Vorgesetzten (Einheit der Führung). Klare Unterstellung verhindert widersprüchliche Befehle und Chaos.'),
      ],
    },
    {
      id: 'l5', title: 'Führungsverhalten, Stress & Entscheidungen', duration: 20,
      blocks: [
        H2('verhalten', 'Wie Führungskräfte wirken'),
        P('Führung ist mehr als Befehle geben. Die Führungskraft gibt Orientierung, bleibt ruhig, trifft Entscheidungen und trägt Verantwortung – auch für die Sicherheit und Motivation ihrer Kräfte.'),
        KF(
          'Vorbild sein (Ruhe, Sicherheit, Fairness)',
          'Klar und knapp kommunizieren, Aufträge kontrollieren',
          'Verantwortung übernehmen, nicht abwälzen',
          'Kräfte schonen (Ablösung, Pausen, PSNV)'),
        H2('stress', 'Stress & menschliche Faktoren'),
        P('Unter Stress verengt sich die Wahrnehmung („Tunnelblick"), Fehler häufen sich. Gute Führung baut Struktur (Führungsvorgang), teilt Aufgaben, hört zu und lässt Bedenken zu – der „Human Factor" entscheidet oft über Erfolg oder Unglück.'),
        H2('entscheidung', 'Entscheiden unter Unsicherheit'),
        STEPS(
          'Lage rasch erfassen (Erkundung, Meldungen)',
          'Wesentliches vom Unwesentlichen trennen (Schwerpunkt)',
          'Handlungsoptionen abwägen (Nutzen, Risiko, Zeit)',
          'Klar entscheiden und befehlen',
          'Wirkung kontrollieren und nachsteuern'),
        CO('info', 'Lieber gut & rechtzeitig als perfekt & zu spät', 'Eine zügige, tragfähige Entscheidung mit ausreichender Information schlägt die perfekte Entscheidung, die zu spät kommt. Aber: den Entschluss laufend an der Lage prüfen und anpassen.'),
        CO('tip', 'Nachbesprechung', 'Nach dem Einsatz gehört die Nachbesprechung dazu: Was lief gut, was lernen wir? Wertschätzend, sachlich, ohne Schuldzuweisung – so wird die Wehr mit jedem Einsatz besser.'),
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
