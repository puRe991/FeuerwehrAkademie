/* =========================================================================
   EXAM-FIGURES — Inline-SVG-Piktogramme für Bildfragen.

   Ermöglicht Prüfungsfragen, die ein Bildzeichen zeigen (z. B. „Für welche
   Brandklasse ist dieser Feuerlöscher geeignet?"). Fragen referenzieren eine
   Figur über das optionale Feld `fig:'<id>'`; die Frage-Views rendern dann
   das zugehörige SVG über figureHTML().

   Die Zeichen orientieren sich an den genormten Symbolen (Brandklassen nach
   EN 3, Gefahrzettel/Warntafel nach ADR/GGVSEB). Sie sind bewusst vereinfacht
   und dienen der Wiedererkennung, nicht als amtliche Vorlage.

   Farben der Gefahrzettel/Brandklassen sind vorgeschrieben und daher fest;
   ein heller Rahmen sorgt für Sichtbarkeit in Hell- und Dunkeldarstellung.
   ========================================================================= */

/* Rahmen-SVG (quadratisch) */
function box(inner, h = '150px') {
  return `<svg viewBox="0 0 120 120" style="width:100%;height:${h};max-width:168px;margin:2px auto 0;display:block" aria-hidden="true" focusable="false">${inner}</svg>`;
}

/* Stilisierte Flamme mit Basispunkt (cx, by) */
function flame(cx, by, fill) {
  return `<path d="M${cx} ${by - 40} Q${cx + 20} ${by - 12} ${cx + 9} ${by + 2} Q${cx + 15} ${by + 9} ${cx} ${by + 9} Q${cx - 15} ${by + 9} ${cx - 9} ${by + 2} Q${cx - 20} ${by - 12} ${cx} ${by - 40} Z" fill="${fill}"/>`;
}

/* Feuerlöscher-Brandklassenzeichen: weißes Piktogramm auf dunklem Feld */
function bk(sym) {
  return box(`<rect x="6" y="6" width="108" height="108" rx="14" fill="#141922" stroke="#8b95a3" stroke-width="2"/>${sym}`);
}

/* Gefahrzettel (auf der Spitze stehendes Quadrat) */
function raute(bg, sym, num, numFill) {
  return box(`<polygon points="60,7 113,60 60,113 7,60" fill="${bg}" stroke="#141922" stroke-width="2"/>${sym}` +
    `<text x="60" y="103" font-family="system-ui,sans-serif" font-size="20" font-weight="800" text-anchor="middle" fill="${numFill}">${num}</text>`);
}

const WHITE = '#fff', BLACK = '#141922';

export const EXAM_FIGURES = {

  /* ---------------- Brandklassen nach EN 3 (Feuerlöscher-Piktogramme) ---- */

  // A – feste, glutbildende Stoffe (brennende Holzscheite)
  'bk-a': bk(
    `${flame(46, 58, WHITE)}${flame(74, 58, WHITE)}${flame(60, 50, WHITE)}
     <g fill="${WHITE}">
       <ellipse cx="40" cy="94" rx="11" ry="7"/><ellipse cx="62" cy="94" rx="11" ry="7"/><ellipse cx="84" cy="94" rx="11" ry="7"/>
       <ellipse cx="51" cy="83" rx="11" ry="7"/><ellipse cx="73" cy="83" rx="11" ry="7"/>
     </g>
     <g fill="${BLACK}"><circle cx="40" cy="94" r="3"/><circle cx="62" cy="94" r="3"/><circle cx="84" cy="94" r="3"/><circle cx="51" cy="83" r="3"/><circle cx="73" cy="83" r="3"/></g>`),

  // B – flüssige/flüssig werdende Stoffe (Flamme über Behälter mit Flüssigkeit)
  'bk-b': bk(
    `${flame(50, 56, WHITE)}${flame(72, 58, WHITE)}${flame(61, 48, WHITE)}
     <path d="M28 82 H92 L86 102 H34 Z" fill="none" stroke="${WHITE}" stroke-width="4" stroke-linejoin="round"/>
     <path d="M33 88 Q46 84 60 88 Q74 92 87 88 L84 98 H36 Z" fill="${WHITE}"/>`),

  // C – gasförmige Stoffe (Flamme aus Gasaustritt)
  'bk-c': bk(
    `${flame(60, 60, WHITE)}
     <rect x="26" y="88" width="68" height="14" rx="5" fill="${WHITE}"/>
     <rect x="55" y="74" width="10" height="16" fill="${WHITE}"/>`),

  // D – Metalle (Flamme über Metallblöcken)
  'bk-d': bk(
    `${flame(48, 56, WHITE)}${flame(72, 56, WHITE)}${flame(60, 48, WHITE)}
     <g fill="${WHITE}"><rect x="32" y="84" width="22" height="16" rx="2"/><rect x="60" y="84" width="28" height="16" rx="2"/></g>
     <g fill="${BLACK}"><rect x="40" y="89" width="6" height="6"/><rect x="70" y="89" width="6" height="6"/></g>`),

  // F – Speiseöle/-fette (Flamme über Pfanne)
  'bk-f': bk(
    `${flame(52, 56, WHITE)}${flame(70, 58, WHITE)}${flame(61, 48, WHITE)}
     <g fill="${WHITE}"><path d="M28 84 H78 V90 Q78 96 68 96 H38 Q28 96 28 90 Z"/><rect x="76" y="85" width="30" height="6" rx="3"/></g>`),

  /* ---------------- Gefahrzettel nach ADR ------------------------------- */

  // Klasse 3 – entzündbare flüssige Stoffe (rot, Flamme)
  'gz-3': raute('#d81f26', flame(60, 54, WHITE), '3', WHITE),

  // Klasse 2.2 – nicht entzündbare, ungiftige Gase (grün, Gasflasche)
  'gz-2-2': raute('#0a7d3f',
    `<g fill="${WHITE}"><rect x="52" y="30" width="16" height="46" rx="8"/><rect x="56" y="22" width="8" height="10" rx="2"/></g>`,
    '2', WHITE),

  // Klasse 4.3 – bildet mit Wasser entzündbare Gase (blau, Flamme)
  'gz-4-3': raute('#1560d0', flame(60, 54, WHITE), '4', WHITE),

  // Klasse 6.1 – giftige Stoffe (weiß, Totenkopf mit gekreuzten Knochen)
  'gz-6-1': raute('#ffffff',
    `<g stroke="${BLACK}" stroke-width="5" stroke-linecap="round"><line x1="40" y1="40" x2="72" y2="66"/><line x1="72" y1="40" x2="40" y2="66"/></g>
     <circle cx="56" cy="50" r="15" fill="${WHITE}" stroke="${BLACK}" stroke-width="3"/>
     <g fill="${BLACK}"><circle cx="51" cy="48" r="3"/><circle cx="61" cy="48" r="3"/><path d="M53 56 L59 56 L56 60 Z"/></g>`,
    '6', BLACK),

  /* ---------------- Orangefarbene Warntafel (Kemler / UN) --------------- */

  // Beispiel 33 / 1203 (Benzin)
  'warntafel-33-1203': box(
    `<rect x="14" y="34" width="92" height="52" rx="6" fill="#ef7d00" stroke="#141922" stroke-width="3"/>
     <line x1="14" y1="60" x2="106" y2="60" stroke="#141922" stroke-width="3"/>
     <text x="60" y="54" font-family="system-ui,sans-serif" font-size="20" font-weight="800" text-anchor="middle" fill="#141922">33</text>
     <text x="60" y="80" font-family="system-ui,sans-serif" font-size="20" font-weight="800" text-anchor="middle" fill="#141922">1203</text>`,
    '132px'),

};

/** HTML für die Figur einer Frage (leer, wenn keine gesetzt/bekannt). */
export function figureHTML(q) {
  const svg = q && q.fig && EXAM_FIGURES[q.fig];
  return svg ? `<figure class="q-fig" style="margin:0 0 16px">${svg}</figure>` : '';
}
