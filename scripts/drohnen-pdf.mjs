#!/usr/bin/env node
/* =========================================================================
   BOS-DROHNEN — PDF-Export der Lernunterlagen

   Erzeugt aus denselben Datenmodulen wie die App für jedes Modul (D1–D15)
   eine eigenständige, druckfertige PDF-Datei: Deckblatt mit Lernzielen,
   alle Lektionen mit sämtlichen Inhaltsblöcken (Schaubilder, Fotos mit
   Lizenznachweis, Tabellen, Checklisten, Funkbeispiele, Rechtsnormen,
   Fallbeispiele, Zeitleisten) sowie die Selbsttests mit Musterlösungen.

   Aufruf:  node scripts/drohnen-pdf.mjs [Zielverzeichnis]
   Standard-Ziel: dist/drohnen-pdf/

   Benötigt Playwright (Chromium) für den Druck nach PDF.
   ========================================================================= */

import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DATA = new URL('../assets/js/data/', import.meta.url);
const imp = (f) => import(new URL(f, DATA));

const OUT_DIR = path.resolve(process.argv[2] || path.join(ROOT, 'dist', 'drohnen-pdf'));

const { DROHNEN_MODULE, DROHNEN_KATEGORIEN } = await imp('drohnen.js');
const { DROHNEN_BILDER } = await imp('drohnen-bilder.js');
const { DROHNEN_DIAGRAMS } = await imp('drohnen-diagrams.js');

/* Playwright: global installiert (siehe scripts/press-pdf.mjs) oder lokal. */
async function loadChromium() {
  const candidates = [
    '/opt/node22/lib/node_modules/playwright/index.js',
    'playwright',
    'playwright-core',
  ];
  for (const c of candidates) {
    try {
      const mod = await import(c.startsWith('/') ? pathToFileURL(c).href : c);
      return (mod.chromium || mod.default?.chromium);
    } catch { /* nächster Kandidat */ }
  }
  throw new Error('Playwright nicht gefunden – bitte installieren (npm i -D playwright).');
}

/* ------------------------------------------------------------- Helfer */
const esc = (s = '') => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmtDur = (min) => min >= 60 ? `${Math.floor(min / 60)} Std. ${min % 60} Min.` : `${min} Min.`;
const slug = (s) => s.toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* Bilder als file:// einbetten, damit Chromium sie ohne Server lädt. */
const fileUrl = (rel) => pathToFileURL(path.join(ROOT, rel)).href;

/* --------------------------------------------------------- Blockrenderer */
const CALLOUT_LABEL = { info: 'Wissen', warn: 'Achtung', danger: 'Gefahr', ok: 'Merke', tip: 'Praxistipp' };

function block(b) {
  switch (b.t) {
    case 'h2': return `<h2>${esc(b.text)}</h2>`;
    case 'h3': return `<h3>${esc(b.text)}</h3>`;
    case 'p': return `<p>${b.html}</p>`;
    case 'list': return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'ol': return `<ol>${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'keyfacts': return `<ul class="keyfacts">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'callout':
      return `<div class="callout callout--${b.kind}">
        <div class="callout__t">${esc(b.title || CALLOUT_LABEL[b.kind] || '')}</div><p>${b.text}</p></div>`;
    case 'def': return `<dl class="def"><dt>${esc(b.term)}</dt><dd>${b.text}</dd></dl>`;
    case 'steps': return `<ol class="steps">${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'mnemonic':
      return `<div class="mne"><div class="mne__l">${b.letters.map(x => `<b>${esc(x.l)}</b>`).join('')}</div><p>${b.text}</p></div>`;
    case 'table':
      return `<table><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    case 'figd': {
      const fn = DROHNEN_DIAGRAMS[b.key];
      if (!fn) return '';
      return `<figure class="fig">${fn()}${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`;
    }
    case 'img': {
      const im = DROHNEN_BILDER[b.key];
      if (!im || !existsSync(path.join(ROOT, im.file))) return '';
      return `<figure class="fig photo">
        <img src="${fileUrl(im.file)}" alt="${esc(im.alt)}">
        ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}
        <figcaption class="credit">Foto: ${esc(im.author)} · ${esc(im.license)} · Quelle: ${esc(im.source)}</figcaption>
      </figure>`;
    }
    case 'quiz':
      return `<div class="quiz"><div class="quiz__t">Selbsttest – erst überlegen, dann die Lösung lesen</div>
        ${b.items.map((q, i) => `<div class="quiz__i">
          <p class="quiz__q"><b>${i + 1}.</b> ${esc(q.q)}</p>
          <p class="quiz__a"><b>Lösung:</b> ${q.a}</p></div>`).join('')}</div>`;
    case 'check':
      return `<div class="check"><div class="check__t">${esc(b.title)}</div>
        <ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    case 'funk':
      return `<div class="funk"><div class="funk__t">${esc(b.title)}</div>
        ${b.lines.map(l => `<div class="funk__l"><b>${esc(l.from)}</b><span>${esc(l.text)}</span></div>`).join('')}</div>`;
    case 'law':
      return `<div class="law"><div class="law__ref">${esc(b.ref)}</div>
        <div class="law__t">${esc(b.title)}</div><p>${b.text}</p></div>`;
    case 'case':
      return `<div class="case"><div class="case__t">${esc(b.title)}</div><p>${b.text}</p>
        ${b.questions?.length ? `<p class="case__q"><b>Arbeitsauftrag:</b></p><ol>${b.questions.map(q => `<li>${esc(q)}</li>`).join('')}</ol>` : ''}</div>`;
    case 'time':
      return `<div class="time"><div class="time__t">${esc(b.title)}</div>
        ${b.items.map(i => `<div class="time__i"><b>${esc(i.at)}</b><span>${esc(i.text)}</span></div>`).join('')}</div>`;
    case 'video':
      return `<div class="video"><b>Ergänzendes Lernvideo:</b> ${esc(b.title)}${b.minutes ? ` (ca. ${b.minutes} Min.)` : ''}
        <p>${esc(b.desc || '')}</p>
        <p class="video__hint">In der Online-Akademie als Video eingebunden. Suchbegriff für die eigene Recherche: „${esc(b.search || b.title)}"</p></div>`;
    default: return '';
  }
}

/* ------------------------------------------------------------- Stylesheet */
const CSS = `
@page { size: A4; margin: 18mm 16mm 20mm; }
* { box-sizing: border-box; }
body { font-family: "Inter", "Segoe UI", system-ui, sans-serif; font-size: 10.5pt; line-height: 1.6; color: #1c2128; margin: 0; }
h1, h2, h3 { line-height: 1.25; color: #10151c; }
h1 { font-size: 22pt; margin: 0 0 .3em; }
h2 { font-size: 14pt; margin: 1.5em 0 .5em; padding-bottom: .25em; border-bottom: 2px solid #d81f26; break-after: avoid; }
h3 { font-size: 11.5pt; margin: 1.2em 0 .4em; break-after: avoid; }
p { margin: 0 0 .75em; }
ul, ol { margin: 0 0 .9em; padding-left: 1.25em; }
li { margin-bottom: .3em; }
a { color: inherit; text-decoration: none; }

/* Deckblatt */
.cover { height: 247mm; display: flex; flex-direction: column; justify-content: space-between; break-after: page; padding-top: 8mm; }
.cover__mid { }
.cover__code { display: inline-block; background: var(--c); color: #fff; font-weight: 800; font-size: 11pt; padding: 4px 12px; border-radius: 6px; letter-spacing: .06em; }
.cover__sum { font-size: 12pt; color: #46505c; margin-top: .6em; max-width: 150mm; }
.cover__meta { display: flex; gap: 26px; margin: 22px 0; font-size: 10pt; color: #46505c; }
.cover__meta b { display: block; font-size: 15pt; color: #1c2128; }
.cover__box { border: 1px solid #d7dce2; border-left: 4px solid var(--c); border-radius: 6px; padding: 14px 18px; background: #f7f9fb; }
.cover__box h4 { margin: 0 0 .5em; font-size: 10.5pt; }
.cover__foot { font-size: 8.5pt; color: #6b7683; border-top: 1px solid #d7dce2; padding-top: 10px; }

/* Lektionen */
.lesson { break-before: page; }
.lesson__head { border-bottom: 1px solid #d7dce2; padding-bottom: 8px; margin-bottom: 14px; }
.lesson__kicker { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--c); }
.lesson__head h1 { font-size: 17pt; margin: .2em 0 0; }
.lesson__dur { font-size: 9pt; color: #6b7683; }

/* Inhaltsblöcke */
.keyfacts { list-style: none; padding: 0; }
.keyfacts li { padding: 7px 10px 7px 22px; background: #f2f5f8; border-radius: 4px; margin-bottom: 5px; position: relative; break-inside: avoid; }
.keyfacts li::before { content: "▸"; position: absolute; left: 8px; color: #d81f26; font-weight: 800; }
.callout { border: 1px solid #d7dce2; border-left: 4px solid #1e5fa8; border-radius: 5px; padding: 10px 14px; margin: 1em 0; background: #f7f9fb; break-inside: avoid; }
.callout__t { font-weight: 800; margin-bottom: .25em; }
.callout p { margin: 0; }
.callout--warn { border-left-color: #e67e22; background: #fdf6ee; }
.callout--danger { border-left-color: #d81f26; background: #fdf1f2; }
.callout--tip { border-left-color: #2e9e5b; background: #f1faf4; }
.callout--ok { border-left-color: #2e9e5b; background: #f1faf4; }
.def { border: 1px solid #d7dce2; border-left: 4px solid #1e5fa8; border-radius: 5px; padding: 10px 14px; margin: 1em 0; background: #f7f9fb; break-inside: avoid; }
.def dt { font-weight: 800; }
.def dd { margin: .2em 0 0; }
.steps { counter-reset: s; list-style: none; padding: 0; }
.steps li { counter-increment: s; position: relative; padding: 2px 0 9px 30px; break-inside: avoid; }
.steps li::before { content: counter(s); position: absolute; left: 0; top: 1px; width: 20px; height: 20px; border-radius: 50%; background: #d81f26; color: #fff; font-weight: 800; font-size: 8.5pt; display: grid; place-items: center; }
.mne { margin: 1em 0; break-inside: avoid; }
.mne__l { display: flex; gap: 6px; margin-bottom: .4em; }
.mne__l b { background: #d81f26; color: #fff; width: 26px; height: 26px; border-radius: 5px; display: grid; place-items: center; font-size: 11pt; }
.mne p { font-size: 9.5pt; color: #46505c; margin: 0; }
table { width: 100%; border-collapse: collapse; margin: 1em 0; font-size: 9.5pt; break-inside: avoid; }
th, td { border: 1px solid #d7dce2; padding: 6px 9px; text-align: left; vertical-align: top; }
th { background: #eef2f6; font-weight: 700; }
.fig { margin: 1.2em 0; padding: 12px; border: 1px solid #d7dce2; border-radius: 6px; background: #f7f9fb; break-inside: avoid; text-align: center; }
.fig svg { max-width: 100%; height: auto; color: #1c2128; }
.fig img { max-width: 100%; max-height: 95mm; object-fit: contain; border-radius: 4px; }
figcaption { font-size: 8.5pt; color: #46505c; margin-top: 7px; line-height: 1.45; }
.credit { font-size: 7.5pt; color: #6b7683; word-break: break-all; }
.quiz { border: 1px solid #1e5fa8; border-radius: 6px; padding: 12px 15px; margin: 1.3em 0; background: #f4f8fd; break-inside: avoid; }
.quiz__t { font-weight: 800; color: #1e5fa8; margin-bottom: .5em; }
.quiz__i { border-top: 1px solid #d7dce2; padding-top: .5em; margin-top: .5em; break-inside: avoid; }
.quiz__i:first-of-type { border-top: none; padding-top: 0; margin-top: 0; }
.quiz__q { margin: 0 0 .3em; }
.quiz__a { margin: 0; font-size: 9.5pt; color: #2c3742; padding-left: 10px; border-left: 3px solid #d81f26; }
.check { border: 1px solid #d7dce2; border-left: 4px solid #2e9e5b; border-radius: 5px; padding: 11px 15px; margin: 1.1em 0; background: #f7f9fb; break-inside: avoid; }
.check__t { font-weight: 800; margin-bottom: .45em; }
.check ul { list-style: none; padding: 0; margin: 0; }
.check li { padding-left: 22px; position: relative; margin-bottom: .35em; }
.check li::before { content: ""; position: absolute; left: 0; top: 3px; width: 12px; height: 12px; border: 1.5px solid #6b7683; border-radius: 2px; }
.funk { border: 1px solid #d7dce2; border-radius: 5px; padding: 11px 15px; margin: 1.1em 0; background: #f7f9fb; break-inside: avoid; }
.funk__t { font-weight: 800; margin-bottom: .5em; }
.funk__l { display: grid; grid-template-columns: 38mm 1fr; gap: 8px; padding: 5px 0; border-top: 1px dashed #d7dce2; }
.funk__l:first-of-type { border-top: none; }
.funk__l b { color: #d81f26; font-size: 9pt; }
.funk__l span { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 9pt; }
.law { border: 1px solid #d7dce2; border-left: 4px solid #16607a; border-radius: 5px; padding: 11px 15px; margin: 1.1em 0; background: #f4f9fb; break-inside: avoid; }
.law__ref { font-size: 8pt; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #16607a; }
.law__t { font-weight: 800; margin: .2em 0 .3em; }
.law p { margin: 0; }
.case { border: 1px solid #d7dce2; border-left: 4px solid #e67e22; border-radius: 5px; padding: 11px 15px; margin: 1.1em 0; background: #fdf8f2; break-inside: avoid; }
.case__t { font-weight: 800; color: #c66a10; margin-bottom: .35em; }
.case__q { margin: .5em 0 .2em; }
.time { border: 1px solid #d7dce2; border-radius: 5px; padding: 11px 15px; margin: 1.1em 0; background: #f7f9fb; break-inside: avoid; }
.time__t { font-weight: 800; margin-bottom: .45em; }
.time__i { display: grid; grid-template-columns: 42mm 1fr; gap: 8px; padding: 5px 0; border-top: 1px solid #e6eaef; }
.time__i:first-of-type { border-top: none; }
.time__i b { color: #1e5fa8; }
.video { border: 1px dashed #b6bec8; border-radius: 5px; padding: 11px 15px; margin: 1.1em 0; break-inside: avoid; }
.video p { margin: .3em 0 0; font-size: 9.5pt; }
.video__hint { color: #6b7683; font-size: 8.5pt; }
`;

/* ------------------------------------------------------------ Dokument */
function moduleHtml(m) {
  const cat = DROHNEN_KATEGORIEN[m.category];
  const fragen = m.lessons.reduce((n, l) =>
    n + l.blocks.filter(b => b.t === 'quiz').reduce((k, b) => k + b.items.length, 0), 0);

  const cover = `
  <section class="cover" style="--c:${cat.color}">
    <div class="cover__mid">
      <span class="cover__code">Modul ${esc(m.code)} · ${esc(cat.label)}</span>
      <h1 style="margin-top:.5em">${esc(m.title)}</h1>
      <p class="cover__sum">${esc(m.summary)}</p>
      <div class="cover__meta">
        <span><b>${m.lessons.length}</b>Lektionen</span>
        <span><b>${fmtDur(m.duration)}</b>Lernzeit</span>
        <span><b>${fragen}</b>Selbsttestfragen</span>
      </div>
      <div class="cover__box">
        <h4>Lernziele – nach diesem Modul können Sie …</h4>
        <ul style="margin:0">${m.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
      </div>
      <div class="cover__box" style="margin-top:12px">
        <h4>Inhalt</h4>
        <ol style="margin:0">${m.lessons.map(l => `<li>${esc(l.title)} <span style="color:#6b7683">· ${fmtDur(l.duration)}</span></li>`).join('')}</ol>
      </div>
    </div>
    <div class="cover__foot">
      <b>Rechtsgrundlage:</b> Durchführungsverordnung (EU) 2019/947 und delegierte Verordnung (EU) 2019/945 in der jeweils
      geltenden Fassung, ergänzt um die Verordnung (EU) 376/2014 und die Verordnung (EU) 2016/679 (DSGVO). Nationales Recht
      nur, soweit die EU-Verordnungen es ausdrücklich öffnen.<br><br>
      Bildungsunterlage für Aus- und Fortbildung. Ersetzt weder den Kompetenznachweis nach EU-Recht noch die praktische
      Flugausbildung, die Betriebsgenehmigung oder das Betriebshandbuch der eigenen Einheit. Schaubilder: eigene Darstellungen.
      Fotos: Wikimedia Commons unter freien Lizenzen, Urheber und Lizenz jeweils am Bild.
    </div>
  </section>`;

  const lessons = m.lessons.map((l, i) => `
  <section class="lesson">
    <div class="lesson__head">
      <div class="lesson__kicker">Modul ${esc(m.code)} · Lektion ${i + 1} von ${m.lessons.length}</div>
      <h1>${esc(l.title)}</h1>
      <div class="lesson__dur">Bearbeitungszeit: ${fmtDur(l.duration)}</div>
    </div>
    ${l.blocks.map(block).join('\n')}
  </section>`).join('\n');

  return `<!doctype html><html lang="de"><head><meta charset="utf-8">
    <title>${esc(m.code)} – ${esc(m.title)}</title><style>${CSS}</style></head>
    <body style="--c:${cat.color}">${cover}${lessons}</body></html>`;
}

/* ----------------------------------------------------------------- Lauf */
const chromium = await loadChromium();
await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();
const created = [];

for (const m of DROHNEN_MODULE) {
  const html = moduleHtml(m);
  const tmp = path.join(OUT_DIR, `.${m.code}.html`);
  await writeFile(tmp, html, 'utf8');
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });

  const file = path.join(OUT_DIR, `BOS-Drohnen-${m.code}-${slug(m.title)}.pdf`);
  await page.pdf({
    path: file,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;font-size:7.5pt;color:#6b7683;padding:0 16mm;text-align:right;font-family:sans-serif">
      Seite <span class="pageNumber"></span> von <span class="totalPages"></span></div>`,
  });
  created.push(file);
  console.log(`✓ ${path.basename(file)}`);
}

await browser.close();
console.log(`\n${created.length} PDF-Dateien erstellt → ${OUT_DIR}`);
