import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { commitments } from "@/data/company";
import { pick } from "@/lib/i18n";

/** Workmanship standards, taken from the standards Nadeem Marbles sets for its own team. */
export function Commitments({ locale, eyebrow, title, text }) {
  return (
    <section aria-labelledby="commitments-heading" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="commitments-heading" eyebrow={eyebrow} title={title} text={text} />
        </div>
        <Reveal stagger as="ul" className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:col-span-8">
          {commitments.map((item) => (
            <li key={item.icon} data-reveal-item className="bg-ivory p-8">
              <Icon name={item.icon} className="size-7 text-gold-deep" />
              <h3 className="mt-5 text-xl text-charcoal">{pick(item.title, locale)}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{pick(item.text, locale)}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
