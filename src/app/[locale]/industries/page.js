import { Info } from "lucide-react";
import { FaqSection } from "@/components/proof/FaqSection";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHeader } from "@/components/shared/PageHeader";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Reveal } from "@/components/shared/Reveal";
import { industries } from "@/data/industries";
import { getDictionary } from "@/lib/dictionaries";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/industries", title: dict.meta.industries.title, description: dict.meta.industries.description });
}

export default async function IndustriesPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const copy = dict.industries;

  return (
    <>
      <PageHeader
        locale={locale}
        dict={dict}
        breadcrumbs={[
          { name: dict.nav.home, path: "/" },
          { name: dict.nav.industries, path: "/industries" },
        ]}
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        text={copy.hero.text}
      >
        <p className="mt-8 flex max-w-2xl gap-3 text-sm text-muted-foreground">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-deep" />
          {copy.note}
        </p>
      </PageHeader>

      <div className="py-8 md:py-12">
        {industries.map((industry, index) => (
          <section
            key={industry.slug}
            id={industry.slug}
            aria-labelledby={`${industry.slug}-heading`}
            className="container-page py-12 md:py-16"
          >
            <Reveal className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={cn("relative aspect-4/3 overflow-hidden rounded-sm bg-stone lg:col-span-6", index % 2 === 1 && "lg:order-2")}>
                <RegistryImage imageKey={industry.image} locale={locale} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
              </div>
              <div className="lg:col-span-6">
                <p lang="en" className="font-display text-2xl text-gold-deep">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 id={`${industry.slug}-heading`} className="mt-2 text-3xl leading-tight text-charcoal md:text-4xl">
                  {pick(industry.title, locale)}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{pick(industry.summary, locale)}</p>
                <h3 className="mt-8 font-sans text-sm font-semibold text-charcoal">{copy.needsTitle}</h3>
                <ul className="mt-4 divide-y divide-border border-y border-border">
                  {pick(industry.needs, locale).map((need) => (
                    <li key={need} className="flex gap-4 py-3 text-[0.95rem] text-charcoal">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" />
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <FaqSection locale={locale} dict={dict} page="industries" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
