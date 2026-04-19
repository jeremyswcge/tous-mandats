import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Tous Mandats — accueil" className={`inline-flex items-center gap-3 group ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/30 group-hover:border-ink transition-colors">
        <span className="font-display italic-display text-[15px] leading-none -translate-y-[1px]">tm</span>
        <span className="absolute inset-0 rounded-full ring-1 ring-ink/0 group-hover:ring-1 group-hover:ring-verdigris/40 transition" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] tracking-tight">Tous&nbsp;Mandats</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 mt-1">Genève · 1258</span>
      </span>
    </Link>
  );
}
