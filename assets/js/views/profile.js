/* =========================================================================
   VIEW: Onboarding & Profil — Personalisierung
   ========================================================================= */
import { LEVELS, MODULES } from '../data/curriculum.js';
import { EXAM_SETS } from '../data/pruefungssets.js';
import { icon } from '../data/icons.js';
import { getState, setProfile, moduleProgress, isModulePassed, bestExam, level, resetAll } from '../state.js';
import { esc, initials, toast, modal } from '../utils.js';

const ROLES = [
  'Feuerwehranwärter/in', 'Truppmann/-frau', 'Truppführer/in',
  'Gruppenführer/in', 'Zugführer/in', 'Atemschutzgeräteträger/in',
  'Maschinist/in', 'Jugendfeuerwehr', 'Ausbilder/in', 'Sonstige',
];

/* ---------- Onboarding (Erststart) ---------- */
export function renderOnboarding() {
  return `
  <div class="view fade-up" style="min-height:calc(100vh - var(--header-h));display:grid;place-items:center">
    <div class="card card--pad" style="max-width:560px;width:100%">
      <div class="center stack" style="margin-bottom:8px">
        <div class="brand__mark" style="margin:0 auto">${logoMark()}</div>
        <h1 style="margin:0">Willkommen zur Feuerwehr Akademie</h1>
        <p class="muted">Richte dein persönliches Lernprofil ein. Wir passen Empfehlungen und Lernpfad an dein Ausbildungsziel an.</p>
      </div>
      <form id="onboardForm" class="stack" style="margin-top:10px">
        <div class="field">
          <label for="obName">Dein Name</label>
          <input class="input" id="obName" name="name" placeholder="z. B. Alex Schmidt" required maxlength="40" autocomplete="name">
        </div>
        <div class="field">
          <label for="obRole">Deine Funktion / Rolle</label>
          <select class="select" id="obRole" name="role">
            ${ROLES.map(r => `<option>${esc(r)}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label for="obUnit">Feuerwehr / Standort <span class="subtle">(optional)</span></label>
          <input class="input" id="obUnit" name="unit" placeholder="z. B. FF Musterstadt" maxlength="50">
        </div>
        <div class="field">
          <label>Dein aktuelles Ausbildungsniveau</label>
          <div class="flex gap-sm wrap" id="levelPick" role="group">
            ${Object.entries(LEVELS).map(([k, v], i) => `<button type="button" class="chip" data-level="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join('')}
          </div>
          <input type="hidden" name="level" id="obLevel" value="1">
        </div>
        <button class="btn btn--primary btn--lg btn--block" type="submit">${icon('arrowr')} Lernprofil erstellen</button>
        <p class="subtle center" style="font-size:.8rem">Deine Daten bleiben lokal auf diesem Gerät (localStorage). Keine Anmeldung nötig.</p>
      </form>
    </div>
  </div>`;
}

export function bindOnboarding(root, rerender) {
  const form = root.querySelector('#onboardForm');
  const chips = root.querySelectorAll('#levelPick .chip');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', 'false'));
    c.setAttribute('aria-pressed', 'true');
    root.querySelector('#obLevel').value = c.dataset.level;
  }));
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    if (!name) { toast('Bitte Namen eingeben', 'bolt'); return; }
    setProfile({
      name,
      role: fd.get('role'),
      unit: (fd.get('unit') || '').toString().trim(),
      level: +fd.get('level') || 1,
    });
    toast('Willkommen an Bord! 🚒', 'star');
    location.hash = '#/';
    rerender();
  });
}

/* ---------- Profilseite ---------- */
export function renderProfile() {
  const s = getState();
  if (!s.profile) { location.hash = '#/onboarding'; return ''; }
  const p = s.profile;
  const lvl = level();

  const stats = MODULES.map(m => ({
    m, prog: moduleProgress(m.id, m.lessons.length), passed: isModulePassed(m.id), best: bestExam(m.id),
  }));
  const totalPassed = stats.filter(x => x.passed).length;

  // Leistungsnachweise: bestandene Modulprüfungen UND bestandene Abschlussprüfungen (Sets).
  const setStats = EXAM_SETS.map(set => ({ set, best: bestExam(set.id) }));
  const setsPassed = setStats.filter(x => x.best?.passed);
  const certificates = [
    ...stats.filter(x => x.best?.passed).map(x => ({ title: x.m.title, score: x.best.score, kind: 'Modulprüfung' })),
    ...setsPassed.map(x => ({ title: x.set.title, score: x.best.score, kind: 'Abschlussprüfung' })),
  ];

  return `
  <div class="view fade-up">
    <div class="view__head"><h1>Mein Profil</h1><p class="muted">Dein Ausbildungsstand, Nachweise und Einstellungen.</p></div>

    <div class="grid col-2" style="grid-template-columns:1fr 2fr;align-items:start" id="profCols">
      <aside class="stack">
        <div class="card card--pad center">
          <div class="avatar" style="width:84px;height:84px;font-size:1.8rem;margin:0 auto">${initials(p.name)}</div>
          <h2 style="margin:14px 0 2px">${esc(p.name)}</h2>
          <p class="muted" style="margin:0">${esc(p.role)}</p>
          ${p.unit ? `<p class="subtle" style="margin:2px 0 0;font-size:.9rem">${esc(p.unit)}</p>` : ''}
          <div class="flex gap-sm" style="justify-content:center;margin-top:14px">
            <span class="badge badge--red">Level ${lvl}</span>
            <span class="badge badge--amber">${s.xp || 0} XP</span>
            <span class="badge">${esc(LEVELS[p.level])}</span>
          </div>
          <button class="btn btn--outline btn--block" id="editProfile" style="margin-top:16px">Profil bearbeiten</button>
        </div>
        <div class="card card--pad">
          <div class="between" style="padding:6px 0"><span class="muted">Bestandene Modulprüfungen</span><b>${totalPassed}/${MODULES.length}</b></div>
          <div class="between" style="padding:6px 0"><span class="muted">Bestandene Abschlussprüfungen</span><b>${setsPassed.length}/${EXAM_SETS.length}</b></div>
          <div class="between" style="padding:6px 0"><span class="muted">Tage-Streak</span><b>${s.streak.count} 🔥</b></div>
          <div class="between" style="padding:6px 0"><span class="muted">Planspiele</span><b>${Object.values(s.planspielResults).reduce((n,a)=>n+a.length,0)}</b></div>
        </div>
        <div class="card card--pad">
          <h3 style="margin-bottom:8px">Einstellungen</h3>
          <button class="btn btn--danger btn--block" id="resetData">${icon('refresh')} Fortschritt zurücksetzen</button>
        </div>
      </aside>

      <section class="stack">
        <div class="card card--pad">
          <h3 style="margin-bottom:14px">${icon('award').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Leistungsnachweise</h3>
          ${certificates.length ? `<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
            ${certificates.map(c => `<div class="card card--pad" style="border:2px dashed var(--ok);background:var(--ok-bg)">
              <div class="flex gap-sm" style="align-items:center">
                ${icon('shield').replace('<svg ','<svg style="width:30px;height:30px;color:var(--ok);flex:none" ')}
                <div style="min-width:0"><b style="display:block;overflow-wrap:anywhere">${esc(c.title)}</b><span class="subtle" style="font-size:.82rem">${c.kind} · ${c.score}% · bestanden</span></div>
              </div>
            </div>`).join('')}
          </div>` : `<p class="muted" style="margin:0">Noch keine Nachweise. Bestehe eine Modul- oder Abschlussprüfung, um deinen ersten Leistungsnachweis zu erhalten.</p>`}
        </div>

        <div class="card card--pad">
          <h3 style="margin-bottom:14px">${icon('chart').replace('<svg ','<svg style="width:20px;height:20px;vertical-align:-3px" ')} Fortschritt je Modul</h3>
          <div class="stack" style="--gap:12px">
            ${stats.map(x => `<div>
              <div class="between" style="margin-bottom:4px"><span style="font-weight:600;font-size:.9rem">${esc(x.m.code)} · ${esc(x.m.title)}</span><span class="subtle" style="font-size:.82rem">${x.prog.pct}%${x.best ? ' · Prüfung '+x.best.score+'%' : ''}</span></div>
              <div class="progress ${x.passed ? 'progress--green' : ''}"><i style="width:${x.prog.pct}%"></i></div>
            </div>`).join('')}
          </div>
        </div>
      </section>
    </div>
  </div>`;
}

export function bindProfile(root, rerender) {
  root.querySelector('#resetData')?.addEventListener('click', () => {
    modal(`<h2 style="margin-top:0">Fortschritt zurücksetzen?</h2>
      <p class="muted">Alle Lernfortschritte, Prüfungsergebnisse und Planspiel-Daten werden gelöscht. Dein Profil bleibt erhalten. Dies kann nicht rückgängig gemacht werden.</p>
      <div class="flex gap-sm" style="justify-content:flex-end;margin-top:16px">
        <button class="btn btn--ghost" data-close>Abbrechen</button>
        <button class="btn btn--danger" id="confirmReset">Ja, zurücksetzen</button>
      </div>`, {}).root.addEventListener('click', e => {
        if (e.target.closest('[data-close]')) e.target.closest('.modal-back').remove();
        if (e.target.closest('#confirmReset')) {
          const prof = getState().profile;
          resetAll();
          if (prof) setProfile(prof);
          e.target.closest('.modal-back').remove();
          toast('Fortschritt zurückgesetzt', 'ok');
          rerender();
        }
      });
  });

  root.querySelector('#editProfile')?.addEventListener('click', () => {
    const p = getState().profile;
    const m = modal(`<h2 style="margin-top:0">Profil bearbeiten</h2>
      <div class="stack">
        <div class="field"><label>Name</label><input class="input" id="epName" value="${esc(p.name)}" maxlength="40"></div>
        <div class="field"><label>Funktion</label><select class="select" id="epRole">${ROLES.map(r => `<option ${r === p.role ? 'selected' : ''}>${esc(r)}</option>`).join('')}</select></div>
        <div class="field"><label>Feuerwehr / Standort</label><input class="input" id="epUnit" value="${esc(p.unit || '')}" maxlength="50"></div>
        <div class="field"><label>Ausbildungsniveau</label><select class="select" id="epLevel">${Object.entries(LEVELS).map(([k,v]) => `<option value="${k}" ${+k === p.level ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select></div>
      </div>
      <div class="flex gap-sm" style="justify-content:flex-end;margin-top:16px">
        <button class="btn btn--ghost" data-close>Abbrechen</button>
        <button class="btn btn--primary" id="saveProfile">Speichern</button>
      </div>`, {});
    m.root.addEventListener('click', e => {
      if (e.target.closest('[data-close]')) m.close();
      if (e.target.closest('#saveProfile')) {
        setProfile({
          ...p,
          name: m.root.querySelector('#epName').value.trim() || p.name,
          role: m.root.querySelector('#epRole').value,
          unit: m.root.querySelector('#epUnit').value.trim(),
          level: +m.root.querySelector('#epLevel').value,
        });
        m.close(); toast('Profil aktualisiert', 'ok'); rerender();
      }
    });
  });
}

export function logoMark() {
  return `<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true">
    <rect x="2" y="2" width="44" height="44" rx="12" fill="#d81f26"/>
    <path d="M24 9 C 24 18 15 20 15 28 a9 9 0 0 0 18 0 c 0 -4 -3 -7 -4 -10 c -1 3 -3 4 -3 1 c 0 -4 0 -8 -2 -11 Z" fill="#fff"/>
    <circle cx="24" cy="29" r="4" fill="#f5a623"/>
  </svg>`;
}
