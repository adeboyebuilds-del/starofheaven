import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-navy-950 text-cream">
      {/* Background image — replace src with an events/gathering photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/events/hero.jpg"
          alt="Congregation gathered for an event"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(30,76,154,0.55),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(201,162,39,0.25),transparent_50%)]" />
        <div className="absolute inset-0 z-10 bg-navy-950/60" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-8xl flex-col items-center px-6 py-20 text-center">
        <h1 className="mx-auto max-w-4xl uppercase font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
          Gather With Purpose
        </h1>
        <p className="eyebrow-inverse mt-5 max-w-xl text-sm sm:text-base">
          Discover events designed to help you connect, grow, and belong.
        </p>
      </div>
    </section>
  );
}
