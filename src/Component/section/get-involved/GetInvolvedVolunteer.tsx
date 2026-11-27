import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart } from "lucide-react";
import type { CSSProperties } from "react";
import TornEdge from "@/Component/ui/TornEdge";
import { getInvolvedData } from "@/data/get-involved";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function GetInvolvedVolunteer() {
  const { volunteer } = getInvolvedData;
  const { heading, description, note, cta, image } = volunteer;

  return (
    <section
      id="volunteer"
      aria-labelledby="volunteer-heading"
      className="relative scroll-mt-20 bg-[color:var(--color-off-white)] lg:scroll-mt-24"
    >
      <div className="site-container pb-20 md:pb-24">
        {/* outer = entrance, inner = hover */}
        <div className="animate-fade-up motion-reduce:animate-none" style={delay(0)}>
          <div className="group/panel grid overflow-hidden rounded-3xl border border-[color:var(--color-warm-sand)]/60 bg-[color:var(--color-warm-sand)]/30 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
            {/* Image */}
            <div className="relative min-h-56 sm:min-h-72">
              <Image
                src={image.src}
                alt={image.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover/panel:scale-105 motion-reduce:transition-none"
              />
            </div>

            {/* Text side: icon, divider, then heading / paragraph / button */}
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 md:p-10">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-warm-sand)] shadow-md transition-transform duration-300 group-hover/panel:scale-105 motion-reduce:transition-none">
                <HandHeart
                  aria-hidden="true"
                  className="h-10 w-10 text-[color:var(--color-forest,#14503f)]"
                />
              </span>

              <span
                aria-hidden="true"
                className="hidden w-px self-stretch bg-[color:var(--color-warm-sand)] sm:block"
              />

              <div>
                <div className="group/heading w-fit">
                  <h2
                    id="volunteer-heading"
                    className="font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] md:text-4xl"
                  >
                    {heading}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-0.5 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 group-hover/heading:w-[calc(100%+4rem)]"
                  />
                </div>

                <p className="mt-4 max-w-md text-base leading-relaxed text-[color:var(--color-charcoal)]/85">
                  {description}
                </p>
                {note && (
                  <p className="mt-3 max-w-md text-sm italic leading-relaxed text-[color:var(--color-charcoal)]/70">
                    {note}
                  </p>
                )}

                <Link
                  href={cta.href}
                  className="group/btn mt-6 inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-forest,#14503f)] px-6 py-3 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)]"
                >
                  <span className="text-sm font-semibold text-[color:var(--color-off-white)]">
                    {cta.label}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-[color:var(--color-off-white)] transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fill = NEXT section's background (Section 7, closing CTA, forest green) */}
      <TornEdge
        seed={34}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-forest,#14503f)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}