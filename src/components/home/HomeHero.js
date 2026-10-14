import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { HeroImageMotion } from "@/components/home/HeroImageMotion";
import { HeroScrollEffects } from "@/components/home/HeroScrollEffects";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { site, telHref, whatsappHref } from "@/data/site";
import { localizePath } from "@/lib/i18n";

// Text rises in with a short CSS stagger (no JavaScript needed, so it is never
// hidden waiting for hydration); reduced-motion users see it immediately.
const delay = (ms) => ({ animationDelay: `${ms}ms` });

export function HomeHero({ locale, dict }) {
  const hero = dict.home.hero;
  return (
    <section aria-labelledby="hero-heading" className="on-dark relative isolate overflow-hidden bg-charcoal">
      <HeroImageMotion className="absolute inset-0 -z-10 motion-safe:scale-[1.06]">
        <RegistryImage imageKey="heroLobby" locale={locale} fill hero quality={85} sizes="100vw" className="object-cover object-[60%_50%]" />
      </HeroImageMotion>
      {/* Readability overlays: a directional wash behind the text and a bottom fade. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-charcoal/90 via-charcoal/65 to-charcoal/10 rtl:bg-linear-to-l" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-charcoal/70 to-transparent" />

      <div className="container-page flex min-h-[calc(100svh-var(--header-height))] max-h-[60rem] flex-col justify-center py-20 md:py-28">
        <HeroScrollEffects className="max-w-3xl">
          <div className="animate-rise" style={delay(50)}>
            <Eyebrow onDark>{hero.eyebrow}</Eyebrow>
          </div>
          <h1
            id="hero-heading"
            className="mt-6 animate-rise text-[2.5rem] leading-[1.05] text-ivory sm:text-6xl lg:text-[4.4rem]"
            style={delay(150)}
          >
            {hero.title}
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-base leading-relaxed text-ivory/85 md:text-lg" style={delay(300)}>
            {hero.text}
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-3 sm:flex-row" style={delay(450)}>
            <ButtonLink href={localizePath(locale, "/contact")} variant="gold">
              {dict.common.requestQuote}
              <ArrowRight aria-hidden="true" className="rtl:rotate-180" />
            </ButtonLink>
            <ButtonLink href={localizePath(locale, "/portfolio")} variant="outline-light">
              {dict.common.exploreProjects}
            </ButtonLink>
          </div>
          {/* <ul className="mt-10 flex animate-rise flex-wrap gap-x-8 gap-y-3 text-sm text-ivory/80" style={delay(600)}>
            <li>
              <a href={telHref} className="inline-flex min-h-10 items-center gap-2 hover:text-ivory">
                <Phone aria-hidden="true" className="size-4 text-gold" />
                <span lang="en" dir="ltr">
                  {site.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 hover:text-ivory">
                <MessageCircle aria-hidden="true" className="size-4 text-gold" />
                {dict.common.chatOnWhatsapp}
              </a>
            </li>
          </ul> */}
        </HeroScrollEffects>
      </div>
    </section>
  );
}
