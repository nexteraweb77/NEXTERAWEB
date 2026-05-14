import { Reveal } from "@/components/Reveal";
import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";

const projects = [
  {
    href: "https://wispy-hill-2273.nexteraweb77.workers.dev/",
    title: "Sală evenimente & restaurant",
    tag: "Evenimente · HoReCa",
    accent: "from-rose-500/20 via-amber-500/10 to-transparent",
    description:
      "Site amplu pentru locație premium: tur vizual, categorii de evenimente, meniu și flux clar spre rezervare și ofertă",
  },
  {
    href: "https://dawn-darkness-bab5.nexteraweb77.workers.dev/",
    title: "Fitness · programări & contact",
    tag: "Wellness · Formulare",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    description:
      "Landing dedicat domeniului fitness, cu accent pe programări și date de contact colectate inteligent prin formular",
  },
  {
    href: "https://late-scene-1f0d.nexteraweb77.workers.dev/",
    title: "Cabinet veterinar",
    tag: "Veterinar · Consult & prevenție",
    accent: "from-cyan-500/18 via-teal-500/10 to-transparent",
    description:
      "Prezentare pentru cabinet veterinar: consult și prevenție, servicii, flux de vizită clar și contact rapid pentru programări",
  },
  {
    href: "https://noisy-butterfly-484b.nexteraweb77.workers.dev/",
    title: "Beauty Studio",
    tag: "Beauty · Programări",
    accent: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    description:
      "Studio beauty cu structură clară: servicii, rezultate înainte/după, FAQ și programare rapidă spre WhatsApp",
  },
  {
    href: "https://calm-sky-5c0f.nexteraweb77.workers.dev/",
    title: "Avocat civil / penal",
    tag: "Juridic · Concierge",
    accent: "from-violet-500/20 via-slate-500/10 to-transparent",
    description:
      "Prezență digitală pentru cabinet: arii de practică, cazuri reprezentative, resurse și flux discret spre consultanță și urgențe",
  },
] as const;

export default function PortofoliuPage() {
  return (
    <div className="min-h-dvh bg-black text-zinc-100">
      <main className="relative overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))] pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
        <ScrollParallaxLayer
          className="pointer-events-none absolute inset-0"
          multiplier={0.03}
        >
          <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        </ScrollParallaxLayer>

        <div className="section-y relative mx-auto max-w-5xl overflow-anchor-none px-4 pb-[max(4.5rem,calc(2rem+env(safe-area-inset-bottom,0px)))] sm:px-6 sm:pb-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
              Proiecte live
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Portofoliu
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:leading-7">
              O selecție de site-uri demo/livrate - evenimente, fitness,
              service auto, beauty și cabinet de avocatură. Poți deschide
              fiecare proiect într-o filă nouă ca să vezi structura, viteza și
              experiența completă
            </p>
          </Reveal>

          <div className="mt-10 mb-4 flex justify-start sm:mt-12 sm:mb-3 lg:max-w-[calc(50%-0.75rem)]">
            <p className="flex items-start gap-2.5 text-sm leading-snug text-zinc-400 sm:items-center sm:text-xs sm:text-zinc-500">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 animate-bounce text-emerald-400/90 motion-reduce:animate-none sm:mt-0 sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <span>
                Derulează în jos pentru a vedea toate proiectele
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.href} delayMs={i * 70}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-white/18 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-7">
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${p.accent} blur-2xl transition-opacity duration-500 group-hover:opacity-90`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300/90">
                      {p.tag}
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-white sm:text-xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {p.description}
                    </p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass-outline mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md sm:w-auto"
                    >
                      Deschide site-ul
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={320}>
            <p className="mt-10 text-center text-xs text-zinc-500">
              Linkuri externe — conținutul și disponibilitatea site-urilor pot fi
              actualizate de proprietari
            </p>
          </Reveal>

          <div className="mt-8 scroll-mt-24 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
            <Link
              href="/"
              scroll={false}
              className="btn-glass-outline mx-auto flex h-11 w-fit items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            >
              Înapoi la site
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
