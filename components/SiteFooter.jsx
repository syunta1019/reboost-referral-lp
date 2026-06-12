import { LINKS, STATS } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-16 text-center text-cream/80">
      <p className="font-serif text-lg text-cream">REBOOST</p>
      <p className="mt-3 text-[12.5px] leading-[2]">
        本来の自分を取り戻す、体験型自己理解プログラム。
        <br />
        累計{STATS.count}名以上が体験／満足度{STATS.satisfaction}/5。
      </p>
      <div className="mt-6 flex justify-center gap-6 text-[12.5px]">
        <a href={LINKS.service} target="_blank" rel="noopener noreferrer" className="border-b border-cream/30 hover:text-cream">公式サイト</a>
        <a href={LINKS.company} target="_blank" rel="noopener noreferrer" className="border-b border-cream/30 hover:text-cream">株式会社ミズカラ</a>
      </div>
      <p className="mt-8 text-[10.5px] text-cream/50">
        ※累計受講者数・満足度は{STATS.asOf}。数値・時点は掲載前に確定してください。
      </p>
      <p className="mt-2 text-[10.5px] text-cream/40">© {new Date().getFullYear()} REBOOST / 株式会社ミズカラ</p>
    </footer>
  );
}
