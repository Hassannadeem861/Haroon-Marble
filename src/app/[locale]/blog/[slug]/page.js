import Link from "next/link";
import { FaqSection } from "@/components/proof/FaqSection";
import { notFound } from "next/navigation";
import { ArrowLeft, Info } from "lucide-react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { blogCategories, blogPosts, getPost } from "@/data/blogPosts";
import { getImage } from "@/data/images";
import { getDictionary } from "@/lib/dictionaries";
import { format, formatDate } from "@/lib/format";
import { localizePath, pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const cover = getImage(post.cover);
  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    title: pick(post.title, locale),
    description: pick(post.excerpt, locale),
    type: "article",
    publishedTime: post.published,
    image: { src: cover.src, width: cover.width, height: cover.height, alt: pick(cover.alt, locale) },
  });
}

function ArticleBlock({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.ul)
    return (
      <ul>
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return <p>{block.p}</p>;
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const title = pick(post.title, locale);
  const category = blogCategories.find((item) => item.id === post.category);
  const more = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(locale, post, getImage(post.cover))} />

      <article>
        <header className="container-page pt-8 md:pt-10">
          <Breadcrumbs
            locale={locale}
            label={dict.common.breadcrumb}
            items={[
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.blog, path: "/blog" },
              { name: title, path: `/blog/${post.slug}` },
            ]}
          />
          <div className="mx-auto mt-12 max-w-3xl animate-rise text-center md:mt-16">
            {category ? <p className="text-sm font-semibold text-gold-deep">{pick(category.label, locale)}</p> : null}
            <h1 className="mt-4 text-[2.25rem] leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.25rem]">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{pick(post.excerpt, locale)}</p>
            <p className="mt-6 flex flex-wrap justify-center gap-x-4 text-sm text-muted-foreground">
              <span>
                {dict.common.publishedOn}: <time dateTime={post.published}>{formatDate(post.published, locale)}</time>
              </span>
              <span aria-hidden="true">·</span>
              <span>{format(dict.common.minutesRead, { n: post.readingMinutes })}</span>
            </p>
          </div>
          <div className="relative mx-auto mt-12 aspect-16/9 max-w-5xl overflow-hidden rounded-sm bg-stone">
            <RegistryImage imageKey={post.cover} locale={locale} fill hero sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
          </div>
        </header>

        <div className="container-page py-14 md:py-20">
          <div className="prose-article mx-auto text-charcoal/90">
            {post.sample ? (
              <aside className="mb-10 flex gap-3 rounded-sm border border-gold/50 bg-gold/10 p-4 text-sm leading-relaxed text-charcoal">
                <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                <span>
                  <strong className="font-semibold">{dict.common.sampleArticle}.</strong> {dict.common.sampleArticleNote}
                </span>
              </aside>
            ) : null}
            {pick(post.content, locale).map((block, index) => (
              <ArticleBlock key={index} block={block} />
            ))}
            <p className="mt-12 border-t border-border pt-8">
              <Link
                href={localizePath(locale, "/blog")}
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-charcoal underline-offset-4 hover:underline"
              >
                <ArrowLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
                {dict.blog.backToBlog}
              </Link>
            </p>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-heading" className="border-t border-border bg-stone/60 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading id="more-heading" title={dict.blog.moreArticles} />
          <Reveal stagger className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((item) => (
              <ArticleCard key={item.slug} post={item} locale={locale} dict={dict} />
            ))}
          </Reveal>
        </div>
      </section>

      <FaqSection locale={locale} dict={dict} page="blog" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
