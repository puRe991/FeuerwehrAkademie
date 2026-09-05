/* =========================================================================
   DROHNEN-BLOCKS — Zusätzliche Blocktypen für den Ausbildungsbereich
   „BOS-Drohnen". Ergänzen die allgemeinen Blöcke aus blocks.js um Elemente,
   die für eine Fernpiloten-Ausbildung gebraucht werden:

     FIGD    Schaubild aus drohnen-diagrams.js
     QUIZ    Selbsttest mit aufklappbarer Musterlösung
     VID     Lernvideo-Platz (Click-to-Load, DSGVO-freundlich)
     CHECK   abhakbare Checkliste (Zustand nur in der Sitzung)
     FUNK    Funk-/Sprechbeispiel im Sprechgruppen-Layout
     LAW     Rechtsnorm-Kasten mit Fundstelle (EU-Recht)
     CASE    Fallbeispiel/Szenario mit Auswertung
     TIME    Zeitleiste / Ablauf mit Zeitmarken

   Renderer: views/drohnen.js
   ========================================================================= */
export const FIGD  = (key, caption) => ({ t: 'figd', key, caption });
export const QUIZ  = (...items) => ({ t: 'quiz', items });          // {q, a}
export const VID   = (v) => ({ t: 'video', ...v });                  // {title, youtubeId, minutes, desc, search}
export const CHECK = (title, ...items) => ({ t: 'check', title, items });
export const FUNK  = (title, ...lines) => ({ t: 'funk', title, lines }); // {from, text}
export const LAW   = (ref, title, text) => ({ t: 'law', ref, title, text });
export const CASE  = (title, text, questions = []) => ({ t: 'case', title, text, questions });
export const TIME  = (title, ...items) => ({ t: 'time', title, items }); // {at, text}

/** Foto aus dem Bildregister (drohnen-bilder.js) inkl. automatischem Lizenznachweis. */
export const IMG = (key, caption) => ({ t: 'img', key, caption });
