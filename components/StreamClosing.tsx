import Link from "next/link";

export default function StreamClosing() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(30,76,154,0.4),transparent_55%)]" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-5xl">
          Stay Connected
        </h2>
        <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
          Never miss a moment. Join us in person or online.
        </p>
        <Link
          href="/visit"
          className="mt-9 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Plan Your Visit
        </Link>
      </div>
    </section>
  );
}
