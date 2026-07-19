import { Reveal } from "@/components/motion/Reveal";
import { company, strategicPartner } from "@/lib/company";

/** TOP向けの要点のみ（詳細表は肥大化させない） */
const highlightRows = [
  { label: "会社名", value: company.name },
  { label: "代表者", value: `${company.representativeTitle}　${company.representative}` },
  { label: "所在地", value: "北海道札幌市中央区" },
  { label: "設立", value: company.established },
  { label: "事業内容", value: company.business },
] as const;

export function Company() {
  return (
    <section id="company" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Company</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title">会社概要</h2>
          <p className="section-lead">
            {strategicPartner.name}はグループ会社ではなく、{strategicPartner.label}
            （{strategicPartner.labelJa}）です。
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-sm border border-white/8 bg-[var(--bg-elevated)]">
            {highlightRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b border-white/8 px-5 py-4 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-6 sm:px-6"
              >
                <dt className="text-sm text-[var(--text-muted)]">{row.label}</dt>
                <dd className="text-sm leading-relaxed">{row.value}</dd>
              </div>
            ))}
            <div className="grid gap-1 border-b border-white/8 px-5 py-4 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-6 sm:px-6">
              <dt className="text-sm text-[var(--text-muted)]">{strategicPartner.label}</dt>
              <dd className="text-sm leading-relaxed">
                {strategicPartner.name}
                <span className="mt-1 block text-[var(--text-muted)]">
                  {strategicPartner.roles.join(" ／ ")}
                </span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
