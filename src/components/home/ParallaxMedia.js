"use client";

import { useRef } from "react";
import { useLazyGsap } from "@/hooks/useLazyGsap";

/**
 * A gentle vertical drift of an image inside its frame while the section
 * scrolls past. The inner layer is oversized so no edge is ever revealed.
 * Disabled for reduced motion; it never pins or hijacks scrolling.
 */
export function ParallaxMedia({ children, className }) {
  const frame = useRef(null);
  const layer = useRef(null);

  useLazyGsap(
    frame,
    ({ gsap }) => {
      gsap.fromTo(
        layer.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: frame.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    },
    { scrollTrigger: true },
  );

  return (
    <div ref={frame} className={className}>
      <div ref={layer} className="absolute inset-x-0 -inset-y-[8%]">
        {children}
      </div>
    </div>
  );
}
