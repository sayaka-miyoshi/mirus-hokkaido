import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { company, strategicPartner } from "@/lib/company";

export function About() {
  return (
    <section id="about" className="section bg-[var(--bg-elevated)]">
      <div className="container grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-[340px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--surface)]">
              <Image
                src="/images/representative.png"
                alt={`${company.representativeTitle} ${company.representative}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 340px"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-label">About MIRUS</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title">北海道の魅力を、届けるプロモーション。</h2>
          <p className="section-lead">
            {company.name}は、インフルエンサーマーケティング、SNS・コンテンツ制作、
            インバウンド・海外プロモーションを中心に、北海道の企業・自治体・地域の魅力発信を支援します。
            MIRUSが案件を企画・プロデュースし、{strategicPartner.description}
          </p>
          <dl className="mt-10 space-y-4 border-t border-white/8 pt-8 text-sm">
            <div className="flex gap-6">
              <dt className="w-28 shrink-0 text-[var(--text-muted)]">代表</dt>
              <dd>
                {company.representativeTitle}　{company.representative}
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-28 shrink-0 text-[var(--text-muted)]">拠点</dt>
              <dd>北海道札幌市</dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-28 shrink-0 text-[var(--text-muted)]">事業領域</dt>
              <dd>{company.servicesLine}</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <div className="container mt-16 lg:mt-20">
        <Reveal delay={0.12}>
          <div className="rounded-sm border border-white/8 bg-[var(--bg)] p-8 md:p-10">
            <p className="text-xs tracking-[0.16em] text-[var(--accent)]">Representative</p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-medium tracking-[-0.02em]">
              発信の現場から培った、プロモーション力。
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
              代表・三好清佳自身も、Instagram{" "}
              <Link
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline underline-offset-2"
              >
                {company.instagramHandle}
              </Link>{" "}
              を通じて北海道の観光・グルメ・地域の魅力を継続的に発信しています。
              発信者として培ってきた「人が何に興味を持ち、どのような情報が届くのか」
              という実践的な知見を、企業・自治体・地域のプロモーションにも活かしています。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !min-h-11 !px-5 !text-sm"
              >
                {company.instagramHandle} を見る
              </Link>
              {company.instagramFollowers ? (
                <p className="text-sm text-[var(--text-muted)]">
                  フォロワー {company.instagramFollowers}
                </p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
