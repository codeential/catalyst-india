// import Image from "next/image";
// import type { CSSProperties } from "react";
// import TornEdge from "@/Component/ui/TornEdge";
// import { aboutData } from "@/data/about";

// const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

// export default function AboutAffiliation() {
//   const {
//     title,
//     text,
//     practicesLabel,
//     practices,
//     quote,
//     founderNote,
//     image,
//     imageAlt,
//   } = aboutData.aboutAffiliation;

//   return (
//     <section className="relative isolate overflow-hidden bg-[var(--color-off-white)]">
//       <div className="flex flex-col lg:min-h-[26rem] lg:flex-row">
//         {/* Photo: torn top and bottom, angled right edge from lg up */}
//         <div className="group relative h-60 overflow-hidden sm:h-72 lg:h-auto lg:w-[40%] lg:shrink-0 lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
//           <div className="absolute inset-0 animate-fade-in [--delay:0ms] motion-reduce:animate-none">
//             <Image
//               src={image}
//               alt={imageAlt}
//               fill
//               sizes="(min-width: 1024px) 40vw, 100vw"
//               unoptimized={image.endsWith(".svg")}
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//           </div>
//           {/* Top edge: fill = AboutFounding background */}
//           <TornEdge
//             seed={41}
//             className="absolute inset-x-0 -top-px z-10 h-8 rotate-180 text-[var(--color-off-white)] sm:h-12"
//           />
//           {/* Bottom edge: fill = AboutGovernance background */}
//           <TornEdge
//             seed={53}
//             className="absolute inset-x-0 -bottom-px z-10 h-8 text-[var(--color-off-white)] sm:h-12"
//           />
//         </div>

//         {/* Content */}
//         <div className="relative flex-1 px-5 py-12 sm:px-8 sm:py-14 lg:py-20 lg:pl-6 lg:pr-12">
//           <div className="max-w-2xl lg:pr-20 xl:pr-32">
//             {/* Heading on top */}
//             <div className="group/heading w-fit">
//               <h2
//                 style={delay(100)}
//                 className="animate-fade-up font-serif text-3xl font-bold leading-[1.1] text-[var(--color-forest,#14503f)] motion-reduce:animate-none sm:text-4xl lg:text-5xl"
//               >
//                 {title}
//               </h2>
//               <span
//                 aria-hidden="true"
//                 style={delay(400)}
//                 className="mt-4 block h-1 w-24 origin-left animate-grow-x rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-44 motion-reduce:animate-none"
//               />
//             </div>

//             {/* Paragraph with divider */}
//             <div className="relative mt-7 pl-5 sm:pl-8">
//               <span
//                 aria-hidden="true"
//                 style={delay(300)}
//                 className="absolute inset-y-0 left-0 w-0.5 origin-top animate-grow-y bg-[var(--color-warm-sand)] motion-reduce:animate-none"
//               />
//               <p
//                 style={delay(300)}
//                 className="animate-fade-up text-lg leading-relaxed text-[var(--color-charcoal)]/85 motion-reduce:animate-none"
//               >
//                 {text}
//               </p>

//               <p
//                 style={delay(450)}
//                 className="mt-6 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-charcoal)]/70 motion-reduce:animate-none"
//               >
//                 {practicesLabel}
//               </p>
//               <ul className="mt-3 flex flex-wrap gap-3">
//                 {practices.map((label, i) => (
//                   <li key={label}>
//                     {/* Outer = entrance, inner = hover lift */}
//                     <span
//                       style={delay(550 + i * 120)}
//                       className="inline-block animate-pop motion-reduce:animate-none"
//                     >
//                       <span className="inline-block rounded-full border border-[var(--color-warm-sand)] bg-[var(--color-warm-sand)]/40 px-4 py-1.5 text-sm font-medium text-[var(--color-forest,#14503f)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-warm-sand)]/70">
//                         {label}
//                       </span>
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <blockquote
//                 style={delay(900)}
//                 className="mt-7 animate-fade-up motion-reduce:animate-none"
//               >
//                 <p className="font-serif text-lg italic leading-snug text-[var(--color-forest,#14503f)]">
//                   “{quote.text}”
//                 </p>
//                 <footer className="mt-2 text-sm text-[var(--color-charcoal)]/75">
//                   <span className="font-semibold">{quote.name}</span>,{" "}
//                   {quote.role}
//                 </footer>
//               </blockquote>

//               <p
//                 style={delay(1050)}
//                 className="mt-5 animate-fade-up text-sm leading-relaxed text-[var(--color-charcoal)]/70 motion-reduce:animate-none"
//               >
//                 {founderNote}
//               </p>
//             </div>
//           </div>

//           {/* CSS-only globe: md+ only, sits in the reserved right padding */}
//           <span
//             aria-hidden="true"
//             className="pointer-events-none absolute bottom-8 right-4 hidden size-28 items-center justify-center rounded-full border border-[var(--color-forest,#14503f)]/15 md:flex lg:size-36 xl:right-10 xl:size-44"
//           >
//             <span className="size-3/4 animate-spin-slow rounded-full border border-dashed border-[var(--color-forest,#14503f)]/20 motion-reduce:animate-none" />
//             <span className="absolute size-1/2 rounded-full border border-[var(--color-forest,#14503f)]/15" />
//             <span className="absolute h-px w-full bg-[var(--color-forest,#14503f)]/15" />
//             <span className="absolute h-full w-px bg-[var(--color-forest,#14503f)]/15" />
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { aboutData } from "@/data/about";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function AboutAffiliation() {
  const {
    title,
    text,
    practicesLabel,
    practices,
    quote,
    founderNote,
    image,
    imageAlt,
  } = aboutData.aboutAffiliation;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-off-white)]">
      <div className="flex flex-col lg:min-h-[26rem] lg:flex-row">
        {/* Photo: torn top and bottom, angled right edge from lg up */}
        <div className="group relative h-60 overflow-hidden sm:h-72 lg:h-auto lg:w-[38%] lg:shrink-0 lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
          <div className="absolute inset-0 animate-fade-in [--delay:0ms] motion-reduce:animate-none">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              unoptimized={image.endsWith(".svg")}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Top edge: fill = AboutFounding background */}
          <TornEdge
            seed={41}
            className="absolute inset-x-0 -top-px z-10 h-8 rotate-180 text-[var(--color-off-white)] sm:h-12"
          />
          {/* Bottom edge: fill = AboutGovernance background */}
          <TornEdge
            seed={53}
            className="absolute inset-x-0 -bottom-px z-10 h-8 text-[var(--color-off-white)] sm:h-12"
          />
        </div>

        {/* Content: wider, two columns from xl */}
        <div className="flex flex-1 items-center px-5 py-12 sm:px-8 sm:py-14 lg:py-20 lg:pl-8 lg:pr-12">
          <div className="grid w-full max-w-6xl gap-8 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-center xl:gap-12 2xl:grid-cols-[minmax(0,1fr)_24rem]">
            {/* Left: heading, paragraph, chips */}
            <div>
              <div className="group/heading w-fit">
                <h2
                  style={delay(100)}
                  className="animate-fade-up font-serif text-3xl font-bold leading-[1.1] text-[var(--color-forest,#14503f)] motion-reduce:animate-none sm:text-4xl lg:text-5xl"
                >
                  {title}
                </h2>
                <span
                  aria-hidden="true"
                  style={delay(400)}
                  className="mt-4 block h-1 w-24 origin-left animate-grow-x rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-44 motion-reduce:animate-none"
                />
              </div>

              <div className="relative mt-7 pl-5 sm:pl-8">
                <span
                  aria-hidden="true"
                  style={delay(300)}
                  className="absolute inset-y-0 left-0 w-0.5 origin-top animate-grow-y bg-[var(--color-warm-sand)] motion-reduce:animate-none"
                />
                <p
                  style={delay(300)}
                  className="animate-fade-up text-lg leading-relaxed text-[var(--color-charcoal)]/85 motion-reduce:animate-none"
                >
                  {text}
                </p>

                <p
                  style={delay(450)}
                  className="mt-6 animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-charcoal)]/70 motion-reduce:animate-none"
                >
                  {practicesLabel}
                </p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {practices.map((label, i) => (
                    <li key={label}>
                      {/* Outer = entrance, inner = hover lift */}
                      <span
                        style={delay(550 + i * 120)}
                        className="inline-block animate-pop motion-reduce:animate-none"
                      >
                        <span className="inline-block rounded-full border border-[var(--color-warm-sand)] bg-[var(--color-warm-sand)]/40 px-4 py-1.5 text-sm font-medium text-[var(--color-forest,#14503f)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-warm-sand)]/70">
                          {label}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right (below the paragraph under xl): globe, quote card, founder note */}
            <div className="pl-5 sm:pl-8 xl:pl-0">
              {/* CSS-only globe, in flow, xl+ only */}
              <span
                aria-hidden="true"
                className="relative mx-auto mb-6 hidden size-32 items-center justify-center rounded-full border border-[var(--color-forest,#14503f)]/15 xl:flex 2xl:size-40"
              >
                <span className="size-3/4 animate-spin-slow rounded-full border border-dashed border-[var(--color-forest,#14503f)]/25 motion-reduce:animate-none" />
                <span className="absolute size-1/2 rounded-full border border-[var(--color-forest,#14503f)]/15" />
                <span className="absolute h-px w-full bg-[var(--color-forest,#14503f)]/15" />
                <span className="absolute h-full w-px bg-[var(--color-forest,#14503f)]/15" />
              </span>

              {/* Outer = entrance, inner = hover lift */}
              <div
                style={delay(900)}
                className="animate-fade-up motion-reduce:animate-none"
              >
                <blockquote className="rounded-md border-l-4 border-[var(--color-warm-sand)] bg-[var(--color-warm-sand)]/30 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="font-serif text-lg italic leading-snug text-[var(--color-forest,#14503f)]">
                    “{quote.text}”
                  </p>
                  <footer className="mt-3 text-sm text-[var(--color-charcoal)]/75">
                    <span className="font-semibold">{quote.name}</span>,{" "}
                    {quote.role}
                  </footer>
                </blockquote>
              </div>

              <p
                style={delay(1050)}
                className="mt-5 animate-fade-up text-sm leading-relaxed text-[var(--color-charcoal)]/70 motion-reduce:animate-none"
              >
                {founderNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}