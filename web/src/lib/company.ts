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
  phone: "090-3899-3333",
  phoneTel: "09038993333",
  email: "info@mirus-hokkaido.jp",
  domain: "https://mirus-hokkaido.jp",
  /** MIRUS本体の事業領域 */
  business: "企画、AI、DX、新規事業",
  tagline: "北海道を、見る・伝える・つなぐ。",
  servicesLine: "企画 ／ AI ／ DX ／ 新規事業",
  instagramUrl: "https://www.instagram.com/insta.sayaka/",
  instagramHandle: "@insta.sayaka",
} as const;

/** 連携企業（グループ会社ではない） */
export const strategicPartner = {
  name: "合同会社Kプロジェクト",
  nameEn: "Kproject LLC",
  label: "Strategic Partner",
  labelJa: "連携企業",
  roles: [
    "SNS運用",
    "映像制作",
    "インフルエンサーマーケティング",
    "自治体広報支援",
  ],
  description:
    "現場のSNS運用・映像制作・インフルエンサー施策・自治体広報支援を担う連携企業です。グループ会社ではありません。",
} as const;

export const services = [
  {
    number: "01",
    title: "企画・事業設計",
    description:
      "発信や新規事業の企画、体験設計、実行ロードマップの設計を行います。",
    owner: "MIRUS" as const,
  },
  {
    number: "02",
    title: "AI活用支援",
    description:
      "ChatGPT等を活用した投稿作成、業務効率化、コンテンツ制作の仕組みづくりを支援します。",
    owner: "MIRUS" as const,
  },
  {
    number: "03",
    title: "DX・仕組み化",
    description:
      "情報発信や業務フローのデジタル化、継続運用できる体制づくりを支援します。",
    owner: "MIRUS" as const,
  },
  {
    number: "04",
    title: "新規事業開発",
    description:
      "北海道起点の新規プロジェクト構想、サービス設計、立ち上げ伴走を行います。",
    owner: "MIRUS" as const,
  },
  {
    number: "05",
    title: "SNS運用・映像制作",
    description:
      "Strategic Partner（連携企業）である合同会社Kプロジェクトと連携し、運用・撮影・編集を実行します。",
    owner: "Partner" as const,
  },
  {
    number: "06",
    title: "インフルエンサー・自治体広報",
    description:
      "キャスティング、アテンド、自治体SNS広報支援は、連携企業との協業体制で提供します。",
    owner: "Partner" as const,
  },
] as const;

export const relatedServiceOptions = [
  { label: "企画・事業設計", value: "planning" },
  { label: "AI活用支援", value: "ai" },
  { label: "DX・仕組み化", value: "dx" },
  { label: "新規事業開発", value: "new-business" },
  { label: "SNS運用・映像制作", value: "sns-video" },
  { label: "インフルエンサー・自治体広報", value: "influencer-gov" },
] as const;

export const works = [
  {
    client: "渡邊清掃株式会社",
    category: "SNS運用・採用PR",
    description:
      "株式会社MIRUSのStrategic Partnerである合同会社KプロジェクトによるSNS・採用広報支援事例",
    metrics: [
      { label: "SNS", value: "採用広報・SNS運用" },
      { label: "VIDEO", value: "リール動画制作・企業PR" },
    ],
    image: "/images/works/watanabe.png",
  },
] as const;
