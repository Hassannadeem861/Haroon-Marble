"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(Flip, useGSAP);

/**
 * Category filter for the portfolio. Cards are rendered on the server and
 * passed in as `items[].card`; this component only decides which are shown.
 * GSAP Flip animates the re-flow so cards glide to their new positions.
 */
export function PortfolioExplorer({ filters, items, labels }) {
  const [active, setActive] = useState("all");
  const grid = useRef(null);
  const flipState = useRef(null);

  const visible = active === "all" ? items : items.filter((item) => item.categories.includes(active));

  function choose(id) {
    if (id === active) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    flipState.current = reduceMotion ? null : Flip.getState(grid.current.querySelectorAll("[data-flip-id]"));
    setActive(id);
  }

  useGSAP(
    () => {
      if (!flipState.current) return;
      Flip.from(flipState.current, {
        duration: 0.6,
        ease: "power3.inOut",
        absolute: true,
        nested: true,
        onEnter: (elements) => gsap.fromTo(elements, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.15 }),
      });
      flipState.current = null;
    },
    { dependencies: [active], scope: grid },
  );

  return (
    <div>
      <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={active === filter.id}
            onClick={() => choose(filter.id)}
            className={cn(
              "min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
              active === filter.id
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-charcoal/20 text-charcoal hover:border-charcoal",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted-foreground">
        {labels.resultsCount.replace("{n}", String(visible.length))}
      </p>

      <ul ref={grid} className="relative mt-6 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.key} data-flip-id={item.key}>
            {item.card}
          </li>
        ))}
      </ul>
      {visible.length === 0 ? <p className="py-12 text-muted-foreground">{labels.noResults}</p> : null}
    </div>
  );
}
