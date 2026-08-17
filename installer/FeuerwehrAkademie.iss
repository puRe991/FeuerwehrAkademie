; =========================================================================
;  Feuerwehr Online Akademie - Windows-Installationsprogramm (Inno Setup 6)
;
;  Erzeugt ein professionelles Setup ("FeuerwehrAkademie-Setup.exe"), das die
;  Akademie wie normale Software installiert:
;    * Installation nach Programme (oder pro Benutzer, ohne Administrator)
;    * Start-Menue- und (optional) Desktop-Verknuepfung
;    * Eintrag unter "Apps & Features" inkl. sauberem Deinstallationsprogramm
;    * Deutsche und englische Assistenten-Oberflaeche
;
;  Kompilieren (auf einem Windows-PC mit installiertem Inno Setup 6):
;      "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" installer\FeuerwehrAkademie.iss
;  Die Versionsnummer laesst sich beim Aufruf ueberschreiben:
;      ISCC.exe /DAppVersion=1.2.0 installer\FeuerwehrAkademie.iss
;
;  Das Ergebnis liegt danach in "installer\Output\FeuerwehrAkademie-Setup.exe".
; =========================================================================

#ifndef AppVersion
  #define AppVersion "1.0.0"
#endif

#define AppName "Feuerwehr Online Akademie"
#define AppPublisher "Feuerwehr Online Akademie"
#define AppURL "https://github.com/puRe991/FeuerwehrAkademie"

[Setup]
; Eindeutige Kennung der Anwendung (fuer Updates/Deinstallation) - stabil lassen.
AppId={{7E2C4F9A-3B1D-4C6E-9A2F-FEUERWEHRAKADE}}
AppName={#AppName}
AppVersion={#AppVersion}
AppVerName={#AppName} {#AppVersion}
AppPublisher={#AppPublisher}
AppPublisherURL={#AppURL}
AppSupportURL={#AppURL}
AppUpdatesURL={#AppURL}/releases
VersionInfoVersion={#AppVersion}
VersionInfoCompany={#AppPublisher}
VersionInfoDescription={#AppName} Setup

; Zielordner: Programme (bei Installation fuer alle) bzw. pro Benutzer.
DefaultDirName={autopf}\Feuerwehr Online Akademie
DefaultGroupName=Feuerwehr Online Akademie
DisableProgramGroupPage=yes
AllowNoIcons=yes

; Ohne Administratorrechte installierbar; der Nutzer darf im Dialog aber
; auch "fuer alle Benutzer" (mit Rechteerhoehung) waehlen.
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog

; Nur auf Windows 10 und neuer (das Zielpublikum der Akademie).
MinVersion=10.0
ArchitecturesInstallIn64BitMode=x64compatible

; Erscheinungsbild und Deinstallations-Eintrag.
WizardStyle=modern
SetupIconFile=assets\feuerwehr-akademie.ico
UninstallDisplayIcon={app}\feuerwehr-akademie.ico
UninstallDisplayName={#AppName}

; Ausgabe.
OutputDir=Output
OutputBaseFilename=FeuerwehrAkademie-Setup
Compression=lzma2/max
SolidCompression=yes

[Languages]
Name: "german"; MessagesFile: "compiler:Languages\German.isl"
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"

[Files]
; --- Anwendungsdateien (aus dem Projekt-Hauptordner) -------------------
Source: "..\index.html";                     DestDir: "{app}"; Flags: ignoreversion
Source: "..\manifest.webmanifest";           DestDir: "{app}"; Flags: ignoreversion
Source: "..\service-worker.js";              DestDir: "{app}"; Flags: ignoreversion
Source: "..\server.ps1";                     DestDir: "{app}"; Flags: ignoreversion
Source: "..\Feuerwehr-Akademie-starten.bat"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\README.md";                      DestDir: "{app}"; Flags: ignoreversion
; Die Presse-Screenshots (assets\press) gehoeren zum Pressematerial, nicht zur
; App - sie werden ausgeschlossen, damit das Setup schlank bleibt.
Source: "..\assets\*";                       DestDir: "{app}\assets"; Excludes: "\press\*"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "..\docs\*";                         DestDir: "{app}\docs";   Flags: ignoreversion recursesubdirs createallsubdirs

; --- Starter, Beenden-Skript und Icon (aus dem installer-Ordner) --------
Source: "Feuerwehr-Akademie.vbs";            DestDir: "{app}"; Flags: ignoreversion
Source: "Feuerwehr-Akademie-beenden.vbs";    DestDir: "{app}"; Flags: ignoreversion
Source: "assets\feuerwehr-akademie.ico";     DestDir: "{app}"; Flags: ignoreversion

[Icons]
; Startmenue
Name: "{group}\Feuerwehr Online Akademie"; Filename: "{app}\Feuerwehr-Akademie.vbs"; WorkingDir: "{app}"; IconFilename: "{app}\feuerwehr-akademie.ico"; Comment: "Feuerwehr Online Akademie starten"
Name: "{group}\Feuerwehr Akademie beenden"; Filename: "{app}\Feuerwehr-Akademie-beenden.vbs"; WorkingDir: "{app}"; IconFilename: "{app}\feuerwehr-akademie.ico"; Comment: "Den lokalen Server der Akademie beenden"
Name: "{group}\{cm:UninstallProgram,Feuerwehr Online Akademie}"; Filename: "{uninstallexe}"
; Desktop (optional, ueber Aufgabe waehlbar)
Name: "{autodesktop}\Feuerwehr Online Akademie"; Filename: "{app}\Feuerwehr-Akademie.vbs"; WorkingDir: "{app}"; IconFilename: "{app}\feuerwehr-akademie.ico"; Tasks: desktopicon

[Run]
; Nach der Installation direkt starten (optional, im Assistenten abwaehlbar).
Filename: "{app}\Feuerwehr-Akademie.vbs"; Description: "{cm:LaunchProgram,Feuerwehr Online Akademie}"; Flags: postinstall shellexec skipifsilent nowait

[UninstallRun]
; Vor dem Entfernen den ggf. laufenden Hintergrund-Server beenden,
; damit keine Dateien gesperrt sind.
Filename: "wscript.exe"; Parameters: """{app}\Feuerwehr-Akademie-beenden.vbs"" silent"; Flags: runhidden; RunOnceId: "StopFwaServer"
