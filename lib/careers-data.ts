export const jobCategories = [
  "All",
  "Administrative",
  "Counseling",
  "Skilled Trades",
  "Hospitality",
  "Education",
  "Other",
];

export const jobTypes = ["All", "Full-Time", "Part-Time", "Contract", "Seasonal"];

export const jobLocations = ["All", "Lafiaji, Lagos", "Remote"];

// Sample placeholder listings so the board isn't empty out of the box.
// In production, swap this static array for listings pulled from a
// database, spreadsheet, or form backend (see PostJobSection).
export const communityJobs = [
  {
    id: "job-1",
    title: "Administrative Assistant",
    category: "Administrative",
    type: "Full-Time",
    location: "Lafiaji, Lagos",
    postedBy: "Grace Family Stores",
    datePosted: "Aug 10, 2026",
    summary:
      "Looking for an organized, detail-oriented assistant to support daily office operations for a small family business.",
    contactEmail: "hiring@example.com",
  },
  {
    id: "job-2",
    title: "Behavioral Health Counselor",
    category: "Counseling",
    type: "Part-Time",
    location: "Lafiaji, Lagos",
    postedBy: "Member Referral",
    datePosted: "Aug 5, 2026",
    summary:
      "A member of our community is seeking a licensed counselor for part-time client sessions. Experience with family counseling preferred.",
    contactEmail: "hiring@example.com",
  },
  {
    id: "job-3",
    title: "Electrician's Apprentice",
    category: "Skilled Trades",
    type: "Full-Time",
    location: "Lafiaji, Lagos",
    postedBy: "Adeyemi Electrical Services",
    datePosted: "Aug 2, 2026",
    summary:
      "Entry-level apprenticeship with a local, church-connected electrical contractor. On-the-job training provided.",
    contactEmail: "hiring@example.com",
  },
  {
    id: "job-4",
    title: "Front Desk & Hospitality Staff",
    category: "Hospitality",
    type: "Part-Time",
    location: "Lafiaji, Lagos",
    postedBy: "Haven Guest House",
    datePosted: "Jul 28, 2026",
    summary:
      "A member-owned guest house is hiring friendly, reliable front desk staff for weekend shifts.",
    contactEmail: "hiring@example.com",
  },
  {
    id: "job-5",
    title: "Remote Bookkeeper",
    category: "Administrative",
    type: "Contract",
    location: "Remote",
    postedBy: "Member Referral",
    datePosted: "Jul 20, 2026",
    summary:
      "A small business owned by a church member needs part-time remote bookkeeping support, roughly 10 hours a week.",
    contactEmail: "hiring@example.com",
  },
];
