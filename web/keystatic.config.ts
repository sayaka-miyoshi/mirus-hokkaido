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
        status: fields.select({
          label: "公開状態",
          options: [
            { label: "下書き (draft)", value: "draft" },
            { label: "公開 (published)", value: "published" },
          ],
          defaultValue: "published",
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
              { label: "インフルエンサーマーケティング", value: "influencer" },
              { label: "インバウンド・海外プロモーション", value: "inbound" },
              { label: "SNS・コンテンツプロデュース", value: "sns-content" },
              { label: "地域・観光プロモーション", value: "regional" },
              { label: "企画・新規プロジェクト", value: "planning" },
              { label: "AI・デジタル活用", value: "ai-digital" },
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
