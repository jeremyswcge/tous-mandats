import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/data";

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
      {/* TOP BAR */}
      <section className="bg-paper-50 border-b border-ink/10">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-6 flex items-center justify-between">
          <Link href="/immobilier" className="text-[13px] font-medium text-ink/70 hover:text-ink transition">
            ← Retour aux biens
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
            Réf · {p.slug}
          </span>
        </div>
      </section>

      {/* HEADER */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 pt-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gold-500 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-ink">{p.status}</span>
              <span className="rounded-full bg-paper border border-ink/15 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-ink/70">{p.type}</span>
            </div>
            <h1 className="mt-5 font-display font-bold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tightest">{p.title}</h1>
            <p className="mt-3 text-[15px] text-ink/65">{p.subtitle} · {p.location}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <p className="text-[12px] font-mono uppercase tracking-[0.18em] text-ink/55">Prix</p>
            <p className="mt-1 font-display font-bold text-[clamp(2rem,3.5vw,2.8rem)] leading-none tabnum">CHF {p.priceCHF.toLocaleString("fr-CH")}</p>
            <p className="mt-2 text-[13px] text-ink/60 tabnum">{p.pricePerSqmCHF} CHF / m²</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 mt-10">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden bg-ink">
            <Image src={p.images[0]} alt={p.title} fill className="object-cover" sizes="(min-width:1024px) 66vw, 100vw" priority />
          </div>
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {p.images.slice(1, 4).map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink">
                <Image src={src} alt={`${p.title} — ${i + 2}`} fill className="object-cover" sizes="(min-width:1024px) 33vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-12 gap-8 lg:gap-14">
          {/* Left: spec sheet */}
          <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-paper-50 border border-ink/10 p-7">
              <p className="eyebrow">Fiche technique</p>
              <ul className="mt-5 divide-y divide-ink/10">
                <Row label="Année" value={String(p.year)} />
                <Row label="Construction" value={p.info.construction} />
                <Row label="Chauffage" value={p.info.heating} />
                <Row label="Surface habitable" value={`${totalHabitable} m²`} />
                <Row label="Jardin" value={`${totalGarden} m²`} />
                <Row label="Mandataire" value={p.author} />
              </ul>
              <Link href="/contact" className="mt-7 inline-flex w-full justify-center items-center gap-2 rounded-full bg-ink text-paper px-5 py-3 text-[13px] font-medium hover:bg-gold-500 hover:text-ink transition">
                Demander une visite →
              </Link>
              <a href="tel:+41786042503" className="mt-3 block text-center text-[13px] text-ink/70 link">
                +41 78 604 25 03
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-ink/10 p-7">
              <p className="eyebrow">Équipements</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <li key={f} className="rounded-full border border-ink/15 px-3 py-1.5 text-[12px]">{f}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right: layout */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div>
              <p className="eyebrow">Description</p>
              <h2 className="mt-3 font-display font-bold text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight tracking-tight">
                Deux unités mitoyennes neuves, jardins privatifs, à signer au cœur de Genève.
              </h2>
              <p className="mt-5 text-[15px] text-ink/75 leading-relaxed max-w-2xl">
                Construction neuve à pompe à chaleur. Chaque villa offre une distribution
                fonctionnelle sur deux niveaux, avec terrasse dallée, jardin privatif,
                place de parc et couvert à voiture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Rez-de-chaussée", items: p.layout.ground },
                { title: "1er étage", items: p.layout.first },
                { title: "Extérieurs", items: p.layout.outside },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl border border-ink/10 p-6 bg-paper">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">{b.title}</p>
                  <ul className="mt-4 space-y-2">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[13.5px] text-ink/80 leading-relaxed">
                        <span className="text-gold-700 mt-[3px]">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-ink/10 p-7 bg-paper">
              <div className="flex items-center justify-between">
                <p className="eyebrow">Surfaces</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">m²</span>
              </div>
              <table className="mt-4 w-full text-[14px]">
                <thead>
                  <tr className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                    <th className="text-left pb-3 font-medium">Lot</th>
                    <th className="text-right pb-3 font-medium">Habitable</th>
                    <th className="text-right pb-3 font-medium">Jardin</th>
                  </tr>
                </thead>
                <tbody>
                  {p.surfaces.map((s) => (
                    <tr key={s.label} className="border-t border-ink/10">
                      <td className="py-3 font-display font-semibold">{s.label}</td>
                      <td className="py-3 text-right tabnum">{s.habitable}</td>
                      <td className="py-3 text-right tabnum">{s.jardin}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-ink/10 bg-paper-50">
                    <td className="py-3 font-display font-semibold">Total</td>
                    <td className="py-3 text-right tabnum font-semibold">{totalHabitable}</td>
                    <td className="py-3 text-right tabnum font-semibold">{totalGarden}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="py-3 flex items-center justify-between gap-4">
      <span className="text-[12.5px] text-ink/60 uppercase tracking-[0.1em]">{label}</span>
      <span className="text-[13.5px] font-medium text-right">{value}</span>
    </li>
  );
}
