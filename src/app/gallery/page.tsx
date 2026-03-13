import FollowUsSection from "../components/Gallery/FollowUsSection";
import GallerySections from "../components/Gallery/GallerySections";
import GalleryHero from "../components/Gallery/Hero";
import Seenenough from "../components/Gallery/Seenenough";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "Photo Gallery | Scenery Villas Collection Bentota",
    description: "Explore the visual world of Scenery Villas. View photos of our luxury villas, tropical gardens, infinity pools, and dining experiences in Bentota.",
}

export default function Gallery() {
    return(
            <>
      <Navbar />
      <GalleryHero />
      <GallerySections />     
      <FollowUsSection/>
      <Seenenough />
 
    </>
    )

}