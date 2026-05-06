import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n/useI18n";
import { Section } from "./Section";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contact CV — ${f.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `${f.get("name") ?? ""} (${f.get("function") ?? ""})\n${f.get("email") ?? ""}\n\n${f.get("message") ?? ""}`,
    );
    window.location.href = `mailto:h.monrique@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="07" title={t.contact.title} intro={t.contact.intro}>
      <div className="grid md:grid-cols-5 gap-10">
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="name" label={t.contact.name} required />
            <Field name="email" label={t.contact.email} type="email" required />
          </div>
          <Field name="function" label={t.contact.function} />
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground block mb-2">
              {t.contact.message}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-transparent border hairline rounded-sm px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition rounded-sm"
          >
            {t.contact.send}
          </button>
          {sent && (
            <p className="text-xs text-muted-foreground">
              ↗ Votre client mail a été ouvert.
            </p>
          )}
          <p className="text-xs text-muted-foreground italic pt-2">{t.contact.confidential}</p>
        </form>

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
