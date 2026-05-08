"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

function getScrollKey() {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

function readStoredScrollY(key: string) {
  const raw = sessionStorage.getItem(key);
  if (!raw) return null;
  const y = Number(raw);
  return Number.isFinite(y) ? y : null;
}

function scrollToY(y: number) {
  const w = window as Window & { __nexteraLenis?: import("lenis").default };
  const lenis = w.__nexteraLenis;
  if (lenis) {
    lenis.scrollTo(y, { immediate: true, force: true, programmatic: true });
    return;
  }
  window.scrollTo({ top: y, behavior: "auto" });
}

/**
 * Next App Router nu restaurează mereu scroll-ul la back/forward în SPA.
 * Salvăm poziția pe fiecare "page" și o restaurăm doar pe navigare via history.
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const lastKeyRef = useRef<string>(getScrollKey());
  const restoreNextRef = useRef(false);

  const currentKey = useMemo(() => getScrollKey(), [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // ignore
    }

    const onPopState = () => {
      restoreNextRef.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // save previous page scroll
    const prevKey = lastKeyRef.current;
    if (prevKey) {
      sessionStorage.setItem(prevKey, String(window.scrollY ?? 0));
    }

    lastKeyRef.current = currentKey;

    // restore only on back/forward
    if (!restoreNextRef.current) return;
    restoreNextRef.current = false;

    const y = readStoredScrollY(currentKey);
    if (y == null) return;

    // wait layout/paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToY(y);
      });
    });
  }, [currentKey]);

  return null;
}

