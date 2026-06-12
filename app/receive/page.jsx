import Reveal from "@/components/Reveal";
import TrustBadges from "@/components/TrustBadges";
import CaseGrid from "@/components/CaseGrid";
import StickyCTA from "@/components/StickyCTA";
import SiteFooter from "@/components/SiteFooter";
import ContactBlock from "@/components/ContactBlock";
import { Section, Eyebrow, Title, Lead, CTAButton } from "@/components/Primitives";
import {
  LINKS, STATS, REASONS, CASES, WORRIES,
  REBOOST_JOURNEY, REBOOST_CHANGES, PRICE, COMPANY,
} from "@/lib/data";

export const metadata = {
  title: "あなたへの、贈り物",
  description:
    "あなたを思う人が「きっと合うはず」と選んでくれた、自分を取り戻す入口。累計5,000名以上・満足度4.92/5、認知科学者監修のREBOOST。",
  openGraph: { title: "〇〇さんから、あなたへ ｜ REBOOST" },
};

export default function ReceivePage() {
  // 共有（静的公開）版は汎用固定。?from= の差し込みは動的ホスト（Vercel等）で再有効化可能。
  const from = "大切な人";
  const msg = "";
  const movieEmbed = "https://www.youtube.com/embed/FuQym6V3PRI";

  return (
    <main>
      {/* ───────── FV ───────── */}
      <header className="relative overflow-hidden bg-ink text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(212,175,55,0.18),transparent)]" />
        <div className="relative mx-auto max-w-content px-6 pb-20 pt-24 text-center sm:pt-28">
          <p className="text-[11px] tracking-wide3 text-gold">
            <span className="mr-3 inline-block h-px w-6 align-middle bg-gold" />
            A GIFT FOR YOU
            <span className="ml-3 inline-block h-px w-6 align-middle bg-gold" />
          </p>
          <h1 className="mt-7 font-serif text-[30px] font-black leading-[1.5] tracking-relaxed sm:text-[38px]">
            <span className="text-accent">{from}</span>から、
            <br className="hidden sm:block" />
            あなたへ。
          </h1>
          <p className="mt-7 text-[14.5px] leading-[2] text-cream/75">
            {STATS.count}人が体験し、満足度{STATS.satisfaction}の理由。
            <br className="hidden sm:block" />
            あなたを思う人が、「きっと合うはず」と選んでくれました。
          </p>
          <div className="mt-10">
            <CTAButton href={LINKS.apply}>贈り物を受け取る</CTAButton>
          </div>
          <div className="mx-auto mt-12 flex max-w-[520px] justify-center border-y border-gold/40">
            <div className="flex-1 px-1 py-5">
              <div className="text-[10.5px] tracking-wide2 text-cream/60">が体験</div>
              <div className="mt-2 text-[28px] font-black sm:text-4xl">{STATS.count}<span className="text-sm text-gold">名+</span></div>
            </div>
            <div className="flex-1 border-l border-gold/25 px-1 py-5">
              <div className="text-[10.5px] tracking-wide2 text-cream/60">満足度</div>
              <div className="mt-2 text-[28px] font-black sm:text-4xl"><span className="text-gold">★</span> {STATS.satisfaction}<span className="text-sm text-gold">/5</span></div>
            </div>
            <div className="flex-1 border-l border-gold/25 px-1 py-5">
              <div className="text-[10.5px] tracking-wide2 text-cream/60">紹介したい</div>
              <div className="mt-2 text-[28px] font-black sm:text-4xl">{STATS.referWant}<span className="text-sm text-gold">/10</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* ───────── 信頼ブロック ───────── */}
      <div className="border-b border-line bg-cream py-8">
        <TrustBadges />
        <p className="mt-4 text-center text-[11px] text-muted">タップで詳細が開きます</p>
      </div>

      {/* ───────── 約7割が紹介から（ファクト帯） ───────── */}
      <div className="border-b border-line bg-ink py-7 text-center text-cream">
        <p className="text-[14px] tracking-relaxed">
          参加者の <span className="align-middle text-[26px] font-black text-gold">{STATS.referShare}</span> が、紹介からの参加。
        </p>
        <p className="mt-2 text-[11.5px] text-cream/55">あなたと同じように、誰かに勧められて一歩を踏み出しています。</p>
      </div>

      {/* ───────── 紹介者メッセージ（差し込み可） ───────── */}
      <Section tone="paper">
        <Reveal className="mx-auto max-w-[560px]">
          <div className="rounded-card border border-line bg-cream p-8 text-center">
            <p className="text-[12px] tracking-wide2 text-gold">MESSAGE FROM {from}</p>
            <p className="mt-3 font-serif text-[17px] leading-[1.9] text-ink">
              {msg || "「あなたにこそ、受け取ってほしい。きっと、合うと思ったから。」"}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ───────── 悩み訴求 ───────── */}
      <Section>
        <Reveal>
          <Eyebrow>FOR YOU</Eyebrow>
          <Title>こんなこと、ありませんか？</Title>
        </Reveal>
        <div className="mx-auto mt-10 max-w-[460px]">
          {WORRIES.map((w, i) => (
            <Reveal key={w} delay={i * 60}>
              <div className="relative border-t border-line py-4 pl-8 text-[15.5px] text-ink last:border-b">
                <span className="absolute left-1 top-[22px] h-2 w-2 rounded-full border-[1.5px] border-accent" />
                {w}
              </div>
            </Reveal>
          ))}
        </div>
        <Lead>そのモヤモヤの“正体”を、認知科学の力でほどいていきます。</Lead>
      </Section>

      {/* ───────── REBOOST説明（動画中心） ───────── */}
      <Section tone="paper">
        <Reveal>
          <Eyebrow>WHAT IS REBOOST</Eyebrow>
          <Title>社会に合わせてきた“仮面”を外す、2日間。</Title>
          <Lead>
            適応するなかで身につけた“仮面”を理解し、その下にある本来の自分に気づく2日間。
            気合いや根性ではなく、認知科学に基づいて設計された体験型の自己理解プログラムです。
          </Lead>
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-[640px]">
          <div className="overflow-hidden rounded-card border border-line bg-ink shadow-sm">
            <div className="relative aspect-video w-full">
              <iframe
                src={movieEmbed}
                title="REBOOST 紹介動画"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-[11.5px] text-muted">※公式の3分紹介動画に差し替え可能です。</p>
        </Reveal>

        {/* 2日間の体験設計 */}
        <Reveal className="mx-auto mt-14 max-w-wide">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {REBOOST_JOURNEY.map((d) => (
              <div key={d.tag} className="flex flex-col rounded-card border border-line bg-cream p-6">
                <span className="text-[11px] font-semibold tracking-wide2 text-gold">{d.tag}</span>
                <p className="mt-2 font-serif text-[18px] text-ink">{d.title}</p>
                <p className="mt-1 text-[12px] text-muted">{d.desc}</p>
                <ul className="mt-4 space-y-2">
                  {d.items.map((it) => (
                    <li key={it} className="relative pl-5 text-[13px] leading-[1.7] text-body">
                      <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 受講後の変化 */}
        <Reveal className="mx-auto mt-12 max-w-[560px]">
          <p className="text-center text-[12px] tracking-wide2 text-gold">AFTER REBOOST</p>
          <p className="mt-2 text-center font-serif text-[18px] text-ink">REBOOSTで、こう変わる。</p>
          <ul className="mt-6">
            {REBOOST_CHANGES.map((c) => (
              <li key={c} className="flex items-center gap-3 border-t border-line py-3.5 text-[14.5px] text-ink last:border-b">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none text-accent">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ───────── なぜ信頼されているのか ───────── */}
      <Section>
        <Reveal>
          <Eyebrow>WHY TRUSTED</Eyebrow>
          <Title>
            {STATS.count}人が体験し、
            <br className="hidden sm:block" />
            満足度{STATS.satisfaction}の理由。
          </Title>
        </Reveal>
        <div className="mx-auto mt-12 max-w-[600px]">
          {REASONS.map((r, i) => (
            <Reveal key={r.n} delay={i * 60}>
              <div className="flex items-baseline gap-5 border-t border-line py-6 last:border-b">
                <span className="min-w-[54px] font-serif text-sm tracking-wider text-gold">{r.n}</span>
                <div>
                  <p className="text-[16px] font-semibold text-ink">{r.title}</p>
                  <p className="mt-1.5 text-[13.5px] leading-[1.85] text-muted">{r.body}</p>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block border-b border-accent/35 text-[12.5px] font-semibold text-accent">{r.cta} →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── 受講生の変化（最重要・10件以上） ───────── */}
      <Section tone="paper" id="stories">
        <Reveal>
          <Eyebrow>REAL STORIES</Eyebrow>
          <Title>変わった人たちの、リアルな声。</Title>
          <Lead>まずは、一番気になる人の物語から。きっと、あなたと重なる瞬間があります。</Lead>
        </Reveal>
        <div className="mt-12">
          <CaseGrid cases={CASES} />
        </div>
      </Section>

      {/* ───────── 紹介限定ギフト ───────── */}
      <Section>
        <Reveal className="mx-auto max-w-[460px] text-center">
          <Eyebrow>A GIFT FOR YOU</Eyebrow>
          <div className="mt-6 rounded-card border border-gold bg-paper p-10">
            <p className="text-[11px] tracking-wide3 text-gold">FROM {from}</p>
            <p className="mt-3 font-serif text-[24px] font-medium text-ink">
              <b className="text-accent">20,000円分</b>のギフト（2万円OFF）。
            </p>
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-[11px] tracking-wide2 text-gold">{PRICE.plan}</p>
              <p className="mt-2 text-[14px] text-muted">
                通常 <span className="line-through">{PRICE.regular}円</span>
              </p>
              <p className="mt-1 text-[12.5px] text-accent">ご紹介ギフト −{PRICE.gift}円</p>
              <p className="mt-3 font-serif text-[30px] font-medium text-ink">
                {PRICE.referral}<span className="text-base text-muted">円（税込）</span>
              </p>
              <p className="mt-3 text-[11.5px] text-muted">{PRICE.note}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ───────── 運営会社（安心感） ───────── */}
      <Section tone="paper">
        <Reveal>
          <Eyebrow>COMPANY</Eyebrow>
          <Title>運営会社について</Title>
          <Lead>{COMPANY.about}</Lead>
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-[560px]">
          <dl>
            {COMPANY.rows.map(([k, v]) => (
              <div key={k} className="flex gap-5 border-t border-line py-4 last:border-b">
                <dt className="min-w-[92px] flex-none text-[12px] tracking-wide2 text-gold">{k}</dt>
                <dd className="text-[13.5px] leading-[1.8] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 text-center">
            <a
              href={COMPANY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-accent/40 text-[13px] font-semibold text-accent"
            >
              会社概要を見る
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ───────── 最終CTA（説明会へ） ───────── */}
      <section id="seminar" className="bg-ink px-6 py-24 text-center text-cream">
        <Reveal>
          <h2 className="font-serif text-[26px] font-medium leading-[1.8] sm:text-[30px]">
            人生が変わるきっかけは、
            <br className="hidden sm:block" />
            案外、すぐ近くにある。
          </h2>
          <div className="mt-10">
            <CTAButton href={LINKS.seminar}>無料説明会に参加する</CTAButton>
          </div>
          <p className="mt-5 text-[12.5px] text-cream/60">
            いきなり申し込みではありません。まずは“知る・話す”から。
          </p>
        </Reveal>
      </section>

      <ContactBlock />

      <SiteFooter />
      <StickyCTA href={LINKS.apply} label="贈り物を受け取る" />
    </main>
  );
}
