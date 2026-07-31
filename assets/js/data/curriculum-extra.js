/* =========================================================================
   CURRICULUM-EXTRA — Zusätzliche Lektionen zur Vertiefung (Inhaltstiefe)
   Wird in curriculum.js an die jeweiligen Module angehängt.
   Format je Lektion identisch zu curriculum.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS = {

  /* ------------------------------------------------------------------- Q */
  'q-jugend': [
    {
      id: 'q3', title: 'Ausbildungsmethodik & Gruppenstunde gestalten', duration: 16,
      blocks: [
        H2('methodik', 'Wie Menschen lernen'),
        P('Gute Ausbildung berücksichtigt, dass Wissen durch <b>Sehen, Hören und vor allem selbst Tun</b> haften bleibt. Der Merksatz: „Sag es mir – ich vergesse. Zeig es mir – ich erinnere mich. Lass es mich tun – ich verstehe."'),
        DEF('Vier-Stufen-Methode', 'Bewährtes Ausbildungsschema: 1. Vorbereiten (Interesse wecken), 2. Vormachen/Erklären, 3. Nachmachen lassen, 4. Üben und festigen. So wird aus Zeigen echtes Können.'),
        FIG('vierstufen', 'Die Vier-Stufen-Methode der Ausbildung: Vorbereiten → Vormachen → Nachmachen → Üben.'),
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
