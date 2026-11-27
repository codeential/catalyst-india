import Link from "next/link";
import { homeData } from "@/data/home";
import Skyline from "@/Component/section/home/Skyline";

export default function BuildGreatCity() {
  const { title, primaryCta, secondaryCta } = homeData.cta;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)]">
      {/* Skyline silhouette in cream tones */}
      <Skyline className="text-[var(--color-warm-sand)] opacity-70" />

      <div className="relative mx-auto max-w-[1100px] px-4 pb-28 pt-12 text-center sm:px-6 md:pb-16 md:pt-16 lg:px-8">
        <h2 className="animate-fade-up text-2xl font-bold text-[var(--color-forest,#14503f)] motion-reduce:animate-none md:text-3xl">
          {title}
        </h2>

        <div className="mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-4 [--delay:150ms] motion-reduce:animate-none">
          <Link
            href={primaryCta.href}
            className="inline-flex min-w-[140px] items-center justify-center rounded-lg border-2 border-[var(--color-forest,#14503f)] bg-[var(--color-forest,#14503f)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-transparent hover:text-[var(--color-forest,#14503f)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-forest,#14503f)]"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="inline-flex min-w-[140px] items-center justify-center rounded-lg border-2 border-[var(--color-forest,#14503f)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-forest,#14503f)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-forest,#14503f)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-forest,#14503f)]"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}