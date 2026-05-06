import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOCALES, localeLabels, type Locale } from "@/i18n/translations";
import { THEMES, type Theme, useTheme } from "@/theme/useTheme";
import { useI18n } from "@/i18n/useI18n";

const SEEN_KEY = "hm-welcome-seen";

export function WelcomeShare() {
  const { locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" && localStorage.getItem(SEEN_KEY);
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function close() {
    setOpen(false);
    if (typeof window !== "undefined") localStorage.setItem(SEEN_KEY, "1");
  }

  function shareUrl() {
    if (typeof window === "undefined") return "";
    const u = new URL(window.location.href);
    u.searchParams.set("lang", locale);
    u.searchParams.set("theme", theme);
    return u.toString();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <>
      {/* Floating share button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
        aria-label="Partager / personnaliser"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.5 10.5L15.5 6.5M8.5 13.5L15.5 17.5" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 280 }}
              className="bg-background border hairline rounded-md shadow-2xl w-full max-w-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-primary mb-2">
                      Personnaliser & partager
                    </p>
                    <h2 className="font-serif text-2xl leading-tight">
                      Choisissez la langue et le ton du profil
                    </h2>
                  </div>
                  <button
                    onClick={close}
                    className="text-muted-foreground hover:text-foreground p-1 -m-1"
                    aria-label="Fermer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>

                {/* Language */}
                <div className="mb-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Langue
                  </p>
                  <div className="flex gap-2">
                    {LOCALES.map((l) => (
                      <button
                        key={l}
                        onClick={() => setLocale(l)}
                        className={`flex-1 py-2.5 text-sm font-medium border hairline rounded-sm transition-all ${
                          locale === l
                            ? "bg-primary text-primary-foreground border-primary"
                            : "hover:bg-surface"
                        }`}
                      >
                        {localeLabels[l]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme */}
                <div className="mb-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Thème
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {THEMES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id as Theme)}
                        className={`text-left p-3 border rounded-sm transition-all ${
                          theme === t.id
                            ? "border-primary bg-surface"
                            : "hairline hover:bg-surface"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {t.swatch.map((c, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-sm border hairline"
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                        <p className="font-medium text-sm">{t.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                          {t.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Share URL */}
                <div className="border-t hairline pt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Lien de partage
                  </p>
                  <div className="flex gap-2">
                    <input
                      readOnly
                      value={shareUrl()}
                      className="flex-1 bg-surface border hairline rounded-sm px-3 py-2 text-xs font-mono text-muted-foreground truncate"
                    />
                    <button
                      onClick={copyLink}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-sm text-xs font-medium hover:opacity-90"
                    >
                      {copied ? "✓ Copié" : "Copier"}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Le destinataire ouvre le profil avec cette langue et ce thème pré-sélectionnés.
                  </p>
                </div>

                <button
                  onClick={close}
                  className="w-full mt-6 text-sm text-muted-foreground hover:text-foreground py-2"
                >
                  Continuer la lecture
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
