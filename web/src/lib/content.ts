import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { relatedServiceOptions } from "./company";

export const reader = createReader(process.cwd(), keystaticConfig);

export type NewsCategory =
  | "News"
  | "Works"
  | "Seminar"
  | "Media"
  | "Project"
  | "Release";

export type InsightCategory = "AI" | "SNS" | "DX" | "Marketing" | "Local";

export type PublishStatus = "draft" | "published";

export type RelatedServiceValue = (typeof relatedServiceOptions)[number]["value"];

export const DEFAULT_OG_IMAGE = "/opengraph-image";

export function getRelatedServiceLabel(value: string) {
  return relatedServiceOptions.find((item) => item.value === value)?.label ?? value;
}

function sortByDateDesc<T extends { publishedAt: string | null }>(items: T[]) {
  return items.sort((a, b) => {
    if (!a.publishedAt && !b.publishedAt) return 0;
    if (!a.publishedAt) return 1;
    if (!b.publishedAt) return -1;
    return a.publishedAt < b.publishedAt ? 1 : -1;
  });
}

export async function getAllNews(options?: { includeDrafts?: boolean }) {
  const items = await reader.collections.news.all();
  const mapped = items.map((item) => ({
    slug: item.slug,
    title: item.entry.title,
    summary: item.entry.summary,
    category: item.entry.category as NewsCategory,
    status: (item.entry.status ?? "published") as PublishStatus,
    publishedAt: item.entry.publishedAt ?? null,
    venue: item.entry.venue?.trim() ? item.entry.venue.trim() : null,
    coverImage: item.entry.coverImage,
    relatedServices: (item.entry.relatedServices ?? []) as RelatedServiceValue[],
  }));

  const filtered = options?.includeDrafts
    ? mapped
    : mapped.filter((item) => item.status === "published");

  return sortByDateDesc(filtered);
}

export async function getLatestNews(limit = 3) {
  const all = await getAllNews();
  return all.slice(0, limit);
}

export async function getNewsBySlug(slug: string, options?: { includeDrafts?: boolean }) {
  const entry = await reader.collections.news.read(slug);
  if (!entry) return null;

  const status = (entry.status ?? "published") as PublishStatus;
  if (!options?.includeDrafts && status !== "published") return null;

  const body = await entry.body();
  return {
    slug,
    title: entry.title,
    summary: entry.summary,
    category: entry.category as NewsCategory,
    status,
    publishedAt: entry.publishedAt ?? null,
    venue: entry.venue?.trim() ? entry.venue.trim() : null,
    coverImage: entry.coverImage,
    relatedServices: (entry.relatedServices ?? []) as RelatedServiceValue[],
    body,
  };
}

export async function getNewsNeighbors(slug: string) {
  const all = await getAllNews();
  const index = all.findIndex((item) => item.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index < all.length - 1 ? all[index + 1] : null,
    next: index > 0 ? all[index - 1] : null,
  };
}

export async function getAllInsights(options?: { includeDrafts?: boolean }) {
  const items = await reader.collections.insights.all();
  const mapped = items.map((item) => ({
    slug: item.slug,
    title: item.entry.title,
    summary: item.entry.summary,
    category: item.entry.category as InsightCategory,
    status: (item.entry.status ?? "draft") as PublishStatus,
    publishedAt: item.entry.publishedAt ?? null,
    coverImage: item.entry.coverImage,
  }));

  const filtered = options?.includeDrafts
    ? mapped
    : mapped.filter((item) => item.status === "published");

  return sortByDateDesc(filtered);
}

export async function getLatestInsights(limit = 3) {
  const all = await getAllInsights();
  return all.slice(0, limit);
}

export async function getPublishedInsightsCount() {
  const all = await getAllInsights();
  return all.length;
}

export async function getInsightBySlug(slug: string, options?: { includeDrafts?: boolean }) {
  const entry = await reader.collections.insights.read(slug);
  if (!entry) return null;

  const status = (entry.status ?? "draft") as PublishStatus;
  if (!options?.includeDrafts && status !== "published") return null;

  const body = await entry.body();
  return {
    slug,
    title: entry.title,
    summary: entry.summary,
    category: entry.category as InsightCategory,
    status,
    publishedAt: entry.publishedAt ?? null,
    coverImage: entry.coverImage,
    body,
  };
}

export function formatDate(date: string | null | undefined) {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

export function resolveCoverImage(coverImage: string | null | undefined) {
  return coverImage || null;
}

export function resolveOgImage(coverImage: string | null | undefined) {
  return coverImage || DEFAULT_OG_IMAGE;
}
