"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[20px] md:rounded-b-[20px] h-[420px] md:h-[520px] lg:h-[600px]">

        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772884984/IMG-20250927-WA0043_x4850s.jpg"
          alt="Luxury Villa"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20">

          <h1 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] tracking-wide text-white">
            HOSPITALITY WITH HEART
          </h1>

          <p className="mt-4 md:mt-8 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
            We are not a hotel chain. We are a collection of private homes,
            curated for travelers who seek privacy, authenticity, and a deeper
            connection to Sri Lanka.
          </p>

        </div>

      </div>
    </section>
  );
}