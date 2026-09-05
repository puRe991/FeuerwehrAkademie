/* =========================================================================
   DROHNEN-DIAGRAMS — Inline-SVG-Schaubilder für den BOS-Drohnen-Bereich.
   Bewusst als eigenes SVG erstellt (keine Fremdbilder, keine Lizenzfragen,
   offline verfügbar). Linien/Text nutzen currentColor und folgen damit dem
   Hell/Dunkel-Design. Einbindung über den Block-Typ FIGD.
   ========================================================================= */

const RED = '#d81f26', BLUE = '#1e5fa8', AMBER = '#f5a623', GREEN = '#2e9e5b',
      PURPLE = '#8e44ad', TEAL = '#0e8a8a', GREY = '#7f8c8d';

function svg(vb, inner, h = 'auto') {
  return `<svg viewBox="${vb}" style="width:100%;height:${h};max-width:620px;margin-inline:auto;display:block;color:var(--text)" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">${inner}</svg>`;
}
const T = (x, y, s, txt, opt = {}) =>
  `<text x="${x}" y="${y}" font-size="${s}" font-family="sans-serif" text-anchor="${opt.anchor || 'middle'}" font-weight="${opt.w || 400}" fill="${opt.fill || 'currentColor'}" stroke="none" opacity="${opt.o ?? 1}">${txt}</text>`;
const BOX = (x, y, w, h, c, r = 10) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}" opacity=".14" stroke="${c}" stroke-width="1.5"/>`;

export const DROHNEN_DIAGRAMS = {

  /* ---------------- Betriebskategorien der EU-Verordnung ---------------- */
  kategorien: () => svg('0 0 620 250', `
    ${BOX(15, 40, 185, 190, GREEN)}
    ${BOX(215, 40, 185, 190, AMBER)}
    ${BOX(415, 40, 190, 190, RED)}
    ${T(310, 24, 15, 'Betriebskategorien nach VO (EU) 2019/947', { w: 700 })}
    ${T(107, 66, 15, 'OFFEN', { w: 800, fill: GREEN })}
    ${T(107, 86, 11, '(Open)', { o: .7 })}
    ${T(107, 112, 11, 'geringes Risiko')}
    ${T(107, 132, 11, 'keine Genehmigung')}
    ${T(107, 152, 11, '&lt; 25 kg, Sichtflug')}
    ${T(107, 172, 11, 'max. 120 m AGL')}
    ${T(107, 192, 11, 'A1 / A2 / A3')}
    ${T(107, 214, 10, 'Registrierung + Nachweis', { o: .7 })}
    ${T(307, 66, 15, 'SPEZIELL', { w: 800, fill: AMBER })}
    ${T(307, 86, 11, '(Specific)', { o: .7 })}
    ${T(307, 112, 11, 'erhöhtes Risiko')}
    ${T(307, 132, 11, 'Betriebsgenehmigung')}
    ${T(307, 152, 11, 'SORA / STS / PDRA')}
    ${T(307, 172, 11, 'BVLOS, Nacht, Menschen')}
    ${T(307, 192, 11, 'Betriebshandbuch')}
    ${T(307, 214, 10, 'Regelfall für BOS', { o: .7, w: 700 })}
    ${T(510, 66, 15, 'ZULASSUNGS-', { w: 800, fill: RED })}
    ${T(510, 84, 15, 'PFLICHTIG', { w: 800, fill: RED })}
    ${T(510, 104, 11, '(Certified)', { o: .7 })}
    ${T(510, 130, 11, 'hohes Risiko')}
    ${T(510, 150, 11, 'Musterzulassung')}
    ${T(510, 170, 11, 'Lizenz des Piloten')}
    ${T(510, 190, 11, 'Personentransport,')}
    ${T(510, 208, 11, 'Gefahrgut über Menschen')}
  `, '250px'),

  /* ---------------- Aufbau eines Multikopters ---------------- */
  aufbau: () => svg('0 0 620 300', `
    <g stroke-width="2">
      <line x1="230" y1="120" x2="150" y2="70" stroke="currentColor" opacity=".6"/>
      <line x1="390" y1="120" x2="470" y2="70" stroke="currentColor" opacity=".6"/>
      <line x1="230" y1="180" x2="150" y2="230" stroke="currentColor" opacity=".6"/>
      <line x1="390" y1="180" x2="470" y2="230" stroke="currentColor" opacity=".6"/>
    </g>
    <rect x="230" y="110" width="160" height="80" rx="16" fill="${BLUE}" opacity=".2" stroke="${BLUE}" stroke-width="2"/>
    ${T(310, 145, 13, 'Zelle / Flight', { w: 700 })}
    ${T(310, 163, 13, 'Controller', { w: 700 })}
    ${[[150, 70], [470, 70], [150, 230], [470, 230]].map(([x, y]) =>
      `<ellipse cx="${x}" cy="${y}" rx="52" ry="9" fill="${GREY}" opacity=".35" stroke="none"/>
       <circle cx="${x}" cy="${y}" r="13" fill="${RED}" stroke="none"/>`).join('')}
    ${T(150, 48, 11, 'Motor + Propeller', { o: .8 })}
    ${T(470, 48, 11, 'Motor + Propeller', { o: .8 })}
    ${T(150, 258, 11, 'Drehrichtung wechselt', { o: .8 })}
    ${T(470, 258, 11, 'paarweise (CW/CCW)', { o: .8 })}
    <rect x="270" y="196" width="80" height="26" rx="6" fill="${GREEN}" opacity=".3" stroke="${GREEN}" stroke-width="1.5"/>
    ${T(310, 214, 11, 'Akku (LiPo)', { w: 600 })}
    <circle cx="310" cy="240" r="14" fill="${PURPLE}" opacity=".35" stroke="${PURPLE}" stroke-width="1.5"/>
    ${T(310, 244, 10, 'Gimbal', { w: 600 })}
    ${T(310, 272, 11, 'Nutzlast: Tageslicht- / Wärmebildkamera, Scheinwerfer, Lautsprecher', { o: .75 })}
    ${T(310, 22, 14, 'Aufbau eines Quadrokopters', { w: 700 })}
  `, '300px'),

  /* ---------------- Luftraumstruktur / Höhen ---------------- */
  luftraum: () => svg('0 0 620 300', `
    ${T(310, 20, 14, 'Höhen und Nachbarn im unteren Luftraum', { w: 700 })}
    <line x1="40" y1="265" x2="590" y2="265" stroke="currentColor" stroke-width="2"/>
    ${T(315, 285, 11, 'Boden (GND)', { o: .7 })}
    <line x1="40" y1="160" x2="590" y2="160" stroke="${RED}" stroke-width="2" stroke-dasharray="7 5"/>
    ${T(120, 152, 12, '120 m AGL – Obergrenze OFFEN', { anchor: 'start', fill: RED, w: 700 })}
    <rect x="40" y="160" width="550" height="105" fill="${GREEN}" opacity=".1" stroke="none"/>
    ${T(300, 215, 12, 'Betriebsraum der Feuerwehr-Drohne (0–120 m)', { w: 600 })}
    <rect x="40" y="60" width="550" height="100" fill="${AMBER}" opacity=".08" stroke="none"/>
    ${T(300, 90, 12, 'Rettungshubschrauber, Polizeihubschrauber, Löschflugzeuge', { w: 600 })}
    ${T(300, 112, 11, 'fliegen im Einsatz oft tief – auch unter 120 m!', { fill: RED, w: 700 })}
    <g stroke="${BLUE}" stroke-width="2">
      <circle cx="470" cy="205" r="6" fill="${BLUE}"/>
      <line x1="452" y1="205" x2="488" y2="205"/>
    </g>
    ${T(470, 232, 10, 'UAS', { o: .8 })}
    <g stroke="${AMBER}" stroke-width="2">
      <ellipse cx="150" cy="120" rx="26" ry="4" fill="none"/>
      <rect x="136" y="118" width="30" height="14" rx="5" fill="${AMBER}" stroke="none"/>
    </g>
    ${T(150, 148, 10, 'RTH / Polizei', { o: .8 })}
    ${T(315, 250, 10, 'Höhe wird über dem Startpunkt gemessen – Gelände beachten', { o: .65 })}
  `, '300px'),

  /* ---------------- Crew-Konzept ---------------- */
  crew: () => svg('0 0 620 260', `
    ${T(310, 22, 14, 'Drohnen-Crew im BOS-Einsatz', { w: 700 })}
    <rect x="215" y="40" width="190" height="42" rx="10" fill="${RED}" stroke="none"/>
    ${T(310, 66, 13, 'Einsatzleitung / Abschnitt', { w: 700, fill: '#fff' })}
    <line x1="310" y1="82" x2="310" y2="106" stroke="currentColor" stroke-width="1.5" opacity=".45"/>
    <line x1="110" y1="106" x2="510" y2="106" stroke="currentColor" stroke-width="1.5" opacity=".45"/>
    ${[[110, 'Fernpilot', 'führt das Gerät', BLUE],
       [310, 'Luftraum-', 'beobachter', AMBER],
       [510, 'Auswerter /', 'Operator', TEAL]].map(([x, a, b, c]) =>
      `<line x1="${x}" y1="106" x2="${x}" y2="124" stroke="currentColor" stroke-width="1.5" opacity=".45"/>
       ${BOX(x - 88, 124, 176, 62, c)}
       ${T(x, 150, 13, a, { w: 700 })}
       ${T(x, 170, 12, b, { o: .8 })}`).join('')}
    ${T(310, 214, 12, 'Ein Fernpilot fliegt – er beobachtet nicht gleichzeitig das Display.', { w: 600 })}
    ${T(310, 236, 11, 'Rollen sind vor dem Start festzulegen und laut zu bestätigen.', { o: .75 })}
  `, '260px'),

  /* ---------------- Einsatzablauf / Zeitleiste ---------------- */
  ablauf: () => svg('0 0 620 210', `
    ${T(310, 22, 14, 'Ablauf eines Drohneneinsatzes', { w: 700 })}
    <line x1="45" y1="105" x2="575" y2="105" stroke="currentColor" stroke-width="2" opacity=".35"/>
    ${[['Alarm &', 'Anfahrt', GREY, 90],
       ['Lage &', 'Auftrag', BLUE, 210],
       ['Startplatz', 'einrichten', TEAL, 330],
       ['Flug &', 'Auswertung', GREEN, 450],
       ['Landung &', 'Nachbereitung', PURPLE, 555]].map(([a, b, c, x], i) =>
      `<circle cx="${x}" cy="105" r="15" fill="${c}" stroke="none"/>
       ${T(x, 110, 12, String(i + 1), { w: 800, fill: '#fff' })}
       ${T(x, 66, 12, a, { w: 700 })}
       ${T(x, 84, 12, b, { w: 700 })}
       ${T(x, 140, 10, '', {})}`).join('')}
    ${T(90, 160, 10, 'Auftrag klären', { o: .7 })}
    ${T(210, 160, 10, 'Was soll ich sehen?', { o: .7 })}
    ${T(330, 160, 10, 'Sicherheitsabstand', { o: .7 })}
    ${T(450, 160, 10, 'melden, nicht filmen', { o: .7 })}
    ${T(555, 160, 10, 'Daten & Doku', { o: .7 })}
    ${T(310, 190, 11, 'Jeder Schritt hat eine Checkliste – abgearbeitet, nicht auswendig.', { o: .8 })}
  `, '210px'),

  /* ---------------- Suchmuster ---------------- */
  suchmuster: () => svg('0 0 620 240', `
    ${T(310, 20, 14, 'Suchmuster aus der Luft', { w: 700 })}
    ${[[20, 'Mäander (Parallelsuche)', GREEN], [220, 'Spirale (vom Punkt)', BLUE], [420, 'Sektor (Stern)', AMBER]]
      .map(([x, label, c]) => `<rect x="${x + 5}" y="45" width="175" height="140" rx="10" fill="${c}" opacity=".08" stroke="${c}" stroke-width="1.2"/>${T(x + 92, 205, 11, label, { w: 600 })}`).join('')}
    <polyline points="35,60 165,60 165,85 35,85 35,110 165,110 165,135 35,135 35,160 165,160" fill="none" stroke="${GREEN}" stroke-width="2.5"/>
    <path d="M312 115 m0,0 a10,10 0 1,1 -10,-10 a25,25 0 1,1 25,25 a40,40 0 1,1 -40,-40 a55,55 0 1,1 55,55" fill="none" stroke="${BLUE}" stroke-width="2.5"/>
    ${[0, 45, 90, 135].map(d => {
      const r = 60, rad = d * Math.PI / 180;
      return `<line x1="${512 - Math.cos(rad) * r}" y1="${115 - Math.sin(rad) * r}" x2="${512 + Math.cos(rad) * r}" y2="${115 + Math.sin(rad) * r}" stroke="${AMBER}" stroke-width="2.5"/>`;
    }).join('')}
    <circle cx="512" cy="115" r="4" fill="${RED}" stroke="none"/>
    ${T(310, 230, 11, 'Muster nach Gelände und Auftrag wählen – Überlappung der Bahnen einplanen.', { o: .8 })}
  `, '240px'),

  /* ---------------- Wärmebild-Signatur ---------------- */
  waermesignatur: () => svg('0 0 620 220', `
    ${T(310, 20, 14, 'Was das Wärmebild zeigt – und was nicht', { w: 700 })}
    ${BOX(25, 40, 275, 150, GREEN)}
    ${T(162, 66, 13, 'Gut erkennbar', { w: 700, fill: GREEN })}
    ${['Mensch/Tier auf kühlem Untergrund', 'Glutnester unter Asche', 'Warme Motorhaube, frische Spur', 'Wasser-/Öllache mit Temperaturkontrast']
      .map((t, i) => T(162, 92 + i * 24, 11, t)).join('')}
    ${BOX(320, 40, 275, 150, RED)}
    ${T(457, 66, 13, 'Nicht erkennbar', { w: 700, fill: RED })}
    ${['Personen hinter Glas (IR wird reflektiert)', 'Unter dichtem Laubdach', 'Bei aufgeheiztem Boden im Sommer', 'Durch Wände, Wasser oder Rauchsäule']
      .map((t, i) => T(457, 92 + i * 24, 11, t)).join('')}
    ${T(310, 212, 11, 'Das Wärmebild misst Oberflächentemperatur – es ist kein Röntgenblick.', { o: .8, w: 600 })}
  `, '220px'),

  /* ---------------- Risikomanagement / SORA ---------------- */
  sora: () => svg('0 0 620 240', `
    ${T(310, 22, 14, 'Risikobetrachtung im Betrieb (SORA-Logik)', { w: 700 })}
    ${BOX(25, 45, 260, 78, AMBER)}
    ${T(155, 72, 13, 'Bodenrisiko', { w: 700, fill: AMBER })}
    ${T(155, 94, 11, 'Wer ist unter mir?')}
    ${T(155, 112, 11, 'Menschenansammlung, Straße, Absperrung')}
    ${BOX(335, 45, 260, 78, BLUE)}
    ${T(465, 72, 13, 'Luftrisiko', { w: 700, fill: BLUE })}
    ${T(465, 94, 11, 'Wer ist neben/über mir?')}
    ${T(465, 112, 11, 'RTH, Polizei, andere Drohnen, Leitungen')}
    <line x1="155" y1="123" x2="310" y2="150" stroke="currentColor" stroke-width="1.5" opacity=".45"/>
    <line x1="465" y1="123" x2="310" y2="150" stroke="currentColor" stroke-width="1.5" opacity=".45"/>
    ${BOX(180, 150, 260, 68, GREEN)}
    ${T(310, 176, 13, 'Minderungsmaßnahmen', { w: 700, fill: GREEN })}
    ${T(310, 197, 11, 'Absperren · Höhe · Route · Abbruchkriterien')}
    ${T(310, 232, 11, 'Bleibt ein Restrisiko unvertretbar: nicht starten. Das ist auch eine Entscheidung.', { o: .8 })}
  `, '240px'),

  /* ---------------- Datenfluss / Livebild ---------------- */
  datenfluss: () => svg('0 0 620 200', `
    ${T(310, 20, 14, 'Vom Sensor zur Entscheidung', { w: 700 })}
    ${[['UAS', 'Sensor', BLUE, 75], ['Steuerung', 'Fernpilot', TEAL, 235], ['Auswertung', 'Operator', GREEN, 395], ['ELW / Leitung', 'Entscheidung', RED, 545]]
      .map(([a, b, c, x]) => `${BOX(x - 68, 60, 136, 66, c)}${T(x, 88, 12, a, { w: 700 })}${T(x, 108, 11, b, { o: .8 })}`).join('')}
    ${[[143, 235 - 68], [303, 395 - 68], [463, 545 - 68]].map(([x1, x2]) =>
      `<line x1="${x1}" y1="93" x2="${x2 - 6}" y2="93" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
       <polygon points="${x2 - 6},93 ${x2 - 14},88 ${x2 - 14},98" fill="currentColor" stroke="none" opacity=".5"/>`).join('')}
    ${T(310, 158, 12, 'Der Wert entsteht nicht im Bild, sondern in der gemeldeten Erkenntnis.', { w: 600 })}
    ${T(310, 180, 11, 'Kurze, klare Lagemeldung statt Dauervideostream ohne Deutung.', { o: .75 })}
  `, '200px'),

  /* ---------------- Akku / LiPo ---------------- */
  akku: () => svg('0 0 620 210', `
    ${T(310, 20, 14, 'LiPo-Akku: Zustände und Grenzen', { w: 700 })}
    <rect x="60" y="55" width="500" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/>
    ${[[60, 150, GREEN, '100–50 % Arbeitsbereich'], [210, 150, AMBER, '50–30 % Rückflug einleiten'], [360, 120, RED, '30–20 % Landung'], [480, 80, '#8b1a1a', '&lt;20 % Notlandung']]
      .map(([x, w, c, label], i) => `<rect x="${x}" y="55" width="${w}" height="46" fill="${c}" opacity=".28" stroke="none"/>${T(x + Number(w) / 2, 125 + (i % 2) * 18, 11, label, { w: 600 })}`).join('')}
    ${T(310, 175, 12, 'Lagerung bei ca. 40–60 % („Storage"), nie tiefentladen, nie unbeaufsichtigt laden.', { w: 600 })}
    ${T(310, 196, 11, 'Beschädigte oder aufgeblähte Zellen sofort aussondern – Brandgefahr.', { fill: RED, w: 700 })}
  `, '210px'),

  /* ---------------- Sichtflug / VLOS ---------------- */
  vlos: () => svg('0 0 620 220', `
    ${T(310, 20, 14, 'VLOS, EVLOS und BVLOS', { w: 700 })}
    ${[[105, 'VLOS', 'direkter Sichtkontakt des Fernpiloten', GREEN],
       [310, 'EVLOS', 'Sicht über Luftraumbeobachter verlängert', AMBER],
       [515, 'BVLOS', 'außerhalb der Sicht – nur mit Genehmigung', RED]]
      .map(([x, a, b, c]) => `${BOX(x - 95, 45, 190, 120, c)}${T(x, 78, 15, a, { w: 800, fill: c })}${T(x, 106, 11, b.split(' ').slice(0, 3).join(' '))}${T(x, 126, 11, b.split(' ').slice(3).join(' '))}`).join('')}
    <circle cx="105" cy="150" r="5" fill="${GREEN}" stroke="none"/>
    ${T(310, 192, 12, 'In der OFFEN-Kategorie ist VLOS zwingend. Alles andere ist SPEZIELL.', { w: 600 })}
    ${T(310, 212, 11, 'Sichtkontakt heißt: das Gerät selbst sehen – nicht das Display.', { o: .75 })}
  `, '220px'),

  /* ---------------- Geo-Zonen ---------------- */
  geozonen: () => svg('0 0 620 230', `
    ${T(310, 20, 14, 'UAS-Geografische Gebiete (Geo-Zonen)', { w: 700 })}
    <rect x="30" y="40" width="560" height="150" rx="12" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".4"/>
    <circle cx="150" cy="115" r="58" fill="${RED}" opacity=".18" stroke="${RED}" stroke-width="1.5"/>
    ${T(150, 110, 12, 'Flughafen', { w: 700 })}
    ${T(150, 130, 11, 'Verbot / Freigabe', { o: .8 })}
    <rect x="245" y="70" width="120" height="90" rx="10" fill="${AMBER}" opacity=".18" stroke="${AMBER}" stroke-width="1.5"/>
    ${T(305, 110, 12, 'Naturschutz', { w: 700 })}
    ${T(305, 130, 11, 'Beschränkung', { o: .8 })}
    <rect x="400" y="70" width="160" height="90" rx="10" fill="${PURPLE}" opacity=".18" stroke="${PURPLE}" stroke-width="1.5"/>
    ${T(480, 104, 12, 'Kritische Infra-', { w: 700 })}
    ${T(480, 122, 12, 'struktur / Behörden', { w: 700 })}
    ${T(310, 212, 11, 'Geo-Zonen werden vor jedem Flug in der amtlichen Karte geprüft – nicht aus dem Gedächtnis.', { o: .8 })}
  `, '230px'),
};

export function drohnenDiagram(key) {
  const fn = DROHNEN_DIAGRAMS[key];
  return fn ? fn() : '';
}
