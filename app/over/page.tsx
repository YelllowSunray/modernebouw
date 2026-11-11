import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { business, promises } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over Hussein, aannemer in Emmen",
  description:
    "Moderne Bouw is Hussein, aannemer in Emmen. Meer dan 17 jaar ervaring in bouw, renovatie en afwerking. Zelf op de klus, met garantie.",
};

export default function OverPage() {
  return (
    <section className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Over Hussein", path: "/over" },
            ]}
          />
          <h1 className="section-title">Moderne Bouw is Hussein.</h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted">
            <p>
              Geen balie, geen ploeg die wisselt, geen doorgeefluik. Hij werkt zelfstandig vanuit{" "}
              {business.city}, met meer dan 17 jaar ervaring in bouw, renovatie en afwerking.
            </p>
            <p>
              Opdrachtgevers beschrijven hem als rustig, netjes en meedenkend. Het werk is
              nauwkeurig, de oplevering op tijd, en de ruimte wordt achtergelaten alsof er iemand
              heeft opgeruimd die er zelf zou willen wonen.
            </p>
            <p>
              Hij is relatief jong voor het aantal jaren dat hij meeloopt, en juist daardoor gewend
              om veel verschillende klussen in één huis te combineren: schilderen, gips, laminaat,
              deuren, een keuken, een badkamer, leidingen, kit, hout en montage.
            </p>
            <p>
              Particulier of zakelijk. Een kleine reparatie of een woning die in één keer wordt
              aangepakt. Garantie op de werkzaamheden. Referenties op aanvraag.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn" href="/contact">
              Plan een opname
            </Link>
            <Link className="btn-ghost" href="/#beoordelingen">
              Lees de beoordelingen
            </Link>
          </div>
        </div>
        <aside className="border border-line bg-surface p-6 md:p-8" style={{ borderRadius: "var(--radius)" }}>
          <p className="eyebrow">In het kort</p>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              ["Naam", business.person],
              ["Bedrijf", business.name],
              ["Vak", "Bouw, renovatie en afwerking"],
              ["Ervaring", "Meer dan 17 jaar"],
              ["Werkgebied", "Emmen en Drenthe"],
              ["Adres", `${business.street}, ${business.postal} ${business.city}`],
              ["Bereikbaar", `WhatsApp ${business.phoneDisplay}`],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-line pb-4">
                <dt className="text-muted">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
      <div className="wrap mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {promises.map((item) => (
          <article key={item.title} className="border border-line p-5">
            <h2 className="font-display text-2xl">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
