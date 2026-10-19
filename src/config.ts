// Read styles/<name>.md before this value changes.
// Put shop color overrides in src/styles/site.css. Preserve the preset register.
export const defaultStyle = "clear" as const;

export const styleNames = [
  "clear",
  "editorial",
  "elegant",
  "sharp",
  "vital",
  "warm",
] as const;

export type StyleName = (typeof styleNames)[number];

export function getStyleName(value: string | undefined): StyleName {
  return styleNames.includes(value as StyleName)
    ? (value as StyleName)
    : defaultStyle;
}
