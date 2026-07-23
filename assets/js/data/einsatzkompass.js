/* =========================================================================
   EINSATZKOMPASS — Taschenkarten für Führungskräfte
   ------------------------------------------------------------------------
   Digitale „Spickzettel" für die Einsatzstelle: kompakte Checklisten für
   Szenarien, die selten vorkommen oder unter Stress (z. B. Alarmierung aus
   dem Tiefschlaf) nicht lückenlos abrufbar sind. Idee angelehnt an den
   Wettbewerbsbeitrag „Einsatzkompass" der Freiwilligen Feuerwehr Biebertal.

   Jede Karte ist bewusst knapp gehalten — sie ersetzt keine Ausbildung,
   sondern stützt das Gedächtnis der ohnehin gut ausgebildeten Führungskraft.
   Fachlich orientiert an FwDV 100 (Führung), FwDV 500 (ABC), FwDV 3/7.

   Struktur einer Karte:
     id, title, subtitle, cat, icon, color
     alarm     – typische Alarmstichworte / Einsatzanlässe (Wann ziehe ich sie?)
     merker[]  – Faustformeln / Merkschemata { kurz, titel, text }
     sections[]– Checklisten-Abschnitte { titel, items:[…] }
     warnung[] – rote Linien / kritische Sicherheitshinweise
     funk?     – Muster für die erste Lagemeldung
     refs[]    – verlinkte Module (Code-Buchstaben A–Z)
   ========================================================================= */

/* Kategorien des Kompass (eigenständig, für Filter & Farbgebung) */
export const KOMPASS_CATS = {
  fuehrung:  { label: 'Führung & Grundschema', color: '#8e44ad' },
  brand:     { label: 'Brandeinsatz',          color: '#d81f26' },
  gefahrgut: { label: 'ABC / Gefahrgut',       color: '#e67e22' },
  thl:       { label: 'Technische Hilfe',      color: '#1e5fa8' },
  medizin:   { label: 'Medizin & MANV',        color: '#16a085' },
  natur:     { label: 'Naturgefahren',         color: '#2e9e5b' },
};

export const EINSATZKOMPASS = [

/* --------------------------------------------------------------------- */
{
  id: 'ek-fuehrungsvorgang',
  title: 'Führungsvorgang & erste Lagemeldung',
  subtitle: 'Der rote Faden für jede Einsatzstelle',
  cat: 'fuehrung',
  icon: 'compass',
  color: '#8e44ad',
  alarm: ['Jeder Einsatz', 'Erste Einheit an der Einsatzstelle', 'Übernahme der Einsatzleitung'],
  merker: [
    { kurz: 'Regelkreis', titel: 'Führungsvorgang (FwDV 100)',
      text: 'Lagefeststellung → Planung (Beurteilen + Entschluss) → Befehl → Kontrolle → (von vorn).' },
    { kurz: 'Befehl', titel: 'Befehlsschema',
      text: 'Wer – macht Was – Womit – Wo – Wie (– Wozu). Ein Auftrag, eine Einheit, ein Ziel.' },
  ],
  sections: [
    { titel: 'Sofort beim Eintreffen', items: [
      'Fahrzeug sicher und taktisch günstig aufstellen (Windrichtung, Rückweg, Flächen freihalten)',
      'Erkundung: Was brennt/liegt vor? Menschen in Gefahr? Ausdehnung? Gefahren?',
      'Rückmeldung an die Leitstelle absetzen (Lage kurz, klar, vollständig)',
      'Nachforderung früh entscheiden — lieber zu früh als zu spät',
    ]},
    { titel: 'Lagebeurteilung', items: [
      'Gefahren der Einsatzstelle prüfen (siehe Karte „Gefahrenmatrix 4A-1C-4E")',
      'Schutzziele festlegen: Menschenrettung geht IMMER vor',
      'Kräfte & Mittel gegen die Aufgabe abwägen — reicht es?',
      'Einsatzschwerpunkt bestimmen',
    ]},
    { titel: 'Befehl & Kontrolle', items: [
      'Klaren Einsatzbefehl geben (Einheit, Auftrag, Mittel, Ziel, Weg)',
      'Aufträge quittieren lassen — Rückmeldung einfordern',
      'Laufende Kontrolle: Wirkt die Maßnahme? Lage neu bewerten',
      'Dokumentation / Einsatztagebuch führen (Zeiten, Kräfte, Entscheidungen)',
    ]},
  ],
  funk: 'Muster: „Leitstelle von [Funkrufname] — an der Einsatzstelle. Lage: [was]. Menschenrettung [ja/nein]. Ich führe als Einsatzleiter. Nachforderung: [Kräfte]. Kommen."',
  warnung: ['Als Führungskraft nicht selbst im Trupp verschwinden — Führung ist deine Aufgabe.'],
  refs: ['L', 'A', 'E'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-gefahrenmatrix',
  title: 'Gefahrenmatrix der Einsatzstelle',
  subtitle: 'Die 4-A-1-C-4-E-Regel systematisch abfragen',
  cat: 'fuehrung',
  icon: 'shield',
  color: '#8e44ad',
  alarm: ['Jede Lagebeurteilung', 'Vor dem Vorgehen von Trupps', 'Neubewertung der Lage'],
  merker: [
    { kurz: '4A · 1C · 4E', titel: 'Gefahren der Einsatzstelle',
      text: 'Atemgifte · Angstreaktion · Ausbreitung · Atomare Strahlung — Chemische Stoffe — Erkrankung/Verletzung · Explosion · Einsturz · Elektrizität.' },
  ],
  sections: [
    { titel: '4 × A', items: [
      'Atemgifte — Rauch, CO, Faulgase? → Atemschutz, Lüften',
      'Angstreaktion — Panik bei Betroffenen/Tieren? → beruhigen, sichern',
      'Ausbreitung — Feuer, Stoff, Wasser, Personenstrom? → begrenzen',
      'Atomare Strahlung — Warnzeichen, Transport, Betrieb? → Abstand, Zeit, Abschirmung',
    ]},
    { titel: '1 × C', items: [
      'Chemische Stoffe — Gefahrzettel, Fässer, Gerüche, Verfärbungen? → GAMS-Regel',
    ]},
    { titel: '4 × E', items: [
      'Erkrankung/Verletzung — Verletzte, Kontaminierte, eigene Kräfte? → Rettungsdienst',
      'Explosion — Gas, Staub, Behälter unter Druck? → Zündquellen weg, Abstand',
      'Einsturz — Statik, Brandzehrung, Trümmer? → Bereiche sperren',
      'Elektrizität — Freileitung, PV, Bahnstrom, E-Fahrzeug? → Abstände, freischalten',
    ]},
  ],
  warnung: [
    'Gefahren gelten für Mensch, Tier, Umwelt UND Sachwerte — in dieser Reihenfolge.',
    'Nach jeder Lageänderung neu durchgehen — Gefahren verschieben sich.',
  ],
  refs: ['P', 'I', 'F'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-gefahrgut',
  title: 'ABC- / Gefahrguteinsatz — erste Einheit',
  subtitle: 'GAMS-Regel: das seltene Szenario sicher eröffnen',
  cat: 'gefahrgut',
  icon: 'hazmat',
  color: '#e67e22',
  alarm: ['„ABC-Einsatz"', 'Gefahrgutunfall / auslaufender Stoff', 'Reizgas, Geruch, Verpuffung', 'Warntafel / Gefahrzettel erkannt'],
  merker: [
    { kurz: 'GAMS', titel: 'Regel der Ersteinheit',
      text: 'Gefahr erkennen — Absperren — Menschenrettung — Spezialkräfte alarmieren.' },
    { kurz: '3× A', titel: 'Schutz für eigene Kräfte',
      text: 'Abstand halten · Abschirmung nutzen · Aufenthaltszeit begrenzen.' },
  ],
  sections: [
    { titel: 'Gefahr erkennen (aus der Distanz)', items: [
      'Von oben und gegen den Wind anfahren, oberhalb/luvseitig aufstellen',
      'Fernglas nutzen — Warntafel (orange, UN-/Gefahrnummer) und Gefahrzettel ablesen',
      'Art des Stoffes, Menge, Ausbreitung (Gas/Flüssigkeit), Zündquellen erfassen',
      'Keine unnötige Annäherung — kein Betreten von Gaswolken/Pfützen',
    ]},
    { titel: 'Absperren', items: [
      'Gefahrenbereich großzügig festlegen — Richtwert mind. 50 m im Umkreis',
      'Bei Brand/Explosionsgefahr deutlich größer (100 m+), Bereich windabhängig',
      'Absperrgrenze markieren, Unbeteiligte + Verkehr fernhalten',
      'Nur mit Auftrag und Schutzausrüstung in den Gefahrenbereich',
    ]},
    { titel: 'Menschenrettung & Spezialkräfte', items: [
      'Menschenrettung nur mit geeignetem Schutz (Atemschutz, ggf. CSA) durch die Ersteinheit',
      'Kontaminierte separieren — Verschleppung vermeiden, Dekon-Stelle vorbereiten',
      'Fachberater / ABC-Zug / Umweltbehörde / Betreiber früh nachfordern',
      'Löschmittel/Bindemittel erst nach Kenntnis des Stoffes gezielt einsetzen',
    ]},
  ],
  funk: 'Muster: „Leitstelle — Gefahrguteinsatz bestätigt. Stoff [UN/Name], austretend [Menge]. Absperrbereich 50 m eingerichtet. Nachforderung: ABC-Zug und Fachberater Gefahrgut. Kommen."',
  warnung: [
    'Kein Kontakt mit dem Stoff — nicht durch Pfützen/Dämpfe gehen.',
    'Keine Zündquellen (Funk erst mit Abstand, Fahrzeuge, statische Aufladung).',
    'Eigenschutz vor Menschenrettung: tote Retter retten niemanden.',
  ],
  refs: ['I', 'F', 'H'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-menschenrettung',
  title: 'Brand mit Menschenleben in Gefahr',
  subtitle: 'Innenangriff & Menschenrettung strukturiert führen',
  cat: 'brand',
  icon: 'fire',
  color: '#d81f26',
  alarm: ['„Feuer — Menschenleben in Gefahr"', 'Wohnungs-/Gebäudebrand mit vermissten Personen', 'Person am Fenster / Hilferufe'],
  merker: [
    { kurz: 'Priorität', titel: 'Reihenfolge',
      text: 'Menschenrettung → Brandbekämpfung → Sachwertschutz. Parallel arbeiten, wenn Kräfte reichen.' },
  ],
  sections: [
    { titel: 'Erkundung', items: [
      'Wie viele Personen, wo? Anwohner/Meldebild abgleichen',
      'Rettungswege prüfen: Treppenraum begehbar? Zweiter Rettungsweg (DL) nötig?',
      'Brandausbreitung, Verrauchung, Rückzündungsgefahr einschätzen',
    ]},
    { titel: 'Vor dem Innenangriff sicherstellen', items: [
      'Atemschutzüberwachung eingerichtet (Druck & Zeit dokumentiert)',
      'Sicherheitstrupp bereit — kein Innenangriff ohne Rückfallebene',
      'Wasserversorgung steht / wird parallel aufgebaut — Rohr am Angriffstrupp',
      'Rückzugsweg und Rückzugssignal festgelegt und kommuniziert',
    ]},
    { titel: 'Türcheck & Vorgehen', items: [
      'Tür vor dem Öffnen prüfen (heiß? Rauch aus Spalt? Strömung?)',
      'Auf Flashover-/Rauchgasdurchzündung achten — Rückzug bei Warnzeichen',
      'Suchtechnik systematisch (an der Wand, Raum für Raum), gefundene Personen sofort raus',
      'Übergabe geretteter Personen an Rettungsdienst regeln',
    ]},
  ],
  warnung: [
    'Kein Innenangriff ohne Sicherheitstrupp und Atemschutzüberwachung.',
    'Warnzeichen einer Durchzündung (pulsierender Rauch, Hitze, „Ghosting") = raus.',
  ],
  refs: ['E', 'F', 'S'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-thl-vu',
  title: 'Verkehrsunfall — eingeklemmte Person',
  subtitle: 'Patientenorientierte Rettung nach FwDV 3 / THL',
  cat: 'thl',
  icon: 'truck',
  color: '#1e5fa8',
  alarm: ['„VU — Person eingeklemmt"', 'Verkehrsunfall mit Verletzten', 'PKW/LKW verunfallt'],
  merker: [
    { kurz: 'Rettungsringe', titel: 'Einsatzstelle ordnen',
      text: 'Innerer Ring: Rettung am Fahrzeug. Äußerer Ring: Geräteablage, Bereitstellung. Absperrung außen.' },
    { kurz: 'Sofort vs. schonend', titel: 'Rettungsart',
      text: 'Sofortrettung nur bei akuter Lebensgefahr (Feuer, HLW). Sonst patientenorientiert & schonend.' },
  ],
  sections: [
    { titel: 'Sichern', items: [
      'Einsatzstelle gegen fließenden Verkehr absichern (Warndreieck-Prinzip, Fahrzeug als Schutz)',
      'Brandschutz sicherstellen (Löschmittel bereit)',
      'Fahrzeug stabilisieren / unterbauen — kein Wackeln während der Rettung',
      'Gefahren prüfen: Kraftstoff, Batterie/HV bei E-Fahrzeug, Airbags, Ladung',
    ]},
    { titel: 'Zugang & Versorgung', items: [
      'Ersten Zugang schaffen (Scheibe/Tür) für medizinische Erstversorgung',
      'Notarzt/Rettungsdienst an Patient — gemeinsame Rettungsplanung',
      'Patienten vor Glassplittern/Kälte/Lärm schützen',
    ]},
    { titel: 'Befreien & Übergabe', items: [
      'Rettungsöffnung nach Absprache mit dem Rettungsdienst schaffen',
      'Achsengerechte, schonende Rettung — „goldene Stunde" beachten',
      'Geordnete Übergabe an den Rettungsdienst, Vollständigkeit prüfen',
    ]},
  ],
  warnung: [
    'HV-System bei E-/Hybridfahrzeugen: nur nach Freischalten am Rettungsdatenblatt schneiden.',
    'Nicht gezündete Airbags / Gurtstraffer = Verletzungsgefahr beim Arbeiten.',
  ],
  refs: ['G', 'J', 'R'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-tuoeffnung',
  title: 'Türöffnung — Notlage hinter Tür',
  subtitle: 'Verhältnismäßig und dokumentiert vorgehen',
  cat: 'thl',
  icon: 'building',
  color: '#1e5fa8',
  alarm: ['„Türöffnung — Person in Wohnung"', 'Hilflose Person vermutet', 'Rettungsdienst fordert Zugang'],
  merker: [
    { kurz: 'Verhältnismäßig', titel: 'Grundsatz',
      text: 'Geringstmöglicher Schaden. Erst zerstörungsarm (Schlüsseldienst-Technik), dann gewaltsam.' },
  ],
  sections: [
    { titel: 'Vor der Öffnung', items: [
      'Dringlichkeit klären: akute Lebensgefahr oder nur Verdacht?',
      'Andere Zugänge prüfen (Nachbar, Balkon, Fenster, Hausverwaltung)',
      'Bei akuter Gefahr: Polizei/Rettungsdienst-Freigabe — Lage dokumentieren',
    ]},
    { titel: 'Öffnung', items: [
      'Zerstörungsarme Technik zuerst versuchen (Türfalle/Zylinder)',
      'Gewaltsame Öffnung nur bei Gefahr im Verzug und dokumentiert',
      'Beim Öffnen mit Brand-/Gaslage rechnen — Rückzug möglich halten',
    ]},
    { titel: 'Nach der Öffnung', items: [
      'Person versorgen / Rettungsdienst übernehmen lassen',
      'Wohnung wieder verschließbar machen / Sicherung veranlassen',
      'Einsatz und Schäden im Bericht festhalten (Zeugen, Freigabe)',
    ]},
  ],
  warnung: ['Ohne akute Gefahr keine eigenmächtige gewaltsame Öffnung — Polizei einbinden.'],
  refs: ['G', 'A'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-manv',
  title: 'Massenanfall von Verletzten (MANV)',
  subtitle: 'Erste Führungskraft ohne Rettungsdienst-Struktur',
  cat: 'medizin',
  icon: 'users',
  color: '#16a085',
  alarm: ['Viele Verletzte / Betroffene', 'Bus-/Bahnunfall, Explosion, Einsturz', '„MANV" ausgelöst'],
  merker: [
    { kurz: 'Sichtung', titel: 'Vorsichtung (SK)',
      text: 'Rot = sofort · Gelb = dringend · Grün = später · Blau/Schwarz = ohne Überlebenschance/verstorben.' },
    { kurz: 'Führung', titel: 'Struktur früh aufbauen',
      text: 'Abschnitte bilden, LNA/OrgL nachfordern, Sammelplätze festlegen.' },
  ],
  sections: [
    { titel: 'Überblick & Meldung', items: [
      'Grobe Zahl der Betroffenen schätzen und sofort melden',
      'LNA (Leitender Notarzt) und OrgL (Organisatorischer Leiter) nachfordern',
      'Massiv Kräfte nachfordern (Rettungsdienst, Feuerwehr, ggf. weitere)',
    ]},
    { titel: 'Ordnen', items: [
      'Patientenablage / Sammelplatz Verletzte festlegen (sicher, erreichbar)',
      'Vorsichtung starten (Ersteindruck: geht/geht nicht, Atmung, Blutung)',
      'Gehfähige („Grün") an einem Punkt sammeln — entlastet die Fläche',
      'Zufahrt/Abfahrt und Hubschrauberlandeplatz organisieren',
    ]},
    { titel: 'Übergabe', items: [
      'Führung strukturiert an LNA/OrgL übergeben, wenn eingetroffen',
      'Feuerwehr unterstützt: Tragen, Beleuchtung, Zelte, Wärme, Registrierung',
    ]},
  ],
  warnung: ['Nicht an einzelnen Patienten „hängenbleiben" — als Führungskraft den Überblick halten.'],
  refs: ['J', 'Z', 'L'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-elektro',
  title: 'Elektrische Gefahren — PV, HV & Freileitung',
  subtitle: 'Modernes, selten geübtes Szenario',
  cat: 'thl',
  icon: 'bolt',
  color: '#1e5fa8',
  alarm: ['Brand mit PV-Anlage / Speicher', 'E-Fahrzeug verunfallt/brennt', 'Freileitung heruntergefallen', 'Trafostation, Bahnstrom'],
  merker: [
    { kurz: 'Abstände', titel: 'Sicherheitsabstand',
      text: 'Niederspannung mind. 1 m, Hochspannung mind. 5 m zu spannungsführenden Teilen.' },
    { kurz: '5 Regeln', titel: 'Sicherheitsregeln der Elektrotechnik',
      text: 'Freischalten · gegen Wiedereinschalten sichern · Spannungsfreiheit feststellen · erden/kurzschließen · benachbarte Teile abdecken (nur Fachpersonal).' },
  ],
  sections: [
    { titel: 'Grundsätze', items: [
      'Anlagen als „unter Spannung" behandeln, bis das Gegenteil bewiesen ist',
      'Nur Fachpersonal (Netzbetreiber/Elektrofachkraft) schaltet frei',
      'PV-Module liefern bei Tageslicht IMMER Spannung — DC-Seite bleibt gefährlich',
    ]},
    { titel: 'Brand / Löschen', items: [
      'Sicherheitsabstände beim Löschen einhalten (Sprühstrahl, Abstand)',
      'E-Fahrzeug: mit viel Wasser kühlen, thermisches Durchgehen (Reentry) einplanen',
      'Batteriespeicher/PV: Netzbetreiber und Hersteller-Notfallinfos hinzuziehen',
    ]},
    { titel: 'Freileitung / Bahn', items: [
      'Bereich unter herabhängender Leitung großräumig sperren (Schrittspannung!)',
      'Bei Bahnanlagen Notfallmanager/Bahnerdung anfordern — nicht selbst erden',
      'Betroffene fernhalten, keine Annäherung bis Freigabe',
    ]},
  ],
  warnung: [
    'Schrittspannung: bei liegender Leitung nicht großschrittig laufen — kleine Schritte, Bereich meiden.',
    'Kein Einsatz von Vollstrahl in der Nähe spannungsführender Teile.',
  ],
  refs: ['I', 'R', 'G'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-wasserfoerderung',
  title: 'Wasserförderung über lange Wegstrecke',
  subtitle: 'Wenn der nächste Hydrant weit weg ist',
  cat: 'thl',
  icon: 'water',
  color: '#1e5fa8',
  alarm: ['Löschwasser vor Ort nicht ausreichend', 'Waldbrand / abgelegenes Objekt', 'Offene Wasserentnahme nötig'],
  merker: [
    { kurz: 'Reserve', titel: 'Faustwerte',
      text: 'Verstärkerpumpen einplanen, bevor der Ausgangsdruck zu weit fällt; Höhenunterschiede kosten Druck (~1 bar je 10 m Steigung).' },
  ],
  sections: [
    { titel: 'Planung', items: [
      'Benötigten Förderstrom (l/min) aus dem Löschbedarf abschätzen',
      'Wegstrecke, Höhenunterschied und Schlauchreserve berechnen',
      'Entnahmestelle festlegen (Hydrant, offenes Gewässer, Zisterne) und sichern',
    ]},
    { titel: 'Aufbau', items: [
      'B-Leitung verlegen, Verstärkerpumpen rechtzeitig einbinden',
      'Eingangsdruck der Pumpen im sicheren Bereich halten (Kavitation vermeiden)',
      'Kommunikation Pumpe ↔ Pumpe ↔ Verteiler sicherstellen (Funk/Melder)',
      'Puffer/Behälter am Ende der Strecke zur Entkopplung vorsehen',
    ]},
    { titel: 'Betrieb', items: [
      'Drücke laufend überwachen, langsam an-/abfahren (Druckstöße vermeiden)',
      'Leitung gegen Verkehr sichern (Schlauchbrücken), Frostschutz beachten',
      'Reservekräfte für Ausfälle und Ablösung einplanen',
    ]},
  ],
  warnung: ['Kavitation an der Pumpe (Rasseln, Leistungseinbruch) = Eingangsdruck/Förderhöhe anpassen.'],
  refs: ['T', 'N', 'V'],
},

/* --------------------------------------------------------------------- */
{
  id: 'ek-unwetter',
  title: 'Unwetterlage — viele Einsätze gleichzeitig',
  subtitle: 'Sturm, Starkregen, Hochwasser priorisieren',
  cat: 'natur',
  icon: 'water',
  color: '#2e9e5b',
  alarm: ['Unwetterwarnung / Sturm / Starkregen', 'Zahlreiche Einsätze parallel', 'Hochwasser / Überflutung'],
  merker: [
    { kurz: 'Priorisieren', titel: 'Dringlichkeit',
      text: 'Menschenleben → akute Gefahr für Sachwerte/Infrastruktur → Aufräumarbeiten. Abarbeitungsliste führen.' },
  ],
  sections: [
    { titel: 'Lage & Organisation', items: [
      'Einsätze sammeln und nach Dringlichkeit priorisieren (nicht „first come")',
      'Bei Überlastung Führungsstruktur/Abschnitte bilden, Kräfte nachfordern',
      'Eigensicherung vor: bei Sturm nicht unter lose Äste/Dächer, bei Blitz Deckung',
    ]},
    { titel: 'Sturm / Baum', items: [
      'Gefahrenbereich sperren, Verkehr sichern',
      'Nur mit passender Ausbildung/PSA an die Motorsäge (Spannung im Holz beachten)',
      'Auf Stromleitungen im/am Baum prüfen — Netzbetreiber',
    ]},
    { titel: 'Wasser / Hochwasser', items: [
      'Keine überfluteten Bereiche/Unterführungen unterschätzen — Strömung, Tiefe unklar',
      'Pumpen sinnvoll einsetzen (erst Zulauf stoppen, dann leerpumpen)',
      'Deich-/Kellergefahren, Öltanks (aufschwimmen!) und Statik beachten',
    ]},
  ],
  warnung: [
    'Nie in unbekannt tiefes/strömendes Wasser gehen — Sicherung, Wasserrettung anfordern.',
    'Bei Gewitter Eigenschutz vor Einsatzhektik.',
  ],
  refs: ['W', 'Y', 'X'],
},

];

/* Hilfszugriffe */
export const KOMPASS_BY_ID = Object.fromEntries(EINSATZKOMPASS.map(k => [k.id, k]));
export const KOMPASS_COUNT = EINSATZKOMPASS.length;
