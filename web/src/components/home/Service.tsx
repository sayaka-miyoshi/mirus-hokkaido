import { Reveal } from "@/components/motion/Reveal";
import { services, strategicPartner } from "@/lib/company";

export function Service() {
  return (
    <section id="service" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Service</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title">事業内容</h2>
          <p className="section-lead">
            MIRUSは企画・AI・DX・新規事業を担い、SNS運用・映像・自治体広報は{strategicPartner.label}と連携して提供します。
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/8 bg-white/8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="h-full bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-elevated)] md:p-10">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.18em] text-[var(--accent)]">
                    {item.number}
                  </p>
                  <span className="text-[0.65rem] tracking-[0.14em] text-[var(--text-muted)]">
                    {item.owner === "MIRUS" ? "MIRUS" : strategicPartner.label}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium tracking-[-0.02em]">
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
