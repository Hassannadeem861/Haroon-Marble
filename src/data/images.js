// Central image registry: dimensions (to prevent layout shift), bilingual alt
// text and licence/credit information for every photograph on the site.
//
// None of the stock images below show work by Haroon Marble. They are used as
// illustrative material only and should be replaced with authentic project
// photography as it becomes available.

const unsplash = (photographer, id) => ({
  source: "Unsplash",
  license: "Unsplash License",
  licenseUrl: "https://unsplash.com/license",
  photographer,
  url: `https://unsplash.com/photos/${id}`,
});

const commons = (photographer, file, license, licenseUrl) => ({
  source: "Wikimedia Commons",
  license,
  licenseUrl,
  photographer,
  url: `https://commons.wikimedia.org/wiki/File:${file}`,
});

export const images = {
  ownerPortrait: {
    src: "/images/owner-portrait.webp",
    width: 1145,
    height: 1374,
    alt: {
      en: "Portrait of the founder of Haroon Marble in a cream jacket and branded black polo shirt",
      ur: "ہارون ماربل کے بانی کی تصویر، کریم رنگ کی جیکٹ اور برانڈڈ سیاہ پولو شرٹ میں",
    },
    credit: null,
  },
  heroLobby: {
    src: "/images/stock/hero-marble-lobby.jpg",
    width: 2400,
    height: 1440,
    alt: {
      en: "Double-height lobby with a white and gold marble reception desk and polished stone floor",
      ur: "دو منزلہ اونچی لابی جس میں سفید اور سنہری ماربل کا استقبالیہ کاؤنٹر اور چمکدار پتھر کا فرش ہے",
    },
    credit: unsplash("Aalo Lens", "Accg0bUgp7k"),
  },
  marbleWhite: {
    src: "/images/stock/marble-white-veined.jpg",
    width: 1600,
    height: 2400,
    alt: { en: "Close-up of white marble with soft grey veining", ur: "ہلکی سرمئی دھاریوں والے سفید ماربل کا قریبی منظر" },
    credit: unsplash("Augustine Wong", "li0iC0rjvvg"),
  },
  marbleGrey: {
    src: "/images/stock/marble-grey-veined.jpg",
    width: 1600,
    height: 1067,
    alt: { en: "White marble surface with fine grey veins", ur: "باریک سرمئی دھاریوں والی سفید ماربل کی سطح" },
    credit: unsplash("Akbar Nemati", "WQqWJb_9tDc"),
  },
  marbleGold: {
    src: "/images/stock/marble-gold-veined.jpg",
    width: 1600,
    height: 1067,
    alt: { en: "White marble with warm brown and gold veining", ur: "گرم بھوری اور سنہری دھاریوں والا سفید ماربل" },
    credit: unsplash("Martin Leitgeb", "eqOxVR2xMrQ"),
  },
  marbleBlack: {
    src: "/images/stock/marble-black-nero.jpg",
    width: 1600,
    height: 1199,
    alt: { en: "Black marble with bright white veining", ur: "نمایاں سفید دھاریوں والا سیاہ ماربل" },
    credit: unsplash("Kier in Sight Archives", "HXPUOdHuYoU"),
  },
  stoneGreen: {
    src: "/images/stock/stone-green.jpg",
    width: 1600,
    height: 1067,
    alt: { en: "Deep green natural stone with dark veining", ur: "گہری دھاریوں والا گہرا سبز قدرتی پتھر" },
    credit: unsplash("Olga Thelavart", "lIg6fu2yxFk"),
  },
  stoneQuartziteGold: {
    src: "/images/stock/stone-quartzite-gold.jpg",
    width: 1600,
    height: 1199,
    alt: { en: "Pale stone with amber and rust coloured veins", ur: "کہربائی اور زنگ آلود رنگ کی دھاریوں والا ہلکا پتھر" },
    credit: unsplash("Kier in Sight Archives", "zxQ6bSkHVC0"),
  },
  tilePattern: {
    src: "/images/stock/tile-geometric-pattern.jpg",
    width: 1600,
    height: 2133,
    alt: { en: "Geometric cube-pattern tiles in yellow, green and white", ur: "پیلے، سبز اور سفید رنگ کی جیومیٹرک کیوب ڈیزائن ٹائلز" },
    credit: unsplash("Bernd Dittrich", "_Zz-pcaQ7mM"),
  },
  floorPolishedMarble: {
    src: "/images/stock/floor-polished-marble.jpg",
    width: 2000,
    height: 2999,
    alt: { en: "Large-format polished white marble floor tiles with grey veining", ur: "سرمئی دھاریوں والی بڑے سائز کی چمکدار سفید ماربل فرش ٹائلز" },
    credit: unsplash("Tile Merchant Ireland", "5SjqBAXf9_E"),
  },
  kitchenGoldVein: {
    src: "/images/stock/kitchen-gold-vein-island.jpg",
    width: 2000,
    height: 1125,
    alt: { en: "Bright kitchen with a gold-veined white marble island and matching splashback", ur: "سنہری دھاریوں والے سفید ماربل آئی لینڈ اور ہم رنگ دیوار والا روشن کچن" },
    credit: unsplash("Smart Renovations", "07b4cw2eOzM"),
  },
  kitchenDarkIsland: {
    src: "/images/stock/kitchen-dark-island.jpg",
    width: 2000,
    height: 1231,
    alt: { en: "Kitchen with a long dark stone island, bar stools and light stone floor", ur: "لمبے گہرے پتھر کے آئی لینڈ، اسٹولز اور ہلکے پتھر کے فرش والا کچن" },
    credit: unsplash("Brian Zajac", "lE7pmNZZ3Fw"),
  },
  kitchenWhiteIsland: {
    src: "/images/stock/kitchen-white-island.jpg",
    width: 2000,
    height: 1333,
    alt: { en: "Open-plan kitchen with a white veined marble island", ur: "سفید دھاری دار ماربل آئی لینڈ والا کھلا کچن" },
    credit: unsplash("Zac Gudakov", "JyeUdbb9TOg"),
  },
  kitchenWaterfall: {
    src: "/images/stock/kitchen-waterfall-island.jpg",
    width: 2000,
    height: 1333,
    alt: { en: "Kitchen island with a waterfall marble edge and bar seating", ur: "آبشار نما ماربل کنارے اور بیٹھنے کی جگہ والا کچن آئی لینڈ" },
    credit: unsplash("Zac Gudakov", "o-uPDNNSsDA"),
  },
  kitchenOpenPlan: {
    src: "/images/stock/kitchen-open-plan.jpg",
    width: 2000,
    height: 1333,
    alt: { en: "White kitchen with a large marble island and pendant lights", ur: "بڑے ماربل آئی لینڈ اور لٹکتی روشنیوں والا سفید کچن" },
    credit: unsplash("Zac Gudakov", "9j9b2L0qAYU"),
  },
  bathroomMarbleWalls: {
    src: "/images/stock/bathroom-marble-walls.jpg",
    width: 2000,
    height: 2000,
    alt: { en: "Bathroom with full-height gold-veined marble walls and a floating vanity", ur: "پوری اونچائی کی سنہری دھاری دار ماربل دیواروں اور تیرتی وینٹی والا باتھ روم" },
    credit: unsplash("Puscas Adryan", "cctXsbxydg0"),
  },
  bathroomVanity: {
    src: "/images/stock/bathroom-marble-vanity.jpg",
    width: 2000,
    height: 2000,
    alt: { en: "Marble vanity top with a round stone basin and fluted tiles", ur: "گول پتھر کے بیسن اور لکیر دار ٹائلز کے ساتھ ماربل وینٹی ٹاپ" },
    credit: unsplash("Ela De Pure", "GqlosWVi5zo"),
  },
  bathroomShower: {
    src: "/images/stock/bathroom-marble-shower.jpg",
    width: 2000,
    height: 1334,
    alt: { en: "Walk-in shower with large white marble-look wall panels and a recessed niche", ur: "سفید ماربل جیسے بڑے دیواری پینلز اور طاق والا واک اِن شاور" },
    credit: unsplash("Smart Renovations", "Ies-rhvusTs"),
  },
  bathroomDarkTile: {
    src: "/images/stock/bathroom-dark-tile.jpg",
    width: 2000,
    height: 3000,
    alt: { en: "Bathroom with dark large-format wall tiles and a white vanity", ur: "گہرے رنگ کی بڑی دیواری ٹائلز اور سفید وینٹی والا باتھ روم" },
    credit: unsplash("Alex Tyson", "0e3jwsgNA40"),
  },
  staircaseStone: {
    src: "/images/stock/staircase-stone-glass.jpg",
    width: 2000,
    height: 3333,
    alt: { en: "Stone staircase with a glass balustrade beside a pale marble wall", ur: "ہلکی ماربل دیوار کے ساتھ شیشے کی ریلنگ والی پتھر کی سیڑھیاں" },
    credit: unsplash("Wesley Shen", "2l2EslhTaOM"),
  },
  staircaseCurved: {
    src: "/images/stock/staircase-curved.jpg",
    width: 2000,
    height: 3553,
    alt: { en: "Curved stone staircase with a wrought-iron balustrade", ur: "لوہے کی ریلنگ والی خم دار پتھر کی سیڑھی" },
    credit: unsplash("Amy W.", "dTTjLxK3zD8"),
  },
  lobbyReception: {
    src: "/images/stock/commercial-lobby-reception.jpg",
    width: 2000,
    height: 1125,
    alt: { en: "Office lobby with a marble reception desk, wood panelling and polished floor", ur: "ماربل استقبالیہ، لکڑی کی پینلنگ اور چمکدار فرش والی دفتری لابی" },
    credit: unsplash("Aalo Lens", "pt0nGH-NvoA"),
  },
  elevatorLobby: {
    src: "/images/stock/commercial-elevator-lobby.jpg",
    width: 2000,
    height: 1500,
    alt: { en: "Elevator lobby with stone-clad walls and a polished light marble floor", ur: "پتھر سے ڈھکی دیواروں اور چمکدار ہلکے ماربل فرش والی لفٹ لابی" },
    credit: unsplash("Aalo Lens", "713E0LsFGz0"),
  },
  officeLobby: {
    src: "/images/stock/commercial-office-lobby.jpg",
    width: 2000,
    height: 1125,
    alt: { en: "Office lobby with a dark marble feature wall beside the elevators", ur: "لفٹوں کے ساتھ گہرے ماربل کی نمایاں دیوار والی دفتری لابی" },
    credit: unsplash("Aalo Lens", "b08Pe9MV_eU"),
  },
  receptionStone: {
    src: "/images/stock/commercial-reception-stone.jpg",
    width: 2000,
    height: 1125,
    alt: { en: "Reception desk with a back-lit onyx-style stone front", ur: "پیچھے سے روشن اونکس طرز کے پتھر والا استقبالیہ کاؤنٹر" },
    credit: unsplash("Aalo Lens", "tUcVQwXsNck"),
  },
  lobbyWoodStone: {
    src: "/images/stock/commercial-lobby-wood-stone.jpg",
    width: 2000,
    height: 1125,
    alt: { en: "Lobby with timber walls, a stone reception counter and a light stone floor", ur: "لکڑی کی دیواروں، پتھر کے کاؤنٹر اور ہلکے پتھر کے فرش والی لابی" },
    credit: unsplash("Aalo Lens", "Ypv0MH4izf8"),
  },
  hospitalityCorridor: {
    src: "/images/stock/hospitality-corridor.jpg",
    width: 2000,
    height: 1500,
    alt: { en: "Hotel corridor with travertine-look wall cladding and a polished floor", ur: "ٹراورٹائن جیسی دیواری کلیڈنگ اور چمکدار فرش والی ہوٹل راہداری" },
    credit: unsplash("Aalo Lens", "1PXsFfTbEcI"),
  },
  institutionalArches: {
    src: "/images/stock/institutional-arches.jpg",
    width: 2000,
    height: 3000,
    alt: { en: "Pointed stone arches reflected in a polished marble floor", ur: "چمکدار ماربل فرش میں منعکس نوکیلی پتھر کی محرابیں" },
    credit: unsplash("Rafael Peier", "Lym5SOrPoF4"),
  },
  livingRoom: {
    src: "/images/stock/residential-living-room.jpg",
    width: 2000,
    height: 1032,
    alt: { en: "Calm residential living room with panelled walls and pale flooring", ur: "پینل والی دیواروں اور ہلکے فرش والا پُرسکون رہائشی کمرہ" },
    credit: unsplash("JALG TV Stand", "jEljLQKeY10"),
  },
  installLargeFormat: {
    src: "/images/stock/install-large-format-tiles.jpg",
    width: 1600,
    height: 1200,
    alt: { en: "Two tilers setting large-format floor tiles with lifting equipment", ur: "دو کاریگر لفٹنگ آلات کی مدد سے بڑے سائز کی فرش ٹائلز لگا رہے ہیں" },
    credit: commons(
      "Alexander Eichler",
      "Großformate_-_Verlegung_Donauhalle_Ulm.jpg",
      "CC BY 3.0",
      "https://creativecommons.org/licenses/by/3.0/",
    ),
  },
  installTrowel: {
    src: "/images/stock/install-trowel-floor-tiles.jpg",
    width: 1920,
    height: 1920,
    alt: { en: "Hand spreading tile adhesive with a notched trowel", ur: "دندانے دار کرنی سے ٹائل کا مسالہ پھیلاتا ہوا ہاتھ" },
    credit: commons(
      "Francisco Gonzalez",
      "Using_a_trowel_to_lay_floor_tiles.jpg",
      "CC BY 2.0",
      "https://creativecommons.org/licenses/by/2.0/",
    ),
  },
};

export function getImage(key) {
  const image = images[key];
  if (!image) throw new Error(`Unknown image key: ${key}`);
  return image;
}
