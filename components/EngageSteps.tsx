import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { nextSteps } from "@/lib/data";

export default function EngageSteps() {
  return (
    <section className="bg-navy-950 text-cream px-6 py-20 text-center md:py-28">
      
      {/* Who We Are */}
      <div className="relative flex flex-col items-center">
        <span className="absolute inset-x-0 -top-8 sm:-top-8 sm:-translate-y-1/2 select-none font-display text-5xl sm:text-8xl md:text-[110px] font-extrabold uppercase tracking-widest text-[#162030] pointer-events-none z-0">
          Engage
        </span>
        
        <h2 className="uppercase max-w-5xl font-display text-3xl sm:text-5xl lg:text-[50px] font-bold text-white leading-tight sm:leading-[77px]">
          Take Your Place. Discover Your Purpose.
        </h2>
        
        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-100">
          Faith grows best in community. Whether you&rsquo;re new or ready to take your
          next step, there&rsquo;s a place for you to connect, grow, and belong.
        </p>
        
        <p className="mt-4 max-w-3xl text-xl sm:text-2xl font-medium text-gold-400">
          Next Steps: Each one draws you closer to purpose.
        </p>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 bg-navy-950 px-4 sm:px-10 py-10 w-full max-w-7xl mx-auto">
          {nextSteps.map((step) => {
            // Assign the unique icon for this specific card iteration
            const StepIcon = step.icon;

            return (
              <div 
                key={step.title}
                className="relative overflow-hidden rounded-2xl shadow-2xl group text-left transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Portrait Image Placeholder */}
                <ImagePlaceholder 
                  description={step.image.description} 
                  aspect="aspect-[3/4]" 
                />
                
                {/* Dark gradient overlay to make text readable over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                {/* Text & Icon positioned at the bottom over the image */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-start">
                  
                  {/* Render the unique dynamic icon */}
                  {StepIcon && (
                    <div className="mb-3 text-gold-400 text-2xl">
                      <StepIcon />
                    </div>
                  )}

                  <h3 className="font-display text-xl font-medium text-white group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-cream/80">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/community"
            className="inline-block rounded-sm bg-royal-600 px-8 py-3 text-sm font-semibold text-cream transition hover:bg-royal-700"
          >
            Take the Next Step &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}