import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { FaHandsHelping } from "react-icons/fa";

export default function VolunteerCTA() {
  return (
    <section className="bg-[#D9D9D9]">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy-900 sm:text-[32px]">
            Not Ready to Give?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy-900/75 sm:text-lg">
            Start with service. Give your time and gifts to the Lord and
            impact your community.
          </p>
          <Link
            href="/volunteer"
            className="mt-7 inline-flex items-center gap-2 rounded-sm border border-navy-900 px-7 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-cream"
          >
            <FaHandsHelping className="h-4 w-4" />
            Volunteer to Serve
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <ImagePlaceholder
            description="Placeholder: photo of volunteers packing charity boxes or serving the community."
            aspect="aspect-[4/3]"
            src="/images/give/volunteer.jpg"
          />
        </div>
      </div>
    </section>
  );
}
