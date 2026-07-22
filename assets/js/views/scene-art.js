/* =========================================================================
   SCENE-ART — Inline-SVG-Illustrationen für Planspiele
   Vektorgrafiken (offline, skalierbar). Kein externes Asset nötig.
   ========================================================================= */

function frame(inner, { mini = false } = {}) {
  const h = mini ? 120 : 300;
  return `<svg viewBox="0 0 600 ${mini ? 240 : 340}" preserveAspectRatio="xMidYMid slice" style="width:100%;height:${mini ? '120px' : 'auto'};display:block" aria-hidden="true">${inner}</svg>`;
}

const SKY_NIGHT = `<defs>
  <linearGradient id="skyN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2230"/><stop offset="1" stop-color="#2b1c1c"/></linearGradient>
  <radialGradient id="glow" cx="0.5" cy="1" r="0.9"><stop offset="0" stop-color="#ff6a2b" stop-opacity=".7"/><stop offset="1" stop-color="#ff6a2b" stop-opacity="0"/></radialGradient>
  <linearGradient id="fire" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffd24d"/><stop offset="0.5" stop-color="#ff7a1a"/><stop offset="1" stop-color="#e01e1e"/></linearGradient>
</defs>`;

function fireGlyph(x, y, s = 1) {
  return `<g transform="translate(${x},${y}) scale(${s})">
    <path d="M0 0 C -14 -22 8 -30 -2 -54 C 20 -40 26 -14 12 4 C 22 -4 24 -20 20 -28 C 34 -10 30 12 8 18 C -6 22 -14 12 0 0 Z" fill="url(#fire)" opacity=".95"/>
  </g>`;
}

export const SCENES = {
  /* Wohnungsbrand */
  'ps-wohnungsbrand': ({ mini } = {}) => frame(`${SKY_NIGHT}
    <rect width="600" height="340" fill="url(#skyN)"/>
    <ellipse cx="380" cy="330" rx="320" ry="120" fill="url(#glow)"/>
    <!-- Gebäude -->
    <rect x="300" y="70" width="230" height="250" fill="#39424f"/>
    <rect x="300" y="70" width="230" height="250" fill="none" stroke="#222a34" stroke-width="2"/>
    ${[0,1,2,3].map(r => [0,1,2].map(c => {
      const lit = (r===2 && c===1);
      const help = (r===1 && c===2);
      return `<rect x="${320+c*66}" y="${88+r*58}" width="42" height="40" fill="${lit?'#ff8a2b':help?'#ffd98a':'#1d2630'}" stroke="#141a22" stroke-width="2"/>${
        help?`<circle cx="${341+c*66}" cy="${108+r*58}" r="7" fill="#12324f"/>`:''}`;
    }).join('')).join('')}
    ${fireGlyph(388,190,1.5)}
    <g opacity=".8"><path d="M340 150 q20 -30 44 -10 q30 -18 40 12" fill="none" stroke="#5a6270" stroke-width="10" stroke-linecap="round"/></g>
    <!-- Boden + Fahrzeug -->
    <rect x="0" y="300" width="600" height="40" fill="#1c232c"/>
    <g transform="translate(70,238)">
      <rect x="0" y="18" width="150" height="54" rx="8" fill="#c81f1f"/>
      <rect x="110" y="30" width="60" height="42" rx="6" fill="#a71818"/>
      <rect x="12" y="26" width="80" height="24" rx="4" fill="#1b2530"/>
      <rect x="0" y="14" width="150" height="8" fill="#0f1620"/>
      <circle cx="34" cy="76" r="14" fill="#10151c"/><circle cx="34" cy="76" r="6" fill="#3a4552"/>
      <circle cx="140" cy="76" r="14" fill="#10151c"/><circle cx="140" cy="76" r="6" fill="#3a4552"/>
      <rect x="60" y="4" width="30" height="12" rx="3" fill="#2b6cff"><animate attributeName="opacity" values="1;.3;1" dur="1s" repeatCount="indefinite"/></rect>
    </g>`, { mini }),

  /* Verkehrsunfall */
  'ps-verkehrsunfall': ({ mini } = {}) => frame(`
    <defs><linearGradient id="skyD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a7a9c"/><stop offset="1" stop-color="#93a9be"/></linearGradient></defs>
    <rect width="600" height="340" fill="url(#skyD)"/>
    <ellipse cx="300" cy="300" rx="380" ry="70" fill="#2c3540"/>
    <rect x="0" y="250" width="600" height="90" fill="#3a444f"/>
    <rect x="0" y="292" width="600" height="6" fill="#e9c33a" stroke-dasharray="40 30"/>
    <!-- Baum -->
    <rect x="470" y="150" width="18" height="110" fill="#5a3d28"/>
    <circle cx="479" cy="140" r="46" fill="#2e6b3e"/><circle cx="450" cy="160" r="34" fill="#357a48"/><circle cx="505" cy="160" r="30" fill="#2b6339"/>
    <!-- Unfall-PKW -->
    <g transform="translate(300,196)">
      <path d="M0 40 L10 12 Q16 4 30 4 L120 4 Q150 4 168 26 L176 40 Z" fill="#2c6fb0"/>
      <path d="M150 20 L176 40 L150 44 Z" fill="#1d558c"/>
      <rect x="26" y="10" width="60" height="22" rx="4" fill="#9fc4e6"/>
      <rect x="92" y="12" width="40" height="20" rx="4" fill="#8fb7dd"/>
      <circle cx="40" cy="46" r="16" fill="#12151a"/><circle cx="40" cy="46" r="6" fill="#41505f"/>
      <circle cx="140" cy="46" r="16" fill="#12151a"/><circle cx="140" cy="46" r="6" fill="#41505f"/>
      <g opacity=".7"><path d="M160 -6 q10 -14 22 -4" stroke="#c8cdd4" stroke-width="6" fill="none" stroke-linecap="round"/></g>
    </g>
    <!-- Feuerwehrfahrzeug -->
    <g transform="translate(30,180)">
      <rect x="0" y="20" width="150" height="60" rx="8" fill="#c81f1f"/>
      <rect x="110" y="34" width="60" height="46" rx="6" fill="#a71818"/>
      <rect x="12" y="28" width="84" height="26" rx="4" fill="#1b2530"/>
      <circle cx="36" cy="84" r="15" fill="#10151c"/><circle cx="146" cy="84" r="15" fill="#10151c"/>
      <rect x="64" y="6" width="30" height="12" rx="3" fill="#2b6cff"><animate attributeName="opacity" values="1;.3;1" dur="1s" repeatCount="indefinite"/></rect>
    </g>
    <!-- Warnleitkegel -->
    ${[250,270].map((x,i)=>`<g transform="translate(${x},262)"><path d="M0 24 L10 -8 L20 24 Z" fill="#e8621f"/><rect x="-3" y="24" width="26" height="6" rx="2" fill="#c94e12"/><rect x="4" y="4" width="12" height="6" fill="#fff"/></g>`).join('')}`, { mini }),

  /* Gefahrgut */
  'ps-gefahrgut': ({ mini } = {}) => frame(`
    <defs><linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a95a2"/><stop offset="1" stop-color="#aeb7c2"/></linearGradient></defs>
    <rect width="600" height="340" fill="url(#skyG)"/>
    <rect x="0" y="240" width="600" height="100" fill="#4a535d"/>
    <rect x="0" y="250" width="600" height="8" fill="#dfe3e8"/>
    <rect x="0" y="300" width="600" height="4" fill="#dfe3e8" stroke-dasharray="34 26"/>
    <!-- Tanklastzug -->
    <g transform="translate(150,150)">
      <rect x="150" y="20" width="70" height="70" rx="8" fill="#d8dde3"/>
      <rect x="160" y="30" width="40" height="26" rx="4" fill="#1b2530"/>
      <ellipse cx="70" cy="60" rx="150" ry="42" fill="#e7ebef"/>
      <ellipse cx="70" cy="60" rx="150" ry="42" fill="none" stroke="#b9c0c8" stroke-width="3"/>
      <line x1="20" y1="24" x2="20" y2="96" stroke="#c2c8cf" stroke-width="3"/>
      <line x1="120" y1="24" x2="120" y2="96" stroke="#c2c8cf" stroke-width="3"/>
      <!-- Warntafel -->
      <g transform="translate(150,66)"><rect x="0" y="0" width="52" height="34" rx="4" fill="#f0a000" stroke="#111" stroke-width="2"/><line x1="0" y1="17" x2="52" y2="17" stroke="#111" stroke-width="2"/><text x="26" y="13" font-size="11" font-family="monospace" text-anchor="middle" fill="#111">33</text><text x="26" y="30" font-size="11" font-family="monospace" text-anchor="middle" fill="#111">1203</text></g>
      <circle cx="40" cy="104" r="16" fill="#12151a"/><circle cx="90" cy="104" r="16" fill="#12151a"/><circle cx="185" cy="104" r="16" fill="#12151a"/>
    </g>
    <!-- Lache -->
    <ellipse cx="230" cy="288" rx="90" ry="16" fill="#6b7a3a" opacity=".8"/>
    <ellipse cx="230" cy="286" rx="60" ry="9" fill="#8a9a48" opacity=".7"/>
    <!-- Dampf -->
    <g opacity=".5"><path d="M250 220 q-16 -28 6 -44 q-18 -26 8 -44" stroke="#e6ead0" stroke-width="10" fill="none" stroke-linecap="round"/></g>
    <!-- Windpfeil -->
    <g transform="translate(500,60)" opacity=".8"><path d="M-40 0 L20 0 M4 -14 L20 0 L4 14" stroke="#2b3a4a" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="-40" y="-12" font-size="12" fill="#2b3a4a" font-family="sans-serif">Wind</text></g>`, { mini }),

  /* Vegetationsbrand / Waldbrand */
  'ps-vegetationsbrand': ({ mini } = {}) => frame(`${SKY_NIGHT}
    <rect width="600" height="340" fill="url(#skyN)"/>
    <ellipse cx="300" cy="330" rx="420" ry="150" fill="url(#glow)"/>
    <!-- Hügelsilhouette -->
    <path d="M0 240 Q150 180 300 220 T600 210 V340 H0 Z" fill="#2a231c"/>
    <path d="M0 270 Q180 230 360 260 T600 250 V340 H0 Z" fill="#1d1712"/>
    <!-- Baumreihe brennend -->
    ${[80,150,220,300,370,440,510].map((x,i)=>{
      const burn = x>250 && x<470;
      return `<g transform="translate(${x},${210 - (i%3)*8})">
        <rect x="-4" y="0" width="8" height="40" fill="#3a2a1c"/>
        <path d="M0 -34 L-22 6 L22 6 Z" fill="${burn?'#4a2a14':'#1f3a24'}"/>
        <path d="M0 -14 L-16 12 L16 12 Z" fill="${burn?'#5a3018':'#26492e'}"/>
        ${burn?fireGlyph(0,10,0.7):''}
      </g>`;
    }).join('')}
    <!-- Feuerfront -->
    <path d="M240 300 Q300 270 360 300 Q420 275 470 300" fill="none" stroke="url(#fire)" stroke-width="14" stroke-linecap="round" opacity=".9"/>
    ${fireGlyph(300,300,1.6)}${fireGlyph(400,300,1.3)}
    <!-- TLF im Vordergrund -->
    <g transform="translate(40,250)">
      <rect x="0" y="18" width="130" height="50" rx="8" fill="#c81f1f"/>
      <ellipse cx="70" cy="26" rx="52" ry="12" fill="#a71818"/>
      <rect x="10" y="26" width="60" height="22" rx="4" fill="#1b2530"/>
      <circle cx="30" cy="72" r="13" fill="#10151c"/><circle cx="110" cy="72" r="13" fill="#10151c"/>
      <rect x="56" y="6" width="26" height="10" rx="3" fill="#2b6cff"><animate attributeName="opacity" values="1;.3;1" dur="1s" repeatCount="indefinite"/></rect>
    </g>`, { mini }),

  /* Stabsarbeit / Großschadenslage — Lagekarte / Führungsraum */
  'ps-stabsarbeit': ({ mini } = {}) => frame(`
    <defs><linearGradient id="room" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2733"/><stop offset="1" stop-color="#12181f"/></linearGradient></defs>
    <rect width="600" height="340" fill="url(#room)"/>
    <!-- Lagekarte an der Wand -->
    <g transform="translate(60,34)">
      <rect x="0" y="0" width="300" height="200" rx="6" fill="#eef2f5"/>
      <path d="M20 40 Q90 20 160 60 T290 50" fill="none" stroke="#6fa8dc" stroke-width="6"/>
      <path d="M10 150 L120 120 L200 160 L290 130" fill="none" stroke="#b6c94e" stroke-width="4"/>
      <rect x="120" y="70" width="70" height="50" fill="#d98a8a" opacity=".6"/>
      <circle cx="90" cy="90" r="8" fill="#d81f26"/><circle cx="210" cy="120" r="8" fill="#1e5fa8"/><circle cx="150" cy="150" r="8" fill="#2e9e5b"/>
      <!-- taktische Zeichen (Rechtecke) -->
      <rect x="60" y="60" width="26" height="16" fill="#2b6cff" opacity=".85"/>
      <rect x="180" y="95" width="26" height="16" fill="#d81f26" opacity=".85"/>
    </g>
    <!-- S-Sachgebiete Tafeln -->
    ${['S1','S2','S3','S4','S6'].map((s,i)=>`<g transform="translate(${390+ (i%2)*100},${40+Math.floor(i/2)*54})">
      <rect x="0" y="0" width="86" height="42" rx="6" fill="#243244" stroke="#33465c" stroke-width="1.5"/>
      <text x="12" y="27" font-size="18" font-family="sans-serif" font-weight="700" fill="#8fb7dd">${s}</text>
      <circle cx="68" cy="21" r="6" fill="#2e9e5b"/>
    </g>`).join('')}
    <!-- Tisch + Funk -->
    <rect x="0" y="250" width="600" height="90" fill="#0d1319"/>
    <rect x="40" y="258" width="520" height="14" rx="4" fill="#26323f"/>
    ${[90,180,270,360,450].map(x=>`<g transform="translate(${x},228)"><rect x="0" y="0" width="42" height="26" rx="3" fill="#1a232e"/><rect x="6" y="5" width="30" height="10" rx="2" fill="#3a6ea5"/></g>`).join('')}
    <text x="300" y="300" font-size="15" text-anchor="middle" fill="#5a6b7d" font-family="sans-serif">Führungsstab · Lageraum</text>`, { mini }),
};

export function sceneSVG(key, opts = {}) {
  const fn = SCENES[key] || SCENES['ps-wohnungsbrand'];
  return fn(opts);
}
