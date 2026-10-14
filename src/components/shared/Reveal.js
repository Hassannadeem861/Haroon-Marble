"use client";

import { useRef } from "react";
import { isInViewport, useLazyGsap } from "@/hooks/useLazyGsap";

/**
 * Entrance animation for below-the-fold sections. Content is rendered visible
 * on the server; GSAP (loaded lazily) only animates sections that are still
 * below the viewport, so nothing on screen flickers, and nothing animates for
 * visitors who prefer reduced motion. Inside the section:
 *
 * - [data-reveal-item]  rises and fades in, one after another (with `stagger`)
 * - [data-reveal-media] is uncovered with a vertical wipe while its image
 *                       settles from a slight zoom
 * - [data-reveal-line]  draws in from the reading-start edge
 */
export function Reveal({ children, className, stagger = false, as: Tag = "div" }) {
  const scope = useRef(null);

  useLazyGsap(
    scope,
    ({ gsap }) => {
      const root = scope.current;
      if (isInViewport(root)) return;

      const items = stagger ? root.querySelectorAll("[data-reveal-item]") : [root];
      const media = root.querySelectorAll("[data-reveal-media]");
      const lines = root.querySelectorAll("[data-reveal-line]");
      const rtl = getComputedStyle(root).direction === "rtl";

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
        defaults: { clearProps: "transform,opacity,visibility,clipPath" },
      });

      timeline.from(items, { autoAlpha: 0, y: 32, duration: 1, ease: "power3.out", stagger: stagger ? 0.1 : 0 });
      if (media.length) {
        timeline.from(media, { clipPath: "inset(100% 0% 0% 0%)", duration: 1.2, ease: "power4.out", stagger: 0.1 }, 0);
        timeline.from(root.querySelectorAll("[data-reveal-media] img"), { scale: 1.15, duration: 1.6, ease: "power3.out", stagger: 0.1 }, 0);
      }
      if (lines.length) {
        timeline.from(
          lines,
          { scaleX: 0, transformOrigin: rtl ? "right center" : "left center", duration: 0.9, ease: "power2.inOut", stagger: 0.12 },
          0.25,
        );
      }
    },
    { scrollTrigger: true },
  );

  return (
    <Tag ref={scope} className={className}>
      {children}
    </Tag>
  );
}
