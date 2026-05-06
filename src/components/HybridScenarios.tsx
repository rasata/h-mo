import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Scenario = {
  id: string;
  city: string;
  km: string;
  onsite: number; // days/week
  remote: number;
  note: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: "montbeliard",
    city: "Autour de Montbéliard",
    km: "≤ 50 km",
    onsite: 3,
    remote: 2,
    note: "Bassin Belfort / Mulhouse / Bâle / nord Doubs.",
  },
  {
    id: "besancon",
    city: "Besançon",
    km: "≈ 90 km",
    onsite: 2,
    remote: 3,
    note: "Présentiel concentré en milieu de semaine.",
  },
  {
    id: "dijon",
    city: "Dijon",
    km: "≈ 200 km",
    onsite: 1,
    remote: 4,
    note: "Journée de présentiel hebdomadaire pour rituels critiques.",
  },
  {
    id: "paris",
    city: "Région parisienne",
    km: "≈ 450 km",
    onsite: 0,
    remote: 0,
    note: "Alternance souple site / distanciel selon les phases du projet.",
  },
];

export function HybridScenarios() {
  const [active, setActive] = useState<string>("montbeliard");
  const current = SCENARIOS.find((s) => s.id === active)!;
  const totalDays = 5;

  return (
    <div className="bg-card border hairline rounded-sm overflow-hidden">
      <div className="flex flex-wrap border-b hairline">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`relative flex-1 min-w-[140px] px-4 py-3 text-xs uppercase tracking-[0.14em] transition-colors ${
              active === s.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.city}
            {active === s.id && (
              <motion.span
                layoutId="hybrid-tab-underline"
                className="absolute inset-x-3 -bottom-px h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="p-6"
        >
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Distance
              </p>
              <p className="font-serif text-2xl mt-1">{current.km}</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Rythme hebdomadaire
              </p>
              <p className="font-serif text-2xl mt-1">
                {current.onsite > 0 ? `${current.onsite}` : "≈"}
                <span className="text-muted-foreground text-base">
                  {" "}
                  / {current.remote > 0 ? current.remote : "≈"}
                </span>
              </p>
            </div>
          </div>

          {/* Days bar */}
          {current.onsite + current.remote === totalDays ? (
            <div className="flex gap-1.5 mb-5">
              {Array.from({ length: totalDays }).map((_, i) => {
                const isOnsite = i < current.onsite;
                return (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                    className="flex-1 origin-bottom"
                  >
                    <div
                      className={`h-14 rounded-sm flex flex-col items-center justify-center text-[10px] uppercase tracking-wider ${
                        isOnsite
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-2 text-muted-foreground border hairline"
                      }`}
                    >
                      <span className="font-medium">
                        {["L", "M", "M", "J", "V"][i]}
                      </span>
                      <span className="mt-0.5 opacity-80">
                        {isOnsite ? "Site" : "TT"}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-14 mb-5 rounded-sm border hairline bg-surface-2 flex items-center justify-center text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Alternance Site ⇄ Distanciel
            </motion.div>
          )}

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary rounded-sm" /> Présentiel
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2.5 h-2.5 bg-surface-2 border hairline rounded-sm" />{" "}
                Télétravail
              </span>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted-foreground italic leading-relaxed text-pretty">
            {current.note}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
