import Link from "next/link";
import Image from "next/image";
import { properties, propertyTypes } from "@/lib/data";

export const metadata = { title: "Immobilier" };

export default function ImmobilierPage() {
  return (
    <>
      <section className="bg-paper-50 border-b border-ink/10">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10 pt-14 pb-12">
          <p className="eyebrow">Catalogue Tous Mandats</p>
          <h1 className="mt-4 font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tightest max-w-3xl">
            Biens choisis, vendus avec mesure.
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] text-ink/70 leading-relaxed">
            Notre vitrine reste volontairement courte. Chaque bien est défendu par un dossier
            fiscal complet — pas par un argumentaire commercial.
          </p>

          {/* Search bar */}
          <form className="mt-9 grid grid-cols-1 md:grid-cols-12 gap-3 bg-paper border border-ink/10 rounded-2xl p-3 shadow-card">
            <select className="md:col-span-3 rounded-xl bg-paper-50 border border-ink/10 px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-orange">
              <option>Statut · Vente</option>
              <option>Statut · Location</option>
            </select>
            <select className="md:col-span-3 rounded-xl bg-paper-50 border border-ink/10 px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-orange">
              <option>Type · Toutes typologies</option>
              {propertyTypes.map((t) => <option key={t.slug}>{t.name}</option>)}
            </select>
            <input className="md:col-span-3 rounded-xl bg-paper-50 border border-ink/10 px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-orange" placeholder="Ville · Genève" />
            <button type="button" className="md:col-span-3 rounded-xl bg-ink text-paper px-5 py-3 text-[14px] font-medium hover:bg-orange transition">
              Rechercher →
            </button>
          </form>
        </div>
      </section>

      {/* PROPERTY TYPE TABS */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-12">
        <ul className="flex flex-wrap gap-2">
          <li>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-[12px] font-medium">
              Tous <span className="rounded-full bg-paper/20 px-1.5 text-[10px] tabnum">{properties.length}</span>
            </span>
          </li>
          {propertyTypes.map((t) => (
            <li key={t.slug}>
              <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] border transition ${t.count > 0 ? "border-ink/20 hover:bg-ink hover:text-paper hover:border-ink" : "border-ink/10 text-ink/40"}`}>
                {t.name}
                <span className="rounded-full bg-ink/8 px-1.5 text-[10px] tabnum">{t.count.toString().padStart(2, "0")}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* LISTING */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="grid grid-cols-12 gap-5">
          {properties.map((p) => (
            <Link key={p.slug} href={`/immobilier/${p.slug}`} className="card group col-span-12 md:col-span-6 lg:col-span-4 block rounded-2xl overflow-hidden bg-paper border border-ink/10 hover:shadow-cardHover">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <Image src={p.images[0]} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-orange px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-paper">
                  {p.status}
                </span>
                <span className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-paper/95 backdrop-blur px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-ink">
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[12px] font-mono uppercase tracking-[0.16em] text-ink/55">{p.location}</p>
                <h2 className="mt-2 font-display font-semibold text-[1.3rem] leading-tight tracking-tight">{p.title}</h2>
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-ink/10 pt-4">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink/55">Prix</p>
                    <p className="mt-1 font-display font-bold text-[1.3rem] tabnum">CHF {p.priceCHF.toLocaleString("fr-CH")}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink/55">Surface</p>
                    <p className="mt-1 font-display font-bold text-[1.3rem] tabnum">{p.surfaces.reduce((a, s) => a + s.habitable, 0)} m²</p>
                  </div>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-orange-600">
                  Voir le bien <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}

          {/* Off-market card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl border border-ink/15 border-dashed bg-paper-50 p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <p className="eyebrow">Mandats discrets</p>
              <h3 className="mt-4 font-display font-bold text-[1.5rem] leading-tight tracking-tight">Biens off-market</h3>
              <p className="mt-3 text-[14px] text-ink/70 leading-relaxed">
                Plusieurs biens sont diffusés exclusivement à notre carnet d'acheteurs.
                Pour y accéder, prenez contact directement avec le cabinet.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-3 text-[13px] font-medium hover:bg-orange transition w-fit">
              Demander l'accès →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
