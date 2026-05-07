import { useI18n } from "@/i18n/useI18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t hairline py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-xs text-muted-foreground">
        <p>© {year} Hervé Monrique. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
