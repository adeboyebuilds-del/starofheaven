import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";

export default function GiveHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-950 text-cream">
      {/* Background image — replace src with a worship/community photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/give/hero.jpg"
          alt="Congregation in worship"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(30,76,154,0.55),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(201,162,39,0.25),transparent_50%)]" />
        <div className="absolute inset-0 z-10 bg-navy-950/60" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-8xl flex-col items-center px-6 py-24 text-center">
        <p className="eyebrow-inverse text-sm sm:text-base">
          Help Transform Lives
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl uppercase font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
          This Is Good Ground
        </h1>
        <p className="mt-5 font-display text-2xl uppercase tracking-wide text-gold-400 sm:text-3xl">
          Give. Grow. Go.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
          Your seed strengthens {site.name} — advancing the Gospel,
          equipping believers, and serving our community with excellence.
        </p>
        <Link
          href="#ways-to-give"
          className="mt-9 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Give Now
        </Link>
      </div>
    </section>
  );
}
