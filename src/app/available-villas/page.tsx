import AvailableVillasClient from "../components/Available-villas/AvailableVillasClient";
import AvailableVillasHero from "../components/Available-villas/Heropage";
import Navbar from "../components/Navbar";


export default function AvailableVillasPage() {
  return(
  <>
  <Navbar />
  <AvailableVillasHero/>
      <Suspense fallback={<div className="py-20 text-center">Loading villas...</div>}>
        <AvailableVillasClient />
      </Suspense>
  </>
  )
}
   