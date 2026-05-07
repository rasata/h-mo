import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useEffect } from "react";
import { I18nProvider, useI18n } from "@/i18n/useI18n";
import { ThemeProvider, useTheme, type Theme } from "@/theme/useTheme";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Expertise, Realisations, Parcours, Formation } from "@/components/Sections";
import { MobilityMap } from "@/components/MobilityMap";

import { Footer } from "@/components/Footer";
import { WelcomeShare } from "@/components/WelcomeShare";
import type { Locale } from "@/i18n/translations";

const searchSchema = z.object({
  lang: fallback(z.enum(["fr", "en", "de"]), "fr").optional(),
  theme: fallback(z.enum(["colore", "industriel", "innovant", "manager"]), "colore").optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Hervé Monrique — Cutover Leader & Chef de Projet senior" },
      {
        name: "description",
        content:
          "30 ans d'expérience industrielle. Pilotage de cut-over ERP, transformation digitale et coordination cross-fonctionnelle pour grands groupes industriels et énergie.",
      },
      { property: "og:title", content: "Hervé Monrique — Cutover Leader & Chef de Projet senior" },
      {
        property: "og:description",
        content:
          "Cutover Leader · PMO industriel · Migration SI. 30 ans d'expérience. Disponible 01/07/2026.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

function ParamSync() {
  const { lang, theme } = Route.useSearch();
  const { setLocale } = useI18n();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (lang) setLocale(lang as Locale);
  }, [lang, setLocale]);

  useEffect(() => {
    if (theme) setTheme(theme as Theme);
  }, [theme, setTheme]);

  return null;
}

function Index() {
  const { lang, theme } = Route.useSearch();
  const hasSharedParams = Boolean(lang || theme);
  return (
    <ThemeProvider initial={theme as Theme | undefined}>
      <I18nProvider initial={lang as Locale | undefined}>
        <ParamSync />
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <About />
            <Expertise />
            <Realisations />
            <Parcours />
            <Formation />
            <MobilityMap />
          </main>
          <Footer />
          {!hasSharedParams && <WelcomeShare />}
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
