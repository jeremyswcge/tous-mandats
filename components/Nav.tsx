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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bone/80 border-b border-ink/10">
      <div className="mx-auto max-w-screen-3xl px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-9 font-sans text-[14px]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link tracking-wide">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:+41786042503"
            className="hidden sm:inline font-mono text-[11px] tracking-[0.18em] uppercase text-ink/70 hover:text-ink transition"
          >
            +41 78 604 25 03
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-[12px] font-sans tracking-[0.18em] uppercase hover:bg-ink hover:text-bone transition-colors"
          >
            Prendre RDV
            <span className="inline-block translate-y-[1px] transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
