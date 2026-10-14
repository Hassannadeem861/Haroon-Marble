"use client";

import { useRef } from "react";
import { useLazyGsap } from "@/hooks/useLazyGsap";

/**
 * As the visitor scrolls past the hero, its text drifts upwards and fades,
 * linked directly to scroll position (no pinning, no scroll hijacking).
 */
export function HeroScrollEffects({ children, className }) {
  const scope = useRef(null);

  useLazyGsap(
    scope,
    ({ gsap }) => {
      const section = scope.current.closest("section");
      gsap.to(scope.current, {
        yPercent: -18,
        autoAlpha: 0.1,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    },
    { scrollTrigger: true },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
