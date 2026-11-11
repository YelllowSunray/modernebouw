import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { ServiceCard } from "@/components/service-card";
import { getService, relatedServices, services } from "@/lib/content";
import { absoluteUrl, jsonLd, serviceMetaDescription } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Dienst", robots: { index: false, follow: true } };
  return {
    title: `${service.title} in Emmen`,
    description: serviceMetaDescription(service),
    openGraph: {
      title: `${service.title} in Emmen`,
      description: serviceMetaDescription(service),
    },
  };
}

export default async function DienstPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = relatedServices(service.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in Emmen`,
    serviceType: service.title,
    description: service.lede,
    url: absoluteUrl(`/diensten/${service.slug}`),
    image: absoluteUrl(service.image),
    areaServed: [
      { "@type": "City", name: "Emmen" },
      { "@type": "AdministrativeArea", name: "Drenthe" },
    ],
    provider: { "@id": absoluteUrl("/#bedrijf") },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceLd) }} />
      <section className="section pb-10">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Diensten", path: "/diensten" },
                { name: service.title, path: `/diensten/${service.slug}` },
              ]}
            />
            <h1 className="section-title">{service.title}</h1>
            <p className="mt-4 text-lg text-muted">{service.lede}</p>
            <ul className="ticks mt-6">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {service.note ? (
              <p className="mt-6 border border-line bg-surface p-4 text-sm text-muted">{service.note}</p>
            ) : null}
          </div>
          <div className="frame relative min-h-[28rem] overflow-hidden">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section bg-elev pt-10">
        <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Deze klus</p>
            <h2 className="section-title mt-3">Vraag {service.title.toLowerCase()} aan.</h2>
            <p className="mt-4 text-muted">
              Het formulier zet uw bericht klaar in WhatsApp, met deze dienst al ingevuld.
            </p>
          </div>
          <div className="border border-line bg-surface p-5 md:p-8" style={{ borderRadius: "var(--radius)" }}>
            <QuoteForm defaultDienst={service.slug} />
          </div>
        </div>
        <div className="wrap mt-16">
          <h2 className="font-display text-3xl">Ook in huis</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard
                key={item.slug}
                service={item}
                index={services.findIndex((entry) => entry.slug === item.slug)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
