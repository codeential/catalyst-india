import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Heart } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { aboutData } from "@/data/about";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function AboutCta() {
  const { title, text, primaryCta, secondaryCta, image, imageAlt } = aboutData.aboutCta;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-warm-sand)]">
      {/* Background photo */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        unoptimized={image.endsWith(".svg")}
        className="-z-20 animate-fade-in object-cover object-bottom [--delay:0ms] motion-reduce:animate-none"
      />

      {/* Soft wash so dark text stays readable over any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-[var(--color-off-white)]/85 via-[var(--color-off-white)]/45 to-transparent"
      />

      <div className="mx-auto max-w-4xl px-5 pb-28 pt-24 text-center sm:px-8 sm:pb-36 sm:pt-28 lg:pb-44 lg:pt-32">
        <h2
          style={delay(100)}
          className="animate-fade-up font-serif text-3xl font-bold leading-tight text-[var(--color-charcoal)] motion-reduce:animate-none sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>

        {/* Accent line, centered */}
        <span
          aria-hidden="true"
          style={delay(350)}
          className="mx-auto mt-4 block h-1 w-24 origin-center animate-grow-x rounded-full bg-[var(--color-forest,#14503f)] motion-reduce:animate-none"
        />

        <p
          style={delay(300)}
          className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-[var(--color-charcoal)]/80 motion-reduce:animate-none"
        >
          {text}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary button: outer span = entrance, Link = hover */}
          <span
            style={delay(500)}
            className="inline-block animate-pop motion-reduce:animate-none"
          >
            <Link
              href={primaryCta.href}
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[var(--color-forest,#14503f)] px-7 py-3 font-semibold text-[var(--color-off-white)] shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest,#14503f)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-[var(--color-off-white)]/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[200%]"
              />
              <span className="relative">{primaryCta.label}</span>
              <ArrowRight
                aria-hidden="true"
                className="relative size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Link>
          </span>

          {/* Secondary button */}
          <span
            style={delay(650)}
            className="inline-block animate-pop motion-reduce:animate-none"
          >
            <Link
              href={secondaryCta.href}
              className="group/btn inline-flex items-center gap-2 rounded-md border-2 border-[var(--color-forest,#14503f)] bg-[var(--color-off-white)]/60 px-7 py-[10px] font-semibold text-[var(--color-forest,#14503f)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-forest,#14503f)] hover:text-[var(--color-off-white)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest,#14503f)]"
            >
              <span>{secondaryCta.label}</span>
              <Heart
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/btn:scale-125"
              />
            </Link>
          </span>
        </div>
      </div>

      {/* Top edge: fill = AboutGovernance background */}
      <TornEdge
        seed={67}
        className="absolute inset-x-0 -top-px z-10 h-10 rotate-180 text-[var(--color-off-white)] sm:h-14 lg:h-16"
      />
    </section>
  );
}