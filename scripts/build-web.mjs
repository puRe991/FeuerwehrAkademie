// =========================================================================
//  Web-Build für die native App (Capacitor)
//  -------------------------------------------------------------------------
//  Die App hat bewusst KEINEN Bundler. Für den nativen iOS-Build braucht
//  Capacitor aber ein sauberes Verzeichnis (`webDir`) mit nur den
//  Auslieferungsdateien – ohne .git, Skripte, Windows-Starter usw.
//  Dieses Skript kopiert genau diese Dateien nach `www/` und stempelt die
//  Build-Zeit als Versionsmarke in die index.html.
//
//  Aufruf:  npm run build   (bzw. node scripts/build-web.mjs)
// =========================================================================
import { cp, rm, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'www');

// Nur diese Einträge gehören ins Auslieferungsverzeichnis:
const INCLUDE = [
  'index.html',
  'manifest.webmanifest',
  'service-worker.js',
  'assets',
];

async function main() {
  // Zielordner frisch aufbauen
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  for (const entry of INCLUDE) {
    const src = join(ROOT, entry);
    if (!existsSync(src)) {
      console.warn(`  ! übersprungen (fehlt): ${entry}`);
      continue;
    }
    await cp(src, join(OUT, entry), { recursive: true });
    console.log(`  ✓ ${entry}`);
  }

  // Build-Marke in die index.html schreiben (hilft beim Cache/Support)
  const stamp = new Date().toISOString();
  const indexPath = join(OUT, 'index.html');
  let html = await readFile(indexPath, 'utf8');
  html = html.replace('</head>', `  <meta name="build-time" content="${stamp}">\n</head>`);
  await writeFile(indexPath, html);

  console.log(`\nWeb-Build fertig → www/  (Stand: ${stamp})`);
  console.log('Weiter mit:  npx cap sync ios');
}

main().catch(err => { console.error(err); process.exit(1); });
