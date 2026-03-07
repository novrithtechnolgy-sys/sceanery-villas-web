"use client";

import Image from "next/image";

export default function BlogsHero() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[20px] md:rounded-b-[20px] h-[420px] md:h-[520px] lg:h-[600px]">

        {/* Background Image */}
        <Image
          src="/208bb3164c040ef306a0874503fa5da68c734180.jpg"
          alt="Luxury Villa"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20">

          <h1 className="font-[timesTen] uppercase text-[20px] md:text-[36px] xl:text-[46px] tracking-wide text-white">
            The Bentota Journal
          </h1>
          <p className="mt-4 md:mt-8 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
           Stories, guides, and inspiration from the southern coast.    
           </p>
          <p className="mt-4 md:mt-12 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
           Whether you are planning your itinerary or just dreaming of the tropics, explore our curated articles on the best of Sri Lankan culture, food, and travel.
          </p>

        </div>

      </div>
    </section>
  );
}