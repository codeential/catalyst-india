import type { CSSProperties } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import TornEdge from "@/Component/ui/TornEdge";
import { contactData } from "@/data/contact";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const icons = {
  linkedin: AiFillLinkedin,
  instagram: AiFillInstagram,
  youtube: AiFillYoutube,
  facebook: AiFillFacebook,
} as const;



export default function StayConnected() {
  const { socialChannels } = contactData;
  const links = socialChannels.links;

  return (
    <section
      aria-labelledby={links.length ? "stay-connected-heading" : undefined}
      className="bg-[color:var(--color-off-white)]"
    >
      {/* Bottom padding lives here so the tear overlaps it */}
      <div className="site-container pb-20 md:pb-24">
        {links.length > 0 && (
          // Outer = entrance
          <div
            style={delay(0)}
            className="animate-fade-up motion-reduce:animate-none"
          >
            <div className="flex flex-col gap-6 rounded-3xl bg-[color:var(--color-warm-sand)]/25 p-6 md:flex-row md:items-center md:gap-8 md:px-10 md:py-8">
              <div className="group/heading w-fit">
                <h2
                  id="stay-connected-heading"
                  className="font-serif text-2xl font-bold text-[color:var(--color-forest,#14503f)] md:text-3xl"
                >
                  {socialChannels.heading}
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-3 h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-all duration-500 group-hover/heading:w-[calc(100%+4rem)] motion-reduce:transition-none"
                />
              </div>

              <div
                aria-hidden="true"
                className="hidden h-12 w-0.5 bg-[color:var(--color-warm-sand)] md:block"
              />

              <ul className="flex flex-wrap items-center gap-5">
                {links.map((link, i) => {
                  const Icon = icons[link.platform];
                  return (
                    <li
                      key={link.id}
                      style={delay(150 + i * 100)}
                      className="animate-fade-up motion-reduce:animate-none"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Catalyst India on ${link.label} (opens in a new tab)`}
                        className="group flex h-12 w-12 items-center justify-center rounded-full transition duration-300 hover:-translate-y-0.5 hover:scale-110 hover:bg-[color:var(--color-warm-sand)]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-forest,#14503f)] motion-reduce:transition-none"
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-8 w-8 text-[color:var(--color-forest,#14503f)]"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Decorative sketch: in flow, hidden below lg */}
              <div className="ml-auto hidden h-16 w-72 shrink-0 lg:block">
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Fill must match the NEXT section's background (forest-green footer) */}
      <TornEdge
        seed={11}
        className="relative z-10 -mt-8 h-8 text-[color:var(--color-forest,#14503f)] md:-mt-12 md:h-12 lg:-mt-16 lg:h-16"
      />
    </section>
  );
}