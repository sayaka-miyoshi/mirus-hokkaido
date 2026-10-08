import Image from "next/image";
import type { CSSProperties } from "react";
import { brand } from "@/lib/brand";

type MirusLogoProps = {
  /** Display height in CSS pixels. Width follows intrinsic ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Official MIRUS mark. Scale only — do not stretch or recolor the artwork.
 * Height defaults via --mirus-logo-h so CSS can override for breakpoints.
 */
export function MirusLogo({ height = 40, className, priority = false }: MirusLogoProps) {
  const { width: iw, height: ih, src, alt } = brand.logo;
  const style = {
    ["--mirus-logo-h"]: `${height}px`,
    height: "var(--mirus-logo-h)",
    width: "auto",
    objectFit: "contain",
  } as CSSProperties;

  return (
    <Image
      src={src}
      alt={alt}
      width={iw}
      height={ih}
      className={className}
      priority={priority}
      sizes={`${height * 2}px`}
      style={style}
    />
  );
}
