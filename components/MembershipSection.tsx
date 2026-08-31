import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { membershipPillars } from "@/lib/community-data";

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-cream">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="overflow-hidden rounded-2xl shadow-2xl md:order-2">
          <ImagePlaceholder
            description="Placeholder: photo of new members being welcomed or a membership class in session."
            aspect="aspect-[4/3]"
            src="/images/community/membership.jpg"
          />
        </div>

        <div className="md:order-1">
          <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Become a Member
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-900/75 sm:text-lg">
            Claim your seat at the table, connecting with a community that
            will walk with you through every season, and saying &ldquo;yes&rdquo;
            to being part of something bigger. Whether you&rsquo;re here in
            person or tuning in from anywhere, we&rsquo;re one family
            experiencing God&rsquo;s presence and promises together.
          </p>

          <div className="mt-8 flex gap-8">
            {membershipPillars.map((p) => {
              const PillarIcon = p.icon;
              return (
                <div key={p.title} className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-gold-400">
                    <PillarIcon className="h-5 w-5" />
                  </span>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-navy-900/70">
                    {p.title}
                  </span>
                </div>
              );
            })}
          </div>

          <Link
            href="#"
            className="mt-8 inline-block rounded-sm bg-navy-900 px-8 py-3 text-sm font-semibold text-cream transition hover:bg-navy-800"
          >
            Join the Family
          </Link>
        </div>
      </div>
    </section>
  );
}
