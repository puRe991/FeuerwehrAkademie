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

  /* Brandklassen A–F */
  brandklassen: () => svg('0 0 480 140', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['A','feste\nStoffe',RED,45],['B','flüssige\nStoffe',BLUE,140],['C','Gase',AMBER,235],['D','Metalle',GREEN,330],['F','Speise-\nfette',PURPLE,425],
      ].map(([l,t,c,x])=>`
        <rect x="${x-42}" y="18" width="84" height="74" rx="12" fill="${c}" opacity=".13" stroke="${c}" stroke-width="1.6"/>
        <circle cx="${x}" cy="44" r="17" fill="${c}" stroke="none"/>
        <text x="${x}" y="50" font-size="17" font-weight="800" fill="#fff" stroke="none">${l}</text>
        ${t.split('\n').map((ln,i)=>`<text x="${x}" y="${80+i*13}" font-size="11" fill="currentColor" stroke="none">${ln}</text>`).join('')}
      `).join('')}
      <text x="240" y="122" font-size="11" fill="currentColor" opacity=".7" stroke="none">Brandklassen nach DIN EN 2 – Löschmittel je Klasse wählen</text>
    </g>`, '140px'),

  /* Löschgruppenfahrzeug – schematisch */
  fahrzeug: () => svg('0 0 480 190', `
    <g font-family="sans-serif">
      <rect x="60" y="60" width="300" height="90" rx="10" fill="${RED}" opacity=".9" stroke="none"/>
      <rect x="300" y="78" width="110" height="72" rx="8" fill="${RED}" stroke="none" opacity=".7"/>
      <rect x="76" y="74" width="120" height="44" rx="6" fill="#1b2530" stroke="none"/>
      <text x="136" y="100" font-size="12" fill="#cdd6e0" stroke="none" text-anchor="middle">Mannschaft 1/8</text>
      <rect x="210" y="74" width="80" height="44" rx="4" fill="#0f1620" stroke="none"/>
      <text x="250" y="92" font-size="10" fill="#8fb7dd" stroke="none" text-anchor="middle">Tank</text>
      <text x="250" y="106" font-size="11" fill="#fff" stroke="none" text-anchor="middle">600–2000 l</text>
      <circle cx="340" cy="112" r="15" fill="#0f1620" stroke="none"/><text x="340" y="116" font-size="9" fill="#8fb7dd" stroke="none" text-anchor="middle">Pumpe</text>
      <circle cx="120" cy="152" r="20" fill="#10151c" stroke="none"/><circle cx="120" cy="152" r="8" fill="#3a4552" stroke="none"/>
      <circle cx="320" cy="152" r="20" fill="#10151c" stroke="none"/><circle cx="320" cy="152" r="8" fill="#3a4552" stroke="none"/>
      <rect x="150" y="48" width="70" height="14" rx="4" fill="#2b6cff" stroke="none"/>
      <g font-size="11" fill="currentColor" stroke="none" text-anchor="middle" opacity=".85">
        <text x="136" y="176">Besatzung</text><text x="250" y="176">Löschwasser</text><text x="340" y="176">Feuerlöschpumpe</text>
      </g>
      <text x="240" y="30" font-size="13" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">Löschgruppenfahrzeug (LF) – Grundkomponenten</text>
    </g>`, '190px'),

  /* Storz-Kupplung & Wasserweg */
  wasserweg: () => svg('0 0 500 130', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['Pumpe',50,BLUE],['Verteiler',190,AMBER],['Strahlrohr',340,RED],
      ].map(([t,x,c],i)=>`
        <rect x="${x-46}" y="34" width="92" height="46" rx="10" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.6"/>
        <text x="${x}" y="62" font-size="12" font-weight="700" fill="currentColor" stroke="none">${t}</text>
      `).join('')}
      <line x1="96" y1="57" x2="144" y2="57" stroke="${BLUE}" stroke-width="8"/>
      <line x1="236" y1="57" x2="294" y2="57" stroke="${RED}" stroke-width="6"/>
      <text x="120" y="30" font-size="10" fill="currentColor" opacity=".7" stroke="none">B-Leitung</text>
      <text x="265" y="30" font-size="10" fill="currentColor" opacity=".7" stroke="none">C-Leitung</text>
      <!-- Storz Kupplung Symbol -->
      <g transform="translate(410,40)"><circle cx="30" cy="17" r="17" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="17" r="7" fill="currentColor" stroke="none" opacity=".3"/><path d="M18 10 l6 0 M42 24 l-6 0 M22 30 l4 -5 M38 4 l-4 5" stroke="currentColor" stroke-width="2"/><text x="30" y="52" font-size="10" fill="currentColor" stroke="none">Storz</text></g>
      <text x="200" y="104" font-size="11" fill="currentColor" opacity=".7" stroke="none">Wasserweg: Pumpe → Verteiler → Strahlrohr</text>
    </g>`, '130px'),

  /* Hohlstrahlrohr – Strahlbilder */
  strahlrohr: () => svg('0 0 460 160', `
    <g font-family="sans-serif" text-anchor="middle">
      <!-- Vollstrahl -->
      <g><rect x="20" y="30" width="24" height="12" rx="3" fill="${BLUE}" stroke="none"/><line x1="44" y1="36" x2="150" y2="36" stroke="${BLUE}" stroke-width="4"/><text x="90" y="24" font-size="11" font-weight="700" fill="currentColor" stroke="none">Vollstrahl</text><text x="90" y="56" font-size="10" fill="currentColor" opacity=".7" stroke="none">Wurfweite</text></g>
      <!-- Sprühstrahl -->
      <g><rect x="20" y="90" width="24" height="12" rx="3" fill="${AMBER}" stroke="none"/><path d="M44 96 L150 70 M44 96 L150 122 M44 96 L150 96" stroke="${AMBER}" stroke-width="3"/><text x="95" y="82" font-size="11" font-weight="700" fill="currentColor" stroke="none">Sprühstrahl</text><text x="110" y="140" font-size="10" fill="currentColor" opacity=".7" stroke="none">Wärmeschutz / Rauchgaskühlung</text></g>
      <!-- Regelbar -->
      <g transform="translate(300,40)"><rect x="0" y="0" width="140" height="80" rx="10" fill="${RED}" opacity=".1" stroke="${RED}" stroke-width="1.5"/><text x="70" y="30" font-size="12" font-weight="700" fill="currentColor" stroke="none">Regelbar</text><text x="70" y="52" font-size="10" fill="currentColor" opacity=".8" stroke="none">Durchflussmenge</text><text x="70" y="68" font-size="10" fill="currentColor" opacity=".8" stroke="none">+ Strahlbild</text></g>
    </g>`, '160px'),

  /* Stabile Seitenlage */
  seitenlage: () => svg('0 0 460 130', `
    <g font-family="sans-serif">
      <ellipse cx="230" cy="100" rx="200" ry="16" fill="currentColor" opacity=".08"/>
      <!-- Körper in Seitenlage -->
      <path d="M120 92 Q180 70 260 82 Q320 90 350 92" fill="none" stroke="${BLUE}" stroke-width="16" stroke-linecap="round"/>
      <circle cx="112" cy="82" r="18" fill="${AMBER}" stroke="none"/>
      <path d="M112 82 q10 -4 18 2" stroke="currentColor" stroke-width="2" fill="none"/>
      <!-- oberes Bein angewinkelt -->
      <path d="M300 86 L320 60 L350 66" fill="none" stroke="${BLUE}" stroke-width="12" stroke-linecap="round"/>
      <!-- Arm -->
      <path d="M180 80 L150 62" stroke="${BLUE}" stroke-width="9" stroke-linecap="round"/>
      <text x="230" y="126" font-size="12" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">Stabile Seitenlage – Atemwege frei, Kopf überstreckt</text>
    </g>`, '130px'),

  /* Herz-Lungen-Wiederbelebung 30:2 */
  hlw: () => svg('0 0 460 130', `
    <g font-family="sans-serif" text-anchor="middle">
      <circle cx="130" cy="60" r="44" fill="${RED}" opacity=".14" stroke="${RED}" stroke-width="2"/>
      <text x="130" y="52" font-size="26" font-weight="800" fill="currentColor" stroke="none">30</text>
      <text x="130" y="74" font-size="12" fill="currentColor" stroke="none">Kompressionen</text>
      <text x="205" y="66" font-size="30" font-weight="800" fill="currentColor" stroke="none">:</text>
      <circle cx="290" cy="60" r="44" fill="${BLUE}" opacity=".14" stroke="${BLUE}" stroke-width="2"/>
      <text x="290" y="52" font-size="26" font-weight="800" fill="currentColor" stroke="none">2</text>
      <text x="290" y="74" font-size="12" fill="currentColor" stroke="none">Beatmungen</text>
      <g text-anchor="start"><text x="360" y="46" font-size="11" fill="currentColor" stroke="none">5–6 cm tief</text><text x="360" y="66" font-size="11" fill="currentColor" stroke="none">100–120/min</text><text x="360" y="86" font-size="11" fill="currentColor" stroke="none">Mitte Brustkorb</text></g>
      <text x="230" y="122" font-size="11" fill="currentColor" opacity=".7" stroke="none">Herz-Lungen-Wiederbelebung beim Erwachsenen</text>
    </g>`, '130px'),

  /* FAST-Schema Schlaganfall */
  fast: () => svg('0 0 480 120', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['F','Face','Gesicht',RED,60],['A','Arms','Arme',AMBER,180],['S','Speech','Sprache',BLUE,300],['T','Time','112!',GREEN,420],
      ].map(([l,e,d,c,x])=>`
        <circle cx="${x}" cy="44" r="26" fill="${c}" stroke="none"/>
        <text x="${x}" y="52" font-size="22" font-weight="800" fill="#fff" stroke="none">${l}</text>
        <text x="${x}" y="86" font-size="12" font-weight="700" fill="currentColor" stroke="none">${e}</text>
        <text x="${x}" y="102" font-size="10" fill="currentColor" opacity=".7" stroke="none">${d}</text>
      `).join('')}
      <text x="240" y="18" font-size="12" font-weight="700" fill="currentColor" stroke="none">Schlaganfall-Test „FAST"</text>
    </g>`, '120px'),

  /* Orangefarbene Warntafel (Kemler/UN) */
  warntafel: () => svg('0 0 460 150', `
    <g font-family="sans-serif" text-anchor="middle">
      <rect x="150" y="30" width="160" height="90" rx="8" fill="#f0a000" stroke="#111" stroke-width="3"/>
      <line x1="150" y1="75" x2="310" y2="75" stroke="#111" stroke-width="3"/>
      <text x="230" y="64" font-size="26" font-family="monospace" font-weight="700" fill="#111" stroke="none">33</text>
      <text x="230" y="108" font-size="26" font-family="monospace" font-weight="700" fill="#111" stroke="none">1203</text>
      <g text-anchor="start" font-size="11" fill="currentColor" stroke="none">
        <text x="330" y="52">Gefahrnummer</text><text x="330" y="66" opacity=".7">(Kemler-Zahl)</text>
        <text x="330" y="98">UN-Nummer</text><text x="330" y="112" opacity=".7">(Stoff)</text>
      </g>
      <text x="120" y="60" font-size="11" fill="currentColor" stroke="none" text-anchor="end">Hauptgefahr →</text>
      <text x="120" y="105" font-size="11" fill="currentColor" stroke="none" text-anchor="end">Stoff →</text>
      <text x="230" y="140" font-size="11" fill="currentColor" opacity=".7" stroke="none">Beispiel 33/1203 = leicht entzündlich / Benzin</text>
    </g>`, '150px'),

  /* Strahlungsarten & Abschirmung */
  strahlungsarten: () => svg('0 0 460 160', `
    <g font-family="sans-serif">
      ${[
        ['Alpha (α)','Papier',RED,40],['Beta (β)','Alu/Plexiglas',AMBER,74],['Gamma (γ)','Blei/Beton',BLUE,108],
      ].map(([t,s,c,y])=>`
        <text x="20" y="${y+5}" font-size="12" font-weight="700" fill="currentColor" stroke="none">${t}</text>
        <line x1="150" y1="${y}" x2="${c===RED?230:c===AMBER?300:400}" y2="${y}" stroke="${c}" stroke-width="4" marker-end="url(#sa)"/>
        <text x="415" y="${y+5}" font-size="10" fill="currentColor" opacity=".7" stroke="none" text-anchor="end">${s}</text>
      `).join('')}
      <defs><marker id="sa" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" stroke="none"/></marker></defs>
      <!-- Abschirmungen -->
      <rect x="228" y="20" width="6" height="100" fill="#c9a86a" opacity=".8"/><text x="231" y="134" font-size="9" fill="currentColor" stroke="none" text-anchor="middle" opacity=".7">Papier</text>
      <rect x="298" y="20" width="8" height="100" fill="#9aa6b4" opacity=".8"/><text x="302" y="134" font-size="9" fill="currentColor" stroke="none" text-anchor="middle" opacity=".7">Metall</text>
      <rect x="392" y="20" width="14" height="100" fill="#5a6572" opacity=".9"/><text x="399" y="134" font-size="9" fill="currentColor" stroke="none" text-anchor="middle" opacity=".7">Blei</text>
      <text x="230" y="152" font-size="11" fill="currentColor" opacity=".7" stroke="none" text-anchor="middle">Durchdringung & Abschirmung ionisierender Strahlung</text>
    </g>`, '160px'),

  /* Führungsstufen A–D */
  fuehrungsstufen: () => svg('0 0 460 180', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['A','selbstständige Trupps','Truppführer',RED,150,40],
        ['B','eine Einheit (Gruppe)','Gruppenführer',AMBER,220,72],
        ['C','mehrere Einheiten (Zug)','Zugführer',BLUE,290,104],
        ['D','Verbände / Fachdienste','Verbandsführer + Stab',PURPLE,360,136],
      ].map(([l,t,f,c,w,y])=>`
        <rect x="${230-w/2}" y="${y}" width="${w}" height="30" rx="6" fill="${c}" opacity=".85" stroke="none"/>
        <text x="230" y="${y+20}" font-size="13" font-weight="800" fill="#fff" stroke="none">${l}</text>
        <text x="${230+w/2+8}" y="${y+13}" font-size="10" fill="currentColor" stroke="none" text-anchor="start">${t}</text>
        <text x="${230+w/2+8}" y="${y+26}" font-size="9" fill="currentColor" opacity=".7" stroke="none" text-anchor="start">${f}</text>
      `).join('')}
      <text x="230" y="24" font-size="12" font-weight="700" fill="currentColor" stroke="none">Führungsstufen A–D (FwDV 100)</text>
    </g>`, '180px'),

  /* Taktische Einheiten (Trupp–Zug) */
  einheiten: () => svg('0 0 480 150', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['Trupp','0/2–0/3',40,2],['Staffel','1/5/6',150,6],['Gruppe','1/8/9',270,9],['Zug','≈1/21/22',410,12],
      ].map(([t,s,x,n])=>`
        <g>${Array.from({length:Math.min(n,12)}).map((_,i)=>`<circle cx="${x-33+ (i%6)*12}" cy="${30+Math.floor(i/6)*14}" r="4.5" fill="${i===0?RED:BLUE}" stroke="none"/>`).join('')}</g>
        <text x="${x}" y="82" font-size="12" font-weight="700" fill="currentColor" stroke="none">${t}</text>
        <text x="${x}" y="98" font-size="11" font-family="monospace" fill="currentColor" opacity=".8" stroke="none">${s}</text>
      `).join('')}
      <text x="240" y="124" font-size="11" fill="currentColor" opacity=".7" stroke="none">Roter Punkt = Führer · Stärke Führer/Mannschaft/gesamt</text>
    </g>`, '150px'),

  /* Rettungsreihenfolge Wasser */
  rettungsreihenfolge: () => svg('0 0 480 120', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['Rufen',GREEN,55],['Werfen',BLUE,175],['Fahren',AMBER,295],['Schwimmen',RED,420],
      ].map(([t,c,x],i)=>`
        <circle cx="${x}" cy="48" r="30" fill="${c}" opacity=".16" stroke="${c}" stroke-width="2"/>
        <text x="${x}" y="44" font-size="15" font-weight="800" fill="currentColor" stroke="none">${i+1}</text>
        <text x="${x}" y="90" font-size="12" font-weight="700" fill="currentColor" stroke="none">${t}</text>
        ${i<3?`<path d="M${x+30} 48 L${x+88} 48" stroke="currentColor" stroke-width="2" opacity=".4" marker-end="url(#rr)"/>`:''}
      `).join('')}
      <defs><marker id="rr" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" stroke="none"/></marker></defs>
      <text x="240" y="112" font-size="11" fill="currentColor" opacity=".7" stroke="none">Wasserrettung: Schwimmen nur als letztes Mittel</text>
    </g>`, '120px'),

  /* LACES */
  laces: () => svg('0 0 480 120', `
    <g font-family="sans-serif" text-anchor="middle">
      ${[
        ['L','Lookout','Beobachter',40],['A','Awareness','Aufmerksam',135],['C','Communication','Funk',230],['E','Escape','Fluchtwege',325],['S','Safety','Sicherheitszone',420],
      ].map(([l,e,d,x])=>`
        <rect x="${x-42}" y="24" width="84" height="70" rx="10" fill="${AMBER}" opacity=".12" stroke="${AMBER}" stroke-width="1.5"/>
        <text x="${x}" y="52" font-size="22" font-weight="800" fill="${RED}" stroke="none">${l}</text>
        <text x="${x}" y="72" font-size="10.5" font-weight="700" fill="currentColor" stroke="none">${e}</text>
        <text x="${x}" y="86" font-size="9" fill="currentColor" opacity=".7" stroke="none">${d}</text>
      `).join('')}
      <text x="240" y="16" font-size="12" font-weight="700" fill="currentColor" stroke="none">LACES – Sicherheit im Vegetationsbrand</text>
    </g>`, '120px'),

  /* Anstellwinkel Leiter */
  leiterwinkel: () => svg('0 0 420 180', `
    <g font-family="sans-serif">
      <line x1="60" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="2" opacity=".4"/>
      <rect x="300" y="30" width="80" height="130" fill="currentColor" opacity=".08"/>
      <line x1="300" y1="30" x2="300" y2="160" stroke="currentColor" stroke-width="2" opacity=".5"/>
      <!-- Leiter -->
      <line x1="120" y1="160" x2="296" y2="40" stroke="${RED}" stroke-width="6"/>
      <line x1="132" y1="160" x2="308" y2="40" stroke="${RED}" stroke-width="6"/>
      ${Array.from({length:6}).map((_,i)=>`<line x1="${126+i*29}" y1="${160-i*20}" x2="${138+i*29}" y2="${160-i*20}" stroke="${RED}" stroke-width="3"/>`).join('')}
      <path d="M170 160 A50 50 0 0 0 145 118" fill="none" stroke="${BLUE}" stroke-width="2"/>
      <text x="185" y="140" font-size="14" font-weight="800" fill="currentColor" stroke="none">65–75°</text>
      <text x="210" y="176" font-size="11" fill="currentColor" opacity=".7" stroke="none" text-anchor="middle">richtiger Anstellwinkel · mind. 1 m Überstand</text>
    </g>`, '180px'),

  /* Kamineffekt im Treppenraum */
  kamineffekt: () => svg('0 0 380 200', `
    <g font-family="sans-serif">
      <rect x="150" y="20" width="90" height="170" fill="currentColor" opacity=".06" stroke="currentColor" stroke-width="1.5"/>
      ${[0,1,2,3].map(i=>`<line x1="150" y1="${60+i*38}" x2="240" y2="${60+i*38}" stroke="currentColor" stroke-width="1" opacity=".3"/>`).join('')}
      <!-- aufsteigender Rauch -->
      <g opacity=".55">${[0,1,2].map(i=>`<path d="M${170+i*24} 180 q-8 -50 4 -90 q-10 -40 2 -70" stroke="#6a7480" stroke-width="10" fill="none" stroke-linecap="round"/>`).join('')}</g>
      <path d="M195 185 c -10 -14 6 -20 0 -34 c 12 8 16 22 6 32 c 8 -4 8 -14 6 -18 c 8 10 6 24 -6 28 c -8 2 -14 -2 -12 -8 Z" fill="${AMBER}" stroke="none"/>
      <path d="M255 150 L255 60" stroke="${RED}" stroke-width="2.5" marker-end="url(#ke)"/>
      <defs><marker id="ke" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="${RED}" stroke="none"/></marker></defs>
      <text x="300" y="60" font-size="11" fill="currentColor" stroke="none">heißer Rauch</text>
      <text x="300" y="74" font-size="11" fill="currentColor" stroke="none">steigt auf</text>
      <text x="190" y="18" font-size="12" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">Kamineffekt</text>
      <text x="60" y="120" font-size="11" fill="currentColor" opacity=".8" stroke="none">Treppen-</text>
      <text x="60" y="134" font-size="11" fill="currentColor" opacity=".8" stroke="none">raum</text>
      <text x="190" y="198" font-size="10" fill="currentColor" opacity=".7" stroke="none" text-anchor="middle">Türen zu → Rettungsweg raucharm halten</text>
    </g>`, '200px'),

  /* Wasserförderung über lange Wegstrecke */
  wasserfoerderung: () => svg('0 0 500 150', `
    <g font-family="sans-serif" text-anchor="middle">
      <ellipse cx="40" cy="110" rx="34" ry="14" fill="${BLUE}" opacity=".4" stroke="${BLUE}" stroke-width="1.5"/>
      <text x="40" y="114" font-size="9" fill="currentColor" stroke="none">Wasser</text>
      ${[130,270,410].map((x,i)=>`
        <rect x="${x-26}" y="92" width="52" height="34" rx="6" fill="${RED}" opacity=".85" stroke="none"/>
        <text x="${x}" y="113" font-size="10" fill="#fff" stroke="none">${i===0?'Pumpe':'Verstärker'}</text>
      `).join('')}
      <line x1="74" y1="109" x2="104" y2="109" stroke="${BLUE}" stroke-width="6"/>
      <line x1="156" y1="109" x2="244" y2="109" stroke="${BLUE}" stroke-width="6"/>
      <line x1="296" y1="109" x2="384" y2="109" stroke="${BLUE}" stroke-width="6"/>
      <line x1="436" y1="109" x2="470" y2="109" stroke="${RED}" stroke-width="5"/>
      ${[200,340].map(x=>`<text x="${x}" y="86" font-size="9" fill="currentColor" opacity=".7" stroke="none">min. 1,5 bar</text>`).join('')}
      <text x="250" y="40" font-size="12" font-weight="700" fill="currentColor" stroke="none">Wasserförderung über lange Wegstrecke</text>
      <text x="250" y="58" font-size="10" fill="currentColor" opacity=".7" stroke="none">Verstärkerpumpen halten den Druck – je 10 m Höhe ≈ 1 bar Verlust</text>
    </g>`, '150px'),

  /* Mastwurf (schematisch) */
  mastwurf: () => svg('0 0 360 150', `
    <g font-family="sans-serif">
      <rect x="150" y="10" width="60" height="130" rx="30" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="2"/>
      <path d="M120 55 Q180 35 240 55 Q250 70 240 82 Q180 62 120 82 Q110 68 120 55 Z" fill="none" stroke="${RED}" stroke-width="6"/>
      <path d="M120 82 Q180 62 240 82 Q252 96 240 108 Q180 88 120 108" fill="none" stroke="${AMBER}" stroke-width="6"/>
      <path d="M240 108 q18 6 10 24" fill="none" stroke="${AMBER}" stroke-width="5" stroke-linecap="round"/>
      <text x="180" y="135" font-size="13" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">Mastwurf am Rundmaterial</text>
      <text x="300" y="60" font-size="10" fill="currentColor" opacity=".7" stroke="none">verstellbar,</text>
      <text x="300" y="74" font-size="10" fill="currentColor" opacity=".7" stroke="none">mit Halbschlag</text>
      <text x="300" y="88" font-size="10" fill="currentColor" opacity=".7" stroke="none">sichern</text>
    </g>`, '150px'),

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
