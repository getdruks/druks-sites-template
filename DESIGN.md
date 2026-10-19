---
name: Druks Sites Template
description: "A flat, image-led storefront system with six business-specific visual registers."
colors:
  clear-ink: "#102437"
  clear-surface: "#f7f9fa"
  clear-accent: "#0b69d1"
  editorial-ink: "#231d19"
  editorial-surface: "#f2ede3"
  editorial-accent: "#a83d28"
  elegant-ink: "#1d1713"
  elegant-surface: "#f8f3ea"
  elegant-accent: "#8d6240"
  sharp-ink: "#11110f"
  sharp-surface: "#efeee7"
  sharp-accent: "#b92b1d"
  vital-ink: "#17372f"
  vital-surface: "#f2f3e8"
  vital-accent: "#52692b"
  warm-ink: "#3b271f"
  warm-surface: "#f4eadb"
  warm-accent: "#a33e27"
typography:
  clear-display:
    fontFamily: "Manrope Local, Arial, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  editorial-display:
    fontFamily: "Source Serif Local, Georgia, serif"
    fontSize: "clamp(4rem, 7vw, 6.8rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.025em"
  elegant-display:
    fontFamily: "Cormorant Local, Georgia, serif"
    fontSize: "clamp(4rem, 8vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  sharp-display:
    fontFamily: "Barlow Condensed Local, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 10vw, 10rem)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  vital-display:
    fontFamily: "Source Serif Local, Georgia, serif"
    fontSize: "clamp(3.5rem, 7vw, 7rem)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  warm-display:
    fontFamily: "Source Serif Local, Georgia, serif"
    fontSize: "clamp(4rem, 6vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope Local, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope Local, Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  none: "0"
  clear-control: "0.2rem"
  warm-control: "0.35rem"
  vital-control: "0.75rem"
  vital-media: "1.25rem"
  vital-arch: "14rem 14rem 1.5rem 1.5rem"
spacing:
  caption: "0.35rem"
  compact: "0.75rem"
  base: "1rem"
  gutter: "1.5rem"
  cluster: "2rem"
  wide: "3rem"
  section-min: "5rem"
  section-max: "10rem"
components:
  button-clear:
    backgroundColor: "{colors.clear-accent}"
    textColor: "{colors.clear-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.clear-control}"
    padding: "0.72rem 1rem"
  button-editorial:
    backgroundColor: "{colors.editorial-accent}"
    textColor: "{colors.editorial-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.72rem 1rem"
  button-elegant:
    backgroundColor: "transparent"
    textColor: "{colors.elegant-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.72rem 1.4rem"
  button-sharp:
    backgroundColor: "{colors.sharp-accent}"
    textColor: "{colors.sharp-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.72rem 1rem"
  button-vital:
    backgroundColor: "{colors.vital-accent}"
    textColor: "{colors.vital-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.vital-control}"
    padding: "0.72rem 1rem"
  button-warm:
    backgroundColor: "{colors.warm-accent}"
    textColor: "{colors.warm-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.warm-control}"
    padding: "0.72rem 1rem"
---

# Design System: Druks Sites Template

## Overview

**Creative North Star: "The Contact-Sheet Storefront"**

The system is a single-page storefront that uses real photographs as proof. It gives the main offer, place, and action first. It then lets the visitor verify services, work, credentials, hours, and contact details. The page must feel like one composed field, not a set of equal cards.

The shared material is flat, quiet, and ruled. Large display type, compact facts, thin dividers, numbered captions, and controlled image crops create the hierarchy. One accent marks actions, status, and short labels. Decoration must not compete with shop evidence.

The system has six preset registers. Each register owns its type treatment, density, section rhythm, rules, corners, and image shape. The build agent owns the final three-color palette and must derive it from the real shop identity and photographs. Put shop overrides in `src/styles/site.css`, after the shared and preset CSS.

**Key Characteristics:**

- One primary action stays easy to find.
- Documentary images are evidence, not background decoration.
- Flat sections use rules, contrast, and scale instead of card stacks.
- Compact labels and facts support large, decisive headings.
- Sections remain independent and safe to remove.
- Six registers share a removable starter structure and one five-variable theme API.

## Colors

Each preset starts with one surface, one ink color, and one accent. The frontmatter records the starter values. These values are reference palettes, not final shop palettes.

### Primary

- **Preset ink:** `clear-ink`, `editorial-ink`, `elegant-ink`, `sharp-ink`, `vital-ink`, and `warm-ink` supply body text, headings, strong rules, and dark action blocks.

### Secondary

- **Preset accent:** `clear-accent`, `editorial-accent`, `elegant-accent`, `sharp-accent`, `vital-accent`, and `warm-accent` supply the main action, status labels, short markers, focus outlines, and restrained dividers.

### Neutral

- **Preset surface:** `clear-surface`, `editorial-surface`, `elegant-surface`, `sharp-surface`, `vital-surface`, and `warm-surface` supply the page field, reversed text, and caption plates.
- Muted text, borders, and quiet fills use `color-mix()` from the active ink, surface, or accent. Do not add a separate gray scale.

### Named Rules

**The Five-Variable Rule.** The public theme API contains only `--primary`, `--surface`, `--accent`, `--font-display`, and `--font-body`. Keep these names.

**The Agent Owns the Palette Rule.** After the agent selects a preset, it must rebuild `--primary`, `--surface`, and `--accent` from the real logo, sign, interior, packaging, vehicle, or photographs. The preset defines the visual register. The agent can vary composition, scale, spacing, and image treatment from shop evidence in `src/styles/site.css`.

**The One Accent Rule.** Use the accent for actions, status, focus, markers, and short labels. Keep it rare enough that the shop photographs remain dominant.

## Typography

**Display Font:** The selected preset defines this through `--font-display`.

**Body Font:** Manrope Local, with Arial and sans-serif fallbacks.

**Character:** Display type changes the register. Body type stays direct and readable. The contrast between these roles gives the page character without extra decoration.

### Hierarchy

- **Clear display:** A direct Manrope heading with strong weight, compact leading, and a controlled scale. Use it for practical, trust-led services.
- **Editorial display:** Source Serif with very large titles, tight leading, and print-like punctuation. Use it for product-led shops and makers.
- **Elegant display:** Cormorant with light visual weight, high contrast, long pauses, and generous scale. Use it for high-touch appointment work.
- **Sharp display:** Barlow Condensed in heavy uppercase with very tight leading. Use it for direct local craft and price-board clarity.
- **Vital display:** Source Serif with moderate scale and open leading. Use it for calm, qualified, human services.
- **Warm display:** Source Serif with menu-like weight and compact leading. Use it for food and neighborhood hospitality.
- **Body:** Manrope at the base size and generous line height. Keep ordinary copy to a maximum of about 70 characters per line.
- **Label:** Small, bold Manrope for navigation, buttons, facts, captions, and utility text. Editorial and elegant labels use wider tracking and uppercase. Sharp labels can also use uppercase display type where the source applies it.

### Named Rules

**The Register Lives in Display Type Rule.** Do not replace the selected preset font or heading treatment with a generic type scale.

**The Calm Body Rule.** Keep descriptions, policies, hours, and contact details in the body family even when the display register is expressive.

## Layout

The maximum content width is 92rem. Wide screens use 1.5rem side gutters. Small screens use 1rem side gutters. The header and each main section align to this shared shell.

The starter is a design direction, not a fixed layout. Agents can edit components and section order when business evidence requires another composition. Two shops with one preset must not look interchangeable.

The default wide hero uses two columns. Copy and three key facts sit on the left, and one large photograph owns the right. The first content band is an asymmetric three-column overview: gallery, services, then booking. Later sections use a label column and a larger content column. About and location add a third supporting column when the content needs it.

Sections use long vertical pauses and full-width ruled boundaries. Default section padding changes fluidly from 5rem to 10rem. Presets can make this rhythm denser or more spacious. The overview band is compact on wide screens so the gallery, offers, and action read as one contact sheet.

At 900px and below, the header replaces the desktop navigation and header action with a menu. The hero becomes one column in this order: title, action, image, introduction, and facts. The overview becomes full-width sections in this order: services, gallery, booking. Other multi-column sections also become one column.

At 580px and below, facts, service rows, hours, gallery images, and testimonials become single columns. Hero media has a minimum height of 20rem. Gallery images form one vertical evidence sequence. Section spacing reduces to 4.5rem, but the page must not feel cramped.

**The Composition Survives Omission Rule.** A section can be removed without a repair to another section. If gallery, services, or booking is removed, the overview grid must use the remaining-column layout already defined in the source.

## Elevation & Depth

The system is flat by default. It uses surface contrast, dark booking bands, image crop, thick or thin rules, and large type to make depth. It does not use ambient card shadows.

The mobile navigation is the one shared floating layer. It uses a soft shadow so it reads above page content. The Sharp preset is the one expressive exception: its primary button uses a hard offset shadow that compresses on hover. The hero image has no entrance animation. Reduced-motion settings reduce transitions to an immediate state.

### Named Rules

**The Flat Ruled Material Rule.** Use rules and tonal fields for separation. Do not turn sections into floating cards.

**The Shadow Must Explain State Rule.** Use a shadow only for an overlay or the Sharp button response. Do not use shadows as general decoration.

## Shapes

The shared form language starts with square images, square rules, and low-radius controls. Each preset can change this register:

- **Clear:** Almost square controls use a slight 0.2rem radius. Images stay rectangular and practical.
- **Editorial:** Square geometry and visible editorial rules support the magazine register.
- **Elegant:** Square, thin-edged controls and tall portrait media support a precise portfolio register.
- **Sharp:** Hard edges, thick rules, boxed galleries, and offset button shadows support a poster register.
- **Vital:** Soft controls use a 0.75rem radius. Gallery media uses a 1.25rem radius. Hero media uses a tall arch. Trust items use quiet rounded fields.
- **Warm:** Small 0.35rem radii soften controls and caption plates, while strong accent rules keep the menu register clear.

**The Preset Guides the Shapes Rule.** Derive changes to borders, corners, and image shapes from shop evidence. Keep the selected register recognizable.

## Components

### Navigation

The header is a ruled horizontal line with a compact brand, section links, and one primary action. On small screens, a native `details` menu replaces the desktop controls. The open menu has a clear border, stacked links, and an accent action as its final row.

### Buttons

- **Shape:** Use the radius and edge treatment of the selected preset.
- **Primary:** Use the active accent with surface-colored text. Keep one short action label and, when useful, the square-ended arrow.
- **Size:** Keep the shared minimum height at 3rem. Sharp uses a stronger 3.35rem minimum height.
- **Elegant:** Use a transparent primary button with an ink border on light sections. Reverse the border and text on the dark booking section.
- **Sharp:** Add the register's hard ink border and offset ink shadow.
- **Hover:** Move the shared button up by 2px and change it to the active ink. The Sharp button instead moves into its shadow.
- **Focus:** All links and summary controls use a 3px accent outline with a 4px offset.

### Hero

The hero combines one large offer, one action group, one documentary image, and three practical facts. The image must show the owner, team, place, product, or main service. Do not use abstract art or a generic category image.

### Overview Band

Gallery, services, and booking share one compact, asymmetric band on wide screens. Thin vertical rules separate them. On small screens, services comes first, gallery second, and the dark booking block closes the sequence.

### Gallery

Use six real photographs in an asymmetric contact sheet. Mix one commanding image with smaller detail images. Use intentional `object-fit: cover` crops. Each image gets a short numbered caption on a surface-colored plate. On small screens, show one image per row and keep the evidence order.

### Fact and Service Lists

Service rows, hours, FAQ entries, and hero facts use ruled lines instead of cards. Use the accent only for a short marker, open status, or other small signal. Hours use tabular numbers and right alignment on wide screens.

### Credentials

Credentials use a small line icon, a short factual title, and a verifiable detail. The base layout forms one ruled three-column field. Vital can use separate soft trust fields. Remove unsupported items instead of filling them with generic claims.

### Booking Block

The booking block uses the active ink as a full field with reversed text and one accent action. It must contain one direct next step, a short explanation, and one policy or response-time note.

### Location Imagery

The location section combines address and contact facts with an Astro Image. Its source, alternative text, and caption live in `site.location.image`. Replace the marked placeholder photograph with real arrival or service-area evidence.

## Do's and Don'ts

### Do:

- **Do** select one preset from the business type and the real visual evidence.
- **Do** keep the five public theme variable names. Change the three palette values from real shop evidence, and keep the selected preset's font assignments.
- **Do** keep the preset register. Vary layout, type scale, spacing, section emphasis, and image treatment from business evidence.
- **Do** use real shop photographs with exact alt text and useful crops.
- **Do** keep one main action visible near the offer and repeat it only where the flow needs it.
- **Do** preserve semantic landmarks, the skip link, visible focus states, sufficient contrast, and reduced-motion support.
- **Do** remove empty or unsupported sections, claims, credentials, testimonials, prices, hours, and policies.

### Don't:

- **Don't** make the six presets into color swaps. Each preset must keep its distinct register.
- **Don't** add more public theme variables or a separate gray palette.
- **Don't** use a uniform card grid, generic brochure blocks, or ambient card shadows.
- **Don't** add decorative imagery that does not prove the offer, place, people, or work.
- **Don't** let the accent dominate the photographs or create a second competing action color.
- **Don't** invent shop facts or leave placeholder content and images in a published site.
- **Don't** hide navigation, actions, or facts behind motion. Respect `prefers-reduced-motion`.
