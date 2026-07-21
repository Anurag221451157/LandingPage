# TRUSTED SERVICE KING — Mobile Landing Page

## Problem Statement (verbatim)
Build a mobile landing page styled like a reference parcel-delivery site, but for "premium car and bike repair". Theme: black bg (#050505), gold accent (#F4B400), dark brown secondary (#1A1208), white text. Bold uppercase headings, large hero, sans-serif. Smooth scrolling, fade-in on scroll, subtle hover. Mobile-first 320–480px, sticky CTA, no images (gradients only). Every WhatsApp button opens https://wa.link/16268y7 in a new tab.

## User Choices
- Brand: TRUSTED SERVICE KING
- No city/location text
- 6 services for car & bike repair
- Background gradients only, no images
- Single WhatsApp link everywhere: https://wa.link/16268y7

## Architecture
- Static React landing page (no backend, no DB, no integrations)
- /app/frontend/src/App.js → routes "/" to LandingPage
- /app/frontend/src/pages/LandingPage.jsx → single-page sections (hero, tagline, about, services, marquee, why-us, how-it-works, stats, testimonials, promise, FAQ, final CTA, footer, sticky CTA, floating FAB)
- /app/frontend/src/App.css → theme tokens, WhatsApp pill, FAB, sticky CTA, fonts (Anton + Manrope), reveal animations
- IntersectionObserver-driven fade-in on scroll
- Patched /app/frontend/craco.config.js with a webpack-dev-server v5 compat shim for react-scripts 5 (onBefore/onAfterSetupMiddleware → setupMiddlewares; v4 `https` → v5 `server`)

## Implemented (Dec 2025)
- All 10 WhatsApp anchors point to https://wa.link/16268y7, target=_blank, rel=noopener noreferrer
- 6 services: Engine Repair & Diagnostics, Bike Service & Repair, Doorstep Mechanic, Periodic Servicing, Denting/Painting/Detailing, Roadside Assistance & Towing
- Sticky bottom CTA + pulsing floating WhatsApp FAB
- Mobile-first (max-width 480px container)
- testing_agent iteration_1: 16/16 functional tests passed

## Backlog / Next Action Items
- P2: Optional brand logo / favicon for "Trusted Service King"
- P2: Add a click-to-call phone CTA alongside WhatsApp
- P2: Lazy-load Google Fonts via font-display swap (already swap)
- P2: Add OG / Twitter meta tags for richer link previews when shared
