import type { LucideIcon } from "lucide-react";
import { Building2, Layers, Sprout, Users } from "lucide-react";
import { approachData } from "@/data/approach";

const IconsMap: Record<string, LucideIcon> = {
  users: Users,
  layers: Layers,
  sprout: Sprout,
  building: Building2,
};

/** Arrow that draws itself; points right on desktop, down on mobile */
function FlowArrow({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 24"
      className="h-6 w-14 shrink-0 rotate-90 text-[var(--color-warm-sand)] lg:rotate-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M4 12 H54"
        pathLength={1}
        className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
        style={{ "--delay": `${delay}ms` } as React.CSSProperties}
      />
      <path
        d="M44 3 L55 12 L44 21"
        pathLength={1}
        className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
        style={{ "--delay": `${delay + 500}ms` } as React.CSSProperties}
      />
    </svg>
  );
}

/** Faded line-art tree for the background */
function TreeSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M80 200 V110 M80 150 L56 128 M80 134 L108 112" />
      <circle cx="80" cy="76" r="48" />
      <circle cx="46" cy="104" r="30" />
      <circle cx="116" cy="102" r="32" />
      <path d="M60 70 q10 -10 20 0 M88 90 q10 -10 20 0 M52 100 q8 -8 16 0" />
    </svg>
  );
}

/** A circle with an icon and a label below it */
function Node({
  icon,
  label,
  delay,
}: {
  icon: string;
  label: string;
  delay: number;
}) {
  const Icon = IconsMap[icon];
  if (!Icon) return null;

  return (
    <div className="group flex flex-col items-center gap-3 text-center">
      <span
        className="inline-block animate-pop motion-reduce:animate-none"
        style={{ "--delay": `${delay}ms` } as React.CSSProperties}
      >
        <span className="flex size-24 items-center justify-center rounded-full bg-[var(--color-off-white)] shadow-lg transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-105 md:size-28">
          <Icon
            className="size-11 text-[var(--color-forest,#14503f)] md:size-12"
            strokeWidth={1.4}
            aria-hidden="true"
          />
        </span>
      </span>
      <p
        className="max-w-[120px] animate-fade-up font-serif text-lg font-bold leading-tight text-white motion-reduce:animate-none md:text-xl"
        style={{ "--delay": `${delay + 200}ms` } as React.CSSProperties}
      >
        {label}
      </p>
    </div>
  );
}

export default function Transformation() {
  const { title, start, foundations, end } = approachData.transformation;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-forest,#14503f)]">
      {/* Wavy top: fill must match the section above */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -top-px z-10 block h-10 w-full md:h-14 lg:h-16"
      >
        <path
          d="M0 0 H1440 V30 C1280 60 1100 70 900 48 C700 26 520 10 340 30 C200 46 90 60 0 44 Z"
          className="fill-[var(--color-off-white)]"
        />
      </svg>

      {/* Wavy bottom: fill must match the section below */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-px z-10 block h-10 w-full md:h-14 lg:h-16"
      >
        <path
          d="M0 80 H1440 V36 C1300 12 1120 6 940 26 C740 48 560 64 380 46 C220 30 100 22 0 40 Z"
          className="fill-[var(--color-off-white)]"
        />
      </svg>

      {/* Faded trees in the corners */}
      <TreeSketch className="pointer-events-none absolute -left-6 bottom-6 hidden h-52 w-auto animate-sway text-white opacity-[0.12] motion-reduce:animate-none md:block" />
      <TreeSketch className="pointer-events-none absolute -right-6 bottom-6 hidden h-52 w-auto animate-sway text-white opacity-[0.12] [animation-delay:1.5s] motion-reduce:animate-none md:block" />

      <div className="relative mx-auto max-w-[1100px] px-4 pb-24 pt-24 sm:px-6 md:pb-28 md:pt-28 lg:px-8">
        {/* Title with accent line */}
        <div className="text-center">
          <h2 className="animate-fade-up font-serif text-3xl font-bold leading-tight text-white motion-reduce:animate-none md:text-4xl">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-3 block h-0.5 w-12 origin-center animate-grow-x bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none"
          />
        </div>

        {/* Flow */}
        <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-6">
          <Node icon={start.icon} label={start.label} delay={200} />

          <FlowArrow delay={500} />

          {/* Leadership Foundations box */}
          <div
            className="relative w-full max-w-[460px] animate-fade-up rounded-2xl border-2 border-white/90 px-4 pb-6 pt-10 motion-reduce:animate-none lg:w-auto lg:max-w-none lg:flex-1"
            style={{ "--delay": "400ms" } as React.CSSProperties}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[var(--color-off-white)] px-5 py-1.5 text-sm font-bold text-[var(--color-charcoal)] shadow-md">
              {foundations.title}
            </span>

            <ul className="grid grid-cols-3 divide-x divide-[var(--color-warm-sand)]">
              {foundations.items.map((item, index) => {
                const Icon = IconsMap[item.icon];
                if (!Icon) return null;

                return (
                  <li
                    key={item.label}
                    className="group flex flex-col items-center gap-2 px-2 text-center sm:px-4"
                  >
                    <span
                      className="inline-block animate-pop motion-reduce:animate-none"
                      style={{ "--delay": `${700 + index * 150}ms` } as React.CSSProperties}
                    >
                      <Icon
                        className="size-8 text-white transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[var(--color-warm-sand)]"
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                    </span>
                    <p className="text-xs leading-snug text-white sm:text-sm md:text-[15px]">
                      {item.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <FlowArrow delay={900} />

          <Node icon={end.icon} label={end.label} delay={1100} />
        </div>
      </div>
    </section>
  );
}