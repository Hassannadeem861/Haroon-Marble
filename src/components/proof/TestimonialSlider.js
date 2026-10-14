"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

/**
 * Testimonial carousel. Each change animates the new quote in with GSAP
 * (loaded lazily). Autoplay pauses on hover and keyboard focus, has a
 * visible pause button, and is off entirely for reduced-motion visitors.
 *
 * items: [{ quote, name, context }] already localized.
 */
export function TestimonialSlider({ items, dir, labels }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const slide = useRef(null);
  const gsapRef = useRef(null);
  const count = items.length;

  const go = (step) => setIndex((current) => (current + step + count) % count);

  // Load GSAP once (after first render) unless reduced motion is preferred.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    import("gsap").then(({ gsap }) => {
      gsapRef.current = gsap;
    });
  }, []);

  // Animate the newly shown quote in.
  useEffect(() => {
    const gsap = gsapRef.current;
    if (!gsap || !slide.current) return;
    const words = slide.current.querySelectorAll("[data-word]");
    const tween = gsap.timeline();
    tween.fromTo(slide.current.querySelector("[data-mark]"), { scale: 0.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, ease: "back.out(2)" });
    tween.fromTo(words, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.025 }, 0.05);
    tween.fromTo(slide.current.querySelector("[data-author]"), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");
    return () => tween.kill();
  }, [index]);

  // Autoplay.
  useEffect(() => {
    if (!playing || hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, playing, hovered, count]);

  const current = items[index];
  const Previous = dir === "rtl" ? ChevronRight : ChevronLeft;
  const Next = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-roledescription="carousel"
    >
      <figure
        ref={slide}
        key={index}
        aria-roledescription="slide"
        aria-label={labels.slide.replace("{i}", String(index + 1)).replace("{n}", String(count))}
        className="min-h-[16rem] md:min-h-[14rem]"
      >
        <Quote data-mark aria-hidden="true" className="size-12 text-gold rtl:-scale-x-100" />
        <blockquote className="mt-6 font-display text-2xl leading-snug text-ivory md:text-[2.1rem]">
          {current.quote.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} data-word className="inline-block">
              {word}&nbsp;
            </span>
          ))}
        </blockquote>
        <figcaption data-author className="mt-8 text-sm text-mist">
          <span className="font-semibold text-ivory">{current.name}</span>
          {current.context ? <span> · {current.context}</span> : null}
        </figcaption>
      </figure>

      {count > 1 ? (
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={labels.previous}
            className="flex size-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            <Previous aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={labels.next}
            className="flex size-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            <Next aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? labels.pause : labels.play}
            className="flex size-11 items-center justify-center rounded-full text-mist transition-colors hover:text-ivory"
          >
            {playing ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
          </button>
          <div className="ms-auto flex gap-2" aria-hidden="true">
            {items.map((item, dotIndex) => (
              <span
                key={dotIndex}
                className={cn("h-1 rounded-full transition-all duration-500", dotIndex === index ? "w-8 bg-gold" : "w-3 bg-ivory/25")}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
