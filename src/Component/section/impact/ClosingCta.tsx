import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function ClosingCta() {
  const { heading, text, primary, secondary } = impactData.closingCta;

  return (
    <section
      id="get-involved-cta"
      aria-labelledby="closing-cta-heading"
      className="relative isolate overflow-hidden bg-[color:var(--color-warm-sand)] text-[color:var(--color-charcoal)]"
    >
      {/* Sun: simple CSS shape, behind the text, centred and low */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 animate-float rounded-full bg-[color:var(--color-off-white)]/50 md:size-96 motion-reduce:animate-none"
      />

      <div className="site-container pt-12 pb-15 text-center md:pt-16">
        {/* Heading on top, paragraph underneath */}
        <div className="group/heading mx-auto w-fit">
          <h2
            id="closing-cta-heading"
            style={delay(0)}
            className="animate-fade-up font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] sm:text-4xl lg:text-5xl motion-reduce:animate-none"
          >
            {heading}
          </h2>
          <span
            aria-hidden="true"
            style={delay(250)}
            className="mx-auto mt-3 block h-0.5 w-16 origin-center animate-grow-x bg-[color:var(--color-forest,#14503f)]/40 transition-[width] duration-300 group-hover/heading:w-full motion-reduce:animate-none"
          />
        </div>

        <p
          style={delay(150)}
          className="mx-auto mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-[color:var(--color-charcoal)]/85 md:text-lg motion-reduce:animate-none"
        >
          {text}
        </p>

        {/* Buttons. Outer = entrance, inner Link = hover. Colour is on inner spans */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div
            style={delay(300)}
            className="animate-fade-up motion-reduce:animate-none"
          >
            <Link
              href={primary.href}
              className="group/primary relative inline-flex items-center gap-2 overflow-hidden rounded-[var(--radius-md)] bg-[color:var(--color-forest,#14503f)] px-6 py-3 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/primary:translate-x-full motion-reduce:hidden"
              />
              <span className="relative text-sm font-semibold text-[color:var(--color-off-white)]">
                {primary.label}
              </span>
              <Heart
                aria-hidden="true"
                className="relative size-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover/primary:scale-125 motion-reduce:transition-none"
              />
            </Link>
          </div>

          <div
            style={delay(400)}
            className="animate-fade-up motion-reduce:animate-none"
          >
            <Link
              href={secondary.href}
              className="group/secondary relative inline-flex items-center gap-2 overflow-hidden rounded-[var(--radius-md)] border-2 border-[color:var(--color-forest,#14503f)] bg-[color:var(--color-off-white)]/40 px-6 py-3 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover/secondary:translate-x-full motion-reduce:hidden"
              />
              <span className="relative text-sm font-semibold text-[color:var(--color-forest,#14503f)]">
                {secondary.label}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="relative size-4 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/secondary:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        {/* Skyline sketch: in flow below the buttons, so it never overlaps text.
            Bottom padding equals the torn-edge height so the tear doesn't cover it. */}
        {/* <div className="pb-8 pt-10 md:pb-12 lg:pb-16">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 120"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
            className="mx-auto h-16 w-full text-[color:var(--color-forest,#14503f)]/45 md:h-24"
          >
            <path
              d="M0 118 H120 V92 Q150 60 180 92 V118 M200 118 V70 L206 56 L212 70 V118 M240 118 V84 Q280 40 320 84 V118 M340 118 V76 H346 V58 H352 V76 H358 V118 M400 118 V96 H520 V118 M530 118 V50 H550 V118 M600 118 V60 H640 V40 H680 V60 H720 V118 M630 118 V76 Q660 52 690 76 V118 M760 118 V96 H880 V118 M900 118 V84 Q940 40 980 84 V118 M1000 118 V70 L1006 56 L1012 70 V118 M1040 118 V92 Q1070 60 1100 92 V118 H1200"
              pathLength={1}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={delay(500)}
              className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
            />
          </svg>
        </div> */}
      </div>

      {/* Torn edge: fill = the next section's background (forest green, the footer).
          In flow, overlapping this section by its own height. */}
      <TornEdge
        seed={53}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-forest,#14503f)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}