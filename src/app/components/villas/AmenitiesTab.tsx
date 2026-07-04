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
    <section className="py-10 md:py-20">
      <Container>
        <h2 className="font-heading text-center text-[24px] md:text-[36px] xl:text-[46px]  leading-tight">
            <span className="italic text-gray-700">Featured</span>{" "}
            <span className="font-semibold text-[#FF751F]">Amenities</span>
        </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center mt-8 md:mt-16">

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative h-[460px] rounded-[20px] overflow-hidden bg-gray-100">
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


          {/* Card */}
          <div className="">

            <ul className="space-y-2 md:space-y-4 font-body text-[15px] md:text-[20px] xl:text-[24px] text-gray-700 font-regular  border-gray-300">
              {amenities.map((a, i) => (
                <li key={i} className="flex gap-4 md:gap-8">
                  <span className="mt-[9px] md:mt-[12px] h-2 md:h-2 w-2 md:w-2 rounded-full bg-gray-900"></span>
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