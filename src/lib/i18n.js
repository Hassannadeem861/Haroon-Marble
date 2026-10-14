// Locale configuration shared by the proxy, server components and client components.
// Keep this file free of server-only imports so client components can use it.

export const locales = ["en", "ur"];
export const defaultLocale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeMeta = {
  en: { label: "English", nativeLabel: "English", dir: "ltr", ogLocale: "en_PK" },
  ur: { label: "Urdu", nativeLabel: "اردو", dir: "rtl", ogLocale: "ur_PK" },
};

export function hasLocale(value) {
  return locales.includes(value);
}

export function getDirection(locale) {
  return localeMeta[locale]?.dir ?? "ltr";
}

/** Prefix an internal path with the locale: ("ur", "/services") -> "/ur/services". */
export function localizePath(locale, path = "/") {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Remove the locale prefix from a pathname: "/ur/services" -> "/services". */
export function stripLocale(pathname = "/") {
  const segments = pathname.split("/");
  if (hasLocale(segments[1])) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
}

/** Read a localized field ({ en, ur }) with English as the fallback. */
export function pick(field, locale) {
  if (field == null || typeof field !== "object" || Array.isArray(field)) return field;
  return field[locale] ?? field[defaultLocale];
}
