import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, onDark = false, className }) {
  return (
    <p
      className={cn(
        "tracking-eyebrow flex items-center gap-3 text-xs font-semibold",
        onDark ? "text-gold" : "text-gold-deep",
        className,
      )}
    >
      <span aria-hidden="true" className="gold-rule w-8" />
      {children}
    </p>
  );
}

export function SectionHeading({ id, eyebrow, title, text, onDark = false, align = "start", as: Heading = "h2", className }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center [&_p:first-child]:justify-center", className)}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Heading
        id={id}
        className={cn(
          "mt-4 text-[2rem] leading-[1.1] md:text-[2.75rem]",
          onDark ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </Heading>
      {text ? (
        <p className={cn("mt-5 text-base leading-relaxed md:text-lg", onDark ? "text-mist" : "text-muted-foreground")}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

/** Section heading with a "view all" style link aligned to the inline end on wide screens. */
export function SectionHeadingWithLink({ id, eyebrow, title, text, linkHref, linkLabel }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <SectionHeading id={id} eyebrow={eyebrow} title={title} text={text} />
      <Link
        href={linkHref}
        className="inline-flex min-h-10 shrink-0 items-center gap-2 text-sm font-semibold text-charcoal underline-offset-4 hover:underline"
      >
        {linkLabel}
        <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
      </Link>
    </div>
  );
}
