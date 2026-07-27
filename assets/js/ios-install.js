/* =========================================================================
   iOS-Installationshinweis
   -------------------------------------------------------------------------
   iOS-Safari kennt kein `beforeinstallprompt`. Damit die App auch auf dem
   iPhone/iPad als Home-Bildschirm-App landet, blenden wir einmalig einen
   dezenten Hinweis ein: „Teilen → Zum Home-Bildschirm".
   Nur in Safari (dort funktioniert die Installation), nur wenn die App
   noch nicht im Standalone-Modus läuft, und wegklickbar/merkend.
   ========================================================================= */

const DISMISS_KEY = 'fwa:iosHint';
const SNOOZE_DAYS = 14;

function isStandalone() {
  return window.navigator.standalone === true ||
         window.matchMedia('(display-mode: standalone)').matches;
}

function isIOS() {
  const ua = navigator.userAgent;
  const iOSDevice = /iphone|ipad|ipod/i.test(ua);
  // iPadOS meldet sich teils als „MacIntel" mit Touch
  const iPadDesktop = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return iOSDevice || iPadDesktop;
}

function isSafari() {
  const ua = navigator.userAgent;
  // Add-to-Home-Screen gibt es nur in Safari, nicht in Chrome/Firefox/Edge für iOS
  return !/crios|fxios|edgios|opios|mercury/i.test(ua);
}

function recentlyDismissed() {
  try {
    const ts = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return ts && (Date.now() - ts) < SNOOZE_DAYS * 864e5;
  } catch { return false; }
}

function dismiss(banner) {
  try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch {}
  banner.style.transition = 'opacity .25s, transform .25s';
  banner.style.opacity = '0';
  banner.style.transform = 'translateY(12px)';
  setTimeout(() => banner.remove(), 260);
}

// Teilen-Symbol von iOS (Rechteck mit Pfeil nach oben)
const SHARE_ICON =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" ' +
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
  'stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M12 15V3"/><path d="m8 7 4-4 4 4"/>' +
  '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/></svg>';

function show() {
  const banner = document.createElement('div');
  banner.className = 'ios-install';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'App installieren');
  banner.innerHTML = `
    <img class="ios-install__icon" src="./assets/icons/apple-touch-icon.png" alt="" width="44" height="44">
    <div class="ios-install__txt">
      <b>Als App installieren</b>
      <p>Tippe auf <span class="ios-install__share">${SHARE_ICON}</span> und dann auf
      „<b>Zum Home-Bildschirm</b>" – dann läuft die Akademie offline wie eine echte App.</p>
    </div>
    <button class="ios-install__close" type="button" aria-label="Hinweis schließen">&times;</button>`;
  banner.querySelector('.ios-install__close').addEventListener('click', () => dismiss(banner));
  document.body.appendChild(banner);
}

export function initIOSInstallHint() {
  if (!isIOS() || !isSafari() || isStandalone() || recentlyDismissed()) return;
  // Erst nach kurzem Ankommen zeigen, nicht sofort beim Laden
  setTimeout(show, 2500);
}
