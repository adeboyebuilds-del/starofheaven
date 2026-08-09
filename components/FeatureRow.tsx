"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRightIcon } from "@/components/icons";
import { featureRows } from "@/lib/data";

const SLIDE_DURATION = 24000; // ms each row stays on screen

export default function FeatureCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % featureRows.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative rounded-2xl overflow-hidden bg-navy-950/90 text-cream -mt-20 w-[90%] lg:w-[95%] mx-auto">
      <div className="mx-auto max-w-8xl px-6 py-4 md:py-4">
        <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr] md:gap-16 rounded-xl">
          {/* Text stack */}
          <div className="relative min-h-[280px]">
            {featureRows.map((row, i) => (
              <div
                key={row.title}
                aria-hidden={i !== index}
                className={
                  i === index
                    ? "opacity-100 transition-opacity duration-700"
                    : "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
                }
              >
                <p className="eyebrow-inverse mb-3">{row.eyebrow}</p>
                <h2 className="max-w-3xl font-display text-2xl font-medium uppercase leading-[1.05] text-cream sm:text-3xl md:text-4xl">
                  {row.title}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
                  {row.body}{" "}
                  <Link
                    href={row.cta.href}
                    className="inline-flex items-center gap-1 font-semibold text-gold-400 underline underline-offset-4 transition hover:text-gold-300"
                  >
                    {row.cta.label}
                    <ArrowRightIcon />
                  </Link>
                </p>
              </div>
            ))}

            {/* Divider + pagination dots, pinned under the text block */}
            <div className="mt-10 border-t border-cream/15 pt-5 md:mr-[calc(40%+4rem)]">
              <div className="flex gap-2">
                {featureRows.map((row, i) => (
                  <button
                    key={row.title}
                    type="button"
                    aria-label={`Show ${row.title}`}
                    onClick={() => setIndex(i)}
                    className={
                      i === index
                        ? "h-1.5 w-8 rounded-full bg-gold-400 transition-all"
                        : "h-1.5 w-4 rounded-full bg-cream/30 transition-all hover:bg-cream/50"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image stack */}
          <div className="relative aspect-[4/3]">
            {featureRows.map((row, i) => (
              <div
                key={row.title}
                aria-hidden={i !== index}
                className={
                  i === index
                    ? "absolute inset-0 opacity-100 transition-opacity duration-700"
                    : "absolute inset-0 opacity-0 transition-opacity duration-700"
                }
              >
                <ImagePlaceholder description={row.image.description} aspect="aspect-[4/3]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}