import { useI18n } from "@/i18n/useI18n";

export function Hero() {
  const { t, locale } = useI18n();
  const pdfHref = `/cv/Herve-Monrique-CV-${locale.toUpperCase()}.pdf`;

  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-8">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl">
          {t.hero.name}
          <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-4 font-sans font-light tracking-normal">
            {t.hero.role}
          </span>
        </h1>

        <p className="mt-10 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed text-pretty">
          {t.hero.pitch}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity rounded-sm"
          >
            {t.hero.contactCta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={pdfHref}
            download
            className="inline-flex items-center gap-2 border hairline px-6 py-3 text-sm font-medium hover:bg-surface transition-colors rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            {t.hero.pdfCta}
          </a>
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-muted-foreground border-t hairline pt-6 max-w-xl">
          {t.hero.availability}
        </p>
      </div>
    </section>
  );
}
