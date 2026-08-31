import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PlayIcon } from "@/components/icons";
import { onDemandMessages } from "@/lib/stream-data";

export default function OnDemandMessages() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-8xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            On-Demand Messages
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream/70 sm:text-lg">
            Dive deeper into the word anytime, anywhere.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {onDemandMessages.map((msg) => (
            <article key={msg.title} className="group text-left">
              <div className="relative overflow-hidden rounded-xl">
                <ImagePlaceholder
                  description={msg.image.description}
                  aspect="aspect-video"
                  src={msg.image.source}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-navy-950/20 opacity-0 transition group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-navy-950">
                    <PlayIcon className="h-5 w-5" />
                  </span>
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-white group-hover:text-gold-400 transition-colors">
                {msg.title}
              </h3>
              <p className="mt-1 text-sm text-cream/60">
                {msg.speaker} &bull; {msg.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
