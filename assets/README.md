# Shop assets

The platform uploads the shop photographs to this directory before the build agent starts.

Import each production image in `src/content/site.ts`. Use the imported image in an Astro `Image` component. Add useful alt text. Remove every unused file.

The files in `plates/` are generated placeholders for the starter preview. Replace and delete them before publication. Each placeholder contains its generation prompt as embedded metadata.
