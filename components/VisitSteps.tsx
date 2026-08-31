import ImagePlaceholder from "@/components/ImagePlaceholder";
import { visitSteps } from "@/lib/visit-data";

export default function VisitSteps() {
  return (
    <section className="bg-navy-950 px-6 py-20 text-center text-cream md:py-28">
      <div className="relative flex flex-col items-center">
        <span className="absolute inset-x-0 -top-8 select-none font-display text-5xl font-extrabold uppercase tracking-widest text-[#162030] pointer-events-none z-0 sm:-top-8 sm:-translate-y-1/2 sm:text-8xl md:text-[110px]">
          Explore
        </span>

        <h2 className="max-w-5xl font-display text-3xl font-bold uppercase leading-tight text-white sm:text-5xl sm:leading-[77px] lg:text-[50px]">
          Your Visit: Step by Step
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-100 sm:text-lg">
          From the moment you arrive to the moment you leave, you&rsquo;ll
          experience an intentional environment where faith comes alive.
        </p>

        {/* Step cards */}
        <div className="mt-14 grid w-full max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
          {visitSteps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-col items-start rounded-2xl bg-navy-900/60 p-7 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-xl text-gold-400">
                  <StepIcon />
                </span>
                <h3 className="font-display text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Campus walkthrough video — swap ImagePlaceholder for a real video/embed later */}
        <div className="mt-16 w-full max-w-4xl">
          <ImagePlaceholder
            description="Placeholder: video cover thumbnail for a campus walkthrough video."
            aspect="aspect-video"
            src="/images/visit/walkthrough-cover.jpg"
          />
        </div>
      </div>
    </section>
  );
}
