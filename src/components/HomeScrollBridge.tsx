"use client";

import type Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const STORAGE_KEY = "nextera-home-scroll-y";
const RETURN_ANCHOR_KEY = "nextera-home-return-anchor";

const SUBPAGE_PATHS = new Set([
  "/abilitati",
  "/cum-lucram",
  "/portofoliu",
  "/asigurare-digitala",
]);

/** Navigation API (Chrome / Safari recent); TS lib poate să nu includă tipul. */
type AppNavigateEvent = Event & { readonly destination: { readonly url: string } };

/** Poziția vizuală curentă (Lenis pe desktop vs scroll nativ). */
function getScrollYForStorage(): number {
  const w = window as Window & { __nexteraLenis?: Lenis };
  const lenis = w.__nexteraLenis;
  const native = Math.max(
    window.scrollY,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );
  if (lenis) return Math.max(lenis.scroll, native);
  return native;
}

function saveScrollIfLeavingHomeToSubpage(destUrl: string) {
  if (window.location.pathname !== "/") return;
  let url: URL;
  try {
    url = new URL(destUrl, window.location.href);
  } catch {
    return;
  }
  if (url.origin !== window.location.origin) return;
  const path = url.pathname.replace(/\/$/, "") || "/";
  if (!SUBPAGE_PATHS.has(path)) return;
  sessionStorage.setItem(STORAGE_KEY, String(getScrollYForStorage()));
}

function readScrollY(): number {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (raw == null) return NaN;
  const y = Number.parseFloat(raw);
  return Number.isFinite(y) && y >= 0 ? y : NaN;
}

function readReturnAnchorId(): string {
  const raw = sessionStorage.getItem(RETURN_ANCHOR_KEY);
  if (!raw) return "";
  return raw.replace(/^#/, "").trim();
}

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

function applyScrollY(y: number) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const w = window as Window & { __nexteraLenis?: Lenis };
  const lenis = w.__nexteraLenis;
  if (lenis) {
    lenis.scrollTo(y, {
      immediate: reduce,
      force: true,
      programmatic: true,
    });
  } else {
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "instant" });
  }
}

function applyScrollToId(id: string) {
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
    return;
  }

  el.scrollIntoView({ behavior: reduce || isCoarsePointer() ? "auto" : "smooth", block: "start" });
}

function trySaveHomeScrollBeforeSubpageNav(e: Event) {
  if (window.location.pathname !== "/") return;
  const me = e as MouseEvent;
  if ("button" in me && me.button !== 0) return;
  if (me.metaKey || me.ctrlKey || me.shiftKey || me.altKey) return;

  const el = (e.target as HTMLElement | null)?.closest("a");
  if (!el || !el.href) return;
  if (el.target === "_blank") return;
  let path: string;
  try {
    const u = new URL(el.href);
    if (u.origin !== window.location.origin) return;
    path = u.pathname.replace(/\/$/, "") || "/";
  } catch {
    return;
  }
  if (!SUBPAGE_PATHS.has(path)) return;

  sessionStorage.setItem(STORAGE_KEY, String(getScrollYForStorage()));
}

/** Înainte de navigare spre subpagini, reține poziția de scroll de pe homepage */
export function SaveHomeScrollBeforeSubpages() {
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => trySaveHomeScrollBeforeSubpageNav(e);
    const onClick = (e: MouseEvent) => trySaveHomeScrollBeforeSubpageNav(e);

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("click", onClick, true);

    const w = window as Window & {
      navigation?: EventTarget & {
        addEventListener(type: "navigate", listener: (e: AppNavigateEvent) => void): void;
        removeEventListener(type: "navigate", listener: (e: AppNavigateEvent) => void): void;
      };
    };
    const nav = w.navigation;
    const onNavigate = (e: AppNavigateEvent) => {
      try {
        saveScrollIfLeavingHomeToSubpage(e.destination.url);
      } catch {
        /* ignore */
      }
    };
    if (nav?.addEventListener) {
      nav.addEventListener("navigate", onNavigate);
    }

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("click", onClick, true);
      if (nav?.removeEventListener) {
        nav.removeEventListener("navigate", onNavigate);
      }
    };
  }, []);

  return null;
}

/**
 * La revenirea pe `/` fără `#top`: restaurează scroll-ul salvat.
 * La `/#top` (logo): sus + șterge salvarea.
 */
export function RestoreHomeScroll() {
  const pathname = usePathname();
  const restoreTargetRef = useRef<{ y?: number; id?: string } | null>(null);

  // useLayoutEffect: înainte de paint + înainte de scroll-ul implicit al segmentelor Next.
  // Nu ștergem sessionStorage la început: în Strict Mode useEffect/useLayoutEffect rulează de două ori;
  // prima ștergere lăsa a doua invocare fără valoare salvată.
  useLayoutEffect(() => {
    if (pathname !== "/") {
      restoreTargetRef.current = null;
      return;
    }

    const hash = window.location.hash.replace(/^#/, "");

    if (hash === "top") {
      restoreTargetRef.current = null;
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(RETURN_ANCHOR_KEY);
      applyScrollY(0);
      return;
    }

    const returnId = readReturnAnchorId();
    if (returnId) {
      restoreTargetRef.current = { id: returnId };
      const run = () => applyScrollToId(returnId);
      run();

      // curățăm imediat: dacă userul apasă back/forward repetat, nu vrem să “prindem” vechiul target.
      queueMicrotask(() => {
        sessionStorage.removeItem(RETURN_ANCHOR_KEY);
        sessionStorage.removeItem(STORAGE_KEY);
      });

      if (isCoarsePointer()) {
        const t = window.setTimeout(run, 80);
        return () => window.clearTimeout(t);
      }

      const r1 = requestAnimationFrame(() => run());
      const t1 = window.setTimeout(run, 120);
      const t2 = window.setTimeout(run, 280);
      return () => {
        cancelAnimationFrame(r1);
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }

    const y = readScrollY();
    if (Number.isNaN(y)) {
      restoreTargetRef.current = null;
      return;
    }

    restoreTargetRef.current = { y };

    const run = () => applyScrollY(y);
    run();

    if (isCoarsePointer()) {
      const t = window.setTimeout(run, 80);
      queueMicrotask(() => {
        sessionStorage.removeItem(STORAGE_KEY);
      });
      return () => {
        window.clearTimeout(t);
      };
    }

    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(run);
    });
    const t = window.setTimeout(run, 120);
    const t2 = window.setTimeout(run, 280);

    queueMicrotask(() => {
      sessionStorage.removeItem(STORAGE_KEY);
    });

    return () => {
      cancelAnimationFrame(outerRaf);
      if (innerRaf) cancelAnimationFrame(innerRaf);
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  // Next / Lenis pot reseta scroll-ul după layout — reaplicăm de câteva ori.
  useEffect(() => {
    if (pathname !== "/") return;
    const target = restoreTargetRef.current;
    if (!target) return;

    const run = () => {
      if (target.id) applyScrollToId(target.id);
      else if (typeof target.y === "number") applyScrollY(target.y);
    };

    const delays = isCoarsePointer() ? [80] : [100, 280, 520, 900];
    const ids = delays.map((ms) => window.setTimeout(run, ms));
    const doneMs = isCoarsePointer() ? 140 : 950;
    const done = window.setTimeout(() => {
      restoreTargetRef.current = null;
    }, doneMs);

    return () => {
      ids.forEach((id) => window.clearTimeout(id));
      window.clearTimeout(done);
    };
  }, [pathname]);

  return null;
}
