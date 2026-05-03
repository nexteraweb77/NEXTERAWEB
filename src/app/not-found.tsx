import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -top-40 left-1/2 h-[min(100vw,480px)] w-[min(100vw,480px)] -translate-x-1/2 rounded-full bg-emerald-500/[0.12] blur-[100px]" />
        <div className="absolute -bottom-32 right-[-20%] h-[380px] w-[380px] rounded-full bg-amber-500/[0.06] blur-[90px]" />
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <main className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-lg flex-col items-center justify-center px-5 pb-16 pt-[calc(5rem+env(safe-area-inset-top,0px))] text-center sm:px-6">
        <h1
          className={`${montserrat.className} text-balance text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl sm:leading-snug`}
          aria-label="404. Te-am lăsat în spațiu."
        >
          <span aria-hidden="true">
            404 👩🏼‍🚀 Te-am lăsat în spațiu 👀
          </span>
        </h1>
        <p
          className={`${inter.className} mt-4 max-w-md text-pretty text-[0.9375rem] leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed`}
        >
          Linkul poate fi greșit sau pagina nu mai există. Nicio grijă — te
          întorc eu pe traseul principal.
        </p>
        <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-500/90 px-6 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_16px_50px_rgba(16,185,129,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.45),0_22px_55px_rgba(16,185,129,0.22)] active:translate-y-0 sm:w-auto sm:min-w-[10.5rem]"
          >
            Înapoi acasă
          </Link>
          <Link
            href="/#contact"
            className="btn-glass-outline inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:w-auto sm:min-w-[10.5rem]"
          >
            Contact
          </Link>
        </div>
      </main>
    </div>
  );
}
