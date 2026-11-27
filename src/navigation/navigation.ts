export type NavigationLink = {
  label: string;
  href: string;
};

export const navigation: NavigationLink[] = [
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Our Work", href: "/work" },
  { label: "Our Ecosystem", href: "/ecosystem" },
  { label: "Impact & Stories", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const donateLink: NavigationLink = {
  label: "Donate",
  href: "/donate",
};
