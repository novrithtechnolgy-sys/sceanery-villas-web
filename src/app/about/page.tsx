import ExperienceDifference from "../components/About/ExperienceDifference";
import FounderNote from "../components/About/FounderNote";
import GiveBackSection from "../components/About/GiveBackSection";
import JoinOurJourney from "../components/About/JoinOurJourney";
import MeetYourHosts from "../components/About/MeetYourHosts";
import SceneryStory from "../components/About/SceneryStory";
import WhyDifferent from "../components/About/WhyDifferent";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "About Scenery Villas Collection | Our Story & Vision",
  description: "Meet the team behind Scenery Villas. Founded by Shashindu de Silva, we are a collection of private villas in Bentota dedicated to authentic Sri Lankan hospitality and personalized service.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Hospitality"
                highlightTitle="Built from a Love for Sri Lanka"
                paragraph="We are not a hotel chain. We are a collection of private homes, curated for travelers who seek privacy, authenticity, and a deeper connection to Sri Lanka."
                image="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789790151/c28c691848d9f0cf08e054d3032a4a2ed0ad9302.jpg"
             />
            <SceneryStory />
            <FounderNote />
            <WhyDifferent />
            <MeetYourHosts />
            <GiveBackSection />
            <JoinOurJourney />
            <ExperienceDifference />
        </>
    );
}