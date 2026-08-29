import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/home/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="section-label">Contact</p>
              <div className="mx-auto eyebrow-rule" />
              <h2 className="section-title">北海道から、新しい発信を。</h2>
              <p className="mx-auto section-lead">
                SNS・インフルエンサー・インバウンドプロモーション、コンテンツ制作、
                企画・プロジェクトに関するご相談は、下記フォームよりお送りください。
                内容を確認のうえ、ご連絡いたします。
              </p>
            </div>

            <div className="mt-10 rounded-sm border border-white/8 bg-[var(--bg-elevated)] p-6 sm:p-8">
              <ContactForm />
            </div>

            <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
              プロモーション・企画のご相談はこちらから。お気軽にお問い合わせください。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
