export type Action = { label: string; href: string };

// Build-time validation only. This module adds no browser JavaScript.
export function validateAction(
  action: Action,
  sectionId: string,
  pageUrl: URL,
  destinationRequired = false,
): void {
  if (!action.label.trim() || !action.href.trim()) {
    throw new Error(`${sectionId}: the action requires a label and href.`);
  }
  const target = new URL(action.href, pageUrl);
  const samePage = target.origin === pageUrl.origin && target.pathname === pageUrl.pathname;
  if (samePage && decodeURIComponent(target.hash.slice(1)) === sectionId) {
    throw new Error(`${sectionId}: an action must not link to its own section.`);
  }
  if (destinationRequired && (samePage || !/^(https?:|mailto:|tel:)/i.test(action.href))) {
    throw new Error(`${sectionId}: use an external destination, mailto:, or tel: action.`);
  }
}
