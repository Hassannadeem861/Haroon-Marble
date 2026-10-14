/** Marks development-only placeholder content so it is never mistaken for real data. */
export function SampleBadge({ label }) {
  return (
    <p className="mb-6 inline-flex rounded-sm border-2 border-dashed border-destructive/60 bg-destructive/5 px-3 py-1.5 text-xs font-bold text-destructive">
      {label}
    </p>
  );
}
