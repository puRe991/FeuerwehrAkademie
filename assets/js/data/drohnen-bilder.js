/* =========================================================================
   DROHNEN-BILDER — Register aller Fotos im Bereich „BOS-Drohnen".

   Alle Bilder stammen von Wikimedia Commons und stehen unter einer freien
   Lizenz (CC BY, CC BY-SA, CC0 oder gemeinfrei). Sie liegen lokal unter
   assets/img/drohnen/ – dadurch funktioniert der Bereich auch offline und
   es werden keine Daten an Dritte übertragen.

   Lizenzpflicht: Jedes Bild wird im Renderer automatisch mit Urheber,
   Lizenz und Quellenlink ausgegeben (siehe views/drohnen.js). Wer Bilder
   ergänzt, trägt hier zwingend Urheber, Lizenz und Quelle ein.
   ========================================================================= */

export const DROHNEN_BILDER = {
  'bos-drohne-start': {
    file: 'assets/img/drohnen/bos-drohne-start.jpg',
    alt: 'Startbereite Feuerwehr-Drohne vom Typ DJI Matrice 300 RTK auf einer Landeplattform',
    author: 'Iswoar', license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:DJI_Matrice_300RTK_Feuerwehr_Drohne_01.jpg',
  },
  'bos-drohne-nutzlast': {
    file: 'assets/img/drohnen/bos-drohne-nutzlast.jpg',
    alt: 'Feuerwehr-Drohne mit angebautem Kamera-Gimbal als Nutzlast in Nahaufnahme',
    author: 'Iswoar', license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:DJI_Matrice_300RTK_Feuerwehr_Drohne_03.jpg',
  },
  'einsatzstelle-drohne': {
    file: 'assets/img/drohnen/einsatzstelle-drohne.jpg',
    alt: 'Drohnenbetrieb der Feuerwehr an einer Einsatzstelle im dicht bebauten Stadtgebiet',
    author: 'Tessa Bury', license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:FDNY_drone_activity_near_former_Pfizer_Building.jpg',
  },
  'bergrettung-uas': {
    file: 'assets/img/drohnen/bergrettung-uas.jpg',
    alt: 'Drohne der Bergrettung im Sucheinsatz im Gebirge',
    author: 'HotNews Romania – Adi Iacob, Ovidiu Popica', license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Salvamont_DJI_Matrice_300_drone.jpg',
  },
  'tethered-uas': {
    file: 'assets/img/drohnen/tethered-uas.jpg',
    alt: 'Über ein Kabel dauerhaft versorgte, gefesselte Drohne im Schwebeflug',
    author: 'Stahlmann', license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:UAV_tethered_flight.jpg',
  },
  'kopter-komponenten': {
    file: 'assets/img/drohnen/kopter-komponenten.jpg',
    alt: 'Zerlegter Quadrokopter-Rahmen mit Motoren, Reglern, Flight Controller und Akku',
    author: 'Lucasbosch', license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    source: 'https://commons.wikimedia.org/wiki/File:XLabs_Shrike_V2_200_mm_quadcopter_frame_with_components.jpg',
  },
  'waermebild-hund': {
    file: 'assets/img/drohnen/waermebild-hund.jpg',
    alt: 'Infrarotaufnahme eines Hundes: warme Körperbereiche hell, kühle Bereiche dunkel',
    author: 'NASA/IPAC', license: 'gemeinfrei',
    licenseUrl: 'https://commons.wikimedia.org/wiki/Template:PD-USGov-NASA',
    source: 'https://commons.wikimedia.org/wiki/File:Infrared_dog.jpg',
  },
  'lipo-aufgeblaeht': {
    file: 'assets/img/drohnen/lipo-aufgeblaeht.jpg',
    alt: 'Aufgeblähter Lithium-Polymer-Akku mit deutlich gewölbtem Gehäuse',
    author: 'Stemoc', license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0',
    source: 'https://commons.wikimedia.org/wiki/File:Lithium-polymer_battery_expanding_from_a_Mobile_Wi-fi_device.jpg',
  },
  'vegetationsbrand-start': {
    file: 'assets/img/drohnen/vegetationsbrand-start.jpg',
    alt: 'Start einer Drohne aus der Hand bei einem Vegetationsbrand-Einsatz',
    author: 'US Forest Service – Northern Region', license: 'gemeinfrei',
    licenseUrl: 'https://commons.wikimedia.org/wiki/Template:PD-USGov',
    source: 'https://commons.wikimedia.org/wiki/File:Drone_taking_off_during_the_2020_Cinnabar_Fire_(52941131720).jpg',
  },
  'kleindrohne': {
    file: 'assets/img/drohnen/kleindrohne.jpg',
    alt: 'Kleine Kameradrohne der Klasse unter 900 Gramm im Flug',
    author: 'Jacek Halicki', license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2015_Dron_DJI_Phantom_3_Advanced.JPG',
  },
};

/** Alle Bilder als Liste – für den Bildnachweis am Ende des Bereichs. */
export const BILDNACHWEIS = Object.entries(DROHNEN_BILDER).map(([id, b]) => ({ id, ...b }));
