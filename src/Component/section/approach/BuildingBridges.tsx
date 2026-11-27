import Image from "next/image";
import { approachData } from "@/data/approach";

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

/** Line-art domed monument with minarets, small domes and trees */
function MonumentSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 190"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Draw d="M0 176 H260" />
      <Draw d="M40 176 V164 H220 V176" delay={200} />
      <Draw d="M50 164 V154 H210 V164" delay={350} />
      <Draw d="M62 154 V100 H198 V154" delay={500} />
      <Draw d="M62 100 H198" delay={700} />
      <Draw d="M118 154 V122 A12 12 0 0 1 142 122 V154" delay={800} />
      <Draw d="M78 154 V126 A9 9 0 0 1 96 126 V154" delay={900} />
      <Draw d="M164 154 V126 A9 9 0 0 1 182 126 V154" delay={900} />
      <Draw d="M100 100 V84 H160 V100" delay={1000} />
      <Draw d="M96 84 H164" delay={1100} />
      <Draw d="M100 84 C96 58 112 36 130 30 C148 36 164 58 160 84" delay={1200} />
      <Draw d="M130 30 V16" delay={1500} />
      <Draw d="M126 16 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" delay={1600} />
      <Draw d="M70 100 V88 H88 V100" delay={1300} />
      <Draw d="M68 88 Q79 74 90 88" delay={1400} />
      <Draw d="M172 100 V88 H190 V100" delay={1300} />
      <Draw d="M170 88 Q181 74 192 88" delay={1400} />
      <g
        className="animate-sway motion-reduce:animate-none"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <Draw d="M18 176 V150" delay={1500} />
        <Draw d="M4 138 a14 12 0 1 0 28 0 a14 12 0 1 0 -28 0" delay={1650} />
      </g>
      <g
        className="animate-sway [animation-delay:1s] motion-reduce:animate-none"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <Draw d="M244 176 V150" delay={1600} />
        <Draw d="M230 138 a14 12 0 1 0 28 0 a14 12 0 1 0 -28 0" delay={1750} />
      </g>
    </svg>
  );
}

/**
 * Brush-stroke outline in 0 to 1 coordinates (objectBoundingBox).
 * The left edge is straight so it can sit flush with the screen edge;
 * the top, right and bottom edges are uneven.
 */
const BRUSH_PATH =
  "M0 0.12 C0.1 0.05 0.22 0.1 0.34 0.05 C0.48 0 0.62 0.08 0.76 0.04 C0.88 0.01 0.96 0.06 0.99 0.14 C1 0.26 0.96 0.34 0.98 0.46 C1 0.58 0.95 0.66 0.97 0.78 C0.98 0.88 0.93 0.95 0.84 0.97 C0.7 1 0.56 0.94 0.42 0.97 C0.28 1 0.14 0.95 0 0.98 Z";

export default function BuildingBridges() {
  const { title, description, image, imageAlt } = approachData.bridges;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      {/* Clip path shared by both brush layers */}
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <defs>
          <clipPath id="brush-clip" clipPathUnits="objectBoundingBox">
            <path d={BRUSH_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div className="grid items-center gap-8 py-10 md:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] md:gap-6 md:py-14 lg:gap-10">
        {/* Brush-shaped photo, flush with the left screen edge */}
        <div className="relative h-[260px] w-full animate-fade-in motion-reduce:animate-none md:h-[360px] lg:h-[400px]">
          {/* Sand layer behind the photo: extends past the left edge, offset down and right */}
          <div
            aria-hidden="true"
            className="absolute -left-6 right-[-14px] top-3 bottom-[-10px] bg-[var(--color-warm-sand)] [clip-path:url(#brush-clip)]"
          />
          <div className="absolute inset-0 overflow-hidden bg-[var(--color-warm-sand)] [clip-path:url(#brush-clip)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
            />
          </div>
        </div>

        {/* Text column: kept inside the same 1100px grid as the other sections */}
        <div className="relative px-4 sm:px-6 md:pl-0 md:pr-8 lg:pr-10">
          <div className="max-w-[560px] lg:pr-4 xl:max-w-[600px]">
            <div className="flex gap-6">
              <span
                aria-hidden="true"
                className="w-0.5 shrink-0 origin-top animate-grow-y bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none"
              />
              <div>
                <h2 className="animate-fade-up font-serif text-3xl font-bold leading-tight text-[var(--color-charcoal)] [--delay:200ms] motion-reduce:animate-none md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 animate-fade-up text-base leading-relaxed text-[var(--color-charcoal)] [--delay:350ms] motion-reduce:animate-none md:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Monument sketch: its own space under the text, never over it */}
          <MonumentSketch className="pointer-events-none mt-8 hidden h-32 w-auto text-[var(--color-warm-sand)] md:ml-auto md:block lg:h-36 xl:h-40" />
        </div>
      </div>
    </section>
  );
}