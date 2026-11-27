import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { approachData } from "@/data/approach";

export default function ApproachHero() {
  const { eyebrow, title, accent, description, image, imageAlt, cta } = approachData.hero;

  return (
    <section className="relative isolate flex min-h-[460px] items-center overflow-hidden lg:min-h-[540px]">
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 animate-fade-in object-cover object-[65%_center] motion-reduce:animate-none md:object-center"
      />

      {/* Overlay: darker on the left so the text stays readable */}
      <div className="absolute inset-0 -z-10 bg-black/60 md:bg-gradient-to-r md:from-black/75 md:via-black/35 md:to-transparent" />

      {/* Content */}
      <div className="mx-auto w-full max-w-[1100px] px-4 pb-28 pt-16 sm:px-6 md:pb-32 lg:px-8">
        <div className="max-w-[560px]">
          {/* Eyebrow with line that grows */}
          <div className="flex animate-fade-up items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-white [--delay:100ms] motion-reduce:animate-none sm:text-sm">
            <span>{eyebrow}</span>
            <span
              aria-hidden="true"
              className="h-0.5 w-14 origin-left animate-grow-x bg-[var(--color-warm-sand)] [--delay:400ms] motion-reduce:animate-none"
            />
          </div>

          {/* Title: second line is italic and accented */}
          <h1 className="mt-5 animate-fade-up font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white [--delay:200ms] motion-reduce:animate-none md:text-6xl lg:text-7xl">
            <span className="block">{title}</span>
            <span className="block italic text-[var(--color-warm-sand)]">
              {accent}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[400px] animate-fade-up text-base leading-relaxed text-white/90 [--delay:300ms] motion-reduce:animate-none md:text-lg">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-8 animate-fade-up [--delay:400ms] motion-reduce:animate-none">
            <Link
              href={cta.href}
              className="group inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--color-charcoal)] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-warm-sand)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {cta.label}
              <AiOutlineArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Curved bottom edge: a smooth wave, with an accent swoosh on the left */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-px z-10 block h-14 w-full md:h-20 lg:h-24"
      >
        {/* Accent swoosh that draws in */}
        <path
          d="M0 62 C140 108 300 96 470 70"
          fill="none"
          stroke="var(--color-warm-sand)"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength={1}
          className="animate-draw [stroke-dasharray:1_1] [--delay:600ms] motion-reduce:animate-none"
        />
        {/* Paper wave: its color must match the section below */}
        <path
          d="M0 120 V84 C120 112 260 108 430 82 C640 50 820 22 1020 38 C1190 52 1320 30 1440 8 V120 Z"
          className="fill-[var(--color-off-white)]"
        />
      </svg>
    </section>
  );
}