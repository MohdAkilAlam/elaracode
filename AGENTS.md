# Elaracode — AI Agent Guidelines & Coding Standards

> **Operational Reference for AI Agents & Developers**  
> Read this document before proposing or applying any modifications to this repository.

---

## 1. Core Principles

1. **Maintain Zero-Bloat Architecture:** Keep the bundle lightweight and dependency tree minimal. Do not introduce heavy runtime CSS-in-JS libraries, client-side router bloat, or UI component packages unless explicitly requested.
2. **Dual-Theme Integrity:** Every visual element must look intentional in both **Light** (warm sand/ink `#f5f0e8`) and **Dark** (slate/carbon `#0c0c0e`) themes.
3. **Verified Changes Only:** Always run lint and build checks before concluding a task. Never assume a build succeeds without testing.
4. **Preserve SEO & Accessibility:** Maintain semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), valid heading hierarchy, and descriptive `aria` attributes.

---

## 2. Technology Stack & Key Dependencies

- **Framework:** React `19.2.8` (Concurrent rendering, functional components, hooks).
- **Tooling:** Vite `8.3.0` with `@vitejs/plugin-react` (Oxc fast compiler).
- **Linter:** Oxlint `1.81.0` (Fast Rust linter).
- **Icons:** `lucide-react` `^1.50.0` and Google Material Symbols Outlined.
- **Typography:** `Plus Jakarta Sans` (Display headings) and `Inter` (Body copy).
- **Styles:** Custom CSS Custom Properties (CSS variables) in [src/index.css](file:///d:/elara/src/index.css).

---

## 3. Coding Conventions & Style Guidelines

### 3.1 React & Component Structure
- Use modern functional components with PascalCase naming (e.g., `ProjectCalculator.jsx`).
- File exports should adhere to React Fast Refresh: **export only the component** from component files. Helper functions, mock records, or data arrays must reside in `src/data/` or a separate utility module.
- Keep state local to where it is used. Lift state only when multiple sibling components require synchronization (as done in [App.jsx](file:///d:/elara/src/App.jsx) for `theme`, `selectedService`, `prefilledBrief`, and `prefilledBudget`).
- **React 19 & Oxlint Best Practices:**
  - Avoid synchronous `setState` calls inside `useEffect` that cause cascading re-renders. Derive state during render or update state directly inside event listeners whenever possible.
  - Maintain correct hook dependency arrays (`exhaustive-deps`).

### 3.2 Styling & Design Tokens
- **Do not introduce Tailwind CSS or styled-components.** The application is built entirely on native CSS variables and utility classes defined in [src/index.css](file:///d:/elara/src/index.css).
- **Key Token Variables:**
  - Surface: `var(--surface)` (Light: `#f5f0e8`, Dark: `#0c0c0e`)
  - Text Primary: `var(--on-surface)` (Light: `#1a1a1a`, Dark: `#f0ede6`)
  - Primary Highlight: `var(--primary-yellow)` (`#ffcc00`)
  - Secondary Accent: `var(--secondary)` (`#e63b2e`)
  - Tertiary Accent: `var(--tertiary)` (`#0055ff`)
  - Borders: `var(--outline)` (`2px solid #1a1a1a`)
  - Hard Shadows: `var(--shadow-sm)` (`2px 2px 0px #1a1a1a`), `var(--shadow-md)` (`4px 4px 0px #1a1a1a`), `var(--shadow-lg)` (`6px 6px 0px #1a1a1a`)
- **Neo-Brutalist Classes Available:**
  - `.btn-primary`, `.btn-secondary`, `.btn-outline`
  - `.brutal-card`, `.review-card`, `.service-card`, `.case-study-card`
  - `.hero-highlight`, `.tag-badge`
  - `.container-custom` (Max width 1280px with centered gutters)

---

## 4. Verification & Testing Workflow

### 4.1 Shell Command Execution (Windows Environment)
In PowerShell environments where script execution policies block `.ps1` files, always invoke commands via `npm.cmd`:

```powershell
# Verify linting rules
npm.cmd run lint

# Verify production compilation
npm.cmd run build

# Preview build locally
npm.cmd run preview
```

### 4.2 Quality Checklist
Before finishing an agent turn:
- [ ] Oxlint passes (`npm.cmd run lint`).
- [ ] Vite compiles cleanly to `dist/` (`npm.cmd run build`).
- [ ] Visual verification of Light and Dark themes.
- [ ] Responsive inspection on mobile viewport (< 768px).
- [ ] No hardcoded private credentials, API keys, or sensitive email credentials.

---

## 5. Safe Modification Protocols

### 5.1 Modifying or Adding Services
1. Open [src/data/services.js](file:///d:/elara/src/data/services.js).
2. Append or update the service object (`id`, `title`, `icon`, `shortDesc`, `tags`, `deliverables`, `pricing`).
3. If new service titles are introduced, verify that [Contact.jsx](file:///d:/elara/src/components/Contact.jsx#L48-L55) `serviceOptions` array is updated to include the new title for quote pre-selection.

### 5.2 Modifying or Adding Case Studies
1. Open [src/data/portfolio.js](file:///d:/elara/src/data/portfolio.js).
2. Follow the established schema (`id`, `title`, `category`, `industry`, `description`, `metricValue`, `metricLabel`, `image`, `details: { client, timeline, stack, challenge, solution, results }`).
3. Verify that category tags map to the filters in [CaseStudies.jsx](file:///d:/elara/src/components/CaseStudies.jsx) (`web`, `seo`, `marketing`, `local`).

### 5.3 Modifying the Contact Intake Form
1. Inspect [src/components/Contact.jsx](file:///d:/elara/src/components/Contact.jsx).
2. Ensure the FormSubmit POST payload keeps required fields (`name`, `email`, `budget`, `services`, `brief`).
3. Ensure the `catch` block preserves the `mailto:` fallback so users can submit even if offline or using strict tracking blockers.

### 5.4 Updating Navigation Anchors
1. If a new section is added, give it a unique `id` attribute.
2. Update navigation links in [src/components/Navbar.jsx](file:///d:/elara/src/components/Navbar.jsx#L16-L24).
3. Update footer links in [src/components/Footer.jsx](file:///d:/elara/src/components/Footer.jsx).
