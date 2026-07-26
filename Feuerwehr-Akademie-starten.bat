@echo off
REM =========================================================================
REM   Feuerwehr Online Akademie - Startprogramm fuer Windows
REM
REM   Prueft der Reihe nach, was vorhanden ist, und startet die App:
REM     1) Python        (falls installiert)        - kein Download
REM     2) Node.js       (falls installiert)        - kein Download
REM     3) Portabler Webserver (Caddy)              - wird bei Bedarf geladen
REM     4) Windows-PowerShell-Server (mitgeliefert) - kein Download, offline
REM
REM   Danach oeffnet sich automatisch der Standardbrowser.
REM   Einfach diese Datei doppelklicken.
REM =========================================================================
setlocal
chcp 65001 >nul
title Feuerwehr Online Akademie
cd /d "%~dp0"

set "PORT=8000"
set "URL=http://localhost:%PORT%/"

echo.
echo   ============================================================
echo      FEUERWEHR ONLINE AKADEMIE   -   Start
echo   ============================================================
echo.
echo   Ordner:   %cd%
echo   Adresse:  %URL%
echo.

if not exist "index.html" goto :noindex

REM ---- Voraussetzungen der Reihe nach pruefen ----------------------------
REM   Wichtig: Interpreter WIRKLICH ausfuehren (--version), nicht nur mit
REM   "where" suchen. Auf Windows 10/11 liefert "where python"/"py" oft die
REM   0-Byte-Platzhalter aus dem Microsoft Store (App-Ausfuehrungsaliase),
REM   die keinen Server starten koennen. Der Versionsaufruf schlaegt bei
REM   diesen Platzhaltern fehl, sodass wir sauber zur naechsten Option gehen.
py -3 --version >nul 2>&1
if not errorlevel 1 goto :python_py
python --version >nul 2>&1
if not errorlevel 1 goto :python_plain
node --version >nul 2>&1
if not errorlevel 1 goto :node
goto :download


:python_py
echo   [OK]  Python-Starter (py) gefunden. Starte lokalen Server...
echo.
call :openbrowser
py -3 -m http.server %PORT%
goto :ende

:python_plain
echo   [OK]  Python gefunden. Starte lokalen Server...
echo.
call :openbrowser
python -m http.server %PORT%
goto :ende

:node
echo   [OK]  Node.js gefunden. Starte lokalen Server...
echo.
call :openbrowser
node -e "const h=require('http'),f=require('fs'),pa=require('path');const port=%PORT%,root=process.cwd();const m={'.html':'text/html','.htm':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.map':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.ico':'image/x-icon','.woff2':'font/woff2','.txt':'text/plain'};h.createServer(function(q,s){var u=decodeURIComponent(q.url.split('?')[0]);if(u==='/')u='/index.html';var fp=pa.join(root,u);f.readFile(fp,function(e,d){if(e){s.statusCode=404;s.end('404');return;}var ct=m[pa.extname(fp).toLowerCase()]||'application/octet-stream';var isText=ct.indexOf('image')<0&&ct.indexOf('font')<0;s.setHeader('Content-Type',isText?ct+'; charset=utf-8':ct);s.setHeader('Cache-Control','no-cache');s.end(d);});}).listen(port,function(){console.log('Feuerwehr Akademie laeuft: %URL%');});"
goto :ende

:download
echo   [i]   Weder Python noch Node.js gefunden.
echo         Versuche, einen portablen Webserver herunterzuladen...
echo.
if not exist "tools" mkdir "tools"
set "CADDY=%~dp0tools\caddy.exe"
if exist "%CADDY%" goto :run_caddy
REM  -TimeoutSec verhindert, dass der Start bei blockierter/langsamer
REM  Verbindung minutenlang haengt - schlaegt der Download fehl, geht es
REM  sofort mit dem mitgelieferten PowerShell-Server weiter.
powershell -NoProfile -ExecutionPolicy Bypass -Command "try { [Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -UseBasicParsing -TimeoutSec 25 -Uri 'https://caddyserver.com/api/download?os=windows&arch=amd64' -OutFile '%CADDY%'; exit 0 } catch { exit 1 }"
if not exist "%CADDY%" goto :psfallback

:run_caddy
echo   [OK]  Portabler Server bereit. Starte...
echo.
call :openbrowser
"%CADDY%" file-server --root "%~dp0." --listen :%PORT%
goto :ende

:psfallback
echo   [i]   Download nicht moeglich (offline?).
echo         Nutze den mitgelieferten Windows-Server (kein Download noetig)...
echo.
if not exist "server.ps1" goto :noserver
set "FWA_PORT=%PORT%"
set "FWA_ROOT=%~dp0"
call :openbrowser
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
goto :ende

:noserver
echo   [FEHLER] "server.ps1" fehlt und es steht kein anderer Server bereit.
echo            Bitte Python (python.org) oder Node.js (nodejs.org)
echo            installieren und erneut starten.
echo.
pause
exit /b 1

:noindex
echo   [FEHLER] "index.html" wurde nicht gefunden.
echo            Bitte diese Datei im Hauptordner der Akademie starten
echo            (dort, wo auch index.html liegt).
echo.
pause
exit /b 1

REM ---- Browser erst oeffnen, wenn der Server erreichbar ist -------------
REM   Frueher wurde der Browser sofort geoeffnet - noch bevor der Server
REM   den Port bediente. Ergebnis: "Verbindung abgelehnt", die Seite lud
REM   nicht nach, der Start wirkte "haengend". Dieser Helfer wartet im
REM   Hintergrund (bis 30s), bis der Port antwortet, und oeffnet erst dann
REM   den Standardbrowser.
:openbrowser
start "" /min powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -Command "for($i=0;$i -lt 60;$i++){try{$c=New-Object Net.Sockets.TcpClient;$c.Connect('localhost',%PORT%);$c.Close();Start-Process '%URL%';break}catch{Start-Sleep -Milliseconds 500}}"
goto :eof

:ende
echo.
echo   Server beendet. Dieses Fenster kann geschlossen werden.
echo.
pause
endlocal
