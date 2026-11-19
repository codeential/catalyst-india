"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { getSupportHref, navLinks, transparentTopRoutes } from "@/data/site";
import Button from "@/Component/ui/Button";
import MobileMenu from "./MobileMenu";

const isActive = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // Close the mobile menu when the route changes
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  const close = useCallback(() => setOpen(false), []);

  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(!open && y > prev && y > 120);
  });

  const support = getSupportHref();
  const solid = scrolled || !transparentTopRoutes.includes(pathname);
  const onDark = open || !solid;
  const activeHref =
    navLinks.find((l) => isActive(pathname, l.href))?.href ?? null;
  const underlineTarget = hovered ?? activeHref;

  const headerSurface = open
    ? "bg-transparent border-b border-transparent"
    : solid
      ? "bg-offwhite/95 backdrop-blur-md border-b border-stone shadow-sm"
      : "bg-transparent border-b border-transparent";

  const linkColor = onDark
    ? "text-white/90 hover:text-white"
    : "text-forest hover:text-flame-dark";

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
        onFocusCapture={() => setHidden(false)}
        className={`fixed inset-x-0 top-0 z-[70] h-16 transition-[background-color,box-shadow,border-color] duration-300 lg:h-20 ${headerSurface}`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1680px] items-center justify-between px-5 lg:px-10 2xl:px-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Catalyst India — home"
            className="inline-flex items-center"
          >
            <Image
  src="/images/logo.png"
  alt="Catalyst India"
  width={400}
  height={145}
  priority
  className="h-11 w-auto sm:h-12 lg:h-16 xl:h-[72px]"
/>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul
              className="flex items-center gap-8 xl:gap-12"
              onMouseLeave={() => setHovered(null)}
            >
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.45 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setHovered(link.href)}
                      onFocus={() => setHovered(link.href)}
                      onBlur={() => setHovered(null)}
                      className={`relative inline-flex min-h-12 items-center px-1 text-base transition-colors duration-300 xl:text-lg ${linkColor} ${
                        active ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {link.label}
                      {underlineTarget === link.href && (
                        <motion.span
                          layoutId="nav-underline"
                          aria-hidden
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 500, damping: 38 }
                          }
                          className={`absolute inset-x-0 bottom-2 h-0.5 rounded-full ${
                            solid ? "bg-flame" : "bg-gold"
                          }`}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:block"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + navLinks.length * 0.06, duration: 0.45 }}
          >
            <Button
              href={support.href}
              external={support.external}
              variant={solid ? "flame" : "gold"}
            >
              Support Our Work
            </Button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 flex size-11 items-center justify-center lg:hidden"
          >
            <span className="flex h-[18px] w-6 flex-col justify-between">
              {[0, 1, 2].map((bar) => (
                <motion.span
                  key={bar}
                  className={`block h-0.5 w-full rounded-full ${
                    onDark ? "bg-white" : "bg-forest"
                  }`}
                  animate={
                    open
                      ? bar === 0
                        ? { y: 8, rotate: 45 }
                        : bar === 1
                          ? { opacity: 0 }
                          : { y: -8, rotate: -45 }
                      : { y: 0, rotate: 0, opacity: 1 }
                  }
                  transition={{ duration: reduce ? 0 : 0.3 }}
                />
              ))}
            </span>
          </button>
        </div>

        {/* Scroll progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: reduce ? scrollYProgress : smoothProgress }}
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-flame to-gold"
        />
      </motion.header>

      <MobileMenu
        open={open}
        onClose={close}
        links={navLinks}
        activeHref={activeHref}
        support={support}
        toggleRef={toggleRef}
      />
    </>
  );
}