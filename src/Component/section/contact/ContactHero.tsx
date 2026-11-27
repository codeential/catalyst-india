import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { contactData } from "@/data/contact";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function ContactHero() {
  const { contactHero } = contactData;

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden bg-[color:var(--color-forest,#14503f)]"
    >
      {/* Photo layer: desktop only, so it never crowds text on mobile */}
      <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
        <Image
          src={contactHero.image}
          alt={contactHero.imageAlt}
          fill
          sizes="62vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-[color:var(--color-forest,#14503f)] via-[color:var(--color-forest,#14503f)]/60 to-transparent"
        />
      </div>

      <div className="site-container relative pb-20 pt-12 md:pb-24 md:pt-16">
        <div className="max-w-xl lg:min-h-[22rem]">
          {/* Eyebrow row (block-level) */}
          <div
            style={delay(0)}
            className="flex animate-fade-in items-center gap-3 motion-reduce:animate-none"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-off-white)]">
              {contactHero.eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="h-0.5 w-12 bg-[color:var(--color-warm-sand)]"
            />
          </div>

          {/* Heading (block-level, below the eyebrow) */}
          <div
            style={delay(100)}
            className="group/heading mt-4 w-fit animate-fade-up motion-reduce:animate-none"
          >
            <h1
              id="contact-hero-heading"
              className="font-serif text-4xl font-bold leading-tight text-[color:var(--color-off-white)] md:text-5xl lg:text-6xl"
            >
              <span className="block">{contactHero.headingLine}</span>
              <span className="block italic text-[color:var(--color-warm-sand)]">
                {contactHero.headingAccent}
              </span>
            </h1>
            <div
              aria-hidden="true"
              className="mt-3 h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-all duration-500 group-hover/heading:w-[calc(100%+4rem)]"
            />
          </div>

          <p
            style={delay(250)}
            className="mt-6 max-w-md animate-fade-up text-base text-[color:var(--color-off-white)] md:text-lg motion-reduce:animate-none"
          >
            {contactHero.subheading}
          </p>

          {/* Outer = entrance, inner = hover */}
          <div
            style={delay(400)}
            className="mt-8 animate-fade-up motion-reduce:animate-none"
          >
            <Link
              href={contactHero.cta.href}
              className="group inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-off-white)] px-6 py-3 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-warm-sand)] motion-reduce:transition-none"
            >
              <span className="font-semibold text-[color:var(--color-charcoal)]">
                {contactHero.cta.label}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 text-[color:var(--color-charcoal)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Fill must match the NEXT section's background (off-white here) */}
      <TornEdge
        seed={7}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-off-white)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}