import ImagePlaceholder from "@/components/ImagePlaceholder";
import { streamQuickLinks } from "@/lib/stream-data";

export default function StreamHero() {
  return (
    <section className="bg-navy-950 px-6 py-20 text-center text-cream md:py-28">
      <p className="eyebrow-inverse">
        Tune In and Experience Today&rsquo;s Service Live
      </p>
      <h1 className="mx-auto mt-4 max-w-4xl uppercase font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
        You&rsquo;re Just in Time
      </h1>

      {/* Live player — swap ImagePlaceholder for your embedded livestream player */}
      <div className="relative mx-auto mt-12 max-w-4xl">
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-sm bg-red-600 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          Live Now
        </div>
        <ImagePlaceholder
          description="Placeholder: livestream player — replace with your embedded video/streaming provider."
          aspect="aspect-video"
          src="/images/stream/live-player-cover.jpg"
        />
      </div>

      {/* Quick links: last message, next service, resources */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
        {streamQuickLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <div
              key={link.title}
              className="flex flex-col items-center rounded-2xl bg-navy-900/60 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-lg text-gold-400">
                <LinkIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold-300">
                {link.title}
              </h3>
              <p className="mt-1 text-sm text-cream/80">{link.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
