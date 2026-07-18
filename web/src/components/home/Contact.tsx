import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/lib/company";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Contact</p>
            <div className="mx-auto eyebrow-rule" />
            <h2 className="section-title">お問い合わせ</h2>
            <p className="mx-auto section-lead">
              企画・AI・DX・新規事業、および連携体制でのSNS・映像・広報支援に関するご相談は、メールまたはお電話よりご連絡ください。
            </p>

            <div className="mt-12 space-y-4 rounded-sm border border-white/8 bg-[var(--bg-elevated)] p-8 text-left">
              <p className="flex flex-col gap-1 border-b border-white/8 pb-4 sm:flex-row sm:gap-6">
                <span className="w-24 shrink-0 text-sm text-[var(--text-muted)]">メール</span>
                <a href={`mailto:${company.email}`} className="text-[var(--accent)] hover:underline">
                  {company.email}
                </a>
              </p>
              <p className="flex flex-col gap-1 border-b border-white/8 pb-4 sm:flex-row sm:gap-6">
                <span className="w-24 shrink-0 text-sm text-[var(--text-muted)]">電話</span>
                <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
              </p>
              <p className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <span className="w-24 shrink-0 text-sm text-[var(--text-muted)]">所在地</span>
                <span>{company.addressFull}</span>
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={`mailto:${company.email}`} className="btn btn-primary">
                メールで問い合わせ
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Instagram {company.instagramHandle}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
