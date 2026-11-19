// "use client";

// import { useRef, useState } from "react";
// import {
//   motion,
//   useMotionValueEvent,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   type Variants,
// } from "motion/react";
// import { pillars, visionStatement, type Pillar } from "@/data/home";
// import SectionHeader from "@/Component/ui/SectionHeader";

// const icons: Record<Pillar["id"], React.ReactNode> = {
//   empowered: (
//     <>
//       <circle cx="20" cy="11" r="5" />
//       <path d="M8 34c0-7 5-12 12-12s12 5 12 12" />
//     </>
//   ),
//   educated: (
//     <path d="M6 9h11a3 3 0 013 3v21a3 3 0 00-3-3H6zM34 9H23a3 3 0 00-3 3v21a3 3 0 013-3h11z" />
//   ),
//   "environmentally-conscious": (
//     <path d="M8 32C8 16 18 8 33 7c0 15-8 25-23 25zM8 32l14-14" />
//   ),
//   "economically-sustainable": <path d="M7 33V22M16 33V15M25 33V19M34 33V7" />,
// };

// // Full class strings so Tailwind can detect them
// const themes: Record<
//   Pillar["id"],
//   {
//     card: string;
//     title: string;
//     text: string;
//     label: string;
//     badge: string;
//     icon: string;
//     dot: string;
//     glow: string;
//     rule: string;
//   }
// > = {
//   empowered: {
//     card: "bg-forest",
//     title: "text-gold",
//     text: "text-offwhite/90",
//     label: "text-gold/80",
//     badge: "bg-gold text-forest-dark",
//     icon: "bg-forest-dark text-gold",
//     dot: "bg-gold",
//     glow: "bg-gold/20",
//     rule: "border-white/15",
//   },
//   educated: {
//     card: "bg-flame",
//     title: "text-offwhite",
//     text: "text-offwhite/95",
//     label: "text-offwhite/80",
//     badge: "bg-offwhite text-flame-dark",
//     icon: "bg-flame-dark text-offwhite",
//     dot: "bg-offwhite",
//     glow: "bg-gold/30",
//     rule: "border-white/20",
//   },
//   "environmentally-conscious": {
//     card: "bg-ink",
//     title: "text-gold",
//     text: "text-offwhite/85",
//     label: "text-gold/80",
//     badge: "bg-gold text-ink",
//     icon: "bg-forest text-gold",
//     dot: "bg-flame",
//     glow: "bg-forest/40",
//     rule: "border-white/15",
//   },
//   "economically-sustainable": {
//     card: "bg-gold",
//     title: "text-forest-dark",
//     text: "text-ink/85",
//     label: "text-forest-dark/80",
//     badge: "bg-forest-dark text-gold",
//     icon: "bg-forest-dark text-gold",
//     dot: "bg-flame-dark",
//     glow: "bg-offwhite/50",
//     rule: "border-ink/15",
//   },
// };

// // Height of the visible "tab" of each stacked card (header strip)
// const TAB = 4.25; // rem

// function PillarCard({
//   pillar,
//   index,
//   total,
//   reduce,
// }: {
//   pillar: Pillar;
//   index: number;
//   total: number;
//   reduce: boolean;
// }) {
//   const t = themes[pillar.id];
//   const isLast = index === total - 1;
//   const num = String(index + 1).padStart(2, "0");

//   const bullets: Variants = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.2 },
//     },
//   };
//   const bullet: Variants = {
//     hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -28 },
//     show: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: reduce ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <motion.li
//       style={{ top: `calc(7rem + ${index * TAB}rem)` }}
//       initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className={`relative overflow-hidden rounded-[2rem] shadow-xl lg:sticky lg:min-h-[22rem] ${t.card} ${
//         isLast ? "" : "mb-6 lg:mb-[26vh]"
//       }`}
//     >
//       {/* Glow */}
//       <div
//         aria-hidden
//         className={`pointer-events-none absolute -right-20 top-10 size-72 rounded-full blur-3xl ${t.glow}`}
//       />

//       {/* Header strip: number + title (always visible when stacked) */}
//       <div
//         className={`relative flex items-center gap-4 border-b px-6 lg:px-12 ${t.rule}`}
//         style={{ height: `${TAB}rem` }}
//       >
//         <span
//           className={`flex h-10 min-w-12 items-center justify-center rounded-full px-3 font-serif text-lg font-semibold tabular-nums ${t.badge}`}
//         >
//           {num}
//         </span>
//         <h3
//           className={`font-serif text-xl font-semibold leading-tight sm:text-2xl xl:text-3xl ${t.title}`}
//         >
//           {pillar.title}
//         </h3>
//       </div>

//       {/* Body */}
//       <div className="relative flex flex-col gap-6 px-6 pb-10 pt-8 sm:flex-row sm:items-start lg:px-12">
//         <span
//           className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${t.icon}`}
//         >
//           <svg
//             viewBox="0 0 40 40"
//             className="size-8"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden
//           >
//             {icons[pillar.id]}
//           </svg>
//         </span>

//         <div>
//           <p
//             className={`text-sm font-semibold uppercase tracking-[0.2em] ${t.label}`}
//           >
//             We seek an {pillar.title} Delhi where
//           </p>
//           <motion.ul
//             variants={bullets}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.4 }}
//             className="mt-5 max-w-2xl space-y-4"
//           >
//             {pillar.points.map((p) => (
//               <motion.li
//                 key={p}
//                 variants={bullet}
//                 className={`flex gap-4 text-lg leading-relaxed xl:text-xl ${t.text}`}
//               >
//                 <span
//                   aria-hidden
//                   className={`mt-2.5 size-2.5 shrink-0 rounded-full ${t.dot}`}
//                 />
//                 {p}
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
//       </div>
//     </motion.li>
//   );
// }

// export default function Vision() {
//   const reduce = useReducedMotion() ?? false;
//   const listRef = useRef<HTMLUListElement>(null);
//   const [active, setActive] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: listRef,
//     offset: ["start 0.6", "end end"],
//   });
//   const bar = useSpring(scrollYProgress, {
//     stiffness: 120,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   useMotionValueEvent(scrollYProgress, "change", (v) => {
//     const i = Math.min(pillars.length - 1, Math.max(0, Math.floor(v * pillars.length)));
//     setActive(i);
//   });

//   return (
//     // overflow-x-clip (not overflow-hidden) so position: sticky keeps working
//     <section
//       id="vision"
//       className="relative z-20 -mt-8 overflow-x-clip rounded-t-[2.5rem] bg-stone py-24 lg:py-32"
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -left-32 top-40 size-[30rem] rounded-full bg-forest/10 blur-3xl"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-32 bottom-40 size-[30rem] rounded-full bg-flame/10 blur-3xl"
//       />

//       <div className="relative mx-auto grid max-w-[1680px] gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 2xl:px-16">
//         {/* Left: sticky intro */}
//         <div className="lg:sticky lg:top-32 lg:self-start">
//           <SectionHeader
//             eyebrow="Our Vision"
//             title="A Resurgent Delhi"
//             lead={visionStatement}
//             align="left"
//           />

//           {/* Numbered progress (desktop) */}
//           <div aria-hidden className="mt-12 hidden lg:block">
//             <ol className="flex gap-3">
//               {pillars.map((p, i) => (
//                 <li
//                   key={p.id}
//                   className={`flex h-12 min-w-14 items-center justify-center rounded-full border-2 px-3 font-serif text-lg font-semibold tabular-nums transition-all duration-500 ${
//                     i === active
//                       ? "scale-110 border-forest bg-forest text-gold shadow-lg"
//                       : i < active
//                         ? "border-flame bg-flame text-offwhite"
//                         : "border-forest/25 text-forest/60"
//                   }`}
//                 >
//                   {String(i + 1).padStart(2, "0")}
//                 </li>
//               ))}
//             </ol>
//             <div className="mt-5 h-1 w-full max-w-sm overflow-hidden rounded-full bg-forest/15">
//               <motion.div
//                 style={{ scaleX: reduce ? 1 : bar }}
//                 className="h-full origin-left rounded-full bg-gradient-to-r from-forest via-flame to-gold"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right: stacking cards */}
//         <ul ref={listRef} className="relative">
//           {pillars.map((pillar, i) => (
//             <PillarCard
//               key={pillar.id}
//               pillar={pillar}
//               index={i}
//               total={pillars.length}
//               reduce={reduce}
//             />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { pillars, visionStatement, type Pillar } from "@/data/home";
import SectionHeader from "@/Component/ui/SectionHeader";

const icons: Record<Pillar["id"], React.ReactNode> = {
  empowered: (
    <>
      <circle cx="20" cy="11" r="5" />
      <path d="M8 34c0-7 5-12 12-12s12 5 12 12" />
    </>
  ),
  educated: (
    <path d="M6 9h11a3 3 0 013 3v21a3 3 0 00-3-3H6zM34 9H23a3 3 0 00-3 3v21a3 3 0 013-3h11z" />
  ),
  "environmentally-conscious": (
    <path d="M8 32C8 16 18 8 33 7c0 15-8 25-23 25zM8 32l14-14" />
  ),
  "economically-sustainable": <path d="M7 33V22M16 33V15M25 33V19M34 33V7" />,
};

// Full class strings so Tailwind can detect them
const themes: Record<
  Pillar["id"],
  {
    card: string;
    title: string;
    text: string;
    label: string;
    badge: string;
    icon: string;
    dot: string;
    glow: string;
    rule: string;
  }
> = {
  empowered: {
    card: "bg-forest",
    title: "text-gold",
    text: "text-offwhite/90",
    label: "text-gold/80",
    badge: "bg-gold text-forest-dark",
    icon: "bg-forest-dark text-gold",
    dot: "bg-gold",
    glow: "bg-gold/20",
    rule: "border-white/15",
  },
  educated: {
    card: "bg-flame",
    title: "text-offwhite",
    text: "text-offwhite/95",
    label: "text-offwhite/80",
    badge: "bg-offwhite text-flame-dark",
    icon: "bg-flame-dark text-offwhite",
    dot: "bg-offwhite",
    glow: "bg-gold/30",
    rule: "border-white/20",
  },
  "environmentally-conscious": {
    card: "bg-ink",
    title: "text-gold",
    text: "text-offwhite/85",
    label: "text-gold/80",
    badge: "bg-gold text-ink",
    icon: "bg-forest text-gold",
    dot: "bg-flame",
    glow: "bg-forest/40",
    rule: "border-white/15",
  },
  "economically-sustainable": {
    card: "bg-gold",
    title: "text-forest-dark",
    text: "text-ink/85",
    label: "text-forest-dark/80",
    badge: "bg-forest-dark text-gold",
    icon: "bg-forest-dark text-gold",
    dot: "bg-flame-dark",
    glow: "bg-offwhite/50",
    rule: "border-ink/15",
  },
};

const TAB = 4.25; // rem: visible header strip of each stacked card
const CARD_H = 26; // rem: min height of a card
const N = pillars.length;

// Scroll timeline: cards 2..N enter one after another, then a short hold
const FIRST_START = 0.05;
const LAST_END = 0.85;
const STEP = (LAST_END - FIRST_START) / (N - 1);
const LENGTH = STEP * 0.9;
const startOf = (i: number) => FIRST_START + (i - 1) * STEP;

const subscribe = (cb: () => void) => {
  const m = window.matchMedia("(min-width: 1024px)");
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
const getDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

function PillarCard({
  pillar,
  index,
  progress,
  pinned,
}: {
  pillar: Pillar;
  index: number;
  progress: MotionValue<number>;
  pinned: boolean;
}) {
  const t = themes[pillar.id];
  const num = String(index + 1).padStart(2, "0");

  // Every card (except the first) slides up from below the screen
  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [startOf(index), startOf(index) + LENGTH],
    index === 0 ? ["0vh", "0vh"] : ["105vh", "0vh"],
  );

  const bullets: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
  };
  const bullet: Variants = {
    hidden: { opacity: 0, x: -28 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.li
      style={pinned ? { y, top: `${index * TAB}rem` } : undefined}
      initial={pinned ? false : { opacity: 0, y: 50 }}
      whileInView={pinned ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-[2rem] shadow-xl ${t.card} ${
        pinned ? "absolute inset-x-0" : "relative"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 top-10 size-72 rounded-full blur-3xl ${t.glow}`}
      />

      {/* Header strip: number + title (stays visible when stacked) */}
      <div
        className={`relative flex items-center gap-4 border-b px-6 lg:px-12 ${t.rule}`}
        style={{ height: `${TAB}rem` }}
      >
        <span
          className={`flex h-10 min-w-12 items-center justify-center rounded-full px-3 font-serif text-lg font-semibold tabular-nums ${t.badge}`}
        >
          {num}
        </span>
        <h3
          className={`font-serif text-xl font-semibold leading-tight sm:text-2xl xl:text-3xl ${t.title}`}
        >
          {pillar.title}
        </h3>
      </div>

      {/* Body */}
      <div
        className="relative flex flex-col gap-6 px-6 pb-10 pt-8 sm:flex-row sm:items-start lg:px-12"
        style={{ minHeight: `${CARD_H - TAB}rem` }}
      >
        <span
          className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${t.icon}`}
        >
          <svg
            viewBox="0 0 40 40"
            className="size-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {icons[pillar.id]}
          </svg>
        </span>

        <div>
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] ${t.label}`}
          >
            We seek an {pillar.title} Delhi where
          </p>
          <motion.ul
            variants={bullets}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-5 max-w-2xl space-y-4"
          >
            {pillar.points.map((p) => (
              <motion.li
                key={p}
                variants={bullet}
                className={`flex gap-4 text-lg leading-relaxed xl:text-xl ${t.text}`}
              >
                <span
                  aria-hidden
                  className={`mt-2.5 size-2.5 shrink-0 rounded-full ${t.dot}`}
                />
                {p}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.li>
  );
}

export default function Vision() {
  const reduce = useReducedMotion() ?? false;
  const desktop = useSyncExternalStore(subscribe, getDesktop, () => false);
  const pinned = desktop && !reduce;

  const wrapRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.0005,
  });
  const barScale = useTransform(smooth, [FIRST_START, LAST_END], [0, 1]);

  useMotionValueEvent(smooth, "change", (v) => {
    let a = 0;
    for (let i = 1; i < N; i++) {
      if (v >= startOf(i) + LENGTH * 0.5) a = i;
    }
    setActive(a);
  });

  return (
    <section
      id="vision"
      ref={wrapRef}
      style={pinned ? { height: `${N * 100}vh` } : undefined}
      className="relative z-20 -mt-8 overflow-x-clip rounded-t-[2.5rem] bg-stone"
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen items-center overflow-hidden pt-24"
            : "py-24 lg:py-32"
        }
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-40 size-[30rem] rounded-full bg-forest/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-20 size-[30rem] rounded-full bg-flame/10 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-[1680px] gap-14 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-10 2xl:px-16">
          {/* Left: intro + numbered progress */}
          <div>
            <SectionHeader
              eyebrow="Our Vision"
              title="A Resurgent Delhi"
              lead={visionStatement}
              align="left"
            />

            <div aria-hidden className="mt-12 hidden lg:block">
              <ol className="flex gap-3">
                {pillars.map((p, i) => (
                  <li
                    key={p.id}
                    className={`flex h-12 min-w-14 items-center justify-center rounded-full border-2 px-3 font-serif text-lg font-semibold tabular-nums transition-all duration-500 ${
                      i === active
                        ? "scale-110 border-forest bg-forest text-gold shadow-lg"
                        : i < active
                          ? "border-flame bg-flame text-offwhite"
                          : "border-forest/25 text-forest/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </li>
                ))}
              </ol>
              <div className="mt-5 h-1 w-full max-w-sm overflow-hidden rounded-full bg-forest/15">
                <motion.div
                  style={{ scaleX: reduce ? 1 : barScale }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-forest via-flame to-gold"
                />
              </div>
            </div>
          </div>

          {/* Right: card stack */}
                    <ul
            className={`w-full max-w-[36rem] lg:justify-self-end ${
              pinned ? "relative" : "space-y-6"
            }`}
            style={
              pinned
                ? { height: `${(N - 1) * TAB + CARD_H + 1}rem` }
                : undefined
            }
          >
                        {pillars.map((pillar, i) => (
              <PillarCard
                key={`${pillar.id}-${pinned ? "pinned" : "flow"}`}
                pillar={pillar}
                index={i}
                progress={smooth}
                pinned={pinned}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}