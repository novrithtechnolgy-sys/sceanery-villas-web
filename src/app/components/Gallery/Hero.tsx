"use client";

import Image from "next/image";

export default function GalleryHero() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[28px] md:rounded-b-[28px] h-[420px] md:h-[520px] lg:h-[600px]">

        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg"
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
            Gallery
          </h1>

          <p className="mt-6 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
            Visual Stories from the Coast        
          </p>
          <p className="mt-12 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
            Take a closer look at life in our sanctuaries. From golden hour sunsets at Villa Mandalay to the colonial details of Tara Garden, let the images speak for themselves.
          </p>

        </div>

      </div>
    </section>
  );
}