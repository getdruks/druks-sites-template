# Template verification — 2026-09-05

Issue: DRU-424.

Base commit: `4a3bed401be0b6efd13735c8a52e3fc9c24f68ae`.

The evaluation at `../druks-sites-evaluation/20260904-221339` supplied read-only evidence. No command changed its files.

## Results

- `npm ci` passed. It reported zero vulnerabilities.
- The initial build, six preset builds, and final default build passed.
- All 15 action contract tests passed.
- Chromium checks covered 390 × 844 and 1440 × 900 for all six presets.
- The final hero action appears in the first viewport for each preset.
- No horizontal overflow, clipped text, broken internal target, self-link, broken image, image distortion, or browser error remains in those checks.
- Native mobile menus and FAQ controls responded to keyboard activation.
- Reduced-motion checks passed for smooth scrolling, transitions, and the hero image.
- Every content image has dimensions and alternative text. The hero is eager and high priority. Other images are lazy.
- Placeholder text and images remain explicit.
- Each output has one HTML page, zero script elements, zero JavaScript files, and no linked stylesheet.
- Clear preloads one local font. Each other preset preloads its display font and Manrope body font.
- The dependency manifest and lockfile are unchanged.
- The final `dist/` uses Clear and English.

The visual review covered the six distinct registers. The first pass found heading overflow. Shared wrapping and column-based heading sizes corrected it. A final Sharp width correction kept its hero action in view.

The section-removal checks covered 13 configurations. These include all seven nonempty removal combinations of Gallery, Services, and Booking. They also include separate removal of LocationContact, Credentials, About, Testimonials, Hours, and FAQ. Each build passed. The remaining overview used one column on mobile. Internal targets remained valid after their content links changed.

A temporary shop fixture changed the accent and hero spacing through `site.css`. It also changed document language, menu text, and the services title through `site.ts`. Computed CSS and HTML matched those changes. All six preset source files stayed unchanged. The fixture restored the original files.

An intentional `booking.action.href = "#booking"` caused the production build to fail with `booking: an action must not link to its own section.` The fixture restored the valid destination.

## Lighthouse

Lighthouse 13.0.1 ran once per final preset output with its default mobile settings and headless Chrome. Local HTTP servers served saved copies of `dist/`.

| Preset | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Clear | 100 | 100 | 100 | 100 | 1.88 s | 0 |
| Editorial | 99 | 100 | 100 | 100 | 1.95 s | 0 |
| Elegant | 99 | 100 | 100 | 100 | 2.03 s | 0 |
| Sharp | 99 | 100 | 100 | 100 | 1.95 s | 0 |
| Vital | 99 | 100 | 100 | 100 | 1.95 s | 0 |
| Warm | 99 | 100 | 100 | 100 | 1.95 s | 0 |

The performance target of 100 remains open for five presets. The reports identify LCP, image delivery, and local server compression/cache opportunities. These scores apply to the marked starter content, not a deployed customer site.

The Impeccable detector reported 34 advisory differences from the documented type scale and no blocking finding. The final visual review ran in this task, without an independent reviewer. No Impeccable package or build requirement was added.

No separate repository lint or type-check command exists. No deployment check or physical-device check ran.

## Commands and evidence

Commands ran from the repository root unless an absolute path appears. Local scripts, screenshots, saved outputs, JSON results, and logs are in `/tmp/druks-template-review/`. These are temporary review artifacts, not production dependencies.

| Command | Result |
| --- | --- |
| `npm ci` | Passed; zero reported vulnerabilities |
| `npx astro build` | Baseline, updated default, and final default builds passed |
| `npm run preview -- --host 127.0.0.1 --port 4321` | Preview started |
| `node --experimental-strip-types --test tests/actions.test.mjs` | Passed twice; 15 tests each time |
| `node /tmp/druks-template-review/verify.mjs` | Two rounds of six preset builds and twelve viewport checks |
| `STYLE_PRESET=sharp npx astro build` | Passed after the title-width correction |
| `node /tmp/druks-template-review/fixtures.mjs` | Final Sharp checks, removal cases, customization, language, and expected build rejection passed |
| `node /tmp/druks-template-review/lighthouse.mjs` | Six completed Lighthouse reports |
| `node /Users/paulo.alvarado/.codex/skills/impeccable/scripts/context.mjs --target src/pages/index.astro` | Read the product and design context |
| `node /Users/paulo.alvarado/.codex/skills/impeccable/scripts/detect.mjs --json src/sections src/components src/styles/global.css styles` | Initial advisory report |
| `node /Users/paulo.alvarado/.codex/skills/impeccable/scripts/detect.mjs --json src/sections src/components src/styles/global.css src/styles/site.css styles` | Final report: 34 advisory findings; zero blocking findings |
| `git diff --exit-code -- package.json package-lock.json` | Passed; dependencies unchanged |
| `git diff --check` | Passed |
| `git fetch origin main` | Passed; local and remote base matched |
| `git status --short --branch`, `git rev-parse HEAD origin/main`, `git remote -v` | Established branch, base, remote, and changed-file scope |

The preset loop inside `verify.mjs` uses this command for each named preset:

```sh
STYLE_PRESET=clear npx astro build
STYLE_PRESET=editorial npx astro build
STYLE_PRESET=elegant npx astro build
STYLE_PRESET=sharp npx astro build
STYLE_PRESET=vital npx astro build
STYLE_PRESET=warm npx astro build
```

The Lighthouse script used ports 4400 through 4405 and this CLI invocation for each preset:

```sh
node /Users/paulo.alvarado/.npm/_npx/2613f46d5c6aba5c/node_modules/lighthouse/cli/index.js \
  http://127.0.0.1:4400 \
  '--chrome-flags=--headless --no-sandbox' \
  --output=json \
  --output-path=/tmp/druks-template-review/clear-lighthouse.json \
  --quiet
```

Additional inline Node commands captured the baseline, assembled screenshot comparison sheets, and examined the final output. The final output assertions passed. An initial screenshot helper used an unavailable Sharp internal path. The corrected helper imported `sharp` through its public entry point and passed.

Source inspection used `pwd`, `rg`, `cat`, `sed`, `head`, `tail`, and Git diffs. Temporary edit scripts applied the content and documentation changes. No inspection command changed the evaluation evidence.
