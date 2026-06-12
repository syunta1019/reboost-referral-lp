"use client";

import { useState } from "react";
import { BADGES } from "@/lib/data";

/** FV直下の信頼バッジ列。クリックで詳細を開閉（売り込み感のない静かな展開）。 */
export default function TrustBadges() {
  const [open, setOpen] = useState(null);

  return (
    <div className="mx-auto max-w-wide px-6">
      <ul className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3">
        {BADGES.map((b, i) => {
          const isOpen = open === i;
          return (
            <li key={b.label} className="relative">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold tracking-tightish transition-all duration-200 ${
                  isOpen
                    ? "border-accent bg-paper text-ink shadow-sm"
                    : "border-line bg-paper/70 text-ink hover:border-gold hover:-translate-y-px"
                }`}
              >
                <span className="text-[10px] tracking-wide2 text-gold">{b.tag}</span>
                <span>{b.label}</span>
                <span className={`text-gold transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>＋</span>
              </button>

              {isOpen && (
                <div className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-[280px] -translate-x-1/2 rounded-lg border border-line bg-paper p-4 text-left shadow-[0_18px_40px_rgba(17,17,17,0.14)]">
                  <p className="text-[13px] leading-[1.9] text-body">{b.detail}</p>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block border-b border-accent/40 text-[12.5px] font-semibold text-accent"
                  >
                    詳しく見る →
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
