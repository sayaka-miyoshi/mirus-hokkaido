import { Reveal } from "@/components/motion/Reveal";
import { strengths } from "@/lib/company";

export function Strength() {
  return (
    <section id="strength" className="section bg-[var(--bg-elevated)]">
      <div className="container">
        <Reveal>
          <p className="section-label">Strength</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title">MIRUSの強み</h2>
          <p className="section-lead">
            北海道をよく知り、SNS・インフルエンサー・コンテンツで魅力を届ける——
            その根拠となる強みをご紹介します。
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/8 bg-white/8 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-elevated)] md:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
