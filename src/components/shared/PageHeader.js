import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Eyebrow } from "@/components/shared/SectionHeading";

/** Editorial header for inner pages: breadcrumbs, eyebrow, H1, intro and an optional image. */
export function PageHeader({ locale, dict, breadcrumbs, eyebrow, title, text, imageKey, children }) {
  return (
    <header className="border-b border-border bg-ivory">
      <div className="container-page grid gap-10 pt-8 pb-14 md:pt-10 md:pb-20 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className={imageKey ? "lg:col-span-7" : "lg:col-span-9"}>
          <Breadcrumbs locale={locale} label={dict.common.breadcrumb} items={breadcrumbs} />
          <div className="mt-10 animate-rise md:mt-14">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="mt-5 text-[2.35rem] leading-[1.06] text-charcoal sm:text-5xl lg:text-[3.6rem]">{title}</h1>
            {text ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p> : null}
            {children}
          </div>
        </div>
        {imageKey ? (
          <div className="relative aspect-4/3 max-h-[26rem] w-full overflow-hidden rounded-sm bg-stone lg:col-span-5 lg:aspect-3/2">
            <RegistryImage
              imageKey={imageKey}
              locale={locale}
              fill
              hero
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
