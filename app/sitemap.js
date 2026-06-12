export default function sitemap() {
  const base = "https://reboost.mizukara.com";
  return [
    { url: `${base}/referral`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/receive`, changeFrequency: "weekly", priority: 0.9 },
  ];
}
