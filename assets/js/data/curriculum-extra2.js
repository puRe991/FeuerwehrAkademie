/* =========================================================================
   CURRICULUM-EXTRA-2 — Maximale Inhaltstiefe: je 2 weitere Lektionen pro Modul.
   Deckt die verbliebenen Kernpunkte jedes Themengebiets ab, sodass jedes
   Modul einem vollständigen Lehrgang entspricht.
   Wird in curriculum.js an die Module angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS_2 = {

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
