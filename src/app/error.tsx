"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[NEXTERAWEB]", error);
  }, [error]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#030303] px-6 py-16 text-center text-zinc-100">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/90">
        Ceva nu a mers
      </p>
      <h1 className="mt-4 max-w-md text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Pagina nu s-a putut încărca corect
      </h1>
      <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
        Nu ți-a dispărut proiectul din calculator — e doar o eroare la afișare.
        Încearcă reîncărcarea sau întoarcerea acasă.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-500/90 px-6 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400"
        >
          Reîncearcă
        </button>
        <a
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
        >
          Acasă
        </a>
      </div>
      {process.env.NODE_ENV === "development" && error?.message ? (
        <pre className="mt-10 max-h-40 max-w-full overflow-auto rounded-xl border border-white/10 bg-black/60 p-4 text-left text-xs text-zinc-500">
          {error.message}
        </pre>
      ) : null}
    </div>
  );
}
