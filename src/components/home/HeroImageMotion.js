"use client";

import { useRef } from "react";
import { useLazyGsap } from "@/hooks/useLazyGsap";

/**
 * Lets the hero photograph settle from a slight zoom to its resting scale.
 * The zoom is applied in CSS (motion-safe only) so there is no jump before
 * GSAP loads; GSAP only animates towards scale 1. The image renders
 * immediately, so this never delays the Largest Contentful Paint.
 */
export function HeroImageMotion({ children, className }) {
  const scope = useRef(null);

  useLazyGsap(scope, ({ gsap }) => {
    gsap.to(scope.current, { scale: 1, duration: 2.6, ease: "power2.out" });
  });

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
