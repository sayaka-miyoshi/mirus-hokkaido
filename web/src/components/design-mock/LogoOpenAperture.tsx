"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useId, useRef } from "react";
import { MirusLogo } from "@/components/brand/MirusLogo";
import { brand } from "@/lib/brand";
import { mockCopy } from "@/components/design-mock/mockData";

/**
 * C2 — Aperture / paper cut
 * Soft logo entrance → paper veil with M-shaped hole expands → typography in open field.
 */
export function LogoOpenAperture() {
  const reduce = useReducedMotion();
  const maskId = useId().replace(/:/g, "");
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 64, damping: 30, mass: 0.4 });

  const introY = useTransform(smooth, [0, 0.14], [16, 0]);
  const introOpacity = useTransform(smooth, [0, 0.08, 0.32, 0.46], [0, 1, 1, 0]);
  const veilOpacity = useTransform(smooth, [0.18, 0.3, 0.9, 1], [0, 1, 1, 0]);
  const apertureScale = useTransform(smooth, [0.2, 0.86], [0.9, 28]);
  const typeOpacity = useTransform(smooth, [0.38, 0.66], [0, 1]);
  const typeY = useTransform(smooth, [0.38, 0.7], [32, 0]);
  const hintOpacity = useTransform(smooth, [0.06, 0.14, 0.24], [0, 0.6, 0]);

  if (reduce) {
    return (
      <section id="top" className="dm-c-static" aria-label="オープニング（モーション軽減）">
        <div className="dm-container dm-c-static-inner">
          <MirusLogo height={88} priority />
          <p className="dm-hero-kicker" style={{ marginTop: 36 }}>
            {mockCopy.enKicker}
          </p>
          <p className="dm-hero-en">{mockCopy.enLineB}</p>
          <h1 className="dm-hero-title dm-hero-title-sm">{mockCopy.jaHeadline}</h1>
          <p className="dm-hero-sub">{mockCopy.jaSub}</p>
        </div>
      </section>
    );
  }

  return (
    <div ref={pinRef} className="dm-c-pin dm-c-pin-b" id="top">
      <div className="dm-c-sticky" aria-label="ロゴオープニング C2 Aperture">
        <div className="dm-c-stage dm-c-stage-b">
          <motion.div className="dm-c-type dm-c-type-b" style={{ opacity: typeOpacity, y: typeY }}>
            <p className="dm-hero-kicker">{mockCopy.enKicker}</p>
            <p className="dm-hero-en">{mockCopy.enLineB}</p>
            <h1 className="dm-hero-title dm-hero-title-sm">{mockCopy.jaHeadline}</h1>
            <p className="dm-hero-sub">{mockCopy.jaSub}</p>
            <div className="dm-hero-cta" style={{ justifyContent: "center" }}>
              <a href="#philosophy" className="dm-btn dm-btn-primary">
                Continue
              </a>
            </div>
          </motion.div>

          <motion.div className="dm-c-veil" style={{ opacity: veilOpacity }} aria-hidden>
            <svg className="dm-c-veil-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                  <rect width="100" height="100" fill="#fff" />
                  {/* Official M: black = hole in luminance mask */}
                  <motion.g style={{ scale: apertureScale, transformOrigin: "50px 50px" }}>
                    <image
                      href={brand.mark.src2x}
                      x="39"
                      y="39.5"
                      width="22"
                      height="21"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </motion.g>
                </mask>
              </defs>
              <rect
                width="100"
                height="100"
                fill="var(--m-bg-soft, #fffcf8)"
                mask={`url(#${maskId})`}
              />
            </svg>
          </motion.div>

          <motion.div className="dm-c-logo dm-c-logo-b" style={{ opacity: introOpacity, y: introY }}>
            <MirusLogo height={120} priority />
          </motion.div>

          <motion.p className="dm-c-hint" style={{ opacity: hintOpacity }}>
            Scroll
          </motion.p>
        </div>
      </div>
    </div>
  );
}
