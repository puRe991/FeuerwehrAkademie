/* =========================================================================
   VIEW: Ausbilder-Ansicht — Auswertung, Bericht, Export & Import
   Aggregiert den Lernstand, erzeugt einen druckbaren Ausbildungsnachweis
   und erlaubt Datenexport/-import (JSON) sowie CSV-Export.
   ========================================================================= */
import { MODULES, CATEGORIES, LEVELS, LESSON_COUNT } from '../data/curriculum.js';
import { EXAMS } from '../data/exams.js';
import { PLANSPIELE } from '../data/planspiele.js';
import { EXAM_SETS } from '../data/pruefungssets.js';
import { FLASHCARDS } from '../data/flashcards.js';
import { icon } from '../data/icons.js';
import { getState, moduleProgress, isModulePassed, bestExam, level, flashcardStats, update } from '../state.js';
import { esc, fmtDate, fmtDateTime, toast, modal } from '../utils.js';

function collectRows() {
  return MODULES.map(m => {
    const p = moduleProgress(m.id, m.lessons.length);
    const best = bestExam(m.id);
    return {
      code: m.code, title: m.title, category: CATEGORIES[m.category].label,
      lessonsDone: p.done, lessonsTotal: p.total, pct: p.pct,
      examBest: best ? best.score : null, passed: isModulePassed(m.id),
      examDate: best ? best.date : null,
    };
  });
}

export function renderInstructor() {
  const s = getState();
  if (!s.profile) { location.hash = '#/onboarding'; return ''; }
  const rows = collectRows();
  const fc = flashcardStats(FLASHCARDS);
  const passed = rows.filter(r => r.passed).length;
  const lessonsDone = rows.reduce((n, r) => n + r.lessonsDone, 0);
  const planspieleCount = Object.values(s.planspielResults).reduce((n, a) => n + a.length, 0);
  const avgExam = (() => {
    const scores = rows.filter(r => r.examBest != null).map(r => r.examBest);
    return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  })();

  return `
  <div class="view fade-up">
    <div class="view__head between wrap" style="gap:12px;align-items:flex-end">
      <div>
        <h1>Ausbilder-Ansicht</h1>
        <p class="muted">Gesamtauswertung, Ausbildungsnachweis und Datensicherung – ideal zur Dokumentation und für Ausbilderinnen und Ausbilder.</p>
      </div>
      <div class="flex gap-sm wrap">
        <button class="btn btn--outline" id="printReport">${icon('download')} Bericht drucken</button>
        <button class="btn btn--outline" id="exportJson">${icon('download')} Export (JSON)</button>
        <button class="btn btn--outline" id="exportCsv">${icon('download')} Export (CSV)</button>
        <button class="btn btn--ghost" id="importJson">Import</button>
      </div>
    </div>

    <div class="tiles" style="margin-bottom:22px">
      ${tile('red','award', passed + '/' + MODULES.length, 'Prüfungen bestanden')}
      ${tile('blue','book', lessonsDone + '/' + LESSON_COUNT, 'Lektionen erledigt')}
      ${tile('amber','target', avgExam + '%', 'Ø Prüfungsergebnis')}
      ${tile('green','game', planspieleCount, 'Planspiele absolviert')}
    </div>

    <div class="card card--pad" style="margin-bottom:22px" id="reportArea">
      <div class="between wrap" style="margin-bottom:14px">
        <h3 style="margin:0">Ausbildungsnachweis</h3>
        <span class="subtle" style="font-size:.85rem">Stand: ${fmtDateTime(new Date().toISOString())}</span>
      </div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Modul</th><th>Kategorie</th><th>Lektionen</th><th>Fortschritt</th><th>Prüfung</th><th>Status</th></tr></thead>
          <tbody>
            ${rows.map(r => `<tr>
              <td><b>${r.code}</b> · ${esc(r.title)}</td>
              <td class="subtle">${esc(r.category)}</td>
              <td>${r.lessonsDone}/${r.lessonsTotal}</td>
              <td style="min-width:120px"><div class="progress ${r.passed ? 'progress--green' : ''}"><i style="width:${r.pct}%"></i></div></td>
              <td>${r.examBest != null ? r.examBest + '%' : '<span class="subtle">–</span>'}</td>
              <td>${r.passed ? '<span class="badge badge--green">bestanden</span>' : r.pct === 100 ? '<span class="badge badge--amber">Prüfung offen</span>' : r.pct > 0 ? '<span class="badge badge--blue">in Arbeit</span>' : '<span class="badge">offen</span>'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="grid col-2" style="grid-template-columns:1fr 1fr;align-items:start">
      <div class="card card--pad">
        <h3 style="margin-bottom:12px">Karteikarten-Lernstand</h3>
        <div class="between" style="padding:6px 0;border-bottom:1px solid var(--border)"><span class="muted">Karten gesamt</span><b>${fc.total}</b></div>
        <div class="between" style="padding:6px 0;border-bottom:1px solid var(--border)"><span class="muted">Bearbeitet</span><b>${fc.seen}</b></div>
        <div class="between" style="padding:6px 0;border-bottom:1px solid var(--border)"><span class="muted">Im Langzeitgedächtnis</span><b>${fc.learned}</b></div>
        <div class="between" style="padding:6px 0"><span class="muted">Gemeistert</span><b>${fc.mastered}</b></div>
      </div>
      <div class="card card--pad">
        <h3 style="margin-bottom:12px">Planspiel-Ergebnisse</h3>
        ${PLANSPIELE.map(p => {
          const res = (s.planspielResults[p.id] || [])[0];
          return `<div class="between" style="padding:6px 0;border-bottom:1px solid var(--border)">
            <span class="muted" style="font-size:.9rem">${esc(p.title)}</span>
            ${res ? `<b>${res.rating}/100</b>` : '<span class="subtle">–</span>'}
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="card card--pad" style="margin-top:22px">
      <h3 style="margin-bottom:12px">${icon('award').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Abschlussprüfungen</h3>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Abschlussprüfung</th><th>Niveau</th><th>Bestes Ergebnis</th><th>Status</th></tr></thead>
          <tbody>
            ${EXAM_SETS.map(set => {
              const best = bestExam(set.id);
              const passed = !!(best && best.passed);
              return `<tr>
                <td><b>${esc(set.title)}</b></td>
                <td class="subtle">${esc(LEVELS[set.level] || '')}</td>
                <td>${best ? best.score + '%' : '<span class="subtle">–</span>'}</td>
                <td>${passed ? '<span class="badge badge--green">bestanden</span>' : best ? '<span class="badge badge--amber">nicht bestanden</span>' : '<span class="badge">offen</span>'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="callout callout--warn" style="margin-top:22px">
      <div class="callout__t">${icon('shield').replace('<svg ','<svg style="width:16px;height:16px" ')} Datenhinweis</div>
      <p>Alle Daten liegen ausschließlich lokal auf diesem Gerät. Exportiere regelmäßig eine Sicherung (JSON), um deinen Fortschritt zu bewahren oder auf ein anderes Gerät zu übertragen.</p>
    </div>
  </div>`;
}

function tile(color, ic, big, label) {
  return `<div class="card card--pad tile"><div class="tile__icon i-${color}">${icon(ic)}</div><div><b>${big}</b><span>${label}</span></div></div>`;
}

/* ------------------ Aktionen ------------------ */
export function bindInstructor(root, rerender) {
  const s = getState();

  root.querySelector('#exportJson')?.addEventListener('click', () => {
    const data = JSON.stringify({ app: 'feuerwehr-akademie', version: 1, exportedAt: new Date().toISOString(), state: s }, null, 2);
    downloadFile(`fw-akademie-backup-${dateStamp()}.json`, data, 'application/json');
    toast('Backup exportiert', 'ok');
  });

  root.querySelector('#exportCsv')?.addEventListener('click', () => {
    const rows = collectRows();
    const head = ['Typ', 'Code', 'Titel', 'Kategorie', 'Lektionen erledigt', 'Lektionen gesamt', 'Fortschritt %', 'Prüfung beste %', 'Bestanden', 'Prüfungsdatum'];
    const moduleLines = rows.map(r => [
      'Modul', r.code, `"${r.title}"`, `"${r.category}"`, r.lessonsDone, r.lessonsTotal, r.pct,
      r.examBest ?? '', r.passed ? 'ja' : 'nein', r.examDate ? fmtDate(r.examDate) : '',
    ].join(';'));
    const setLines = EXAM_SETS.map(set => ({ set, best: bestExam(set.id) })).filter(x => x.best).map(x => [
      'Abschlussprüfung', x.set.id, `"${x.set.title}"`, '"Abschlussprüfung"', '', '', '',
      x.best.score, x.best.passed ? 'ja' : 'nein', x.best.date ? fmtDate(x.best.date) : '',
    ].join(';'));
    const lines = [head.join(';')].concat(moduleLines, setLines);
    downloadFile(`fw-akademie-nachweis-${dateStamp()}.csv`, '﻿' + lines.join('\r\n'), 'text/csv');
    toast('CSV exportiert', 'ok');
  });

  root.querySelector('#printReport')?.addEventListener('click', () => printReport());

  root.querySelector('#importJson')?.addEventListener('click', () => {
    const m = modal(`<h2 style="margin-top:0">Backup importieren</h2>
      <p class="muted">Wähle eine zuvor exportierte JSON-Sicherung. <b>Achtung:</b> Der aktuelle Fortschritt wird überschrieben.</p>
      <input type="file" id="importFile" accept="application/json,.json" class="input" style="padding:10px">
      <div class="flex gap-sm" style="justify-content:flex-end;margin-top:16px">
        <button class="btn btn--ghost" data-close>Abbrechen</button>
      </div>`, {});
    m.root.addEventListener('click', e => { if (e.target.closest('[data-close]')) m.close(); });
    m.root.querySelector('#importFile').addEventListener('change', async e => {
      const file = e.target.files[0]; if (!file) return;
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const incoming = parsed.state || parsed;
        if (!incoming || typeof incoming !== 'object') throw new Error('Ungültig');
        update(st => { Object.keys(st).forEach(k => delete st[k]); Object.assign(st, incoming); });
        m.close(); toast('Backup importiert', 'star'); rerender();
      } catch { toast('Import fehlgeschlagen – ungültige Datei', 'bolt'); }
    });
  });
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function dateStamp() { return new Date().toISOString().slice(0, 10); }

function printReport() {
  const s = getState();
  const rows = collectRows();
  const p = s.profile || {};
  const passed = rows.filter(r => r.passed).length;
  const w = window.open('', '_blank');
  if (!w) { toast('Bitte Pop-ups erlauben', 'bolt'); return; }
  w.document.write(`<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Ausbildungsnachweis – ${esc(p.name || '')}</title>
    <style>
      body{font-family:system-ui,Arial,sans-serif;color:#111;margin:40px;line-height:1.5}
      h1{color:#d81f26;margin-bottom:4px}
      .sub{color:#555;margin:0 0 20px}
      table{width:100%;border-collapse:collapse;margin-top:16px;font-size:14px}
      th,td{border:1px solid #ccc;padding:8px 10px;text-align:left}
      th{background:#f4f4f4}
      .ok{color:#2e9e5b;font-weight:700}.no{color:#999}
      .head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #d81f26;padding-bottom:12px}
      .badge{display:inline-block;padding:2px 8px;border-radius:10px;background:#eee;font-size:12px}
      footer{margin-top:30px;font-size:12px;color:#888;border-top:1px solid #ddd;padding-top:10px}
      @media print{button{display:none}}
    </style></head><body>
    <div class="head">
      <div><h1>Ausbildungsnachweis</h1><p class="sub">Feuerwehr Online Akademie</p></div>
      <div style="text-align:right;font-size:14px">
        <b>${esc(p.name || '')}</b><br>${esc(p.role || '')}<br>${esc(p.unit || '')}<br>
        <span style="color:#777">Niveau: ${esc(LEVELS[p.level] || '')}</span>
      </div>
    </div>
    <p style="margin-top:16px"><b>Zusammenfassung:</b> ${passed} von ${MODULES.length} Modulprüfungen bestanden ·
      ${rows.reduce((n, r) => n + r.lessonsDone, 0)}/${LESSON_COUNT} Lektionen · Level ${level()} · ${s.xp || 0} XP</p>
    <table>
      <thead><tr><th>Modul</th><th>Lektionen</th><th>Prüfung</th><th>Status</th><th>Datum</th></tr></thead>
      <tbody>
      ${rows.map(r => `<tr>
        <td><b>${r.code}</b> ${esc(r.title)}</td>
        <td>${r.lessonsDone}/${r.lessonsTotal}</td>
        <td>${r.examBest != null ? r.examBest + '%' : '–'}</td>
        <td>${r.passed ? '<span class="ok">bestanden</span>' : '<span class="no">offen</span>'}</td>
        <td>${r.examDate ? fmtDate(r.examDate) : '–'}</td>
      </tr>`).join('')}
      </tbody>
    </table>
    ${(() => {
      const setRows = EXAM_SETS.map(set => ({ title: set.title, best: bestExam(set.id) })).filter(x => x.best);
      if (!setRows.length) return '';
      return `<h2 style="color:#d81f26;font-size:1.1rem;margin:26px 0 0">Abschlussprüfungen</h2>
    <table>
      <thead><tr><th>Abschlussprüfung</th><th>Bestes Ergebnis</th><th>Status</th><th>Datum</th></tr></thead>
      <tbody>
      ${setRows.map(r => `<tr>
        <td><b>${esc(r.title)}</b></td>
        <td>${r.best.score}%</td>
        <td>${r.best.passed ? '<span class="ok">bestanden</span>' : '<span class="no">nicht bestanden</span>'}</td>
        <td>${r.best.date ? fmtDate(r.best.date) : '–'}</td>
      </tr>`).join('')}
      </tbody>
    </table>`;
    })()}
    <footer>
      Erstellt am ${new Date().toLocaleString('de-DE')} · Feuerwehr Online Akademie ·
      Dieser Nachweis dokumentiert den Lernfortschritt in der Online-Akademie und ersetzt keine offizielle Lehrgangsbescheinigung.
    </footer>
    <p style="margin-top:24px"><button onclick="window.print()" style="padding:10px 20px;background:#d81f26;color:#fff;border:none;border-radius:8px;font-size:15px;cursor:pointer">Drucken / als PDF speichern</button></p>
  </body></html>`);
  w.document.close();
}
