import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Sprout, Users, type LucideIcon } from "lucide-react";
import { workData } from "@/data/ourWork";
import TornEdge from "@/Component/ui/TornEdge";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  users: Users,
};

// Organic corner shapes; the second card mirrors the first.
const shapes = [
  "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl",
  "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl",
];

export default function OurWorkInitiatives() {
  const { heading, items } = workData.initiatives;

  return (
    <section className="relative bg-[var(--color-off-white)] pt-12 pb-28 sm:pt-16 sm:pb-32 lg:pb-36">
      <div className="site-container">
        {/* Heading with accent lines on both sides (lines show from sm up, widen on hover) */}
        <div className="group flex items-center justify-center gap-3 sm:gap-5">
          <span
            aria-hidden="true"
            className="hidden h-[3px] w-14 origin-right bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-24 sm:block animate-grow-x motion-reduce:animate-none"
            style={delay(0)}
          />
          <h2
            className="text-center font-serif text-3xl font-bold text-[var(--color-forest,#14503f)] sm:text-4xl animate-fade-up motion-reduce:animate-none"
            style={delay(100)}
          >
            {heading}
          </h2>
          <span
            aria-hidden="true"
            className="hidden h-[3px] w-14 origin-left bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-24 sm:block animate-grow-x motion-reduce:animate-none"
            style={delay(0)}
          />
        </div>

        {/* Cards fill the full container width */}
        <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 lg:gap-8">
          {items.map((item, i) => {
            const Icon = icons[item.icon] ?? Sprout;
            return (
              // Outer = entrance animation, inner link = hover transform
              <li
                key={item.id}
                className="min-w-0 animate-fade-up motion-reduce:animate-none"
                style={delay(250 + i * 150)}
              >
                <Link
                  href={item.href}
                  className={`group flex h-full flex-col overflow-hidden shadow-md transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${shapes[i % shapes.length]}`}
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-warm-sand)] sm:aspect-[16/10]">
                    <Image
                      src={item.image.src}
                      alt={item.image.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    {/* Light sweep */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-[var(--color-off-white)]/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%] motion-reduce:hidden"
                    />
                  </div>

                  {/* Green text panel with torn top edge */}
                  <div className="relative flex-1 bg-[var(--color-forest,#14503f)] px-5 pb-6 pt-3 sm:px-7">
                    <TornEdge
                      seed={21 + i * 13}
                      className="absolute inset-x-0 bottom-[calc(100%-1px)] h-6 text-[var(--color-forest,#14503f)] sm:h-8"
                    />

                    {/* <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-warm-sand)] text-[var(--color-forest,#14503f)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <h3 className="break-words font-serif text-xl font-bold leading-tight text-[var(--color-off-white)] sm:text-2xl">
                          {item.title}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-0.5 w-8 bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-16"
                        />
                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-off-white)]/85 sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="grid h-10 w-10 justify-self-end place-items-center rounded-full bg-[var(--color-warm-sand)] text-[var(--color-forest,#14503f)] transition-transform duration-300 group-hover:translate-x-1 sm:col-start-2 lg:col-start-3 lg:row-start-1"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div> */}
                                        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
                      {/* Icon: top-left */}
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-warm-sand)] text-[var(--color-forest,#14503f)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                      </span>

                      {/* Text: second row on mobile, middle column on lg */}
                      <div className="col-span-2 row-start-2 min-w-0 lg:col-span-1 lg:col-start-2 lg:row-start-1">
                        <h3 className="break-words font-serif text-xl font-bold leading-tight text-[var(--color-off-white)] sm:text-2xl">
                          {item.title}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-0.5 w-8 bg-[var(--color-warm-sand)] transition-[width] duration-500 ease-out group-hover:w-16"
                        />
                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-off-white)]/85 sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow: top-right, level with the icon */}
                      <span
                        aria-hidden="true"
                        className="col-start-2 row-start-1 grid h-10 w-10 justify-self-end place-items-center rounded-full bg-[var(--color-warm-sand)] text-[var(--color-forest,#14503f)] transition-transform duration-300 group-hover:translate-x-1 lg:col-start-3"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Torn edge into the "How we work" band */}
      <TornEdge
        seed={33}
        className="absolute inset-x-0 bottom-0 h-10 text-[var(--color-forest,#14503f)] sm:h-14 lg:h-20"
      />
    </section>
  );
}