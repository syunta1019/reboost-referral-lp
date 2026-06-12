"use client";

import { useState } from "react";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-[600px]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-t border-line last:border-b">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-semibold text-ink">{it.q}</span>
              <span className="text-gold">{isOpen ? "−" : "＋"}</span>
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
            >
              <p className="overflow-hidden text-[13.5px] leading-[1.95] text-body/80">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
