import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function HomeInsights() {
  return (
    <section id="insights" className="section !py-16 md:!py-20">
      <div className="container">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-sm border border-white/8 bg-[var(--bg-elevated)] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
            <div>
              <p className="section-label mb-3">Insights</p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                MIRUSの知見を発信するオウンドメディア
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                AI / SNS / DX / Marketing / Local。ブログではなく、現場の設計知を届けます。
              </p>
            </div>
            <Link href="/insights" className="btn btn-ghost self-start md:self-auto">
              Insightsを見る
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
