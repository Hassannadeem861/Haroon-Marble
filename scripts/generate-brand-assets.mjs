// Generates the favicon, Apple touch icon, logo PNG (for structured data) and
// the default Open Graph image from the vector logo mark and the hero photo.
// Run with: node scripts/generate-brand-assets.mjs
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const GOLD = "#c5a052";
const CHARCOAL = "#1c252d";
const IVORY = "#f7f5f0";
const T = 22;
const tiles = [
  [50, 26, GOLD],
  [26, 50, CHARCOAL],
  [74, 50, GOLD],
  [50, 74, GOLD],
];
const polygons = (darkFill = CHARCOAL, darkStroke = "none") =>
  tiles
    .map(([x, y, fill]) => {
      const isDark = fill === CHARCOAL;
      return `<polygon points="${x},${y - T} ${x + T},${y} ${x},${y + T} ${x - T},${y}" fill="${isDark ? darkFill : fill}" stroke="${isDark ? darkStroke : "none"}" stroke-width="${isDark ? 2.5 : 0}"/>`;
    })
    .join("");

const markSvg = (size, background) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="-8 -8 116 116">${
    background ? `<rect x="-8" y="-8" width="116" height="116" fill="${background}"/>` : ""
  }${polygons()}</svg>`;

// Favicon (vector) and standalone logo mark.
await writeFile("src/app/icon.svg", markSvg(64));
await writeFile("public/images/logo-mark.svg", markSvg(512));
await sharp(Buffer.from(markSvg(512, IVORY))).png().toFile("public/images/logo-mark.png");
await sharp(Buffer.from(markSvg(180, IVORY))).png().toFile("src/app/apple-icon.png");

// Open Graph image: hero photo, dark wash, mark and wordmark.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="${CHARCOAL}" stop-opacity="0.94"/><stop offset="0.65" stop-color="${CHARCOAL}" stop-opacity="0.55"/><stop offset="1" stop-color="${CHARCOAL}" stop-opacity="0.1"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(80 170) scale(1.3)">${polygons("none", GOLD)}</g>
  <text x="80" y="390" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="800" letter-spacing="5" fill="${IVORY}">HAROON</text>
  <text x="84" y="450" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600" letter-spacing="17" fill="${GOLD}">MARBLE</text>
  <rect x="84" y="492" width="64" height="2" fill="${GOLD}"/>
  <text x="84" y="540" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="${IVORY}" fill-opacity="0.85">Tiles | Marble | Quality Work</text>
</svg>`;
const hero = await sharp("public/images/stock/hero-marble-lobby.jpg").resize(1200, 630, { fit: "cover", position: "centre" }).toBuffer();
await sharp(hero).composite([{ input: Buffer.from(og) }]).jpeg({ quality: 84, mozjpeg: true }).toFile("public/images/og-default.jpg");

console.log("Brand assets generated.");
