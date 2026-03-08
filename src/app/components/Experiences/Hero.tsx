"use client";

import Image from "next/image";

export default function ExperiencesHero() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[20px] md:rounded-b-[20px] h-[420px] md:h-[520px] lg:h-[600px]">

        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772962380/IMG-20250927-WA0045_1_qewmks.jpg"
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
            Beyond the Villa
          </h1>
          <p className="mt-4 md:mt-8 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
           Curated Adventures and Soulful Experiences          
           </p>
          <p className="mt-4 md:mt-8 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
A stay at Scenery Villas is more than just a room. It is your gateway to the culture, nature, and flavors of the southern coast. Our team has handpicked the best local experiences to ensure you see the real Sri Lanka.
          </p>

        </div>

      </div>
    </section>
  );
}