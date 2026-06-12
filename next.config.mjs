/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的書き出し（out/）。Netlify/Vercel等にそのまま公開可能
  basePath: "/reboost-referral-lp",   // GitHub Pages サブパス公開用
  trailingSlash: true,                // /referral/ 形式でGitHub Pagesと整合
  images: { unoptimized: true },
};

export default nextConfig;
