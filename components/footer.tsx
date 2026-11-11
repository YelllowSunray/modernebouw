import Link from "next/link";
import { business, hours, nav, services, whatsappHref, defaultWhatsAppMessage } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-elev">
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-3xl leading-none">{business.name}</p>
          <p className="mt-3 text-sm text-muted">
            {business.person}, {business.role.toLowerCase()} in {business.city}. Zelf op de klus,
            van opname tot oplevering.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:contents">
          <div>
            <p className="eyebrow">Pagina&apos;s</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Diensten</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/diensten/${service.slug}`} className="hover:text-accent">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/diensten" className="text-accent">
                  Alle diensten
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>
              {business.street}
              <br />
              {business.postal} {business.city}
              <br />
              {business.province}
            </p>
            <p>
              <a className="hover:text-accent" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-accent" href={whatsappHref(defaultWhatsAppMessage)}>
                WhatsApp
              </a>
            </p>
          </address>
          <dl className="mt-4 space-y-1 text-sm text-muted">
            {hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-4">
                <dt>{row.days}</dt>
                <dd className="text-right">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-muted md:flex-row md:justify-between">
          <p>
            © 2026 {business.name}. {business.street}, {business.city}.
          </p>
          <p>Sfeerbeelden via Unsplash en Pexels. Foto&apos;s van opgeleverd werk op aanvraag.</p>
        </div>
      </div>
    </footer>
  );
}
