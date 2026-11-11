import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqJsonLd } from "@/components/faq-json-ld";
import { QuoteForm } from "@/components/quote-form";
import { business, faqs, hours, whatsappHref, defaultWhatsAppMessage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact en opname in Emmen",
  description:
    "Plan een opname met Hussein van Moderne Bouw. Boslaan 20K, 7822 EN Emmen. WhatsApp 06 87747711.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]}
          />
          <h1 className="section-title">Plan een opname.</h1>
          <FaqJsonLd items={faqs} />
          <p className="mt-4 text-lg text-muted">
            App, bel of stuur het formulier. Hussein antwoordt op werkdagen, meestal dezelfde dag.
          </p>
          <address className="mt-8 space-y-2 not-italic">
            <p className="font-display text-3xl leading-none">{business.person}</p>
            <p>
              {business.street}
              <br />
              {business.postal} {business.city}
              <br />
              {business.province}
            </p>
          </address>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="btn" href={whatsappHref(defaultWhatsAppMessage)}>
              WhatsApp {business.phoneDisplay}
            </a>
            <a className="btn-ghost" href={business.maps}>
              Route
            </a>
          </div>
          <dl className="mt-8 border-t border-line">
            {hours.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                <dt>{row.days}</dt>
                <dd className="text-right text-muted">{row.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted">
            Zondag is hij vrij. Een appje daarbuiten leest hij de eerstvolgende werkdag.
          </p>
          <div className="mt-10">
            <h2 className="font-display text-3xl">Voor u appt</h2>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {faqs.map((item) => (
                <details key={item.q} className="py-4">
                  <summary className="cursor-pointer font-semibold">{item.q}</summary>
                  <p className="mt-2 text-sm text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div id="offerte" className="border border-line bg-surface p-5 md:p-8" style={{ borderRadius: "var(--radius)" }}>
          <h2 className="font-display text-3xl">Uw klus, in een paar regels.</h2>
          <p className="mt-2 mb-6 text-sm text-muted">
            Het formulier opent WhatsApp met uw tekst al ingevuld.
          </p>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
