import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { getAllInsights, getAllNews } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = company.domain;
  const news = await getAllNews();
  const insights = await getAllInsights();

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...news.map((item) => ({
      url: `${base}/news/${item.slug}`,
      lastModified: item.publishedAt ? new Date(item.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map((item) => ({
      url: `${base}/insights/${item.slug}`,
      lastModified: item.publishedAt ? new Date(item.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
