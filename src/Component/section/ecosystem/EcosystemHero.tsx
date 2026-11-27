import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { ecosystemData } from "@/data/our-ecosystem";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function EcosystemHero() {
  const { eyebrow, headingStart, headingAccent, intro, cta, image, imageAlt } =
    ecosystemData.ecosystemHero;

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-forest,#14503f)]">
      {/* Background photo + readability overlay (not behind-text decoration; text stays in flow) */}
      <div className="absolute inset-0">
        <div className="animate-fade-in relative h-full w-full motion-reduce:animate-none">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-forest,#14503f)]/95 via-[color:var(--color-forest,#14503f)]/80 to-[color:var(--color-forest,#14503f)]/60 md:bg-gradient-to-r md:from-[color:var(--color-forest,#14503f)]/95 md:via-[color:var(--color-forest,#14503f)]/70 md:to-transparent" />
      </div>

        <div className="relative z-10 flex min-h-[22rem] items-center py-12 pb-24 md:min-h-[30rem] md:py-16 md:pb-32">
        <div className="site-container w-full">
          <div className="max-w-2xl">
          {/* Eyebrow: its own block-level row */}
          <p
            style={delay(0)}
            className="animate-fade-in flex items-center gap-3 motion-reduce:animate-none"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-off-white)]">
              {eyebrow}
            </span>
            <span className="h-px w-12 bg-[color:var(--color-warm-sand)] md:w-20" />
          </p>

          {/* Heading + accent line */}
          <div className="group/heading mt-5 w-fit max-w-full">
            <h1
              style={delay(100)}
              className="animate-fade-up font-serif text-4xl font-bold leading-[1.1] text-[color:var(--color-off-white)] motion-reduce:animate-none md:text-6xl"
            >
              {headingStart}
              <span className="mt-1 block italic text-[color:var(--color-warm-sand)]">
                {headingAccent}
              </span>
            </h1>
            <span
              style={delay(300)}
              className="animate-grow-x mt-5 block h-1 w-full origin-left rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none motion-reduce:transition-none"
            />
          </div>

          <p
            style={delay(300)}
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-off-white)]/90 motion-reduce:animate-none md:text-lg"
          >
            {intro}
          </p>

          {/* Button: outer = entrance, inner = hover */}
          <div
            style={delay(500)}
            className="animate-fade-up mt-8 w-fit motion-reduce:animate-none"
          >
            <Link
              href={cta.href}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[color:var(--color-off-white)] px-6 py-3 font-semibold transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[color:var(--color-warm-sand)]/40 transition-transform duration-700 group-hover:translate-x-[300%] motion-reduce:transition-none"
              />
              <span className="relative text-[color:var(--color-charcoal)]">
                {cta.label}
              </span>
              <ArrowRight
                className="relative h-4 w-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Edge fill = next section background (off-white) */}
      <TornEdge
        seed={22}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-off-white)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}