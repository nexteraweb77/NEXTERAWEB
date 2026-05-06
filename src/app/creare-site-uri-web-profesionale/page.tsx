import type { Metadata } from "next";
import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Creare site-uri web profesionale (România)",
  description:
    "Creare site-uri web profesionale în România: design premium, structură orientată spre conversie, viteză și SEO. Pentru branduri și afaceri care vor rezultate (inclusiv Brașov).",
  keywords: [
    "creare site-uri web profesionale",
    "site-uri web profesionale",
    "creare site-uri web",
    "creare site web",
    "site-uri profesionale",
    "siteuri premium",
    "pret creare site",
    "web design România",
    "web design Brașov",
  ],
  alternates: {
    canonical: new URL("/creare-site-uri-web-profesionale", getSiteUrl()).href,
  },
};

export default function CreareSiteuriWebProfesionalePage() {
  const base = getSiteUrl();

  const faq = [
    {
      q: "Ce înseamnă un site web „profesional”?",
      a: "Înseamnă un site rapid, clar, coerent vizual, ușor de folosit pe mobil, cu structură bună și cu mesaj care poziționează corect brandul.",
    },
    {
      q: "Pot să am și variantă „ieftină”?",
      a: "Da — putem începe cu un landing page eficient și îl dezvoltăm ulterior. Important este să păstrăm calitatea (viteză, UX, claritate).",
    },
    {
      q: "Faceți și mentenanță după lansare?",
      a: "Da — există pachete de mentenanță și suport, în funcție de nevoile proiectului.",
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
    name: "Creare site-uri web profesionale",
    provider: { "@type": "Organization", name: "NEXTERAWEB", url: base },
    areaServed: [{ "@type": "Country", name: "România" }],
    url: `${base}/creare-site-uri-web-profesionale`,
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="relative min-h-screen overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <ScrollParallaxLayer className="pointer-events-none absolute inset-0" multiplier={0.03}>
          <div className="absolute -top-48 right-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-44 left-[-10%] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
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
            Site-uri web profesionale
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Creare site-uri web profesionale în România
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:leading-7">
            Dacă vrei mai mult decât „un site pe net”, îți construiesc o prezență digitală care
            vinde: design premium, structură orientată spre conversie, viteză și SEO.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4">
            {[
              {
                t: "UX + conversie",
                d: "Arhitectură clară a paginii, mesaje scurte și puternice, butoane/CTA-uri în punctele corecte.",
              },
              {
                t: "Performanță tehnică",
                d: "Încărcare rapidă, optimizări pentru mobil și bune practici care ajută și la SEO.",
              },
              {
                t: "Design premium, fără compromisuri",
                d: "Detalii fine, consistență vizuală și o estetică care ridică brandul în ochii clientului.",
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

