import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function ImpactHero() {
  const { eyebrow, headlineStart, headlineAccent, text, cta, image, imageAlt } =
    impactData.impactHero;

  return (
    <section
      aria-labelledby="impact-hero-heading"
      className="relative isolate overflow-hidden bg-[color:var(--color-forest,#14503f)] text-[color:var(--color-off-white)]"
    >
      {/* Photo: stacked above the text on mobile, full-bleed behind it from md up */}
      {/* <div className="relative h-64 sm:h-80 md:absolute md:inset-0 md:h-auto">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="animate-fade-in object-cover object-[70%_center] motion-reduce:animate-none"
        />
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[color:var(--color-forest,#14503f)] via-[color:var(--color-forest,#14503f)]/10 to-transparent md:bg-linear-to-r md:from-[color:var(--color-forest,#14503f)] md:via-[color:var(--color-forest,#14503f)]/75 md:to-transparent"
        /> 
      </div> */}

      <div className="site-container relative z-10 pb-20 pt-8 md:flex md:min-h-[34rem] md:items-center md:pb-24 md:pt-32 lg:min-h-[40rem]">
        <div className="group/text max-w-xl">
          {/* Eyebrow + warm-sand accent line (widens on hover) */}
          <div
            className="flex items-center gap-3 animate-fade-up motion-reduce:animate-none"
            style={delay(0)}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              {eyebrow}
            </p>
            <span
              aria-hidden="true"
              style={delay(300)}
              className="h-0.5 w-10 origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/text:w-20 motion-reduce:animate-none"
            />
          </div>

          <h1
            id="impact-hero-heading"
            style={delay(100)}
            className="mt-5 animate-fade-up font-serif text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl motion-reduce:animate-none"
          >
            {headlineStart}{" "}
            <em className="italic text-[color:var(--color-warm-sand)]">
              {headlineAccent}
            </em>
          </h1>

          <p
            style={delay(200)}
            className="mt-5 max-w-md animate-fade-up text-base leading-relaxed text-[color:var(--color-off-white)]/85 md:text-lg motion-reduce:animate-none"
          >
            {text}
          </p>

          {/* Outer = entrance, inner = hover, so the transforms don't clash */}
          <div
            style={delay(300)}
            className="mt-8 inline-block animate-fade-up motion-reduce:animate-none"
          >
            <Link
              href={cta.href}
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-[var(--radius-md)] bg-[color:var(--color-off-white)] px-5 py-3 text-sm font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] motion-reduce:transition-none"
            >
              {/* light sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full motion-reduce:hidden"
              />
              {/* Colour lives on the inner elements: the global `a { color: inherit }` can't override it */}
              <span className="relative text-[color:var(--color-charcoal)]">
                {cta.label}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="relative size-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Torn edge: fill = the next section's background (off-white).
          In flow, overlapping the hero by its own height, so it sits flush with the bottom. */}
      <TornEdge
        seed={11}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-off-white)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}