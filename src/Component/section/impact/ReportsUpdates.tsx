import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ClipboardList, FileText, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons: Record<string, LucideIcon> = {
  file: FileText,
  clipboard: ClipboardList,
  news: Newspaper,
};

const cardBase =
  "group/card relative flex h-full items-center gap-4 overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--color-warm-sand)]/40 p-5 transition-all duration-300 motion-reduce:transition-none";

export default function ReportsUpdates() {
  const { heading, viewAll, items } = impactData.reportsUpdates;

  return (
    <section
      id="reports"
      aria-labelledby="reports-heading"
      className="relative bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)]"
    >
      <div className="site-container pb-20 pt-6 md:pb-24 md:pt-8">
        {/* Heading row: heading on top-left, link fills the right */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="group/heading w-fit">
            <h2
              id="reports-heading"
              style={delay(0)}
              className="animate-fade-up font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] sm:text-4xl motion-reduce:animate-none"
            >
              {heading}
            </h2>
            <span
              aria-hidden="true"
              style={delay(250)}
              className="mt-3 block h-0.5 w-full origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none"
            />
          </div>

          {viewAll.href ? (
            <div
              style={delay(200)}
              className="animate-fade-up motion-reduce:animate-none"
            >
              <Link
                href={viewAll.href}
                className="group/all inline-flex items-center gap-2"
              >
                <span className="text-sm font-semibold text-[color:var(--color-forest,#14503f)] underline-offset-4 group-hover/all:underline">
                  {viewAll.label}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/all:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </div>
          ) : null}
        </div>

        {/* Cards fill the full container width */}
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item, i) => {
            const Icon = icons[item.icon] ?? FileText;

            const content = (
              <>
                {/* light sweep */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/card:translate-x-full motion-reduce:hidden"
                />

                {/* Framed icon square */}
                <span className="relative flex size-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--border-strong)] bg-[color:var(--color-off-white)] text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover/card:scale-110 motion-reduce:transition-none">
                  <Icon aria-hidden="true" className="size-6" />
                </span>

                <div className="relative min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-bold leading-snug text-[color:var(--color-forest,#14503f)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-[color:var(--color-charcoal)]/75">
                    {item.text}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-0.5 w-8 bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/card:w-16 motion-reduce:transition-none"
                  />
                </div>

                {item.href ? (
                  <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover/card:translate-x-1 motion-reduce:transition-none">
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-[color:var(--color-charcoal)]"
                    />
                  </span>
                ) : (
                  <span className="relative shrink-0 rounded-full bg-[color:var(--color-off-white)] px-3 py-1 text-xs font-semibold text-[color:var(--color-charcoal)]/70">
                    Coming soon
                  </span>
                )}
              </>
            );

            return (
              <li
                key={item.id}
                style={delay(150 + i * 120)}
                className="animate-fade-up motion-reduce:animate-none"
              >
                {/* Outer li = entrance, inner card = hover, so the transforms don't clash */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`${cardBase} hover:-translate-y-1.5 hover:shadow-lg motion-reduce:hover:translate-y-0`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className={cardBase}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Torn edge: fill = the next section's background (warm sand, closing CTA).
          In flow, overlapping this section by its own height. */}
      <TornEdge
        seed={47}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-warm-sand)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}