"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Menu, MessageCircle, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Icon } from "@/components/shared/Icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { localizePath, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function isActive(currentPath, href) {
  return href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);
}

const topLinkClass = "flex w-full items-center border-b border-border py-4 font-display text-2xl text-charcoal aria-[current=page]:text-gold-deep";

/** Expandable section listing a dropdown's links (grouped) for small screens. */
function MobileSubmenu({ menu, onNavigate }) {
  return (
    <div className="flex flex-col gap-5 pb-5">
      {menu.columns.map((column) => (
        <div key={column.title}>
          <p className="tracking-eyebrow text-[0.68rem] font-semibold text-gold-deep">{column.title}</p>
          <ul className="mt-2">
            {column.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={onNavigate} className="flex min-h-11 items-center gap-3 rounded-sm py-1.5 text-base text-charcoal">
                  {link.icon ? (
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-stone text-gold-deep">
                      <Icon name={link.icon} className="size-4" />
                    </span>
                  ) : null}
                  <span className="leading-snug">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href={menu.footer.href}
        onClick={onNavigate}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-charcoal underline decoration-gold underline-offset-4"
      >
        {menu.footer.label}
        <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
      </Link>
    </div>
  );
}

/**
 * Slide-out menu for small screens (shadcn Sheet on Base UI Dialog: focus is
 * trapped while open, Escape closes it and focus returns to the trigger).
 * It opens from the inline-end edge, so it follows the reading direction.
 * Sections with categories (Services, Design Ideas, Blog) expand in place.
 */
export function MobileNavigation({ locale, dir, items, menus, labels, contact }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const currentPath = stripLocale(usePathname());

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" aria-label={labels.openMenu} className="lg:hidden" />}>
        <Menu aria-hidden="true" className="size-6" />
      </SheetTrigger>
      <SheetContent side={dir === "rtl" ? "left" : "right"} className="w-[88vw] max-w-sm gap-0 bg-ivory p-0">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <SheetTitle className="font-display text-xl">{labels.menu}</SheetTitle>
        </div>
        <SheetDescription className="sr-only">{labels.mainNavigation}</SheetDescription>
        <nav aria-label={labels.mainNavigation} className="flex-1 overflow-y-auto px-6">
          <Accordion>
            {items.map((item) => {
              const current = isActive(currentPath, item.href);
              const menu = item.menu ? menus[item.menu] : null;
              if (!menu) {
                return (
                  <Link
                    key={item.href}
                    href={localizePath(locale, item.href)}
                    aria-current={current ? "page" : undefined}
                    onClick={close}
                    className={topLinkClass}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <AccordionItem key={item.href} value={item.href} className="border-b border-border">
                  <AccordionTrigger
                    className={cn(
                      "items-center rounded-none py-4 font-display text-2xl font-normal text-charcoal hover:no-underline [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-gold-deep",
                      current && "text-gold-deep",
                    )}
                  >
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 [&_a]:no-underline">
                    <MobileSubmenu menu={menu} onNavigate={close} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>
        <div className="flex flex-col gap-3 border-t border-border px-6 py-6">
          <ButtonLink href={localizePath(locale, "/contact")} variant="gold" onClick={close}>
            {labels.requestQuote}
          </ButtonLink>
          <div className="grid grid-cols-3 gap-2">
            <ButtonLink href={contact.tel} variant="outline" size="default" aria-label={labels.callUs}>
              <Phone aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={contact.whatsapp} variant="outline" size="default" aria-label={labels.whatsapp}>
              <MessageCircle aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={contact.mail} variant="outline" size="default" aria-label={labels.emailUs}>
              <Mail aria-hidden="true" />
            </ButtonLink>
          </div>
          <LanguageSwitcher
            locale={locale}
            label={labels.switchLanguage}
            srLabel={labels.switchLanguageLabel}
            onNavigate={close}
            className="justify-center border border-border"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
