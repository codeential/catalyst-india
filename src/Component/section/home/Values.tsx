import { homeData } from "@/data/home";

/** A path that draws itself in. pathLength=1 lets one dash length fit every path. */
function Draw({
  d,
  delay = 0,
  strokeWidth,
}: {
  d: string;
  delay?: number;
  strokeWidth?: number;
}) {
  return (
    <path
      d={d}
      pathLength={1}
      strokeWidth={strokeWidth}
      className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    />
  );
}

/** Hand-drawn brush underline that draws in */
function BrushUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <Draw
        d="M3 8 C30 3 55 10 85 6 C115 2 150 9 197 4"
        strokeWidth={4}
        delay={500}
      />
    </svg>
  );
}

/** Big decorative quote mark */
function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 40"
      className={className}
      fill="currentColor"
    >
      <path d="M0 40V24C0 10 8 2 22 0v8C15 10 12 14 12 20h10v20H0Zm26 0V24C26 10 34 2 48 0v8c-7 2-10 6-10 12h10v20H26Z" />
    </svg>
  );
}

/** Small flying bird */
function Bird({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 10"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 7 Q6 0 12 6 Q18 0 23 7" />
    </svg>
  );
}

/** Line-art sketch that draws itself: India Gate, pavilions, swaying tree */
function CitySketch({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 170"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground */}
      <Draw d="M0 158 H320" />

      {/* India Gate */}
      <Draw d="M150 158 V52 H224 V158" delay={200} />
      <Draw d="M144 52 H230" delay={600} />
      <Draw d="M148 46 H226" delay={700} />
      <Draw d="M156 40 H218" delay={800} />
      <Draw d="M170 40 Q187 26 204 40" delay={900} />
      <Draw d="M172 158 V108 A15 15 0 0 1 202 108 V158" delay={1000} />
      <Draw d="M156 70 H218" delay={1100} />
      <Draw d="M156 82 H218" delay={1200} />

      {/* Left pavilion */}
      <Draw d="M88 158 V120 H124 V158" delay={500} />
      <Draw d="M84 120 H128" delay={800} />
      <Draw d="M92 120 Q106 98 120 120" delay={900} />
      <Draw d="M106 98 V90" delay={1100} />
      <Draw d="M98 158 V132 A8 8 0 0 1 114 132 V158" delay={1000} />

      {/* Small pavilion */}
      <Draw d="M48 158 V138 H70 V158" delay={800} />
      <Draw d="M45 138 H73" delay={1000} />
      <Draw d="M50 138 Q59 124 68 138" delay={1100} />

      {/* Right pavilion */}
      <Draw d="M240 158 V132 H264 V158" delay={700} />
      <Draw d="M237 132 H267" delay={900} />
      <Draw d="M242 132 Q252 116 262 132" delay={1000} />

      {/* Tree: trunk and canopy sway gently */}
      <g
        className="animate-sway motion-reduce:animate-none"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <Draw d="M294 158 V124" delay={1200} />
        <Draw d="M278 108 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0" delay={1400} />
        <Draw d="M271 118 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0" delay={1500} />
        <Draw d="M296 118 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0" delay={1600} />
      </g>

      {/* Grass tufts */}
      <Draw d="M20 158 l3 -8 l3 8" delay={1300} />
      <Draw d="M30 158 l3 -6 l3 6" delay={1400} />
      <Draw d="M270 158 l3 -7 l3 7" delay={1500} />
    </svg>
  );
}

export default function Values() {
  const { heading, description } = homeData.sectionTwo;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      {/* Ambient floating dots */}
      <span
        aria-hidden="true"
        className="absolute left-[6%] top-10 size-3 animate-float rounded-full bg-[var(--color-warm-sand)] opacity-70 motion-reduce:animate-none"
      />
      <span
        aria-hidden="true"
        className="absolute left-[42%] top-6 size-2 animate-float rounded-full bg-[var(--color-warm-sand)] opacity-60 [animation-delay:1.5s] motion-reduce:animate-none"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-16 left-[30%] hidden size-4 animate-float rounded-full bg-[var(--color-warm-sand)] opacity-50 [animation-delay:3s] motion-reduce:animate-none md:block"
      />

      {/* Birds drifting across the top right */}
      <Bird className="absolute right-[22%] top-8 hidden h-3 w-6 animate-fly text-[var(--color-warm-sand)] [--delay:0s] motion-reduce:animate-none md:block" />
      <Bird className="absolute right-[14%] top-14 hidden h-2.5 w-5 animate-fly text-[var(--color-warm-sand)] [--delay:4s] motion-reduce:animate-none md:block" />

      {/* Sketch, bottom right */}
      <CitySketch className="pointer-events-none absolute -bottom-1 right-2 hidden h-28 w-auto text-[var(--color-warm-sand)] md:block lg:right-10 lg:h-36" />

      <div className="relative mx-auto max-w-[1100px] px-4 pb-12 pt-12 sm:px-6 md:pb-36 md:pt-16 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          {/* Heading with brush underline */}
          <div className="animate-fade-up motion-reduce:animate-none md:w-[300px] md:shrink-0">
            <h2 className="font-serif text-4xl font-bold leading-[1.1] text-[var(--color-charcoal)] md:text-5xl">
              {heading}
            </h2>
            <BrushUnderline className="mt-3 h-3 w-40 text-[var(--color-warm-sand)]" />
          </div>

          {/* Vertical divider that grows downward (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden w-px origin-top animate-grow-y self-stretch bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none md:block"
          />

          {/* Paragraph card */}
          <div className="group relative flex-1 animate-fade-up [--delay:250ms] motion-reduce:animate-none md:max-w-[620px]">
            {/* Slowly rotating dashed ring behind the card */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute -right-8 -top-8 size-24 animate-spin-slow text-[var(--color-warm-sand)] motion-reduce:animate-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 6"
              strokeLinecap="round"
            >
              <circle cx="50" cy="50" r="46" />
            </svg>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-warm-sand)] bg-white/85 p-6 shadow-md backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl md:p-8">
              {/* Accent bar that grows in on the left */}
              <span
                aria-hidden="true"
                className="absolute inset-y-6 left-0 w-1.5 origin-top animate-grow-y rounded-full bg-[var(--color-warm-sand)] [--delay:600ms] motion-reduce:animate-none"
              />

              {/* Quote mark pops in and floats */}
              <span className="block animate-pop [--delay:500ms] motion-reduce:animate-none">
                <QuoteMark className="h-7 w-auto animate-float text-[var(--color-warm-sand)] motion-reduce:animate-none" />
              </span>

              <p className="mt-4 text-lg leading-relaxed text-[var(--color-charcoal)] md:text-xl md:leading-[1.75]">
                {description}
              </p>

              {/* Underline that stretches on hover */}
              <span
                aria-hidden="true"
                className="mt-6 block h-0.5 w-12 rounded-full bg-[var(--color-warm-sand)] transition-all duration-500 ease-out group-hover:w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};