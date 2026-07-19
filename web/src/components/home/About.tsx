import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { company, strategicPartner } from "@/lib/company";

export function About() {
  return (
    <section id="about" className="section bg-[var(--bg-elevated)]">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
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
          <h2 className="section-title">企画・AI・DXから、北海道の次をつくる。</h2>
          <p className="section-lead">
            {company.name}は、{company.business}を軸に、企業・自治体・地域の挑戦を設計します。
            現場の発信実行は{strategicPartner.label}（{strategicPartner.labelJa}）の
            {strategicPartner.name}と連携し、企画から実装までつなぎます。
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
    </section>
  );
}
