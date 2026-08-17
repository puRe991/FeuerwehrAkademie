' =========================================================================
'  Feuerwehr Online Akademie - Server beenden
'
'  Stoppt den im Hintergrund laufenden lokalen Webserver (Port 8000).
'  Wird ueber die Start-Menue-Verknuepfung "Feuerwehr Akademie beenden"
'  sowie bei der Deinstallation aufgerufen (dann mit Argument "silent",
'  ohne Rueckmeldung).
' =========================================================================
Option Explicit

Dim shell, silent, ps, args, arg
Set shell = CreateObject("WScript.Shell")

silent = False
Set args = WScript.Arguments
For Each arg In args
    If LCase(arg) = "silent" Then silent = True
Next

' PowerShell-Befehl: den Prozess finden, der Port 8000 bedient, und beenden.
' Get-NetTCPConnection ist auf Windows 8/Server 2012 und neuer vorhanden;
' als Rueckfall wird "netstat" ausgewertet.
ps = "$p=8000;" & _
     "$ids=@();" & _
     "try { $ids=(Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction Stop).OwningProcess } " & _
     "catch { $ids=(netstat -ano | Select-String (':'+$p+'\s') | ForEach-Object { ($_ -split '\s+')[-1] }) };" & _
     "$ids | Sort-Object -Unique | Where-Object { $_ -match '^[0-9]+$' -and [int]$_ -gt 0 } | " & _
     "ForEach-Object { Stop-Process -Id ([int]$_) -Force -ErrorAction SilentlyContinue };"

' Versteckt ausfuehren und auf Abschluss warten.
shell.Run "powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -Command """ & ps & """", 0, True

If Not silent Then
    MsgBox "Die Feuerwehr Online Akademie wurde beendet.", _
           vbInformation, "Feuerwehr Online Akademie"
End If
