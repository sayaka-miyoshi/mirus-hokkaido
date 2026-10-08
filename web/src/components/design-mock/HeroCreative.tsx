"use client";

import Image from "next/image";
import {
  MockHeadline,
  MockHeroMedia,
  MockParallaxImage,
  MockReveal,
} from "@/components/design-mock/MockMotion";
import { mockCopy, mockMedia } from "@/components/design-mock/mockData";

/** B案: 映像・実績を主役にしたクリエイティブ — 写真コラージュと強いビジュアル */
export function HeroCreative() {
  return (
    <>
      <section id="top" className="dm-hero dm-hero-b">
        <MockHeroMedia
          src={mockMedia.interview}
          alt="撮影・インタビュー現場のイメージ"
          objectPosition="center 30%"
        />
        <div className="dm-container dm-hero-b-content">
          <MockReveal>
            <p className="dm-hero-kicker">{mockCopy.enKicker}</p>
            <p className="dm-hero-en">{mockCopy.enLineB}</p>
            <h1 className="dm-hero-title dm-hero-title-sm">{mockCopy.jaHeadline}</h1>
            <p className="dm-hero-sub">{mockCopy.jaSub}</p>
            <div className="dm-hero-cta">
              <a href="#works" className="dm-btn dm-btn-primary">
                実績を見る
              </a>
              <a href="#contact" className="dm-btn dm-btn-ghost dm-btn-on-media">
                Contact
              </a>
            </div>
          </MockReveal>
        </div>
      </section>

      <section className="dm-section dm-tone-b dm-creative-mosaic">
        <div className="dm-container">
          <MockHeadline>
            <p className="dm-label">Production</p>
            <p className="dm-en-line">Work in the frame</p>
            <h2 className="dm-title dm-title-md">映像・SNS・現場の断片。</h2>
          </MockHeadline>
        </div>
        <div className="dm-mosaic">
          <MockReveal className="dm-mosaic-item dm-mosaic-large">
            <div className="dm-mosaic-frame">
              <Image
                src={mockMedia.hokkaidoContent}
                alt="北海道コンテンツ発信"
                fill
                className="object-cover object-top"
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
            <p>Hokkaido content</p>
          </MockReveal>
          <MockReveal delay={0.06} className="dm-mosaic-item">
            <div className="dm-mosaic-frame">
              <Image
                src={mockMedia.sapporoReach}
                alt="Sapporo / reach の実績イメージ"
                fill
                className="object-cover object-top"
                sizes="40vw"
              />
            </div>
            <p>Reach & destination</p>
          </MockReveal>
          <MockReveal delay={0.1} className="dm-mosaic-item">
            <div className="dm-mosaic-frame">
              <Image
                src={mockMedia.shortForm}
                alt="ショート動画制作のイメージ"
                fill
                className="object-cover object-top"
                sizes="40vw"
              />
            </div>
            <p>Short-form production</p>
          </MockReveal>
          <MockReveal delay={0.14} className="dm-mosaic-item dm-mosaic-wide">
            <div className="dm-mosaic-frame">
              <Image
                src={mockMedia.municipal}
                alt="自治体向けコンテンツ"
                fill
                className="object-cover object-top"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <p>Public / regional SNS</p>
          </MockReveal>
        </div>
      </section>

      <section className="dm-section dm-tone-a">
        <div className="dm-container dm-split">
          <MockReveal>
            <MockParallaxImage
              src={mockMedia.clientSns}
              alt="店舗・ブランドSNSのイメージ"
            />
          </MockReveal>
          <MockReveal delay={0.08}>
            <p className="dm-label">Creative direction</p>
            <p className="dm-en-line">Proof over portrait</p>
            <h2 className="dm-title dm-title-md">実績のビジュアルが、第一印象になる。</h2>
            <p className="dm-lead">
              TOPでは代表者の顔ではなく、制作物・発信・リーチの現場を大きく配置。
              スクロールでズームと横展開が続き、WORKSへ自然につながります。
            </p>
          </MockReveal>
        </div>
      </section>
    </>
  );
}
