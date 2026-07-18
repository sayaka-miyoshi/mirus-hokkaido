# MIRUS Corporate Site (Next.js)

株式会社MIRUS コーポレートサイト（Next.js App Router + Keystatic CMS）

## 開発

```bash
cd web
npm install
npm run dev
```

- サイト: http://localhost:3000
- CMS管理画面: http://localhost:3000/keystatic

## CMS

News と Insights は別コレクションです。

| コレクション | パス | カテゴリ |
|-------------|------|---------|
| News | `/news` | News / Works / Seminar / Media / Project / Release |
| Insights | `/insights` | AI / SNS / DX / Marketing / Local |

記事ファイルは `web/content/` に保存されます。管理画面で編集後、Gitにコミットして本番へ反映してください。

## ヒーロー動画

`public/videos/hero.mp4` を配置するとフルスクリーン動画が表示されます。未配置時はポスター画像で表示されます。

## デプロイ（Netlify）

ルートの `netlify.toml` が `web` をビルドします。
