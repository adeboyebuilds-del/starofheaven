import CommunityHero from "@/components/CommunityHero";
import SalvationSection from "@/components/SalvationSection";
import BaptismSection from "@/components/BaptismSection";
import MembershipSection from "@/components/MembershipSection";
import PartnerSection from "@/components/PartnerSection";
import VolunteerSection from "@/components/VolunteerSection";
import CommunityGroupsSection from "@/components/CommunityGroupsSection";
import CommunityClosing from "@/components/CommunityClosing";

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <SalvationSection />
      <BaptismSection />
      <MembershipSection />
      <PartnerSection />
      <VolunteerSection />
      <CommunityGroupsSection />
      <CommunityClosing />
    </>
  );
}
