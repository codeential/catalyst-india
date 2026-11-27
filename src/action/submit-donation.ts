"use server";

import { donateData } from "@/data/donate";

export type DonationFieldName =
  | "route" | "eligibility" | "amount" | "frequency" | "fund" | "fullName" | "email" | "consent";

export type DonationValues = {
  route: string;
  amountChoice: string;
  customAmount: string;
  frequency: string;
  fund: string;
  fullName: string;
  email: string;
  eligibilityConfirmed: boolean;
  consent: boolean;
  marketing: boolean;
};

export type DonationState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors: Partial<Record<DonationFieldName, string>>; values: DonationValues }
  | { status: "unavailable"; values: DonationValues }
  | { status: "preview"; values: DonationValues }
  | { status: "redirect"; checkoutUrl: string };

const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type OrderInput = {
  amountMinor: number; // paise
  currency: "INR"; // always set server-side
  fund: string;
  frequency: string;
  route: "domestic";
  consent: boolean;
  marketing: boolean;
  idempotencyKey: string;
  fullName: string;
  email: string;
};

/*
  Donation record fields for the schema (notes only, brief §08):
  donor ID, order ID, payment ID, amount, currency, fund, eligibility route,
  consent, status, timestamps, receipt ID, settlement reference.
*/

// STUB: never reports success. Replace with the approved gateway's hosted-checkout order call.
async function createOrder(
  _input: OrderInput,
): Promise<{ ok: true; checkoutUrl: string } | { ok: false }> {
  // later: create the order with the approved gateway (idempotency key = _input.idempotencyKey) and return its hosted checkout URL
  return { ok: false };
}

export async function submitDonation(
  _prev: DonationState,
  formData: FormData,
): Promise<DonationState> {
  const { form } = donateData;
  const text = (key: string) =>
    String(formData.get(key) ?? "").replace(/[\u0000-\u001f\u007f]/g, "").trim();
  const checked = (key: string) => formData.get(key) === "on";

  const values: DonationValues = {
    route: text("route"),
    amountChoice: text("amountChoice"),
    customAmount: text("customAmount"),
    frequency: text("frequency"),
    fund: text("fund"),
    fullName: text("fullName"),
    email: text("email").toLowerCase(),
    eligibilityConfirmed: checked("eligibility"),
    consent: checked("consent"),
    marketing: checked("marketing"),
  };

  const generic = (): DonationState => ({
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

  const fieldErrors: Partial<Record<DonationFieldName, string>> = {};

  if (values.route !== "domestic") {
    fieldErrors.route =
      values.route === "international"
        ? "Direct giving from outside India is not available on this form."
        : "Please tell us where this gift is coming from.";
  }
  if (!values.eligibilityConfirmed) fieldErrors.eligibility = "Please confirm the declaration to continue.";

  // Amount (client values are never trusted)
  let amount = 0;
  if (values.amountChoice === "custom") {
    const digits = values.customAmount.replace(/[,\s]/g, "");
    if (!new RegExp(`^\\d{1,${form.maximumDigits}}$`).test(digits) || Number(digits) < form.minimumAmount) {
      fieldErrors.amount = `Enter a whole number of rupees, at least ₹${form.minimumAmount}.`;
    } else {
      amount = Number(digits);
    }
  } else if (form.presets.includes(Number(values.amountChoice))) {
    amount = Number(values.amountChoice);
  } else {
    fieldErrors.amount = "Please choose an amount.";
  }

  const allowedFrequencies = form.monthlyEnabled ? ["one_time", "monthly"] : ["one_time"];
  if (!allowedFrequencies.includes(values.frequency)) fieldErrors.frequency = "Please choose how often you would like to give.";

  const allowedFunds = form.funds.filter((f) => f.enabled).map((f) => f.code);
  if (!allowedFunds.includes(values.fund)) fieldErrors.fund = "Please choose a fund.";

  if (values.fullName.length < 2 || values.fullName.length > 100) fieldErrors.fullName = "Please enter your full name.";
  if (!EMAIL_RE.test(values.email) || values.email.length > 254) fieldErrors.email = "Please enter a valid email address.";
  if (!values.consent) fieldErrors.consent = "Please agree to continue.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const order = await createOrder({
    amountMinor: amount * 100,
    currency: form.currency, // from data, never from the client
    fund: values.fund,
    frequency: values.frequency,
    route: "domestic",
    consent: values.consent,
    marketing: values.marketing,
    idempotencyKey,
    fullName: values.fullName,
    email: values.email,
  });

  if (order.ok) return { status: "redirect", checkoutUrl: order.checkoutUrl };

  // Never a false "thank you": production reports failure; development shows a labelled preview.
  return process.env.NODE_ENV === "production"
    ? { status: "unavailable", values }
    : { status: "preview", values };
}