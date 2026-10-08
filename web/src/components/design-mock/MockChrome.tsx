"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { MirusLogo } from "@/components/brand/MirusLogo";
import { company } from "@/lib/company";

export type MockTheme = "cool" | "warm";
export type MockConcept = "a" | "b";

const THEME_KEY = "mirus-design-mock-theme";

export function useMockTheme(defaultTheme: MockTheme = "warm") {
  const [theme, setTheme] = useState<MockTheme>(defaultTheme);

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "cool" || saved === "warm") setTheme(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return { theme, setTheme };
}

export function MockBanner({
  concept,
  theme,
  onTheme,
}: {
  concept: MockConcept | "hub";
  theme: MockTheme;
  onTheme: (t: MockTheme) => void;
}) {
  return (
    <div className="dm-banner">
      <span>デザインモック（本番未反映）— TOP 2案を比較</span>
      <div className="dm-banner-controls">
        <div className="dm-concept-switch" role="tablist" aria-label="デザイン案">
          <Link href="/design-mock" className="dm-concept-btn" data-active={concept === "hub"}>
            比較
          </Link>
          <Link href="/design-mock/a" className="dm-concept-btn" data-active={concept === "a"}>
            A エディトリアル
          </Link>
          <Link href="/design-mock/b" className="dm-concept-btn" data-active={concept === "b"}>
            B クリエイティブ
          </Link>
        </div>
        <div className="dm-theme-switch">
          <span>配色</span>
          <button
            type="button"
            className="dm-theme-btn"
            data-active={theme === "warm"}
            onClick={() => onTheme("warm")}
          >
            Off-White
          </button>
          <button
            type="button"
            className="dm-theme-btn"
            data-active={theme === "cool"}
            onClick={() => onTheme("cool")}
          >
            Cool Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export function MockHeader({ concept }: { concept: MockConcept }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefix = concept === "a" ? "/design-mock/a" : "/design-mock/b";

  return (
    <header className="dm-header">
      <div className="dm-container dm-header-inner">
        <a href={`${prefix}#top`} className="dm-brand" aria-label="MIRUS">
          <MirusLogo height={36} priority />
        </a>

        <nav className="dm-nav" aria-label="モックナビ">
          <a href={`${prefix}#philosophy`}>Philosophy</a>
          <a href={`${prefix}#about`}>About</a>
          <a href={`${prefix}#service`}>Service</a>
          <a href={`${prefix}#works`}>Works</a>
          <a href={`${prefix}#contact`}>Contact</a>
        </nav>

        <a href={`${prefix}#contact`} className="dm-btn dm-btn-primary dm-header-cta">
          Contact
        </a>

        <button
          type="button"
          className="dm-menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <div className="dm-mobile-nav">
          <a href={`${prefix}#philosophy`} onClick={() => setMenuOpen(false)}>
            Philosophy
          </a>
          <a href={`${prefix}#about`} onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href={`${prefix}#service`} onClick={() => setMenuOpen(false)}>
            Service
          </a>
          <a href={`${prefix}#works`} onClick={() => setMenuOpen(false)}>
            Works
          </a>
          <a href={`${prefix}#contact`} onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function MockFooter() {
  return (
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
          <p className="dm-footer-label">COMPARE</p>
          <ul className="dm-footer-list">
            <li>
              <Link href="/design-mock/a">A — Minimal Editorial</Link>
            </li>
            <li>
              <Link href="/design-mock/b">B — Creative / Works</Link>
            </li>
            <li>
              <a href="https://mirus-hokkaido.jp/" target="_blank" rel="noopener noreferrer">
                本番サイト（変更なし）
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="dm-footer-label">NOTE</p>
          <p style={{ marginTop: 14, lineHeight: 1.8 }}>
            確認用モックです。正式ロゴは `/brand/` に一元管理。本番反映は承認後です。
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MockShell({
  concept,
  children,
}: {
  concept: MockConcept;
  children: ReactNode;
}) {
  const { theme, setTheme } = useMockTheme("warm");

  return (
    <div className="design-mock-body" data-theme={theme} data-concept={concept}>
      <MockBanner concept={concept} theme={theme} onTheme={setTheme} />
      <MockHeader concept={concept} />
      {children}
      <MockFooter />
    </div>
  );
}
