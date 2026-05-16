import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
