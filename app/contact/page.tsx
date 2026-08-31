import ContactHero from "@/components/ContactHero";
import QuickLinksGrid from "@/components/QuickLinksGrid";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import VisitMapSection from "@/components/VisitMapSection";
import ContactClosing from "@/components/ContactClosing";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <QuickLinksGrid />
      <ContactForm />
      <FAQAccordion />
      <VisitMapSection />
      <ContactClosing />
    </>
  );
}
