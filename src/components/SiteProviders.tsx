"use client";

import { MotionConfig } from "framer-motion";
import { HashScrollSync } from "./HashScrollSync";
import {
  RestoreHomeScroll,
  SaveHomeScrollBeforeSubpages,
} from "./HomeScrollBridge";
import { SmoothScroll } from "./SmoothScroll";

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <SaveHomeScrollBeforeSubpages />
        <HashScrollSync />
        <RestoreHomeScroll />
        {children}
      </SmoothScroll>
    </MotionConfig>
  );
}
