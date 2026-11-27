import type { CSSProperties } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactData } from "@/data/contact";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons = { map: MapPin, phone: Phone, mail: Mail } as const;

function MapPlaceholder({ label }: { label: string }) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 800 440"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <rect width="800" height="440" fill="#F8F7F3" />
      <g fill="#14503f" opacity="0.18">
        <rect x="470" y="30" width="140" height="90" rx="10" transform="rotate(-12 540 75)" />
        <rect x="520" y="250" width="170" height="110" rx="10" transform="rotate(-12 605 305)" />
        <rect x="60" y="260" width="120" height="90" rx="10" transform="rotate(-12 120 305)" />
      </g>
      <g stroke="#E8D9BF" strokeWidth="14" strokeLinecap="round" fill="none">
        <path d="M-20 140L820 60" />
        <path d="M-20 330L820 250" />
        <path d="M200 -20L260 460" />
        <path d="M440 -20L520 460" />
        <path d="M660 -20L700 460" />
      </g>
      <g stroke="#E8D9BF" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M-20 230L820 160" />
        <path d="M330 -20L380 460" />
        <path d="M560 -20L600 460" />
      </g>
      <path
        d="M400 150c-34 0-60 26-60 58 0 42 60 100 60 100s60-58 60-100c0-32-26-58-60-58z"
        fill="#14503f"
      />
      <circle cx="400" cy="206" r="20" fill="#F8F7F3" />
    </svg>
  );
}

export default function ContactDetails() {
  const { contactDetails } = contactData;
  const { map } = contactDetails;

  return (
    <section
      id="get-in-touch"
      aria-labelledby="get-in-touch-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] lg:scroll-mt-24"
    >
      <div className="site-container pb-20 pt-10 md:pb-24 md:pt-12">
        {/* Heading with accent line (line widens on hover) */}
        <div
          style={delay(0)}
          className="group/heading w-fit animate-fade-up motion-reduce:animate-none"
        >
          <h2
            id="get-in-touch-heading"
            className="font-serif text-3xl font-bold text-[color:var(--color-forest,#14503f)] md:text-4xl"
          >
            {contactDetails.heading}
          </h2>
          <div
            aria-hidden="true"
            className="mt-3 h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-all duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:transition-none"
          />
        </div>

        {/* Two columns: rows left, map right (stretches to the rows' height) */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <address className="not-italic">
            <ul className="space-y-3">
              {contactDetails.rows.map((row, i) => {
                const Icon = icons[row.icon];
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-warm-sand)]/60">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-[color:var(--color-forest,#14503f)]"
                      />
                    </span>
                    <span className="block">
                      <span className="block font-serif text-lg font-bold text-[color:var(--color-forest,#14503f)]">
                        {row.label}
                      </span>
                      {row.lines.map((line) => (
                        <span
                          key={line}
                          className="block text-[color:var(--color-charcoal)]"
                        >
                          {line}
                        </span>
                      ))}
                    </span>
                  </>
                );

                return (
                  // Outer = entrance, inner = hover
                  <li
                    key={row.id}
                    style={delay(100 + i * 100)}
                    className="animate-fade-up motion-reduce:animate-none"
                  >
                    {row.href ? (
                      <a
                        href={row.href}
                        className="group flex items-center gap-4 rounded-2xl bg-[color:var(--color-warm-sand)]/25 p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--color-warm-sand)]/45 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)] motion-reduce:transition-none"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl bg-[color:var(--color-warm-sand)]/25 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </address>

          {/* Map column */}
          <div
            style={delay(300)}
            className="flex animate-fade-up flex-col motion-reduce:animate-none"
          >
            <div className="relative aspect-[16/9] min-h-[16rem] overflow-hidden rounded-2xl bg-[color:var(--color-warm-sand)]/25 lg:aspect-auto lg:flex-1">
              {map.embedUrl ? (
                <iframe
                  src={map.embedUrl}
                  title={map.iframeTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <>
                  <MapPlaceholder label={map.placeholderLabel} />
                  <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[color:var(--color-off-white)] px-4 py-2 text-sm font-semibold shadow-md">
                    <MapPin
                      aria-hidden="true"
                      className="h-4 w-4 text-[color:var(--color-forest,#14503f)]"
                    />
                    <span className="text-[color:var(--color-charcoal)]">
                      {map.pinLabel}
                    </span>
                  </span>
                </>
              )}
            </div>

            {map.linkHref && (
              <a
                href={map.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-fit items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)]"
              >
                <span className="font-semibold underline underline-offset-4 text-[color:var(--color-forest,#14503f)]">
                  Open in Maps
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}