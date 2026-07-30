/* =========================================================================
   Bündelt die statische PWA in ein sauberes www/-Verzeichnis.
   Capacitor kopiert genau diesen Ordner in die Android-App (webDir: "www").
   So landen nur die App-Dateien in der APK – kein .git, node_modules etc.
   ========================================================================= */
import { rm, mkdir, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'www');

// Diese Dateien/Ordner bilden die lauffähige PWA und wandern unverändert in die App.
const ENTRIES = ['index.html', 'manifest.webmanifest', 'service-worker.js', 'assets'];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const entry of ENTRIES) {
  const src = path.join(root, entry);
  if (!existsSync(src)) {
    console.error(`✗ Erwartete Datei/Ordner fehlt: ${entry}`);
    process.exit(1);
  }
  await cp(src, path.join(out, entry), { recursive: true });
}

console.log(`✓ www/ erstellt: ${ENTRIES.join(', ')}`);
