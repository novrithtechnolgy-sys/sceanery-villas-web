import ExperiencesSections from "../components/Experiences/ExperiencesSections";
import ExperiencesHero from "../components/Experiences/Hero";
import Navbar from "../components/Navbar";


export default function ExperiencesPage() {
    return (
        <>
            <Navbar />
            <ExperiencesHero />
            <ExperiencesSections />
        </>
    );
}