import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Sprout } from "lucide-react";
import type { CSSProperties } from "react";
import { getInvolvedData, type InitiativeIcon } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<InitiativeIcon, typeof Sprout> = {
  sprout: Sprout,
  family: HeartHandshake,
};

export default function GetInvolvedInitiatives() {
  const { initiatives } = getInvolvedData;
  const { heading, intro, items } = initiatives;

  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] pb-14 md:pb-20 lg:scroll-mt-24"
    >
      <div className="site-container">
        <div
          className="group/heading flex w-fit animate-fade-up items-center gap-4 motion-reduce:animate-none"
          style={delay(0)}
        >
          <h2
            id="initiatives-heading"
            className="font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] md:text-4xl"
          >
            {heading}
          </h2>
          <span
            aria-hidden="true"
            className="hidden h-0.5 w-12 rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-28 sm:block"
          />
        </div>

        {intro && (
          <p
            className="mt-4 max-w-2xl animate-fade-up text-base text-[color:var(--color-charcoal)]/80 motion-reduce:animate-none"
            style={delay(100)}
          >
            {intro}
          </p>
        )}

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              // outer = entrance, inner article = hover
              <li
                key={item.id}
                className="animate-fade-up motion-reduce:animate-none"
                style={delay(200 + i * 150)}
              >
                <article className="group/card flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--color-warm-sand)]/60 bg-[color:var(--color-warm-sand)]/25 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105 motion-reduce:transition-none"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-7 md:px-8">
                    <span className="relative z-10 -mt-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[color:var(--color-off-white)] bg-[color:var(--color-warm-sand)] shadow-md transition-transform duration-300 group-hover/card:scale-110 motion-reduce:transition-none">
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-[color:var(--color-forest,#14503f)]"
                      />
                    </span>

                    <h3 className="mt-4 font-serif text-2xl font-bold text-[color:var(--color-forest,#14503f)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[color:var(--color-charcoal)]/85">
                      {item.description}
                    </p>
                    {/* {item.note && (
                      <p className="mt-3 text-sm italic leading-relaxed text-[color:var(--color-charcoal)]/70">
                        {item.note}
                      </p>
                    )} */}

                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                      <Link
                        href={item.cta.href}
                        className="group/btn inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-forest,#14503f)] px-5 py-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)]"
                      >
                        <span className="text-sm font-semibold text-[color:var(--color-off-white)]">
                          {item.cta.label}
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </Link>

                      {item.moreLink.href && (
                        <Link
                          href={item.moreLink.href}
                          className="group/more inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-forest,#14503f)]"
                        >
                          <span className="text-sm font-semibold text-[color:var(--color-forest,#14503f)] underline decoration-[color:var(--color-warm-sand)] decoration-2 underline-offset-4">
                            {item.moreLink.label}
                          </span>
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/more:translate-x-1"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}