import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { getInvolvedData } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function GetInvolvedHero() {
  const { getInvolvedHero } = getInvolvedData;
  const { eyebrow, headingLead, headingAccent, description, primaryCta, secondaryCta, image } =
    getInvolvedHero;

  return (
    <section
      aria-labelledby="get-involved-heading"
      className="relative bg-[color:var(--color-forest,#14503f)] pt-12 md:pt-16"
    >
      <div className="site-container grid items-center gap-10 pb-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Text column */}
        <div>
          <div
            className="flex items-center gap-3 animate-fade-in motion-reduce:animate-none"
            style={delay(0)}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-off-white)]">
              {eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-16 origin-left animate-grow-x bg-[color:var(--color-warm-sand)] motion-reduce:animate-none"
              style={delay(150)}
            />
          </div>

          <div
            className="group/heading mt-5 w-fit animate-fade-up motion-reduce:animate-none"
            style={delay(100)}
          >
            <h1
              id="get-involved-heading"
              className="max-w-[13ch] text-balance font-serif text-4xl font-bold leading-[1.1] text-[color:var(--color-off-white)] sm:text-5xl lg:text-6xl"
            >
              {headingLead}{" "}
              <em className="italic text-[color:var(--color-warm-sand)]">{headingAccent}</em>
            </h1>
            <span
              aria-hidden="true"
              className="mt-5 block h-0.5 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)]"
            />
          </div>

          <p
            className="mt-6 max-w-md animate-fade-up text-base text-[color:var(--color-off-white)]/85 motion-reduce:animate-none md:text-lg"
            style={delay(250)}
          >
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* outer = entrance, inner = hover */}
            <div className="animate-fade-up motion-reduce:animate-none" style={delay(400)}>
              <Link
                href={primaryCta.href}
                className="group/btn inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-warm-sand)] px-6 py-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-off-white)]"
              >
                <span className="text-sm font-semibold text-[color:var(--color-charcoal)]">
                  {primaryCta.label}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </div>

            <div className="animate-fade-up motion-reduce:animate-none" style={delay(500)}>
              <Link
                href={secondaryCta.href}
                className="group/btn inline-flex items-center gap-2 rounded-lg border border-[color:var(--color-warm-sand)]/70 px-6 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--color-off-white)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-off-white)]"
              >
                <span className="text-sm font-semibold text-[color:var(--color-off-white)]">
                  {secondaryCta.label}
                </span>
                <Heart
                  aria-hidden="true"
                  className="h-4 w-4 text-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover/btn:scale-110"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Image column: outer = entrance, inner = hover */}
        <div className="animate-fade-in motion-reduce:animate-none" style={delay(300)}>
          <div className="group/photo relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--color-warm-sand)]/30 shadow-xl transition duration-500 hover:-translate-y-1">
            <Image
              src={image.src}
              alt={image.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover/photo:scale-105 motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-forest,#14503f)]/40 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Fill = NEXT section's background (Section 2, off-white) */}
      <TornEdge
        seed={21}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-off-white)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}