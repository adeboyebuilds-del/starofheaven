import Link from "next/link";

const guidelines = [
  "Open to church members, and to businesses or households connected to our community.",
  "Listings should be real, currently-open opportunities, no recruiting scams or MLM pitches.",
  "Keep it brief: role, type (full-time/part-time/contract), location, and how to apply.",
  "Listings are reviewed before they go live and stay posted for 30 days unless renewed.",
];

export default function PostJobSection() {
  return (
    <section id="post-a-job" className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
          Post a Job
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          Hiring, or know someone who is? Share the opening with our church
          family, this board exists to help our own community find and fill
          good work.
        </p>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-navy-900/60 p-8 text-left">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Guidelines
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            {guidelines.map((g) => (
              <li key={g} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* TODO: replace with a real submission form (a Google Form, a form
            backend, or an API route that writes to your job listings source)
            once you've decided how listings will be collected and moderated. */}
        <Link
          href="mailto:jobs@example.com?subject=Job%20Listing%20Submission"
          className="mt-8 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Submit a Listing
        </Link>
      </div>
    </section>
  );
}
