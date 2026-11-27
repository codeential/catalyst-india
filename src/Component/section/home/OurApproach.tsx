// import type { LucideIcon } from "lucide-react";
// import { Users, Lightbulb, Share2, Star } from "lucide-react";
// import { homeData } from "@/data/home";
// import Skyline from "@/Component/section/home/Skyline";

// const IconsMap: Record<string, LucideIcon> = {
//   users: Users,
//   lightbulb: Lightbulb,
//   share: Share2,
//   star: Star,
// };

// export default function OurApproach() {
//   const { title, items } = homeData.approach;

//   return (
//     <section className="relative overflow-hidden bg-[var(--color-forest,#14503f)]">
//       {/* Faded skyline silhouette */}
//       <Skyline className="text-white opacity-[0.08]" />

//       <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6 md:pb-14 md:pt-14">
//         {/* Title with gold lines on both sides */}
//         <div className="flex items-center justify-center gap-4">
//           <span
//             aria-hidden="true"
//             className="h-0.5 w-12 bg-[var(--color-warm-sand)] sm:w-20"
//           />
//           <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
//             {title}
//           </h2>
//           <span
//             aria-hidden="true"
//             className="h-0.5 w-12 bg-[var(--color-warm-sand)] sm:w-20"
//           />
//         </div>

//         {/* Cards */}
//         <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
//           {items.map((item, index) => {
//             const Icon = IconsMap[item.icon];
//             if (!Icon) return null;

//             return (
//               <li
//                 key={item.label}
//                 className="animate-fade-up motion-reduce:animate-none"
//                 style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
//               >
//                 <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-[#f7efdf] px-4 py-6 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
//                   <Icon
//                     className="size-10 text-[var(--color-forest,#14503f)]"
//                     strokeWidth={1.5}
//                     aria-hidden="true"
//                   />
//                   <p className="text-[30px] font-bold text-[var(--color-charcoal)]">
//                     {item.label}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Handshake, Sprout, Users, Star } from "lucide-react";
import { homeData } from "@/data/home";
import TornEdge from "@/Component/ui/TornEdge";

const IconsMap: Record<string, LucideIcon> = {
  handshake: Handshake,
  sprout: Sprout,
  users: Users,
  star: Star,
};

export default function OurApproach() {
  const { title, items, backgroundImage } = homeData.approach;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-forest,#14503f)]">
      {/* Faded background photo */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="-z-20 object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 -z-10 bg-[var(--color-forest,#14503f)]/80" />
        </>
      )}

      {/* Torn edge, top: paper color must match the section above */}
      <TornEdge className="absolute inset-x-0 -top-px z-10 h-8 rotate-180 text-[var(--color-off-white)] md:h-14 lg:h-16" />

      <div className="relative mx-auto max-w-[1100px] px-4 pb-24 pt-24 sm:px-6 md:pb-28 md:pt-28 lg:px-8">
        {/* Title with lines that grow outward */}
        <div className="flex items-center justify-center gap-4">
          <span
            aria-hidden="true"
            className="h-0.5 w-12 origin-right animate-grow-x bg-[var(--color-warm-sand)] motion-reduce:animate-none sm:w-20"
          />
          <h2 className="animate-fade-up text-center font-serif text-3xl font-semibold text-white motion-reduce:animate-none md:text-4xl">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="h-0.5 w-12 origin-left animate-grow-x bg-[var(--color-warm-sand)] motion-reduce:animate-none sm:w-20"
          />
        </div>

        {/* Four columns */}
        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20">
          {items.map((item, index) => {
            const Icon = IconsMap[item.icon];
            if (!Icon) return null;

            return (
              <li
                key={item.label}
                className="group animate-fade-up px-4 text-center motion-reduce:animate-none lg:px-6"
                style={{ "--delay": `${200 + index * 150}ms` } as React.CSSProperties}
              >
                {/* Outer span pops in; inner span handles hover (separate transforms) */}
                <span
                  className="inline-block animate-pop motion-reduce:animate-none"
                  style={{ "--delay": `${400 + index * 150}ms` } as React.CSSProperties}
                >
                  <span className="flex size-16 items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white/10">
                    <Icon
                      className="size-11 text-[var(--color-warm-sand)]"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </span>
                </span>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
                  {item.label}
                </h3>

                {/* Small line that widens on hover */}
                <span
                  aria-hidden="true"
                  className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-[var(--color-warm-sand)] transition-all duration-500 ease-out group-hover:w-16"
                />

                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-relaxed text-white/85 md:text-[15px]">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Torn edge, bottom: paper color must match the section below */}
      <TornEdge className="absolute inset-x-0 -bottom-px z-10 h-8 text-[var(--color-off-white)] md:h-14 lg:h-16" />
    </section>
  );
}