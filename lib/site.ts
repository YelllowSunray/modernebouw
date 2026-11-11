import type { Service } from "@/lib/content";

export const siteDescription =
  "Aannemer in Emmen en Drenthe. Schilderwerk, badkamers, keukens, vloeren, deuren en montage door Hussein van Moderne Bouw.";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const withProtocol = /^https?:\/\//i.test(explicit) ? explicit : `https://${explicit}`;
    return withProtocol.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return `http://localhost:${process.env.PORT || 3000}`;
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function serviceMetaDescription(service: Service) {
  const suffix = " In Emmen en Drenthe, door Moderne Bouw.";
  if (service.lede.length + suffix.length <= 160) return `${service.lede}${suffix}`;
  if (service.short.length + suffix.length <= 160) return `${service.short}${suffix}`;
  return service.short;
}
