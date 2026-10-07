import type { Metadata } from "next";
import "./mock.css";

export const metadata: Metadata = {
  title: {
    absolute: "MIRUS Design Mock — Theme compare & scroll motion（確認用）",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignMockLayout({ children }: { children: React.ReactNode }) {
  // Outer wrapper styles come from DesignMockPage (theme-aware root).
  return <>{children}</>;
}
