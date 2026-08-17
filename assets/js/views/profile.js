/* =========================================================================
   VIEW: Onboarding & Profil — Personalisierung
   ========================================================================= */
import { LEVELS, MODULES } from '../data/curriculum.js';
import { icon } from '../data/icons.js';
import { getState, setProfile, moduleProgress, isModulePassed, bestExam, level, resetAll,
         listAccounts, switchAccount, createAccount, deleteAccount } from '../state.js';
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
  const certificates = stats.filter(x => x.best?.passed);

  return `
  <div class="view fade-up">
    <div class="view__head"><h1>Mein Profil</h1><p class="muted">Dein Ausbildungsstand, Nachweise und Einstellungen.</p></div>

    <div class="grid" style="grid-template-columns:1fr 2fr;align-items:start" id="profCols">
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
          <div class="between" style="padding:6px 0"><span class="muted">Bestandene Prüfungen</span><b>${totalPassed}/${MODULES.length}</b></div>
          <div class="between" style="padding:6px 0"><span class="muted">Tage-Streak</span><b>${s.streak.count} 🔥</b></div>
          <div class="between" style="padding:6px 0"><span class="muted">Planspiele</span><b>${Object.values(s.planspielResults).reduce((n,a)=>n+a.length,0)}</b></div>
        </div>
        <div class="card card--pad">
          <h3 style="margin-bottom:8px">Benutzer</h3>
          <p class="subtle" style="margin:0 0 10px;font-size:.85rem">${listAccounts().length} Profil${listAccounts().length === 1 ? '' : 'e'} auf diesem Gerät.</p>
          <button class="btn btn--outline btn--block" id="switchUser">${icon('users')} Benutzer wechseln</button>
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
                <div style="min-width:0"><b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.m.title)}</b><span class="subtle" style="font-size:.82rem">${c.best.score}% · bestanden</span></div>
              </div>
            </div>`).join('')}
          </div>` : `<p class="muted" style="margin:0">Noch keine Nachweise. Bestehe eine Modulprüfung, um deinen ersten Leistungsnachweis zu erhalten.</p>`}
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
  root.querySelector('#switchUser')?.addEventListener('click', () => openUserSwitcher(rerender));

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

/* ---------- Benutzer-Umschalter (Mehrbenutzer) ---------- */

function accountRow(a) {
  const name = a.name || 'Neues Profil';
  const sub = a.active ? 'Aktiv' : (a.role || `Level ${a.level} · ${a.xp} XP`);
  return `
  <div class="acct-row ${a.active ? 'acct-row--active' : ''}" data-acct="${esc(a.id)}">
    <button class="acct-pick" data-switch="${esc(a.id)}" ${a.active ? 'aria-current="true"' : ''}>
      <span class="avatar" style="width:40px;height:40px">${initials(a.name || '?')}</span>
      <span class="acct-meta">
        <b>${esc(name)}</b>
        <span class="subtle">${esc(sub)}</span>
      </span>
      ${a.active ? `<span class="badge badge--red" style="margin-left:auto">Aktiv</span>` : icon('arrowr').replace('<svg ', '<svg style="width:18px;height:18px;margin-left:auto;color:var(--text-muted)" ')}
    </button>
    <button class="iconbtn acct-del" data-del="${esc(a.id)}" title="Profil löschen" aria-label="Profil ${esc(name)} löschen">${icon('x')}</button>
  </div>`;
}

/**
 * Öffnet einen Dialog zum Wechseln zwischen mehreren lokalen Nutzerprofilen,
 * zum Anlegen eines neuen sowie zum Löschen bestehender Profile.
 * `rerender` wird nach jedem State-Wechsel aufgerufen, damit die ganze App neu zeichnet.
 */
export function openUserSwitcher(rerender) {
  const body = () => `
    <h2 style="margin-top:0">${icon('users').replace('<svg ', '<svg style="width:22px;height:22px;vertical-align:-4px" ')} Benutzer wechseln</h2>
    <p class="muted" style="margin-top:0">Mehrere Personen können dieses Gerät nutzen – jedes Profil hat eigenen Fortschritt, eigene Prüfungen und Streak.</p>
    <div class="stack" style="--gap:8px" id="acctList">
      ${listAccounts().map(accountRow).join('')}
    </div>
    <button class="btn btn--outline btn--block" id="addUser" style="margin-top:14px">${icon('star')} Neuen Benutzer hinzufügen</button>`;

  const m = modal(body(), {});

  const refresh = () => { m.root.querySelector('.modal').innerHTML = body(); };

  m.root.addEventListener('click', e => {
    const pick = e.target.closest('[data-switch]');
    const del = e.target.closest('[data-del]');
    const add = e.target.closest('#addUser');

    if (pick) {
      const id = pick.dataset.switch;
      switchAccount(id);
      m.close();
      location.hash = '#/';
      toast('Benutzer gewechselt', 'star');
      // App-Shell (Avatar, Streak, Zähler) komplett neu aufbauen.
      document.getElementById('appShell')?.remove();
      rerender();
      return;
    }

    if (add) {
      createAccount();
      m.close();
      location.hash = '#/onboarding';
      rerender();
      return;
    }

    if (del) {
      const id = del.dataset.del;
      const acc = listAccounts().find(a => a.id === id);
      const nm = acc?.name || 'dieses Profil';
      const only = listAccounts().length <= 1;
      const c = modal(`<h2 style="margin-top:0">Profil löschen?</h2>
        <p class="muted">Der gesamte Fortschritt von <b>${esc(nm)}</b> (Lektionen, Prüfungen, Planspiele, Streak) wird unwiderruflich gelöscht.${only ? ' Da es das letzte Profil ist, startet anschließend die Ersteinrichtung.' : ''}</p>
        <div class="flex gap-sm" style="justify-content:flex-end;margin-top:16px">
          <button class="btn btn--ghost" data-close>Abbrechen</button>
          <button class="btn btn--danger" id="confirmDel">Ja, löschen</button>
        </div>`, {});
      c.root.addEventListener('click', ev => {
        if (ev.target.closest('[data-close]')) c.close();
        if (ev.target.closest('#confirmDel')) {
          const wasActive = acc?.active;
          deleteAccount(id);
          c.close();
          toast('Profil gelöscht', 'ok');
          if (wasActive) {
            m.close();
            // Nach Löschen des aktiven Kontos: neu laden (ggf. Onboarding).
            location.hash = getState().profile ? '#/' : '#/onboarding';
            document.getElementById('appShell')?.remove();
            rerender();
          } else {
            refresh();
          }
        }
      });
      return;
    }
  });
}

export function logoMark() {
  return `<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true">
    <rect x="2" y="2" width="44" height="44" rx="12" fill="#d81f26"/>
    <path d="M24 9 C 24 18 15 20 15 28 a9 9 0 0 0 18 0 c 0 -4 -3 -7 -4 -10 c -1 3 -3 4 -3 1 c 0 -4 0 -8 -2 -11 Z" fill="#fff"/>
    <circle cx="24" cy="29" r="4" fill="#f5a623"/>
  </svg>`;
}
