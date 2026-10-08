"use client";

import { MirusLogo } from "@/components/brand/MirusLogo";
import {
  MockHeadline,
  MockHorizontalWorks,
  MockParallaxImage,
  MockReveal,
} from "@/components/design-mock/MockMotion";
import { mockMedia, mockWorks } from "@/components/design-mock/mockData";
import { company, services, strengths, targetClients } from "@/lib/company";

export function MockPhilosophy() {
  return (
    <section id="philosophy" className="dm-section dm-tone-b">
      <div className="dm-container dm-philosophy">
        <MockHeadline>
          <p className="dm-label">Philosophy</p>
          <p className="dm-en-line">See. Tell. Connect.</p>
          <h2 className="dm-title dm-title-md">
            見る。伝える。つなぐ。
            <br />
            北海道の物語を、次の誰かへ。
          </h2>
        </MockHeadline>
        <MockReveal delay={0.08}>
          <p className="dm-lead">
            MIRUSは、SNS・インフルエンサー・映像・多言語コンテンツを通じて、
            北海道の企業・自治体・地域の魅力を国内外へ届けるプロモーション会社です。
          </p>
          <ul className="dm-bullet-list">
            {targetClients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </MockReveal>
      </div>
    </section>
  );
}

export function MockAboutCeo() {
  return (
    <section id="about" className="dm-section dm-tone-a">
      <div className="dm-container dm-split">
        <MockReveal>
          <MockParallaxImage
            src={mockMedia.ceo}
            alt="三好さやかのプロフィール写真"
            portrait
          />
        </MockReveal>
        <div>
          <MockHeadline>
            <p className="dm-label">About / CEO</p>
            <p className="dm-en-line">Representative</p>
            <h2 className="dm-title dm-title-md">北海道の魅力を、届けるプロモーション。</h2>
          </MockHeadline>
          <MockReveal delay={0.1}>
            <p className="dm-lead">
              {company.name}は、インフルエンサーマーケティング、SNS・コンテンツ制作、
              インバウンド・海外プロモーションを中心に、企業・自治体・地域の魅力発信を支援します。
            </p>
            <dl className="dm-meta-list">
              {[
                ["代表", `${company.representativeTitle}　三好さやか`],
                ["拠点", "北海道札幌市"],
                ["事業領域", company.servicesLine],
              ].map(([label, value]) => (
                <div key={label} className="dm-meta-row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="dm-inline-cta">
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
  );
}

export function MockService() {
  return (
    <section id="service" className="dm-section dm-tone-c">
      <div className="dm-container">
        <MockHeadline>
          <p className="dm-label">Service</p>
          <p className="dm-en-line">What we do</p>
          <h2 className="dm-title dm-title-md">事業内容</h2>
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
  );
}

export function MockWorks() {
  return (
    <div id="works">
      <MockHorizontalWorks items={mockWorks} />
    </div>
  );
}

export function MockStrength() {
  return (
    <section className="dm-section dm-tone-a">
      <div className="dm-container">
        <MockHeadline>
          <p className="dm-label">Strength</p>
          <p className="dm-en-line">Why MIRUS</p>
          <h2 className="dm-title dm-title-md">MIRUSの強み</h2>
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
  );
}

export function MockContact() {
  return (
    <section id="contact" className="dm-section dm-tone-b">
      <div className="dm-container dm-contact">
        <MockHeadline>
          <p className="dm-label">Contact</p>
          <p className="dm-en-line">Start a conversation</p>
          <h2 className="dm-title dm-title-md">北海道から、新しい発信を。</h2>
        </MockHeadline>
        <MockReveal>
          <p className="dm-lead" style={{ marginInline: "auto" }}>
            SNS・インフルエンサー・インバウンドプロモーション、コンテンツ制作、
            企画・プロジェクトのご相談は、本番サイトのお問い合わせフォームへ。
          </p>
          <div className="dm-inline-cta dm-inline-cta-center">
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
          <div className="dm-contact-mark">
            <MirusLogo height={56} />
          </div>
        </MockReveal>
      </div>
    </section>
  );
}

export function MockSharedBody() {
  return (
    <>
      <MockPhilosophy />
      <MockAboutCeo />
      <MockService />
      <MockWorks />
      <MockStrength />
      <MockContact />
    </>
  );
}
