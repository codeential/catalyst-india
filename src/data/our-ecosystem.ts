export type EcosystemNode = {
  slug: string; // must match the card ids in the partners section
  name: string;
  location: string; // empty string hides the line
  icon: "chef" | "coffee" | "box" | "layers" | "users" | "sprout" | "book";
  side: "left" | "right" | "bottom";
};
export type EcosystemCard = {
  slug: string; // must match a node slug in ecosystemMap
  relationship: string; // empty string hides the pill
  mission: string; // empty string hides the paragraph
  href: string; // empty string shows the "details to be confirmed" text instead of a link
  image: string;
  imageAlt: string;
};

const cardPlaceholder = "/images/our-ecosystem/card-placeholder.svg";
export const ecosystemData = {
  ecosystemHero: {
    eyebrow: "Our Ecosystem",
    headingStart: "An ecosystem built around shared",
    headingAccent: "possibility.",
    // proposed copy from mockup: Catalyst to approve
    intro:
      "Relationships that extend Catalyst's vision through enterprise, education and community transformation.",
    cta: { label: "Explore the Ecosystem", href: "#ecosystem-map" },
    image: "/images/our-ecosystem/hero-placeholder.svg", // later: replace with a consented photograph
    imageAlt:
      "Illustration of a tree-lined Delhi park with a stone gateway in soft warm tones", // later: update with the real photo's description
  },

  ecosystemMap: {
    heading: "How the ecosystem connects", // visually hidden
    hub: {
      eyebrow: "Shared vision",
      label: "Building great cities. Together.", // brief §01
      logo: "", // later: fill only if Catalyst approves the logo in the hub (needs a light/white version)
      logoAlt: "Catalyst India logo",
    },
    // proposed copy: Catalyst to approve
    note: "Each organisation is distinct, with its own mission and identity. Lines show relationships, not ownership or shared registration.",
    nodes: [
      { slug: "redmoon-bakery", name: "Redmoon Bakery", location: "", icon: "chef", side: "left" },
      { slug: "capital-coffee", name: "Capital Coffee", location: "", icon: "coffee", side: "left" },
      { slug: "capital-goods", name: "Capital Goods", location: "", icon: "box", side: "left" },
      { slug: "logos-transformation", name: "Logos Transformation", location: "", icon: "layers", side: "right" },
      { slug: "manobala", name: "Manobala", location: "", icon: "users", side: "right" },
      { slug: "sneha-projects", name: "Sneha Projects", location: "Dehradun", icon: "sprout", side: "right" }, // brief §06
      { slug: "sb-memorial-school", name: "SB Memorial School", location: "Andheri", icon: "book", side: "bottom" }, // brief §06
    ] satisfies EcosystemNode[],
  },
    ecosystemPartners: {
    heading: "Our affiliates",
    // proposed copy: Catalyst to approve
    intro:
      "Seven distinct organisations, each with its own mission, location and identity.",
    // proposed copy (brief §06): Catalyst to approve
    note: "Affiliates are separate organisations. This page does not imply common ownership or shared legal registration, and Catalyst donations do not automatically go to affiliates.",
    pendingLabel: "Details to be confirmed",
    linkLabel: "Visit website",
    cards: [
      {
        slug: "redmoon-bakery",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for Redmoon Bakery in soft warm tones",
      },
      {
        slug: "capital-coffee",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for Capital Coffee in soft warm tones",
      },
      {
        slug: "capital-goods",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for Capital Goods in soft warm tones",
      },
      {
        slug: "logos-transformation",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for Logos Transformation in soft warm tones",
      },
      {
        slug: "manobala",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for Manobala in soft warm tones",
      },
      {
        slug: "sneha-projects",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for Sneha Projects in soft warm tones",
      },
      {
        slug: "sb-memorial-school",
        relationship: "Affiliate", // later: confirm relationship type
        mission: "", // later: approved mission
        href: "", // later: approved external link
        image: cardPlaceholder, // later: consented photo
        imageAlt: "Placeholder illustration for SB Memorial School in soft warm tones",
      },
    ] satisfies EcosystemCard[],
  },
    ecosystemShared: {
    headingStart: "Different organisations.",
    headingAccent: "A shared direction.", // mockup wording: Catalyst to approve
    // proposed copy (brief §06): Catalyst to approve
    intro:
      "Each organisation in our ecosystem has its own mission and identity. What connects them is a direction: enterprise, education and community transformation.",
    items: [
      { icon: "store", label: "Enterprise", description: "" }, // later: approved description
      { icon: "book", label: "Education", description: "" }, // later: approved description
      { icon: "users", label: "Community Transformation", description: "" }, // later: approved description
    ],
  },
    ecosystemCta: {
    heading: "Explore the ecosystem.", // mockup wording: Catalyst to approve
    intro: "", // later: optional supporting line (hidden while empty)
    primary: { label: "Partner With Us", href: "/get-involved" }, // later: confirm target
    secondary: { label: "Get Involved", href: "/get-involved" }, // later: confirm target
  },
};