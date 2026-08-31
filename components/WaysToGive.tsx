import { givingWays } from "@/lib/give-data";

export default function WaysToGive() {
  return (
    <section id="ways-to-give" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Ways to Give
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {givingWays.map((way) => {
            const WayIcon = way.icon;
            return (
              <div
                key={way.title}
                className="flex flex-col items-start rounded-2xl bg-stone-100 p-7 shadow-sm"
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
                  <WayIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {way.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
                  {way.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
