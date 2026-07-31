/* =========================================================================
   CURRICULUM-EXTRA — Zusätzliche Lektionen zur Vertiefung (Inhaltstiefe)
   Wird in curriculum.js an die jeweiligen Module angehängt.
   Format je Lektion identisch zu curriculum.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS = {

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
        FIG('stopprinzip', 'STOP-Prinzip: Rangfolge der Schutzmaßnahmen von oben (wirksamste) nach unten – Substitution vor Technik vor Organisation vor PSA.'),
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
