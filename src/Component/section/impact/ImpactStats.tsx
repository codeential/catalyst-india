import type { CSSProperties } from "react";
import { BookOpen, Handshake, Sprout, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<string, LucideIcon> = {
  users: Users,
  handshake: Handshake,
  sprout: Sprout,
  book: BookOpen,
};

export default function ImpactStats() {
  const { heading, items } = impactData.impactStats;

  return (
    <section
      id="impact"
      aria-labelledby="impact-stats-heading"
      className="relative bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)]"
    >
      <div className="site-container pb-20 pt-10 md:pb-24 md:pt-14">
        {/* Heading row: heading on top-left, India Gate sketch fills the right */}
        <div className="flex items-end justify-between gap-6">
          <div className="group/heading">
            <h2
              id="impact-stats-heading"
              style={delay(0)}
              className="animate-fade-up font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] sm:text-4xl motion-reduce:animate-none"
            >
              {heading}
            </h2>
            <span
              aria-hidden="true"
              style={delay(250)}
              className="mt-3 block h-0.5 w-16 origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/heading:w-32 motion-reduce:animate-none"
            />
          </div>

         
        </div>

        {/* Cards fill the full container width */}
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, i) => {
            const Icon = icons[item.icon] ?? Users;
            return (
              <li
                key={item.id}
                style={delay(150 + i * 120)}
                className="animate-fade-up motion-reduce:animate-none"
              >
                {/* Outer = entrance, inner = hover, so the transforms don't clash */}
                <div className="group/card relative flex h-full flex-col items-center overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--color-warm-sand)]/40 px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  {/* light sweep */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/card:translate-x-full motion-reduce:hidden"
                  />

                  <span className="relative flex size-12 items-center justify-center rounded-full bg-[color:var(--color-off-white)] text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/card:scale-110 motion-reduce:transition-none">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>

                  {item.value ? (
                    <p className="relative mt-4 font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)]">
                      {item.value}
                    </p>
                  ) : null}

                  <h3
                    className={`relative font-serif text-lg font-bold leading-snug text-[color:var(--color-forest,#14503f)] ${
                      item.value ? "mt-1" : "mt-4"
                    }`}
                  >
                    {item.label}
                  </h3>

                  {/* accent line widens on card hover */}
                  <span
                    aria-hidden="true"
                    className="relative mt-3 block h-0.5 w-8 bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/card:w-16 motion-reduce:transition-none"
                  />

                  {!item.value ? (
                    <p className="relative mt-3 text-sm text-[color:var(--color-charcoal)]/70">
                      {item.status}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Torn edge: fill = the next section's background (forest green, Our Journey).
          In flow, overlapping this section by its own height. */}
      <TornEdge
        seed={23}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-forest,#14503f)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}