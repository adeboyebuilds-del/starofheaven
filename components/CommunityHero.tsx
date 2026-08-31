import Link from "next/link";
import Image from "next/image";

export default function CommunityHero() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-navy-950 text-cream">
      {/* Background — the source site uses a vertical video here (a pastor
          speaking about salvation). Starting with a static image placeholder;
          swap the <Image> below for a <video autoPlay muted loop playsInline>
          once you have footage. */}
      <div className="absolute inset-0">
        <Image
          src="/images/community/hero.jpg"
          alt="Pastor speaking about salvation"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(30,76,154,0.55),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(201,162,39,0.25),transparent_50%)]" />
        <div className="absolute inset-0 z-10 bg-navy-950/60" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-8xl flex-col items-center px-6 py-24 text-center">
        <h1 className="mx-auto max-w-4xl uppercase font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
          Discipleship Starts Here
        </h1>
        <p className="eyebrow-inverse mx-auto mt-5 max-w-xl text-sm sm:text-base">
          From saying yes to Jesus to becoming family — find your path to
          deeper faith and belonging.
        </p>
        <Link
          href="#membership"
          className="mt-9 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Become a Member
        </Link>
      </div>
    </section>
  );
}
