"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import Image from "next/image";
import { Hand, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PATTERNS = ["straight", "diagonal", "checker"];
const FINISHES = ["polished", "honed"];

function OptionButton({ pressed, onClick, children, className }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
        pressed ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 text-charcoal hover:border-charcoal",
        className,
      )}
    >
      {children}
    </button>
  );
}

/**
 * Interactive 3D preview of a tiled floor. three.js and the scene module are
 * loaded only when the section approaches the viewport, rendering pauses while
 * it is off-screen, and browsers without WebGL see a still image instead.
 *
 * materials: [{ id, label, finish, src, textureUrl }]; the first material
 * whose id matches `contrastId` is used for the alternate checkerboard tiles.
 */
export function TileVisualizer({ materials, contrastIds, labels }) {
  const host = useRef(null);
  const sceneRef = useRef(null);
  const [materialId, setMaterialId] = useState(materials[1]?.id ?? materials[0].id);
  const [pattern, setPattern] = useState("straight");
  const [finish, setFinish] = useState("polished");
  const [status, setStatus] = useState("idle"); // idle | loading | ready | unsupported

  const material = materials.find((item) => item.id === materialId);
  const contrastFor = (id) => {
    const contrast = id === contrastIds.dark ? contrastIds.light : contrastIds.dark;
    return materials.find((item) => item.id === contrast).textureUrl;
  };

  // Builds the scene with whatever is selected at the moment it loads.
  const createScene = useEffectEvent(async (element, isDisposed) => {
    setStatus("loading");
    const sceneModule = await import("./tileScene");
    if (isDisposed()) return;
    if (!sceneModule.isWebGLAvailable()) {
      setStatus("unsupported");
      return;
    }
    try {
      const controls = await sceneModule.createTileScene(element, {
        textureUrl: material.textureUrl,
        contrastTextureUrl: contrastFor(material.id),
        pattern,
        finish,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
      if (isDisposed()) {
        controls.dispose();
        return;
      }
      sceneRef.current = controls;
      controls.setActive(true);
      setStatus("ready");
    } catch {
      setStatus("unsupported");
    }
  });

  // Load the scene once the section is within 400px of the viewport, then
  // pause/resume rendering as it scrolls in and out of view.
  useEffect(() => {
    const element = host.current;
    let disposed = false;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        sceneRef.current?.setActive(entry.isIntersecting);
        if (!entry.isIntersecting || started) return;
        started = true;
        createScene(element, () => disposed);
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(element);

    return () => {
      disposed = true;
      observer.disconnect();
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  function chooseMaterial(item) {
    setMaterialId(item.id);
    sceneRef.current?.setMaterial(item.textureUrl, contrastFor(item.id));
  }
  function choosePattern(value) {
    setPattern(value);
    sceneRef.current?.setPattern(value);
  }
  function chooseFinish(value) {
    setFinish(value);
    sceneRef.current?.setFinish(value);
  }

  const description = labels.canvasLabel
    .replace("{material}", material.label)
    .replace("{pattern}", labels.patterns[pattern])
    .replace("{finish}", labels.finishes[finish]);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-8">
        <div
          ref={host}
          role="img"
          aria-label={description}
          className="relative aspect-4/3 overflow-hidden rounded-sm bg-[#e7e1d6] sm:aspect-16/10"
        >
          {status !== "ready" && status !== "unsupported" ? (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              <LoaderCircle aria-hidden="true" className="me-2 size-4 animate-spin" />
              {labels.loading}
            </div>
          ) : null}
          {status === "unsupported" ? (
            <Image src={material.src} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          ) : null}
        </div>
        <p className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>{labels.note}</span>
          {status === "ready" ? (
            <span className="inline-flex items-center gap-1.5">
              <Hand aria-hidden="true" className="size-3.5" />
              {labels.dragHint}
            </span>
          ) : null}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:col-span-4">
        <fieldset>
          <legend className="text-sm font-semibold text-charcoal">{labels.materialLabel}</legend>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {materials.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === materialId}
                onClick={() => chooseMaterial(item)}
                className="group text-start"
              >
                <span
                  className={cn(
                    "relative block aspect-square overflow-hidden rounded-sm ring-offset-2 ring-offset-ivory transition",
                    item.id === materialId ? "ring-2 ring-gold-deep" : "ring-1 ring-charcoal/10 group-hover:ring-charcoal/40",
                  )}
                >
                  <Image src={item.src} alt="" fill sizes="96px" className="object-cover" />
                </span>
                <span className="mt-2 block text-xs leading-snug font-medium text-charcoal">{item.label}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-charcoal">{labels.patternLabel}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {PATTERNS.map((value) => (
              <OptionButton key={value} pressed={pattern === value} onClick={() => choosePattern(value)}>
                {labels.patterns[value]}
              </OptionButton>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-charcoal">{labels.finishLabel}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {FINISHES.map((value) => (
              <OptionButton key={value} pressed={finish === value} onClick={() => chooseFinish(value)}>
                {labels.finishes[value]}
              </OptionButton>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
