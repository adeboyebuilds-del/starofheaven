"use client"; // Add if using Next.js App Router and state hooks are required at the top, or keep as standard if handled by parent/layout.

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const iconMap = {
  FaTwitter: FaTwitter,
  FaFacebookF: FaFacebookF,
  FiInstagram: FiInstagram,
  FaLinkedinIn: FaLinkedinIn,
};

// Define your carousel background images here or import them from site data
const carouselImages = [
  "/images/image1.jpg",
  "/images/image6.jpg",
  "/images/image3.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy-950 text-cream">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Worship slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Color Grading & Dark Overlays (Kept above images) */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(30,76,154,0.55),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(201,162,39,0.25),transparent_50%)]" />
        <div className="absolute inset-0 z-10 bg-navy-950/55" />
        <div className="absolute inset-6 z-20 rounded-sm  md:inset-10 pointer-events-none" />
      </div>

      <div className="relative z-30 mx-auto flex w-full max-w-8xl flex-col items-center px-6 py-20 text-center">
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
      <div className="absolute right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-4 md:right-8">
        {site.social.map((s) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap];
          return (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-navy-950 transition hover:bg-gold-400"
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}