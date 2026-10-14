import { locale as getLocale } from "next/root-params";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { LogoMark } from "@/components/shared/LogoMark";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, hasLocale, localizePath } from "@/lib/i18n";

export default async function NotFound() {
  const value = await getLocale();
  const locale = hasLocale(value) ? value : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="container-page flex flex-col items-start py-24 md:py-36">
      <LogoMark className="size-14" />
      <p lang="en" className="mt-8 font-display text-7xl text-gold-deep md:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-4xl text-charcoal md:text-5xl">{dict.notFound.title}</h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">{dict.notFound.text}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={localizePath(locale)}>
          {dict.notFound.home}
          <ArrowRight aria-hidden="true" className="rtl:rotate-180" />
        </ButtonLink>
        <ButtonLink href={localizePath(locale, "/contact")} variant="outline">
          {dict.notFound.contact}
        </ButtonLink>
      </div>
    </section>
  );
}
