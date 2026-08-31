import VisitHero from "@/components/VisitHero";
import ServiceLocationCards from "@/components/ServiceLocationCards";
import VisitSteps from "@/components/VisitSteps";
import ConnectDesk from "@/components/ConnectDesk";
import AssistanceSection from "@/components/AssistanceSection";
import MapCTA from "@/components/MapCTA";

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <ServiceLocationCards />
      <VisitSteps />
      <ConnectDesk />
      <AssistanceSection />
      <MapCTA />
    </>
  );
}
