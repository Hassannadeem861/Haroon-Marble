// Services offered by Haroon Marble.
//
// verified: true  -> confirmed by the business's own material (the "Kam ka kaam"
//                    section of the Haroon Marble hiring poster: modelling,
//                    designing, pattern planning and proper fixing of tiles/marble).
// verified: false -> a likely offering that the business has NOT yet confirmed.
//                    These render with an "ask about availability" note and are
//                    excluded from Service structured data.
//                    TODO(client): confirm or remove each unverified service.

export const services = [
  {
    slug: "tile-installation",
    verified: true,
    icon: "LayoutGrid",
    image: "installLargeFormat",
    title: { en: "Tile Fixing & Installation", ur: "ٹائل فکسنگ اور تنصیب" },
    summary: {
      en: "Floor and wall tiles set level, aligned and finished cleanly, from surface preparation to the final grout line.",
      ur: "فرش اور دیوار کی ٹائلز کی ہموار، سیدھی اور صاف تنصیب، سطح کی تیاری سے لے کر آخری گراؤٹ لائن تک۔",
    },
    body: {
      en: [
        "Good tiling is mostly invisible: straight lines, even joints, no hollow spots and clean edges around every corner, drain and socket. That is the standard we work to.",
        "We check the base surface before anything is fixed, set out the layout so cut tiles fall in sensible places, and fix each tile with the right adhesive bed for its size and location. Grouting and cleaning are treated as part of the job, not an afterthought.",
      ],
      ur: [
        "اچھی ٹائلنگ کی پہچان یہ ہے کہ وہ نظر میں کھٹکتی نہیں: سیدھی لائنیں، برابر جوڑ، کوئی کھوکھلا حصہ نہیں اور ہر کونے، نالی اور ساکٹ کے گرد صاف کنارے۔ ہم اسی معیار پر کام کرتے ہیں۔",
        "کچھ بھی لگانے سے پہلے ہم بنیادی سطح چیک کرتے ہیں، لے آؤٹ اس طرح ترتیب دیتے ہیں کہ کٹی ہوئی ٹائلیں مناسب جگہ پر آئیں، اور ہر ٹائل کو اس کے سائز اور جگہ کے مطابق درست مسالے کے ساتھ لگاتے ہیں۔ گراؤٹنگ اور صفائی کام کا حصہ ہیں، بعد کی سوچ نہیں۔",
      ],
    },
    includes: {
      en: [
        "Inspection of the base surface and levels",
        "Layout set-out before fixing begins",
        "Floor and wall tile fixing",
        "Cutting around corners, drains and fittings",
        "Grouting, edge finishing and clean-up",
      ],
      ur: [
        "بنیادی سطح اور لیول کا معائنہ",
        "فکسنگ سے پہلے لے آؤٹ کی ترتیب",
        "فرش اور دیوار کی ٹائلوں کی فکسنگ",
        "کونوں، نالیوں اور فٹنگز کے گرد کٹنگ",
        "گراؤٹنگ، کناروں کی فنشنگ اور صفائی",
      ],
    },
  },
  {
    slug: "marble-installation",
    verified: true,
    icon: "Gem",
    image: "floorPolishedMarble",
    title: { en: "Marble Fixing & Installation", ur: "ماربل فکسنگ اور تنصیب" },
    summary: {
      en: "Careful fixing of marble on floors and walls, with attention to vein direction, joints and a clean final finish.",
      ur: "فرش اور دیواروں پر ماربل کی احتیاط سے فکسنگ، دھاریوں کی سمت، جوڑوں اور صاف فنشنگ پر خاص توجہ کے ساتھ۔",
    },
    body: {
      en: [
        "Marble is a natural material, so no two pieces are the same. Fixing it well means looking at each piece before it goes down: matching tone and veining across the room, placing stronger patterns where they will be appreciated, and keeping joints tight and consistent.",
        "We take care with handling and setting so edges are not chipped and surfaces stay flat, then finish the joints and clean the stone so it is ready to use.",
      ],
      ur: [
        "ماربل ایک قدرتی پتھر ہے، اس لیے کوئی دو ٹکڑے ایک جیسے نہیں ہوتے۔ اسے اچھی طرح لگانے کا مطلب ہے کہ ہر ٹکڑے کو لگانے سے پہلے دیکھا جائے: پورے کمرے میں رنگ اور دھاریوں کو ملانا، نمایاں ڈیزائن کو ایسی جگہ رکھنا جہاں وہ نظر آئے، اور جوڑوں کو تنگ اور یکساں رکھنا۔",
        "ہم اٹھانے اور لگانے میں احتیاط کرتے ہیں تاکہ کنارے نہ ٹوٹیں اور سطح ہموار رہے، پھر جوڑوں کی فنشنگ اور پتھر کی صفائی کر کے اسے استعمال کے لیے تیار کرتے ہیں۔",
      ],
    },
    includes: {
      en: [
        "Dry-laying and matching pieces for tone and veining",
        "Floor and wall marble fixing",
        "Consistent, tight joints",
        "Edge and corner detailing",
        "Final finishing and clean-up",
      ],
      ur: [
        "رنگ اور دھاریوں کے لیے ٹکڑوں کو پہلے بچھا کر ملانا",
        "فرش اور دیوار پر ماربل کی فکسنگ",
        "یکساں اور تنگ جوڑ",
        "کناروں اور کونوں کی تفصیلی فنشنگ",
        "آخری فنشنگ اور صفائی",
      ],
    },
  },
  {
    slug: "2d-3d-surface-modelling",
    verified: true,
    icon: "Box",
    image: "marbleGrey",
    title: { en: "2D/3D Modelling & Site Measurement", ur: "2D/3D ماڈلنگ اور سائٹ کی پیمائش" },
    summary: {
      en: "Accurate 2D and 3D models of your tile and marble areas, based on measurements taken at your site.",
      ur: "آپ کی سائٹ پر لی گئی پیمائش کی بنیاد پر ٹائل اور ماربل والے حصوں کے درست 2D اور 3D ماڈل۔",
    },
    body: {
      en: [
        "Before a single tile is cut, it helps to see the finished surface. We measure the actual site, then model the floors and walls in 2D and 3D so you can review the layout, the pattern and where cuts will fall.",
        "A measured model also makes material quantities clearer and reduces surprises on site, because problems such as out-of-square rooms or awkward openings are spotted early.",
      ],
      ur: [
        "کوئی بھی ٹائل کاٹنے سے پہلے مکمل سطح کو دیکھ لینا فائدہ مند ہوتا ہے۔ ہم اصل سائٹ کی پیمائش کرتے ہیں، پھر فرش اور دیواروں کا 2D اور 3D ماڈل بناتے ہیں تاکہ آپ لے آؤٹ، ڈیزائن اور کٹنگ کی جگہیں پہلے سے دیکھ سکیں۔",
        "پیمائش پر مبنی ماڈل سے مٹیریل کی مقدار بھی واضح ہو جاتی ہے اور سائٹ پر غیر متوقع مسائل کم ہوتے ہیں، کیونکہ ٹیڑھے کمرے یا مشکل کھڑکی دروازے جیسے مسائل پہلے ہی سامنے آ جاتے ہیں۔",
      ],
    },
    includes: {
      en: [
        "On-site measurement of floors and walls",
        "2D layout drawings of tile and marble areas",
        "3D views of the planned finish",
        "Visual check of cut positions and pattern alignment",
      ],
      ur: [
        "فرش اور دیواروں کی سائٹ پر پیمائش",
        "ٹائل اور ماربل والے حصوں کے 2D لے آؤٹ ڈرائنگز",
        "منصوبہ بند فنش کے 3D مناظر",
        "کٹنگ کی جگہوں اور ڈیزائن کی سیدھ کی بصری جانچ",
      ],
    },
  },
  {
    slug: "surface-design",
    verified: true,
    icon: "PenTool",
    image: "kitchenGoldVein",
    title: { en: "Surface Design Consultation", ur: "سطح کے ڈیزائن کی مشاورت" },
    summary: {
      en: "Modern, considered tile and marble designs shaped around how you use the space and the look you want.",
      ur: "جدید اور سوچے سمجھے ٹائل اور ماربل ڈیزائن، جو آپ کی جگہ کے استعمال اور پسند کے مطابق بنائے جاتے ہیں۔",
    },
    body: {
      en: [
        "Design starts with your needs: who uses the room, how much wear it gets, how it is cleaned and the feeling you want it to have. From there we suggest tile and marble combinations, formats and finishes that suit the space.",
        "We aim for designs that look current without chasing short-lived trends, so the surface still feels right years from now.",
      ],
      ur: [
        "ڈیزائن آپ کی ضرورت سے شروع ہوتا ہے: کمرہ کون استعمال کرتا ہے، اس پر کتنا بوجھ پڑتا ہے، صفائی کیسے ہوتی ہے اور آپ اس میں کیسا ماحول چاہتے ہیں۔ اسی بنیاد پر ہم جگہ کے مطابق ٹائل اور ماربل کے امتزاج، سائز اور فنش تجویز کرتے ہیں۔",
        "ہماری کوشش ہوتی ہے کہ ڈیزائن جدید ہو مگر وقتی فیشن کے پیچھے نہ بھاگے، تاکہ برسوں بعد بھی سطح اچھی لگے۔",
      ],
    },
    includes: {
      en: [
        "Discussion of use, maintenance and style",
        "Tile and marble combination ideas",
        "Advice on tile formats and surface finishes",
        "Design options aligned with your budget",
      ],
      ur: [
        "استعمال، دیکھ بھال اور انداز پر گفتگو",
        "ٹائل اور ماربل کے امتزاج کی تجاویز",
        "ٹائل کے سائز اور سطح کی فنشنگ پر مشورہ",
        "آپ کے بجٹ کے مطابق ڈیزائن کے انتخاب",
      ],
    },
  },
  {
    slug: "pattern-and-layout-planning",
    verified: true,
    icon: "Grid3x3",
    image: "tilePattern",
    title: { en: "Pattern & Layout Planning", ur: "ڈیزائن پیٹرن اور لے آؤٹ کی منصوبہ بندی" },
    summary: {
      en: "Decorative patterns and practical layouts planned properly, so borders, centres and cuts sit exactly where they should.",
      ur: "آرائشی پیٹرن اور عملی لے آؤٹ کی درست منصوبہ بندی، تاکہ بارڈر، مرکز اور کٹنگ بالکل صحیح جگہ پر آئیں۔",
    },
    body: {
      en: [
        "Patterns such as herringbone, chevron, borders, medallions or mixed-format layouts only look right when they are planned from the room's true centre lines and focal points.",
        "We plan where the pattern starts, how it meets doorways and walls, and how cut pieces are balanced on each side, so the finished floor or wall looks intentional from every angle.",
      ],
      ur: [
        "ہیرنگ بون، شیورون، بارڈر، میڈلین یا مختلف سائز کی ٹائلوں کے لے آؤٹ جیسے پیٹرن تبھی اچھے لگتے ہیں جب کمرے کی اصل مرکزی لائنوں اور نمایاں حصوں سے منصوبہ بندی کی جائے۔",
        "ہم طے کرتے ہیں کہ پیٹرن کہاں سے شروع ہو، دروازوں اور دیواروں سے کیسے ملے، اور ہر طرف کٹی ہوئی ٹائلوں کا توازن کیسے رہے، تاکہ مکمل فرش یا دیوار ہر زاویے سے سوچی سمجھی نظر آئے۔",
      ],
    },
    includes: {
      en: [
        "Pattern selection and set-out",
        "Centre lines, borders and focal points",
        "Balanced cuts at walls and thresholds",
        "Transitions between rooms and materials",
      ],
      ur: [
        "پیٹرن کا انتخاب اور ترتیب",
        "مرکزی لائنیں، بارڈر اور نمایاں حصے",
        "دیواروں اور دہلیز پر متوازن کٹنگ",
        "کمروں اور مختلف مٹیریل کے درمیان ملاپ",
      ],
    },
  },
  {
    slug: "marble-flooring",
    verified: false,
    icon: "Square",
    image: "elevatorLobby",
    title: { en: "Marble Flooring", ur: "ماربل فلورنگ" },
    summary: {
      en: "Marble floors for homes and commercial spaces, planned for traffic, slip resistance and long-term care.",
      ur: "گھروں اور کمرشل جگہوں کے لیے ماربل کے فرش، آمد و رفت، پھسلن سے بچاؤ اور طویل مدتی دیکھ بھال کو مدنظر رکھ کر۔",
    },
    body: {
      en: [
        "A marble floor sets the tone for a whole space. The right choice depends on footfall, whether the area gets wet, and how much natural variation you are comfortable with.",
        "Flooring work covers selecting a suitable finish (polished, honed or textured), planning the layout and fixing the floor flat and level.",
      ],
      ur: [
        "ماربل کا فرش پوری جگہ کا تاثر طے کرتا ہے۔ درست انتخاب کا انحصار آمد و رفت، اس بات پر کہ جگہ گیلی ہوتی ہے یا نہیں، اور قدرتی رنگ و دھاریوں کے فرق کو آپ کتنا پسند کرتے ہیں، پر ہوتا ہے۔",
        "فلورنگ کے کام میں مناسب فنش (پالش، ہونڈ یا کھردرا) کا انتخاب، لے آؤٹ کی منصوبہ بندی اور فرش کو ہموار اور لیول لگانا شامل ہے۔",
      ],
    },
    includes: {
      en: ["Finish selection for each area", "Layout and vein planning", "Level floor fixing", "Thresholds and skirting details"],
      ur: ["ہر جگہ کے لیے فنش کا انتخاب", "لے آؤٹ اور دھاریوں کی منصوبہ بندی", "ہموار فرش کی فکسنگ", "دہلیز اور اسکرٹنگ کی تفصیلات"],
    },
  },
  {
    slug: "wall-cladding-and-feature-walls",
    verified: false,
    icon: "PanelsTopLeft",
    image: "bathroomMarbleWalls",
    title: { en: "Wall Cladding & Feature Walls", ur: "دیواری کلیڈنگ اور نمایاں دیواریں" },
    summary: {
      en: "Marble and tile cladding for feature walls, TV walls, receptions and bathrooms, with careful book-matching and edges.",
      ur: "نمایاں دیواروں، ٹی وی وال، استقبالیہ اور باتھ روم کے لیے ماربل اور ٹائل کلیڈنگ، احتیاط سے ملائی گئی دھاریوں اور کناروں کے ساتھ۔",
    },
    body: {
      en: [
        "A stone feature wall works best when the veining is laid out deliberately, often as mirrored (book-matched) pairs, and when edges, sockets and lighting are planned before fixing.",
        "Wall cladding needs a sound backing and suitable fixing method for the weight and size of the panels.",
      ],
      ur: [
        "پتھر کی نمایاں دیوار اس وقت سب سے اچھی لگتی ہے جب دھاریوں کو سوچ سمجھ کر ترتیب دیا جائے، اکثر آئینے کی طرح ملتے جوڑوں (بُک میچ) میں، اور کنارے، ساکٹ اور روشنی فکسنگ سے پہلے طے کر لیے جائیں۔",
        "دیواری کلیڈنگ کے لیے مضبوط بنیاد اور پینلز کے وزن و سائز کے مطابق مناسب فکسنگ طریقہ ضروری ہے۔",
      ],
    },
    includes: {
      en: ["Feature and TV wall layouts", "Vein matching across panels", "Edge, corner and opening details", "Coordination with lighting and sockets"],
      ur: ["نمایاں اور ٹی وی دیوار کے لے آؤٹ", "پینلز میں دھاریوں کا ملاپ", "کناروں، کونوں اور کھلی جگہوں کی تفصیل", "روشنی اور ساکٹس کے ساتھ ہم آہنگی"],
    },
  },
  {
    slug: "marble-polishing-and-restoration",
    verified: false,
    icon: "Sparkles",
    image: "marbleWhite",
    title: { en: "Marble Polishing & Restoration", ur: "ماربل پالشنگ اور بحالی" },
    summary: {
      en: "Bringing tired, dull or scratched marble back to a clean, even finish.",
      ur: "پرانے، مدھم یا خراش زدہ ماربل کو دوبارہ صاف اور یکساں فنش میں لانا۔",
    },
    body: {
      en: [
        "Marble loses its shine through foot traffic, grit and acidic spills. Depending on the condition, it can often be cleaned, honed and re-polished rather than replaced.",
        "The right approach depends on the stone and the damage, so an inspection comes first.",
      ],
      ur: [
        "پیدل آمد و رفت، مٹی کے ذرات اور تیزابی چیزوں کے گرنے سے ماربل کی چمک کم ہو جاتی ہے۔ حالت کے مطابق اسے اکثر بدلنے کے بجائے صاف، ہون اور دوبارہ پالش کیا جا سکتا ہے۔",
        "درست طریقہ پتھر اور نقصان کی نوعیت پر منحصر ہے، اس لیے پہلے معائنہ کیا جاتا ہے۔",
      ],
    },
    includes: {
      en: ["Condition inspection", "Deep cleaning", "Honing and re-polishing", "Advice on sealing and care"],
      ur: ["حالت کا معائنہ", "گہری صفائی", "ہوننگ اور دوبارہ پالش", "سیلنگ اور دیکھ بھال کے بارے میں مشورہ"],
    },
  },
  {
    slug: "staircases-and-custom-marble-work",
    verified: false,
    icon: "Footprints",
    image: "staircaseStone",
    title: { en: "Staircases & Custom Marble Work", ur: "سیڑھیاں اور خصوصی ماربل کام" },
    summary: {
      en: "Marble stair treads and risers, vanity tops, sills and other made-to-measure stone details.",
      ur: "ماربل کی سیڑھیوں کے پائیدان اور رائزر، وینٹی ٹاپ، سِل اور دیگر ناپ کے مطابق پتھر کا کام۔",
    },
    body: {
      en: [
        "Staircases and custom pieces demand the most precise measuring: every tread must sit level, nosings must be consistent and joints must line up from top to bottom.",
        "Custom work such as vanity tops, window sills and thresholds is measured on site so each piece fits the space it was made for.",
      ],
      ur: [
        "سیڑھیاں اور خصوصی ٹکڑے سب سے زیادہ درست پیمائش مانگتے ہیں: ہر پائیدان لیول ہو، کنارے یکساں ہوں اور اوپر سے نیچے تک جوڑ سیدھ میں ہوں۔",
        "وینٹی ٹاپ، کھڑکی کی سِل اور دہلیز جیسا خصوصی کام سائٹ پر ناپا جاتا ہے تاکہ ہر ٹکڑا اپنی جگہ پر پورا آئے۔",
      ],
    },
    includes: {
      en: ["Stair treads, risers and landings", "Nosing and edge profiles", "Vanity tops, sills and thresholds", "Made-to-measure pieces"],
      ur: ["سیڑھی کے پائیدان، رائزر اور لینڈنگ", "کناروں کی پروفائل", "وینٹی ٹاپ، سِل اور دہلیز", "ناپ کے مطابق تیار ٹکڑے"],
    },
  },
  {
    slug: "tile-and-marble-supply",
    verified: false,
    icon: "Package",
    image: "marbleGold",
    title: { en: "Tile & Marble Supply", ur: "ٹائل اور ماربل کی فراہمی" },
    summary: {
      en: "Help sourcing suitable tiles and marble for your project, alongside installation.",
      ur: "تنصیب کے ساتھ ساتھ آپ کے منصوبے کے لیے مناسب ٹائلز اور ماربل حاصل کرنے میں مدد۔",
    },
    body: {
      en: [
        "Choosing material and fixing it are closely linked: the tile size, thickness and finish all affect how it should be installed.",
        "Ask us whether we can source materials for your project or advise on materials you are buying yourself.",
      ],
      ur: [
        "مٹیریل کا انتخاب اور اس کی فکسنگ آپس میں جڑے ہوئے ہیں: ٹائل کا سائز، موٹائی اور فنش سب اس بات پر اثر ڈالتے ہیں کہ اسے کیسے لگایا جائے۔",
        "ہم سے پوچھیں کہ کیا ہم آپ کے منصوبے کے لیے مٹیریل فراہم کر سکتے ہیں یا آپ کے خود خریدے گئے مٹیریل پر مشورہ دے سکتے ہیں۔",
      ],
    },
    includes: {
      en: ["Material suggestions for each area", "Quantity estimates from measurements", "Advice on materials you source yourself"],
      ur: ["ہر جگہ کے لیے مٹیریل کی تجاویز", "پیمائش سے مقدار کا اندازہ", "خود خریدے گئے مٹیریل پر مشورہ"],
    },
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export const verifiedServices = services.filter((service) => service.verified);
