import {
  FaCommentDots,
  FaPaypal,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaHandHoldingHeart,
  FaPeopleGroup,
} from "react-icons/fa6";

export const givingWays = [
  {
    title: "USSD",
    body: "Church Account  0698462017: Bank: FCMB",
    icon: FaCommentDots,
  },
  {
    title: "PayPal",
    body: "Use your PayPal account to give online through our secure system.",
    icon: FaPaypal,
  },
  {
    title: "Bank Transfer",
    body: "For bank transfers please send all donations to 0698462017 FCMB Stars of Heaven",
    icon: FaPhone,
  },
  {
    title: "Online Pay",
    body: "Use our secure system to donate online using your ATM card",
    icon: FaEnvelope,
  },
];

// "raisedPercent" is placeholder data for the progress bar — wire this up
// to real numbers (or remove it) once you're tracking actual totals.
export const campaigns = [
  {
    title: "Missions",
    goal: "₦5,000,000",
    raisedPercent: 35,
    body: "Support our global outreach efforts to bring hope and healing to communities around the world.",
    icon: FaGlobe,
  },
  {
    title: "Benevolence",
    goal: "₦2,500,000",
    raisedPercent: 60,
    body: "Help families in crisis with emergency assistance, food, shelter, and essential resources.",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Community Outreach",
    goal: "₦300,000",
    raisedPercent: 20,
    body: "Fund local programs that transform neighborhoods through education, mentorship, and care.",
    icon: FaPeopleGroup,
  },
];
