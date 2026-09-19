"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";

export default function TourTab({ villa }: { villa: any }) {
  const tour = villa?.virtualTour;

  if (!tour) {
    return null;
  }

  const tourImageUrl = tour.tourImage
    ? urlFor(tour.tourImage)
        .width(1200)
        .quality(85)
        .url()
    : "";

  return (
    <section className="py-[32px] md:py-[64px]">
      <Container>
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">

          {/* =====================================================
              LEFT TEXT
          ===================================================== */}
          <div>
            <h2
              className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center md:text-left">
              {tour.headingItalic && (
                <span className="">
                  {tour.headingItalic}
                </span>
              )}

              {tour.headingBold && (
                <>
                  {" "}
                  <span className="text-[#FF751F]">
                    {tour.headingBold}
                  </span>
                </>
              )}
            </h2>

            {tour.description && (
              <p className="mt-4 font-body font-regular text-[14px] leading-[26px] text-gray-700 md:mt-8 md:text-[16px] lg:leading-[30px] text-center md:text-left">
                {tour.description}
              </p>
            )}
          </div>

          {/* =====================================================
              RIGHT TOUR IMAGE
          ===================================================== */}
          <div
            className="
              relative
              h-[300px]
              w-full
              overflow-hidden
              rounded-[20px]
              bg-gray-100
              md:h-[440px]
            "
          >
            {tourImageUrl ? (
              <Image
                src={tourImageUrl}
                alt={`${villa?.title || "Villa"} virtual tour`}
                fill
                priority={false}
                quality={85}
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Tour image not available
              </div>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}