import type { CSSProperties } from "react";
import { BookOpen, Store, Users, type LucideIcon } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { ecosystemData } from "@/data/our-ecosystem";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
const { ecosystemShared } = ecosystemData;

const ICONS: Record<string, LucideIcon> = {
  store: Store,
  book: BookOpen,
  users: Users,
};

export default function EcosystemShared() {
  const { headingStart, headingAccent, intro, items } = ecosystemShared;

  return (
    <section
      aria-labelledby="ecosystem-shared-heading"
      className="relative bg-[color:var(--color-off-white)] "
    >
      <div className="site-container">
        {/* Heading on top, accent line widens on hover */}
        <div className="group/heading w-fit max-w-full">
          <h2
            id="ecosystem-shared-heading"
            style={delay(0)}
            className="animate-fade-up font-serif text-3xl font-bold leading-tight text-[color:var(--color-forest,#14503f)] motion-reduce:animate-none md:text-5xl"
          >
            {headingStart}
            <span className="block">{headingAccent}</span>
          </h2>
          <span
            style={delay(200)}
            className="animate-grow-x mt-4 block h-1 w-full origin-left rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none motion-reduce:transition-none"
          />
        </div>

        <p
          style={delay(250)}
          className="animate-fade-up mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--color-charcoal)]/80 motion-reduce:animate-none md:text-lg"
        >
          {intro}
        </p>

        {/* Three themes: full width, dividers between */}
        <ul className="mt-10 grid grid-cols-1 divide-y divide-[color:var(--color-warm-sand)] rounded-2xl bg-[color:var(--color-warm-sand)]/30 md:mt-12 md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.label}>
                {/* outer = entrance */}
                <div
                  style={delay(350 + i * 150)}
                  className="animate-fade-up h-full motion-reduce:animate-none"
                >
                  {/* inner = hover */}
                  <div className="group flex h-full flex-col items-center px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none md:py-10">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                      {Icon ? (
                        <Icon
                          className="h-8 w-8 text-[color:var(--color-forest,#14503f)]"
                          aria-hidden
                        />
                      ) : null}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-bold text-[color:var(--color-forest,#14503f)] md:text-2xl">
                      {item.label}
                    </h3>
                    <span
                      aria-hidden
                      className="mt-3 block h-1 w-12 rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover:w-24 motion-reduce:transition-none"
                    />
                    {item.description ? (
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-charcoal)]/80">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Edge fill = next section background (forest green closing CTA) */}
      <TornEdge
        seed={25}
        className="relative z-10 mt-12  h-8 text-[color:var(--color-forest,#14503f)] md:mt-16 md:h-12 lg:h-16"
      />
    </section>
  );
}