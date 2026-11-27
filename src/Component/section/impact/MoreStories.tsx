import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function MoreStories() {
  const { heading, viewAll, items } = impactData.moreStories;

  return (
    <section
      id="more-stories"
      aria-labelledby="more-stories-heading"
      className="bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)]"
    >
      <div className="site-container pb-14 pt-4 md:pb-16 md:pt-6">
        {/* Heading row: heading on top-left, link fills the right */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="group/heading w-fit">
            <h2
              id="more-stories-heading"
              style={delay(0)}
              className="animate-fade-up font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] sm:text-4xl motion-reduce:animate-none"
            >
              {heading}
            </h2>
            <span
              aria-hidden="true"
              style={delay(250)}
              className="mt-3 block h-0.5 w-full origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none"
            />
          </div>

          <div
            style={delay(200)}
            className="animate-fade-up motion-reduce:animate-none"
          >
            <Link
              href={viewAll.href}
              className="group/all inline-flex items-center gap-2"
            >
              <span className="text-sm font-semibold text-[color:var(--color-forest,#14503f)] underline-offset-4 group-hover/all:underline">
                {viewAll.label}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/all:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        {/* Cards fill the full container width */}
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.id}
              style={delay(150 + i * 120)}
              className="animate-fade-up motion-reduce:animate-none"
            >
              {/* Outer li = entrance, inner Link = hover, so the transforms don't clash */}
              <Link
                href={item.href}
                className="group/card relative block h-full overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--color-warm-sand)]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {/* Photo + type pill */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-forest,#14503f)]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105 motion-reduce:transition-none"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[color:var(--color-warm-sand)] px-3 py-1 text-xs font-semibold text-[color:var(--color-charcoal)]">
                    {item.type}
                  </span>
                </div>

                {/* Light sweep over the whole card */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/card:translate-x-full motion-reduce:hidden"
                />

                {/* Title + arrow. Colour is on inner elements, not on the link */}
                <div className="relative flex items-center justify-between gap-4 px-5 py-5">
                  <div>
                    <h3 className="font-serif text-lg font-bold leading-snug text-[color:var(--color-forest,#14503f)]">
                      {item.title}
                    </h3>
                    {item.meta ? (
                      <p className="mt-1 text-xs text-[color:var(--color-charcoal)]/70">
                        {item.meta}
                      </p>
                    ) : null}
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-0.5 w-8 bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/card:w-16 motion-reduce:transition-none"
                    />
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover/card:translate-x-1 motion-reduce:transition-none">
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-[color:var(--color-charcoal)]"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}