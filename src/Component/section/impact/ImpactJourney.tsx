import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { impactData} from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function ImpactJourney() {
  const { heading, milestones } = impactData.impactJourney;
  const last = milestones.length - 1;

  return (
    <section
      id="journey"
      aria-labelledby="impact-journey-heading"
      className="relative bg-[color:var(--color-forest,#14503f)] text-[color:var(--color-off-white)]"
    >
      <div className="site-container pb-12 pt-12 md:pt-16">
        {/* Heading on top, accent line widens on hover */}
        <div className="group/heading inline-block">
          <h2
            id="impact-journey-heading"
            style={delay(0)}
            className="animate-fade-up font-serif text-3xl font-bold sm:text-4xl motion-reduce:animate-none"
          >
            {heading}
          </h2>
          <span
            aria-hidden="true"
            style={delay(250)}
            className="mt-3 block h-0.5 w-16 origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/heading:w-32 motion-reduce:animate-none"
          />
        </div>

        {/* Timeline: vertical on mobile, horizontal from lg */}
        <div className="relative mt-10 lg:mt-12">
          {/* Horizontal connector (lg only). Sits in the dot row, above the text */}
          <span
            aria-hidden="true"
            style={delay(300)}
            className="absolute left-[10%] right-[10%] top-2.5 hidden h-px origin-left animate-grow-x bg-[color:var(--color-warm-sand)]/60 motion-reduce:animate-none lg:block"
          />

          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
            {milestones.map((m, i) => (
              <li
                key={m.id}
                className="group/step relative flex gap-4 lg:flex-col lg:items-center lg:gap-4 lg:text-center"
              >
                {/* Vertical connector (mobile only) */}
                {i !== last ? (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-2rem] left-2.5 top-6 w-px bg-[color:var(--color-warm-sand)]/60 lg:hidden"
                  />
                ) : null}

                {/* Dot: outer = entrance, inner = hover */}
                <span
                  style={delay(400 + i * 150)}
                  className="relative z-10 shrink-0 animate-pop motion-reduce:animate-none"
                >
                  <span
                    className={`block size-5 rounded-full border-2 border-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover/step:scale-125 motion-reduce:transition-none ${
                      i === 0
                        ? "bg-[color:var(--color-warm-sand)]"
                        : "bg-[color:var(--color-forest,#14503f)]"
                    }`}
                  />
                </span>

                <div
                  style={delay(450 + i * 150)}
                  className="animate-fade-up motion-reduce:animate-none"
                >
                  <div className="transition-transform duration-300 group-hover/step:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/step:translate-y-0">
                    {m.year ? (
                      <p className="font-serif text-xl font-bold text-[color:var(--color-warm-sand)]">
                        {m.year}
                      </p>
                    ) : null}
                    <p
                      className={`max-w-[16rem] text-sm leading-snug text-[color:var(--color-off-white)]/85 lg:mx-auto ${
                        m.year ? "mt-1" : ""
                      }`}
                    >
                      {m.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Delhi skyline sketch: in flow below the timeline, so it never overlaps text */}
         <svg
          aria-hidden="true"
          viewBox="0 0 600 60"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          className="mx-auto mt-3 h-10 w-full max-w-3xl text-[color:var(--color-warm-sand)]/50 md:h-14"
        >
          {/*<path
            d="M0 58 H70 V40 H84 V28 L90 18 L96 28 V40 H110 V58 M130 58 V38 Q160 4 190 38 V58 M200 58 V30 H206 V12 H212 V30 H218 V58 M240 58 V36 Q270 8 300 36 V58 M320 58 V22 L326 10 L332 22 V58 M350 58 V40 H380 V30 Q395 14 410 30 V40 H440 V58 M460 58 V32 Q490 6 520 32 V58 M540 58 V26 H548 V16 H556 V26 H564 V58 H600"
            pathLength={1}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={delay(900)}
            className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
          />*/}
        </svg> 
      </div>

      {/* Torn edge: fill = the next section's background (off-white, Featured Story).
          In flow, overlapping this section by its own height. */}
      <TornEdge
        seed={31}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-off-white)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}