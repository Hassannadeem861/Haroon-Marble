import { ProjectCard } from "@/components/cards/ProjectCard";
import { FaqSection } from "@/components/proof/FaqSection";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHeader } from "@/components/shared/PageHeader";
import { projectCategories, projects } from "@/data/projects";
import { getDictionary } from "@/lib/dictionaries";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/portfolio", title: dict.meta.portfolio.title, description: dict.meta.portfolio.description });
}

export default async function PortfolioPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const copy = dict.portfolio;

  // Only offer filters that have at least one project.
  const filters = [
    { id: "all", label: copy.all },
    ...projectCategories
      .filter((category) => projects.some((project) => project.categories.includes(category.id)))
      .map((category) => ({ id: category.id, label: pick(category.label, locale) })),
  ];

  const items = projects.map((project) => ({
    key: project.slug,
    categories: project.categories,
    card: <ProjectCard project={project} locale={locale} dict={dict} headingLevel="h2" />,
  }));

  return (
    <>
      <PageHeader
        locale={locale}
        dict={dict}
        breadcrumbs={[
          { name: dict.nav.home, path: "/" },
          { name: dict.nav.portfolio, path: "/portfolio" },
        ]}
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        text={copy.hero.text}
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <PortfolioExplorer
            filters={filters}
            items={items}
            labels={{ filterLabel: copy.filterLabel, resultsCount: copy.resultsCount, noResults: copy.noResults }}
          />
        </div>
      </section>

      <FaqSection locale={locale} dict={dict} page="portfolio" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
