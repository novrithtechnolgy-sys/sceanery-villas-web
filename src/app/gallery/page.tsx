import FollowUsSection from "../components/Gallery/FollowUsSection";
import GallerySections from "../components/Gallery/GallerySections";
import GalleryHero from "../components/Gallery/Hero";
import Seenenough from "../components/Gallery/Seenenough";
import Navbar from "../components/Navbar";


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