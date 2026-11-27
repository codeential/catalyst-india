"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { AlertCircle, ChevronDown, Coins, Globe, Loader2, Mail, Phone, User } from "lucide-react";
import { donateData } from "@/data/donate";
import { countries, dialCodes } from "@/data/countries";
import { submitInternationalGiving, type IntlState } from "@/action/submit-international-giving";

const initialState: IntlState = { status: "idle" };
const currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
const currencyLabel = (code: string) => `${code} - ${currencyNames.of(code) ?? code}`;

// Local copies of the small helpers (not shared yet; see notes).
function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm font-bold text-[color:var(--color-charcoal)]">
      <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

const controlBase =
  "block min-w-0 w-full rounded-2xl bg-[color:var(--color-off-white)] py-3 text-base text-[color:var(--color-charcoal)]";
const borderFor = (error?: string) =>
  error ? "border-[3px] border-[color:var(--color-charcoal)]" : "border-2 border-[color:var(--color-charcoal)]/25";

function Label({ htmlFor, required = true, children }: { htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-base font-semibold text-[color:var(--color-charcoal)]">
      {children}{" "}
      {required ? <span aria-hidden="true">*</span> : <span className="font-normal">(optional)</span>}
    </label>
  );
}

function Field({
  id, name, label, type = "text", autoComplete, inputMode, icon, error, defaultValue, hint, required = true,
}: {
  id: string; name: string; label: string; type?: string; autoComplete?: string;
  inputMode?: "numeric" | "decimal" | "email" | "text" | "tel";
  icon: ReactNode; error?: string; defaultValue?: string; hint?: string; required?: boolean;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [hint ? hintId : "", error ? errorId : ""].filter(Boolean).join(" ") || undefined;
  return (
    <div className="min-w-0">
      <Label htmlFor={id} required={required}>{label}</Label>
      {hint ? <p id={hintId} className="mb-2 text-sm text-[color:var(--color-charcoal)]/80">{hint}</p> : null}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-charcoal)]">
          {icon}
        </span>
        <input
          id={id} name={name} type={type} required={required} autoComplete={autoComplete}
          inputMode={inputMode} defaultValue={defaultValue}
          aria-invalid={error ? true : undefined} aria-describedby={describedBy}
          className={`${controlBase} pl-12 pr-4 ${borderFor(error)}`}
        />
      </div>
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </div>
  );
}

function SelectField({
  id, name, label, icon, error, value, onChange, placeholder, children,
}: {
  id: string; name: string; label: string; icon: ReactNode; error?: string; value: string;
  onChange: (v: string) => void; placeholder: string; children: ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="min-w-0">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-charcoal)]">
          {icon}
        </span>
        <select
          id={id} name={name} required value={value} onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined}
          className={`${controlBase} appearance-none pl-12 pr-10 ${borderFor(error)}`}
        >
          <option value="">{placeholder}</option>
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[color:var(--color-charcoal)]"
        />
      </div>
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </div>
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

export default function DonateInternationalForm() {
  const { internationalForm: f } = donateData;
  const [state, formAction, pending] = useActionState(submitInternationalGiving, initialState);

  const values = "values" in state ? state.values : undefined;
  const fieldErrors = state.status === "error" ? state.fieldErrors : {};

  const [country, setCountry] = useState("");
  const [dial, setDial] = useState("");
  const [currency, setCurrency] = useState("");
  const [dialNote, setDialNote] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [dismissed, setDismissed] = useState<IntlState | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartedAt(String(Date.now()));
    setIdempotencyKey(crypto.randomUUID());
  }, []);

  useEffect(() => {
    if (state.status === "error") {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
      (firstInvalid ?? alertRef.current)?.focus();
    } else if (state.status !== "idle") {
      statusRef.current?.focus();
    }
  }, [state]);

  function onCountryChange(code: string) {
    setCountry(code);
    const match = countries.find((c) => c.code === code);
    if (match) {
      setDial(match.dial);
      setDialNote(`Dial code set to ${match.dial}.`);
    } else {
      setDial("");
      setDialNote("");
    }
  }

  const showPanel = (state.status === "preview" || state.status === "unavailable") && dismissed !== state;

  if (showPanel) {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="min-w-0 text-[color:var(--color-charcoal)]">
        <h3 className="font-serif text-2xl text-[color:var(--color-deep-teal)]">
          {state.status === "preview" ? f.status.previewHeading : f.status.unavailableHeading}
        </h3>
        <p className="mt-3 text-base leading-relaxed">
          {state.status === "preview" ? f.status.previewText : f.status.unavailableText}
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
            {f.status.retryLabel}
          </button>
          <Link href={f.status.contactHref} className="inline-flex items-center justify-center px-2 py-2">
            <span className="font-semibold underline underline-offset-4">{f.status.contactLabel}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="relative min-w-0 space-y-6">
      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="idempotencyKey" value={idempotencyKey} />

      <div>
        <h3 className="font-serif text-2xl text-[color:var(--color-deep-teal)]">{f.heading}</h3>
        <p className="mt-2 text-base leading-relaxed text-[color:var(--color-charcoal)]">{f.intro}</p>
      </div>

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

      <SelectField
        id="intl-country" name="country" label="Country" icon={<Globe aria-hidden="true" className="size-5" />}
        value={country} onChange={onCountryChange} placeholder="Choose your country" error={fieldErrors.country}
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>{c.name}</option>
        ))}
      </SelectField>

      <SelectField
        id="intl-currency" name="currency" label="Currency" icon={<Coins aria-hidden="true" className="size-5" />}
        value={currency} onChange={setCurrency} placeholder="Choose a currency" error={fieldErrors.currency}
      >
        {f.currencies.map((c) => (
          <option key={c} value={c}>{currencyLabel(c)}</option>
        ))}
      </SelectField>

      <Field
        id="intl-amount" name="amount" label="Amount you are considering" inputMode="decimal" autoComplete="off"
        icon={<Coins aria-hidden="true" className="size-5" />} required={false} hint={f.amountHint}
        error={fieldErrors.amount} defaultValue={values?.amount}
      />

      <Field
        id="intl-name" name="fullName" label="Full name" autoComplete="name"
        icon={<User aria-hidden="true" className="size-5" />} error={fieldErrors.fullName} defaultValue={values?.fullName}
      />
      <Field
        id="intl-email" name="email" label="Email" type="email" autoComplete="email" inputMode="email"
        icon={<Mail aria-hidden="true" className="size-5" />} error={fieldErrors.email} defaultValue={values?.email}
      />

      {/* Phone: dial code follows the country but can be changed */}
      <div className="min-w-0">
        <Label htmlFor="intl-phone" required={false}>Phone</Label>
        <p id="intl-phone-hint" className="mb-2 text-sm text-[color:var(--color-charcoal)]/80">{f.phoneHint}</p>
        <div className="flex min-w-0 gap-3">
          <div className="relative w-32 shrink-0">
            <select
              name="dialCode"
              aria-label="Country dial code"
              value={dial}
              onChange={(e) => setDial(e.target.value)}
              aria-invalid={fieldErrors.dialCode ? true : undefined}
              aria-describedby={fieldErrors.dialCode ? "intl-dial-error" : undefined}
              className={`${controlBase} appearance-none pl-4 pr-9 ${borderFor(fieldErrors.dialCode)}`}
            >
              <option value="">Code</option>
              {dialCodes.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-[color:var(--color-charcoal)]"
            />
          </div>
          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-charcoal)]">
              <Phone aria-hidden="true" className="size-5" />
            </span>
            <input
              id="intl-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national"
              defaultValue={values?.phone}
              aria-invalid={fieldErrors.phone ? true : undefined}
              aria-describedby={["intl-phone-hint", fieldErrors.phone ? "intl-phone-error" : ""].filter(Boolean).join(" ")}
              className={`${controlBase} pl-12 pr-4 ${borderFor(fieldErrors.phone)}`}
            />
          </div>
        </div>
        <p className="sr-only" role="status" aria-live="polite">{dialNote}</p>
        {fieldErrors.dialCode ? <ErrorText id="intl-dial-error">{fieldErrors.dialCode}</ErrorText> : null}
        {fieldErrors.phone ? <ErrorText id="intl-phone-error">{fieldErrors.phone}</ErrorText> : null}
      </div>

      <CheckRow id="intl-declaration" name="declaration" required defaultChecked={values?.declaration} error={fieldErrors.declaration}>
        {f.declaration}
      </CheckRow>

      <div className="space-y-4">
        <CheckRow id="intl-consent" name="consent" required defaultChecked={values?.consent} error={fieldErrors.consent}>
          {f.consent.text}
          {f.consent.privacyHref ? (
            <>
              {" "}
              <Link href={f.consent.privacyHref}>
                <span className="font-semibold underline underline-offset-4">{f.consent.privacyLabel}</span>
              </Link>
            </>
          ) : null}
        </CheckRow>
        <CheckRow id="intl-marketing" name="marketing" defaultChecked={values?.marketing}>
          {f.consent.marketing}
        </CheckRow>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-forest,#14503f)] px-8 py-3.5 text-base font-semibold text-[color:var(--color-off-white)] transition-colors hover:bg-[color:var(--color-deep-teal)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? <Loader2 aria-hidden="true" className="size-5 animate-spin motion-reduce:animate-none" /> : null}
        <span>{f.submitLabel}</span>
      </button>
    </form>
  );
}