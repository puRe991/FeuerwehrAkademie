/* =========================================================================
   VIEW: Einsatzkompass — Taschenkarten für Führungskräfte
   ------------------------------------------------------------------------
   Übersicht (filter-/durchsuchbar) und Detail-Taschenkarte mit abhakbarer
   Checkliste, Zurücksetzen und Druckfunktion (echte Karte für die Tasche).
   Der Abhak-Zustand ist bewusst flüchtig (pro Einsatz frisch) — beim
   erneuten Öffnen startet die Karte leer.
   ========================================================================= */
import { EINSATZKOMPASS, KOMPASS_BY_ID, KOMPASS_CATS } from '../data/einsatzkompass.js';
import { MODULE_BY_ID, MODULES } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { esc } from '../utils.js';

function shadeHex(hex, p) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + p));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + p));
  const b = Math.max(0, Math.min(255, (n & 255) + p));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* Modul-Auflösung: refs sind Modul-Codes (A–Z) */
function moduleByCode(code) {
  return MODULES.find(m => m.code === code) || MODULE_BY_ID[code] || null;
}

/* ============================ ÜBERSICHT ============================ */
export function renderEinsatzkompass(query = '') {
  const q = (query || '').toLowerCase().trim();
  const cats = Object.entries(KOMPASS_CATS);

  const cardMatches = k =>
    !q ||
    k.title.toLowerCase().includes(q) ||
    k.subtitle.toLowerCase().includes(q) ||
    k.alarm.some(a => a.toLowerCase().includes(q)) ||
    (k.merker || []).some(m => (m.kurz + m.titel + m.text).toLowerCase().includes(q));

  const filtered = EINSATZKOMPASS.filter(cardMatches);

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>${icon('compass').replace('<svg ','<svg style="width:26px;height:26px;vertical-align:-5px" ')} Einsatzkompass</h1>
      <p class="muted">Taschenkarten für Führungskräfte: kompakte Checklisten für Lagen, die selten vorkommen oder unter Stress nicht lückenlos abrufbar sind. In der Ausbildung gelernt – im Einsatz griffbereit. ${EINSATZKOMPASS.length} Karten.</p>
    </div>

    <div class="callout callout--tip" style="margin-bottom:18px">
      <div class="callout__t">${icon('star').replace('<svg ','<svg style="width:16px;height:16px" ')} So nutzt du den Kompass</div>
      <p style="font-size:.9rem;margin:0">Wähle die passende Karte zur Lage, hake die Punkte an der Einsatzstelle ab und <b>drucke</b> sie bei Bedarf als echte Taschenkarte aus. Die Karten stützen dein Wissen – sie ersetzen keine Ausbildung und keinen eigenen Lagecheck.</p>
    </div>

    <div class="card card--pad" style="margin-bottom:18px">
      <div class="searchbar" style="max-width:none;position:relative">
        ${icon('search')}
        <input class="input" id="kompassSearch" value="${esc(query)}" placeholder="Karte suchen (z. B. Gefahrgut, GAMS, MANV, Türöffnung)…" style="padding-left:40px" autocomplete="off">
      </div>
      <div class="flex gap-sm wrap" id="kompassFilter" style="margin-top:12px">
        <button class="chip" data-filter="all" aria-pressed="true">Alle</button>
        ${cats.map(([id, c]) => `<button class="chip" data-filter="${id}" aria-pressed="false"><span style="width:9px;height:9px;border-radius:50%;background:${c.color};display:inline-block;margin-right:6px"></span>${esc(c.label)}</button>`).join('')}
      </div>
    </div>

    ${filtered.length ? `<div class="module-grid" id="kompassGrid">
      ${filtered.map(kompassCard).join('')}
    </div>` : `<div class="empty">${icon('search')}<p>Keine Karte gefunden für „${esc(query)}".</p></div>`}
  </div>`;
}

function kompassCard(k) {
  const c = KOMPASS_CATS[k.cat] || { label: k.cat, color: k.color };
  const steps = (k.sections || []).reduce((n, s) => n + s.items.length, 0);
  return `<a class="card card--interactive mcard" data-cat="${k.cat}" href="#/einsatzkompass/${k.id}" style="text-decoration:none;color:inherit">
    <div class="mcard__banner" style="background:linear-gradient(135deg, ${k.color}, ${shadeHex(k.color,-30)});height:78px">
      ${icon(k.icon, 'mcard__ico')}
      <span class="mcard__code" style="opacity:.45">${icon('compass').replace('<svg ','<svg style="width:34px;height:34px" ')}</span>
    </div>
    <div class="mcard__body">
      <div class="between">
        <span class="mcard__cat">${esc(c.label)}</span>
        ${(k.merker && k.merker[0]) ? `<span class="badge" style="background:${k.color}22;color:${k.color};border:none;flex:none">${esc(k.merker[0].kurz)}</span>` : ''}
      </div>
      <h3>${esc(k.title)}</h3>
      <p class="mcard__desc">${esc(k.subtitle)}</p>
      <div class="mcard__meta">
        <span>${icon('check').replace('<svg ','<svg style="width:14px;height:14px" ')} ${steps} Punkte</span>
        <span>${icon('bolt').replace('<svg ','<svg style="width:14px;height:14px" ')} ${k.alarm.length} Anlässe</span>
      </div>
      <span class="btn btn--outline btn--block mcard__foot">${icon('arrowr')} Karte öffnen</span>
    </div>
  </a>`;
}

export function bindEinsatzkompass(root) {
  const input = root.querySelector('#kompassSearch');
  if (input) {
    let t;
    input.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        location.hash = input.value.trim() ? `#/einsatzkompass/suche/${encodeURIComponent(input.value.trim())}` : '#/einsatzkompass';
      }, 300);
    });
    input.focus(); const v = input.value; input.value = ''; input.value = v;
  }

  const chips = root.querySelectorAll('#kompassFilter .chip');
  const grid = root.querySelector('#kompassGrid');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', 'false'));
    c.setAttribute('aria-pressed', 'true');
    const f = c.dataset.filter;
    grid?.querySelectorAll('.mcard').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
    });
  }));
}

/* ============================ DETAIL / TASCHENKARTE ============================ */
export function renderEinsatzkarte(id) {
  const k = KOMPASS_BY_ID[id];
  if (!k) {
    return `<div class="view fade-up"><div class="empty">${icon('compass')}<p>Diese Karte gibt es nicht.</p><a class="btn btn--primary" href="#/einsatzkompass" style="margin-top:12px">Zum Einsatzkompass</a></div></div>`;
  }
  const c = KOMPASS_CATS[k.cat] || { label: k.cat, color: k.color };
  const totalSteps = (k.sections || []).reduce((n, s) => n + s.items.length, 0);

  return `
  <div class="view fade-up ek-print">
    <div class="ek-toolbar no-print">
      <a class="btn btn--sm btn--ghost" href="#/einsatzkompass">${icon('arrowl')} Alle Karten</a>
      <div class="flex gap-sm">
        <button class="btn btn--sm btn--outline" id="ekReset">${icon('refresh')} Zurücksetzen</button>
        <button class="btn btn--sm btn--primary" id="ekPrint">${icon('download')} Drucken</button>
      </div>
    </div>

    <article class="card ek-card" style="--ek:${k.color}">
      <header class="ek-head" style="background:linear-gradient(135deg, ${k.color}, ${shadeHex(k.color,-30)})">
        <div class="ek-head__ico">${icon(k.icon)}</div>
        <div style="min-width:0">
          <span class="ek-head__cat">${icon('compass').replace('<svg ','<svg style="width:14px;height:14px;vertical-align:-2px" ')} Einsatzkompass · ${esc(c.label)}</span>
          <h1 class="ek-head__title">${esc(k.title)}</h1>
          <p class="ek-head__sub">${esc(k.subtitle)}</p>
        </div>
      </header>

      <div class="ek-body">
        <section class="ek-alarm">
          <b>${icon('bolt').replace('<svg ','<svg style="width:15px;height:15px;vertical-align:-2px" ')} Wann diese Karte?</b>
          <div class="flex gap-sm wrap" style="margin-top:8px">
            ${k.alarm.map(a => `<span class="badge" style="background:${k.color}18;color:${k.color};border:none">${esc(a)}</span>`).join('')}
          </div>
        </section>

        ${(k.merker && k.merker.length) ? `<section class="ek-merker">
          ${k.merker.map(m => `<div class="ek-merker__item" style="border-color:${k.color}">
            <span class="ek-merker__kurz" style="background:${k.color}">${esc(m.kurz)}</span>
            <div><b>${esc(m.titel)}</b><p>${esc(m.text)}</p></div>
          </div>`).join('')}
        </section>` : ''}

        <div class="ek-sections">
          ${k.sections.map((s, si) => `<section class="ek-section">
            <h2 class="ek-section__t">${esc(s.titel)}</h2>
            <ul class="ek-checklist">
              ${s.items.map((it, ii) => {
                const cid = `ek-${k.id}-${si}-${ii}`;
                return `<li class="ek-check">
                  <input type="checkbox" id="${cid}" class="ek-check__box">
                  <label for="${cid}">${esc(it)}</label>
                </li>`;
              }).join('')}
            </ul>
          </section>`).join('')}
        </div>

        ${(k.warnung && k.warnung.length) ? `<section class="callout callout--danger" style="margin-top:4px">
          <div class="callout__t">${icon('hazmat').replace('<svg ','<svg style="width:16px;height:16px" ')} Rote Linien</div>
          <ul style="margin:6px 0 0;padding-left:18px">${k.warnung.map(w => `<li style="font-size:.9rem">${esc(w)}</li>`).join('')}</ul>
        </section>` : ''}

        ${k.funk ? `<section class="callout callout--info" style="margin-top:14px">
          <div class="callout__t">${icon('radio').replace('<svg ','<svg style="width:16px;height:16px" ')} Erste Lagemeldung</div>
          <p style="font-size:.9rem;margin:0">${esc(k.funk)}</p>
        </section>` : ''}

        ${(k.refs && k.refs.length) ? `<footer class="ek-refs no-print">
          <span class="subtle" style="font-size:.82rem;font-weight:600">Vertiefen in den Modulen:</span>
          <div class="flex gap-sm wrap" style="margin-top:8px">
            ${k.refs.map(code => {
              const m = moduleByCode(code);
              return m ? `<a class="chip" href="#/modul/${m.id}">Modul ${m.code} · ${esc(m.title)}</a>` : '';
            }).join('')}
          </div>
        </footer>` : ''}
      </div>

      <div class="ek-foot no-print between">
        <span class="subtle" style="font-size:.82rem">${totalSteps} Prüfpunkte · Kompass stützt, ersetzt aber nie den eigenen Lagecheck.</span>
        <span class="subtle" style="font-size:.82rem" id="ekProgress">0 / ${totalSteps} abgehakt</span>
      </div>
    </article>
  </div>`;
}

export function bindEinsatzkarte(root) {
  const boxes = [...root.querySelectorAll('.ek-check__box')];
  const progress = root.querySelector('#ekProgress');
  const total = boxes.length;

  const update = () => {
    const done = boxes.filter(b => b.checked).length;
    if (progress) progress.textContent = `${done} / ${total} abgehakt`;
  };
  boxes.forEach(b => {
    b.addEventListener('change', () => {
      b.closest('.ek-check')?.classList.toggle('done', b.checked);
      update();
    });
  });

  root.querySelector('#ekReset')?.addEventListener('click', () => {
    boxes.forEach(b => { b.checked = false; b.closest('.ek-check')?.classList.remove('done'); });
    update();
  });

  root.querySelector('#ekPrint')?.addEventListener('click', () => window.print());
}
