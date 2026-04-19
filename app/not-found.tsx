import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 py-32 lg:py-48">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">Erreur 404</p>
      <h1 className="mt-8 font-display text-[clamp(4rem,15vw,18rem)] leading-[0.85] tracking-tightest">
        Page <span className="italic-display text-verdigris-600">introuvable.</span>
      </h1>
      <p className="mt-8 max-w-xl text-[16px] text-ink/70">
        Le lien que vous suivez n'existe plus, ou n'a jamais existé. Reprenons
        depuis l'accueil — ou écrivez-nous, on retrouvera ce que vous cherchez.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase hover:bg-verdigris-600 transition">
          Retour à l'accueil →
        </Link>
        <Link href="/contact" className="link text-[14px]">Nous écrire</Link>
      </div>
    </section>
  );
}
