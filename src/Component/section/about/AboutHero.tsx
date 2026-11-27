import Image from "next/image";
import TornEdge from "@/Component/ui/TornEdge";
import { aboutData } from "@/data/about";

export default function AboutHero() {
  const { eyebrow, headingLine1, headingLine2, headingAccent, heroImage, imageAlt } = aboutData.hero;

  return (
    <section className="relative isolate flex min-h-[380px] items-end overflow-hidden bg-[var(--color-charcoal)] pb-20 pt-16 sm:min-h-[440px] sm:pb-24 md:items-center md:pb-24 lg:min-h-[520px] lg:pb-28">
      {/* Background photo */}
      <Image
        src={heroImage}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        unoptimized={heroImage.endsWith(".svg")}
        className="-z-20 animate-fade-in object-cover object-[72%_center] [--delay:0ms] motion-reduce:animate-none"
      />

      {/* Readability overlay: bottom-up on mobile, left-to-right from md up */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-[var(--color-charcoal)]/85 via-[var(--color-charcoal)]/40 to-transparent md:bg-linear-to-r md:from-[var(--color-charcoal)]/75 md:via-[var(--color-charcoal)]/30 md:to-transparent"
      />

      {/* Content */}
      <div className="site-container w-full">
        <div className="max-w-xl">
          {/* Eyebrow with growing line */}
          <div className="flex items-center gap-4">
            <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-off-white)] [--delay:100ms] motion-reduce:animate-none sm:text-sm">
              {eyebrow}
            </p>
            <span
              aria-hidden="true"
              className="h-px w-12 origin-left animate-grow-x bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none sm:w-20"
            />
          </div>

          {/* Headline */}
          <h1 className="mt-4 animate-fade-up text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-off-white)] [--delay:250ms] motion-reduce:animate-none sm:text-5xl lg:text-6xl">
            <span className="block">{headingLine1}</span>
            <span className="block">
              {headingLine2}{" "}
              <em className="font-serif font-medium italic text-[var(--color-warm-sand)]">
                {headingAccent}
              </em>
            </span>
          </h1>

          {/* CSS-only accent swoosh (no SVG) */}
          <span
            aria-hidden="true"
            className="mt-3 block h-4 w-44 origin-left -rotate-3 animate-grow-x rounded-[100%] border-b-[5px] border-[var(--color-warm-sand)] [--delay:900ms] motion-reduce:animate-none sm:w-60 lg:w-72"
          />
        </div>
      </div>

      {/* Torn edge into the next section */}
      <TornEdge
        seed={11}
        className="absolute inset-x-0 -bottom-px z-10 h-10 text-[var(--color-off-white)] sm:h-14 lg:h-20"
      />
    </section>
  );
}