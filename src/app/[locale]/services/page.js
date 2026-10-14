import { ServiceCard } from "@/components/cards/ServiceCard";
import { FaqSection } from "@/components/proof/FaqSection";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/services", title: dict.meta.services.title, description: dict.meta.services.description });
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const copy = dict.services;
  const core = services.filter((service) => service.verified);
  const additional = services.filter((service) => !service.verified);

  return (
    <>
      <PageHeader
        locale={locale}
        dict={dict}
        breadcrumbs={[
          { name: dict.nav.home, path: "/" },
          { name: dict.nav.services, path: "/services" },
        ]}
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        text={copy.hero.text}
        imageKey="installLargeFormat"
      />

      <section aria-labelledby="core-heading" className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading id="core-heading" title={copy.coreTitle} text={copy.coreText} />
          <Reveal stagger className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} dict={dict} />
            ))}
          </Reveal>
        </div>
      </section>

      {additional.length ? (
        <section aria-labelledby="additional-heading" className="border-t border-border py-20 md:py-28">
          <div className="container-page">
            <SectionHeading id="additional-heading" title={copy.additionalTitle} text={copy.additionalText} />
            <Reveal stagger className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {additional.map((service) => (
                <ServiceCard key={service.slug} service={service} locale={locale} dict={dict} />
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      <ProcessSteps locale={locale} eyebrow={dict.home.process.eyebrow} title={dict.home.process.title} />
      <FaqSection locale={locale} dict={dict} page="services" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
