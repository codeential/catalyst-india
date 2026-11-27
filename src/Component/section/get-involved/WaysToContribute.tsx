import { Coins, GraduationCap, Package, Users } from "lucide-react";
import type { CSSProperties } from "react";
import { getInvolvedData, type ContributeIcon } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<ContributeIcon, typeof Users> = {
  people: Users,
  skills: GraduationCap,
  resources: Package,
  funding: Coins,
};

/* Minimal India Gate line art; each path draws itself in */
const gatePaths = [
  "M8 92 H112",
  "M35 92 V40 H85 V92",
  "M30 40 V32 H90 V40",
  "M42 32 V26 H78 V32",
  "M52 92 V62 A8 8 0 0 1 68 62 V92",
];

export default function WaysToContribute() {
  const { waysToContribute } = getInvolvedData;
  const { heading, items } = waysToContribute;

  return (
    <section
      aria-labelledby="contribute-heading"
      className="bg-[color:var(--color-off-white)] pb-14 md:pb-20"
    >
      <div className="site-container">
        <div className="flex flex-col gap-8 rounded-3xl bg-[color:var(--color-forest,#14503f)] px-6 py-8 shadow-lg md:px-10 md:py-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Title block */}
          <div
            className="group/heading w-fit shrink-0 animate-fade-up motion-reduce:animate-none"
            style={delay(0)}
          >
            <h2
              id="contribute-heading"
              className="font-serif text-3xl font-bold text-[color:var(--color-off-white)] md:text-4xl lg:max-w-[11ch]"
            >
              {heading}
            </h2>
            <span
              aria-hidden="true"
              className="mt-4 block h-0.5 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)]"
            />
          </div>

          {/* Four items: 2x2 on mobile, one row with dividers on desktop */}
          <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[color:var(--color-warm-sand)]/40">
            {items.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                // outer = entrance, inner = hover
                <li
                  key={item.id}
                  className="animate-fade-up motion-reduce:animate-none"
                  style={delay(150 + i * 100)}
                >
                  <div className="group/item flex flex-col items-center px-2 text-center transition duration-300 hover:-translate-y-1 lg:px-4">
                    <Icon
                      aria-hidden="true"
                      className="h-9 w-9 text-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover/item:scale-110 motion-reduce:transition-none"
                    />
                    <h3 className="mt-3 font-serif text-lg font-bold text-[color:var(--color-off-white)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-[color:var(--color-off-white)]/80">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          
        </div>
      </div>
    </section>
  );
}