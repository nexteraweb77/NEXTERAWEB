"use client";

/**
 * Prinde erori care rup și layout-ul rădăcină. Trebuie să includă <html> și <body>.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ro">
      <body className="min-h-[100dvh] bg-[#030303] font-sans text-zinc-100 antialiased">
        <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/90">
            Eroare critică
          </p>
          <h1 className="mt-4 max-w-md text-2xl font-semibold text-white">
            Site-ul nu pornește în browser
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            Fișierele tale sunt în continuare în proiect. Reîncarcă pagina sau
            rulează din nou <code className="text-zinc-300">npm run dev</code>{" "}
            în terminal.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-500/90 px-6 text-sm font-semibold text-black"
          >
            Reîncearcă
          </button>
          {process.env.NODE_ENV === "development" && error?.message ? (
            <pre className="mt-8 max-h-36 max-w-full overflow-auto rounded-lg border border-white/10 p-3 text-left text-xs text-zinc-500">
              {error.message}
            </pre>
          ) : null}
        </div>
      </body>
    </html>
  );
}
