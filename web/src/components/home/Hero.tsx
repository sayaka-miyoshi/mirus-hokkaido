"use client";

import Link from "next/link";
import { company } from "@/lib/company";
import { HeroBrandCanvas } from "@/components/home/HeroBrandCanvas";

const HERO_HEADLINE_EN = "Creating the Future of Hokkaido.";

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
            北海道の未来を、
          </span>
          <span className="block">創造する。</span>
        </h1>
        <p className="heroHeadlineEn">{HERO_HEADLINE_EN}</p>
        <p className="heroServices">{company.servicesLine}</p>
        <div className="heroCta">
          <Link href="/#service" className="btn btn-primary">
            Serviceを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
