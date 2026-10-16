import { NextResponse } from "next/server";
import { LOCALE_COOKIE, defaultLocale, hasLocale, locales } from "@/lib/i18n";

/**
 * Every page lives under /en or /ur. Requests without a locale prefix
 * (e.g. "/" or "/about") are redirected to the visitor's saved language,
 * falling back to English.
 */
// The site used to be served at haroon-marble.vercel.app. Send visitors and
// search engines from that old address to the same page on the new one, so
// only one address gets indexed.
const OLD_HOSTS = new Set(["haroon-marble.vercel.app"]);
const CURRENT_ORIGIN = "https://nadeem-marble.vercel.app";

export function proxy(request) {
  const { pathname, search } = request.nextUrl;
  if (OLD_HOSTS.has(request.headers.get("host"))) {
    return NextResponse.redirect(`${CURRENT_ORIGIN}${pathname}${search}`, 308);
  }
  const hasPrefix = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasPrefix) return NextResponse.next();

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = hasLocale(saved) ? saved : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals, metadata routes and any path with a file extension.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
