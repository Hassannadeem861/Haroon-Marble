"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * Client-side search and category filter over the (small, static) list of
 * articles. Cards are server-rendered and passed in as `items[].card`.
 * When no filter is active the featured article is hidden here because it is
 * already shown above. The category lives in the URL (?category=care) so the
 * header menu can link straight to it.
 */
export function BlogExplorer({ items, categories, featuredKey, labels }) {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const requested = searchParams.get("category");
  const category = categories.some((item) => item.id === requested) ? requested : "all";
  const filterBar = useRef(null);
  const changedHere = useRef(false);

  // Arriving from the header menu with a category: bring the results into view.
  useEffect(() => {
    if (changedHere.current) {
      changedHere.current = false;
      return;
    }
    if (requested) filterBar.current?.scrollIntoView({ block: "start" });
  }, [requested]);

  function setCategory(id) {
    changedHere.current = true;
    const params = new URLSearchParams(searchParams);
    if (id === "all") params.delete("category");
    else params.set("category", id);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const term = query.trim().toLocaleLowerCase();
  const filtering = term !== "" || category !== "all";
  const visible = items.filter((item) => {
    if (!filtering) return item.key !== featuredKey;
    const matchesCategory = category === "all" || item.category === category;
    const matchesTerm = term === "" || item.searchText.includes(term);
    return matchesCategory && matchesTerm;
  });

  return (
    <div>
      <div ref={filterBar} className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label={labels.categoryLabel} className="flex flex-wrap gap-2">
          {[{ id: "all", label: labels.allCategories }, ...categories].map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
                category === item.id ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 text-charcoal hover:border-charcoal",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="relative w-full md:max-w-xs">
          <label htmlFor="blog-search" className="sr-only">
            {labels.searchLabel}
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.searchPlaceholder}
            className="h-11 bg-white ps-9"
          />
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length === 0 ? labels.noResults : null}
      </p>

      {visible.length ? (
        <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.key}>{item.card}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-muted-foreground">{labels.noResults}</p>
      )}
    </div>
  );
}
