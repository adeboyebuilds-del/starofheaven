"use client";

import { useMemo, useState } from "react";
import {
  FaMagnifyingGlass,
  FaBuilding,
  FaCalendarDays,
  FaCircleCheck,
} from "react-icons/fa6";
import { PinIcon, ArrowRightIcon } from "@/components/icons";
import { jobCategories, jobTypes, jobLocations, communityJobs } from "@/lib/careers-data";

export default function JobBoard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return communityJobs.filter((job) => {
      if (category !== "All" && job.category !== category) return false;
      if (type !== "All" && job.type !== type) return false;
      if (location !== "All" && job.location !== location) return false;
      if (q && !job.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, category, type, location]);

  // Group filtered results by category so headings only show when relevant.
  const grouped = useMemo(() => {
    const map = new Map<string, typeof communityJobs>();
    for (const job of filtered) {
      const list = map.get(job.category) ?? [];
      list.push(job);
      map.set(job.category, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Filters */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <FaMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-900/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search job titles"
              className="w-full rounded-sm border border-navy-900/15 bg-white py-3 pl-11 pr-4 text-sm text-navy-900 placeholder:text-navy-900/40 focus:border-gold-500 focus:outline-none"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 focus:border-gold-500 focus:outline-none"
          >
            {jobCategories.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All categories" : c}
              </option>
            ))}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 focus:border-gold-500 focus:outline-none"
          >
            {jobTypes.map((t) => (
              <option key={t} value={t}>
                {t === "All" ? "All job types" : t}
              </option>
            ))}
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 focus:border-gold-500 focus:outline-none"
          >
            {jobLocations.map((l) => (
              <option key={l} value={l}>
                {l === "All" ? "All locations" : l}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-6 text-center text-sm text-navy-900/60">
          {filtered.length} {filtered.length === 1 ? "role" : "roles"} across{" "}
          <span className="font-semibold text-navy-900">
            {category === "All" ? "all categories" : category}
          </span>{" "}
          in{" "}
          <span className="font-semibold text-navy-900">
            {location === "All" ? "all locations" : location}
          </span>
        </p>

        {/* Grouped listings */}
        <div className="mt-12 space-y-12">
          {grouped.length === 0 && (
            <p className="text-center text-sm text-navy-900/60">
              No openings match those filters right now — check back soon or
              post one yourself.
            </p>
          )}

          {grouped.map(([cat, jobs]) => (
            <div key={cat}>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {cat}
              </h2>
              <div className="mt-4 divide-y divide-navy-900/10 border-t border-navy-900/10">
                {jobs.map((job) => {
                  const isOpen = openId === job.id;
                  return (
                    <div key={job.id}>
                      <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <button
                            type="button"
                            onClick={() => setOpenId(isOpen ? null : job.id)}
                            className="text-left font-display text-lg font-semibold text-royal-600 underline-offset-4 hover:underline"
                          >
                            {job.title}
                          </button>
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy-900/60">
                            <span className="flex items-center gap-1.5">
                              <FaBuilding className="h-3.5 w-3.5" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <PinIcon className="h-3.5 w-3.5" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : job.id)}
                          className="inline-flex shrink-0 items-center gap-2 self-start rounded-sm bg-royal-600 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-royal-700 sm:self-auto"
                        >
                          {isOpen ? "Hide Job" : "View Job"}
                          <ArrowRightIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {isOpen && (
                        <div className="mb-6 rounded-2xl bg-stone-100 p-6 text-left">
                          <p className="text-sm leading-relaxed text-navy-900/80">
                            {job.summary}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-navy-900/60">
                            <span className="flex items-center gap-1.5">
                              <FaCircleCheck className="h-3.5 w-3.5 text-gold-600" />
                              Posted by {job.postedBy}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FaCalendarDays className="h-3.5 w-3.5 text-gold-600" />
                              {job.datePosted}
                            </span>
                          </div>
                          <a
                            href={`mailto:${job.contactEmail}?subject=${encodeURIComponent(
                              job.title
                            )}`}
                            className="mt-4 inline-block text-sm font-semibold text-gold-600 underline underline-offset-4 transition hover:text-gold-700"
                          >
                            Contact about this role &rarr;
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
