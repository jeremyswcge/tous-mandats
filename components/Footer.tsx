import Link from "next/link";
import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <div className="col-span-12 md:col-span-5">
            <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
              Parlons de votre <span className="italic-display">patrimoine.</span>
            </h3>
            <p className="mt-6 font-sans text-bone/70 max-w-md">
              Un café à Perly ou une visioconférence — la première rencontre est offerte.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-bone/40 px-6 py-3 text-[12px] font-sans tracking-[0.2em] uppercase hover:bg-bone hover:text-ink transition"
            >
              Prendre rendez-vous <span>→</span>
            </Link>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Contact</p>
            <ul className="mt-5 space-y-2 text-[14px]">
              {company.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s+/g, "")}`} className="link">{p}</a>
                </li>
              ))}
              <li><a href={`mailto:${company.email}`} className="link">{company.email}</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Cabinet</p>
            <address className="mt-5 not-italic text-[14px] leading-relaxed">
              {company.address.street}<br />
              {company.address.zip} {company.address.city}<br />
              {company.address.canton}
            </address>
          </div>

          <div className="col-span-12 mt-8 border-t border-bone/15 pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">
              © {new Date().getFullYear()} Tous Mandats Sàrl · Genève
            </div>
            <nav className="flex items-center gap-7 text-[12px] text-bone/70">
              <Link href="/fiscalite" className="link">Fiscalité</Link>
              <Link href="/immobilier" className="link">Immobilier</Link>
              <Link href="/equipe" className="link">Équipe</Link>
              <Link href="/contact" className="link">Contact</Link>
            </nav>
          </div>
        </div>

        {/* Oversize wordmark */}
        <div className="mt-20 -mb-6 overflow-hidden">
          <p
            aria-hidden
            className="font-display italic-display text-bone/10 whitespace-nowrap leading-[0.85] text-[18vw] tracking-tightest select-none"
          >
            tous mandats
          </p>
        </div>
      </div>
    </footer>
  );
}
