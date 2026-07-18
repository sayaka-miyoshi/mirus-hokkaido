import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center pt-[var(--header-h)]">
        <div className="container max-w-xl py-24 text-center">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] text-[var(--accent)]">
            404
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            ページが見つかりません
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            お探しのページは移動または削除された可能性があります。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              トップへ戻る
            </Link>
            <Link href="/news" className="btn btn-ghost">
              Newsを見る
            </Link>
          </div>
          <p className="mt-12 text-sm text-[var(--text-muted)]">{company.name}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
