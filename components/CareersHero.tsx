import Link from "next/link";
import { site } from "@/lib/data";

export default function CareersHero() {
  return (
    <section className="bg-navy-950 px-6 py-20 text-center text-cream md:py-28">
      <p className="eyebrow-inverse">Opportunities Shared by Our Church Family</p>
      <h1 className="mx-auto mt-4 max-w-4xl uppercase font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
        Community Job Board
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
        A place for members of {site.name} to hire from, and find work
        within, our own church family. Browse what&rsquo;s open below, or
        share an opening with the community.
      </p>
      <Link
        href="#post-a-job"
        className="mt-9 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
      >
        Post a Job
      </Link>
    </section>
  );
}
