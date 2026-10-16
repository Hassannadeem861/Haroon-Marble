// Core business facts. Only information supplied by Nadeem Marbles belongs here.
// Fields set to null are unknown and are hidden from the site and from
// structured data until the business supplies them.

export const site = {
  name: "Nadeem Marbles",
  tagline: { en: "Tiles | Marble | Quality Work", ur: "ٹائلز | ماربل | معیاری کام" },
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://haroon-marble.vercel.app").replace(/\/$/, ""),

  phone: "+923151283438",
  phoneDisplay: "+92 315 1283438",
  email: "m.hassan.nadeem987@gmail.com",
  // wa.me requires the number without "+" or spaces.
  // TODO(client): confirm this number is registered on WhatsApp.
  whatsappNumber: "923164593747",
  whatsappDisplay: "+92 316 4593747",

  // TODO(client): supply before publishing; these stay hidden while null.
  owner: { name: null, role: { en: "Founder", ur: "بانی" } },
  address: null,
  openingHours: null,
  serviceAreas: null,
  foundingYear: null,
  socialProfiles: [],
};

export const telHref = `tel:${site.phone}`;
export const mailHref = `mailto:${site.email}`;

export function whatsappHref(message) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
