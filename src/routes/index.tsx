import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n/useI18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Expertise, Realisations, Parcours, Formation } from "@/components/Sections";
import { MobilityMap } from "@/components/MobilityMap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
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

function Index() {
  return (
    <I18nProvider>
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
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
