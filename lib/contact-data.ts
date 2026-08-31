import {
  FaMapLocationDot,
  FaHandsPraying,
  FaPlay,
  FaHandHoldingHeart,
  FaCalendarDays,
} from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { site } from "@/lib/data";

export const contactQuickLinks = [
  {
    title: "Plan Your Visit",
    body: "Everything you need to know before you come.",
    cta: { label: "Plan Your Visit", href: "/visit" },
    icon: FaMapLocationDot,
  },
  {
    title: "Get Prayer",
    body: "Call 08023455563 — Monday–Friday, 9 a.m.–5 p.m., and Sunday mornings.",
    cta: { label: "Call for Prayer", href: "tel:+234-8023455563" },
    icon: FaHandsPraying,
  },
  {
    title: "Watch Live",
    body: "Join us online for Sunday and Wednesday services.",
    cta: { label: "Watch Live", href: "/stream" },
    icon: FaPlay,
  },
  {
    title: "Give Online",
    body: "Support the ministry through online giving or by mail.",
    cta: { label: "Ways to Give", href: "/give" },
    icon: FaHandHoldingHeart,
  },
  {
    title: "Upcoming Events",
    body: "See what's happening and find your next opportunity to connect.",
    cta: { label: "What's Coming Up", href: "/events" },
    icon: FaCalendarDays,
  },
  {
    title: "Serve With Us",
    body: "Use your gifts to serve the House and make an impact in your community.",
    cta: { label: "Volunteer", href: "/volunteer" },
    icon: FaHandsHelping,
  },
];

export const faqs = [
  {
    question: "What are your service times?",
    answer: `${site.serviceTimes
      .map((s) => `${s.label} at ${s.time}`)
      .join(", and ")}. Join us in person or watch live online.`,
  },
  {
    question: "What's your address?",
    answer: `${site.location.line1}, ${site.location.line2}`.trim(),
  },
  {
    question: "What happens at Wednesday Night Service?",
    answer:
      "Wednesday nights feature a deeper dive into Sunday's message, or a focused teaching from scripture led by one of our pastors. Every service begins with worship.",
  },
  {
    question: "Where do I send monetary donations?",
    answer: "Bank: FCMB Acct: 0698462017 Stars of Heaven",
  },
  {
    question: "Do you offer accommodations for guests with disabilities?",
    answer:
      "Yes. We provide wheelchair-accessible seating, wide doorways, and assistive listening support to help everyone fully experience worship.",
  },
  {
    question: "Do you offer translation or interpretation services?",
    answer:
      "Yes. Ask at the Connect Desk about language and interpretation support available during service.",
  },
  {
    question: "What are the service times for kids and youth ministries?",
    answer:
      "Kids Ministry (Infants–5th Grade): Sunday, check-in opens 30 minutes before service. Youth Ministry (Teens): Sunday mornings alongside the main service.",
  },
  {
    question: "Where can I find church merchandise?",
    answer:
      "Visit our online shop for apparel and products that help you carry your faith with you.",
  },
];

export const officeHours = [
  { label: "Monday–Friday", value: "9 a.m.–5 p.m." },
  { label: "Sunday", value: "Service time only" },
];

// Placeholder — replace with your actual phone number.
export const contactPhone = "08023455563";
