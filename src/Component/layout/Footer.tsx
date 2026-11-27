import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBuilding,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import {
  brandDescription,
  contactItems,
  donateLink,
  getInvolvedLinks,
  homeLink,
  policyLinks,
  quickLinks,
  socialLinks,
  type FooterLink,
} from "@/navigation/footerNavigation";

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Facebook: FaFacebookF,
};

const contactIcons: Record<string, IconType> = {
  "Registered Office": FaBuilding,
  "Project Address": FaMapMarkerAlt,
  Telephone: FaPhoneAlt,
  Email: FaEnvelope,
};

const headingClass =
  "whitespace-nowrap text-xl font-semibold leading-tight text-sand sm:text-2xl";

const linkClass =
  "block w-fit py-1 text-[15px] text-[var(--color-off-white)] opacity-80 transition-default hover:text-sand hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)]";

const pendingLinkClass =
  "block w-fit py-1 text-[15px] text-[var(--color-off-white)] opacity-60";

const contactLinkClass =
  "mt-0.5 inline-block text-[15px] text-[var(--color-off-white)] opacity-80 transition-default hover:text-sand hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)]";

const policyLinkClass =
  "whitespace-nowrap text-[13px] text-[var(--color-off-white)] opacity-70 transition-default hover:text-sand hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)] sm:text-sm";

const pendingPolicyClass =
  "whitespace-nowrap text-[13px] text-[var(--color-off-white)] opacity-60 sm:text-sm";

const legalHrefFallbacks: Record<string, string> = {
  "Privacy Policy": "/privacy-policy",
  "Terms & Conditions": "/terms-and-conditions",
  "Donation/Refund Policy": "/donation-refund-policy",
};

function renderFooterLink(link: FooterLink, policy = false) {
  if (!link.href) {
    return (
      <span className={policy ? pendingPolicyClass : pendingLinkClass}>
        {link.label}
      </span>
    );
  }

  return (
    <Link href={link.href} className={policy ? policyLinkClass : linkClass}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-teal text-[var(--color-off-white)]">
      <div className="site-container py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <section aria-label="Catalyst India">
            <Link
              href={homeLink.href}
              aria-label={homeLink.label}
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)]"
            >
              <Image
                src="/images/logowhite.png"
                alt="Catalyst India"
                width={2113}
                height={744}
                sizes="(max-width: 639px) 160px, 180px"
                className="h-10 w-auto sm:h-12"
              />
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed opacity-75">
              {brandDescription}
            </p>

            <Link
              href={donateLink.href}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-sand px-6 text-sm font-semibold text-charcoal transition-default hover:bg-[var(--color-off-white)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)] sm:text-base"
            >
              {donateLink.label}
            </Link>

            <ul className="mt-4 flex items-center gap-3" aria-label="Social media">
              {socialLinks.map((link) => {
                const SocialIcon = socialIcons[link.label];

                return (
                  <li key={link.label}>
                    <a
                      href={link.href ?? "#"}
                      aria-label={link.label}
                      className="inline-flex size-9 items-center justify-center rounded-full text-[var(--color-off-white)] opacity-80 transition-default hover:bg-sand hover:text-charcoal hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)]"
                    >
                      <SocialIcon aria-hidden="true" className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          <nav aria-label="Quick links">
            <h2 className={headingClass}>Quick Links</h2>

            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Get involved">
            <h2 className={headingClass}>Get Involved</h2>

            <ul className="mt-4 space-y-2">
              {getInvolvedLinks.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Contact</h2>

            <address className="mt-4 space-y-3 text-[15px] not-italic text-[var(--color-off-white)]">
              {contactItems.map((item) => {
                const ContactIcon = contactIcons[item.label];

                return (
                  <div key={item.label}>
                    <p className="flex items-center gap-2 text-[15px] font-semibold text-sand">
                      <ContactIcon
                        aria-hidden="true"
                        className="size-[18px] shrink-0"
                      />
                      {item.label}
                    </p>

                    {item.href ? (
                      <a href={item.href} className={contactLinkClass}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-[15px] leading-relaxed opacity-75">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 text-sm text-white/80 md:text-[15px]">
          <div className="grid grid-cols-1 items-center gap-3 text-center md:grid md:grid-cols-[1fr_auto_1fr] md:text-left">
            <p className="justify-self-center md:justify-self-start">
              © 2026 Catalyst India. All rights reserved.
            </p>

            <nav
              aria-label="Legal"
              className="order-first justify-self-center md:order-none"
            >
              <ul className="flex flex-wrap items-center justify-center">
                {policyLinks.map((link, index) => (
                  <li key={link.label} className="flex items-center">
                    <Link
                      href={link.href ?? legalHrefFallbacks[link.label]}
                      className="whitespace-nowrap transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>

                    {index < policyLinks.length - 1 ? (
                      <span aria-hidden="true" className="mx-3 opacity-50">
                        |
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <p className="flex items-center justify-center justify-self-center md:justify-end md:justify-self-end md:text-right">
  <span
    aria-hidden="true"
    className="inline-block h-[2px] w-8 bg-[#e0a526]"
  />
  <span className="ml-2">
    by{" "}
    <a
      href="https://www.codeential.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Codeential Technologies
    </a>
  </span>
</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
