import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") {
    return <>{children}</>;
  }

  return <div className="min-h-screen bg-white text-black">{children}</div>;
}
