import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { contactData } from "@/data/contact";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function LeafArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      fill="none"
      className="h-full w-full"
    >
      <g className="origin-top-right animate-sway motion-reduce:animate-none">
        <path
          d="M400 20C340 30 300 70 280 130C340 120 390 80 400 20Z"
          fill="var(--color-warm-sand)"
          opacity="0.35"
        />
        <path
          d="M330 40C290 80 270 110 262 150C300 130 322 90 330 40Z"
          fill="var(--color-off-white)"
          opacity="0.18"
        />
        <path
          d="M400 150C350 150 310 180 290 230C340 230 390 200 400 150Z"
          fill="var(--color-warm-sand)"
          opacity="0.3"
        />
      </g>
      <path
        pathLength={1}
        d="M400 0C330 40 280 110 250 200"
        stroke="var(--color-warm-sand)"
        strokeWidth="3"
        strokeLinecap="round"
        className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
      />
      <path
        pathLength={1}
        d="M230 300C240 240 270 190 330 150"
        stroke="var(--color-warm-sand)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
        className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
        style={delay(400)}
      />
    </svg>
  );
}

export default function WorkWithUs() {
  const { workWithUs } = contactData;

  return (
    <section
      aria-labelledby="work-with-us-heading"
      className="bg-[color:var(--color-off-white)]"
    >
      <div className="site-container pb-10 md:pb-12">
        {/* Outer = entrance */}
        <div
          style={delay(0)}
          className="animate-fade-up motion-reduce:animate-none"
        >
          <div className="flex overflow-hidden rounded-3xl bg-[color:var(--color-forest,#14503f)]">
            <div className="flex-1 p-8 md:p-12">
              <div className="group/heading w-fit">
                <h2
                  id="work-with-us-heading"
                  className="font-serif text-3xl font-bold text-[color:var(--color-off-white)] md:text-4xl"
                >
                  {workWithUs.heading}
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-3 h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-all duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:transition-none"
                />
              </div>

              <p className="mt-5 max-w-xl text-lg text-[color:var(--color-off-white)]">
                {workWithUs.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={workWithUs.primary.href}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[color:var(--color-warm-sand)] px-6 py-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-off-white)] motion-reduce:transition-none"
                >
                  <span className="font-semibold text-[color:var(--color-charcoal)]">
                    {workWithUs.primary.label}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>

                {workWithUs.secondary.href && (
                  <Link
                    href={workWithUs.secondary.href}
                    className="group inline-flex items-center gap-2 rounded-xl border-2 border-[color:var(--color-off-white)] px-6 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--color-off-white)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-warm-sand)] motion-reduce:transition-none"
                  >
                    <span className="font-semibold text-[color:var(--color-off-white)]">
                      {workWithUs.secondary.label}
                    </span>
                    <Heart
                      aria-hidden="true"
                      className="h-4 w-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
                    />
                  </Link>
                )}
              </div>
            </div>

            {/* Decorative art: in flow, hidden below lg so it never crowds text */}
            <div className="hidden w-2/5 shrink-0 lg:block">
              <LeafArt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}