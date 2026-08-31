import Link from "next/link";
import { partnerStats } from "@/lib/community-data";

export default function PartnerSection() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
          Partner With Us
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
          When you partner with us, you&rsquo;re investing in a movement
          that&rsquo;s reaching lives, transforming communities, and
          spreading the Gospel. Your consistent support helps us meet people
          where they are and equip them to walk in purpose and power.
        </p>

        {/* Placeholder stats — replace with your own real, current numbers */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {partnerStats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-gold-400 sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-cream/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/give"
          className="mt-12 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Join the Mission
        </Link>
      </div>
    </section>
  );
}
