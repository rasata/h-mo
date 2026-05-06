import { useI18n } from "@/i18n/useI18n";
import { Section } from "./Section";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact" eyebrow="07" title={t.contact.title} intro={t.contact.intro}>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-5">
          <a
            href="mailto:h.monrique@gmail.com?subject=Contact%20CV%20Herv%C3%A9%20Monrique"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition rounded-sm"
          >
            {t.contact.send}
          </a>
          <p className="text-xs text-muted-foreground italic pt-2">{t.contact.confidential}</p>
        </div>

        <aside className="md:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.contact.or}</p>
          <div className="space-y-4 text-sm">
            <a
              href="mailto:h.monrique@gmail.com"
              className="block hover:text-primary transition-colors"
            >
              <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {t.contact.email}
              </span>
              h.monrique@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/herve-monrique"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-primary transition-colors"
            >
              <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {t.contact.linkedin}
              </span>
              linkedin.com/in/herve-monrique
            </a>
            <div className="border-t hairline pt-4 text-xs text-muted-foreground leading-relaxed">
              Profil propulsé par <strong className="text-foreground/80">Aquantic</strong> (Zonova SARL) — Belfort.
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border hairline rounded-sm px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  );
}
