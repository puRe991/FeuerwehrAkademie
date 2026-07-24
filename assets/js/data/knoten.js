/* =========================================================================
   KNOTEN-TRAINER — Schritt-für-Schritt zu den wichtigsten Feuerwehrknoten
   (Modul U). Jede Figur ist ein schematisches Lern-Schaubild auf festem
   hellem Panel: das lose (arbeitende) Ende ist ROT, das feste/stehende
   Teil BLAU, feste Objekte (Pfahl/Ring) grau. Kreuzungen werden über die
   Zeichenreihenfolge dargestellt (die obere Leine verdeckt die untere).

   Fachlich orientiert an FwDV 1 (Grundtätigkeiten). Ersetzt kein Üben mit
   echter Leine – Knoten müssen praktisch beherrscht werden.
   ========================================================================= */

const ROPE = '#d81f26';   // loses/arbeitendes Ende
const REST = '#1e5fa8';   // festes/stehendes Teil
const OBJ  = '#8590a0';   // Pfahl/Ring/Objekt
const BG   = '#eef1f5';   // festes Panel (theme-unabhängig)
const INK  = '#1f2933';

/* SVG-Rahmen mit hellem Panel. */
function K(w, h, inner) {
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto;max-width:340px;margin-inline:auto;display:block" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <rect width="${w}" height="${h}" rx="14" fill="${BG}"/>${inner}</svg>`;
}
/* Leinen-Segment mit heller „Umhüllung": später gezeichnete Leinen liegen
   damit sichtbar ÜBER früher gezeichneten (Kreuzungsdarstellung). */
function rope(d, color, cw = 11) {
  return `<path d="${d}" fill="none" stroke="${BG}" stroke-width="${cw + 7}" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="${d}" fill="none" stroke="${color}" stroke-width="${cw}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
/* Pfahl (senkrecht) */
function post(x = 104, y = 6, w = 30, h = 158) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="${OBJ}"/>
          <ellipse cx="${x + w / 2}" cy="${y}" rx="${w / 2}" ry="6" fill="#9aa4b2"/>`;
}
/* kleiner Richtungspfeil am losen Ende */
function tip(x, y, label = 'loses Ende') {
  return `<circle cx="${x}" cy="${y}" r="6" fill="${ROPE}"/>
          <text x="${x}" y="${y - 11}" font-family="sans-serif" font-size="11" font-weight="700" fill="${INK}" text-anchor="middle">${label}</text>`;
}
function note(x, y, txt, anchor = 'middle') {
  return `<text x="${x}" y="${y}" font-family="sans-serif" font-size="11.5" font-weight="600" fill="${INK}" text-anchor="${anchor}">${txt}</text>`;
}

/* ============================ Die Knoten ============================ */
export const KNOTEN = [

/* ---------- Mastwurf (gestochen) ---------- */
{
  id: 'mastwurf-gestochen',
  name: 'Mastwurf (gestochen)',
  alt: 'Webeleinstek',
  difficulty: 1,
  use: 'Der wichtigste Feuerwehrknoten: befestigt eine Leine an einem Rundholz, Geländer oder Rohr – z. B. zum Hochziehen von Geräten. „Gestochen" heißt: um das Objekt herum geführt, wenn ein Ende frei ist.',
  mnemonic: 'Zwei gleichsinnige Schläge – das zweite Ende kreuzt und wird unter sich selbst gesteckt.',
  steps: [
    { text: 'Das lose Ende von vorne um den Pfahl führen – der erste Schlag verläuft schräg nach oben.',
      svg: K(240, 170, `${post()}
        ${rope('M40,120 C70,110 150,70 205,52', REST)}
        ${tip(205, 52)} ${note(60, 150, 'festes Teil', 'start')}`) },
    { text: 'Einen zweiten Schlag in gleicher Richtung oberhalb ansetzen und das lose Ende schräg über den ersten führen.',
      svg: K(240, 170, `${post()}
        ${rope('M40,120 C70,110 150,70 205,52', REST)}
        ${rope('M205,52 C150,60 70,95 40,140', ROPE)}
        ${tip(40, 140)}`) },
    { text: 'Das lose Ende unter die entstandene Kreuzung stecken – so, dass es zwischen Leine und Pfahl herauskommt.',
      svg: K(240, 170, `${post()}
        ${rope('M40,120 C70,110 150,70 205,52', REST)}
        ${rope('M205,52 C150,60 95,92 78,104', ROPE)}
        ${rope('M78,104 C90,112 108,120 128,122', ROPE)}
        ${tip(128, 122, 'unter die Kreuzung')}`) },
    { text: 'Beide Enden kräftig anziehen. Zwei parallele Schläge mit gekreuztem Kern – der Mastwurf sitzt fest und lässt sich unter Last nicht verschieben.',
      tip: 'Kontrolle: Von der Seite bilden die beiden Schläge ein sauberes „X" unter der oberen Windung.',
      svg: K(240, 170, `${post()}
        ${rope('M50,116 C90,112 150,74 200,66', REST)}
        ${rope('M200,66 C150,80 96,92 74,100', ROPE)}
        ${rope('M74,100 C96,110 120,116 138,116', ROPE)}
        ${tip(138, 116, '')} ${tip(200, 66, '')}
        ${note(120, 150, 'fest angezogen')}`) },
  ],
},

/* ---------- Mastwurf (gelegt) ---------- */
{
  id: 'mastwurf-gelegt',
  name: 'Mastwurf (gelegt)',
  alt: 'in der Hand gelegt',
  difficulty: 2,
  use: 'Schnelle Variante, wenn der Mastwurf über das Ende eines Gegenstands (Pfahl, Sprosse, Karabiner) gestülpt werden kann. Häufig zum Anschlagen und beim Anleitern.',
  mnemonic: 'Zwei gleiche Buchten legen – die zweite über die erste – beide über den Pfahl stülpen.',
  steps: [
    { text: 'Eine erste Bucht (Schlaufe) legen: das lose Ende kreuzt vor dem festen Teil.',
      svg: K(240, 170, `${rope('M60,150 C50,90 120,60 150,95 C165,115 120,135 92,120', REST)}
        ${tip(92, 120)} ${note(60, 165, 'festes Teil', 'start')}`) },
    { text: 'Eine zweite, gleich gedrehte Bucht legen.',
      svg: K(240, 170, `${rope('M60,150 C50,90 120,60 150,95 C165,115 120,135 92,120', REST)}
        ${rope('M150,150 C140,90 210,60 240,95', ROPE, 10)}
        ${note(120, 40, 'zweite Bucht gleich drehen')}`) },
    { text: 'Die zweite Bucht hinter die erste schieben – die beiden Schlaufen überlappen sich.',
      svg: K(240, 170, `${rope('M70,150 C60,85 130,58 160,95 C176,116 128,138 100,122', REST)}
        ${rope('M120,150 C110,85 175,60 150,100 C138,118 100,120 96,118', ROPE, 10)}
        ${note(120, 40, 'überlappen lassen')}`) },
    { text: 'Beide Buchten gemeinsam über den Pfahl stülpen und festziehen – fertig ist der gelegte Mastwurf.',
      tip: 'Beide Buchten müssen gleichsinnig gedreht sein – sonst löst sich der Knoten.',
      svg: K(240, 170, `${post()}
        ${rope('M60,120 C90,112 150,80 200,74', REST)}
        ${rope('M200,74 C150,86 96,96 76,104', ROPE)}
        ${rope('M76,104 C98,112 122,116 140,116', ROPE)}
        ${note(120, 150, 'übergestülpt & fest')}`) },
  ],
},

/* ---------- Halbmastwurf (HMS) ---------- */
{
  id: 'halbmastwurf',
  name: 'Halbmastwurf',
  alt: 'HMS / Halbmastwurfsicherung',
  difficulty: 2,
  use: 'Dynamischer Sicherungsknoten am HMS-Karabiner – bremst Seil durch Umlenkung. Zum Sichern und Ablassen von Personen/Lasten. Läuft in beide Richtungen durch.',
  mnemonic: 'Eine Bucht ins Seil, in den Karabiner einhängen – der Knoten schlägt bei Belastung um.',
  steps: [
    { text: 'Eine Bucht ins Seil legen.',
      svg: K(240, 170, `${rope('M60,150 C55,90 130,70 150,110 C160,130 120,140 100,128', REST)}
        ${tip(100, 128, 'Bremshand-Seite')} ${note(55, 165, 'Lastseite', 'start')}`) },
    { text: 'Die Bucht so verdrehen, dass eine kleine zweite Schlaufe entsteht (Karabiner-Auge).',
      svg: K(240, 170, `${rope('M60,150 C55,95 120,75 145,105', REST)}
        ${rope('M145,105 C165,130 120,145 96,130 C84,122 96,108 112,112', ROPE, 10)}
        ${note(120, 40, 'Schlaufe verdrehen')}`) },
    { text: 'Den HMS-Karabiner durch beide Seilstränge einhängen und verschrauben.',
      tip: 'Immer einen verschließbaren (Schraub-)Karabiner verwenden – Birnenform (HMS).',
      svg: K(240, 170, `
        <path d="M150,30 C120,30 108,55 118,85 C126,110 118,140 150,150" fill="none" stroke="${OBJ}" stroke-width="10" stroke-linecap="round"/>
        <rect x="146" y="26" width="26" height="10" rx="5" fill="#9aa4b2"/>
        ${rope('M60,150 C70,120 100,100 118,96', REST)}
        ${rope('M118,96 C140,92 150,120 128,132 C116,138 104,128 112,118', ROPE, 10)}
        ${note(120, 22, 'HMS-Karabiner')}`) },
    { text: 'Fertig: Zieht die Last, schlägt der Knoten im Karabiner um und bremst. Über die Bremshand wird Seil kontrolliert durchgelassen.',
      svg: K(240, 170, `
        <path d="M150,30 C120,30 108,55 118,85 C126,110 118,140 150,150" fill="none" stroke="${OBJ}" stroke-width="10" stroke-linecap="round"/>
        ${rope('M60,150 C80,120 108,104 124,104', REST)}
        ${rope('M124,104 C146,104 150,128 130,134 C118,138 108,126 118,116', ROPE, 10)}
        ${note(120, 22, 'bremst bei Last')}`) },
  ],
},

/* ---------- Zimmermannsstich ---------- */
{
  id: 'zimmermannsstich',
  name: 'Zimmermannsstich',
  alt: 'Zimmermannsschlag',
  difficulty: 1,
  use: 'Zum Anschlagen und Hochziehen langer Gegenstände (Balken, Saugschlauch, Leiter). Hält nur unter Zug – ideal zum schnellen Ansetzen, zieht sich selbst fest.',
  mnemonic: 'Rundtörn um das Objekt, loses Ende um das eigene stehende Teil wickeln (mind. 3 ×).',
  steps: [
    { text: 'Das lose Ende einmal um den Gegenstand herumführen (Rundtörn).',
      svg: K(240, 170, `${post(150, 6, 26, 158)}
        ${rope('M40,110 C90,104 150,100 176,96 C205,90 200,70 176,74', REST)}
        ${tip(176, 74)} ${note(45, 140, 'stehendes Teil', 'start')}`) },
    { text: 'Das lose Ende zurück um das stehende (feste) Teil legen.',
      svg: K(240, 170, `${post(150, 6, 26, 158)}
        ${rope('M40,110 C90,104 150,100 176,96 C205,90 200,72 176,76', REST)}
        ${rope('M176,76 C120,84 90,96 78,108 C70,118 82,124 96,118', ROPE, 10)}
        ${tip(96, 118)}`) },
    { text: 'Das lose Ende drei- bis viermal um das eigene stehende Teil wickeln – immer in dieselbe Richtung.',
      tip: 'Mindestens drei Wicklungen! Zu wenige Törns lösen sich unter Last.',
      svg: K(240, 170, `${post(150, 6, 26, 158)}
        ${rope('M40,110 C90,104 150,100 176,96 C205,90 200,72 176,76', REST)}
        ${rope('M176,76 C150,82 120,90 104,98', ROPE, 10)}
        <g stroke="${ROPE}" stroke-width="9" stroke-linecap="round" fill="none">
          <path d="M104,98 q-8,10 6,14"/><path d="M96,112 q10,-4 4,-14"/>
          <path d="M92,90 q-8,10 6,14"/><path d="M84,104 q10,-4 4,-14"/>
          <path d="M80,82 q-8,10 6,14"/></g>
        ${note(120, 150, '3–4 × wickeln')}`) },
    { text: 'Am stehenden Teil ziehen – der Zimmermannsstich zieht sich fest. Bleibt der Zug erhalten, hält der Knoten sicher.',
      svg: K(240, 170, `${post(150, 6, 26, 158)}
        ${rope('M40,112 C90,106 150,100 176,96 C204,90 198,74 176,78', REST)}
        ${rope('M176,78 C150,84 120,92 100,100', ROPE, 10)}
        <g stroke="${ROPE}" stroke-width="9" stroke-linecap="round" fill="none">
          <path d="M100,100 q-7,9 5,13"/><path d="M92,112 q9,-4 4,-13"/>
          <path d="M88,92 q-7,9 5,13"/></g>
        ${note(70, 145, 'ziehen →', 'start')}`) },
  ],
},

/* ---------- Schotenstich ---------- */
{
  id: 'schotenstich',
  name: 'Schotenstich',
  alt: 'Schotstek',
  difficulty: 2,
  use: 'Verbindet zwei Leinen miteinander – auch unterschiedlicher Stärke. Die dickere Leine bildet die Bucht, die dünnere wird durchgesteckt und untergeschlagen.',
  mnemonic: 'Dicke Leine = Bucht. Dünne von unten durch, um beide herum, unter sich selbst hindurch.',
  steps: [
    { text: 'Mit der dickeren Leine eine Bucht (U-Form) legen.',
      svg: K(240, 170, `${rope('M40,60 C90,58 150,58 150,95 C150,132 90,130 40,128', REST, 12)}
        ${note(60, 40, 'dicke Leine (Bucht)', 'start')}`) },
    { text: 'Die dünnere Leine von unten durch die Bucht stecken.',
      svg: K(240, 170, `${rope('M40,60 C90,58 150,58 150,95 C150,132 90,130 40,128', REST, 12)}
        ${rope('M150,150 C150,120 150,110 150,95', ROPE, 9)}
        ${tip(150, 95, 'dünne Leine')}`) },
    { text: 'Die dünne Leine hinter beide Stränge der Bucht herumführen …',
      svg: K(240, 170, `${rope('M40,60 C90,58 150,58 150,95 C150,132 90,130 40,128', REST, 12)}
        ${rope('M150,150 C150,120 150,108 145,96 C130,66 100,70 96,86', ROPE, 9)}
        ${tip(96, 86, '')} ${note(120, 40, 'um beide herum')}`) },
    { text: '… und unter das eigene Ende (unter sich selbst) zurückschlagen. Beide Leinen anziehen.',
      tip: 'Die losen Enden müssen auf derselben Seite liegen – sonst ist es ein „linker" Schotenstich, der leichter aufgeht.',
      svg: K(240, 170, `${rope('M40,64 C88,62 146,62 148,95 C150,130 90,130 44,128', REST, 12)}
        ${rope('M40,150 C110,138 150,120 146,96 C140,70 104,74 100,92 C98,102 112,104 120,98', ROPE, 9)}
        ${tip(120, 98, '')} ${note(60, 165, 'dünne Leine', 'start')}`) },
  ],
},

/* ---------- Kreuzknoten ---------- */
{
  id: 'kreuzknoten',
  name: 'Kreuzknoten',
  alt: 'Samariterknoten / Weberknoten',
  difficulty: 1,
  use: 'Verbindet zwei gleich starke Leinen oder verschließt einen Verband (Erste Hilfe). Flach und leicht wieder zu öffnen – nicht für sicherheitskritische Lastverbindungen.',
  mnemonic: 'Rechts über links – und links über rechts. (Nicht zweimal gleich – sonst „Altweiberknoten".)',
  steps: [
    { text: 'Beide Enden über Kreuz legen: rechtes Ende über das linke.',
      svg: K(240, 170, `${rope('M40,120 C90,110 120,95 150,60', REST)}
        ${rope('M200,120 C150,110 120,95 90,60', ROPE)}
        ${note(60, 150, 'links', 'start')} ${note(180, 150, 'rechts')}`) },
    { text: 'Das obere (rechte) Ende einmal unter das linke schlingen – ein erster einfacher Schlag.',
      svg: K(240, 170, `${rope('M40,120 C90,110 130,95 150,70 C160,58 140,52 128,62', REST)}
        ${rope('M200,120 C150,110 118,96 96,72 C86,60 106,52 118,62', ROPE)}
        ${note(120, 40, 'rechts über links')}`) },
    { text: 'Nun die Enden erneut kreuzen – diesmal linkes über rechtes – und wieder durchschlagen.',
      tip: 'Wichtig: die zweite Runde gegengleich! Sonst entsteht der unsichere Altweiberknoten.',
      svg: K(240, 170, `${rope('M40,120 C90,112 118,96 118,80', REST)}
        ${rope('M200,120 C150,112 122,96 122,80', ROPE)}
        ${rope('M118,80 C118,64 132,58 140,66', REST)}
        ${rope('M122,80 C122,64 108,58 100,66', ROPE)}
        ${note(120, 40, 'links über rechts')}`) },
    { text: 'Beide Paare fest anziehen. Es entsteht der flache, symmetrische Kreuzknoten – zwei ineinandergreifende Buchten.',
      svg: K(240, 170, `
        ${rope('M40,95 C80,92 96,92 108,84 C120,76 120,104 108,96 C96,88 80,90 40,88', REST)}
        ${rope('M200,88 C160,90 144,90 132,84 C120,76 120,104 132,96 C144,88 160,90 200,95', ROPE)}
        ${note(120, 150, 'flach & symmetrisch')}`) },
  ],
},

];

export const KNOTEN_BY_ID = Object.fromEntries(KNOTEN.map(k => [k.id, k]));
