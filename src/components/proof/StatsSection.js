import { CountUp } from "@/components/proof/CountUp";
import { SampleBadge } from "@/components/proof/SampleBadge";
import { Reveal } from "@/components/shared/Reveal";
import { getProofItems, stats } from "@/data/socialProof";
import { pick } from "@/lib/i18n";

/** Hidden until real figures are added to src/data/socialProof.js (samples show in development only). */
export function StatsSection({ locale, dict }) {
  const { items, isSample } = getProofItems(stats);
  if (!items.length) return null;

  return (
    <section aria-labelledby="stats-heading" className="border-b border-border bg-ivory py-14 md:py-16">
      <div className="container-page">
        <h2 id="stats-heading" className="sr-only">
          {dict.proof.statsHeading}
        </h2>
        {isSample ? <SampleBadge label={dict.proof.sampleBadge} /> : null}
        <Reveal stagger as="dl" className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {items.map((stat) => (
            <div
              key={stat.label.en}
              data-reveal-item
              className="flex flex-col-reverse items-center gap-2 px-4 text-center lg:border-e lg:border-border lg:last:border-e-0"
            >
              <dt className="text-sm text-muted-foreground md:text-base">{pick(stat.label, locale)}</dt>
              <dd className="font-display text-5xl leading-none text-charcoal md:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
