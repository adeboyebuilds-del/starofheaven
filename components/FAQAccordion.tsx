"use client";

import { useState } from "react";
import { faqs } from "@/lib/contact-data";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-navy-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-navy-900/70 sm:text-lg">
            Find answers to the questions we hear most.
          </p>
        </div>

        <div className="mt-12 divide-y divide-navy-900/10 border-t border-b border-navy-900/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-navy-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={
                      "shrink-0 text-xl text-gold-600 transition-transform" +
                      (isOpen ? " rotate-45" : "")
                    }
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-navy-900/75 sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
