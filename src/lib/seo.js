import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { defaultLocale, hasLocale, localeMeta, localizePath, locales } from "@/lib/i18n";

export const OG_IMAGE = { url: "/images/og-default.jpg", width: 1200, height: 630 };

export function absoluteUrl(path = "/") {
  return `${site.url}${path}`;
}

/** Canonical + hreflang alternates for a path that exists in every locale. */
export function localeAlternates(locale, path = "/") {
  const languages = Object.fromEntries(locales.map((code) => [code, absoluteUrl(localizePath(code, path))]));
  languages["x-default"] = absoluteUrl(localizePath(defaultLocale, path));
  return { canonical: absoluteUrl(localizePath(locale, path)), languages };
}

/**
 * Build page metadata with consistent canonical, hreflang, Open Graph and
 * Twitter tags. `title` is the page title without the brand suffix (the root
 * layout's title template adds it) unless `absoluteTitle` is set.
 */
export function buildMetadata({ locale, path = "/", title, description, absoluteTitle = false, image, type = "website", publishedTime }) {
  // Paths like /favicon.ico reach [locale] routes; answer them with a 404 instead of an error.
  if (!hasLocale(locale)) notFound();
  const alternates = localeAlternates(locale, path);
  const ogImage = image ? { url: image.src, width: image.width, height: image.height, alt: image.alt } : OG_IMAGE;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates,
    openGraph: {
      type,
      url: alternates.canonical,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((code) => code !== locale).map((code) => localeMeta[code].ogLocale),
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
