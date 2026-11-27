import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { approachData } from "@/data/approach";

export default function ApproachCTA() {
  const { title, image, imageAlt, primaryCta, secondaryCta } = approachData.cta;

  return (
    <section className="relative isolate flex min-h-[360px] items-center justify-center overflow-hidden bg-[var(--color-forest,#14503f)] md:min-h-[420px]">
      {/* Background image: change the path in approach.ts */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        priority={false}
        className="-z-20 animate-fade-in object-cover object-bottom motion-reduce:animate-none"
      />

      {/* Overlay: keeps the heading readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/40" />

      {/* Soft glow that breathes, like the setting sun */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[68%] -z-10 hidden size-72 animate-float rounded-full bg-[var(--color-warm-sand)] opacity-30 blur-3xl motion-reduce:animate-none md:block"
      />

      {/* Wavy top: fill must match the section above (Building Bridges) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -top-px z-10 block h-10 w-full md:h-14 lg:h-20"
      >
        <path
          d="M0 0 H1440 V28 C1320 8 1180 6 1020 30 C840 58 660 78 480 58 C320 40 160 30 0 62 Z"
          className="fill-[var(--color-off-white)]"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 pb-14 pt-20 text-center sm:px-6 md:pb-16 md:pt-24 lg:px-8">
        <h2 className="animate-fade-up font-serif text-3xl font-bold leading-tight text-white drop-shadow-md motion-reduce:animate-none md:text-5xl">
          {title}
        </h2>

        <span
          aria-hidden="true"
          className="mx-auto mt-4 block h-0.5 w-14 origin-center animate-grow-x bg-[var(--color-warm-sand)] [--delay:350ms] motion-reduce:animate-none"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span
            className="inline-block animate-pop motion-reduce:animate-none"
            style={{ "--delay": "450ms" } as React.CSSProperties}
          >
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center rounded-lg bg-[var(--color-warm-sand)] px-7 py-3.5 text-sm font-semibold text-[var(--color-charcoal)] shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {primaryCta.label}
              <AiOutlineArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </span>

          <span
            className="inline-block animate-pop motion-reduce:animate-none"
            style={{ "--delay": "600ms" } as React.CSSProperties}
          >
            <Link
              href={secondaryCta.href}
              className="group inline-flex items-center rounded-lg border-2 border-white/40 bg-black/40 px-7 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[var(--color-charcoal)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {secondaryCta.label}
              <AiOutlineHeart className="ml-2 size-4 transition-transform duration-300 group-hover:scale-125" />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}