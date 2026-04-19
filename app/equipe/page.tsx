import Link from "next/link";
import { team } from "@/lib/data";

export const metadata = { title: "Équipe" };

export default function EquipePage() {
  return (
    <>
      <section className="bg-paper-50 border-b border-ink/10">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10 pt-14 pb-12">
          <p className="eyebrow">Cabinet · Famille Buclin</p>
          <h1 className="mt-4 font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tightest max-w-3xl">
            Une signature au bas de chaque dossier.
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] text-ink/70 leading-relaxed">
            Cabinet dirigé par Claude Buclin, secondé par sa famille et un mandataire immobilier.
            Petit comité, dossiers nominatifs, suivi humain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {team.map((m, i) => (
            <li key={m.name} className="card rounded-3xl border border-ink/10 bg-paper p-9 flex flex-col gap-7 hover:shadow-cardHover">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-700 font-display font-bold text-[1.6rem]">
                  {m.initials}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 tabnum">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h2 className="font-display font-bold text-[clamp(1.6rem,2.5vw,2.2rem)] leading-tight tracking-tight">{m.name}</h2>
                <p className="mt-1.5 text-[13px] text-orange-600 font-medium uppercase tracking-[0.14em]">{m.role}</p>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/75">{m.bio}</p>
              <div className="mt-auto flex flex-wrap items-center gap-5 pt-4 border-t border-ink/10 text-[13px]">
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noreferrer" className="link font-medium text-ink/80">
                    LinkedIn ↗
                  </a>
                )}
                {m.email && (
                  <a href={`mailto:${m.email}`} className="link font-medium text-ink/80">
                    {m.email}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 pb-24">
        <div className="rounded-3xl bg-ink text-paper p-10 lg:p-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-orange-300">Prêt à démarrer ?</p>
            <h3 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
              Travaillons ensemble.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[14px] font-medium text-paper hover:bg-orange-600 transition">
              Prendre rendez-vous →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
