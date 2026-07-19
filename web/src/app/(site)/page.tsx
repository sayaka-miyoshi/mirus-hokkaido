import { About } from "@/components/home/About";
import { Company } from "@/components/home/Company";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomeNews } from "@/components/home/HomeNews";
import { Philosophy } from "@/components/home/Philosophy";
import { Service } from "@/components/home/Service";
import { Works } from "@/components/home/Works";
import { company } from "@/lib/company";
import { getLatestNews, getPublishedInsightsCount } from "@/lib/content";

export default async function HomePage() {
  const [latestNews, publishedInsightsCount] = await Promise.all([
    getLatestNews(3),
    getPublishedInsightsCount(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: "中央区南二条西五丁目31-1 RMBld.701",
      addressLocality: "札幌市",
      addressRegion: "北海道",
      postalCode: "060-0062",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: company.representative,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Philosophy />
      <About />
      <Company />
      <Service />
      <Works />
      <HomeNews items={latestNews} />
      {publishedInsightsCount > 0 ? <HomeInsights /> : null}
      <Contact />
    </>
  );
}
