"use client";

import type Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const SUBPAGE_PATHS = new Set([
  "/abilitati",
  "/asigurare-digitala",
  "/cum-lucram",
  "/portofoliu",
]);

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

function clearDocumentScrollInlineStyles() {
  for (const el of [document.documentElement, document.body]) {
    el.style.removeProperty("overflow-y");
    el.style.removeProperty("overflow-x");
    el.style.removeProperty("height");
    el.style.removeProperty("max-height");
  }
}

function scrollTopImmediate() {
  const w = window as Window & { __nexteraLenis?: Lenis };
  const lenis = w.__nexteraLenis;
  if (lenis) {
    lenis.resize();
    lenis.scrollTo(0, { immediate: true, force: true, programmatic: true });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * La intrare pe subpagini din carduri: pe mobil curățăm stilurile care creează
 * scroll dublu; pe desktop resetăm Lenis / scroll-ul nativ ca pagina să pornească de sus.
 */
export function SubpageMobileScrollFix() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!SUBPAGE_PATHS.has(pathname)) return;

    if (isCoarsePointer()) {
      clearDocumentScrollInlineStyles();
      scrollTopImmediate();

      const raf = requestAnimationFrame(() => {
        clearDocumentScrollInlineStyles();
        scrollTopImmediate();
      });

      return () => {
        cancelAnimationFrame(raf);
        clearDocumentScrollInlineStyles();
      };
    }

    scrollTopImmediate();
    const raf = requestAnimationFrame(scrollTopImmediate);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
