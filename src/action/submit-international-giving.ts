"use server";

import { donateData } from "@/data/donate";
import { countries, dialCodes } from "@/data/countries";

export type IntlFieldName =
  | "country" | "currency" | "amount" | "dialCode" | "phone"
  | "fullName" | "email" | "declaration" | "consent";

export type IntlValues = {
  country: string;
  currency: string;
  amount: string;
  dialCode: string;
  phone: string;
  fullName: string;
  email: string;
  declaration: boolean;
  consent: boolean;
  marketing: boolean;
};

export type IntlState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors: Partial<Record<IntlFieldName, string>>; values: IntlValues }
  | { status: "unavailable"; values: IntlValues }
  | { status: "preview"; values: IntlValues };

const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COUNTRY_CODES = new Set(countries.map((c) => c.code));

// STUB: never reports success. No payment is taken on this route.
async function sendEnquiry(_input: IntlValues & { idempotencyKey: string }): Promise<{ ok: boolean }> {
  // later: notify the finance/legal-approved mailbox via authenticated transactional email (SPF/DKIM/DMARC)
  return { ok: false };
}

export async function submitInternationalGiving(
  _prev: IntlState,
  formData: FormData,
): Promise<IntlState> {
  const { internationalForm } = donateData;
  const text = (key: string) =>
    String(formData.get(key) ?? "").replace(/[\u0000-\u001f\u007f]/g, "").trim();
  const checked = (key: string) => formData.get(key) === "on";

  const values: IntlValues = {
    country: text("country").toUpperCase(),
    currency: text("currency").toUpperCase(),
    amount: text("amount"),
    dialCode: text("dialCode"),
    phone: text("phone"),
    fullName: text("fullName"),
    email: text("email").toLowerCase(),
    declaration: checked("declaration"),
    consent: checked("consent"),
    marketing: checked("marketing"),
  };

  const generic = (): IntlState => ({
    status: "error",
    message: "We could not send your form. Please wait a moment and try again.",
    fieldErrors: {},
    values,
  });

  // later: rate limiting and captcha (e.g. Cloudflare Turnstile) before launch
  if (text("website") !== "") return generic(); // honeypot
  const startedAt = Number(text("startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) return generic();
  const idempotencyKey = text("idempotencyKey");
  if (!/^[0-9a-f-]{36}$/i.test(idempotencyKey)) return generic();

  const fieldErrors: Partial<Record<IntlFieldName, string>> = {};

  if (!COUNTRY_CODES.has(values.country)) fieldErrors.country = "Please choose your country.";
  if (!internationalForm.currencies.includes(values.currency)) fieldErrors.currency = "Please choose a currency.";

  if (values.amount !== "") {
    const clean = values.amount.replace(/,/g, "");
    if (!/^\d{1,9}(\.\d{1,2})?$/.test(clean) || Number(clean) <= 0) {
      fieldErrors.amount = "Enter a number greater than zero, for example 100.";
    }
  }

  if (values.phone !== "") {
    const digits = values.phone.replace(/[\s\-()]/g, "");
    if (!dialCodes.includes(values.dialCode)) fieldErrors.dialCode = "Please choose a dial code.";
    if (!/^\d{4,14}$/.test(digits)) fieldErrors.phone = "Enter digits only, between 4 and 14 numbers.";
  }

  if (values.fullName.length < 2 || values.fullName.length > 100) fieldErrors.fullName = "Please enter your full name.";
  if (!EMAIL_RE.test(values.email) || values.email.length > 254) fieldErrors.email = "Please enter a valid email address.";
  if (!values.declaration) fieldErrors.declaration = "Please confirm to continue.";
  if (!values.consent) fieldErrors.consent = "Please agree to continue.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const result = await sendEnquiry({ ...values, idempotencyKey });
  if (result.ok) return { status: "preview", values }; // later: replace with a real confirmation state once email is wired

  // Never a false confirmation: production reports failure; development shows a labelled preview.
  return process.env.NODE_ENV === "production"
    ? { status: "unavailable", values }
    : { status: "preview", values };
}