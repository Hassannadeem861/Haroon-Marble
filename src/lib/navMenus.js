import { blogCategories, blogPosts } from "@/data/blogPosts";
import { getImage } from "@/data/images";
import { categoryMenuText, serviceMenuGroups } from "@/data/navigation";
import { projectCategories, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { whatsappHref } from "@/data/site";
import { localizePath, pick } from "@/lib/i18n";

const CATEGORY_ICONS = {
  residential: "Home",
  commercial: "Building2",
  flooring: "Square",
  bathrooms: "Droplets",
  kitchens: "ChefHat",
  "marble-work": "Gem",
  choosing: "Gem",
  care: "Sparkles",
  planning: "Ruler",
};

function promoImage(key) {
  const image = getImage(key);
  return { src: image.src, width: image.width, height: image.height };
}

/**
 * Builds the localized dropdown content for the Services, Design Ideas and
 * Blog menus on the server, so the client navigation receives plain data.
 */
export function buildNavMenus(locale, dict) {
  const copy = dict.navMenu;
  const link = (path) => localizePath(locale, path);

  const services = {
    columns: serviceMenuGroups.map((group) => ({
      title: pick(group.title, locale),
      links: group.items
        .map(({ slug, text }) => {
          const service = getService(slug);
          return service
            ? { href: link(`/services/${slug}`), label: pick(service.title, locale), text: pick(text, locale), icon: service.icon }
            : null;
        })
        .filter(Boolean),
    })),
    footer: { href: link("/services"), label: copy.allServices },
    promo: {
      title: copy.servicesPromo.title,
      text: copy.servicesPromo.text,
      cta: { href: whatsappHref(dict.contact.form.messageIntro), label: copy.servicesPromo.cta, external: true },
    },
  };

  const portfolio = {
    columns: [
      {
        title: copy.byCategory,
        links: projectCategories
          .filter((category) => projects.some((project) => project.categories.includes(category.id)))
          .map((category) => ({
            href: `${link("/portfolio")}?category=${category.id}`,
            label: pick(category.label, locale),
            text: pick(categoryMenuText.portfolio[category.id], locale),
            icon: CATEGORY_ICONS[category.id],
          })),
      },
    ],
    footer: { href: link("/portfolio"), label: copy.allIdeas },
    promo: {
      title: copy.ideasPromo.title,
      text: copy.ideasPromo.text,
      image: promoImage("kitchenGoldVein"),
      cta: { href: link("/portfolio"), label: copy.allIdeas },
    },
  };

  const latest = [...blogPosts].sort((a, b) => (b.updated ?? b.published).localeCompare(a.updated ?? a.published)).slice(0, 4);
  const blog = {
    columns: [
      {
        title: copy.byCategory,
        links: blogCategories.map((category) => ({
          href: `${link("/blog")}?category=${category.id}`,
          label: pick(category.label, locale),
          text: pick(categoryMenuText.blog[category.id], locale),
          icon: CATEGORY_ICONS[category.id],
        })),
      },
      {
        title: copy.latestGuides,
        links: latest.map((post) => ({ href: link(`/blog/${post.slug}`), label: pick(post.title, locale) })),
      },
    ],
    footer: { href: link("/blog"), label: copy.allGuides },
    promo: {
      title: copy.blogPromo.title,
      text: copy.blogPromo.text,
      cta: { href: link("/blog/calculate-tiles-and-marble-quantity"), label: copy.blogPromo.cta },
    },
  };

  return { services, portfolio, blog };
}
