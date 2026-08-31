import GiveHero from "@/components/GiveHero";
import GivingImpact from "@/components/GivingImpact";
import WaysToGive from "@/components/WaysToGive";
import VolunteerCTA from "@/components/VolunteerCTA";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import GiveClosing from "@/components/GiveClosing";

export default function GivePage() {
  return (
    <>
      <GiveHero />
      <GivingImpact />
      <WaysToGive />
      <VolunteerCTA />
      <FeaturedCampaigns />
      <GiveClosing />
    </>
  );
}
