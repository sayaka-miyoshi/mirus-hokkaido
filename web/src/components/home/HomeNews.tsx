import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate } from "@/lib/content";

type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string | null;
  coverImage?: string | null;
};

export function HomeNews({ items }: { items: NewsItem[] }) {
  return (
    <section id="news" className="section">
      <div className="container">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">News</p>
              <div className="eyebrow-rule" />
              <h2 className="section-title mb-0">最新情報</h2>
            </div>
            <Link href="/news" className="btn btn-ghost self-start md:self-auto">
              News一覧
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {items.map((item, index) => {
            const displayDate = formatDate(item.publishedAt);
            return (
              <Reveal key={item.slug} delay={index * 0.05}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-white/[0.02] sm:grid-cols-[7.5rem_8.75rem_minmax(0,1fr)] sm:items-center sm:gap-6 md:gap-8"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.08em] text-[var(--text-muted)] sm:self-center">
                    {displayDate && item.publishedAt ? (
                      <time dateTime={item.publishedAt}>{displayDate}</time>
                    ) : null}
                  </span>

                  {item.coverImage ? (
                    <div className="news-thumb relative h-[5.5rem] w-[8.75rem] shrink-0 justify-self-start overflow-hidden rounded-sm border border-white/10 bg-[#ececec]">
                      <Image
                        src={item.coverImage}
                        alt=""
                        fill
                        className="object-contain p-1 transition duration-500 group-hover:scale-[1.02]"
                        sizes="140px"
                      />
                    </div>
                  ) : (
                    <span className="text-xs tracking-[0.14em] text-[var(--accent)]">{item.category}</span>
                  )}

                  <div className="min-w-0">
                    <p className="mb-1 text-[0.65rem] tracking-[0.14em] text-[var(--accent)]">{item.category}</p>
                    <h3 className="text-lg font-medium tracking-[-0.01em] transition-colors group-hover:text-[var(--accent)] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--text-secondary)]">{item.summary}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
