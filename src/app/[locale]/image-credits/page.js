import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";
import { images } from "@/data/images";
import { getDictionary } from "@/lib/dictionaries";
import { format } from "@/lib/format";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    ...buildMetadata({ locale, path: "/image-credits", title: dict.meta.credits.title, description: dict.meta.credits.description }),
    // A housekeeping page: useful to visitors, not worth a search result.
    robots: { index: false, follow: true },
  };
}

export default async function ImageCreditsPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const credited = Object.entries(images).filter(([, image]) => image.credit);

  return (
    <>
      <PageHeader
        locale={locale}
        dict={dict}
        breadcrumbs={[
          { name: dict.nav.home, path: "/" },
          { name: dict.credits.title, path: "/image-credits" },
        ]}
        title={dict.credits.title}
        text={dict.credits.intro}
      />
      <section className="py-16 md:py-20">
        <ul className="container-page grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {credited.map(([key, image]) => (
            <li key={key} className="flex gap-4">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-sm bg-stone">
                <Image src={image.src} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div className="text-sm leading-relaxed">
                <p className="text-charcoal">{pick(image.alt, locale)}</p>
                <p className="mt-1 text-muted-foreground">
                  <a href={image.credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-charcoal">
                    {format(dict.credits.photoBy, { name: image.credit.photographer })}
                  </a>{" "}
                  {format(dict.credits.on, { source: image.credit.source })}
                </p>
                <p className="text-muted-foreground">
                  <a href={image.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-charcoal">
                    {format(dict.credits.license, { license: image.credit.license })}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
