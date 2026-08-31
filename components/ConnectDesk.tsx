import ImagePlaceholder from "@/components/ImagePlaceholder";
import { connectDeskPoints } from "@/lib/visit-data";

export default function ConnectDesk() {
  return (
    <section className="bg-[#D9D9D9]">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <ImagePlaceholder
            description="Placeholder: photo of the Connect Desk / welcome table with a volunteer greeting a guest."
            aspect="aspect-[4/3]"
            src="/images/visit/connect-desk.jpg"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy-900 sm:text-[32px]">
            Next Steps at the Connect Desk
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-900/75 sm:text-lg">
            The Connect Desk is your central hub for support, direction, and
            next steps during your time with us. Whether you&rsquo;re
            visiting for the first time or looking to get involved, our team
            is here to serve you with excellence and care.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold-600">
            At the Connect Desk, you can:
          </p>
          <ul className="mt-4 space-y-3 text-base text-navy-900/80">
            {connectDeskPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
