"use client";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  /** Fără fade-in la scroll — folosit unde whileInView poate rata pe mobil sau pentru conținut critic. */
  instant?: boolean;
};

export function Reveal({
  children,
  className,
  delayMs: _delayMs = 0,
  instant: _instant = false,
}: RevealProps) {
  return <div className={className}>{children}</div>;
}
