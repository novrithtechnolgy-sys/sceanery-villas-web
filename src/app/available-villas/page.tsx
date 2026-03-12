import { Suspense } from "react";
import { connection } from "next/server";
import AvailableVillasClient from "../components/Available-villas/AvailableVillasClient";
import AvailableVillasHero from "../components/Available-villas/Heropage";
import Navbar from "../components/Navbar";

function AvailableVillasFallback() {
  return (
    <section className="min-h-screen pb-20">
      <div className="text-center text-gray-500 py-20">
        Loading available villas...
      </div>
    </section>
  );
}

export default async function AvailableVillasPage() {
  await connection();

  return (
    <>
      <Navbar />
      <AvailableVillasHero />
      <Suspense fallback={<AvailableVillasFallback />}>
        <AvailableVillasClient />
      </Suspense>
    </>
  );
}