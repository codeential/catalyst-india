import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function FeaturedStory() {
  const { eyebrow, title, text, cta, image, imageAlt } = impactData.featuredStory;

  return (
    <section
      id="featured-story"
      aria-labelledby="featured-story-heading"
      className="scroll-mt-24 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)]"
    >
      <div className="site-container pb-14 pt-10 md:pb-16 md:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photo: sand offset block behind it. Outer = entrance, inner = hover */}
          <div
            style={delay(0)}
            className="animate-fade-up lg:col-span-5 motion-reduce:animate-none"
          >
            <div className="group/photo relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[var(--radius-xl)] bg-[color:var(--color-warm-sand)]/70 transition-transform duration-300 group-hover/photo:translate-x-4 group-hover/photo:translate-y-4 motion-reduce:transition-none"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] bg-[color:var(--color-forest,#14503f)] shadow-md">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/photo:scale-105 motion-reduce:transition-none"
                />
              </div>
            </div>
          </div>

          {/* Text: heading on top, paragraph underneath, fills the rest of the width */}
          <div className="lg:col-span-7">
  {/* Pill: block-level wrapper so the heading drops to its own line */}
  <div style={delay(100)} className="animate-fade-up motion-reduce:animate-none">
    <p className="inline-block rounded-full bg-[color:var(--color-warm-sand)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-charcoal)]">
      {eyebrow}
    </p>
  </div>

  {/* Heading on its own line; accent line spans the heading width */}
  <div className="group/heading mt-4 w-fit">
    <h2
      id="featured-story-heading"
      style={delay(200)}
      className="animate-fade-up font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] sm:text-4xl motion-reduce:animate-none"
    >
      {title}
    </h2>
    <span
      aria-hidden="true"
      style={delay(400)}
      className="mt-3 block h-0.5 w-full origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none"
    />
  </div>

  <p
    style={delay(300)}
    className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-[color:var(--color-charcoal)]/85 md:text-lg motion-reduce:animate-none"
  >
    {text}
  </p>

  {/* CTA + tree share one row, so the sketch sits beside the link instead of stranded below */}
  <div className="mt-6 flex items-end justify-between gap-6">
    <div
      style={delay(400)}
      className="animate-fade-up motion-reduce:animate-none"
    >
      <Link
        href={cta.href}
        className="group/cta inline-flex items-center gap-2 transition-transform duration-300 hover:translate-x-1 motion-reduce:transition-none"
      >
        <span className="text-sm font-semibold text-[color:var(--color-forest,#14503f)] underline-offset-4 group-hover/cta:underline">
          {cta.label}
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 text-[color:var(--color-forest,#14503f)]"
        />
      </Link>
    </div>

    <svg
      aria-hidden="true"
      viewBox="0 0 160 120"
      fill="none"
      className="hidden h-24 w-auto shrink-0 text-[color:var(--color-warm-sand)] sm:block lg:h-28"
    >
      <path
        d="M80 118 V70 M80 90 L62 74 M80 84 L98 68 M44 118 H116 M80 70 C52 70 40 48 56 32 C54 14 80 6 92 20 C112 16 126 38 112 54 C118 66 100 74 80 70 Z"
        pathLength={1}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={delay(500)}
        className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
      />
    </svg>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}