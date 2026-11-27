"use server";

import { contactData } from "@/data/contact";

export type ContactFieldName =
  | "name"
  | "email"
  | "subject"
  | "message"
  | "consent";

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  errors: Partial<Record<ContactFieldName, string>>;
  values: {
    name: string;
    email: string;
    subject: string;
    message: string;
    consent: boolean;
    marketing: boolean;
  };
};

const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (formData: FormData, key: string) => {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
};

/**
 * Succeeds only in development so a visitor never sees a false "sent".
 * later: send the staff notification + confirmation email once the provider
 * and receiving mailbox are decided (authenticated, SPF/DKIM/DMARC).
 * Never log or forward form values to analytics or URLs.
 */
async function deliverContactMessage(
  _payload: ContactFormState["values"],
): Promise<boolean> {
  return process.env.NODE_ENV === "development";
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const { errors: copy, success, subjectOptions } = contactData.contactForm;

  const values = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    subject: text(formData, "subject"),
    message: text(formData, "message"),
    consent: formData.get("consent") === "on",
    marketing: formData.get("marketing") === "on",
  };

  // Honeypot: bots fill the hidden "website" field. Pretend it worked.
  if (text(formData, "website") !== "") {
    return {
      status: "success",
      message: success.body,
      errors: {},
      values: { ...values, name: "", email: "", subject: "", message: "" },
    };
  }

  // Minimum fill time
  const startedAt = Number(text(formData, "startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "error", message: copy.tooFast, errors: {}, values };
  }

  // later: verify captcha token (e.g.. Cloudflare Turnstile) here.
  // later: rate limit by IP / key here.

  const errors: ContactFormState["errors"] = {};
  if (!values.name || values.name.length > 100) errors.name = copy.name;
  if (!EMAIL_RE.test(values.email) || values.email.length > 254)
    errors.email = copy.email;
  if (!subjectOptions.some((o) => o.value === values.subject))
    errors.subject = copy.subject;
  if (values.message.length < 10 || values.message.length > 2000)
    errors.message = copy.message;
  if (!values.consent) errors.consent = copy.consent;

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: copy.summary, errors, values };
  }

  const ok = await deliverContactMessage(values);
  if (!ok) {
    return { status: "error", message: copy.delivery, errors: {}, values };
  }

  return {
    status: "success",
    message: success.body,
    errors: {},
    values: { ...values, name: "", email: "", subject: "", message: "" },
  };
}