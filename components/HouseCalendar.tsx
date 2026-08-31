import { eventCategories } from "@/lib/events-data";

export default function HouseCalendar() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
          House Calendar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-cream/70 sm:text-lg">
          All our upcoming events and gatherings in one place.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {eventCategories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-cream/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/70"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Calendar embed — replace src with your own Google Calendar (or other) embed URL */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-cream/10">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com"
            className="h-[500px] w-full"
            style={{ border: 0 }}
            title="House Calendar"
          />
        </div>
      </div>
    </section>
  );
}
