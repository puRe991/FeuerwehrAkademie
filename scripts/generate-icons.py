#!/usr/bin/env python3
# =========================================================================
#  Icon- & Splash-Generator für die iOS-/PWA-Version
#  --------------------------------------------------------------------
#  Rendert aus dem Flammen-Emblem der App echte PNG-Dateien:
#   - apple-touch-icon.png (iOS Home-Bildschirm – iOS ignoriert SVG!)
#   - manifest-Icons (any + maskable) für Android/Desktop-PWA
#   - Startbilder (Splash Screens) für iPhones, damit beim Öffnen
#     kein weißer Blitz erscheint.
#
#  Aufruf:  python3 scripts/generate-icons.py
#  Voraussetzung: pip install cairosvg
#  Muss nur erneut laufen, wenn sich Emblem/Farben ändern – die PNGs
#  liegen fertig im Repo und werden sonst nicht gebraucht.
# =========================================================================
import os
import sys

try:
    import cairosvg
except ImportError:
    sys.exit("Bitte zuerst 'pip install cairosvg' ausführen.")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = os.path.join(ROOT, "assets", "icons")
SPLASH = os.path.join(ICONS, "splash")
os.makedirs(SPLASH, exist_ok=True)

RED = "#d81f26"
BG = "#0d1117"        # Hintergrund (dunkel) – passt zu manifest background_color
WHITE = "#ffffff"

# Das Emblem (Flamme + Glutkern) im 512er-Koordinatensystem.
EMBLEM = (
    "<path d='M256 96c0 96-96 117-96 202a96 96 0 0 0 192 0c0-43-32-75-43-107"
    "-11 32-32 43-32 11 0-43 0-85-21-117Z' fill='{white}'/>"
    "<circle cx='256' cy='309' r='43' fill='{amber}'/>"
).format(white=WHITE, amber="#f5a623")


def render(svg: str, path: str, w: int, h: int):
    cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=path,
                     output_width=w, output_height=h)
    print(f"  ✓ {os.path.relpath(path, ROOT)}  ({w}×{h})")


def icon_svg(rounded: bool, bleed: float = 1.0) -> str:
    """App-Icon im 512er-Raster. bleed<1 skaliert das Emblem für die
    maskable-Sicherheitszone. rounded=False -> volle Fläche (Apple maskiert
    die Ecken selbst; transparente Ecken würden sonst schwarz)."""
    rx = 96 if rounded else 0
    s = bleed
    off = 256 * (1 - s)
    return (
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>"
        f"<rect width='512' height='512' rx='{rx}' fill='{RED}'/>"
        f"<g transform='translate({off},{off}) scale({s})'>{EMBLEM}</g>"
        "</svg>"
    )


def splash_svg(w: int, h: int) -> str:
    """Startbild: dunkler Hintergrund, zentriertes Emblem, Titel."""
    short = min(w, h)
    size = short * 0.34          # Emblemgröße
    scale = size / 512
    cx = w / 2 - size / 2
    cy = h / 2 - size / 2 - short * 0.05
    ty = h / 2 + short * 0.18
    fs = short * 0.045
    return (
        f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}'>"
        f"<rect width='{w}' height='{h}' fill='{BG}'/>"
        f"<g transform='translate({cx},{cy}) scale({scale})'>"
        f"<rect width='512' height='512' rx='96' fill='{RED}'/>{EMBLEM}</g>"
        f"<text x='{w/2}' y='{ty}' fill='{WHITE}' text-anchor='middle' "
        f"font-family='-apple-system, Helvetica, Arial, sans-serif' "
        f"font-weight='700' font-size='{fs:.0f}'>Feuerwehr Akademie</text>"
        "</svg>"
    )


# ---- App-Icons ----------------------------------------------------------
print("App-Icons:")
render(icon_svg(rounded=False), os.path.join(ICONS, "apple-touch-icon.png"), 180, 180)
render(icon_svg(rounded=True), os.path.join(ICONS, "icon-192.png"), 192, 192)
render(icon_svg(rounded=True), os.path.join(ICONS, "icon-512.png"), 512, 512)
render(icon_svg(rounded=False, bleed=0.68), os.path.join(ICONS, "icon-192-maskable.png"), 192, 192)
render(icon_svg(rounded=False, bleed=0.68), os.path.join(ICONS, "icon-512-maskable.png"), 512, 512)

# ---- iPhone-Startbilder (Portrait) -------------------------------------
# (device-width, device-height, dpr) -> ergibt Pixelmaße w×h
DEVICES = [
    (375, 667, 2),   # SE 2/3, 8, 7, 6s
    (414, 736, 3),   # 8 Plus, 7 Plus
    (375, 812, 3),   # X, XS, 11 Pro, 12/13 mini
    (390, 844, 3),   # 12, 13, 14
    (393, 852, 3),   # 14 Pro, 15, 15 Pro, 16
    (402, 874, 3),   # 16 Pro
    (414, 896, 2),   # XR, 11
    (414, 896, 3),   # XS Max, 11 Pro Max
    (428, 926, 3),   # 12/13/14 Pro Max, 15/16 Plus
    (430, 932, 3),   # 15 Pro Max, 16 Pro Max
]

print("\niPhone-Startbilder:")
links = []
for dw, dh, dpr in DEVICES:
    w, h = dw * dpr, dh * dpr
    name = f"splash-{w}x{h}.png"
    render(splash_svg(w, h), os.path.join(SPLASH, name), w, h)
    links.append(
        '  <link rel="apple-touch-startup-image" '
        f'media="screen and (device-width: {dw}px) and (device-height: {dh}px) '
        f'and (-webkit-device-pixel-ratio: {dpr}) and (orientation: portrait)" '
        f'href="./assets/icons/splash/{name}">'
    )

print("\n<!-- <head>-Tags für die Startbilder: -->")
print("\n".join(links))
