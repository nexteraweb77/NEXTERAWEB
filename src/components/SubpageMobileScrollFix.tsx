"use client";

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
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

/**
 * La intrare pe subpagini din carduri, curățăm stilurile inline care pot
 * crea al doilea container de scroll (html + body) pe iOS.
 */
export function SubpageMobileScrollFix() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!isCoarsePointer() || !SUBPAGE_PATHS.has(pathname)) return;

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
  }, [pathname]);

  return null;
}
