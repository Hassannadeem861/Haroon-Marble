import { SampleBadge } from "@/components/proof/SampleBadge";
import { TestimonialSlider } from "@/components/proof/TestimonialSlider";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { getProofItems, testimonials } from "@/data/socialProof";
import { getDirection, pick } from "@/lib/i18n";

/**
 * Hidden until real testimonials (shared with the client's permission) are
 * added to src/data/socialProof.js. Samples show in development only.
 */
export function TestimonialsSection({ locale, dict }) {
  const { items, isSample } = getProofItems(testimonials);
  if (!items.length) return null;
  const copy = dict.proof.testimonials;

  const localized = items.map((item) => ({
    quote: pick(item.quote, locale),
    name: item.name,
    context: pick(item.context, locale),
  }));

  return (
    <section aria-labelledby="testimonials-heading" className="on-dark bg-charcoal py-20 text-ivory md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {isSample ? <SampleBadge label={dict.proof.sampleBadge} /> : null}
          <Eyebrow onDark>{copy.eyebrow}</Eyebrow>
          <h2 id="testimonials-heading" className="mt-4 text-[2rem] leading-[1.1] text-ivory md:text-[2.75rem]">
            {copy.title}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <TestimonialSlider items={localized} dir={getDirection(locale)} labels={copy} />
        </div>
      </div>
    </section>
  );
}
