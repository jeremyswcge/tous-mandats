import Link from "next/link";
import { team } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = { title: "Équipe" };

export default function EquipePage() {
  return (
    <>
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pt-20 pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 reveal d1">
            <SectionLabel number="№ I" label="Cabinet · Famille Buclin" />
            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tightest">
              Quatre signatures<br />
              <span className="italic-display text-verdigris-600">au bas</span> de votre dossier.
            </h1>
          </div>
          <p className="col-span-12 lg:col-span-5 lg:col-start-8 self-end text-[16px] text-ink/75 leading-relaxed reveal d2">
            Le cabinet est dirigé par Claude Buclin et secondé par sa famille
            ainsi qu'un mandataire immobilier. Petit comité, dossiers nominatifs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pb-28">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border border-ink/15 rounded-3xl overflow-hidden">
          {team.map((m, i) => (
            <li
              key={m.name}
              className="bg-bone p-10 lg:p-12 flex flex-col gap-8 hover:bg-bone-50 transition"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-ink/30 font-display text-[1.6rem]">
                  {m.initials}
                </div>
                <span className="font-mono text-[11px] tab-num text-ink/55 tracking-[0.2em]">
                  № {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight">
                  {m.name}
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  {m.role}
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/80 max-w-md">{m.bio}</p>
              <div className="mt-auto flex items-center gap-5 text-[12px]">
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noreferrer" className="link font-mono uppercase tracking-[0.18em]">
                    LinkedIn ↗
                  </a>
                )}
                {m.email && (
                  <a href={`mailto:${m.email}`} className="link font-mono uppercase tracking-[0.18em]">
                    {m.email}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pb-32">
        <div className="rounded-3xl border border-ink/15 bg-bone-50 p-10 lg:p-16 grid grid-cols-12 gap-8 items-end">
          <h3 className="col-span-12 lg:col-span-8 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-tight">
            Travaillons ensemble.<br />
            <span className="italic-display">Discrètement.</span>
          </h3>
          <Link
            href="/contact"
            className="col-span-12 lg:col-span-4 lg:justify-self-end inline-flex items-center gap-3 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase hover:bg-verdigris-600 transition-colors"
          >
            Prendre rendez-vous <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
