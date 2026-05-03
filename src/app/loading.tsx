export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Se încarcă pagina"
      className="flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center bg-black px-6 pb-16 pt-[calc(4rem+env(safe-area-inset-top,0px))]"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-12 w-12" aria-hidden>
          <div className="absolute inset-0 rounded-full border-2 border-white/[0.08]" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-emerald-400/85 border-r-amber-400/35 motion-reduce:animate-none" />
        </div>
        <p className="max-w-xs text-center text-sm leading-relaxed text-zinc-400">
          Doar o clipă… pregătesc totul.
        </p>
      </div>
    </div>
  );
}
