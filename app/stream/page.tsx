import StreamHero from "@/components/StreamHero";
import ConnectSection from "@/components/ConnectSection";
import OnDemandMessages from "@/components/OnDemandMessages";
import StreamClosing from "@/components/StreamClosing";

export default function StreamPage() {
  return (
    <>
      <StreamHero />
      <ConnectSection />
      <OnDemandMessages />
      <StreamClosing />
    </>
  );
}
