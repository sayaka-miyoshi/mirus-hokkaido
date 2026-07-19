import { Reveal } from "@/components/motion/Reveal";

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
            MIRUSは、企画・AI・DX・新規事業を通じて、企業・地域・人の挑戦を設計します。
            大きな広告よりも、現場に根ざした物語と、継続して届く仕組みづくりを大切にしています。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
