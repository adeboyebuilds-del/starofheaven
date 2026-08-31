import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { recurringGatherings } from "@/lib/events-data";

export default function RecurringGatherings() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="eyebrow-inverse">Anchored</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            Recurring Gatherings
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream/70 sm:text-lg">
            The gatherings that shape us, week by week, season by season.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {recurringGatherings.map((g) => (
            <div key={g.title} className="flex flex-col items-center text-center">
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                <ImagePlaceholder
                  description={g.image.description}
                  aspect="aspect-[4/3]"
                  src={g.image.source}
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-white">
                {g.title}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold-400">
                {g.cadence}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                {g.body}
              </p>
              <Link
                href={g.cta.href}
                className="mt-5 inline-block rounded-sm border border-cream/50 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-cream transition hover:border-cream hover:bg-cream/10"
              >
                {g.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
