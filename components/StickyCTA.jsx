"use client";

import { useEffect, useState } from "react";

export default function StickyCTA({ href = "#", label }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-4 py-3 text-center backdrop-blur transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <a
        href={href}
        className="inline-flex min-h-[52px] items-center justify-center rounded-[28px] bg-gold-gradient px-10 text-[14.5px] font-bold tracking-relaxed text-ink shadow-gold transition-all hover:brightness-[1.06]"
      >
        {label}
      </a>
    </div>
  );
}
