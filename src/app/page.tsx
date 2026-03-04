import DiscoverBentotaSection from "./components/DiscoverBentotaSection";
import Footer from "./components/Footer";
import GuestStories from "./components/GuestStories";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import ReadyEscapeSection from "./components/ReadyEscapeSection";
import VillasCarousel from "./components/VillasCarousel";
import WhyChooseSection from "./components/WhyChooseSection";


export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <VillasCarousel/>
      <WhyChooseSection />
      <DiscoverBentotaSection />
      <GuestStories />
      <ReadyEscapeSection />
  
    </main>
  );
}