# AI Agent Coding Instructions for This Repository

This project is a static demo site using **vanilla HTML, CSS, and JavaScript**. There is no build step, package manager, or backend. Use these instructions to help AI coding agents work productively and safely in this codebase.

---

## Project Structure & Key Files
- **Entry points:** `index.html`, `about.html`, `services.html`, `contact.html` (all in root)
- **Assets:**
  - Styles: `css/style.css` (theme variables in `:root`, responsive breakpoints at 900px/768px)
  - Scripts: `js/main.js` (handles nav toggle, year auto-fill, contact form demo)
  - Images: `image/` (note: some HTML references `images/`—verify/fix paths when editing)

## Developer Workflows
- **Preview:**
  - Open `index.html` directly in a browser for a quick check
  - For correct asset paths, use a static server:
    - Python: `python -m http.server 8000` → http://localhost:8000
    - Or use VS Code Live Server (right-click `index.html` → "Open with Live Server")
- **Edit:**
  - HTML: Edit the relevant `.html` file for content/structure
  - CSS: Prefer changing `:root` variables in `css/style.css` for theme tweaks; reuse shared classes (e.g., `.container`, `.hero`, `.service-card`)
  - JS: Update `js/main.js` for interactivity; test nav toggle, year auto-fill, and contact form in browser
- **Deploy:**
  - GitHub Pages: Push to default branch and enable Pages (root), or use a `gh-pages` branch
  - Netlify/Vercel: Set publish directory to repo root

## Project-Specific Conventions
- **No build tools, tests, or CI**—all changes are manual and must be previewed in-browser
- **Accessibility:**
  - `.sr-only` for screen-reader text
  - Navigation uses `aria-expanded`—preserve when editing nav
- **Image path caveat:**
  - Images live in `image/`, but some HTML uses `images/`—always check/fix paths when adding or updating images
- **Contact form:**
  - `#contact-form` is a client-only demo; no backend integration

## Examples & Patterns
- **Consistent layout:** Use/reuse `.container`, `.hero`, `.services-grid`, `.service-card` for sections
- **Theme changes:** Adjust `:root` variables in `css/style.css` for global color/font updates
- **JS helpers:**
  - Year auto-fill: Elements with ids `year`, `year-2`, etc. are set by JS
  - Nav toggle: `.nav-toggle` toggles `.main-nav` and updates `aria-expanded`

## When in Doubt
- Prefer editing existing files over adding new ones unless expanding site content
- Always preview changes in a browser or with a static server
- For new conventions or workflows, document them here for future agents

---

If you need deployment scripts or more examples, specify your target (e.g., Netlify, GitHub Actions) and request an update to this file.
