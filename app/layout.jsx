import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://reboost.mizukara.com"),
  title: {
    default: "REBOOST ― 人生の転機を、贈る。",
    template: "%s ｜ REBOOST",
  },
  description:
    "本来の自分を取り戻す体験型プログラム REBOOST。累計5,000名以上が体験、満足度4.92/5。認知科学者・川合伸幸教授監修。大切な人へ、人生の転機を贈りませんか。",
  keywords: ["REBOOST", "ミズカラ", "自己理解", "認知科学", "コーチング", "紹介", "ギフト"],
  openGraph: {
    title: "REBOOST ― 人生の転機を、贈る。",
    description:
      "累計5,000名以上が体験、満足度4.92/5。認知科学者監修の自己理解プログラム。大切な人へ、人生の転機を贈る。",
    type: "website",
    locale: "ja_JP",
    siteName: "REBOOST",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "REBOOST" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "REBOOST ― 人生の転機を、贈る。",
    description: "累計5,000名以上・満足度4.92/5。認知科学者監修の自己理解プログラム。",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#16233F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
