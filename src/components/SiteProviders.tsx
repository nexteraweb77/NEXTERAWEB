"use client";

import { MotionConfig } from "framer-motion";
import { HashScrollSync } from "./HashScrollSync";
import {
  RestoreHomeScroll,
  SaveHomeScrollBeforeSubpages,
} from "./HomeScrollBridge";
import { SmoothScroll } from "./SmoothScroll";
import { SubpageMobileScrollFix } from "./SubpageMobileScrollFix";

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <SaveHomeScrollBeforeSubpages />
        <SubpageMobileScrollFix />
        <HashScrollSync />
        <RestoreHomeScroll />
        {children}
      </SmoothScroll>
    </MotionConfig>
  );
}
