import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useI18n } from "@/i18n/useI18n";
import { Section } from "./Section";
import { submitContact } from "@/server/contact.functions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setStatus("loading");
    setErrorMsg("");
    try {
      await submit({
        data: {
          name: String(f.get("name") ?? ""),
          email: String(f.get("email") ?? ""),
          function: String(f.get("function") ?? ""),
          message: String(f.get("message") ?? ""),
        },
      });
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return (
    <Section id="contact" eyebrow="07" title={t.contact.title} intro={t.contact.intro}>
      <div className="grid md:grid-cols-5 gap-10">
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="name" label={t.contact.name} required maxLength={100} />
            <Field name="email" label={t.contact.email} type="email" required maxLength={255} />
          </div>
          <Field name="function" label={t.contact.function} maxLength={150} />
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground block mb-2">
              {t.contact.message}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              className="w-full bg-transparent border hairline rounded-sm px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition rounded-sm disabled:opacity-60"
          >
            {status === "loading" ? "…" : t.contact.send}
          </button>
          {status === "sent" && (
            <p className="text-xs text-primary">↗ Merci, votre message a bien été transmis.</p>
          )}
          {status === "error" && (
            <p className="text-xs text-destructive">Erreur : {errorMsg}</p>
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
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
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
        maxLength={maxLength}
        className="w-full bg-transparent border hairline rounded-sm px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  );
}
