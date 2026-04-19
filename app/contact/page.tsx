import { company } from "@/lib/data";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper-50 border-b border-ink/10">
        <div className="mx-auto max-w-screen-3xl px-5 lg:px-10 pt-14 pb-12">
          <p className="eyebrow">Premier contact</p>
          <h1 className="mt-4 font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tightest max-w-3xl">
            Écrivez-nous. <span className="text-gold-700">On répond vite.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] text-ink/70 leading-relaxed">
            Décrivez votre situation : nous revenons vers vous sous 24 h ouvrées avec une première lecture.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-3xl px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-8">
          {/* FORM */}
          <form
            className="col-span-12 lg:col-span-7 rounded-3xl border border-ink/10 bg-paper p-8 lg:p-10"
            action="mailto:info@tous-mandats.ch"
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-2 gap-5">
              <Field label="Nom" name="nom" autoComplete="name" />
              <Field label="Téléphone" name="phone" autoComplete="tel" />
              <Field label="E-mail" name="email" type="email" className="col-span-2" autoComplete="email" />

              <div className="col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 mb-3">Sujet</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Déclaration fiscale",
                    "Gain immobilier (IBGI)",
                    "Vendre un bien",
                    "Acheter un bien",
                    "Comptabilité société",
                    "LALAT",
                    "Succession / donation",
                    "Autre",
                  ].map((t) => (
                    <label key={t} className="cursor-pointer">
                      <input type="radio" name="sujet" value={t} className="peer sr-only" />
                      <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-[13px] hover:border-ink peer-checked:bg-ink peer-checked:text-paper peer-checked:border-ink transition">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 mb-3">Message</p>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Décrivez brièvement votre situation et vos échéances…"
                  className="w-full rounded-2xl border border-ink/15 bg-paper-50 px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-gold-500 placeholder:text-ink/40"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55 max-w-xs">
                Confidentialité totale · premier rendez-vous offert.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-[14px] font-semibold text-ink hover:bg-ink hover:text-gold-300 transition"
              >
                Envoyer la demande →
              </button>
            </div>
          </form>

          {/* SIDEBAR */}
          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-4">
            <div className="rounded-3xl bg-ink text-paper p-7">
              <p className="eyebrow text-gold-300">Téléphone</p>
              <ul className="mt-4 space-y-2 font-display font-bold text-[1.4rem]">
                {company.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-gold-300 transition">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            <InfoCard title="E-mail">
              <a href={`mailto:${company.email}`} className="font-display font-semibold text-[1.05rem] link">
                {company.email}
              </a>
            </InfoCard>

            <InfoCard title="Cabinet">
              <address className="not-italic text-[14.5px] leading-relaxed">
                {company.address.street}<br />
                {company.address.zip} {company.address.city}<br />
                {company.address.canton}
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Route+de+St-Julien+299B+1258+Perly"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[12px] font-mono uppercase tracking-[0.18em] link text-gold-700"
              >
                Itinéraire ↗
              </a>
            </InfoCard>

            <InfoCard title="Horaires">
              <p className="text-[14.5px] leading-relaxed">
                Lundi → vendredi<br />
                <span className="font-display font-bold text-[1.1rem]">8h30 — 18h00</span>
              </p>
            </InfoCard>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", className = "", autoComplete }: { label: string; name: string; type?: string; className?: string; autoComplete?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">{label}</span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        className="mt-2.5 w-full rounded-2xl border border-ink/15 bg-paper-50 px-5 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-gold-500"
      />
    </label>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-paper p-7">
      <p className="eyebrow">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
