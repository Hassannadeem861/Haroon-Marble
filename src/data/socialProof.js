// Statistics, client testimonials and events.
//
// ONLY REAL, VERIFIABLE INFORMATION BELONGS IN THE `verified` ARRAYS.
// Publishing invented figures, reviews or events would mislead customers
// (and fake reviews are illegal in many countries).
//
// While a `verified` array is empty, its section is hidden on the live site.
// In development (`npm run dev`) the `sample` data is shown instead, clearly
// marked "SAMPLE", so the design and animation can be reviewed.
//
// TODO(client): fill the verified arrays with real data, e.g.
//   stats:        { value: 120, suffix: "+", label: { en: "Projects completed", ur: "مکمل شدہ منصوبے" } }
//   testimonials: { quote: {en, ur}, name: "Client name (with permission)", context: {en, ur} }
//   events:       { title: {en, ur}, date: "2026-03-10", location: {en, ur}, text: {en, ur}, image: "imageKey" }

export const stats = {
  verified: [],
  // Deliberately round placeholder numbers, shown only in development.
  sample: [
    { value: 100, suffix: "+", label: { en: "Projects completed", ur: "مکمل شدہ منصوبے" } },
    { value: 20, suffix: "+", label: { en: "Years of experience", ur: "سالوں کا تجربہ" } },
    { value: 25, suffix: "+", label: { en: "Skilled team members", ur: "ہنرمند ٹیم ممبرز" } },
    { value: 50000, suffix: "+", label: { en: "Square feet installed", ur: "مربع فٹ تنصیب" } },
  ],
};

export const testimonials = {
  verified: [],
  sample: [
    {
      quote: {
        en: "Sample testimonial. Replace with a real client's words, used with their permission.",
        ur: "نمونہ تاثرات۔ اسے کسی حقیقی کلائنٹ کے الفاظ سے، ان کی اجازت کے ساتھ تبدیل کریں۔",
      },
      name: "Client name",
      context: { en: "Residential project", ur: "رہائشی منصوبہ" },
    },
    {
      quote: {
        en: "Second sample testimonial, shown only in development so the slider can be reviewed.",
        ur: "دوسرا نمونہ تاثرات، صرف ڈیولپمنٹ میں دکھایا جاتا ہے تاکہ سلائیڈر دیکھا جا سکے۔",
      },
      name: "Client name",
      context: { en: "Commercial project", ur: "کمرشل منصوبہ" },
    },
    {
      quote: {
        en: "Third sample testimonial. Real reviews should mention the actual work, e.g. the material and area.",
        ur: "تیسرا نمونہ تاثرات۔ اصل تاثرات میں کیے گئے کام کا ذکر ہونا چاہیے، مثلاً مٹیریل اور جگہ۔",
      },
      name: "Client name",
      context: { en: "Kitchen and bathroom", ur: "کچن اور باتھ روم" },
    },
  ],
};

export const events = {
  verified: [],
  sample: [
    {
      title: { en: "Sample event: building materials exhibition", ur: "نمونہ تقریب: تعمیراتی مٹیریل کی نمائش" },
      date: "2026-01-15",
      location: { en: "City, venue", ur: "شہر، مقام" },
      text: { en: "Replace with a real event Haroon Marble took part in.", ur: "اسے کسی ایسی حقیقی تقریب سے تبدیل کریں جس میں ہارون ماربل نے حصہ لیا۔" },
      image: "heroLobby",
    },
    {
      title: { en: "Sample event: interior design expo", ur: "نمونہ تقریب: انٹیریئر ڈیزائن ایکسپو" },
      date: "2025-11-02",
      location: { en: "City, venue", ur: "شہر، مقام" },
      text: { en: "Shown only in development as a layout preview.", ur: "صرف ڈیولپمنٹ میں ترتیب دیکھنے کے لیے دکھایا جاتا ہے۔" },
      image: "lobbyReception",
    },
    {
      title: { en: "Sample event: trade workshop", ur: "نمونہ تقریب: تجارتی ورکشاپ" },
      date: "2025-08-20",
      location: { en: "City, venue", ur: "شہر، مقام" },
      text: { en: "Add a photo from the actual event when available.", ur: "دستیاب ہونے پر اصل تقریب کی تصویر شامل کریں۔" },
      image: "installLargeFormat",
    },
  ],
};

/**
 * Returns the items to display for a group: verified data when it exists,
 * otherwise sample data in development only (never in production).
 */
export function getProofItems(group) {
  if (group.verified.length) return { items: group.verified, isSample: false };
  if (process.env.NODE_ENV === "development") return { items: group.sample, isSample: true };
  return { items: [], isSample: false };
}
