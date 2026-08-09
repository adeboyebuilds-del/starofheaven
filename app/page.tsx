import Hero from "@/components/Hero";
import FeatureRow from "@/components/FeatureRow";
import AboutVisit from "@/components/AboutVisit";
import RootedInFaith from "@/components/RootedInFaith";
import EngageSteps from "@/components/EngageSteps";
import EventsSection from "@/components/EventsSection";
import Ministries from "@/components/Ministries";
import PodcastCTA from "@/components/PodcastCTA";
import { featureRows } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

    
        <FeatureRow />


      <AboutVisit />
      <RootedInFaith />
      <EngageSteps />
      <EventsSection />
      <Ministries />
      <PodcastCTA />
    </>
  );
}
