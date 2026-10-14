import Image from "next/image";
import { getImage } from "@/data/images";
import { pick } from "@/lib/i18n";

/**
 * next/image wrapper for images in the central registry. Width/height come
 * from the registry so the browser reserves space (no layout shift). Use
 * `fill` inside a positioned, aspect-ratio box for cropped layouts.
 * `hero` loads the image eagerly with high fetch priority; use it only for
 * the single above-the-fold (LCP) image. Everything else lazy-loads.
 * Pass alt="" when the image is decorative (e.g. next to a text link).
 */
export function RegistryImage({ imageKey, locale, sizes, fill = false, hero = false, quality, className, alt }) {
  const image = getImage(imageKey);
  const altText = alt ?? pick(image.alt, locale);
  const loading = hero ? { loading: "eager", fetchPriority: "high" } : {};

  if (fill) {
    return <Image src={image.src} alt={altText} fill sizes={sizes} quality={quality} className={className} {...loading} />;
  }
  return (
    <Image
      src={image.src}
      alt={altText}
      width={image.width}
      height={image.height}
      sizes={sizes}
      quality={quality}
      className={className}
      {...loading}
    />
  );
}
