"use client";

import { useEffect, useState } from "react";
import { MirusLogo } from "@/components/brand/MirusLogo";
import {
  MockHeadline,
  MockHeroMedia,
  MockHorizontalWorks,
  MockParallaxImage,
  MockReveal,
  type MockWorkCard,
} from "@/components/design-mock/MockMotion";
import { company, services, strengths, targetClients } from "@/lib/company";

type MockTheme = "cool" | "warm";

const THEME_STORAGE_KEY = "mirus-design-mock-theme";

const mockWorks: MockWorkCard[] = [
  {
    id: "1",
    category: "Government",
    title: "北海道公式デジタル広報紙",
    description: "観光大使として北海道の魅力を公式媒体で発信。",
    image: "/images/news/sapporo-cci-seminar.png",
  },
  {
    id: "2",
    category: "Inbound",
    title: "海外旅行促進事業（シンガポール）",
    description: "現地取材とSNS発信でインバウンド誘客を支援。",
    image: "/images/works/watanabe.png",
  },
  {
    id: "3",
    category: "Tourism",
    title: "檜山地域の観光プロモーション",
    description: "地域観光のリーチ・保存を伸ばすSNS設計。",
    image: "/images/news/sapporo-instagram-training.png",
  },
  {
    id: "4",
    category: "Speaking",
    title: "札幌市職員向け Instagram 研修",
    description: "自治体SNSの伝わる発信を現場でレクチャー。",
    image: "/images/works/watanabe-2.png",
  },
  {
    id: "5",
    category: "Speaking",
    title: "商工会議所セミナー登壇",
    description: "企業とインフルエンサー連携の設計を共有。",
    image: "/images/representative.png",
  },
  {
    id: "6",
    category: "Regional",
    title: "函館・道南コンテンツ発信",
    description: "地域コンテンツをInstagramで継続的に届ける。",
    image: "/images/news/sapporo-cci-seminar.png",
  },
];

export function DesignMockPage() {
  const [theme, setTheme] = useState<MockTheme>("cool");

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "cool" || saved === "warm") setTheme(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.body.style.background = "";
  }, [theme]);

  const setThemeSafe = (next: MockTheme) => {
    setTheme(next);
  };

  return (
    <div className="design-mock-body" data-theme={theme}>
      <div className="dm-banner">
        <span>
          デザインモック（本番未反映）— 配色2種 × スクロール演出の比較用
        </span>
        <div className="dm-theme-switch">
          <span>配色</span>
          <button
            type="button"
            className="dm-theme-btn"
            data-active={theme === "cool"}
            onClick={() => setThemeSafe("cool")}
          >
            Cool Gray
          </button>
          <button
            type="button"
            className="dm-theme-btn"
            data-active={theme === "warm"}
            onClick={() => setThemeSafe("warm")}
          >
            Warm Off-White
          </button>
          <span style={{ marginLeft: 8 }}>
            <a href="https://mirus-hokkaido.jp/" target="_blank" rel="noopener noreferrer">
              本番TOP
            </a>
            {" · "}
            <a
              href="https://mirus-hokkaido.jp/sayaka-miyoshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              プロフィール
            </a>
          </span>
        </div>
      </div>

      <header className="dm-header">
        <div
          className="dm-container"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a href="#top" className="dm-brand" aria-label="MIRUS">
            <MirusLogo height={40} priority />
          </a>
          <nav className="dm-nav" aria-label="モックナビ">
            <a href="#philosophy">Philosophy</a>
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="dm-btn dm-btn-primary">
            Contact
          </a>
        </div>
      </header>

      <section id="top" className="dm-hero">
        <MockHeroMedia src="/images/representative.png" alt="" />
        <div className="dm-container dm-hero-content">
          <MockReveal>
            <p className="dm-hero-kicker">{company.name}</p>
            <h1 className="dm-hero-title">{company.heroHeadline}</h1>
            <p className="dm-hero-sub">{company.heroSubcopy}</p>
            <p className="dm-hero-tag">{company.tagline}</p>
            <div className="dm-hero-cta">
              <a href="#contact" className="dm-btn dm-btn-primary">
                プロモーション・企画のご相談はこちら
              </a>
              <a href="#service" className="dm-btn dm-btn-ghost">
                事業内容を見る
              </a>
            </div>
          </MockReveal>
        </div>
      </section>

      <section id="philosophy" className="dm-section dm-tone-b">
        <div className="dm-container">
          <MockHeadline>
            <p className="dm-label">Philosophy</p>
            <h2 className="dm-title" style={{ maxWidth: "14ch" }}>
              見る。伝える。つなぐ。
              <br />
              北海道の物語を、次の誰かへ。
            </h2>
          </MockHeadline>
          <MockReveal delay={0.08}>
            <p className="dm-lead" style={{ marginTop: 28, maxWidth: "40rem", fontSize: "1.125rem" }}>
              MIRUSは、SNS・インフルエンサー・映像・多言語コンテンツを通じて、
              北海道の企業・自治体・地域の魅力を国内外へ届けるプロモーション会社です。
            </p>
            <ul style={{ marginTop: 32, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
              {targetClients.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    color: "var(--m-text-secondary)",
                    fontSize: "0.9375rem",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      marginTop: 10,
                      borderRadius: 999,
                      background: "var(--m-accent)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </MockReveal>
        </div>
      </section>

      <section id="about" className="dm-section dm-tone-a">
        <div className="dm-container dm-split">
          <MockReveal>
            <MockParallaxImage
              src="/images/representative.png"
              alt="三好さやかのプロフィール写真"
              portrait
            />
          </MockReveal>
          <div>
            <MockHeadline>
              <p className="dm-label">About MIRUS</p>
              <h2 className="dm-title">北海道の魅力を、届けるプロモーション。</h2>
            </MockHeadline>
            <MockReveal delay={0.1}>
              <p className="dm-lead">
                {company.name}は、インフルエンサーマーケティング、SNS・コンテンツ制作、
                インバウンド・海外プロモーションを中心に、企業・自治体・地域の魅力発信を支援します。
              </p>
              <dl style={{ marginTop: 36, borderTop: "1px solid var(--m-border)", paddingTop: 24 }}>
                {[
                  ["代表", `${company.representativeTitle}　三好さやか`],
                  ["拠点", "北海道札幌市"],
                  ["事業領域", company.servicesLine],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "100px 1fr",
                      gap: 16,
                      marginBottom: 14,
                      fontSize: "0.9375rem",
                    }}
                  >
                    <dt style={{ color: "var(--m-text-muted)" }}>{label}</dt>
                    <dd style={{ margin: 0 }}>{value}</dd>
                  </div>
                ))}
              </dl>
              <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  href="https://mirus-hokkaido.jp/sayaka-miyoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm-btn dm-btn-primary"
                >
                  プロフィールを見る
                </a>
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm-btn dm-btn-ghost"
                >
                  {company.instagramHandle}
                </a>
              </div>
            </MockReveal>
          </div>
        </div>
      </section>

      <section id="service" className="dm-section dm-tone-c">
        <div className="dm-container">
          <MockHeadline>
            <p className="dm-label">Service</p>
            <h2 className="dm-title">事業内容</h2>
          </MockHeadline>
          <MockReveal delay={0.05}>
            <p className="dm-lead">
              MIRUSが企画・プロデュースの主体となり、インフルエンサー施策からSNS・コンテンツ制作、
              インバウンド・海外プロモーション、地域・観光プロモーションまで一貫して支援します。
            </p>
          </MockReveal>
          <div className="dm-card-grid">
            {services.map((item, index) => (
              <MockReveal key={item.number} delay={index * 0.04}>
                <article className="dm-card">
                  <p className="dm-card-num">{item.number}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </MockReveal>
            ))}
          </div>
        </div>
      </section>

      <div id="works">
        <MockHorizontalWorks items={mockWorks} />
      </div>

      <section className="dm-section dm-tone-a">
        <div className="dm-container">
          <MockHeadline>
            <p className="dm-label">Strength</p>
            <h2 className="dm-title">MIRUSの強み</h2>
          </MockHeadline>
          <MockReveal>
            <p className="dm-lead">
              北海道をよく知り、SNS・インフルエンサー・コンテンツで魅力を届ける——その根拠となる強みです。
            </p>
          </MockReveal>
          <div className="dm-card-grid">
            {strengths.map((item, index) => (
              <MockReveal key={item.title} delay={index * 0.04}>
                <article className="dm-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </MockReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dm-section dm-tone-d">
        <div className="dm-container dm-split">
          <MockReveal>
            <MockParallaxImage
              src="/images/news/sapporo-instagram-training.png"
              alt="研修・講演のイメージ"
            />
          </MockReveal>
          <MockReveal delay={0.08}>
            <p className="dm-label">Compare themes</p>
            <h2 className="dm-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              {theme === "cool" ? "Cool Gray" : "Warm Off-White"}
            </h2>
            <p className="dm-lead">
              {theme === "cool"
                ? "ライトグレー基調。現代的でクリーンな印象です。上部バナーから Warm Off-White に切り替えできます。"
                : "温かみのあるオフホワイト基調。紙や木の質感に近い落ち着いた印象です。上部バナーから Cool Gray に戻せます。"}
              スクロール演出（Heroズーム / 見出し / Works横展開）は両配色で共通です。
            </p>
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
              <button
                type="button"
                className="dm-btn dm-btn-ghost"
                onClick={() => setThemeSafe("cool")}
              >
                Cool Gray を見る
              </button>
              <button
                type="button"
                className="dm-btn dm-btn-ghost"
                onClick={() => setThemeSafe("warm")}
              >
                Warm Off-White を見る
              </button>
            </div>
          </MockReveal>
        </div>
      </section>

      <section id="contact" className="dm-section dm-tone-a">
        <div className="dm-container" style={{ textAlign: "center", maxWidth: 720 }}>
          <MockHeadline>
            <p className="dm-label">Contact</p>
            <h2 className="dm-title">北海道から、新しい発信を。</h2>
          </MockHeadline>
          <MockReveal>
            <p className="dm-lead" style={{ marginInline: "auto" }}>
              SNS・インフルエンサー・インバウンドプロモーション、コンテンツ制作、
              企画・プロジェクトのご相談は、本番サイトのお問い合わせフォームへ。
            </p>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <a
                href="https://mirus-hokkaido.jp/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="dm-btn dm-btn-primary"
              >
                本番のお問い合わせへ
              </a>
              <a
                href="https://mirus-hokkaido.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="dm-btn dm-btn-ghost"
              >
                本番TOPへ
              </a>
            </div>
          </MockReveal>
        </div>
      </section>

      <footer className="dm-footer">
        <div className="dm-container dm-footer-grid">
          <div>
            <div className="dm-brand">
              <MirusLogo height={48} />
            </div>
            <p style={{ marginTop: 14, maxWidth: 320, lineHeight: 1.8 }}>
              {company.tagline}
              <br />
              {company.heroSubcopy}
            </p>
          </div>
          <div>
            <p style={{ letterSpacing: "0.16em", fontSize: "0.7rem", color: "var(--m-text-muted)" }}>
              NAVIGATE
            </p>
            <ul style={{ marginTop: 14, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
              <li>
                <a href="https://mirus-hokkaido.jp/" target="_blank" rel="noopener noreferrer">
                  本番サイト
                </a>
              </li>
              <li>
                <a
                  href="https://mirus-hokkaido.jp/sayaka-miyoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  プロフィール
                </a>
              </li>
              <li>
                <a href="https://mirus-hokkaido.jp/news" target="_blank" rel="noopener noreferrer">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p style={{ letterSpacing: "0.16em", fontSize: "0.7rem", color: "var(--m-text-muted)" }}>
              NOTE
            </p>
            <p style={{ marginTop: 14, lineHeight: 1.8 }}>
              確認用モックです。正式ロゴは `/brand/` に一元管理。本番ヘッダーへの適用は承認後です。
            </p>
          </div>
        </div>
      </footer>

      <aside className="dm-proposals">
        <div className="dm-container">
          <h2>確認ポイント</h2>
          <ol>
            <li>
              <strong>正式ロゴ</strong>
              — ヘッダー／フッターに公式マークを配置（形状・比率は変更なし）。
            </li>
            <li>
              <strong>Cool Gray / Warm Off-White</strong>
              — 上部バナーで配色切替。スクロール演出は共通。
            </li>
            <li>
              <strong>Works横展開・写真ズーム・大見出し</strong>
              — 両テーマで同じ動きを比較できます。
            </li>
          </ol>
        </div>
      </aside>
    </div>
  );
}
