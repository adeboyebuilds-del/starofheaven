import Link from "next/link";

export default function MapCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-cream">
      {/* Placeholder background glow — swap for a map embed or campus photo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(30,76,154,0.4),transparent_55%)]" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <h2 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-5xl">
          Our House Is Your House
        </h2>
        <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
          There&rsquo;s room for you here. Come as you are. You&rsquo;ve
          found your home.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {/* TODO: point href at your real Google Maps directions link */}
          <Link
            href="#"
            className="rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Map &amp; Directions
          </Link>
          <Link
            href="/stream"
            className="rounded-sm border border-cream/50 px-7 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
          >
            Watch Live
          </Link>
          <Link
            href="/give"
            className="rounded-sm border border-cream/50 px-7 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
          >
            Give
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-cream/50 px-7 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
