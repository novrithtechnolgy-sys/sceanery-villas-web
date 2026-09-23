import FollowUsSection from "../components/Gallery/FollowUsSection";
import GallerySections from "../components/Gallery/GallerySections";
import GalleryHero from "../components/Gallery/Hero";
import Seenenough from "../components/Gallery/Seenenough";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
    title: "Photo Gallery | Scenery Villas Collection Bentota",
    description: "Explore the visual world of Scenery Villas. View photos of our luxury villas, tropical gardens, infinity pools, and dining experiences in Bentota.",
}

export default function Gallery() {
    return(
            <>
      <Navbar />
      <PageHero 
        title="Gallery"
        paragraph="Take a closer look at life in our sanctuaries. From golden hour sunsets at Villa Mandalay to the colonial details of Tara Garden, let the images speak for themselves." 
        image="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789196611/b8bbd0802d62e98de65bc7558c36d4a991926b65.jpg" />
      <GallerySections />     
      <FollowUsSection/>
    </>
    )

}