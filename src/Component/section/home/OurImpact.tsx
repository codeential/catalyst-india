// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import type { LucideIcon } from "lucide-react";
// import { BarChart3, Users, Heart, Sprout, Play } from "lucide-react";
// import { homeData } from "@/data/home";

// const IconsMap: Record<string, LucideIcon> = {
//   users: Users,
//   heart: Heart,
//   sprout: Sprout,
// };

// export default function OurImpact() {
//   const { title, stats, video } = homeData.impact;
//   const [playing, setPlaying] = useState(false);

//   return (
//     <section className="bg-[var(--color-off-white)]">
//       <div className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
//         <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
//           {/* Stats card */}
//           <div className="animate-fade-up rounded-2xl bg-[var(--color-forest,#14503f)] p-6 shadow-md motion-reduce:animate-none md:flex md:flex-col md:justify-center md:p-8">
//             <div className="flex items-center gap-3">
//               <BarChart3
//                 className="size-6 text-[var(--color-warm-sand)]"
//                 aria-hidden="true"
//               />
//               <h2 className="text-4xl font-bold text-white">{title}</h2>
//             </div>

//             <ul className="mt-6 grid grid-cols-3 divide-x divide-white/20">
//               {stats.map((stat) => {
//                 const Icon = IconsMap[stat.icon];
//                 if (!Icon) return null;

//                 // "People reached" -> "People" + "reached"
//                 const [firstLine, ...restWords] = stat.label.split(" ");

//                 return (
//                   <li
//                     key={stat.label}
//                     className="flex flex-col items-center gap-2 px-2 text-center sm:px-4"
//                   >
//                     <Icon
//                       className="size-9 text-[var(--color-warm-sand)]"
//                       strokeWidth={1.5}
//                       aria-hidden="true"
//                     />
//                     {stat.value && (
//                       <span className="text-3xl font-bold text-white">
//                         {stat.value}
//                       </span>
//                     )}
//                     <span className="text-sm leading-snug text-white sm:text-base">
//                       {firstLine}
//                       <br />
//                       {restWords.join(" ")}
//                     </span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* Video */}
//           <div className="relative min-h-[220px] animate-fade-up overflow-hidden rounded-2xl bg-black shadow-md [--delay:150ms] motion-reduce:animate-none md:min-h-[260px]">
//             {playing && video.youtubeId ? (
//               <iframe
//                 className="absolute inset-0 h-full w-full"
//                 src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
//                 title={video.title}
//                 allow="autoplay; encrypted-media; picture-in-picture"
//                 allowFullScreen
//               />
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => video.youtubeId && setPlaying(true)}
//                 aria-label={`Play video: ${video.title}`}
//                 className="group absolute inset-0 block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-warm-sand)]"
//               >
//                 <Image
//                   src={video.thumbnail}
//                   alt={video.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 550px"
//                   className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                 />
//                 <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
//                 <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 ring-2 ring-white transition-transform duration-300 group-hover:scale-110">
//                   <Play
//                     className="ml-1 size-7 fill-white text-white"
//                     aria-hidden="true"
//                   />
//                 </span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Handshake, Heart, Play, Sprout, Users } from "lucide-react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { homeData } from "@/data/home";
import TornEdge from "@/Component/ui/TornEdge";

const IconsMap: Record<string, LucideIcon> = {
  users: Users,
  heart: Heart,
  sprout: Sprout,
  book: BookOpen,
  handshake: Handshake,
};

type ImpactData = {
  title: string;
  photo?: string;
  stats: { icon: string; label: string; value?: string }[];
  video: { thumbnail?: string; youtubeId?: string; title: string };
  story?: {
    title: string;
    description: string;
    href?: string;
    linkLabel?: string;
  };
};

export default function OurImpact() {
  const { title, photo, stats, video, story } = homeData.impact as ImpactData;
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-warm-sand)]/25">
      {/* Torn edge, top: paper color must match the section above */}
      <TornEdge
        seed={21}
        className="absolute inset-x-0 -top-px z-10 h-8 rotate-180 text-[var(--color-off-white)] md:h-12"
      />

      {/* Decorative: slow dashed ring and floating dots */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -right-20 top-24 hidden size-72 animate-spin-slow text-[var(--color-warm-sand)] opacity-70 motion-reduce:animate-none md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 5"
        strokeLinecap="round"
      >
        <circle cx="50" cy="50" r="46" />
      </svg>
      <span
        aria-hidden="true"
        className="absolute left-[8%] top-24 size-3 animate-float rounded-full bg-[var(--color-warm-sand)] opacity-70 motion-reduce:animate-none"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-[46%] hidden size-2.5 animate-float rounded-full bg-[var(--color-warm-sand)] opacity-60 [animation-delay:2s] motion-reduce:animate-none md:block"
      />

      {/* Cut-out photo, bottom left (only when `photo` is set) */}
      {photo && (
        <div className="absolute bottom-0 left-0 z-0 hidden h-[88%] w-[min(22vw,290px)] animate-fade-in overflow-hidden rounded-tr-[48px] motion-reduce:animate-none lg:block">
          <Image
            src={photo}
            alt=""
            fill
            sizes="290px"
            aria-hidden="true"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="site-container relative z-10 pb-14 pt-20 md:pb-20 md:pt-28">
  <div
    className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12 ${
      photo ? "lg:pl-[320px]" : ""
    }`}
  >
          {/* Heading + stats */}
          <div className="flex-1">
            <div className="animate-fade-up motion-reduce:animate-none">
              <h2 className="font-serif text-3xl font-bold leading-tight text-[var(--color-charcoal)] md:text-4xl">
                {title}
              </h2>
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="mt-3 h-3 w-40 text-[var(--color-warm-sand)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
              >
                <path
                  d="M3 8 C30 3 55 10 85 6 C115 2 150 9 197 4"
                  strokeWidth="4"
                  pathLength={1}
                  className="animate-draw [stroke-dasharray:1_1] [--delay:400ms] motion-reduce:animate-none"
                />
              </svg>
            </div>

            <ul className="mt-10 grid grid-cols-3 divide-x divide-[var(--color-warm-sand)]">
              {stats.map((stat, index) => {
                const Icon = IconsMap[stat.icon];
                if (!Icon) return null;

                return (
                  <li
                    key={stat.label}
                    className="group animate-fade-up px-2 text-center motion-reduce:animate-none sm:px-5"
                    style={{ "--delay": `${300 + index * 150}ms` } as React.CSSProperties}
                  >
                    <span
                      className="inline-block animate-pop motion-reduce:animate-none"
                      style={{ "--delay": `${500 + index * 150}ms` } as React.CSSProperties}
                    >
                      <span className="flex size-14 items-center justify-center rounded-full bg-white/70 shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-white">
                        <Icon
                          className="size-7 text-[var(--color-charcoal)]"
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </span>
                    </span>

                    {stat.value && (
                      <p className="mt-3 font-serif text-3xl font-bold text-[var(--color-charcoal)] md:text-4xl">
                        {stat.value}
                      </p>
                    )}
                    <p
                      className={`text-sm leading-snug text-[var(--color-charcoal)] md:text-base ${
                        stat.value ? "mt-1" : "mt-3"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="hidden w-px origin-top animate-grow-y self-stretch bg-[var(--color-warm-sand)] [--delay:300ms] motion-reduce:animate-none lg:block"
          />

          {/* Story card */}
          <div className="animate-fade-up [--delay:300ms] motion-reduce:animate-none lg:w-[460px] lg:shrink-0">
            <div className="flex flex-col gap-5 rounded-2xl bg-white/85 p-5 shadow-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-xl sm:flex-row sm:items-center">
              {/* Video thumbnail */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-[var(--color-charcoal)] sm:h-[140px] sm:w-[190px]">
                {playing && video.youtubeId ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => video.youtubeId && setPlaying(true)}
                    aria-label={`Play video: ${video.title}`}
                    className="group absolute inset-0 block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-warm-sand)]"
                  >
                    {video.thumbnail && !thumbFailed && (
                      <Image
                        src={video.thumbnail}
                        alt=""
                        fill
                        sizes="190px"
                        onError={() => setThumbFailed(true)}
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    )}
                    <span className="absolute inset-0 bg-black/25" />
                    <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 ring-2 ring-white transition-transform duration-300 group-hover:scale-110">
                      <Play
                        className="ml-0.5 size-5 fill-white text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                )}
              </div>

              {/* Story text */}
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-bold leading-snug text-[var(--color-charcoal)]">
                  {story?.title ?? video.title}
                </h3>
                {story?.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal)]/90 md:text-[15px]">
                    {story.description}
                  </p>
                )}
                {story?.href && (
                  <Link
                    href={story.href}
                    className="group/link mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-charcoal)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-charcoal)]"
                  >
                    {story.linkLabel ?? "Read the full story"}
                    <AiOutlineArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}