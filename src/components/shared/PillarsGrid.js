import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { pillars } from "@/data/company";
import { pick } from "@/lib/i18n";

/** The four disciplines from Nadeem Marbles' own material: modelling, designing, pattern, proper fixing. */
export function PillarsGrid({ locale }) {
  return (
    <Reveal stagger as="ol" className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar, index) => (
        <li
          key={pillar.icon}
          data-reveal-item
          className="border-b border-border py-8 sm:px-6 sm:[&:nth-child(odd)]:ps-0 lg:border-b-0 lg:border-e lg:px-8 lg:[&:nth-child(3)]:ps-8 lg:last:border-e-0"
        >
          <div className="flex items-center justify-between">
            <Icon name={pillar.icon} className="size-8 text-gold-deep" />
            <span lang="en" className="font-display text-2xl text-mist">
              0{index + 1}
            </span>
          </div>
          <h3 className="mt-6 text-2xl text-charcoal">{pick(pillar.title, locale)}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{pick(pillar.text, locale)}</p>
        </li>
      ))}
    </Reveal>
  );
}
