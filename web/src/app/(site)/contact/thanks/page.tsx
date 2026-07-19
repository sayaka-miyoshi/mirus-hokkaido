import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ送信完了",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <div className="flex min-h-[70vh] items-center pt-[calc(var(--header-h)+48px)] pb-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="section-label">Contact</p>
          <div className="mx-auto eyebrow-rule" />
          <h1 className="section-title">送信が完了しました</h1>
          <p className="mx-auto section-lead">
            お問い合わせありがとうございます。内容を確認のうえ、担当よりご連絡いたします。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              TOPへ戻る
            </Link>
            <Link href="/#contact" className="btn btn-ghost">
              フォームへ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
