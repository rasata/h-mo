import { useI18n } from "@/i18n/useI18n";
import portrait from "@/assets/herve-monrique.jpg";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
        <div>
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
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 border hairline px-6 py-3 text-sm font-medium hover:bg-surface transition-colors rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v7H6z" />
            </svg>
            {t.hero.pdfCta}
          </button>
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-muted-foreground border-t hairline pt-6 max-w-xl">
          {t.hero.availability}
        </p>
        </div>

        <div className="relative shrink-0 mx-auto lg:mx-0 lg:mt-4">
          <div className="absolute -inset-3 bg-accent/15 rounded-full blur-2xl -z-10" />
          <img
            src={portrait}
            alt={t.hero.name}
            className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-xl ring-1 ring-border"
          />
        </div>
      </div>
    </section>
  );
}
