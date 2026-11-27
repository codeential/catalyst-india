"use server";

import {
  getInvolvedData,
  type EnquiryState,
  type EnquiryValues,
} from "@/data/get-involved";

const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,19}$/;

const text = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

const emptyValues: EnquiryValues = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
  consent: false,
  marketing: false,
};

async function deliverEnquiry(values: EnquiryValues): Promise<boolean> {
  // later: send the staff notification and the confirmation email through an
  // authenticated transactional provider (SPF/DKIM/DMARC, brief §09).
  // Provider, credentials and the receiving mailbox are to be agreed with Catalyst.
  // Never log these values or put them in URLs/analytics (brief §08).
  void values;
  return process.env.NODE_ENV !== "production"; // production stays "failed" until wired up
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const { enquiryForm } = getInvolvedData;

  const values: EnquiryValues = {
    name: text(formData, "name"),
    organisation: text(formData, "organisation"),
    email: text(formData, "email"),
    phone: text(formData, "phone"),
    interest: text(formData, "interest"),
    message: text(formData, "message"),
    consent: formData.get("consent") === "on",
    marketing: formData.get("marketing") === "on",
  };

  // Spam: honeypot (bots fill it) and a minimum fill time
  if (text(formData, "website") !== "") {
    return { status: "success", message: "", fieldErrors: {}, values: emptyValues };
  }
  const startedAt = Number(text(formData, "startedAt"));
  if (!startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return {
      status: "error",
      message: enquiryForm.errorMessage,
      fieldErrors: { form: "Please take a moment to review the form, then submit again." },
      values,
    };
  }

  const fieldErrors: EnquiryState["fieldErrors"] = {};
  if (values.name.length < 2 || values.name.length > 100)
    fieldErrors.name = "Please enter your name.";
  if (values.organisation.length > 150)
    fieldErrors.organisation = "Please keep this under 150 characters.";
  if (!EMAIL_RE.test(values.email) || values.email.length > 200)
    fieldErrors.email = "Please enter a valid email address.";
  if (values.phone && !PHONE_RE.test(values.phone))
    fieldErrors.phone = "Please enter a valid phone number.";
  if (!enquiryForm.interestOptions.some((o) => o.value === values.interest))
    fieldErrors.interest = "Please choose an option.";
  if (values.message.length > 1000)
    fieldErrors.message = "Please keep your message under 1,000 characters.";
  if (!values.consent)
    fieldErrors.consent = "Please confirm you agree before submitting.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: enquiryForm.errorMessage, fieldErrors, values };
  }

  let sent = false;
  try {
    sent = await deliverEnquiry(values);
  } catch {
    sent = false;
  }
  if (!sent) {
    return {
      status: "error",
      message: enquiryForm.errorMessage,
      fieldErrors: { form: "Something went wrong on our side. Please try again shortly." },
      values,
    };
  }

  return { status: "success", message: enquiryForm.successMessage, fieldErrors: {}, values: emptyValues };
}