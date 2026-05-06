import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Theme = "colore" | "industriel" | "innovant" | "manager";

export const THEMES: { id: Theme; label: string; description: string; swatch: string[] }[] = [
  {
    id: "colore",
    label: "Coloré",
    description: "Pétrole, sauge, argile — chaleureux et engageant.",
    swatch: ["#f6f3ec", "#3a5e72", "#a3b8a5", "#c89c7a"],
  },
  {
    id: "industriel",
    label: "Industriel",
    description: "Anthracite, acier brossé, ocre rouille — terrain et exigence.",
    swatch: ["#ecebe7", "#2b2f33", "#6c757d", "#a3593e"],
  },
  {
    id: "innovant",
    label: "Innovant",
    description: "Indigo profond, électrique, lumière — vision et tech.",
    swatch: ["#f4f5fa", "#1d2348", "#5b6cff", "#7ee0c2"],
  },
  {
    id: "manager",
    label: "Manager",
    description: "Bleu nuit, ivoire, bordeaux — autorité posée.",
    swatch: ["#f8f6f1", "#19243a", "#3d4a66", "#7a2630"],
  },
];

const STORAGE_KEY = "hm-theme";

type Ctx = { theme: Theme; setTheme: (t: Theme) => void };
const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children, initial }: { children: ReactNode; initial?: Theme }) {
  const [theme, setThemeState] = useState<Theme>(initial ?? "colore");

  useEffect(() => {
    if (initial) return;
    const stored = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Theme | null)) || null;
    if (stored && THEMES.some((t) => t.id === stored)) setThemeState(stored);
  }, [initial]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const value = useMemo<Ctx>(
    () => ({
      theme,
      setTheme: (t) => {
        setThemeState(t);
        if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, t);
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
}
