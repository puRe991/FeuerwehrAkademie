/* =========================================================================
   EXAMS-HLFS-4 — Rechenaufgaben zum HLFS-Fragenkatalog.

   Berechnungsfragen aus dem „Fragenkatalog zur Hessischen Feuerwehr-
   leistungsübung" (HLFS, Stand Oktober 2021): Schaumherstellung
   (Verschäumungszahl, Zumischung) und Wasserlieferung der Strahlrohre
   (l/min-Faustwerte bei 5 bar). Jede Frage enthält den vollständigen
   Rechenweg in der Erklärung (exp).

   Eigener Aufgabentyp: topic:'Berechnung', calc:true. Das Prüfungsset
   „Rechenaufgaben" (pruefungssets.js) zieht gezielt diese Fragen.

   Merkgrößen (Faustwerte bei 5 bar Strahlrohrdruck):
     BM ohne Mundstück ≈ 800 l/min · BM mit Mundstück ≈ 400 l/min
     CM ohne Mundstück ≈ 200 l/min · CM mit Mundstück ≈ 100 l/min
     DM ohne Mundstück ≈  50 l/min · DM mit Mundstück ≈  25 l/min
   Zumischer/Schaumstrahlrohr „Z n"/„S n": n × 100 l/min Gemischdurchfluss.
   Luftschaummenge = Wasser-Schaummittel-Gemisch × Verschäumungszahl.
   ========================================================================= */

const SRC = 'HLFS 2021';

export const HLFS_QUESTIONS_4 = {

  /* ---- Schaumberechnung → B ---- */
  'b-brennen-loeschen': [
    { id:'hlfs4-b1', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Ein Schaumstrahlrohr M 4 (Verschäumungszahl 150) verbraucht in 5 Minuten 60 l Schaummittel bei 3 % Zumischung. Wie viel Liter Luftschaum werden erzeugt?',
      options:['ca. 300.000 Liter','ca. 90.000 Liter','ca. 18.000 Liter'], correct:[0],
      exp:'Schritt 1 – Gemischmenge: 60 l Schaummittel sind 3 % ⇒ Wasser-Schaummittel-Gemisch = 60 l ÷ 0,03 = 2.000 l. Schritt 2 – Luftschaum: Gemisch × Verschäumungszahl = 2.000 l × 150 = 300.000 l.' },
    { id:'hlfs4-b2', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Wie viel m³ Schaum können mit einem Zumischer Z 2 und einem Schaumstrahlrohr S 2 bei 3 % Zumischung in 6 Minuten hergestellt werden (Verschäumungszahl 15)?',
      options:['ca. 10 m³','ca. 12 m³','ca. 18 m³'], correct:[2],
      exp:'Z 2 = 200 l/min Gemischdurchfluss. In 6 min: 200 l/min × 6 min = 1.200 l Gemisch. Luftschaum = 1.200 l × 15 = 18.000 l = 18 m³. (Die 3 % betreffen nur den Schaummittelanteil, nicht die Schaummenge.)' },
    { id:'hlfs4-b3', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Ein Zumischer Z 4 R ist auf 3 % eingestellt. Nach welcher Zeit sind 20 l Schaummittel zugemischt?',
      options:['in weniger als 2 Minuten','in mehr als 3 Minuten','in mehr als 5 Minuten'], correct:[0],
      exp:'Z 4 = 400 l/min Gemisch. Schaummittelverbrauch = 3 % von 400 l/min = 12 l/min. Zeit = 20 l ÷ 12 l/min ≈ 1,7 min ⇒ in weniger als 2 Minuten.' },
    { id:'hlfs4-b4', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Wie viel m³ Schwerschaum liefert ein Zumischer Z 4 R mit Kombinationsschaumstrahlrohr M4/S4 (Verschäumungszahl 15) in 5 Minuten?',
      options:['ca. 30 m³','ca. 36 m³','ca. 40 m³'], correct:[0],
      exp:'Z 4 = 400 l/min Gemisch. In 5 min: 400 l/min × 5 min = 2.000 l Gemisch. Luftschaum = 2.000 l × 15 = 30.000 l = 30 m³.' },
  ],

  /* ---- Wasserlieferung der Strahlrohre (Faustwerte bei 5 bar) → D ---- */
  'd-geraetekunde': [
    { id:'hlfs4-d1', type:'single', difficulty:2, topic:'Berechnung', calc:true, src:SRC,
      q:'Wie viel Liter Wasser liefert ein „BM-Strahlrohr" ohne Mundstück bei 5 bar Strahlrohrdruck in 1 Minute (Faustwert)?',
      options:['ca. 160 l','ca. 400 l','ca. 800 l'], correct:[2],
      exp:'Faustwert bei 5 bar: BM-Strahlrohr ohne Mundstück ≈ 800 l/min (mit Mundstück ≈ 400 l/min).' },
    { id:'hlfs4-d2', type:'single', difficulty:2, topic:'Berechnung', calc:true, src:SRC,
      q:'Welche Wasserlieferung hat ein „BM-Strahlrohr" ohne Mundstück in 5 Minuten bei 5 bar Strahlrohrdruck?',
      options:['ca. 400 Liter','ca. 4.000 Liter','ca. 2.000 Liter'], correct:[1],
      exp:'BM ohne Mundstück ≈ 800 l/min. In 5 min: 800 l/min × 5 min = 4.000 l.' },
    { id:'hlfs4-d3', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Wie viel Liter Wasser liefern ein „BM-" und ein „CM-Strahlrohr" (beide ohne Mundstück) zusammen in 6 Minuten bei 5 bar?',
      options:['ca. 3.800 l','ca. 5.800 l','ca. 6.000 l'], correct:[2],
      exp:'BM ohne Mundstück ≈ 800 l/min, CM ohne Mundstück ≈ 200 l/min ⇒ zusammen 1.000 l/min. In 6 min: 1.000 l/min × 6 min = 6.000 l.' },
    { id:'hlfs4-d4', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Wie viel Liter Wasser liefert ein „DM-Strahlrohr" mit Mundstück bei 5 bar Strahlrohrdruck in 6 Minuten?',
      options:['ca. 150 Liter','ca. 25 Liter','ca. 50 Liter'], correct:[0],
      exp:'DM-Strahlrohr mit Mundstück ≈ 25 l/min. In 6 min: 25 l/min × 6 min = 150 l.' },
    { id:'hlfs4-d5', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Welches Strahlrohr liefert bei 5 bar Strahlrohrdruck in 10 Minuten ca. 500 l Wasser?',
      options:['ein „CM-Strahlrohr" mit Mundstück','ein „DM-Strahlrohr" ohne Mundstück','ein „DM-Strahlrohr" mit Mundstück'], correct:[1],
      exp:'500 l ÷ 10 min = 50 l/min. Das entspricht dem DM-Strahlrohr ohne Mundstück (≈ 50 l/min). CM mit Mundstück ≈ 100 l/min, DM mit Mundstück ≈ 25 l/min.' },
    { id:'hlfs4-d6', type:'single', difficulty:3, topic:'Berechnung', calc:true, src:SRC,
      q:'Welche Strahlrohrkombination liefert überschlägig ca. 600 l/min bei 5 bar Strahlrohrdruck?',
      options:['ein „BM" ohne Mundstück und ein „CM" mit Mundstück','zwei „CM" mit Mundstück und ein „BM" mit Mundstück','ein „BM" mit und ein „CM" mit Mundstück'], correct:[1],
      exp:'CM mit Mundstück ≈ 100 l/min, BM mit Mundstück ≈ 400 l/min. Zwei CM (2 × 100) + ein BM (400) = 600 l/min.' },
  ],

};
