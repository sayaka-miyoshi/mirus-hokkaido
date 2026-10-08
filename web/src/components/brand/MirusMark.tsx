import Image from "next/image";
import type { CSSProperties } from "react";
import { brand } from "@/lib/brand";

type MirusMarkProps = {
  /** Display height in CSS pixels. Width follows intrinsic ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
  /** Prefer 2x asset when the mark will be scaled by motion */
  hiRes?: boolean;
};

/**
 * Official MIRUS M symbol only. Scale via CSS transform — do not stretch artwork.
 */
export function MirusMark({
  height = 120,
  className,
  priority = false,
  hiRes = false,
}: MirusMarkProps) {
  const { width: iw, height: ih, src, src2x, alt } = brand.mark;
  const asset = hiRes ? src2x : src;
  const style = {
    ["--mirus-mark-h"]: `${height}px`,
    height: "var(--mirus-mark-h)",
    width: "auto",
    objectFit: "contain",
  } as CSSProperties;

  return (
    <Image
      src={asset}
      alt={alt}
      width={hiRes ? iw * 2 : iw}
      height={hiRes ? ih * 2 : ih}
      className={className}
      priority={priority}
      sizes={`${Math.round(height * 3)}px`}
      style={style}
      draggable={false}
    />
  );
}
