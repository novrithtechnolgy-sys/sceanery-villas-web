import { title } from "process";
import ExperiencesSections from "../components/Experiences/ExperiencesSections";
import ExperiencesHero from "../components/Experiences/Hero";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHero from "../components/PageHero";

export const metadata = {
    title: "Experiences in Bentota | Dining, Wellness and Adventure by Scenery Villas ",
    description: "Discover the best local experiences at Scenery Villas. From cultural adventures to nature walks, our curated collection of experiences will take you on a journey of discovery.",
}
export default function ExperiencesPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Beyond the Villa"
                paragraph="A stay at Scenery Villas is more than just a room. It is your gateway to the culture, nature, and flavors of the southern coast. Our team has handpicked the best local experiences to ensure you see the real Sri Lanka."
                image="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789468302/ac580694da08d2772eb078d7cefa92075f10eb83.jpg"
            />
            <ExperiencesSections />
        </>
    );
}