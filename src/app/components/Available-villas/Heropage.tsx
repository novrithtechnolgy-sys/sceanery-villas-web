"use client";

import Image from "next/image";

export default function AvailableVillasHero() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[28px] md:rounded-b-[28px] h-[420px] md:h-[520px] lg:h-[600px]">

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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20">

          <h1 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] tracking-wide text-white uppercase">
            Available Villas
          </h1>

        </div>

      </div>
    </section>
  );
}