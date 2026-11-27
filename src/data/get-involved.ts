export type GetInvolvedLink = { label: string; href: string };

export type GetInvolvedHero = {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  description: string;
  primaryCta: GetInvolvedLink;
  secondaryCta: GetInvolvedLink;
  image: { src: string; imageAlt: string };
};

export type RouteIcon = "partner" | "volunteer" | "csr" | "give";

export type GetInvolvedRoute = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: RouteIcon;
  tone: "forest" | "sand";
};

export type GetInvolvedRoutes = {
  heading: string;
  intro: string;
  items: GetInvolvedRoute[];
};
export type ContributeIcon = "people" | "skills" | "resources" | "funding";

export type ContributeItem = {
  id: string;
  title: string;
  description: string;
  icon: ContributeIcon;
};

export type WaysToContribute = {
  heading: string;
  items: ContributeItem[];
};

export type InitiativeIcon = "sprout" | "family";

export type InitiativeCard = {
  id: string;
  title: string;
  description: string;
  note: string;
  icon: InitiativeIcon;
  cta: GetInvolvedLink;
  moreLink: GetInvolvedLink;
  image: { src: string; imageAlt: string };
};

export type GetInvolvedInitiatives = {
  heading: string;
  intro: string;
  items: InitiativeCard[];
};
export type EnquiryOption = { value: string; label: string };

export type EnquiryValues = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  consent: boolean;
  marketing: boolean;
};

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<keyof EnquiryValues | "form", string>>;
  values: EnquiryValues;
};

export type GetInvolvedEnquiry = {
  heading: string;
  description: string;
  notice: string;
  labels: {
    name: string;
    organisation: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
  };
  interestPlaceholder: string;
  interestOptions: EnquiryOption[];
  consentLabel: string;
  privacyLabel: string;
  privacyHref: string;
  marketingLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successMessage: string;
  errorMessage: string;
};

export type GetInvolvedVolunteer = {
  heading: string;
  description: string;
  note: string;
  cta: GetInvolvedLink;
  image: { src: string; imageAlt: string };
};

export type GetInvolvedCta = {
  headingLead: string;
  headingAccent: string;
  description: string;
  primaryCta: GetInvolvedLink;
  secondaryCta: GetInvolvedLink;
};



export const getInvolvedData = {
  getInvolvedHero: {
    eyebrow: "Get Involved",
    headingLead: "Be part of building a",
    headingAccent: "great city.",
    description:
      "Bringing people, institutions and resources together for lasting change in our cities.",
    primaryCta: { label: "Partner With Us", href: "#partner" },
    secondaryCta: { label: "Volunteer With Us", href: "#volunteer" },
    image: {
      // later: replace with a consented, dignified photo (no identifiable children) and update imageAlt
      src: "/images/get-involved/hero-placeholder.svg",
      imageAlt:
        "Illustration of a green city park at dusk with a stone gateway in the distance",
    },
  } satisfies GetInvolvedHero,
    getInvolvedRoutes: {
    heading: "Get Involved With Catalyst",
    intro: "", // later: optional intro line, hidden while empty
    items: [
      {
        id: "partner",
        title: "Partner With Us",
        description:
          "Bring communities, institutions and leaders together around shared challenges.",
        href: "#partner",
        icon: "partner",
        tone: "forest",
      },
      {
        id: "volunteer",
        title: "Volunteer",
        description: "Share your time and skills alongside our work.",
        href: "#volunteer",
        icon: "volunteer",
        tone: "sand",
      },
      {
        id: "csr",
        title: "CSR & Institutional Partnerships",
        description: "Explore how your organisation can work with us.",
        href: "#partner", // same enquiry form; later: preselect "CSR" if you want
        icon: "csr",
        tone: "sand",
      },
      {
        id: "give",
        title: "Give / Support the Work",
        description: "Explore ways to give and support our work.",
        href: "/donate", // later: confirm route once the Donate page exists
        icon: "give",
        tone: "sand",
      },
    ],
  } satisfies GetInvolvedRoutes,
    waysToContribute: {
    heading: "Ways to Contribute",
    items: [
      {
        id: "people",
        title: "People",
        description: "Offer your time and skills",
        icon: "people",
      },
      {
        id: "skills",
        title: "Skills",
        description: "Share your expertise",
        icon: "skills",
      },
      {
        id: "resources",
        title: "Resources",
        description: "Provide tools, materials or support",
        icon: "resources",
      },
      {
        id: "funding",
        title: "Funding",
        description: "Support our initiatives", // later: Catalyst to confirm wording once giving routes are approved
        icon: "funding",
      },
    ],
  } satisfies WaysToContribute,
    initiatives: {
    heading: "Our Current Initiatives",
    intro: "Two current initiatives where your involvement can make a difference.",
    items: [
      {
        id: "entrepreneurship",
        title: "Entrepreneurship Development",
        description:
          "Helping individuals identify opportunities, build practical business skills and develop sustainable sources of income.",
        note: "",
        icon: "sprout",
        cta: { label: "Become a Mentor", href: "#partner" }, // later: preselect "mentoring" in the form
        moreLink: { label: "", href: "" }, // later: project page route, e.g. /work/entrepreneurship-development
        image: {
          // later: replace with a consented photo and update imageAlt
          src: "/images/get-involved/initiative-entrepreneurship.svg",
          imageAlt: "Illustration of a market stall with a small green sprout on the counter",
        },
      },
      {
        id: "foster-care",
        title: "Foster Care Initiatives",
        description:
          "Every child deserves to grow up in a safe, nurturing family. Catalyst seeks to strengthen family-based care by mobilising communities and equipping prospective foster families.",
        note: "Enquiries are handled by trained staff. Please don’t share any child’s details through this website.",
        icon: "family",
        cta: { label: "Support Family-Based Care", href: "/donate" }, // later: confirm route and fund designation
        moreLink: { label: "", href: "" }, // later: project page route
        image: {
          // later: replace only with a consented, non-identifying photo and update imageAlt
          src: "/images/get-involved/initiative-foster-care.svg",
          imageAlt: "Illustration of a home with a lit window beside two trees",
        },
      },
    ],
  } satisfies GetInvolvedInitiatives,
    enquiryForm: {
    heading: "Partner With Us / CSR Enquiry",
    description:
      "Explore collaboration opportunities, CSR partnerships and institutional support.",
    notice:
      "Please don’t share personal details about any child or family here. Enquiries are handled by trained staff.",
    labels: {
      name: "Name",
      organisation: "Organisation (optional)",
      email: "Email",
      phone: "Phone (optional)",
      interest: "I’m interested in",
      message: "Message (optional)",
    },
    interestPlaceholder: "Select an option",
    interestOptions: [
      { value: "partnership", label: "Partnering with Catalyst India" },
      { value: "csr", label: "CSR / institutional support" },
      { value: "mentoring", label: "Mentoring in Entrepreneurship Development" },
      { value: "family-based-care", label: "Supporting family-based care" },
      { value: "other", label: "Something else" },
      { value: "volunteering", label: "Volunteering my time and skills" },
    ],
    consentLabel:
      "I agree that Catalyst India may use these details to respond to my enquiry.",
    privacyLabel: "Privacy Policy",
    privacyHref: "", // later: Privacy Policy route; link stays hidden while empty
    marketingLabel: "I’d also like to receive occasional updates from Catalyst India (optional).",
    submitLabel: "Submit Enquiry",
    submittingLabel: "Sending…",
    successTitle: "Thank you",
    successMessage: "Your enquiry has been sent to the Catalyst India team.",
    errorMessage: "We couldn’t send your enquiry. Please check the form and try again.",
  } satisfies GetInvolvedEnquiry,
    volunteer: {
    heading: "Volunteer With Us",
    description: "Share your time and skills alongside our work.",
    note: "", // later: Catalyst to confirm volunteer screening / safeguarding wording; hidden while empty
    cta: { label: "Volunteer With Us", href: "#partner" }, // later: dedicated volunteer form if Catalyst wants one
    image: {
      // later: replace with a consented photo (no identifiable children) and update imageAlt
      src: "/images/get-involved/volunteer-placeholder.svg",
      imageAlt: "Illustration of a young sapling growing from a mound of soil in a green park",
    },
  } satisfies GetInvolvedVolunteer,
    getInvolvedCta: {
    headingLead: "Help build cities where everyone can",
    headingAccent: "flourish.",
    description: "", // later: optional supporting line; hidden while empty
    primaryCta: { label: "Give Today", href: "/donate" }, // later: confirm route once the Donate page exists
    secondaryCta: { label: "Partner With Us", href: "#partner" },
  } satisfies GetInvolvedCta,
};