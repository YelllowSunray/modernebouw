import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="section-title mt-3">Deze pagina staat er niet.</h1>
        <p className="mt-4 max-w-xl text-muted">
          De klus wel, waarschijnlijk. Ga terug naar het overzicht of stuur Hussein een bericht.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="btn" href="/">
            Naar home
          </Link>
          <Link className="btn-ghost" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
