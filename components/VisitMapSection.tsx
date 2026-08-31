import Link from "next/link";
import { ClockIcon, PinIcon } from "@/components/icons";
import { FaPhone } from "react-icons/fa6";
import { site } from "@/lib/data";
import { officeHours, contactPhone } from "@/lib/contact-data";

export default function VisitMapSection() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            Visit Us
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* Map embed — replace src with your church's real Google Maps embed URL */}
          <div className="overflow-hidden rounded-2xl border border-cream/10">
          

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.136103622608!2d3.388235365845823!3d6.4538089903791365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3bca39a8f9%3A0x793e1cb6d0beab21!2s106%20Okesuna%20St%2C%20Lagos%20Island%2C%20Lagos%20102273%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1787259489540!5m2!1sen!2sus" className="h-[400px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              title="Map to our campus"></iframe>
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl bg-navy-900/60 p-6">
              <PinIcon className="mt-1 h-6 w-6 shrink-0 text-gold-400" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  Address
                </h3>
                <p className="mt-1 text-sm text-cream/85">
                  {site.location.line1}
                  <br />
                  {site.location.line2}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-navy-900/60 p-6">
              <FaPhone className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  Phone
                </h3>
                <p className="mt-1 text-sm text-cream/85">{contactPhone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-navy-900/60 p-6">
              <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-gold-400" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  Office Hours
                </h3>
                <ul className="mt-1 space-y-0.5 text-sm text-cream/85">
                  {officeHours.map((h) => (
                    <li key={h.label}>
                      <span className="font-semibold text-cream">{h.label}:</span>{" "}
                      {h.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TODO: point href at your church's real Google Maps directions link */}
            <Link
              href="#"
              className="inline-block rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
