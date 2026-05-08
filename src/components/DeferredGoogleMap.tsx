"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  src: string;
  className?: string;
};

/**
 * Încarcă iframe-ul Google Maps doar când zona e aproape de viewport.
 * Reduce TBT la încărcare și evită salturi de layout din embed până la afișare.
 */
export function DeferredGoogleMap({ title, src, className }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || active) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  return (
    <div ref={rootRef} className={className}>
      {active ? (
        <iframe
          title={title}
          className="pointer-events-auto absolute inset-0 block h-full w-full border-0 grayscale-[0.2] contrast-[1.05] transition hover:grayscale-0"
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          scrolling="no"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-zinc-950/40 to-black/50"
          aria-hidden
        />
      )}
    </div>
  );
}
