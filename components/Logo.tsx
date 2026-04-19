import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  const fg = light ? "text-paper" : "text-ink";
  const sub = light ? "text-paper/60" : "text-ink/55";
  return (
    <Link href="/" aria-label="Tous Mandats — accueil" className="inline-flex items-center gap-3 group">
      <span className={`relative inline-flex h-10 w-10 items-center justify-center rounded-md bg-orange ${light ? "ring-1 ring-paper/20" : ""}`}>
        <span className="font-display font-bold text-paper text-[15px] tracking-tight leading-none">TM</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold text-[18px] tracking-tight ${fg}`}>Tous&nbsp;Mandats</span>
        <span className={`font-mono text-[10px] uppercase tracking-[0.18em] mt-1.5 ${sub}`}>Fiscalité · Immobilier · Genève</span>
      </span>
    </Link>
  );
}
