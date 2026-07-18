"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, works } from "@/lib/company";

const nav = [
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#about", label: "About" },
  { href: "/#service", label: "Service" },
  ...(works.length > 0 ? [{ href: "/#works", label: "Works" }] : []),
  { href: "/news", label: "News" },
  { href: "/insights", label: "Insights" },
  { href: "/#company", label: "Company" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[rgba(5,7,12,0.88)] backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-xl tracking-[0.18em]">
          MI<span className="text-[var(--accent)]">RUS</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] tracking-[0.08em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary !min-h-11 !px-5 !text-sm">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="relative z-50 flex h-12 w-12 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[72px] z-40 bg-[rgba(5,7,12,0.98)] lg:hidden">
          <nav className="container flex flex-col gap-2 py-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/8 py-4 text-lg text-[var(--text-secondary)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-6 w-full"
            >
              Contact
            </Link>
            <p className="mt-8 text-sm text-[var(--text-muted)]">{company.name}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
