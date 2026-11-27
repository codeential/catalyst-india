import Image from "next/image";
import type { CSSProperties } from "react";
import {
  BookOpen,
  Box,
  ChefHat,
  Coffee,
  ExternalLink,
  Layers,
  MapPin,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ecosystemData, type EcosystemNode } from "@/data/our-ecosystem";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
const { ecosystemMap, ecosystemPartners } = ecosystemData;

const ICONS: Record<EcosystemNode["icon"], LucideIcon> = {
  chef: ChefHat,
  coffee: Coffee,
  box: Box,
  layers: Layers,
  users: Users,
  sprout: Sprout,
  book: BookOpen,
};

// Row 1: four cards (3 cols each). Row 2: three cards (4 cols each). Both rows fill the full width.
function spanClass(index: number, isLast: boolean) {
  if (index < 4) return "lg:col-span-3";
  return isLast ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-4";
}

export default function EcosystemPartners() {
  const { heading, intro, note, pendingLabel, linkLabel, cards } = ecosystemPartners;
  const nodeBySlug = new Map(ecosystemMap.nodes.map((n) => [n.slug, n]));

  return (
    <section
      id="ecosystem-partners"
      aria-labelledby="ecosystem-partners-heading"
      className="bg-[color:var(--color-off-white)] pt-4 pb-20 md:pt-6 md:pb-24"
    >
      <div className="site-container">
        {/* Heading + accent line, centred */}
        <div className="group/heading mx-auto flex w-fit max-w-full flex-col items-center text-center">
          <h2
            id="ecosystem-partners-heading"
            style={delay(0)}
            className="animate-fade-up font-serif text-3xl text-[color:var(--color-charcoal)] motion-reduce:animate-none md:text-5xl"
          >
            {heading}
          </h2>
          <span
            style={delay(200)}
            className="animate-grow-x mt-4 block h-1 w-full origin-center rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none motion-reduce:transition-none"
          />
        </div>

        <p
          style={delay(250)}
          className="animate-fade-up mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[color:var(--color-charcoal)]/80 motion-reduce:animate-none md:text-lg"
        >
          {intro}
        </p>

        {/* Cards */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-12">
          {cards.map((card, i) => {
            const node = nodeBySlug.get(card.slug);
            if (!node) return null;
            const Icon = ICONS[node.icon];
            const isLast = i === cards.length - 1;

            return (
              <li
                key={card.slug}
                id={card.slug}
                className={`scroll-mt-20 lg:scroll-mt-24 ${spanClass(i, isLast)}`}
              >
                {/* outer = entrance */}
                <div
                  style={delay(300 + i * 120)}
                  className="animate-fade-up h-full motion-reduce:animate-none"
                >
                  {/* inner = hover */}
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[color:var(--color-warm-sand)]/40 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:bg-[color:var(--color-warm-sand)]/60 hover:shadow-lg motion-reduce:transition-none">
                    {card.image ? (
                      <div className="relative h-40 w-full overflow-hidden md:h-44">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                        />
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[color:var(--color-off-white)]/40 transition-transform duration-1000 group-hover:translate-x-[320%] motion-reduce:transition-none"
                        />
                      </div>
                    ) : null}

                    <div className="flex flex-1 flex-col p-5">
                      {/* Icon + name */}
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-off-white)]">
                          <Icon
                            className="h-5 w-5 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
                            aria-hidden
                          />
                        </span>
                        <h3 className="font-serif text-xl leading-tight text-[color:var(--color-charcoal)]">
                          {node.name}
                        </h3>
                      </div>

                      {/* Location: own row */}
                      {node.location ? (
                        <p className="mt-3 flex items-center gap-1.5 text-sm text-[color:var(--color-charcoal)]/70">
                          <MapPin
                            className="h-4 w-4 text-[color:var(--color-forest,#14503f)]"
                            aria-hidden
                          />
                          <span>{node.location}</span>
                        </p>
                      ) : null}

                      {/* Relationship pill: own block-level row */}
                      {card.relationship ? (
                        <p className="mt-3 w-fit rounded-full bg-[color:var(--color-warm-sand)] px-3 py-1 text-xs font-semibold text-[color:var(--color-charcoal)]">
                          {card.relationship}
                        </p>
                      ) : null}

                      {card.mission ? (
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-charcoal)]/80">
                          {card.mission}
                        </p>
                      ) : null}

                      {/* Footer: link when approved, otherwise pending text */}
                      <div className="mt-auto pt-5">
                        {card.href ? (
                          <a
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${linkLabel}: ${node.name} (opens in a new tab)`}
                            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold"
                          >
                            <span className="border-b border-[color:var(--color-warm-sand)] pb-0.5 text-[color:var(--color-forest,#14503f)] transition-colors duration-300 group-hover/link:border-[color:var(--color-forest,#14503f)] motion-reduce:transition-none">
                              {linkLabel}
                            </span>
                            <ExternalLink
                              className="h-4 w-4 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                              aria-hidden
                            />
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-[color:var(--color-charcoal)]/60">
                            {pendingLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              </li>
            );
          })}
        </ul>

        <p
          style={delay(1200)}
          className="animate-fade-up mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[color:var(--color-charcoal)]/70 motion-reduce:animate-none"
        >
          {note}
        </p>
      </div>
    </section>
  );
}