import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { assistanceItems } from "@/lib/visit-data";

export default function AssistanceSection() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
          Need Assistance?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-cream/70 sm:text-lg">
          Our team is ready and willing to help you. Don&rsquo;t hesitate to
          reach out.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {assistanceItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-2xl text-gold-400">
                  <ItemIcon />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Plan-your-visit CTA — wire the button up to a real form/embed later */}
        <div className="mt-20 rounded-2xl bg-navy-900/60 px-6 py-14">
          <h3 className="font-display text-2xl font-semibold uppercase text-white sm:text-3xl">
            Let&rsquo;s Plan Your Visit
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70 sm:text-base">
            Ready to visit? Let us know you&rsquo;re coming so we can welcome
            you well.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Let Us Know You&rsquo;re Coming
          </Link>
        </div>

        {/* First-time visitor stories — swap this single card for a real testimonial carousel later */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold uppercase text-white sm:text-3xl">
            First-Time Visitor Stories
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70 sm:text-base">
            Everything you need to know for a smooth and comfortable first
            visit.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-navy-900/60 p-8">
            <div className="mx-auto mb-5 h-16 w-16 overflow-hidden rounded-full">
              <ImagePlaceholder
                description="Placeholder: headshot of a first-time visitor giving a testimonial."
                aspect="aspect-square"
                src="/images/visit/testimonial-1.jpg"
              />
            </div>
            <p className="text-sm italic leading-relaxed text-cream/80 sm:text-base">
              &ldquo;Placeholder testimonial quote about the first-visit
              experience goes here.&rdquo;
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold-400">
              Visitor Name
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
