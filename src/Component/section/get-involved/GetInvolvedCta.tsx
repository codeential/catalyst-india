import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import type { CSSProperties } from "react";
import { getInvolvedData } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/* Minimal skyline: domed hall (left), trees, gateway (right). Each path draws itself in. */
const skylinePaths = [
  "M0 130 H1200",
  // domed hall
  "M60 130 V90 H260 V130",
  "M110 90 A50 50 0 0 1 210 90",
  "M160 40 V26",
  "M70 90 V52 M250 90 V52",
  "M145 130 V108 A15 15 0 0 1 175 108 V130",
  // trees
  "M336 130 V114 M312 90 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0",
  "M410 130 V118 M390 98 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0",
  "M850 130 V114 M826 90 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0",
  "M930 130 V118 M910 98 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0",
  // gateway
  "M985 130 V70 H1115 V130",
  "M975 70 V60 H1125 V70",
  "M1000 60 V50 H1100 V60",
  "M1030 130 V95 A20 20 0 0 1 1070 95 V130",
];

export default function GetInvolvedCta() {
  const { getInvolvedCta } = getInvolvedData;
  const { headingLead, headingAccent, description, primaryCta, secondaryCta } = getInvolvedCta;

  return (
    <section
      aria-labelledby="get-involved-cta-heading"
      className="bg-[color:var(--color-forest,#14503f)] pt-10 md:pt-14 pb-10"
    >
      <div className="site-container text-center">
        <div
          className="group/heading mx-auto w-fit animate-fade-up motion-reduce:animate-none"
          style={delay(0)}
        >
          <h2
            id="get-involved-cta-heading"
            className="max-w-3xl text-balance font-serif text-3xl font-bold leading-tight text-[color:var(--color-off-white)] md:text-5xl"
          >
            {headingLead}{" "}
            <em className="italic text-[color:var(--color-warm-sand)]">{headingAccent}</em>
          </h2>
          {/* centred: stays centred as it widens */}
          <span
            aria-hidden="true"
            className="relative left-1/2 mt-5 block h-0.5 w-full -translate-x-1/2 rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)]"
          />
        </div>

        {description && (
          <p
            className="mx-auto mt-5 max-w-xl animate-fade-up text-base text-[color:var(--color-off-white)]/85 motion-reduce:animate-none md:text-lg"
            style={delay(150)}
          >
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* outer = entrance, inner = hover */}
          <div className="animate-fade-up motion-reduce:animate-none" style={delay(250)}>
            <Link
              href={primaryCta.href}
              className="group/btn inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-warm-sand)] px-7 py-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-off-white)]"
            >
              <span className="text-sm font-semibold text-[color:var(--color-charcoal)]">
                {primaryCta.label}
              </span>
              <Heart
                aria-hidden="true"
                className="h-4 w-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover/btn:scale-125"
              />
            </Link>
          </div>

          <div className="animate-fade-up motion-reduce:animate-none" style={delay(350)}>
            <Link
              href={secondaryCta.href}
              className="group/btn inline-flex items-center gap-2 rounded-lg border border-[color:var(--color-warm-sand)]/70 px-7 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--color-off-white)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-off-white)]"
            >
              <span className="text-sm font-semibold text-[color:var(--color-off-white)]">
                {secondaryCta.label}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Skyline row: in flow below the text, hidden on mobile
      <div className="site-container mt-10 hidden sm:block md:mt-14">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 140"
          className="h-auto w-full text-[color:var(--color-warm-sand)]/45"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {skylinePaths.map((d, i) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
              style={delay(500 + i * 120)}
            />
          ))}
        </svg>
      </div> */}
      {/* On mobile the sketch is hidden, so keep a little breathing room */}
      <div className="h-10 sm:hidden" aria-hidden="true" />
    </section>
  );
}