import type { Metadata } from "next";
import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Preț creare site (opțiuni ieftin → premium)",
  description:
    "Preț creare site în România: de la site ieftin (landing page) la site-uri profesionale și siteuri premium. Alege pachetul potrivit și vezi extra-opțiuni.",
  keywords: [
    "pret creare site",
    "preț creare site",
    "creare site ieftin",
    "site ieftin",
    "cat costa un site",
    "site-uri profesionale",
    "siteuri premium",
    "creare site-uri web",
  ],
  alternates: { canonical: new URL("/pret-creare-site", getSiteUrl()).href },
};

export default function PretCreareSitePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="relative min-h-screen overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <ScrollParallaxLayer className="pointer-events-none absolute inset-0" multiplier={0.03}>
          <div className="absolute -top-48 left-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-44 right-[-10%] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
        </ScrollParallaxLayer>

        <div className="section-y relative mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Prețuri
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Preț creare site: ieftin → premium
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:leading-7">
            Cel mai corect mod de a vorbi despre preț este în funcție de obiectiv: vrei un site
            simplu care te pune online rapid, sau o platformă care să vândă și să crească?
            Pachetele de pe homepage sunt punctul de plecare.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4">
            {[
              {
                t: "Creare site ieftin (start rapid)",
                d: "De obicei, un landing page clar, cu secțiuni esențiale, optimizat pentru mobil și contact.",
              },
              {
                t: "Site-uri profesionale (business growth)",
                d: "Structură multi-pagină, SEO de bază, viteză optimizată și fluxuri de conversie mai puternice.",
              },
              {
                t: "Siteuri premium (brand & conversie)",
                d: "Design premium, detalii fine și execuție orientată spre autoritate, diferențiere și rezultate.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="glass-panel border-white/10 px-6 py-5 transition duration-300 ease-out hover:border-emerald-400/28"
              >
                <div className="text-sm font-semibold text-white">{x.t}</div>
                <div className="mt-3 text-sm leading-7 text-zinc-200">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#pachete"
              scroll
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500/90 px-6 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_16px_50px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400"
            >
              Vezi pachetele și investiția
            </Link>
            <Link
              href="/#contact"
              scroll
              className="btn-glass-outline inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            >
              Cere ofertă
            </Link>
          </div>

          <Link
            href="/"
            scroll={false}
            className="btn-glass-outline mt-10 inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          >
            Înapoi la site
          </Link>
        </div>
      </main>
    </div>
  );
}

