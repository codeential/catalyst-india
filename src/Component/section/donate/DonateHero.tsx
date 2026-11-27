import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { donateData } from "@/data/donate";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function DonateHero() {
  const { hero } = donateData;

  return (
    <section
      aria-labelledby="donate-hero-heading"
      className="bg-[color:var(--color-forest,#14503f)] text-[color:var(--color-off-white)]"
    >
      <div className="site-container h-[650px] pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
          {/* Text column */}
          <div className="min-w-0 max-w-2xl">
            <p
              className="mb-4 w-fit rounded-full border border-[color:var(--color-warm-sand)] px-3 py-1 text-sm font-medium tracking-wide text-[color:var(--color-warm-sand)] animate-fade-up motion-reduce:animate-none"
              style={delay(0)}
            >
              {hero.eyebrow}
            </p>

            <div className="group/heading w-fit max-w-full">
              <h1
                id="donate-hero-heading"
                className="font-serif text-4xl leading-tight sm:text-5xl animate-fade-up motion-reduce:animate-none"
                style={delay(100)}
              >
                {hero.heading}
              </h1>
              <span
                aria-hidden="true"
                className="mt-4 block h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 md:group-hover/heading:w-[calc(100%+4rem)]"
              />
            </div>

            <p
              className="mt-6 text-base leading-relaxed text-[color:var(--color-off-white)]/90 sm:text-lg animate-fade-up motion-reduce:animate-none"
              style={delay(200)}
            >
              {hero.intro}
            </p>

            <p
              className="mt-4 text-base leading-relaxed text-[color:var(--color-off-white)]/90 animate-fade-up motion-reduce:animate-none"
              style={delay(300)}
            >
              {hero.note}
            </p>

            {hero.assurance ? (
              <p
                className="mt-4 text-sm leading-relaxed text-[color:var(--color-warm-sand)] animate-fade-up motion-reduce:animate-none"
                style={delay(400)}
              >
                {hero.assurance}
              </p>
            ) : null}
          </div>

        </div>
      </div>

      {/* Edge: last in-flow element. Fill must match the NEXT section's background (see note 1). */}
      <TornEdge
        seed={7}
        className="-mt-5 h-5 text-[color:var(--color-off-white)] sm:-mt-6 sm:h-6 lg:-mt-8 lg:h-8"
      />
    </section>
  );
}