import { business, hours, services } from "@/lib/content";
import { absoluteUrl, jsonLd, siteDescription } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const businessId = absoluteUrl("/#bedrijf");
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: business.name,
        description: siteDescription,
        inLanguage: "nl-NL",
        publisher: { "@id": businessId },
      },
      {
        "@type": "GeneralContractor",
        "@id": businessId,
        name: business.name,
        description: siteDescription,
        url: absoluteUrl("/"),
        telephone: business.phoneTel,
        image: absoluteUrl("/brand/logo.jpg"),
        logo: absoluteUrl("/brand/logo.jpg"),
        address: {
          "@type": "PostalAddress",
          streetAddress: business.street,
          postalCode: business.postal,
          addressLocality: business.city,
          addressRegion: business.province,
          addressCountry: "NL",
        },
        areaServed: [
          { "@type": "City", name: "Emmen" },
          { "@type": "AdministrativeArea", name: "Drenthe" },
        ],
        openingHoursSpecification: hours
          .filter((row) => row.opens)
          .map((row) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: row.schemaDays,
            opens: row.opens,
            closes: row.closes,
          })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diensten",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.short,
              url: absoluteUrl(`/diensten/${service.slug}`),
              areaServed: "Emmen",
              provider: { "@id": businessId },
            },
          })),
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}
