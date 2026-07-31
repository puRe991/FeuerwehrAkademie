/* =========================================================================
   CURRICULUM-DEEP (EXTRA_LESSONS_3) — bringt die zuvor dünneren Module
   (K sowie S–Z) auf das Niveau der übrigen (6 Lektionen). Wird in
   curriculum.js an die Module angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS_3 = {

  /* ------------------------------------------------------------------- W */
  'w-naturgefahren': [
    {
      id: 'w3', title: 'Ölspuren, Betriebsstoffe & Umweltschäden', duration: 15,
      blocks: [
        H2('oel', 'Ölspur & ausgelaufene Betriebsstoffe'),
        P('Ausgelaufenes Öl/Kraftstoff auf der Straße ist Rutschgefahr und Umweltrisiko. Kleine Mengen werden mit <b>Ölbindemittel</b> aufgenommen; die Straßenreinigung/Fachfirma übernimmt größere Mengen.'),
        STEPS(
          'Einsatzstelle absichern, Zündquellen fernhalten',
          'Ausbreitung stoppen (eindeichen, Kanaleinläufe schützen)',
          'Ölbindemittel aufbringen, einarbeiten, aufnehmen',
          'Kontaminiertes Material fachgerecht entsorgen'),
        CO('warn', 'Gewässer schützen', 'Läuft Öl in ein Gewässer, drohen große Schäden. Ölsperren einsetzen, Fachberater/Wasserbehörde alarmieren. Niemals ins Erdreich/Kanal spülen.'),
        H2('gefahr', 'Gefahren erkennen'),
        P('Bei größeren Mengen oder unbekannten Stoffen greift die Gefahrgut-Logik (GAMS): Gefahr erkennen, absperren, Menschen retten, Spezialkräfte. Kennzeichnungen (Warntafel, GHS) beachten.'),
      ],
    },
    {
      id: 'w4', title: 'Sturmschäden, Bäume & Seilwinde', duration: 16,
      blocks: [
        H2('baum', 'Bäume unter Spannung'),
        P('Der gefährlichste Sturmeinsatz ist der Baum unter Spannung: Er kann beim Schneiden schlagartig zurückschnellen oder die Säge einklemmen. Vor jedem Schnitt werden Druck- und Zugseite beurteilt.'),
        CO('danger', 'Spannung & Stromleitung', 'Verkeilte Stämme, gebogene Äste und in Leitungen hängende Bäume sind extrem gefährlich. Spannungen entlasten (nicht durchtrennen), Stromleitungen: Abstand, Netzbetreiber, erst nach Freischaltung.'),
        H2('winde', 'Seilwinde & Zugtechnik'),
        UL(
          'Zugrichtung und tragfähige Anschlagpunkte prüfen',
          'Niemand im Gefahrenbereich des gespannten Seils (Peitscheffekt)',
          'Umlenkrollen für geänderte Zugrichtung nutzen',
          'Langsam und kontrolliert ziehen, Kommunikation halten'),
        CO('warn', 'Peitscheneffekt', 'Reißt ein gespanntes Seil, schlägt es mit tödlicher Wucht aus. Niemals im Winkel des Seils stehen; den Gefahrenbereich absperren.'),
      ],
    },
    {
      id: 'w5', title: 'Unwetterlage führen & koordinieren', duration: 15,
      blocks: [
        H2('lage', 'Der Massenanfall an Einsatzstellen'),
        P('Bei Unwettern gehen in kurzer Zeit dutzende bis hunderte Einsätze ein. Die Herausforderung ist die <b>Koordination der Masse</b> – die einzelne Einsatzstelle ist meist einfach.'),
        KF(
          'Priorisieren: Menschenleben, dann öffentliche Gefahren, dann Sachwerte',
          'Abschnitte/örtliche Führungsstellen bilden',
          'Einsätze bündeln (räumlich abarbeiten spart Fahrten)',
          'Bürger einbinden, Erwartungsmanagement (nicht alles sofort)'),
        DEF('Örtliche Einsatzleitung / Führungsstelle', 'Bei anhaltenden Unwetterlagen wird eine Führungsstelle eingerichtet, die Einsätze sammelt, priorisiert und Kräfte disponiert – sie entlastet die überlastete Leitstelle.'),
        CO('tip', 'Kräfte schonen', 'Unwetterlagen dauern oft Stunden bis Tage. Ablösung, Verpflegung und Pausen sind Führungsaufgabe – erschöpfte Kräfte verunfallen. Durchhaltefähigkeit sichert den Erfolg.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- X */
  'x-wasserrettung': [
    {
      id: 'x4', title: 'Fließgewässer & Strömungsrettung', duration: 16,
      blocks: [
        H2('stroemung', 'Die Kraft des Wassers'),
        P('Strömendes Wasser wird massiv unterschätzt. Schon geringe Tiefen und Geschwindigkeiten entwickeln enorme Kräfte und drücken Menschen unter Wasser oder gegen Hindernisse.'),
        KF(
          'Ab ~30 cm strömendes Wasser reißt Menschen um',
          '„Siebe" (Bäume, Gitter) sind tödliche Fallen (Verklemmen)',
          'Wehre erzeugen tückische Walzen (Rücklauf)',
          'Kaltes Wasser führt schnell zu Kälteschock/Erschöpfung'),
        CO('danger', 'Niemals ungesichert ins Fließgewässer', 'Strömungsrettung ist Spezialkräften (Strömungsretter) vorbehalten. Die Regel-Feuerwehr rettet von Land/Brücke/Boot: Rufen – Werfen – Fahren. Ufersicherung für alle am Wasser.'),
        H2('technik', 'Rettungstechniken vom Ufer'),
        UL(
          'Wurfsack gezielt oberhalb der Person werfen',
          'Rettungsleine/Steckleiter als Brücke einsetzen',
          'Feste Uferpunkte zum Sichern nutzen',
          'Betroffene anleiten (auf den Rücken, Füße stromab)'),
      ],
    },
    {
      id: 'x5', title: 'Bootsdienst: Führung, Beladung, Rettung vom Boot', duration: 16,
      blocks: [
        H2('bootsfuehrer', 'Verantwortung des Bootsführers'),
        P('Der Bootsführer verantwortet Besatzung, Beladung und Fahrweise. Er kennt Gewässer, Strömung, Hindernisse und Wetter und entscheidet über den sicheren Einsatz des Bootes.'),
        KF(
          'Rettungsweste für alle an Bord – ohnmachtssicher',
          'Beladung/Trimm beachten, nicht überladen',
          'Strömung, Untiefen, Treibgut und Wehre meiden',
          'Ständiger Kontakt zum Ufer/zur Einsatzleitung'),
        H2('rettung', 'Personen aus dem Wasser aufnehmen'),
        STEPS(
          'Boot mit dem Bug/Seite gegen die Strömung zur Person führen',
          'Person am Heck oder über die niedrige Seite aufnehmen (nicht kentern)',
          'Bei Bewusstlosigkeit: mehrere Helfer, kontrolliert bergen',
          'Vor Unterkühlung schützen, schnell an Land/Rettungsdienst'),
        CO('warn', 'Kentergefahr', 'Eine panische oder schwere Person kann ein kleines Boot zum Kentern bringen. Ruhig anleiten, über die richtige Stelle aufnehmen, Gewicht ausbalancieren.'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- Y */
  'y-motorsaege': [
    {
      id: 'y3', title: 'Schnitttechnik & Arbeiten unter Spannung', duration: 16,
      blocks: [
        H2('grund', 'Sicher schneiden'),
        P('Sicherer Stand, fester Griff mit beiden Händen, Krallenanschlag ansetzen, mit Vollgas sägen. Nie über Schulterhöhe, nie mit der Schienenspitze (Kickback), nie einhändig.'),
        H2('spannung', 'Druck- und Zugseite'),
        DEF('Druck- und Zugseite', 'Ein liegender/gebogener Stamm hat eine Seite unter Druck (dort klemmt die Säge) und eine unter Zug (dort reißt es auf). Man schneidet zuerst auf der Druckseite ein (Entlastungsschnitt), dann von der Zugseite durch – so klemmt die Säge nicht.'),
        CO('danger', 'Spannung tötet', 'Falsch eingeschätzte Spannung lässt Stämme zurückschnellen oder die Säge einklemmen und hochschlagen. Im Zweifel Spannung mechanisch entlasten (Winde, Keile) und Rücksprache halten.'),
        H2('regeln', 'Grundregeln'),
        KF(
          'Nie allein arbeiten – zweite Person zur Sicherung/Beobachtung',
          'Rückweichplatz festlegen (bei fallenden Teilen)',
          'Umstehende und Verkehr aus dem Gefahrenbereich',
          'Bei Ermüdung Pause – die meisten Unfälle passieren müde'),
      ],
    },
    {
      id: 'y4', title: 'Wartung, Betriebsstoffe & Einsatzbereitschaft', duration: 14,
      blocks: [
        H2('pflege', 'Vor und nach dem Einsatz'),
        KF(
          'Kette scharf und richtig gespannt (Sicherheit + Leistung)',
          'Kettenschmierung/Öl prüfen, Luftfilter sauber',
          'Kettenbremse und Gassperre auf Funktion prüfen',
          'Kraftstoff (Gemisch) frisch, Tank/Öl auffüllen'),
        CO('warn', 'Stumpfe Kette ist gefährlich', 'Eine stumpfe oder falsch gespannte Kette zwingt zum Drücken, erhöht Rückschlag- und Unfallgefahr und überlastet das Gerät. Scharfe Kette = sicheres Arbeiten.'),
        H2('betrieb', 'Betrieb & Abgase'),
        UL(
          'Motor nie in geschlossenen Räumen ohne Abgasführung (CO!)',
          'Standfest starten (Kette frei, Kettenbremse an)',
          'Betriebsstoffe sicher lagern/transportieren',
          'Dokumentierte Prüfung/Wartung durch den Gerätewart'),
        CO('tip', 'Bereitschaft ist Pflege', 'Ein gepflegtes, geprüftes Gerät startet zuverlässig und arbeitet sicher. Nach dem Einsatz reinigen, prüfen, auffüllen – dann ist die Säge wieder einsatzbereit.'),
      ],
    },
    {
      id: 'y5', title: 'Trennschleifer, Säbelsäge & Rettungsgeräte', duration: 14,
      blocks: [
        H2('trenn', 'Der Trennschleifer'),
        P('Der Trennschleifer trennt Metall, Gitter und Bleche. Er erzeugt heißen <b>Funkenflug</b> (Brandgefahr) und birgt Gefahr durch Scheibenbruch – passende Scheibe wählen, Umgebung schützen, Brandschutz bereitstellen.'),
        CO('danger', 'Funkenflug & Ex-Gefahr', 'Trennschleifer niemals in explosionsgefährdeter Atmosphäre (Gas!) einsetzen. Funken können Brände und Explosionen auslösen. Umgebung und Personen schützen.'),
        H2('weitere', 'Weitere Kraftgeräte'),
        TBL(['Gerät', 'Verwendung', 'Schutz'],[
          ['Säbel-/Rettungssäge', 'Bleche, Kunststoffe, Holz', 'Späne, Klemmen'],
          ['Rettungssatz (Schere/Spreizer)', 'Fahrzeugöffnung', 'Splitter, Bewegung'],
          ['Bohrhammer', 'Beton, Mauerwerk', 'Staub, Verkanten'],
        ]),
        H2('grundsatz', 'Für alle Geräte'),
        KF(
          'Nur eingewiesene Kräfte, vollständige PSA',
          'Gerät vor Gebrauch prüfen, richtige Einsatzmittel wählen',
          'Umstehende schützen, Brandschutz bei Funkenflug',
          'Sicheren Stand und feste Werkstückauflage sicherstellen'),
      ],
    },
  ],

  /* ------------------------------------------------------------------- Z */
  'z-katastrophenschutz': [
    {
      id: 'z3', title: 'Führungsorganisation im Katastrophenschutz', duration: 16,
      blocks: [
        H2('struktur', 'Wer führt eine Katastrophe?'),
        P('Bei einer Katastrophe übernimmt die <b>Katastrophenschutzbehörde</b> (i. d. R. Landkreis/kreisfreie Stadt) die Gesamtverantwortung. Sie führt mit zwei zusammenwirkenden Stäben.'),
        TBL(['Stab', 'Aufgabe'],[
          ['Verwaltungsstab', 'administrativ-organisatorisch (Behörde, Ressourcen, Bevölkerung)'],
          ['Führungsstab / TEL', 'operativ-taktisch (Einsatzführung vor Ort)'],
        ]),
        DEF('Technische Einsatzleitung (TEL)', 'Die TEL führt die eingesetzten Einheiten operativ-taktisch im Auftrag der Katastrophenschutzbehörde. Sie ist nach dem Führungssystem der FwDV 100 organisiert (Sachgebiete S1–S6).'),
        H2('zusammen', 'Zusammenwirken'),
        P('Verwaltungsstab und Führungsstab/TEL stimmen sich eng ab: Der Verwaltungsstab schafft Rahmen und Ressourcen, der Führungsstab setzt operativ um. Klare Schnittstellen verhindern Reibungsverluste.'),
        CO('tip', 'Vorbereitung ist alles', 'Stäbe, Alarmpläne und Zuständigkeiten werden lange vor der Lage aufgestellt und geübt. Wer erst im Chaos anfängt zu organisieren, hat schon verloren.'),
      ],
    },
    {
      id: 'z4', title: 'Betreuung, Verpflegung & Logistik', duration: 15,
      blocks: [
        H2('betreuung', 'Menschen versorgen'),
        P('Bei Evakuierungen und Großlagen müssen Betroffene betreut, verpflegt und untergebracht werden. Das leisten vor allem die <b>Hilfsorganisationen</b> (DRK, ASB, JUH, MHD) mit Betreuungs- und Verpflegungsdiensten.'),
        UL(
          '<b>Betreuungsdienst:</b> Sammelstellen, Unterkunft, psychosoziale Betreuung',
          '<b>Verpflegungsdienst:</b> Feldküche, Getränke – auch für Einsatzkräfte',
          '<b>Sanitätsdienst:</b> medizinische Versorgung bei MANV',
          '<b>Logistik/Nachschub:</b> Material, Kraftstoff, Technik (auch THW)'),
        H2('durchhalten', 'Durchhaltefähigkeit'),
        KF(
          'Ablösekonzept über Tage planen (Schichten)',
          'Verpflegung und Ruhemöglichkeiten für Einsatzkräfte',
          'Nachschub an Betriebsstoffen, Atemluft, Material',
          'Dokumentation und Kräfteübersicht führen'),
        CO('info', 'Gemeinsame Stärke', 'Kein Träger schafft eine Großlage allein. Das eingespielte Zusammenwirken von Feuerwehr, Hilfsorganisationen und THW ist das Rückgrat des Bevölkerungsschutzes.'),
      ],
    },
    {
      id: 'z5', title: 'Warnung der Bevölkerung', duration: 14,
      blocks: [
        H2('warnung', 'Wie gewarnt wird'),
        P('Bei Gefahren für die Bevölkerung (Brandrauch, Gefahrstoff, Hochwasser) muss schnell und breit gewarnt werden. Dafür gibt es ein Bündel an Warnmitteln.'),
        TBL(['Warnmittel', 'Merkmal'],[
          ['Sirenen', 'Weckeffekt, Signale (z. B. Heulton = Gefahr)'],
          ['Warn-Apps (NINA/KATWARN)', 'Detailinfos aufs Handy'],
          ['Cell Broadcast', 'Warnung an alle Handys in einer Funkzelle'],
          ['Rundfunk/Lautsprecherwagen', 'Durchsagen, Verhaltenshinweise'],
        ]),
        DEF('Warntag & Warnstufen', 'Warnungen folgen abgestuften Verfahren. Bundesweite Warntage testen die Systeme. Die Botschaft enthält Gefahr, betroffenes Gebiet und Verhaltenshinweise (z. B. „Fenster/Türen schließen").'),
        H2('verhalten', 'Verhaltenshinweise'),
        UL(
          'Bei Sirenensignal: Radio/Warn-App einschalten',
          'Fenster und Türen schließen, Lüftung aus (bei Gefahrstoff/Rauch)',
          'Nachbarn informieren, Notruf nur im echten Notfall',
          'Anweisungen der Behörden/Einsatzkräfte folgen'),
        CO('tip', 'Warnen rettet Leben', 'Frühzeitige, klare Warnung mit konkreten Handlungshinweisen ist Teil der Gefahrenabwehr. Die Feuerwehr wirkt hier eng mit den Behörden zusammen.'),
      ],
    },
  ],

};
