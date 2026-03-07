"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Container from "../Container";

export default function WhereWeAreSection() {
  // ✅ Change these to your exact place
  const placeName = "Bentota";
  const lat = 6.41891;
  const lng = 80.00597;

  // ✅ Google Maps embed (simple + no API key)
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=10&output=embed`;

  // ✅ Directions button link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Map */}
          <div className="rounded-[28px] overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
            <div className="relative w-full h-[460px] md:h-[520px]">
              <iframe
                title={`${placeName} map`}
                src={embedSrc}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="pt-2 text-center md:text-left order-first lg:order-last">
            <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight text-gray-900">
              <span className="italic font-medium">Where</span>{" "}
              <span className="font-semibold">We Are</span>
            </h2>

            <p className="mt-4 md:mt-8 max-w-[520px] font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] leading-8 text-gray-700">
              Our collection is located along the southern coast of Sri Lanka,
              centered around the towns of Bentota, Aluthgama, and Dharga Town.
            </p>

            <div className="mt-8 flex flex-col items-center md:flex-row gap-4 max-w-[620px]">
              <div className="md:-mt-9 h-10 w-10  rounded-full border border-gray-200 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gray-900" />
              </div>

              <p className="text-[14px] md:text-[16px] leading-8 text-gray-700">
                We are approximately 1.5 hours from Colombo via the Southern
                Expressway (E01) and 2.5 hours from Bandaranaike International
                Airport (CMB).
              </p>
            </div>

            <div className="mt-8 hidden md:block ">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-[200px] lg:w-[340px] rounded-full bg-gray-900 text-white px-16 py-3  text-[14px] font-semibold shadow-sm hover:bg-black transition"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="flex justify-center md:hidden">
            <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="md:hidden inline-flex w-[200px] lg:w-[340px] items-center justify-center rounded-full bg-gray-900 text-white py-2 text-[14px] font-semibold shadow-sm hover:bg-black transition"
              >
                Get Directions
              </a>
            </div>
        </div>
      </Container>
    </section>
  );
}