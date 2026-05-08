"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "servicii", label: "Servicii" },
  { id: "portofoliu", label: "Portofoliu" },
  { id: "pachete", label: "Pachete" },
  { id: "despre", label: "Despre" },
  { id: "contact", label: "Contact" },
];

function scrollPageToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const w = window as Window & { __nexteraLenis?: import("lenis").default };
  const lenis = w.__nexteraLenis;
  if (lenis) {
    lenis.scrollTo(0, {
      immediate: reduce,
      ...(!reduce && { duration: 1.1 }),
      force: true,
      programmatic: true,
    });
    return;
  }
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]",
        "border-b border-white/10 transition-[background,box-shadow,backdrop-filter] duration-500",
        scrolled
          ? "bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-black/0 backdrop-blur-0",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
        <div className="flex w-full items-center justify-between">
          {isHome ? (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                scrollPageToTop();
              }}
              className="group relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/[0.12] transition hover:bg-white/[0.06] hover:ring-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/50"
              aria-label="Susul paginii"
            >
              <Image
                src="/logo-navbar.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover object-center opacity-95 transition group-hover:opacity-100"
                sizes="40px"
                priority
              />
            </button>
          ) : (
            <Link
              href="/#top"
              onClick={() => setOpen(false)}
              className="group relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/[0.12] transition hover:bg-white/[0.06] hover:ring-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/50"
              aria-label="Acasă — NEXTERAWEB"
            >
              <Image
                src="/logo-navbar.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover object-center opacity-95 transition group-hover:opacity-100"
                sizes="40px"
                priority
              />
            </Link>
          )}

          <div
            className="hidden items-center gap-7 md:flex"
            data-nextera-desktop-nav
          >
            {items.map((it) => (
              <a
                key={it.id}
                href={`/#${it.id}`}
                className="text-sm font-medium text-zinc-300 link-hover-soft transition-transform duration-200 ease-out hover:-translate-y-px"
              >
                {it.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            data-nextera-mobile-toggle
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:bg-white/10 md:hidden"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-0.5 w-5 rounded bg-white transition",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-0.5 w-5 rounded bg-white transition",
                  open ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        data-nextera-mobile-panel
        data-open={open ? "true" : "false"}
        className={[
          "md:hidden",
          open ? "block" : "hidden",
          "border-t border-white/10 bg-black/50 backdrop-blur-2xl",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl py-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
          <div className="grid gap-2">
            {items.map((it) => (
              <a
                key={it.id}
                href={`/#${it.id}`}
                onClick={() => setOpen(false)}
                className="glass-panel rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

