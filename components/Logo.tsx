import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  const fg = light ? "text-paper" : "text-ink";
  const sub = light ? "text-paper/55" : "text-ink/55";
  const ringColor = light ? "border-paper/40" : "border-ink/85";

  return (
    <Link
      href="/"
      aria-label="Tous Mandats — accueil"
      className="inline-flex items-center gap-3.5 group"
    >
      <span
        className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border ${ringColor} transition-transform group-hover:rotate-[8deg]`}
      >
        <span className="absolute -top-px -right-px h-2 w-2 rounded-full bg-gold-500" />
        <span className={`font-display font-bold text-[15px] tracking-[-0.04em] leading-none ${fg}`}>
          TM
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold text-[15px] tracking-[0.02em] uppercase ${fg}`}>
          Tous&nbsp;Mandats
        </span>
        <span className={`font-mono text-[9px] uppercase tracking-[0.28em] mt-1.5 ${sub}`}>
          Genève · depuis 2018
        </span>
      </span>
    </Link>
  );
}
