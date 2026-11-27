import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { impactData } from "@/data/impact-stories";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function LeadershipNetwork() {
  const { heading, text, link, logo, logoAlt } = impactData.lfNetwork;

  return (
    <section
      id="leadership-network"
      aria-labelledby="lf-network-heading"
      className="bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)]"
    >
      <div className="site-container py-6 md:py-10">
        {/* Outer = entrance, inner = hover, so the transforms don't clash */}
        <div
          style={delay(0)}
          className="animate-fade-up motion-reduce:animate-none"
        >
          <div className="group/card relative overflow-hidden rounded-[var(--radius-xl)] bg-[color:var(--color-forest,#14503f)] text-[color:var(--color-off-white)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            {/* light sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover/card:translate-x-full motion-reduce:hidden"
            />

            <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
              {/* Text: heading on top, paragraph underneath */}
              <div className="lg:col-span-8">
                <div className="group/heading w-fit">
                  <h2
                    id="lf-network-heading"
                    style={delay(100)}
                    className="animate-fade-up font-serif text-2xl font-bold sm:text-3xl motion-reduce:animate-none"
                  >
                    {heading}
                  </h2>
                  <span
                    aria-hidden="true"
                    style={delay(350)}
                    className="mt-3 block h-0.5 w-full origin-left animate-grow-x bg-[color:var(--color-warm-sand)] transition-[width] duration-300 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:animate-none"
                  />
                </div>

                <p
                  style={delay(200)}
                  className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-[color:var(--color-off-white)]/85 motion-reduce:animate-none"
                >
                  {text}
                </p>

                {link.href ? (
                  <div
                    style={delay(300)}
                    className="mt-5 animate-fade-up motion-reduce:animate-none"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2"
                    >
                      <span className="text-sm font-semibold text-[color:var(--color-warm-sand)] underline-offset-4 group-hover/link:underline">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-[color:var(--color-warm-sand)] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                      />
                    </Link>
                  </div>
                ) : null}
              </div>

              {/* Logo panel: fills the right side. Outer = entrance, inner = hover */}
              <div
                style={delay(250)}
                className="animate-pop lg:col-span-4 motion-reduce:animate-none"
              >
                <div className="flex h-full min-h-32 items-center justify-center rounded-[var(--radius-lg)] bg-[color:var(--color-off-white)] p-6 transition-transform duration-300 group-hover/card:scale-[1.03] motion-reduce:transition-none">
                  <Image
                    src={logo}
                    alt={logoAlt}
                    width={400}
                    height={160}
                    className="h-auto w-full max-w-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}