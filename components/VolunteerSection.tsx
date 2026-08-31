import Link from "next/link";
import { volunteerAreas, servingFormLinks } from "@/lib/community-data";

export default function VolunteerSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Volunteer to Serve
          </h2>
          <p className="mt-4 text-base text-navy-900/70 sm:text-lg">
            When you serve with us, you grow and so does the kingdom.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl bg-stone-100 p-7 text-left shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-navy-900">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
                {area.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/volunteer"
            className="inline-block rounded-sm bg-navy-900 px-8 py-3 text-sm font-semibold text-cream transition hover:bg-navy-800"
          >
            Get Involved
          </Link>
        </div>

        {/* Already serving? — direct people to the right form */}
        <div className="mt-16 rounded-2xl bg-navy-950 p-8 text-cream sm:p-10">
          <h3 className="font-display text-xl font-semibold uppercase text-white">
            Already Serving With Us?
          </h3>
          <p className="mt-2 text-sm text-cream/70 sm:text-base">
            Use the form that matches what you need — no new application
            required.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {servingFormLinks.map((f) => (
              <div key={f.title} className="rounded-xl bg-navy-900/60 p-5">
                <h4 className="text-sm font-semibold text-white">
                  {f.title}
                </h4>
                <p className="mt-1 text-xs text-cream/70">{f.body}</p>
                <Link
                  href={f.cta.href}
                  className="mt-3 inline-block text-xs font-semibold text-gold-400 underline underline-offset-4 transition hover:text-gold-300"
                >
                  {f.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
