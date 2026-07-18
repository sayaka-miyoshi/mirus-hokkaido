import Image from "next/image";

type ArticleCoverProps = {
  category: string;
  title: string;
  image?: string | null;
  className?: string;
  priority?: boolean;
};

/** アイキャッチ未設定時の共通カバー（CSSのみ・外部素材不使用） */
export function ArticleCover({
  category,
  title,
  image,
  className = "",
  priority = false,
}: ArticleCoverProps) {
  if (image) {
    return (
      <div
        className={`relative aspect-[16/9] overflow-hidden rounded-sm border border-white/8 bg-[var(--surface)] ${className}`}
      >
        <Image
          src={image}
          alt={`${title}のアイキャッチ画像`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-[#05070c] p-6 sm:p-8 ${className}`}
      role="img"
      aria-label={`${category} — ${title}`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(110,207,245,0.22), transparent 55%), linear-gradient(160deg, #05070c 0%, #0c121c 55%, #05070c 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--accent)]/50" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[var(--accent)]/35" />

      <p className="relative font-[family-name:var(--font-display)] text-xl tracking-[0.22em] text-white sm:text-2xl">
        MI<span className="text-[var(--accent)]">RUS</span>
      </p>
      <div className="relative">
        <p className="text-[0.65rem] tracking-[0.2em] text-[var(--accent)] sm:text-xs">{category}</p>
        <p className="mt-2 line-clamp-2 text-sm text-white/80 sm:text-base">{title}</p>
      </div>
    </div>
  );
}
