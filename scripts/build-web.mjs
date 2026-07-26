/* =========================================================================
   build-web — stellt das Web-Verzeichnis `www/` für Capacitor zusammen.
   Die PWA liegt (für GitHub Pages) im Repo-Root; Capacitor erwartet einen
   eigenen webDir. Dieses Skript kopiert genau die benötigten Dateien dorthin.
   Kein Bundler nötig – reine Kopie der statischen App-Shell.
   ========================================================================= */
import { cp, rm, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const OUT = 'www';
const FILES = ['index.html', 'manifest.webmanifest', 'service-worker.js'];
const DIRS = ['assets'];

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const f of FILES) {
  if (existsSync(f)) await cp(f, `${OUT}/${f}`);
  else console.warn(`⚠️  fehlt: ${f}`);
}
for (const d of DIRS) {
  if (existsSync(d)) await cp(d, `${OUT}/${d}`, { recursive: true });
  else console.warn(`⚠️  fehlt: ${d}/`);
}

console.log(`✅ www/ zusammengestellt (${FILES.length} Dateien + ${DIRS.join(', ')}/)`);
