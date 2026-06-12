"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "テンプレートをコピー" }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-[3px] border border-ink bg-ink px-6 py-3 text-[13.5px] font-semibold tracking-relaxed text-white transition-all hover:bg-ink2"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          コピーしました
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M5 15V5a2 2 0 012-2h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
