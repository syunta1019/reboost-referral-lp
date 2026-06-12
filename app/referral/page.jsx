import Reveal from "@/components/Reveal";
import TrustBadges from "@/components/TrustBadges";
import CaseGrid from "@/components/CaseGrid";
import Steps from "@/components/Steps";
import StickyCTA from "@/components/StickyCTA";
import CopyButton from "@/components/CopyButton";
import ContactBlock from "@/components/ContactBlock";
import SiteFooter from "@/components/SiteFooter";
import { Section, Eyebrow, Title, Lead, CTAButton } from "@/components/Primitives";
import {
  LINKS, STATS, REASONS, CASES, STEPS_REFERRAL, LINE_TEMPLATE, PRICE,
} from "@/lib/data";

export const metadata = {
  title: "その一言が、誰かの人生の転機になる",
  description:
    "あなたが感じた変化を、大切な人へ。累計5,000名以上・満足度4.92/5、認知科学者監修のREBOOSTを、ギフトとして贈れます。",
  openGraph: { title: "その一言が、誰かの人生の転機になる ｜ REBOOST" },
};

export default function ReferralPage() {
  return (
    <main>
      {/* ───────── FV ───────── */}
      <header className="relative overflow-hidden bg-ink text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(212,175,55,0.18),transparent)]" />
        <div className="relative mx-auto max-w-content px-6 pb-20 pt-24 text-center sm:pt-28">
          <p className="text-[11px] tracking-wide3 text-gold">
            <span className="mr-3 inline-block h-px w-6 align-middle bg-gold" />
            REFERRAL PROGRAM
            <span className="ml-3 inline-block h-px w-6 align-middle bg-gold" />
          </p>
          <h1 className="mt-7 font-serif text-[32px] font-black leading-[1.5] tracking-relaxed sm:text-[40px]">
            その一言が、
            <br className="hidden sm:block" />
            <span className="text-accent">誰かの人生の転機</span>になる。
          </h1>
          <p className="mt-7 text-[14.5px] leading-[2] text-cream/75">
            累計{STATS.count}名以上が体験。顧客満足度{STATS.satisfaction}/5。
            <br className="hidden sm:block" />
            あなたが感じた変化を、大切な人へ贈りませんか。
          </p>
          <div className="mt-10">
            <CTAButton href={LINKS.ctaReferral}>紹介リンクを発行する</CTAButton>
          </div>

          {/* 数値（説明文を上・数字を下に） */}
          <div className="mx-auto mt-12 flex max-w-[520px] justify-center border-y border-gold/40">
            <div className="flex-1 px-1 py-5">
              <div className="text-[10.5px] tracking-wide2 text-cream/60">累計受講者</div>
              <div className="mt-2 text-[28px] font-black sm:text-4xl">{STATS.count}<span className="text-sm text-gold">名+</span></div>
            </div>
            <div className="flex-1 border-l border-gold/25 px-1 py-5">
              <div className="text-[10.5px] tracking-wide2 text-cream/60">顧客満足度</div>
              <div className="mt-2 text-[28px] font-black sm:text-4xl"><span className="text-gold">★</span> {STATS.satisfaction}<span className="text-sm text-gold">/5</span></div>
            </div>
            <div className="flex-1 border-l border-gold/25 px-1 py-5">
              <div className="text-[10.5px] tracking-wide2 text-cream/60">紹介したい</div>
              <div className="mt-2 text-[28px] font-black sm:text-4xl">{STATS.referWant}<span className="text-sm text-gold">/10</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* ───────── 信頼ブロック（FV直下） ───────── */}
      <div className="border-b border-line bg-cream py-8">
        <TrustBadges />
        <p className="mt-4 text-center text-[11px] text-muted">タップで詳細が開きます</p>
      </div>

      {/* ───────── 約7割が紹介から（ファクト帯） ───────── */}
      <div className="border-b border-line bg-ink py-7 text-center text-cream">
        <p className="text-[14px] tracking-relaxed">
          参加者の <span className="align-middle text-[26px] font-black text-gold">{STATS.referShare}</span> が、紹介からの参加。
        </p>
        <p className="mt-2 text-[11.5px] text-cream/55">REBOOSTは広告ではなく、人の言葉で広がってきました。</p>
      </div>

      {/* ───────── ストーリー ───────── */}
      <Section tone="paper">
        <Reveal>
          <Eyebrow>STORY</Eyebrow>
          <Title>
            あなたが変わったように、
            <br className="hidden sm:block" />
            次は、誰かの番かもしれない。
          </Title>
          <Lead>
            REBOOSTは、受講生の紹介で広がってきました。
          </Lead>
          <Reveal className="mx-auto mt-8 max-w-[460px]">
            <div className="rounded-card border border-gold/40 bg-cream px-6 py-5 text-center">
              <p className="font-serif text-[26px] text-ink">
                {STATS.referWant}<span className="text-base text-gold"> / 10</span>
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                受講生の「知人に紹介したい」スコア。<br className="hidden sm:block" />紹介したくなるのは、あなただけではありません。
              </p>
            </div>
          </Reveal>
        </Reveal>
      </Section>

      {/* ───────── 紹介する理由 ───────── */}
      <Section>
        <Reveal>
          <Eyebrow>WHY YOU CAN TRUST</Eyebrow>
          <Title>なぜ、安心して紹介できるのか。</Title>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-wide grid-cols-1 gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.n} delay={i * 70}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-card border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_16px_40px_rgba(17,17,17,0.1)]"
              >
                <span className="font-serif text-sm tracking-wider text-gold">{r.n}</span>
                <p className="mt-2 text-[16px] font-semibold text-ink">{r.title}</p>
                <p className="mt-2 flex-1 text-[13.5px] leading-[1.9] text-muted">{r.body}</p>
                <span className="mt-4 inline-block w-fit border-b border-accent/35 text-[12.5px] font-semibold text-accent">{r.cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── 顧客事例（最重要） ───────── */}
      <Section tone="paper" id="stories">
        <Reveal>
          <Eyebrow>REAL STORIES</Eyebrow>
          <Title>変化した人たちの、リアルな声。</Title>
        </Reveal>
        <div className="mt-12">
          <CaseGrid cases={CASES.slice(0, 7)} />
        </div>
      </Section>

      {/* ───────── 紹介特典（ギフト） ───────── */}
      <Section>
        <Reveal>
          <Eyebrow>THE GIFT</Eyebrow>
          <Title>これは、値引きではなく“贈り物”。</Title>
          <Lead>
            あなたの紹介で、贈られた方は<b className="font-semibold text-accent">20,000円分のギフト（2万円OFF）</b>でREBOOSTを受講できます。
          </Lead>
          <div className="mx-auto mt-10 max-w-[420px] rounded-card border border-gold bg-paper p-8 text-center">
            <p className="text-[11px] tracking-wide2 text-gold">{PRICE.plan}</p>
            <p className="mt-3 text-[14px] text-muted">
              通常 <span className="line-through">{PRICE.regular}円</span>
            </p>
            <p className="mt-1 text-[12.5px] text-accent">ご紹介ギフト −{PRICE.gift}円</p>
            <p className="mt-3 font-serif text-[30px] font-medium text-ink">
              {PRICE.referral}<span className="text-base text-muted">円（税込）</span>
            </p>
            <p className="mt-3 text-[11.5px] text-muted">{PRICE.note}</p>
          </div>
        </Reveal>
      </Section>

      {/* ───────── 紹介方法 + LINEテンプレ + CTA ───────── */}
      <Section tone="paper" id="issue">
        <Reveal>
          <Eyebrow>HOW TO GIFT</Eyebrow>
          <Title>贈り方は、3ステップ。</Title>
        </Reveal>
        <div className="mt-10">
          <Steps steps={STEPS_REFERRAL} />
        </div>

        {/* LINEテンプレート */}
        <Reveal className="mx-auto mt-12 max-w-[560px]">
          <div className="rounded-card border border-line bg-cream p-6">
            <p className="text-[11px] tracking-wide2 text-accent">LINE TEMPLATE</p>
            <p className="mt-3 text-[14px] leading-[1.95] text-body">{LINE_TEMPLATE}</p>
            <div className="mt-5">
              <CopyButton text={LINE_TEMPLATE} />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <CTAButton href={LINKS.ctaReferral}>紹介リンクを発行する</CTAButton>
          <p className="mt-4 text-[12.5px] text-muted">※発行先URL（フォーム／LINE）を設定してください。</p>
        </div>
      </Section>

      <ContactBlock />

      <SiteFooter />
      <StickyCTA href={LINKS.ctaReferral} label="紹介リンクを発行する" />
    </main>
  );
}
