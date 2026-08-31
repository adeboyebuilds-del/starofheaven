"use client";

import { useState } from "react";

const subjects = [
  "General Question",
  "Prayer Request",
  "Volunteering",
  "Giving",
  "Media / Press",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to a real submission endpoint — an API route,
    // an email service (Resend, SendGrid), or a form backend (Formspree, HubSpot).
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-navy-950 text-cream">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
          <h2 className="font-display text-2xl font-semibold uppercase text-white sm:text-3xl">
            Message Sent
          </h2>
          <p className="mt-4 text-base text-cream/75">
            Thanks for reaching out — our team will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
            Ask Us Directly
          </h2>
          <p className="mt-4 text-base text-cream/70 sm:text-lg">
            Didn&rsquo;t find your answer? Contact our team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-cream/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-sm border border-cream/20 bg-navy-900/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-cream/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-sm border border-cream/20 bg-navy-900/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-cream/60">
                Phone <span className="normal-case text-cream/40">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-sm border border-cream/20 bg-navy-900/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
                placeholder="(000) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-cream/60">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-2 w-full rounded-sm border border-cream/20 bg-navy-900/60 px-4 py-3 text-sm text-cream focus:border-gold-400 focus:outline-none"
              >
                {subjects.map((s) => (
                  <option key={s} value={s} className="bg-navy-900">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-cream/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-sm border border-cream/20 bg-navy-900/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-block rounded-sm bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
