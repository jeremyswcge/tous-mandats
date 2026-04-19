import Link from "next/link";
import Image from "next/image";
import { fiscalSegments, expertises, media } from "@/lib/data";

export const metadata = { title: "Fiscalité" };

export default function FiscalitePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[52vh] min-h-[420px] max-h-[600px] overflow-hidden">
        <Image src={media.contact} alt="Genève" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full mx-auto max-w-screen-3xl px-5 lg:px-10 flex flex-col justify-end pb-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-paper/15 backdrop-blur px-3.5 py-1.5 text-paper text-[12px] font-mono tracking-[0.16em] uppercase ring-1 ring-paper/20">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Fiscalité suisse
          </span>
          <h1 className="mt-5 font-display font-bold text-paper text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tightest max-w-3xl">
            Le droit fiscal,<br />notre <span className="text-gold-300">langue maternelle.</span>
          </h1>
          <p className="mt-5 text-paper/85 text-[16px] max-w-xl leading-relaxed">
            Particuliers, indépendants ou sociétés : nous traitons les déclarations,
            les contentieux, les rulings et les transmissions avec une lecture stratégique du droit genevois.
          </p>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20 lg:py-28">
        <div className="mb-12">
          <p className="eyebrow">Trois segments</p>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tighter">
            Une expertise, trois lectures.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {fiscalSegments.map((seg, i) => (
            <article key={seg.label} className="card rounded-3xl border border-ink/10 bg-paper p-8 hover:shadow-cardHover">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-800 font-display font-bold">
                  0{i + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">Segment</span>
              </div>
              <h3 className="mt-8 font-display font-bold text-[1.7rem] tracking-tight">{seg.label}</h3>
              <ul className="mt-6 space-y-3 border-t border-ink/10 pt-5">
                {seg.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[14px] text-ink/80 leading-relaxed">
                    <span className="mt-[9px] inline-block h-1 w-1 rounded-full bg-gold-500 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="bg-paper-50 border-y border-ink/10 py-20 lg:py-28">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10">
          <div className="mb-12">
            <p className="eyebrow">Expertises immobilières</p>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tighter">
              Là où l'immobilier rencontre l'AFC.
            </h2>
          </div>
          <div className="space-y-4">
            {expertises.map((e, i) => (
              <article key={e.code} className="grid grid-cols-12 gap-6 lg:gap-10 rounded-2xl bg-paper border border-ink/10 p-7 lg:p-9 card hover:shadow-cardHover">
                <div className="col-span-12 lg:col-span-2">
                  <span className="font-mono text-[11px] tabnum uppercase tracking-[0.2em] text-gold-700">
                    0{i + 1} · {e.code}
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <h3 className="font-display font-bold text-[clamp(1.4rem,2vw,1.9rem)] leading-tight tracking-tight">
                    {e.title}
                  </h3>
                </div>
                <ul className="col-span-12 lg:col-span-5 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[14.5px] text-ink/75 leading-relaxed">
                      <span className="mt-[9px] inline-block h-1 w-1 rounded-full bg-gold-500 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20 lg:py-28">
        <div className="rounded-3xl bg-ink text-paper p-10 lg:p-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-gold-300">Question fiscale ?</p>
            <h3 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
              Posez-la directement à Claude Buclin.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-[14px] font-semibold text-ink hover:bg-ink hover:text-gold-300 transition">
              Prendre contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
