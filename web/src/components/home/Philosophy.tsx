import { Reveal } from "@/components/motion/Reveal";
import { targetClients } from "@/lib/company";

export function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="container">
        <Reveal>
          <p className="section-label">Philosophy</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title max-w-4xl">
            見る。伝える。つなぐ。
            <br />
            北海道の物語を、次の誰かへ。
          </h2>
          <p className="section-lead mt-8 max-w-3xl text-[1.125rem] md:text-[1.25rem]">
            MIRUSは、SNS・インフルエンサー・映像・多言語コンテンツを通じて、
            北海道の企業・自治体・地域の魅力を国内外へ届けるプロモーション会社です。
            大きな広告よりも、現場に根ざした物語と、継続して届く発信を大切にしています。
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 max-w-3xl">
            <p className="text-xs tracking-[0.16em] text-[var(--text-muted)]">こんなご相談に</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {targetClients.map((client) => (
                <li key={client} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
