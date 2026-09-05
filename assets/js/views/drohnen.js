/* =========================================================================
   VIEW: BOS-Drohnen — eigener Ausbildungsbereich

   Übersicht  → Lernpfad in vier Stufen, Kategoriefilter, Modulkarten
   Modul      → Lernziele, Lektionsliste, Fortschritt
   Lektion    → Reader mit erweitertem Blockrenderer (Selbsttest, Foto mit
                Lizenznachweis, Checkliste, Funkbeispiel, Rechtsnorm,
                Fallbeispiel, Zeitleiste, Click-to-Load-Video)
   Bildnachweis → Übersicht aller verwendeten Fotos mit Urheber und Lizenz

   Fortschritt und XP laufen über dieselben Funktionen wie die Feuerwehr-
   Module (state.completeLesson), die Modul-IDs sind eindeutig.
   ========================================================================= */
import {
  DROHNEN_MODULE, DROHNEN_BY_ID, DROHNEN_KATEGORIEN, DROHNEN_STUFEN,
  DROHNEN_LEKTIONEN, DROHNEN_MINUTEN, DROHNEN_FRAGEN,
} from '../data/drohnen.js';
import { DROHNEN_BILDER, BILDNACHWEIS } from '../data/drohnen-bilder.js';
import { drohnenDiagram } from '../data/drohnen-diagrams.js';
import { icon } from '../data/icons.js';
import { getState, completeLesson, moduleProgress, logActivity } from '../state.js';
import { esc, fmtDuration, toast, confetti } from '../utils.js';
import { notFound } from './modules.js';

const CALLOUT_ICON = { info: 'eye', warn: 'bolt', danger: 'hazmat', ok: 'check', tip: 'star' };
const CALLOUT_LABEL = { info: 'Wissen', warn: 'Achtung', danger: 'Gefahr', ok: 'Merke', tip: 'Praxistipp' };
const sm = (name, px = 16) => icon(name).replace('<svg ', `<svg style="width:${px}px;height:${px}px" `);

/* --------------------------------------------------------------- Blöcke */
function block(b, ctx) {
  switch (b.t) {
    /* Blöcke aus blocks.js – identisch zum Feuerwehr-Reader */
    case 'h2': return `<h2 id="${b.id}">${esc(b.text)}</h2>`;
    case 'h3': return `<h3>${esc(b.text)}</h3>`;
    case 'p':  return `<p>${b.html}</p>`;
    case 'list': return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'ol':   return `<ol>${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'keyfacts': return `<ul class="keyfacts">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'callout':
      return `<div class="callout callout--${b.kind === 'info' ? '' : b.kind}">
        <div class="callout__t">${sm(CALLOUT_ICON[b.kind] || 'eye', 18)} ${esc(b.title || CALLOUT_LABEL[b.kind] || '')}</div>
        <p>${b.text}</p></div>`;
    case 'def':
      return `<dl class="def"><dt>${esc(b.term)}</dt><dd style="margin:0">${b.text}</dd></dl>`;
    case 'steps':
      return `<ol class="steps">${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'mnemonic':
      return `<div class="mnemonic">${b.letters.map(x => `<b title="${esc(x.w)}">${esc(x.l)}</b>`).join('')}</div><p class="muted" style="font-size:.95rem">${b.text}</p>`;
    case 'table':
      return `<div class="table-wrap"><table class="data"><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

    /* Drohnenspezifische Blöcke */
    case 'figd':
      return `<figure class="lesson-fig">${drohnenDiagram(b.key)}${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`;

    case 'img': {
      const im = DROHNEN_BILDER[b.key];
      if (!im) return '';
      return `<figure class="lesson-fig dr-photo">
        <img src="./${im.file}" alt="${esc(im.alt)}" loading="lazy" decoding="async"
             style="width:100%;height:auto;border-radius:var(--r-sm);display:block" onerror="this.closest('figure').style.display='none'">
        ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}
        <figcaption class="dr-credit">Foto: ${esc(im.author)} ·
          <a href="${im.licenseUrl}" target="_blank" rel="noopener noreferrer">${esc(im.license)}</a> ·
          <a href="${im.source}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></figcaption>
      </figure>`;
    }

    case 'quiz':
      return `<div class="dr-quiz">
        <div class="dr-quiz__t">${sm('target', 18)} Selbsttest – erst überlegen, dann aufklappen</div>
        ${b.items.map((q, i) => `<details class="dr-q">
          <summary><b>${i + 1}.</b> ${esc(q.q)}</summary>
          <div class="dr-q__a">${q.a}</div>
        </details>`).join('')}
      </div>`;

    case 'check': {
      const base = `${ctx.moduleId}-${ctx.lessonId}`;
      return `<div class="dr-check">
        <div class="dr-check__t">${sm('check', 18)} ${esc(b.title)}</div>
        ${b.items.map((it, i) => `<label class="dr-check__i">
          <input type="checkbox" data-check="${base}-${i}"> <span>${it}</span>
        </label>`).join('')}
        <p class="subtle" style="font-size:.8rem;margin:.6em 0 0">Haken dienen dem Durcharbeiten und werden nicht gespeichert.</p>
      </div>`;
    }

    case 'funk':
      return `<div class="dr-funk">
        <div class="dr-funk__t">${sm('radio', 18)} ${esc(b.title)}</div>
        ${b.lines.map(l => `<div class="dr-funk__l"><b>${esc(l.from)}</b><span>${esc(l.text)}</span></div>`).join('')}
      </div>`;

    case 'law':
      return `<div class="dr-law">
        <div class="dr-law__ref">${sm('shield', 16)} ${esc(b.ref)}</div>
        <div class="dr-law__t">${esc(b.title)}</div>
        <p>${b.text}</p>
      </div>`;

    case 'case':
      return `<div class="dr-case">
        <div class="dr-case__t">${sm('flag', 18)} ${esc(b.title)}</div>
        <p>${b.text}</p>
        ${b.questions?.length ? `<div class="dr-case__q"><b>Arbeitsauftrag:</b><ol>${b.questions.map(q => `<li>${esc(q)}</li>`).join('')}</ol></div>` : ''}
      </div>`;

    case 'time':
      return `<div class="dr-time">
        <div class="dr-time__t">${sm('clock', 18)} ${esc(b.title)}</div>
        ${b.items.map(i => `<div class="dr-time__i"><b>${esc(i.at)}</b><span>${esc(i.text)}</span></div>`).join('')}
      </div>`;

    case 'video': {
      const q = encodeURIComponent(b.search || b.title);
      return `<div class="dr-video" data-yt="${esc(b.youtubeId || '')}">
        <div class="dr-video__head">${sm('play', 18)} <b>${esc(b.title)}</b>${b.minutes ? `<span class="subtle">${fmtDuration(b.minutes)}</span>` : ''}</div>
        <p class="muted" style="font-size:.92rem;margin:.4em 0 .8em">${esc(b.desc || '')}</p>
        ${b.youtubeId
          ? `<button class="dr-video__load btn btn--outline" data-yt-load="${esc(b.youtubeId)}">${sm('play', 16)} Video laden (erst dann wird eine Verbindung zu YouTube aufgebaut)</button>
             <div class="dr-video__frame" hidden></div>`
          : `<p class="subtle" style="font-size:.86rem;margin:0">Für diesen Platz ist noch kein geprüftes Video hinterlegt. Ausbilder tragen die YouTube-ID in <code>drohnen-modules-*.js</code> ein.
             <a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener noreferrer">Suchvorschlag öffnen</a></p>`}
      </div>`;
    }

    default: return '';
  }
}

/* ------------------------------------------------------------ Übersicht */
export function renderDrohnenHome(filter = 'all') {
  const s = getState();
  const done = DROHNEN_MODULE.reduce((n, m) => n + moduleProgress(m.id, m.lessons.length).done, 0);
  const pct = Math.round(done / DROHNEN_LEKTIONEN * 100);
  const cats = Object.entries(DROHNEN_KATEGORIEN);
  const list = filter === 'all' ? DROHNEN_MODULE : DROHNEN_MODULE.filter(m => m.category === filter);

  return `
  <div class="view fade-up">
    <div class="view__head">
      <h1>BOS-Drohnen – Ausbildung von A bis Z</h1>
      <p class="muted">Vollständiger Ausbildungsbereich für den Betrieb unbemannter Luftfahrzeuge in der Gefahrenabwehr:
        vom europäischen Rechtsrahmen über Technik, Wetter und menschliche Faktoren bis zur Einsatztaktik, zum Datenschutz
        und zum Sicherheitsmanagement. Jedes Modul ist auf 60 bis 90 Minuten Lernzeit ausgelegt.</p>
      <div class="progress" style="max-width:360px;margin-top:10px"><i style="width:${pct}%"></i></div>
      <span class="subtle" style="font-size:.85rem">${done}/${DROHNEN_LEKTIONEN} Lektionen abgeschlossen</span>
    </div>

    <div class="dr-stats" style="margin-bottom:20px">
      ${statTile('book', DROHNEN_MODULE.length, 'Module')}
      ${statTile('path', DROHNEN_LEKTIONEN, 'Lektionen')}
      ${statTile('clock', Math.round(DROHNEN_MINUTEN / 60) + ' h', 'Lernzeit')}
      ${statTile('target', DROHNEN_FRAGEN, 'Selbsttestfragen')}
    </div>

    <div class="callout">
      <div class="callout__t">${sm('shield', 18)} Rechtsgrundlage: EU-Recht</div>
      <p>Der gesamte Bereich folgt dem europäischen Rechtsrahmen – insbesondere der Durchführungsverordnung (EU) 2019/947
      (Betrieb, Kategorien, Nachweise) und der delegierten Verordnung (EU) 2019/945 (Produkte, Klassen C0–C6), ergänzt um
      die Verordnung (EU) 376/2014 (Ereignismeldung) und die DSGVO. Nationales Recht wird nur dort behandelt, wo die
      EU-Verordnungen es ausdrücklich öffnen. Diese Ausbildung ersetzt weder den Kompetenznachweis nach EU-Recht noch die
      praktische Flugausbildung, die Betriebsgenehmigung oder das Betriebshandbuch der eigenen Einheit.</p>
    </div>

    <h2 style="margin-top:28px">Empfohlener Lernpfad</h2>
    <div class="dr-path">
      ${DROHNEN_STUFEN.map((st, i) => {
        const mods = st.modules.map(id => DROHNEN_BY_ID[id]).filter(Boolean);
        const d = mods.reduce((n, m) => n + moduleProgress(m.id, m.lessons.length).done, 0);
        const t = mods.reduce((n, m) => n + m.lessons.length, 0);
        const min = mods.reduce((n, m) => n + m.duration, 0);
        return `<div class="card card--pad dr-stufe">
          <div class="between wrap" style="gap:10px">
            <div>
              <span class="badge badge--blue">Stufe ${i + 1}</span>
              <h3 style="margin:.4em 0 .2em">${esc(st.title.replace(/^Stufe \d+ · /, ''))}</h3>
            </div>
            <span class="subtle" style="font-size:.85rem">${sm('clock', 14)} ${fmtDuration(min)}</span>
          </div>
          <p class="muted" style="font-size:.92rem">${esc(st.desc)}</p>
          <div class="progress ${d === t ? 'progress--green' : ''}"><i style="width:${Math.round(d / t * 100)}%"></i></div>
          <div class="flex gap-sm wrap" style="margin-top:10px">
            ${mods.map(m => `<a class="chip" href="#/drohne/${m.id}">${esc(m.code)} · ${esc(shortTitle(m.title))}</a>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>

    <h2 style="margin-top:30px">Alle Module</h2>
    <div class="flex gap-sm wrap" style="margin-bottom:14px" id="drFilter" role="group" aria-label="Themenfilter">
      <button class="chip" data-filter="all" aria-pressed="${filter === 'all'}">Alle</button>
      ${cats.map(([id, c]) => `<button class="chip" data-filter="${id}" aria-pressed="${filter === id}">
        <span style="width:9px;height:9px;border-radius:50%;background:${c.color}"></span>${esc(c.label)}
        <span class="subtle">${DROHNEN_MODULE.filter(m => m.category === id).length}</span></button>`).join('')}
    </div>

    <div class="module-grid">${list.map(drohnenCard).join('')}</div>

    <p class="subtle" style="margin-top:26px;font-size:.86rem">
      Alle Fotos in diesem Bereich stehen unter freien Lizenzen. →
      <a href="#/drohnen/bildnachweis">Bildnachweis und Lizenzen</a>
    </p>
  </div>`;
}

function statTile(ic, value, label) {
  return `<div class="card card--pad" style="text-align:center">
    <div style="color:var(--fw-red)">${sm(ic, 22)}</div>
    <b style="font-size:1.5rem;display:block;line-height:1.2">${value}</b>
    <span class="subtle" style="font-size:.82rem">${esc(label)}</span>
  </div>`;
}

function shortTitle(t) {
  return t.split(':')[0].split('&')[0].trim().slice(0, 26);
}

function drohnenCard(m) {
  const cat = DROHNEN_KATEGORIEN[m.category];
  const p = moduleProgress(m.id, m.lessons.length);
  return `<article class="card card--interactive mcard" data-cat="${m.category}">
    <div class="mcard__banner" style="background:linear-gradient(135deg, ${cat.color}, ${shade(cat.color, -28)})">
      <span class="mcard__code">${esc(m.code)}</span>
      ${icon(m.icon, 'mcard__ico')}
    </div>
    <div class="mcard__body">
      <span class="mcard__cat">${esc(cat.label)}</span>
      <h3>${esc(m.title)}</h3>
      <p class="mcard__desc">${esc(m.summary)}</p>
      <div class="mcard__meta">
        <span>${sm('book', 14)} ${m.lessons.length} Lektionen</span>
        <span>${sm('clock', 14)} ${fmtDuration(m.duration)}</span>
      </div>
      <div class="progress ${p.pct === 100 ? 'progress--green' : ''}"><i style="width:${p.pct}%"></i></div>
      <div class="between">
        <span class="subtle" style="font-size:.8rem">${p.done}/${p.total} erledigt</span>
        ${p.pct === 100 ? `<span class="badge badge--green">${sm('check', 13)} Durchgearbeitet</span>`
          : p.done > 0 ? '<span class="badge badge--blue">Aktiv</span>' : ''}
      </div>
      <a class="btn btn--outline btn--block mcard__foot" href="#/drohne/${m.id}">${p.done ? 'Fortsetzen' : 'Öffnen'} ${sm('arrowr', 16)}</a>
    </div>
  </article>`;
}

function shade(hex, p) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + p, g = ((n >> 8) & 255) + p, b = (n & 255) + p;
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* --------------------------------------------------------------- Modul */
export function renderDrohnenModul(id) {
  const m = DROHNEN_BY_ID[id];
  if (!m) return notFound();
  const cat = DROHNEN_KATEGORIEN[m.category];
  const s = getState();
  const p = moduleProgress(m.id, m.lessons.length);
  const idx = DROHNEN_MODULE.indexOf(m);
  const next = DROHNEN_MODULE[idx + 1];

  logActivity('module', m.id, { moduleId: m.id, title: m.title });

  return `
  <div class="view fade-up">
    <div class="crumbs">
      <a href="#/drohnen">BOS-Drohnen</a><span class="sep">/</span><span>Modul ${esc(m.code)}</span>
    </div>

    <div class="card card--pad" style="border-left:5px solid ${cat.color}">
      <div class="between wrap" style="gap:12px">
        <div>
          <span class="badge" style="background:${cat.color}22;color:${cat.color};border:none">${esc(cat.label)} · Modul ${esc(m.code)}</span>
          <h1 style="margin:.35em 0 .2em">${esc(m.title)}</h1>
          <p class="muted" style="max-width:70ch">${esc(m.summary)}</p>
        </div>
      </div>
      <div class="mcard__meta" style="margin-top:12px">
        <span>${sm('book', 14)} ${m.lessons.length} Lektionen</span>
        <span>${sm('clock', 14)} ${fmtDuration(m.duration)} Lernzeit</span>
        <span>${sm('target', 14)} ${m.lessons.reduce((n, l) => n + l.blocks.filter(b => b.t === 'quiz').reduce((k, b) => k + b.items.length, 0), 0)} Selbsttestfragen</span>
      </div>
      <div class="progress ${p.pct === 100 ? 'progress--green' : ''}" style="margin-top:14px"><i style="width:${p.pct}%"></i></div>
      <span class="subtle" style="font-size:.82rem">${p.done}/${p.total} Lektionen abgeschlossen</span>
    </div>

    <div class="dr-grid-2" style="margin-top:20px;align-items:start">
      <div class="card card--pad">
        <h2 style="margin-top:0">Lernziele</h2>
        <ul class="keyfacts">${m.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
        <div class="flex gap-sm wrap" style="margin-top:14px">
          ${m.tags.map(t => `<span class="chip" style="pointer-events:none">${esc(t)}</span>`).join('')}
        </div>
      </div>

      <div class="card card--pad">
        <h2 style="margin-top:0">Lektionen</h2>
        <nav class="toc">
          ${m.lessons.map((l, i) => {
            const d = !!(s.progress[m.id]?.lessons?.[l.id]);
            return `<a href="#/drohnenlektion/${m.id}/${l.id}">
              ${d ? '✓ ' : (i + 1) + '. '}${esc(l.title)}
              <span class="subtle" style="float:right">${fmtDuration(l.duration)}</span></a>`;
          }).join('')}
        </nav>
        <a class="btn btn--primary btn--block" style="margin-top:14px" href="#/drohnenlektion/${m.id}/${m.lessons[0].id}">
          ${p.done ? 'Weiterlernen' : 'Modul starten'} ${sm('arrowr', 16)}</a>
      </div>
    </div>

    <nav class="between wrap" style="margin-top:24px;gap:12px">
      ${idx > 0 ? `<a class="btn btn--ghost" href="#/drohne/${DROHNEN_MODULE[idx - 1].id}">${sm('arrowl', 16)} Modul ${esc(DROHNEN_MODULE[idx - 1].code)}</a>` : '<span></span>'}
      ${next ? `<a class="btn btn--outline" href="#/drohne/${next.id}">Modul ${esc(next.code)} ${sm('arrowr', 16)}</a>` : ''}
    </nav>
  </div>`;
}

/* ------------------------------------------------------------- Lektion */
export function renderDrohnenLektion(moduleId, lessonId) {
  const m = DROHNEN_BY_ID[moduleId];
  if (!m) return notFound();
  const idx = m.lessons.findIndex(l => l.id === lessonId);
  const l = m.lessons[idx];
  if (!l) return notFound();
  const cat = DROHNEN_KATEGORIEN[m.category];
  const s = getState();
  const done = !!(s.progress[moduleId]?.lessons?.[lessonId]);
  const prev = m.lessons[idx - 1];
  const next = m.lessons[idx + 1];
  const headings = l.blocks.filter(b => b.t === 'h2');
  const modIdx = DROHNEN_MODULE.indexOf(m);
  const nextModule = DROHNEN_MODULE[modIdx + 1];
  const ctx = { moduleId, lessonId };

  logActivity('module', m.id, { moduleId: m.id, title: m.title });

  return `
  <div class="view fade-up">
    <div class="crumbs">
      <a href="#/drohnen">BOS-Drohnen</a><span class="sep">/</span>
      <a href="#/drohne/${m.id}">${esc(m.title)}</a><span class="sep">/</span>
      <span>Lektion ${idx + 1}</span>
    </div>

    <div class="reader">
      <article class="reader__main">
        <div class="between wrap" style="margin-bottom:6px">
          <span class="badge" style="background:${cat.color}22;color:${cat.color};border:none">Modul ${esc(m.code)} · Lektion ${idx + 1}/${m.lessons.length}</span>
          <span class="subtle" style="font-size:.85rem">${sm('clock', 14)} ${fmtDuration(l.duration)}</span>
        </div>
        <h1 style="margin-bottom:.6em">${esc(l.title)}</h1>

        <div class="prose">
          ${l.blocks.map(b => block(b, ctx)).join('\n')}
        </div>

        <div class="card card--pad" style="margin-top:34px;background:var(--surface-2)">
          <div class="between wrap" style="gap:14px">
            <div>
              <b>${done ? 'Lektion abgeschlossen ✔' : 'Lektion abschließen'}</b>
              <p class="subtle" style="font-size:.88rem;margin:.2em 0 0">${done ? 'Du kannst jederzeit wiederholen.' : 'Markiere als erledigt, um deinen Fortschritt zu speichern.'}</p>
            </div>
            <button class="btn ${done ? 'btn--outline' : 'btn--primary'}" id="drComplete" data-mod="${m.id}" data-les="${l.id}" ${done ? 'disabled' : ''}>
              ${sm('check', 16)} ${done ? 'Erledigt' : 'Als erledigt markieren'}
            </button>
          </div>
        </div>

        <nav class="between wrap" style="margin-top:24px;gap:12px">
          ${prev ? `<a class="btn btn--ghost" href="#/drohnenlektion/${m.id}/${prev.id}">${sm('arrowl', 16)} Vorherige</a>` : `<a class="btn btn--ghost" href="#/drohne/${m.id}">${sm('arrowl', 16)} Modulübersicht</a>`}
          ${next ? `<a class="btn btn--primary" href="#/drohnenlektion/${m.id}/${next.id}">Nächste Lektion ${sm('arrowr', 16)}</a>`
                 : nextModule ? `<a class="btn btn--primary" href="#/drohne/${nextModule.id}">Weiter zu Modul ${esc(nextModule.code)} ${sm('arrowr', 16)}</a>`
                 : `<a class="btn btn--primary" href="#/drohnen">Bereich abgeschlossen ${sm('award', 16)}</a>`}
        </nav>
      </article>

      <aside class="reader__aside">
        <div class="card card--pad">
          <div class="nav__section" style="padding:0 0 10px">In dieser Lektion</div>
          <nav class="toc" id="drToc">
            ${headings.map(h => `<a href="#${h.id}" data-toc="${h.id}">${esc(h.text)}</a>`).join('')}
          </nav>
        </div>
        <div class="card card--pad" style="margin-top:16px">
          <div class="nav__section" style="padding:0 0 10px">Modul ${esc(m.code)}</div>
          <nav class="toc">
            ${m.lessons.map((x, i) => {
              const d = !!(s.progress[m.id]?.lessons?.[x.id]);
              return `<a href="#/drohnenlektion/${m.id}/${x.id}" style="${x.id === lessonId ? 'border-color:var(--fw-red);color:var(--fw-red)' : ''}">${d ? '✓ ' : (i + 1) + '. '}${esc(x.title)}</a>`;
            }).join('')}
          </nav>
        </div>
      </aside>
    </div>
  </div>`;
}

/* -------------------------------------------------------- Bildnachweis */
export function renderDrohnenBildnachweis() {
  return `
  <div class="view fade-up">
    <div class="crumbs"><a href="#/drohnen">BOS-Drohnen</a><span class="sep">/</span><span>Bildnachweis</span></div>
    <div class="view__head">
      <h1>Bildnachweis</h1>
      <p class="muted">Alle Fotos in diesem Ausbildungsbereich stammen von Wikimedia Commons und stehen unter freien Lizenzen
      (Creative Commons oder gemeinfrei). Sie werden lokal ausgeliefert – der Bereich funktioniert damit offline, und es werden
      keine Daten an Dritte übertragen. Die Schaubilder sind Eigenerstellungen der Akademie.</p>
    </div>
    <div class="module-grid">
      ${BILDNACHWEIS.map(b => `<div class="card card--pad">
        <img src="./${b.file}" alt="${esc(b.alt)}" loading="lazy" style="width:100%;height:150px;object-fit:cover;border-radius:var(--r-sm)" onerror="this.style.display='none'">
        <p style="font-size:.9rem;margin:.7em 0 .3em">${esc(b.alt)}</p>
        <p class="subtle" style="font-size:.82rem;margin:0">
          Urheber: ${esc(b.author)}<br>
          Lizenz: <a href="${b.licenseUrl}" target="_blank" rel="noopener noreferrer">${esc(b.license)}</a><br>
          <a href="${b.source}" target="_blank" rel="noopener noreferrer">Quelle auf Wikimedia Commons</a>
        </p>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ------------------------------------------------------------ Bindings */
export function bindDrohnen(root, rerender) {
  /* Kategoriefilter */
  const chips = root.querySelectorAll('#drFilter .chip');
  chips.forEach(c => c.addEventListener('click', () => {
    location.hash = c.dataset.filter === 'all' ? '#/drohnen' : `#/drohnen/${c.dataset.filter}`;
  }));

  /* Lektion abschließen */
  const btn = root.querySelector('#drComplete');
  if (btn && !btn.disabled) {
    btn.addEventListener('click', () => {
      const mod = btn.dataset.mod, les = btn.dataset.les;
      const m = DROHNEN_BY_ID[mod];
      const wasComplete = m.lessons.every(x => getState().progress[mod]?.lessons?.[x.id]);
      completeLesson(mod, les);
      logActivity('lesson', les, { moduleId: mod, title: m.lessons.find(x => x.id === les)?.title || '' });
      toast('Lektion abgeschlossen · +15 XP', 'star');
      if (!wasComplete && m.lessons.every(x => getState().progress[mod]?.lessons?.[x.id])) {
        confetti(); toast(`Modul ${m.code} komplett durchgearbeitet! 🎉`, 'star');
      }
      rerender();
    });
  }

  /* Video erst nach Klick laden (DSGVO-freundlich) */
  root.querySelectorAll('[data-yt-load]').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.dataset.ytLoad;
      const frame = b.parentElement.querySelector('.dr-video__frame');
      frame.innerHTML = `<div style="position:relative;padding-top:56.25%;border-radius:var(--r-sm);overflow:hidden">
        <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&modestbranding=1"
          title="Lernvideo" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen
          style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe></div>`;
      frame.hidden = false;
      b.hidden = true;
    });
  });

  /* Inhaltsverzeichnis-Hervorhebung */
  const tocLinks = [...root.querySelectorAll('#drToc a[data-toc]')];
  if (tocLinks.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) tocLinks.forEach(a => a.classList.toggle('active', a.dataset.toc === e.target.id));
      });
    }, { rootMargin: '-80px 0px -70% 0px' });
    root.querySelectorAll('.prose h2[id]').forEach(h => obs.observe(h));
  }
}
