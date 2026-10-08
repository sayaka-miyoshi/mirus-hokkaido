"use client";

import Image from "next/image";
import Link from "next/link";
import { MirusLogo } from "@/components/brand/MirusLogo";
import { MockBanner, useMockTheme } from "@/components/design-mock/MockChrome";
import { mockMedia } from "@/components/design-mock/mockData";

export function DesignMockHub() {
  const { theme, setTheme } = useMockTheme("warm");

  return (
    <div className="design-mock-body" data-theme={theme} data-concept="hub">
      <MockBanner concept="hub" theme={theme} onTheme={setTheme} />

      <main className="dm-hub">
        <div className="dm-container dm-hub-intro">
          <div className="dm-brand">
            <MirusLogo height={56} priority />
          </div>
          <p className="dm-hero-kicker" style={{ marginTop: 28 }}>
            Design mock comparison
          </p>
          <h1 className="dm-hub-title">TOPデザイン 2案</h1>
          <p className="dm-lead" style={{ marginTop: 16, maxWidth: "36rem" }}>
            本番サイトは変更していません。A / B を開き、PC・スマホでスクロール演出と配色を比較してください。
          </p>
        </div>

        <div className="dm-container dm-hub-cards">
          <Link href="/design-mock/a" className="dm-hub-card">
            <div className="dm-hub-card-media">
              <Image
                src={mockMedia.hokkaidoContent}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="dm-hub-card-body">
              <p className="dm-label">Concept A</p>
              <h2>Minimal Editorial</h2>
              <p>余白重視。小さなタイポと英語コピー。写真は下段で大きく。</p>
              <span className="dm-hub-link">A案を開く →</span>
            </div>
          </Link>

          <Link href="/design-mock/b" className="dm-hub-card">
            <div className="dm-hub-card-media">
              <Image
                src={mockMedia.interview}
                alt=""
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="dm-hub-card-body">
              <p className="dm-label">Concept B</p>
              <h2>Creative / Works</h2>
              <p>映像・実績ビジュアルを主役に。モザイクとズームで構成。</p>
              <span className="dm-hub-link">B案を開く →</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
