/* =========================================================================
   PLANSPIELE-EXTRA — Breite Bibliothek von Führungs-Simulationen über die
   wichtigsten Einsatzarten. Wird in planspiele.js an PLANSPIELE angehängt.
   Szene je Planspiel über art am Start-Knoten (siehe scene-art.js).
   Bewertungsdimensionen: rettung, sicherheit, taktik.
   ========================================================================= */

export const PLANSPIELE_EXTRA = [

/* ----------------------------------------------------------- Kellerbrand */
{
  id: 'ps-kellerbrand', title: 'Kellerbrand im Wohnhaus', role: 'Gruppenführer/in',
  level: 4, duration: 11, difficulty: 'Mittel', color: '#c0392b',
  briefing: 'Rauchmelder und Anrufer melden dichten Rauch im Treppenhaus eines Wohnhauses. Vermutlich brennt es im Keller. Sie führen das erste HLF (1/8). Kellerbrände sind wegen Hitzestau, schlechter Sicht und Rauchausbreitung ins Treppenhaus besonders tückisch.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-interior', time: '21:10',
      situation: 'Aus dem Kellerabgang quillt dichter, heißer Rauch ins Treppenhaus – der einzige Rettungsweg der oberen Wohnungen. Anwohner stehen an Fenstern. Was hat Priorität?',
      decisions: [
        { text: 'Treppenraum vom Rauch freihalten (Rettungsweg sichern) und Menschenrettung/Betreuung der Bewohner parallel zur Brandbekämpfung',
          effects:{rettung:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. Der verrauchte Treppenraum ist der Rettungsweg der Bewohner. Ihn raucharm zu halten (Tür zum Keller, Belüftung) rettet mehr Menschen als jeder schnelle Löschangriff.',
          next:'zugang' },
        { text: 'Sofort mit voller Kraft in den Keller zum Löschen',
          effects:{rettung:-2, sicherheit:-1}, kind:'bad',
          feedback:'Zu eng gedacht. Der akut bedrohte Rettungsweg der Bewohner darf nicht ignoriert werden. Menschenrettung/Rettungswegsicherung hat Vorrang.',
          next:'zugang' },
      ],
    },
    zugang: {
      art: 'sc-interior', time: '21:14',
      situation: 'Der Angriffstrupp geht unter Atemschutz zum Kellerabgang vor. Die Tür zum Brandraum ist heiß. Wie ordnen Sie das Vorgehen an?',
      decisions: [
        { text: 'Sicherheitstrupp bereit, Atemschutzüberwachung, Türprozedur mit Rauchgaskühlung, Wärmebildkamera nutzen',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Vorbildlich. Kellerbrände bedeuten Hitzestau und Nullsicht. Türprozedur, WBK und Sicherheitstrupp sind Pflicht – kein Innenangriff unter Atemschutz ohne Sicherheitstrupp.',
          next:'belueftung' },
        { text: 'Tür sofort aufreißen und mit Vollstrahl hinein',
          effects:{sicherheit:-3, taktik:-2}, kind:'bad',
          feedback:'Gefährlich. Plötzliche Sauerstoffzufuhr (Backdraft-Gefahr) und Vollstrahl in den Rauch erzeugen viel Dampf und Nullsicht. Kontrolliert mit Türprozedur vorgehen.',
          next:'belueftung' },
      ],
    },
    belueftung: {
      art: 'sc-interior', time: '21:22',
      situation: 'Das Feuer ist lokalisiert. Der Trupp meldet starke Verrauchung, kaum Sicht. Wie unterstützen Sie?',
      decisions: [
        { text: 'Taktische Belüftung koordiniert einsetzen: Abluftöffnung schaffen, mit dem Innenangriff abstimmen',
          effects:{taktik:+3, sicherheit:+1}, kind:'good',
          feedback:'Genau. Koordinierte Belüftung verbessert Sicht und Bedingungen. Zwingend: definierte Abluftöffnung und Abstimmung mit dem Trupp – sonst facht man das Feuer an.',
          next:'ende' },
        { text: 'Ungeplant alle Kellerfenster und Türen öffnen',
          effects:{taktik:-2, sicherheit:-1}, kind:'bad',
          feedback:'Unkontrollierte Zuluft kann das Feuer anfachen und Rauch unkontrolliert verteilen. Belüftung immer planen und abstimmen.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- Pflegeheim */
{
  id: 'ps-pflegeheim', title: 'Zimmerbrand im Pflegeheim', role: 'Zugführer/in',
  level: 4, duration: 13, difficulty: 'Schwer', color: '#8e44ad',
  briefing: 'In einem Pflegeheim brennt ein Bewohnerzimmer. Viele Bewohner sind nicht oder schwer gehfähig. Sie sind Zugführer/in. Hier zählt Räumungs- und Rettungsorganisation mehr als schnelles Löschen – der Brandschutz des Gebäudes (Brandabschnitte) hilft Ihnen dabei.',
  start: 'lage',
  nodes: {
    lage: {
      art: 'sc-highrise', time: '15:40',
      situation: 'Das Personal meldet: Feuer in Zimmer 214, verraucht der Flur des Abschnitts. Zahlreiche bettlägerige Bewohner. Womit beginnen Sie?',
      decisions: [
        { text: 'Menschenrettung/Räumung des betroffenen Brandabschnitts organisieren, Personal einbinden, parallel Brandbekämpfung',
          effects:{rettung:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. Bei vielen nicht gehfähigen Personen ist die organisierte Räumung des betroffenen Brandabschnitts der Schwerpunkt. Das Pflegepersonal kennt die Bewohner und hilft entscheidend.',
          next:'abschnitt' },
        { text: 'Zuerst das gesamte Heim evakuieren',
          effects:{rettung:-1, taktik:-2}, kind:'mid',
          feedback:'Eine Komplett-Evakuierung bettlägeriger Menschen ist extrem aufwendig und selten nötig: Brandabschnitte begrenzen das Feuer. Zuerst den betroffenen Abschnitt räumen (horizontale Evakuierung).',
          next:'abschnitt' },
        { text: 'Erst das Feuer löschen, dann um die Bewohner kümmern',
          effects:{rettung:-3}, kind:'bad',
          feedback:'Falsch. Menschenrettung hat Vorrang – gerade bei hilflosen Personen. Räumung und Brandbekämpfung laufen parallel.',
          next:'abschnitt' },
      ],
    },
    abschnitt: {
      art: 'sc-highrise', time: '15:48',
      situation: 'S2 meldet: Der Brandabschnitt hält den Rauch noch zurück. Wie nutzen Sie das baulich?',
      decisions: [
        { text: 'Horizontale Evakuierung: Bewohner in den sicheren Nachbarbrandabschnitt bringen, Rauchschutztüren schließen',
          effects:{rettung:+3, sicherheit:+2}, kind:'good',
          feedback:'Ausgezeichnet. Die horizontale Evakuierung in den sicheren Nachbarabschnitt ist schonend und schnell. Geschlossene Rauchschutztüren halten den Rauch – baulicher Brandschutz wirkt.',
          next:'kraefte' },
        { text: 'Alle Türen offen lassen für schnelleren Transport',
          effects:{sicherheit:-3, rettung:-1}, kind:'bad',
          feedback:'Gefährlich. Offene Türen lassen den Rauch in die sicheren Bereiche – der Vorteil der Brandabschnitte geht verloren. Rauchschutztüren schließen.',
          next:'kraefte' },
      ],
    },
    kraefte: {
      art: 'sc-highrise', time: '16:00',
      situation: 'Die Rettung bindet viel Personal. Was veranlassen Sie?',
      decisions: [
        { text: 'Kräfte nachfordern, Abschnitte bilden (Rettung/Brandbekämpfung/Betreuung), Rettungsdienst und Sammelplatz organisieren',
          effects:{taktik:+3, rettung:+1}, kind:'good',
          feedback:'Souverän. Rechtzeitige Nachforderung, klare Abschnitte und ein Betreuungs-/Sammelplatz (mit Rettungsdienst) bewältigen die personalintensive Lage geordnet.',
          next:'ende' },
        { text: 'Mit den vorhandenen Kräften irgendwie durchkommen',
          effects:{taktik:-2, rettung:-1}, kind:'bad',
          feedback:'Zu knapp. Die Rettung vieler hilfloser Menschen braucht viele Hände. Früh nachfordern und strukturieren.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* ------------------------------------------------------- E-Fahrzeugbrand */
{
  id: 'ps-eauto', title: 'Brand eines Elektrofahrzeugs', role: 'Gruppenführer/in',
  level: 4, duration: 11, difficulty: 'Mittel', color: '#e67e22',
  briefing: 'In einer Tiefgaragen-Einfahrt brennt ein Elektrofahrzeug. Sie führen ein HLF. E-Fahrzeugbrände sind beherrschbar, erfordern aber Wissen um die Hochvolt-Batterie: sehr viel Wasser zur Kühlung, lange Beobachtung und Vorsicht vor thermischem Durchgehen.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-vehicle', time: '18:25',
      situation: 'Das E-Auto brennt im Front-/Unterbodenbereich, es zischt und stichflammt zeitweise. Personen sind nicht im Fahrzeug. Wie gehen Sie vor?',
      decisions: [
        { text: 'Absichern, Brandschutz aufbauen, aus Deckung mit viel Wasser die Batterie kühlen; Rettungskarte/Herstellerhinweise beachten',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. HV-Batteriebrände werden mit viel Wasser gekühlt (nicht „erstickt"). Aus Deckung arbeiten, Rettungsdatenblatt nutzen, HV-Leitungen (orange) niemals trennen.',
          next:'kuehlen' },
        { text: 'Mit einem CO₂-Löscher schnell ablöschen und Einsatz beenden',
          effects:{taktik:-3, sicherheit:-1}, kind:'bad',
          feedback:'Falsch. CO₂ kühlt die Batterie nicht – sie kann sich erneut entzünden (thermisches Durchgehen). HV-Batterien brauchen intensive, andauernde Wasserkühlung.',
          next:'kuehlen' },
      ],
    },
    kuehlen: {
      art: 'sc-vehicle', time: '18:40',
      situation: 'Die offenen Flammen sind aus, die Batterie ist aber noch heiß. Was ordnen Sie an?',
      decisions: [
        { text: 'Batterie weiter kühlen und Temperatur überwachen (WBK), auf Wiederentzündung vorbereitet bleiben',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Genau. Die Batterie kann sich Minuten bis Stunden später wieder entzünden. Weiterkühlen, mit Wärmebildkamera überwachen, Löschbereitschaft halten.',
          next:'abschluss' },
        { text: 'Sofort einrücken, es brennt ja nicht mehr',
          effects:{sicherheit:-3}, kind:'bad',
          feedback:'Riskant. Thermisches Durchgehen tritt oft verzögert auf. Ohne Überwachung droht ein Wiederaufflammen – Fahrzeug lange beobachten.',
          next:'abschluss' },
      ],
    },
    abschluss: {
      art: 'sc-vehicle', time: '19:10',
      situation: 'Das Fahrzeug ist abgekühlt, aber die Batterie könnte weiter reagieren. Wie übergeben Sie?',
      decisions: [
        { text: 'Abschleppen mit Hinweis auf HV-Batterie veranlassen, Quarantäne/Beobachtung empfehlen, dokumentieren',
          effects:{taktik:+3}, kind:'good',
          feedback:'Perfekt. E-Fahrzeuge werden nach Batteriebrand isoliert abgestellt und weiter beobachtet (Quarantäneplatz). Klare Übergabe an Abschlepper/Betreiber mit Warnhinweis.',
          next:'ende' },
        { text: 'Fahrzeug ohne Hinweis freigeben',
          effects:{taktik:-2, sicherheit:-1}, kind:'bad',
          feedback:'Fahrlässig. Ohne Warnhinweis droht später eine Wiederentzündung beim Abschlepper/Verwerter. Immer auf die HV-Batterie hinweisen.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- Gasaustritt */
{
  id: 'ps-gasaustritt', title: 'Gasaustritt im Wohnhaus', role: 'Gruppenführer/in',
  level: 4, duration: 11, difficulty: 'Schwer', color: '#f5a623',
  briefing: 'Ein Anrufer meldet starken Gasgeruch im Treppenhaus eines Mehrfamilienhauses. Sie führen das erste Fahrzeug. Bei Gasaustritt zählt eines vor allem: konsequente Vermeidung jeder Zündquelle und großräumiges, ruhiges Vorgehen – eine Explosion droht.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-gas', time: '07:50',
      situation: 'Vor dem Haus riecht es deutlich nach Gas. Bewohner sind teils noch drin. Wie nähern Sie sich an?',
      decisions: [
        { text: 'Zündquellen konsequent vermeiden (keine Klingel/Schalter/Handy im Bereich), großräumig absperren, Bewohner ruhig ins Freie',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. Jede Zündquelle kann die Explosion auslösen – keine elektrischen Schalter/Klingeln betätigen, Funk außerhalb des Bereichs. Ruhig warnen und räumen, absperren.',
          next:'messen' },
        { text: 'An allen Wohnungstüren klingeln, um schnell zu warnen',
          effects:{sicherheit:-3}, kind:'bad',
          feedback:'Lebensgefährlich. Ein Klingel-/Schaltfunke kann ein zündfähiges Gemisch entzünden. Zum Warnen klopfen/rufen, keine elektrischen Zündquellen betätigen.',
          next:'messen' },
      ],
    },
    messen: {
      art: 'sc-gas', time: '07:58',
      situation: 'Die Bewohner sind draußen. Wie klären Sie die Gefahr?',
      decisions: [
        { text: 'Mit Ex-Messgerät die Konzentration bestimmen, Gaszufuhr absperren (Haupthahn), belüften wenn gefahrlos',
          effects:{taktik:+3, sicherheit:+2}, kind:'good',
          feedback:'Genau. Ex-Messung zeigt die Explosionsgefahr (% UEG). Gaszufuhr absperren (Hauptabsperrung/Versorger), vorsichtig und gefahrlos belüften.',
          next:'spezial' },
        { text: 'Ohne Messung das Haus betreten und suchen',
          effects:{sicherheit:-2, taktik:-1}, kind:'bad',
          feedback:'Zu riskant. Ohne Messwerte ist die Gefahr unbekannt. Erst messen, Zufuhr stoppen, dann kontrolliert vorgehen.',
          next:'spezial' },
      ],
    },
    spezial: {
      art: 'sc-gas', time: '08:15',
      situation: 'Die Quelle ist eine defekte Leitung. Was veranlassen Sie?',
      decisions: [
        { text: 'Gasversorger/Netzbetreiber und ggf. Fachkräfte nachfordern, Bereich gesichert halten, Freigabe erst nach Messung',
          effects:{taktik:+3}, kind:'good',
          feedback:'Souverän. Die Reparatur ist Sache des Netzbetreibers. Bereich gesichert halten, erst nach Messwerten im sicheren Bereich freigeben.',
          next:'ende' },
        { text: 'Sofort Entwarnung geben und Bewohner zurücklassen',
          effects:{sicherheit:-2, taktik:-1}, kind:'bad',
          feedback:'Verfrüht. Erst wenn Messwerte den sicheren Bereich zeigen und die Quelle beseitigt ist, wird freigegeben.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------- Person im Wasser */
{
  id: 'ps-ertrinken', title: 'Person im Wasser', role: 'Gruppenführer/in',
  level: 3, duration: 9, difficulty: 'Mittel', color: '#1e5fa8',
  briefing: 'An einem Fluss treibt eine Person und ruft um Hilfe. Sie führen die ersteintreffende Gruppe. Wasserrettung ist gefährlich – die Rettungsreihenfolge Rufen–Werfen–Fahren–Schwimmen und der Eigenschutz entscheiden über Leben und Tod, auch das der Retter.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-water', time: '16:05',
      situation: 'Die Person treibt etwa 15 m vom Ufer, wird von der Strömung getragen. Was ist Ihre erste Maßnahme?',
      decisions: [
        { text: 'Rufen/anweisen und sofort ein Rettungsmittel werfen (Wurfsack/Rettungsring), Kräfte am Ufer sichern',
          effects:{rettung:+3, sicherheit:+2}, kind:'good',
          feedback:'Richtig. Rufen – Werfen – Fahren – (nur zuletzt) Schwimmen. Der Wurfsack ist schnell und sicher; alle am Wasser werden gegen Hineinstürzen gesichert.',
          next:'nachfordern' },
        { text: 'Sofort einen Trupp ohne Sicherung hinterherschwimmen lassen',
          effects:{sicherheit:-3, rettung:-1}, kind:'bad',
          feedback:'Lebensgefährlich. Ungesichertes Nachspringen ist die häufigste Ursache für tote Retter. Erst Rufen/Werfen/Fahren; Schwimmen nur durch gesicherte Rettungsschwimmer.',
          next:'nachfordern' },
      ],
    },
    nachfordern: {
      art: 'sc-water', time: '16:08',
      situation: 'Der erste Wurf verfehlt knapp, die Person entfernt sich. Wie erhöhen Sie die Chancen?',
      decisions: [
        { text: 'Wasserrettung/Boot und Rettungsdienst nachfordern, Uferbeobachter stromabwärts postieren, erneut werfen',
          effects:{taktik:+3, rettung:+1}, kind:'good',
          feedback:'Klug. Frühe Nachforderung (Boot, Strömungsretter, RD) und Beobachter stromabwärts erhöhen die Chancen deutlich. Weiter Rettungsmittel anbieten.',
          next:'rettung' },
        { text: 'Abwarten, bis die Person von selbst ans Ufer kommt',
          effects:{rettung:-3}, kind:'bad',
          feedback:'Untätigkeit kostet Leben. Jede Sekunde zählt – nachfordern und aktiv Rettungsmittel einsetzen.',
          next:'rettung' },
      ],
    },
    rettung: {
      art: 'sc-water', time: '16:16',
      situation: 'Die Person konnte an einer Uferbuhne gehalten und herausgezogen werden – sie ist unterkühlt und apathisch. Was nun?',
      decisions: [
        { text: 'Schonend bergen, vor weiterer Auskühlung schützen, nicht ruckartig bewegen, Rettungsdienst übernimmt',
          effects:{rettung:+3, sicherheit:+1}, kind:'good',
          feedback:'Richtig. Stark Unterkühlte nicht ruckartig bewegen/aktiv aufwärmen (Bergungstod-Gefahr). Schonend lagern, Wärme erhalten, an den Rettungsdienst übergeben.',
          next:'ende' },
        { text: 'Kräftig abreiben und warm duschen',
          effects:{rettung:-2}, kind:'bad',
          feedback:'Falsch. Aktives Aufwärmen/ruckartige Bewegung kann bei starker Unterkühlung tödlich sein. Schonend lagern und Wärme nur erhalten.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- Eisunfall */
{
  id: 'ps-eisunfall', title: 'Eingebrochen ins Eis', role: 'Gruppenführer/in',
  level: 3, duration: 9, difficulty: 'Mittel', color: '#5aa0d6',
  briefing: 'Auf einem zugefrorenen Weiher ist ein Kind ins Eis eingebrochen und hält sich am Rand fest. Sie führen die Gruppe. Das Eis trägt die Retter oft nicht – Lastverteilung und Sicherung sind alles, und die Zeit läuft gegen die Unterkühlung.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-water', time: '14:30',
      situation: 'Das Kind ist ca. 8 m vom Ufer, das Eis ist dünn. Wie beginnen Sie?',
      decisions: [
        { text: 'Rufen/beruhigen, Rettungsmittel zuwerfen/zuschieben (Leiter, Wurfsack), Retter nur gesichert und mit Lastverteilung',
          effects:{rettung:+3, sicherheit:+2}, kind:'good',
          feedback:'Richtig. Erst zurufen und Rettungsmittel anbieten; nähert sich ein Retter, dann nur gesichert und liegend/mit Steckleiter (Lastverteilung), weil das Eis nicht trägt.',
          next:'annaeherung' },
        { text: 'Aufrecht über das Eis zum Kind laufen',
          effects:{sicherheit:-3, rettung:-1}, kind:'bad',
          feedback:'Lebensgefährlich. Aufrecht bricht der Retter selbst ein. Immer mit größtmöglicher Lastverteilung (liegend, Leiter) und gesichert.',
          next:'annaeherung' },
      ],
    },
    annaeherung: {
      art: 'sc-water', time: '14:35',
      situation: 'Ein gesicherter Retter nähert sich liegend auf der Steckleiter. Das Kind ist schwach. Wie unterstützen Sie?',
      decisions: [
        { text: 'Retter über Leine sichern, Kind flach herausziehen (nicht hochheben), sofort in Decken hüllen',
          effects:{rettung:+3, sicherheit:+1}, kind:'good',
          feedback:'Genau. Das Kind flach über die Eiskante ziehen (nicht senkrecht hochheben), Retter permanent gesichert, dann vor weiterer Auskühlung schützen.',
          next:'nachsorge' },
        { text: 'Kind schnell senkrecht hochreißen',
          effects:{rettung:-1, sicherheit:-1}, kind:'mid',
          feedback:'Senkrechtes Hochreißen bricht oft die Kante weiter ein und belastet das Kind stark. Flach herausziehen ist sicherer.',
          next:'nachsorge' },
      ],
    },
    nachsorge: {
      art: 'sc-water', time: '14:42',
      situation: 'Das Kind ist gerettet, stark unterkühlt und ruhig. Was ordnen Sie an?',
      decisions: [
        { text: 'Schonend lagern, vor Auskühlung schützen, nicht aktiv aufwärmen, Rettungsdienst/Klinik',
          effects:{rettung:+3}, kind:'good',
          feedback:'Richtig. Bei starker Unterkühlung droht der Bergungstod – schonend lagern, Wärme erhalten (nicht aktiv aufwärmen), schnell in ärztliche Hand.',
          next:'ende' },
        { text: 'Warmes Bad zum schnellen Aufwärmen',
          effects:{rettung:-2}, kind:'bad',
          feedback:'Gefährlich. Aktives, schnelles Aufwärmen kann bei starker Unterkühlung zum Kreislaufversagen führen. Nur Wärme erhalten, Rettungsdienst.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- Hochwasser */
{
  id: 'ps-hochwasser', title: 'Vollgelaufener Keller bei Hochwasser', role: 'Gruppenführer/in',
  level: 3, duration: 10, difficulty: 'Mittel', color: '#16607a',
  briefing: 'Nach Starkregen sind mehrere Keller vollgelaufen. Bei einem Objekt steht das Wasser hoch, der Außenpegel ist ebenfalls hoch. Sie führen die Gruppe. Beim Auspumpen lauern zwei Fallen: Stromgefahr im Wasser und die Einsturzgefahr bei zu frühem Leerpumpen.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-water', time: '19:20',
      situation: 'Der Keller steht 1,2 m unter Wasser, Elektroinstallation reicht ins Wasser. Bewohner wollen, dass Sie sofort auspumpen. Was zuerst?',
      decisions: [
        { text: 'Strom im betroffenen Bereich abschalten (lassen), Gefahren prüfen (Öltank, Gasgeräte), dann Maßnahmen planen',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. Im Wasser stehende Elektrik ist lebensgefährlich – erst spannungsfrei schalten. Öltank/Gasgeräte prüfen, bevor gearbeitet wird.',
          next:'pumpen' },
        { text: 'Sofort die Tauchpumpe ins Wasser und auspumpen',
          effects:{sicherheit:-3}, kind:'bad',
          feedback:'Lebensgefährlich. Ohne Stromabschaltung droht ein tödlicher Stromschlag. Erst spannungsfrei schalten, dann arbeiten.',
          next:'pumpen' },
      ],
    },
    pumpen: {
      art: 'sc-water', time: '19:32',
      situation: 'Der Strom ist ab. Der Außenwasserstand (Grundwasser/Fluss) ist weiterhin sehr hoch. Wie pumpen Sie?',
      decisions: [
        { text: 'Nicht vollständig leerpumpen, solange außen der Pegel hoch ist – kontrolliert absenken, Statik beobachten',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Genau. Ohne Gegendruck des Innenwassers kann der Außendruck Wände eindrücken oder den Boden anheben. Kontrolliert absenken und die Bausubstanz beobachten.',
          next:'prio' },
        { text: 'So schnell wie möglich komplett leerpumpen',
          effects:{sicherheit:-3, taktik:-1}, kind:'bad',
          feedback:'Gefährlich. Vollständiges Leerpumpen bei hohem Außenpegel kann die Kellerkonstruktion zerstören (Auftrieb/Einsturz). Nur kontrolliert absenken.',
          next:'prio' },
      ],
    },
    prio: {
      art: 'sc-water', time: '20:00',
      situation: 'Die Leitstelle meldet: dutzende weitere vollgelaufene Keller, dazu eine gemeldete hilflose Person. Wie priorisieren Sie?',
      decisions: [
        { text: 'Menschen in Gefahr zuerst, dann öffentliche Gefahren; Keller ohne Personengefahr nach Dringlichkeit, Kräfte bündeln',
          effects:{rettung:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. Bei Massenanfall kleiner Einsätze zählt Priorisierung nach Schutzzielen – Menschenleben zuerst, Sachwerte nach Dringlichkeit; Einsätze räumlich bündeln.',
          next:'ende' },
        { text: 'Der Reihe nach abarbeiten, wie gemeldet',
          effects:{rettung:-3, taktik:-1}, kind:'bad',
          feedback:'Falsch. Die Eingangsreihenfolge darf die Prioritäten nicht bestimmen – die hilflose Person hat Vorrang.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* ------------------------------------------------------ Sturm / Baum */
{
  id: 'ps-sturm', title: 'Sturm: Baum auf Fahrbahn & Person', role: 'Gruppenführer/in',
  level: 3, duration: 9, difficulty: 'Mittel', color: '#2e9e5b',
  briefing: 'Ein Sturm hat einen großen Baum auf eine Straße geworfen; eine Person soll darunter eingeklemmt sein, zudem hängt der Baum in einer Stromleitung. Sie führen die Gruppe. Die größten Gefahren: Spannung im Holz und die Stromleitung.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-storm', time: '03:15',
      situation: 'Der Baum liegt quer, Äste hängen in einer Freileitung, darunter ruft eine Person. Was ist Ihre erste Handlung?',
      decisions: [
        { text: 'Einsatzstelle absichern, Abstand zur Leitung halten, Netzbetreiber alarmieren – nicht unter der Leitung arbeiten',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. Der in der Leitung hängende Baum kann Spannung führen – Abstand halten, Netzbetreiber (Freischaltung) alarmieren, Bereich sichern, bevor gearbeitet wird.',
          next:'strom' },
        { text: 'Sofort mit der Motorsäge zur Person durchschneiden',
          effects:{sicherheit:-3, rettung:-1}, kind:'bad',
          feedback:'Lebensgefährlich. Die Stromleitung kann den Baum unter Spannung setzen. Erst Leitung freischalten lassen und die Baumspannung beurteilen.',
          next:'strom' },
      ],
    },
    strom: {
      art: 'sc-storm', time: '03:30',
      situation: 'Der Netzbetreiber bestätigt die Freischaltung. Die Person ist ansprechbar, der Stamm liegt gebogen (unter Spannung). Wie sägen Sie?',
      decisions: [
        { text: 'Spannung beurteilen (Druck-/Zugseite), Entlastungsschnitt setzen, nur ausgebildete Sägenführer, gesicherter Stand',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Vorbildlich. Der Stamm unter Spannung kann zurückschnellen/einklemmen. Druck-/Zugseite beurteilen, Entlastungsschnitt, nur ausgebildete Kräfte mit PSA.',
          next:'rettung' },
        { text: 'Einfach in der Mitte durchtrennen',
          effects:{sicherheit:-3}, kind:'bad',
          feedback:'Gefährlich. Ein gerader Schnitt im gespannten Stamm lässt ihn zurückschnellen oder klemmt die Säge ein. Erst Spannung entlasten.',
          next:'rettung' },
      ],
    },
    rettung: {
      art: 'sc-storm', time: '03:45',
      situation: 'Der Stamm ist entlastet und in Abschnitte getrennt. Die Person kann befreit werden. Wie gehen Sie vor?',
      decisions: [
        { text: 'Patientenschonend befreien, mit Rettungsdienst abstimmen, Person vor Nässe/Kälte schützen',
          effects:{rettung:+3, taktik:+1}, kind:'good',
          feedback:'Richtig. Schonende Befreiung in Abstimmung mit dem Rettungsdienst, Schutz vor Auskühlung – der Rettungsdienst führt medizinisch.',
          next:'ende' },
        { text: 'Person schnell wegziehen, egal wie',
          effects:{rettung:-2, sicherheit:-1}, kind:'bad',
          feedback:'Nur bei akuter Lebensgefahr gerechtfertigt. Sonst schonend und abgestimmt befreien, um Zusatzverletzungen zu vermeiden.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- Bahnunfall */
{
  id: 'ps-bahnunfall', title: 'Person im Gleisbereich', role: 'Zugführer/in',
  level: 4, duration: 12, difficulty: 'Schwer', color: '#931116',
  briefing: 'Eine Person ist im Bahnbereich verunglückt und eingeklemmt; die Oberleitung führt 15.000 Volt, Nachbargleise können befahren sein. Sie sind Einsatzleiter/in. Nichts geht ohne die Bahn: Erdung/Freischaltung und Gleissperrung sind zwingend.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-rail', time: '22:40',
      situation: 'Sie treffen ein. Die Person liegt am Gleis, die Oberleitung ist intakt und unter Spannung, Züge können auf Nachbargleisen fahren. Was zuerst?',
      decisions: [
        { text: 'Über die Leitstelle/Bahn: Fahrleitung erden/freischalten und Gleise sperren lassen; bis dahin Abstand halten',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Richtig. 15 kV und fahrende Züge sind tödlich. Ohne bestätigte Erdung/Freischaltung und Gleissperrung durch die Bahn wird nicht am Gleis gearbeitet.',
          next:'warten' },
        { text: 'Sofort ins Gleis zur Person, es zählt jede Sekunde',
          effects:{sicherheit:-3, rettung:-1}, kind:'bad',
          feedback:'Lebensgefährlich. Ungesichertes Betreten kann Sie durch Strom oder Zug töten – dann sind zwei Menschen in Gefahr. Erst Bahn-Koordination.',
          next:'warten' },
      ],
    },
    warten: {
      art: 'sc-rail', time: '22:52',
      situation: 'Die Bahn meldet: „Fahrleitung geerdet, Gleise gesperrt." Wie nutzen Sie die Wartezeit sinnvoll?',
      decisions: [
        { text: 'Rettung vorbereiten: Zugänge, Beleuchtung, Gerät bereitstellen, Rettungsdienst positionieren',
          effects:{taktik:+3, sicherheit:+1}, kind:'good',
          feedback:'Klug. Die Wartezeit wird zur Vorbereitung genutzt – so beginnt die Rettung in der Sekunde der Freigabe ohne Verzug.',
          next:'rettung' },
        { text: 'Untätig auf die Freigabe warten',
          effects:{taktik:-1}, kind:'mid',
          feedback:'Verschenkte Zeit. Zugänge, Licht und Gerät lassen sich schon vorbereiten, damit nach der Freigabe sofort gerettet wird.',
          next:'rettung' },
      ],
    },
    rettung: {
      art: 'sc-rail', time: '23:05',
      situation: 'Die Freigabe liegt vor, definierte Zugänge sind festgelegt. Wie führen Sie die Rettung?',
      decisions: [
        { text: 'Nur über gesicherte Zugänge, Sicherungsposten, patientenschonend mit dem Rettungsdienst, Nachbargleise beachten',
          effects:{rettung:+3, sicherheit:+2}, kind:'good',
          feedback:'Vorbildlich. Definierte Zugänge, Sicherungsposten und die Abstimmung mit dem Rettungsdienst – auch nach Freigabe bleibt Disziplin im Gleisbereich Pflicht.',
          next:'ende' },
        { text: 'Alle Kräfte quer über die Gleise zur Person',
          effects:{sicherheit:-2, taktik:-1}, kind:'bad',
          feedback:'Unkontrolliert. Auch nach Freigabe gilt: nur über festgelegte, gesicherte Zugänge – Ordnung im Gleisbereich schützt die Kräfte.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- Aufzug */
{
  id: 'ps-aufzug', title: 'Aufzug-Notbefreiung', role: 'Gruppenführer/in',
  level: 3, duration: 8, difficulty: 'Leicht', color: '#1e5fa8',
  briefing: 'In einem Wohnhaus stecken Personen im Aufzug zwischen zwei Etagen. Sie führen die Gruppe. Eine Aufzugbefreiung ist meist unspektakulär – aber Ruhe, richtige Reihenfolge und das Wissen um die Aufzugssteuerung verhindern Fehler und Panik.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-interior', time: '11:20',
      situation: 'Die Betroffenen klopfen und wirken beunruhigt, aber es besteht keine akute Gefahr. Was ist Ihr erster Schritt?',
      decisions: [
        { text: 'Kontakt aufnehmen, beruhigen, Zahl/Zustand der Personen klären; Aufzugsnotruf/Wartungsfirma und Bedienungsanleitung prüfen',
          effects:{rettung:+2, taktik:+3}, kind:'good',
          feedback:'Richtig. Zuerst Kontakt und Beruhigung – Panik ist die eigentliche Gefahr. Zustand klären und die Aufzugssteuerung/Notbefreiungsanleitung nutzen.',
          next:'befreiung' },
        { text: 'Sofort die Schachttür aufhebeln',
          effects:{sicherheit:-2, taktik:-1}, kind:'bad',
          feedback:'Zu hastig. Ohne Kenntnis der Kabinenposition und ohne Stromfreischaltung droht Absturz-/Quetschgefahr. Erst Lage klären und Steuerung sichern.',
          next:'befreiung' },
      ],
    },
    befreiung: {
      art: 'sc-interior', time: '11:30',
      situation: 'Die Kabine steht knapp unterhalb einer Etage. Wie befreien Sie?',
      decisions: [
        { text: 'Aufzug stromlos schalten/gegen Bewegung sichern, Kabine per Notbefreiung bündig fahren, dann Türen öffnen',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Genau. Aufzug gegen Bewegung sichern, mit der Notbefreiungseinrichtung die Kabine bündig zur Etage bringen, dann gefahrlos aussteigen lassen.',
          next:'ende' },
        { text: 'Personen durch den Spalt nach oben herausklettern lassen',
          effects:{sicherheit:-3, rettung:-1}, kind:'bad',
          feedback:'Gefährlich. Herausklettern aus einer nicht gesicherten Kabine birgt Absturz-/Quetschgefahr. Kabine erst sichern und bündig fahren.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------------- CO-Alarm */
{
  id: 'ps-coalarm', title: 'CO-Alarm / unklare Rauchmeldung', role: 'Gruppenführer/in',
  level: 3, duration: 9, difficulty: 'Mittel', color: '#8e44ad',
  briefing: 'Ein CO-Melder hat in einer Wohnung ausgelöst; Bewohner klagen über Kopfschmerzen und Übelkeit. Sie führen die Gruppe. Kohlenstoffmonoxid ist unsichtbar und geruchlos – nur Messen schafft Klarheit, und Eigenschutz ist Pflicht.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-interior', time: '06:40',
      situation: 'Zwei Bewohner sind benommen. Der CO-Melder piept. Was tun Sie zuerst?',
      decisions: [
        { text: 'Personen sofort an die frische Luft bringen, Rettungsdienst, mit CO-Warner/Messgerät die Konzentration prüfen',
          effects:{rettung:+3, sicherheit:+2}, kind:'good',
          feedback:'Richtig. CO wirkt tückisch – Betroffene sofort ins Freie, Rettungsdienst, und mit dem Messgerät die tatsächliche CO-Konzentration bestimmen.',
          next:'quelle' },
        { text: 'Erst die Wohnung durchsuchen, dann die Bewohner versorgen',
          effects:{rettung:-3, sicherheit:-1}, kind:'bad',
          feedback:'Falsch. Menschenrettung zuerst – die benommenen Bewohner müssen sofort raus. Ohne Eigenschutz (CO-Warner/Atemschutz) auch keine unnötige Suche.',
          next:'quelle' },
      ],
    },
    quelle: {
      art: 'sc-interior', time: '06:50',
      situation: 'Das Messgerät zeigt erhöhte CO-Werte. Wie gehen Sie in der Wohnung vor?',
      decisions: [
        { text: 'Nur mit Eigenschutz (Messgerät/Atemschutz), Quelle suchen (Therme/Ofen), Gerät abschalten, quer lüften',
          effects:{sicherheit:+3, taktik:+2}, kind:'good',
          feedback:'Genau. CO-Quellen sind oft defekte Thermen/Öfen. Mit Eigenschutz vorgehen, Gerät abschalten, gründlich querlüften und Werte kontrollieren.',
          next:'abschluss' },
        { text: 'Ohne Messgerät und Schutz die Wohnung lüften und für sicher erklären',
          effects:{sicherheit:-2, taktik:-1}, kind:'bad',
          feedback:'Zu leichtfertig. Ohne Messung ist die Gefahr unbekannt; ohne Eigenschutz gefährden Sie sich selbst. Immer messen und mit Schutz arbeiten.',
          next:'abschluss' },
      ],
    },
    abschluss: {
      art: 'sc-interior', time: '07:15',
      situation: 'Die Werte sinken nach dem Lüften. Wie schließen Sie ab?',
      decisions: [
        { text: 'Erst bei unbedenklichen Messwerten freigeben, defektes Gerät stilllegen, Fachfirma/Schornsteinfeger hinweisen',
          effects:{taktik:+3}, kind:'good',
          feedback:'Souverän. Freigabe nur bei unbedenklichen Messwerten, das defekte Gerät stilllegen und auf die notwendige Fachprüfung hinweisen.',
          next:'ende' },
        { text: 'Sofort freigeben, sobald es nicht mehr piept',
          effects:{sicherheit:-2}, kind:'bad',
          feedback:'Verfrüht. Der Melderton allein ist kein Messwert. Erst mit dem Messgerät unbedenkliche Werte bestätigen, dann freigeben.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

/* --------------------------------------------------- Industrie-/Hallenbrand */
{
  id: 'ps-hallenbrand', title: 'Industrie- & Hallenbrand', role: 'Zugführer/in',
  level: 4, duration: 13, difficulty: 'Schwer', color: '#c0392b',
  briefing: 'Eine Lagerhalle in Leichtbauweise steht in Vollbrand, Menschen werden nicht vermisst. Sie sind Einsatzleiter/in. Bei ausgedehnten Hallenbränden ohne Menschenleben ist die entscheidende Führungsleistung, defensiv vorzugehen und Einsturzbereiche zu meiden.',
  start: 'ankunft',
  nodes: {
    ankunft: {
      art: 'sc-industrial', time: '02:10',
      situation: 'Die Halle brennt über große Fläche, das Leichtbaudach droht einzustürzen. Personen sind sicher draußen. Wie entscheiden Sie sich?',
      decisions: [
        { text: 'Defensiv (Außenangriff): Einsturzbereiche meiden, Ausbreitung auf Nachbargebäude verhindern (Riegelstellung)',
          effects:{sicherheit:+3, taktik:+3}, kind:'good',
          feedback:'Richtig. Vollbrand ohne Menschenleben + Einsturzgefahr = defensiver Außenangriff. Kräfte aus dem Trümmerschatten halten und die Ausbreitung riegeln.',
          next:'wasser' },
        { text: 'Innenangriff, um die Halle zu retten',
          effects:{sicherheit:-3, taktik:-2}, kind:'bad',
          feedback:'Lebensgefährlich. Für Sachwerte riskiert man keine Einsatzkräfte unter einem einsturzgefährdeten Leichtbaudach. Defensiv vorgehen.',
          next:'wasser' },
      ],
    },
    wasser: {
      art: 'sc-industrial', time: '02:25',
      situation: 'Für den Löschangriff wird sehr viel Wasser benötigt, das Hydrantennetz reicht nicht. Was veranlassen Sie?',
      decisions: [
        { text: 'Wasserförderung über lange Wegstrecke / offene Entnahme aufbauen, Löschwasserrückhaltung bedenken',
          effects:{taktik:+3, sicherheit:+1}, kind:'good',
          feedback:'Genau. Große Flächenbrände brauchen große Wassermengen – Förderung über lange Wegstrecke oder offene Entnahme. Zugleich kontaminiertes Löschwasser zurückhalten (Umwelt).',
          next:'gefahren' },
        { text: 'Mit dem vorhandenen Tankwasser auskommen',
          effects:{taktik:-2}, kind:'bad',
          feedback:'Unrealistisch. Der Tank ist in Minuten leer. Ohne geplante Wasserversorgung bricht der Löschangriff zusammen.',
          next:'gefahren' },
      ],
    },
    gefahren: {
      art: 'sc-industrial', time: '02:45',
      situation: 'Der Rauch zieht über ein Wohngebiet, und in der Halle werden Gefahrstoffe vermutet. Was tun Sie?',
      decisions: [
        { text: 'Bevölkerung warnen (Fenster/Türen schließen), Messtrupp/Fachberater, Löschwasser und Umwelt im Blick behalten',
          effects:{taktik:+3, rettung:+1}, kind:'good',
          feedback:'Vorbildlich. Bei Brandrauch über Wohngebiet die Bevölkerung warnen, Messtrupp/Fachberater einbinden und Umwelt-/Löschwasserschutz koordinieren – umfassende Führung.',
          next:'ende' },
        { text: 'Rauch ignorieren, nur weiter löschen',
          effects:{taktik:-2, rettung:-1}, kind:'bad',
          feedback:'Unvollständig. Brandrauch über Wohngebiet ist eine Gefahr für die Bevölkerung – Warnung und Messung gehören zur Lagebewältigung.',
          next:'ende' },
      ],
    },
    ende: { terminal: true },
  },
},

];

