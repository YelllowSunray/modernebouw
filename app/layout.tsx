import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Libre_Baskerville, Nunito_Sans, Outfit, Source_Sans_3 } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import { BottomDock } from "@/components/bottom-dock";
import { business } from "@/lib/content";
import { getSiteUrl, siteDescription } from "@/lib/site";
import { styleBootScript } from "@/lib/style";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
  preload: false,
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${business.name} — Aannemer in ${business.city}`,
    template: `%s · ${business.name}`,
  },
  description: siteDescription,
  applicationName: business.name,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: business.name,
    url: "./",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      data-style="modern"
      suppressHydrationWarning
      className={`${cormorant.variable} ${outfit.variable} ${libre.variable} ${sourceSans.variable} ${fraunces.variable} ${nunito.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: styleBootScript }} />
        <a className="skip" href="#inhoud">
          Naar de inhoud
        </a>
        <Suspense fallback={<div className="site-header h-[4.4rem]" />}>
          <Header />
        </Suspense>
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <BottomDock />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
