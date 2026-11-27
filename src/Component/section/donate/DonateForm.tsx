"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { AlertCircle, IndianRupee, Loader2, Mail, User } from "lucide-react";
import { donateData } from "@/data/donate";
import { submitDonation, type DonationState } from "@/action/submit-donation";
import DonateInternationalForm from "./DonateInternationalForm";

const initialState: DonationState = { status: "idle" };
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm font-bold text-[color:var(--color-charcoal)]">
      <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

function Field({
  id, name, label, type = "text", autoComplete, inputMode, icon, error, defaultValue, hint,
}: {
  id: string; name: string; label: string; type?: string; autoComplete?: string;
  inputMode?: "numeric" | "email" | "text"; icon: ReactNode; error?: string; defaultValue?: string; hint?: string;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [hint ? hintId : "", error ? errorId : ""].filter(Boolean).join(" ") || undefined;
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-base font-semibold text-[color:var(--color-charcoal)]">
        {label} <span aria-hidden="true">*</span>
      </label>
      {hint ? <p id={hintId} className="mb-2 text-sm text-[color:var(--color-charcoal)]/80">{hint}</p> : null}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-charcoal)]">
          {icon}
        </span>
        <input
          id={id} name={name} type={type} required autoComplete={autoComplete} inputMode={inputMode}
          defaultValue={defaultValue} aria-invalid={error ? true : undefined} aria-describedby={describedBy}
          className={`block min-w-0 w-full rounded-2xl bg-[color:var(--color-off-white)] py-3 pl-12 pr-4 text-base text-[color:var(--color-charcoal)] ${
            error ? "border-[3px] border-[color:var(--color-charcoal)]" : "border-2 border-[color:var(--color-charcoal)]/25"
          }`}
        />
      </div>
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </div>
  );
}

function Choice({
  name, value, checked, defaultChecked, onChange, children, className = "", innerClassName = "text-center justify-center",
}: {
  name: string; value: string; checked?: boolean; defaultChecked?: boolean; onChange?: () => void;
  children: ReactNode; className?: string; innerClassName?: string;
}) {
  return (
    <label className={`relative block cursor-pointer ${className}`}>
      <input
        type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked}
        onChange={onChange} className="peer sr-only"
      />
      <span
        className={`flex min-h-12 items-center rounded-2xl border-2 border-[color:var(--color-charcoal)]/25 bg-[color:var(--color-off-white)] px-4 py-3 text-base font-medium text-[color:var(--color-charcoal)] transition-colors peer-checked:border-[color:var(--color-forest,#14503f)] peer-checked:bg-[color:var(--color-forest,#14503f)] peer-checked:text-[color:var(--color-off-white)] peer-focus-visible:ring-2 peer-focus-visible:ring-[color:var(--color-deep-teal)] peer-focus-visible:ring-offset-2 ${innerClassName}`}
      >
        {children}
      </span>
    </label>
  );
}

function CheckRow({
  id, name, required, defaultChecked, error, children,
}: {
  id: string; name: string; required?: boolean; defaultChecked?: boolean; error?: string; children: ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="min-w-0">
      <div className="flex items-start gap-3">
        <input
          id={id} name={name} type="checkbox" required={required} defaultChecked={defaultChecked}
          aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined}
          className="mt-1 size-5 shrink-0 accent-[color:var(--color-forest,#14503f)]"
        />
        <label htmlFor={id} className="min-w-0 text-base leading-relaxed text-[color:var(--color-charcoal)]">
          {children}
          {required ? <span aria-hidden="true"> *</span> : null}
        </label>
      </div>
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </div>
  );
}

export default function DonateForm() {
  const { form } = donateData;
  const [state, formAction, pending] = useActionState(submitDonation, initialState);

  const values = "values" in state ? state.values : undefined;
  const fieldErrors = state.status === "error" ? state.fieldErrors : {};

  const [route, setRoute] = useState<string>(form.defaultRoute);
  const [amountChoice, setAmountChoice] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [dismissed, setDismissed] = useState<DonationState | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartedAt(String(Date.now()));
    setIdempotencyKey(crypto.randomUUID());
  }, []);

  useEffect(() => {
    if (state.status === "error") {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>(
        '[aria-invalid="true"], fieldset[data-invalid="true"] input',
      );
      (firstInvalid ?? alertRef.current)?.focus();
    } else if (state.status !== "idle") {
      statusRef.current?.focus();
    }
    if (state.status === "redirect" && state.checkoutUrl.startsWith("https://")) {
      window.location.assign(state.checkoutUrl);
    }
  }, [state]);

  const showPanel =
    (state.status === "preview" || state.status === "unavailable" || state.status === "redirect") &&
    dismissed !== state;

  const enabledFunds = form.funds.filter((f) => f.enabled);
  const amountIsCustom = amountChoice === "custom";

  return (
    <section
      id="give-form"
      aria-labelledby="donate-form-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] lg:scroll-mt-24"
    >
      <div className="site-container py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="group/heading w-fit max-w-full">
            <h2
              id="donate-form-heading"
              className="font-serif text-3xl leading-tight text-[color:var(--color-deep-teal)] sm:text-4xl"
            >
              {form.heading}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 md:group-hover/heading:w-[calc(100%+4rem)]"
            />
          </div>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--color-charcoal)] sm:text-lg">{form.intro}</p>

          <div className="mt-8 rounded-3xl bg-[color:var(--color-warm-sand)]/25 p-5 sm:p-8">
            {showPanel ? (
              <div ref={statusRef} tabIndex={-1} role="status" className="min-w-0 text-[color:var(--color-charcoal)]">
                {state.status === "redirect" ? (
                  <p className="text-base font-semibold">{form.status.redirectingText}</p>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl text-[color:var(--color-deep-teal)]">
                      {state.status === "preview" ? form.status.previewHeading : form.status.unavailableHeading}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed">
                      {state.status === "preview" ? form.status.previewText : form.status.unavailableText}
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={() => {
                          setDismissed(state);
                          setIdempotencyKey(crypto.randomUUID());
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-forest,#14503f)] px-6 py-3 text-base font-semibold text-[color:var(--color-off-white)] transition-colors hover:bg-[color:var(--color-deep-teal)]"
                      >
                        {form.status.retryLabel}
                      </button>
                      <Link href={form.status.contactHref} className="inline-flex items-center justify-center px-2 py-2">
                        <span className="font-semibold underline underline-offset-4">{form.status.contactLabel}</span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="min-w-0 space-y-8">
                {/* 1. Eligibility / source of funds: outside any <form>, so the two forms never nest */}
                <fieldset className="min-w-0">
                  <legend className="mb-3 text-base font-semibold text-[color:var(--color-charcoal)]">
                    {form.eligibility.legend} <span aria-hidden="true">*</span>
                  </legend>
                  <div className="grid gap-3">
                    {form.eligibility.options.map((o) => (
                      <Choice
                        key={o.value}
                        name="route-choice"
                        value={o.value}
                        checked={route === o.value}
                        onChange={() => setRoute(o.value)}
                        innerClassName="justify-start text-left"
                      >
                        {o.label}
                      </Choice>
                    ))}
                  </div>
                </fieldset>

                {route === "international" ? <DonateInternationalForm /> : null}

                {route === "domestic" ? (
                  <form ref={formRef} action={formAction} noValidate className="relative space-y-8">
                    <input type="hidden" name="route" value="domestic" />
                    <div className="sr-only" aria-hidden="true">
                      <label>
                        Website
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
                      </label>
                    </div>
                    <input type="hidden" name="startedAt" value={startedAt} />
                    <input type="hidden" name="idempotencyKey" value={idempotencyKey} />

                    {state.status === "error" ? (
                      <div
                        ref={alertRef}
                        tabIndex={-1}
                        role="alert"
                        className="flex items-start gap-3 rounded-2xl border-[3px] border-[color:var(--color-charcoal)] bg-[color:var(--color-off-white)] p-4 text-[color:var(--color-charcoal)]"
                      >
                        <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
                        <p className="font-bold">{state.message}</p>
                      </div>
                    ) : null}

                    <p className="text-sm text-[color:var(--color-charcoal)]/80">
                      <span aria-hidden="true">* </span>Required fields are marked with an asterisk.
                    </p>

                    <CheckRow
                      id="donate-eligibility" name="eligibility" required
                      defaultChecked={values?.eligibilityConfirmed} error={fieldErrors.eligibility}
                    >
                      {form.eligibility.declaration}
                    </CheckRow>

                    <fieldset
                      data-invalid={fieldErrors.amount && !amountIsCustom ? "true" : undefined}
                      aria-describedby={fieldErrors.amount && !amountIsCustom ? "amount-error" : undefined}
                      className="min-w-0"
                    >
                      <legend className="mb-3 text-base font-semibold text-[color:var(--color-charcoal)]">
                        Amount <span aria-hidden="true">*</span>
                      </legend>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {form.presets.map((p) => (
                          <Choice
                            key={p} name="amountChoice" value={String(p)}
                            checked={amountChoice === String(p)} onChange={() => setAmountChoice(String(p))}
                          >
                            {inr(p)}
                          </Choice>
                        ))}
                        <Choice
                          name="amountChoice" value="custom" checked={amountIsCustom}
                          onChange={() => setAmountChoice("custom")} className="col-span-2 sm:col-span-4"
                        >
                          Another amount
                        </Choice>
                      </div>
                      {fieldErrors.amount && !amountIsCustom ? (
                        <ErrorText id="amount-error">{fieldErrors.amount}</ErrorText>
                      ) : null}
                    </fieldset>

                    {amountIsCustom ? (
                      <Field
                        id="donate-custom-amount" name="customAmount" label="Amount in rupees"
                        inputMode="numeric" autoComplete="off"
                        icon={<IndianRupee aria-hidden="true" className="size-5" />}
                        error={fieldErrors.amount} defaultValue={values?.customAmount} hint="Whole rupees only."
                      />
                    ) : null}

                    {form.monthlyEnabled ? (
                      <fieldset
                        data-invalid={fieldErrors.frequency ? "true" : undefined}
                        aria-describedby={fieldErrors.frequency ? "frequency-error" : undefined}
                        className="min-w-0"
                      >
                        <legend className="mb-3 text-base font-semibold text-[color:var(--color-charcoal)]">How often?</legend>
                        <div className="grid grid-cols-2 gap-3">
                          <Choice name="frequency" value="one_time" defaultChecked={(values?.frequency ?? "one_time") === "one_time"}>
                            One-time
                          </Choice>
                          <Choice name="frequency" value="monthly" defaultChecked={values?.frequency === "monthly"}>
                            Monthly
                          </Choice>
                        </div>
                        {fieldErrors.frequency ? <ErrorText id="frequency-error">{fieldErrors.frequency}</ErrorText> : null}
                      </fieldset>
                    ) : (
                      <input type="hidden" name="frequency" value="one_time" />
                    )}

                    {enabledFunds.length > 1 ? (
                      <fieldset
                        data-invalid={fieldErrors.fund ? "true" : undefined}
                        aria-describedby={fieldErrors.fund ? "fund-error" : undefined}
                        className="min-w-0"
                      >
                        <legend className="mb-3 text-base font-semibold text-[color:var(--color-charcoal)]">Fund</legend>
                        <div className="grid gap-3">
                          {enabledFunds.map((f) => (
                            <Choice
                              key={f.code} name="fund" value={f.code}
                              defaultChecked={(values?.fund ?? enabledFunds[0].code) === f.code}
                              innerClassName="justify-start text-left"
                            >
                              {f.label}
                            </Choice>
                          ))}
                        </div>
                        {fieldErrors.fund ? <ErrorText id="fund-error">{fieldErrors.fund}</ErrorText> : null}
                      </fieldset>
                    ) : (
                      <>
                        <input type="hidden" name="fund" value={enabledFunds[0]?.code ?? ""} />
                        <p className="text-base text-[color:var(--color-charcoal)]">
                          <span className="font-semibold">Fund:</span> {enabledFunds[0]?.label}
                        </p>
                      </>
                    )}

                    <div className="grid gap-5">
                      <Field
                        id="donate-name" name="fullName" label="Full name" autoComplete="name"
                        icon={<User aria-hidden="true" className="size-5" />}
                        error={fieldErrors.fullName} defaultValue={values?.fullName}
                      />
                      <Field
                        id="donate-email" name="email" label="Email" type="email" autoComplete="email" inputMode="email"
                        icon={<Mail aria-hidden="true" className="size-5" />}
                        error={fieldErrors.email} defaultValue={values?.email}
                      />
                    </div>

                    <div className="space-y-4">
                      <CheckRow id="donate-consent" name="consent" required defaultChecked={values?.consent} error={fieldErrors.consent}>
                        {form.consent.text}
                        {form.consent.privacyHref ? (
                          <>
                            {" "}
                            <Link href={form.consent.privacyHref}>
                              <span className="font-semibold underline underline-offset-4">{form.consent.privacyLabel}</span>
                            </Link>
                          </>
                        ) : null}
                      </CheckRow>
                      <CheckRow id="donate-marketing" name="marketing" defaultChecked={values?.marketing}>
                        {form.consent.marketing}
                      </CheckRow>
                    </div>

                    <button
                      type="submit"
                      disabled={pending}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-forest,#14503f)] px-8 py-3.5 text-base font-semibold text-[color:var(--color-off-white)] transition-colors hover:bg-[color:var(--color-deep-teal)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {pending ? <Loader2 aria-hidden="true" className="size-5 animate-spin motion-reduce:animate-none" /> : null}
                      <span>{form.submitLabel}</span>
                    </button>
                  </form>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* No TornEdge here: the next section is proposed on the same off-white background. */}
    </section>
  );
}