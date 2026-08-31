import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ClockIcon, PinIcon } from "@/components/icons";
import { featuredEvent } from "@/lib/events-data";

export default function FeaturedEvent() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Featured Event</p>
          <p className="mt-2 text-base text-navy-900/70 sm:text-lg">
            The moment you don&rsquo;t want to miss.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-2xl">
          <ImagePlaceholder
            description={featuredEvent.image.description}
            aspect="aspect-[16/9]"
            src={featuredEvent.image.source}
          />
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-navy-900 sm:text-4xl">
            {featuredEvent.title}
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-900/70">
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-gold-600" />
              {featuredEvent.date}
            </span>
            <span className="flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-gold-600" />
              {featuredEvent.time}
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-900/75">
            {featuredEvent.body}
          </p>

          <Link
            href={featuredEvent.cta.href}
            className="mt-7 inline-block rounded-sm bg-navy-900 px-8 py-3 text-sm font-semibold text-cream transition hover:bg-navy-800"
          >
            {featuredEvent.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
