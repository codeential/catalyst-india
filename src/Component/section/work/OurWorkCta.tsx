import Link from "next/link";
import { Heart } from "lucide-react";
import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { workData } from "@/data/ourWork";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function OurWorkCta() {
  const { title, primaryCta, secondaryCta } = workData.cta;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-warm-sand)]">
      {/* Content: explicit side padding so margins never depend on another class */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="max-w-xl lg:ml-[12%]">
          <div
            className="group animate-fade-up motion-reduce:animate-none"
            style={delay(0)}
          >
            <h2 className="font-serif text-3xl font-bold italic text-[var(--color-forest,#14503f)] min-[400px]:text-4xl sm:text-5xl">
              {title}
            </h2>
            {/* Brush underline: draws in, widens on hover */}
            <div className="mt-1 w-40 transition-[width] duration-500 ease-out group-hover:w-64 sm:w-48 sm:group-hover:w-72">
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
                stroke="var(--color-off-white)"
                strokeWidth={4}
                strokeLinecap="round"
                className="block h-3 w-full"
              >
                <path
                  d="M3 8 C60 2 120 10 180 5 C225 2 265 7 297 4"
                  pathLength={1}
                  className="[stroke-dasharray:1_1] [vector-effect:non-scaling-stroke] animate-draw motion-reduce:animate-none"
                  style={delay(400)}
                />
              </svg>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 sm:mt-8">
            {/* Outer = entrance, inner link = hover */}
            <div
              className="animate-fade-up motion-reduce:animate-none"
              style={delay(300)}
            >
              <Link
                href={primaryCta.href}
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-[var(--color-forest,#14503f)] px-8 py-3 shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="inline-flex items-center gap-2 text-base font-semibold text-[var(--color-off-white)]">
                  {primaryCta.label}
                  <Heart
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:fill-current motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    aria-hidden="true"
                  />
                </span>
                {/* Light sweep */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-[var(--color-off-white)]/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%] motion-reduce:hidden"
                />
              </Link>
            </div>

            <div
              className="animate-fade-up motion-reduce:animate-none"
              style={delay(450)}
            >
              <Link
                href={secondaryCta.href}
                className="group inline-flex items-center rounded-full border-2 border-[var(--color-forest,#14503f)] bg-[var(--color-off-white)]/40 px-8 py-[10px] transition duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--color-forest,#14503f)] hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="text-base font-semibold text-[var(--color-forest,#14503f)] transition-colors duration-300 group-hover:text-[var(--color-off-white)]">
                  {secondaryCta.label}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Torn edge at the top, flipped so the paper hangs down from the section above */}
      <TornEdge
        seed={57}
        className="absolute inset-x-0 top-0 z-10 h-10 scale-y-[-1] text-[var(--color-off-white)] drop-shadow-md sm:h-14 lg:h-20"
      />
    </section>
  );
}