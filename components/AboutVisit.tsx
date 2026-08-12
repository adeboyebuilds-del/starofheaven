import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ClockIcon, PinIcon } from "@/components/icons";
import { site } from "@/lib/data";

export default function AboutVisit() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        {/* Who We Are */}
        <div className="flex flex-col items-center">
           <h1 className="select-none font-display text-5xl sm:text-5xl md:text-[100px] font-extrabold uppercase tracking-widest text-[#162030] pointer-events-none z-0">About Us</h1>
          <h2 className="font-display text-5xl font-medium sm:text-6xl uppercase">
            Who We Are
          </h2>
          <p className="mt-6 max-w-5xl leading-[30px] text-cream/75 text-[30px]">
            At {site.name}, we help people discover purpose, experience
            God&rsquo;s love, and impact the world.
          </p>
          <p className="mt-6 max-w-5xl text-[30px] leading-[30px] text-cream/75">
            Led by Pastor <span className="text-cream">OluwaSoji Williams</span>
            , we&rsquo;re an intergenerational, Christ-centered community
            committed to uplifting humanity, meeting people at every stage of
            life and equipping them to evolve with purpose and power.
          </p>
          <p className="mt-4 max-w-2xl font-body text-[30px] text-gold-300">
            You belong here.
          </p>
        </div>

        {/* Plan Your Visit */}
    <div className="mt-20 flex flex-col items-center md:mt-28">
  <h1 className="mb-10 text-[24px] capitalize leading-[34px] tracking-tight eyebrow-inverse">
    Plan Your Visit
  </h1>
  
  <div className="grid w-full max-w-5xl grid-cols-1 gap-y-10 sm:grid-cols-2 sm:divide-x sm:divide-cream/15">
    
    {/* Left Side */}
    <div className="flex justify-center px-8 sm:justify-end">
      {/* Bumped to max-w-[420px] to prevent the long Sunday text from wrapping */}
      <div className="flex w-full max-w-[420px] items-center gap-5">
        <ClockIcon className="h-10 w-10 shrink-0 text-gold-400" /> 
        
        <div className="flex w-full flex-col text-left">
          <h3 className="mb-2 w-full border-b border-cream/30 pb-1 text-sm font-semibold uppercase tracking-widest text-cream/60">
            Service Times
          </h3>
          <ul className="space-y-1 text-sm font-medium uppercase text-cream/85">
            {site.serviceTimes.map((s) => (
              <li key={s.label}>
                {s.label}: {s.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex justify-center px-8 sm:justify-start">
      {/* Bumped to max-w-[420px] to match the exact dimensions of the left side */}
      <div className="flex w-full max-w-[420px] items-center gap-5">
        <PinIcon className="h-10 w-10 shrink-0 text-gold-400" />
        
        <div className="flex w-full flex-col text-left">
          <h3 className="mb-2 w-full border-b border-cream/30 pb-1 text-sm font-semibold uppercase tracking-widest text-cream/60">
            Location
          </h3>
          <p className="text-sm font-medium uppercase text-cream/85">
            {site.location.line1}
            <br />
            {site.location.line2}
          </p>
        </div>
      </div>
    </div>
    
  </div>
  
  <Link
    href="/visit"
    className="mt-12 inline-block rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
  >
    Plan Your Visit
  </Link>
</div>
      </div>

      <div className="border-t border-cream/10 arch-motif">
        {/* <div className="mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <ImagePlaceholder
            description="Placeholder: photo of the church exterior/building facade at golden hour, or a wide sanctuary shot, to visually anchor 'Plan Your Visit.'"
            aspect="aspect-[16/9]"
          />
        </div> */}
      </div>
    </section>
  );
}
