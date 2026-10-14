"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/**
 * Gallery grid with an accessible lightbox (shadcn Dialog on Base UI):
 * focus is trapped while open, Escape closes, focus returns to the thumbnail,
 * and arrow keys move between images (mirrored for right-to-left pages).
 */
export function ProjectGallery({ images, title, dir, labels }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;
  const count = images.length;
  const current = isOpen ? images[openIndex] : null;

  const show = (step) => setOpenIndex((index) => (index + step + count) % count);

  function handleKeyDown(event) {
    if (count < 2) return;
    const forward = dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const backward = dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    if (event.key === forward) {
      event.preventDefault();
      show(1);
    } else if (event.key === backward) {
      event.preventDefault();
      show(-1);
    }
  }

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <li key={image.src} className={cn(index === 0 && count > 2 && "sm:col-span-2")}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={labels.open.replace("{i}", String(index + 1)).replace("{alt}", image.alt)}
              className="group relative block w-full overflow-hidden rounded-sm bg-stone"
            >
              <span className={cn("relative block", index === 0 && count > 2 ? "aspect-16/9" : "aspect-4/3")}>
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes={index === 0 && count > 2 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute end-3 bottom-3 flex size-10 items-center justify-center rounded-full bg-charcoal/80 text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Expand className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={isOpen} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          onKeyDown={handleKeyDown}
          className="max-w-[calc(100%-1.5rem)] gap-3 border-0 bg-charcoal p-3 text-ivory ring-0 sm:max-w-[min(92vw,78rem)] md:p-4 [&_[data-slot=dialog-close]]:bg-charcoal/80 [&_[data-slot=dialog-close]]:text-ivory [&_[data-slot=dialog-close]]:hover:bg-charcoal"
        >
          {current ? (
            <>
              <DialogTitle className="sr-only">{title}</DialogTitle>
              <div className="relative h-[min(72vh,52rem)] w-full">
                <Image src={current.src} alt={current.alt} fill sizes="92vw" className="object-contain" />
              </div>
              <div className="flex items-center justify-between gap-4 px-1">
                <DialogDescription className="text-sm text-mist">
                  <span className="me-3 font-semibold text-gold">
                    {labels.count.replace("{i}", String(openIndex + 1)).replace("{n}", String(count))}
                  </span>
                  {current.alt}
                </DialogDescription>
                {count > 1 ? (
                  <div className="flex shrink-0 gap-2">
                    <Button variant="outline-light" size="icon" onClick={() => show(-1)} aria-label={labels.previous}>
                      <ChevronLeft aria-hidden="true" className="rtl:rotate-180" />
                    </Button>
                    <Button variant="outline-light" size="icon" onClick={() => show(1)} aria-label={labels.next}>
                      <ChevronRight aria-hidden="true" className="rtl:rotate-180" />
                    </Button>
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
