import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "MIRUS Insights。SNS・AI・DX・Marketing・Local領域における知見を発信するオウンドメディアです。",
  alternates: { canonical: "/insights" },
};

const categories = ["All", "AI", "SNS", "DX", "Marketing", "Local"] as const;

export default async function InsightsIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const all = await getAllInsights();
  const active = category && categories.includes(category as (typeof categories)[number]) ? category : "All";
  const items = active === "All" ? all : all.filter((item) => item.category === active);

  return (
    <div className="pt-[calc(var(--header-h)+48px)]">
      <section className="section !pb-10">
        <div className="container">
          <p className="section-label">Insights</p>
          <div className="eyebrow-rule" />
          <h1 className="section-title">Insights</h1>
          <p className="section-lead">
            MIRUSの知見を発信するオウンドメディアです。AI・SNS・DX・Marketing・Localの視点から、現場で使える設計知をお届けします。
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/insights" : `/insights?category=${cat}`}
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
        <div className="container">
          {items.length === 0 ? (
            <p className="rounded-sm border border-white/8 px-6 py-12 text-[var(--text-secondary)]">
              公開中の記事はまだありません。
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => {
                const displayDate = formatDate(item.publishedAt);
                return (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="group rounded-sm border border-white/8 bg-[var(--bg-elevated)] p-7 transition hover:border-[rgba(110,207,245,0.35)]"
                  >
                    <p className="text-xs tracking-[0.14em] text-[var(--accent)]">{item.category}</p>
                    {displayDate && item.publishedAt ? (
                      <time
                        dateTime={item.publishedAt}
                        className="mt-3 block font-[family-name:var(--font-display)] text-xs tracking-[0.08em] text-[var(--text-muted)]"
                      >
                        {displayDate}
                      </time>
                    ) : null}
                    <h2 className="mt-4 text-xl font-medium leading-snug transition-colors group-hover:text-[var(--accent)]">
                      {item.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm text-[var(--text-secondary)]">{item.summary}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
