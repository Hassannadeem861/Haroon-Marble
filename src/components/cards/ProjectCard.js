import Link from "next/link";
import { RegistryImage } from "@/components/shared/RegistryImage";
import { localizePath, pick } from "@/lib/i18n";
import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, locale, dict, tall = false, headingLevel: Heading = "h3" }) {
  const categoryLabels = project.categories
    .map((id) => projectCategories.find((category) => category.id === id))
    .filter(Boolean)
    .map((category) => pick(category.label, locale));

  return (
    <article data-reveal-item className="group relative">
      <div data-reveal-media className={cn("relative overflow-hidden rounded-sm bg-stone", tall ? "aspect-4/5" : "aspect-4/3")}>
        <RegistryImage
          imageKey={project.cover}
          locale={locale}
          fill
          alt=""
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-4">
        <p className="text-xs font-medium text-muted-foreground">{categoryLabels.join(" · ")}</p>
        <Heading className="mt-1.5 text-xl leading-snug text-charcoal md:text-2xl">
          <Link
            href={localizePath(locale, `/portfolio/${project.slug}`)}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {pick(project.title, locale)}
          </Link>
        </Heading>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-sm ring-ring group-has-focus-visible:ring-2" />
    </article>
  );
}
