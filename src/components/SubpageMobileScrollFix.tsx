"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const SUBPAGE_PATHS = new Set([
  "/abilitati",
  "/asigurare-digitala",
  "/cum-lucram",
  "/portofoliu",
]);

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

/** Forțează recalculul scroll-ului nativ pe subpagini (în special iOS). */
function syncSubpageScrollRange() {
  const root = document.documentElement;
  const body = document.body;

  root.style.overflowY = "auto";
  root.style.height = "auto";
  body.style.overflowY = "auto";
  body.style.height = "auto";

  void root.scrollHeight;
  void body.scrollHeight;
}

/**
 * La intrare pe subpagini (carduri de pe homepage), iOS poate limita scroll-ul
 * până la următorul reflow. Recalculăm imediat și la resize.
 */
export function SubpageMobileScrollFix() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!isCoarsePointer() || !SUBPAGE_PATHS.has(pathname)) return;
    syncSubpageScrollRange();
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!isCoarsePointer() || !SUBPAGE_PATHS.has(pathname)) return;

    syncSubpageScrollRange();

    const ro = new ResizeObserver(() => {
      syncSubpageScrollRange();
    });
    ro.observe(document.body);

    const onWindowLoad = () => syncSubpageScrollRange();
    window.addEventListener("load", onWindowLoad);

    const t = window.setTimeout(syncSubpageScrollRange, 0);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", onWindowLoad);
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
