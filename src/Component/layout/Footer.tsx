"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  contactInfo,
  copyrightOwner,
  footerLinks,
  getSupportHref,
} from "@/data/site";
import Button from "@/Component/ui/Button";

const noopSubscribe = () => () => {};

export default function Footer() {
  const reduce = useReducedMotion();
  const support = getSupportHref();

  // Real year in the browser, a fixed fallback during prerender (avoids the new Date() error)
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const backToTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  const linkClass =
    "group relative inline-flex min-h-11 items-center text-base text-offwhite/80 transition-colors duration-300 hover:text-gold xl:text-lg";

  const headingClass =
    "mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gold";

  const mapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="relative overflow-hidden bg-forest-dark text-offwhite">
      {/* Animated top divider */}
      <motion.div
        aria-hidden
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-flame via-gold to-flame"
      />

      {/* Decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-flame/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-24 size-96 rounded-full bg-gold/10 blur-3xl"
      />

      {/* Decorative giant wordmark */}
            {/* Decorative giant wordmark (centered) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="select-none whitespace-nowrap font-serif text-[12.5vw] font-semibold leading-none tracking-tight text-white/[0.04]"
        >
          Empowered City
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 pb-8 pt-16 lg:px-10 lg:pt-24 2xl:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.5fr_1.2fr] lg:gap-14"
        >
          {/* 1. Brand */}
          <motion.div variants={item}>
                        <Link
              href="/"
              aria-label="Catalyst India — home"
              className="inline-block"
            >
              <Image
                src="/images/logo.png"
                alt="Catalyst India"
                width={400}
                height={145}
                className="h-16 w-auto lg:h-20 xl:h-[88px]"
              />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-3xl font-semibold leading-tight xl:text-4xl">
              We seek an <span className="text-gold">Empowered City!</span>
            </p>
          </motion.div>

          {/* 2. Navigation */}
          <motion.nav variants={item} aria-label="Footer">
            <h2 className={headingClass}>Explore</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    <span className="relative">
                      {link.label}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* 3. Contact */}
          <motion.div variants={item}>
            <h2 className={headingClass}>Contact</h2>
            <address className="space-y-5 text-base not-italic text-offwhite/80 xl:text-lg">
              <div>
                <p className="mb-1 text-sm font-semibold text-offwhite">
                  Registered Office
                </p>
                <a
                  href={mapsUrl(contactInfo.registeredOffice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-h-11 transition-colors hover:text-gold"
                >
                  {contactInfo.registeredOffice}
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-offwhite">
                  Project Address
                </p>
                <a
                  href={mapsUrl(contactInfo.projectAddress)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-h-11 transition-colors hover:text-gold"
                >
                  {contactInfo.projectAddress}
                </a>
              </div>
              <div className="flex flex-col">
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-gold"
                >
                  {contactInfo.phoneDisplay}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex min-h-11 items-center break-all transition-colors hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </div>
            </address>
          </motion.div>

          {/* 4. Support */}
          <motion.div variants={item}>
            <h2 className={headingClass}>Support</h2>
            <p className="mb-6 max-w-xs text-base text-offwhite/80 xl:text-lg">
              Help us build bridges and open doors for the most vulnerable in
              Delhi.
            </p>
            <Button
              href={support.href}
              external={support.external}
              variant="gold"
            >
              Support Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-offwhite/60 sm:flex-row lg:mt-24"
        >
          <p>
            © {year} {copyrightOwner}
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex min-h-11 items-center gap-2 transition-colors hover:text-gold"
          >
            Back to top
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}