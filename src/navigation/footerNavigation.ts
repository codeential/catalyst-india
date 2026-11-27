import {
  donateLink as primaryDonateLink,
  navigation as primaryNavigation,
} from "./navigation";

export type FooterLink = {
  label: string;
  href: string | null;
};

export type FooterContactItem = {
  label: string;
  value: string;
  href?: string;
};

export const brandDescription =
  "Catalyst India is a city transformation organisation that brings people, institutions and resources together. Since 2008, it has worked toward cities where people can flourish.";

export const donateLink = primaryDonateLink;
export const quickLinks: FooterLink[] = primaryNavigation;

export const homeLink = {
  label: "Catalyst India home",
  href: "/",
} satisfies FooterLink;

export const getInvolvedLinks: FooterLink[] = [
  { label: "Volunteer", href: null },
  { label: "Partner With Us", href: null },
  { label: "CSR Enquiries", href: null },
  { label: "Donate", href: "/donate" },
];

export const contactItems: FooterContactItem[] = [
  {
    label: "Registered Office",
    value: "D-177, Sector-8, Dwarka, New Delhi-110077",
  },
  {
    label: "Project Address",
    value: "BG-366, Bagdolla Village, Sector-8, Dwarka, ND-77",
  },
  {
    label: "Telephone",
    value: "+91 11 4573 3804",
    href: "tel:+911145733804",
  },
  {
    label: "Email",
    value: "info@catalystindia.org",
    href: "mailto:info@catalystindia.org",
  },
];

export const socialLinks: FooterLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
];

export const policyLinks: FooterLink[] = [
  { label: "Privacy Policy", href: null },
  { label: "Terms & Conditions", href: null },
  { label: "Donation/Refund Policy", href: null },
];
