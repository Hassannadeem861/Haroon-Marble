import { Icon } from "@/components/shared/Icon";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { reasons } from "@/data/company";
import { pick } from "@/lib/i18n";

export function WhyChooseSection({ locale, dict }) {
  const copy = dict.proof.whyChoose;
  return (
    <section aria-labelledby="why-heading" className="on-dark relative overflow-hidden bg-charcoal py-20 text-ivory md:py-28">
      <div aria-hidden="true" className="absolute inset-y-0 end-0 hidden w-1/3 opacity-25 lg:block">
        <RegistryImage imageKey="marbleBlack" locale={locale} fill alt="" sizes="33vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal to-transparent rtl:bg-linear-to-l" />
      </div>
      <div className="container-page relative">
        <SectionHeading id="why-heading" onDark eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
        <Reveal stagger as="ul" className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <li key={reason.title.en} data-reveal-item className="group relative bg-charcoal p-8 transition-colors hover:bg-charcoal-soft">
              <span data-reveal-line aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gold" />
              <div className="flex items-center justify-between">
                <Icon name={reason.icon} className="size-8 text-gold" />
                <span lang="en" className="font-display text-xl text-ivory/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-2xl text-ivory">{pick(reason.title, locale)}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">{pick(reason.text, locale)}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
