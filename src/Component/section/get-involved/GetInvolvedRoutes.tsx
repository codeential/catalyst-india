import Link from "next/link";
import { ArrowRight, Building2, Handshake, HandHeart, Users } from "lucide-react";
import type { CSSProperties } from "react";
import { getInvolvedData, type RouteIcon } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<RouteIcon, typeof Handshake> = {
  partner: Handshake,
  volunteer: Users,
  csr: Building2,
  give: HandHeart,
};

const toneClasses = {
  forest: "bg-[color:var(--color-forest,#14503f)]/10",
  sand: "bg-[color:var(--color-warm-sand)]/35",
} as const;

export default function GetInvolvedRoutes() {
  const { getInvolvedRoutes } = getInvolvedData;
  const { heading, intro, items } = getInvolvedRoutes;

  return (
    <section
      id="ways"
      aria-labelledby="routes-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] py-14 md:py-20 lg:scroll-mt-24"
    >
      <div className="site-container">
        {/* Heading with accent lines beside it, widening on hover */}
        <div
          className="group/heading mx-auto flex w-fit animate-fade-up items-center gap-4 motion-reduce:animate-none"
          style={delay(0)}
        >
          <span
            aria-hidden="true"
            className="hidden h-0.5 w-10 rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-20 sm:block md:w-16 md:group-hover/heading:w-28"
          />
          <h2
            id="routes-heading"
            className="text-center font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] md:text-4xl"
          >
            {heading}
          </h2>
          <span
            aria-hidden="true"
            className="hidden h-0.5 w-10 rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-20 sm:block md:w-16 md:group-hover/heading:w-28"
          />
        </div>

        {intro && (
          <p
            className="mx-auto mt-4 max-w-2xl animate-fade-up text-center text-base text-[color:var(--color-charcoal)]/80 motion-reduce:animate-none"
            style={delay(100)}
          >
            {intro}
          </p>
        )}

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              // outer = entrance, inner Link = hover
              <li
                key={item.id}
                className="animate-fade-up motion-reduce:animate-none"
                style={delay(150 + i * 100)}
              >
                <Link
                  href={item.href}
                  className={`group/card flex h-full flex-col items-center rounded-2xl border border-[color:var(--color-warm-sand)]/60 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)] ${toneClasses[item.tone]}`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-warm-sand)]/70 transition-transform duration-300 group-hover/card:scale-110 motion-reduce:transition-none">
                    <Icon
                      aria-hidden="true"
                      className="h-8 w-8 text-[color:var(--color-forest,#14503f)]"
                    />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-bold text-[color:var(--color-forest,#14503f)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-charcoal)]/85">
                    {item.description}
                  </p>
                  <span className="mt-auto pt-5">
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/card:translate-x-1.5"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}