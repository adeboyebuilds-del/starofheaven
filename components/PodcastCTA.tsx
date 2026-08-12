import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function PodcastCTA() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid lg:max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <h1 className="text-[36px] leading-[52px] uppercase font-bold font-display mb-3">Listen to Our Podcast</h1>
          <p className="mt-5 max-w-md text-[24px] leading-[31px] text-ink-500">
            Stream every message, anytime you listen.
            Catch your favorite messages that fuel your faith and provide clarity to
            your season, on Spotify or wherever you listen to podcasts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://open.spotify.com"
              className="rounded-sm bg-navy-900 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-navy-800"
            >
              Listen on Spotify
            </Link>
            <Link
              href="#"
              className="rounded-sm border border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-cream"
            >
              Apple Podcasts
            </Link>
          </div>
        </div>
        <ImagePlaceholder
          description="Placeholder: photo of a podcast microphone / recording setup, or the pastor recording in-studio, moody navy-toned lighting with a gold rim light."
          aspect="aspect-[5/3]"
          src="/images/podcast.png"
        />
      </div>
    </section>
  );
}
