import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";

export default function AsigurareDigitalaPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="relative min-h-screen overflow-x-hidden pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <ScrollParallaxLayer
          className="pointer-events-none absolute inset-0"
          multiplier={0.034}
        >
          <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-3xl" />
          <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        </ScrollParallaxLayer>

        <div className="section-y relative mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Asigurare Digitala
          </h1>

          <div className="glass-panel-strong mt-10 border-white/10 p-6 text-sm leading-8 text-zinc-200 sm:p-8 sm:text-base">
            <p>
              Un site este ca o mașină: dacă nu îi schimbi uleiul și nu îi faci
              revizia, la un moment dat te lasă în drum. Eu îți ofer
              &apos;Asigurarea Digitală&apos; – tu te ocupi de afacere, iar eu mă
              asigur că magazinul tău online este mereu deschis, securizat și
              gata să primească clienți, fără ca tu să atingi vreun buton tehnic
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4">
            <details className="group glass-panel border-white/10 p-6 transition hover:border-amber-400/35">
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold leading-snug sm:text-base">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Pachetul PROTECT – 20€ / lună
                    </span>{" "}
                    <span className="font-medium text-zinc-200">
                      Esențial pentru siguranța ta
                    </span>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                    Vezi detalii
                    <span className="text-amber-300 transition group-open:rotate-180">
                      ▾
                    </span>
                  </div>
                </div>
              </summary>
              <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                <div>
                  Backup săptămânal: Dacă ceva se strică, revenim online imediat
                </div>
                <div>
                  Securitate activă: Monitorizare împotriva hackerilor și
                  virușilor
                </div>
                <div>
                  Actualizări de conținut: Modificări rapide de poze sau texte
                  (până la 2 intervenții/lună)
                </div>
                <div>
                  Liniște sufletească: Știi că site-ul e online și protejat
                </div>
              </div>
            </details>

            <details className="group glass-panel border-white/10 p-6 transition hover:border-amber-400/35">
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold leading-snug sm:text-base">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Pachetul GROWTH – 40€ / lună
                    </span>{" "}
                    <span className="font-medium text-zinc-200">
                      Pentru afaceri care vor să crească constant
                    </span>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                    Vezi detalii
                    <span className="text-amber-300 transition group-open:rotate-180">
                      ▾
                    </span>
                  </div>
                </div>
              </summary>
              <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                <div>Tot ce include PROTECT</div>
                <div>
                  Update-uri tehnice lunare: Totul rămâne modern și rapid
                </div>
                <div>
                  Modificări nelimitate (mici): Schimbăm prețuri, adăugăm oferte
                  sau poze noi oricând ai nevoie
                </div>
                <div>
                  Verificare performanță: Monitorizez viteza de încărcare ca să nu
                  pierzi clienți
                </div>
              </div>
            </details>

            <details className="group glass-panel border-white/10 p-6 transition hover:border-amber-400/35">
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold leading-snug sm:text-base">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Pachetul PARTNER – 60€ / lună
                    </span>{" "}
                    <span className="font-medium text-zinc-200">
                      Echipa ta tehnică la un mesaj distanță
                    </span>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                    Vezi detalii
                    <span className="text-amber-300 transition group-open:rotate-180">
                      ▾
                    </span>
                  </div>
                </div>
              </summary>
              <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                <div>Tot ce include GROWTH</div>
                <div>
                  Suport Prioritar (VIP): Rezolv cererile tale în maxim 24–48 de
                  ore
                </div>
                <div>
                  Îmbunătățiri constante: Adăugăm funcții noi, butoane sau secțiuni
                  pe măsură ce afacerea ta evoluează
                </div>
                <div>
                  Raport de sănătate: Îți spun lunar cum stă site-ul și ce mai
                  putem optimiza
                </div>
              </div>
            </details>
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
