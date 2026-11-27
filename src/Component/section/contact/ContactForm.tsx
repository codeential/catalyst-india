"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Info,
  List,
  Mail,
  MessageSquare,
  User,
  type LucideIcon,
} from "lucide-react";
import { contactData } from "@/data/contact";
import {
  submitContact,
  type ContactFormState,
} from "@/action/submit-contact";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
    marketing: false,
  },
};

function controlClass(hasError: boolean) {
  return [
    "w-full rounded-xl bg-[color:var(--color-off-white)] py-3 pl-11 pr-4",
    "text-[color:var(--color-charcoal)] outline-none transition",
    "focus-visible:ring-2 focus-visible:ring-[color:var(--color-forest,#14503f)]",
    hasError
      ? "border-2 border-[color:var(--color-charcoal)]"
      : "border border-[color:var(--color-charcoal)]/60",
  ].join(" ");
}

function Field({
  id,
  label,
  required,
  icon: Icon,
  error,
  hint,
  className,
  iconAlign = "center",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  icon: LucideIcon;
  error?: string;
  hint?: string;
  className?: string;
  iconAlign?: "center" | "top";
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[color:var(--color-charcoal)]"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5">
            *
          </span>
        )}
      </label>
      <div className="relative">
        <Icon
          aria-hidden="true"
          className={`pointer-events-none absolute left-3.5 h-5 w-5 text-[color:var(--color-forest,#14503f)] ${
            iconAlign === "top" ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
        />
        {children}
      </div>
      {hint && !error && (
        <p
          id={`${id}-hint`}
          className="mt-1.5 text-sm text-[color:var(--color-charcoal)]"
        >
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-start gap-2 text-sm font-bold text-[color:var(--color-charcoal)]"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const { contactForm } = contactData;
  const { fields } = contactForm;

  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const { errors, values } = state;

  const formRef = useRef<HTMLFormElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Set client-side so server and client HTML match (no hydration warning)
  const [startedAt, setStartedAt] = useState("");
  useEffect(() => setStartedAt(String(Date.now())), []);

  // Focus management: success panel, else first invalid field, else the alert
  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
    } else if (state.status === "error") {
      const firstInvalid =
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      else alertRef.current?.focus();
    }
  }, [state]);

  const describe = (name: keyof typeof errors, hint?: boolean) => {
    const ids = [
      errors[name] ? `${name}-error` : "",
      hint && !errors[name] ? `${name}-hint` : "",
    ].filter(Boolean);
    return ids.length ? ids.join(" ") : undefined;
  };

  return (
    <section
      id="send-message"
      aria-labelledby="send-message-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] lg:scroll-mt-24"
    >
      <div className="site-container pb-20 md:pb-24">
        {/* Outer = entrance */}
        <div
          style={delay(0)}
          className="animate-fade-up rounded-3xl bg-[color:var(--color-warm-sand)]/25 p-6 motion-reduce:animate-none md:p-10"
        >
          {/* Heading row + paper-plane sketch (desktop only) */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="group/heading w-fit">
                <h2
                  id="send-message-heading"
                  className="font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] md:text-4xl"
                >
                  {contactForm.heading}
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-3 h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-all duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:transition-none"
                />
              </div>
              <p className="mt-4 max-w-xl text-[color:var(--color-charcoal)]">
                {contactForm.intro}
              </p>
            </div>

            <svg
              aria-hidden="true"
              viewBox="0 0 160 70"
              fill="none"
              stroke="var(--color-forest,#14503f)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden h-16 w-36 shrink-0 sm:block"
            >
              <path
                pathLength={1}
                d="M4 58C24 66 44 40 30 32C18 26 22 50 54 44C80 38 96 24 118 22"
                className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
              />
              <path
                pathLength={1}
                d="M156 6L120 24L134 30L156 6ZM134 30L130 44L120 24M134 30L142 22"
                className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
                style={delay(500)}
              />
            </svg>
          </div>

          {state.status === "success" ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              className="mt-8 rounded-2xl bg-[color:var(--color-off-white)] p-8 text-center outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-forest,#14503f)]"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mx-auto h-10 w-10 text-[color:var(--color-forest,#14503f)]"
              />
              <h3 className="mt-4 font-serif text-2xl font-bold text-[color:var(--color-forest,#14503f)]">
                {contactForm.success.heading}
              </h3>
              <p className="mt-2 text-[color:var(--color-charcoal)]">
                {state.message}
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              action={formAction}
              noValidate
              className="mt-8 space-y-5"
            >
              {/* Form-level message (summary, too-fast, delivery failure) */}
              {state.status === "error" && state.message && (
                <div
                  ref={alertRef}
                  tabIndex={-1}
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border-2 border-[color:var(--color-charcoal)] bg-[color:var(--color-off-white)] p-4 outline-none"
                >
                  <AlertCircle
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-charcoal)]"
                  />
                  <p className="font-bold text-[color:var(--color-charcoal)]">
                    {state.message}
                  </p>
                </div>
              )}

              <p className="text-sm text-[color:var(--color-charcoal)]">
                {contactForm.requiredNote}
              </p>

              {/* Spam controls: honeypot + fill timer (never shown) */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <input type="hidden" name="startedAt" value={startedAt} />

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  id="name"
                  label={fields.name.label}
                  required
                  icon={User}
                  error={errors.name}
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    defaultValue={values.name}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={describe("name")}
                    className={controlClass(!!errors.name)}
                  />
                </Field>

                <Field
                  id="email"
                  label={fields.email.label}
                  required
                  icon={Mail}
                  error={errors.email}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    defaultValue={values.email}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={describe("email")}
                    className={controlClass(!!errors.email)}
                  />
                </Field>
              </div>

              <Field
                id="subject"
                label={fields.subject.label}
                required
                icon={List}
                error={errors.subject}
                className="mx-auto w-full max-w-[16rem] sm:max-w-none"
              >
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue={values.subject}
                  aria-invalid={errors.subject ? true : undefined}
                  aria-describedby={describe("subject")}
                  className={`${controlClass(!!errors.subject)} appearance-none pr-11 ${
                    errors.subject
                      ? ""
                      : "hover:border-[color:var(--color-forest,#14503f)] hover:bg-[color:var(--color-warm-sand)]/20"
                  }`}
                >
                  <option value="">{fields.subject.placeholder}</option>
                  {contactForm.subjectOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--color-charcoal)]"
                />
              </Field>

              <Field
                id="message"
                label={fields.message.label}
                required
                icon={MessageSquare}
                iconAlign="top"
                error={errors.message}
                hint={fields.message.hint}
              >
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  defaultValue={values.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={describe("message", true)}
                  className={`${controlClass(!!errors.message)} resize-y`}
                />
              </Field>

              {/* Safeguarding + emergency notices */}
              <div className="flex items-start gap-3 rounded-xl bg-[color:var(--color-off-white)] p-4">
                <Info
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-forest,#14503f)]"
                />
                <div className="space-y-2 text-sm text-[color:var(--color-charcoal)]">
                  <p>{contactForm.safeguardingNotice}</p>
                  <p>{contactForm.emergencyNotice}</p>
                  {contactForm.reportingRoute.href && (
                    <a
                      href={contactForm.reportingRoute.href}
                      className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)]"
                    >
                      <span className="font-semibold underline underline-offset-4 text-[color:var(--color-forest,#14503f)]">
                        {contactForm.reportingRoute.label}
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Consent (required) */}
              <div>
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    defaultChecked={values.consent}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={describe("consent")}
                    className="mt-1 h-5 w-5 shrink-0 accent-[color:var(--color-forest,#14503f)]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-[color:var(--color-charcoal)]"
                  >
                    {contactForm.consent.label}
                    <span aria-hidden="true" className="ml-0.5">
                      *
                    </span>
                    {contactForm.privacyLink.href && (
                      <>
                        {" "}
                        <a
                          href={contactForm.privacyLink.href}
                          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)]"
                        >
                          <span className="font-semibold underline underline-offset-4 text-[color:var(--color-forest,#14503f)]">
                            {contactForm.privacyLink.label}
                          </span>
                        </a>
                      </>
                    )}
                  </label>
                </div>
                {errors.consent && (
                  <p
                    id="consent-error"
                    className="mt-1.5 flex items-start gap-2 text-sm font-bold text-[color:var(--color-charcoal)]"
                  >
                    <AlertCircle
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0"
                    />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Marketing (separate, optional) */}
              <div className="flex items-start gap-3">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  defaultChecked={values.marketing}
                  className="mt-1 h-5 w-5 shrink-0 accent-[color:var(--color-forest,#14503f)]"
                />
                <label
                  htmlFor="marketing"
                  className="text-sm text-[color:var(--color-charcoal)]"
                >
                  {contactForm.consent.marketingLabel}
                </label>
              </div>

              {/* Outer = entrance-free wrapper, inner = hover */}
              <div>
                <button
                  type="submit"
                  disabled={pending}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[color:var(--color-forest,#14503f)] px-7 py-3.5 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none"
                >
                  <span className="font-semibold text-[color:var(--color-off-white)]">
                    {pending ? contactForm.pendingLabel : contactForm.submitLabel}
                  </span>
                  {!pending && (
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}