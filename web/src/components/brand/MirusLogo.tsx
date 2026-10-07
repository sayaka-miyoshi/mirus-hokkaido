import Image from "next/image";
import { brand } from "@/lib/brand";

type MirusLogoProps = {
  /** Display height in CSS pixels. Width follows intrinsic ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Official MIRUS mark. Scale only — do not stretch or recolor the artwork.
 */
export function MirusLogo({ height = 40, className, priority = false }: MirusLogoProps) {
  const { width: iw, height: ih, src, alt } = brand.logo;
  const width = Math.round((height * iw) / ih);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ width, height, objectFit: "contain" }}
    />
  );
}
