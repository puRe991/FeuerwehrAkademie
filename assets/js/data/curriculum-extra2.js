/* =========================================================================
   CURRICULUM-EXTRA-2 — Maximale Inhaltstiefe: je 2 weitere Lektionen pro Modul.
   Deckt die verbliebenen Kernpunkte jedes Themengebiets ab, sodass jedes
   Modul einem vollständigen Lehrgang entspricht.
   Wird in curriculum.js an die Module angehängt.
   ========================================================================= */
import { P, H2, H3, UL, OL, KF, CO, DEF, STEPS, MNE, TBL, FIG } from './blocks.js';

export const EXTRA_LESSONS_2 = {

  /* --------------------------------------------------- X (Tauchen, FwDV 8) */
  'x-wasserrettung': [
    {
      id: 'x3', title: 'Tauchen im Feuerwehreinsatz (FwDV 8)', duration: 18,
      blocks: [
        H2('was', 'Tauchen als Spezialaufgabe'),
        P('Der <b>Tauchereinsatz</b> ist in der <b>FwDV 8</b> geregelt. Feuerwehrtauchen dient der Menschenrettung, der Suche und der technischen Hilfe unter Wasser. Es ist eine hoch spezialisierte, gefährliche Tätigkeit – nur ausgebildete und regelmäßig geübte <b>Feuerwehrtaucher</b> mit gültiger arbeitsmedizinischer Vorsorge (G 31) dürfen tauchen.'),
        CO('warn', 'Kein Standard jeder Wehr', 'Nicht jede Feuerwehr hat eine Taucherstaffel. Die meisten Wehren fordern bei Wassernotlagen ausgebildete Taucher (Feuerwehr, DLRG, THW) nach und leisten selbst die Wasserrettung von Land/Boot aus (Rufen–Werfen–Fahren).'),
        H2('trupp', 'Der Tauchtrupp'),
        P('Getaucht wird niemals allein. Der Tauchtrupp besteht mindestens aus:'),
        UL(
          '<b>Taucher</b> – führt den Einsatz unter Wasser durch',
          '<b>Signalmann (Leinenführer)</b> – hält über die Signalleine ständigen Kontakt',
          '<b>Reservetaucher (Sicherungstaucher)</b> – einsatzbereit zur sofortigen Rettung',
          '<b>Tauchereinsatzführer</b> – leitet und überwacht den Tauchgang'),
        DEF('Signalleine & Leinenzugzeichen', 'Über die Signalleine verständigen sich Taucher und Signalmann mit vereinbarten Zugzeichen (z. B. „alles in Ordnung?", „auftauchen"). Bei Ausfall der Kommunikation wird der Tauchgang sofort abgebrochen.'),
        H2('grundsaetze', 'Grundsätze & Grenzen'),
        KF(
          'Nur ausgebildete Feuerwehrtaucher, tauglich (G 31), regelmäßig geübt',
          'Immer mit Reservetaucher und Tauchereinsatzführer',
          'Tauchzeit, Tiefe und Luftvorrat streng überwachen',
          'Gefahren: Strömung, Kälte, Sicht null, Hindernisse, Verhängen'),
        CO('danger', 'Extreme Eigengefährdung', 'Tauchen unter Eis, in Strömung oder in verschmutztem/unübersichtlichem Wasser ist lebensgefährlich. Ohne Spezialausbildung, Ausrüstung und Absicherung wird nicht getaucht – die Wasserrettung von Land/Boot hat für die Regel-Feuerwehr Vorrang.'),
      ],
    },
  ],

};
