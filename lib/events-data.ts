export const eventCategories = [
  "All",
  "Community",
  "Conference",
  "Outreach",
  "Worship",
  "Youth & Kids",
];

export const featuredEvent = {
  title: "Ministry Anniversary Celebration",
  date: "September 13, 2026",
  time: "9:00 AM CT",
  body: "Celebrate this milestone in our pastor's ministry with a special Sunday service, honoring the legacy and the vision still being carried forward.",
  image: {
    description:
      "Placeholder: photo of the pastor or congregation from a milestone celebration service.",
    source: "/images/events/featured.jpg",
  },
  cta: { label: "Learn More", href: "#" },
};

// "category" must match one of eventCategories above so the filter works.
export const upcomingEvents = [
  {
    title: "Community Groups",
    category: "Community",
    date: { month: "JUL", day: "12" },
    time: "July 12 – August 22, 2026",
    location: "Online & In Person",
    body: "Join a small group and grow in community throughout the summer season.",
    cta: { label: "Learn More", href: "#" },
    image: {
      description: "Placeholder: photo of a community group gathered in discussion.",
      source: "/images/events/community-groups.jpg",
    },
  },
  {
    title: "Joy Service",
    category: "Worship",
    date: { month: "AUG", day: "16" },
    time: "9:00 AM",
    location: "Main Campus, Rm 112 & 113",
    body: "An inclusive worship experience for individuals with disabilities and their families.",
    cta: { label: "Learn More", href: "#" },
    image: {
      description: "Placeholder: photo from an inclusive worship gathering.",
      source: "/images/events/joy-service.jpg",
    },
  },
  {
    title: "Founder's Day",
    category: "Worship",
    date: { month: "SEP", day: "13" },
    time: "9:00 AM",
    location: "Main Campus",
    body: "A special service honoring the founding vision and legacy of the church.",
    cta: { label: "Learn More", href: "#" },
    image: {
      description: "Placeholder: photo of a Founder's Day service.",
      source: "/images/events/founders-day.jpg",
    },
  },
  {
    title: "Resurrection Sunday",
    category: "Worship",
    date: { month: "APR", day: "05" },
    time: "9:00 AM CT",
    location: "Sanctuary",
    body: "Celebrate the power of the resurrection and new life in Christ.",
    cta: { label: "Learn More", href: "#" },
    image: {
      description: "Placeholder: photo of an Easter/Resurrection Sunday service.",
      source: "/images/events/resurrection-sunday.jpg",
    },
  },
  {
    title: "Church Anniversary Celebration",
    category: "Community",
    date: { month: "JUL", day: "05" },
    time: "9:00 AM CT",
    location: "Sanctuary",
    body: "Celebrate God's faithfulness as we mark another year as a church family.",
    cta: { label: "Learn More", href: "#" },
    image: {
      description: "Placeholder: photo of a church anniversary celebration.",
      source: "/images/events/anniversary.jpg",
    },
  },
  {
    title: "Women's Conference",
    category: "Conference",
    date: { month: "JUL", day: "30" },
    time: "Various Times",
    location: "Off-Site Venue",
    body: "A gathering designed for women ready to grow in faith, purpose, and community.",
    cta: { label: "Register Now", href: "#" },
    image: {
      description: "Placeholder: photo from a women's conference session.",
      source: "/images/events/womens-conference.jpg",
    },
  },
  {
    title: "Youth Conference",
    category: "Youth & Kids",
    date: { month: "JUL", day: "30" },
    time: "Various Times",
    location: "Off-Site Venue",
    body: "A weekend for the next generation to grow through mentorship and connection.",
    cta: { label: "Register Now", href: "#" },
    image: {
      description: "Placeholder: photo from a youth conference gathering.",
      source: "/images/events/youth-conference.jpg",
    },
  },
  {
    title: "Men's Conference",
    category: "Conference",
    date: { month: "SEP", day: "10" },
    time: "Various Times",
    location: "Church Ballroom",
    body: "A transformative weekend calling men higher in their purpose.",
    cta: { label: "Register Now", href: "#" },
    image: {
      description: "Placeholder: photo from a men's conference session.",
      source: "/images/events/mens-conference.jpg",
    },
  },
];

export const recurringGatherings = [
  {
    title: "Sunday Service",
    cadence: "Every Sunday",
    body: "Worship, powerful teaching, and community every Sunday morning.",
    cta: { label: "Join Us", href: "/visit" },
    image: {
      description: "Placeholder: photo of a Sunday morning worship service.",
      source: "/images/events/sunday-service.jpg",
    },
  },
  {
    title: "Wednesday Service",
    cadence: "Every Wednesday",
    body: "Midweek renewal through worship, the Word, and prayer.",
    cta: { label: "Join Us", href: "/visit" },
    image: {
      description: "Placeholder: photo of a Wednesday midweek service.",
      source: "/images/events/wednesday-service.jpg",
    },
  },
  {
    title: "Accessible Joy Service",
    cadence: "Every fourth Sunday",
    body: "An inclusive worship experience where individuals with disabilities and their families gather to celebrate God's love in community.",
    cta: { label: "Join Us", href: "/stream" },
    image: {
      description: "Placeholder: photo of an inclusive worship gathering.",
      source: "/images/events/joy-service-recurring.jpg",
    },
  },
];

export const eventTestimonial = {
  quote:
    "Placeholder testimonial about how a conference or gathering changed this attendee's perspective and prepared them to serve with purpose.",
  name: "Attendee Name",
  role: "Conference Attendee",
  image: {
    description:
      "Placeholder: photo from a conference or gathering used as the testimonial backdrop.",
    source: "/images/events/testimonial-backdrop.jpg",
  },
  cta: { label: "Volunteer With Us", href: "/community" },
};
