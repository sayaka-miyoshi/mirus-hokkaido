import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    news: collection({
      label: "News",
      slugField: "title",
      path: "content/news/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "タイトル" } }),
        summary: fields.text({
          label: "概要",
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "カテゴリ",
          options: [
            { label: "News", value: "News" },
            { label: "Works", value: "Works" },
            { label: "Seminar", value: "Seminar" },
            { label: "Media", value: "Media" },
            { label: "Project", value: "Project" },
            { label: "Release", value: "Release" },
          ],
          defaultValue: "News",
        }),
        publishedAt: fields.date({
          label: "公開日（イベント開催日に合わせる。未確定の場合は空欄）",
        }),
        venue: fields.text({
          label: "会場（未確定の場合は空欄）",
        }),
        coverImage: fields.image({
          label: "アイキャッチ画像",
          directory: "public/images/news",
          publicPath: "/images/news/",
        }),
        relatedServices: fields.array(
          fields.select({
            label: "関連サービス",
            options: [
              { label: "企画・事業設計", value: "planning" },
              { label: "AI活用支援", value: "ai" },
              { label: "DX・仕組み化", value: "dx" },
              { label: "新規事業開発", value: "new-business" },
              { label: "SNS運用・映像制作", value: "sns-video" },
              { label: "インフルエンサー・自治体広報", value: "influencer-gov" },
            ],
            defaultValue: "planning",
          }),
          {
            label: "関連サービス",
            itemLabel: (props) => props.value ?? "サービス",
          },
        ),
        body: fields.markdoc({ label: "本文" }),
      },
    }),
    insights: collection({
      label: "Insights",
      slugField: "title",
      path: "content/insights/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "タイトル" } }),
        summary: fields.text({
          label: "概要",
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "カテゴリ",
          options: [
            { label: "AI", value: "AI" },
            { label: "SNS", value: "SNS" },
            { label: "DX", value: "DX" },
            { label: "Marketing", value: "Marketing" },
            { label: "Local", value: "Local" },
          ],
          defaultValue: "SNS",
        }),
        status: fields.select({
          label: "公開状態",
          options: [
            { label: "下書き (draft)", value: "draft" },
            { label: "公開 (published)", value: "published" },
          ],
          defaultValue: "draft",
        }),
        publishedAt: fields.date({
          label: "公開日",
        }),
        coverImage: fields.image({
          label: "アイキャッチ画像",
          directory: "public/images/insights",
          publicPath: "/images/insights/",
        }),
        body: fields.markdoc({ label: "本文" }),
      },
    }),
  },
});
