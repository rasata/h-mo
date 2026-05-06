import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import { LOCALES, localeLabels } from "@/i18n/translations";

const sections = ["about", "expertise", "realisations", "parcours", "formation", "mobility", "contact"] as const;

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Hervé <span className="text-primary">Monrique</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className="hover:text-foreground transition-colors">
              {t.nav[s]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-medium tracking-wider">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => setLocale(l)}
                  className={`px-1.5 py-1 transition-colors ${
                    locale === l ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Switch to ${localeLabels[l]}`}
                >
                  {localeLabels[l]}
                </button>
                {i < LOCALES.length - 1 && <span className="text-muted-foreground/40">·</span>}
              </span>
            ))}
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18" /><path d="M3 17h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t hairline bg-background/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-1"
              >
                {t.nav[s]}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
