import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCover } from "@/components/content/ArticleCover";
import { works } from "@/lib/company";

export function Works() {
  return (
    <section id="works" className="section bg-[var(--bg-elevated)]">
      <div className="container">
        <Reveal>
          <p className="section-label">Works</p>
          <div className="eyebrow-rule" />
          <h2 className="section-title">実績</h2>
          <p className="section-lead">
            Strategic Partner（連携企業）による支援事例を掲載しています。
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8">
          {works.map((work) => (
            <Reveal key={work.client}>
              <article className="grid overflow-hidden rounded-sm border border-white/8 bg-[var(--bg)] lg:grid-cols-2">
                <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[360px]">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={`${work.client}の実績イメージ`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <ArticleCover
                      category={work.category}
                      title={work.client}
                      className="h-full min-h-[280px] rounded-none border-0 aspect-auto"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-xs tracking-[0.16em] text-[var(--accent)]">{work.category}</p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.02em]">
                    {work.client}
                  </h3>
                  <p className="mt-4 text-[var(--text-secondary)]">{work.description}</p>
                  <ul className="mt-8 space-y-3 border-t border-white/8 pt-6 text-sm">
                    {work.metrics.map((metric) => (
                      <li key={metric.label} className="flex gap-4">
                        <span className="w-16 font-[family-name:var(--font-display)] tracking-[0.12em] text-[var(--text-muted)]">
                          {metric.label}
                        </span>
                        <span>{metric.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
