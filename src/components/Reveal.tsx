"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  /** Fără fade-in la scroll — folosit unde whileInView poate rata pe mobil sau pentru conținut critic. */
  instant?: boolean;
};

const easeApple = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delayMs = 0,
  instant = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const skipMotion = reduce || instant;

  if (skipMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px", amount: 0.2 }}
      transition={{
        duration: 0.72,
        delay: delayMs / 1000,
        ease: easeApple,
      }}
    >
      {children}
    </motion.div>
  );
}
