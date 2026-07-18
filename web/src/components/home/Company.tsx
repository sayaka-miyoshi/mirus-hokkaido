import { Reveal } from "@/components/motion/Reveal";
import { company, strategicPartner } from "@/lib/company";

const rows = [
  { label: "会社名", value: company.name },
  { label: "代表者", value: `${company.representativeTitle}　${company.representative}` },
  { label: "所在地", value: company.addressFull },
  { label: "設立", value: company.established },
  { label: "法人番号", value: company.corporateNumber },
  { label: "事業内容", value: company.business },
  {
    label: strategicPartner.label,
    value: `${strategicPartner.name}（${strategicPartner.labelJa}）／ ${strategicPartner.roles.join("・")}`,
  },
] as const;

export function Company() {
  return (
    <section id="company" className="section bg-[var(--bg-elevated)]">
      <div className="container">
        <Reveal>
          <p className="section-label">Company</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title">会社概要</h2>
          <p className="section-lead">
            {strategicPartner.name}はグループ会社ではなく、{strategicPartner.label}（{strategicPartner.labelJa}）です。
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-sm border border-white/8 bg-[var(--bg)]">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-white/8 px-6 py-5 last:border-b-0 md:grid-cols-[160px_1fr] md:gap-8 md:px-8"
              >
                <dt className="text-sm text-[var(--text-muted)]">{row.label}</dt>
                <dd className="text-sm leading-relaxed md:text-base">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
