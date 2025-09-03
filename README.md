## Frontend Overview

This frontend is a small React app (Vite) with a navbar and a Terms page. It supports English and Swedish and lets users switch languages from the navbar.

### Structure
- `src/App.jsx`: Root component that holds the current language state and route setup.
- `src/Components/Navbar.jsx`: Navbar with logo, navigation links, language selector, and mobile hamburger.
- `src/Pages/Terms.jsx`: Terms page that renders localized content based on the selected language.
- `src/index.css`: All styles, including a utility container class similar to Tailwind's `max-w-7xl`.

### Language Flow
1. `App.jsx` keeps `currentLanguage` in React state (`en` or `sv`).
2. `App.jsx` passes three props to `Navbar`:
   - `currentLanguage`
   - `onLanguageChange(langCode)`
   - `navLinks` (links localized per language)
3. The language button in `Navbar` toggles a dropdown. Choosing English/Swedish calls `onLanguageChange` to update `currentLanguage` in `App`.
4. `App.jsx` passes the same `currentLanguage` down to the `Terms` page, which looks up the translated title, button, and HTML terms and renders them.

### Styling
- `.container-7xl` utility acts like Tailwind's `max-w-7xl`:
  - `max-width: 80rem` (~1280px)
  - horizontal padding and centered layout
- App background is set on `.app` (full-screen hero background image).
- Navbar layout:
  - Desktop: logo on the left; links, language selector, and hamburger on the right.
  - Mobile (≤768px): logo hidden; hamburger appears on the far left; links appear in a vertical dropdown; language selector stays pinned to the right.

### Key CSS hooks
- `.navbar`, `.navbar-inner`, `.navbar-left`, `.navbar-right`
- `.navbar-links` and `.navbar-links.active` for mobile dropdown
- `.navbar-language-selector`, `.language-button`, `.language-dropdown`
- `.hamburger-menu` with three `.bar` children
- `.terms-page`, `.terms-container`, `.terms-content-box`

### Development
Install dependencies and start the dev server from the `frontend` directory:

```bash
npm install
npm run dev
```

Make sure `BrowserRouter` wraps `<App />` in `src/main.jsx` (already configured).

### Notes
- The terms content uses `dangerouslySetInnerHTML` to render preformatted HTML paragraphs. Keep content sanitized and trusted.
- Flag images and background are referenced via external URLs.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
