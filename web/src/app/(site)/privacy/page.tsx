import Link from "next/link";
import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${company.name}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <article className="pt-[calc(var(--header-h)+48px)] pb-24 sm:pt-[calc(var(--header-h)+64px)]">
      <div className="container max-w-3xl">
        <p className="section-label">Privacy Policy</p>
        <div className="eyebrow-rule" />
        <h1 className="section-title">プライバシーポリシー</h1>
        <div className="prose-mirus mt-10">
          <p>
            {company.name}（以下「当社」）は、お問い合わせフォーム等を通じて取得する個人情報を、以下の方針に基づき適切に取り扱います。
          </p>

          <h2>1. 取得する情報</h2>
          <p>
            お問い合わせの際、会社名または団体名、お名前、メールアドレス、お問い合わせ種別、お問い合わせ内容等をご提供いただく場合があります。
          </p>

          <h2>2. 利用目的</h2>
          <p>
            取得した情報は、お問い合わせへの回答、関連するご案内、サービス改善のために利用します。法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。
          </p>

          <h2>3. 管理</h2>
          <p>
            個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。フォーム送信データは、サイト運用基盤上で管理されます。
          </p>

          <h2>4. 開示・訂正・削除</h2>
          <p>
            ご本人から個人情報の開示・訂正・削除等のご請求があった場合は、合理的な範囲で速やかに対応します。ご連絡はサイトのお問い合わせフォームよりお願いいたします。
          </p>

          <h2>5. 事業者情報</h2>
          <p>
            {company.name}
            <br />
            所在地：{company.addressFull}
            <br />
            お問い合わせ：サイト内のお問い合わせフォーム
          </p>

          <h2>6. 改定</h2>
          <p>本ポリシーの内容は、必要に応じて改定することがあります。改定後の内容は本ページに掲載した時点から効力を生じます。</p>
        </div>

        <div className="mt-14">
          <Link href="/#contact" className="btn btn-ghost">
            お問い合わせへ
          </Link>
        </div>
      </div>
    </article>
  );
}
