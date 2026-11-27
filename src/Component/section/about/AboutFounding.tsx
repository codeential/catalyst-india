import Image from "next/image";
import type { CSSProperties } from "react";
import { aboutData } from "@/data/about";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/** Position + tilt for each print. Index matches aboutFounding.photos. */
const PRINT_STYLES = [
  "right-0 top-0 rotate-3",
  "bottom-0 left-0 -rotate-2",
];

export default function AboutFounding() {
  const { title, intro, timeline, photos } = aboutData.aboutFounding;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)] pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading on top */}
        <div className="group w-fit">
          <h2
            style={delay(100)}
            className="animate-fade-up font-serif text-4xl font-bold leading-[1.05] text-[var(--color-forest,#14503f)] motion-reduce:animate-none sm:text-5xl"
          >
            {title}
          </h2>
          <span
            aria-hidden="true"
            style={delay(400)}
            className="mt-4 block h-1 w-24 origin-left animate-grow-x rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover:w-44 motion-reduce:animate-none"
          />
        </div>

        <div className="mt-8 grid gap-12 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_26rem]">
          {/* Intro + timeline */}
          <div className="max-w-3xl">
            <div className="relative pl-5 sm:pl-8">
              <span
                aria-hidden="true"
                style={delay(300)}
                className="absolute inset-y-0 left-0 w-0.5 origin-top animate-grow-y bg-[var(--color-warm-sand)] motion-reduce:animate-none"
              />
              <p
                style={delay(300)}
                className="animate-fade-up text-lg leading-relaxed text-[var(--color-charcoal)]/85 motion-reduce:animate-none sm:text-xl"
              >
                {intro}
              </p>
            </div>

            <ol className="relative mt-10">
              {/* Vertical timeline line */}
              <span
                aria-hidden="true"
                style={delay(500)}
                className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top animate-grow-y bg-[var(--color-warm-sand)] motion-reduce:animate-none"
              />

              {timeline.map((item, i) => (
                <li
                  key={item.date}
                  className={`relative pl-9 ${i > 0 ? "mt-10" : ""}`}
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    style={delay(600 + i * 300)}
                    className="absolute left-0 top-1.5 size-4 animate-pop rounded-full bg-[var(--color-forest,#14503f)] ring-4 ring-[var(--color-off-white)] motion-reduce:animate-none"
                  />

                  {/* Entrance on li content wrapper, hover on inner div */}
                  <div
                    style={delay(650 + i * 300)}
                    className="animate-fade-up motion-reduce:animate-none"
                  >
                    <div className="transition-transform duration-300 hover:translate-x-1">
                      <span className="inline-block rounded-md bg-[var(--color-warm-sand)]/60 px-3 py-1 font-serif text-lg font-bold text-[var(--color-forest,#14503f)] sm:text-xl">
                        {item.date}
                      </span>
                      <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-charcoal)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-[var(--color-charcoal)]/80">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Tilted photo prints */}
          <div className="relative mx-auto h-[24rem] w-full max-w-[22rem] sm:h-[28rem] lg:mx-0 lg:h-[26rem] xl:h-[30rem] xl:max-w-none">
            {photos.map((photo, i) => (
              <span
                key={photo.src}
                style={delay(400 + i * 250)}
                className={`absolute z-10 block w-[14rem] animate-pop motion-reduce:animate-none sm:w-[16rem] xl:w-[18rem] ${PRINT_STYLES[i]}`}
              >
                {/* Outer = entrance + position, inner = tilt/hover */}
                <span className="block rotate-0 bg-[var(--color-off-white)] p-2 shadow-lg ring-1 ring-[var(--color-charcoal)]/10 transition duration-500 hover:z-20 hover:scale-105 hover:rotate-0">
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 18rem, 16rem"
                      unoptimized={photo.src.endsWith(".svg")}
                      className="object-cover"
                    />
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}