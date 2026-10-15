"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { localizePath, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function isActive(currentPath, href) {
  return href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);
}

const topLinkClass =
  "relative inline-flex min-h-10 items-center rounded-sm px-3 text-sm font-medium text-charcoal transition-colors hover:text-gold-deep after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform data-[current=true]:after:scale-x-100 rtl:after:origin-right";

/** One link inside a dropdown: icon, label and a one-line description. */
function MenuLink({ link }) {
  return (
    <NavigationMenuLink
      closeOnClick
      render={<Link href={link.href} />}
      className="group/link flex items-start gap-3 rounded-sm p-2.5 transition-colors hover:bg-stone/70 focus-visible:bg-stone/70"
    >
      {link.icon ? (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-stone text-gold-deep transition-colors group-hover/link:bg-ivory">
          <Icon name={link.icon} className="size-[1.1rem]" />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="block text-sm leading-snug font-semibold text-charcoal">{link.label}</span>
        {link.text ? <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{link.text}</span> : null}
      </span>
    </NavigationMenuLink>
  );
}

function MenuColumn({ column, wide }) {
  return (
    <div>
      <p className="tracking-eyebrow px-2.5 text-[0.68rem] font-semibold text-gold-deep">{column.title}</p>
      <ul className={cn("mt-3 grid gap-0.5", wide && "sm:grid-cols-2")}>
        {column.links.map((link) => (
          <li key={link.href}>
            <MenuLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromoPanel({ promo }) {
  const external = promo.cta.external;
  return (
    <aside className="on-dark flex flex-col bg-charcoal text-ivory">
      {promo.image ? (
        <div className="relative aspect-16/10 overflow-hidden">
          <Image src={promo.image.src} alt="" fill sizes="18rem" className="object-cover" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-xl leading-snug text-ivory">{promo.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-mist">{promo.text}</p>
        <NavigationMenuLink
          closeOnClick
          render={external ? <a href={promo.cta.href} target="_blank" rel="noopener noreferrer" /> : <Link href={promo.cta.href} />}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-gold hover:underline hover:underline-offset-4"
        >
          {external ? <MessageCircle aria-hidden="true" className="size-4" /> : null}
          {promo.cta.label}
          {external ? null : <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />}
        </NavigationMenuLink>
      </div>
    </aside>
  );
}

/** Mega-menu panel: link columns, a "view all" footer link and a promo card. */
function MenuPanel({ menu }) {
  const [first, ...rest] = menu.columns;
  const firstIsWide = first.links.length > 4;
  return (
    <div className="grid max-h-[calc(100dvh-var(--header-height)-1.5rem)] w-[min(68rem,calc(100vw-3rem))] grid-cols-[1fr_16rem] overflow-y-auto rounded-sm">
      <div className="flex flex-col p-5">
        <div className={cn("grid gap-6", rest.length ? (firstIsWide ? "grid-cols-[2fr_1fr]" : "grid-cols-2") : "grid-cols-1")}>
          <MenuColumn column={first} wide={firstIsWide || !rest.length} />
          {rest.length ? (
            <div className="flex flex-col gap-6">
              {rest.map((column) => (
                <MenuColumn key={column.title} column={column} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-4 border-t border-border px-2.5 pt-4">
          <NavigationMenuLink
            closeOnClick
            render={<Link href={menu.footer.href} />}
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal underline decoration-gold underline-offset-4 hover:decoration-2"
          >
            {menu.footer.label}
            <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
          </NavigationMenuLink>
        </div>
      </div>
      <PromoPanel promo={menu.promo} />
    </div>
  );
}

/**
 * Desktop navigation (Base UI NavigationMenu via shadcn): hover or click a
 * trigger to open its panel; arrow keys, Tab and Escape work as expected.
 */
export function DesktopNav({ locale, items, menus, label }) {
  const currentPath = stripLocale(usePathname());

  return (
    <NavigationMenu aria-label={label} align="center" delay={80} closeDelay={120}>
      <NavigationMenuList className="gap-1">
        {items.map((item) => {
          const current = isActive(currentPath, item.href);
          const menu = item.menu ? menus[item.menu] : null;
          return (
            <NavigationMenuItem key={item.href}>
              {menu ? (
                <>
                  <NavigationMenuTrigger
                    data-current={current}
                    className={cn(topLinkClass, "h-auto gap-0.5 bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent")}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0">
                    <MenuPanel menu={menu} />
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  render={<Link href={localizePath(locale, item.href)} />}
                  active={current}
                  aria-current={current ? "page" : undefined}
                  data-current={current}
                  className={cn(topLinkClass, "p-0 px-3 hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent")}
                >
                  {item.label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
