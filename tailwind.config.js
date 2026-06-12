/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── REBOOST公式トンマナ：ブラック×ゴールド ──
        ink: "#111111",       // メイン（黒・ヒーロー/CTA背景・見出し）
        ink2: "#1A1A1A",      // サブ黒
        accent: "#D4AF37",    // ゴールド（CTA・リンク・強調）
        accentDark: "#B8932F",// ゴールド濃（hover）
        gold: "#E6C35C",      // ライトゴールド（ラベル・罫・星）
        cream: "#FAFAFA",     // ライト背景／ダーク上のテキスト
        paper: "#FFFFFF",     // カード白
        line: "#ECECEC",      // 区切り線（ニュートラル）
        muted: "#666666",     // 補足テキスト
        body: "#333333",      // 本文
      },
      fontFamily: {
        // 見出し・本文ともに Noto Sans JP（公式トンマナ）
        sans: [
          "\"Noto Sans JP\"", "-apple-system", "BlinkMacSystemFont",
          "\"Hiragino Kaku Gothic ProN\"", "\"Yu Gothic\"", "Meiryo", "sans-serif",
        ],
        serif: [
          "\"Noto Sans JP\"", "-apple-system",
          "\"Hiragino Kaku Gothic ProN\"", "\"Yu Gothic\"", "sans-serif",
        ],
      },
      maxWidth: { content: "680px", wide: "1120px" },
      letterSpacing: { tightish: "0.01em", relaxed: "0.04em", wide2: "0.18em", wide3: "0.3em" },
      borderRadius: { card: "24px" },
      boxShadow: {
        card: "0 6px 24px rgba(17,17,17,0.06)",
        cardHover: "0 18px 44px rgba(17,17,17,0.12)",
        gold: "0 12px 30px rgba(212,175,55,0.35)",
        goldHover: "0 16px 40px rgba(212,175,55,0.45)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E6C35C 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.6s ease forwards" },
    },
  },
  plugins: [],
};
