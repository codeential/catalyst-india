export type ContactHeroData = {
  eyebrow: string;
  headingLine: string;
  headingAccent: string;
  subheading: string;
  cta: { label: string; href: string };
  image: string;
  imageAlt: string;
};

export type ContactDetailRow = {
  id: string;
  icon: "map" | "phone" | "mail";
  label: string;
  lines: string[];
  /** Empty string = not a link */
  href: string;
};

export type ContactDetailsData = {
  heading: string;
  rows: ContactDetailRow[];
  map: {
    /** Empty string = show the inline placeholder instead of an embed */
    embedUrl: string;
    /** Empty string = hides the "Open in Maps" link */
    linkHref: string;
    placeholderLabel: string;
    iframeTitle: string;
    pinLabel: string;
  };
};
export type ContactSubjectOption = { value: string; label: string };

export type ContactFormData = {
  heading: string;
  intro: string;
  requiredNote: string;
  fields: {
    name: { label: string };
    email: { label: string };
    subject: { label: string; placeholder: string };
    message: { label: string; hint: string };
  };
  subjectOptions: ContactSubjectOption[];
  safeguardingNotice: string;
  emergencyNotice: string;
  /** Empty href = link hidden until Catalyst supplies the right route */
  reportingRoute: { label: string; href: string };
  consent: { label: string; marketingLabel: string };
  /** Empty href = link hidden until the Privacy Policy route exists */
  privacyLink: { label: string; href: string };
  submitLabel: string;
  pendingLabel: string;
  success: { heading: string; body: string };
  errors: {
    name: string;
    email: string;
    subject: string;
    message: string;
    consent: string;
    summary: string;
    tooFast: string;
    delivery: string;
  };
};
export type ContactCtaData = {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  /** Empty href = button hidden until Catalyst confirms volunteering */
  secondary: { label: string; href: string };
};
export type SocialPlatform = "linkedin" | "instagram" | "youtube" | "facebook";

export type SocialLink = {
  id: SocialPlatform;
  platform: SocialPlatform;
  label: string;
  /** Empty string = link hidden until Catalyst supplies a verified account */
  href: string;
};

export type ContactSocialData = {
  heading: string;
  links: SocialLink[];
};





export const contactData = {
  contactHero: {
    eyebrow: "Contact",
    headingLine: "Building great cities.",
    headingAccent: "Together.",
    // Proposed copy from the mockup, needs Catalyst approval.
    subheading:
      "Reach out to us for collaborations, partnerships or general enquiries.",
    cta: { label: "Get in Touch", href: "#get-in-touch" },
    // later: replace with a consented, authentic local photograph
    image: "/images/contact/contact-hero-placeholder.svg",
    imageAlt:
      "Abstract illustration of a Delhi park with trees and a monumental arch",
  } satisfies ContactHeroData,

  contactDetails: {
    heading: "Get in Touch",
    rows: [
      {
        id: "registered-office",
        icon: "map",
        label: "Registered Office",
        lines: ["D-177, Sector-8, Dwarka,", "New Delhi-110077"],
        href: "",
      },
      {
        id: "project-address",
        icon: "map",
        label: "Project Address",
        lines: ["BG-366, Bagdolla Village,", "Sector-8, Dwarka, ND-77"],
        href: "",
      },
      {
        id: "telephone",
        icon: "phone",
        label: "Telephone",
        lines: ["+91 11 4573 3804"],
        href: "tel:+911145733804",
      },
      {
        id: "email",
        icon: "mail",
        label: "Email",
        lines: ["info@catalystindia.org"],
        href: "mailto:info@catalystindia.org",
      },
    ],
    map: {
      // later: verified Google Maps embed URL (https://www.google.com/maps/embed?...)
      embedUrl: "",
      // later: verified "open in maps" link
      linkHref: "",
      placeholderLabel:
        "Illustrated placeholder map of streets and green spaces in Dwarka, New Delhi",
      iframeTitle:
        "Map showing the Catalyst India office location in Dwarka, New Delhi",
      pinLabel: "Dwarka, New Delhi",
    },
  } satisfies ContactDetailsData,
    contactForm: {
    heading: "Send us a Message",
    // Proposed copy from the mockup, needs Catalyst approval
    intro: "Have a question, idea or opportunity? We'd love to hear from you.",
    requiredNote: "Fields marked * are required.",
    fields: {
      name: { label: "Name" },
      email: { label: "Email" },
      subject: { label: "Subject / Reason", placeholder: "Select a reason" },
      message: {
        label: "Message",
        hint: "Up to 2,000 characters.",
      },
    },
    // Proposed options, need Catalyst approval (and a decision on staff routing)
    subjectOptions: [
      { value: "general", label: "General enquiry" },
      { value: "partnership", label: "Partnership" },
      { value: "csr", label: "CSR enquiry" },
      { value: "volunteering", label: "Volunteering" },
      { value: "foster-care-info", label: "Foster care (information only)" },
      { value: "media", label: "Media" },
    ],
    safeguardingNotice:
      "Please do not include names, photos or other identifying details about children or survivors, or any child's case details, in this form.",
    emergencyNotice:
      "This form is not for reporting a child at risk or an emergency. If someone is in immediate danger, please contact your local emergency services.",
    // later: Catalyst's approved safeguarding / reporting route
    reportingRoute: { label: "", href: "" },
    consent: {
      label:
        "I agree to Catalyst India using the details I provide to respond to my message.",
      marketingLabel:
        "Optional: I'd like to receive occasional updates from Catalyst India.",
    },
    // later: Privacy Policy route
    privacyLink: { label: "Privacy Policy", href: "" },
    submitLabel: "Submit Message",
    pendingLabel: "Sending…",
    success: {
      heading: "Thank you, your message has been sent.",
      body: "We'll get back to you as soon as we can.",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      subject: "Please choose a reason for your message.",
      message: "Please write a message (at least 10 characters).",
      consent: "Please tick the consent box so we can respond to you.",
      summary: "Please check the highlighted fields and try again.",
      tooFast: "Please take a moment to review your message, then send it again.",
      delivery:
        "We couldn't send your message right now. Please email info@catalystindia.org instead.",
    },
  } satisfies ContactFormData,
    workWithUs: {
    // Proposed copy from the mockup, needs Catalyst approval
    heading: "Looking to work with us?",
    body: "Explore collaboration opportunities, partnerships and ways to make a greater impact together.",
    // later: confirm route and any anchor on /get-involved
    primary: { label: "Partner With Us", href: "/get-involved" },
    // later: confirm Catalyst takes volunteers; empty href hides the button
    secondary: { label: "Volunteer", href: "/get-involved" },
  } satisfies ContactCtaData,
    socialChannels: {
    // Proposed copy from the mockup, needs Catalyst approval
    heading: "Stay Connected",
    links: [
      // later: verified account URLs (the source supplies none)
      { id: "linkedin", platform: "linkedin", label: "LinkedIn", href: "aa" },
      { id: "instagram", platform: "instagram", label: "Instagram", href: "" },
      { id: "youtube", platform: "youtube", label: "YouTube", href: "" },
      { id: "facebook", platform: "facebook", label: "Facebook", href: "" },
    ],
  } satisfies ContactSocialData,
};