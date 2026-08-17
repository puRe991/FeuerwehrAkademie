' =========================================================================
'  Feuerwehr Online Akademie - App-Starter (fuer die installierte Version)
'
'  Wird von den Start-/Desktop-Verknuepfungen des Setups aufgerufen.
'  Startet den mitgelieferten, offline-faehigen Webserver OHNE sichtbares
'  Konsolenfenster und oeffnet die Akademie anschliessend als eigenstaendiges
'  App-Fenster (Edge/Chrome App-Modus), sonst im Standardbrowser.
'
'  Warum ueberhaupt ein Server? Die Akademie besteht aus ES-Modulen und
'  einem Service-Worker - beide laufen aus Sicherheitsgruenden nicht per
'  "file://", sondern nur ueber "http://". Der Server bindet ausschliesslich
'  an 127.0.0.1 (nur dieser PC) und benoetigt keine Administratorrechte.
' =========================================================================
Option Explicit

Dim shell, fso, appDir, port, url
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

appDir = fso.GetParentFolderName(WScript.ScriptFullName)
port = 8000
url = "http://127.0.0.1:" & port & "/"

' Laeuft bereits eine Instanz? Dann nur ein weiteres Fenster oeffnen.
If Not ServerAntwortet(url) Then
    StarteServer appDir, port
    ' Bis zu ~30 Sekunden warten, bis der Server den Port bedient.
    Dim i, bereit
    bereit = False
    For i = 1 To 60
        If ServerAntwortet(url) Then
            bereit = True
            Exit For
        End If
        WScript.Sleep 500
    Next
    If Not bereit Then
        MsgBox "Die Feuerwehr Online Akademie konnte nicht gestartet werden." & vbCrLf & _
               "Bitte stellen Sie sicher, dass Windows PowerShell verfuegbar ist.", _
               vbExclamation, "Feuerwehr Online Akademie"
        WScript.Quit 1
    End If
End If

OeffneApp url


' ---- Server versteckt starten (mitgelieferter PowerShell-Server) --------
Sub StarteServer(pfad, p)
    shell.CurrentDirectory = pfad
    shell.Environment("PROCESS")("FWA_PORT") = CStr(p)
    shell.Environment("PROCESS")("FWA_ROOT") = pfad
    Dim cmd
    cmd = "powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File """ & _
          pfad & "\server.ps1"""
    ' 0 = kein Fenster, False = nicht auf Beenden warten (Server laeuft weiter)
    shell.Run cmd, 0, False
End Sub

' ---- Prueft per HTTP-Anfrage, ob der Server erreichbar ist --------------
Function ServerAntwortet(u)
    Dim http
    ServerAntwortet = False
    On Error Resume Next
    Set http = CreateObject("MSXML2.XMLHTTP")
    http.Open "GET", u, False
    http.Send
    If Err.Number = 0 Then
        If http.Status >= 200 And http.Status < 500 Then ServerAntwortet = True
    End If
    On Error GoTo 0
End Function

' ---- App-Fenster oeffnen: Edge/Chrome App-Modus, sonst Standardbrowser ---
Sub OeffneApp(u)
    Dim kandidaten, k, exe
    kandidaten = Array( _
        "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe", _
        "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe", _
        "%ProgramFiles%\Google\Chrome\Application\chrome.exe", _
        "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe", _
        "%LocalAppData%\Google\Chrome\Application\chrome.exe" _
    )
    For Each k In kandidaten
        exe = shell.ExpandEnvironmentStrings(k)
        If fso.FileExists(exe) Then
            ' App-Modus = randloses, eigenstaendiges Fenster (wie eine Desktop-App)
            shell.Run """" & exe & """ --app=" & u, 1, False
            Exit Sub
        End If
    Next
    ' Fallback: Standardbrowser
    shell.Run u, 1, False
End Sub
