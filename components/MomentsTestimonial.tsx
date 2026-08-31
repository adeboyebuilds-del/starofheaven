import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PlayIcon } from "@/components/icons";
import { eventTestimonial } from "@/lib/events-data";

export default function MomentsTestimonial() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
          Moments That Change Everything
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-navy-900/70 sm:text-lg">
          See how God shows up when we gather.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-2xl">
          <ImagePlaceholder
            description={eventTestimonial.image.description}
            aspect="aspect-[16/9]"
            src={eventTestimonial.image.source}
          />
          <div className="absolute inset-0 bg-navy-950/55" />

          <span className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-navy-950">
            <PlayIcon className="h-5 w-5" />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-8 text-left text-cream sm:p-10">
            <p className="max-w-2xl text-base italic leading-relaxed sm:text-lg">
              &ldquo;{eventTestimonial.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold">{eventTestimonial.name}</p>
            <p className="text-xs uppercase tracking-widest text-cream/70">
              {eventTestimonial.role}
            </p>
          </div>
        </div>

        <Link
          href={eventTestimonial.cta.href}
          className="mt-8 inline-block rounded-sm border border-navy-900 px-8 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-cream"
        >
          {eventTestimonial.cta.label}
        </Link>
      </div>
    </section>
  );
}
