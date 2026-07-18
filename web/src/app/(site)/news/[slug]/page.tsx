import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCover } from "@/components/content/ArticleCover";
import { MarkdocRenderer } from "@/components/content/MarkdocRenderer";
import { company } from "@/lib/company";
import {
  formatDate,
  getAllNews,
  getNewsBySlug,
  getNewsNeighbors,
  getRelatedServiceLabel,
  resolveOgImage,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const items = await getAllNews();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return { title: "News" };
  const ogImage = resolveOgImage(article.coverImage);
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}),
      images: [{ url: ogImage, alt: article.title }],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) notFound();

  const { prev, next } = await getNewsNeighbors(slug);
  const displayDate = formatDate(article.publishedAt);
  const ogImage = resolveOgImage(article.coverImage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    image: ogImage.startsWith("http") ? ogImage : `${company.domain}${ogImage}`,
  };

  const metaRows = [
    ...(displayDate && article.publishedAt
      ? [{ label: "開催日", value: displayDate, dateTime: article.publishedAt }]
      : []),
    ...(article.venue ? [{ label: "会場", value: article.venue }] : []),
  ];

  return (
    <article className="pt-[calc(var(--header-h)+48px)] pb-24 sm:pt-[calc(var(--header-h)+64px)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container max-w-3xl">
        <Link href="/news" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">
          ← News一覧へ戻る
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          {displayDate && article.publishedAt ? (
            <time
              dateTime={article.publishedAt}
              className="font-[family-name:var(--font-display)] tracking-[0.08em] text-[var(--text-muted)]"
            >
              {displayDate}
            </time>
          ) : null}
          <span className="tracking-[0.14em] text-[var(--accent)]">{article.category}</span>
        </div>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-tight tracking-[-0.03em]">
          {article.title}
        </h1>

        <p className="mt-6 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {article.summary}
        </p>

        <ArticleCover
          category={article.category}
          title={article.title}
          image={article.coverImage}
          className="mt-10"
          priority
        />

        {metaRows.length > 0 ? (
          <dl className="mt-10 overflow-hidden rounded-sm border border-white/8">
            {metaRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b border-white/8 px-5 py-4 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-6"
              >
                <dt className="text-sm text-[var(--text-muted)]">{row.label}</dt>
                <dd className="text-sm">
                  {"dateTime" in row && row.dateTime ? (
                    <time dateTime={row.dateTime}>{row.value}</time>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="prose-mirus mt-12 border-t border-white/8 pt-10">
          <MarkdocRenderer content={article.body} />
        </div>

        {article.relatedServices.length > 0 ? (
          <section className="mt-14 border-t border-white/8 pt-10">
            <h2 className="font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[var(--text-muted)]">
              関連サービス
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {article.relatedServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/#service"
                    className="inline-block rounded-sm border border-white/10 px-3 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {getRelatedServiceLabel(service)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav
          aria-label="前後の記事"
          className="mt-14 grid gap-4 border-t border-white/8 pt-10 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/news/${prev.slug}`}
              className="rounded-sm border border-white/8 p-5 transition hover:border-[rgba(110,207,245,0.35)]"
            >
              <span className="text-xs tracking-[0.14em] text-[var(--text-muted)]">前の記事</span>
              <span className="mt-2 block text-sm leading-snug">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/news/${next.slug}`}
              className="rounded-sm border border-white/8 p-5 text-right transition hover:border-[rgba(110,207,245,0.35)] sm:justify-self-end"
            >
              <span className="text-xs tracking-[0.14em] text-[var(--text-muted)]">次の記事</span>
              <span className="mt-2 block text-sm leading-snug">{next.title}</span>
            </Link>
          ) : null}
        </nav>

        <div className="mt-10">
          <Link href="/news" className="btn btn-ghost">
            一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}
