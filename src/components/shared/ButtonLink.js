import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** A link styled as a button. Internal paths use next/link; tel:, mailto: and https: use <a>. */
export function ButtonLink({ href, variant = "default", size = "xl", className, children, external = false, ...props }) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const isNative = external || /^(tel:|mailto:|https?:)/.test(href);

  if (isNative) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
