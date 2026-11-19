"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
}: Props) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";
  const center = align === "center";

  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };
  const word: Variants = {
    hidden: reduce ? { opacity: 0 } : { y: "110%" },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className={`mb-5 text-sm font-semibold uppercase tracking-[0.25em] xl:text-base ${
          dark ? "text-gold" : "text-flame"
        }`}
      >
        {eyebrow}
      </motion.p>

      <h2
        className={`flex flex-wrap gap-x-[0.28em] text-4xl font-semibold leading-[1.15] md:text-6xl xl:text-7xl ${
          center ? "justify-center" : "justify-start"
        } ${dark ? "text-offwhite" : "text-forest"}`}
      >
        {title.split(" ").map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]"
          >
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </h2>

      {lead && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
          }}
          className={`mt-6 text-lg xl:text-xl ${
            center ? "mx-auto" : ""
          } max-w-[65ch] ${dark ? "text-offwhite/80" : "text-ink/75"}`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}