import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParallaxMedia } from "@/components/home/ParallaxMedia";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { localizePath } from "@/lib/i18n";

export function MarbleFeature({ locale, dict }) {
  const copy = dict.home.marble;
  return (
    <section aria-labelledby="marble-heading" className="on-dark bg-charcoal text-ivory">
      <div className="grid lg:grid-cols-2">
        <ParallaxMedia className="relative min-h-[22rem] overflow-hidden sm:min-h-[30rem] lg:min-h-full">
          <RegistryImage
            imageKey="bathroomVanity"
            locale={locale}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </ParallaxMedia>

        <Reveal className="px-5 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
          <SectionHeading id="marble-heading" onDark eyebrow={copy.eyebrow} title={copy.title} />
          <p className="mt-6 max-w-xl leading-relaxed text-mist">{copy.p1}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-mist">{copy.p2}</p>

          <h3 className="mt-10 font-sans text-sm font-semibold text-gold">{copy.finishesTitle}</h3>
          <ul className="mt-4 max-w-xl divide-y divide-ivory/10 border-y border-ivory/10">
            {copy.finishes.map((finish) => (
              <li key={finish} className="flex gap-4 py-4 text-[0.95rem] text-ivory/90">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" />
                {finish}
              </li>
            ))}
          </ul>

          <Link
            href={localizePath(locale, "/blog/choose-marble-for-your-home")}
            className="mt-10 inline-flex min-h-10 items-center gap-2 font-semibold text-gold underline-offset-4 hover:underline"
          >
            {copy.link}
            <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
