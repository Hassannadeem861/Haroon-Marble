import Link from "next/link";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { blogCategories } from "@/data/blogPosts";
import { format } from "@/lib/format";
import { localizePath, pick } from "@/lib/i18n";

export function ArticleCard({ post, locale, dict, headingLevel: Heading = "h3" }) {
  const category = blogCategories.find((item) => item.id === post.category);
  return (
    <article data-reveal-item className="group relative flex flex-col">
      <div data-reveal-media className="relative aspect-3/2 overflow-hidden rounded-sm bg-stone">
        <RegistryImage
          imageKey={post.cover}
          locale={locale}
          fill
          alt=""
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-5">
        <p className="flex flex-wrap gap-x-3 text-xs font-medium text-muted-foreground">
          {category ? <span className="font-semibold text-gold-deep">{pick(category.label, locale)}</span> : null}
          <span>{format(dict.common.minutesRead, { n: post.readingMinutes })}</span>
        </p>
        <Heading className="mt-2 text-xl leading-snug text-charcoal md:text-2xl">
          <Link href={localizePath(locale, `/blog/${post.slug}`)} className="after:absolute after:inset-0 focus-visible:outline-none">
            {pick(post.title, locale)}
          </Link>
        </Heading>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{pick(post.excerpt, locale)}</p>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-sm ring-ring group-has-focus-visible:ring-2" />
    </article>
  );
}
