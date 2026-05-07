import { useI18n } from "@/i18n/useI18n";
import { Section } from "./Section";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact" eyebrow="07" title={t.contact.title} intro={t.contact.intro}>
      <aside className="max-w-xl space-y-6">
        <div className="space-y-4 text-sm">
          <a
            href="mailto:h.monrique@gmail.com"
            className="block transition-colors hover:text-primary"
          >
            <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
              {t.contact.email}
            </span>
            h.monrique@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/herve-monrique"
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-primary"
          >
            <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
              {t.contact.linkedin}
            </span>
            linkedin.com/in/herve-monrique
          </a>
          <div className="border-t hairline pt-4 text-xs text-muted-foreground leading-relaxed">
            profil template initiated with ❤️ by <strong className="text-foreground/80">Aquantic</strong>
          </div>
        </div>
      </aside>
    </Section>
  );
}
