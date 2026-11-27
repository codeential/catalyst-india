"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { donateLink, navigation } from "@/navigation/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-off-white text-charcoal"
      style={{ borderColor: "var(--border)" }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="site-container flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          aria-label="Catalyst India home"
          onClick={closeMenu}
          className="shrink-0"
        >
          <Image
            src="/images/logoblack.png"
            alt="Catalyst India"
            width={2500}
            height={875}
            sizes="(max-width: 1023px) 120px, 140px"
            preload
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 justify-center lg:flex"
        >
          <ul className="flex items-center gap-5 xl:gap-7">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap text-sm font-medium transition-default hover:text-[var(--color-deep-teal)] xl:text-[15px]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={donateLink.href}
          className="hidden shrink-0 items-center justify-center rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-default hover:bg-[var(--color-charcoal)] lg:inline-flex"
        >
          {donateLink.label}
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md lg:hidden"
        >
          <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-teal transition-default ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-teal transition-default ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-teal transition-default ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`border-t bg-off-white lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        style={{ borderColor: "var(--border)" }}
      >
        <div className="site-container py-3">
          <ul>
            {navigation.map(({ label, href }) => (
              <li
                key={href}
                className="border-b border-[var(--border)] last:border-b-0"
              >
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium text-charcoal transition-default hover:text-[var(--color-deep-teal)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={donateLink.href}
            onClick={closeMenu}
            className="mt-4 flex min-h-11 items-center justify-center rounded-md bg-teal px-5 text-sm font-semibold text-white transition-default hover:bg-[var(--color-charcoal)]"
          >
            {donateLink.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
