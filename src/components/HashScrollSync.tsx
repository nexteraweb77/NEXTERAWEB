"use client";

import type Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * După navigare client (ex. din /abilitati spre /#de-ce-lucrezi), asigură scroll la ancoră.
 * Lenis nu interceptează tranzițiile Next — le aliniem aici.
 */
export function HashScrollSync() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id || id === "top") return;

    const run = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const w = window as Window & { __nexteraLenis?: Lenis };
      const lenis = w.__nexteraLenis;

      if (lenis) {
        lenis.scrollTo(`#${id}`, {
          immediate: reduce,
          force: true,
          programmatic: true,
        });
      } else {
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    };

    const t = window.setTimeout(run, 0);
    const t2 = window.setTimeout(run, 120);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
