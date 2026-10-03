# Elaracode — Task Log & Roadmap

> **Changelog, Activity Tracker, Known Issues, and Development Backlog**  
> Based strictly on verified evidence in the repository and active session inspection.

---

## 1. Project Status Summary

- **Current Version:** `1.0.0`
- **Release Status:** Production Baseline Ready
- **Repository Corpus:** `MohdAkilAlam/elaracode` (`d:\elara`)
- **Active Branch:** `main`
- **Last Verified Commit:** `430707e` (*feat: complete production-ready Elaracode digital engineering platform*)
- **Build Status:** Verified passing (`vite build` completed in ~209ms, producing static bundle in `dist/`)
- **Lint Status:** 0 errors, 5 non-blocking warnings in `oxlint` (detailed below in Known Issues)

---

## 2. Recent Changes & Evolution History

### [COMMIT-430707e] Production-Ready Platform Baseline
- **Date:** 2026-10-03 (04:26:55 +05:30)
- **Author:** Elaracode Engineering (`elaracode1@gmail.com`)
- **Summary:**
  - Initialized Vite + React 19 single-page platform.
  - Built 14 core components: `Navbar`, `Hero`, `Services`, `About`, `CaseStudies`, `CaseStudyModal`, `Advantage`, `Process`, `ProjectCalculator`, `Testimonials`, `FAQ`, `Contact`, `Footer`, `SocialIcons`.
  - Implemented tokenized Neo-Brutalist CSS design system in `src/index.css` supporting dynamic Light & Dark themes with zero-flash HTML initialization.
  - Integrated FormSubmit.co AJAX intake with mailto fallback.
  - Added structured data sets in `src/data/` (`services.js`, `portfolio.js`, `process.js`).
  - Added public branding assets in `public/` (`logo.svg`, `logo-dark.svg`, `brand-logo.png`, `hero-showcase.jpg`).

### [TASK-DOCS] Persistent Architecture & System Documentation
- **Date:** 2026-10-03
- **Author:** Antigravity AI Assistant
- **Summary:**
  - Generated [PROJECT_CONTEXT.md](file:///d:/elara/PROJECT_CONTEXT.md) detailing architecture, stack, endpoints, state, and folder structure.
  - Generated [AGENTS.md](file:///d:/elara/AGENTS.md) establishing coding conventions, styling rules, and safe modification protocols.
  - Generated [docs/architecture.md](file:///d:/elara/docs/architecture.md) detailing the component hierarchy, theme engine, and design tokens.
  - Generated [docs/api.md](file:///d:/elara/docs/api.md) documenting external intake endpoints, schemas, and fallbacks.
  - Initialized [TASK_LOG.md](file:///d:/elara/TASK_LOG.md).

### [TASK-WHATSAPP-SERVICES] Verified WhatsApp Integration & Service Catalogue Alignment
- **Date:** 2026-10-04
- **Author:** Antigravity AI Assistant
- **Summary:**
  - Integrated official WhatsApp telephone number `+91-9990648033` with encoded consultation chat links across all key interfaces.
  - Added new `FloatingWhatsApp.jsx` quick-access floating button in bottom-right viewport with neo-brutalist styling.
  - Integrated WhatsApp direct links in `Navbar.jsx` (desktop & mobile drawer), `Footer.jsx`, and `SocialIcons.jsx`.
  - Streamlined services catalogue in `src/data/services.js` down to the 4 essential client offerings:
    - **GMB (Google My Business):** ₹14,999
    - **Static Website:** ₹14,999
    - **Dynamic Website:** ₹34,999
    - **E-Commerce:** ₹79,999
  - Refactored `ProjectCalculator.jsx` to model exact baseline prices for these 4 services without confusing inflation, providing transparent tier/velocity options and add-ons.
  - Refactored `Contact.jsx` intake form service pills and budget brackets to sync with the new service tiers.
  - Refined UI per user review: removed price labels from the Services Needed selection pills in `Contact.jsx`, updated the Instant WhatsApp card icon to the official WhatsApp SVG logo on brand green `#25D366`, removed the WhatsApp number from the navbar, streamlined the floating WhatsApp button to a clean circular icon-only action button without text, and removed the "Official Social Channels" buttons from the About section (`About.jsx`).
  - Implemented smooth 3D flip card interactions in `Services.jsx`: front face cleanly displays core icon, upfront price badge, title, and overview (with bottom teaser text removed per review for a minimalist aesthetic); on mouse hover or tap, card smoothly rotates 180° to reveal full deliverables checklist, technical capability tags, and proposal CTAs.
  - Resolved 100% of Oxlint warnings (`social.jsx` module decoupling and React 19 render-state synchronization). Oxlint now reports 0 warnings and 0 errors.
  - Standardized `.services-card-actions` position and typography across all 4 cards: unified card height to 420px, filled empty space on front cards with "Included Capabilities" tag pills, expanded card width with a 4-column desktop grid, and removed arrows from both "Request Proposal" and "Scope Cost".
  - Removed price suffixes from the "Our Services" links in [Footer.jsx](file:///d:/elara/src/components/Footer.jsx), keeping clean service titles.
  - Replaced the Standard Operating Telemetry progress bars in [About.jsx](file:///d:/elara/src/components/About.jsx) with a high-fidelity 3-stage vertical timeline pipeline matching Screenshot 2: maintained the primary color sequence (Yellow `#ffcc00`, Red `#e63b2e`, Blue `#0055ff`), connected dots with horizontal branches leading to floating callout bubbles, added the ambient background bezier curve, and preserved the Founder micro quote at the card bottom.
  - Fixed dark mode icon visibility across [Advantage.jsx](file:///d:/elara/src/components/Advantage.jsx) cards: replaced fragile inline color overrides with high-contrast dual-theme CSS classes (`.advantage-icon-box` with vibrant accents for speed, forum, architecture, and security/SLA), ensuring the shield icon and all capability icons are crisply visible. Added CSS `content: url('/logo-dark.svg')` safeguard for `.brand-logo-img` in [Navbar.jsx](file:///d:/elara/src/components/Navbar.jsx) and [Footer.jsx](file:///d:/elara/src/components/Footer.jsx).

---

## 3. Known Issues & Operational Reference

### 1. Windows PowerShell `.ps1` Script Execution Policy
- **Symptom:** Running `npm run <cmd>` directly in PowerShell fails with `SecurityError: PSSecurityException` if script execution is restricted.
- **Workaround:** Always invoke commands using `npm.cmd run <cmd>`.

### 2. First-Time FormSubmit Confirmation
- **Detail:** When the first project brief inquiry is transmitted, FormSubmit.co delivers a one-time activation confirmation link to `elaracode1@gmail.com`. Once confirmed, submissions arrive directly into the inbox.

---

## 4. Pending Work & Prioritized Roadmap

| Task ID | Description | Priority | Target Scope |
| :--- | :--- | :--- | :--- |
| **TODO-01** | First-time FormSubmit.co confirmation activation on `elaracode1@gmail.com` | P1 | Production Email Inbox |
| **TODO-02** | Introduce Environment Variables (`.env.example`) for endpoints & analytics | P2 | Project Root |
| **TODO-03** | Add GitHub Actions CI workflow for automated lint & build checks | P2 | `.github/workflows/` |
| **TODO-04** | Expand case studies in `portfolio.js` with additional client screenshots | P3 | `src/data/portfolio.js`, `public/` |

