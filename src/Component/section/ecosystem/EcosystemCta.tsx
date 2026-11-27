import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { ecosystemData } from "@/data/our-ecosystem";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
const { ecosystemCta } = ecosystemData;

// Minimal line art: left = tree, domed hall, minaret | right = gateway, dome, tree
const LEFT = [
  "M0 110 H300",
  "M40 110 V70 M40 72 C10 72 10 30 40 24 C70 30 70 72 40 72",
  "M90 110 V84 H210 V110 M115 84 C115 54 185 54 185 84 M150 58 V44",
  "M250 110 V50 M243 50 H257 M250 50 V36",
];
const RIGHT = [
  "M0 110 H300",
  "M30 110 V54 H150 V110 M68 110 V82 C68 56 112 56 112 82 V110 M22 54 H158 M30 46 H150",
  "M185 110 V92 H235 V110 M191 92 C191 70 229 70 229 92",
  "M268 110 V84 M268 86 C244 86 244 44 268 40 C292 44 292 86 268 86",
];

function Sketch({ paths, base }: { paths: string[]; base: number }) {
  return (
    <svg
      viewBox="0 0 300 120"
      aria-hidden="true"
      className="hidden h-auto w-56 shrink-0 text-[color:var(--color-warm-sand)]/40 lg:block xl:w-72"
    >
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={delay(base + i * 150)}
          className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
        />
      ))}
    </svg>
  );
}

export default function EcosystemCta() {
  const { heading, intro, primary, secondary } = ecosystemCta;

  return (
    <section
      aria-labelledby="ecosystem-cta-heading"
      className="bg-[color:var(--color-forest,#14503f)] pt-12 pb-16 md:pt-16 md:pb-20"
    >
      <div className="site-container">
        {/* Sketches are flex siblings of the text, never over it */}
        <div className="flex items-end justify-between gap-8">
          {/* <Sketch paths={LEFT} base={300} /> */}

          <div className="flex-1 text-center">
            {/* Heading + accent line, centred */}
            <div className="group/heading mx-auto flex w-fit max-w-full flex-col items-center">
              <h2
                id="ecosystem-cta-heading"
                style={delay(0)}
                className="animate-fade-up font-serif text-3xl font-bold leading-tight text-[color:var(--color-off-white)] motion-reduce:animate-none md:text-5xl"
              >
                {heading}
              </h2>
              <span
                style={delay(200)}
                className="animate-grow-x mt-4 block h-1 w-full origin-center rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none motion-reduce:transition-none"
              />
            </div>

            {intro ? (
              <p
                style={delay(250)}
                className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-off-white)]/85 motion-reduce:animate-none md:text-lg"
              >
                {intro}
              </p>
            ) : null}

            {/* Buttons: outer = entrance, inner = hover */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div
                style={delay(400)}
                className="animate-fade-up motion-reduce:animate-none"
              >
                <Link
                  href={primary.href}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[color:var(--color-off-white)] px-7 py-3 font-semibold transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[color:var(--color-warm-sand)]/50 transition-transform duration-700 group-hover:translate-x-[300%] motion-reduce:transition-none"
                  />
                  <span className="relative text-[color:var(--color-charcoal)]">
                    {primary.label}
                  </span>
                  <ArrowRight
                    className="relative h-4 w-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden
                  />
                </Link>
              </div>

              <div
                style={delay(500)}
                className="animate-fade-up motion-reduce:animate-none"
              >
                <Link
                  href={secondary.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-warm-sand)]/70 px-7 py-3 font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--color-off-white)]/10 motion-reduce:transition-none"
                >
                  <span className="text-[color:var(--color-off-white)]">
                    {secondary.label}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* <Sketch paths={RIGHT} base={450} /> */}
        </div>
      </div>
    </section>
  );
}