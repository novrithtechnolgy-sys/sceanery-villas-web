"use client";

import { useMemo, useState } from "react";
import TabBar from "./TabBar";
import VillaHero from "./VillaHero";
import OverviewTab from "./OverviewTab";
import GalleryTab from "./GalleryTab";
import AmenitiesTab from "./AmenitiesTab";
import TourTab from "./TourTab";
import MapTab from "./MapTab";
import Navbar from "../Navbar";
import FeatureTab from "./FeatureTab";
import VillaGalleryCarousel from "./VillaGalleryCarousel";
import MobileBookingBar from "../MobileBookingBar";


export default function VillaTabs({ villa }: { villa: any }) {

  return (
    <>
    <Navbar />
    <main className="bg-white">
      <VillaHero villa={villa} />
      <OverviewTab villa={villa} />
      <GalleryTab villa={villa} />
      <FeatureTab villa={villa} />
      <AmenitiesTab villa={villa} />
      <VillaGalleryCarousel items={villa.carouselImages || []} />
      <TourTab villa={villa} />
      <MapTab villa={villa} />
    </main>
      <MobileBookingBar
        price={20200}
        title={villa.title}
      />
    </>
  );
}