import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function GivingImpact() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <span className="mx-auto block text-5xl font-display text-gold-400">
          &rdquo;
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold uppercase text-navy-900 sm:text-4xl">
          How Your Generosity Builds Lasting Change
        </h2>

        {/* Impact video — swap ImagePlaceholder for a real video embed/player later */}
        <div className="mt-10">
          <ImagePlaceholder
            description="Placeholder: video cover thumbnail for a giving-impact/testimony video."
            aspect="aspect-video"
            src="/images/give/impact-cover.jpg"
          />
        </div>
      </div>
    </section>
  );
}
