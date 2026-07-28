/* =========================================================================
   EXAMS-HLFS-3 — Bildfragen zum HLFS-Fragenkatalog.

   Fragen aus dem „Fragenkatalog zur Hessischen Feuerwehrleistungsübung"
   (HLFS, Stand Oktober 2021), die im Original ein Bildzeichen zeigen
   (Feuerlöscher-Brandklassenzeichen, Gefahrzettel, Warntafel). Die Bilder
   sind als Inline-SVG in exam-figures.js hinterlegt und über das Feld
   `fig:'<id>'` verknüpft; die Frage-Views rendern sie automatisch.

   Fragetext/Optionen sinngemäß aus dem HLFS-Katalog, Lösung/Erklärung
   fachlich ergänzt (Brandklassen nach EN 3, Kennzeichnung nach ADR/GGVSEB).
   Kennung src:'HLFS 2021'.
   ========================================================================= */

const SRC = 'HLFS 2021';

export const HLFS_QUESTIONS_3 = {

  /* ---- Feuerlöscher-Brandklassenzeichen (EN 3) → B ---- */
  'b-brennen-loeschen': [
    { id:'hlfs3-b1', type:'single', difficulty:2, topic:'Brandklassen', src:SRC, fig:'bk-a',
      q:'Für welche Brände ist ein mit diesem Bildzeichen gekennzeichneter Feuerlöscher geeignet?',
      options:['für Brände fester Stoffe (ausgenommen Metalle)','für Brände gasförmiger Stoffe','für Brände flüssiger oder flüssig werdender Stoffe'], correct:[0],
      exp:'Das Symbol (Flammen über Holzscheiten) steht für die Brandklasse A – feste, glutbildende Stoffe wie Holz, Papier, Textilien.' },
    { id:'hlfs3-b2', type:'single', difficulty:2, topic:'Brandklassen', src:SRC, fig:'bk-b',
      q:'Ein Feuerlöscher trägt dieses Bildzeichen. Für welche Brände ist er geeignet?',
      options:['für Brände fester Stoffe','für Brände flüssiger oder flüssig werdender Stoffe','für Brände von Metallen'], correct:[1],
      exp:'Flammen über einem Behälter mit Flüssigkeit kennzeichnen die Brandklasse B – flüssige oder flüssig werdende Stoffe (z. B. Benzin, Wachs, Teer).' },
    { id:'hlfs3-b3', type:'single', difficulty:2, topic:'Brandklassen', src:SRC, fig:'bk-c',
      q:'Für welche Brandklasse ist ein Feuerlöscher mit diesem Symbol geeignet?',
      options:['für Brände fester Stoffe','für Brände gasförmiger Stoffe','für Brände flüssiger Stoffe'], correct:[1],
      exp:'Die Flamme am Gasaustritt kennzeichnet die Brandklasse C – Brände gasförmiger Stoffe (z. B. Propan, Erdgas, Acetylen).' },
    { id:'hlfs3-b4', type:'single', difficulty:2, topic:'Brandklassen', src:SRC, fig:'bk-d',
      q:'Dieses Bildzeichen steht auf einem Feuerlöscher. Für welche Brände ist er geeignet?',
      options:['für Brände von flüssigen Stoffen','für Brände von gasförmigen Stoffen','für Brände von Metallen'], correct:[2],
      exp:'Flammen über Metallblöcken kennzeichnen die Brandklasse D – Metallbrände (z. B. Aluminium, Magnesium); Löschung nur mit Metallbrandpulver.' },
    { id:'hlfs3-b5', type:'single', difficulty:2, topic:'Brandklassen', src:SRC, fig:'bk-f',
      q:'Für welche Brände eignet sich ein Feuerlöscher mit diesem Piktogramm?',
      options:['für Brände von Metallen','für Brände von Speiseölen und -fetten in Frittier- und Fettbackgeräten','für Brände von gasförmigen Stoffen'], correct:[1],
      exp:'Die Flamme über der Pfanne kennzeichnet die Brandklasse F – Speiseöl- und Speisefettbrände; niemals mit Wasser löschen (Fettexplosion).' },
  ],

  /* ---- Gefahrzettel & Warntafel (ADR) → I ---- */
  'i-gefahrgut': [
    { id:'hlfs3-i1', type:'single', difficulty:2, topic:'Gefahrzettel', src:SRC, fig:'gz-3',
      q:'An der Brandstelle finden Sie Packstücke mit diesem Gefahrzettel. Welche Eigenschaft hat der Stoff?',
      options:['entzündbarer flüssiger Stoff','giftiger Stoff','nicht brennbares Gas'], correct:[0],
      exp:'Die rote Raute mit Flammensymbol (Klasse 3) kennzeichnet entzündbare flüssige Stoffe (z. B. Benzin, Lösungsmittel).' },
    { id:'hlfs3-i2', type:'single', difficulty:2, topic:'Gefahrzettel', src:SRC, fig:'gz-2-2',
      q:'Welche Bedeutung hat dieser Gefahrzettel?',
      options:['brennbares Gas','nicht entzündbares, ungiftiges Gas','ätzender Stoff'], correct:[1],
      exp:'Die grüne Raute mit Gasflaschensymbol (Klasse 2.2) kennzeichnet nicht entzündbare, ungiftige Gase (z. B. Stickstoff, Kohlenstoffdioxid).' },
    { id:'hlfs3-i3', type:'single', difficulty:2, topic:'Gefahrzettel', src:SRC, fig:'gz-4-3',
      q:'Der Angriffstrupp erkennt Packstücke mit diesem blauen Gefahrzettel. Welche Bedeutung hat er?',
      options:['die Verpackung enthält wässerige Stoffe','Verpackung und Inhalt können mit Wasser gelöscht werden','der Inhalt entwickelt bei Berührung mit Wasser entzündbare Gase'], correct:[2],
      exp:'Die blaue Raute mit Flammensymbol (Klasse 4.3) warnt: Der Stoff entwickelt bei Kontakt mit Wasser entzündbare Gase – kein Wasser einsetzen.' },
    { id:'hlfs3-i4', type:'single', difficulty:2, topic:'Gefahrzettel', src:SRC, fig:'gz-6-1',
      q:'Welche Eigenschaft kennzeichnet dieser Gefahrzettel?',
      options:['radioaktiver Stoff','giftiger Stoff','oxidierender (brandfördernder) Stoff'], correct:[1],
      exp:'Die weiße Raute mit Totenkopf und gekreuzten Knochen (Klasse 6.1) kennzeichnet giftige Stoffe.' },
    { id:'hlfs3-i5', type:'single', difficulty:2, topic:'Warntafel', src:SRC, fig:'warntafel-33-1203',
      q:'Ein Tankfahrzeug trägt diese orangefarbene Warntafel. Welche Bedeutung hat die untere Zahl?',
      options:['die UN-Nummer (Stoffnummer) des geladenen Stoffes','die Gefahrnummer','die Rufnummer der zuständigen Feuerwehr'], correct:[0],
      exp:'Unten steht die vierstellige UN-Nummer (Stoffnummer). „1203" bezeichnet z. B. Benzin/Ottokraftstoff.' },
    { id:'hlfs3-i6', type:'single', difficulty:3, topic:'Warntafel', src:SRC, fig:'warntafel-33-1203',
      q:'Welche Bedeutung hat die obere Zahl „33" auf dieser Warntafel?',
      options:['besonders leicht entzündbarer flüssiger Stoff','giftiger fester Stoff','tiefgekühlt verflüssigtes Gas'], correct:[0],
      exp:'Oben steht die Gefahrnummer. Die verdoppelte „3" bedeutet eine Gefahrerhöhung: ein besonders leicht entzündbarer flüssiger Stoff (Flammpunkt unter 23 °C).' },
  ],

};
