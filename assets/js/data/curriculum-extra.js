/* =========================================================================
   CURRICULUM-EXTRA — Zusätzliche Lektionen zur Vertiefung (Inhaltstiefe)
   Wird in curriculum.js an die jeweiligen Module angehängt.
   Format je Lektion identisch zu curriculum.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS = {

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
