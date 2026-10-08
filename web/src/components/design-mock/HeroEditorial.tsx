"use client";

import {
  MockHeadline,
  MockHeroMedia,
  MockParallaxImage,
  MockReveal,
} from "@/components/design-mock/MockMotion";
import { mockCopy, mockMedia } from "@/components/design-mock/mockData";

/** A案: ミニマル・エディトリアル — 余白と小さなタイポ、写真は下段で大きく */
export function HeroEditorial() {
  return (
    <>
      <section id="top" className="dm-hero dm-hero-a">
        <div className="dm-container dm-hero-a-grid">
          <MockReveal>
            <p className="dm-hero-kicker">{mockCopy.enKicker}</p>
            <p className="dm-hero-en">{mockCopy.enLine}</p>
            <h1 className="dm-hero-title dm-hero-title-sm">{mockCopy.jaHeadline}</h1>
            <p className="dm-hero-sub">{mockCopy.jaSub}</p>
            <p className="dm-hero-tag">{mockCopy.tagline}</p>
            <div className="dm-hero-cta">
              <a href="#contact" className="dm-btn dm-btn-primary">
                ご相談はこちら
              </a>
              <a href="#works" className="dm-btn dm-btn-ghost">
                Works
              </a>
            </div>
          </MockReveal>

          <MockReveal delay={0.12} className="dm-hero-a-aside">
            <p className="dm-aside-label">Focus</p>
            <ul className="dm-aside-list">
              <li>Influencer</li>
              <li>Inbound</li>
              <li>SNS / Film</li>
              <li>Regional</li>
            </ul>
          </MockReveal>
        </div>
      </section>

      <section className="dm-hero-stage" aria-label="メインビジュアル">
        <MockHeroMedia
          src={mockMedia.hokkaidoContent}
          alt="北海道コンテンツ制作の実績イメージ"
          objectPosition="center 18%"
          className="dm-hero-stage-media"
        />
        <div className="dm-container dm-hero-stage-caption">
          <MockHeadline>
            <p className="dm-label">Selected frame</p>
            <h2 className="dm-title dm-title-sm">北海道の現場から、届く映像へ。</h2>
          </MockHeadline>
        </div>
      </section>

      <section className="dm-section dm-tone-a dm-editorial-strip">
        <div className="dm-container dm-strip-grid">
          <MockReveal>
            <MockParallaxImage
              src={mockMedia.municipal}
              alt="自治体・地域向けコンテンツのイメージ"
            />
          </MockReveal>
          <MockReveal delay={0.08}>
            <p className="dm-label">Editorial note</p>
            <p className="dm-en-line">Quiet space. Clear story.</p>
            <p className="dm-lead">
              大きな顔写真ではなく、場所・制作・発信の現場を主役に。
              余白を保ちながら、写真は大きく、文字は読みやすく。
            </p>
          </MockReveal>
        </div>
      </section>
    </>
  );
}
