import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Modern, klassiek of landelijk",
  description:
    "Kies modern, klassiek of landelijk. Moderne Bouw past het werk aan de sfeer van uw woning in Emmen en Drenthe.",
};

export default function StijlenPage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Stijlen", path: "/stijlen" },
          ]}
        />
        <h1 className="section-title max-w-3xl">Drie manieren om een huis af te maken.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Dezelfde vakman, een andere hand. Onderin de pagina kiest u modern, klassiek of
          landelijk. Kleuren, letters en foto&apos;s volgen, en het offerteformulier neemt die
          keuze mee naar WhatsApp.
        </p>
        <div className="mt-12 max-w-2xl">
          <h2 className="font-display text-3xl">Niet zeker welke sfeer het is?</h2>
          <p className="mt-3 text-muted">
            Dat hoeft niet op deze site beslist te worden. Hussein ziet het huis en denkt mee. De
            keuze hier is een begin van het gesprek, geen bestelling.
          </p>
          <Link className="btn mt-6" href="/contact">
            Bespreek het tijdens de opname
          </Link>
        </div>
      </div>
    </section>
  );
}
