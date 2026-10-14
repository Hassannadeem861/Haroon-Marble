"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function isActive(currentPath, href) {
  return href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);
}

/** Navigation links with aria-current for the active section. */
export function NavLinks({ locale, items, orientation = "horizontal", onNavigate }) {
  const currentPath = stripLocale(usePathname());
  const vertical = orientation === "vertical";

  return (
    <ul className={cn(vertical ? "flex flex-col" : "flex items-center gap-1")}>
      {items.map((item) => {
        const active = isActive(currentPath, item.href);
        return (
          <li key={item.href}>
            <Link
              href={localizePath(locale, item.href)}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "relative inline-flex items-center rounded-sm text-charcoal transition-colors",
                vertical
                  ? "w-full border-b border-border py-4 text-2xl font-display aria-[current=page]:text-gold-deep"
                  : "min-h-10 px-3 text-sm font-medium hover:text-gold-deep after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform aria-[current=page]:after:scale-x-100 rtl:after:origin-right",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
