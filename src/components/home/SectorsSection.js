import { RegistryImage } from "@/components/shared/RegistryImage";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeadingWithLink } from "@/components/shared/SectionHeading";
import { industries } from "@/data/industries";
import { localizePath, pick } from "@/lib/i18n";

const FEATURED = ["residential", "commercial-offices"];

export function SectorsSection({ locale, dict }) {
  const featured = FEATURED.map((slug) => industries.find((industry) => industry.slug === slug));
  return (
    <section aria-labelledby="sectors-heading" className="bg-stone/60 py-20 md:py-28">
      <div className="container-page">
        <SectionHeadingWithLink
          id="sectors-heading"
          eyebrow={dict.home.sectors.eyebrow}
          title={dict.home.sectors.title}
          linkHref={localizePath(locale, "/industries")}
          linkLabel={dict.common.viewIndustries}
        />

        <Reveal stagger className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured.map((industry) => (
            <article key={industry.slug} data-reveal-item className="flex flex-col bg-ivory">
              <div data-reveal-media className="relative aspect-16/10 overflow-hidden">
                <RegistryImage imageKey={industry.image} locale={locale} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="flex-1 p-7 md:p-10">
                <h3 className="text-3xl text-charcoal">{pick(industry.title, locale)}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{pick(industry.summary, locale)}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {pick(industry.needs, locale).map((need) => (
                    <li key={need} className="flex gap-3 text-sm text-charcoal">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" />
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
