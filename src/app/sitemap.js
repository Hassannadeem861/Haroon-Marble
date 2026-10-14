import { blogPosts } from "@/data/blogPosts";
import { staticRoutes } from "@/data/navigation";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { locales } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";

// One entry per locale and page, each listing its hreflang alternates.
export default function sitemap() {
  const paths = [
    ...staticRoutes.map((path) => ({ path })),
    ...services.map((service) => ({ path: `/services/${service.slug}` })),
    ...projects.map((project) => ({ path: `/portfolio/${project.slug}` })),
    ...blogPosts.map((post) => ({ path: `/blog/${post.slug}`, lastModified: post.updated ?? post.published })),
  ];

  return paths.flatMap(({ path, lastModified }) =>
    locales.map((locale) => {
      const { canonical, languages } = localeAlternates(locale, path);
      return {
        url: canonical,
        ...(lastModified ? { lastModified } : {}),
        alternates: { languages },
      };
    }),
  );
}
