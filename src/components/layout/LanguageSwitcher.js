"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { LOCALE_COOKIE, localeMeta, localizePath, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Links to the same page in the other language. The choice is remembered in a
 * cookie so that visiting "/" (or any unprefixed URL) returns to it later.
 */
export function LanguageSwitcher({ locale, label, srLabel, className, onNavigate }) {
  const pathname = usePathname();
  const target = locale === "en" ? "ur" : "en";
  const href = localizePath(target, stripLocale(pathname));

  function rememberChoice() {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
    onNavigate?.();
  }

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      onClick={rememberChoice}
      aria-label={srLabel}
      className={cn(
        "inline-flex min-h-10 items-center gap-2 rounded-sm px-3 text-sm font-semibold text-charcoal transition-colors hover:bg-stone",
        className,
      )}
    >
      <Languages aria-hidden="true" className="size-4 text-gold-deep" />
      <span className={target === "ur" ? "text-base leading-none" : undefined} dir={localeMeta[target].dir}>
        {label}
      </span>
    </Link>
  );
}
