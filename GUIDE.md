# 🌐 Online Resume Template — `h-mo`

A modern, elegant, and customizable **online resume/CV website** built with React, TanStack Start, and Tailwind CSS.

This repository can be used as a **template foundation** for anyone who wants a professional resume online, easy to share and deploy on GitHub Pages.

## ✨ Highlights

- Clean single-page portfolio/resume layout
- Multi-language support (**FR / EN / DE**)
- Multiple visual themes with quick switching
- Shareable URL including selected language + theme
- Print-friendly profile (PDF/print button)
- Mobile-friendly responsive design
- Ready for GitHub Pages deployment

## 🚀 Quick Start

### 1) Clone and install

```bash
git clone https://github.com/<your-user>/<your-repo>.git
cd <your-repo>
npm install --legacy-peer-deps
```

### 2) Run locally

```bash
npm run dev
```

### 3) Build

```bash
npm run build
```

For GitHub Pages build mode:

```bash
GITHUB_PAGES=1 npm run build
```

## 🧩 Personalize Your Resume

Update these files to adapt the template to your profile:

- **Main content & translations**:  
  `src/i18n/translations.ts`
- **Profile photo**:  
  `src/assets/your-profile-photo.jpg` (replace the current image file with your own)
- **Header, hero, sections, contact blocks**:  
  `src/components/`
- **Theme options**:  
  `src/theme/useTheme.tsx`

## 🌍 Deploy on GitHub Pages

This project already includes a GitHub Actions workflow for deployment:

- Workflow file:  
  `.github/workflows/deploy.yml`

Important: if your repository name is not `h-mo`, update the base path in:

- `vite.config.ts`

Current behavior:
- `GITHUB_PAGES=1` → uses `/h-mo/` as base path
- local/dev → uses `/`

For full deployment and optional contact endpoint setup, see:

- `DEPLOY.md`

## 🛠️ Available Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run format` — run Prettier

## 📌 Template Usage Tips

1. Replace all personal data in `translations.ts`
2. Replace the portrait image
3. Adjust colors/themes to match your personal brand
4. Update section order/content to fit your career path
5. Deploy and share your personalized URL

---

If this template helps you, feel free to fork it and make it your own.  
Have a great online resume! ✨
