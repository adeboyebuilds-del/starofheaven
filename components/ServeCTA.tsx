import Link from "next/link";

export default function ServeCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,39,0.2),transparent_55%)]" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
        <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white sm:text-4xl">
          Every Event Needs Hands and Hearts Like Yours
        </h2>
        <Link
          href="/volunteer"
          className="mt-8 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Serve With Us
        </Link>
      </div>
    </section>
  );
}
