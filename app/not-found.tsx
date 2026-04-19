import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-28 lg:py-40">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-4 font-display font-bold text-[clamp(4rem,14vw,12rem)] leading-[0.9] tracking-tightest">
        Page <span className="text-gold-700">introuvable.</span>
      </h1>
      <p className="mt-6 max-w-xl text-[16px] text-ink/70 leading-relaxed">
        Le lien que vous suivez n'existe plus. Reprenons depuis l'accueil — ou écrivez-nous, on retrouvera ce que vous cherchez.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-[13px] font-medium hover:bg-gold-500 hover:text-ink transition">
          Retour à l'accueil →
        </Link>
        <Link href="/contact" className="link text-[14px] py-3 px-2">Nous écrire</Link>
      </div>
    </section>
  );
}
