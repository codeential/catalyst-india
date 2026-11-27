"use client";

import Link from "next/link";
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
  Building2,
  CheckCircle2,
  ClipboardList,
  Info,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
import { submitEnquiry } from "@/action/submit-enquiry";
import { getInvolvedData, type EnquiryState } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const initialState: EnquiryState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: {
    name: "",
    organisation: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    consent: false,
    marketing: false,
  },
};

const inputClass =
  "w-full bg-transparent py-2.5 text-sm text-[color:var(--color-charcoal)] placeholder:text-[color:var(--color-charcoal)]/50 focus:outline-none";

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  icon: LucideIcon;
  align?: "center" | "start";
  className?: string;
  children: ReactNode;
};

function Field({ id, label, required, error, icon: Icon, align = "center", className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-[color:var(--color-charcoal)]">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <div
        className={`mt-1.5 flex gap-2.5 rounded-lg bg-[color:var(--color-off-white)] px-3 transition focus-within:ring-2 focus-within:ring-[color:var(--color-forest,#14503f)]/40 ${
          align === "start" ? "items-start pt-3" : "items-center"
        } ${
          error
            ? "border-2 border-[color:var(--color-charcoal)]"
            : "border border-[color:var(--color-charcoal)]/25 focus-within:border-[color:var(--color-forest,#14503f)]"
        }`}
      >
        <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[color:var(--color-forest,#14503f)]/70" />
        {children}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-charcoal)]"
        >
          <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function GetInvolvedEnquiry() {
  const { enquiryForm } = getInvolvedData;
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const [startedAt, setStartedAt] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => setStartedAt(String(Date.now())), []);

  useEffect(() => {
    if (state.status === "error") {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    }
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  const errors = state.fieldErrors;
  const v = state.values;
  const id = (k: string) => `enquiry-${k}`;
  const aria = (k: keyof typeof errors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id(k)}-error` : undefined,
  });

  return (
    <section
      id="partner"
      aria-labelledby="enquiry-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] pb-14 md:pb-20 lg:scroll-mt-24"
    >
      <div className="site-container">
        <div
          className="animate-fade-up rounded-3xl border border-[color:var(--color-forest,#14503f)]/15 bg-[color:var(--color-forest,#14503f)]/[0.07] p-6 shadow-sm motion-reduce:animate-none md:p-10"
          style={delay(0)}
        >
          <div className="group/heading w-fit">
            <h2
              id="enquiry-heading"
              className="font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] md:text-4xl"
            >
              {enquiryForm.heading}
            </h2>
            <span
              aria-hidden="true"
              className="mt-4 block h-0.5 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)]"
            />
          </div>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--color-charcoal)]/85">
            {enquiryForm.description}
          </p>
          

          {state.status === "success" ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              className="mt-8 flex items-start gap-4 rounded-2xl bg-[color:var(--color-off-white)] p-6 focus:outline-none"
            >
              <CheckCircle2 aria-hidden="true" className="h-8 w-8 shrink-0 text-[color:var(--color-forest,#14503f)]" />
              <div>
                <h3 className="font-serif text-xl font-bold text-[color:var(--color-forest,#14503f)]">
                  {enquiryForm.successTitle}
                </h3>
                <p className="mt-1 text-base text-[color:var(--color-charcoal)]/85">{state.message}</p>
              </div>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="mt-8" aria-busy={pending}>
              {/* Spam controls: honeypot + fill-time token */}
              <div aria-hidden="true" className="hidden">
                <label>
                  Website
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <input type="hidden" name="startedAt" value={startedAt} />

              {errors.form && (
                <p
                  role="alert"
                  className="mb-6 flex items-center gap-2 rounded-lg border-2 border-[color:var(--color-charcoal)] bg-[color:var(--color-off-white)] px-4 py-3 text-sm font-semibold text-[color:var(--color-charcoal)]"
                >
                  <AlertCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
                  {errors.form}
                </p>
              )}

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <Field id={id("name")} label={enquiryForm.labels.name} required icon={User} error={errors.name}>
                  <input
                    id={id("name")}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    defaultValue={v.name}
                    className={inputClass}
                    {...aria("name")}
                  />
                </Field>

                <Field id={id("organisation")} label={enquiryForm.labels.organisation} icon={Building2} error={errors.organisation}>
                  <input
                    id={id("organisation")}
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    defaultValue={v.organisation}
                    className={inputClass}
                    {...aria("organisation")}
                  />
                </Field>

                <Field id={id("email")} label={enquiryForm.labels.email} required icon={Mail} error={errors.email}>
                  <input
                    id={id("email")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    defaultValue={v.email}
                    className={inputClass}
                    {...aria("email")}
                  />
                </Field>

                <Field id={id("phone")} label={enquiryForm.labels.phone} icon={Phone} error={errors.phone}>
                  <input
                    id={id("phone")}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={20}
                    defaultValue={v.phone}
                    className={inputClass}
                    {...aria("phone")}
                  />
                </Field>

                <Field
                  id={id("interest")}
                  label={enquiryForm.labels.interest}
                  required
                  icon={ClipboardList}
                  error={errors.interest}
                  className="lg:col-span-2"
                >
                  <select
                    id={id("interest")}
                    name="interest"
                    required
                    defaultValue={v.interest}
                    className={inputClass}
                    {...aria("interest")}
                  >
                    <option value="" disabled>
                      {enquiryForm.interestPlaceholder}
                    </option>
                    {enquiryForm.interestOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id={id("message")}
                  label={enquiryForm.labels.message}
                  icon={MessageSquare}
                  align="start"
                  error={errors.message}
                  className="md:col-span-2 lg:col-span-3"
                >
                  <textarea
                    id={id("message")}
                    name="message"
                    rows={4}
                    maxLength={1000}
                    defaultValue={v.message}
                    className={`${inputClass} resize-y`}
                    {...aria("message")}
                  />
                </Field>
              </div>

              {/* Consent: required, then separate optional marketing opt-in */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--color-charcoal)]/90">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      defaultChecked={v.consent}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-[color:var(--color-forest,#14503f)]"
                      {...aria("consent")}
                    />
                    <span>
                      {enquiryForm.consentLabel}
                      <span aria-hidden="true"> *</span>
                      {enquiryForm.privacyHref && (
                        <>
                          {" "}
                          <Link href={enquiryForm.privacyHref}>
                            <span className="font-semibold text-[color:var(--color-forest,#14503f)] underline underline-offset-2">
                              {enquiryForm.privacyLabel}
                            </span>
                          </Link>
                        </>
                      )}
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      id={`${id("consent")}-error`}
                      className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-charcoal)]"
                    >
                      <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                      {errors.consent}
                    </p>
                  )}
                </div>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--color-charcoal)]/90">
                  <input
                    type="checkbox"
                    name="marketing"
                    defaultChecked={v.marketing}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[color:var(--color-forest,#14503f)]"
                  />
                  <span>{enquiryForm.marketingLabel}</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={pending}
                className="group/btn mt-8 inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-forest,#14503f)] px-7 py-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span className="text-sm font-semibold text-[color:var(--color-off-white)]">
                  {pending ? enquiryForm.submittingLabel : enquiryForm.submitLabel}
                </span>
                {pending ? (
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin text-[color:var(--color-off-white)] motion-reduce:animate-none" />
                ) : (
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}