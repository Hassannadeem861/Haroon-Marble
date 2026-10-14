"use client";

import { useState } from "react";
import { Mail, Menu, MessageCircle, Phone } from "lucide-react";
import { NavLinks } from "@/components/layout/NavLinks";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { localizePath } from "@/lib/i18n";

/**
 * Slide-out menu for small screens (shadcn Sheet on Base UI Dialog: focus is
 * trapped while open, Escape closes it and focus returns to the trigger).
 * It opens from the inline-end edge, so it follows the reading direction.
 */
export function MobileNavigation({ locale, dir, items, labels, contact }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
          <NavLinks locale={locale} items={items} orientation="vertical" onNavigate={close} />
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
