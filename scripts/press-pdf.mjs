import pw from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pw;

const URL = 'http://localhost:8123/assets/press/pressemappe.html';
const OUT = '/home/user/FeuerwehrAkademie/assets/press/Feuerwehr-Online-Akademie-Pressemappe.pdf';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.waitForTimeout(800);
await page.pdf({
  path: OUT,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log('PDF erstellt →', OUT);
