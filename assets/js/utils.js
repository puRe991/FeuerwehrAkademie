/* =========================================================================
   UTILS — DOM-Helfer, Escaping, Toasts, kleine Werkzeuge
   ========================================================================= */
import { icon } from './data/icons.js';

/** HTML aus Template-String → Element(e) */
export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/** Sicheres Escaping für Nutzereingaben */
export function esc(s = '') {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

export function qs(sel, root = document) { return root.querySelector(sel); }
export function qsa(sel, root = document) { return [...root.querySelectorAll(sel)]; }

export function on(root, sel, evt, fn) {
  root.addEventListener(evt, e => {
    const t = e.target.closest(sel);
    if (t && root.contains(t)) fn(e, t);
  });
}

export function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase() || '?';
}

export function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return ''; }
}
export function fmtDateTime(iso) {
  try { return new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  catch { return ''; }
}

export function fmtDuration(min) {
  if (min < 60) return `${min} Min.`;
  const h = Math.floor(min / 60), m = min % 60;
  return m ? `${h} Std. ${m} Min.` : `${h} Std.`;
}

/** Fisher–Yates Shuffle (nicht-destruktiv) */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------------- Toasts ---------------- */
let toastWrap;
export function toast(msg, kind = 'ok') {
  if (!toastWrap) {
    toastWrap = el('<div class="toast-wrap" aria-live="polite"></div>');
    document.body.appendChild(toastWrap);
  }
  const ic = kind === 'ok' ? 'check' : kind === 'star' ? 'star' : 'bolt';
  const t = el(`<div class="toast">${icon(ic)}<span>${esc(msg)}</span></div>`);
  toastWrap.appendChild(t);
  setTimeout(() => { t.style.transition = 'opacity .3s, transform .3s'; t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; }, 2600);
  setTimeout(() => t.remove(), 3000);
}

/* ---------------- Modal ---------------- */
export function modal(contentHTML, { onClose } = {}) {
  const back = el(`<div class="modal-back" role="dialog" aria-modal="true"><div class="modal"></div></div>`);
  back.querySelector('.modal').innerHTML = contentHTML;
  const close = () => { back.remove(); onClose?.(); };
  back.addEventListener('click', e => { if (e.target === back) close(); });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
  document.body.appendChild(back);
  return { close, root: back };
}

/* ---------------- Konfetti (leichtgewichtig, canvas-frei) ---------------- */
export function confetti() {
  const colors = ['#d81f26', '#f5a623', '#2e9e5b', '#1e5fa8', '#ffffff'];
  const wrap = el('<div style="position:fixed;inset:0;pointer-events:none;z-index:200;overflow:hidden"></div>');
  document.body.appendChild(wrap);
  for (let i = 0; i < 80; i++) {
    const p = document.createElement('i');
    const size = 6 + Math.random() * 8;
    p.style.cssText = `position:absolute;top:-20px;left:${Math.random() * 100}%;width:${size}px;height:${size * .5}px;background:${colors[i % colors.length]};opacity:.9;border-radius:2px;transform:rotate(${Math.random() * 360}deg)`;
    wrap.appendChild(p);
    const dur = 1800 + Math.random() * 1600;
    p.animate([
      { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
      { transform: `translateY(105vh) rotate(${Math.random() * 720}deg)`, opacity: .9 },
    ], { duration: dur, easing: 'cubic-bezier(.2,.6,.4,1)' });
  }
  setTimeout(() => wrap.remove(), 3600);
}
