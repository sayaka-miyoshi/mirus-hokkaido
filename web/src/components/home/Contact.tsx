import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/home/ContactForm";
import { company } from "@/lib/company";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="section-label">Contact</p>
              <div className="mx-auto eyebrow-rule" />
              <h2 className="section-title">お問い合わせ</h2>
              <p className="mx-auto section-lead">
                企画・AI・DX・新規事業、および連携体制でのSNS・映像・広報支援に関するご相談は、
                下記フォームよりお送りください。内容を確認のうえ、ご連絡いたします。
              </p>
            </div>

            <div className="mt-10 rounded-sm border border-white/8 bg-[var(--bg-elevated)] p-6 sm:p-8">
              <ContactForm />
            </div>

            <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
              Instagram{" "}
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                {company.instagramHandle}
              </a>
              からもご連絡いただけます。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
