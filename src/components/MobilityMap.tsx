import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/useI18n";
import { Section } from "./Section";

// Pre-computed approximate ~1h driving isochrone polygon centered on Montbéliard (47.5106, 6.7986).
// Hand-tuned to follow major axes (A36 east toward Mulhouse/Belfort, A36 west toward Besançon,
// N57 north toward Vesoul, southward into Doubs) and reach the Swiss border near Basel.
const MONTBELIARD: [number, number] = [47.5106, 6.7986];
const ISOCHRONE: [number, number][] = [
  [47.95, 6.6],   // north — Vesoul direction
  [47.92, 6.95],  // NE Lure
  [47.83, 7.25],  // Belfort N
  [47.70, 7.55],  // Mulhouse area
  [47.58, 7.78],  // Bâle approach
  [47.45, 7.65],  // SE
  [47.25, 7.40],  // Porrentruy / Jura CH
  [47.05, 7.10],  // Switzerland south
  [46.95, 6.80],  // Pontarlier direction
  [47.00, 6.40],  // SW
  [47.15, 5.95],  // Besançon
  [47.40, 5.75],  // W
  [47.65, 5.85],  // NW
  [47.85, 6.20],  // back N
];

const CITIES: { name: string; pos: [number, number] }[] = [
  { name: "Montbéliard", pos: MONTBELIARD },
  { name: "Belfort", pos: [47.638, 6.863] },
  { name: "Mulhouse", pos: [47.749, 7.339] },
  { name: "Besançon", pos: [47.238, 6.024] },
  { name: "Vesoul", pos: [47.622, 6.154] },
  { name: "Bâle", pos: [47.559, 7.588] },
];

export function MobilityMap() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !ref.current) return;

      const map = L.map(ref.current, {
        center: MONTBELIARD,
        zoom: 8,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        {
          attribution: "&copy; OpenStreetMap &copy; CARTO",
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 19, pane: "shadowPane" },
      ).addTo(map);

      const primary = "#3a5e72";

      L.polygon(ISOCHRONE, {
        color: primary,
        weight: 1.5,
        fillColor: primary,
        fillOpacity: 0.12,
        smoothFactor: 1.2,
      }).addTo(map);

      const dotIcon = L.divIcon({
        className: "",
        html: `<div style="width:10px;height:10px;border-radius:50%;background:${primary};box-shadow:0 0 0 3px rgba(255,255,255,0.9);"></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      CITIES.forEach((c) => {
        L.marker(c.pos, { icon: dotIcon })
          .addTo(map)
          .bindTooltip(c.name, {
            permanent: true,
            direction: "right",
            offset: [8, 0],
            className: "city-label",
          });
      });

      const style = document.createElement("style");
      style.textContent = `
        .city-label {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: oklch(0.24 0.025 230);
          padding: 0 !important;
        }
      `;
      document.head.appendChild(style);
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <Section id="mobility" eyebrow="06" title={t.mobility.title} intro={t.mobility.intro} alt>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div
            ref={ref}
            className="w-full h-[420px] rounded-sm border hairline overflow-hidden"
            aria-label="Carte zone de mobilité Montbéliard"
          />
          <p className="text-xs text-muted-foreground mt-3 italic">{t.mobility.mapHint}</p>
        </div>
        <div className="lg:col-span-2 space-y-7">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {t.mobility.languagesTitle}
            </h3>
            <ul className="space-y-2">
              {t.mobility.languages.map((l, i) => (
                <li key={i} className="flex justify-between border-b hairline py-2">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted-foreground text-sm">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {t.mobility.swissTitle}
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
              {t.mobility.swissBody}
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {t.mobility.availabilityTitle}
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
              {t.mobility.availabilityBody}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
