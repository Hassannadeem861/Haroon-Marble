import { Cormorant_Garamond, Manrope, Noto_Nastaliq_Urdu } from "next/font/google";

// next/font downloads these at build time and serves them from the site's
// own domain, so no request is made to Google at runtime.

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

// Urdu Nastaliq is only needed on /ur pages, so it is not preloaded on every page.
export const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-nastaliq",
  display: "swap",
  preload: false,
});

export const fontVariables = `${manrope.variable} ${cormorant.variable} ${nastaliq.variable}`;
