/* =========================================================================
   VERSION — Zentrale Quelle für Versionsnummer & Copyright
   Bei jeder Veröffentlichung anpassen. Schema: Semantic Versioning
   (MAJOR.MINOR.PATCH – https://semver.org):
     MAJOR  große/inkompatible Änderungen
     MINOR  neue Inhalte/Funktionen (abwärtskompatibel)
     PATCH  Korrekturen, kleine Verbesserungen
   Hinweis: Beim Erhöhen der Version auch den Service-Worker-Cache
   (service-worker.js → CACHE) neu setzen, damit Updates ausgeliefert werden.
   ========================================================================= */
export const APP_VERSION = '1.0.0';
export const BUILD_DATE = '2026-07-23';

/* Inhaber des Urheberrechts – hier ggf. den eigenen Namen/Verein eintragen. */
export const COPYRIGHT_HOLDER = 'Feuerwehr Online Akademie';
export const COPYRIGHT_YEAR = 2026;

/* Fertige Copyright-Zeile für die Anzeige (© Jahr Inhaber). */
export const COPYRIGHT = `© ${COPYRIGHT_YEAR} ${COPYRIGHT_HOLDER}`;
