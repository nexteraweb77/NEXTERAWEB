import type { Metadata } from "next";
import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Creare site de prezentare (România)",
  description:
    "Creare site de prezentare în România: design modern, mobil first, viteză și structură care convinge. Ideal pentru servicii, profesioniști și afaceri locale (inclusiv Brașov).",
  keywords: [
    "creare site prezentare",
    "site de prezentare",
    "site de prezentare pret",
    "pret creare site prezentare",
    "creare site-uri web",
    "site-uri profesionale",
    "web design România",
    "web design Brașov",
  ],
  alternates: { canonical: new URL("/creare-site-prezentare", getSiteUrl()).href },
};

export default function CreareSitePrezentarePage() {
  const base = getSiteUrl();

  const faq = [
    {
      q: "Ce include un site de prezentare?",
      a: "De obicei include pagini/secțiuni pentru: Despre, Servicii, Portofoliu/Galerie, Testimoniale și Contact, plus integrare WhatsApp și formular de contact.",
    },
    {
      q: "În cât timp se livrează un site de prezentare?",
      a: "În funcție de conținut și complexitate. Pentru o structură clară și conținut pregătit, poate fi livrat rapid; pentru proiecte premium, timeline-ul crește proporțional.",
    },
    {
      q: "Pot să apar pe Google cu un site de prezentare?",
      a: "Da — cu structură corectă, viteză bună, titluri/descrieri potrivite și conținut relevant. Pentru rezultate rapide local, ajută mult și profilul Google Business.",
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
    name: "Creare site de prezentare",
    provider: { "@type": "Organization", name: "NEXTERAWEB", url: base },
    areaServed: [{ "@type": "Country", name: "România" }],
    url: `${base}/creare-site-prezentare`,
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="relative min-h-screen overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <ScrollParallaxLayer className="pointer-events-none absolute inset-0" multiplier={0.03}>
          <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-44 left-[-10%] h-[520px] w-[520px] rounded-full bg-teal-400/8 blur-3xl" />
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
            Site de prezentare
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Creare site de prezentare în România
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:leading-7">
            Pentru servicii și afaceri care au nevoie de claritate și autoritate: un site de
            prezentare care arată impecabil, se încarcă rapid și conduce vizitatorul spre contact.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4">
            {[
              {
                t: "Structură care convinge",
                d: "Mesaj clar, servicii bine explicate, proof (portofoliu/testimoniale) și CTA-uri vizibile.",
              },
              {
                t: "Mobil first + viteză",
                d: "Optimizat pentru mobil și încărcare rapidă — factor important pentru conversii și SEO.",
              },
              {
                t: "SEO de bază pregătit corect",
                d: "Titluri, descrieri, structură și indexare corectă. Pentru creștere, adăugăm conținut și autoritate.",
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

