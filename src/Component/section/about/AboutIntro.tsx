import type { CSSProperties } from "react";
import { aboutData } from "@/data/about";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/** India Gate line sketch: each path draws itself in. */
const SKETCH: { d: string; ms: number }[] = [
  { d: "M5 150 H235", ms: 200 },
  { d: "M60 150 V142 H180 V150", ms: 400 },
  { d: "M70 142 V134 H170 V142", ms: 550 },
  { d: "M78 134 V52 M162 134 V52", ms: 700 },
  { d: "M100 134 V80 M140 134 V80 M100 80 A20 20 0 0 1 140 80", ms: 900 },
  { d: "M72 52 H168 M76 44 H164 V52", ms: 1150 },
  { d: "M82 44 V38 H158 V44 M90 38 V32 H150 V38", ms: 1350 },
  {
    d: "M30 150 V122 M16 124 Q12 108 28 108 Q34 96 46 106 Q60 106 54 122 Q50 130 30 126 Z",
    ms: 1550,
  },
  {
    d: "M205 150 V124 M190 126 Q186 110 202 110 Q208 98 220 108 Q234 108 228 124 Q224 132 205 128 Z",
    ms: 1750,
  },
];

function Bird({ ms, className }: { ms: number; className: string }) {
  return (
    <span
      aria-hidden="true"
      style={delay(ms)}
      className={`absolute animate-fly text-[var(--color-forest,#14503f)]/60 motion-reduce:animate-none ${className}`}
    >
      <svg
        viewBox="0 0 16 8"
        className="h-2 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      >
        <path d="M1 6 Q4 1 8 5 Q12 1 15 6" />
      </svg>
    </span>
  );
}

export default function AboutIntro() {
  const { headingLine1, headingLine2, lead, paragraphs, belief, highlights } =
    aboutData.aboutIntro;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)] pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* 1. Heading on top: single line from sm up, two lines on mobile */}
        <div className="group w-fit">
          <h2
            style={delay(100)}
            className="animate-fade-up font-serif text-4xl font-bold leading-[1.05] text-[var(--color-forest,#14503f)] motion-reduce:animate-none sm:text-5xl"
          >
            {headingLine1}{" "}
            <span className="block sm:inline">{headingLine2}</span>
          </h2>
          {/* Accent line widens on heading hover */}
          <span
            aria-hidden="true"
            style={delay(400)}
            className="mt-4 block h-1 w-24 origin-left animate-grow-x rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover:w-44 motion-reduce:animate-none"
          />
        </div>

        {/* 2. Paragraphs underneath, with the sketch beside them on lg+ */}
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end lg:gap-14 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="relative max-w-3xl pl-5 sm:pl-8">
            <span
              aria-hidden="true"
              style={delay(300)}
              className="absolute inset-y-0 left-0 w-0.5 origin-top animate-grow-y bg-[var(--color-warm-sand)] motion-reduce:animate-none"
            />

            <p
              style={delay(300)}
              className="animate-fade-up text-lg font-medium leading-relaxed text-[var(--color-charcoal)] motion-reduce:animate-none sm:text-xl"
            >
              {lead}
            </p>

            {paragraphs.map((text, i) => (
              <p
                key={i}
                style={delay(450 + i * 150)}
                className="mt-4 animate-fade-up leading-relaxed text-[var(--color-charcoal)]/80 motion-reduce:animate-none"
              >
                {text}
              </p>
            ))}

            <p
              style={delay(750)}
              className="mt-5 animate-fade-up font-serif text-lg italic leading-snug text-[var(--color-forest,#14503f)] motion-reduce:animate-none"
            >
              {belief}
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {highlights.map((label, i) => (
                <li key={label}>
                  {/* Outer span = entrance, inner span = hover lift */}
                  <span
                    style={delay(900 + i * 120)}
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

          {/* India Gate sketch: below text on mobile, beside it on lg+ */}
          <div
            aria-hidden="true"
            className="relative ml-auto w-full max-w-[14rem] overflow-hidden sm:max-w-[16rem] lg:max-w-none"
          >
            <svg
              viewBox="0 0 240 160"
              className="h-auto w-full text-[var(--color-forest,#14503f)]/70"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {SKETCH.map(({ d, ms }) => (
                <path
                  key={d}
                  d={d}
                  pathLength={1}
                  style={delay(ms)}
                  className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
                />
              ))}
            </svg>
            <Bird ms={1800} className="left-6 top-3" />
            <Bird ms={3200} className="left-2 top-8" />
          </div>
        </div>
      </div>
    </section>
  );
}