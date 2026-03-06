import AboutHero from "../components/About/AboutHero";
import ExperienceDifference from "../components/About/ExperienceDifference";
import FounderNote from "../components/About/FounderNote";
import JoinOurJourney from "../components/About/JoinOurJourney";
import MeetYourHosts from "../components/About/MeetYourHosts";
import SceneryStory from "../components/About/SceneryStory";
import WhyDifferent from "../components/About/WhyDifferent";
import Navbar from "../components/Navbar";

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