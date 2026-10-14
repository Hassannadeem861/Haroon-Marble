// Core business facts. Only information supplied by Haroon Marble belongs here.
// Fields set to null are unknown and are hidden from the site and from
// structured data until the business supplies them.

export const site = {
  name: "Haroon Marble",
  tagline: { en: "Tiles | Marble | Quality Work", ur: "ٹائلز | ماربل | معیاری کام" },
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://haroon-marble.vercel.app").replace(/\/$/, ""),

  phone: "+923030291757",
  phoneDisplay: "+92 303 0291757",
  email: "m.hassan.nadeem987@gmail.com",
  // wa.me requires the number without "+" or spaces.
  // TODO(client): confirm this number is registered on WhatsApp.
  whatsappNumber: "923030291757",

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
