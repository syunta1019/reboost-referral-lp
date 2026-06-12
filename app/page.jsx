import Link from "next/link";

export const metadata = { title: "REBOOST 紹介ページ ― 入口" };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="text-[11px] tracking-wide3 text-gold">REBOOST REFERRAL</p>
      <h1 className="mt-4 font-serif text-3xl font-medium leading-relaxed text-ink">
        人生の転機を、贈る。
      </h1>
      <p className="mt-4 max-w-md text-[14px] leading-[2] text-body/80">
        確認用の入口ページです。下のリンクから各ページをご覧ください。
      </p>
      <div className="mt-10 grid w-full max-w-md gap-4">
        <Link
          href="/referral"
          className="rounded-card border border-line bg-paper px-6 py-5 text-left transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
        >
          <span className="text-[11px] tracking-wide2 text-gold">PAGE 01 ／ /referral</span>
          <p className="mt-1 font-serif text-lg text-ink">紹介者ページ</p>
          <p className="text-[12.5px] text-muted">その一言が、誰かの人生の転機になる。</p>
        </Link>
        <Link
          href="/receive"
          className="rounded-card border border-line bg-paper px-6 py-5 text-left transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
        >
          <span className="text-[11px] tracking-wide2 text-gold">PAGE 02 ／ /receive</span>
          <p className="mt-1 font-serif text-lg text-ink">被紹介者ページ</p>
          <p className="text-[12.5px] text-muted">大切な人から、あなたへ。（?from=名前 で差し込み可）</p>
        </Link>
      </div>
    </main>
  );
}
