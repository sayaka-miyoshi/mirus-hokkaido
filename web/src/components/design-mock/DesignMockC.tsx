"use client";

import Link from "next/link";
import { LogoOpenAperture } from "@/components/design-mock/LogoOpenAperture";
import { LogoOpenExpand } from "@/components/design-mock/LogoOpenExpand";
import {
  MockAboutCeo,
  MockContact,
  MockPhilosophy,
} from "@/components/design-mock/MockSharedSections";
import { MockBanner, MockFooter, useMockTheme, type MockConcept } from "@/components/design-mock/MockChrome";
import { MirusLogo } from "@/components/brand/MirusLogo";

export type ConceptCPattern = "1" | "2";

function ConceptCHeader({ pattern }: { pattern: ConceptCPattern }) {
  const base = `/design-mock/c/${pattern}`;
  return (
    <header className="dm-header dm-header-c">
      <div className="dm-container dm-header-inner">
        <a href={`${base}#top`} className="dm-brand" aria-label="MIRUS">
          <MirusLogo height={34} priority />
        </a>
        <nav className="dm-nav" aria-label="モックナビ">
          <a href={`${base}#philosophy`}>Philosophy</a>
          <a href={`${base}#about`}>About</a>
          <a href={`${base}#contact`}>Contact</a>
          <Link href="/design-mock/c">C 比較</Link>
        </nav>
        <a href={`${base}#contact`} className="dm-btn dm-btn-primary dm-header-cta">
          Contact
        </a>
      </div>
    </header>
  );
}

export function DesignMockC({ pattern }: { pattern: ConceptCPattern }) {
  const { theme, setTheme } = useMockTheme("warm");
  const concept = (pattern === "1" ? "c1" : "c2") as MockConcept;

  return (
    <div className="design-mock-body" data-theme={theme} data-concept={concept}>
      <MockBanner concept={concept} theme={theme} onTheme={setTheme} />
      <ConceptCHeader pattern={pattern} />

      {pattern === "1" ? <LogoOpenExpand /> : <LogoOpenAperture />}

      <section className="dm-section dm-tone-a dm-c-note">
        <div className="dm-container" style={{ maxWidth: 640 }}>
          <p className="dm-label">Concept C — Pattern {pattern}</p>
          <h2 className="dm-title dm-title-md">
            {pattern === "1" ? "Expand through M" : "Aperture / paper cut"}
          </h2>
          <p className="dm-lead">
            {pattern === "1"
              ? "公式ロゴが現れたあと、Mシンボルが拡大し、その形状をマスクとしてタイポグラフィへつなぎます。"
              : "ロゴ登場後、オフホワイトのヴェールにMの窓が開き、余白の中へ文字が着地します。"}
          </p>
          <div className="dm-inline-cta" style={{ marginTop: 24 }}>
            <Link href="/design-mock/c/1" className="dm-btn dm-btn-ghost">
              C1 Expand
            </Link>
            <Link href="/design-mock/c/2" className="dm-btn dm-btn-ghost">
              C2 Aperture
            </Link>
          </div>
        </div>
      </section>

      <MockPhilosophy />
      <MockAboutCeo />
      <MockContact />

      <aside className="dm-proposals">
        <div className="dm-container">
          <h2>C案の確認ポイント</h2>
          <ol>
            <li>
              <strong>公式M</strong>
              — 形状は変更せず、切り出しアセット＋CSS transform / SVG mask のみ。
            </li>
            <li>
              <strong>2パターン</strong>
              — C1 Expand（スタンプ拡大）と C2 Aperture（紙の窓）を比較。
            </li>
            <li>
              <strong>アクセシビリティ</strong>
              — prefers-reduced-motion では静的ロゴ＋タイポにフォールバック。
            </li>
          </ol>
        </div>
      </aside>

      <MockFooter />
    </div>
  );
}

export function DesignMockCHub() {
  const { theme, setTheme } = useMockTheme("warm");

  return (
    <div className="design-mock-body" data-theme={theme} data-concept="c">
      <MockBanner concept="c" theme={theme} onTheme={setTheme} />
      <main className="dm-hub">
        <div className="dm-container dm-hub-intro">
          <div className="dm-brand">
            <MirusLogo height={56} priority />
          </div>
          <p className="dm-hero-kicker" style={{ marginTop: 28 }}>
            Concept C
          </p>
          <h1 className="dm-hub-title">ロゴオープニング 2パターン</h1>
          <p className="dm-lead" style={{ marginTop: 16, maxWidth: "36rem" }}>
            公式Mシンボルを起点にしたスクロール演出です。写真を主役にせず、ロゴ・文字・余白・モーションで構成しています。
          </p>
        </div>

        <div className="dm-container dm-hub-cards">
          <Link href="/design-mock/c/1" className="dm-hub-card dm-hub-card-plain">
            <div className="dm-hub-card-body">
              <p className="dm-label">Pattern C1</p>
              <h2>Expand through M</h2>
              <p>ロゴ登場 → Mが滑らかに拡大 → Mマスクからタイポグラフィへ。</p>
              <span className="dm-hub-link">C1を開く →</span>
            </div>
          </Link>
          <Link href="/design-mock/c/2" className="dm-hub-card dm-hub-card-plain">
            <div className="dm-hub-card-body">
              <p className="dm-label">Pattern C2</p>
              <h2>Aperture / paper cut</h2>
              <p>ロゴ登場 → 紙のヴェールにMの窓が開く → 余白へ文字が着地。</p>
              <span className="dm-hub-link">C2を開く →</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
