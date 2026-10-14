import { CalendarDays, MapPin } from "lucide-react";
import { SampleBadge } from "@/components/proof/SampleBadge";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { events, getProofItems } from "@/data/socialProof";
import { formatDate } from "@/lib/format";
import { pick } from "@/lib/i18n";

/** Hidden until real events are added to src/data/socialProof.js (samples show in development only). */
export function EventsSection({ locale, dict }) {
  const { items, isSample } = getProofItems(events);
  if (!items.length) return null;
  const copy = dict.proof.events;

  return (
    <section aria-labelledby="events-heading" className="py-20 md:py-28">
      <div className="container-page">
        {isSample ? <SampleBadge label={dict.proof.sampleBadge} /> : null}
        <SectionHeading id="events-heading" eyebrow={copy.eyebrow} title={copy.title} />
        <Reveal stagger as="ul" className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((event) => (
            <li key={`${event.date}-${event.title.en}`} data-reveal-item>
              <article>
                <div data-reveal-media className="relative aspect-4/3 overflow-hidden rounded-sm bg-stone">
                  <RegistryImage imageKey={event.image} locale={locale} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                </div>
                <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays aria-hidden="true" className="size-3.5 text-gold-deep" />
                    <time dateTime={event.date}>{formatDate(event.date, locale)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin aria-hidden="true" className="size-3.5 text-gold-deep" />
                    {pick(event.location, locale)}
                  </span>
                </p>
                <h3 className="mt-2 text-xl leading-snug text-charcoal md:text-2xl">{pick(event.title, locale)}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{pick(event.text, locale)}</p>
              </article>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
