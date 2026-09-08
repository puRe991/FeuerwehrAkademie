/* =========================================================================
   Service Worker — Offline-Fähigkeit (App-Shell + Assets cachen)
   Strategie: Cache-first für App-Assets, Network-first-Fallback.
   Für Feuerwehren im Einsatz wertvoll: Lerninhalte auch ohne Netz verfügbar.
   ========================================================================= */
const CACHE = 'fwa-v30';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/fonts.css',
  './assets/fonts/Inter-400-latin.woff2',
  './assets/fonts/Inter-400-latin-ext.woff2',
  './assets/fonts/JetBrainsMono-500-latin.woff2',
  './assets/fonts/JetBrainsMono-500-latin-ext.woff2',
  './assets/css/design-system.css',
  './assets/css/app.css',
  './assets/js/app.js',
  './assets/js/state.js',
  './assets/js/utils.js',
  './assets/js/data/icons.js',
  './assets/js/data/blocks.js',
  './assets/js/data/diagrams.js',
  './assets/js/data/pruefungssets.js',
  './assets/js/data/curriculum.js',
  './assets/js/data/curriculum-extra.js',
  './assets/js/data/curriculum-extra2.js',
  './assets/js/data/curriculum-deep.js',
  './assets/js/data/modules-extra.js',
  './assets/js/data/exams.js',
  './assets/js/data/exams-extra.js',
  './assets/js/data/exams-extra2.js',
  './assets/js/data/exams-extra3.js',
  './assets/js/data/exams-extra4.js',
  './assets/js/data/exams-extra5.js',
  './assets/js/data/exams-extra6.js',
  './assets/js/data/planspiele.js',
  './assets/js/data/planspiele-extra.js',
  './assets/js/data/glossary.js',
  './assets/js/data/flashcards.js',
  './assets/js/data/einsatzkompass.js',
  './assets/js/data/module-sources.js',
  './assets/js/data/search-index.js',
  './assets/js/data/knoten.js',
  './assets/js/data/lernvideos.js',
  './assets/js/data/lesebeispiele.js',
  './assets/js/views/dashboard.js',
  './assets/js/views/tagesquiz.js',
  './assets/js/views/modules.js',
  './assets/js/views/lesson.js',
  './assets/js/views/exam.js',
  './assets/js/views/simulator.js',
  './assets/js/views/wiederholung.js',
  './assets/js/views/knoten.js',
  './assets/js/views/planspiel.js',
  './assets/js/views/scene-art.js',
  './assets/js/views/profile.js',
  './assets/js/views/misc.js',
  './assets/js/views/tools.js',
  './assets/js/views/instructor.js',
  './assets/js/views/einsatzkompass.js',
  './assets/js/views/lernvideos.js',
  './assets/js/views/lesebeispiele.js',
  './assets/js/data/drohnen.js',
  './assets/js/data/drohnen-blocks.js',
  './assets/js/data/drohnen-diagrams.js',
  './assets/js/data/drohnen-bilder.js',
  './assets/js/data/drohnen-modules-1.js',
  './assets/js/data/drohnen-modules-2.js',
  './assets/js/data/drohnen-modules-3.js',
  './assets/js/data/drohnen-modules-4.js',
  './assets/js/data/drohnen-modules-5.js',
  './assets/js/views/drohnen.js',
  './assets/img/drohnen/bergrettung-uas.jpg',
  './assets/img/drohnen/bos-drohne-nutzlast.jpg',
  './assets/img/drohnen/bos-drohne-start.jpg',
  './assets/img/drohnen/einsatzstelle-drohne.jpg',
  './assets/img/drohnen/kleindrohne.jpg',
  './assets/img/drohnen/kopter-komponenten.jpg',
  './assets/img/drohnen/lipo-aufgeblaeht.jpg',
  './assets/img/drohnen/tethered-uas.jpg',
  './assets/img/drohnen/vegetationsbrand-start.jpg',
  './assets/img/drohnen/waermebild-hund.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Nur eigene Origin cachen (Fonts etc. über Netz)
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
