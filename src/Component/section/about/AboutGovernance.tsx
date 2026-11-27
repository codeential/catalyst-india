import Image from "next/image";
import type { CSSProperties } from "react";
import { aboutData } from "@/data/about";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;


type Person = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

/** Founder card: portrait on top, name and role below. */
function LeaderCard({ person, ms }: { person: Person; ms: number }) {
  return (
    <li className="min-w-0">
      {/* Outer = entrance, inner = hover lift */}
      <div
        style={delay(ms)}
        className="h-full animate-fade-up motion-reduce:animate-none"
      >
        <article className="group/card flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-warm-sand)] bg-[var(--color-off-white)] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg sm:min-h-[15rem] sm:flex-row">
          {/* Photo: top band on mobile, left column from sm up */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-warm-sand)]/40 sm:aspect-auto sm:w-44 sm:shrink-0 lg:w-56">
            <Image
              src={person.image}
              alt={person.imageAlt}
              fill
              sizes="(min-width: 1024px) 14rem, (min-width: 640px) 11rem, 100vw"
              unoptimized={person.image.endsWith(".svg")}
              className="object-cover grayscale transition duration-500 group-hover/card:scale-105 group-hover/card:grayscale-0"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-[var(--color-off-white)]/40 to-transparent transition-transform duration-700 group-hover/card:translate-x-[200%]"
            />
          </div>

          {/* Name + role */}
          <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
            <h4 className="font-serif text-xl font-bold leading-tight text-[var(--color-forest,#14503f)] sm:text-2xl">
              {person.name}
            </h4>
            <span
              aria-hidden="true"
              className="mt-3 block h-0.5 w-10 rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover/card:w-20"
            />
            <p className="mt-3 leading-snug text-[var(--color-charcoal)]/75">
              {person.role}
            </p>
          </div>
        </article>
      </div>
    </li>
  );
}

/** Board member: framed square photo on the left, name + role beside it. */
function BoardMember({ person, ms }: { person: Person; ms: number }) {
  return (
    <li className="min-w-0">
      {/* Outer = entrance, inner = hover lift */}
      <div
        style={delay(ms)}
        className="animate-fade-up motion-reduce:animate-none"
      >
        <div className="group/member flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
          {/* Framed photo */}
          <div className="shrink-0 bg-[var(--color-warm-sand)]/50 p-1.5 transition-colors duration-300 group-hover/member:bg-[var(--color-warm-sand)]">
            <div className="relative size-24 overflow-hidden sm:size-28">
              <Image
                src={person.image}
                alt={person.imageAlt}
                fill
                sizes="7rem"
                unoptimized={person.image.endsWith(".svg")}
                className="object-cover grayscale transition duration-500 group-hover/member:scale-105 group-hover/member:grayscale-0"
              />
            </div>
          </div>

          {/* Name + role */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase leading-tight tracking-wide text-[var(--color-charcoal)] transition-colors duration-300 group-hover/member:text-[var(--color-forest,#14503f)] sm:text-base">
              {person.name}
            </h4>
            <p className="mt-1 text-sm text-[var(--color-charcoal)]/65">
              {person.role}
            </p>
            <span
              aria-hidden="true"
              className="mt-2 block h-0.5 w-6 rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover/member:w-14"
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function AboutGovernance() {
  const {
    title,
    text,
    documentsNote,
    leadershipTitle,
    leaders,
    boardTitle,
    board,
  } = aboutData.aboutGovernance;

  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)] pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading on top */}
        <div className="group w-fit">
          <h2
            style={delay(100)}
            className="animate-fade-up font-serif text-3xl font-bold leading-[1.1] text-[var(--color-forest,#14503f)] motion-reduce:animate-none sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <span
            aria-hidden="true"
            style={delay(400)}
            className="mt-4 block h-1 w-24 origin-left animate-grow-x rounded-full bg-[var(--color-warm-sand)] transition-[width] duration-500 group-hover:w-44 motion-reduce:animate-none"
          />
        </div>

        {/* Paragraph with divider */}
        <div className="relative mt-7 max-w-3xl pl-5 sm:pl-8">
          <span
            aria-hidden="true"
            style={delay(300)}
            className="absolute inset-y-0 left-0 w-0.5 origin-top animate-grow-y bg-[var(--color-warm-sand)] motion-reduce:animate-none"
          />
          <p
            style={delay(300)}
            className="animate-fade-up text-lg leading-relaxed text-[var(--color-charcoal)]/85 motion-reduce:animate-none"
          >
            {text}
          </p>
          {documentsNote && (
            <p
              style={delay(450)}
              className="mt-4 animate-fade-up text-sm leading-relaxed text-[var(--color-charcoal)]/65 motion-reduce:animate-none"
            >
              {documentsNote}
            </p>
          )}
        </div>

        {/* Leadership cards */}
        <div className="mt-12">
          <h3
            style={delay(500)}
            className="animate-fade-up font-serif text-xl font-bold text-[var(--color-forest,#14503f)] motion-reduce:animate-none"
          >
            {leadershipTitle}
          </h3>
          <ul className="mt-5 grid gap-4 sm:gap-6 md:grid-cols-2">
            {leaders.map((person, i) => (
              <LeaderCard key={person.name} person={person} ms={600 + i * 200} />
            ))}
          </ul>
        </div>

        {/* Board grid: full width, 3 columns from lg */}
        <div className="mt-14">
          <div className="flex items-center gap-4">
            <h3
              style={delay(500)}
              className="animate-fade-up font-serif text-xl font-bold text-[var(--color-forest,#14503f)] motion-reduce:animate-none"
            >
              {boardTitle}
            </h3>
            <span
              aria-hidden="true"
              style={delay(600)}
              className="h-px flex-1 origin-left animate-grow-x bg-[var(--color-warm-sand)] motion-reduce:animate-none"
            />
          </div>

          <ul className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
            {board.map((person, i) => (
              <BoardMember
                key={`${person.name}-${person.role}`}
                person={person}
                ms={600 + i * 90}
              />
            ))}
          </ul>
        </div>

        
      </div>
    </section>
  );
}