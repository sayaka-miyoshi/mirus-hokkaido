import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import KeystaticAdmin from "./KeystaticAdmin";

export const metadata: Metadata = {
  title: "CMS",
  robots: { index: false, follow: false },
};

function ProductionCmsNotice() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center pt-[var(--header-h)]">
        <div className="container max-w-xl py-24 text-center">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] text-[var(--accent)]">
            CMS
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.02em] md:text-4xl">
            本番では管理画面を利用できません
          </h1>
          <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
            記事の更新はローカル環境で行い、GitHubへpushしてください。
          </p>
          <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">
            ローカルで <code className="text-[var(--accent)]">npm run dev</code> を起動し、
            <code className="text-[var(--accent)]">/keystatic</code> から編集できます。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              トップへ戻る
            </Link>
            <Link href="/news" className="btn btn-ghost">
              Newsを見る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function KeystaticPage() {
  if (process.env.NODE_ENV === "production") {
    return <ProductionCmsNotice />;
  }

  return <KeystaticAdmin />;
}
