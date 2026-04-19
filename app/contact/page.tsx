import { company } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pt-20 pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 reveal d1">
            <SectionLabel number="№ I" label="Premier contact" />
            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tightest">
              Écrivez-nous.<br />
              <span className="italic-display text-verdigris-600">On répond vite.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-3xl px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-12 gap-8">
          {/* Form */}
          <form
            className="col-span-12 lg:col-span-7 rounded-3xl border border-ink/15 bg-bone-50 p-8 lg:p-12"
            action="mailto:info@tous-mandats.ch"
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-2 gap-6">
              <Field label="Nom" name="nom" autoComplete="name" />
              <Field label="Téléphone" name="phone" autoComplete="tel" />
              <Field label="E-mail" name="email" type="email" className="col-span-2" autoComplete="email" />
              <div className="col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
                  Sujet du dossier
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Déclaration fiscale",
                    "Gain immobilier (IBGI)",
                    "Vente d'un bien",
                    "Achat d'un bien",
                    "Comptabilité société",
                    "LALAT",
                    "Succession / donation",
                    "Autre",
                  ].map((t) => (
                    <label key={t} className="cursor-pointer">
                      <input type="radio" name="sujet" value={t} className="peer sr-only" />
                      <span className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-4 py-2 text-[12px] tracking-wide peer-checked:bg-ink peer-checked:text-bone peer-checked:border-ink hover:border-ink transition">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
                  Message
                </p>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Décrivez brièvement votre situation et vos échéances…"
                  className="w-full rounded-2xl border border-ink/20 bg-bone px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-verdigris-500 placeholder:text-ink/40"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 max-w-xs">
                Confidentialité totale. Le premier rendez-vous est gratuit.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[12px] font-sans tracking-[0.22em] uppercase text-bone hover:bg-verdigris-600 transition-colors"
              >
                Envoyer la demande <span>→</span>
              </button>
            </div>
          </form>

          {/* Side info */}
          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-6">
            <div className="rounded-3xl bg-ink text-bone p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">Téléphone</p>
              <ul className="mt-4 space-y-2 font-display text-[1.6rem]">
                {company.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-copper-400 transition">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-ink/20 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">E-mail</p>
              <a href={`mailto:${company.email}`} className="mt-3 block font-display text-[1.4rem] link">
                {company.email}
              </a>
            </div>

            <div className="rounded-3xl border border-ink/20 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">Cabinet</p>
              <address className="mt-3 not-italic text-[15px] leading-relaxed">
                {company.address.street}<br />
                {company.address.zip} {company.address.city}<br />
                {company.address.canton}
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Route+de+St-Julien+299B+1258+Perly"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block link text-[12px] font-mono uppercase tracking-[0.2em]"
              >
                Itinéraire ↗
              </a>
            </div>

            <div className="rounded-3xl border border-ink/20 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">Horaires</p>
              <p className="mt-3 font-display text-[1.3rem] leading-snug">
                Lundi → vendredi<br />
                <span className="italic-display">8h30 — 18h00</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
  autoComplete?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{label}</span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        className="mt-3 w-full rounded-2xl border border-ink/20 bg-bone px-5 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-verdigris-500"
      />
    </label>
  );
}
