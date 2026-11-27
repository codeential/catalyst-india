

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
// import { homeData } from "@/data/home";
// import TornEdge from "@/Component/ui/TornEdge";

// export default function Hero() {
//   const {
//     eyebrow,
//     title,
//     description,
//     image,
//     primaryCta,
//     primaryHref,
//     secondaryCta,
//     secondaryHref,
//     backgroundImages,
//   } = homeData.hero;

//   const [currentImage, setCurrentImage] = useState(0);

//   const images =
//     backgroundImages?.length > 0 ? backgroundImages : [image];

//   useEffect(() => {
//     if (images.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const [eyebrowLeft, eyebrowRight] = eyebrow
//     .split("|")
//     .map((s) => s.trim());

//   const titleLines =
//     title.match(/[^.]+\.?/g)?.map((line) => line.trim()) ?? [title];

//   return (
//     <section className="relative isolate flex min-h-[600px] items-center overflow-hidden lg:min-h-[680px]">
//       {/* Background image slider */}
//       <div className="absolute inset-0 -z-20">
//         {images.map((src, index) => (
//           <Image
//             key={`${src}-${index}`}
//             src={src}
//             alt="Catalyst India social impact work"
//             fill
//             priority={index === 0}
//             sizes="100vw"
//             className={`object-cover object-[70%_center] transition-opacity duration-[1800ms] ease-in-out motion-reduce:transition-none md:object-center ${
//               index === currentImage ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 -z-10 bg-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/10" />

//       {/* Content */}
//       <div className="mx-auto w-full max-w-[1100px] px-4 pb-28 pt-16 sm:px-6 md:pb-32 lg:px-8">
//         <div className="max-w-[560px]">
//           {/* Eyebrow */}
//           <div className="flex animate-fade-up items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white [--delay:100ms] motion-reduce:animate-none sm:text-sm">
//             <span>{eyebrowLeft}</span>

//             {eyebrowRight && (
//               <>
//                 <span className="text-[var(--color-warm-sand)]">|</span>
//                 <span>{eyebrowRight}</span>
//               </>
//             )}

//             <span
//               aria-hidden="true"
//               className="ml-2 h-0.5 w-12 origin-left animate-grow-x bg-[var(--color-warm-sand)] [--delay:400ms] motion-reduce:animate-none"
//             />
//           </div>

//           {/* Title */}
//           <h1 className="mt-6 animate-fade-up font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white [--delay:200ms] motion-reduce:animate-none md:text-6xl lg:text-7xl">
//             {titleLines.map((line, index) => {
//               const isLast =
//                 index === titleLines.length - 1 &&
//                 titleLines.length > 1;

//               return (
//                 <span
//                   key={`${line}-${index}`}
//                   className={
//                     isLast
//                       ? "block italic text-[var(--color-warm-sand)]"
//                       : "block md:whitespace-nowrap"
//                   }
//                 >
//                   {line}
//                 </span>
//               );
//             })}
//           </h1>

//           {/* Description */}
//           <p className="mt-6 max-w-[440px] animate-fade-up text-base leading-relaxed text-white/90 [--delay:300ms] motion-reduce:animate-none">
//             {description}
//           </p>

//           {/* CTAs */}
//           <div className="mt-8 flex flex-wrap animate-fade-up gap-3 [--delay:400ms] motion-reduce:animate-none">
//             <Link
//               href={primaryHref}
//               className="group inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--color-charcoal)] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-warm-sand)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
//             >
//               {primaryCta}

//               <AiOutlineArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>

//             <Link
//               href={secondaryHref}
//               className="group inline-flex items-center rounded-md bg-[var(--color-warm-sand)] px-6 py-3 text-sm font-semibold text-[var(--color-charcoal)] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)]"
//             >
//               {secondaryCta}

//               <AiOutlineHeart className="ml-2 size-4 transition-transform duration-300 group-hover:scale-125" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Slider indicators */}
//       {images.length > 1 && (
//         <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-20">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               aria-label={`Show hero image ${index + 1}`}
//               onClick={() => setCurrentImage(index)}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 index === currentImage
//                   ? "w-8 bg-[var(--color-warm-sand)]"
//                   : "w-2 bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       )}

//       {/* Torn paper edge */}
//       <TornEdge className="absolute inset-x-0 -bottom-px z-10 h-10 text-[var(--color-off-white)] md:h-16 lg:h-20" />
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { homeData } from "@/data/home";
import TornEdge from "@/Component/ui/TornEdge";

export default function Hero() {
  const {
    eyebrow,
    title,
    description,
    image,
    primaryCta,
    primaryHref,
    secondaryCta,
    secondaryHref,
    backgroundImages,
  } = homeData.hero;

  const [currentImage, setCurrentImage] = useState(0);

  const images =
    backgroundImages?.length > 0 ? backgroundImages : [image];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [eyebrowLeft, eyebrowRight] = eyebrow
    .split("|")
    .map((s) => s.trim());

  const titleLines =
    title.match(/[^.]+\.?/g)?.map((line) => line.trim()) ?? [title];

  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden lg:min-h-[680px]">
      {/* Background image slider */}
      <div className="absolute inset-0 -z-20">
        {images.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt="Catalyst India social impact work"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-[70%_center] transition-opacity duration-[1800ms] ease-in-out motion-reduce:transition-none md:object-center ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/10" />

      {/* Content: same container as the navbar so left edges line up */}
      <div className="site-container w-full pb-28 pt-16 md:pb-32">
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex animate-fade-up items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white [--delay:100ms] motion-reduce:animate-none sm:text-sm">
            <span>{eyebrowLeft}</span>

            {eyebrowRight && (
              <>
                <span className="text-[var(--color-warm-sand)]">|</span>
                <span>{eyebrowRight}</span>
              </>
            )}

            <span
              aria-hidden="true"
              className="ml-2 h-0.5 w-12 origin-left animate-grow-x bg-[var(--color-warm-sand)] [--delay:400ms] motion-reduce:animate-none"
            />
          </div>

          {/* Title */}
          <h1 className="mt-6 animate-fade-up font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white [--delay:200ms] motion-reduce:animate-none md:text-6xl lg:text-7xl">
            {titleLines.map((line, index) => {
              const isLast =
                index === titleLines.length - 1 &&
                titleLines.length > 1;

              return (
                <span
                  key={`${line}-${index}`}
                  className={
                    isLast
                      ? "block italic text-[var(--color-warm-sand)]"
                      : "block md:whitespace-nowrap"
                  }
                >
                  {line}
                </span>
              );
            })}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[440px] animate-fade-up text-base leading-relaxed text-white/90 [--delay:300ms] motion-reduce:animate-none">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap animate-fade-up gap-3 [--delay:400ms] motion-reduce:animate-none">
            <Link
              href={primaryHref}
              className="group inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--color-charcoal)] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-warm-sand)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {primaryCta}

              <AiOutlineArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={secondaryHref}
              className="group inline-flex items-center rounded-md bg-[var(--color-warm-sand)] px-6 py-3 text-sm font-semibold text-[var(--color-charcoal)] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-sand)]"
            >
              {secondaryCta}

              <AiOutlineHeart className="ml-2 size-4 transition-transform duration-300 group-hover:scale-125" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-20">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImage
                  ? "w-8 bg-[var(--color-warm-sand)]"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}

      {/* Torn paper edge */}
      <TornEdge className="absolute inset-x-0 -bottom-px z-10 h-10 text-[var(--color-off-white)] md:h-16 lg:h-20" />
    </section>
  );
}
