import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function CommunityGroupsSection() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <ImagePlaceholder
            description="Placeholder: photo of a community group gathered together, mid-discussion."
            aspect="aspect-[4/3]"
            src="/images/community/groups.jpg"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            Community Groups
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
            This House is what it is today because of community. Our
            Community Groups are the perfect places to learn, grow in faith,
            and find your tribe.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            There&rsquo;s a group that will fill your cup.
          </p>

          <Link
            href="#"
            className="mt-8 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Find a Group
          </Link>
        </div>
      </div>
    </section>
  );
}
