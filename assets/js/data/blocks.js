/* =========================================================================
   BLOCKS — Hilfsfunktionen zum kompakten Schreiben von Lektions-Blöcken.
   Von curriculum.js und allen content/-Dateien gemeinsam genutzt.
   Blocktypen siehe views/lesson.js (Renderer).
   ========================================================================= */
export const P   = (html) => ({ t: 'p', html });
export const H2  = (id, text) => ({ t: 'h2', id, text });
export const H3  = (text) => ({ t: 'h3', text });
export const UL  = (...items) => ({ t: 'list', items });
export const OL  = (...items) => ({ t: 'ol', items });
export const KF  = (...items) => ({ t: 'keyfacts', items });
export const CO  = (kind, title, text) => ({ t: 'callout', kind, title, text });
export const DEF = (term, text) => ({ t: 'def', term, text });
export const STEPS = (...items) => ({ t: 'steps', items });
export const MNE = (letters, text) => ({ t: 'mnemonic', letters, text });
export const TBL = (head, rows) => ({ t: 'table', head, rows });
export const FIG = (key, caption) => ({ t: 'fig', key, caption });
