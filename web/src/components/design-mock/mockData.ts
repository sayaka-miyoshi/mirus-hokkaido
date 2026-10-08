import { company } from "@/lib/company";
import type { MockWorkCard } from "@/components/design-mock/MockMotion";

/** Curated from existing MIRUS / activity assets (no CEO face on TOP). */
export const mockMedia = {
  ceo: "/images/representative.png",
  /** Hokkaido content production (gourmet / regional Reels grid) */
  hokkaidoContent: "/images/activity/interview-01.png",
  /** Overseas / destination cue — Sapporo post insights */
  sapporoReach: "/images/activity/shooting-02.jpg",
  /** SNS / client account production */
  clientSns: "/images/activity/shooting-03.png",
  /** Government / municipal content */
  municipal: "/images/activity/seminar-01.png",
  /** Interview / BTS production */
  interview: "/images/activity/interview-02.png",
  /** Recruitment / short-form production */
  shortForm: "/images/activity/shooting-01.png",
  booth: "/images/works/watanabe-2.png",
  vehicle: "/images/works/watanabe.png",
  seminarNews: "/images/news/sapporo-cci-seminar.png",
  trainingNews: "/images/news/sapporo-instagram-training.png",
} as const;

export const mockWorks: MockWorkCard[] = [
  {
    id: "1",
    category: "Inbound",
    title: "海外旅行促進事業（シンガポール）",
    description: "現地取材とSNS発信でインバウンド誘客を支援。",
    image: mockMedia.sapporoReach,
  },
  {
    id: "2",
    category: "Content",
    title: "北海道グルメ・地域コンテンツ発信",
    description: "映像とSNSで、土地の魅力を継続的に届ける。",
    image: mockMedia.hokkaidoContent,
  },
  {
    id: "3",
    category: "Government",
    title: "自治体向けSNS・採用コンテンツ",
    description: "現場の空気が伝わる短尺企画と発信設計。",
    image: mockMedia.municipal,
  },
  {
    id: "4",
    category: "SNS",
    title: "店舗アカウントの企画・運用支援",
    description: "世界観づくりから投稿設計まで伴走。",
    image: mockMedia.clientSns,
  },
  {
    id: "5",
    category: "Speaking",
    title: "札幌市職員向け Instagram 研修",
    description: "自治体SNSの伝わる発信を現場でレクチャー。",
    image: mockMedia.trainingNews,
  },
  {
    id: "6",
    category: "Production",
    title: "撮影・インタビュー企画",
    description: "取材から編集まで、物語になる映像をつくる。",
    image: mockMedia.interview,
  },
];

export const mockCopy = {
  enKicker: "Hokkaido × Global Content",
  enLine: "Stories that travel.",
  enLineB: "Frame. Produce. Reach.",
  jaHeadline: company.heroHeadline,
  jaSub: company.heroSubcopy,
  tagline: company.tagline,
} as const;
