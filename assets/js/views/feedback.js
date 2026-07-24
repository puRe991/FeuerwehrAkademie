/* =========================================================================
   VIEW: Feedback & Rückfragen
   Nimmt Rückfragen, Fehlermeldungen und Verbesserungsvorschläge auf und
   sendet sie als vorausgefülltes GitHub-Issue an das Projekt-Repository.
   Reine Client-Lösung (kein Server): Es wird ein „New Issue"-Link mit
   Titel, Text und Labels erzeugt und geöffnet. Zusätzlich Kopier-Fallback,
   falls Pop-ups blockiert sind.
   ========================================================================= */
import { MODULES, MODULE_BY_ID } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { getState, level } from '../state.js';
import { esc, toast } from '../utils.js';

/* Ziel-Repository für die Rückmeldungen (GitHub). */
export const FEEDBACK_REPO = 'puRe991/FeuerwehrAkademie';

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

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Feedback & Rückfragen</h1>
      <p class="muted">Eine Frage zum Inhalt, ein entdeckter Fehler oder ein Verbesserungsvorschlag? Schick uns deine Rückmeldung – sie wird als Ticket direkt an das Projekt auf GitHub übermittelt und dort transparent bearbeitet.</p>
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

          <div class="callout" style="border:1px solid var(--border);border-radius:12px;padding:12px 14px;background:var(--surface-2);font-size:.86rem" class="muted">
            ${icon('github').replace('<svg ', '<svg style="width:18px;height:18px;vertical-align:-3px;margin-right:4px" ')}
            <b>So wird gesendet:</b> Beim Absenden öffnet sich GitHub mit einem vorausgefüllten Ticket. Dort einmal auf <em>„Submit new issue"</em> klicken (GitHub-Konto nötig). <b>Alles im Ticket wird öffentlich sichtbar</b> – bitte keine Passwörter oder sensiblen Daten eintragen.
          </div>

          <div class="flex gap-sm wrap" style="margin-top:4px">
            <button class="btn btn--primary btn--lg" type="submit" id="fbSubmit">${icon('github')} An GitHub senden</button>
            <button class="btn btn--outline" type="button" id="fbCopy">${icon('copy')} Text kopieren</button>
          </div>
        </form>
      </section>

      <aside class="stack">
        <div class="card card--pad">
          <h3 style="margin-bottom:10px">${icon('eye').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Vorschau</h3>
          <p class="subtle" style="font-size:.82rem;margin:0 0 8px">So sieht das Ticket aus, das an GitHub übermittelt wird:</p>
          <div class="stack" style="--gap:6px">
            <b id="fbPrevTitle" style="font-size:.95rem;word-break:break-word">${CATEGORIES.frage.emoji} [Rückfrage] …</b>
            <pre id="fbPrevBody" style="white-space:pre-wrap;word-break:break-word;font-size:.8rem;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:12px;margin:0;max-height:340px;overflow:auto;font-family:var(--mono,monospace)"></pre>
          </div>
        </div>
        <div class="card card--pad">
          <h3 style="margin-bottom:8px">${icon('chat').replace('<svg ', '<svg style="width:20px;height:20px;vertical-align:-3px" ')} Gut zu wissen</h3>
          <ul class="muted" style="font-size:.86rem;margin:0;padding-left:18px;line-height:1.6">
            <li>Deine Rückmeldung landet als Ticket im Repository <code>${esc(FEEDBACK_REPO)}</code>.</li>
            <li>Je genauer (Modul, Lektion, Fragen-Nr.), desto schneller die Antwort.</li>
            <li>Fachliche Vorschriften des eigenen Bundeslandes und der eigenen Feuerwehr haben immer Vorrang.</li>
          </ul>
          <a class="btn btn--outline btn--block" style="margin-top:12px" href="https://github.com/${esc(FEEDBACK_REPO)}/issues" target="_blank" rel="noopener">${icon('arrowr')} Offene Rückmeldungen ansehen</a>
        </div>
      </aside>
    </div>
  </div>`;
}

/* ---------- Interaktion ---------- */
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

function issueUrl({ title, body, labels }) {
  const params = new URLSearchParams({ title, body });
  if (labels?.length) params.set('labels', labels.join(','));
  return `https://github.com/${FEEDBACK_REPO}/issues/new?${params.toString()}`;
}

function updatePreview(root) {
  const data = collect(root);
  const t = root.querySelector('#fbPrevTitle');
  const b = root.querySelector('#fbPrevBody');
  if (t) t.textContent = data.title;
  if (b) b.textContent = data.body;
  return data;
}

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

  // Absenden → GitHub-Issue öffnen
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = updatePreview(root);
    if (!data.valid) { toast('Bitte Betreff und Nachricht ausfüllen', 'bolt'); return; }
    const url = issueUrl(data);
    const win = window.open(url, '_blank', 'noopener');
    if (win) {
      toast('GitHub wird geöffnet – dort auf „Submit new issue" klicken 🚒', 'star');
    } else {
      // Pop-up blockiert → Fallback anbieten
      navigator.clipboard?.writeText(url).catch(() => {});
      toast('Pop-up blockiert. Link wurde kopiert – im Browser einfügen.', 'bolt');
    }
  });

  // Text kopieren (Fallback ohne GitHub-Konto)
  root.querySelector('#fbCopy')?.addEventListener('click', async () => {
    const data = updatePreview(root);
    if (!data.valid) { toast('Bitte Betreff und Nachricht ausfüllen', 'bolt'); return; }
    const text = `${data.title}\n\n${data.body}`;
    try {
      await navigator.clipboard.writeText(text);
      toast('Rückmeldung in die Zwischenablage kopiert', 'ok');
    } catch {
      toast('Kopieren nicht möglich – bitte Text manuell markieren', 'bolt');
    }
  });
}
