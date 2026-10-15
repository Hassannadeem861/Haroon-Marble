import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { whatsappHref } from "@/data/site";
import { pick } from "@/lib/i18n";

/**
 * Visible FAQs for a page: `items` when given (e.g. a service landing page),
 * otherwise the page group from src/data/faqs.js. No FAQPage structured data:
 * Google limits FAQ rich results to government and health sites, and several
 * questions are shared between pages.
 */
export function FaqSection({ locale, dict, page, items: pageItems }) {
  const items = pageItems ?? faqs[page] ?? [];
  if (!items.length) return null;
  const copy = dict.proof.faq;

  return (
    <section aria-labelledby="faq-heading" className="border-t border-border py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-heading" eyebrow={copy.eyebrow} title={copy.title} />
          <a
            href={whatsappHref(dict.contact.form.messageIntro)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-charcoal underline-offset-4 hover:underline"
          >
            <MessageCircle aria-hidden="true" className="size-4 text-gold-deep" />
            {copy.more}
          </a>
        </div>
        <Reveal className="lg:col-span-8">
          <Accordion className="border-t border-border">
            {items.map((item, index) => (
              <AccordionItem key={item.q.en} value={index} className="border-b border-border">
                <AccordionTrigger className="gap-6 rounded-sm py-5 font-display text-xl text-charcoal hover:no-underline md:text-2xl [&_[data-slot=accordion-trigger-icon]]:mt-1.5 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-gold-deep">
                  {pick(item.q, locale)}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  <p className="max-w-2xl">{pick(item.a, locale)}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
