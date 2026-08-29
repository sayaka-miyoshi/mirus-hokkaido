"use client";

import Link from "next/link";
import { company } from "@/lib/company";
import { HeroBrandCanvas } from "@/components/home/HeroBrandCanvas";

export function Hero() {
  return (
    <section className="hero">
      <div className="heroVisual" aria-hidden>
        <HeroBrandCanvas />
      </div>

      <div className="container heroMessage">
        <p className="heroBrand">{company.name}</p>
        <h1 className="heroHeadline">
          <span className="block max-[360px]:whitespace-normal whitespace-nowrap">
            北海道と世界を、
          </span>
          <span className="block">コンテンツでつなぐ。</span>
        </h1>
        <p className="heroHeadlineEn">{company.heroHeadlineEn}</p>
        <p className="heroServices">{company.heroSubcopy}</p>
        <p className="mt-6 font-[family-name:var(--font-display)] text-sm tracking-[0.14em] text-[var(--accent)]">
          {company.tagline}
        </p>
        <div className="heroCta">
          <Link href="/#contact" className="btn btn-primary">
            プロモーション・企画のご相談はこちら
          </Link>
          <Link href="/#service" className="btn btn-ghost">
            事業内容を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
