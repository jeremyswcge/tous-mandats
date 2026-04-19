import Link from "next/link";
import Logo from "./Logo";
import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-28">
      <div className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <div className="col-span-12 lg:col-span-4">
            <Logo light />
            <p className="mt-6 text-[14px] text-paper/65 leading-relaxed max-w-sm">
              Cabinet genevois spécialisé en fiscalité immobilière, gestion administrative et transactions.
              Premier rendez-vous offert.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[13px] font-medium text-paper hover:bg-orange-600 transition"
            >
              Prendre rendez-vous →
            </Link>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">Plan du site</p>
            <ul className="mt-5 space-y-2.5 text-[14px]">
              <li><Link href="/fiscalite" className="link">Fiscalité</Link></li>
              <li><Link href="/immobilier" className="link">Immobilier</Link></li>
              <li><Link href="/equipe" className="link">Équipe</Link></li>
              <li><Link href="/contact" className="link">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">Contact</p>
            <ul className="mt-5 space-y-2.5 text-[14px]">
              {company.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s+/g, "")}`} className="link">{p}</a>
                </li>
              ))}
              <li><a href={`mailto:${company.email}`} className="link">{company.email}</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">Cabinet</p>
            <address className="mt-5 not-italic text-[14px] leading-relaxed text-paper/85">
              {company.address.street}<br />
              {company.address.zip} {company.address.city}<br />
              {company.address.canton}
            </address>
            <p className="mt-3 text-[13px] text-paper/55">Lun. — ven. · 8h30 → 18h00</p>
          </div>

          <div className="col-span-12 mt-6 border-t border-paper/15 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
            <span>© {new Date().getFullYear()} Tous Mandats Sàrl · Genève</span>
            <span>Refonte éditoriale 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
