import { useI18n } from "@/i18n/useI18n";
import { Section } from "./Section";

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about" eyebrow="01" title={t.about.title}>
      <div className="space-y-6 text-lg leading-relaxed text-foreground/85 text-pretty max-w-2xl">
        {t.about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export function Expertise() {
  const { t } = useI18n();
  return (
    <Section id="expertise" eyebrow="02" title={t.expertise.title} alt>
      <ul className="divide-y hairline">
        {t.expertise.items.map((it, i) => (
          <li key={i} className="grid md:grid-cols-12 gap-4 py-6 first:pt-0">
            <div className="md:col-span-1 font-serif text-2xl text-primary/60">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="md:col-span-11">
              <h3 className="font-serif text-xl mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{it.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Realisations() {
  const { t } = useI18n();
  return (
    <Section id="realisations" eyebrow="03" title={t.realisations.title} intro={t.realisations.intro}>
      <div className="grid sm:grid-cols-2 gap-5">
        {t.realisations.items.map((r, i) => (
          <article
            key={i}
            className="border hairline rounded-sm p-7 bg-card hover:border-primary/40 transition-colors group"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Cas {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-serif text-xl leading-snug mb-4 text-balance">{r.challenge}</h3>
            <dl className="space-y-3 text-sm text-foreground/80">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Contexte</dt>
                <dd className="leading-relaxed text-pretty">{r.context}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Action</dt>
                <dd className="leading-relaxed text-pretty">{r.action}</dd>
              </div>
              <div className="pt-3 border-t hairline">
                <dt className="text-xs uppercase tracking-wider text-primary mb-1">Résultat</dt>
                <dd className="leading-relaxed text-pretty font-medium">{r.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Parcours() {
  const { t } = useI18n();
  return (
    <Section id="parcours" eyebrow="04" title={t.parcours.title} alt>
      <ol className="relative border-l hairline pl-8 space-y-12">
        {t.parcours.detailed.map((p, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
            {i === 0 && (
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-accent-foreground bg-accent/30 px-2 py-1 rounded-sm mb-3">
                {t.parcours.current}
              </span>
            )}
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
              {p.period} · {p.location}
            </p>
            <h3 className="font-serif text-2xl leading-snug">{p.role}</h3>
            <p className="text-primary text-sm font-medium mb-4">{p.company}</p>
            <ul className="space-y-2 text-foreground/80 text-[15px] leading-relaxed">
              {p.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-primary/60 mt-2 w-3 border-t hairline shrink-0" />
                  <span className="text-pretty">{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="relative">
          <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-sm border hairline bg-background" />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">1995 — 2013</p>
          <h3 className="font-serif text-xl mb-3">{t.parcours.earlyTitle}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty max-w-2xl">
            {t.parcours.earlyBody}
          </p>
        </li>
      </ol>
    </Section>
  );
}

export function Formation() {
  const { t } = useI18n();
  return (
    <Section id="formation" eyebrow="05" title={t.formation.title}>
      <div className="space-y-10">
        <div>
          {t.formation.items.map((it, i) => (
            <div key={i} className="border-t hairline py-6 grid md:grid-cols-12 gap-4">
              <p className="md:col-span-3 text-sm text-muted-foreground tracking-wider">{it.year}</p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-xl">{it.title}</h3>
                <p className="text-muted-foreground mt-1">{it.org}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-surface p-8 rounded-sm border hairline">
          <h3 className="font-serif text-lg mb-3">{t.formation.devTitle}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">{t.formation.devBody}</p>
        </div>
      </div>
    </Section>
  );
}
