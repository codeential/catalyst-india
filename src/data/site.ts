export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Subsidiary", href: "/enterprises" },
  { label: "Projects", href: "/our-work" },
  { label: "Contacts", href: "/contact" },
];

/** Routes whose first section is a dark hero, so the header starts transparent. */
export const transparentTopRoutes: string[] = ["/"];

interface SiteConfig {
  donationUrl: string | null;
  donationInfoPage: boolean;
  email: string;
}

export const siteConfig: SiteConfig = {
  donationUrl: null, // set only when the client supplies a verified URL
  donationInfoPage: false, // set true once /support exists with verified details
  email: "info@catalystindia.org",
};

export function getSupportHref(): { href: string; external: boolean } {
  if (siteConfig.donationUrl) {
    return { href: siteConfig.donationUrl, external: true };
  }
  if (siteConfig.donationInfoPage) {
    return { href: "/support", external: false };
  }
  return { href: "/contact?topic=support", external: false };
}

export const footerLinks: NavLink[] = [
  ...navLinks,
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
];
// Historical details from the original site. Verify them with the client before launch.
export const contactInfo = {
  registeredOffice: "D-177, Sector-8, Dwarka, New Delhi-110077",
  projectAddress: "BG-366, Bagdolla Village, Sector-8, Dwarka, ND-77",
  phoneDisplay: "+91 11 4573 3804",
  phoneHref: "tel:+911145733804",
  email: "info@catalystindia.org",
};

// Use "Catalyst India" only after the client confirms the legal owner.
export const copyrightOwner = "Catalyst India";