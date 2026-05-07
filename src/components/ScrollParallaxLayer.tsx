"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSyncExternalStore } from "react";

type Props = {
  children: React.ReactNode;
  /** Mișcare verticală subtilă proporțională cu scroll (0 = dezactivat la reduced motion). */
  multiplier?: number;
  className?: string;
};

function subscribePointerCoarse(onStoreChange: () => void) {
  const mq = window.matchMedia("(pointer: coarse)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function snapshotPointerCoarse() {
  return window.matchMedia("(pointer: coarse)").matches;
}

type InnerProps = {
  children: React.ReactNode;
  className?: string;
  multiplier: number;
};

/** Folosește useScroll doar aici — nu se montează pe mobil / reduced motion → mai puțin lag la scroll. */
function ParallaxMotion({ children, multiplier, className }: InnerProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => (reduce ? 0 : v * multiplier));

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Strat decorativ cu parallax foarte discret (stil Apple), legat de scroll global.
 * Pe touch (`pointer: coarse`) nu montăm deloc `useScroll` — evită muncă la fiecare frame pe telefon.
 */
export function ScrollParallaxLayer({
  children,
  multiplier = 0.045,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const touchPrimary = useSyncExternalStore(
    subscribePointerCoarse,
    snapshotPointerCoarse,
    () => false,
  );

  if (reduce || touchPrimary) {
    return <div className={className}>{children}</div>;
  }

  return (
    <ParallaxMotion multiplier={multiplier} className={className}>
      {children}
    </ParallaxMotion>
  );
}
