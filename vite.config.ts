import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// In production (GitHub Pages), the site is served from /h-mo/.
// In dev / Lovable sandbox preview, base must remain "/".
const base = process.env.GITHUB_PAGES === "1" ? "/h-mo/" : "/";

export default defineConfig({
  cloudflare: process.env.GITHUB_PAGES === "1" ? false : undefined,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: { outputPath: "/index.html" },
    },
  },
  vite: {
    base,
  },
});
