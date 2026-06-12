export default function Steps({ steps }) {
  return (
    <ol className="mx-auto max-w-[520px]">
      {steps.map((s) => (
        <li key={s.n} className="flex items-baseline gap-6 border-t border-line py-6 last:border-b">
          <span className="min-w-[40px] font-serif text-2xl leading-none text-gold">{s.n}</span>
          <div>
            <p className="text-[16px] font-semibold text-ink">{s.title}</p>
            <p className="mt-1 text-[13px] text-muted">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
