"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
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
    <section className="py-10 md:py-20">
      <Container>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative h-full rounded-[20px] overflow-hidden bg-gray-100">
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
        <div>

          {/* Title */}
          <h2 className="font-[timesTen] text-center md:text-left text-[20px] md:text-[36px] xl:text-[46px]  leading-tight">
            <span className="italic text-gray-700">Featured</span>{" "}
            <span className="font-semibold">Amenities</span>
          </h2>

          {/* Card */}
          <div className="mt-8">

            <ul className="space-y-2 md:space-y-4 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 font-regular border-1 rounded-[20px] p-4 md:p-8 border-gray-300">
              {amenities.map((a, i) => (
                <li key={i} className="flex gap-4 md:gap-8">
                  <span className="mt-[9px] md:mt-[9px] h-2 md:h-5 w-2 md:w-5 rounded-full bg-gray-900"></span>
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