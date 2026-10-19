import heroPhoto from "../../assets/plates/hero-photo.png";
import galleryHands from "../../assets/plates/gallery-hands.png";
import galleryInteriorDetail from "../../assets/plates/gallery-interior-detail.png";
import galleryProductDetail from "../../assets/plates/gallery-product-detail.png";
import galleryRoom from "../../assets/plates/gallery-room.png";
import galleryStorefront from "../../assets/plates/gallery-storefront.png";
import galleryTools from "../../assets/plates/gallery-tools.png";

// Replace every value in this file before publication.
// Keep claims, testimonials, credentials, prices, and hours factual.
export const site = {
  meta: {
    language: "en",
    skipLinkLabel: "Skip to content",
    title: "Replace: shop name and main service",
    description: "Replace: one factual sentence about the shop and its location.",
  },
  shop: {
    name: "REPLACE: SHOP NAME",
    shortName: "REPLACE: NAME",
    title: "Replace: the main offer and neighborhood",
    introduction: "Replace: one proof point that helps a local customer act.",
    primaryAction: { label: "Replace: primary action", href: "#booking" },
    secondaryAction: {
      label: "Replace: secondary action",
      href: "#services",
    } as { label: string; href: string } | null,
    factsLabel: "Key shop facts",
    facts: [
      { label: "Replace: open status", value: "Replace: today's closing time" },
      { label: "Visit", value: "Replace: neighborhood, town" },
      { label: "Trust", value: "Replace: one verified trust signal" },
    ],
    image: {
      src: heroPhoto,
      alt: "Placeholder photo. Replace with the shop owner, team, space, or main offer.",
      caption: "Replace: primary shop photograph",
    },
  },
  navigation: {
    label: "Primary navigation",
    sectionsLabel: "Page sections",
    mobileLabel: "Mobile page sections",
    menuLabel: "Menu",
    items: [
      { label: "Services", href: "#services" },
      { label: "Visit", href: "#location" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  credentials: {
    title: "Credentials",
    introduction: "Replace: a short introduction to verified credentials.",
    items: [
      {
        title: "Replace: license, certification, or membership",
        detail: "Replace: issuing body and current status.",
      },
      {
        title: "Replace: years, method, or specialist training",
        detail: "Replace: a short fact that a customer can verify.",
      },
      {
        title: "Replace: guarantee, standard, or sourcing policy",
        detail: "Replace: the exact scope and any important limit.",
      },
    ],
  },
  services: {
    title: "Services and offers",
    introduction: "Replace: one line that explains how to choose an offer.",
    items: [
      {
        name: "Replace: first service or offer",
        description: "Replace: outcome, duration, and price if useful.",
      },
      {
        name: "Replace: second service or offer",
        description: "Replace: who this is for and what it includes.",
      },
      {
        name: "Replace: third service or offer",
        description: "Replace: one detail that prevents a booking question.",
      },
      {
        name: "Replace: fourth service or offer",
        description: "Replace: starting price or next step if useful.",
      },
    ],
  },
  gallery: {
    title: "Photo gallery",
    introduction: "Replace: what these real shop photographs show.",
    images: [
      {
        src: galleryStorefront,
        alt: "Placeholder photo. Replace with the shop exterior or entrance.",
        caption: "Replace: storefront or arrival detail",
      },
      {
        src: galleryHands,
        alt: "Placeholder photo. Replace with the service or product in progress.",
        caption: "Replace: work in progress",
      },
      {
        src: galleryTools,
        alt: "Placeholder photo. Replace with tools, ingredients, products, or equipment.",
        caption: "Replace: a detail that shows the craft",
      },
      {
        src: galleryInteriorDetail,
        alt: "Placeholder photo. Replace with a useful interior detail.",
        caption: "Replace: interior detail",
      },
      {
        src: galleryProductDetail,
        alt: "Placeholder photo. Replace with a result, product, dish, or treatment detail.",
        caption: "Replace: result or product detail",
      },
      {
        src: galleryRoom,
        alt: "Placeholder photo. Replace with the space where customers visit.",
        caption: "Replace: the customer space",
      },
    ],
  },
  about: {
    title: "About the shop",
    introduction: "Replace: why this shop exists",
    paragraphs: [
      "Replace: a short origin story that names the owner, place, or point of view.",
      "Replace: how the shop works and what a customer can expect during a visit.",
    ],
    fact: "Replace: one concrete fact about the shop, team, sourcing, or method.",
  },
  testimonials: {
    title: "Customer words",
    introduction: "Replace: a short introduction to verified customer feedback.",
    items: [
      {
        quote: "Replace: a verified customer quote about the work or experience.",
        source: "Replace: customer name and review source",
      },
      {
        quote: "Replace: a second verified quote that answers a common concern.",
        source: "Replace: customer name and review source",
      },
    ],
  },
  hours: {
    title: "Opening hours",
    introduction: "Replace: seasonal, holiday, appointment, or walk-in information.",
    items: [
      { day: "Monday", value: "Replace: hours or Closed" },
      { day: "Tuesday", value: "Replace: hours or Closed" },
      { day: "Wednesday", value: "Replace: hours or Closed" },
      { day: "Thursday", value: "Replace: hours or Closed" },
      { day: "Friday", value: "Replace: hours or Closed" },
      { day: "Saturday", value: "Replace: hours or Closed" },
      { day: "Sunday", value: "Replace: hours or Closed" },
    ],
  },
  faq: {
    title: "Questions before a visit",
    introduction: "Replace: the scope of these practical answers.",
    items: [
      {
        question: "Replace: the question customers ask before they choose or book.",
        answer: "Replace: a short factual answer with the important condition first.",
      },
      {
        question: "Replace: the question about price, timing, access, or availability.",
        answer: "Replace: the exact policy, range, or next step.",
      },
      {
        question: "Replace: the question about preparation, collection, or cancellation.",
        answer: "Replace: the instruction and any limit that the customer must know.",
      },
    ],
  },
  location: {
    title: "Location and contact",
    introduction: "Replace: exact service area, delivery area, or access detail.",
    addressLabel: "Visit",
    contactLabel: "Contact",
    addressLines: ["Replace: street address", "Replace: town and postal code"],
    phoneDisplay: "Replace: phone number",
    phoneHref: "tel:+10000000000",
    email: "replace@example.com",
    directions: { label: "Replace: directions link", href: "https://example.com/replace-directions" },
    image: {
      src: galleryStorefront,
      alt: "Placeholder photo. Replace with the shop entrance or service area.",
      caption: "Replace: entrance, access, or service area",
    },
  },
  booking: {
    title: "Replace: a direct invitation to take the next step",
    introduction: "Replace: what happens after the customer uses this action.",
    action: { label: "Replace: booking action", href: "mailto:replace@example.com" },
    note: "Replace: deposit, consultation, walk-in, response-time, or cancellation detail.",
  },
  footer: { backToTopLabel: "Back to top" },
};
