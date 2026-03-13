import AboutHero from "../components/About/AboutHero";
import ExperienceDifference from "../components/About/ExperienceDifference";
import FounderNote from "../components/About/FounderNote";
import JoinOurJourney from "../components/About/JoinOurJourney";
import MeetYourHosts from "../components/About/MeetYourHosts";
import SceneryStory from "../components/About/SceneryStory";
import WhyDifferent from "../components/About/WhyDifferent";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Scenery Villas Collection | Our Story & Vision",
  description: "Meet the team behind Scenery Villas. Founded by Shashindu de Silva, we are a collection of private villas in Bentota dedicated to authentic Sri Lankan hospitality and personalized service.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <SceneryStory />
            <FounderNote />
            <WhyDifferent />
            <MeetYourHosts />
            <JoinOurJourney />
            <ExperienceDifference />
        </>
    );
}