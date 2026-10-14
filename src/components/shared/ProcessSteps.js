import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/data/company";
import { pick } from "@/lib/i18n";

export function ProcessSteps({ locale, eyebrow, title }) {
  return (
    <section aria-labelledby="process-heading" className="bg-stone/60 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading id="process-heading" eyebrow={eyebrow} title={title} />
        <Reveal stagger as="ol" className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          {processSteps.map((step, index) => (
            <li key={step.title.en} data-reveal-item className="relative">
              <div className="flex items-center gap-4">
                <span
                  lang="en"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold font-display text-lg text-gold-deep"
                >
                  {index + 1}
                </span>
                <span data-reveal-line aria-hidden="true" className="hidden h-px flex-1 bg-gold/40 md:block" />
              </div>
              <h3 className="mt-5 text-xl text-charcoal">{pick(step.title, locale)}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{pick(step.text, locale)}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
