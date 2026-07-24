/* =========================================================================
   QUELLEN & STAND — fachliche Bezugsdokumente je Ausbildungsmodul.
   Bewusst getrennt von den umfangreichen Curriculum-Dateien gehalten,
   damit Quellenangaben leicht gepflegt werden können.

   Jeder Eintrag: { stand: 'Jahr', refs: [ { ref, title } … ], note? }
   `ref`   = Kurzbezeichnung der Vorschrift/Norm (z. B. „FwDV 3")
   `title` = ausgeschriebener Titel / Gegenstand
   `note`  = optionaler modulspezifischer Hinweis

   Wichtig: Die genannten Vorschriften sind bundeseinheitliche bzw.
   normative Bezugsdokumente. Verbindlich sind stets deren jeweils
   aktuell veröffentlichte Fassungen sowie die Vorschriften des jeweiligen
   Bundeslandes und der eigenen Feuerwehr.
   ========================================================================= */

/** Allgemeiner Haftungs-/Verbindlichkeitshinweis (überall gleich). */
export const SOURCE_DISCLAIMER =
  'Diese Lerninhalte dienen der Aus- und Fortbildung und ersetzen keine ' +
  'praktische Ausbildung am Standort. Verbindlich sind stets die geltenden ' +
  'Feuerwehr-Dienstvorschriften, die Vorschriften deines Bundeslandes und ' +
  'deiner Feuerwehr sowie die Hersteller- und Geräteangaben. Bei ' +
  'Abweichungen gelten die örtlichen Regelungen.';

const STAND = '2025';

export const MODULE_SOURCES = {
  'a-rechtsgrundlagen': { stand: STAND, refs: [
    { ref: 'Landesbrandschutzgesetze', title: 'z. B. BHKG NRW, BayFwG, FwG BW – Aufgaben, Träger, Pflichten' },
    { ref: 'FwDV 100', title: 'Führung und Leitung im Einsatz (Organisation, Einheiten)' },
    { ref: 'FwDV 2', title: 'Ausbildung der Freiwilligen Feuerwehren' },
  ], note: 'Feuerwehrrecht ist Ländersache – maßgeblich ist das Gesetz deines Bundeslandes.' },

  'b-brennen-loeschen': { stand: STAND, refs: [
    { ref: 'DIN EN 2', title: 'Brandklassen (A, B, C, D, F)' },
    { ref: 'DIN EN 3', title: 'Tragbare Feuerlöscher' },
    { ref: 'vfdb-Richtlinien', title: 'Verbrennungslehre und Löschmittel (fachliche Grundlagen)' },
  ] },

  'c-fahrzeugkunde': { stand: STAND, refs: [
    { ref: 'DIN EN 1846', title: 'Feuerwehrfahrzeuge – Klassifizierung und Anforderungen' },
    { ref: 'DIN 14530', title: 'Löschfahrzeuge (Normbeladung, Kennwerte)' },
    { ref: 'FwDV 3', title: 'Einheiten im Lösch- und Hilfeleistungseinsatz' },
  ] },

  'd-geraetekunde': { stand: STAND, refs: [
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
    { ref: 'DIN EN 469', title: 'Schutzkleidung für die Feuerwehr' },
    { ref: 'HuPF', title: 'Herstellungs- und Prüfungsbeschreibung für Feuerwehrschutzkleidung' },
    { ref: 'FwDV 1', title: 'Grundtätigkeiten – Lösch- und Hilfeleistungseinsatz' },
  ] },

  'e-loescheinsatz': { stand: STAND, refs: [
    { ref: 'FwDV 3', title: 'Einheiten im Lösch- und Hilfeleistungseinsatz' },
    { ref: 'FwDV 1', title: 'Grundtätigkeiten – Lösch- und Hilfeleistungseinsatz' },
  ] },

  'f-atemschutz': { stand: STAND, refs: [
    { ref: 'FwDV 7', title: 'Atemschutz' },
    { ref: 'DGUV Information 205-020', title: 'Auswahl und Einsatz von Atemschutzgeräten' },
    { ref: 'G 26 / arbeitsmed. Vorsorge', title: 'Eignung als Atemschutzgeräteträger' },
  ] },

  'g-technische-hilfe': { stand: STAND, refs: [
    { ref: 'FwDV 3', title: 'Einheiten im Lösch- und Hilfeleistungseinsatz' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
    { ref: 'DIN 14751', title: 'Hydraulische Rettungsgeräte' },
  ] },

  'h-sprechfunk': { stand: STAND, refs: [
    { ref: 'FwDV 810', title: 'Fernmeldedienst / Sprechfunkverkehr (BOS)' },
    { ref: 'TR-BOS', title: 'Technische Richtlinien BOS-Digitalfunk (TETRA)' },
    { ref: 'BOS-Funkrichtlinie', title: 'Betrieb im BOS-Funk' },
  ] },

  'i-gefahrgut': { stand: STAND, refs: [
    { ref: 'FwDV 500', title: 'Einheiten im ABC-Einsatz' },
    { ref: 'ADR / GGVSEB', title: 'Gefahrgutrecht Straße (Kennzeichnung, Klassen)' },
    { ref: 'ERICards / Hommel', title: 'Ersteinsatzhilfen für Gefahrstoffe' },
  ] },

  'j-erste-hilfe': { stand: STAND, refs: [
    { ref: 'ERC-Leitlinien', title: 'Reanimation (European Resuscitation Council)' },
    { ref: 'DGUV Grundsatz 304-001', title: 'Aus- und Fortbildung in der Ersten Hilfe' },
  ], note: 'Die Reanimations-Algorithmen richten sich nach den jeweils aktuellen ERC-/GRC-Leitlinien.' },

  'k-absturzsicherung': { stand: STAND, refs: [
    { ref: 'FwDV 1', title: 'Grundtätigkeiten (Sichern, Halten, Rückhalten)' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
    { ref: 'DIN EN 354/358/361/1891', title: 'Persönliche Schutzausrüstung gegen Absturz' },
  ], note: 'Umfang und Ausbildung der Absturzsicherung regeln die Länder unterschiedlich.' },

  'l-fuehrung-fwdv100': { stand: STAND, refs: [
    { ref: 'FwDV 100', title: 'Führung und Leitung im Einsatz' },
  ] },

  'm-vorbeugender-brandschutz': { stand: STAND, refs: [
    { ref: 'MBO / Landesbauordnungen', title: 'Bauordnungsrechtlicher Brandschutz' },
    { ref: 'DIN 14675', title: 'Brandmeldeanlagen – Aufbau und Betrieb' },
    { ref: 'vfdb-Richtlinien', title: 'Vorbeugender Brand- und Objektschutz' },
  ] },

  'n-maschinist': { stand: STAND, refs: [
    { ref: 'FwDV 2', title: 'Ausbildung – Lehrgang Maschinist' },
    { ref: 'DIN EN 1028', title: 'Feuerlöschkreiselpumpen' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
  ] },

  'o-baukunde': { stand: STAND, refs: [
    { ref: 'MBO / Landesbauordnungen', title: 'Baurechtliche Grundlagen' },
    { ref: 'DIN 4102 / DIN EN 13501', title: 'Brandverhalten von Baustoffen und Bauteilen' },
  ] },

  'p-arbeitsschutz': { stand: STAND, refs: [
    { ref: 'DGUV Vorschrift 1', title: 'Grundsätze der Prävention' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
    { ref: 'ArbSchG', title: 'Arbeitsschutzgesetz' },
  ] },

  'q-jugend': { stand: STAND, refs: [
    { ref: 'Jugendordnungen der Länder', title: 'Landes-/Kreisjugendfeuerwehr-Ordnungen' },
    { ref: 'SGB VIII / JuSchG', title: 'Kinder- und Jugendhilfe, Jugendschutz' },
    { ref: 'DJF', title: 'Deutsche Jugendfeuerwehr – Rahmenempfehlungen' },
  ], note: 'Abzeichen-Anforderungen (Jugendflamme, Leistungsspange) legt die zuständige Jugendfeuerwehr fest.' },

  'r-digital': { stand: STAND, refs: [
    { ref: 'LuftVO / EU 2019/947', title: 'Betrieb unbemannter Luftfahrzeuge (Drohnen/UAS)' },
    { ref: 'vfdb-Richtlinien', title: 'Digitale Einsatzunterstützung, Wärmebildtechnik' },
    { ref: 'Herstellerangaben', title: 'Bedienung von Wärmebildkameras und UAS' },
  ] },

  's-rettung': { stand: STAND, refs: [
    { ref: 'FwDV 1', title: 'Grundtätigkeiten – Retten und Selbstretten' },
    { ref: 'FwDV 7', title: 'Atemschutz (Notfalltraining, Selbstrettung)' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
  ] },

  't-wasserversorgung': { stand: STAND, refs: [
    { ref: 'DVGW W 405', title: 'Bereitstellung von Löschwasser (öffentliche Wasserversorgung)' },
    { ref: 'FwDV 3', title: 'Wasserförderung im Einheiten-Einsatz' },
    { ref: 'DIN 14210 ff.', title: 'Löschwasserbehälter und -entnahmestellen' },
  ] },

  'u-knoten': { stand: STAND, refs: [
    { ref: 'FwDV 1', title: 'Grundtätigkeiten – Knoten, Stiche und Bunde' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
  ] },

  'v-vegetationsbrand': { stand: STAND, refs: [
    { ref: 'vfdb / AGBF-Empfehlungen', title: 'Vegetationsbrandbekämpfung (Taktik, GAMS/Riegelstellung)' },
    { ref: 'FwDV 3', title: 'Einheiten im Lösch- und Hilfeleistungseinsatz' },
  ], note: 'Für die Vegetationsbrandbekämpfung gibt es keine eigene FwDV; maßgeblich sind Fachempfehlungen und örtliche Konzepte.' },

  'w-naturgefahren': { stand: STAND, refs: [
    { ref: 'FwDV 100', title: 'Führung und Leitung bei ausgedehnten Lagen' },
    { ref: 'Landeskatastrophenschutzgesetze', title: 'Zuständigkeiten bei Großschadenslagen' },
    { ref: 'DWD-Warnkriterien', title: 'Unwetterwarnstufen des Deutschen Wetterdienstes' },
  ] },

  'x-wasserrettung': { stand: STAND, refs: [
    { ref: 'FwDV 8', title: 'Tauchen' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
    { ref: 'DLRG/Wasserwacht', title: 'Fachempfehlungen zur Wasser- und Eisrettung' },
  ], note: 'Wasser-, Eis- und Bootsrettung sind stark landes-/organisationsabhängig geregelt.' },

  'y-motorsaege': { stand: STAND, refs: [
    { ref: 'DGUV Information 214-059', title: 'Ausbildung im Umgang mit der Motorsäge' },
    { ref: 'DGUV Vorschrift 49', title: 'Unfallverhütungsvorschrift Feuerwehren' },
    { ref: 'GUV-Modulausbildung', title: 'Motorsägen-Ausbildungsmodule (z. B. Modul A–C)' },
  ] },

  'z-katastrophenschutz': { stand: STAND, refs: [
    { ref: 'ZSKG', title: 'Zivilschutz- und Katastrophenhilfegesetz (Bund)' },
    { ref: 'Landeskatastrophenschutzgesetze', title: 'Katastrophenschutz der Länder' },
    { ref: 'FwDV 100', title: 'Führung und Leitung im Einsatz' },
  ] },
};
