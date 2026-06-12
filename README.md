# REBOOST 紹介LP（Next.js + TailwindCSS）

「人生の転機を、贈る」体験をデザインした紹介LP。2ページ構成。

| ページ | URL | 役割 |
|---|---|---|
| 紹介者ページ | `/referral` | 「これなら紹介したい」を作る |
| 被紹介者ページ | `/receive` | 「少し話を聞いてみようかな」を作る |

## 起動方法

```bash
cd reboost-referral-lp
npm install
npm run dev
# → http://localhost:3000
#   /referral と /receive を確認
```

本番ビルド:

```bash
npm run build && npm start
```

## パーソナライズ（差し込み）

被紹介者ページは URL パラメータで紹介者名・メッセージを差し込めます。

```
/receive?from=松浦さん&msg=あなたにこそ受け取ってほしい
```

## 差し替えが必要な箇所

- `lib/data.js` の `LINKS.ctaReferral` / `ctaReceive` / `seminar`（現在は `#` プレースホルダ）
- 累計受講者数・満足度の「時点」（`STATS.asOf`）
- `紹介者特典`（限定セッション等）の確定
- OGP画像 `public/og.png`（1200×630）を配置
- REBOOST説明の埋め込み動画（現在は映画本編。公式3分動画に差し替え可）

## 技術

- Next.js 14（App Router）/ React 18 / TailwindCSS 3
- レスポンシブ・モバイル最適化、controlled アニメーション（IntersectionObserver、`prefers-reduced-motion` 対応）
- SEO: `metadata` / OGP / `sitemap.js` / `robots.js`
- 画像は YouTube サムネイル（`img.youtube.com`）を使用

## ファクト出典（一次情報）

- 川合伸幸教授 監修 / オリンパス導入 / 書籍Amazon1位（幻冬舎）/ 累計5,000名・満足度4.91（自社調べ・要時点確定）
- 事例リンクはすべて実在ページ（YouTube・note・PR TIMES）に遷移
