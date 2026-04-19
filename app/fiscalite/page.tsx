import Link from "next/link";
import { fiscalSegments, expertises } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = { title: "Fiscalité" };

const accentMap: Record<string, { bg: string; text: string; ring: string }> = {
  ink: { bg: "bg-ink", text: "text-bone", ring: "ring-ink" },
  verdigris: { bg: "bg-verdigris-600", text: "text-bone", ring: "ring-verdigris-600" },
  copper: { bg: "bg-copper-500", text: "text-ink", ring: "ring-copper-500" },
};

export default function FiscalitePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pt-20 pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 reveal d1">
            <SectionLabel number="№ I" label="Fiscalité suisse — Genève" />
            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tightest">
              Le droit fiscal,<br />
              <span className="italic-display text-verdigris-600">notre langue</span><br />
              maternelle.
            </h1>
          </div>
          <p className="col-span-12 lg:col-span-5 lg:col-start-8 self-end text-[16px] text-ink/75 leading-relaxed reveal d2">
            Particuliers, indépendants ou sociétés : nous traitons les déclarations,
            les contentieux, les rulings et les transmissions avec une lecture
            stratégique du droit genevois.
          </p>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="bg-bone-50 border-y border-ink/15 py-24 lg:py-32">
        <div className="mx-auto max-w-screen-3xl px-6 lg:px-12">
          <SectionLabel number="№ II" label="Trois segments" />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {fiscalSegments.map((seg) => {
              const a = accentMap[seg.color];
              return (
                <article
                  key={seg.label}
                  className="card group rounded-3xl border border-ink/15 bg-bone p-8 lg:p-10 flex flex-col justify-between min-h-[460px] hover:shadow-[0_30px_60px_-30px_rgba(19,17,15,0.35)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${a.bg} ${a.text} font-display text-[1.1rem]`}>
                        {seg.n}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                        Segment
                      </span>
                    </div>
                    <h2 className="mt-10 font-display text-[2.6rem] leading-none tracking-tight">
                      {seg.label}
                    </h2>
                  </div>
                  <ul className="mt-10 space-y-3 border-t border-ink/15 pt-6">
                    {seg.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[14px] leading-relaxed">
                        <span className="mt-[10px] inline-block h-1 w-1 rounded-full bg-ink/40 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel number="№ III" label="Expertises immobilières" />
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] tracking-tight">
              Là où l'immobilier<br />
              <span className="italic-display">rencontre l'AFC.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-0 border-t border-ink/15">
          {expertises.map((e, i) => (
            <article
              key={e.code}
              className="group grid grid-cols-12 gap-6 border-b border-ink/15 py-10 lg:py-14 hover:bg-ink/[0.02] transition-colors"
            >
              <div className="col-span-12 lg:col-span-2 flex items-start gap-4 lg:block">
                <span className="font-mono text-[11px] tracking-[0.22em] text-ink/55 tab-num">
                  {String(i + 1).padStart(2, "0")} — {e.code}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-tight">
                  {e.title}
                </h3>
              </div>
              <ul className="col-span-12 lg:col-span-5 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="font-mono text-[10px] mt-[6px] tab-num text-copper-500">
                      ↳
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pb-32">
        <div className="rounded-3xl bg-ink text-bone p-10 lg:p-16 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h3 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.95] tracking-tight">
              Une question fiscale précise ?<br />
              <span className="italic-display text-copper-400">Posez-la.</span>
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-bone text-ink px-6 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase hover:bg-copper-500 transition-colors"
            >
              Échanger avec Claude Buclin <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
