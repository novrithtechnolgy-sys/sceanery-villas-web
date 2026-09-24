"use client";

import Image from "next/image";
import {
  BedDouble,
  PersonStanding,
  Mountain,
  House,
} from "lucide-react";

import { FaSwimmer , FaTree ,FaUtensils,FaHeart,FaHome, FaLandmark,} from "react-icons/fa";

import { urlFor } from "../../../sanity/lib/image";
import Container from "../Container";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";

export default function VillaHero({
  villa,
}: {
  villa: any;
}) {
  const heroUrl = villa.heroImage
    ? urlFor(villa.heroImage)
        .width(2200)
        .quality(85)
        .url()
    : "";

  const logoUrl = villa.logo
    ? urlFor(villa.logo)
        .width(600)
        .quality(100)
        .url()
    : "";

  /* =========================================================
     GET ICON FOR STAT
  ========================================================= */

  const getStatIcon = (label: string) => {
    const text = label?.toLowerCase() || "";

    if (
      text.includes("bed") ||
      text.includes("bedroom")
    ) {
      return BedDouble;
    }

    if (
      text.includes("sleep") ||
      text.includes("guest")
    ) {
      return PersonStanding;
    }

    if (
      text.includes("pool") ||
      text.includes("swim")
    ) {
      return FaSwimmer;
    }

    if (
      text.includes("view") ||
      text.includes("panoramic")
    ) {
      return Mountain;
    }

    if (
      text.includes("forest") ||
      text.includes("garden")
    ) {
      return FaTree;
    }

    if (
      text.includes("meals") ||
      text.includes("dining")
    ) {
      return FaUtensils;
    }

    if (
      text.includes("suite") ||
      text.includes("bath")
    ) {
      return BedDouble;
    }

    if (
      text.includes("living spaces") ||
      text.includes("private balconies")
    ) {
      return FaHome;
    }

    if (
      text.includes("colonial architecture")
    ) {
      return FaLandmark ;
    }

    if(
      text.includes("5 minutes to beach")
    ){
      return FaUmbrellaBeach  ;
    }

    if (
      text.includes("rooftop terrace")
    ) {
      return House;
    }

    return Mountain;
  };

  const heroStats = villa.heroStats || [];
  console.log(villa);

  return (
    <section className="relative -mt-16 p-[16px]">

      <div className="relative h-[60vh] overflow-hidden rounded-[20px] md:h-[90vh] md:rounded-b-[20px]">

        {heroUrl && (
          <Image
            src={heroUrl}
            alt={villa.title || "Villa"}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        )}

        {/* =================================================
            DARK OVERLAY
        ================================================= */}

        <div className="absolute inset-0 bg-black/40" />

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-8 text-center md:pb-20">
          {/* =================================================
              TITLE
          ================================================= */}

          <h1 className="max-w-[300px] font-heading text-[26px] font-bold leading-tight tracking-wide text-white md:max-w-[1000px] md:text-[34px] xl:text-[44px]">
            {villa.title}
          </h1>

          {/* =================================================
              TAGLINE
          ================================================= */}

          {villa.tagline && (
            <p className="mt-4 max-w-[300px] font-body text-[14px] font-normal leading-[26px] text-white md:mt-6 md:max-w-5xl md:text-[16px] md:leading-[30px] xl:text-[16px]">
              {villa.tagline}
            </p>
          )}

          {/* =================================================
              HERO STATS
          ================================================= */}

          {/* {heroStats.length > 0 && ( */}
            <div className="mt-5 flex items-center justify-center rounded-full bg-white px-5 py-3 md:mt-8 md:px-7 md:py-4">
              {heroStats
                .slice(0, 4)
                .map(
                  (
                    stat: any,
                    index: number
                  ) => {
                    const Icon =
                      getStatIcon(
                        stat.label
                      );

                    return (
                      <div
                        key={
                          stat._key ||
                          index
                        }
                        className="flex items-center"
                      >
                        {/* =================================
                            MOBILE
                        ================================= */}

                        <div className="flex items-center gap-2 md:hidden">
                          <Icon
                            size={20}
                            strokeWidth={2.2}
                            className="text-black"
                          />
                          {String(stat.value).toLowerCase() !== "yes" && (
                            <span className="font-body text-[14px] font-semibold text-black">
                              {stat.value}
                            </span>
                          )}
                        </div>

                        {/* =================================
                            DESKTOP
                        ================================= */}

                        <div className="hidden items-center whitespace-nowrap font-body text-[14px] text-gray-900 md:flex">  
                        <span className="ml-1">
                            {stat.label}
                          </span>
                        </div>

                        {/* =================================
                            DIVIDER
                        ================================= */}

                        {index <
                          Math.min(
                            heroStats.length,
                            4
                          ) -
                            1 && (
                          <span className="mx-4 h-5 w-px bg-gray-400 md:mx-6"/>
                        )}
                      </div>
                    );
                  }
                )}
            </div>
          {/* )} */}
        </div>
      </div>

      {/* =====================================================
          VILLA LOGO
      ===================================================== */}

      {logoUrl && (
        <div className="relative pt-[32px] md:pt-[64px] md:mb-12">
          <Container>
            <div className="flex justify-center">
              <div className="relative h-[120px] w-full md:h-[160px] lg:h-[120px]">
                <Image
                  src={logoUrl}
                  alt={`${villa.title} Logo`}
                  fill
                  quality={100}
                  sizes="600px"
                  className="object-contain"
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}