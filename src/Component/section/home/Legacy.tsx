import { homeData } from "@/data/home";

type LegacyItem = { name: string; year?: string };

export default function Legacy() {
  const { title, items } = homeData.legacy;
  const timeline = items as LegacyItem[];

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      <div className="site-container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10">
          {/* Heading with brush underline */}
          <div className="animate-fade-up motion-reduce:animate-none md:w-[260px] md:shrink-0">
            <h2 className="font-serif text-3xl font-bold leading-[1.15] text-[var(--color-charcoal)] md:text-4xl">
              {title}
            </h2>
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="mt-3 h-3 w-40 text-[var(--color-warm-sand)]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
            >
              <path
                d="M3 8 C30 3 55 10 85 6 C115 2 150 9 197 4"
                strokeWidth="4"
                pathLength={1}
                className="animate-draw [stroke-dasharray:1_1] [--delay:400ms] motion-reduce:animate-none"
              />
            </svg>
          </div>

          {/* Vertical divider that grows downward (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden w-px origin-top animate-grow-y self-stretch bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none md:block"
          />

          {/* Timeline */}
          <ol className="relative flex flex-1 flex-col gap-8 md:grid md:grid-cols-6 md:gap-0">
            {/* Connecting line: vertical on mobile, horizontal on desktop */}
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-[7px] top-3 w-px origin-top animate-grow-y bg-[var(--color-warm-sand)] [--delay:400ms] motion-reduce:animate-none md:bottom-auto md:left-[calc(100%/12)] md:right-[calc(100%/12)] md:top-[8px] md:h-px md:w-auto md:origin-left md:animate-grow-x"
            />

            {timeline.map((item, index) => (
              <li
                key={item.name}
                className="group relative flex items-center gap-4 md:flex-col md:gap-3"
              >
                {/* Node: outer span pops in, inner span handles hover */}
                <span
                  className="relative z-10 inline-block shrink-0 animate-pop motion-reduce:animate-none"
                  style={{ "--delay": `${600 + index * 150}ms` } as React.CSSProperties}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-[var(--color-warm-sand)] opacity-0 group-hover:animate-ping group-hover:opacity-70"
                  />
                  <span className="relative block size-4 rounded-full border-2 border-[var(--color-warm-sand)] bg-[var(--color-off-white)] transition-all duration-300 ease-out group-hover:scale-125 group-hover:bg-[var(--color-warm-sand)]" />
                </span>

                {/* Label */}
                <div
                  className="animate-fade-up md:text-center motion-reduce:animate-none"
                  style={{ "--delay": `${700 + index * 150}ms` } as React.CSSProperties}
                >
                  {item.year && (
                    <p className="text-base font-bold text-[var(--color-charcoal)] md:text-[17px]">
                      {item.year}
                    </p>
                  )}
                  <p className="text-base font-medium leading-snug text-[var(--color-charcoal)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 md:max-w-[110px] md:text-sm">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}