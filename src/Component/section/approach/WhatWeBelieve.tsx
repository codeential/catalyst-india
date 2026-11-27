import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { BarChart3, BookOpen, Sprout, Users } from "lucide-react";
import { approachData } from "@/data/approach";

const IconsMap: Record<string, LucideIcon> = {
  users: Users,
  book: BookOpen,
  sprout: Sprout,
  chart: BarChart3,
};

export default function WhatWeBelieve() {
  const { title, items } = approachData.beliefs;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-6 sm:px-6 md:pb-6 md:pt-10 lg:px-8">
        {/* Heading with accent line */}
        <div className="flex animate-fade-up items-center gap-4 motion-reduce:animate-none">
          <h2 className="font-serif text-4xl font-bold leading-tight text-[var(--color-charcoal)] md:text-5xl">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 h-0.5 w-14 origin-left animate-grow-x bg-[var(--color-warm-sand)] [--delay:400ms] motion-reduce:animate-none md:w-20"
          />
        </div>

        {/* Cards */}
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = IconsMap[item.icon];
            if (!Icon) return null;

            return (
              <li
                key={item.label}
                className="animate-fade-up motion-reduce:animate-none"
                style={{ "--delay": `${200 + index * 150}ms` } as React.CSSProperties}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-[var(--color-warm-sand)]/40 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                  {/* Photo */}
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--color-warm-sand)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Light sweep on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 ease-out group-hover:left-[130%] group-hover:opacity-100"
                    />
                  </div>

                  {/* Icon badge and label */}
                  <div className="flex flex-1 items-center gap-3 px-4 py-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-white)] shadow-sm transition-all duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 group-hover:bg-white">
                      <Icon
                        className="size-6 text-[var(--color-forest,#14503f)]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-snug text-[var(--color-charcoal)]">
                      {item.label}
                    </h3>
                  </div>

                  {/* Accent line along the bottom that grows on hover */}
                  <span
                    aria-hidden="true"
                    className="block h-1 w-0 bg-[var(--color-warm-sand)] transition-all duration-500 ease-out group-hover:w-full"
                  />
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}