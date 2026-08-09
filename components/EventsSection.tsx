import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ClockIcon, PinIcon } from "@/components/icons";
import { events } from "@/lib/data";

export default function EventsSection() {
  return (
    <section className="border-t border-navy-900/8 bg-cream">
      {/* Top Header Section (Light Background) */}
      <div className="mx-auto max-w-8xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center px-4 sm:px-6 py-12 relative">
          
          {/* Watermark container - overflow clipping removed */}
          <div className="relative flex items-center justify-center w-full">
            <span className="absolute inset-x-0 -top-8 sm:-top-16 sm:-translate-y-1/2 select-none font-display text-5xl sm:text-8xl md:text-[110px] font-extrabold uppercase tracking-widest text-stone-200 pointer-events-none z-0">
              Events
            </span>

            <h2 className="relative z-10 max-w-4xl font-display text-2xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight text-gold-600">
              What&rsquo;s Happening at the Church
            </h2>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-900/80 sm:text-lg">
            There&rsquo;s always something meaningful happening at Star&rsquo;s of Heaven. Discover gatherings and experiences designed to inspire, connect, and empower you in every season of life.
          </p>

          <Link
            href="/events"
            className="mt-7 inline-block rounded-sm border border-navy-900 px-12 py-3 text-sm font-normal text-navy-900 transition hover:bg-navy-900 hover:text-cream"
          >
            See More Events &rarr;
          </Link>
        </div>
      </div>

      {/* Bottom Events Grid Section (Full-Width Dark Background Cover) */}
      <div className="bg-navy-950 py-20 px-6">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-8 md:grid-cols-3">
            {events.map((event) => (
              <article 
                key={event.title} 
                className="group relative rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-white/40 hover:bg-navy-900/40"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <ImagePlaceholder description={event.image.description} aspect="aspect-[4/3]" />
                  
                  {/* Date Badge */}
                  <div className="absolute left-4 top-4 rounded-sm bg-cream px-3 py-2 text-center leading-none shadow-sm">
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold-600">
                      {event.date.month}
                    </span>
                    <span className="block font-display text-lg font-semibold text-navy-900">
                      {event.date.day}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-medium text-white group-hover:text-gold-400 transition-colors">
                  {event.title}
                </h3>

                <div className="mt-3 space-y-1.5 text-sm text-gray-100">
                  <p className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-gold-500" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <PinIcon className="h-4 w-4 text-gold-500" />
                    {event.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}