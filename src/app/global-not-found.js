import "./globals.css";
import Link from "next/link";
import { LogoMark } from "@/components/shared/LogoMark";
import { manrope, cormorant } from "@/lib/fonts";

// Shown for URLs that match no route at all (outside /en and /ur, which the
// proxy normally redirects). Bilingual because the locale is unknown here.
export const metadata = {
  title: "Page not found | Haroon Marble",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="flex min-h-dvh items-center bg-ivory">
        <main className="container-page py-24">
          <LogoMark className="size-14" />
          <p className="mt-8 font-display text-7xl text-gold-deep">404</p>
          <h1 className="mt-4 text-4xl text-charcoal">Page not found</h1>
          <p lang="ur" dir="rtl" className="mt-2 text-2xl text-charcoal">
            صفحہ نہیں ملا
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-base font-semibold">
            <Link href="/en" hrefLang="en" className="underline underline-offset-4">
              Go to the homepage
            </Link>
            <Link href="/ur" hrefLang="ur" lang="ur" className="underline underline-offset-4">
              ہوم پیج پر جائیں
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
