import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/diensten", "/stijlen", "/over", "/contact", ...services.map((service) => `/diensten/${service.slug}`)];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/diensten/") ? 0.8 : 0.7,
  }));
}
