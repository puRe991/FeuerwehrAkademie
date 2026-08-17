/* =========================================================================
   LESEBEISPIELE — „Aus der Praxis lernen": reale Atemschutz-Unfälle als
   warnende Fallbeispiele zum Lesen und Nachbereiten.

   ------------------------------------------------------------------------
   WICHTIG — Urheberrecht & Quelle:
   Die Unfälle sind öffentlich dokumentiert auf atemschutzunfaelle.de
   (Betreiber: Atemschutzunfaelle.eu). Wir übernehmen KEINE fremden Texte
   oder Bilder. Alle Zusammenfassungen, Hergangsbeschreibungen und „Lehren
   daraus" sind eigenständig formuliert und bewusst knapp gehalten. Für die
   ausführliche, quellengeprüfte Darstellung (mit Fotos und Einzelnachweisen)
   verweist jede Karte per Deep-Link auf den Originalbericht.

   Diese Sammlung ersetzt keine Unfalluntersuchung und keine Ausbildung –
   sie dient der didaktischen Nachbereitung: „Was können wir daraus lernen?"

   Struktur eines Beispiels:
     id, jahr, datum (ISO), datumText, ort, land, titel
     cat        – Unfallmechanismus (Kategorie, s. UNFALL_CATS)
     kurz       – 1–2 Sätze Kurzfassung (eigener Text)
     hergang    – kompakte, eigene Beschreibung des Ablaufs
     verletzung – Art/Umfang der Verletzungen (sachlich, ohne Namen)
     lehren[]   – didaktische Ableitungen / Merkpunkte (eigener Text)
     module[]   – verwandte Modul-IDs (Querverweis in die Akademie)
     quelleUrl, quelleName – Deep-Link auf den Originalbericht
   ========================================================================= */

/* Kategorien nach Unfallmechanismus – der didaktisch nützliche Blickwinkel:
   Nicht „welcher Brand", sondern „was hat die Kräfte verletzt". */
export const UNFALL_CATS = {
  einsturz:        { label: 'Einsturz & herabstürzende Teile', color: '#8e5a2b', icon: 'building' },
  durchzuendung:   { label: 'Durchzündung & Brandausbreitung', color: '#d81f26', icon: 'flame2' },
  hitze:           { label: 'Hitze, Dampf & Verbrühung',       color: '#e67e22', icon: 'fire' },
  atemschutznotfall:{ label: 'Atemschutz-Notfall & Truppretung', color: '#8e44ad', icon: 'mask' },
  elektro:         { label: 'Elektrische Gefahren',            color: '#1e5fa8', icon: 'bolt' },
  wasser:          { label: 'Tauch- & Wassereinsatz',         color: '#16607a', icon: 'water' },
  brand:           { label: 'Brandeinsatz allgemein',         color: '#c0392b', icon: 'flag' },
};

export const LESEBEISPIELE = [

/* ============================ 2025 ============================ */
{
  id: 'lb-2025-suedbrookmerland',
  jahr: 2025, datum: '2025-01-13', datumText: '13. Januar 2025',
  ort: 'Südbrookmerland', land: 'Niedersachsen',
  titel: 'Stromschlag an entisolierten Kabeln',
  cat: 'elektro',
  kurz: 'Bei einem Fahrzeugbrand in einer Kfz-Werkstatt erlitt ein Feuerwehrangehöriger über eine Steckleiter einen Stromschlag.',
  hergang: 'Während der Brandbekämpfung kam ein Atemschutzgeräteträger in Kontakt mit beschädigten, entisolierten Leitungen. Der Stromdurchgang führte zu Benommenheit und Muskelzuckungen.',
  verletzung: 'Ein Feuerwehrangehöriger: Stromschlag mit Benommenheit und Muskelzuckungen.',
  lehren: [
    'Elektrische Gefahr besteht auch dann, wenn kein Schaltschrank sichtbar ist – beschädigte Kabel und Betriebsmittel führen möglicherweise noch Spannung.',
    'Vor dem Vorgehen prüfen, ob abgeschaltet/freigeschaltet werden kann; bis dahin Sicherheitsabstände zu Leitern und Metallteilen einhalten.',
    'Leitern und Werkzeuge aus Metall werden im Zweifel zum Leiter – Standort und Kontaktflächen bewusst wählen.',
  ],
  module: ['p-arbeitsschutz', 'e-loescheinsatz', 'd-geraetekunde'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20250113-suedbrookmerland.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2025-dresden-01',
  jahr: 2025, datum: '2025-01-14', datumText: '14. Januar 2025',
  ort: 'Dresden', land: 'Sachsen',
  titel: 'Schnelle, extreme Hitzeentwicklung bei der Personensuche',
  cat: 'durchzuendung',
  kurz: 'Bei einem Wohnungsbrand stieg die Temperatur in kurzer Zeit extrem an; zwei Trupppartner wurden während der Personensuche verletzt.',
  hergang: 'Der Trupp ging zur Menschenrettung vor. Innerhalb kurzer Zeit entwickelte sich eine extreme Hitze, die zu schweren Verbrennungen führte.',
  verletzung: 'Zwei Feuerwehrangehörige: schwere Verbrennungen.',
  lehren: [
    'Rauchgase beobachten: schnelle Verfärbung, Pulsieren und Absinken der Rauchschicht sind Warnzeichen einer bevorstehenden Durchzündung.',
    'Türöffnung kontrolliert, aus der Deckung, mit gestrecktem Schlauch und Wasser am Rohr – nie ohne Rückzugsmöglichkeit vorgehen.',
    'Menschenrettung rechtfertigt Risiko, aber nicht das Ausblenden der Rauchgasdynamik – Rückzugsweg und Wasser am Rohr sichern das Überleben des Trupps.',
  ],
  module: ['b-brennen-loeschen', 'f-atemschutz', 'e-loescheinsatz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20250114-dresden.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2025-wiesbaden',
  jahr: 2025, datum: '2025-02-28', datumText: '28. Februar 2025',
  ort: 'Wiesbaden', land: 'Hessen',
  titel: 'Einsturz einer Deckenverkleidung im Gebäudedurchgang',
  cat: 'einsturz',
  kurz: 'Bei einem Mülltonnen-Vollbrand in einem Gebäudedurchgang stürzte ein größerer Teil der Deckenverkleidung ein; fünf Kräfte wurden verletzt.',
  hergang: 'Der Brand in einem überbauten Durchgang griff auf die Deckenkonstruktion über. Ein größerer Bereich der Verkleidung löste sich und stürzte auf die eingesetzten Kräfte.',
  verletzung: 'Fünf Feuerwehrangehörige: Verbrennungen und leichte Rauchvergiftungen.',
  lehren: [
    'Auch „kleine" Brände (Mülltonne) können tragende oder abgehängte Bauteile schwächen – die Umgebung des Brandes mitbewerten, nicht nur den Brand selbst.',
    'Überbaute Durchgänge, abgehängte Decken und Zwischenräume sind Schwachstellen: Aufenthalt darunter zeitlich begrenzen.',
    'Ein Sicherheitstrupp und eine klare Rückzugsregel gehören auch zu vermeintlich einfachen Einsätzen.',
  ],
  module: ['o-baukunde', 'e-loescheinsatz', 'p-arbeitsschutz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20250228-wiesbaden.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2025-wangen',
  jahr: 2025, datum: '2025-07-12', datumText: '12. Juli 2025',
  ort: 'Wangen im Allgäu', land: 'Baden-Württemberg',
  titel: 'Herabstürzender Balken bei Nachlöscharbeiten',
  cat: 'einsturz',
  kurz: 'Bei den Nachlöscharbeiten an einem Lagerhallenbrand verletzte ein herabstürzender Balken einen Feuerwehrangehörigen.',
  hergang: 'Nach dem Brand war die Konstruktion durch Hitzeeinwirkung geschwächt. Während der Nacharbeiten löste sich ein Balken und traf einen Einsatzkräfte.',
  verletzung: 'Ein Feuerwehrangehöriger: Verletzungen durch den Balkensturz.',
  lehren: [
    'Die Gefahr endet nicht mit „Feuer aus": brandgeschwächte Tragwerke versagen oft erst in der Abkühl- und Nachlöschphase.',
    'Standsicherheit vor Betreten neu beurteilen; Bereiche unter geschwächten Bauteilen absperren.',
    'Nachlöscharbeiten mit reduzierter Kräftezahl, klarer Aufsicht und wenn möglich aus der Ferne/mit Technik.',
  ],
  module: ['o-baukunde', 'p-arbeitsschutz', 'g-technische-hilfe'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20250712-wangen_allgaeu.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2025-dresden-02',
  jahr: 2025, datum: '2025-07-23', datumText: '23. Juli 2025',
  ort: 'Dresden', land: 'Sachsen',
  titel: 'Brand im 15. Obergeschoss eines Hochhauses',
  cat: 'durchzuendung',
  kurz: 'Bei einem Feuer im 15. Obergeschoss eines 17-geschossigen Hochhauses zog sich ein Atemschutzgeräteträger Brandverletzungen zu.',
  hergang: 'Der Innenangriff in großer Höhe erfolgte über lange Wege und Steigleitungen. Im Brandbereich kam es zu einer Brandverletzung eines Einsatzkräfte.',
  verletzung: 'Ein Feuerwehrangehöriger: Brandverletzungen.',
  lehren: [
    'Hochhausbrände bedeuten lange Anmarsch- und Rückzugswege – Luftvorrat und Wechselzeiten großzügig einplanen (Atemschutzüberwachung).',
    'Bereitstellung, Rückfallebene und trockene/nasse Steigleitung vorab klären; ein zweiter Trupp muss zeitnah nachrücken können.',
    'Die eingeschränkte Rückzugsmöglichkeit in der Höhe verlangt besonders disziplinierte Rauchgaskontrolle am Strahlrohr.',
  ],
  module: ['f-atemschutz', 'm-vorbeugender-brandschutz', 'e-loescheinsatz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20250723-dresden.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2025-braunschweig',
  jahr: 2025, datum: '2025-08-25', datumText: '25. August 2025',
  ort: 'Braunschweig', land: 'Niedersachsen',
  titel: 'Verbrühung durch beschädigtes Fernwärmerohr',
  cat: 'hitze',
  kurz: 'Bei einem Gebäudebrand trat aus einem beschädigten Fernwärmerohr heißes Wasser bzw. Dampf aus; zwei Atemschutzgeräteträger erlitten Verbrühungen.',
  hergang: 'Im Verlauf des Einsatzes wurde eine Fernwärmeleitung beschädigt. Der Austritt von heißem Wasser und Dampf führte zu Verbrühungen im Gesichtsbereich.',
  verletzung: 'Zwei Feuerwehrangehörige: Verbrühungen an Wange und Ohr durch heißes Wasser/Dampf.',
  lehren: [
    'Nicht nur Feuer ist heiß: Fernwärme-, Heizungs- und Prozessleitungen führen Wasser/Dampf mit weit über 100 °C.',
    'Gebäudetechnik in die Lagebeurteilung einbeziehen; unbekannte Leitungen und Behälter als Gefahr behandeln.',
    'Schutzwirkung der PSA hat Grenzen – Dampf findet ungeschützte Hautstellen (Hals, Ohren); Position und Körperhaltung bewusst wählen.',
  ],
  module: ['d-geraetekunde', 'p-arbeitsschutz', 'j-erste-hilfe'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20250825-braunschweig.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2025-berlin',
  jahr: 2025, datum: '2025-12-28', datumText: '28. Dezember 2025',
  ort: 'Berlin-Staaken', land: 'Berlin',
  titel: 'Truppweise Rettung bei extremer Hitze im Keller',
  cat: 'atemschutznotfall',
  kurz: 'Bei einem Kellerbrand erschwerten extrem hohe Temperaturen den Einsatz; ein Feuerwehrangehöriger wurde von seinem Trupppartner in Sicherheit gebracht.',
  hergang: 'Im Innenangriff auf Kellerverschläge herrschten extrem hohe Temperaturen. Ein Einsatzkräfte geriet in Bedrängnis und wurde durch den Trupppartner gerettet.',
  verletzung: 'Ein Feuerwehrangehöriger: leichte Verletzungen.',
  lehren: [
    'Kellerbrände sind wegen Wärmestau, fehlender Abzugsöffnungen und langer Wege besonders gefährlich – Vorgehen nur mit Rückzugssicherung.',
    'Der Grundsatz „gemeinsam vor, gemeinsam zurück" hat hier gewirkt: der Trupp bleibt zusammen und ist die erste Rettungsressource.',
    'Atemschutzüberwachung, Sicherheitstrupp und ein zweites Rohr sind bei Kellerbränden Pflicht, nicht Kür.',
  ],
  module: ['f-atemschutz', 'e-loescheinsatz', 'l-fuehrung-fwdv100'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2025/u20251228-berlin.html',
  quelleName: 'atemschutzunfaelle.de',
},

/* ============================ 2024 ============================ */
{
  id: 'lb-2024-muenchen',
  jahr: 2024, datum: '2024-01-07', datumText: '7. Januar 2024',
  ort: 'München', land: 'Bayern',
  titel: 'Treppeneinsturz im Innenangriff',
  cat: 'einsturz',
  kurz: 'Bei einem Wohnungsbrand kam es im Innenangriff zu einem Treppeneinsturz; ein Atemschutzgeräteträger wurde am Bein verletzt.',
  hergang: 'Während des Vorgehens über das Treppenhaus versagte ein Treppenbauteil. Der Sturz bzw. herabfallende Teile führten zu Schnittverletzungen am Bein.',
  verletzung: 'Ein Feuerwehrangehöriger: mittelschwere Schnittverletzungen am Bein.',
  lehren: [
    'Der Rückzugsweg ist auch ein Bauteil: Treppen können durch Brandeinwirkung oder Vorschädigung plötzlich versagen.',
    'Vorgehen an der Wandseite, Bauteile vor dem Belasten abtasten, Gewicht kontrolliert aufbringen.',
    'Beim geringsten Zweifel eine zweite, gesicherte Rückzugsmöglichkeit schaffen.',
  ],
  module: ['o-baukunde', 'f-atemschutz', 'p-arbeitsschutz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240107-muenchen.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-kreuztal',
  jahr: 2024, datum: '2024-01-12', datumText: '12. Januar 2024',
  ort: 'Kreuztal', land: 'Nordrhein-Westfalen',
  titel: 'Einsturz einer Holztreppe zum Obergeschoss',
  cat: 'einsturz',
  kurz: 'Bei einem Gebäudebrand stürzte die Holztreppe zum Obergeschoss ein; zwei Kräfte erlitten Prellungen.',
  hergang: 'Der Weg ins Obergeschoss führte über eine Holztreppe, die im Verlauf des Einsatzes einstürzte. Zwei Einsatzkräfte wurden dabei verletzt.',
  verletzung: 'Zwei Feuerwehrangehörige: diverse Prellungen.',
  lehren: [
    'Holztreppen sind brandlastbehaftet und verlieren unter Feuer schnell ihre Tragfähigkeit.',
    'Alternative Zugänge (Drehleiter, zweiter Rettungsweg) frühzeitig mitdenken, bevor die Treppe die einzige Option ist.',
    'Rückzug einleiten, solange der Weg noch trägt – nicht erst, wenn er nachgibt.',
  ],
  module: ['o-baukunde', 'k-absturzsicherung', 'e-loescheinsatz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240112-kreuztal.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-minden',
  jahr: 2024, datum: '2024-01-20', datumText: '20. Januar 2024',
  ort: 'Minden', land: 'Nordrhein-Westfalen',
  titel: 'Herabstürzende Dachteile auf die Außentreppe',
  cat: 'einsturz',
  kurz: 'Bei einem Dachstuhlbrand stürzten Dachteile auf eine Außentreppe; ein Feuerwehrangehöriger verletzte sich am Rücken.',
  hergang: 'Vom brennenden Dachstuhl lösten sich Teile und fielen auf eine als Zugang genutzte Außentreppe, auf der sich Kräfte befanden.',
  verletzung: 'Ein Feuerwehrangehöriger: Rückenverletzung.',
  lehren: [
    'Der Bereich unterhalb und neben Dachstühlen ist Gefahrenbereich – Trümmerschatten beachten und absperren.',
    'Zu- und Abgänge dürfen nicht im Fallbereich brennender Bauteile liegen.',
    'Dachstuhlbrände möglichst von außen und aus sicherer Position bekämpfen.',
  ],
  module: ['o-baukunde', 'p-arbeitsschutz', 'e-loescheinsatz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240120-minden.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-bedburg',
  jahr: 2024, datum: '2024-03-04', datumText: '4. März 2024',
  ort: 'Bedburg-Hau', land: 'Nordrhein-Westfalen',
  titel: 'Brand in einer Seniorenresidenz',
  cat: 'brand',
  kurz: 'Bei einem Brand in einer Seniorenresidenz wurde ein Feuerwehrangehöriger im Einsatz leicht verletzt.',
  hergang: 'Der Einsatz in einer Pflegeeinrichtung mit vielen zu rettenden, wenig mobilen Personen band viele Kräfte. Ein Einsatzkräfte verletzte sich leicht (Einzelheiten siehe Quelle).',
  verletzung: 'Ein Feuerwehrangehöriger: leichte Verletzung.',
  lehren: [
    'Sonderbauten mit hilfebedürftigen Personen (Pflege, Klinik) erfordern früh sehr viele Kräfte und geordnete Rettungsketten.',
    'Objektkenntnis und Feuerwehrpläne vorab nutzen – Räumung/Evakuierung strukturiert statt spontan.',
    'Auch bei hohem Rettungsdruck bleibt die Eigensicherung Voraussetzung, um überhaupt helfen zu können.',
  ],
  module: ['m-vorbeugender-brandschutz', 'l-fuehrung-fwdv100', 'j-erste-hilfe'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240304-bedburg.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-hamburg',
  jahr: 2024, datum: '2024-04-04', datumText: '4. April 2024',
  ort: 'Hamburg', land: 'Hamburg',
  titel: 'Extreme Hitze bei einem Pkw-Brand in der Tiefgarage',
  cat: 'hitze',
  kurz: 'Bei einem Pkw-Brand in einer Tiefgarage staute sich die Hitze extrem; zwei Kräfte erlitten Hitzetraumata.',
  hergang: 'In der geschlossenen Tiefgarage konnte die Wärme kaum entweichen. Der Wärmestau belastete den vorgehenden Trupp bis zum Hitzetrauma.',
  verletzung: 'Zwei Feuerwehrangehörige: Hitzetraumata.',
  lehren: [
    'Tiefgaragen sind Wärmefallen: keine natürliche Entrauchung, lange Wege, schlechte Orientierung.',
    'Angriffszeit begrenzen, Trupps früh wechseln und die körperliche Belastung durch Hitze aktiv überwachen.',
    'Ventilation/Entrauchung und ausreichend Reserve-Trupps früh einplanen.',
  ],
  module: ['b-brennen-loeschen', 'f-atemschutz', 'p-arbeitsschutz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240404-hamburg.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-braunschweig',
  jahr: 2024, datum: '2024-04-16', datumText: '16. April 2024',
  ort: 'Braunschweig', land: 'Niedersachsen',
  titel: 'Rauchgasdurchzündung bei einem Industriebrand',
  cat: 'durchzuendung',
  kurz: 'Bei einem Industriebrand kam es zu einer Rauchgasdurchzündung; zwei Kräfte erlitten Prellungen und leichte Verbrennungen.',
  hergang: 'Angesammelte, zündfähige Rauchgase entzündeten sich schlagartig. Die Druck- und Hitzewelle traf den vorgehenden Trupp.',
  verletzung: 'Zwei Feuerwehrangehörige: Prellungen und leichte Verbrennungen.',
  lehren: [
    'Große Hallen sammeln enorme Mengen zündfähiger Rauchgase – die Durchzündung kann weit vom eigentlichen Brand auftreten.',
    'Rauchgaskühlung mit kurzen Impulsen anwenden, Rauchschicht und Strömung ständig beobachten.',
    'Ausreichende Wasserversorgung, Rückzugsweg und Deckung vor dem Vorgehen sicherstellen.',
  ],
  module: ['b-brennen-loeschen', 'f-atemschutz', 'e-loescheinsatz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240416-braunschweig.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-duisburg',
  jahr: 2024, datum: '2024-07-10', datumText: '10. Juli 2024',
  ort: 'Duisburg', land: 'Nordrhein-Westfalen',
  titel: 'Kreislaufstillstand bei einem Tauchereinsatz',
  cat: 'wasser',
  kurz: 'Bei einem Tauchereinsatz erlitt ein Feuerwehrtaucher einen Kreislaufstillstand und musste reanimiert werden.',
  hergang: 'Während des Einsatzes unter Wasser kam es beim Taucher zu einem Kreislaufstillstand. Der Sicherungstaucher/das Team leitete die Rettung und Reanimation ein.',
  verletzung: 'Ein Taucher: Kreislaufstillstand, reanimiert; ein Sicherungstaucher leicht verletzt.',
  lehren: [
    'Der Tauchereinsatz ist Hochrisiko-Bereich: Signalleine, Sicherungstaucher und lückenlose Überwachung sind überlebenswichtig.',
    'Medizinische Notfälle unter Wasser erfordern eine vorab geübte, schnelle Rettungskette bis an Land.',
    'Tauchtauglichkeit, Ausrüstungscheck und definierte Einsatzgrenzen konsequent einhalten.',
  ],
  module: ['j-erste-hilfe', 'p-arbeitsschutz', 'l-fuehrung-fwdv100'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240710-duisburg.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-viersen',
  jahr: 2024, datum: '2024-08-12', datumText: '12. August 2024',
  ort: 'Viersen', land: 'Nordrhein-Westfalen',
  titel: 'Rauchgasexplosion beim Öffnen eines Garagentors',
  cat: 'durchzuendung',
  kurz: 'Beim Aufbrechen eines Garagentors kam es zu einer Rauchgasexplosion; mehrere Kräfte wurden verletzt.',
  hergang: 'In der geschlossenen Garage hatten sich zündfähige Rauchgase angesammelt. Mit dem Öffnen des Tors strömte Luft ein – die Rauchgase durchzündeten schlagartig.',
  verletzung: 'Mehrere Feuerwehrangehörige: Brandverletzungen und Prellungen.',
  lehren: [
    'Geschlossene, verrauchte Räume unter Sauerstoffmangel sind „scharf": das Öffnen liefert die fehlende Luft für eine Explosion.',
    'Türen/Tore kontrolliert und aus der Deckung öffnen, Rauchgase vorher kühlen, seitlich statt frontal stehen.',
    'Anzeichen wie warmes Tor, Rauch aus Ritzen und pulsierender Austritt ernst nehmen.',
  ],
  module: ['b-brennen-loeschen', 'e-loescheinsatz', 'f-atemschutz'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20240812-viersen.html',
  quelleName: 'atemschutzunfaelle.de',
},
{
  id: 'lb-2024-waren',
  jahr: 2024, datum: '2024-10-17', datumText: '17. Oktober 2024',
  ort: 'Waren (Müritz)', land: 'Mecklenburg-Vorpommern',
  titel: 'Teileinsturz während des Innenangriffs',
  cat: 'einsturz',
  kurz: 'Bei einem Brand in einer Bootswerft kam es während des Innenangriffs zu einem Teileinsturz; ein Feuerwehrangehöriger wurde verschüttet.',
  hergang: 'Während des Vorgehens versagte ein Bauteil und verschüttete einen Einsatzkräfte. Mehrere Kräfte wurden verletzt, einer schwer.',
  verletzung: 'Drei Feuerwehrangehörige: einer verschüttet/schwer verletzt, einer im Schock, einer leicht verletzt.',
  lehren: [
    'Hallen mit großen Spannweiten (Werften, Lager) können großflächig und plötzlich versagen – Innenangriff kritisch abwägen.',
    'Notfallmeldung („Mayday"), Sicherheitstrupp und Atemschutzüberwachung müssen sofort greifen, wenn ein Trupp verschüttet wird.',
    'Frühzeitig zwischen Innen- und Außenangriff neu entscheiden, wenn die Standsicherheit fraglich ist.',
  ],
  module: ['o-baukunde', 'f-atemschutz', 'l-fuehrung-fwdv100'],
  quelleUrl: 'https://www.atemschutzunfaelle.de/unfaelle/de/2024/u20241017-waren.html',
  quelleName: 'atemschutzunfaelle.de',
},

];

/* Schnellzugriff nach ID */
export const LESEBEISPIEL_BY_ID = Object.fromEntries(LESEBEISPIELE.map(b => [b.id, b]));

/* Vorhandene Jahre (absteigend) */
export const LESEBEISPIEL_JAHRE = [...new Set(LESEBEISPIELE.map(b => b.jahr))].sort((a, b) => b - a);

/* Gruppiert nach Kategorie */
export function beispieleByCat() {
  const out = {};
  for (const b of LESEBEISPIELE) (out[b.cat] ||= []).push(b);
  return out;
}
