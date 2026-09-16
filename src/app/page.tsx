import DiscoverBentotaSection from "./components/Home/DiscoverBentotaSection";
import Footer from "./components/Footer";
import GuestStories from "./components/Home/GuestStories";
import Hero from "./components/Home/Hero";
import IntroSection from "./components/Home/IntroSection";
import JourneySection from "./components/Home/JourneySection";
import Navbar from "./components/Navbar";
import ReadyEscapeSection from "./components/Home/ReadyEscapeSection";
import VillasCarousel from "./components/Home/VillasCarousel";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseSection from "./components/Home/WhyChooseSection";

export const metadata = {
  title: "Scenery Villas Collection | Luxury Villas and Homestays in Bentota Sri Lanka",
  description: "Discover a curated collection of 6 private villas and residences in Bentota and Aluthgama. From hilltop sanctuaries and group retreats to cozy homestays. Book your perfect Sri Lankan escape.",
};

export default function HomePage() {
  return (
    <><main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <VillasCarousel />
      <WhyChooseSection />
      <DiscoverBentotaSection />
      <GuestStories />
      <JourneySection />
      <ReadyEscapeSection />

    </main>
    <WhatsAppButton /></>
  );
}