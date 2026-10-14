import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { localizePath, pick } from "@/lib/i18n";

export function ServiceCard({ service, locale, dict, headingLevel: Heading = "h3" }) {
  const href = localizePath(locale, `/services/${service.slug}`);
  return (
    <article data-reveal-item className="group relative flex flex-col">
      <div data-reveal-media className="relative aspect-4/3 overflow-hidden rounded-sm bg-stone">
        <RegistryImage
          imageKey={service.image}
          locale={locale}
          fill
          alt=""
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        {!service.verified ? (
          <p className="mb-2 text-xs font-semibold text-gold-deep">{dict.common.askAvailability}</p>
        ) : null}
        <Heading className="text-2xl leading-snug text-charcoal">
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {pick(service.title, locale)}
          </Link>
        </Heading>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{pick(service.summary, locale)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal" aria-hidden="true">
          {dict.common.viewService}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
      {/* Focus ring for the stretched link */}
      <span aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-sm ring-ring group-has-focus-visible:ring-2" />
    </article>
  );
}
