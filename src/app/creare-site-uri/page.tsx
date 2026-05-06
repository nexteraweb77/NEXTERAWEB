import type { Metadata } from "next";
import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Creare site-uri în România",
  description:
    "Creare site-uri web profesionale (prezentare, landing page, business) cu design modern, viteză, SEO și conversii. Lucrezi direct cu mine — pentru România (inclusiv Brașov).",
  keywords: [
    "creare site-uri",
    "creare siteuri",
    "creare site-uri web",
    "creare site web profesionale",
    "site-uri profesionale",
    "siteuri premium",
    "pret creare site",
    "creare site ieftin",
    "web design România",
    "web design Brașov",
  ],
  alternates: { canonical: new URL("/creare-site-uri", getSiteUrl()).href },
};

export default function CreareSiteUriPage() {
  const base = getSiteUrl();
  const faq = [
    {
      q: "Cât costă crearea unui site?",
      a: "Prețul depinde de complexitate (landing page vs multi-pagină vs e-commerce), conținut, integrări și termenul de livrare. Îți fac o ofertă clară după o scurtă discuție.",
    },
    {
      q: "Pot face și un site ieftin, dar care să arate bine?",
      a: "Da — putem porni cu un pachet de tip landing page, rapid și curat vizual, optimizat pentru mobil și contact. Apoi îl scalăm pe măsură ce crește business-ul.",
    },
    {
      q: "Faceți și SEO pentru site-uri?",
      a: "Da — bazele SEO (structură, titluri, descrieri, viteză, indexare corectă) sunt incluse, iar pentru creștere putem face optimizări avansate și conținut.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Creare site-uri web",
    provider: { "@type": "Organization", name: "NEXTERAWEB", url: base },
    areaServed: [{ "@type": "Country", name: "România" }],
    serviceType: ["Web design", "Dezvoltare site", "SEO"],
    url: `${base}/creare-site-uri`,
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="relative min-h-screen overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <ScrollParallaxLayer className="pointer-events-none absolute inset-0" multiplier={0.03}>
          <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-44 right-[-10%] h-[520px] w-[520px] rounded-full bg-teal-400/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        </ScrollParallaxLayer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <div className="section-y relative mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Servicii
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Creare site-uri web în România
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:leading-7">
            Dacă vrei un site care arată premium, se încarcă rapid și aduce clienți, aici e
            punctul de start. Construiesc site-uri de prezentare și landing page-uri cu focus pe
            claritate, conversie și SEO — pentru România (și local, Brașov).
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4">
            {[
              {
                t: "Site-uri profesionale (prezentare / business)",
                d: "Structură clară, pagini esențiale, mesaj convingător și CTA-uri care convertesc.",
              },
              {
                t: "Siteuri premium (brand & performanță)",
                d: "Detalii fine, animații discrete, identitate vizuală coerentă și experiență de top.",
              },
              {
                t: "Preț creare site (opțiuni flexibile)",
                d: "De la pachete accesibile la proiecte complexe — alegem varianta potrivită etapei tale.",
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

          <div className="mt-12 glass-panel border-white/10 px-6 py-6">
            <div className="text-sm font-semibold text-white">Întrebări frecvente</div>
            <div className="mt-4 space-y-4">
              {faq.map((x) => (
                <div key={x.q} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <div className="text-sm font-semibold text-zinc-100">{x.q}</div>
                  <div className="mt-2 text-sm leading-7 text-zinc-300">{x.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#pachete"
              scroll
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500/90 px-6 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_16px_50px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400"
            >
              Vezi pachetele
            </Link>
            <Link
              href="/#contact"
              scroll
              className="btn-glass-outline inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            >
              Contact
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

