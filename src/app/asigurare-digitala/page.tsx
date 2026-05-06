import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";

const NEXTERA_WA = "40753834965";

function waBuyUrl(message: string) {
  return `https://wa.me/${NEXTERA_WA}?text=${encodeURIComponent(message)}`;
}

const BUY_PROTECT_URL = waBuyUrl(
  "Bună! Vreau să activez pachetul PROTECT — Asigurare Digitală (35€/lună). Aș dori să discutăm pașii pentru plată și activare.",
);
const BUY_GROWTH_URL = waBuyUrl(
  "Bună! Vreau să activez pachetul GROWTH — Asigurare Digitală (50€/lună). Aș dori să discutăm pașii pentru plată și activare.",
);
const BUY_PARTNER_URL = waBuyUrl(
  "Bună! Vreau să activez pachetul PARTNER — Asigurare Digitală (80€/lună). Aș dori să discutăm pașii pentru plată și activare.",
);

const buyBtnClass =
  "inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-gradient-to-r from-amber-500/30 to-yellow-600/20 px-6 text-sm font-semibold text-amber-50 shadow-[0_0_0_1px_rgba(251,191,36,0.22),0_8px_28px_rgba(245,158,11,0.14)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-amber-200/55 hover:from-amber-400/40 hover:shadow-[0_0_0_1px_rgba(253,224,71,0.3),0_12px_36px_rgba(245,158,11,0.2)] active:translate-y-0";

export default function AsigurareDigitalaPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="relative min-h-screen overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))]">
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
            <p className="text-base font-semibold leading-snug text-zinc-100 sm:text-lg sm:leading-snug">
              Majoritatea antreprenorilor pierd timp prețios luptându-se cu erori
              tehnice, hosting expirat sau actualizări care strică site-ul
            </p>
            <p className="mt-5 text-pretty">
              Eu îți propun modelul{" "}
              <span className="bg-gradient-to-r from-emerald-300/95 via-teal-200 to-emerald-400/85 bg-clip-text font-semibold text-transparent">
                Zero bătăi de cap!
              </span>{" "}
              Mă ocup personal de absolut tot – de la proiect, rezervarea
              domeniului și găzduire ultra-rapidă, până la securitate și
              mentenanță zilnică. Tu plătești un singur abonament lunar și
              primești la schimb certitudinea că magazinul tău este mereu online,
              securizat și gata de vânzare — fără butoane tehnice pentru tine.
              Doar rezultate. Tu conduci afacerea, eu conduc tehnologia.
            </p>
            <p className="mt-4 text-base font-medium leading-snug tracking-[0.04em] text-white sm:text-lg">
              Soluții digitale croite pe măsură
            </p>
            <p className="mt-3 text-pretty text-[0.95rem] font-medium leading-relaxed text-white sm:text-[1rem]">
              Indiferent de pachetul ales, ai{" "}
              <span className="text-[1.02em] font-semibold text-amber-200/95">
                Domeniu + Hosting Gratuit
              </span>
              , pe toata durata abonamentului
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4">
            <details className="group glass-panel border-white/10 p-6 transition hover:border-amber-400/35">
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold leading-snug sm:text-base">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Pachetul PROTECT – 35€ / lună
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
              <div>
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
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                  <p className="max-w-[28rem] text-pretty text-xs font-medium italic leading-relaxed tracking-[0.01em] text-amber-100/75">
                    Preț afișat în EUR. Plata se efectuează în RON, la cursul
                    aplicat de procesatorul de plăți/banca emitentă.
                  </p>
                  <a
                    href={BUY_PROTECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buyBtnClass}
                    aria-label="Cumpără pachetul PROTECT — deschide WhatsApp"
                  >
                    Cumpără
                  </a>
                </div>
              </div>
            </details>

            <details className="group glass-panel border-white/10 p-6 transition hover:border-amber-400/35">
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold leading-snug sm:text-base">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Pachetul GROWTH – 50€ / lună
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
              <div>
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
                    Verificare performanță: Monitorizez viteza de încărcare ca să
                    nu pierzi clienți
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                  <p className="max-w-[28rem] text-pretty text-xs font-medium italic leading-relaxed tracking-[0.01em] text-amber-100/75">
                    Preț afișat în EUR. Plata se efectuează în RON, la cursul
                    aplicat de procesatorul de plăți/banca emitentă.
                  </p>
                  <a
                    href={BUY_GROWTH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buyBtnClass}
                    aria-label="Cumpără pachetul GROWTH — deschide WhatsApp"
                  >
                    Cumpără
                  </a>
                </div>
              </div>
            </details>

            <details className="group glass-panel border-white/10 p-6 transition hover:border-amber-400/35">
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold leading-snug sm:text-base">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Pachetul PARTNER – 80€ / lună
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
              <div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                  <div>Tot ce include GROWTH</div>
                  <div>
                    <span className="text-base font-semibold leading-7 text-white sm:text-[1.07rem]">
                      Suport Prioritar
                    </span>{" "}
                    <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 bg-clip-text text-base font-semibold text-transparent sm:text-lg">
                      VIP
                    </span>
                    : Rezolv cererile tale în maxim 24–48 de ore
                  </div>
                  <div>
                    Îmbunătățiri constante: Adăugăm funcții noi, butoane sau
                    secțiuni pe măsură ce afacerea ta evoluează
                  </div>
                  <div>
                    Raport de sănătate: Îți spun lunar cum stă site-ul și ce mai
                    putem optimiza
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                  <p className="max-w-[28rem] text-pretty text-xs font-medium italic leading-relaxed tracking-[0.01em] text-amber-100/75">
                    Preț afișat în EUR. Plata se efectuează în RON, la cursul
                    aplicat de procesatorul de plăți/banca emitentă.
                  </p>
                  <a
                    href={BUY_PARTNER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buyBtnClass}
                    aria-label="Cumpără pachetul PARTNER — deschide WhatsApp"
                  >
                    Cumpără
                  </a>
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
