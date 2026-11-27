import Image from "next/image";
import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { workData } from "@/data/ourWork";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const FOREST = "var(--color-forest,#14503f)";

export default function OurWorkHero() {
  const { eyebrow, headingLine1, headingLine2, description, image } =
    workData.ourWorkHero;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-forest,#14503f)] text-[var(--color-off-white)] lg:min-h-[30rem]">
      {/* Text */}
      <div className="site-container relative z-10 pt-12 pb-8 sm:pt-16 lg:pt-24 lg:pb-36">
        <div className="max-w-xl lg:max-w-[55%]">
          {/* Eyebrow + accent line (line widens on hover) */}
          <p
            className="group inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-off-white)] animate-fade-up motion-reduce:animate-none"
            style={delay(0)}
          >
            {eyebrow}
            <span
              aria-hidden="true"
              className="block h-0.5 w-12 origin-left bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-24 animate-grow-x motion-reduce:animate-none"
              style={delay(300)}
            />
          </p>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl xl:text-6xl">
            <span
              className="block animate-fade-up motion-reduce:animate-none"
              style={delay(150)}
            >
              {headingLine1}
            </span>
            <span
              className="block italic text-[var(--color-warm-sand)] animate-fade-up motion-reduce:animate-none"
              style={delay(300)}
            >
              {headingLine2}
            </span>
          </h1>

          <p
            className="mt-6 max-w-sm text-base leading-relaxed text-[var(--color-off-white)]/90 sm:text-lg animate-fade-up motion-reduce:animate-none"
            style={delay(450)}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Photo: stacked under the text on mobile, right-hand panel on desktop */}
      <div
        className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%] animate-fade-in motion-reduce:animate-none"
        style={delay(200)}
      >
        <Image
          src={image.src}
          alt={image.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[center_30%]"
        />
        {/* Fade into the section green so text stays readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-forest,#14503f),transparent_60%)] lg:bg-[linear-gradient(to_right,var(--color-forest,#14503f),transparent_50%)]"
        />
      </div>

      

      {/* Torn edge into the next section */}
      <TornEdge
        seed={11}
        className="absolute inset-x-0 bottom-0 z-20 h-10 text-[var(--color-off-white)] sm:h-14 lg:h-20"
      />
    </section>
  );
}