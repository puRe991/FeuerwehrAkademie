/* =========================================================================
   MODUL R — Digitale Einsatzunterstützung
   Vollständige Lektionstexte (Inhaltstiefe-Ausbau).

   Enthält ALLE Lektionen des Moduls R.

   Fachliche Grundlage: EU-Verordnungen 2019/947 und 2019/945 zum
   Betrieb unbemannter Luftfahrzeuge, Luftverkehrsordnung, DSGVO,
   FwDV 100 und 800, DGUV Vorschrift 49, Herstellerangaben zu
   Wärmebildkameras und Messgeräten. Rechtslage und Technik entwickeln
   sich schnell – maßgeblich ist der aktuelle Stand und die Regelung
   deines Trägers. Stand: siehe module-sources.js.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from '../blocks.js';

export const LESSONS_R = [

/* ---------------------------------------------------------------- R1 ---- */
{
  id: 'r1', title: 'Wärmebildkamera (WBK)', duration: 20,
  blocks: [
    P('Die Wärmebildkamera ist eines der wenigen Geräte, das die Einsatztaktik tatsächlich verändert hat. Sie macht sichtbar, was im Rauch verborgen bleibt: Menschen, Glutnester, Brandausbreitung hinter Wänden. Gleichzeitig ist sie ein Gerät, das falsches Vertrauen erzeugen kann – und genau darin liegt ihre größte Gefahr.'),

    H2('physik', 'Wie eine Wärmebildkamera sieht'),
    P('Jeder Körper mit einer Temperatur über dem absoluten Nullpunkt strahlt <b>Infrarotstrahlung</b> ab – umso mehr, je wärmer er ist. Für das menschliche Auge ist diese Strahlung unsichtbar. Der Sensor der Wärmebildkamera erfasst sie und setzt die Unterschiede in ein Bild um, meist in Falschfarben oder Graustufen: warm hell, kalt dunkel.'),
    FIG('waermebild', 'Wärmebildkamera: Infrarotstrahlung wird über den Sensor in ein Falschfarbenbild umgesetzt – warme Bereiche hell, kalte dunkel.'),
    KF(
      'Die Kamera misst <b>Oberflächentemperaturen</b>, nicht die Temperatur im Inneren.',
      'Sie funktioniert bei völliger Dunkelheit – sie braucht kein Licht.',
      'Sie durchdringt Rauch weitgehend, weil Rußpartikel Infrarot kaum blockieren.',
      'Sie zeigt Temperatur<b>unterschiede</b>, nicht absolute Werte – außer bei Geräten mit Messfunktion.',
      'Das Bild passt sich automatisch an den Temperaturbereich an; der Eindruck kann dadurch täuschen.',
      'Handelsübliche Modelle unterscheiden sich stark in Auflösung und Bildrate.'),

    H2('einsatz', 'Einsatzmöglichkeiten'),
    TBL(['Anwendung', 'Was die Kamera zeigt', 'Nutzen'],[
      ['Personensuche im Rauch', 'Körperwärme gegenüber kühlerer Umgebung', 'deutlich schnelleres Auffinden'],
      ['Glutnester finden', 'warme Stellen in Wänden, Decken, Dämmung', 'gezielte Nachlöscharbeiten statt flächigem Aufreißen'],
      ['Brandausbreitung erkennen', 'Wärme hinter Verkleidungen und in Hohlräumen', 'verdeckte Ausbreitung wird sichtbar'],
      ['Orientierung im Innenangriff', 'Raumgeometrie, Türen, Hindernisse', 'schnelleres Vorgehen, sicherer Rückweg'],
      ['Füllstände abschätzen', 'Temperaturgrenze an Behälterwänden', 'Beurteilung bei Gefahrgutlagen'],
      ['Kontrolle nach dem Löschen', 'Restwärme', 'weniger Rückzündungen'],
      ['Vermisstensuche im Freien', 'Körperwärme im kühlen Gelände', 'große Flächen schneller absuchen'],
      ['Elektrische Anlagen', 'überhitzte Bauteile', 'Ursachensuche, Gefahrenerkennung'],
    ]),
    CO('tip', 'Die unterschätzte Anwendung', 'Am wertvollsten ist die Wärmebildkamera oft nicht bei der Personensuche, sondern bei den <b>Nachlöscharbeiten</b>. Sie zeigt punktgenau, wo noch Glut sitzt – und erspart es, halbe Wände und Decken auf Verdacht zu öffnen. Das spart Zeit, Wasser und Sachschaden.'),

    H2('grenzen', 'Grenzen und Fehlerquellen'),
    CO('warn', 'Kein Röntgenblick', 'Die Kamera sieht ausschließlich <b>Oberflächen</b>. Sie sieht nicht durch Wände, nicht durch Glas und nicht durch Wasser. Was sie hinter einer Wand anzeigt, ist die Wärme, die auf der Wandoberfläche angekommen ist – nicht der dahinterliegende Raum.'),
    TBL(['Fehlerquelle', 'Was passiert', 'Umgang damit'],[
      ['Glas', 'reflektiert Infrarot – man sieht ein Spiegelbild', 'Fenster und Scheiben als Spiegel erkennen'],
      ['Wasser und nasse Flächen', 'verfälschen die Temperaturanzeige', 'nach dem Löschen kritisch bewerten'],
      ['Heiße Umgebung', 'die Kamera „blendet", Kontraste verschwinden', 'nicht auf feine Unterschiede verlassen'],
      ['Automatische Anpassung', 'ein kaltes Bild wirkt kontrastreich, ein heißes flach', 'Bild interpretieren, nicht wörtlich nehmen'],
      ['Reflektierende Oberflächen', 'Metall, poliertes Material zeigen Fremdwärme', 'Blickwinkel ändern'],
      ['Akku und Hitze', 'Ausfall genau dann, wenn sie gebraucht wird', 'Ersatzakku, Orientierung auch ohne Kamera'],
    ]),
    CO('danger', 'Verlass dich nicht blind auf die Kamera', 'Ein Trupp darf sich nie allein auf die Wärmebildkamera verlassen. Fällt sie aus – Akku leer, Hitze, Defekt –, muss die Orientierung ohne sie funktionieren. Deshalb gilt weiterhin: Wandkontakt halten, Schlauchleitung als Leitlinie nutzen, Rückweg sichern. Die Kamera ergänzt die Systematik, sie ersetzt sie nicht.'),

    H2('praxis', 'Die Kamera richtig einsetzen'),
    STEPS(
      'Vor dem Einsatz einschalten und Funktion prüfen – Akkustand kontrollieren.',
      'Beim Betreten eines Raumes zunächst einen vollständigen Schwenk machen: Decke, Wände, Boden.',
      'Bild interpretieren statt nur anschauen – was ist warm, was ist heiß, was ist Reflexion?',
      'Die Kamera an einer festen Person im Trupp belassen, damit die Beobachtung durchgehend ist.',
      'Beobachtungen laut aussprechen: „rechts Tür, warm", „vor uns Person".',
      'Regelmäßig ohne Kamera orientieren, damit der Rückweg auch ohne sie sitzt.',
      'Nach dem Einsatz reinigen, laden und Funktion prüfen.'),
    CO('info', 'Ein Trupp, eine Kamera', 'Die Kamera darf nicht dazu führen, dass sich der Trupp trennt oder dass der Kameraträger vorausläuft. Der Grundsatz „der Trupp bleibt zusammen" gilt unverändert. Wer die Kamera führt, arbeitet für den Trupp, nicht für sich.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Kamera macht Infrarotstrahlung sichtbar – warme Bereiche hell, kalte dunkel.',
      'Sie zeigt <b>Oberflächentemperaturen</b>, nicht das Innere von Bauteilen.',
      'Stärken: Personensuche, Glutnester, verdeckte Ausbreitung, Orientierung, Nachschau.',
      'Glas reflektiert, Wasser verfälscht, Hitze blendet.',
      'Die automatische Bildanpassung kann täuschen – Bild interpretieren.',
      'Bei Ausfall muss die Orientierung ohne Kamera funktionieren.',
      'Wandkontakt, Schlauchleitung und gesicherter Rückweg gelten weiterhin.'),
  ],
},

/* ---------------------------------------------------------------- R2 ---- */
{
  id: 'r2', title: 'Drohnen (UAS) im Einsatz', duration: 18,
  blocks: [
    P('Ein Blick aus fünfzig Metern Höhe beantwortet Fragen, für die am Boden zwanzig Minuten Erkundung nötig wären: Wie weit reicht der Brand? Was ist auf der Rückseite? Wo verläuft die Brandkante im Wald? Drohnen haben die Lagefeststellung verändert – und bringen eigene rechtliche und taktische Regeln mit.'),

    H2('was', 'Unbemannte Luftfahrtsysteme'),
    DEF('UAS', 'Unmanned Aircraft System – das unbemannte Luftfahrzeug samt Steuerung, Datenverbindung und Fernpilot. Umgangssprachlich „Drohne". Für die Feuerwehr sind vor allem Multikopter mit Tageslicht- und Wärmebildkamera relevant, die schnell startbereit sind und über der Einsatzstelle stehen können.'),
    P('Der entscheidende Vorteil liegt in der <b>Perspektive</b>: Vieles, was am Boden verdeckt ist, wird von oben in Sekunden sichtbar. Der zweite Vorteil ist die <b>Sicherheit</b> – die Erkundung erfolgt ohne Eigengefährdung, auch über Gefahrenbereiche hinweg.'),

    H2('felder', 'Typische Einsatzfelder'),
    TBL(['Einsatzfeld', 'Was die Drohne liefert'],[
      ['Ausgedehnte Schadenlagen', 'Überblick über Ausdehnung, Ausbreitungsrichtung, Zugänge'],
      ['Dach- und Fassadenbrände', 'Blick auf Bereiche, die vom Boden nicht einsehbar sind'],
      ['Vegetations- und Waldbrand', 'Brandkante, Glutnester, Ausbreitung, Wirkung der Maßnahmen'],
      ['Vermisstensuche', 'systematisches Absuchen großer Flächen mit Wärmebild'],
      ['Gefahrgutlagen', 'Erkundung aus sicherer Entfernung, Kennzeichnung ablesen'],
      ['Hochwasser und Unwetter', 'Überblick über betroffene Flächen und Deichzustand'],
      ['Dokumentation', 'Bilder für Lagekarte, Nachbereitung und Auswertung'],
      ['Wärmebild aus der Luft', 'Glutnester in unzugänglichen Bereichen'],
    ]),
    CO('tip', 'Der größte Nutzen entsteht früh', 'Eine Drohne, die nach einer Stunde eintrifft, liefert ein hübsches Bild. Eine Drohne, die nach zehn Minuten fliegt, verändert die Taktik. Deshalb gehört sie bei ausgedehnten Lagen zur frühen Nachforderung – nicht zur späten.'),

    H2('recht', 'Rechtlicher Rahmen'),
    DEF('EU-Drohnenrecht', 'Der Betrieb unbemannter Luftfahrzeuge ist europäisch geregelt und in die Kategorien <b>Open</b> (geringes Risiko, ohne Genehmigung, mit engen Betriebsgrenzen), <b>Specific</b> (erhöhtes Risiko, Betriebsgenehmigung erforderlich) und <b>Certified</b> (hohes Risiko) eingeteilt. Fernpiloten benötigen Kompetenznachweise, Betreiber müssen registriert sein.'),
    KF(
      'Für Behörden und Organisationen mit Sicherheitsaufgaben gibt es Erleichterungen – aber keine Freistellung.',
      'Flugverbots- und Kontrollzonen, insbesondere um Flughäfen, sind zu beachten.',
      'Betriebsgrenzen gelten weiterhin: Sichtweite, Flughöhe, Wetterbedingungen.',
      'Der Fernpilot trägt die Verantwortung für den Flug.',
      'Aufnahmen unterliegen dem Datenschutz – Persönlichkeitsrechte beachten.',
      'Die konkreten Regelungen legt der Träger in einer Dienstanweisung fest.'),
    CO('warn', 'Datenschutz aus der Luft', 'Luftbilder erfassen zwangsläufig Nachbargrundstücke, Personen und Fahrzeuge. Sie werden ausschließlich für den Einsatzzweck verwendet, nicht veröffentlicht und nach den geltenden Fristen gelöscht. Das gilt auch für Aufnahmen, die eindrucksvoll aussehen.'),

    H2('luftraum', 'Luftraum-Koordination'),
    CO('danger', 'Rettungshubschrauber haben Vorrang', 'Wenn ein Rettungs- oder Polizeihubschrauber im Anflug ist oder werden könnte, ist die Luftraum-Koordination zwingend. Ein Zusammenstoß wäre katastrophal. Der Drohnenbetrieb wird bei Bedarf <b>sofort</b> eingestellt und die Drohne gelandet – ohne Diskussion und ohne Verzögerung.'),
    STEPS(
      'Vor dem Start bei der Einsatzleitung und der Leitstelle melden.',
      'Klären, ob Luftfahrzeuge im Einsatz sind oder angefordert wurden.',
      'Flugbereich und maximale Höhe festlegen und bekannt geben.',
      'Ständige Funkverbindung zur Einsatzleitung halten.',
      'Bei Anflug eines Hubschraubers sofort landen und Rückmeldung geben.',
      'Landeplatz für den Hubschrauber freihalten.',
      'Nach Abschluss Landung melden.'),

    H2('grenzen', 'Grenzen des Drohneneinsatzes'),
    KF(
      '<b>Wetter:</b> Wind, Regen, Schnee und Nebel begrenzen oder verhindern den Betrieb.',
      '<b>Akku:</b> Flugzeiten liegen im Bereich weniger Zehnminuten – Ersatzakkus sind Pflicht.',
      '<b>Sicht:</b> Betriebsgrenzen verlangen in der Regel direkten Sichtkontakt.',
      '<b>Hitze und Rauch:</b> Aufwinde und Rauchsäulen sind für Multikopter kritisch.',
      '<b>Nacht:</b> nur mit geeigneter Ausstattung und Regelung.',
      '<b>Personal:</b> Fernpilot und meist ein zweiter Beobachter werden gebunden.',
      '<b>Übung:</b> ungeübte Fernpiloten liefern unbrauchbare Bilder oder verlieren die Drohne.'),
    P('Und die wichtigste Grenze: Eine Drohne <b>ersetzt keine Erkundung am Boden</b>. Sie zeigt Flächen und Wärme, aber keine Bausubstanz, keine Gerüche, keine Rückmeldungen von Betroffenen. Sie liefert einen Teil des Lagebilds – einen wertvollen, aber eben einen Teil.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Drohnen liefern schnell ein Lagebild aus der Luft – ohne Eigengefährdung.',
      'Einsatzfelder: ausgedehnte Lagen, Dach und Fassade, Vegetationsbrand, Vermisstensuche, Gefahrgut.',
      'Der Nutzen entsteht früh – deshalb früh nachfordern.',
      'EU-Recht mit Kategorien Open, Specific, Certified; BOS haben Erleichterungen, keine Freistellung.',
      'Datenschutz gilt auch für Luftbilder.',
      'Bei Hubschraubereinsatz sofort landen – Luftraum-Koordination ist zwingend.',
      'Grenzen: Wetter, Akku, Sicht, Personal, Übung.',
      'Die Drohne ergänzt die Erkundung am Boden, sie ersetzt sie nicht.'),
  ],
},

/* ---------------------------------------------------------------- R3 ---- */
{
  id: 'r3', title: 'Messen, Dokumentieren & digitale Lage', duration: 18,
  blocks: [
    P('Die gefährlichsten Stoffe an einer Einsatzstelle haben eines gemeinsam: Man sieht sie nicht und riecht sie oft auch nicht. Kohlenstoffmonoxid, Sauerstoffmangel und zündfähige Gemische sind für die menschlichen Sinne unzugänglich. Messtechnik macht sie sichtbar – und ist damit eine der wirksamsten Schutzmaßnahmen überhaupt.'),

    H2('messen', 'Mess- und Warngeräte'),
    TBL(['Gerät', 'Misst oder warnt vor', 'Typische Anwendung'],[
      ['CO-Warner', 'Kohlenstoffmonoxid', 'persönlicher Schutz, Nachlöscharbeiten, Heizungsräume'],
      ['Ex-Messgerät', 'zündfähige Atmosphäre in Prozent der unteren Explosionsgrenze', 'Gasaustritt, Keller, Kanäle, Tankstellen'],
      ['Sauerstoffsensor', 'Sauerstoffgehalt der Luft', 'Schächte, Silos, Gärkeller, enge Räume'],
      ['Mehrgasmessgerät', 'kombiniert O₂, CO, Ex und weitere Gase', 'Standardgerät für die meisten Lagen'],
      ['Dosisleistungsmessgerät', 'ionisierende Strahlung', 'A-Lagen, Transportunfälle'],
      ['Prüfröhrchen', 'bestimmte Einzelstoffe', 'Nachweis bei bekanntem Verdacht'],
      ['Photoionisationsdetektor', 'flüchtige organische Verbindungen', 'Chemielagen, Lösemittel'],
    ]),
    CO('danger', 'Messen vor Betreten', 'In Schächten, Kellern, Silos, Gärkellern, Gruben und Kanälen kann Sauerstoffmangel oder ein zündfähiges beziehungsweise giftiges Gemisch herrschen – ohne jede Wahrnehmbarkeit. Vor dem Betreten wird gemessen. Niemals „auf gut Glück" einsteigen: Das ist die häufigste Ursache für Mehrfachunfälle mit Todesfolge.'),
    KF(
      'Gerät vor dem Einsatz einschalten und Funktionsprüfung durchführen.',
      'Kalibrierintervalle einhalten – ein unkalibriertes Gerät liefert Scheinsicherheit.',
      'In der Höhe messen, in der der Stoff zu erwarten ist – schwere Gase unten, leichte oben.',
      'Auch beim Vorgehen weiter messen, nicht nur einmal am Zugang.',
      'Werte dokumentieren: Ort, Zeit, Messgröße, Ergebnis.',
      'Alarmschwellen kennen und bei Auslösung sofort zurückziehen.'),
    CO('warn', 'Jedes Gerät misst nur seine Größe', 'Ein Ex-Messgerät zeigt keine Giftigkeit an, ein CO-Warner erkennt kein Chlor, und manche Sensoren funktionieren ohne Sauerstoff gar nicht. Ein unauffälliger Messwert bedeutet deshalb nicht „ungefährlich", sondern nur „dieses Gerät hat für diese Größe nichts angezeigt".'),

    H2('doku', 'Digitale Dokumentation'),
    P('Einsatzführungssysteme, Tablets und Apps haben die Dokumentation verändert. Was früher handschriftlich im Einsatztagebuch stand, wird heute vielfach digital erfasst – schneller, lesbarer und für alle Beteiligten gleichzeitig sichtbar.'),
    UL(
      '<b>Digitale Lagekarten</b> mit taktischen Zeichen, für alle Führungskräfte gleichzeitig sichtbar.',
      '<b>Kräfteübersichten</b> mit Status, Standort und Auftrag.',
      '<b>Automatische Zeitstempel</b> für Alarmierung, Ausrücken, Eintreffen und Statusänderungen.',
      '<b>Atemschutzüberwachung</b> digital, mit Zeit- und Druckwarnungen.',
      '<b>Rettungsdatenblätter</b> per QR-Code oder App direkt am Unfallfahrzeug.',
      '<b>Objektdaten und Feuerwehrpläne</b> digital abrufbar.',
      '<b>Fotodokumentation</b> für die Nachbereitung – unter Beachtung des Datenschutzes.'),
    CO('tip', 'Digital heißt nicht automatisch besser', 'Ein digitales System nützt nur, wenn es im Stress bedienbar ist. Wer bei einer Lagemeldung erst drei Menüs durchsuchen muss, schreibt schneller auf Papier. Deshalb: Systeme regelmäßig üben und immer eine analoge Rückfallebene bereithalten.'),

    H2('grenzen', 'Chancen und Grenzen der Digitalisierung'),
    TBL(['Chance', 'Zugehörige Grenze'],[
      ['schnelleres, gemeinsames Lagebild', 'Abhängigkeit von Strom, Netz und Akku'],
      ['weniger Informationsverlust bei Übergaben', 'Datenqualität nur so gut wie die Eingabe'],
      ['Vernetzung mit Leitstelle und Nachbarwehren', 'Systembrüche zwischen Organisationen'],
      ['automatische Dokumentation', 'Datenschutz und Aufbewahrungsfristen'],
      ['Zugriff auf Objekt- und Stoffdaten', 'veraltete Daten sind gefährlicher als keine'],
      ['Entlastung der Führungskraft', 'Ablenkung durch Bildschirmarbeit statt Lagebeobachtung'],
    ]),
    CO('danger', 'Immer eine Rückfallebene', 'Jedes digitale System kann ausfallen – Akku, Netz, Software, Bedienfehler. Deshalb gehört zu jedem digitalen Führungsmittel eine analoge Rückfallebene: Papier-Lagekarte, ausgedruckter Feuerwehrplan, handschriftliches Einsatztagebuch. Wer das nicht vorhält, steht beim Ausfall ohne Führungsmittel da.'),

    H2('daten', 'Datenschutz und Umgang mit Bildern'),
    KF(
      'Einsatzdaten nur für den Einsatzzweck verwenden.',
      'Fotodokumentation dienstlich, nicht privat – und nicht auf privaten Geräten.',
      'Keine Aufnahmen von Betroffenen, Verletzten oder Verstorbenen.',
      'Keine Veröffentlichung ohne ausdrückliche Freigabe.',
      'Geräte mit Bildschirmsperre und Verschlüsselung nutzen.',
      'Aufbewahrungsfristen beachten und danach löschen.',
      'Bei Weitergabe an Dritte den Rechtsrahmen klären.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die gefährlichsten Stoffe sind unsichtbar – Messtechnik macht sie erkennbar.',
      'Vor dem Betreten enger Räume immer messen.',
      'In der Höhe messen, in der der Stoff zu erwarten ist.',
      'Jedes Gerät misst nur seine Größe – unauffällig heißt nicht ungefährlich.',
      'Kalibrierung und Funktionsprüfung sind Voraussetzung für belastbare Werte.',
      'Digitale Dokumentation beschleunigt und vereinheitlicht – wenn sie bedienbar ist.',
      'Zu jedem digitalen Führungsmittel gehört eine analoge Rückfallebene.',
      'Datenschutz gilt auch für Einsatzfotos und Objektdaten.'),
  ],
},

/* ---------------------------------------------------------------- R4 ---- */
{
  id: 'r4', title: 'Drohnenbetrieb vertieft: Recht, Technik, Taktik', duration: 18,
  blocks: [
    P('Wer eine Drohne im Einsatz fliegt, ist Fernpilot mit rechtlicher Verantwortung – nicht Hobbyflieger mit Sondererlaubnis. Diese Lektion vertieft die drei Bereiche, die den Unterschied zwischen einem nützlichen und einem gefährlichen Drohneneinsatz ausmachen: Recht, Technik und Taktik.'),

    H2('recht', 'Der rechtliche Rahmen im Detail'),
    TBL(['Kategorie', 'Risiko', 'Voraussetzungen'],[
      ['Open', 'gering', 'ohne Betriebsgenehmigung, aber mit engen Betriebsgrenzen und Kompetenznachweis'],
      ['Specific', 'erhöht', 'Risikobewertung und Betriebsgenehmigung der Luftfahrtbehörde erforderlich'],
      ['Certified', 'hoch', 'Zulassung von Luftfahrzeug, Betreiber und Fernpilot'],
    ]),
    KF(
      '<b>Kompetenznachweis</b> der Fernpiloten erwerben und aktuell halten.',
      '<b>Registrierung</b> des Betreibers und Kennzeichnung des Luftfahrzeugs.',
      '<b>Flugverbots- und Kontrollzonen</b> prüfen – insbesondere um Flughäfen und über sensiblen Anlagen.',
      '<b>Betriebsgrenzen</b> einhalten: Höhe, Entfernung, Sichtkontakt, Abstand zu Menschen.',
      '<b>Versicherung</b> für den Betrieb sicherstellen.',
      '<b>Dienstanweisung</b> des Trägers kennen – sie konkretisiert alles Weitere.',
      '<b>Dokumentation</b> der Flüge führen.'),
    CO('warn', 'Erleichterungen sind keine Freistellung', 'Für Behörden und Organisationen mit Sicherheitsaufgaben gibt es Ausnahmen von einzelnen Betriebsgrenzen. Sie gelten aber nicht pauschal und nicht für jede Lage. Wer sich darauf beruft, muss wissen, welche Erleichterung konkret gilt – und die Verantwortung bleibt beim Fernpiloten.'),

    H2('technik', 'Sensorik und Ausstattung'),
    TBL(['Ausstattung', 'Nutzen', 'Grenze'],[
      ['Tageslichtkamera', 'Lageübersicht, Dokumentation', 'nur bei Sicht und Tageslicht sinnvoll'],
      ['Wärmebildkamera', 'Glutnester, Personensuche, Brandkante', 'geringere Auflösung, Interpretation nötig'],
      ['Zoom und stabilisierter Gimbal', 'Details aus sicherer Entfernung', 'Bildqualität sinkt mit Zoom'],
      ['Scheinwerfer', 'Nachtflug, Beleuchtung kleiner Bereiche', 'hoher Energiebedarf'],
      ['Lautsprecher', 'Durchsagen an Betroffene', 'begrenzte Verständlichkeit'],
      ['Abwurfvorrichtung', 'Rettungsmittel, Funkgeräte abwerfen', 'Nutzlast begrenzt, Präzision üben'],
      ['Positionsdaten', 'Koordinaten für Lagekarte und Nachforderung', 'GPS-Genauigkeit variiert'],
    ]),
    P('Für die meisten Feuerwehren ist die Kombination aus Tageslicht- und Wärmebildkamera der entscheidende Ausstattungsschritt. Alles Weitere ist nützlich, verändert aber die Einsatzmöglichkeiten weniger stark.'),

    H2('taktik', 'Taktischer Einsatz'),
    STEPS(
      'Auftrag klären: Was genau soll die Drohne beantworten? Ohne konkrete Frage kein sinnvoller Flug.',
      'Start- und Landeplatz festlegen – frei, sicher, außerhalb des Gefahrenbereichs.',
      'Luftraum klären und Flug bei Einsatzleitung und Leitstelle anmelden.',
      'Flugbereich, Höhe und Dauer festlegen und bekannt geben.',
      'Beobachter einteilen, der den Luftraum und die Drohne im Blick behält.',
      'Bilder unmittelbar an die Einsatzleitung übermitteln oder erläutern.',
      'Ergebnisse in die Lagekarte übernehmen.',
      'Akkuwechsel planen, damit der Überblick nicht abreißt.'),
    CO('tip', 'Die Frage vor dem Flug', 'Ein Flug ohne konkreten Auftrag liefert schöne Bilder und keine Erkenntnis. Die Einsatzleitung formuliert deshalb eine Frage: „Wie weit reicht der Brand nach Norden?", „Ist die Rückseite zugänglich?", „Wo liegt die Brandkante?" Damit wird die Drohne zum Führungsmittel statt zum Spielzeug.'),

    H2('gefahren', 'Gefahren beim Drohnenbetrieb'),
    KF(
      '<b>Kollision mit Luftfahrzeugen</b> – die schwerwiegendste Gefahr, deshalb Koordination zwingend.',
      '<b>Absturz über Menschen</b> – nicht über Personenansammlungen fliegen.',
      '<b>Thermik und Aufwinde</b> über Bränden können die Drohne unkontrollierbar machen.',
      '<b>Rauch und Hitze</b> schädigen Sensoren und Motoren.',
      '<b>Kontrollverlust</b> durch Funkstörung oder Akkuende.',
      '<b>Hindernisse</b>: Freileitungen, Antennen, Kräne, Bäume – oft schlecht sichtbar.',
      '<b>Ablenkung</b> des Fernpiloten durch Funkverkehr und Umfeld.'),
    CO('danger', 'Nicht über Menschen fliegen', 'Ein Absturz über Einsatzkräften, Betroffenen oder Schaulustigen kann schwere Verletzungen verursachen. Flugwege werden so gewählt, dass sich unter der Drohne möglichst niemand aufhält – auch nicht kurzzeitig beim Überfliegen.'),

    H2('ausbildung', 'Fernpiloten ausbilden und üben'),
    KF(
      'Regelmäßiges Fliegen – Fertigkeiten verlieren sich schnell.',
      'Notverfahren üben: Kontrollverlust, Rückkehrfunktion, manuelle Landung.',
      'Wärmebildinterpretation trainieren, nicht nur Fliegen.',
      'Zusammenarbeit mit der Einsatzleitung üben – Bildübertragung und Erläuterung.',
      'Einsatzdokumentation und Datenschutz zum festen Bestandteil machen.',
      'Erfahrungen mit Nachbarwehren austauschen.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Kategorien Open, Specific, Certified – Erleichterungen für BOS sind keine Freistellung.',
      'Kompetenznachweis, Registrierung, Betriebsgrenzen, Versicherung, Dienstanweisung.',
      'Tageslicht- und Wärmebildkamera sind die entscheidende Ausstattung.',
      'Vor dem Flug eine konkrete Frage formulieren.',
      'Start- und Landeplatz, Luftraum, Beobachter und Akkuwechsel planen.',
      'Nicht über Menschen fliegen; Thermik über Bränden beachten.',
      'Bei Luftfahrzeugen im Einsatz sofort landen.',
      'Fernpiloten müssen regelmäßig üben – auch Notverfahren.'),
  ],
},

/* ---------------------------------------------------------------- R5 ---- */
{
  id: 'r5', title: 'Vernetzung, Leitstelle & Zukunftstechnologien', duration: 16,
  blocks: [
    P('Zwischen dem Notruf und dem ersten Strahlrohr liegt eine Kette digitaler Systeme, die die meisten Einsatzkräfte nie sehen. Sie entscheidet darüber, wie schnell die richtigen Kräfte am richtigen Ort sind. Diese Lektion schaut auf diese Systeme – und auf das, was in den kommenden Jahren dazukommt.'),

    H2('leitstelle', 'Die Leitstelle als Nervenzentrum'),
    P('Die integrierte Leitstelle nimmt Notrufe entgegen, disponiert Einheiten, koordiniert die Kommunikation und dokumentiert den Einsatz. Sie ist damit die einzige Stelle, die während des gesamten Einsatzes den Überblick über alle beteiligten Kräfte behält.'),
    KF(
      '<b>Notrufabfrage</b> nach strukturiertem Schema – sie bestimmt das Einsatzstichwort.',
      '<b>Disposition</b> nach der Alarm- und Ausrückeordnung, unterstützt durch das Einsatzleitsystem.',
      '<b>Alarmierung</b> über Sirene, Funkmeldeempfänger und App.',
      '<b>Statusverwaltung</b> aller Fahrzeuge in Echtzeit.',
      '<b>Nachalarmierung</b> und Koordination überörtlicher Hilfe.',
      '<b>Dokumentation</b> aller Zeiten und Meldungen.',
      '<b>Fachinformationen</b>: Gefahrgutdatenbanken, Objektdaten, Ansprechpartner.'),
    CO('tip', 'Die Leitstelle ist ein Partner', 'Sie sieht Dinge, die an der Einsatzstelle nicht sichtbar sind: welche Kräfte verfügbar sind, wo die nächste Drehleiter steht, welche Objektdaten hinterlegt sind. Wer sie frühzeitig und vollständig informiert, bekommt mehr zurück als eine Bestätigung – nämlich Vorbereitung.'),

    H2('vernetzung', 'Vernetzte Einsatzführung'),
    UL(
      '<b>Digitale Lagekarten</b> in Echtzeit für alle Führungsebenen.',
      '<b>Automatisierte Statusmeldungen</b> entlasten den Sprechfunk erheblich.',
      '<b>Fahrzeugortung</b> für Übersicht und gezielte Zuweisung.',
      '<b>Sensorik und vernetzte Melder</b>: Brandmeldeanlagen, Wasserstandssensoren, Wetterdaten.',
      '<b>Rettungsdatenblätter</b> über Kennzeichenabfrage oder QR-Code.',
      '<b>Digitale Objektdaten</b> und Feuerwehrpläne direkt im Fahrzeug.',
      '<b>Organisationsübergreifende Lagebilder</b> mit Rettungsdienst, Polizei und Behörden.'),
    P('Der größte Gewinn dieser Vernetzung liegt nicht in der Technik selbst, sondern im <b>gemeinsamen Lagebild</b>: Wenn Einsatzleitung, Abschnittsleiter und Leitstelle dieselbe Karte sehen, entfallen die Missverständnisse, die entstehen, wenn jeder sich sein eigenes Bild macht.'),

    H2('zukunft', 'Blick nach vorn'),
    TBL(['Technologie', 'Potenzial', 'Realistische Einschätzung'],[
      ['KI-gestützte Bildauswertung', 'automatisches Erkennen von Personen und Brandherden', 'unterstützt die Auswertung, ersetzt keine Beurteilung'],
      ['Löschroboter und unbemannte Bodenfahrzeuge', 'Einsatz in extrem gefährlichen Bereichen', 'in Deutschland noch selten, wächst bei Sonderrisiken'],
      ['Exoskelette', 'Entlastung beim Tragen schwerer Lasten', 'derzeit vor allem in Erprobung'],
      ['Vernetzte Schutzausrüstung', 'Vitaldaten und Position des Trupps in Echtzeit', 'großes Potenzial für die Atemschutzüberwachung'],
      ['Erweiterte Realität im Helm', 'Lageinformationen im Sichtfeld', 'Nutzen hängt stark von der Bedienbarkeit ab'],
      ['Automatische Lagedokumentation', 'lückenlose Nachvollziehbarkeit', 'Datenschutz und Datenqualität entscheidend'],
      ['Alternative Löschmittel und -verfahren', 'weniger Wasser, weniger Umweltbelastung', 'Erprobung läuft, Grundlagen bleiben gleich'],
    ]),
    CO('warn', 'Neue Technik bringt neue Abhängigkeiten', 'Jedes System, das eine Aufgabe übernimmt, erzeugt eine Lücke, wenn es ausfällt. Eine Wehr, die ihre Atemschutzüberwachung vollständig digitalisiert hat, muss trotzdem in der Lage sein, sie auf Papier zu führen. Digitalisierung ohne Rückfallebene ist keine Modernisierung, sondern ein Risiko.'),

    H2('einfuehrung', 'Neue Technik sinnvoll einführen'),
    STEPS(
      'Problem benennen: Welche konkrete Schwierigkeit soll die Technik lösen?',
      'Prüfen, ob sie das wirklich löst – oder nur beeindruckend aussieht.',
      'Beschaffung mit den Anwendern abstimmen, nicht über ihre Köpfe hinweg.',
      'Ausbildung von Anfang an einplanen – Technik ohne Übung wird nicht genutzt.',
      'Rückfallebene festlegen und ebenfalls üben.',
      'Nach einiger Zeit ehrlich auswerten: Wird sie genutzt? Bringt sie etwas?',
      'Bei Bedarf nachsteuern oder die Entscheidung revidieren.'),

    H2('mensch', 'Der Mensch bleibt entscheidend'),
    P('Alle Technik dieses Moduls hat eines gemeinsam: Sie verstärkt, was die Einsatzkräfte können – und sie verstärkt auch, was sie nicht können. Eine Wärmebildkamera in der Hand eines Trupps, der die systematische Absuche beherrscht, ist ein enormer Gewinn. In der Hand eines Trupps, der sie nicht beherrscht, ersetzt sie das Können nicht, sondern verdeckt seinen Mangel.'),
    CO('tip', 'Die richtige Reihenfolge', 'Erst die Grundlagen, dann die Technik. Wer Knoten, Kommandos, Türprozedur und Atemschutzregeln sicher beherrscht, nutzt digitale Werkzeuge als Verstärker. Wer sie nicht beherrscht, wird von der Technik abhängig – und steht hilflos da, wenn sie schweigt.'),

    H2('zusammenfassung', 'Das Wichtigste im Überblick'),
    KF(
      'Die Leitstelle disponiert, koordiniert, dokumentiert und liefert Fachinformationen.',
      'Frühe und vollständige Information an die Leitstelle zahlt sich aus.',
      'Der größte Gewinn der Vernetzung ist das gemeinsame Lagebild.',
      'Statusmeldungen entlasten den Sprechfunk erheblich.',
      'Zukunftstechnologien unterstützen die Beurteilung, ersetzen sie nicht.',
      'Jede Digitalisierung braucht eine geübte analoge Rückfallebene.',
      'Neue Technik nur einführen, wenn sie ein benanntes Problem löst.',
      'Erst die Grundlagen, dann die Technik.'),
  ],
},

];
