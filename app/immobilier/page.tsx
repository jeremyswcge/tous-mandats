import Link from "next/link";
import Image from "next/image";
import { properties, propertyTypes } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = { title: "Immobilier" };

export default function ImmobilierPage() {
  return (
    <>
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pt-20 pb-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 reveal d1">
            <SectionLabel number="№ I" label="Catalogue Tous Mandats" />
            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tightest">
              Biens choisis,<br />
              <span className="italic-display text-verdigris-600">vendus</span> avec mesure.
            </h1>
          </div>
          <p className="col-span-12 lg:col-span-5 lg:col-start-8 self-end text-[16px] text-ink/75 leading-relaxed reveal d2">
            Notre vitrine reste volontairement courte. Chaque bien est défendu
            par un dossier fiscal complet — pas par un argumentaire.
          </p>
        </div>
      </section>

      {/* TYPOLOGIES */}
      <section className="border-y border-ink/15 bg-bone-50">
        <div className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-10 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="text-ink/55">Typologies disponibles —</span>
          {propertyTypes.map((t) => (
            <span
              key={t.slug}
              className={`flex items-center gap-2 ${t.count > 0 ? "text-ink" : "text-ink/30 line-through decoration-1 decoration-ink/30"}`}
            >
              {t.name}
              <span className="tab-num">[{t.count.toString().padStart(2, "0")}]</span>
            </span>
          ))}
        </div>
      </section>

      {/* LISTING */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          {properties.map((p, i) => (
            <Link
              key={p.slug}
              href={`/immobilier/${p.slug}`}
              className="col-span-12 lg:col-span-7 group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-bone/90 backdrop-blur px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  {p.status}
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                    {String(i + 1).padStart(2, "0")} · {p.type} · {p.location}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.8rem)] leading-tight tracking-tight">
                    {p.title}
                  </h2>
                </div>
                <span className="font-display text-[1.6rem] tab-num shrink-0">
                  CHF {p.priceCHF.toLocaleString("fr-CH")}
                </span>
              </div>
            </Link>
          ))}

          {/* "Soon" placeholder card */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <div className="rounded-2xl border border-ink/20 border-dashed p-8 lg:p-10 min-h-[300px] flex flex-col justify-between bg-bone-50">
              <SectionLabel number="≈" label="Mandats discrets" />
              <div>
                <h3 className="mt-6 font-display text-[1.9rem] leading-tight tracking-tight">
                  Off-market
                </h3>
                <p className="mt-3 text-[14px] text-ink/70 leading-relaxed">
                  Plusieurs biens sont diffusés exclusivement à notre carnet.
                  Pour y accéder, prenez contact.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.2em] uppercase link"
              >
                Demander l'accès →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
