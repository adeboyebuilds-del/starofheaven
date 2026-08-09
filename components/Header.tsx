"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryNav, site } from "@/lib/data";
import { ClockIcon, CloseIcon, MenuIcon, PlayIcon } from "@/components/icons";
import { IoCalendarClearSharp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-cream md:block">
        <div className="mx-auto flex max-w-8xl items-center justify-end gap-6 px-6 py-2 text-xs">
          <span className="flex items-center gap-1.5 text-gold-300 uppercase text-[14px] font-bold">
            <ClockIcon className="h-6 w-6" />
            Sundays 8:30 &amp; 9:00 AM 
          </span>
          <Link
            href="/events"
            className="flex items-center gap-1.5 text-cream/80 transition hover:text-gold-300 uppercase text-[14px] font-bold"
          >
            <IoCalendarClearSharp className="h-6 w-6" />
            Wednesdays 6:30 PM 
          </Link>
          <Link
            href="/stream"
            className="flex items-center gap-1.5 font-semibold text-gold-300 transition hover:text-gold-200 uppercase text-[14px] font-bold"
          >
            <IoLogoYoutube className="h-6 w-6"/>
            Watch Online
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-navy-800/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={172}
              height={112}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-ink-700 transition hover:text-royal-600 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/give"
              className="rounded-sm border border-navy-900 px-5 py-2 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-cream"
            >
              Give
            </Link>
            <Link
              href="/visit"
              className="rounded-sm bg-royal-600 px-5 py-2 text-sm font-semibold text-cream transition hover:bg-royal-700"
            >
              Plan Your Visit
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-navy-900 lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-navy-950 text-cream lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={172}
              height={112}
              className="h-12 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-4 font-display text-2xl"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/give"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-sm bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Give
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
