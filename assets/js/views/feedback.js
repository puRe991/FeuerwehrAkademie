/* =========================================================================
   VIEW: Feedback & Rückfragen
   Nimmt Rückfragen, Fehlermeldungen und Verbesserungsvorschläge auf und
   sendet sie – vollständig innerhalb der App, ohne Weiterleitung – direkt
   über die GitHub-API als Issue an das Projekt-Repository.

   Voraussetzung: einmalig ein GitHub-Zugangstoken (Personal Access Token
   mit Issue-Schreibrecht auf dem Repo) in den Einstellungen hinterlegen.
   Das Token wird ausschließlich lokal im Gerät gespeichert (localStorage,
   getrennter Schlüssel) und niemals in Profil-Exporten mitgeführt.
   ========================================================================= */
import { MODULES, MODULE_BY_ID } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { getState, level } from '../state.js';
import { esc, toast, fmtDateTime } from '../utils.js';

/* Ziel-Repository für die Rückmeldungen (GitHub). */
export const FEEDBACK_REPO = 'puRe991/FeuerwehrAkademie';

/* Getrennte localStorage-Schlüssel (nicht Teil des Profil-Exports). */
const TOKEN_KEY = 'fwa:gh-token';
const LOG_KEY   = 'fwa:feedback-log';

const getToken = () => { try { return localStorage.getItem(TOKEN_KEY) || ''; } catch { return ''; } };
const setToken = (t) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch {} };
const getLog   = () => { try { return JSON.parse(localStorage.getItem(LOG_KEY) || '[]'); } catch { return []; } };
const setLog   = (l) => { try { localStorage.setItem(LOG_KEY, JSON.stringify(l.slice(0, 20))); } catch {} };

/* Rückmeldungs-Arten – bestimmen Emoji, GitHub-Labels und Titel-Präfix. */
const CATEGORIES = {
  frage:    { label: 'Rückfrage / Frage', emoji: '❓', labels: ['frage', 'feedback'], prefix: 'Rückfrage' },
  fehler:   { label: 'Fehler / Korrektur', emoji: '🐞', labels: ['fehler', 'feedback'], prefix: 'Fehler' },
  inhalt:   { label: 'Inhaltliches Feedback', emoji: '📚', labels: ['inhalt', 'feedback'], prefix: 'Inhalt' },
  idee:     { label: 'Verbesserungsvorschlag', emoji: '💡', labels: ['idee', 'feedback'], prefix: 'Idee' },
  lob:      { label: 'Lob / Sonstiges', emoji: '💬', labels: ['feedback'], prefix: 'Feedback' },
};

export function renderFeedback(prefillRef = '') {
  const preMod = MODULE_BY_ID[prefillRef];
  const hasToken = !!getToken();

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Feedback & Rückfragen</h1>
      <p class="muted">Eine Frage zum Inhalt, ein entdeckter Fehler oder ein Verbesserungsvorschlag? Deine Rückmeldung wird komplett aus der App heraus – ohne Umweg über eine Webseite – direkt als Ticket an das Projekt gesendet.</p>
    </div>

    <div class="grid" style="grid-template-columns:1.4fr 1fr;align-items:start;gap:22px" id="fbCols">
      <section class="card card--pad">
        <form id="feedbackForm" class="stack" style="--gap:16px">
          <div class="field">
            <label>Art der Rückmeldung</label>
            <div class="flex gap-sm wrap" id="fbCats" role="group" aria-label="Art der Rückmeldung">
              ${Object.entries(CATEGORIES).map(([k, c], i) =>
                `<button type="button" class="chip" data-cat="${k}" aria-pressed="${i === 0}">${c.emoji} ${esc(c.label)}</button>`
              ).join('')}
            </div>
            <input type="hidden" name="category" id="fbCategory" value="frage">
          </div>

          <div class="field">
            <label for="fbSubject">Betreff</label>
            <input class="input" id="fbSubject" name="subject" maxlength="100" required
                   placeholder="Kurz &amp; knapp – worum geht es?" autocomplete="off">
          </div>

          <div class="field">
            <label for="fbModule">Bezug <span class="subtle">(optional)</span></label>
            <select class="select" id="fbModule" name="module">
              <option value="">Allgemein / kein bestimmtes Modul</option>
              ${MODULES.map(m => `<option value="${m.id}" ${preMod && preMod.id === m.id ? 'selected' : ''}>Modul ${esc(m.code)} · ${esc(m.title)}</option>`).join('')}
            </select>
          </div>

          <div class="field">
            <label for="fbMessage">Deine Nachricht</label>
            <textarea class="input" id="fbMessage" name="message" rows="7" required maxlength="4000"
                      placeholder="Beschreibe deine Frage oder deinen Hinweis so genau wie möglich. Bei Fehlern: Wo genau (Modul, Lektion, Prüfungsfrage) ist dir etwas aufgefallen?" style="resize:vertical;line-height:1.5"></textarea>
            <span class="subtle" style="font-size:.8rem"><span id="fbCount">0</span>/4000 Zeichen</span>
          </div>

          <div class="field">
            <label for="fbName">Dein Name / Rückmelde-Adresse <span class="subtle">(optional)</span></label>
            <input class="input" id="fbName" name="reporter" maxlength="80" autocomplete="off"
                   placeholder="z. B. Alex – wenn wir dich bei Rückfragen erreichen dürfen">
          </div>

          <label class="flex gap-sm" style="align-items:flex-start;cursor:pointer;font-size:.9rem">
            <input type="checkbox" id="fbContext" checked style="margin-top:3px;flex:none">
            <span class="muted">Technische Angaben anhängen (App-Version, aktuelle Seite, Level) – hilft bei der Fehlersuche.</span>
          </label>

          <div class="flex gap-sm wrap" style="margin-top:4px">
            <button class="btn btn--primary btn--lg" type="submit" id="fbSubmit">${icon('play')} Rückmeldung absenden</button>
          </div>
          <p class="subtle" style="font-size:.8rem;margin:0" id="fbHint"></p>
        </form>
      </section>

      <aside class="stack">
        <div class="card card--pad">
          <h3 style="margin-bottom:10px">${icon('eye').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Vorschau</h3>
          <p class="subtle" style="font-size:.82rem;margin:0 0 8px">So sieht das Ticket aus, das erstellt wird:</p>
          <div class="stack" style="--gap:6px">
            <b id="fbPrevTitle" style="font-size:.95rem;word-break:break-word">${CATEGORIES.frage.emoji} [Rückfrage] …</b>
            <pre id="fbPrevBody" style="white-space:pre-wrap;word-break:break-word;font-size:.8rem;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:12px;margin:0;max-height:300px;overflow:auto;font-family:var(--mono,monospace)"></pre>
          </div>
        </div>

        <div class="card card--pad">
          <div class="between" style="margin-bottom:10px">
            <h3 style="margin:0">${icon('github').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Verbindung</h3>
            <span class="badge ${hasToken ? 'badge--green' : 'badge--amber'}" id="fbTokenState">${hasToken ? 'Verbunden ✔' : 'Nicht verbunden'}</span>
          </div>
          <p class="subtle" style="font-size:.82rem;margin:0 0 10px">Einmalig ein GitHub-Zugangstoken mit Schreibrecht für Issues auf <code>${esc(FEEDBACK_REPO)}</code>. Es bleibt nur auf diesem Gerät gespeichert.</p>
          <div class="field" style="margin-bottom:10px">
            <input class="input" id="fbToken" type="password" autocomplete="off" spellcheck="false"
                   placeholder="${hasToken ? '•••••••••• (gespeichert)' : 'ghp_… oder github_pat_…'}">
          </div>
          <div class="flex gap-sm wrap">
            <button class="btn btn--outline btn--sm" type="button" id="fbTokenSave">${icon('check')} Token speichern</button>
            <button class="btn btn--ghost btn--sm" type="button" id="fbTokenClear" style="${hasToken ? '' : 'display:none'}">${icon('x')} Entfernen</button>
          </div>
        </div>

        <div class="card card--pad" id="fbLogCard">
          <h3 style="margin-bottom:10px">${icon('chat').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Zuletzt gesendet</h3>
          <div id="fbLog"></div>
        </div>
      </aside>
    </div>
  </div>`;
}

/* ---------- Daten sammeln ---------- */
function collect(root) {
  const cat = root.querySelector('#fbCategory').value;
  const c = CATEGORIES[cat] || CATEGORIES.frage;
  const subject = root.querySelector('#fbSubject').value.trim();
  const modId = root.querySelector('#fbModule').value;
  const mod = MODULE_BY_ID[modId];
  const message = root.querySelector('#fbMessage').value.trim();
  const reporter = root.querySelector('#fbName').value.trim();
  const withContext = root.querySelector('#fbContext').checked;

  const title = `${c.emoji} [${c.prefix}] ${subject || '…'}`;

  const lines = [];
  lines.push(`**Art:** ${c.label}`);
  if (mod) lines.push(`**Bezug:** Modul ${mod.code} · ${mod.title}`);
  if (reporter) lines.push(`**Von:** ${reporter}`);
  lines.push('');
  lines.push('### Nachricht');
  lines.push(message || '_(keine Angabe)_');

  if (withContext) {
    const s = getState();
    lines.push('');
    lines.push('---');
    lines.push('<sub>');
    lines.push(`App: Feuerwehr Online Akademie · Level ${level()} · ${s.xp || 0} XP  `);
    lines.push(`Seite: ${location.hash || '#/'}  `);
    lines.push(`Browser: ${navigator.userAgent}  `);
    lines.push(`Zeit: ${new Date().toISOString()}`);
    lines.push('</sub>');
  }

  return { title, body: lines.join('\n'), labels: c.labels, valid: !!(subject && message) };
}

function updatePreview(root) {
  const data = collect(root);
  const t = root.querySelector('#fbPrevTitle');
  const b = root.querySelector('#fbPrevBody');
  if (t) t.textContent = data.title;
  if (b) b.textContent = data.body;
  return data;
}

function renderLog(root) {
  const log = getLog();
  const box = root.querySelector('#fbLog');
  if (!box) return;
  if (!log.length) {
    box.innerHTML = `<p class="muted" style="font-size:.85rem;margin:0">Noch nichts gesendet. Deine abgeschickten Rückmeldungen erscheinen hier – inklusive Link zum Ticket.</p>`;
    return;
  }
  box.innerHTML = `<div class="stack" style="--gap:8px">${log.map(e => `
    <div class="between" style="gap:10px">
      <span style="min-width:0">
        <b style="display:block;font-size:.88rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(e.title)}</b>
        <span class="subtle" style="font-size:.78rem">${esc(fmtDateTime(e.date))}</span>
      </span>
      ${e.url ? `<a class="btn btn--ghost btn--sm" href="${esc(e.url)}" target="_blank" rel="noopener" style="flex:none">#${e.number} ${icon('arrowr').replace('<svg ', '<svg style="width:14px;height:14px" ')}</a>` : ''}
    </div>`).join('')}</div>`;
}

/* ---------- GitHub-API: Issue direkt anlegen ---------- */
async function createIssue(token, { title, body, labels }) {
  const url = `https://api.github.com/repos/${FEEDBACK_REPO}/issues`;
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  };

  const post = (payload) => fetch(url, { method: 'POST', headers, body: JSON.stringify(payload) });

  let res = await post({ title, body, labels });
  // Labels, die es im Repo (noch) nicht gibt, lösen 422 aus → ohne Labels erneut.
  if (!res.ok && res.status === 422 && labels?.length) {
    res = await post({ title, body });
  }

  if (res.ok) return res.json();

  let msg = `HTTP ${res.status}`;
  if (res.status === 401) msg = 'Token ungültig oder abgelaufen';
  else if (res.status === 403) msg = 'Keine Berechtigung (Rate-Limit oder fehlendes Issue-Schreibrecht)';
  else if (res.status === 404) msg = 'Repository nicht gefunden oder Token ohne Zugriff';
  else { try { const j = await res.json(); if (j?.message) msg = j.message; } catch {} }
  const err = new Error(msg); err.status = res.status; throw err;
}

/* ---------- Interaktion ---------- */
export function bindFeedback(root) {
  const form = root.querySelector('#feedbackForm');
  if (!form) return;

  // Kategorie-Chips
  const chips = root.querySelectorAll('#fbCats .chip');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', 'false'));
    c.setAttribute('aria-pressed', 'true');
    root.querySelector('#fbCategory').value = c.dataset.cat;
    updatePreview(root);
  }));

  // Zeichenzähler + Live-Vorschau
  const msg = root.querySelector('#fbMessage');
  const count = root.querySelector('#fbCount');
  const sync = () => { if (count) count.textContent = String(msg.value.length); updatePreview(root); };
  ['#fbSubject', '#fbMessage', '#fbModule', '#fbName', '#fbContext'].forEach(sel => {
    const elm = root.querySelector(sel);
    elm?.addEventListener('input', sync);
    elm?.addEventListener('change', sync);
  });
  sync();
  renderLog(root);

  // Token verwalten
  const stateBadge = root.querySelector('#fbTokenState');
  const setBadge = (ok) => {
    if (!stateBadge) return;
    stateBadge.textContent = ok ? 'Verbunden ✔' : 'Nicht verbunden';
    stateBadge.classList.toggle('badge--green', ok);
    stateBadge.classList.toggle('badge--amber', !ok);
  };
  const clearBtn = root.querySelector('#fbTokenClear');
  root.querySelector('#fbTokenSave')?.addEventListener('click', () => {
    const field = root.querySelector('#fbToken');
    const val = field.value.trim();
    if (!val) { toast('Bitte ein Token einfügen', 'bolt'); return; }
    setToken(val);
    field.value = '';
    field.placeholder = '•••••••••• (gespeichert)';
    setBadge(true);
    if (clearBtn) clearBtn.style.display = '';
    toast('Token gespeichert – nur auf diesem Gerät', 'ok');
  });
  clearBtn?.addEventListener('click', () => {
    setToken('');
    setBadge(false);
    clearBtn.style.display = 'none';
    const field = root.querySelector('#fbToken');
    if (field) field.placeholder = 'ghp_… oder github_pat_…';
    toast('Token entfernt', 'ok');
  });

  // Absenden → Issue direkt über die API anlegen
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = updatePreview(root);
    const hint = root.querySelector('#fbHint');
    if (!data.valid) { toast('Bitte Betreff und Nachricht ausfüllen', 'bolt'); return; }

    const token = getToken();
    if (!token) {
      toast('Bitte zuerst ein GitHub-Token hinterlegen', 'bolt');
      root.querySelector('#fbToken')?.focus();
      if (hint) hint.textContent = 'Zum Senden wird einmalig ein GitHub-Token benötigt (rechts unter „Verbindung").';
      return;
    }

    const btn = root.querySelector('#fbSubmit');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `${icon('refresh')} Wird gesendet…`;
    if (hint) hint.textContent = '';

    try {
      const issue = await createIssue(token, data);
      const log = getLog();
      log.unshift({ title: data.title, number: issue.number, url: issue.html_url, date: new Date().toISOString() });
      setLog(log);
      renderLog(root);
      // Formular zurücksetzen (Kategorie/Modul bleiben stehen)
      root.querySelector('#fbSubject').value = '';
      root.querySelector('#fbMessage').value = '';
      root.querySelector('#fbName').value = '';
      sync();
      toast(`Gesendet! Ticket #${issue.number} wurde erstellt 🚒`, 'star');
    } catch (err) {
      toast(`Senden fehlgeschlagen: ${err.message}`, 'bolt');
      if (hint) hint.textContent = `Fehler: ${err.message}. Bitte Token/Berechtigung prüfen und erneut versuchen.`;
    } finally {
      btn.disabled = false;
      btn.innerHTML = orig;
    }
  });
}
