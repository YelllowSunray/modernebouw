import { getService } from "@/lib/content";
import { OgCard, ogContentType, ogSize } from "@/components/og-card";

export const alt = "Dienst van Moderne Bouw, aannemer in Emmen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function ServiceOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  return OgCard({
    eyebrow: "Aannemer in Emmen",
    title: service?.title ?? "Moderne Bouw",
  });
}
