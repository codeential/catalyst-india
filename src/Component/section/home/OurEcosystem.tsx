import Image from "next/image";
import { homeData } from "@/data/home";

type EcosystemItem = {
  name: string; // used for alt text / aria only (not displayed)
  logo?: string; // e.g. '/images/ecosystem/redmoon-bakery.png'
  href?: string; // optional external site
};

function Logo({ item }: { item: EcosystemItem }) {
  const content = (
    <div className="relative size-20 shrink-0 transition-all duration-300 ease-out hover:scale-110 md:size-24">
      {item.logo ? (
        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          fill
          sizes="96px"
          className="object-contain opacity-70 grayscale transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0"
        />
      ) : (
        // Square placeholder until the real logo is added
        <div
          role="img"
          aria-label={`${item.name} logo`}
          className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-warm-sand)] bg-white/70 text-[var(--color-warm-sand)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
      )}
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.name} (opens in a new tab)`}
        className="block shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-charcoal)]"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function OurEcosystem() {
  const { title, description, items } = homeData.ourEcosystem;
  const ecosystem = items as EcosystemItem[];

  // If there are only a few logos, repeat them so one "group" is always
  // wider than the screen (otherwise a gap appears while scrolling).
  const MIN_ITEMS_PER_GROUP = 16; // ~3200px wide, enough for ultrawide screens
  const repeats = Math.max(1, Math.ceil(MIN_ITEMS_PER_GROUP / ecosystem.length));
  const group = Array.from({ length: repeats }).flatMap(() => ecosystem);

  // Keep the same scroll speed no matter how many logos there are
  const SECONDS_PER_LOGO = 3;
  const duration = `${group.length * SECONDS_PER_LOGO}s`;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      <div className="site-container py-12 md:py-16">
        {/* Heading + description */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <div className="animate-fade-up motion-reduce:animate-none md:w-[260px] md:shrink-0">
            <h2 className="font-serif text-3xl font-bold leading-[1.15] text-[var(--color-charcoal)] md:text-4xl">
              {title}
            </h2>
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="mt-3 h-3 w-36 text-[var(--color-warm-sand)]"
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

          <div
            aria-hidden="true"
            className="hidden w-px origin-top animate-grow-y self-stretch bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none md:block"
          />

          <p className="max-w-[560px] animate-fade-up text-base leading-relaxed text-[var(--color-charcoal)] [--delay:200ms] motion-reduce:animate-none md:text-lg">
            {description}
          </p>
        </div>
      </div>

      {/* Marquee (full-bleed, edges fade out) */}
      <div
        className="group relative pb-12 md:pb-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        role="region"
        aria-label="Our partners and ecosystem"
      >
        <div
          className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]"
          style={{ animationDuration: duration }}
        >
          {/* Group 1: real content */}
          <ul className="flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16">
            {group.map((item, i) => (
              <li key={`a-${item.name}-${i}`}>
                <Logo item={item} />
              </li>
            ))}
          </ul>

          {/* Group 2: identical copy for the seamless loop (hidden from screen readers) */}
          <ul
            aria-hidden="true"
            className="flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16"
          >
            {group.map((item, i) => (
              <li key={`b-${item.name}-${i}`}>
                <div className="pointer-events-auto" tabIndex={-1}>
                  <Logo item={{ ...item, href: undefined }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
