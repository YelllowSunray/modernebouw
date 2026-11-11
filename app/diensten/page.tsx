import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceCard } from "@/components/service-card";
import { groups, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Diensten in Emmen",
  description:
    "Schilderwerk, gipsplaten, laminaat, keukens, badkamers, deuren, ramen, leidingen, kitwerk, houtreparatie, sloop en montage in Emmen en Drenthe.",
};

export default function DienstenPage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Diensten", path: "/diensten" },
          ]}
        />
        <h1 className="section-title max-w-3xl">Het werk, van sloop tot de laatste kitnaad.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Hussein combineert dit werk in één huis. U heeft geen aparte afspraak nodig voor de verf,
          de vloer en de deur — tenzij u dat wilt.
        </p>
        {groups.map((group) => {
          const items = services.filter((service) => service.group === group.id);
          return (
            <div key={group.id} className="mt-14">
              <h2 className="font-display text-3xl">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-muted">{group.text}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    index={services.findIndex((item) => item.slug === service.slug)}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link className="btn" href="/contact">
            Plan een opname
          </Link>
          <Link className="btn-ghost" href="/stijlen">
            Kies een sfeer
          </Link>
        </div>
      </div>
    </section>
  );
}
