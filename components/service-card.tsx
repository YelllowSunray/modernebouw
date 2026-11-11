import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/content";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/diensten/${service.slug}`}
      className="group frame relative flex min-h-80 flex-col justify-end overflow-hidden"
    >
      <Image
        src={service.image}
        alt={service.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
      <div className="relative z-10 p-5 text-white">
        <p className="font-display text-2xl italic text-[#f0d9a0]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1 font-display text-3xl leading-none">{service.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{service.short}</p>
      </div>
    </Link>
  );
}
