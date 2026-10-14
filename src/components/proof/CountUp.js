"use client";

import { useRef } from "react";
import { isInViewport, useLazyGsap } from "@/hooks/useLazyGsap";

const formatter = new Intl.NumberFormat("en-US");

/**
 * Renders the final number on the server (so it is correct without
 * JavaScript and for search engines), then counts up from zero with GSAP when
 * it scrolls into view. Skipped for reduced motion or if already on screen.
 */
export function CountUp({ value, suffix = "", className }) {
  const element = useRef(null);
  const text = (number) => `${formatter.format(Math.round(number))}${suffix}`;

  useLazyGsap(
    element,
    ({ gsap }) => {
      const node = element.current;
      if (isInViewport(node)) return;
      const counter = { value: 0 };
      node.textContent = text(0);
      gsap.to(counter, {
        value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          node.textContent = text(counter.value);
        },
        scrollTrigger: { trigger: node, start: "top 90%", once: true },
      });
    },
    { scrollTrigger: true },
  );

  return (
    <span ref={element} lang="en" dir="ltr" className={className}>
      {text(value)}
    </span>
  );
}
