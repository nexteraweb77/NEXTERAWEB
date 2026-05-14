"use client";

import { useEffect, useLayoutEffect } from "react";
import type Lenis from "lenis";

function scrollDocumentToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function syncLenisResize(lenis: Lenis) {
  lenis.resize();
}

function syncLenisTop(lenis: Lenis) {
  lenis.resize();
  lenis.scrollTo(0, { immediate: true, force: true, programmatic: true });
}

/** Pe telefon folosim scroll nativ — Lenis rămâne doar pe pointer fine (ex. desktop). */
function isFinePointerDevice() {
  if (typeof window === "undefined") return true;
  return !window.matchMedia("(pointer: coarse)").matches;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!isFinePointerDevice()) {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
    const hasHash = Boolean(window.location.hash?.length > 1);
    if (!hasHash) {
      scrollDocumentToTop();
    }
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !isFinePointerDevice()) {
      return;
    }

    const hasHash = Boolean(window.location.hash?.length > 1);
    if (!hasHash) {
      scrollDocumentToTop();
    }

    let lenis: Lenis | null = null;
    let rafId = 0;
    let postLayout = 0;
    let visibilityHandler: (() => void) | null = null;
    let cancelled = false;

    let idleCallbackId: number | undefined;
    let idleTimeoutId: number | undefined;

    const startLenis = async () => {
      try {
        const [{ default: LenisCtor }] = await Promise.all([
          import("lenis"),
          import("lenis/dist/lenis.css"),
        ]);
        if (cancelled) return;

        lenis = new LenisCtor({
          lerp: 0.078,
          smoothWheel: true,
          anchors: true,
        });

        const w = window as Window & { __nexteraLenis?: Lenis };
        w.__nexteraLenis = lenis;

        if (!hasHash) {
          syncLenisTop(lenis);
        } else {
          syncLenisResize(lenis);
          const id = window.location.hash.slice(1);
          requestAnimationFrame(() => {
            lenis?.scrollTo(`#${id}`, {
              immediate: true,
              force: true,
              programmatic: true,
            });
          });
        }

        const raf = (time: number) => {
          if (!document.hidden) {
            lenis?.raf(time);
          }
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        visibilityHandler = () => {
          if (!lenis || document.hidden) return;
          syncLenisResize(lenis);
        };
        document.addEventListener("visibilitychange", visibilityHandler, {
          passive: true,
        });

        postLayout = requestAnimationFrame(() => {
          if (!lenis) return;
          syncLenisResize(lenis);
          if (!window.location.hash?.length) {
            syncLenisTop(lenis);
          }
        });
      } catch (err) {
        console.error("[SmoothScroll] Lenis nu a pornit — folosim scroll nativ.", err);
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      idleCallbackId = window.requestIdleCallback(() => {
        void startLenis();
      }, {
        timeout: 1800,
      });
    } else {
      idleTimeoutId = window.setTimeout(() => {
        void startLenis();
      }, 120) as unknown as number;
    }

    return () => {
      cancelled = true;
      if (idleCallbackId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (idleTimeoutId != null) {
        window.clearTimeout(idleTimeoutId);
      }
      cancelAnimationFrame(postLayout);
      cancelAnimationFrame(rafId);
      if (visibilityHandler) {
        document.removeEventListener("visibilitychange", visibilityHandler);
      }
      const w = window as Window & { __nexteraLenis?: Lenis };
      if (lenis) {
        try {
          lenis.destroy();
        } catch {
          /* ignore */
        }
        delete w.__nexteraLenis;
      }
    };
  }, []);

  return <>{children}</>;
}
