//     "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   type Variants,
// } from "motion/react";
// import { approach, type ApproachId } from "@/data/home";
// import SectionHeader from "@/Component/ui/SectionHeader";

// const icons: Record<ApproachId, React.ReactNode> = {
//   collaborate: (
//     <>
//       <circle cx="14" cy="20" r="9" />
//       <circle cx="26" cy="20" r="9" />
//     </>
//   ),
//   create: <path d="M20 4l4 12 12 4-12 4-4 12-4-12L4 20l12-4z" />,
//   connect: (
//     <>
//       <circle cx="20" cy="9" r="4" />
//       <circle cx="8" cy="30" r="4" />
//       <circle cx="32" cy="30" r="4" />
//       <path d="M18 12.5L10 26.5M22 12.5l8 14M12 30h16" />
//     </>
//   ),
//   celebrate: (
//     <>
//       <circle cx="20" cy="20" r="4" />
//       <path d="M20 4v6M20 30v6M4 20h6M30 20h6M8.7 8.7l4.3 4.3M27 27l4.3 4.3M31.3 8.7L27 13M13 27l-4.3 4.3" />
//     </>
//   ),
// };

// export default function Approach() {
//   const reduce = useReducedMotion();
//   const ref = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 0.6", "center 0.4"],
//   });
//   const progress = useSpring(scrollYProgress, {
//     stiffness: 110,
//     damping: 28,
//     restDelta: 0.001,
//   });

//   const list: Variants = {
//     hidden: {},
//     show: { transition: { staggerChildren: reduce ? 0 : 0.15 } },
//   };
//   const card: Variants = {
//     hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.96 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section
//       id="approach"
//       ref={ref}
//       className="relative z-10 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-offwhite py-24 lg:py-32"
//     >
//       {/* Decorative blobs */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-gold/15 blur-3xl"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-40 bottom-10 size-[28rem] rounded-full bg-flame/10 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-[1680px] px-5 lg:px-10 2xl:px-16">
//         <SectionHeader
//           eyebrow="Our Approach"
//           title="Collaborate. Create. Connect. Celebrate."
//         />

//         <div className="relative mt-16 lg:mt-24">
//           {/* Connector line that fills as you scroll (desktop) */}
//           <div
//             aria-hidden
//             className="absolute top-[60px] hidden h-0.5 bg-stone lg:block"
//             style={{
//               left: "calc((100% - 3 * 1.5rem) / 8)",
//               right: "calc((100% - 3 * 1.5rem) / 8)",
//             }}
//           >
//             <motion.div
//               style={{ scaleX: reduce ? 1 : progress }}
//               className="h-full origin-left bg-gradient-to-r from-flame to-gold"
//             />
//           </div>

//           <motion.ul
//             variants={list}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {approach.map((item, i) => (
//               <motion.li
//                 key={item.id}
//                 variants={card}
//                 className="group relative overflow-hidden rounded-3xl border border-stone bg-white p-8 transition-shadow duration-500 hover:shadow-2xl"
//               >
//                 {/* Hover fill sweep */}
//                 <span
//                   aria-hidden
//                   className="absolute inset-0 translate-y-full bg-forest transition-transform duration-500 ease-out group-hover:translate-y-0"
//                 />

//                 {/* Big faint number */}
//                 <span
//                   aria-hidden
//                   className="absolute -right-2 -top-4 select-none font-serif text-[7rem] font-semibold leading-none text-stone transition-colors duration-500 group-hover:text-white/10"
//                 >
//                   {String(i + 1).padStart(2, "0")}
//                 </span>

//                 <div className="relative">
//                   <span className="flex size-14 items-center justify-center rounded-full bg-forest text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
//                     <svg
//                       viewBox="0 0 40 40"
//                       className="size-7 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       aria-hidden
//                     >
//                       {icons[item.id]}
//                     </svg>
//                   </span>

//                   <h3 className="mt-8 font-serif text-3xl font-semibold text-forest transition-colors duration-500 group-hover:text-gold xl:text-4xl">
//                     {item.title}
//                   </h3>
//                   <p className="mt-4 text-lg leading-relaxed text-ink/75 transition-colors duration-500 group-hover:text-offwhite/90 xl:text-xl">
//                     {item.text}
//                   </p>
//                 </div>
//               </motion.li>
//             ))}
//           </motion.ul>
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
  type Variants,
} from "motion/react";
import { approach, type ApproachId } from "@/data/home";
import SectionHeader from "@/Component/ui/SectionHeader";

const icons: Record<ApproachId, React.ReactNode> = {
  collaborate: (
    <>
      <circle cx="14" cy="20" r="9" />
      <circle cx="26" cy="20" r="9" />
    </>
  ),
  create: <path d="M20 4l4 12 12 4-12 4-4 12-4-12L4 20l12-4z" />,
  connect: (
    <>
      <circle cx="20" cy="9" r="4" />
      <circle cx="8" cy="30" r="4" />
      <circle cx="32" cy="30" r="4" />
      <path d="M18 12.5L10 26.5M22 12.5l8 14M12 30h16" />
    </>
  ),
  celebrate: (
    <>
      <circle cx="20" cy="20" r="4" />
      <path d="M20 4v6M20 30v6M4 20h6M30 20h6M8.7 8.7l4.3 4.3M27 27l4.3 4.3M31.3 8.7L27 13M13 27l-4.3 4.3" />
    </>
  ),
};

// Full class strings so Tailwind can detect them
const themes: Record<
  ApproachId,
  { bar: string; fill: string; icon: string; title: string; ring: string }
> = {
  collaborate: {
    bar: "bg-forest",
    fill: "bg-forest-dark",
    icon: "bg-forest text-gold group-hover:bg-gold group-hover:text-forest-dark",
    title: "text-forest group-hover:text-gold",
    ring: "hover:border-forest",
  },
  create: {
    bar: "bg-flame",
    fill: "bg-flame-dark",
    icon: "bg-flame text-offwhite group-hover:bg-offwhite group-hover:text-flame-dark",
    title: "text-flame-dark group-hover:text-offwhite",
    ring: "hover:border-flame",
  },
  connect: {
    bar: "bg-ink",
    fill: "bg-ink",
    icon: "bg-ink text-gold group-hover:bg-gold group-hover:text-ink",
    title: "text-ink group-hover:text-gold",
    ring: "hover:border-ink",
  },
  celebrate: {
    bar: "bg-gold",
    fill: "bg-forest",
    icon: "bg-gold text-ink group-hover:bg-forest-dark group-hover:text-gold",
    title: "text-forest-dark group-hover:text-gold",
    ring: "hover:border-gold",
  },
};

export default function Approach() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "center 0.4"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.15 } },
  };
  const card: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="approach"
      ref={ref}
      className="relative z-10 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-offwhite py-24 lg:py-32"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-10 size-[28rem] rounded-full bg-flame/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1680px] px-5 lg:px-10 2xl:px-16">
        <SectionHeader
          eyebrow="Our Approach"
          title="Collaborate. Create. Connect. Celebrate."
        />

        {/* Short accent divider */}
        <div
          aria-hidden
          className="mx-auto mt-8 flex items-center justify-center gap-2"
        >
          <span className="h-1 w-10 rounded-full bg-forest" />
          <span className="h-1 w-6 rounded-full bg-flame" />
          <span className="h-1 w-3 rounded-full bg-gold" />
        </div>

        <div className="relative mt-16 lg:mt-20">
          {/* Connector line that fills as you scroll (desktop) */}
          <div
            aria-hidden
            className="absolute top-[68px] hidden h-1 rounded-full bg-stone lg:block"
            style={{
              left: "calc((100% - 3 * 1.5rem) / 8)",
              right: "calc((100% - 3 * 1.5rem) / 8)",
            }}
          >
            <motion.div
              style={{ scaleX: reduce ? 1 : progress }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-forest via-flame to-gold"
            />
          </div>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {approach.map((item, i) => {
              const t = themes[item.id];
              return (
                <motion.li
                  key={item.id}
                  variants={card}
                  className={`group relative overflow-hidden rounded-3xl border-2 border-stone bg-white p-8 pt-10 transition-[box-shadow,border-color] duration-500 hover:shadow-2xl ${t.ring}`}
                >
                  {/* Colored top bar */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 z-10 h-2 ${t.bar}`}
                  />

                  {/* Hover fill sweep */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 ${t.fill}`}
                  />

                  {/* Big faint number */}
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-2 select-none font-serif text-[7rem] font-semibold leading-none text-stone transition-colors duration-500 group-hover:text-offwhite/10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span
                      className={`flex size-14 items-center justify-center rounded-full transition-colors duration-500 ${t.icon}`}
                    >
                      <svg
                        viewBox="0 0 40 40"
                        className="size-7 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {icons[item.id]}
                      </svg>
                    </span>

                    <h3
                      className={`mt-8 font-serif text-3xl font-semibold transition-colors duration-500 xl:text-4xl ${t.title}`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink/75 transition-colors duration-500 group-hover:text-offwhite/90 xl:text-xl">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}