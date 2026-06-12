import { thumb } from "@/lib/data";

function PlayMark() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
          <path d="M5 3l16 9-16 9z" />
        </svg>
      </span>
    </span>
  );
}

function Thumb({ c }) {
  const src = thumb(c);
  if (src) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={c.name}
          loading="lazy"
          width={480}
          height={270}
          className="h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-105"
        />
        {(c.type === "YouTube" || c.type === "記事") && <PlayMark />}
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-cream">
          {c.type}
        </span>
      </div>
    );
  }
  // note / 記事など画像なし → 上品なグラデーション
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink to-ink2">
      <span className="font-serif text-3xl text-cream/90">{c.name.slice(0, 1)}</span>
      <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-cream">
        {c.type}
      </span>
    </div>
  );
}

export function CaseCard({ c, featured = false }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col overflow-hidden rounded-card border bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(17,17,17,0.12)] ${
        featured ? "border-accent sm:col-span-2" : "border-line hover:border-gold"
      }`}
    >
      <Thumb c={c} />
      <div className="flex flex-1 flex-col p-5">
        {featured && (
          <span className="mb-2 w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-wide2 text-ink">
            FEATURED STORY
          </span>
        )}
        <p className="font-serif text-[17px] font-medium text-ink">{c.name}</p>
        <p className="mt-0.5 text-[12px] tracking-wide text-muted">{c.role}</p>
        <p className="mt-3 text-[13.5px] leading-[1.85] text-body">{c.quote}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-accent">
          見てみる
          <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function CaseGrid({ cases }) {
  return (
    <div className="mx-auto grid max-w-wide grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cases.map((c) => (
        <CaseCard key={c.name} c={c} featured={c.featured} />
      ))}
    </div>
  );
}
