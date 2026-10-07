/**
 * MIRUS brand assets — single source of truth for logos and marks.
 * Do not alter logo proportions or letterforms in CSS beyond scaling.
 */
export const brand = {
  name: "MIRUS",
  nameJa: "株式会社MIRUS",
  logo: {
    /** Transparent PNG for UI (derived from official artwork; geometry unchanged) */
    src: "/brand/mirus-logo.png",
    /** Untouched source file */
    originalSrc: "/brand/mirus-logo-original.png",
    alt: "MIRUS",
    /** Intrinsic pixel size of the asset */
    width: 1024,
    height: 1024,
  },
} as const;
