import Link from "next/link";
import Image from "next/image";
import { services, properties, principles, stats } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import Marquee from "@/components/Marquee";

export default function HomePage() {
  const villa = properties[0];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-3xl px-6 lg:px-12 pt-16 lg:pt-24 pb-24 lg:pb-32">
          <div className="grid grid-cols-12 gap-y-10 gap-x-8">
            <div className="col-span-12 lg:col-span-7 reveal d1">
              <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/60">
                <span className="tab-num">№ 01</span>
                <span className="h-px w-10 bg-ink/30" />
                <span>Cabinet · Genève · depuis Perly</span>
              </div>
              <h1 className="mt-8 font-display text-[clamp(3.2rem,9.5vw,9rem)] leading-[0.88] tracking-tightest">
                Fiscalité,<br />
                <span className="italic-display text-verdigris-600">immobilier</span><br />
                & gestion.
              </h1>
              <p className="mt-10 max-w-xl text-[17px] leading-relaxed text-ink/75">
                Tous Mandats est un cabinet genevois qui défend votre patrimoine
                comme s'il s'agissait du sien — du gain immobilier au dernier acompte
                trimestriel.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase text-bone hover:bg-verdigris-600 transition-colors"
                >
                  Premier rendez-vous offert
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/fiscalite"
                  className="link text-[14px] tracking-wide text-ink/80"
                >
                  Voir nos expertises fiscales
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 lg:col-start-9 reveal d3">
              <div className="border-t border-ink/15 pt-6 grid grid-cols-2 gap-y-8 gap-x-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-[2.4rem] leading-none tab-num">{s.value}</p>
                    <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-ink/55 leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-ink/15 bg-bone-50 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  Permanence
                </p>
                <p className="mt-3 font-display text-[1.6rem] leading-snug">
                  Lundi — vendredi <span className="italic-display">8h30 → 18h00</span>
                </p>
                <a href="tel:+41786042503" className="mt-3 inline-block link text-[14px]">
                  +41 78 604 25 03
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="border-y border-ink/15 bg-bone-50">
          <Marquee
            items={[
              "Fiscalité immobilière",
              "IBGI · LALAT",
              "Comptabilité",
              "Courtage hypothécaire",
              "Gestion locative",
              "Succession",
              "Ruling immobilier",
            ]}
          />
        </div>
      </section>

      {/* SERVICES — editorial grid */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel number="№ 02" label="Domaines de prédilection" />
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
              Huit champs<br />
              <span className="italic-display">d'intervention.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 lg:col-start-8 self-end text-[16px] text-ink/70 leading-relaxed">
            Pour un patrimoine immobilier ou une société, Tous Mandats couvre tout
            ce qui se passe entre la déclaration et la signature notariée. Sans
            sous-traiter, sans jargon, sans surprise.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-ink/15">
          {services.map((s) => (
            <li
              key={s.n}
              className="group relative border-b border-ink/15 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(4n))]:border-r border-ink/15 p-7 lg:p-9 min-h-[260px] flex flex-col justify-between hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] tab-num">{s.n}</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper group-hover:bg-bone transition" />
              </div>
              <div>
                <h3 className="font-display text-[1.7rem] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink/70 group-hover:text-bone/70">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* MANIFESTO */}
      <section className="bg-ink text-bone py-28 lg:py-40">
        <div className="mx-auto max-w-screen-3xl px-6 lg:px-12">
          <SectionLabel number="№ 03" label="Manifeste" />
          <div className="mt-10 grid grid-cols-12 gap-8">
            <p className="col-span-12 lg:col-span-9 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.06] tracking-tight">
              Nous gérons des dossiers fiscaux comme on gère{" "}
              <span className="italic-display text-copper-400">une maison</span>{" "}
              — avec les mêmes exigences de soin, de discrétion et d'entretien
              quotidien.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p) => (
              <div key={p.n} className="border-t border-bone/20 pt-6">
                <span className="font-mono text-[11px] tracking-[0.22em] text-bone/60">{p.n}</span>
                <h3 className="mt-4 font-display text-[1.5rem] leading-tight">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTY */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel number="№ 04" label="À la vente" />
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
              Une adresse<br />
              <span className="italic-display">à signer.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 self-end">
            <Link href="/immobilier" className="link text-[14px] tracking-wide">
              Voir tous les biens →
            </Link>
          </div>
        </div>

        <Link
          href={`/immobilier/${villa.slug}`}
          className="card group block rounded-3xl overflow-hidden bg-ink text-bone"
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
              <Image
                src={villa.images[0]}
                alt={villa.title}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-bone/90 backdrop-blur px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                {villa.status}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 p-10 lg:p-14 flex flex-col justify-between gap-12">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/55">
                  {villa.type} · {villa.location}
                </p>
                <h3 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] tracking-tight">
                  {villa.title}
                </h3>
                <p className="mt-5 text-[14px] leading-relaxed text-bone/70">
                  Construction neuve à pompe à chaleur. Deux unités mitoyennes,
                  jardins privatifs, parking. Genève intra-muros.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bone/20 pt-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/55">Prix</p>
                  <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">
                    CHF {villa.priceCHF.toLocaleString("fr-CH")}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/55">CHF / m²</p>
                  <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">
                    {villa.pricePerSqmCHF}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/55">Habitable</p>
                  <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">
                    {villa.surfaces.reduce((a, s) => a + s.habitable, 0)} m²
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/55">Jardin</p>
                  <p className="mt-2 font-display text-[1.8rem] leading-none tab-num">
                    {villa.surfaces.reduce((a, s) => a + s.jardin, 0)} m²
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pb-32">
        <div className="rounded-3xl border border-ink/15 bg-bone-50 px-8 py-16 lg:p-20 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel number="№ 05" label="Premier contact" />
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
              Prenez quinze minutes.<br />
              <span className="italic-display">On vous éclaire le reste.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] text-ink/70 leading-relaxed">
              Décrivez votre dossier — particulier, indépendant ou société — nous
              vous rappelons sous 24 h ouvrées avec une première lecture.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase text-bone hover:bg-verdigris-600 transition-colors"
            >
              Démarrer un dossier <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
