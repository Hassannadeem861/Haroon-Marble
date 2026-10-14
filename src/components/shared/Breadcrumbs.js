import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { localizePath } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

/** items: [{ name, path }]. The last item is the current page. */
export function Breadcrumbs({ locale, label, items, onDark = false }) {
  return (
    <>
      <nav aria-label={label}>
        <ol className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-sm", onDark ? "text-mist" : "text-muted-foreground")}>
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isCurrent ? (
                  <span aria-current="page" className={onDark ? "text-ivory" : "text-charcoal"}>
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={localizePath(locale, item.path)}
                      className={cn("underline-offset-4 hover:underline", onDark && "on-dark")}
                    >
                      {item.name}
                    </Link>
                    <ChevronRight aria-hidden="true" className="size-3.5 rtl:rotate-180" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(locale, items)} />
    </>
  );
}
