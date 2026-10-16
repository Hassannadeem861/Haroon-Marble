// Portfolio entries.
//
// IMPORTANT: every entry below is a DESIGN IDEA built from licensed stock
// photography, not a completed Nadeem Marbles project. The section is presented
// as "Design Ideas" (nav, headings, summaries "A concept for..."), so it must
// never be renamed to imply finished work while these photos are used.
// When real projects are available, add them with illustrative: false and
// real photos, and consider a separate "Projects" section for them.

export const projectCategories = [
  { id: "residential", label: { en: "Residential", ur: "رہائشی" } },
  { id: "commercial", label: { en: "Commercial", ur: "کمرشل" } },
  { id: "flooring", label: { en: "Flooring", ur: "فرش" } },
  { id: "bathrooms", label: { en: "Bathrooms", ur: "باتھ روم" } },
  { id: "kitchens", label: { en: "Kitchens", ur: "کچن" } },
  { id: "marble-work", label: { en: "Marble Work", ur: "ماربل کا کام" } },
];

export const projects = [
  {
    slug: "gold-vein-marble-kitchen",
    illustrative: true,
    categories: ["residential", "kitchens", "marble-work"],
    cover: "kitchenGoldVein",
    gallery: ["kitchenGoldVein", "kitchenWhiteIsland", "marbleGold"],
    title: { en: "Gold-Vein Marble Kitchen", ur: "سنہری دھاریوں والا ماربل کچن" },
    summary: {
      en: "A concept for a bright family kitchen where a gold-veined island and splashback become the centrepiece.",
      ur: "ایک روشن فیملی کچن کا تصور جہاں سنہری دھاریوں والا آئی لینڈ اور دیوار مرکزی کشش بنتے ہیں۔",
    },
    approach: {
      en: [
        "Measure the island and wall runs and model them in 3D to plan where the strongest veining should sit.",
        "Continue the vein direction from the worktop up the splashback so the stone reads as one surface.",
        "Keep surrounding floor tiles calm and light so the marble remains the focus.",
      ],
      ur: [
        "آئی لینڈ اور دیواروں کی پیمائش کر کے 3D ماڈل بنانا تاکہ نمایاں ترین دھاریوں کی جگہ طے ہو۔",
        "ورک ٹاپ سے دیوار تک دھاریوں کی سمت جاری رکھنا تاکہ پتھر ایک ہی سطح لگے۔",
        "اردگرد کی فرش ٹائلز کو ہلکا اور سادہ رکھنا تاکہ توجہ ماربل پر رہے۔",
      ],
    },
    services: ["2d-3d-surface-modelling", "surface-design", "marble-installation"],
    materials: { en: ["White marble with gold veining", "Light porcelain floor tiles"], ur: ["سنہری دھاریوں والا سفید ماربل", "ہلکے رنگ کی پورسلین فرش ٹائلز"] },
  },
  {
    slug: "marble-clad-bathroom",
    illustrative: true,
    categories: ["residential", "bathrooms", "marble-work"],
    cover: "bathroomMarbleWalls",
    gallery: ["bathroomMarbleWalls", "bathroomVanity", "bathroomShower"],
    title: { en: "Full-Height Marble Bathroom", ur: "پوری اونچائی کا ماربل باتھ روم" },
    summary: {
      en: "A concept for a bathroom wrapped in large marble panels, with a floating vanity and concealed lighting.",
      ur: "بڑے ماربل پینلز سے ڈھکے باتھ روم کا تصور، تیرتی وینٹی اور چھپی ہوئی روشنی کے ساتھ۔",
    },
    approach: {
      en: [
        "Set out panel joints to line up with the vanity, mirror and shower niche.",
        "Use a slip-aware finish on the floor while keeping walls polished.",
        "Plan cut-outs for taps and lighting before panels are fixed.",
      ],
      ur: [
        "پینلز کے جوڑ وینٹی، آئینے اور شاور کے طاق کی سیدھ میں رکھنا۔",
        "دیواروں کو پالش رکھتے ہوئے فرش پر پھسلن سے محفوظ فنش استعمال کرنا۔",
        "پینل لگانے سے پہلے نلکوں اور روشنی کے لیے کٹ آؤٹ کی منصوبہ بندی۔",
      ],
    },
    services: ["marble-installation", "pattern-and-layout-planning", "wall-cladding-and-feature-walls"],
    materials: { en: ["Gold-veined marble wall panels", "Honed stone floor"], ur: ["سنہری دھاریوں والے ماربل دیواری پینل", "ہونڈ پتھر کا فرش"] },
  },
  {
    slug: "office-lobby-stone-floor",
    illustrative: true,
    categories: ["commercial", "flooring", "marble-work"],
    cover: "elevatorLobby",
    gallery: ["elevatorLobby", "lobbyReception", "officeLobby"],
    title: { en: "Office Lobby Stone Floor", ur: "دفتری لابی کا پتھریلا فرش" },
    summary: {
      en: "A concept for a commercial lobby with a polished light marble floor and stone-clad lift walls.",
      ur: "ایک کمرشل لابی کا تصور جس میں چمکدار ہلکا ماربل فرش اور پتھر سے ڈھکی لفٹ کی دیواریں ہیں۔",
    },
    approach: {
      en: [
        "Align floor joints with the lift doors and reception desk for a calm, ordered look.",
        "Choose a finish suited to heavy daily foot traffic.",
        "Phase the work so parts of the lobby can stay in use.",
      ],
      ur: [
        "پرسکون اور منظم تاثر کے لیے فرش کے جوڑ لفٹ کے دروازوں اور استقبالیہ کی سیدھ میں رکھنا۔",
        "روزانہ کی بھاری آمد و رفت کے مطابق فنش کا انتخاب۔",
        "کام کو مراحل میں تقسیم کرنا تاکہ لابی کا کچھ حصہ استعمال میں رہے۔",
      ],
    },
    services: ["marble-flooring", "2d-3d-surface-modelling", "marble-installation"],
    materials: { en: ["Light polished marble floor", "Stone wall cladding"], ur: ["ہلکا چمکدار ماربل فرش", "پتھر کی دیواری کلیڈنگ"] },
  },
  {
    slug: "stone-staircase",
    illustrative: true,
    categories: ["residential", "marble-work"],
    cover: "staircaseStone",
    gallery: ["staircaseStone", "staircaseCurved"],
    title: { en: "Stone Staircase & Landing", ur: "پتھر کی سیڑھی اور لینڈنگ" },
    summary: {
      en: "A concept for a staircase with stone treads, a glass balustrade and a matching marble wall.",
      ur: "پتھر کے پائیدان، شیشے کی ریلنگ اور ہم رنگ ماربل دیوار والی سیڑھی کا تصور۔",
    },
    approach: {
      en: [
        "Measure every rise and going on site so each tread sits level.",
        "Keep nosing profiles consistent from bottom to top.",
        "Match the wall stone to the treads for a continuous look.",
      ],
      ur: [
        "ہر سیڑھی کی اونچائی اور گہرائی سائٹ پر ناپنا تاکہ ہر پائیدان لیول ہو۔",
        "نیچے سے اوپر تک کناروں کی پروفائل یکساں رکھنا۔",
        "مسلسل تاثر کے لیے دیوار کے پتھر کو پائیدانوں سے ملانا۔",
      ],
    },
    services: ["staircases-and-custom-marble-work", "2d-3d-surface-modelling"],
    materials: { en: ["Stone stair treads", "Pale marble wall"], ur: ["پتھر کے پائیدان", "ہلکے رنگ کی ماربل دیوار"] },
  },
  {
    slug: "geometric-pattern-floor",
    illustrative: true,
    categories: ["residential", "flooring"],
    cover: "tilePattern",
    gallery: ["tilePattern", "installTrowel"],
    title: { en: "Geometric Pattern Tile Floor", ur: "جیومیٹرک ڈیزائن والا ٹائل فرش" },
    summary: {
      en: "A concept for a decorative tiled entrance using a three-colour cube pattern centred on the doorway.",
      ur: "دروازے کے مرکز پر رکھے گئے تین رنگوں کے کیوب پیٹرن کے ساتھ آرائشی ٹائل والے داخلی راستے کا تصور۔",
    },
    approach: {
      en: [
        "Plan the pattern from the doorway centre line so it greets visitors straight on.",
        "Balance cut tiles evenly at both side walls.",
        "Frame the pattern with a plain border to finish the edges cleanly.",
      ],
      ur: [
        "پیٹرن کو دروازے کی مرکزی لائن سے ترتیب دینا تاکہ آنے والوں کے سامنے سیدھا نظر آئے۔",
        "دونوں دیواروں پر کٹی ٹائلوں کا یکساں توازن۔",
        "کناروں کو صاف رکھنے کے لیے سادہ بارڈر سے پیٹرن کو گھیرنا۔",
      ],
    },
    services: ["pattern-and-layout-planning", "tile-installation"],
    materials: { en: ["Patterned ceramic tiles", "Plain border tiles"], ur: ["ڈیزائن والی سیرامک ٹائلز", "سادہ بارڈر ٹائلز"] },
  },
  {
    slug: "hotel-reception-onyx",
    illustrative: true,
    categories: ["commercial", "marble-work"],
    cover: "receptionStone",
    gallery: ["receptionStone", "heroLobby", "hospitalityCorridor"],
    title: { en: "Back-Lit Stone Reception", ur: "پیچھے سے روشن پتھر کا استقبالیہ" },
    summary: {
      en: "A concept for a hospitality reception with a glowing stone counter front and warm stone corridors.",
      ur: "مہمان نوازی کے استقبالیہ کا تصور، روشن پتھر کے کاؤنٹر اور گرم رنگ کی پتھریلی راہداریوں کے ساتھ۔",
    },
    approach: {
      en: [
        "Coordinate the stone panels with the lighting installer before fixing.",
        "Book-match the counter panels so the pattern mirrors across the centre.",
        "Carry the floor finish from the lobby into the corridors for continuity.",
      ],
      ur: [
        "فکسنگ سے پہلے پتھر کے پینلز کو روشنی لگانے والوں کے ساتھ ہم آہنگ کرنا۔",
        "کاؤنٹر پینلز کو بُک میچ کرنا تاکہ ڈیزائن مرکز کے دونوں طرف آئینے کی طرح ہو۔",
        "تسلسل کے لیے لابی کا فرش راہداریوں تک جاری رکھنا۔",
      ],
    },
    services: ["wall-cladding-and-feature-walls", "surface-design", "marble-installation"],
    materials: { en: ["Translucent onyx-style stone", "Light stone flooring"], ur: ["شفاف اونکس طرز کا پتھر", "ہلکے رنگ کا پتھریلا فرش"] },
  },
];

// All design-idea pages are indexable (owner's decision, October 2026).
export const isProjectIndexable = () => true;

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
