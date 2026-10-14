import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { site, telHref, whatsappHref } from "@/data/site";
import { localizePath } from "@/lib/i18n";

/** Compact enquiry box for detail pages. `topic` pre-fills the WhatsApp message and contact form. */
export function EnquiryPanel({ locale, dict, title, text, topic, serviceSlug }) {
  const contactHref = localizePath(locale, serviceSlug ? `/contact?service=${serviceSlug}` : "/contact");
  const message = topic ? `${dict.contact.form.messageIntro} (${topic})` : dict.contact.form.messageIntro;

  return (
    <aside className="on-dark rounded-sm bg-charcoal p-7 text-ivory md:p-8">
      <h2 className="text-2xl text-ivory">{title}</h2>
      {text ? <p className="mt-3 text-sm leading-relaxed text-mist">{text}</p> : null}
      <div className="mt-6 flex flex-col gap-3">
        <ButtonLink href={contactHref} variant="gold">
          {dict.common.requestQuote}
          <ArrowRight aria-hidden="true" className="rtl:rotate-180" />
        </ButtonLink>
        <ButtonLink href={whatsappHref(message)} variant="outline-light">
          <MessageCircle aria-hidden="true" />
          {dict.common.whatsapp}
        </ButtonLink>
        <ButtonLink href={telHref} variant="outline-light">
          <Phone aria-hidden="true" />
          <span lang="en" dir="ltr">
            {site.phoneDisplay}
          </span>
        </ButtonLink>
      </div>
    </aside>
  );
}
