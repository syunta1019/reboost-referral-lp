import Reveal from "@/components/Reveal";
import { Section, Eyebrow, Title } from "@/components/Primitives";
import { LINKS } from "@/lib/data";

/** FAQの代わりの、静かなお問い合わせ導線（売り込み感のないトーン）。 */
export default function ContactBlock() {
  return (
    <Section>
      <Reveal className="text-center">
        <Eyebrow>CONTACT</Eyebrow>
        <Title>ご不明な点は、お気軽に。</Title>
        <p className="mx-auto mt-6 max-w-[460px] text-[14px] leading-[2] text-body/80">
          疑問や不安があれば、いつでもお問い合わせください。
          <br />
          1〜2営業日以内に、担当者よりご返信します。
        </p>
        <a
          href={LINKS.contact}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-[28px] border border-ink px-9 min-h-[52px] text-[14px] font-semibold tracking-relaxed text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
        >
          お問い合わせはこちら
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Reveal>
    </Section>
  );
}
