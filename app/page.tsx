import Link from "next/link";
import Image from "next/image";
import { services, properties, principles, stats, transactions, propertyTypes, team, media } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export default function HomePage() {
  const villa = properties[0];
  return (
    <>
      {/* HERO — full-width photo + tagline + CTA */}
      <section className="relative h-[78vh] min-h-[560px] max-h-[820px] overflow-hidden">
        <Image
          src={media.hero}
          alt="Villa moderne à Genève"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full mx-auto max-w-screen-3xl px-5 lg:px-10 flex flex-col justify-end pb-16 lg:pb-24">
          <div className="reveal d1 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/15 backdrop-blur px-3.5 py-1.5 text-paper text-[12px] font-mono tracking-[0.16em] uppercase ring-1 ring-paper/20">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Genève · Perly
            </span>
            <h1 className="mt-6 font-display font-bold text-paper text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tightest">
              Optimisez votre fiscalité,<br />
              valorisez votre <span className="text-gold-300">patrimoine.</span>
            </h1>
            <p className="mt-5 text-paper/85 text-[17px] max-w-xl leading-relaxed">
              Cabinet genevois indépendant : déclarations, gain immobilier, comptabilité,
              gestion locative et transactions. Premier rendez-vous offert.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-[14px] font-semibold text-ink hover:bg-ink hover:text-gold-300 transition"
              >
                Contactez-nous <span>→</span>
              </Link>
              <Link
                href="/immobilier"
                className="inline-flex items-center gap-2 rounded-full bg-paper/10 backdrop-blur ring-1 ring-paper/30 px-6 py-3.5 text-[14px] text-paper hover:bg-paper hover:text-ink transition"
              >
                Voir les biens
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 hidden lg:block">
          <div className="mx-auto max-w-screen-3xl px-10">
            <div className="grid grid-cols-4 bg-paper border-t border-x border-ink/10 rounded-t-2xl shadow-card">
              {stats.map((s, i) => (
                <div key={s.label} className={`px-7 py-6 ${i > 0 ? "border-l border-ink/10" : ""}`}>
                  <p className="font-display font-bold text-[1.9rem] leading-none tabnum">{s.value}</p>
                  <p className="mt-1.5 text-[12px] text-ink/60 uppercase tracking-[0.14em]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 pt-20 lg:pt-28 pb-16">
        <div className="grid grid-cols-12 gap-8 mb-10 lg:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow">Nos domaines de prédilection</p>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tighter">
              Huit expertises, une seule signature.
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 lg:col-start-9 self-end text-ink/70 text-[15.5px] leading-relaxed">
            De la déclaration fiscale à la signature notariée, Tous Mandats couvre
            tout le cycle de vie d'un patrimoine immobilier ou d'une société.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <li key={s.title} className="card group rounded-2xl border border-ink/10 bg-paper p-6 hover:shadow-cardHover hover:border-gold-500/40">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-50 text-gold-700 group-hover:bg-gold-500 group-hover:text-ink transition">
                  <ServiceIcon name={s.icon} />
                </span>
              </div>
              <h3 className="mt-6 font-display font-semibold text-[1.05rem] leading-tight">{s.title}</h3>
              <p className="mt-2 text-[13.5px] text-ink/65 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* À PROPOS */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src={media.about} alt="Genève" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow">À propos</p>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
              Un cabinet familial,<br />une lecture genevoise du droit fiscal.
            </h2>
            <p className="mt-6 text-[16px] text-ink/75 leading-relaxed max-w-xl">
              Société spécialisée en fiscalité immobilière pour particuliers et professionnels.
              Nous accompagnons les démarches fiscales et administratives liées à la vente, à la
              détention et à la transmission de biens — avec une lecture fine du droit cantonal.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 max-w-2xl">
              {principles.map((p) => (
                <li key={p.title} className="border-t border-ink/10 pt-4">
                  <h3 className="font-display font-semibold text-[15px] leading-snug">{p.title}</h3>
                  <p className="mt-1.5 text-[13.5px] text-ink/65 leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ul>
            <Link href="/equipe" className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-paper hover:bg-gold-500 hover:text-ink transition">
              Rencontrer l'équipe →
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSACTIONS — Acheter / Vendre / Louer */}
      <section className="bg-paper-50 border-y border-ink/10 py-20 lg:py-28">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow">Services transactionnels</p>
              <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
                Acheter · Vendre · Louer
              </h2>
            </div>
            <Link href="/immobilier" className="link text-[14px] font-medium text-ink/80">Voir tous les biens →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {transactions.map((t) => (
              <Link key={t.label} href={t.href} className="card group block rounded-3xl overflow-hidden bg-paper shadow-card hover:shadow-cardHover">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={t.image} alt={t.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width:768px) 33vw, 100vw" />
                  <div className="absolute top-4 left-4 rounded-full bg-paper/95 backdrop-blur px-4 py-1.5 text-[12px] font-medium tracking-tight">
                    {t.label}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-semibold text-[1.4rem] leading-tight">{t.label}</h3>
                  <p className="mt-2 text-[14px] text-ink/65 leading-relaxed">{t.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-700">
                    Démarrer <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY CATEGORIES */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow">Catégories de biens</p>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
              Parcourir par typologie
            </h2>
          </div>
          <Link href="/immobilier" className="link text-[14px] font-medium text-ink/80">Voir le catalogue →</Link>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {propertyTypes.map((t) => (
            <li key={t.slug}>
              <div className="card group block rounded-2xl overflow-hidden bg-ink relative aspect-[4/5]">
                <Image src={t.image} alt={t.name} fill className="object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" sizes="(min-width:768px) 33vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display font-semibold text-paper text-[1.1rem] leading-tight">{t.name}</h3>
                  <p className="mt-1 text-[12px] text-paper/70 tracking-wide">
                    {t.count > 0 ? `${t.count} annonce${t.count > 1 ? "s" : ""}` : "Bientôt disponible"}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED PROPERTY */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow">Bien à la une</p>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
              Une adresse à signer
            </h2>
          </div>
        </div>

        <Link href={`/immobilier/${villa.slug}`} className="card group block rounded-3xl overflow-hidden bg-paper border border-ink/10 hover:shadow-cardHover">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
              <Image src={villa.images[0]} alt={villa.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 60vw, 100vw" />
              <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-ink">
                {villa.status}
              </span>
            </div>
            <div className="col-span-12 lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between gap-10">
              <div>
                <p className="text-[12px] font-mono uppercase tracking-[0.18em] text-ink/55">{villa.type} · {villa.location}</p>
                <h3 className="mt-4 font-display font-bold text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-tighter">{villa.title}</h3>
                <p className="mt-4 text-[14.5px] text-ink/70 leading-relaxed">
                  Construction neuve à pompe à chaleur. Deux unités mitoyennes, jardins privatifs, parking. Genève intra-muros.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/10 pt-7">
                <Stat label="Prix" value={`CHF ${villa.priceCHF.toLocaleString("fr-CH")}`} />
                <Stat label="CHF / m²" value={String(villa.pricePerSqmCHF)} />
                <Stat label="Habitable" value={`${villa.surfaces.reduce((a, s) => a + s.habitable, 0)} m²`} />
                <Stat label="Jardin" value={`${villa.surfaces.reduce((a, s) => a + s.jardin, 0)} m²`} />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-paper-50 border-y border-ink/10 py-20 lg:py-28">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow">Équipe</p>
              <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tighter">
                Une signature au bas de chaque dossier
              </h2>
            </div>
            <Link href="/equipe" className="link text-[14px] font-medium text-ink/80">Voir l'équipe →</Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <li key={m.name} className="card rounded-2xl bg-paper border border-ink/10 p-7 hover:shadow-cardHover">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-50 text-gold-800 font-display font-bold text-[1.05rem]">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[1rem] leading-tight">{m.name}</h3>
                    <p className="text-[12px] text-ink/60 mt-1">{m.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-[13.5px] text-ink/70 leading-relaxed">{m.bio}</p>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[12px] font-mono uppercase tracking-[0.16em] link text-gold-700">
                    LinkedIn ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-20 lg:py-28">
        <div className="rounded-3xl bg-ink text-paper p-10 lg:p-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow text-gold-300">Premier rendez-vous offert</p>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tighter">
              Parlons de votre patrimoine.
            </h2>
            <p className="mt-4 text-paper/70 text-[16px] max-w-xl leading-relaxed">
              Décrivez votre dossier — particulier, indépendant ou société — nous vous rappelons sous 24 h ouvrées avec une première lecture.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex lg:justify-end">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-[14px] font-semibold text-ink hover:bg-ink hover:text-gold-300 transition">
              Démarrer un dossier →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink/55">{label}</p>
      <p className="mt-1.5 font-display font-semibold text-[1.4rem] leading-tight tabnum">{value}</p>
    </div>
  );
}
