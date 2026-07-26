# =========================================================================
#  Feuerwehr Online Akademie - Mini-Webserver ohne Installation
#  Statischer Dateiserver auf Basis von System.Net.HttpListener.
#  Wird von "Feuerwehr-Akademie-starten.bat" als Fallback genutzt, wenn
#  weder Python noch Node.js gefunden werden. Benoetigt keinen Download -
#  PowerShell ist auf jedem Windows 10/11 bereits vorhanden.
#
#  Konfiguration ueber Umgebungsvariablen FWA_PORT und FWA_ROOT
#  (setzt die Batch-Datei) oder Standardwerte.
# =========================================================================

$port = 8000
if ($env:FWA_PORT) { try { $port = [int]$env:FWA_PORT } catch { $port = 8000 } }

$root = $PSScriptRoot
if ($env:FWA_ROOT) { $root = $env:FWA_ROOT }
if ([string]::IsNullOrEmpty($root)) { $root = (Get-Location).Path }
$rootFull = [System.IO.Path]::GetFullPath($root)

# MIME-Typen - wichtig: .js/.mjs muessen als JavaScript ausgeliefert werden,
# sonst verweigern Browser das Laden der ES-Module.
$mime = @{
  '.html'        = 'text/html; charset=utf-8'
  '.htm'         = 'text/html; charset=utf-8'
  '.js'          = 'text/javascript; charset=utf-8'
  '.mjs'         = 'text/javascript; charset=utf-8'
  '.css'         = 'text/css; charset=utf-8'
  '.json'        = 'application/json; charset=utf-8'
  '.map'         = 'application/json; charset=utf-8'
  '.webmanifest' = 'application/manifest+json; charset=utf-8'
  '.svg'         = 'image/svg+xml'
  '.png'         = 'image/png'
  '.jpg'         = 'image/jpeg'
  '.jpeg'        = 'image/jpeg'
  '.gif'         = 'image/gif'
  '.ico'         = 'image/x-icon'
  '.woff'        = 'font/woff'
  '.woff2'       = 'font/woff2'
  '.ttf'         = 'font/ttf'
  '.txt'         = 'text/plain; charset=utf-8'
}

# Bewusst 127.0.0.1 (IPv4): passt zur URL, die die Batch-Datei oeffnet, und
# vermeidet die localhost-Zweideutigkeit (IPv4 vs. IPv6). Falls http.sys den
# IP-Prefix ausnahmsweise ablehnt, wird auf den localhost-Prefix zurueckgefallen
# (der antwortet ebenfalls auf 127.0.0.1-Anfragen).
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")
try {
  $listener.Start()
} catch {
  try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
  } catch {
    Write-Host ""
    Write-Host "  [FEHLER] Konnte Port $port nicht oeffnen."
    Write-Host "           Vermutlich laeuft dort bereits ein Server."
    Write-Host ""
    exit 1
  }
}

Write-Host ""
Write-Host "  Feuerwehr Online Akademie laeuft:  http://127.0.0.1:$port/"
Write-Host "  Zum Beenden dieses Fenster schliessen oder Strg+C druecken."
Write-Host ""

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch {
    break
  }
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    $rel = [Uri]::UnescapeDataString($req.Url.AbsolutePath).TrimStart('/')
    if ([string]::IsNullOrEmpty($rel)) { $rel = 'index.html' }
    $rel = $rel.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    $full = [System.IO.Path]::GetFullPath((Join-Path $rootFull $rel))

    if (-not $full.StartsWith($rootFull)) {
      # Verzeichnis-Ausbruch verhindern
      $res.StatusCode = 403
      $res.OutputStream.Close()
      continue
    }
    if ([System.IO.Directory]::Exists($full)) {
      $full = Join-Path $full 'index.html'
    }
    if ([System.IO.File]::Exists($full)) {
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $ct = $mime[$ext]
      if (-not $ct) { $ct = 'application/octet-stream' }
      $res.ContentType = $ct
      $res.Headers['Cache-Control'] = 'no-cache'
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes('404 - nicht gefunden')
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
  } catch {
    try { $res.StatusCode = 500 } catch { }
  } finally {
    try { $res.OutputStream.Close() } catch { }
  }
}
