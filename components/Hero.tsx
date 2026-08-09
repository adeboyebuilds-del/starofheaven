import Link from "next/link";
import { site } from "@/lib/data";
import { SocialIcon } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const iconMap = {
  FaTwitter: FaTwitter,
  FaFacebookF: FaFacebookF,
  FiInstagram: FiInstagram,
  FaLinkedinIn: FaLinkedinIn,
};
export default function Hero() {
  
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy-950 text-cream">
      {/* Placeholder for full-bleed background video */}
      <div
        role="img"
        aria-label="Placeholder: looping background video of the congregation worshipping, wide sanctuary shot, no on-screen text, gently color-graded toward navy/gold."
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,76,154,0.55),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(201,162,39,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-6 rounded-sm border border-dashed border-gold-400/30 md:inset-10" />
      </div>

      <div className="relative mx-auto flex w-full max-w-8xl flex-col items-center px-6 py-20 text-center">
        <h1 className="eyebrow-inverse mb-4 text-2xl leading-[24px]">Welcome to</h1>
        <h1 className="mx-auto max-w-5xl uppercase font-display text-5xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
          {site.name}
        </h1>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/stream"
            className="rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Watch Now
          </Link>
          <Link
            href="/visit"
            className="rounded-sm border border-cream/50 px-7 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>

      {/* Social rail, pinned to the right edge and vertically centered */}
      <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-4 md:right-8">
        {site.social.map((s) => {
           const Icon= iconMap[s.icon as keyof typeof iconMap]
         return(
          <Link
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-navy-950 transition hover:bg-gold-400"
          >
            <Icon className="h-5 w-5" />
          </Link>)
})}
      </div>
    </section>
  );
}