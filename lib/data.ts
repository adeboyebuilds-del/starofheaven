import { FaHandsPraying, FaUsers, FaHeart, FaCalendarCheck } from "react-icons/fa6";
export const site = {
  name: "Stars of Heaven Parish",
  shortName: "Stars of Heaven",
  logo: "/images/logo2.png",
  serviceTimes: [
    { label: "Sundays", time: "8:30 AM & 9:00 AM" },
    { label: "Wednesdays", time: "6:30 PM" },
  ],
  location: {
    line1: "106 Okesuna Street",
    line2: "Lafiaji Lagos Nigeria ",
  },
  social: [
    { label: "Twitter", href: "#", icon:"FaTwitter" },
    { label: "Facebook", href: "#", icon:"FaFacebookF" },
    { label: "Instagram", href: "#", icon:"FiInstagram" },
    { label: "LinkedinIn", href: "#" , icon:"FaLinkedinIn"},
  ],
};

export const primaryNav = [
  { label: "Plan Your Visit", href: "/visit" },
  { label: "Give", href: "/give" },
  { label: "Livestream", href: "/stream" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

export const featureRows = [
  {
    eyebrow: "A Word to",
    title: "Anchor Your Week",
    body: "Join us for timely, life-giving messages that strengthen your faith and speak to your season.",
    cta: { label: "Watch Message", href: "/stream" },
    image: {
      alt: "Pastor delivering a sermon on stage under warm stage lighting",
      description:
        "Placeholder: wide photo of the pastor mid-message on the main stage, warm gold stage lighting, congregation visible in soft focus foreground.",
        source:"/images/preaching.png",
    },
    imageSide: "right" as const,
  },
  {
    eyebrow: "There's",
    title: "A Place for You",
    body: "Discover community where you can grow, serve, and belong.",
    cta: { label: "Find Your Community", href: "/community" },
    image: {
      alt: "Small group of church members talking and laughing together",
      description:
        "Placeholder: candid photo of a small group / community circle gathered in a lobby or living room, genuine conversation, mixed ages.",
        source:"/images/lobby.png",
    },
    imageSide: "left" as const,
  },
  {
    eyebrow: "Stream With Us",
    title: "Anytime, Anywhere",
    body: "Take the message with you. Worship, teaching, and inspiration on demand.",
    cta: { label: "Listen to Podcast", href: "/podcast" },
    image: {
      alt: "Person listening to church podcast on headphones",
      description:
        "Placeholder: lifestyle photo of a person listening on headphones/phone — commuting, at a desk, or on a walk — podcast app UI subtly visible.",
        source:"/images/podcast.png",
    },
    imageSide: "right" as const,
  },
];

export const nextSteps = [
  {
    title: "Accept Christ",
    body: "Begin your new journey of faith and discover what it means to follow Jesus.",
    icon: FaHandsPraying,
    
    image: { 
      description: "Placeholder: Person praying or responding to ministry.",
      source: "/images/engage1.png",
     }
  },
  {
    title: "Join a Group",
    body: "Connect authentically and grow together in a community tailored for you.",
    icon: FaUsers,
    image: { description: "Placeholder: Small group sharing circles." ,
      source: "/images/engage9.png",}
  },
  {
    title: "Serve",
    body: "Use your unique gifts to make an impact in the house and the community.",
    icon: FaHeart,
    image: { description: "Placeholder: Volunteers serving with joy." ,
      source: "/images/engage.png",}
  },
  {
    title: "Get Baptized",
    body: "Publicly declare your faith and new life in Christ through water baptism.",
    icon: FaCalendarCheck,
    image: { description: "Placeholder: Baptism celebration moment." ,
      source: "/images/engage4.jpg",}
  }
];
export const events = [
  {
    date: { month: "JUL", day: "12" },
    title: "Community Groups Kickoff",
    time: "July 12 – Aug 22, 2026",
    location: "Online & In Person",
    image: {
      description:
        "Placeholder: photo of a community group session, people seated in a circle mid-discussion.",
        source:"/images/event1.png"
    },
  },
  {
    date: { month: "AUG", day: "09" },
    title: "Joy Service",
    time: "9:00 AM",
    location: "Main Sanctuary",
    image: {
      description:
        "Placeholder: photo of joyful worship — hands raised, bright stage lighting, full congregation.",
        source:"/images/event2.png"
    },
  },
  {
    date: { month: "AUG", day: "16" },
    title: "Back to School Drive",
    time: "9:00 AM",
    location: "Main Sanctuary",
    image: {
      description:
        "Placeholder: photo of backpacks/school supplies laid out on tables for a community giveaway.",
        source:"/images/event3.png"
    },
  },
];

export const ministries = [
  {
    title: "Kids Ministry",
    href: "/ministries/kids",
    image: {
      description:
        "Placeholder: bright, colorful photo of children's classroom activity or worship moment.",
        source:"/images/ministry1.png"
    },
  },
  {
    title: "Youth",
    href: "/ministries/youth",
    image: {
      description:
        "Placeholder: photo of teens gathered at a youth night, energetic lighting, group activity.",
        source:"/images/ministry2.png"
    },
  },
  {
    title: "Counseling",
    href: "/ministries/counseling",
    image: {
      description:
        "Placeholder: calm, warm photo of a counseling room — two chairs, soft light, tissue box on side table.",
        source:"/images/ministry3.png"
    },
  },
  {
    title: "School of Ministry",
    href: "/ministries/school-of-ministry",
    image: {
      description:
        "Placeholder: photo of adults studying/taking notes in a classroom-style ministry training setting.",
        source:"/images/ministry4.png"
    },
  },
];


