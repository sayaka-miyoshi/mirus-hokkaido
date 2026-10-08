/**
 * MIRUS brand assets — single source of truth for logos and marks.
 * Do not alter logo proportions or letterforms in CSS beyond scaling.
 */
export const brand = {
  name: "MIRUS",
  nameJa: "株式会社MIRUS",
  logo: {
    /** Transparent PNG for UI (white background removed only; geometry unchanged) */
    src: "/brand/mirus-logo.png",
    /** Untouched source file (original JPEG as provided) */
    originalSrc: "/brand/mirus-logo-original.jpg",
    alt: "MIRUS",
    /** Intrinsic pixel size of the asset */
    width: 1024,
    height: 1024,
  },
  /** M symbol only — cropped from official artwork, geometry unchanged */
  mark: {
    src: "/brand/mirus-m-mark.png",
    src2x: "/brand/mirus-m-mark-2x.png",
    alt: "MIRUS",
    width: 403,
    height: 388,
  },
} as const;
