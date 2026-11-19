// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   useTransform,
//   type MotionValue,
// } from "motion/react";
// import { bridgesText } from "@/data/home";
// import SectionHeader from "@/Component/ui/SectionHeader";

// /* ---------- Scroll-highlighted word ---------- */
// function Word({
//   word,
//   range,
//   progress,
//   reduce,
//   accent,
// }: {
//   word: string;
//   range: [number, number];
//   progress: MotionValue<number>;
//   reduce: boolean;
//   accent: boolean;
// }) {
//   const opacity = useTransform(progress, range, [0.18, 1]);
//   return (
//     <motion.span
//       style={{ opacity: reduce ? 1 : opacity }}
//       className={`mr-[0.28em] inline-block ${accent ? "text-gold" : ""}`}
//     >
//       {word}
//     </motion.span>
//   );
// }

// /* ---------- Bridge geometry (all numbers in SVG units) ---------- */
// const DECK_Y = 220;
// const X0 = 300;
// const X1 = 900;
// const ARCH = `M${X0} ${DECK_Y} Q600 20 ${X1} ${DECK_Y}`;
// const hangerTs = [0.12, 0.22, 0.32, 0.42, 0.5, 0.58, 0.68, 0.78, 0.88];
// const archY = (t: number) => DECK_Y - 400 * t * (1 - t);
// const archX = (t: number) => X0 + (X1 - X0) * t;

// const WAVE = `M0 0 q75 -14 150 0${" t150 0".repeat(11)}`;

// function Hanger({
//   t,
//   i,
//   progress,
// }: {
//   t: number;
//   i: number;
//   progress: MotionValue<number>;
// }) {
//   const start = 0.45 + i * 0.04;
//   const pathLength = useTransform(progress, [start, start + 0.12], [0, 1]);
//   return (
//     <motion.line
//       x1={archX(t)}
//       y1={archY(t)}
//       x2={archX(t)}
//       y2={DECK_Y}
//       stroke="var(--color-offwhite)"
//       strokeOpacity={0.6}
//       strokeWidth={2}
//       strokeLinecap="round"
//       style={{ pathLength }}
//     />
//   );
// }

// export default function BuildingBridges() {
//   const reduce = useReducedMotion() ?? false;

//   const sectionRef = useRef<HTMLElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const sceneRef = useRef<HTMLDivElement>(null);

//   /* Parallax glows */
//   const { scrollYProgress: secProg } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });
//   const glowA = useTransform(secProg, [0, 1], [-80, 80]);
//   const glowB = useTransform(secProg, [0, 1], [80, -80]);

//   /* Word highlight progress */
//   const { scrollYProgress: textProg } = useScroll({
//     target: textRef,
//     offset: ["start 0.85", "end 0.5"],
//   });

//   /* Bridge drawing progress */
//   const { scrollYProgress: sceneRaw } = useScroll({
//     target: sceneRef,
//     offset: ["start 0.85", "center 0.4"],
//   });
//   const p = useSpring(sceneRaw, { stiffness: 110, damping: 28, restDelta: 0.001 });

//   const archLen = useTransform(p, [0.05, 0.55], [0, 1]);
//   const deckLen = useTransform(p, [0, 0.4], [0, 1]);
//   const dotT = useTransform(p, [0.8, 1], [0, 1]);
//   const dotX = useTransform(dotT, (t) => archX(t));
//   const dotY = useTransform(dotT, (t) => archY(t));
//   const dotOpacity = useTransform(p, [0.78, 0.84], [0, 1]);

//   const words = bridgesText.flatMap((s, si) =>
//     s.split(" ").map((w) => ({ w, si })),
//   );
//   const total = words.length;

//   const stat = reduce ? 1 : undefined;

//   return (
//     <section
//       id="building-bridges"
//       ref={sectionRef}
//       className="relative z-30 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-forest to-forest-dark py-24 text-offwhite lg:py-36"
//     >
//       {/* Parallax glows */}
//       <motion.div
//         aria-hidden
//         style={{ y: reduce ? 0 : glowA }}
//         className="pointer-events-none absolute -right-32 top-10 size-[32rem] rounded-full bg-flame/25 blur-3xl"
//       />
//       <motion.div
//         aria-hidden
//         style={{ y: reduce ? 0 : glowB }}
//         className="pointer-events-none absolute -left-40 bottom-10 size-[32rem] rounded-full bg-gold/15 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-[1680px] px-5 lg:px-10 2xl:px-16">
//         <SectionHeader
//           eyebrow="Our Work Style"
//           title="Building Bridges"
//           tone="dark"
//         />

//         {/* Scroll-highlighted statement */}
//         <div ref={textRef} className="mx-auto mt-14 max-w-5xl lg:mt-20">
//           {bridgesText.map((sentence, si) => {
//             const sWords = words
//               .map((x, gi) => ({ ...x, gi }))
//               .filter((x) => x.si === si);
//             return (
//               <p
//                 key={si}
//                 className={`font-serif leading-snug ${
//                   si === 0
//                     ? "text-3xl md:text-5xl xl:text-6xl"
//                     : "mt-8 text-xl text-offwhite md:text-3xl xl:text-4xl"
//                 }`}
//               >
//                 {sWords.map(({ w, gi }) => {
//                   const a = gi / total;
//                   const b = Math.min(1, (gi + 1.5) / total);
//                   const accent = /^(relationship\.|bridges)$/.test(w);
//                   return (
//                     <Word
//                       key={gi}
//                       word={w}
//                       range={[a, b]}
//                       progress={textProg}
//                       reduce={reduce}
//                       accent={accent}
//                     />
//                   );
//                 })}
//               </p>
//             );
//           })}
//         </div>

//         {/* Bridge scene */}
//         <div ref={sceneRef} className="mx-auto mt-20 max-w-6xl lg:mt-28">
//           <div className="relative">
//             <svg
//               viewBox="0 0 1200 340"
//               className="h-auto w-full"
//               role="img"
//               aria-label="A bridge connecting the islands of the rich and middle class with those on the margins"
//             >
//               {/* Water */}
//               <rect
//                 x="0"
//                 y="250"
//                 width="1200"
//                 height="90"
//                 fill="var(--color-ink)"
//                 fillOpacity={0.35}
//               />
//               {[0, 1, 2].map((row) => (
//                 <motion.g
//                   key={row}
//                   initial={{ x: -300 }}
//                   animate={reduce ? { x: -300 } : { x: [-300, 0] }}
//                   transition={{
//                     duration: 6 + row * 2,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 >
//                   <path
//                     d={WAVE}
//                     transform={`translate(0 ${268 + row * 26})`}
//                     fill="none"
//                     stroke="var(--color-stone)"
//                     strokeOpacity={0.35 - row * 0.08}
//                     strokeWidth={2}
//                   />
//                 </motion.g>
//               ))}

//               {/* Islands */}
//               <g>
//                 <path
//                   d="M0 220 H322 Q346 220 354 242 L376 340 H0 Z"
//                   fill="var(--color-ink)"
//                 />
//                 <path
//                   d="M0 220 H322 Q346 220 354 242 L358 258 H0 Z"
//                   fill="var(--color-stone)"
//                 />
//                 <path
//                   d="M1200 220 H878 Q854 220 846 242 L824 340 H1200 Z"
//                   fill="var(--color-ink)"
//                 />
//                 <path
//                   d="M1200 220 H878 Q854 220 846 242 L842 258 H1200 Z"
//                   fill="var(--color-flame)"
//                 />
//               </g>

//               {/* Bridge deck */}
//               <motion.path
//                 d={`M${X0} ${DECK_Y} H${X1}`}
//                 stroke="var(--color-gold)"
//                 strokeWidth={8}
//                 strokeLinecap="round"
//                 fill="none"
//                 style={{ pathLength: reduce ? 1 : deckLen }}
//               />

//               {/* Arch */}
//               <motion.path
//                 d={ARCH}
//                 stroke="var(--color-gold)"
//                 strokeWidth={6}
//                 strokeLinecap="round"
//                 fill="none"
//                 style={{ pathLength: reduce ? 1 : archLen }}
//               />

//               {/* Hangers */}
//               {hangerTs.map((t, i) =>
//                 reduce ? (
//                   <line
//                     key={t}
//                     x1={archX(t)}
//                     y1={archY(t)}
//                     x2={archX(t)}
//                     y2={DECK_Y}
//                     stroke="var(--color-offwhite)"
//                     strokeOpacity={0.6}
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                   />
//                 ) : (
//                   <Hanger key={t} t={t} i={i} progress={p} />
//                 )
//               )}

//               {/* Crossing dot */}
//               {!reduce && (
//                 <motion.circle
//                   r={11}
//                   fill="var(--color-offwhite)"
//                   stroke="var(--color-flame)"
//                   strokeWidth={4}
//                   cx={dotX}
//                   cy={dotY}
//                   style={{ opacity: dotOpacity }}
//                 />
//               )}
//             </svg>

//             {/* Island labels */}
//             <div className="mt-6 grid gap-4 text-center sm:grid-cols-3 sm:items-center">
//               <p className="rounded-2xl border border-stone/30 bg-white/5 px-5 py-4 font-serif text-lg font-semibold text-offwhite xl:text-2xl">
//                 The rich / middle class
//               </p>
//               <p
//                 className="rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink sm:order-none"
//                 style={{ opacity: stat }}
//               >
//                 Non-judgmental relationships
//               </p>
//               <p className="rounded-2xl border border-flame/60 bg-flame/15 px-5 py-4 font-serif text-lg font-semibold text-offwhite xl:text-2xl">
//                 Those on the margins
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { bridgesText } from "@/data/home";
import SectionHeader from "@/Component/ui/SectionHeader";

/* ---------- Scroll-highlighted word ---------- */
function Word({
  word,
  range,
  progress,
  reduce,
  accent,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  reduce: boolean;
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const underline = useTransform(progress, range, [0, 1]);
  return (
    <motion.span
      style={{ opacity: reduce ? 1 : opacity }}
      className={`relative mr-[0.28em] inline-block ${accent ? "text-gold" : ""}`}
    >
      {word}
      {accent && (
        <motion.span
          aria-hidden
          style={{ scaleX: reduce ? 1 : underline }}
          className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-flame"
        />
      )}
    </motion.span>
  );
}

/* ---------- One numbered beat of the statement ---------- */
const labels = ["Relationship", "Where they are", "Bridges"];

function Beat({
  index,
  sentence,
  startIdx,
  total,
  progress,
  reduce,
}: {
  index: number;
  sentence: string;
  startIdx: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const sWords = sentence.split(" ");
  const first = startIdx / total;
  const litOn = useTransform(progress, [first, first + 0.06], [0, 1]);
  const litOff = useTransform(progress, [first, first + 0.06], [1, 0]);
  const isLast = index === 2;

  return (
    <div className="relative grid grid-cols-[3.5rem_1fr] gap-5 md:gap-8">
      {/* Number badge */}
      <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-gold/40 bg-forest-dark font-serif text-lg font-semibold tabular-nums">
        <motion.span
          aria-hidden
          style={{ opacity: reduce ? 1 : litOn }}
          className="absolute inset-0 rounded-full bg-gold shadow-[0_0_30px_rgba(248,200,8,0.45)]"
        />
        <motion.span
          style={{ opacity: reduce ? 0 : litOff }}
          className="absolute text-gold"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <motion.span
          style={{ opacity: reduce ? 1 : litOn }}
          className="absolute text-ink"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>

      {/* Text */}
      <div
        className={
          isLast
            ? "rounded-3xl border border-white/10 border-l-4 border-l-flame bg-white/5 p-6 backdrop-blur-sm md:p-8"
            : ""
        }
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          {labels[index]}
        </p>
        <p
          className={`font-serif leading-snug ${
            index === 0
              ? "text-3xl md:text-5xl xl:text-6xl"
              : "text-2xl md:text-3xl xl:text-4xl"
          }`}
        >
          {sWords.map((w, wi) => {
            const gi = startIdx + wi;
            const a = gi / total;
            const b = Math.min(1, (gi + 1.5) / total);
            const accent = /^(relationship\.|bridges|rich\/middle|margins\.)$/.test(w);
            return (
              <Word
                key={gi}
                word={w}
                range={[a, b]}
                progress={progress}
                reduce={reduce}
                accent={accent}
              />
            );
          })}
        </p>
      </div>
    </div>
  );
}

/* ---------- Bridge geometry (all numbers in SVG units) ---------- */
const DECK_Y = 220;
const X0 = 300;
const X1 = 900;
const ARCH = `M${X0} ${DECK_Y} Q600 20 ${X1} ${DECK_Y}`;
const hangerTs = [0.12, 0.22, 0.32, 0.42, 0.5, 0.58, 0.68, 0.78, 0.88];
const archY = (t: number) => DECK_Y - 400 * t * (1 - t);
const archX = (t: number) => X0 + (X1 - X0) * t;

const WAVE = `M0 0 q75 -14 150 0${" t150 0".repeat(11)}`;

function Hanger({
  t,
  i,
  progress,
}: {
  t: number;
  i: number;
  progress: MotionValue<number>;
}) {
  const start = 0.45 + i * 0.04;
  const pathLength = useTransform(progress, [start, start + 0.12], [0, 1]);
  return (
    <motion.line
      x1={archX(t)}
      y1={archY(t)}
      x2={archX(t)}
      y2={DECK_Y}
      stroke="var(--color-offwhite)"
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
      style={{ pathLength }}
    />
  );
}

export default function BuildingBridges() {
  const reduce = useReducedMotion() ?? false;

  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  /* Parallax: glows + giant outlined word */
  const { scrollYProgress: secProg } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowA = useTransform(secProg, [0, 1], [-80, 80]);
  const glowB = useTransform(secProg, [0, 1], [80, -80]);
  const ghostX = useTransform(secProg, [0, 1], ["8%", "-18%"]);

  /* Statement progress (words + line + badges) */
  const { scrollYProgress: textRaw } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const textProg = useSpring(textRaw, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* Bridge drawing progress */
  const { scrollYProgress: sceneRaw } = useScroll({
    target: sceneRef,
    offset: ["start 0.85", "center 0.4"],
  });
  const p = useSpring(sceneRaw, { stiffness: 110, damping: 28, restDelta: 0.001 });

  const archLen = useTransform(p, [0.05, 0.55], [0, 1]);
  const deckLen = useTransform(p, [0, 0.4], [0, 1]);
  const dotT = useTransform(p, [0.8, 1], [0, 1]);
  const dotX = useTransform(dotT, (t) => archX(t));
  const dotY = useTransform(dotT, (t) => archY(t));
  const dotOpacity = useTransform(p, [0.78, 0.84], [0, 1]);

  const counts = bridgesText.map((s) => s.split(" ").length);
  const total = counts.reduce((a, b) => a + b, 0);
  const starts = counts.map((_, i) =>
    counts.slice(0, i).reduce((a, b) => a + b, 0),
  );

  return (
    <section
      id="building-bridges"
      ref={sectionRef}
      className="relative z-30 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-forest to-forest-dark py-24 text-offwhite lg:py-36"
    >
      {/* Parallax glows */}
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : glowA }}
        className="pointer-events-none absolute -right-32 top-10 size-[32rem] rounded-full bg-flame/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : glowB }}
        className="pointer-events-none absolute -left-40 bottom-10 size-[32rem] rounded-full bg-gold/15 blur-3xl"
      />

      {/* Giant outlined ghost word */}
      <motion.p
        aria-hidden
        style={{
          x: reduce ? 0 : ghostX,
          WebkitTextStroke: "2px rgba(250,246,239,0.09)",
        }}
        className="pointer-events-none absolute left-0 top-24 select-none whitespace-nowrap font-serif text-[22vw] font-semibold leading-none text-transparent lg:top-16"
      >
        BRIDGES
      </motion.p>

      <div className="relative mx-auto max-w-[1680px] px-5 lg:px-10 2xl:px-16">
        <SectionHeader
          eyebrow="Our Work Style"
          title="Building Bridges"
          tone="dark"
        />

        {/* Numbered statement */}
        <div ref={textRef} className="relative mx-auto mt-16 max-w-5xl lg:mt-24">
          {/* Vertical progress line */}
          <div
            aria-hidden
            className="absolute bottom-7 left-7 top-7 w-0.5 -translate-x-1/2 rounded-full bg-white/15"
          >
            <motion.div
              style={{ scaleY: reduce ? 1 : textProg }}
              className="h-full origin-top rounded-full bg-gradient-to-b from-gold via-flame to-gold"
            />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {bridgesText.map((sentence, i) => (
              <Beat
                key={i}
                index={i}
                sentence={sentence}
                startIdx={starts[i]}
                total={total}
                progress={textProg}
                reduce={reduce}
              />
            ))}
          </div>
        </div>

        {/* Bridge scene */}
        <div ref={sceneRef} className="mx-auto mt-24 max-w-6xl lg:mt-32">
          <div className="relative">
            <svg
              viewBox="0 0 1200 340"
              className="h-auto w-full"
              role="img"
              aria-label="A bridge connecting the islands of the rich and middle class with those on the margins"
            >
              {/* Water */}
              <rect
                x="0"
                y="250"
                width="1200"
                height="90"
                fill="var(--color-ink)"
                fillOpacity={0.35}
              />
              {[0, 1, 2].map((row) => (
                <motion.g
                  key={row}
                  initial={{ x: -300 }}
                  animate={reduce ? { x: -300 } : { x: [-300, 0] }}
                  transition={{
                    duration: 6 + row * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d={WAVE}
                    transform={`translate(0 ${268 + row * 26})`}
                    fill="none"
                    stroke="var(--color-stone)"
                    strokeOpacity={0.35 - row * 0.08}
                    strokeWidth={2}
                  />
                </motion.g>
              ))}

              {/* Islands */}
              <g>
                <path
                  d="M0 220 H322 Q346 220 354 242 L376 340 H0 Z"
                  fill="var(--color-ink)"
                />
                <path
                  d="M0 220 H322 Q346 220 354 242 L358 258 H0 Z"
                  fill="var(--color-stone)"
                />
                <path
                  d="M1200 220 H878 Q854 220 846 242 L824 340 H1200 Z"
                  fill="var(--color-ink)"
                />
                <path
                  d="M1200 220 H878 Q854 220 846 242 L842 258 H1200 Z"
                  fill="var(--color-flame)"
                />
              </g>

              {/* Bridge deck */}
              <motion.path
                d={`M${X0} ${DECK_Y} H${X1}`}
                stroke="var(--color-gold)"
                strokeWidth={8}
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: reduce ? 1 : deckLen }}
              />

              {/* Arch */}
              <motion.path
                d={ARCH}
                stroke="var(--color-gold)"
                strokeWidth={6}
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: reduce ? 1 : archLen }}
              />

              {/* Hangers */}
              {hangerTs.map((t, i) =>
                reduce ? (
                  <line
                    key={t}
                    x1={archX(t)}
                    y1={archY(t)}
                    x2={archX(t)}
                    y2={DECK_Y}
                    stroke="var(--color-offwhite)"
                    strokeOpacity={0.6}
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                ) : (
                  <Hanger key={t} t={t} i={i} progress={p} />
                ),
              )}

              {/* Crossing dot */}
              {!reduce && (
                <motion.circle
                  r={11}
                  fill="var(--color-offwhite)"
                  stroke="var(--color-flame)"
                  strokeWidth={4}
                  cx={dotX}
                  cy={dotY}
                  style={{ opacity: dotOpacity }}
                />
              )}
            </svg>

            {/* Island labels */}
            <div className="mt-6 grid gap-4 text-center sm:grid-cols-3 sm:items-center">
              <p className="rounded-2xl border border-stone/30 bg-white/5 px-5 py-4 font-serif text-lg font-semibold text-offwhite xl:text-2xl">
                The rich / middle class
              </p>
              <p className="rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink">
                Non-judgmental relationships
              </p>
              <p className="rounded-2xl border border-flame/60 bg-flame/15 px-5 py-4 font-serif text-lg font-semibold text-offwhite xl:text-2xl">
                Those on the margins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}