/* =========================================================================
   VIEW: Lesebeispiele — „Aus der Praxis lernen".

   Übersicht → Jahres-Filter (Route) + Kategorie-Filter (clientseitig) und
               ein Karten-Grid realer Atemschutz-Unfälle.
   Detail    → Kurzfassung, Hergang, Verletzungen, „Lehren daraus", Verweise
               auf verwandte Module und ein Deep-Link auf den Originalbericht.

   Hinweis: Es werden ausschließlich eigene, knappe Zusammenfassungen gezeigt.
   Die ausführliche, quellengeprüfte Darstellung liegt beim Betreiber der
   verlinkten Seite – deshalb der externe Quellen-Button auf jeder Karte.
   ========================================================================= */
import { LESEBEISPIELE, LESEBEISPIEL_BY_ID, LESEBEISPIEL_JAHRE, UNFALL_CATS, beispieleByCat } from '../data/lesebeispiele.js';
import { MODULE_BY_ID } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { isReportRead, toggleReportRead } from '../state.js';
import { esc, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

/* Kleines farbiges Kategorie-Emblem für die Kartenkopfzeile. */
function catBadge(cat) {
  return `<span class="lb-badge" style="--c:${cat.color}">${icon(cat.icon)}</span>`;
}

/* ------------------------------ Übersicht ------------------------------ */
export function renderLesebeispielList(jahr = 'all') {
  const active = jahr === 'all' ? 'all' : Number(jahr);
  const list = active === 'all' ? LESEBEISPIELE : LESEBEISPIELE.filter(b => b.jahr === active);
  const sorted = [...list].sort((a, b) => b.datum.localeCompare(a.datum));
  const read = list.filter(b => isReportRead(b.id)).length;
  const byCat = beispieleByCat();
  const catsInList = Object.entries(UNFALL_CATS).filter(([id]) =>
    sorted.some(b => b.cat === id));

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>Aus der Praxis lernen</h1>
      <p class="muted">Reale Atemschutz-Unfälle als warnende Fallbeispiele zum Lesen und Nachbereiten. Jede Karte fasst den Hergang knapp zusammen und leitet daraus konkrete Lehren für den eigenen Dienst ab.</p>
      <div class="progress" style="max-width:340px;margin-top:8px"><i style="width:${list.length ? Math.round(read / list.length * 100) : 0}%"></i></div>
      <span class="subtle" style="font-size:.85rem">${read}/${list.length} Beispiele als gelesen markiert</span>
    </div>

    <div class="callout" role="note" style="margin-bottom:16px">
      <div class="callout__t">${icon('shield').replace('<svg ', '<svg style="width:18px;height:18px;flex:none" ')} Zum Umgang mit diesen Berichten</div>
      <p style="margin:0;font-size:.9rem">Die Zusammenfassungen sind eigenständig formuliert und bewusst knapp. Sie ersetzen keine Unfalluntersuchung. Die ausführliche, quellengeprüfte Darstellung findest du über den Quellen-Link auf jeder Karte bei <b>atemschutzunfaelle.de</b>.</p>
    </div>

    <div class="flex gap-sm wrap" style="margin-bottom:10px" role="group" aria-label="Jahres-Filter">
      <a class="chip" href="#/lesebeispiele" aria-pressed="${active === 'all'}">Alle Jahre <span class="subtle">${LESEBEISPIELE.length}</span></a>
      ${LESEBEISPIEL_JAHRE.map(y =>
        `<a class="chip" href="#/lesebeispiele/${y}" aria-pressed="${active === y}">${y} <span class="subtle">${LESEBEISPIELE.filter(b => b.jahr === y).length}</span></a>`
      ).join('')}
    </div>

    <div class="flex gap-sm wrap" style="margin-bottom:16px" id="lbCatFilter" role="group" aria-label="Kategorie-Filter">
      <button class="chip" data-filter="all" aria-pressed="true">Alle Arten</button>
      ${catsInList.map(([id, c]) =>
        `<button class="chip" data-filter="${id}" aria-pressed="false"><span style="width:9px;height:9px;border-radius:50%;background:${c.color}"></span>${esc(c.label)} <span class="subtle">${byCat[id].filter(b => sorted.includes(b)).length}</span></button>`
      ).join('')}
    </div>

    <div class="module-grid" id="lbGrid">
      ${sorted.map(b => {
        const cat = UNFALL_CATS[b.cat];
        const done = isReportRead(b.id);
        return `<a class="card card--interactive card--pad stack" data-cat="${b.cat}" style="--gap:10px;text-decoration:none;color:inherit;border-top:3px solid ${cat.color}" href="#/lesebeispiel/${b.id}">
          <div class="between" style="align-items:center">
            <span class="flex gap-sm" style="align-items:center">${catBadge(cat)}<span class="mcard__cat" style="color:${cat.color}">${esc(cat.label)}</span></span>
            ${done ? `<span class="badge badge--green">${icon('check').replace('<svg ', '<svg style="width:13px;height:13px" ')} gelesen</span>` : ''}
          </div>
          <b style="line-height:1.3">${esc(b.titel)}</b>
          <span class="subtle" style="font-size:.82rem">${icon('clock').replace('<svg ', '<svg style="width:13px;height:13px;vertical-align:-2px" ')} ${esc(b.datumText)} · ${esc(b.ort)} (${esc(b.land)})</span>
          <p class="mcard__desc" style="margin:0">${esc(b.kurz)}</p>
        </a>`;
      }).join('')}
    </div>

    ${sorted.length === 0 ? `<p class="muted" style="margin-top:20px">Für diese Auswahl sind noch keine Beispiele hinterlegt.</p>` : ''}
  </div>`;
}

/* ------------------------------ Detail ------------------------------ */
export function renderLesebeispielDetail(id) {
  const b = LESEBEISPIEL_BY_ID[id];
  if (!b) return notFound();
  const cat = UNFALL_CATS[b.cat];
  const done = isReportRead(id);
  const related = LESEBEISPIELE.filter(x => x.cat === b.cat && x.id !== id).slice(0, 3);
  const modules = (b.module || []).map(mid => MODULE_BY_ID[mid]).filter(Boolean);

  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/lesebeispiele">Aus der Praxis lernen</a><span class="sep">/</span><a href="#/lesebeispiele/${b.jahr}">${b.jahr}</a><span class="sep">/</span><span>${esc(b.ort)}</span></div>

    <div class="exam-shell">
      <div class="card card--pad" style="border-top:3px solid ${cat.color}">
        <div class="between wrap" style="gap:10px;align-items:flex-start">
          <div>
            <span class="flex gap-sm" style="align-items:center">${catBadge(cat)}<span class="mcard__cat" style="color:${cat.color}">${esc(cat.label)}</span></span>
            <h1 style="margin:.2em 0 0">${esc(b.titel)}</h1>
            <div class="subtle" style="font-size:.86rem;margin-top:4px">${icon('clock').replace('<svg ', '<svg style="width:14px;height:14px;vertical-align:-2px" ')} ${esc(b.datumText)} · ${esc(b.ort)} (${esc(b.land)})</div>
          </div>
          <button class="btn ${done ? 'btn--outline' : 'btn--primary'} btn--sm" id="lbRead">${icon('check')} ${done ? 'Als ungelesen markieren' : 'Als gelesen markieren'}</button>
        </div>
        <p style="margin:.8em 0 0;font-weight:600">${esc(b.kurz)}</p>
      </div>

      <div class="card card--pad" style="margin-top:16px">
        <h2 style="font-size:1.05rem;margin:0 0 6px">Hergang</h2>
        <p class="muted" style="margin:0">${esc(b.hergang)}</p>
        <p class="subtle" style="margin:.9em 0 0;font-size:.88rem">${icon('heart').replace('<svg ', '<svg style="width:14px;height:14px;vertical-align:-2px" ')} <b>Verletzungen:</b> ${esc(b.verletzung)}</p>
      </div>

      <div class="card card--pad" style="margin-top:16px;border-left:4px solid ${cat.color}">
        <h2 style="font-size:1.05rem;margin:0 0 10px">${icon('flag').replace('<svg ', '<svg style="width:17px;height:17px;vertical-align:-3px" ')} Lehren daraus</h2>
        <ul class="lb-lehren">
          ${b.lehren.map(l => `<li>${esc(l)}</li>`).join('')}
        </ul>
      </div>

      ${modules.length ? `
      <div style="margin-top:16px">
        <h2 style="font-size:1.05rem;margin:0 0 10px">Passend dazu vertiefen</h2>
        <div class="flex gap-sm wrap">
          ${modules.map(m => `<a class="chip" href="#/modul/${m.id}">${icon('book').replace('<svg ', '<svg style="width:14px;height:14px" ')} ${esc(m.code)} · ${esc(m.title)}</a>`).join('')}
        </div>
      </div>` : ''}

      <div class="card card--pad" style="margin-top:16px">
        <div class="between wrap" style="gap:10px;align-items:center">
          <span class="subtle" style="font-size:.88rem">Ausführlicher Originalbericht (mit Quellen und Fotos):</span>
          <a class="btn btn--outline btn--sm" href="${esc(b.quelleUrl)}" target="_blank" rel="noopener noreferrer">${icon('eye')} Bei ${esc(b.quelleName)} lesen</a>
        </div>
      </div>

      ${related.length ? `
      <div style="margin-top:20px">
        <h2 style="font-size:1.05rem;margin:0 0 10px">Weitere Fälle: „${esc(cat.label)}"</h2>
        <div class="module-grid">
          ${related.map(r => `<a class="card card--interactive card--pad stack" style="--gap:6px;text-decoration:none;color:inherit;border-top:3px solid ${cat.color}" href="#/lesebeispiel/${r.id}">
            <b style="line-height:1.3">${esc(r.titel)}</b>
            <span class="subtle" style="font-size:.8rem">${esc(r.datumText)} · ${esc(r.ort)}</span>
          </a>`).join('')}
        </div>
      </div>` : ''}

      <div class="flex gap-sm wrap" style="margin-top:16px;justify-content:center">
        <a class="btn btn--ghost btn--sm" href="#/lesebeispiele">${icon('arrowl')} Alle Beispiele</a>
      </div>
    </div>
  </div>`;
}

/* ------------------------------ Bindings ------------------------------ */
export function bindLesebeispiele(root, rerender) {
  // Kategorie-Filter (Übersicht): Karten clientseitig ein-/ausblenden.
  const filter = root.querySelector('#lbCatFilter');
  const grid = root.querySelector('#lbGrid');
  if (filter && grid) {
    filter.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
      filter.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      const f = chip.dataset.filter;
      grid.querySelectorAll('.card').forEach(card => {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
      });
    }));
  }

  // „Als gelesen markieren"
  root.querySelector('#lbRead')?.addEventListener('click', () => {
    const id = location.hash.split('/')[2];
    if (!id) return;
    const wasRead = isReportRead(id);
    toggleReportRead(id);
    if (!wasRead) { confetti(); toast('Beispiel als gelesen markiert · +10 XP', 'star'); }
    rerender();
  });
}
