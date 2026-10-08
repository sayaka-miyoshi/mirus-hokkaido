import type { Metadata } from "next";
import "./mock.css";

export const metadata: Metadata = {
  title: {
    absolute: "MIRUS Design Mock — TOP A/B comparison（確認用）",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignMockLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
