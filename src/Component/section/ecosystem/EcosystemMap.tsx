import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  BookOpen,
  Box,
  ChefHat,
  Coffee,
  Layers,
  Leaf,
  MapPin,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ecosystemData, type EcosystemNode } from "@/data/our-ecosystem";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const ICONS: Record<EcosystemNode["icon"], LucideIcon> = {
  chef: ChefHat,
  coffee: Coffee,
  box: Box,
  layers: Layers,
  users: Users,
  sprout: Sprout,
  book: BookOpen,
};

// Minimal skyline: baseline, domed hall, minaret, tree | gateway, dome, tree
const SKYLINE = [
  "M20 110 H1180",
  "M60 110 V80 M60 82 C30 82 30 42 60 38 C90 42 90 82 60 82",
  "M120 110 V86 H260 V110 M150 86 C150 52 230 52 230 86 M190 56 V42",
  "M300 110 V52 M292 52 H308 M300 52 V38",
  "M800 110 V54 H940 V110 M842 110 V82 C842 56 898 56 898 82 V110 M792 54 H948 M800 46 H940",
  "M990 110 V92 H1070 V110 M1000 92 C1000 68 1060 68 1060 92 M1030 72 V60",
  "M1130 110 V82 M1130 84 C1100 84 1100 44 1130 40 C1160 44 1160 84 1130 84",
];

function NodeCard({ node, ms }: { node: EcosystemNode; ms: number }) {
  const Icon = ICONS[node.icon];
  return (
    <div
      style={delay(ms)}
      className="animate-fade-up w-full motion-reduce:animate-none lg:w-72 lg:shrink-0"
    >
      <Link
        href={`#${node.slug}`}
        className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-[color:var(--color-warm-sand)]/50 px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--color-warm-sand)]/80 hover:shadow-md motion-reduce:transition-none"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[color:var(--color-off-white)]/50 transition-transform duration-700 group-hover:translate-x-[300%] motion-reduce:transition-none"
        />
        <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--color-off-white)]">
          <Icon
            className="h-6 w-6 text-[color:var(--color-forest,#14503f)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
            aria-hidden
          />
        </span>
        <span className="relative block">
          <span className="block font-serif text-lg leading-tight text-[color:var(--color-charcoal)]">
            {node.name}
          </span>
          {node.location ? (
            <span className="mt-1 flex items-center gap-1 text-sm text-[color:var(--color-charcoal)]/70">
              <MapPin
                className="h-3.5 w-3.5 text-[color:var(--color-forest,#14503f)]"
                aria-hidden
              />
              {node.location}
            </span>
          ) : null}
        </span>
      </Link>
    </div>
  );
}

function Connector({ side, ms }: { side: "left" | "right"; ms: number }) {
  const dot = (
    <span
      aria-hidden
      className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--color-forest,#14503f)]"
    />
  );
  return (
    <span aria-hidden className="hidden flex-1 items-center lg:flex">
      {side === "right" ? dot : null}
      <span
        style={delay(ms)}
        className={`animate-grow-x h-px flex-1 border-t border-dashed border-[color:var(--color-forest,#14503f)]/50 motion-reduce:animate-none ${
          side === "left" ? "origin-left" : "origin-right"
        }`}
      />
      {side === "left" ? dot : null}
    </span>
  );
}
const { ecosystemMap } = ecosystemData;

export default function EcosystemMap() {
  const { heading, hub, note, nodes } = ecosystemMap;
  const left = nodes.filter((n) => n.side === "left");
  const right = nodes.filter((n) => n.side === "right");
  const bottom = nodes.find((n) => n.side === "bottom");

  return (
    <section
      id="ecosystem-map"
      aria-labelledby="ecosystem-map-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] pt-12 pb-20 md:pt-16 md:pb-24 lg:scroll-mt-24"
    >
      <div className="site-container">
        <h2 id="ecosystem-map-heading" className="sr-only">
          {heading}
        </h2>

        {/* Map: hub on top on mobile, 3-column diagram from lg */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-x-0 lg:gap-y-0">
          {/* Hub */}
          <div className="order-1 mb-6 md:col-span-2 lg:order-2 lg:col-span-1 lg:mx-4 lg:mb-0">
            <div
              style={delay(0)}
              className="animate-pop relative mx-auto h-60 w-60 motion-reduce:animate-none md:h-64 md:w-64"
            >
              <span
                aria-hidden
                className="animate-spin-slow pointer-events-none absolute -inset-3 rounded-full border border-dashed border-[color:var(--color-forest,#14503f)]/40 motion-reduce:animate-none"
              />
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[color:var(--color-forest,#14503f)] p-8 text-center shadow-lg transition-transform duration-500 hover:scale-105 motion-reduce:transition-none">
                {hub.logo ? (
                  <Image
                    src={hub.logo}
                    alt={hub.logoAlt}
                    width={160}
                    height={56}
                    className="mb-3 h-10 w-auto"
                  />
                ) : null}
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-warm-sand)]">
                  {hub.eyebrow}
                </span>
                <span className="mt-3 block font-serif text-xl leading-snug text-[color:var(--color-off-white)] md:text-2xl">
                  {hub.label}
                </span>
                <span className="animate-sway mt-4 block motion-reduce:animate-none">
                  <Leaf
                    className="h-7 w-7 text-[color:var(--color-warm-sand)]"
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Left nodes */}
          <ul className="order-2 flex flex-col gap-4 lg:order-1 lg:gap-8">
            {left.map((node, i) => (
              <li key={node.slug} className="flex items-center">
                <NodeCard node={node} ms={200 + i * 150} />
                <Connector side="left" ms={350 + i * 150} />
              </li>
            ))}
          </ul>

          {/* Right nodes */}
          <ul className="order-3 flex flex-col gap-4 lg:gap-8">
            {right.map((node, i) => (
              <li key={node.slug} className="flex items-center">
                <Connector side="right" ms={450 + i * 150} />
                <NodeCard node={node} ms={300 + i * 150} />
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom node */}
        {bottom ? (
          <div className="mt-4 flex flex-col items-center lg:mt-0">
            <span
              aria-hidden
              style={delay(750)}
              className="animate-grow-y hidden h-10 w-px origin-top border-l border-dashed border-[color:var(--color-forest,#14503f)]/50 motion-reduce:animate-none lg:block"
            />
            <div className="w-full max-w-sm lg:w-auto lg:max-w-none">
              <NodeCard node={bottom} ms={850} />
            </div>
          </div>
        ) : null}

        <p
          style={delay(950)}
          className="animate-fade-up mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[color:var(--color-charcoal)]/70 motion-reduce:animate-none md:text-base"
        >
          {note}
        </p>

        {/* Skyline sketch: in flow, hidden on mobile */}
        {/* <svg
          viewBox="0 0 1200 120"
          aria-hidden="true"
          className="mt-10 hidden h-auto w-full text-[color:var(--color-forest,#14503f)]/35 md:block"
        >
          {SKYLINE.map((d, i) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={delay(300 + i * 150)}
              className="animate-draw [stroke-dasharray:1_1] motion-reduce:animate-none"
            />
          ))}
        </svg> */}
      </div>
    </section>
  );
}