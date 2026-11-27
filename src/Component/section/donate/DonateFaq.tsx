import Link from "next/link";
import { ChevronDown } from "lucide-react";
import TornEdge from "@/Component/ui/TornEdge";
import { donateData } from "@/data/donate";

export default function DonateFaq() {
  const { faq } = donateData;

  // No approved content yet: render only the edge into the footer, so the page does not end on a hard cut.
  if (faq.items.length === 0) {
    return (
      <div className="flow-root bg-[color:var(--color-off-white)]">
        <TornEdge
          seed={11}
          className="h-5 text-[color:var(--color-forest,#14503f)] sm:h-6 lg:h-8"
        />
      </div>
    );
  }

  return (
    <section
      id="faq"
      aria-labelledby="donate-faq-heading"
      className="scroll-mt-20 bg-[color:var(--color-off-white)] lg:scroll-mt-24"
    >
      <div className="site-container pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-2xl text-[color:var(--color-charcoal)]">
          <div className="group/heading w-fit max-w-full">
            <h2
              id="donate-faq-heading"
              className="font-serif text-3xl leading-tight text-[color:var(--color-deep-teal)] sm:text-4xl"
            >
              {faq.heading}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-full rounded-full bg-[color:var(--color-warm-sand)] transition-[width] duration-500 md:group-hover/heading:w-[calc(100%+4rem)]"
            />
          </div>

          {faq.intro ? <p className="mt-4 text-base leading-relaxed sm:text-lg">{faq.intro}</p> : null}

          <div className="mt-8 space-y-3">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group/faq min-w-0 rounded-3xl bg-[color:var(--color-warm-sand)]/25"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-3xl px-5 py-4 text-base font-semibold sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform duration-200 group-open/faq:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <div className="space-y-3 px-5 pb-5 text-base leading-relaxed sm:px-6">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed">
            {faq.contactText}{" "}
            <Link href={faq.contactHref}>
              <span className="font-semibold underline underline-offset-4">{faq.contactLabel}</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Edge: last in-flow element. Fill must match the NEXT section's background (the footer). */}
      <TornEdge
        seed={11}
        className="-mt-5 h-5 text-[color:var(--color-forest,#14503f)] sm:-mt-6 sm:h-6 lg:-mt-8 lg:h-8"
      />
    </section>
  );
}