import { Fragment } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, Binoculars, Lightbulb, Users, type LucideIcon } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { workData } from "@/data/ourWork";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<string, LucideIcon> = {
  binoculars: Binoculars,
  lightbulb: Lightbulb,
  users: Users,
};

// Skyline line art: kept to a few simple paths, drawn in by animate-draw.
const skylineLeft = [
  "M0 119 H320",
  "M28 119 V95",
  "M28 95 C8 95 6 70 22 66 C22 50 46 50 48 66 C62 70 56 95 28 95 Z",
  "M70 119 V58 H130 V119",
  "M64 58 H136",
  "M88 119 V86 A12 12 0 0 1 112 86 V119",
  "M170 119 V96 H214 V119",
  "M174 96 C174 72 210 72 210 96",
  "M192 74 V64",
  "M240 119 V100 H270 V119",
  "M243 100 C243 86 267 86 267 100",
];

const skylineRight = [
  "M0 119 H320",
  "M60 119 V92 H120 V119",
  "M66 92 C66 62 114 62 114 92",
  "M90 64 V52",
  "M150 119 V80 H168 V119",
  "M150 80 L159 66 L168 80",
  "M250 119 V92",
  "M250 92 C225 92 222 62 240 57 C240 38 270 38 273 57 C292 62 284 92 250 92 Z",
];

function Skyline({ paths, className }: { paths: string[]; className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 120"
      fill="none"
      stroke="var(--color-warm-sand)"
      strokeOpacity={0.45}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`block ${className}`}
    >
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          className="[stroke-dasharray:1_1] animate-draw motion-reduce:animate-none"
          style={delay(500 + i * 120)}
        />
      ))}
    </svg>
  );
}

export default function OurWorkHowWeWork() {
  const { heading, steps } = workData.howWeWork;

  return (
    <section className="relative bg-[var(--color-forest,#14503f)] pt-12 pb-10 text-[var(--color-off-white)] sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-20">
      <div className="site-container">
        <div className="grid items-center gap-8 lg:grid-cols-[auto_auto_1fr] lg:gap-10">
          {/* Heading + accent line (line widens on hover) */}
          <div
            className="group animate-fade-up motion-reduce:animate-none"
            style={delay(0)}
          >
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:max-w-[8rem]">
              {heading}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-0.5 w-12 origin-left bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-24 animate-grow-x motion-reduce:animate-none"
              style={delay(300)}
            />
          </div>

          {/* Vertical divider (desktop only) */}
          <span
            aria-hidden="true"
            className="hidden w-px self-stretch origin-top bg-[var(--color-warm-sand)]/60 lg:block animate-grow-y motion-reduce:animate-none"
            style={delay(200)}
          />

          {/* Steps fill the remaining width */}
          <ol className="grid items-start gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-3 lg:gap-5">
            {steps.map((step, i) => {
              const Icon = icons[step.icon] ?? Users;
              return (
                <Fragment key={step.id}>
                  {/* Outer = entrance, inner = hover */}
                  <li
                    className="animate-fade-up motion-reduce:animate-none"
                    style={delay(250 + i * 200)}
                  >
                    <div className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-warm-sand)] text-[var(--color-forest,#14503f)] shadow-md transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-[4.5rem] sm:w-[4.5rem]">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold sm:text-xl">
                        {step.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-0.5 w-6 bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-14"
                      />
                      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-[var(--color-off-white)]/80 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </li>

                  {i < steps.length - 1 && (
                    // Outer rotates for mobile (arrow points down); inner animates
                    <li
                      aria-hidden="true"
                      className="flex justify-center rotate-90 text-[var(--color-warm-sand)] md:mt-5 md:rotate-0"
                    >
                      <span
                        className="block origin-left animate-grow-x motion-reduce:animate-none"
                        style={delay(450 + i * 200)}
                      >
                        <ArrowRight className="h-8 w-8 lg:w-10" strokeWidth={1.25} />
                      </span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </div>

      </div>

      {/* Torn edge into "A legacy of transformation" */}
      <TornEdge
        seed={45}
        className="absolute inset-x-0 bottom-0 h-10 text-[var(--color-off-white)] sm:h-14 lg:h-20"
      />
    </section>
  );
}