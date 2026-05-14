import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";

export default function AbilitatiPage() {
  return (
    <div className="min-h-dvh bg-black text-zinc-100">
      <main className="relative overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))] pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
        <ScrollParallaxLayer
          className="pointer-events-none absolute inset-0"
          multiplier={0.034}
        >
          <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 h-[560px] w-[560px] rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        </ScrollParallaxLayer>

        <div className="section-y relative mx-auto max-w-4xl overflow-anchor-none px-4 pb-[max(4.5rem,calc(2rem+env(safe-area-inset-bottom,0px)))] sm:px-6 sm:pb-24">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Păi!
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-4">
            {[
              "✔️ Lucrezi direct cu mine, fără intermediari",
              "✔️ Livrare rapidă (2–5 zile)",
              "✔️ Comunicare simplă și clară",
              "✔️ Soluții adaptate afacerii tale",
              "✔️ Focus pe rezultate, nu doar pe design",
              "✔️ Expertiză de nișă + viziune de ansamblu",
              "✔️ Știi exact în ce stadiu este proiectul, fără să ceri update-uri. Proces simplificat (Zero bătăi de cap)",
              "✔️ Am creat un sistem de lucru clar: Brief -> Propunere -> Execuție -> Feedback -> Finalizare. Știi la ce să te aștepți în fiecare etapă",
            ].map((t) => (
              <div
                key={t}
                className="glass-panel border-white/10 px-6 py-5 text-sm leading-7 text-zinc-100 transition duration-300 ease-out hover:border-emerald-400/30"
              >
                {t}
              </div>
            ))}
          </div>

          <div className="mt-10 scroll-mt-24 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
            <Link
              href="/"
              scroll={false}
              className="btn-glass-outline inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            >
              Înapoi la site
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
