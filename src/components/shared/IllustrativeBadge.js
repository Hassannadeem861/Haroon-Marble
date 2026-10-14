import { cn } from "@/lib/utils";

export function IllustrativeBadge({ label, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm bg-charcoal/85 px-2.5 py-1 text-[0.7rem] font-semibold text-ivory backdrop-blur-sm",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
      {label}
    </span>
  );
}
