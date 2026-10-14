import { ArticleCard } from "@/components/cards/ArticleCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { HomeHero } from "@/components/home/HomeHero";
import { MarbleFeature } from "@/components/home/MarbleFeature";
import { MaterialGallery } from "@/components/home/MaterialGallery";
import { SectorsSection } from "@/components/home/SectorsSection";
import { EventsSection } from "@/components/proof/EventsSection";
import { FaqSection } from "@/components/proof/FaqSection";
import { StatsSection } from "@/components/proof/StatsSection";
import { TestimonialsSection } from "@/components/proof/TestimonialsSection";
import { WhyChooseSection } from "@/components/proof/WhyChooseSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand } from "@/components/shared/CtaBand";
import { PillarsGrid } from "@/components/shared/PillarsGrid";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading, SectionHeadingWithLink } from "@/components/shared/SectionHeading";
import { blogPosts } from "@/data/blogPosts";
import { projects } from "@/data/projects";
import { verifiedServices } from "@/data/services";
import { getDictionary } from "@/lib/dictionaries";
import { localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/", title: dict.meta.home.title, description: dict.meta.home.description, absoluteTitle: true });
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const home = dict.home;

  return (
    <>
      <JsonLd data={organizationSchema(locale)} />
      <JsonLd data={websiteSchema(locale)} />

      <HomeHero locale={locale} dict={dict} />
      <StatsSection locale={locale} dict={dict} />

      <section aria-labelledby="intro-heading" className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading id="intro-heading" eyebrow={home.intro.eyebrow} title={home.intro.title} />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8 lg:self-end">{home.intro.text}</p>
          </div>
          <div className="mt-14">
            <PillarsGrid locale={locale} />
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="pb-20 md:pb-28">
        <div className="container-page">
          <SectionHeadingWithLink
            id="services-heading"
            eyebrow={home.services.eyebrow}
            title={home.services.title}
            linkHref={localizePath(locale, "/services")}
            linkLabel={dict.common.viewAllServices}
          />
          <Reveal stagger className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {verifiedServices.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} dict={dict} />
            ))}
          </Reveal>
        </div>
      </section>

      <WhyChooseSection locale={locale} dict={dict} />
      <MarbleFeature locale={locale} dict={dict} />
      <MaterialGallery locale={locale} dict={dict} />
      <SectorsSection locale={locale} dict={dict} />

      <section aria-labelledby="projects-heading" className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeadingWithLink
            id="projects-heading"
            eyebrow={home.projects.eyebrow}
            title={home.projects.title}
            text={dict.common.illustrativeNote}
            linkHref={localizePath(locale, "/portfolio")}
            linkLabel={dict.common.viewPortfolio}
          />
          <Reveal stagger className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} tall={index === 1} />
            ))}
          </Reveal>
        </div>
      </section>

      <TestimonialsSection locale={locale} dict={dict} />
      <ProcessSteps locale={locale} eyebrow={home.process.eyebrow} title={home.process.title} />
      <EventsSection locale={locale} dict={dict} />

      <section aria-labelledby="articles-heading" className="border-t border-border py-20 md:py-28">
        <div className="container-page">
          <SectionHeadingWithLink
            id="articles-heading"
            eyebrow={home.blog.eyebrow}
            title={home.blog.title}
            linkHref={localizePath(locale, "/blog")}
            linkLabel={dict.common.viewAll}
          />
          <Reveal stagger className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} locale={locale} dict={dict} />
            ))}
          </Reveal>
        </div>
      </section>

      <FaqSection locale={locale} dict={dict} page="home" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
