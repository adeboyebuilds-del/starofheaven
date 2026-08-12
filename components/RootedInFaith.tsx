import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function RootedInFaith() {
  return (
    <section className="bg-[#D9D9D9] mx-auto grid max-w-8xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr,2fr,1fr] md:gap-16 md:py-28">
      
      {/* Left Image with rounded corners and shadow */}
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <ImagePlaceholder
          description="Placeholder: portrait-orientation photo of the congregation praying together, heads bowed, unified moment of worship."
          aspect="aspect-[3/4]"
          src="/images/rooted1.jpg"
        />
      </div>

      {/* Center Text Block */}
      <div className="mx-auto flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold uppercase leading-[45px] sm:leading-[55px] text-navy-900 sm:text-[32px]">
          Rooted in Faith.
          <br />
          {/* Changed to sm:whitespace-nowrap so it wraps on mobile */}
          <span className="sm:whitespace-nowrap">Reaching the World.</span>
        </h2>
        
        <p className="mt-5 text-2xl sm:text-[30px] font-medium leading-snug sm:leading-[45px] text-navy-900/80">
          You Belong Here.
        </p>
        
        <Link
          href="/about"
          className="mt-7 inline-block rounded-sm border border-navy-900 px-12 py-3 text-sm font-normal text-navy-900 transition hover:bg-navy-900 hover:text-cream"
        >
          About Us &rarr;
        </Link>
      </div>

      {/* Right Image with rounded corners and shadow */}
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <ImagePlaceholder
          description="Placeholder: portrait-orientation photo of the congregation praying together, heads bowed, unified moment of worship."
          aspect="aspect-[3/4]"
          src="/images/rooted2.jpg"
        />
      </div>

    </section>
  );
}