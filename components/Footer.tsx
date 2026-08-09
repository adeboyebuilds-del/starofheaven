import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import { ClockIcon, PinIcon, SocialIcon } from "@/components/icons";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Watch", href: "/stream" },
  { label: "Giving", href: "/give" },
  { label: "Employment", href: "/careers" },
  { label: "Visit", href: "/visit" },
  { label: "Contact Us", href: "/contact" },
  { label: "Community", href: "/community" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream">
      {/* Decorative gold arch, echoing the arch-motif used at section breaks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[140%] -translate-x-1/2 rounded-t-full border-t border-gold-500/15"
      />

      <div className="relative mx-auto max-w-8xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={172}
              height={112}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              A Christ-centered community helping people discover purpose,
              experience God&rsquo;s love, and impact the world.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {site.social.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-cream/60 transition hover:text-gold-300"
                >
                  <SocialIcon network={s.label} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">
              Service Times
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              {site.serviceTimes.map((s) => (
                <li key={s.label} className="flex items-start gap-2">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {s.label}: {s.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">
              Location
            </h3>
            <p className="mt-5 flex items-start gap-2 text-sm text-cream/70">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {site.location.line1}
                <br />
                {site.location.line2}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-cream/80">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-cream/80">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
