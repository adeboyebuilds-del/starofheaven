import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ministries } from "@/lib/data";

export default function Ministries() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-8xl px-6 py-20 md:py-28">
        
        {/* Main 2-Column Section layout (Left: Text, Right: 2x2 Grid) */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.2fr] lg:gap-16">
          
          {/* Left Text Block */}
          <div>
            <p className="font-display mb-3 text-[36px] leading-[43px] uppercase tracking-tight text-center">Ministries That Move You</p>
            <p className="mt-5 text-base leading-[31px] text-cream/70 sm:text-[24px]">
              From youth and young adults to outreach and care,
              Our ministries create spaces for growth, service, and lasting connection.
              Wherever you are on your journey, there&rsquo;s a ministry moving with you.
            </p>
          </div>

          {/* Right 2x2 Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {ministries.map((m) => (
              <Link 
                key={m.title} 
                href={m.href} 
                className="group relative overflow-hidden rounded-2xl block shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Image Placeholder */}
                <ImagePlaceholder
                  description={m.image.description}
                  aspect="aspect-[4/3]"
                  className="w-full"
                />

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                {/* Content Overlay (Title + Arrow Button) */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="font-display text-lg font-medium text-white">
                    {m.title}
                  </h3>
                  
                  {/* Arrow Icon Button */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/80 text-white backdrop-blur-sm transition group-hover:bg-royal-600">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}