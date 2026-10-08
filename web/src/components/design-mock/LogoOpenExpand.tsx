"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { MirusLogo } from "@/components/brand/MirusLogo";
import { MirusMark } from "@/components/brand/MirusMark";
import { brand } from "@/lib/brand";
import { mockCopy } from "@/components/design-mock/mockData";

/**
 * C1 — Expand through M
 * Full logo → M scales (GPU transform) → content is revealed inside growing M mask.
 */
export function LogoOpenExpand() {
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 28, mass: 0.35 });

  const logoOpacity = useTransform(smooth, [0, 0.14, 0.3], [1, 1, 0]);
  const markOpacity = useTransform(smooth, [0.12, 0.24, 0.55, 0.7], [0, 1, 0.35, 0]);
  const markScale = useTransform(smooth, [0.14, 0.62], [1, 14]);
  const windowScale = useTransform(smooth, [0.3, 0.92], [0.42, 20]);
  const invWindow = useTransform(windowScale, (s) => 1 / s);
  const windowOpacity = useTransform(smooth, [0.26, 0.36], [0, 1]);
  const hintOpacity = useTransform(smooth, [0, 0.1, 0.2], [0.65, 0.5, 0]);
  const markOut = useTransform(smooth, [0.58, 0.78], [1, 0]);

  if (reduce) {
    return (
      <section id="top" className="dm-c-static" aria-label="オープニング（モーション軽減）">
        <div className="dm-container dm-c-static-inner">
          <MirusLogo height={88} priority />
          <p className="dm-hero-kicker" style={{ marginTop: 36 }}>
            {mockCopy.enKicker}
          </p>
          <p className="dm-hero-en">{mockCopy.enLine}</p>
          <h1 className="dm-hero-title dm-hero-title-sm">{mockCopy.jaHeadline}</h1>
          <p className="dm-hero-sub">{mockCopy.jaSub}</p>
        </div>
      </section>
    );
  }

  return (
    <div ref={pinRef} className="dm-c-pin" id="top">
      <div className="dm-c-sticky" aria-label="ロゴオープニング C1 Expand">
        <div className="dm-c-stage">
          {/* Growing M window with inverse-scaled type (stays sharp) */}
          <motion.div
            className="dm-c-window"
            style={{
              opacity: windowOpacity,
              scale: windowScale,
              ["--m-mask" as string]: `url(${brand.mark.src2x})`,
            }}
          >
            <motion.div className="dm-c-window-inner" style={{ scale: invWindow }}>
              <p className="dm-hero-kicker">{mockCopy.enKicker}</p>
              <p className="dm-hero-en">{mockCopy.enLine}</p>
              <h1 className="dm-hero-title dm-hero-title-sm">{mockCopy.jaHeadline}</h1>
              <p className="dm-hero-sub">{mockCopy.jaSub}</p>
              <p className="dm-hero-tag">{mockCopy.tagline}</p>
            </motion.div>
          </motion.div>

          <motion.div className="dm-c-logo" style={{ opacity: logoOpacity }}>
            <MirusLogo height={112} priority />
          </motion.div>

          <motion.div
            className="dm-c-mark"
            style={{ opacity: markOpacity, scale: markScale }}
            aria-hidden
          >
            <motion.div style={{ opacity: markOut }}>
              <MirusMark height={128} hiRes priority />
            </motion.div>
          </motion.div>

          <motion.p className="dm-c-hint" style={{ opacity: hintOpacity }}>
            Scroll
          </motion.p>
        </div>
      </div>
    </div>
  );
}
