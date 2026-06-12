// サーバーコンポーネントで使える表示プリミティブ群（REBOOST公式トンマナ：黒×金×Noto Sans JP）

export function Section({ id, children, className = "", tone = "cream" }) {
  const bg = tone === "paper" ? "bg-paper" : tone === "ink" ? "bg-ink text-cream" : "bg-cream";
  return (
    <section id={id} className={`border-b border-line ${bg} ${className}`}>
      <div className="mx-auto max-w-content px-6 py-24 sm:py-32">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-center text-[11px] font-semibold tracking-wide3 text-accent ${className}`}>{children}</p>
  );
}

export function Title({ children, className = "" }) {
  return (
    <h2 className={`mt-4 text-center text-[26px] font-bold leading-[1.6] tracking-relaxed text-ink sm:text-[32px] ${className}`}>
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }) {
  return (
    <p className={`mx-auto mt-7 max-w-[560px] text-center text-[15px] font-normal leading-[2] text-body ${className}`}>
      {children}
    </p>
  );
}

/** ゴールドグラデーションのプライマリCTA（高さ56px+・角丸大・シャドウ・ホバー） */
export function CTAButton({ href = "#", children, className = "", full = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[28px] bg-gold-gradient px-12 text-[15px] font-bold tracking-relaxed text-ink shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-[1.06] hover:shadow-goldHover ${full ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
