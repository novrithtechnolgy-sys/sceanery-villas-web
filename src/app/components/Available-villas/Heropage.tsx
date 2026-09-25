"use client";

import Image from "next/image";
import BookingBar from "../BookingBar";

export default function AvailableVillasHero() {
  return (
    <section className="relative -mt-16  md:-mt-18 p-[16px] md:p-[20px]">
      <div className="py-[32px] relative overflow-hidden rounded-t-[20px] rounded-b-[20px] h-[60vh] md:h-[90vh]">

        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772963539/IMG-20250927-WA0040_dsqccu.jpg"
          alt="Luxury Villa"
          fill
          priority
          quality={75}
          className="object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-8 text-center md:pb-10">

          <h1 className="max-w-[300px] font-heading text-[26px] font-bold leading-tight tracking-wide text-white md:max-w-[1000px] md:text-[34px] xl:text-[44px] mb-8">
            Available Villas
          </h1>

          <div className="hidden md:block">

          <BookingBar />

          </div>

        </div>

      </div>
    </section>
  );
}