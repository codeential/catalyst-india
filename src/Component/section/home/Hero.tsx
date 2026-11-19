"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { ArrowDown, Heart } from "lucide-react";

// TODO: change to a real file inside public/images/home/
const HERO_IMAGE = "/images/home/hero.jpg";

const headline = [
  { text: "We", accent: false },
  { text: "seek", accent: false },
  { text: "an", accent: false },
  { text: "EMPOWERED", accent: true },
  { text: "CITY!", accent: true },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax + fade-out as the user scrolls into the next section
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-dark text-offwhite"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        aria-hidden
      />

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest/60 to-forest-dark/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* Floating glow orbs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-flame/25 blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm"
        >
          Catalyst India
        </motion.p>

        {/* h1 automatically uses font-serif (Fraunces) from your globals.css */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {headline.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-2">
              <motion.span
                variants={word}
                className={`inline-block ${w.accent ? "text-gold" : ""}`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
          className="mx-auto mt-8 h-1 w-24 origin-center rounded-full bg-flame"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex justify-center"
        >
          {/* TODO: point to your real donate page / payment info once verified */}
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-bold text-ink shadow-[0_0_40px_rgba(248,200,8,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(248,200,8,0.65)] focus-visible:outline-offwhite"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/50 transition-transform duration-700 group-hover:translate-x-full" />
            <Heart className="relative h-5 w-5 fill-current text-flame" />
            <span className="relative">Donate</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#approach"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 text-offwhite/80 hover:text-gold focus-visible:outline-gold"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <motion.span
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.span>
        </div>
      </motion.a>

      {/* Curved bottom edge, same color as your body background (offwhite) */}
      <svg
        aria-hidden
        className="absolute bottom-0 left-0 w-full text-offwhite"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        height="60"
      >
        <path fill="currentColor" d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}