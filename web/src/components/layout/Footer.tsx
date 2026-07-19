import Link from "next/link";
import { company } from "@/lib/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[var(--bg-elevated)]">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.18em]">
              MI<span className="text-[var(--accent)]">RUS</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              {company.tagline}
              <br />
              {company.servicesLine}
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs tracking-[0.18em] text-[var(--text-muted)]">NAVIGATE</p>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <Link href="/news" className="hover:text-[var(--accent)]">
                  News
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[var(--accent)]">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/#company" className="hover:text-[var(--accent)]">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--accent)]">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs tracking-[0.18em] text-[var(--text-muted)]">CONNECT</p>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  Instagram {company.instagramHandle}
                </a>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--accent)]">
                  お問い合わせフォーム
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-8 text-xs text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {company.nameEn}
          </span>
          <span>
            {company.name} / 法人番号 {company.corporateNumber}
          </span>
        </div>
      </div>
    </footer>
  );
}
