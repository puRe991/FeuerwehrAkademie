/* =========================================================================
   DIAGRAMS — Inline-SVG-Schaubilder für Lektionen.
   Themenfähig: Linien/Text nutzen currentColor (folgt --text), Akzentfarben
   funktionieren in Hell & Dunkel. Wird über den Block-Typ 'fig' eingebunden.
   ========================================================================= */

const RED = '#d81f26', BLUE = '#1e5fa8', AMBER = '#f5a623', GREEN = '#2e9e5b', PURPLE = '#8e44ad';

function svg(vb, inner, h = 'auto') {
  return `<svg viewBox="${vb}" style="width:100%;height:${h};max-width:560px;margin-inline:auto;display:block;color:var(--text)" fill="none" stroke="currentColor" role="img">${inner}</svg>`;
}

export const DIAGRAMS = {

  /* Verbrennungsdreieck */
  verbrennungsdreieck: () => svg('0 0 400 300', `
    <polygon points="200,40 360,270 40,270" fill="none" stroke="currentColor" stroke-width="2" opacity=".35"/>
    <polygon points="200,90 315,255 85,255" fill="${RED}" opacity=".1"/>
    <g text-anchor="middle" font-family="sans-serif">
      <circle cx="200" cy="40" r="26" fill="${AMBER}" stroke="none"/>
      <text x="200" y="18" font-size="15" font-weight="700" fill="currentColor" stroke="none">Sauerstoff</text>
      <text x="200" y="45" font-size="16" fill="#1c2128" stroke="none">O₂</text>
      <circle cx="40" cy="270" r="26" fill="${RED}" stroke="none"/>
      <text x="40" y="240" font-size="15" font-weight="700" fill="currentColor" stroke="none">Brennstoff</text>
      <text x="40" y="276" font-size="18" fill="#fff" stroke="none">🪵</text>
      <circle cx="360" cy="270" r="26" fill="${BLUE}" stroke="none"/>
      <text x="360" y="240" font-size="15" font-weight="700" fill="currentColor" stroke="none">Wärme</text>
      <text x="360" y="276" font-size="16" fill="#fff" stroke="none">🔥</text>
      <text x="200" y="185" font-size="20" font-weight="800" fill="${RED}" stroke="none">FEUER</text>
      <text x="200" y="210" font-size="12" fill="currentColor" opacity=".7" stroke="none">alle drei nötig</text>
    </g>`, '260px'),

  /* Die vier Löschwirkungen */
  loeschwirkungen: () => svg('0 0 440 150', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['Abkühlen', 'Wärme entziehen', BLUE, 55],
        ['Ersticken', 'O₂ verdrängen', AMBER, 165],
        ['Trennen', 'Brennstoff weg', GREEN, 275],
        ['Kettenbruch', 'antikatalytisch', PURPLE, 385],
      ].map(([t, s, c, x]) => `
        <rect x="${x - 48}" y="24" width="96" height="70" rx="12" fill="${c}" opacity=".14" stroke="${c}" stroke-width="1.5"/>
        <circle cx="${x}" cy="48" r="12" fill="${c}" stroke="none"/>
        <text x="${x}" y="78" font-size="13" font-weight="700" fill="currentColor" stroke="none">${t}</text>
        <text x="${x}" y="116" font-size="11" fill="currentColor" opacity=".7" stroke="none">${s}</text>
      `).join('')}
    </g>`, '150px'),

  /* Gruppe im Löscheinsatz (1/8) */
  gruppe: () => svg('0 0 460 240', `
    <g font-family="sans-serif" text-anchor="middle">
      <rect x="170" y="10" width="120" height="34" rx="8" fill="${RED}" stroke="none"/>
      <text x="230" y="32" font-size="14" font-weight="700" fill="#fff" stroke="none">Gruppenführer</text>
      <line x1="230" y1="44" x2="230" y2="66" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
      ${[
        ['Melder', 60], ['Maschinist', 230], ['— Wasserversorgung —', 400],
      ].map(([t, x]) => '').join('')}
      <g>
        ${[
          ['Melder', 55, BLUE], ['Maschinist', 230, BLUE], ['Wassertrupp', 405, GREEN],
        ].map(([t, x, c]) => `
          <rect x="${x - 50}" y="72" width="100" height="30" rx="7" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.4"/>
          <text x="${x}" y="92" font-size="12" font-weight="700" fill="currentColor" stroke="none">${t}</text>
        `).join('')}
      </g>
      <g>
        ${[
          ['Angriffstrupp', 130, RED, 'Menschenrettung / 1. Rohr'],
          ['Schlauchtrupp', 330, AMBER, 'Schläuche verlegen'],
        ].map(([t, x, c, d]) => `
          <rect x="${x - 78}" y="130" width="156" height="52" rx="9" fill="${c}" opacity=".14" stroke="${c}" stroke-width="1.6"/>
          <text x="${x}" y="152" font-size="13" font-weight="800" fill="currentColor" stroke="none">${t}</text>
          <text x="${x}" y="170" font-size="10.5" fill="currentColor" opacity=".7" stroke="none">${d}</text>
        `).join('')}
      </g>
      <text x="230" y="212" font-size="12" fill="currentColor" opacity=".65" stroke="none">Stärke 1/8/9 · kleinste selbstständige taktische Einheit</text>
    </g>`, '240px'),

  /* Führungsvorgang (Regelkreis) */
  fuehrungsvorgang: () => svg('0 0 360 300', `
    <g font-family="sans-serif" text-anchor="middle">
      <circle cx="180" cy="150" r="95" fill="none" stroke="currentColor" stroke-width="2" opacity=".25" stroke-dasharray="4 6"/>
      ${[
        ['Lage-\nfeststellung', 180, 40, BLUE],
        ['Planung', 300, 210, AMBER],
        ['Befehl', 60, 210, RED],
      ].map(([t, x, y, c]) => `
        <circle cx="${x}" cy="${y}" r="44" fill="${c}" opacity=".14" stroke="${c}" stroke-width="1.8"/>
        ${t.split('\n').map((line, i) => `<text x="${x}" y="${y - 4 + i * 15}" font-size="12.5" font-weight="700" fill="currentColor" stroke="none">${line}</text>`).join('')}
      `).join('')}
      <g stroke="${RED}" stroke-width="2.4" fill="none">
        <path d="M212 74 A95 95 0 0 1 268 176" marker-end="url(#ar)"/>
        <path d="M258 244 A95 95 0 0 1 102 244" marker-end="url(#ar)"/>
        <path d="M92 176 A95 95 0 0 1 148 74" marker-end="url(#ar)"/>
      </g>
      <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="${RED}" stroke="none"/></marker></defs>
      <text x="180" y="150" font-size="12" font-weight="800" fill="currentColor" stroke="none">Regelkreis</text>
      <text x="180" y="166" font-size="10" fill="currentColor" opacity=".65" stroke="none">laufend</text>
    </g>`, '280px'),

  /* Rettungskette */
  rettungskette: () => svg('0 0 480 120', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['Sofort-\nmaßnahmen', 60, RED],
        ['Erste\nHilfe', 180, AMBER],
        ['Rettungs-\ndienst', 300, BLUE],
        ['Kranken-\nhaus', 420, GREEN],
      ].map(([t, x, c], i) => `
        <circle cx="${x}" cy="55" r="34" fill="${c}" opacity=".16" stroke="${c}" stroke-width="2"/>
        ${t.split('\n').map((line, j) => `<text x="${x}" y="${51 + j * 14}" font-size="11.5" font-weight="700" fill="currentColor" stroke="none">${line}</text>`).join('')}
        ${i < 3 ? `<path d="M${x + 36} 55 L${x + 82} 55" stroke="currentColor" stroke-width="2" opacity=".4" marker-end="url(#rk)"/>` : ''}
      `).join('')}
      <defs><marker id="rk" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" stroke="none"/></marker></defs>
      <text x="240" y="108" font-size="11" fill="currentColor" opacity=".65" stroke="none">Das schwächste Glied bestimmt den Erfolg</text>
    </g>`, '120px'),

  /* Wärmeübertragung */
  waermeuebertragung: () => svg('0 0 460 150', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['Wärmeleitung', 75, 'durch festen Stoff'],
        ['Strömung', 230, 'heiße Gase steigen'],
        ['Strahlung', 385, 'ohne Medium'],
      ].map(([t, x, d], i) => `
        <rect x="${x - 68}" y="20" width="136" height="90" rx="12" fill="${[BLUE, AMBER, RED][i]}" opacity=".12" stroke="${[BLUE, AMBER, RED][i]}" stroke-width="1.5"/>
        <text x="${x}" y="46" font-size="13.5" font-weight="800" fill="currentColor" stroke="none">${t}</text>
        <text x="${x}" y="98" font-size="10.5" fill="currentColor" opacity=".7" stroke="none">${d}</text>
      `).join('')}
      <path d="M20 75 L55 75" stroke="${BLUE}" stroke-width="6" stroke-linecap="round"/>
      <path d="M210 88 q10 -22 20 0" stroke="${AMBER}" stroke-width="3" fill="none"/>
      <g stroke="${RED}" stroke-width="2.5"><path d="M355 65 L378 65"/><path d="M355 75 L378 75"/><path d="M355 85 L378 85"/></g>
      <text x="230" y="135" font-size="11" fill="currentColor" opacity=".65" stroke="none">Strahlung nimmt mit dem Quadrat der Entfernung ab</text>
    </g>`, '150px'),

  /* Brandverlauf-Kurve */
  brandverlauf: () => svg('0 0 460 220', `
    <g font-family="sans-serif">
      <line x1="45" y1="180" x2="440" y2="180" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
      <line x1="45" y1="180" x2="45" y2="20" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
      <text x="16" y="100" font-size="11" fill="currentColor" opacity=".7" stroke="none" transform="rotate(-90 16 100)">Temperatur</text>
      <text x="240" y="205" font-size="11" fill="currentColor" opacity=".7" stroke="none" text-anchor="middle">Zeit →</text>
      <path d="M45 175 C120 172 150 150 175 95 C185 70 200 55 210 52 L300 42 C360 40 400 90 430 150"
            fill="none" stroke="${RED}" stroke-width="3"/>
      <circle cx="200" cy="58" r="6" fill="${AMBER}" stroke="none"/>
      <text x="200" y="40" font-size="11" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">Flashover</text>
      <g font-size="10.5" fill="currentColor" opacity=".75" stroke="none" text-anchor="middle">
        <text x="105" y="168">Entstehung</text>
        <text x="255" y="30">Vollbrand</text>
        <text x="400" y="130">Abklingen</text>
      </g>
    </g>`, '210px'),

  /* Pressluftatmer schematisch */
  pressluftatmer: () => svg('0 0 460 160', `
    <g font-family="sans-serif" text-anchor="middle">
      <rect x="30" y="45" width="70" height="90" rx="16" fill="${BLUE}" opacity=".16" stroke="${BLUE}" stroke-width="2"/>
      <text x="65" y="90" font-size="11" font-weight="700" fill="currentColor" stroke="none">Flasche</text>
      <text x="65" y="105" font-size="10" fill="currentColor" opacity=".7" stroke="none">300 bar</text>
      <rect x="140" y="70" width="66" height="42" rx="8" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <text x="173" y="87" font-size="10.5" font-weight="700" fill="currentColor" stroke="none">Druck-</text>
      <text x="173" y="100" font-size="10.5" font-weight="700" fill="currentColor" stroke="none">minderer</text>
      <rect x="246" y="70" width="66" height="42" rx="8" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <text x="279" y="87" font-size="10.5" font-weight="700" fill="currentColor" stroke="none">Lungen-</text>
      <text x="279" y="100" font-size="10.5" font-weight="700" fill="currentColor" stroke="none">automat</text>
      <circle cx="390" cy="90" r="34" fill="${RED}" opacity=".14" stroke="${RED}" stroke-width="2"/>
      <text x="390" y="94" font-size="11" font-weight="700" fill="currentColor" stroke="none">Maske</text>
      <g stroke="currentColor" stroke-width="2" opacity=".55" marker-end="url(#pa)">
        <line x1="100" y1="91" x2="138" y2="91"/><line x1="206" y1="91" x2="244" y2="91"/><line x1="312" y1="91" x2="352" y2="91"/>
      </g>
      <defs><marker id="pa" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="currentColor" stroke="none"/></marker></defs>
      <text x="230" y="150" font-size="10.5" fill="currentColor" opacity=".65" stroke="none">300 bar → ~7 bar (Mitteldruck) → Atemluft nach Bedarf (Überdruck)</text>
    </g>`, '160px'),

  /* Explosionsgrenzen */
  explosionsgrenzen: () => svg('0 0 460 120', `
    <g font-family="sans-serif" text-anchor="middle">
      <rect x="40" y="40" width="380" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <rect x="40" y="40" width="90" height="34" fill="${BLUE}" opacity=".2"/>
      <rect x="130" y="40" width="180" height="34" fill="${RED}" opacity=".35"/>
      <rect x="310" y="40" width="110" height="34" fill="${AMBER}" opacity=".25"/>
      <text x="85" y="62" font-size="11" fill="currentColor" stroke="none">zu mager</text>
      <text x="220" y="62" font-size="12" font-weight="800" fill="currentColor" stroke="none">zündfähig</text>
      <text x="365" y="62" font-size="11" fill="currentColor" stroke="none">zu fett</text>
      <line x1="130" y1="34" x2="130" y2="86" stroke="currentColor" stroke-width="1.5"/>
      <line x1="310" y1="34" x2="310" y2="86" stroke="currentColor" stroke-width="1.5"/>
      <text x="130" y="102" font-size="11" font-weight="700" fill="currentColor" stroke="none">UEG</text>
      <text x="310" y="102" font-size="11" font-weight="700" fill="currentColor" stroke="none">OEG</text>
      <text x="230" y="24" font-size="11" fill="currentColor" opacity=".7" stroke="none">Konzentration brennbares Gas in Luft →</text>
    </g>`, '120px'),

  /* GAMS-Regel */
  gams: () => svg('0 0 460 130', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['G', 'Gefahr\nerkennen', RED, 60],
        ['A', 'Absperren', AMBER, 190],
        ['M', 'Menschen\nretten', GREEN, 320],
        ['S', 'Spezial-\nkräfte', BLUE, 420],
      ].map(([l, t, c, x], i) => `
        <circle cx="${x}" cy="50" r="26" fill="${c}" stroke="none"/>
        <text x="${x}" y="57" font-size="20" font-weight="800" fill="#fff" stroke="none">${l}</text>
        ${t.split('\n').map((ln, j) => `<text x="${x}" y="${92 + j * 13}" font-size="11" font-weight="600" fill="currentColor" stroke="none">${ln}</text>`).join('')}
        ${i < 3 ? `<path d="M${x + 28} 50 L${[132, 262, 366][i]} 50" stroke="currentColor" stroke-width="2" opacity=".4" marker-end="url(#gm)"/>` : ''}
      `).join('')}
      <defs><marker id="gm" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" stroke="none"/></marker></defs>
    </g>`, '130px'),
};

export function diagram(key) {
  const fn = DIAGRAMS[key];
  return fn ? fn() : '';
}
