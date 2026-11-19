"use client";

import { useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Button from "@/Component/ui/Button";
import { siteConfig, type NavLink } from "@/data/site";

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activeHref: string | null;
  support: { href: string; external: boolean };
  toggleRef: RefObject<HTMLButtonElement | null>;
};

export default function MobileMenu({
  open,
  onClose,
  links,
  activeHref,
  support,
  toggleRef,
}: Props) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const items = [
        toggleRef.current,
        ...Array.from(
          panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        ),
      ].filter((el): el is HTMLElement => el !== null);

      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (!current || !items.includes(current)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && current === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, toggleRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={
            reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }
          }
          animate={
            reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }
          }
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{
            duration: reduce ? 0.15 : 0.55,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-forest-dark px-6 pb-8 pt-24 text-offwhite lg:hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-flame/25 blur-3xl"
          />

          <nav aria-label="Mobile" className="relative">
            <ul>
              {links.map((link, i) => {
                const active = link.href === activeHref;
                return (
                  <motion.li
                    key={link.href}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: reduce ? 0 : 0.25 + i * 0.07,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-baseline gap-4 py-4 font-serif text-3xl transition-colors ${
                        active ? "text-gold" : "text-offwhite hover:text-gold"
                      }`}
                    >
                      <span className="text-sm tabular-nums text-gold/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          active
                            ? "underline decoration-2 underline-offset-8"
                            : ""
                        }
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            className="relative mt-auto pt-10"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: reduce ? 0 : 0.25 + links.length * 0.07,
                duration: 0.5,
              },
            }}
          >
            <Button
              href={support.href}
              external={support.external}
              variant="gold"
              className="w-full !min-h-12 text-base"
              onClick={onClose}
            >
              Support Our Work
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 block min-h-11 py-2 text-center text-sm text-offwhite/70 hover:text-gold"
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}