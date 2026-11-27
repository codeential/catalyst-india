import type { LucideIcon } from "lucide-react";
import { Handshake, Lightbulb, Share2, Star } from "lucide-react";
import { approachData } from "@/data/approach";

const IconsMap: Record<string, LucideIcon> = {
  handshake: Handshake,
  lightbulb: Lightbulb,
  share: Share2,
  star: Star,
};

/** Three hand-made blob shapes so the watercolor patches don't all look alike */
const BLOBS = [
  "M52 8 C74 4 96 18 98 42 C100 66 82 92 56 94 C30 96 8 80 6 54 C4 30 28 12 52 8 Z",
  "M46 6 C70 2 94 20 96 46 C98 72 76 96 50 96 C24 96 4 76 6 50 C8 26 24 10 46 6 Z",
  "M56 10 C80 8 98 28 94 52 C90 76 68 94 44 92 C20 90 4 68 8 44 C12 22 34 12 56 10 Z",
  "M50 6 C76 6 98 24 96 50 C94 74 74 96 48 94 C22 92 6 72 8 46 C10 24 28 6 50 6 Z",
];

/** Alternating tints, both from your theme */
const BLOB_TINTS = [
  "text-[var(--color-forest,#14503f)]/15",
  "text-[var(--color-warm-sand)]/60",
  "text-[var(--color-forest,#14503f)]/15",
  "text-[var(--color-warm-sand)]/60",
];

/** A path that draws itself in */
function Draw({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <path
      d={d}
      pathLength={1}
      className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    />
  );
}

/** Wide line-art skyline: India Gate in the middle, domes, trees and birds */
function SkylineSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 150"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground */}
      <Draw d="M0 138 H560" />

      {/* India Gate */}
      <Draw d="M248 138 V50 H312 V138" delay={200} />
      <Draw d="M242 50 H318" delay={500} />
      <Draw d="M246 44 H314" delay={600} />
      <Draw d="M254 38 H306" delay={700} />
      <Draw d="M266 38 Q280 26 294 38" delay={800} />
      <Draw d="M266 138 V98 A14 14 0 0 1 294 98 V138" delay={900} />
      <Draw d="M254 66 H306" delay={1000} />

      {/* Left domed building */}
      <Draw d="M150 138 V102 H198 V138" delay={500} />
      <Draw d="M146 102 H202" delay={700} />
      <Draw d="M154 102 Q174 70 194 102" delay={800} />
      <Draw d="M174 70 V60" delay={1000} />
      <Draw d="M164 138 V118 A10 10 0 0 1 184 118 V138" delay={900} />

      {/* Far-left chhatri */}
      <Draw d="M110 138 V116 H134 V138" delay={700} />
      <Draw d="M107 116 H137" delay={900} />
      <Draw d="M112 116 Q122 102 132 116" delay={1000} />

      {/* Right domed building */}
      <Draw d="M362 138 V102 H410 V138" delay={600} />
      <Draw d="M358 102 H414" delay={800} />
      <Draw d="M366 102 Q386 70 406 102" delay={900} />
      <Draw d="M386 70 V60" delay={1100} />
      <Draw d="M376 138 V118 A10 10 0 0 1 396 118 V138" delay={1000} />

      {/* Far-right chhatri */}
      <Draw d="M430 138 V116 H454 V138" delay={800} />
      <Draw d="M427 116 H457" delay={1000} />
      <Draw d="M432 116 Q442 102 452 116" delay={1100} />

      {/* Trees */}
      <g
        className="animate-sway motion-reduce:animate-none"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <Draw d="M60 138 V112" delay={1200} />
        <Draw d="M44 98 a16 14 0 1 0 32 0 a16 14 0 1 0 -32 0" delay={1400} />
        <Draw d="M38 108 a11 10 0 1 0 22 0 a11 10 0 1 0 -22 0" delay={1500} />
        <Draw d="M62 108 a11 10 0 1 0 22 0 a11 10 0 1 0 -22 0" delay={1600} />
      </g>
      <g
        className="animate-sway [animation-delay:1.2s] motion-reduce:animate-none"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <Draw d="M510 138 V112" delay={1300} />
        <Draw d="M494 98 a16 14 0 1 0 32 0 a16 14 0 1 0 -32 0" delay={1500} />
        <Draw d="M488 108 a11 10 0 1 0 22 0 a11 10 0 1 0 -22 0" delay={1600} />
        <Draw d="M512 108 a11 10 0 1 0 22 0 a11 10 0 1 0 -22 0" delay={1700} />
      </g>

      {/* Birds */}
      <g className="animate-float motion-reduce:animate-none">
        <path d="M330 24 q5 -6 10 0 q5 -6 10 0" />
        <path d="M356 12 q4 -5 8 0 q4 -5 8 0" />
      </g>
    </svg>
  );
}

export default function FourCs() {
  const { title, description, items } = approachData.fourCs;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      {/* Skyline sketch, top right */}
      <SkylineSketch className="pointer-events-none absolute right-0 top-6 hidden h-32 w-auto text-[var(--color-warm-sand)] md:block lg:right-6 lg:h-40" />

      <div className="relative mx-auto max-w-[1100px] px-4 pb-20 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8">
        {/* Heading + description */}
        <div className="max-w-[520px] animate-fade-up motion-reduce:animate-none">
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-4xl font-bold leading-tight text-[var(--color-charcoal)] md:text-5xl">
              {title}
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 h-0.5 w-14 origin-left animate-grow-x bg-[var(--color-warm-sand)] [--delay:400ms] motion-reduce:animate-none md:w-20"
            />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-charcoal)]">
            {description}
          </p>
        </div>

        {/* Four columns */}
        <ul className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[var(--color-warm-sand)]">
          {items.map((item, index) => {
            const Icon = IconsMap[item.icon];
            if (!Icon) return null;

            return (
              <li
                key={item.label}
                className="group animate-fade-up px-4 text-center motion-reduce:animate-none lg:px-7"
                style={{ "--delay": `${200 + index * 150}ms` } as React.CSSProperties}
              >
                {/* Watercolor blob + icon: outer span pops in, inner span handles hover */}
                <span
                  className="inline-block animate-pop motion-reduce:animate-none"
                  style={{ "--delay": `${400 + index * 150}ms` } as React.CSSProperties}
                >
                  <span className="relative flex size-28 items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-3 group-hover:scale-105">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 100 100"
                      className={`absolute inset-0 size-full ${BLOB_TINTS[index % BLOB_TINTS.length]}`}
                      fill="currentColor"
                    >
                      <path d={BLOBS[index % BLOBS.length]} />
                    </svg>
                    <Icon
                      className="relative size-12 text-[var(--color-charcoal)]"
                      strokeWidth={1.3}
                      aria-hidden="true"
                    />
                  </span>
                </span>

                <h3 className="mt-4 font-serif text-2xl font-bold text-[var(--color-charcoal)]">
                  {item.label}
                </h3>

                <p className="mx-auto mt-3 max-w-[230px] text-base leading-relaxed text-[var(--color-charcoal)]">
                  {item.description}
                </p>

                {/* Accent line that widens on hover */}
                <span
                  aria-hidden="true"
                  className="mx-auto mt-5 block h-0.5 w-16 rounded-full bg-[var(--color-warm-sand)] transition-all duration-500 ease-out group-hover:w-28"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}