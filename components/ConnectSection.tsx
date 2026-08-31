import Link from "next/link";
import { FaHandsPraying, FaComments } from "react-icons/fa6";
import { communityGuidelines } from "@/lib/stream-data";

export default function ConnectSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Connect</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            We&rsquo;re Here for You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-navy-900/70 sm:text-lg">
            Prayer, real-time support, and community ready to walk with you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Prayer Request */}
          <div className="flex flex-col items-start rounded-2xl bg-stone-100 p-8 shadow-sm">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
              <FaHandsPraying className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-semibold text-navy-900">
              Prayer Request
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
              We&rsquo;re here to pray with you.
            </p>
            {/* TODO: point href at a real prayer-request form */}
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-sm border border-navy-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900 hover:text-cream"
            >
              Submit a Request
            </Link>
          </div>

          {/* Live Chat */}
          <div className="flex flex-col items-start rounded-2xl bg-stone-100 p-8 shadow-sm">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
              <FaComments className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-semibold text-navy-900">
              Live Chat
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
              Don&rsquo;t just watch — join our live chat during service to
              connect with our online church family. Share revelation,
              prayer requests, and encouragement.
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-navy-900/50">
              Live chats are available during all live broadcasts.
            </p>
            {/* TODO: replace with an embedded chat widget (e.g. YouTube chat, a chat provider) */}
            <div className="mt-4 flex h-28 w-full items-center justify-center rounded-lg border border-dashed border-navy-900/25 text-xs text-navy-900/50">
              Live chat embed placeholder
            </div>
          </div>
        </div>

        {/* Community guidelines */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-navy-950 p-8 text-left text-cream">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Community Guidelines
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {communityGuidelines.map((rule) => (
              <li key={rule} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
