"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";

const POSTER = "/images/works/watanabe.png";

export function Hero() {
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/videos/hero.mp4", { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setHasVideo(res.ok);
      })
      .catch(() => {
        if (!cancelled) setHasVideo(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={POSTER}
            aria-hidden
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src={POSTER}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.42)_0%,rgba(5,7,12,0.62)_42%,rgba(5,7,12,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(110,207,245,0.22),transparent_52%)]" />
      </div>

      <div className="container relative z-10 pb-16 pt-[calc(var(--header-h)+40px)] sm:pb-20 md:pb-28">
        <p className="mb-5 font-[family-name:var(--font-display)] text-[0.7rem] tracking-[0.28em] text-[var(--accent)] sm:mb-6 sm:text-sm">
          {company.name}
        </p>
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,9vw,6.5rem)] font-medium leading-[1.08] tracking-[-0.04em]">
          {company.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-[var(--text-secondary)] sm:mt-8 sm:text-base md:text-lg">
          {company.servicesLine}
          <span className="mt-2 block text-sm text-[var(--text-muted)]">
            SNS・映像・自治体広報は Strategic Partner と連携して提供します。
          </span>
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link href="/#service" className="btn btn-primary">
            Service を見る
          </Link>
          <Link href="/#contact" className="btn btn-ghost">
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
