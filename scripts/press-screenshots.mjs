import pw from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pw;
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:8123/index.html';
const OUT = '/home/user/FeuerwehrAkademie/assets/press/shots';
mkdirSync(OUT, { recursive: true });

// Realistisch geseedeter Lernstand, damit Screenshots „lebendig" wirken
const seed = {
  profile: {
    name: 'Alex Brand', role: 'Truppführer', level: 3,
    unit: 'FF Musterstadt', goal: 3,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 40,
  },
  settings: { theme: 'auto' },
  progress: {
    'a-rechtsgrundlagen': { lessons: { a1: true, a2: true }, startedAt: Date.now() - 3e9 },
    'b-brennen-loeschen': { lessons: { b1: true, b2: true, b3: true }, startedAt: Date.now() - 3e9 },
    'e-loescheinsatz': { lessons: { e1: true }, startedAt: Date.now() - 2e9 },
    'f-atemschutz': { lessons: { f1: true, f2: true }, startedAt: Date.now() - 1e9 },
    'j-erste-hilfe': { lessons: { j1: true }, startedAt: Date.now() - 1e9 },
  },
  examResults: {
    'b-brennen-loeschen': [{ score: 92, passed: true, date: Date.now() - 2e8, correct: 11, total: 12, answers: {} }],
    'f-atemschutz': [{ score: 85, passed: true, date: Date.now() - 1e8, correct: 17, total: 20, answers: {} }],
    'a-rechtsgrundlagen': [{ score: 78, passed: true, date: Date.now() - 3e8, correct: 7, total: 9, answers: {} }],
  },
  planspielResults: {},
  bookmarks: ['f-atemschutz', 'e-loescheinsatz'],
  activity: [],
  flashcards: {},
  mistakes: {},
  knotsLearned: ['mastwurf-gestochen', 'halbmastwurf'],
  videosWatched: [],
  dailyQuiz: { day: null, correct: false },
  streak: { count: 12, lastDay: new Date().toISOString().slice(0, 10) },
  xp: 1840,
};

const shots = [
  ['dashboard', '#/'],
  ['module', '#/module'],
  ['modul-detail', '#/modul/b-brennen-loeschen'],
  ['lektion', '#/lektion/b-brennen-loeschen/b1'],
  ['pruefungen', '#/pruefungen'],
  ['planspiele', '#/planspiele'],
  ['einsatzkompass', '#/einsatzkompass'],
  ['knoten', '#/knoten'],
  ['glossar', '#/glossar'],
  ['karteikarten', '#/karteikarten'],
  ['lernvideos', '#/lernvideos'],
  ['profil', '#/profil'],
  ['ausbilder', '#/ausbilder'],
  ['drohnen', '#/drohnen'],
  ['drohnen-lektion', '#/drohnenlektion/dr-grundlagen/dr-g1'],
  ['lesebeispiele', '#/lesebeispiele'],
  ['lesebeispiel-detail', '#/lesebeispiel/lb-2026-homburg'],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1360, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
});
const page = await ctx.newPage();

// State vor App-Start in localStorage legen
await page.addInitScript((s) => {
  localStorage.setItem('fwa:v1', JSON.stringify(s));
}, seed);

for (const [name, hash] of shots) {
  await page.goto(BASE + hash, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  // Schaubilder / Diagramme laden lassen
  try { await page.waitForSelector('main', { timeout: 4000 }); } catch {}
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
  console.log('✓', name, '→', hash);
}

// Ein paar volle Seiten für die PDF (Modul-Übersicht komplett)
await page.goto(BASE + '#/module', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/module-full.png`, fullPage: true });
console.log('✓ module-full (fullPage)');

// Dark-Mode-Dashboard als Design-Highlight
const dctx = await browser.newContext({
  viewport: { width: 1360, height: 900 }, deviceScaleFactor: 2, colorScheme: 'dark',
});
const dpage = await dctx.newPage();
await dpage.addInitScript((s) => { localStorage.setItem('fwa:v1', JSON.stringify(s)); },
  { ...seed, settings: { theme: 'dark' } });
await dpage.goto(BASE + '#/', { waitUntil: 'networkidle' });
await dpage.waitForTimeout(1000);
await dpage.screenshot({ path: `${OUT}/dashboard-dark.png`, fullPage: false });
console.log('✓ dashboard-dark');

await browser.close();
console.log('Fertig.');
