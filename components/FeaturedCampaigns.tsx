import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { campaigns } from "@/lib/give-data";

export default function FeaturedCampaigns() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-8xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            Featured Campaigns
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream/70 sm:text-lg">
            Give to specific initiatives making an immediate impact.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => {
            const CampaignIcon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl bg-navy-900/60 p-7 text-left shadow-2xl"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-2xl text-gold-400">
                  <CampaignIcon />
                </span>

                <h3 className="font-display text-xl font-medium text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {c.body}
                </p>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cream/60">
                    <span>Goal: {c.goal}</span>
                    {/* Placeholder progress — replace raisedPercent with real data */}
                    <span>{c.raisedPercent}% raised</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-cream/15">
                    <div
                      className="h-full rounded-full bg-gold-500"
                      style={{ width: `${c.raisedPercent}%` }}
                    />
                  </div>
                </div>

                <Link
                  href="#ways-to-give"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 underline underline-offset-4 transition hover:text-gold-300"
                >
                  Give to This Campaign
                  <ArrowRightIcon />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
