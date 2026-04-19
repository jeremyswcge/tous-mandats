import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  return { title: p?.title ?? "Bien" };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const totalHabitable = p.surfaces.reduce((a, s) => a + s.habitable, 0);
  const totalGarden = p.surfaces.reduce((a, s) => a + s.jardin, 0);

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pt-12">
        <Link href="/immobilier" className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 link">
          ← Retour aux biens
        </Link>

        <div className="mt-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <SectionLabel number={`№ ${String(1).padStart(2, "0")}`} label={`${p.type} · ${p.location}`} />
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,7rem)] leading-[0.9] tracking-tightest">
              {p.title.split(" ").slice(0, -1).join(" ")} <br />
              <span className="italic-display text-verdigris-600">{p.title.split(" ").slice(-1)}</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 self-end">
            <div className="border-t border-ink/15 pt-6 grid grid-cols-2 gap-y-6 gap-x-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">Prix</p>
                <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">
                  CHF {p.priceCHF.toLocaleString("fr-CH")}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">CHF/m²</p>
                <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">{p.pricePerSqmCHF}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">Habitable</p>
                <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">{totalHabitable} m²</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">Jardin</p>
                <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">{totalGarden} m²</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="relative col-span-12 lg:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden bg-ink">
            <Image src={p.images[0]} alt={p.title} fill className="object-cover" sizes="(min-width:1024px) 66vw, 100vw" />
          </div>
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {p.images.slice(1, 4).map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink">
                <Image src={src} alt={`${p.title} — vue ${i + 2}`} fill className="object-cover" sizes="(min-width:1024px) 33vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel number="№ 02" label="Description" />
            <p className="mt-6 font-display text-[clamp(1.8rem,2.7vw,2.4rem)] leading-tight tracking-tight">
              Deux unités mitoyennes neuves, jardins privatifs, à signer{" "}
              <span className="italic-display">au cœur de Genève.</span>
            </p>
            <ul className="mt-10 space-y-4 font-mono text-[12px] uppercase tracking-[0.16em]">
              <li className="flex justify-between border-b border-ink/15 pb-3">
                <span className="text-ink/55">Année de construction</span>
                <span className="tab-num">{p.year}</span>
              </li>
              <li className="flex justify-between border-b border-ink/15 pb-3">
                <span className="text-ink/55">Construction</span>
                <span>{p.info.construction}</span>
              </li>
              <li className="flex justify-between border-b border-ink/15 pb-3">
                <span className="text-ink/55">Chauffage</span>
                <span>{p.info.heating}</span>
              </li>
              <li className="flex justify-between border-b border-ink/15 pb-3">
                <span className="text-ink/55">Mandataire</span>
                <span>{p.author}</span>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Rez-de-chaussée", items: p.layout.ground, n: "I" },
              { title: "1er étage", items: p.layout.first, n: "II" },
              { title: "Extérieurs", items: p.layout.outside, n: "III" },
            ].map((b) => (
              <div key={b.n} className="rounded-2xl border border-ink/15 bg-bone-50 p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-ink/55">{b.n}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                </div>
                <h3 className="mt-6 font-display text-[1.4rem] leading-tight">{b.title}</h3>
                <ul className="mt-5 space-y-2 text-[13.5px] leading-relaxed text-ink/80">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-copper-500">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-3 rounded-2xl border border-ink/15 p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-ink/55">Surfaces</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">m²</span>
              </div>
              <table className="mt-6 w-full text-[14px]">
                <thead>
                  <tr className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                    <th className="text-left pb-3">Lot</th>
                    <th className="text-right pb-3">Habitable</th>
                    <th className="text-right pb-3">Jardin</th>
                  </tr>
                </thead>
                <tbody>
                  {p.surfaces.map((s) => (
                    <tr key={s.label} className="border-t border-ink/15">
                      <td className="py-3 font-display text-[1.05rem]">{s.label}</td>
                      <td className="py-3 text-right tab-num">{s.habitable}</td>
                      <td className="py-3 text-right tab-num">{s.jardin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pb-32">
        <div className="rounded-3xl bg-ink text-bone p-10 lg:p-16 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
              Visite & dossier complet
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-tight">
              Demander une visite — <span className="italic-display text-copper-400">{p.title.toLowerCase()}.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-bone text-ink px-6 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase hover:bg-copper-500 transition-colors"
            >
              Prendre contact <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
