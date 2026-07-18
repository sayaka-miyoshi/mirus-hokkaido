import type { Metadata } from "next";
import { Noto_Sans_JP, Syne } from "next/font/google";
import { company } from "@/lib/company";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans-jp",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: `${company.name}は北海道札幌市を拠点に、${company.business}を行っています。`,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: company.servicesLine,
    url: company.domain,
    images: [{ url: "/opengraph-image", alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.servicesLine,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: company.domain,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${syne.variable} antialiased`}>{children}</body>
    </html>
  );
}
