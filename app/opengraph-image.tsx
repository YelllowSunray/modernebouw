import { OgCard, ogContentType, ogSize } from "@/components/og-card";

export const alt = "Moderne Bouw, aannemer in Emmen en Drenthe";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return OgCard({ eyebrow: "Aannemer", title: "Moderne Bouw" });
}
