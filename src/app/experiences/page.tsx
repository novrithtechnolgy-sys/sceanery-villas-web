import { title } from "process";
import ExperiencesSections from "../components/Experiences/ExperiencesSections";
import ExperiencesHero from "../components/Experiences/Hero";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "Experiences in Bentota | Dining, Wellness and Adventure by Scenery Villas ",
    description: "Discover the best local experiences at Scenery Villas. From cultural adventures to nature walks, our curated collection of experiences will take you on a journey of discovery.",
}
export default function ExperiencesPage() {
    return (
        <>
            <Navbar />
            <ExperiencesHero />
            <ExperiencesSections />
        </>
    );
}