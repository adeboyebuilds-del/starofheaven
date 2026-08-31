"use client";

import { useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ClockIcon, PinIcon } from "@/components/icons";
import { eventCategories, upcomingEvents } from "@/lib/events-data";

export default function UpcomingEvents() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === activeCategory);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-8xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Attend</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Upcoming Events
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-navy-900/70 sm:text-lg">
            Browse by category to discover what fits your season.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={
                cat === activeCategory
                  ? "rounded-full bg-navy-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream transition"
                  : "rounded-full border border-navy-900/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-900/70 transition hover:border-navy-900"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-2xl bg-stone-100 shadow-sm"
            >
              <div className="relative">
                <ImagePlaceholder
                  description={event.image.description}
                  src={event.image.source}
                  aspect="aspect-[4/3]"
                />
                <div className="absolute left-4 top-4 rounded-sm bg-cream px-3 py-2 text-center leading-none shadow-sm">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold-600">
                    {event.date.month}
                  </span>
                  <span className="block font-display text-lg font-semibold text-navy-900">
                    {event.date.day}
                  </span>
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="font-display text-lg font-medium text-navy-900 transition-colors group-hover:text-gold-600">
                  {event.title}
                </h3>

                <div className="mt-3 space-y-1.5 text-sm text-navy-900/70">
                  <p className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-gold-600" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <PinIcon className="h-4 w-4 text-gold-600" />
                    {event.location}
                  </p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
                  {event.body}
                </p>

                <Link
                  href={event.cta.href}
                  className="mt-4 inline-block text-sm font-semibold text-gold-600 underline underline-offset-4 transition hover:text-gold-700"
                >
                  {event.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
