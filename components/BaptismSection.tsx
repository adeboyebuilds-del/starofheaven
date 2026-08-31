import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { baptismSteps } from "@/lib/community-data";

export default function BaptismSection() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          {/* Video cover — swap for a real video embed/player */}
          <ImagePlaceholder
            description="Placeholder: video cover thumbnail explaining the baptism experience."
            aspect="aspect-[4/3]"
            src="/images/community/baptism-cover.jpg"
          />
        </div>

        <div>
          <p className="eyebrow-inverse">Your Public Declaration</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            Baptism
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
            This is a powerful step of obedience that symbolizes dying to
            your old life and rising into new life in Christ. When you go
            under the water, you&rsquo;re leaving behind who you were. When
            you come up, you&rsquo;re stepping into who God created you to
            be — washed clean, made new, and walking in freedom.
          </p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Next Steps
          </p>
          <ol className="mt-4 space-y-3">
            {baptismSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-navy-950">
                  {i + 1}
                </span>
                <span className="text-sm text-cream/85 sm:text-base">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <Link
            href="#"
            className="mt-8 inline-block rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Sign Up for Baptism
          </Link>
        </div>
      </div>
    </section>
  );
}
