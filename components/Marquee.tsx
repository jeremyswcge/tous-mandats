export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden fade-x">
      <div className="marquee flex w-max items-center gap-12 whitespace-nowrap py-3">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-display italic-display text-[clamp(2rem,5vw,4rem)] leading-none text-ink">
              {it}
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-copper" />
          </span>
        ))}
      </div>
    </div>
  );
}
