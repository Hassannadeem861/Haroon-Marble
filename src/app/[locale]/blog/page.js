import Link from "next/link";
import { FaqSection } from "@/components/proof/FaqSection";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHeader } from "@/components/shared/PageHeader";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { blogCategories, blogPosts } from "@/data/blogPosts";
import { getDictionary } from "@/lib/dictionaries";
import { format } from "@/lib/format";
import { localizePath, pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/blog", title: dict.meta.blog.title, description: dict.meta.blog.description });
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const copy = dict.blog;
  const [featured] = blogPosts;
  const featuredHref = localizePath(locale, `/blog/${featured.slug}`);

  const items = blogPosts.map((post) => ({
    key: post.slug,
    category: post.category,
    searchText: [pick(post.title, locale), pick(post.excerpt, locale), pick(post.title, "en")].join(" ").toLocaleLowerCase(),
    card: <ArticleCard post={post} locale={locale} dict={dict} />,
  }));

  return (
    <>
      <PageHeader
        locale={locale}
        dict={dict}
        breadcrumbs={[
          { name: dict.nav.home, path: "/" },
          { name: dict.nav.blog, path: "/blog" },
        ]}
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        text={copy.hero.text}
      />

      <section aria-labelledby="featured-heading" className="py-16 md:py-20">
        <div className="container-page">
          <h2 id="featured-heading" className="sr-only">
            {copy.featured}
          </h2>
          <article className="group relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-stone lg:col-span-7">
              <RegistryImage
                imageKey={featured.cover}
                locale={locale}
                fill
                alt=""
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-5">
              <Eyebrow>{copy.featured}</Eyebrow>
              <h3 className="mt-4 text-3xl leading-tight text-charcoal md:text-4xl">
                <Link href={featuredHref} className="after:absolute after:inset-0 focus-visible:outline-none">
                  {pick(featured.title, locale)}
                </Link>
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{pick(featured.excerpt, locale)}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal" aria-hidden="true">
                {dict.common.readArticle} · {format(dict.common.minutesRead, { n: featured.readingMinutes })}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </p>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-sm ring-ring group-has-focus-visible:ring-2" />
          </article>
        </div>
      </section>

      <section aria-labelledby="more-articles-heading" className="border-t border-border py-16 md:py-24">
        <div className="container-page">
          <h2 id="more-articles-heading" className="mb-8 text-3xl text-charcoal md:text-4xl">
            {copy.moreArticles}
          </h2>
          <BlogExplorer
            items={items}
            featuredKey={featured.slug}
            categories={blogCategories.map((category) => ({ id: category.id, label: pick(category.label, locale) }))}
            labels={{
              categoryLabel: copy.categoryLabel,
              allCategories: copy.allCategories,
              searchLabel: copy.searchLabel,
              searchPlaceholder: copy.searchPlaceholder,
              noResults: copy.noResults,
            }}
          />
        </div>
      </section>

      <FaqSection locale={locale} dict={dict} page="blog" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
