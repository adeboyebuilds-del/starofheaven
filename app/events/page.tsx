import EventsHero from "@/components/EventsHero";
import FeaturedEvent from "@/components/FeaturedEvent";
import HouseCalendar from "@/components/HouseCalendar";
import UpcomingEvents from "@/components/UpcomingEvents";
import RecurringGatherings from "@/components/RecurringGatherings";
import MomentsTestimonial from "@/components/MomentsTestimonial";
import ServeCTA from "@/components/ServeCTA";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <FeaturedEvent />
      <HouseCalendar />
      <UpcomingEvents />
      <RecurringGatherings />
      <MomentsTestimonial />
      <ServeCTA />
    </>
  );
}
