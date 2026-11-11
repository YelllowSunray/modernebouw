"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, nav } from "@/lib/content";

function Brand() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center border border-line font-display text-lg text-accent"
      >
        MB
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-[1.35rem] leading-none tracking-tight">
          {business.name}
        </span>
        <span className="brand-kicker mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          {business.city} · {business.province}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="flex h-[4.4rem] w-full items-center gap-8 px-5 md:px-10">
        <Brand />
        <div className="desktop-nav ml-auto hidden items-center gap-8">
          <nav className="flex items-center gap-7 text-sm" aria-label="Hoofdmenu">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "text-accent" : "text-ink hover:text-accent"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link className="btn" href="/contact">
            Offerte
          </Link>
        </div>
        <button
          type="button"
          className="btn-ghost menu-toggle ml-auto min-h-11 px-4"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-hidden={open || undefined}
          tabIndex={open ? -1 : 0}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <nav id="mobiel-menu" className="menu-overlay" aria-label="Mobiel menu">
          <button type="button" className="btn-ghost menu-close" onClick={() => setOpenPath(null)}>
            Sluit
          </button>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="menu-link" onClick={() => setOpenPath(null)}>
              {item.label}
            </Link>
          ))}
          <Link className="btn mt-4" href="/contact" onClick={() => setOpenPath(null)}>
            Plan een opname
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
