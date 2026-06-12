#!/bin/bash
# REBOOST 紹介LP デプロイスクリプト
# 使い方: bash deploy.sh
# 役割: 静的ビルド → GitHub Pages へ公開（https://syunta1019.github.io/reboost-referral-lp/）
set -e

# Node が PATH に無い場合のフォールバック（ローカルにNodeを入れている場合は不要）
if ! command -v npm >/dev/null 2>&1; then
  if [ -x /tmp/node-v20.18.0-darwin-arm64/bin/npm ]; then
    export PATH="/tmp/node-v20.18.0-darwin-arm64/bin:$PATH"
  else
    echo "npm が見つかりません。Node.js をインストールしてください（brew install node）"; exit 1
  fi
fi

cd "$(dirname "$0")"
echo "▶ ビルド中..."
npm run build

cd out
touch .nojekyll
git init -b gh-pages -q
git config user.name "matsuurasyunta"
git config user.email "syunta1019@users.noreply.github.com"
git remote add origin https://github.com/syunta1019/reboost-referral-lp.git 2>/dev/null || true
git add -A
git commit -q -m "Deploy update"
git push -f -q origin gh-pages
echo "✅ 公開完了: https://syunta1019.github.io/reboost-referral-lp/（gh-pagesブランチ）"
