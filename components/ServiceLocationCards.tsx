import Link from "next/link";
import { ClockIcon, PinIcon, PlayIcon } from "@/components/icons";
import { site } from "@/lib/data";

export default function ServiceLocationCards() {
  return (
    <section className="bg-[#D9D9D9]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Service Times &amp; Locations
          </h2>
          <p className="mt-4 text-base text-navy-900/70 sm:text-lg">
            Choose your time and place — and come as you are.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {/* Service Times */}
          <div className="flex flex-col items-start rounded-2xl bg-stone-100 p-8 shadow-sm">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
              <ClockIcon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-semibold text-navy-900">
              Service Times
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-navy-900/75">
              {site.serviceTimes.map((s) => (
                <li key={s.label}>
                  <span className="font-semibold text-navy-900">{s.label}:</span>{" "}
                  {s.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col items-start rounded-2xl bg-stone-100 p-8 shadow-sm">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
              <PinIcon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-semibold text-navy-900">
              Our Campus
            </h3>
            <p className="mt-3 text-sm text-navy-900/75">
              {site.location.line1}
              <br />
              {site.location.line2}
            </p>
            {/* TODO: point href at your real Google Maps directions link */}
            <Link
              href="#"
              className="mt-6 inline-block rounded-sm border border-navy-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900 hover:text-cream"
            >
              Get Directions
            </Link>
          </div>

          {/* Watch Online */}
          <div className="flex flex-col items-start rounded-2xl bg-stone-100 p-8 shadow-sm">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
              <PlayIcon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-semibold text-navy-900">
              Watch Online
            </h3>
            <p className="mt-3 text-sm text-navy-900/75">
              Can&rsquo;t make it in person? Stream from anywhere, every
              Sunday and Wednesday.
            </p>
            <Link
              href="/stream"
              className="mt-6 inline-block rounded-sm border border-navy-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900 hover:text-cream"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
