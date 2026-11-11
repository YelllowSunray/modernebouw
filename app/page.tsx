import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd } from "@/components/faq-json-ld";
import { QuoteForm } from "@/components/quote-form";
import { Reviews } from "@/components/reviews";
import { ServiceCard } from "@/components/service-card";
import {
  business,
  defaultWhatsAppMessage,
  faqs,
  promises,
  services,
  steps,
  styleChoices,
  whatsappHref,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap hero-stage grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="hero-copy">
            <p className="eyebrow">Aannemer in {business.city}</p>
            <h1 className="hero-title mt-4">
              <span className="only-modern">
                Strak werk.
                <br />
                Rustige oplevering.
              </span>
              <span className="only-klassiek">
                Vakwerk dat
                <br />
                bij het huis past.
              </span>
              <span className="only-landelijk">
                Warm, netjes,
                <br />
                tot in de naad.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              <span className="only-modern">
                Hussein pakt schilderwerk, badkamers, keukens en alles daartussen. Eén aanspreekpunt,
                meer dan 17 jaar ervaring, garantie op het werk.
              </span>
              <span className="only-klassiek">
                Bestaande huizen vragen een rustige hand. Hussein herstelt, schildert, stelt en bouwt
                bij — nauwkeurig, zonder de rest van het huis onder te spuiten.
              </span>
              <span className="only-landelijk">
                Hout, vloeren, een keuken, een badkamer. Hussein werkt zelf, denkt mee en laat het
                achter alsof er iemand heeft opgeruimd die er zelf zou wonen.
              </span>
            </p>
            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn" href="/contact">
                Plan een opname
              </Link>
              <a className="btn-ghost" href={whatsappHref(defaultWhatsAppMessage)}>
                WhatsApp {business.phoneDisplay}
              </a>
            </div>
            <p className="hero-note mt-4 max-w-md text-sm text-muted">
              U zit nergens aan vast tot de prijs en de planning zijn afgesproken.
            </p>
          </div>
          <div className="hero-visual frame">
            {styleChoices.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                alt={item.alt}
                fill
                priority={item.id === "modern"}
                sizes="(max-width: 1024px) 100vw, 46vw"
                data-show={item.id}
                className="hero-shot"
              />
            ))}
            <div className="hero-mark absolute bottom-3 left-3 w-36 bg-[#090b10] p-1.5 ring-1 ring-[#d7b56a]/55 md:bottom-5 md:left-5 md:w-44">
              <Image
                src="/brand/logo.jpg"
                alt="Logo Moderne Bouw, gouden monogram MB"
                width={956}
                height={726}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-elev">
        <dl className="wrap grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["17+ jaar", "bouw, renovatie en afwerking"],
            ["5.0", "uit 7 beoordelingen"],
            ["1 persoon", "van opname tot oplevering"],
            ["Garantie", "op de werkzaamheden"],
          ].map(([value, label]) => (
            <div key={value}>
              <dt className="font-display text-4xl leading-none text-accent">{value}</dt>
              <dd className="mt-2 text-sm text-muted">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" id="diensten">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Diensten</p>
              <h2 className="section-title mt-3">Alles wat een woning weer heel maakt.</h2>
              <p className="mt-4 text-lg text-muted">
                Schilderwerk, gips, vloeren, deuren, keukens, badkamers, leidingen, kit, hout, sloop
                en montage. Hussein doet het zelf, in Emmen en de rest van Drenthe.
              </p>
            </div>
            <Link className="btn-ghost shrink-0" href="/diensten">
              Alle diensten
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
            <Link
              href="/contact"
              className="flex min-h-80 flex-col justify-between border border-line bg-surface p-6"
            >
              <p className="eyebrow">Uw klus</p>
              <div>
                <h3 className="font-display text-4xl leading-none">Staat het er niet bij?</h3>
                <p className="mt-3 text-muted">
                  App Hussein. Als het in huis gebeurt, denkt hij mee voordat hij ja zegt.
                </p>
              </div>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            De foto&apos;s zijn sfeerbeelden. Referenties van opgeleverd werk vraagt u bij Hussein op.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Werkwijze</p>
          <h2 className="section-title mt-3 max-w-2xl">Van bericht tot een kamer die weer klopt.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-5xl text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-y border-line bg-elev">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Waarom Hussein</p>
            <h2 className="section-title mt-3">Rustig, precies, en zelf op de klus.</h2>
            <p className="mt-4 text-muted">
              Opdrachtgevers op Werkspot noemen hem professioneel, meedenkend en netjes. Hij is
              relatief jong voor de jaren die hij meeloopt, en gewend om veel soorten werk in één
              huis te combineren.
            </p>
            <Link className="btn mt-6" href="/over">
              Over Moderne Bouw
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {promises.map((item) => (
              <li key={item.title} className="border border-line bg-surface p-5">
                <h3 className="font-display text-2xl leading-none">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="beoordelingen">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Beoordelingen</p>
            <h2 className="section-title mt-3">Zeven keer vijf sterren.</h2>
            <p className="mt-4 text-muted">
              Op Werkspot en Google. De teksten staan hier zoals ze zijn geschreven.
            </p>
          </div>
          <div className="mt-10">
            <Reviews />
          </div>
        </div>
      </section>

      <section className="section bg-elev">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Emmen en Drenthe</p>
            <h2 className="section-title mt-3">Gevestigd aan de Boslaan.</h2>
            <p className="mt-4 text-muted">
              {business.street}, {business.postal} {business.city}. Hussein komt langs in Emmen en
              de rest van Drenthe, voor particulieren en zakelijke opdrachtgevers.
            </p>
            <a className="btn-ghost mt-6" href={business.maps}>
              Route in Google Maps
            </a>
          </div>
          <div>
            <p className="eyebrow">Veelgestelde vragen</p>
            <FaqJsonLd items={faqs.slice(0, 4)} />
            <div className="mt-4 divide-y divide-line border-y border-line">
              {faqs.slice(0, 4).map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-semibold marker:content-none">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="offerte">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Vrijblijvend</p>
            <h2 className="section-title mt-3">Vertel wat er moet gebeuren.</h2>
            <p className="mt-4 text-lg text-muted">
              Een bericht is genoeg. Hussein komt langs, kijkt zelf, en spreekt daarna pas een prijs
              en een planning af.
            </p>
            <p className="mt-6 font-display text-3xl text-accent">
              <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            </p>
            <p className="text-sm text-muted">WhatsApp · antwoord op werkdagen</p>
          </div>
          <div className="border border-line bg-surface p-5 md:p-8" style={{ borderRadius: "var(--radius)" }}>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
