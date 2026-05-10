"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type HomeReturnLinkProps = {
  href: string;
  returnAnchorId: string;
  className?: string;
  children: ReactNode;
};

export function HomeReturnLink({
  href,
  returnAnchorId,
  className,
  children,
}: HomeReturnLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        try {
          sessionStorage.setItem("nextera-home-return-anchor", returnAnchorId);
        } catch {
          /* ignore */
        }
      }}
    >
      {children}
    </Link>
  );
}

