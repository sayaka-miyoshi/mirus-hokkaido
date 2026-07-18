import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCover } from "@/components/content/ArticleCover";
import { MarkdocRenderer } from "@/components/content/MarkdocRenderer";
import { company } from "@/lib/company";
import {
  formatDate,
  getAllInsights,
  getInsightBySlug,
  resolveOgImage,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const items = await getAllInsights();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);
  if (!article) return { title: "Insights" };
  const ogImage = resolveOgImage(article.coverImage);
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}),
      images: [{ url: ogImage, alt: article.title }],
    },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);
  if (!article) notFound();

  const displayDate = formatDate(article.publishedAt);
  const ogImage = resolveOgImage(article.coverImage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    articleSection: article.category,
    image: ogImage.startsWith("http") ? ogImage : `${company.domain}${ogImage}`,
  };

  return (
    <article className="pt-[calc(var(--header-h)+64px)] pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container max-w-3xl">
        <Link href="/insights" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">
          ← Insights一覧
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
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-tight tracking-[-0.03em]">
          {article.title}
        </h1>
        <p className="mt-6 text-lg text-[var(--text-secondary)]">{article.summary}</p>
        <ArticleCover
          category={article.category}
          title={article.title}
          image={article.coverImage}
          className="mt-10"
          priority
        />
        <div className="prose-mirus mt-12 border-t border-white/8 pt-10">
          <MarkdocRenderer content={article.body} />
        </div>
      </div>
    </article>
  );
}
