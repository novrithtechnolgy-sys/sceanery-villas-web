"use client";

import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";
import Container from "../Container";

export default function AmenitiesTab({ villa }: { villa: any }) {
  const amenities: string[] = villa.amenities ?? [];
  const img = villa.amenitiesImage
    ? urlFor(villa.amenitiesImage).width(1200).quality(85).url()
    : "";

  if (!amenities.length) {
    return (
      <div className="text-sm text-gray-600">
        No amenities added yet.
      </div>
    );
  }

  return (
    <section className="py-[32px] md:py-[64px]">
      <Container>
      <div className="grid md:grid-cols-2 md:gap-16 items-center mt-8 md:mt-0 ">

        {/* LEFT IMAGE */}
        <div className="relative mt-8 md:mt-0 h-[300px] md:h-[460px] rounded-[20px] overflow-hidden bg-gray-100 order-last md:order-first">
          {img && (
            <Image
              src={img}
              alt="Villa amenities"
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-first md:order-last">

          {/* Title */}
        <h2 className="                font-heading
                text-[22px]
                font-bold
                tracking-[-0.5px]
                text-gray-900
                md:text-[32px]
                md:leading-[42px]
                xl:text-[38px]
                xl:leading-[48px]
                text-center
                md:text-left
                ">
            <span className="text-gray-700">Featured</span>{" "}
            <span className="font-semibold text-[#FF751F]">Amenities</span>
        </h2>

          {/* Card */}
          <div className="mt-4 md:mt-8">

            <ul className="space-y-2 md:space-y-4 font-body text-[14px] md:text-[16px]  text-gray-700 font-regular  border-gray-300">
              {amenities.map((a, i) => (
                <li key={i} className="flex gap-4 md:gap-8">
                  <span className="mt-[5px] md:mt-[9px] md:mt-[12px] h-2 md:h-2 w-2 md:w-2 rounded-full bg-gray-900"></span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </Container>
    </section>
  );
}