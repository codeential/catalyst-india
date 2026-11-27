import Image from "next/image";
import type { CSSProperties } from "react";
import { workData } from "@/data/ourWork";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function OurWorkLegacy() {
  const { heading, badge, description, items } = workData.legacy;

  return (
    <section className="bg-[var(--color-off-white)] pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pb-28">
      <div className="site-container">
        {/* Heading on top, badge beside it, paragraph underneath */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <div
            className="group animate-fade-up motion-reduce:animate-none"
            style={delay(0)}
          >
            <h2 className="font-serif text-3xl font-bold text-[var(--color-forest,#14503f)] sm:text-4xl">
              {heading}
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-[3px] w-12 origin-left bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-28 animate-grow-x motion-reduce:animate-none"
              style={delay(300)}
            />
          </div>

          <span
            className="rounded-full bg-[var(--color-warm-sand)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-charcoal)] animate-pop motion-reduce:animate-none"
            style={delay(250)}
          >
            {badge}
          </span>
        </div>

        <p
          className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-charcoal)]/80 sm:text-lg animate-fade-up motion-reduce:animate-none"
          style={delay(150)}
        >
          {description}
        </p>

        {/* Timeline: cards fill the full container width */}
        <ol className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-12 lg:grid-cols-6">
          {items.map((item, i) => (
            <li key={item.id} className="group">
              {/* Timeline dot + connector (desktop only) */}
              <div
                aria-hidden="true"
                className="relative mb-5 hidden h-4 justify-center lg:flex"
              >
                {i < items.length - 1 && (
                  <span
                    className="absolute left-1/2 top-[7px] h-0.5 w-[calc(100%+1rem)] origin-left bg-[var(--color-forest,#14503f)]/40 animate-grow-x motion-reduce:animate-none"
                    style={delay(400 + i * 150)}
                  />
                )}
                {/* Outer = entrance, inner = hover */}
                <span
                  className="relative z-10 block animate-pop motion-reduce:animate-none"
                  style={delay(400 + i * 150)}
                >
                  <span className="block h-4 w-4 rounded-full border-2 border-[var(--color-forest,#14503f)] bg-[var(--color-warm-sand)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[var(--color-forest,#14503f)] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                </span>
              </div>

              {/* Card: outer li fades up, inner div lifts on hover */}
              <div
                className="animate-fade-up motion-reduce:animate-none"
                style={delay(450 + i * 120)}
              >
                <div className="overflow-hidden rounded-2xl shadow-md transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-warm-sand)]">
                    <Image
                      src={item.image.src}
                      alt={item.image.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    {/* Light sweep */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-[var(--color-off-white)]/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%] motion-reduce:hidden"
                    />
                  </div>
                  <div className="flex min-h-[3.5rem] items-center justify-center bg-[var(--color-warm-sand)] px-3 py-3 text-center">
                    <h3 className="text-sm font-bold leading-snug text-[var(--color-charcoal)] sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}