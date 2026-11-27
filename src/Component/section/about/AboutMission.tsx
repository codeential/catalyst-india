import Image from "next/image";
import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { aboutData } from "@/data/about";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const LEAVES = [
  "M100 160 Q90 100 60 20",
  "M92 120 Q70 118 62 100 Q84 100 92 120 Z",
  "M88 100 Q108 92 112 74 Q92 78 88 100 Z",
  "M80 78 Q58 76 50 58 Q72 58 80 78 Z",
  "M72 56 Q90 48 94 32 Q76 36 72 56 Z",
  "M62 30 Q50 20 52 6 Q66 14 62 30 Z",
];

export default function AboutMission() {
  const { eyebrow, textBefore, accent, support, image, imageAlt } = aboutData.aboutMission;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-forest,#14503f)]">
      <div className="flex flex-col lg:min-h-[24rem] lg:flex-row">
        {/* Photo: uneven right edge from lg up */}
        <div className="group relative h-56 overflow-hidden sm:h-72 lg:h-auto lg:w-[44%] lg:shrink-0 lg:[clip-path:polygon(0_0,100%_0,90%_16%,96%_38%,86%_60%,94%_80%,88%_100%,0_100%)]">
          {/* Outer = entrance, inner image = hover zoom */}
          <div className="absolute inset-0 animate-fade-in [--delay:0ms] motion-reduce:animate-none">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              unoptimized={image.endsWith(".svg")}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Statement panel */}
        <div className="relative flex flex-1 items-center px-5 py-16 sm:px-8 sm:py-20 lg:py-24 lg:pl-8 lg:pr-12">
          <div className="max-w-2xl lg:pr-24">
            <div className="flex items-center gap-4">
              <p
                style={delay(100)}
                className="animate-fade-up text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-off-white)] motion-reduce:animate-none sm:text-sm"
              >
                {eyebrow}
              </p>
              <span
                aria-hidden="true"
                style={delay(300)}
                className="h-px w-12 origin-left animate-grow-x bg-[var(--color-warm-sand)] motion-reduce:animate-none sm:w-20"
              />
            </div>

            <h2
              style={delay(250)}
              className="mt-5 animate-fade-up font-serif text-3xl leading-tight text-[var(--color-off-white)] motion-reduce:animate-none sm:text-4xl lg:text-5xl"
            >
              {textBefore}{" "}
              <em className="italic text-[var(--color-warm-sand)]">{accent}</em>
            </h2>

            <p
              style={delay(500)}
              className="mt-5 max-w-xl animate-fade-up leading-relaxed text-[var(--color-off-white)]/75 motion-reduce:animate-none"
            >
              {support}
            </p>
          </div>

          {/* Leaf sprig: md+ only, sits in the reserved right padding */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 right-4 hidden w-20 origin-bottom animate-sway text-[var(--color-warm-sand)]/35 motion-reduce:animate-none md:block lg:w-28"
          >
            <svg
              viewBox="0 0 120 160"
              className="h-auto w-full"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {LEAVES.map((d, i) => (
                <path
                  key={d}
                  d={d}
                  pathLength={1}
                  style={delay(600 + i * 250)}
                  className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
                />
              ))}
            </svg>
          </span>
        </div>
      </div>

      {/* Top edge: fill = AboutIntro background */}
      <TornEdge
        seed={23}
        className="absolute inset-x-0 -top-px z-10 h-10 rotate-180 text-[var(--color-off-white)] sm:h-14 lg:h-16"
      />
      {/* Bottom edge: fill = Founding Story background */}
      <TornEdge
        seed={31}
        className="absolute inset-x-0 -bottom-px z-10 h-10 text-[var(--color-off-white)] sm:h-14 lg:h-16"
      />
    </section>
  );
}