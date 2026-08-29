export const company = {
  name: "株式会社MIRUS",
  nameEn: "MIRUS Inc.",
  representative: "三好 清佳",
  representativeTitle: "代表取締役",
  established: "2026年6月",
  corporateNumber: "8430001097150",
  postalCode: "〒060-0062",
  address: "北海道札幌市中央区南二条西五丁目31-1 RMBld.701",
  addressFull: "〒060-0062 北海道札幌市中央区南二条西五丁目31-1 RMBld.701",
  domain: "https://mirus-hokkaido.jp",
  /** MIRUS本体の事業領域 */
  business:
    "インフルエンサーマーケティング、インバウンド・海外プロモーション、SNS・コンテンツプロデュース、地域・観光プロモーション、企画・新規プロジェクト",
  tagline: "見る。伝える。つなぐ。",
  servicesLine: "インフルエンサー ／ インバウンド ／ SNS・コンテンツ ／ 地域プロモーション ／ 企画",
  heroHeadline: "北海道と世界を、コンテンツでつなぐ。",
  heroSubcopy:
    "SNS・インフルエンサー・映像・多言語コンテンツを通じて、北海道の企業・地域・人の魅力を国内外へ届けます。",
  heroHeadlineEn: "Connecting Hokkaido and the World Through Content.",
  instagramUrl: "https://www.instagram.com/insta.sayaka/",
  instagramHandle: "@insta.sayaka",
  /** フォロワー数を表示する場合のみ設定（例: "500K+ Followers"）。非表示の場合は null */
  instagramFollowers: null as string | null,
} as const;

/** お問い合わせフォームの種別（表示用。通知先メールはサイトに掲載しない） */
export const contactInquiryTypes = [
  "SNS・コンテンツ制作について",
  "インフルエンサープロモーションについて",
  "海外・インバウンドプロモーションについて",
  "撮影・取材・PRについて",
  "企画・プロジェクトのご相談",
  "その他",
] as const;

/** 制作・SNS運用における連携パートナー（MIRUSのグループ会社ではない） */
export const strategicPartner = {
  name: "合同会社Kproject",
  nameEn: "Kproject LLC",
  label: "Partner",
  labelJa: "連携パートナー",
  description:
    "制作・SNS運用において、合同会社Kprojectをはじめとするパートナーと連携しています。",
} as const;

export const services = [
  {
    number: "01",
    title: "インフルエンサーマーケティング",
    description:
      "国内外のインフルエンサーを活用したプロモーションを企画。候補選定、キャスティング、条件調整、撮影・取材アテンド、投稿管理まで一貫して支援します。北海道の観光、飲食、宿泊、企業、地域プロモーションなどを想定しています。",
  },
  {
    number: "02",
    title: "インバウンド・海外プロモーション",
    description:
      "韓国・香港・台湾などをはじめとした海外市場に向け、インフルエンサーやSNS、多言語コンテンツを活用して、北海道の魅力を海外へ届けます。単なる翻訳ではなく、対象国やターゲットに合わせた発信企画・キャスティング・コンテンツ制作を行います。",
  },
  {
    number: "03",
    title: "SNS・コンテンツプロデュース",
    description:
      "企業・自治体・観光施設などを対象に、SNS企画、撮影、ショート動画、コンテンツ制作、発信設計などを支援します。単なる投稿代行ではなく、「何を、誰に、どう伝えるか」から考えるプロデュースを行います。",
  },
  {
    number: "04",
    title: "地域・観光プロモーション",
    description:
      "北海道の企業・地域・観光・食・人など、まだ十分に知られていない魅力を発見し、SNS・映像・インフルエンサーなどを活用して発信します。",
  },
  {
    number: "05",
    title: "企画・新規プロジェクト",
    description:
      "SNSや地域発信だけに限定せず、企業・自治体・地域と新しい企画やプロジェクトを立ち上げる事業です。MIRUSの発信力・企画力・ネットワークを活かした共創を大切にしています。",
  },
  {
    number: "06",
    title: "AI・デジタル活用",
    description:
      "MIRUSでは、企画・リサーチ・多言語化・コンテンツ制作・業務効率化などに、AIやデジタルツールを積極的に活用しています。AIそのものを目的とするのではなく、より速く、より広く、より効果的に魅力を届けるための手段として活用しています。",
  },
] as const;

export const relatedServiceOptions = [
  { label: "インフルエンサーマーケティング", value: "influencer" },
  { label: "インバウンド・海外プロモーション", value: "inbound" },
  { label: "SNS・コンテンツプロデュース", value: "sns-content" },
  { label: "地域・観光プロモーション", value: "regional" },
  { label: "企画・新規プロジェクト", value: "planning" },
  { label: "AI・デジタル活用", value: "ai-digital" },
] as const;

export const strengths = [
  {
    title: "発信者としての実践",
    description:
      "代表自身がInstagram @insta.sayaka を通じて北海道の魅力を継続発信。SNS上の反応を理解した企画ができます。",
  },
  {
    title: "北海道へのネットワーク",
    description:
      "北海道に根ざした情報・人・場所へのネットワークを活かし、現場に即したプロモーションを設計します。",
  },
  {
    title: "国内外インフルエンサー連携",
    description:
      "国内外のインフルエンサーとの連携体制を整え、キャスティングから投稿管理まで一貫して支援します。",
  },
  {
    title: "企画から発信まで一貫",
    description:
      "企画、撮影、コンテンツ制作、発信設計までを一つの流れとして設計。点ではなく、続く仕組みをつくります。",
  },
  {
    title: "海外向け・多言語対応",
    description:
      "インバウンド施策に必要な海外向け発信、多言語コンテンツ制作に対応。対象国に合わせた企画を行います。",
  },
  {
    title: "AI・デジタルで効率化",
    description:
      "AIやデジタル技術を制作・リサーチに活用し、スピードと品質を両立。手段として積極的に取り入れています。",
  },
] as const;

export const targetClients = [
  "北海道内の企業・自治体・観光施設",
  "宿泊・飲食関連事業者・地域団体",
  "北海道への誘客・インバウンド施策を検討中の事業者",
  "SNSやインフルエンサー施策を検討中の企業",
] as const;

export type WorkItem = {
  client: string;
  category: string;
  description: string;
  metrics: readonly { label: string; value: string }[];
  image?: string;
};

export const works: readonly WorkItem[] = [];
