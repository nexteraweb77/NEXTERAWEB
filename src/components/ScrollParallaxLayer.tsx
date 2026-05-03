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

/**
 * Strat decorativ cu parallax foarte discret (stil Apple), legat de scroll global.
 * Pe touch (`pointer: coarse`) parallax-ul e oprit: Safari poate reseta scrollul când
 * un strat cu `transform` se actualizează la sfârșitul derulării cu inertia.
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) =>
    reduce || touchPrimary ? 0 : v * multiplier,
  );

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
