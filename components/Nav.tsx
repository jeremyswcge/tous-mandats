import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/fiscalite", label: "Fiscalité" },
  { href: "/immobilier", label: "Immobilier" },
  { href: "/equipe", label: "Équipe" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink/95 border-b border-paper/10">
      <div className="mx-auto max-w-screen-3xl px-5 lg:px-10 h-[72px] flex items-center justify-between gap-8">
        <Logo light />
        <nav className="hidden md:flex items-center gap-8 font-sans text-[14px] font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link tracking-tight text-paper/80 hover:text-paper transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+41786042503"
            className="hidden sm:inline-flex items-center gap-2 font-sans text-[13px] text-paper/70 hover:text-paper transition"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
            +41 78 604 25 03
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-ink hover:bg-paper hover:text-ink transition-colors"
          >
            Contactez-nous
            <span className="transition-transform">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
