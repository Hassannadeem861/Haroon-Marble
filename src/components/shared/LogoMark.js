import { cn } from "@/lib/utils";

// Recreation of the Haroon Marble diamond mark: four tiles set on the diagonal,
// three gold and one charcoal (left). On dark backgrounds the charcoal tile is
// drawn as a gold outline so the mark keeps its four-tile shape.
const TILE = 22;
const tiles = [
  { cx: 50, cy: 26, tone: "gold" },
  { cx: 26, cy: 50, tone: "dark" },
  { cx: 74, cy: 50, tone: "gold" },
  { cx: 50, cy: 74, tone: "gold" },
];

const points = ({ cx, cy }) => `${cx},${cy - TILE} ${cx + TILE},${cy} ${cx},${cy + TILE} ${cx - TILE},${cy}`;

export function LogoMark({ onDark = false, className }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={cn("shrink-0", className)}>
      {tiles.map((tile) =>
        tile.tone === "gold" ? (
          <polygon key={`${tile.cx}-${tile.cy}`} points={points(tile)} fill="var(--brand-gold)" />
        ) : (
          <polygon
            key={`${tile.cx}-${tile.cy}`}
            points={points(tile)}
            fill={onDark ? "none" : "var(--brand-charcoal)"}
            stroke={onDark ? "var(--brand-gold)" : "none"}
            strokeWidth={onDark ? 2.5 : 0}
          />
        ),
      )}
    </svg>
  );
}
