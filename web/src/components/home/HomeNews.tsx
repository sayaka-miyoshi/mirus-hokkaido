import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate } from "@/lib/content";

type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string | null;
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
                  className="group grid gap-3 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[140px_120px_1fr] md:items-baseline md:gap-8"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.08em] text-[var(--text-muted)]">
                    {displayDate && item.publishedAt ? (
                      <time dateTime={item.publishedAt}>{displayDate}</time>
                    ) : null}
                  </span>
                  <span className="text-xs tracking-[0.14em] text-[var(--accent)]">{item.category}</span>
                  <div>
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
