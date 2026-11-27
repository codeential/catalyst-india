export type DonateHeroData = {
  eyebrow: string;
  heading: string;
  intro: string;
  note: string;
  assurance: string; // empty string hides the line
};
export type FundOption = { code: string; label: string; enabled: boolean };

export type DonateFormData = {
  heading: string;
  intro: string;
  currency: "INR";
  presets: number[];
  minimumAmount: number;
  maximumDigits: number;
  monthlyEnabled: boolean;
  funds: FundOption[];
  eligibility: {
    legend: string;
    options: { value: "domestic" | "international"; label: string }[];
    declaration: string;
    international: {
      heading: string;
      text: string;
      linkLabel: string;
      linkHref: string;
      contactLabel: string;
      contactHref: string;
    };
  };
  defaultRoute: "domestic" | "international" | "";
  consent: { text: string; privacyLabel: string; privacyHref: string; marketing: string };
  submitLabel: string;
  status: {
    unavailableHeading: string;
    unavailableText: string;
    previewHeading: string;
    previewText: string;
    redirectingText: string;
    retryLabel: string;
    contactLabel: string;
    contactHref: string;
  };
};
export type InternationalFormData = {
  heading: string;
  intro: string;
  currencies: string[];
  amountHint: string;
  phoneHint: string;
  declaration: string;
  consent: { text: string; privacyLabel: string; privacyHref: string; marketing: string };
  submitLabel: string;
  status: {
    unavailableHeading: string;
    unavailableText: string;
    previewHeading: string;
    previewText: string;
    retryLabel: string;
    contactLabel: string;
    contactHref: string;
  };
};
export type FaqItem = { question: string; answer: string[] }; // answer = one string per paragraph

export type DonateFaqData = {
  heading: string;
  intro: string;
  items: FaqItem[]; // empty array hides the accordion
  contactText: string;
  contactLabel: string;
  contactHref: string;
};



export const donateData = {
  hero: {
    eyebrow: "Give",
    heading: "Give towards building great cities",
    intro:
      "Since 2008, Catalyst India has brought people, institutions and possibilities together to build cities where everyone can flourish. Thank you for considering a gift.",
    note: "We will ask a few short questions first, so we can show you the right way to give.",
    // later: Catalyst to approve this line (hosted checkout is in brief §07/§08, gateway not chosen). Set to "" to hide.
    assurance: "Payment is completed on a hosted checkout page. We never ask for card details on this site.",
  } satisfies DonateHeroData,
  // later: add keys for form, international, faq, status as each section is built
  form: {
  heading: "Make a gift",
  intro: "Tell us a little about your gift. This takes a few minutes.",
  currency: "INR",
  defaultRoute: "domestic",
  presets: [500, 1000, 2500, 5000],
  // later: Catalyst/finance to confirm minimum amount and digit limit (brief gives neither)
  minimumAmount: 1,
  maximumDigits: 7,
  // later: set true only when the approved gateway supports recurring giving (brief §07)
  monthlyEnabled: false,
  funds: [
    { code: "general", label: "Where Most Needed", enabled: true },
    // later: enable only after restricted-fund accounting is confirmed; align codes with finance
    { code: "entrepreneurship", label: "Entrepreneurship Development", enabled: false },
    { code: "foster-care", label: "Foster Care Initiatives", enabled: false },
  ],
  eligibility: {
    legend: "Where is this gift coming from?",
    options: [
      // later: finance/legal to supply approved eligibility / source-of-funds options
      { value: "domestic", label: "I am giving from within India" },
      { value: "international", label: "I am giving from outside India" },
    ],
    // later: finance/legal to supply the approved declaration wording
    declaration: "I confirm that this gift is made from my own funds and is not from a foreign source.",
    international: {
      heading: "Giving from outside India",
      text: "Direct online giving from outside India is not available on this form. You can read about international giving options or contact us.",
      linkLabel: "See international giving",
      linkHref: "#international",
      contactLabel: "Contact us",
      contactHref: "/contact",
    },
  },
  consent: {
    // later: Catalyst to approve consent wording
    text: "I agree that Catalyst India may use these details to process my gift and respond to me about it.",
    privacyLabel: "Read our Privacy Policy",
    privacyHref: "aa", // later: fill when the Privacy Policy route exists; empty hides the link
    marketing: "Optional: I would like to receive updates from Catalyst India.",
  },
  submitLabel: "Continue to payment",
  status: {
    unavailableHeading: "Online giving is not available right now",
    unavailableText: "Nothing has been charged. Please try again later or contact us.",
    previewHeading: "Development preview only",
    previewText: "Your details passed validation. No payment was taken and no donation was recorded.",
    redirectingText: "Taking you to the payment page…",
    retryLabel: "Go back to the form",
    contactLabel: "Contact us",
    contactHref: "/contact",
  },
} satisfies DonateFormData,
internationalForm: {
  heading: "Giving from outside India",
  intro:
    "Direct online payment from outside India is not available on this form. Tell us where you are and how you would like to give, and our team will get in touch about the ways to give that are approved for you.",
    
  // later: finance/legal to approve the list of currencies (brief gives none)
  
  currencies: ["USD", "GBP", "EUR", "AUD", "CAD", "SGD", "AED"],
  amountHint: "Optional. Roughly how much you are considering, in the currency you chose.",
  phoneHint: "Optional. The code changes when you choose a country, and you can change it.",
  // later: finance/legal to supply approved wording
  declaration:
    "I understand that this form does not take a payment, and that Catalyst India will confirm how a gift from outside India can be made.",
  consent: {
    // later: Catalyst to approve consent wording
    text: "I agree that Catalyst India may use these details to reply to my enquiry.",
    privacyLabel: "Read our Privacy Policy",
    privacyHref: "", // later: fill when the Privacy Policy route exists; empty hides the link
    marketing: "Optional: I would like to receive updates from Catalyst India.",
  },
  submitLabel: "Send my details",
  status: {
    unavailableHeading: "We could not send your details right now",
    unavailableText: "Nothing has been sent or charged. Please try again later or contact us.",
    previewHeading: "Development preview only",
    previewText: "Your details passed validation. Nothing was sent and nothing was recorded.",
    retryLabel: "Go back to the form",
    contactLabel: "Contact us",
    contactHref: "/contact",
  },
  
} satisfies InternationalFormData,
faq: {
  // later: Catalyst to approve heading and intro
  heading: "Questions about giving",
  intro: "Answers to common questions about how to give to Catalyst India.",
  // later: fill with Catalyst/finance-approved questions and answers only; empty hides the accordion
  // Example shape:
  // { question: "…", answer: ["First paragraph.", "Second paragraph."] },
  // later: Catalyst/finance to review and approve every item before launch
items: [
  {
    question: "Why do you ask where my gift is coming from?",
    answer: [
      "We ask this first so we can show you the right way to give. We do not guess from your location or the currency you use.",
    ],
  },
  {
    question: "What details do you ask for?",
    answer: [
      "For a gift from within India we ask for your full name, your email address, a short declaration and your consent to use these details to process your gift.",
      "Receiving updates from Catalyst India is optional and has its own separate checkbox.",
    ],
  },
  {
    question: "Do you store my card details?",
    answer: [
      "No. This site never asks for card numbers or security codes. You complete your payment on a hosted checkout page, and the form only sends you there once your details are valid.",
    ],
  },
  {
    question: "Can I choose which fund my gift supports?",
    // later: update when restricted-fund accounting is confirmed and the other funds are enabled in the data file
    answer: [
      "At the moment the form offers one option, Where Most Needed. Other fund choices may be added once they are confirmed.",
    ],
  },
  {
    question: "Can I give monthly?",
    // later: update when the approved gateway supports recurring giving and monthlyEnabled is switched on
    answer: [
      "Monthly giving is not available on this form yet. When it is, we will show how often you will give and how to cancel before you pay.",
    ],
  },
  {
    question: "Can I give from outside India?",
    answer: [
      "Direct online payment from outside India is not available on this form. Choose “I am giving from outside India” in the form above and send us your details, and our team will reply.",
      "Where an approved route exists for eligible overseas supporters, we will tell you about it.",
    ],
  },
  {
    question: "What happens if my payment fails or is pending?",
    answer: [
      "You can return to the form and try again. If you think you were charged and your gift did not go through, please contact us and include any reference you were shown.",
    ],
  },
  {
    question: "Will I get a receipt, and is my gift tax deductible?",
    // later: replace with approved wording once finance/legal confirm receipt process and tax status
    answer: [
      "This page does not make any statement about tax treatment or receipts. Please contact us if you need this information before you give.",
    ],
  },
  {
    question: "Who can I contact about a gift?",
    answer: [
      "Please use the contact page and tell us what you need help with. Please do not include card details or other sensitive information in your message.",
    ],
  },
],
  contactText: "Still have a question?",
  contactLabel: "Contact us",
  contactHref: "/contact",
} satisfies DonateFaqData,
};