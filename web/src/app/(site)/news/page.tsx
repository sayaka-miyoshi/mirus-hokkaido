import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, getAllNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "株式会社MIRUSのニュース、セミナー、実績、メディア情報をお届けします。",
  alternates: { canonical: "/news" },
};

const categories = ["All", "News", "Works", "Seminar", "Media", "Project", "Release"] as const;

export default async function NewsIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const all = await getAllNews();
  const active = category && categories.includes(category as (typeof categories)[number]) ? category : "All";
  const items = active === "All" ? all : all.filter((item) => item.category === active);

  return (
    <div className="pt-[calc(var(--header-h)+48px)]">
      <section className="section !pb-10">
        <div className="container">
          <p className="section-label">News</p>
          <div className="eyebrow-rule" />
          <h1 className="section-title">ニュース</h1>
          <p className="section-lead">
            セミナー登壇、研修、実績、メディア掲載など、MIRUSの最新情報を掲載しています。
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/news" : `/news?category=${cat}`}
                className={`rounded-full border px-4 py-2 text-xs tracking-[0.12em] transition ${
                  active === cat
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "border-white/10 text-[var(--text-secondary)] hover:border-white/25"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container divide-y divide-white/8 border-y border-white/8">
          {items.length === 0 ? (
            <p className="py-12 text-[var(--text-secondary)]">該当する記事はまだありません。</p>
          ) : (
            items.map((item) => {
              const displayDate = formatDate(item.publishedAt);
              return (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group grid gap-4 py-8 md:grid-cols-[120px_140px_1fr] md:items-center md:gap-8"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.08em] text-[var(--text-muted)]">
                    {displayDate && item.publishedAt ? (
                      <time dateTime={item.publishedAt}>{displayDate}</time>
                    ) : null}
                  </span>

                  {item.coverImage ? (
                    <div className="relative aspect-[16/10] w-full max-w-[140px] overflow-hidden rounded-sm border border-white/10 bg-[var(--surface)]">
                      <Image
                        src={item.coverImage}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="140px"
                      />
                    </div>
                  ) : (
                    <span className="text-xs tracking-[0.14em] text-[var(--accent)]">{item.category}</span>
                  )}

                  <div>
                    <p className="mb-1 text-[0.65rem] tracking-[0.14em] text-[var(--accent)]">{item.category}</p>
                    <h2 className="text-xl font-medium transition-colors group-hover:text-[var(--accent)]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.summary}</p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
