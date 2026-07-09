# MIRUS公式サイト 公開手順（最短ルート）



## 推奨ホスティング：Netlify（無料・SSL自動・最短）



静的HTMLサイトのため、**Netlify** が最も早く公開できます（所要時間 約30分〜1時間）。



---



## Step 0：デプロイ用パッケージを作成



サイトを更新したら、必ず次のスクリプトを実行してください。



```powershell

cd c:\Users\SAYAKA.M\MIRUS

powershell -ExecutionPolicy Bypass -File .\scripts\create-netlify-deploy.ps1

```



生成されるもの:



| 出力 | 用途 |

|------|------|

| `netlify-deploy/` | **推奨** Netlify Drop へフォルダごとアップロード |

| `MIRUS-netlify-deploy.zip` | ZIP でアップロードする場合のみ使用 |



---



## Step 1：Netlifyにデプロイ



### 方法A：ドラッグ＆ドロップ（推奨）



1. https://app.netlify.com にログイン

2. 対象サイト → **Deploys** タブ

3. **`netlify-deploy` フォルダをそのまま**ドラッグ＆ドロップ  

   ※ フォルダの中身だけではなく、**`netlify-deploy` フォルダ自体**をドロップ



#### 禁止事項（CSS/JS が 404 になる原因）



| やってはいけないこと | 理由 |

|---------------------|------|

| Windows の「ZIP に圧縮」 | ZIP 内パスが `css\style.css` になり Netlify がフォルダと認識しない |

| `Compress-Archive` コマンド | 同上（バックスラッシュ `\` が入る） |

| `MIRUS` フォルダ全体をアップロード | `mock/` 等が混入し、構成が壊れる |

| 手動で作った ZIP をアップロード | パス区切りが `\` になっている可能性が高い |



### 方法B：ZIP アップロード（代替）



`scripts\create-netlify-deploy.ps1` で生成した **`MIRUS-netlify-deploy.zip` のみ**使用してください。



### 方法C：Netlify CLI（最も確実）



```powershell

cd c:\Users\SAYAKA.M\MIRUS

powershell -ExecutionPolicy Bypass -File .\scripts\create-netlify-deploy.ps1

npx netlify-cli login

npx netlify-cli deploy --prod --dir netlify-deploy

```



---



## Step 1.5：デプロイ成功の確認



### Deploy File Browser で確認



次のように **フォルダ** として表示されていれば成功:



```

css/

js/

company/

contact/

services/

privacy/

index.html

netlify.toml

```



次のように表示されている場合は **失敗**（再デプロイが必要）:



```

css\style.css      ← 1つのファイル名として表示（NG）

js\site-config.js  ← 同上（NG）

```



### URL で確認



- https://mirus-hokkaido.jp/css/style.css → **200**

- https://mirus-hokkaido.jp/js/site-config.js → **200**

- https://mirus-hokkaido.jp/ → レイアウトが正常



---



## Step 2：お名前.com でDNS設定



お名前.comのコントロールパネル → ドメイン設定 → DNS設定



### mirus-hokkaido.jp をNetlifyに向ける場合



| タイプ | ホスト名 | 値 |

|--------|----------|-----|

| A | @ | `75.2.60.5` |

| CNAME | www | `あなたのサイト名.netlify.app` |



※ Netlify管理画面「Domain settings」に表示される最新IPを確認してください。



### Netlify側



1. Site settings → Domain management → Add custom domain

2. `mirus-hokkaido.jp` と `www.mirus-hokkaido.jp` を追加

3. SSL証明書は自動発行（数分〜数時間）



---



## Step 3：公開前チェック（銀行審査用）



### 電話番号



`js/site-config.js` に **090-3899-3333** を設定済みです。変更時は `phone` と `phoneTel` を更新してください。



### メール受信の設定（2つの方法）



#### 方法1：お名前.com メール（推奨・審査向き）



1. お名前.com → メールホスティング → `info@mirus-hokkaido.jp` を作成

2. MXレコードをお名前.comの指示どおり設定

3. WebメールまたはOutlook等で受信確認



#### 方法2：FormSubmit（フォーム転送・即日可能）



1. お問い合わせフォームからテスト送信

2. `info@mirus-hokkaido.jp` に届く**確認メール**のリンクをクリック

3. 以降、フォーム送信が `info@mirus-hokkaido.jp` に転送される



※ 方法2だけではメール送受信の実在証明が弱い場合があります。審査には**方法1も併用推奨**。



---



## Step 4：公開確認URL



設定完了後、以下で確認：



- https://mirus-hokkaido.jp/

- https://mirus-hokkaido.jp/company/

- https://mirus-hokkaido.jp/contact/

- https://mirus-hokkaido.jp/privacy/



---



## ローカルプレビュー（開発用）



```powershell

cd c:\Users\SAYAKA.M\MIRUS

npx serve -l 8080 netlify-deploy

```



→ http://localhost:8080/



---



## 登記情報（サイト反映済み）



| 項目 | 内容 |

|------|------|

| 会社名 | 株式会社MIRUS |

| 所在地 | 〒060-0062 北海道札幌市中央区南二条西5丁目31-1 RMBld.701 |

| 法人番号 | 8430001097150 |

| 設立 | 2026年6月15日 |

| メール | info@mirus-hokkaido.jp |



---



## トラブルシューティング



| 症状 | 原因 | 対処 |

|------|------|------|

| Deploy File Browser に `css\style.css` と表示 | Windows 標準 ZIP が `\` パスを使用 | `create-netlify-deploy.ps1` を実行し、**フォルダごと**再アップロード |

| `/css/style.css` が 404 | 上記と同じ（フォルダ未作成） | 同上 |

| フッターが表示されない | `/js/site-config.js` が 404 | 同上 |

| フォームが送信できない | FormSubmitの確認メール未クリック | 確認メールのリンクをクリック |

| DNSが反映されない | 伝播待ち | 最大48時間待つ |



### 技術的な原因（参考）



Netlify は ZIP 内の `/` のみをディレクトリ区切りとして解釈します。  

Windows の `Compress-Archive` やエクスプローラーの「ZIPに圧縮」は `css\style.css` という**1つのファイル名**として ZIP に記録するため、Netlify 上で `css/` フォルダが作られません。


