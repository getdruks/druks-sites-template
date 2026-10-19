# Druks sites template

This repository is the Astro starter for generated small-shop websites. Druks creates one repository per shop and uploads its images to `assets/`. A sandboxed build agent then builds a static site for Cloudflare Pages.

The template is a tested design system and quality foundation. A preset is a design direction, not a fixed layout.

## Build agent procedure

1. Read this file and the selected `styles/<name>.md` brief.
2. Examine all files in `assets/` and the supplied business facts.
3. Select a preset in `src/config.ts`.
4. Replace the content in `src/content/site.ts`, including metadata, language, labels, links, image captions, and alternative text.
5. Put brand-specific CSS in `src/styles/site.css`.
6. Adapt the section order and composition to the customer action and business evidence.
7. Remove unsupported sections and their navigation links.
8. Replace the image imports with actual shop images.
9. Replace `public/favicon.svg` with the shop mark.
10. Remove unused assets and all placeholder content before publication.
11. Build and examine the site at mobile and desktop widths.

Do not invent claims, reviews, credentials, prices, hours, addresses, or policies. Remove unsupported content. The starter uses `Replace:`, `REPLACE:`, `Placeholder`, `example.com`, and a dummy telephone number to identify content for replacement.

## Content and actions

`src/content/site.ts` contains all publishable text. Each section object contains its title, introduction, and items or images together. There is no parallel section-copy object.

- `shop` contains the hero title, introduction, actions, labeled facts, and image.
- `services`, `credentials`, `testimonials`, `hours`, and `faq` each contain `title`, `introduction`, and `items`.
- `gallery` contains `title`, `introduction`, and `images`, including captions and alternative text.
- `about` contains its title, introduction, paragraphs, and supporting fact.
- `location` contains its title, introduction, contact labels, contact values, directions action, and image.
- `booking` contains its title, introduction, action, and policy note.
- `navigation`, `footer`, and `meta` contain their visible and accessible labels. `meta.language` sets the HTML `lang` attribute.

Translate all labels for the document language. Keep only translation-independent structure, such as icons and section identifiers, in components.

The two main action objects have separate purposes:

```ts
shop: {
  primaryAction: { label: "See appointment details", href: "#booking" },
  // Other hero content...
},
booking: {
  action: { label: "Request an appointment", href: "mailto:replace@example.com" },
  // Other booking content...
},
```

The hero, header, and mobile navigation use `shop.primaryAction`. The booking section uses `booking.action`. Their labels and links are independent. The examples contain placeholder destinations.

The primary action can use `#booking` or a direct destination. The final booking action requires an external HTTP(S) destination, `mailto:`, or `tel:`. Directions also require a real destination.

`src/components/Action.astro` validates these actions during the build. A section action cannot link to its own section identifier. This includes encoded fragments and same-page absolute URLs. Use this component for additional section actions. It emits only an anchor, with no browser JavaScript.

## Sections and agent autonomy

Each section lives in `src/sections/`. To remove a section, delete its import and element from `src/pages/index.astro`. Remove its navigation entry from `site.navigation.items`. Update actions that target the removed section.

If the booking section is absent, give `shop.primaryAction` a direct destination. If a secondary hero action is unnecessary, set `shop.secondaryAction` to `null`.

Gallery, services, and booking share the default `overview-grid` wrapper. The grid supports one, two, or three sections. At mobile widths, it uses one column. Remove an empty wrapper.

The agent can move sections outside this wrapper, change section emphasis, edit Astro components, or use another hero composition. Each change must serve actual shop content or customer behavior. Keep every section independently removable. The location image requires no service or script. Remove `LocationContact` to omit it with the location section.

## Design presets and shop CSS

| Preset | Keep | Derive from the shop |
| --- | --- | --- |
| `clear` | Direct sans-serif type, rectangular images, thin rules | Urgent service emphasis and useful work evidence |
| `editorial` | Expressive serif type, print rules, asymmetric images | Collection story, image scale, and product density |
| `elegant` | Fine serif type, thin rules, generous space | Portfolio sequence, portrait crops, and consultation flow |
| `sharp` | Condensed uppercase type, hard edges, strong rules | Signage, craft evidence, and service-board density |
| `vital` | Readable serif type, open leading, soft corners | Practitioner evidence, trust placement, and service scope |
| `warm` | Menu-like serif type, warm space, compact facts | Food imagery, hours, and order or visit actions |

Each brief has `Keep` and `Vary` sections. Two sites with the same preset must retain its register. Their brands, images, content, and customer actions must prevent an interchangeable appearance.

The agent can vary hero composition, section order, image proportions, cropping, density, type scale, spacing, borders, dividers, shapes, and image treatment. Keep these changes within the preset register. Restrained CSS motion and interaction effects require business evidence. Do not add generic gradients, random blobs, excessive animation, or unrelated effects.

`src/styles/site.css` loads after shared layout CSS and preset CSS. Use it for shop-specific changes. Put stable template repairs in shared files. The agent can also edit components when CSS alone cannot express the necessary composition.

Set the permanent preset in `src/config.ts`:

```ts
export const defaultStyle = "clear" as const;
```

For a temporary build or development session, use `STYLE_PRESET`:

```sh
STYLE_PRESET=elegant npm run dev
STYLE_PRESET=sharp npx astro build
```

The theme variables are `--primary`, `--surface`, `--accent`, `--font-display`, and `--font-body`. Preserve the preset font families. Derive the three colors from the actual logo, sign, packaging, interior, or photographs.

Put color overrides in `src/styles/site.css`. Match the preset selector so the later declaration wins:

```css
body[data-style="clear"] {
  --primary: #102437;
  --surface: #f7f9fa;
  --accent: #0b69d1;
}
```

These are starter colors. Measure contrast after each palette change.

## Images and fonts

Import content images from root `assets/` through `src/content/site.ts`. Use Astro `Image` for the hero, gallery, and location. Do not put content photographs in `public/`, which bypasses image processing.

Astro creates responsive WebP files with dimensions. The hero uses mobile and desktop widths, eager loading, and high fetch priority. Other content images use lazy loading. Match `sizes` to the actual layout after composition changes.

Preserve image proportions. Use `object-fit: cover` for intentional crops, and examine the subject at both widths. Never stretch a photograph. The location image uses its source aspect ratio.

The starter files in `assets/plates/` are generated placeholders with embedded prompt metadata. Replace and remove them before publication. Their captions and alternative text also require replacement.

Local font files and their licenses live in `assets/fonts/`. The layout preloads only the active display font and body font. Clear uses one font file for both roles. If font assignments change, update the preload mapping in `BaseLayout.astro`.

## Build and preview

Install the exact dependency graph and build the deployable output:

```sh
npm ci
npx astro build
```

Start development or preview the production output:

```sh
npm run dev
npm run preview
```

Cloudflare Pages uses `npm ci && npx astro build` and publishes `dist/`. No environment variable is necessary. Preserve exact dependency versions and the committed lockfile.

Run the action contract tests:

```sh
node --experimental-strip-types --test tests/actions.test.mjs
```

Build all six presets, then restore the default output:

```sh
for preset in clear editorial elegant sharp vital warm; do
  STYLE_PRESET="$preset" npx astro build || exit 1
done
npx astro build
```

There is no separate lint or type-check command in this repository.

## Performance and accessibility

The build inlines CSS. Active local fonts preload. The hero has no image-settle animation. Shared CSS preserves reduced-motion behavior and visible keyboard focus.

Lighthouse 100 is the target for performance, accessibility, best practices, and SEO. Measure the generated site. A successful build does not establish a Lighthouse score.

Examine every preset at 390-pixel and 1440-pixel widths. Make sure that:

- The primary action appears in the first viewport.
- No horizontal overflow, text clipping, or image distortion occurs.
- Internal links target existing identifiers, and section actions do not target themselves.
- Native menus and FAQ controls work with a keyboard.
- Reduced motion disables smooth scrolling and reduces transitions.
- Body text meets 4.5:1 contrast, and large text meets 3:1 contrast.
- Landmarks, heading order, alternative text, focus states, and the skip link remain accessible.
- The six presets remain visibly distinct.
- Shop CSS can change one generated site without changes to preset source files.

Keep one static Astro page. Do not add React, a client framework, a CMS, an analytics package, or a map service. Add client JavaScript only for necessary behavior that native HTML and CSS cannot provide. Impeccable is an optional development tool. It is not a dependency or build requirement.
