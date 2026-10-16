import Link from "next/link";
import { LogoMark } from "@/components/shared/LogoMark";
import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// The brand name is always set in Latin type (lang="en"), including on Urdu pages.
export function Logo({ locale, onDark = false, className }) {
  return (
    <Link
      href={localizePath(locale)}
      className={cn("inline-flex items-center gap-3 rounded-sm", onDark && "on-dark", className)}
    >
      <LogoMark onDark={onDark} className="size-10 md:size-11" />
      <span lang="en" dir="ltr" className="flex flex-col font-sans leading-none">
        <span className={cn("text-[1.2rem] font-extrabold tracking-[0.06em]", onDark ? "text-ivory" : "text-charcoal")}>
          NADEEM
        </span>
        <span className={cn("mt-1 text-[0.68rem] font-semibold tracking-[0.42em]", onDark ? "text-gold" : "text-gold-deep")}>
          {" "}
          MARBLES
        </span>
      </span>
    </Link>
  );
}
