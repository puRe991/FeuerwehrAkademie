/* =========================================================================
   MODULES-EXTRA — Weitere vollständige Module (S–Z), damit die Akademie die
   Feuerwehrausbildung wirklich von A bis Z abbildet.
   Orientiert an den Themengebieten der Truppausbildung (FwDV 2) und den
   gängigen Fach-/Sonderlehrgängen. Wird in curriculum.js an MODULES angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const MODULES_EXTRA = [

/* ======================================================================= S */
{
  id: 's-rettung', code: 'S', title: 'Rettung & Selbstrettung',
  category: 'einsatz', level: 2, icon: 'rope', duration: 45,
  summary: 'Menschen retten und sich selbst in Sicherheit bringen: Rettungsgriffe, Rettungsgeräte, Selbstretten und der Rautek-Rettungsgriff.',
  objectives: [
    'Rettungsgriffe und Tragehilfen sicher anwenden',
    'Rettungsgeräte der Feuerwehr benennen',
    'Selbstrettung und Selbstschutz durchführen',
    'Prioritäten der Menschenrettung einordnen',
  ],
  tags: ['Rettung', 'Selbstrettung', 'Rautek', 'Rettungsgeräte'],
  lessons: [
    {
      id: 's1', title: 'Menschen retten', duration: 22,
      blocks: [
        H2('grundsatz', 'Retten hat Vorrang'),
        P('Die Rettung von Menschen aus Lebensgefahr ist die vornehmste Aufgabe der Feuerwehr und hat absoluten Vorrang. „Retten" bedeutet, Menschen und Tiere aus einer lebensbedrohlichen Zwangslage zu befreien.'),
        DEF('Retten vs. Bergen', 'Lebende Menschen werden gerettet, tote Menschen und Sachwerte werden geborgen. Diese Unterscheidung ist mehr als Wortklauberei – sie bestimmt Priorität und Vorgehen.'),
        H2('griffe', 'Rettungsgriffe & Tragehilfen'),
        TBL(['Methode', 'Anwendung'],[
          ['Rautek-Rettungsgriff', 'schnelles Ziehen einer nicht gehfähigen Person aus dem Gefahrenbereich'],
          ['Gehende Rettung', 'stützen/führen einer noch gehfähigen Person'],
          ['Rettungstuch', 'Transport nicht gehfähiger Personen über kurze Strecken'],
          ['Krankentrage / Schleifkorbtrage', 'schonender, längerer Transport'],
          ['Tragering / Mehrhelfer-Griffe', 'schweres Heben im Team'],
        ]),
        STEPS(
          'Eigensicherung und Lage prüfen (PSA, Atemschutz, Rückweg)',
          'Person ansprechen, Zustand grob einschätzen',
          'Geeignete Rettungsmethode wählen (Zustand, Weg, Gewicht)',
          'Aus dem Gefahrenbereich bringen, dann medizinische Versorgung',
          'An Rettungsdienst übergeben, Lage melden'),
        CO('danger', 'Eigenschutz bleibt Bedingung', 'Keine Rettung ohne Eigenschutz. Im Brandrauch nur mit Atemschutz und Sicherheitstrupp, an Absturzkanten nur gesichert. Ein verunglückter Retter wird selbst zum Patienten.'),
      ],
    },
    {
      id: 's2', title: 'Selbstretten & Selbstschutz', duration: 23,
      blocks: [
        H2('warum', 'Wenn der Rückweg abgeschnitten ist'),
        P('Gerät ein Trupp im Innenangriff in eine Notlage (Rückweg verlegt, Einsturz, Luftmangel), muss er sich notfalls selbst retten. Die Selbstrettung ist die letzte Möglichkeit, wenn kein normaler Rückzug mehr geht.'),
        H2('mittel', 'Mittel der Selbstrettung'),
        UL(
          '<b>Feuerwehrleine mit Haltegurt:</b> Abrutschen/Ablassen über Fenster (nur im Notfall)',
          '<b>Wandhangeln / Orientierung an der Wand:</b> Rückweg suchen',
          '<b>Notruf „Mayday"</b> absetzen und auf den Sicherheitstrupp warten',
          '<b>Türen als Rückzugsschutz</b> nutzen (Rauch/Wärme aussperren)'),
        DEF('Selbstretten über die Leine', 'Mit Feuerwehrleine und Haltegurt kann sich eine Einsatzkraft im äußersten Notfall aus einem Fenster ablassen. Das ist eine Notmaßnahme mit hohem Risiko – der geordnete Rückzug hat immer Vorrang.'),
        CO('warn', 'Ruhe rettet Luft', 'In der Notlage entscheidet Ruhe über Leben und Tod: ruhig atmen spart Luft, Panik vervielfacht den Verbrauch. Position halten, sich bemerkbar machen (rufen, klopfen, Lampe), Kräfte einteilen.'),
        H2('vorbeugen', 'Notlagen vermeiden'),
        KF(
          'Rückweg merken und sichern (Schlauch als Leitlinie)',
          'Rechtzeitig umkehren – Luftreserve für den Rückweg einplanen',
          'Als Trupp zusammenbleiben, ständigen Kontakt halten',
          'Auf Warnsignale (Hitze, Rauchverhalten) achten'),
      ],
    },
  ],
},

/* ======================================================================= T */
{
  id: 't-wasserversorgung', code: 'T', title: 'Löschwasserversorgung & Wasserförderung',
  category: 'technik', level: 2, icon: 'water', duration: 45,
  summary: 'Vom Hydranten bis zur langen Wegstrecke: Löschwasserquellen, Saugbetrieb, Wasserförderung und die Rolle der Wasserversorgung im Einsatz.',
  objectives: [
    'Löschwasserquellen unterscheiden (abhängig/unabhängig)',
    'Den Aufbau der Wasserversorgung beschreiben',
    'Wasserförderung über lange Wegstrecke erklären',
    'Kavitation und Druckverluste einschätzen',
  ],
  tags: ['Wasserversorgung', 'Hydrant', 'Wasserförderung', 'Saugbetrieb'],
  lessons: [
    {
      id: 't1', title: 'Löschwasserquellen & Entnahme', duration: 22,
      blocks: [
        H2('quellen', 'Woher das Wasser kommt'),
        TBL(['Quelle', 'Art', 'Merkmal'],[
          ['Überflurhydrant', 'abhängig (Netz)', 'schnell, sichtbar'],
          ['Unterflurhydrant', 'abhängig (Netz)', 'mit Standrohr, geschützt'],
          ['Offenes Gewässer', 'unabhängig', 'Saugbetrieb, ergiebig'],
          ['Löschteich / Zisterne', 'unabhängig', 'bevorratet, gekennzeichnet'],
          ['Fahrzeugtank', 'mitgeführt', 'schneller Erstangriff'],
        ]),
        DEF('Abhängig / unabhängig', 'Abhängige Löschwasserversorgung stammt aus dem Trinkwassernetz (Hydrant) und ist durch dessen Leistung begrenzt. Unabhängige Versorgung nutzt offene Gewässer/Behälter – aufwendiger, aber ergiebig und netzunabhängig.'),
        H2('saugbetrieb', 'Wasserentnahme aus offenem Gewässer'),
        STEPS(
          'Saugschläuche kuppeln, Saugkorb mit Ventilleine sichern',
          'Halteleine anbringen, Saugleitung zu Wasser bringen',
          'Entlüftungseinrichtung betätigen, bis Wasser ansteht',
          'Pumpe auf Betriebsdruck bringen, Druckabgang öffnen'),
        CO('warn', 'Saughöhe & Sauberkeit', 'Praktische Saughöhe ca. 7,5 m. Saugkorb frei von Schmutz halten und nicht auf den Grund absinken lassen (Verstopfung, Kavitation).'),
      ],
    },
    {
      id: 't2', title: 'Wasserförderung über lange Wegstrecke', duration: 23,
      blocks: [
        H2('warum', 'Wenn das Objekt weit weg ist'),
        P('Reicht die Löschwassermenge am Brandobjekt nicht, wird über eine lange B-Schlauchstrecke gefördert. Bei großen Entfernungen oder Höhenunterschieden kommen Verstärkerpumpen zum Einsatz.'),
        KF(
          'Reibungsverlust steigt mit Länge und Förderstrom',
          'Je 10 m Höhenunterschied ca. 1 bar Druckverlust',
          'Eingangsdruck an der Folgepumpe min. 1,5 bar halten',
          'Kommunikation zwischen den Pumpen ist entscheidend'),
        DEF('Pendelverkehr', 'Alternative zur Schlauchstrecke: Tanklöschfahrzeuge fahren im Wechsel zwischen Wasserentnahme und Einsatzstelle. Sinnvoll bei unwegsamem Gelände oder Vegetationsbränden, wo keine durchgehende Leitung möglich ist.'),
        H2('kavitation', 'Kavitation vermeiden'),
        CO('danger', 'Kavitation', 'Zu hohe Saughöhe, zu hohe Drehzahl oder ein verstopfter Saugkorb senken den Druck lokal unter den Dampfdruck – Dampfblasen bilden sich, die Förderung reißt ab und die Pumpe kann Schaden nehmen.'),
        H2('planung', 'Die Wasserversorgung planen'),
        P('Der Gruppenführer plant die Wasserversorgung parallel zum Erstangriff – der Fahrzeugtank überbrückt die Zeit, bis die Zubringerleitung steht. „Ohne Wasser kein Löschangriff": die Wasserversorgung ist oft der eigentliche Flaschenhals.'),
      ],
    },
  ],
},

/* ======================================================================= U */
{
  id: 'u-knoten', code: 'U', title: 'Knoten, Stiche & Bunde',
  category: 'technik', level: 2, icon: 'rope', duration: 35,
  summary: 'Das Handwerk mit der Leine: die wichtigsten feuerwehrtechnischen Knoten, Stiche und Bunde und ihre richtige Anwendung.',
  objectives: [
    'Die wichtigsten Feuerwehrknoten benennen und zuordnen',
    'Anwendungszwecke der Knoten unterscheiden',
    'Sicherheitsregeln beim Arbeiten mit Leinen kennen',
    'Leinen und Knoten richtig pflegen und prüfen',
  ],
  tags: ['Knoten', 'Stiche', 'Leine', 'Bunde'],
  lessons: [
    {
      id: 'u1', title: 'Die wichtigsten Knoten', duration: 20,
      blocks: [
        H2('warum', 'Warum Knoten sitzen müssen'),
        P('Knoten sichern Geräte, Personen und die Einsatzkraft selbst. Ein falscher oder schlecht gesteckter Knoten kann versagen – deshalb müssen die wichtigsten Knoten „im Schlaf" sitzen.'),
        TBL(['Knoten', 'Zweck'],[
          ['Mastwurf', 'Befestigen an Rundmaterial, Geräte hochziehen'],
          ['Zimmermannsschlag (Schlag & Rundtörn)', 'schnelles Befestigen an Balken, verstellbar'],
          ['Pfahlstich (Rettungsknoten)', 'feste Schlinge, z. B. zum Sichern einer Person'],
          ['Doppelter Ankerstich', 'Bandschlinge am Anschlagpunkt'],
          ['Kreuzknoten / Weberknoten', 'zwei Leinen verbinden'],
          ['Achterknoten', 'sichere Endschlaufe, Stopperknoten'],
        ]),
        CO('tip', 'Üben, üben, üben', 'Knoten lernt man nur durch Wiederholung – bis sie unter Stress, mit Handschuhen und im Dunkeln sicher gelingen. Regelmäßiges Üben im Dienst zahlt sich im Ernstfall aus.'),
        H2('mastwurf', 'Der Mastwurf – der Allrounder'),
        P('Der Mastwurf ist der meistgenutzte Feuerwehrknoten: Er befestigt die Leine an Rundmaterial, dient zum Hochziehen von Geräten und lässt sich unter Last nachjustieren. Wichtig: sauber legen und mit einem Spierenstich/Halbschlag sichern.'),
      ],
    },
    {
      id: 'u2', title: 'Leinen, Anwendung & Sicherheit', duration: 15,
      blocks: [
        H2('leinen', 'Feuerwehrleinen'),
        DEF('Feuerwehrleine', 'Genormte Leine (meist 30 m) im Leinenbeutel, u. a. zum Sichern, Halten, Hochziehen von Geräten und zur Not-Selbstrettung. Sie ist keine Absturzsicherung – dafür braucht es den Gerätesatz Absturzsicherung.'),
        H2('anwendung', 'Typische Anwendungen'),
        UL(
          'Geräte kontrolliert hochziehen (Mastwurf + Halbschlag)',
          'Absperren und Kennzeichnen von Bereichen',
          'Sichern von Personen/Gegenständen',
          'Rückwegsicherung und Orientierung im Innenangriff'),
        H2('sicherheit', 'Sicherheit & Pflege'),
        KF(
          'Leinen vor und nach Gebrauch auf Schäden prüfen',
          'Beschädigte oder überlastete Leinen aussondern',
          'Vor Nässe, Chemie, scharfen Kanten und Hitze schützen',
          'Regelmäßige dokumentierte Prüfung durch Sachkundige'),
        CO('warn', 'Kanten schützen', 'Über scharfe Kanten geführte Leinen können unter Last blitzartig reißen. Immer Kantenschutz verwenden und die Leine nicht ruckartig belasten.'),
      ],
    },
  ],
},

/* ======================================================================= V */
{
  id: 'v-vegetationsbrand', code: 'V', title: 'Vegetations- & Waldbrandbekämpfung',
  category: 'einsatz', level: 3, icon: 'fire', duration: 45,
  summary: 'Bekämpfung von Flächen-, Vegetations- und Waldbränden: Brandverhalten, Taktik, Sicherheit (LACES) und Wassermanagement im Gelände.',
  objectives: [
    'Das besondere Brandverhalten von Vegetationsbränden erklären',
    'Taktiken der Vegetationsbrandbekämpfung anwenden',
    'Sicherheitsregeln (LACES) einhalten',
    'Wassermanagement im Gelände organisieren',
  ],
  tags: ['Vegetationsbrand', 'Waldbrand', 'LACES', 'Flächenbrand'],
  lessons: [
    {
      id: 'v1', title: 'Brandverhalten & Taktik', duration: 22,
      blocks: [
        H2('verhalten', 'Wie Vegetationsbrände sich ausbreiten'),
        P('Vegetationsbrände werden stark von <b>Wind, Gelände und Brennstoff</b> bestimmt. Wind treibt die Feuerfront, Hangaufwärts breitet sich Feuer deutlich schneller aus (Vorwärmung), trockener Bewuchs beschleunigt alles.'),
        KF(
          'Wind bestimmt Richtung und Geschwindigkeit der Front',
          'Bergauf brennt es schneller (Hangneigung wirkt wie Wind)',
          'Bodenfeuer, Lauffeuer und (gefährlich) Kronenfeuer unterscheiden',
          'Flugfeuer entzündet Bereiche weit vor der Front'),
        H2('taktik', 'Taktiken der Bekämpfung'),
        TBL(['Verfahren', 'Prinzip'],[
          ['Direkter Angriff', 'Wasser/Werkzeug direkt an der Flammenfront'],
          ['Indirekter Angriff', 'Wundstreifen/Riegel vor der Front anlegen'],
          ['Flankenangriff', 'Front von den Seiten her einengen'],
          ['Riegelstellung', 'bedrohte Objekte/Siedlung schützen'],
        ]),
        DEF('Wundstreifen', 'Ein von brennbarem Material befreiter Geländestreifen (Werkzeug, Räumgerät, teils Gegenfeuer), der dem Feuer den Brennstoff entzieht und die Ausbreitung stoppt. Bei begrenztem Wasser oft wirksamer als reines Ablöschen.'),
        CO('tip', 'Schwerpunkt: bedrohte Werte', 'Bei begrenzten Kräften zuerst Menschen und bedrohte Objekte (Siedlung, Infrastruktur) schützen – nicht das „schönste Feuer" bekämpfen.'),
      ],
    },
    {
      id: 'v2', title: 'Sicherheit (LACES) & Wassermanagement', duration: 23,
      blocks: [
        H2('gefahr', 'Die Hauptgefahr: Einschluss'),
        P('Die größte Gefahr für Einsatzkräfte bei Vegetationsbränden ist der plötzliche Einschluss durch eine Winddrehung oder ein schnelles Überlaufen der Front. Dagegen schützt das Merkschema <b>LACES</b>.'),
        MNE([{l:'L',w:'Lookout'},{l:'A',w:'Awareness'},{l:'C',w:'Communication'},{l:'E',w:'Escape routes'},{l:'S',w:'Safety zones'}],
          'Beobachter (Lookout), Lageaufmerksamkeit (Awareness/Anchor), Kommunikation, festgelegte Fluchtwege (Escape routes) und Sicherheitszonen (Safety zones) – vor Beginn der Arbeit festlegen.'),
        CO('danger', 'Winddrehung', 'Eine Winddrehung kann die Front in Sekunden auf die eigene Position lenken. Fluchtwege und Sicherheitszonen müssen immer bekannt und erreichbar sein; im Zweifel sofort zurückziehen.'),
        H2('wasser', 'Wasser im Gelände managen'),
        UL(
          'Wasser ist knapp – sparsam und gezielt einsetzen',
          'Pendelverkehr mit TLF, mobile Löschwasserbehälter (Faltbehälter)',
          'Löschrucksäcke, Patschen und Handwerkzeug für den indirekten Angriff',
          'Nachschub und Wasserentnahmestellen frühzeitig organisieren'),
        H2('nachsorge', 'Nachlöschen & Glutnester'),
        CO('warn', 'Rückzündung', 'Vegetationsbrände flammen aus Glutnestern (Wurzeln, Torf, Totholz) wieder auf. Systematische Nachlöscharbeiten mit Wärmebildkamera und eine Brandwache verhindern das Wiederaufflammen – der Einsatz ist erst mit „Feuer aus" beendet.'),
      ],
    },
  ],
},

/* ======================================================================= W */
{
  id: 'w-naturgefahren', code: 'W', title: 'Unwetter, Hochwasser & Naturgefahren',
  category: 'einsatz', level: 3, icon: 'water', duration: 40,
  summary: 'Die häufigsten Einsätze: Sturm, Starkregen, Hochwasser. Typische Lagen, Gefahren, Sandsack- und Pumpeneinsatz sowie Deichverteidigung.',
  objectives: [
    'Typische Unwetter- und Hochwasserlagen einschätzen',
    'Gefahren bei Sturm- und Wassereinsätzen erkennen',
    'Maßnahmen (Pumpen, Sandsäcke, Deichverteidigung) beschreiben',
    'Eigensicherung bei Naturgefahren einhalten',
  ],
  tags: ['Unwetter', 'Hochwasser', 'Sturm', 'Deich', 'Naturgefahren'],
  lessons: [
    {
      id: 'w1', title: 'Sturm & Starkregen', duration: 20,
      blocks: [
        H2('lagen', 'Massenanfall kleiner Einsätze'),
        P('Unwetter erzeugen viele gleichzeitige Einsätze: umgestürzte Bäume, abgedeckte Dächer, vollgelaufene Keller. Die Herausforderung ist weniger der einzelne Einsatz als die <b>Priorisierung und Koordination der Masse</b>.'),
        KF(
          'Menschen in Gefahr zuerst, dann Gefahren im öffentlichen Raum, dann Sachwerte',
          'Abarbeitung nach Dringlichkeit, nicht nach Eingangsreihenfolge',
          'Kräfte bündeln, Abschnitte bilden, Bürger einbinden',
          'Eigene Kräfte schonen (Ablösung, Verpflegung, Durchhaltefähigkeit)'),
        H2('sturm', 'Gefahren bei Sturmeinsätzen'),
        CO('danger', 'Baum & Stromleitung', 'Unter Spannung stehende Bäume (Windwurf) können beim Schneiden schlagartig zurückschnellen. Herabhängende Stromleitungen sind lebensgefährlich – Abstand halten, Netzbetreiber alarmieren, erst nach Freischaltung arbeiten.'),
        UL(
          'Motorsäge nur durch Ausgebildete, mit Schnittschutz',
          'Absturzgefahr auf Dächern – sichern',
          'Loses Material (Ziegel, Bleche) kann herabfallen',
          'Einsatzstelle gegen Verkehr absichern'),
      ],
    },
    {
      id: 'w2', title: 'Hochwasser & Deichverteidigung', duration: 20,
      blocks: [
        H2('wasser', 'Wasser auspumpen'),
        P('Bei vollgelaufenen Kellern gilt: erst Gefahren prüfen (Strom abschalten, Öltanks, Gasgeräte), dann pumpen. Wichtig: nicht gegen anstehendes Grundwasser leerpumpen, solange draußen der Pegel hoch ist (Auftrieb/Einsturzgefahr).'),
        CO('warn', 'Kellerfalle', 'Keller nicht leerpumpen, solange der Außenwasserstand hoch ist – der Wasserdruck von außen kann Wände eindrücken oder den Boden anheben. Und: Strom vor dem Betreten abschalten (Stromschlaggefahr im Wasser).'),
        H2('deich', 'Deichverteidigung'),
        DEF('Deichverteidigung', 'Maßnahmen, um einen Deich bei Hochwasser vor Überströmung und Aufweichen zu schützen: Sandsäcke zur Erhöhung, Abdecken der Böschung, Bekämpfen von Sicker-/Quellstellen (Qualmwasser). Fachberatung und Deichläufer sind entscheidend.'),
        STEPS(
          'Sandsäcke richtig füllen (ca. 2/3 voll) und im Verband verlegen',
          'Im Läuferverband versetzt schichten, Fugen versetzen',
          'Sickerstellen mit Quellkade/Sandsackring beruhigen (nicht abdichten!)',
          'Deich laufend kontrollieren (Deichläufer), Auffälligkeiten melden'),
        CO('danger', 'Strömung unterschätzt', 'Schon 30 cm strömendes Wasser können einen Menschen umreißen, 60 cm ein Auto forttragen. Wassereinsätze nur mit Rettungsweste, Sicherung und ausgebildeten Kräften – Fließgewässer niemals unterschätzen.'),
      ],
    },
  ],
},

/* ======================================================================= X */
{
  id: 'x-wasserrettung', code: 'X', title: 'Wasserrettung, Eis & Bootsdienst',
  category: 'einsatz', level: 3, icon: 'water', duration: 35,
  summary: 'Rettung aus und auf dem Wasser: Selbstschutz, Rettungsmittel, Verhalten bei Eisunfällen und Grundlagen des Bootseinsatzes.',
  objectives: [
    'Eigensicherung bei Wassereinsätzen sicherstellen',
    'Rettungsmittel und Rettungsreihenfolge anwenden',
    'Verhalten bei Eisunfällen erklären',
    'Grundlagen des Bootsdienstes beschreiben',
  ],
  tags: ['Wasserrettung', 'Eisrettung', 'Boot', 'Rettungsweste'],
  lessons: [
    {
      id: 'x1', title: 'Rettung aus dem Wasser', duration: 18,
      blocks: [
        H2('eigenschutz', 'Eigenschutz zuerst'),
        P('Wasserrettung ist gefährlich: Strömung, Kälte, Sichttrübung und panische Personen. Ohne Ausbildung, Rettungsweste und Sicherung geht niemand ins oder ans Wasser.'),
        H2('reihenfolge', 'Rettungsreihenfolge'),
        MNE([{l:'R',w:'Rufen'},{l:'W',w:'Werfen'},{l:'F',w:'Fahren'},{l:'S',w:'Schwimmen'}],
          'Zuerst zurufen/anweisen, dann Rettungsmittel werfen (Wurfsack, Rettungsring), dann mit Boot/Gerät fahren, und nur als letztes und nur durch ausgebildete Rettungsschwimmer schwimmen.'),
        UL(
          '<b>Wurfsack / Rettungsleine:</b> vom sicheren Ufer aus',
          '<b>Rettungsring / Rettungsstange:</b> Reichweite verlängern',
          '<b>Leiter / Steckleiter:</b> als Rettungsbrücke',
          '<b>Boot</b> für die Rettung auf offenem Wasser'),
        CO('danger', 'Nie ungesichert nachspringen', 'Die häufigste Ursache für tote Retter ist der ungesicherte Sprung ins Wasser. Immer erst Rufen–Werfen–Fahren, schwimmen nur als absolute Ausnahme durch Spezialkräfte.'),
      ],
    },
    {
      id: 'x2', title: 'Eisunfälle & Bootsdienst', duration: 17,
      blocks: [
        H2('eis', 'Eingebrochen ins Eis'),
        P('Bei Eisunfällen zählt jede Minute (Unterkühlung), aber das Eis trägt die Retter oft nicht. Vorgehen mit größtmöglicher Lastverteilung und Sicherung.'),
        STEPS(
          'Betroffenen beruhigen und anweisen (Rufen)',
          'Rettungsmittel zuwerfen/zuschieben (Leiter, Wurfsack, Steckleiter)',
          'Retter nur gesichert und mit Lastverteilung (liegend, Leiter) aufs Eis',
          'Betroffenen flach herausziehen, vor Unterkühlung schützen',
          'Vorsichtiger, schonender Transport – Bergungstod-Gefahr'),
        CO('warn', 'Unterkühlung', 'Stark unterkühlte Personen dürfen nicht ruckartig bewegt oder aktiv aufgewärmt werden (Bergungstod-Gefahr). Schonend lagern, vor weiterer Auskühlung schützen, Rettungsdienst.'),
        H2('boot', 'Bootsdienst – Grundlagen'),
        UL(
          'Rettungsweste ist Pflicht für alle an Bord',
          'Bootsführer verantwortet Besatzung, Beladung und Fahrweise',
          'Strömung, Hindernisse und Wassertiefe beachten',
          'Kommunikation zum Ufer/zur Einsatzleitung sicherstellen'),
        DEF('Rettungsweste vs. Schwimmweste', 'Eine echte Rettungsweste dreht auch eine bewusstlose Person in die sichere Rückenlage (ohnmachtssicher). Einfache Schwimmhilfen leisten das nicht – im Feuerwehreinsatz gehören ohnmachtssichere Rettungswesten getragen.'),
      ],
    },
  ],
},

/* ======================================================================= Y */
{
  id: 'y-motorsaege', code: 'Y', title: 'Motorkettensäge & technische Geräte',
  category: 'technik', level: 3, icon: 'wrench', duration: 35,
  summary: 'Sicherer Umgang mit Motorkettensäge, Trennschleifer und weiteren Kraftgeräten: Aufbau, Schutzausrüstung, Schnitttechnik und Gefahren.',
  objectives: [
    'Aufbau und Sicherheitseinrichtungen der Motorsäge kennen',
    'Erforderliche Schutzausrüstung benennen',
    'Grundlagen der Schnitttechnik und Gefahren verstehen',
    'Weitere Kraftgeräte sicher einordnen',
  ],
  tags: ['Motorsäge', 'Kettensäge', 'Trennschleifer', 'Schnittschutz'],
  lessons: [
    {
      id: 'y1', title: 'Motorsäge: Aufbau & Sicherheit', duration: 20,
      blocks: [
        H2('einsatz', 'Wozu die Säge?'),
        P('Die Motorkettensäge kommt bei Sturm (Windwurf), technischer Hilfe und zur Schaffung von Zugängen zum Einsatz. Sie ist ein hochgefährliches Gerät – nur ausgebildete Kräfte (Modul „Motorkettensägenführer") dürfen sie bedienen.'),
        H2('psa', 'Persönliche Schutzausrüstung'),
        KF(
          'Schnittschutzhose und ggf. Schnittschutzjacke',
          'Helm mit Gesichts-/Gehörschutz',
          'Schnittschutzstiefel und griffsichere Handschuhe',
          'Enganliegende Kleidung, nichts Loses'),
        H2('sicherheit', 'Sicherheitseinrichtungen & Gefahren'),
        DEF('Kettenbremse & Rückschlag (Kickback)', 'Berührt die obere Spitze der Schiene Material, kann die Säge blitzartig nach oben zum Bediener zurückschlagen (Kickback). Die Kettenbremse stoppt die Kette bei Rückschlag – dennoch: nie mit der Schienenspitze arbeiten.'),
        CO('danger', 'Spannung im Holz', 'Umgestürzte/verkeilte Bäume stehen unter Spannung: Beim Durchtrennen kann das Holz schlagartig zurückschnellen oder die Säge einklemmen. Spannungsverhältnisse vor dem Schnitt beurteilen (Druck-/Zugseite), sicheren Stand wählen, nie allein arbeiten.'),
      ],
    },
    {
      id: 'y2', title: 'Weitere Kraftgeräte', duration: 15,
      blocks: [
        H2('geraete', 'Trennschleifer & Co.'),
        TBL(['Gerät', 'Verwendung', 'Hauptgefahr'],[
          ['Trennschleifer', 'Metall, Gitter, Bleche', 'Funkenflug, Scheibenbruch, Brand'],
          ['Rettungssäge / Säbelsäge', 'Bleche, Kunststoffe', 'Späne, Klemmen'],
          ['Bohrhammer / Kombigerät', 'Beton, Mauerwerk', 'Staub, Verkanten'],
          ['Hebekissen', 'schwere Lasten heben', 'Wegrutschen, Überlast'],
        ]),
        CO('warn', 'Funkenflug', 'Der Trennschleifer erzeugt heißen Funkenflug – Brandgefahr und Gefahr in Ex-Bereichen. Umgebung schützen, Brandschutz bereitstellen, niemals in gefährdeter Atmosphäre einsetzen.'),
        H2('grundsaetze', 'Grundsätze für alle Kraftgeräte'),
        KF(
          'Nur eingewiesene/ausgebildete Kräfte bedienen',
          'Vor Gebrauch prüfen (Zustand, Betriebsstoffe)',
          'PSA und Umstehendenschutz beachten',
          'Abgase im Freien halten (CO-Gefahr), sicheren Stand wählen'),
        CO('tip', 'Werkzeug ist Verantwortung', 'Kraftgeräte nehmen schwere Arbeit ab – und verzeihen keine Nachlässigkeit. Ausbildung, Konzentration und Schutzausrüstung sind kein Zusatz, sondern Voraussetzung.'),
      ],
    },
  ],
},

/* ======================================================================= Z */
{
  id: 'z-katastrophenschutz', code: 'Z', title: 'Katastrophenschutz & überörtliche Hilfe',
  category: 'fuehrung', level: 4, icon: 'users', duration: 40,
  summary: 'Wenn es groß wird: Aufbau des Bevölkerungs- und Katastrophenschutzes, überörtliche Einheiten, Zusammenarbeit und das Hilfeleistungssystem.',
  objectives: [
    'Aufbau des Bevölkerungs-/Katastrophenschutzes erklären',
    'Überörtliche Einheiten und Verbände einordnen',
    'Zusammenarbeit der Organisationen beschreiben',
    'Das gestufte Hilfeleistungssystem verstehen',
  ],
  tags: ['Katastrophenschutz', 'Bevölkerungsschutz', 'überörtlich', 'KatS'],
  lessons: [
    {
      id: 'z1', title: 'System des Bevölkerungsschutzes', duration: 20,
      blocks: [
        H2('aufbau', 'Wer schützt die Bevölkerung?'),
        P('Der Schutz der Bevölkerung ist in Deutschland gestuft organisiert. Man unterscheidet den <b>Katastrophenschutz der Länder</b> (Alltag: Großschadenslagen, Naturkatastrophen) und den <b>Zivilschutz des Bundes</b> (Verteidigungsfall).'),
        TBL(['Ebene', 'Zuständig für'],[
          ['Gemeinde/Kreis', 'örtliche Gefahrenabwehr, Katastrophenschutzbehörde'],
          ['Land', 'Katastrophenschutz, Landeskatastrophenschutzgesetze'],
          ['Bund', 'Zivilschutz, ergänzende Ausstattung (BBK/THW)'],
        ]),
        DEF('Gestuftes Hilfeleistungssystem', 'Reichen die örtlichen Kräfte nicht, wird überörtliche Hilfe angefordert: Nachbarschaftshilfe → Kreis → überörtliche Bereitschaften/Kontingente → Bund/Länder-übergreifend. Jede Ebene unterstützt die darunterliegende.'),
        H2('mitwirkende', 'Mitwirkende Organisationen'),
        UL(
          '<b>Feuerwehren</b> – Brandschutz, technische Hilfe, ABC',
          '<b>Hilfsorganisationen</b> (DRK, ASB, JUH, MHD, DLRG) – Sanitäts-/Betreuungsdienst, Wasserrettung',
          '<b>THW</b> – technische Großhilfe, Logistik, Statik',
          '<b>Polizei, Bundeswehr (Amtshilfe), Behörden</b>'),
      ],
    },
    {
      id: 'z2', title: 'Überörtliche Einheiten & Zusammenarbeit', duration: 20,
      blocks: [
        H2('einheiten', 'Verbände & Bereitschaften'),
        P('Für große Lagen werden Einheiten zu größeren Verbänden zusammengefasst. Über dem Zug stehen <b>Bereitschaften</b> und <b>Kontingente</b>, die überörtlich verlegt werden können.'),
        TBL(['Einheit', 'Größenordnung'],[
          ['Gruppe / Staffel', '9 bzw. 6 Kräfte'],
          ['Zug', 'i. d. R. ~22 Kräfte (Verband)'],
          ['Bereitschaft', 'mehrere Züge'],
          ['(Hilfeleistungs-)Kontingent', 'zusammengestellte Kräfte eines Kreises/Landes'],
        ]),
        H2('zusammenarbeit', 'Zusammenarbeit organisieren'),
        KF(
          'Einheitliche Führung (FwDV 100), klare Unterstellung',
          'Gemeinsame Kommunikation (Digitalfunk, Führungsstrukturen)',
          'Logistik und Durchhaltefähigkeit über Tage sicherstellen',
          'Abstimmung mit Verwaltungs-/Krisenstab und Behörden'),
        DEF('Führungsstufe D', 'Bei Einsatz von Einheiten verschiedener Fachdienste/Organisationen führt ein Verbandsführer mit Führungsstab (Sachgebiete S1–S6). Das ist die höchste Führungsstufe der FwDV 100 – typisch für Katastrophenlagen.'),
        CO('tip', 'Gemeinsam stark', 'Große Lagen bewältigt keine Organisation allein. Das Zusammenwirken von Feuerwehr, Hilfsorganisationen, THW und Behörden – eingeübt und klar geführt – ist das Rückgrat des Bevölkerungsschutzes.'),
      ],
    },
  ],
},

];

