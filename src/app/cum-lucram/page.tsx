import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import Link from "next/link";

export default function CumLucramPage() {
  const steps = [
    {
      title: "1- Consultarea inițială: ☕️",
      text: "Începem cu o scurtă discuție (pe Watssap ,Zoom, e-mail) pentru a înțelege obiectivele tale, publicul țintă și ce problemă vrei să rezolvăm",
    },
    {
      title: "2- Propunerea și Strategia: 📋",
      text: "Vin către tine cu o oferta clară care include: soluția propusă, calendarul de livrare și costurile implicate. Fără taxe ascunse",
    },
    {
      title: "3- Execuția Magia: ✨",
      text: "După ce batem palma, trec la treabă. Te voi ține la curent cu progresul la etapele intermediare, astfel încât să fim siguri că direcția este cea corectă",
    },
    {
      title: "4- Feedback și Rafinare: 🔍",
      text: "Îmi trimiți observațiile tale. Includ [X] runde de revizuiri în fiecare proiect pentru a mă asigura că rezultatul final este exact ce ai nevoie",
    },
    {
      title: "5- Finalizarea și Livrarea: ✅",
      text: "Îți predau toate fișierele/materialele finale în formatul agreat, gata de utilizare",
    },
    {
      title: "6- Follow-up: 📈",
      text: "Rămânem în contact pentru a vedea cum performează proiectul și dacă mai ai nevoie de ajustări. Te ajut să alegi și să achiziționezi cel mai bun domeniu .ro pentru brandul tău și mă asigur că totul este configurat corect de la început",
    },
    {
      title: "7- Vizibilitate, nu doar prezență: 🔭",
      text: "Nu îți fac doar un site care „stă pe net”, ci îl optimizez SEO pentru ca afacerea ta să fie găsită de clienții potriviți pe Google",
    },
  ];

  return (
    <div className="subpage-shell bg-black text-zinc-100">
      <main className="relative overflow-x-clip pt-[calc(4rem+env(safe-area-inset-top,0px))] pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
        <ScrollParallaxLayer
          className="pointer-events-none absolute inset-0"
          multiplier={0.034}
        >
          <div className="absolute -top-44 -right-48 h-[560px] w-[560px] rounded-full bg-emerald-500/12 blur-3xl" />
          <div className="absolute -bottom-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_55%)]" />
        </ScrollParallaxLayer>

        <div className="section-y relative mx-auto max-w-4xl overflow-anchor-none px-4 pb-[max(4.5rem,calc(2rem+env(safe-area-inset-bottom,0px)))] sm:px-6 sm:pb-24">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Ce avem de făcut:
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-4">
            {steps.map((s) => (
              <div
                key={s.title}
                className="glass-panel border-white/10 px-6 py-5 transition duration-300 ease-out hover:border-emerald-400/28"
              >
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <div className="mt-3 text-sm leading-7 text-zinc-200">{s.text}</div>
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
