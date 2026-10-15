import { Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Logo } from "@/components/shared/Logo";
import { mainNavigation } from "@/data/navigation";
import { mailHref, site, telHref, whatsappHref } from "@/data/site";
import { getDirection, localizePath } from "@/lib/i18n";
import { buildNavMenus } from "@/lib/navMenus";

export function Header({ locale, dict }) {
  const items = mainNavigation.map((item) => ({ href: item.href, label: dict.nav[item.key], menu: item.menu }));
  const menus = buildNavMenus(locale, dict);
  // Contact is reached through the prominent CTA on desktop, so it is left out of the inline nav.
  const desktopItems = items.filter((item) => item.href !== "/contact");

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo locale={locale} />

        <div className="hidden lg:block">
          <DesktopNav locale={locale} items={desktopItems} menus={menus} label={dict.common.mainNavigation} />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <LanguageSwitcher
            locale={locale}
            label={dict.common.switchLanguage}
            srLabel={dict.common.switchLanguageLabel}
            className="hidden sm:inline-flex"
          />
          <a
            href={telHref}
            className="hidden min-h-10 items-center gap-2 rounded-sm px-3 text-sm font-semibold text-charcoal transition-colors hover:bg-stone xl:inline-flex"
          >
            <Phone aria-hidden="true" className="size-4 text-gold-deep" />
            <span lang="en" dir="ltr">
              {site.phoneDisplay}
            </span>
          </a>
          <ButtonLink href={telHref} variant="ghost" size="icon" aria-label={dict.common.callUs} className="xl:hidden">
            <Phone aria-hidden="true" className="size-5" />
          </ButtonLink>
          <ButtonLink href={localizePath(locale, "/contact")} variant="gold" size="default" className="hidden md:inline-flex">
            {dict.common.requestQuote}
          </ButtonLink>
          <MobileNavigation
            locale={locale}
            dir={getDirection(locale)}
            items={items}
            menus={menus}
            contact={{ tel: telHref, mail: mailHref, whatsapp: whatsappHref() }}
            labels={{
              menu: dict.common.menu,
              openMenu: dict.common.openMenu,
              mainNavigation: dict.common.mainNavigation,
              requestQuote: dict.common.requestQuote,
              callUs: dict.common.callUs,
              whatsapp: dict.common.whatsapp,
              emailUs: dict.common.emailUs,
              switchLanguage: dict.common.switchLanguage,
              switchLanguageLabel: dict.common.switchLanguageLabel,
            }}
          />
        </div>
      </div>
    </header>
  );
}
