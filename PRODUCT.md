# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. The user selected Astro and a zero-configuration static build for Cloudflare Pages.

## Users

The primary user is an unattended build agent in a sandbox.
It receives a generated shop repository and real shop photos.
It replaces content, selects one style preset, removes unused sections, and builds the site.

The final visitor is a local customer who uses a phone to find, trust, and contact a small shop.

## Product Purpose

This repository is the source template for fast, single-page websites for small shops.
The operator uses one generated repository for each barber, cafe, plumber, retailer, salon, or wellness business.

Success means that the agent produces a distinct, credible, fast site without manual implementation work.

## Positioning

The template combines removable trade sections, agent-readable design briefs, and Astro image optimization in one small dependency surface.

## Operating Context

The platform uploads shop photos to root `assets/` before the build agent starts.
The agent works alone and uses the repository structure as its operating instructions.
Cloudflare Pages serves the generated `dist/` directory.

## Capabilities and Constraints

- One Astro page contains all supported shop sections.
- Each section can be removed without changes to another section.
- Root `assets/` images use Astro `Image` components.
- Six presets separate visual register from the shop palette.
- The theme API contains a small set of CSS custom properties.
- Placeholder content identifies its required replacement.
- The project has exact dependency versions and a committed lockfile.
- The project has no client-side framework or content management system.
- `npm ci && npx astro build` must succeed without configuration.

## Evidence on Hand

No shop facts, testimonials, credentials, claims, logos, or production photos are available.
The template must not invent these facts.

## Product Principles

- Optimize for unattended agent work.
- Make omission safer than accidental generic content.
- Put the visitor action and local trust before decoration.
- Let the preset control the visual register.
- Let real shop assets control the final palette and character.
- Keep the output fast, accessible, and static.

## Accessibility & Inclusion

The template uses semantic landmarks, visible focus states, sufficient contrast, reduced-motion support, and responsive layouts.
