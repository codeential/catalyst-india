
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineTeam,
} from "react-icons/ai";
import { homeData } from "@/data/home";

export default function OurWorkToday() {
  const { title, description, items } = homeData.ourWork;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-off-white)]">
      {/* Subtle social-impact background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full border border-[var(--color-warm-sand)]/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-28 -z-10 h-48 w-48 rounded-full border border-[var(--color-forest,#14503f)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-0 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--color-warm-sand)]/20 blur-3xl"
      />

      {/* Small community accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-[18%] hidden text-[var(--color-forest,#14503f)]/10 lg:block"
      >
        <AiOutlineTeam className="size-24" />
      </div>

      <div className="site-container py-16 md:py-20 lg:py-24">
        {/* Section introduction */}
        <div className="mb-10 max-w-[500px] animate-fade-up motion-reduce:animate-none">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--color-warm-sand)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-forest,#14503f)]">
              What we do
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-[1.05] text-[var(--color-charcoal)] sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-[460px] text-base leading-7 text-[var(--color-charcoal)]/65">
              {description}
            </p>
          )}
        </div>

        {/* Work cards */}
        <ul className="grid gap-7 md:grid-cols-2 lg:gap-8">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="animate-fade-up motion-reduce:animate-none"
              style={
                {
                  "--delay": `${200 + index * 150}ms`,
                } as React.CSSProperties
              }
            >
              <Link
                href={item.href}
                className="group relative block overflow-hidden rounded-[22px] bg-[var(--color-warm-sand)] shadow-[0_12px_35px_rgba(34,43,42,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(34,43,42,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-forest,#14503f)]"
              >
                {/* Image */}
                <div className="relative h-[330px] overflow-hidden sm:h-[360px] lg:h-[390px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

                  {/* Soft warm overlay */}
                  <div className="absolute inset-0 bg-[var(--color-forest,#14503f)]/5 transition-colors duration-500 group-hover:bg-[var(--color-forest,#14503f)]/15" />

                  {/* Card number */}
                  <div className="absolute left-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-sm font-semibold text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                    <div className="max-w-[390px]">
                      <h3 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                        {item.title}
                      </h3>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm font-medium uppercase tracking-[0.14em] text-white/75">
                          Explore initiative
                        </span>

                        <span
                          aria-hidden="true"
                          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-warm-sand)] text-[var(--color-charcoal)] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:bg-white group-hover:shadow-lg"
                        >
                          <AiOutlineArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover sweep */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-[30%] w-[20%] -skew-x-12 bg-white/15 opacity-0 transition-all duration-1000 ease-out group-hover:left-[125%] group-hover:opacity-100"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Small closing accent */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-16 bg-[var(--color-warm-sand)]" />

          <AiOutlineHeart
            aria-hidden="true"
            className="size-4 text-[var(--color-forest,#14503f)]/60"
          />

          <span className="h-px flex-1 bg-[var(--color-warm-sand)]/50" />
        </div>
      </div>
    </section>
  );
}