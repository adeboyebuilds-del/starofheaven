import Link from "next/link";
import { contactQuickLinks } from "@/lib/contact-data";

export default function QuickLinksGrid() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Quick Links
          </h2>
          <p className="mt-4 text-base text-navy-900/70 sm:text-lg">
            Find what you need fast.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactQuickLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <div
                key={link.title}
                className="flex flex-col items-start rounded-2xl bg-stone-100 p-7 shadow-sm"
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-400">
                  <LinkIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
                  {link.body}
                </p>
                <Link
                  href={link.cta.href}
                  className="mt-5 inline-block rounded-sm border border-navy-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900 hover:text-cream"
                >
                  {link.cta.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
